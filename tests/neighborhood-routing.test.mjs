import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import { loadTypeScriptExports } from './load-ts.mjs';

const imports = Object.fromEntries(['gowanus', 'financialDistrict', 'midtownWest', 'longIslandCity', 'downtownBrooklyn', 'mottHaven', 'bedStuy', 'crownHeights', 'harlem', 'bushwick', 'greenpoint', 'astoria', 'upperWestSide', 'upperEastSide', 'eastVillage', 'lowerEastSide', 'chelsea', 'williamsburg', 'inwood', 'ridgewood', 'parkSlope', 'carrollGardens', 'sunnyside', 'jacksonHeights', 'sunsetPark', 'portRichmond', 'flushing', 'riverdale', 'stapleton', 'bayRidge', 'forestHills', 'ditmasPark', 'pelhamBay']
  .map(name => [`./${name}`, loadTypeScriptExports(resolve(`app/blog/neighborhoods/${name}.ts`))]));
const overrides = loadTypeScriptExports(resolve('app/blog/neighborhoods/index.ts'), imports);
const { neighborhoodArticleSlugs } = loadTypeScriptExports(resolve('app/blog/neighborhoods/routes.ts'));
const bodies = loadTypeScriptExports(resolve('app/blog/photoArticleBodies.ts'));
const { photoStoryPosts, photoStoryNotes } = loadTypeScriptExports(resolve('app/blog/photoStories.ts'), {
  './photoStoryPlans.json': { default: JSON.parse(readFileSync('app/blog/photoStoryPlans.json', 'utf8')) },
  './neighborhoods': overrides,
  './photoArticleBodies': bodies,
});

const { buyerPlanningGuides } = loadTypeScriptExports(resolve('app/blog/buyerGuides.ts'));
const { bathroomCostGuide, remodelPermitGuide, showerTileGuide } = loadTypeScriptExports(resolve('app/blog/planningGuides.ts'));
const articleSlugs = new Set([...photoStoryPosts, ...buyerPlanningGuides, bathroomCostGuide, remodelPermitGuide, showerTileGuide].map(post => post.slug));

test('neighborhood overrides preserve each photo route and its mobile estimate brief', () => {
  const { neighborhoodOverrides } = overrides;
  assert.equal(photoStoryPosts.length, 36);
  assert.deepEqual(new Set(neighborhoodArticleSlugs), new Set(neighborhoodOverrides.map(post => post.slug)));
  assert.equal(new Set(photoStoryPosts.map(post => post.slug)).size, 36);
  assert.equal(new Set(photoStoryPosts.map(post => post.heroImage)).size, 36);
  for (const rewrite of neighborhoodOverrides) {
    assert.equal(photoStoryPosts.find(post => post.slug === rewrite.slug), rewrite);
    const note = photoStoryNotes.find(note => note.slug === rewrite.slug);
    assert.equal(note?.image, rewrite.heroImage);
    assert.equal(note?.title, rewrite.title);
    assert.equal(note?.alt, rewrite.heroAlt);
    assert.ok(existsSync(resolve('public' + rewrite.processDiagram.src)), rewrite.slug);
    assert.ok(rewrite.diagramAfter >= 0 && rewrite.diagramAfter < rewrite.sections.length);
    for (const link of [...rewrite.relatedServices || [], ...rewrite.sections.flatMap(section => section.links || [])]) {
      if (link.href.startsWith('/blog/')) {
        assert.ok(articleSlugs.has(link.href.slice('/blog/'.length)), `Linked article missing: ${link.href}`);
      } else {
        assert.ok(existsSync(resolve('app' + link.href + '/page.tsx')), `Canonical page missing: ${link.href}`);
      }
    }
  }
});
