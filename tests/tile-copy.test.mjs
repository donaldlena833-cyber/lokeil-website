import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../app/tile-installation-queens/page.tsx', import.meta.url), 'utf8');

test('tile service copy addresses homeowners instead of internal marketing planning', () => {
  assert.doesNotMatch(page, /tile pages win trust|Queens tile leads|tile proof path|Tile leads usually start/i);
  assert.match(page, /Layout decisions shape the finished room/);
  assert.match(page, /Bathroom tile and flooring should be planned together/);
  assert.match(page, /Tile projects usually start with a room/);
});

test('tile page preserves key evidence and conversion routes', () => {
  for (const route of ['/gallery', '/contact', '/bathroom-remodeling-queens', '/flooring-installation-queens']) {
    assert.match(page, new RegExp(`href=[{]?[\`'"]${route}[\`'"]`));
  }

  assert.match(page, /src="\/gallery\/bathroom-tiles\/8\.jpg"/);
  assert.match(page, /href={[`]tel:\${siteData\.phoneHref}[`]}/);
});
