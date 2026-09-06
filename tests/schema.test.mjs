import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

test('the business and article organizations expose one canonical logo', async () => {
  const [schema, siteData, article] = await Promise.all([
    read('app/schema.ts'),
    read('app/siteData.ts'),
    read('app/blog/[slug]/page.tsx'),
  ]);

  assert.match(siteData, /logo: '\/icon\.svg'/);
  assert.match(
    schema,
    /'@type': \['Organization', 'HomeAndConstructionBusiness'\][\s\S]*logo: \{[\s\S]*'@type': 'ImageObject'[\s\S]*siteData\.logo/,
  );
  assert.match(
    article,
    /author: \{[\s\S]*'@id': `\$\{siteData\.siteUrl\}\/\#business`[\s\S]*logo: \{[\s\S]*siteData\.logo/,
  );
  assert.match(
    article,
    /publisher: \{[\s\S]*'@id': `\$\{siteData\.siteUrl\}\/\#business`[\s\S]*logo: \{[\s\S]*siteData\.logo/,
  );
});
