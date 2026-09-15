import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../app/sitemap.ts', import.meta.url), 'utf8');

test('homepage guides homeowners instead of exposing internal editorial language', () => {
  assert.doesNotMatch(page, /move from proof to scope|unsupported claims/i);
  assert.match(page, /Wide room photos and close-ups of the areas you want/);
  assert.match(page, /first estimate conversation more useful/);
});

test('homepage preserves primary project and estimate routes', () => {
  assert.match(page, /href="\/gallery"/);
  assert.match(page, /href="\/contact"/);
  assert.match(sitemap, /path: '', priority: 1, changeFrequency: 'weekly' as const, lastModified: '2026-09-15'/);
});
