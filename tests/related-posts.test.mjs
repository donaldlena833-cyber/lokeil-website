import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScriptExports } from './load-ts.mjs';

const { relatedBlogPosts, isPublishedPost } = loadTypeScriptExports(new URL('../app/blog/relatedPosts.ts', import.meta.url));
const post = (slug, keyword, service, image) => ({ slug, primaryKeyword: keyword,
  relatedServices: [{ href: service }], processDiagram: { src: image } });

test('unique illustration filenames still produce relevant related stories', () => {
  const current = post('vanity', 'vanity glass clearance', '/cabinet-installation-queens', '/one.svg');
  const cabinet = post('door-fit', 'cabinet door alignment', '/cabinet-installation-queens', '/two.svg');
  const unrelated = post('paint', 'bathroom paint preparation', '/interior-painting-queens', '/three.svg');
  assert.equal(relatedBlogPosts(current, [current, unrelated, cabinet])[0].slug, 'door-fit');
  assert.equal(relatedBlogPosts(current, [current, unrelated, cabinet]).length, 2);
});

test('recommendations exclude the current article and retired location URLs', () => {
  const current = post('shower', 'shower tile', '/bathroom-remodeling-queens', '/one.svg');
  const retired = post('bathroom-remodeling-astoria-nyc-planning-guide', 'shower tile', '/bathroom-remodeling-queens', '/two.svg');
  const related = post('niche', 'shower niche', '/bathroom-remodeling-queens', '/three.svg');
  assert.deepEqual(relatedBlogPosts(current, [current, retired, related]).map((item) => item.slug), ['niche']);
  assert.equal(isPublishedPost(retired), false);
});

test('a kitchen subject outranks a vanity that shares neighborhood words', () => {
  const current = { ...post('retained-kitchen', 'Upper West Side kitchen wall repair', '/kitchen-remodeling-queens', '/kitchen.svg'),
    relatedServices: ['/kitchen-remodeling-queens', '/cabinet-installation-queens', '/plaster-drywall-finishing-queens'].map(href => ({ href })),
    editorial: { neighborhood: 'Upper West Side, Manhattan' } };
  const vanity = { ...post('vanity-wall', 'Upper East Side bathroom vanity refresh', '/cabinet-installation-queens', '/vanity.svg'),
    relatedServices: ['/cabinet-installation-queens', '/plaster-drywall-finishing-queens'].map(href => ({ href })),
    editorial: { neighborhood: 'Upper East Side, Manhattan' } };
  const kitchen = { ...post('kitchen-fit', 'Long Island City kitchen cabinet installation', '/kitchen-remodeling-queens', '/fit.svg'),
    relatedServices: ['/kitchen-remodeling-queens', '/cabinet-installation-queens'].map(href => ({ href })),
    editorial: { neighborhood: 'Long Island City, Queens' } };
  assert.equal(relatedBlogPosts(current, [current, vanity, kitchen])[0].slug, 'kitchen-fit');
});

test('editorial next reads stay ordered and valid while automatic reading fills the remainder', () => {
  const current = { ...post('storage', 'shower niche wall assessment', '/bathroom-remodeling-queens', '/one.svg'),
    preferredRelatedSlugs: ['missing', 'storage', 'bathroom-remodeling-astoria-nyc-planning-guide', 'niche-detail', 'niche-detail'] };
  const broad = post('room-use', 'shower niche wall assessment', '/bathroom-remodeling-queens', '/two.svg');
  const detail = post('niche-detail', 'recessed shelf', '/tile-installation-queens', '/three.svg');
  const retired = post('bathroom-remodeling-astoria-nyc-planning-guide', 'shower niche', '/bathroom-remodeling-queens', '/four.svg');
  assert.deepEqual(relatedBlogPosts(current, [current, broad, detail, retired]).map(item => item.slug), ['niche-detail', 'room-use']);
  assert.deepEqual(relatedBlogPosts(current, [current, broad, detail, retired], 1).map(item => item.slug), ['niche-detail']);
});
