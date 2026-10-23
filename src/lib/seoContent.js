/** Shared by the CMS renderer and static SEO generator. */
export const searchDescription = (value = "") => {
  const text = value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= 160) return text;
  const cut = text.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

export const improveArticleHtml = (html, title) => {
  const escape = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Describe unlabelled article images in their actual article context. Keep
  // existing labels (including deliberately decorative empty labels) intact.
  const labelled = html.replace(/<img\b[^>]*>/gi, (tag) => {
    if (/\balt\s*=/i.test(tag)) return tag;
    return tag.replace(/\s*\/?>$/, ` alt="${escape(title)}" />`);
  });
  // Editorial internal links should be followable; external editorial rels stay.
  return labelled.replace(/<a\b[^>]*>/gi, (tag) => {
    const href = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1];
    if (!href || !(/^(\/(?!\/)|#)/.test(href) || /^https?:\/\/(www\.)?thesuper30\.ai(?:\/|$)/i.test(href))) return tag;
    return tag.replace(/\brel\s*=\s*(["'])(.*?)\1/gi, (_match, quote, rel) => {
      const kept = rel.split(/\s+/).filter((item) => item.toLowerCase() !== "nofollow").join(" ");
      return kept ? `rel=${quote}${kept}${quote}` : "";
    });
  });
};