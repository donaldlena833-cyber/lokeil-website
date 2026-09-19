import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const files = [
  'app/components/Header.tsx',
  'app/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/contact/page.tsx',
  'app/opengraph-image.tsx',
];

const source = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

test('estimate calls to action do not promise a free service', () => {
  assert.doesNotMatch(source, /free estimate/i);
  assert.match(source, /Request Estimate/);
  assert.match(source, /Project-specific estimates/);
});

test('contact copy does not make unsupported speed claims', () => {
  assert.doesNotMatch(source, /fastest path|fastest window|best for direct estimate/i);
  assert.match(source, /For direct estimate conversations/);
  assert.match(source, /Business hours/);
});
