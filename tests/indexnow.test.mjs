import assert from 'node:assert/strict';
import test from 'node:test';
import { indexNowVerificationResponse, indexNowUrls, submitIndexNow, checkIndexNowPages, indexNowOrigin, indexNowEndpoint } from '../lib/indexnow.mjs';

const key = '11111111111111111111111111111111';
const urls = [`${indexNowOrigin}/blog`, `${indexNowOrigin}/bathroom-remodeling-queens`];
const sitemap = `<urlset>${urls.map(url => `<url><loc>${url}</loc><image:image><image:loc>${indexNowOrigin}/gallery/photo.jpg</image:loc></image:image></url>`).join('')}</urlset>`;

function stub(overrides = {}) {
  const calls = [];
  const fetcher = async (url, options) => {
    calls.push({ url, options });
    if (overrides[url]) return overrides[url](options);
    if (url.endsWith(`/${key}.txt`)) return new Response(key, { headers: { 'Content-Type': 'text/plain' } });
    if (url.endsWith('/sitemap.xml')) return new Response(sitemap, { headers: { 'Content-Type': 'application/xml' } });
    if (url === indexNowEndpoint) return new Response('', { status: 200 });
    return new Response(`<html><head><link href="${url}" rel="canonical"/></head><body><h1>Published page</h1></body></html>`, { headers: { 'Content-Type': 'text/html' } });
  };
  return { calls, fetcher };
}

test('verification is available only for the configured root filename and supported methods', async () => {
  assert.equal(indexNowVerificationResponse('/other.txt', key), null);
  assert.equal(indexNowVerificationResponse(`/${key}.txt`, undefined).status, 404);
  assert.equal(indexNowVerificationResponse('/22222222222222222222222222222222.txt', key).status, 404);
  const response = indexNowVerificationResponse(`/${key}.txt`, key);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), key);
  assert.equal(response.headers.get('X-Robots-Tag'), 'noindex');
  assert.equal(await indexNowVerificationResponse(`/${key}.txt`, key, 'HEAD').text(), '');
  assert.equal(indexNowVerificationResponse(`/${key}.txt`, key, 'POST').status, 405);
});

test('foreign hosts, credentials, private query strings, and fragments are rejected before any network request', async () => {
  for (const url of ['http://lokeilremodeling.com/blog', 'https://www.lokeilremodeling.com/blog', 'https://elsewhere.test/blog', 'https://user:pass@lokeilremodeling.com/blog', `${urls[0]}?email=private`, `${urls[0]}#part`]) {
    const { calls, fetcher } = stub();
    await assert.rejects(submitIndexNow({ key, urls: [url], fetcher }));
    assert.equal(calls.length, 0);
  }
  assert.deepEqual(indexNowUrls([...urls, urls[0]]), urls);
});

test('a batch cannot be sent until its live key, sitemap membership, HTML, canonical, and indexing directives pass', async () => {
  const failures = [
    { [`${indexNowOrigin}/${key}.txt`]: () => new Response('wrong', { headers: { 'Content-Type': 'text/plain' } }) },
    { [`${indexNowOrigin}/sitemap.xml`]: () => new Response('<urlset/>', { headers: { 'Content-Type': 'application/xml' } }) },
    { [urls[0]]: () => new Response('Moved', { status: 301, headers: { 'Content-Type': 'text/html' } }) },
    { [urls[0]]: () => new Response('<link rel="canonical" href="https://lokeilremodeling.com/other"/>', { headers: { 'Content-Type': 'text/html' } }) },
    { [urls[0]]: () => new Response(`<meta name="robots" content="noindex"/><link rel="canonical" href="${urls[0]}"/>`, { headers: { 'Content-Type': 'text/html' } }) },
  ];
  for (const overrides of failures) {
    const { calls, fetcher } = stub(overrides);
    await assert.rejects(submitIndexNow({ key, urls, fetcher }));
    assert.equal(calls.some(c => c.options?.method === 'POST'), false);
  }
  const { calls, fetcher } = stub();
  await assert.rejects(submitIndexNow({ key, urls: [`${indexNowOrigin}/retired`], fetcher }));
  assert.equal(calls.some(c => c.options?.method === 'POST'), false);
});

test('dry run performs only reads; valid submission goes to the fixed endpoint and hides the verification value in its receipt', async () => {
  const dry = stub();
  assert.deepEqual(await checkIndexNowPages(urls, dry.fetcher), urls);
  assert.equal(dry.calls.some(c => c.options?.method === 'POST'), false);
  const { calls, fetcher } = stub();
  const receipt = await submitIndexNow({ key, urls: [...urls, urls[0]], fetcher });
  const posts = calls.filter(c => c.options?.method === 'POST');
  assert.equal(posts.length, 1);
  assert.equal(posts[0].url, indexNowEndpoint);
  assert.deepEqual(JSON.parse(posts[0].options.body), { host: 'lokeilremodeling.com', key, keyLocation: `${indexNowOrigin}/${key}.txt`, urlList: urls });
  assert.equal(receipt.accepted, true);
  assert.equal(receipt.keyValidation, 'confirmed');
  assert.equal(receipt.indexingVerified, false);
  assert.equal(JSON.stringify(receipt).includes(key), false);
});

test('pending validation and failed notifications never become indexing claims or automatic retry loops', async () => {
  for (const status of [202, 403, 422, 429, 500]) {
    const { calls, fetcher } = stub({ [indexNowEndpoint]: () => new Response('', { status }) });
    const receipt = await submitIndexNow({ key, urls, fetcher });
    assert.equal(receipt.accepted, status === 202);
    assert.equal(receipt.keyValidation, status === 202 ? 'pending' : 'not confirmed');
    assert.equal(receipt.indexingVerified, false);
    assert.equal(calls.filter(c => c.options?.method === 'POST').length, 1);
  }
});
