import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../app/bathroom-remodeling-queens/page.tsx', import.meta.url), 'utf8');

test('bathroom copy addresses homeowners instead of internal SEO planning', () => {
  assert.doesNotMatch(page, /Search Console|neighborhood intent|spreading thin pages|nearby Queens searches/i);
  assert.match(page, /Plan the bathroom scope around your room and building\./);
  assert.match(page, /what you want to keep, replace, or repair/);
});

test('bathroom estimate retains its contact and supporting evidence paths', () => {
  for (const route of ['/gallery', '/contact', '/tile-installation-queens', '/blog/nyc-kitchen-bathroom-remodel-permits-queens']) {
    assert.ok(page.includes(`href="${route}"`), route);
  }
  assert.ok(page.includes('href={`tel:${siteData.phoneHref}`}'));
});
