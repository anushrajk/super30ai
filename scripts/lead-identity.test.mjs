import test from 'node:test';
import assert from 'node:assert/strict';
import { leadIdentity, sheetIdentity } from '../supabase/functions/_shared/lead-identity.js';

test('person and company remain distinct in saved and sheet values', () => {
  const identity = leadIdentity({ full_name: ' Test Person ', company_name: ' TEST Company ' });
  assert.deepEqual(identity, { full_name: 'Test Person', company_name: 'TEST Company' });
  assert.deepEqual(sheetIdentity(identity), { name: 'Test Person', company: 'TEST Company' });
});

test('missing person name never becomes the company name', () => {
  const identity = leadIdentity({ company_name: 'TEST Company' });
  assert.equal(identity.full_name, undefined);
  assert.deepEqual(sheetIdentity(identity), { name: '', company: 'TEST Company' });
});

test('partial updates leave both stored names untouched', () => {
  const existing = { full_name: 'Test Person', company_name: 'TEST Company' };
  const patch = JSON.parse(JSON.stringify(leadIdentity({})));
  assert.deepEqual({ ...existing, ...patch }, existing);
});

test('invalid identity values are rejected rather than coerced', () => {
  assert.throws(() => leadIdentity({ full_name: 123 }));
  assert.throws(() => leadIdentity({ company_name: 'x'.repeat(201) }));
});