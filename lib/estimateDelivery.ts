import { createHash, createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import { estimateBrief, validateEstimate } from './estimate';

const siteOrigin = 'https://lokeilremodeling.com';
const recipient = 'info@lokeilremodeling.com';
const uuidPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
type Environment = Record<string, string | undefined>;
type Config = { key: string; from: string; secret: string };

export function estimateDeliveryConfig(env: Environment): Config | null {
  const from = env.LOKEIL_ESTIMATE_FROM?.trim();
  // No public form activation until sender verification and a delivered test are reviewed.
  if (env.LOKEIL_ESTIMATE_ENABLED !== 'true' || !env.RESEND_API_KEY ||
      !env.LOKEIL_FORM_SECRET || env.LOKEIL_FORM_SECRET.length < 32 ||
      !from || !/^LOKEIL Renovation <[a-z0-9._+-]+@(?:[a-z0-9-]+\.)*lokeilremodeling\.com>$/.test(from)) return null;
  return { key: env.RESEND_API_KEY, from, secret: env.LOKEIL_FORM_SECRET };
}

export function issueEstimateToken(config: Config, now = Date.now()) {
  const id = randomUUID();
  const payload = `${id}.${now}`;
  return { id, token: `${payload}.${createHmac('sha256', config.secret).update(payload).digest('hex')}` };
}

function verifyToken(token: string, config: Config) {
  const [id, issued, signature, extra] = token.split('.');
  if (extra || !uuidPattern.test(id || '') || !/^\d{13}$/.test(issued || '') || !/^[a-f0-9]{64}$/.test(signature || '')) return null;
  const age = Date.now() - Number(issued);
  if (age < -30_000 || age > 60 * 60_000) return null;
  const expected = createHmac('sha256', config.secret).update(`${id}.${issued}`).digest();
  return timingSafeEqual(expected, Buffer.from(signature, 'hex')) ? id : null;
}

// A small per-instance guard supplements the hosting firewall; it is not a distributed quota.
const recent = new Map<string, { expires: number; ids: Set<string> }>();
function withinLimit(request: Request, config: Config, id: string) {
  const now = Date.now();
  for (const [key, value] of recent) if (value.expires <= now) recent.delete(key);
  const address = request.headers.get('x-vercel-forwarded-for') || request.headers.get('x-forwarded-for') || 'unknown';
  const key = createHmac('sha256', config.secret).update(address.split(',')[0].trim()).digest('hex');
  const entry = recent.get(key) || { expires: now + 10 * 60_000, ids: new Set<string>() };
  if (!entry.ids.has(id) && (entry.ids.size >= 5 || recent.size >= 2000)) return false;
  entry.ids.add(id);
  recent.set(key, entry);
  return true;
}

function allowedOrigin(request: Request, env: Environment) {
  const origin = request.headers.get('origin');
  if (origin === siteOrigin || origin === 'https://www.lokeilremodeling.com') return true;
  if (env.VERCEL_URL && origin === `https://${env.VERCEL_URL}`) return true;
  if (env.NODE_ENV !== 'production') {
    const host = new URL(request.url).origin;
    return origin === host && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(host);
  }
  return false;
}

function reply(request: Request, status: number, data: Record<string, unknown>) {
  const headers = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };
  if (request.headers.get('accept')?.includes('application/json')) return Response.json(data, { status, headers });
  const escape = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));
  const title = status === 202 ? 'Your request was accepted for email delivery.' : 'Your request could not be submitted.';
  const message = status === 202 && typeof data.message === 'string' ? data.message : 'Use your browser Back button to return to the form, or contact LOKEIL by phone or email below.';
  return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} | LOKEIL</title><body style="background:#f1f3e8;color:#293b30;font:18px/1.7 system-ui;max-width:650px;padding:40px 24px;margin:auto"><p>LOKEIL Renovation</p><h1>${title}</h1><p>${escape(message)}</p>${data.reference ? `<p>Reference: ${escape(String(data.reference))}</p>` : ''}<p><a href="${siteOrigin}/contact">Return to the estimate page</a></p><p><a href="tel:+13329993846">Call (332) 999-3846</a> or email <a href="mailto:${recipient}">${recipient}</a>.</p></body></html>`, { status, headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
}

export async function handleEstimatePost(request: Request, env: Environment, transport: typeof fetch = fetch) {
  const config = estimateDeliveryConfig(env);
  if (!config) return reply(request, 503, { message: 'Please use the estimate email or call LOKEIL. Web submission is not available.' });
  if (!allowedOrigin(request, env)) return reply(request, 403, { message: 'Open the estimate page on the LOKEIL website and try again.' });
  if (!request.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded')) return reply(request, 415, { message: 'Use the estimate form to submit your project.' });
  const declaredSize = Number(request.headers.get('content-length') || 0);
  if (declaredSize > 20_000) return reply(request, 413, { message: 'Please shorten your project description.' });
  // Bound the stream as well as Content-Length, which is not guaranteed to be present or accurate.
  const reader = request.body?.getReader();
  if (!reader) return reply(request, 400, { message: 'Please enter your project details.' });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > 20_000) { await reader.cancel(); return reply(request, 413, { message: 'Please shorten your project description.' }); }
      chunks.push(chunk.value);
    }
  } catch { return reply(request, 400, { message: 'We could not read your request. Please retry or use the estimate email.' }); }
  const fields = new URLSearchParams(Buffer.concat(chunks).toString('utf8'));
  if (fields.get('website')) return reply(request, 400, { message: 'Please use the phone or estimate email to contact LOKEIL.' });
  const tokenId = verifyToken(fields.get('token') || '', config);
  if (!tokenId) return reply(request, 400, { code: 'expired', message: 'The form session expired. Your details are still here. Refresh the form session and try again.' });
  const checked = validateEstimate(Object.fromEntries(fields));
  if (!checked.valid) return reply(request, 400, { message: 'Please check the highlighted fields.', fields: checked.errors });
  const brief = estimateBrief(checked.value);
  // Unchanged retries reuse one key; a customer editing the brief starts a distinct request.
  const id = `${tokenId}.${createHash('sha256').update(brief).digest('hex').slice(0, 12)}`;
  if (!withinLimit(request, config, id)) return reply(request, 429, { message: 'Please wait a few minutes, or call or email LOKEIL.' });
  const payload = JSON.stringify({
    from: config.from, to: [recipient], reply_to: checked.value.email,
    subject: `LOKEIL estimate request: ${checked.value.service}`,
    text: `${brief}\n\nRequest reference: ${id}\nSent through ${siteOrigin}/contact`,
    tags: [{ name: 'type', value: 'estimate_request' }],
  });
  let upstreamStatus = 0;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await transport('https://api.resend.com/emails', {
        method: 'POST', headers: { Authorization: `Bearer ${config.key}`, 'Content-Type': 'application/json', 'Idempotency-Key': `lokeil-estimate/${id}` },
        body: payload, signal: AbortSignal.timeout(10_000),
      });
      upstreamStatus = response.status;
      const result = await response.json().catch(() => null);
      if (response.ok && typeof result?.id === 'string' && result.id.length > 0) {
        // Log correlation IDs only. Neither credentials nor customer details enter runtime logs.
        console.info('lokeil_estimate_accepted', { reference: id, emailId: result.id });
        return reply(request, 202, { reference: id, message: 'Your request was accepted for email delivery to LOKEIL. If you do not hear back, call (332) 999-3846 and mention this reference.' });
      }
      if (!(response.status >= 500 || response.status === 429 || result?.name === 'concurrent_idempotent_requests')) break;
    } catch { /* An uncertain send is retried with the same provider idempotency key. */ }
    if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 500));
  }
  console.warn('lokeil_estimate_delivery_unconfirmed', { reference: id, upstreamStatus });
  return reply(request, 502, { message: 'We could not confirm your request was sent. Your details are still here. Retry, or use the estimate email below.' });
}
