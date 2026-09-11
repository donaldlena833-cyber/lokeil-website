import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../app/kitchen-remodeling-queens/page.tsx', import.meta.url), 'utf8');

test('kitchen scope copy addresses homeowners instead of internal lead planning', () => {
  assert.doesNotMatch(page, /both in play|many kitchen leads|use the gallery as proof/i);
  assert.match(page, /Choose the level of kitchen update first/);
  assert.match(page, /Identify what stays and what changes first/);
  assert.match(page, /Plan partial updates in the right order/);
});

test('kitchen page keeps its existing conversion and evidence paths', () => {
  for (const route of ['/gallery', '/contact', '/cabinet-installation-queens', '/blog/nyc-kitchen-bathroom-remodel-permits-queens']) {
    assert.ok(page.includes(`href="${route}"`), route);
  }
  assert.ok(page.includes('href={`tel:${siteData.phoneHref}`}'));
});
