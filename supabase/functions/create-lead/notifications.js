import { sheetIdentity } from '../_shared/lead-identity.js';

export function enquiryDetails(lead, context = {}) {
  return {
    ...sheetIdentity(lead),
    website: lead.website_url ?? '',
    email: lead.email ?? '',
    phone: lead.phone ?? '',
    role: lead.role ?? '',
    revenue: lead.monthly_revenue ?? '',
    service: lead.service_type ?? '',
    page_url: String(context.page_url ?? '').slice(0, 500),
    message: String(context.message ?? '').slice(0, 2000),
  };
}

function submissionTime(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  }).formatToParts(new Date(date));
  const get = (type) => parts.find((part) => part.type === type)?.value ?? '';
  return `${get('day')} ${get('month')} ${get('year')} ${get('hour')}:${get('minute')} ${get('dayPeriod').toUpperCase()} IST`;
}

export function chatMessage(lead, context = {}) {
  const details = enquiryDetails(lead, context);
  const fields = [
    ['Person name', details.name], ['Company name', details.company],
    ['Email', details.email], ['Phone', details.phone], ['Website', details.website],
    ['Service', details.service], ['Role', details.role], ['Monthly revenue', details.revenue],
    ['Business type', lead.business_type], ['Preferred platforms', lead.preferred_platforms?.join(', ')],
    ['Page', details.page_url], ['Message', details.message],
    ['Submitted', submissionTime(lead.created_at)], ['Enquiry ID', lead.id],
  ];
  const clean = (value) => String(value ?? '').replace(/[\r\n]+/g, ' ').slice(0, 2000);
  return { text: ['New website enquiry', ...fields.map(([label, value]) => `${label}: ${clean(value) || 'Not provided'}`)].join('\n') };
}

export async function deliverSheet(url, lead, context, fetcher = fetch) {
  try {
    let response = await fetcher(url, {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(enquiryDetails(lead, context)), redirect: 'manual',
      signal: AbortSignal.timeout(15000),
    });
    const location = response.headers.get('location');
    if (location) {
      const target = new URL(location);
      if (target.protocol !== 'https:' || target.hostname !== 'script.googleusercontent.com') {
        return { delivered: false, status: response.status };
      }
      response = await fetcher(target.toString(), { signal: AbortSignal.timeout(15000) });
    }
    const text = await response.text();
    let accepted = /lead stored successfully/i.test(text);
    try {
      const data = JSON.parse(text);
      accepted = data.success === true || data.status === 'success' || /lead stored successfully/i.test(data.message ?? '');
    } catch { /* Apps Script can return plain text. */ }
    return { delivered: response.ok && accepted, status: response.status };
  } catch {
    return { delivered: false, error: 'delivery_failed' };
  }
}

export async function deliverChat(apiKey, token, lead, context, fetcher = fetch) {
  if (!apiKey || !token) return { delivered: false, error: 'not_configured' };
  try {
    const url = new URL('https://chat.googleapis.com/v1/spaces/AAQAi6NTb3I/messages');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('token', token);
    const response = await fetcher(url.toString(), {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chatMessage(lead, context)), signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      // Never log provider bodies or request URLs: they may contain webhook credentials.
      return { delivered: false, status: response.status };
    }
    const data = await response.json();
    return { delivered: typeof data.name === 'string' && data.name.startsWith('spaces/AAQAi6NTb3I/messages/'), status: response.status };
  } catch {
    return { delivered: false, error: 'delivery_failed' };
  }
}