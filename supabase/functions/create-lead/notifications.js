import { sheetIdentity } from '../_shared/lead-identity.js';

// Explicit form_type from the browser wins; otherwise infer from the form name.
// Forms that reach create-lead without any name are the page/banner forms of older builds.
export function formOrigin(formName, formType) {
  if (/^popup/i.test(formType ?? '')) return 'Popup form';
  if (/^(banner|regular|page)/i.test(formType ?? '')) return 'Banner form';
  if (!formName) return 'Banner form';
  return /popup|modal|exit.intent|callback/i.test(formName) ? 'Popup form' : 'Banner form';
}

export function enquiryStatus(previous) {
  return previous?.id ? 'Duplicate' : 'New';
}

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
    landing_page_url: lead.landing_page_url ?? context.landing_page_url ?? '',
    first_page_url: lead.first_page_url ?? context.first_page_url ?? '',
    last_page_url: lead.last_page_url ?? context.page_url ?? '',
    form_name: lead.form_name ?? context.form_name ?? '',
    form_type: formOrigin(lead.form_name ?? context.form_name, lead.form_type ?? context.form_type),
    status: enquiryStatus(context.previous_enquiry),
    duplicate_of: context.previous_enquiry?.id ?? '',
    message: String(lead.message ?? context.message ?? '').slice(0, 2000),
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
  const session = context.session ?? {};
  let attribution;
  try { attribution = new URL(details.landing_page_url).searchParams; } catch { attribution = new URLSearchParams(); }
  const source = attribution.get('utm_source') || session.referrer || '';
  const medium = attribution.get('utm_medium') || '';
  const campaign = attribution.get('utm_campaign') || '';
  const location = [session.ip_city, session.ip_state, session.ip_country].filter(value => value && value !== 'Unknown').join(', ');
  const fields = [
    ['Person name', details.name], ['Company name', details.company],
    ['Email', details.email], ['Phone', details.phone], ['Website', details.website],
    ['Service', details.service], ['Role', details.role], ['Monthly revenue', details.revenue],
    ['Business type', lead.business_type], ['Preferred platforms', lead.preferred_platforms?.join(', ')],
    ['Form', details.form_name], ['Form type', details.form_type], ['Status', details.status], ['Duplicate of', details.duplicate_of], ['Landing page', details.landing_page_url],
    ['First page URL', details.first_page_url], ['Last page URL', details.last_page_url], ['Message', details.message],
    ['Submitted', submissionTime(lead.created_at)], ['Enquiry ID', lead.id],
    ['Source / Medium', [source, medium].filter(Boolean).join(' / ')], ['Campaign', campaign], ['Location', location], ['IP', session.ip_address],
  ];
  const clean = (value) => String(value ?? '').replace(/[\r\n]+/g, ' ').slice(0, 2000);
  const text = ['*New website enquiry*', ...fields.map(([label, value]) => `${label}: ${clean(value) || 'Not provided'}`)].join('\n');
  const html = value => clean(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const widget = (label, value) => ({ decoratedText: { topLabel: label, text: html(value) || 'Not provided', wrapText: true } });
  const column = pairs => ({ horizontalSizeStyle: 'FILL_AVAILABLE_SPACE', horizontalAlignment: 'START', widgets: pairs.map(([label, value]) => widget(label, value)) });
  const safeUrl = value => {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined; } catch { return undefined; }
  };
  const pageTrail = [['Landing page', details.landing_page_url], ['First page URL', details.first_page_url], ['Last page URL', details.last_page_url]].map(([label, value]) => {
    const url = safeUrl(value);
    return widget(label, url || 'Not provided');
  });
  const buttons = [];
  const digits = details.phone.replace(/\D/g, '');
  if (digits.length >= 7 && digits.length <= 15) {
    buttons.push({ text: 'Open WhatsApp', onClick: { openLink: { url: `https://wa.me/${digits.length === 10 ? `91${digits}` : digits}` } } });
  }
  const lastUrl = safeUrl(details.last_page_url);
  if (lastUrl) buttons.push({ text: 'Open submission page', onClick: { openLink: { url: lastUrl } } });
  // fallbackText is used by notifications, not rendered above the card like text.
  return { fallbackText: text, cardsV2: [{ cardId: 'enquiry', card: {
    header: { title: html(details.name) || 'New website enquiry', subtitle: `${html(details.form_name) || 'Website enquiry'} | ${submissionTime(lead.created_at)}` },
    sections: [
      { header: `WEBSITE ENQUIRY · ${details.status} · Saved`, widgets: [{ columns: { columnItems: [
        column([['Person name', details.name], ['Company name', details.company], ['Phone', details.phone], ['Email', details.email]]),
        column([['Service', details.service], ['Website', details.website], ['Capture form', details.form_name], ['Form type', details.form_type], ['Role', details.role]]),
      ] } }, ...[['Duplicate of', details.duplicate_of], ['Monthly revenue', details.revenue], ['Business type', lead.business_type], ['Preferred platforms', lead.preferred_platforms?.join(', ')], ['Message', details.message]].filter(([, value]) => value).map(([label, value]) => widget(label, value))] },
      { header: 'Attribution', widgets: [{ columns: { columnItems: [
        column([['Source / Medium', [source, medium].filter(Boolean).join(' / ')], ['Campaign', campaign]]),
        column([['Location', location], ['IP', session.ip_address]]),
      ] } }] },
      { header: 'Page Trail', collapsible: true, uncollapsibleWidgetsCount: 0, widgets: [...pageTrail, widget('Enquiry ID', lead.id)] },
      ...(buttons.length ? [{ widgets: [{ buttonList: { buttons } }] }] : []),
    ],
  }}] };
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
    if (/^[0-9a-f-]{36}$/.test(lead.id ?? '')) url.searchParams.set('messageId', `client-enquiry-${lead.id}`);
    const response = await fetcher(url.toString(), {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chatMessage(lead, context)), signal: AbortSignal.timeout(15000),
    });
    if (response.status === 409 && url.searchParams.has('messageId')) {
      return { delivered: true, status: 409, duplicate_suppressed: true };
    }
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
const esc = (value) => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function emailMessage(lead, context = {}) {
  const d = enquiryDetails(lead, context);
  const session = context.session ?? {};
  const location = [session.ip_city, session.ip_state, session.ip_country].filter(v => v && v !== 'Unknown').join(', ');
  const rows = [
    ['Form type', d.form_type], ['Form', d.form_name], ['Status', d.status], ['Person name', d.name], ['Company name', d.company],
    ['Email', d.email], ['Phone', d.phone], ['Website', d.website], ['Service', d.service], ['Role', d.role],
    ['Monthly revenue', d.revenue], ['Message', d.message], ['Landing page', d.landing_page_url],
    ['First page URL', d.first_page_url], ['Last page URL', d.last_page_url], ['Referrer', session.referrer],
    ['Location', location], ['IP', session.ip_address], ['Submitted', submissionTime(lead.created_at)], ['Enquiry ID', lead.id],
  ];
  const html = `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto"><h2 style="margin:0 0 12px">New ${esc(d.form_type)} enquiry: ${esc(d.name || d.email || d.phone)}</h2><table style="width:100%;border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold;width:35%">${esc(k)}</td><td style="padding:8px;border:1px solid #e5e7eb">${esc(v) || 'Not provided'}</td></tr>`).join('')}</table></div>`;
  return { subject: `New lead (${d.form_type}${d.status === 'Duplicate' ? ' · Duplicate' : ''}): ${d.name || d.email || d.phone} — ${d.form_name || 'Website'}`, html };
}

export async function deliverEmail(lovableKey, resendKey, to, lead, context, fetcher = fetch) {
  if (!lovableKey || !resendKey) return { delivered: false, error: 'not_configured' };
  try {
    const { subject, html } = emailMessage(lead, context);
    const response = await fetcher('https://connector-gateway.lovable.dev/resend/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${lovableKey}`, 'X-Connection-Api-Key': resendKey, 'Idempotency-Key': `enquiry-${lead.id}` },
      body: JSON.stringify({ from: 'Super30 Leads <onboarding@resend.dev>', to, subject, html }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return { delivered: false, status: response.status, error: (await response.text()).slice(0, 300) };
    const data = await response.json();
    return { delivered: typeof data.id === 'string', status: response.status };
  } catch {
    return { delivered: false, error: 'delivery_failed' };
  }
}
