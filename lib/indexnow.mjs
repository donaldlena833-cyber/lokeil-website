// Shared by edge middleware and the operator's Node submission script.
// The verification value stays in the production environment, outside Git.
export const indexNowOrigin = 'https://lokeilremodeling.com';
export const indexNowEndpoint = 'https://api.indexnow.org/indexnow';

/** @param {string | undefined} key */
export function validIndexNowKey(key) {
  return typeof key === 'string' && /^[a-f0-9]{32}$/.test(key) ? key : null;
}

/** @param {string} pathname @param {string | undefined} key @param {string} [method] */
export function indexNowVerificationResponse(pathname, key, method = 'GET') {
  if (!/^\/[a-f0-9]{32}\.txt$/.test(pathname)) return null;
  const headers = { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex', 'X-Content-Type-Options': 'nosniff' };
  if (!validIndexNowKey(key) || pathname !== `/${key}.txt`) {
    return new Response('Not found\n', { status: 404, headers: { ...headers, 'Cache-Control': 'no-store' } });
  }
  if (method !== 'GET' && method !== 'HEAD') {
    return new Response('Method not allowed\n', { status: 405, headers: { ...headers, Allow: 'GET, HEAD' } });
  }
  return new Response(method === 'HEAD' ? null : key, { headers: { ...headers, 'Cache-Control': 'public, max-age=300' } });
}

/** @param {string} value */
export function canonicalIndexNowUrl(value) {
  const url = new URL(value);
  if (url.origin !== indexNowOrigin || url.username || url.password || url.search || url.hash) {
    throw new Error('Only clean canonical HTTPS website URLs may be submitted.');
  }
  return url.href;
}

/** @param {string[]} values */
export function indexNowUrls(values) {
  if (!Array.isArray(values) || !values.length || values.length > 10000 || values.some(v => typeof v !== 'string')) {
    throw new Error('Provide between 1 and 10000 changed page URLs.');
  }
  return [...new Set(values.map(canonicalIndexNowUrl))];
}

/** @param {string} xml */
export function sitemapPageUrls(xml) {
  const urls = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map(m => canonicalIndexNowUrl(m[1].replaceAll('&amp;', '&')));
  if (!urls.length) throw new Error('The canonical page sitemap is missing or invalid.');
  return new Set(urls);
}

/** @param {string} html */
function htmlCanonical(html) {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    if (/\brel=["']canonical["']/i.test(match[0])) {
      return match[0].match(/\bhref=["']([^"']+)["']/i)?.[1]?.replaceAll('&amp;', '&');
    }
  }
  return null;
}

/** @param {string[]} values @param {typeof fetch} [fetcher] */
export async function checkIndexNowPages(values, fetcher = fetch) {
  const urls = indexNowUrls(values);
  const requestOptions = { redirect: /** @type {RequestRedirect} */ ('error'), signal: AbortSignal.timeout(15000), headers: { Accept: 'application/xml, text/xml' } };
  const sitemap = await fetcher(`${indexNowOrigin}/sitemap.xml`, requestOptions);
  if (sitemap.status !== 200 || !/xml/i.test(sitemap.headers.get('content-type') || '')) throw new Error('The live sitemap did not return XML with status 200.');
  const published = sitemapPageUrls(await sitemap.text());
  if (urls.some(url => !published.has(url))) throw new Error('The selection contains an unpublished or retired page URL.');
  // Sequential, limited operator batches avoid bursts against the production site.
  for (const url of urls) {
    const response = await fetcher(url, { redirect: 'error', signal: AbortSignal.timeout(15000), headers: { Accept: 'text/html' } });
    if (response.status !== 200 || !/text\/html/i.test(response.headers.get('content-type') || '')) throw new Error('A selected page did not return live HTML with status 200.');
    const html = await response.text();
    const canonical = htmlCanonical(html);
    const noindex = /noindex/i.test(response.headers.get('x-robots-tag') || '') || [...html.matchAll(/<meta\b[^>]*>/gi)].some(m => /\bname=["']robots["']/i.test(m[0]) && /noindex/i.test(m[0]));
    if (!canonical || canonicalIndexNowUrl(canonical) !== url || noindex) throw new Error('A selected page has a different canonical URL or excludes indexing.');
  }
  return urls;
}

/** @param {{key: string, urls: string[], fetcher?: typeof fetch}} options */
export async function submitIndexNow({ key, urls: values, fetcher = fetch }) {
  if (!validIndexNowKey(key)) throw new Error('The private IndexNow verification value is not configured.');
  const urls = indexNowUrls(values);
  const keyLocation = `${indexNowOrigin}/${key}.txt`;
  const verification = await fetcher(keyLocation, { redirect: 'error', signal: AbortSignal.timeout(15000), headers: { Accept: 'text/plain' } });
  if (verification.status !== 200 || !/text\/plain/i.test(verification.headers.get('content-type') || '') || (await verification.text()).trim() !== key) {
    throw new Error('The live verification file does not match the private IndexNow value.');
  }
  const checked = await checkIndexNowPages(urls, fetcher);
  const response = await fetcher(indexNowEndpoint, {
    method: 'POST', redirect: 'error', signal: AbortSignal.timeout(15000),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(indexNowOrigin).hostname, key, keyLocation, urlList: checked }),
  });
  // Never interpret receipt as indexing, ranking, or citation confirmation.
  return {
    submittedAt: new Date().toISOString(), endpoint: indexNowEndpoint,
    status: response.status, accepted: response.status === 200 || response.status === 202,
    keyValidation: response.status === 200 ? 'confirmed' : response.status === 202 ? 'pending' : 'not confirmed',
    liveKeyMatched: true, urls: checked, indexingVerified: false,
  };
}
