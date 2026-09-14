import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../app/flooring-installation-queens/page.tsx', import.meta.url), 'utf8');

test('flooring service copy addresses homeowners instead of internal marketing planning', () => {
  assert.doesNotMatch(page, /Queens flooring leads|route those buyers|route that intent/i);
  assert.match(page, /Plan connected room finishes together/);
  assert.match(page, /include those nearby finishes in the estimate/);
  assert.match(page, /separate a focused floor repair from a kitchen, bathroom, or apartment renovation/);
});

test('flooring page preserves key evidence and conversion routes', () => {
  for (const route of ['/gallery', '/contact', '/bathroom-remodeling-queens', '/kitchen-remodeling-queens', '/tile-installation-queens']) {
    assert.ok(page.includes(`'${route}'`) || page.includes(`"${route}"`), `${route} should remain linked`);
  }

  assert.match(page, /src="\/gallery\/bathroom-flooring\/4\.jpg"/);
  assert.match(page, /href={[`]tel:\${siteData\.phoneHref}[`]}/);
});
