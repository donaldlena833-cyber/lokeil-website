import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScriptExports } from './load-ts.mjs';

const { preferredRepresentation, appendVaryAccept } = loadTypeScriptExports(new URL('../lib/accept.ts', import.meta.url));

test('HTML remains the default and explicit preferences select the representation', () => {
  assert.equal(preferredRepresentation(null), 'text/html');
  assert.equal(preferredRepresentation('*/*'), 'text/html');
  assert.equal(preferredRepresentation('text/markdown,text/html;q=0.7'), 'text/markdown');
  assert.equal(preferredRepresentation('text/markdown;q=0.5,text/html'), 'text/html');
});

test('explicit exclusions override wildcard acceptance and unsupported media are rejected', () => {
  assert.equal(preferredRepresentation('text/markdown;q=0,*/*'), 'text/html');
  assert.equal(preferredRepresentation('text/html;q=0,text/*'), 'text/markdown');
  assert.equal(preferredRepresentation('application/json'), null);
});

test('Accept variation preserves existing framework cache headers', () => {
  const headers = new Headers({ Vary: 'RSC, Next-Router-State-Tree' });
  appendVaryAccept(headers);
  appendVaryAccept(headers);
  assert.equal(headers.get('Vary'), 'RSC, Next-Router-State-Tree, Accept');
});
