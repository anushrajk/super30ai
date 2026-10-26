import test from 'node:test';
import assert from 'node:assert/strict';
import { enquiryPayload } from '../src/lib/enquiryPayload.js';
test('popup identity stays separate and website is not fabricated', () => {
  const body = enquiryPayload({ form_name: 'Popup', page_url: 'https://example.com/contact', data: { name: 'A Person', company: 'A Company', email: 'a@example.com' } });
  assert.equal(body.full_name, 'A Person'); assert.equal(body.company_name, 'A Company'); assert.equal(body.website_url, '');
});
test('callback keeps phone without inventing an email', () => {
  const body = enquiryPayload({ page_url: 'https://example.com/work', data: { name: 'Caller', phone: '+919999999999' } });
  assert.equal(body.email, ''); assert.equal(body.phone, '+919999999999');
});
test('first and last URLs remain distinct across navigation', () => {
  const body = enquiryPayload({ page_url: 'https://example.com/contact', data: {} }, { first_page_url: 'https://example.com/' });
  assert.equal(body.first_page_url, 'https://example.com/'); assert.equal(body.landing_page_url, 'https://example.com/'); assert.equal(body.last_page_url, 'https://example.com/contact');
});