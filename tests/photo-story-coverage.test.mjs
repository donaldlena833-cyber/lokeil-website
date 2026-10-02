import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { loadTypeScriptExports } from './load-ts.mjs';

const root = process.cwd();
const source = readFileSync(join(root, 'app/blog/photoStories.ts'), 'utf8');
const plans = JSON.parse(readFileSync(join(root, 'app/blog/photoStoryPlans.json'), 'utf8'));
const { photoArticleBodies, photoArticleAltText } = loadTypeScriptExports(join(root, 'app/blog/photoArticleBodies.ts'));
const notes = [...source.matchAll(/^    image: '(\/gallery\/[^']+)',\n    title: '([^']+)'/gm)]
  .map((match) => ({ image: match[1], title: match[2] }));
const detailSource = source.split('const details: Record<string, string> = {')[1].split('\n};')[0];
const detailImages = [...detailSource.matchAll(/^  '(\/gallery\/[^']+)':/gm)].map((match) => match[1]);
const aliasSource = source.split('const aliases: Record<string, string> = {')[1].split('\n};')[0];
const aliases = Object.fromEntries([...aliasSource.matchAll(/^  '(\/gallery\/[^']+)': '(\/gallery\/[^']+)'/gm)]
  .map((match) => [match[1], match[2]]));

const photos = readdirSync(join(root, 'public/gallery'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== 'nyc-local')
  .flatMap((entry) => readdirSync(join(root, 'public/gallery', entry.name))
    .filter((file) => file.endsWith('.jpg'))
    .map((file) => `/gallery/${entry.name}/${file}`));

test('each distinct gallery photo has one story and all repeated files resolve to it', () => {
  const storyImages = new Set(notes.map((note) => note.image));
  assert.equal(storyImages.size, notes.length);
  assert.equal(new Set(notes.map((note) => note.title)).size, notes.length);
  assert.deepEqual(new Set(detailImages), storyImages);

  const storyByHash = new Map();
  for (const note of notes) {
    const file = join(root, 'public', note.image.slice(1));
    assert.ok(existsSync(file), note.image);
    const digest = createHash('sha256').update(readFileSync(file)).digest('hex');
    assert.ok(!storyByHash.has(digest), `two stories use the same photo: ${note.image}`);
    storyByHash.set(digest, note.image);
  }

  for (const photo of photos) {
    const digest = createHash('sha256').update(readFileSync(join(root, 'public', photo.slice(1)))).digest('hex');
    const canonical = storyByHash.get(digest);
    assert.ok(canonical, `no story for ${photo}`);
    assert.equal(aliases[photo] || photo, canonical, `incorrect duplicate mapping for ${photo}`);
  }
});

test('all photo stories have a distinct editorial plan and process illustration', () => {
  assert.equal(plans.length, notes.length);
  for (const field of ['lead', 'description', 'diagramHeading']) {
    assert.equal(new Set(plans.map((plan) => plan[field])).size, notes.length, `${field} repeats`);
  }
  assert.equal(new Set(plans.map((plan) => JSON.stringify(plan.outline))).size, notes.length);

  plans.forEach((plan, index) => {
    assert.ok(plan.outline.length >= 2);
    assert.ok(plan.outline.every(([heading]) => heading.length > 12));
    assert.equal(plan.steps.length, 4);
    assert.ok(plan.diagramAfter >= 0 && plan.diagramAfter < plan.outline.length);
    const slug = notes[index].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const diagram = join(root, 'public/process/stories', `${slug}.svg`);
    assert.ok(existsSync(diagram), slug);
    assert.ok(readFileSync(diagram, 'utf8').includes(plan.diagramHeading), slug);
  });
});

test('each non neighborhood photograph loads its own authored body and a valid process position', () => {
  // The first three images have independently written neighborhood essays.
  assert.deepEqual(new Set(Object.keys(photoArticleBodies)), new Set(notes.slice(3).map(note => note.image)));
  assert.deepEqual(new Set(Object.keys(photoArticleAltText)), new Set(Object.keys(photoArticleBodies)));
  const headings = [];
  const openings = [];
  for (const [image, body] of Object.entries(photoArticleBodies)) {
    assert.ok(photoArticleAltText[image]?.trim(), image);
    assert.ok(body.intro.length && body.intro.every(text => text.trim()), image);
    assert.ok(body.sections.length >= 2, image);
    assert.ok(body.diagramAfter >= 0 && body.diagramAfter < body.sections.length, image);
    openings.push(body.intro.join(' '));
    for (const section of body.sections) {
      headings.push(section.heading);
      assert.ok(section.heading.trim(), image);
      assert.ok(section.body.length || section.list?.length || section.comparison?.rows.length, `${image}: empty section`);
      assert.ok(section.body.every(text => text.trim()), image);
      if (section.comparison) assert.ok(section.comparison.rows.every(row => row.length === 2 && row.every(text => text.trim())), image);
    }
  }
  assert.equal(new Set(openings).size, openings.length);
  assert.equal(new Set(headings).size, headings.length);
});
