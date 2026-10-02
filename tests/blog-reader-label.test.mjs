import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');

test('blog topic navigation uses reader-facing language', () => {
  assert.doesNotMatch(source, />Keywords</);
  assert.match(source, />In this guide</);
  assert.doesNotMatch(source, /post\.keywords\.map/);
  assert.match(source, /aria-label="Article sections"/);
  assert.match(source, />Related services</);
  assert.match(source, /href="\/contact"/);
});
