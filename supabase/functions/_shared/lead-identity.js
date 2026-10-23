// Omitted fields stay undefined so partial lead updates preserve saved identity.
export function leadIdentity(payload) {
  const normalize = (value) => {
    if (value === undefined) return undefined;
    if (value === null) return null;
    if (typeof value !== 'string' || value.trim().length > 200) {
      throw new Error('Name and company name must be text of at most 200 characters');
    }
    return value.trim() || null;
  };
  return {
    full_name: normalize(payload.full_name),
    company_name: normalize(payload.company_name),
  };
}

export function sheetIdentity(lead) {
  return { name: lead.full_name ?? '', company: lead.company_name ?? '' };
}