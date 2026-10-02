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
