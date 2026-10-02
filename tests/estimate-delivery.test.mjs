import test from 'node:test';
import assert from 'node:assert/strict';
import * as crypto from 'node:crypto';
import { loadTypeScriptExports } from './load-ts.mjs';

const estimate = loadTypeScriptExports(new URL('../lib/estimate.ts', import.meta.url));
const delivery = loadTypeScriptExports(new URL('../lib/estimateDelivery.ts', import.meta.url), {
  'node:crypto': crypto, './estimate': estimate,
});
const env = {
  NODE_ENV: 'production', LOKEIL_ESTIMATE_ENABLED: 'true', RESEND_API_KEY: 'test-only-provider-key',
  LOKEIL_ESTIMATE_FROM: 'LOKEIL Renovation <estimates@send.lokeilremodeling.com>',
  LOKEIL_FORM_SECRET: 'unit-test-signing-secret-not-used-by-any-deployment',
};
const config = delivery.estimateDeliveryConfig(env);
const details = {
  name: 'Example Customer', email: 'customer@example.com', phone: '', neighborhood: '11385',
  service: 'Tile installation', details: 'Replace the old tile around the tub.', timing: '', heardFrom: 'Not sure',
};
let ip = 0;
const request = (fields = {}, headers = {}) => new Request('https://lokeilremodeling.com/api/estimate', {
  method: 'POST', headers: { Origin: 'https://lokeilremodeling.com', Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded', 'x-forwarded-for': `test-${++ip}`, ...headers },
  body: new URLSearchParams({ ...details, token: delivery.issueEstimateToken(config).token, website: '', ...fields }),
});
const accepted = async () => Response.json({ id: 'test-provider-reference' });

test('submission stays disabled without explicit activation and its own sender configuration', async () => {
  assert.equal(delivery.estimateDeliveryConfig({ ...env, LOKEIL_ESTIMATE_ENABLED: undefined }), null);
  assert.equal(delivery.estimateDeliveryConfig({ ...env, RESEND_API_KEY: undefined }), null);
  assert.equal(delivery.estimateDeliveryConfig({ ...env, LOKEIL_ESTIMATE_FROM: 'Other <x@metroglasspro.com>' }), null);
  const result = await delivery.handleEstimatePost(request(), {}, () => { throw new Error('Must not send'); });
  assert.equal(result.status, 503);
});

test('valid brief goes only to the LOKEIL inbox with a verified sender and customer reply address', async () => {
  let sent;
  const response = await delivery.handleEstimatePost(request({ to: 'unexpected@example.com', from: 'forged@example.com' }), env, async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    sent = JSON.parse(options.body);
    return accepted();
  });
  assert.equal(response.status, 202);
  assert.deepEqual(sent.to, ['info@lokeilremodeling.com']);
  assert.equal(sent.from, env.LOKEIL_ESTIMATE_FROM);
  assert.equal(sent.reply_to, details.email);
  assert.match(sent.text, /How I found LOKEIL: Not sure/);
  const receipt = await response.json();
  assert.ok(sent.text.includes(receipt.reference));
  assert.match(receipt.message, /accepted for email delivery/);
});

test('timeout retries and repeated submissions keep identical provider keys and payloads', async () => {
  const token = delivery.issueEstimateToken(config).token;
  const sends = [];
  const transport = async (_url, options) => {
    sends.push(options);
    if (sends.length === 1) throw new Error('Simulated timeout');
    return accepted();
  };
  assert.equal((await delivery.handleEstimatePost(request({ token }), env, transport)).status, 202);
  assert.equal((await delivery.handleEstimatePost(request({ token }), env, transport)).status, 202);
  assert.equal(sends.length, 3);
  assert.equal(new Set(sends.map((item) => item.headers['Idempotency-Key'])).size, 1);
  assert.equal(new Set(sends.map((item) => item.body)).size, 1);
});

test('an edited brief receives a distinct request key instead of a provider payload conflict', async () => {
  const token = delivery.issueEstimateToken(config).token;
  const keys = [];
  const transport = async (_url, options) => { keys.push(options.headers['Idempotency-Key']); return accepted(); };
  await delivery.handleEstimatePost(request({ token }), env, transport);
  await delivery.handleEstimatePost(request({ token, details: 'Use the new cabinet instead of replacing the tile.' }), env, transport);
  assert.notEqual(keys[0], keys[1]);
});

test('expired and forged tokens fail before the transport is called', async () => {
  for (const token of [delivery.issueEstimateToken(config, Date.now() - 3_700_000).token, delivery.issueEstimateToken(config).token.replace(/.$/, 'z')]) {
    const response = await delivery.handleEstimatePost(request({ token }), env, () => { throw new Error('Must not send'); });
    assert.equal(response.status, 400);
    assert.equal((await response.json()).code, 'expired');
  }
});

test('field validation, email header injection, foreign origins, and honeypot content fail before sending', async () => {
  for (const [fields, headers, status] of [
    [{ details: 'short' }, {}, 400], [{ email: 'customer@example.com\r\nBcc: other@example.com' }, {}, 400],
    [{ website: 'spam' }, {}, 400], [{}, { Origin: 'https://unrelated.example' }, 403],
  ]) {
    assert.equal((await delivery.handleEstimatePost(request(fields, headers), env, () => { throw new Error('Must not send'); })).status, status);
  }
});

test('body limit applies even without a Content-Length header', async () => {
  const response = await delivery.handleEstimatePost(request({ details: 'x'.repeat(21_000) }), env, () => { throw new Error('Must not send'); });
  assert.equal(response.status, 413);
});

test('provider rejection and malformed success responses never report an accepted request', async () => {
  for (const transport of [async () => Response.json({ name: 'validation_error' }, { status: 422 }), async () => Response.json({})]) {
    const response = await delivery.handleEstimatePost(request(), env, transport);
    assert.equal(response.status, 502);
    assert.equal((await response.json()).reference, undefined);
  }
});

test('native form responses offer a usable contact fallback and do not claim fields remain on the response page', async () => {
  const response = await delivery.handleEstimatePost(request({}, { Accept: 'text/html' }), {}, accepted);
  const html = await response.text();
  assert.equal(response.status, 503);
  assert.match(html, /browser Back button/);
  assert.match(html, /tel:\+13329993846/);
  assert.doesNotMatch(html, /details are still here/);
});

test('per-instance guard limits distinct requests while permitting an unchanged retry', async () => {
  const headers = { 'x-forwarded-for': 'guard-test-same-address' };
  const tokens = Array.from({ length: 6 }, () => delivery.issueEstimateToken(config).token);
  for (const token of tokens.slice(0, 5)) assert.equal((await delivery.handleEstimatePost(request({ token }, headers), env, accepted)).status, 202);
  assert.equal((await delivery.handleEstimatePost(request({ token: tokens[5] }, headers), env, () => { throw new Error('Must not send'); })).status, 429);
  assert.equal((await delivery.handleEstimatePost(request({ token: tokens[0] }, headers), env, accepted)).status, 202);
});
