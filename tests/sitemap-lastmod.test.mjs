import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const sitemap = readFileSync(new URL('../app/sitemap.ts', import.meta.url), 'utf8');

const verifiedUpdates = {
  '/bathroom-remodeling-queens': '2026-09-10',
  '/kitchen-remodeling-queens': '2026-09-11',
  '/tile-installation-queens': '2026-09-12',
  '/flooring-installation-queens': '2026-09-14',
};

test('priority service sitemap dates match their verified content updates', () => {
  for (const [path, date] of Object.entries(verifiedUpdates)) {
    const entry = new RegExp(
      `path: ['"]${path}['"][^\\n]+lastModified: ['"]${date}['"]`,
    );
    assert.match(sitemap, entry, `${path} should use ${date}`);
  }
});
