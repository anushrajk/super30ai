export function enquiryPayload(payload, tracking = {}) {
  const d = payload.data;
  const text = (...values) => values.find(v => typeof v === 'string' && v.trim())?.trim() || '';
  const message = Object.entries(d).filter(([key]) => !['name', 'full_name', 'company', 'company_name', 'email', 'phone', 'website', 'website_url'].includes(key)).map(([key, value]) => `${key}: ${String(value ?? '')}`).join('\n');
  return {
    full_name: text(d.full_name, d.name), company_name: text(d.company_name, d.company),
    email: text(d.email), phone: text(d.phone), website_url: text(d.website_url, d.website),
    role: text(d.role, d.applicant_role), monthly_revenue: text(d.monthly_revenue, d.revenue, d.ad_budget, d.budget),
    service_type: text(d.service_type, d.service, d.service_interest, d.services) || tracking.service,
    business_type: text(d.business_type), message: text(d.message) || message,
    form_name: payload.form_name, form_id: payload.form_id, step: 1,
    page_url: payload.page_url, last_page_url: payload.page_url,
    first_page_url: tracking.first_page_url || payload.page_url,
    landing_page_url: tracking.landing_page_url || tracking.first_page_url || payload.page_url,
  };
}