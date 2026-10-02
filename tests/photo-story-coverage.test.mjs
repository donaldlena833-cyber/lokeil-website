import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const source = readFileSync(join(root, 'app/blog/photoStories.ts'), 'utf8');
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

test('every referenced process illustration is present', () => {
  const diagramNames = [...source.matchAll(/diagram: '(shower|floor|niche|cabinet|paint)'/g)].map((match) => match[1]);
  assert.equal(diagramNames.length, notes.length);
  for (const name of new Set(diagramNames)) {
    assert.ok(existsSync(join(root, 'public/process', `${name}.svg`)), name);
  }
});
