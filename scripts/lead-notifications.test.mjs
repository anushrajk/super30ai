import test from 'node:test';
import assert from 'node:assert/strict';
import { enquiryDetails, chatMessage, deliverSheet, deliverChat, formOrigin, enquiryStatus } from '../supabase/functions/create-lead/notifications.js';

const lead = { id: 'test-id', full_name: 'Test Person', company_name: 'TEST Company', email: 'test@example.com', phone: '+919999999999', website_url: 'https://example.com', service_type: 'ai-seo', created_at: '2026-10-26T07:26:00Z' };

test('both destinations preserve different person and company names', () => {
  assert.deepEqual([enquiryDetails(lead).name, enquiryDetails(lead).company], ['Test Person', 'TEST Company']);
  assert.match(chatMessage(lead).fallbackText, /Person name: Test Person\nCompany name: TEST Company/);
  assert.match(chatMessage(lead).fallbackText, /26 10 2026 12:56 PM IST/);
});

test('missing person name is not substituted with company', () => {
  assert.match(chatMessage({ ...lead, full_name: null }).fallbackText, /Person name: Not provided\nCompany name: TEST Company/);
});

test('new enquiry is posted once to both Google destinations independently', async () => {
  const calls = [];
  const fetcher = async (url, options) => {
    calls.push({ host: new URL(url).hostname, body: JSON.parse(options.body), method: options.method });
    return new Response(url.includes('chat.googleapis.com') ? JSON.stringify({ name: 'spaces/AAQAi6NTb3I/messages/test' }) : 'Lead stored successfully');
  };
  const results = await Promise.all([deliverSheet('https://script.google.com/test', lead, {}, fetcher), deliverChat('test-key', 'test-token', lead, {}, fetcher)]);
  assert.deepEqual(results.map((item) => item.delivered), [true, true]);
  assert.deepEqual(calls.map((call) => call.host).sort(), ['chat.googleapis.com', 'script.google.com']);
  assert.equal(calls.every((call) => call.method === 'POST'), true);
});

test('a failed Chat delivery never prevents the Sheet delivery', async () => {
  const results = await Promise.all([
    deliverSheet('https://script.google.com/test', lead, {}, async () => new Response('Lead stored successfully')),
    deliverChat('test-key', 'test-token', lead, {}, async () => new Response('denied', { status: 403 })),
  ]);
  assert.equal(results[0].delivered, true);
  assert.deepEqual(results[1], { delivered: false, status: 403 });
});

test('Apps Script application errors are not reported as successful delivery', async () => {
  assert.equal((await deliverSheet('https://script.google.com/test', lead, {}, async () => new Response('TypeError: appendRow'))).delivered, false);
});
test('both destinations include landing, first and last page URLs', () => {
  const record = { ...lead, landing_page_url: 'https://example.com/', first_page_url: 'https://example.com/', last_page_url: 'https://example.com/work', message: 'Actual message' };
  const details = enquiryDetails(record);
  assert.equal(details.first_page_url, 'https://example.com/');
  assert.equal(details.last_page_url, 'https://example.com/work');
  assert.match(chatMessage(record).fallbackText, /Landing page: https:\/\/example.com\//);
  assert.match(chatMessage(record).fallbackText, /Last page URL: https:\/\/example.com\/work/);
  assert.equal(details.message, 'Actual message');
});

test('attribution uses actual landing parameters and session location without invented sources', () => {
  const record = { ...lead, landing_page_url: 'https://example.com/?utm_source=instagram&utm_medium=paid&utm_campaign=october' };
  const message = chatMessage(record, { session: { referrer: 'https://instagram.com/', ip_city: 'Bengaluru', ip_state: 'Karnataka', ip_country: 'India' } });
  assert.match(message.fallbackText, /Source \/ Medium: instagram \/ paid/);
  assert.match(message.fallbackText, /Campaign: october/);
  assert.match(message.fallbackText, /Location: Bengaluru, Karnataka, India/);
  assert.match(chatMessage(lead).fallbackText, /Source \/ Medium: Not provided/);
});

test('alert actions never include unsafe submission URLs', () => {
  const message = chatMessage({ ...lead, last_page_url: 'javascript:alert(1)' });
  assert.equal(JSON.stringify(message.cardsV2).includes('javascript:'), false);
});

test('popup and regular submissions are classified independently', () => {
  assert.equal(formOrigin('Enquiry Popup Form'), 'Popup form');
  assert.equal(formOrigin('Contact Us'), 'Regular form');
  assert.equal(formOrigin(), 'Not recorded');
});

test('repeat enquiries are Duplicate and retain their original reference', () => {
  assert.equal(enquiryStatus({ id: 'original-id' }), 'Duplicate');
  assert.equal(enquiryStatus(), 'New');
  assert.equal(enquiryDetails(lead, { previous_enquiry: { id: 'original-id' } }).duplicate_of, 'original-id');
});

test('same enquiry ID uses one deterministic Chat message ID', async () => {
  const ids = [];
  const record = { ...lead, id: '12345678-1234-1234-1234-123456789abc' };
  const fetcher = async (url, options) => {
    ids.push(new URL(url).searchParams.get('messageId'));
    const body = JSON.parse(options.body);
    assert.equal(Object.hasOwn(body, 'text'), false);
    return new Response(ids.length === 1 ? JSON.stringify({ name: 'spaces/AAQAi6NTb3I/messages/test' }) : '{}', { status: ids.length === 1 ? 200 : 409 });
  };
  await deliverChat('test-key', 'test-token', record, {}, fetcher);
  const second = await deliverChat('test-key', 'test-token', record, {}, fetcher);
  assert.deepEqual(ids, ['client-enquiry-12345678-1234-1234-1234-123456789abc', 'client-enquiry-12345678-1234-1234-1234-123456789abc']);
  assert.equal(second.duplicate_suppressed, true);
});