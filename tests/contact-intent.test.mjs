import assert from 'node:assert/strict';
import test from 'node:test';

import { contactIntentPayload } from '../app/contactIntent.js';

test('call events include only the event name and page path', () => {
  const payload = contactIntentPayload('tel:+13329993846', '/kitchen-remodeling-queens');
  assert.deepEqual(payload, {
    event: 'click_call',
    page_path: '/kitchen-remodeling-queens',
  });
  assert.deepEqual(Object.keys(payload).sort(), ['event', 'page_path']);
  assert.doesNotMatch(JSON.stringify(payload), /13329993846/);
});

test('email events exclude the destination address', () => {
  const payload = contactIntentPayload('mailto:info@lokeilremodeling.com', '/contact');
  assert.deepEqual(payload, {
    event: 'click_email',
    page_path: '/contact',
  });
  assert.deepEqual(Object.keys(payload).sort(), ['event', 'page_path']);
  assert.doesNotMatch(JSON.stringify(payload), /info@lokeilremodeling.com/);
});

test('non-contact links do not create contact events', () => {
  assert.equal(contactIntentPayload('/services', '/'), null);
  assert.equal(contactIntentPayload('https://example.com', '/'), null);
});
