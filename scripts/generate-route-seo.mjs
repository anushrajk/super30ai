import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRouteGraph } from "../src/lib/schemaGraph.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const appFile = path.join(rootDir, "src", "App.tsx");
const distIndexFile = path.join(rootDir, "dist", "index.html");
const siteOrigin = "https://www.thesuper30.ai";
const seoMetaFile = path.join(rootDir, "src", "data", "seoMeta.json");
const schemaRoutesFile = path.join(rootDir, "src", "data", "schemaRoutes.json");
const faqsFile = path.join(rootDir, "src", "data", "faqs.json");
const organizationFile = path.join(rootDir, "src", "data", "organization.json");

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");

const decodeJsStringLiteral = (literal) => {
  if (!literal) return "";

  if (literal.startsWith('"')) {
    return JSON.parse(literal);
  }

  return literal
    .slice(1, -1)
    .replace(/\\'/g, "'")
    .replace(/\\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\\\/g, "\\");
};

const getLiteralValue = (source, key) => {
  const pattern = new RegExp(`${key}\\s*:\\s*(\"(?:[^\\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*')`);
  const match = source.match(pattern);
  return match ? decodeJsStringLiteral(match[1]).trim() : "";
};

const getTagContent = (source, regex) => {
  const match = source.match(regex);
  if (!match) return "";
  const value = match[1].trim();
  return value.includes("{") || value.includes("}") ? "" : value;
};

const getTagAttribute = (source, regex) => {
  const match = source.match(regex);
  if (!match) return "";
  const value = match[1].trim();
  return value.includes("{") || value.includes("}") ? "" : value;
};

const parsePageMetadata = (source, routePath) => {
  const seoBlockMatch = source.match(/seo:\s*\{([\s\S]*?)\}\s*,\s*hero:/);

  let title = "";
  let description = "";
  let keywords = "";
  let canonical = "";
  let robots = "";
  let ogTitle = "";
  let ogDescription = "";
  let ogType = "";
  let ogUrl = "";
  let twitterCard = "";
  let twitterTitle = "";
  let twitterDescription = "";

  if (seoBlockMatch) {
    const seoBlock = seoBlockMatch[1];
    title = getLiteralValue(seoBlock, "title");
    description = getLiteralValue(seoBlock, "description");
    keywords = getLiteralValue(seoBlock, "keywords");
    canonical = getLiteralValue(seoBlock, "canonical");
    ogTitle = getLiteralValue(seoBlock, "ogTitle") || title;
    ogDescription = getLiteralValue(seoBlock, "ogDescription") || description;
    ogUrl = canonical;
    twitterTitle = getLiteralValue(seoBlock, "twitterTitle") || ogTitle;
    twitterDescription = getLiteralValue(seoBlock, "twitterDescription") || ogDescription;
  } else {
    title = getTagContent(source, /<title>([\s\S]*?)<\/title>/);
    description = getTagAttribute(source, /<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    keywords = getTagAttribute(source, /<meta\s+name="keywords"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    canonical = getTagAttribute(source, /<link\s+rel="canonical"\s+href="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    robots = getTagAttribute(source, /<meta\s+name="robots"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    ogTitle = getTagAttribute(source, /<meta\s+property="og:title"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    ogDescription = getTagAttribute(source, /<meta\s+property="og:description"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    ogType = getTagAttribute(source, /<meta\s+property="og:type"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    ogUrl = getTagAttribute(source, /<meta\s+property="og:url"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    twitterCard = getTagAttribute(source, /<meta\s+name="twitter:card"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    twitterTitle = getTagAttribute(source, /<meta\s+name="twitter:title"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    twitterDescription = getTagAttribute(source, /<meta\s+name="twitter:description"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    const twitterUrlParsed = getTagAttribute(source, /<meta\s+name="twitter:url"\s+content="([\s\S]*?)"\s*\/?>(?:\s*)/i);
    if (twitterUrlParsed) ogUrl = ogUrl || twitterUrlParsed; // reuse for twitter:url fallback
  }

  if (!title || !description) return null;

  const fallbackCanonical = routePath === "/" ? `${siteOrigin}/` : `${siteOrigin}${routePath}`;

  return {
    title,
    description,
    keywords,
    canonical: canonical || fallbackCanonical,
    robots: robots || "index, follow",
    ogTitle: ogTitle || title,
    ogDescription: ogDescription || description,
    ogType: ogType || "website",
    ogUrl: ogUrl || canonical || fallbackCanonical,
    twitterCard: twitterCard || "summary_large_image",
    twitterTitle: twitterTitle || ogTitle || title,
    twitterDescription: twitterDescription || ogDescription || description,
  };
};

const OG_IMAGE = "https://www.thesuper30.ai/og-image.jpg";

const stripSeoTags = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>/gi, "")
    .replace(/\s*<meta[^>]+name="description"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="keywords"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="robots"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="twitter:card"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="twitter:title"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="twitter:description"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="twitter:url"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+property="og:title"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+property="og:description"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+property="og:type"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+property="og:url"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+property="og:image[^"]*"[^>]*>/gi, "")
    .replace(/\s*<meta[^>]+name="twitter:image"[^>]*>/gi, "")
    .replace(/\s*<link[^>]+rel="canonical"[^>]*>/gi, "");

const injectMetadata = (html, metadata) => {
  const cleanHtml = stripSeoTags(html);
  const image = metadata.image || OG_IMAGE;
  const imageAlt = metadata.imageAlt || "The Super 30 — AI Digital Marketing Agency in Bangalore";
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    metadata.keywords ? `<meta name="keywords" content="${escapeHtml(metadata.keywords)}" />` : "",
    `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`,
    `<meta name="robots" content="${escapeHtml(metadata.robots)}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.ogDescription)}" />`,
    `<meta property="og:type" content="${escapeHtml(metadata.ogType)}" />`,
    `<meta property="og:url" content="${escapeHtml(metadata.ogUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    image === OG_IMAGE ? `<meta property="og:image:width" content="1200" />` : "",
    image === OG_IMAGE ? `<meta property="og:image:height" content="630" />` : "",
    `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`,
    ...(metadata.articleMeta || []),
    `<meta name="twitter:card" content="${escapeHtml(metadata.twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.twitterTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.twitterDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:url" content="${escapeHtml(metadata.ogUrl)}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");

  const schemaTags = (metadata.schema || [])
    .map(
      (node) =>
        `<script type="application/ld+json">${JSON.stringify(node).replace(/</g, "\\u003c")}</script>`
    )
    .join("\n    ");

  const head = schemaTags ? `${tags}\n    ${schemaTags}` : tags;

  return cleanHtml.replace("</head>", `    ${head}\n  </head>`);
};



const NAV_LINKS = `<nav>
        <a href="/">Home</a>
        <a href="/digital-marketing-agency-bangalore">Digital Marketing Agency Bangalore</a>
        <a href="/seo-company-bangalore">AI SEO Company Bangalore</a>
        <a href="/lead-generation-agency-bangalore">Lead Generation Agency Bangalore</a>
        <a href="/google-ads-agency-bangalore">Google Ads Agency Bangalore</a>
        <a href="/social-media-marketing-agency-bangalore">Social Media Marketing Agency Bangalore</a>
        <a href="/social-media-optimization-services-bangalore">Social Media Optimisation Services</a>
        <a href="/ecommerce-marketing-agency-bangalore">Ecommerce Marketing Agency Bangalore</a>
        <a href="/graphic-design-agency-bangalore">Graphic Design Agency Bangalore</a>
        <a href="/ui-ux-design-agency-bangalore">UI UX Design Agency Bangalore</a>
        <a href="/social-media-design-agency-bangalore">Social Media Design Agency Bangalore</a>
        <a href="/logo-design-company-bangalore">Logo Design Company Bangalore</a>
        <a href="/branding-agency-bangalore">Branding Agency Bangalore</a>
        <a href="/content-writing-agency-bangalore">Content Writing Agency Bangalore</a>
        <a href="/seo-content-writing-company-bangalore">SEO Content Writing Company Bangalore</a>
        <a href="/blog-writing-services-bangalore">Blog Writing Services Bangalore</a>
        <a href="/script-writing-agency-bangalore">Script Writing Agency Bangalore</a>
        <a href="/guest-posting-agency-bangalore">Guest Posting Agency Bangalore</a>
        <a href="/bulk-sms-services-bangalore">Bulk SMS Services Bangalore</a>
        <a href="/whatsapp-marketing-company-bangalore">WhatsApp Marketing Company Bangalore</a>
        <a href="/chatbot-development-company-bangalore">Chatbot Development Company Bangalore</a>
        <a href="/customer-engagement-agency-bangalore">Customer Engagement Agency Bangalore</a>
        <a href="/sms-gateway-service-bangalore">SMS Gateway Service Bangalore</a>
        <a href="/rcs-messaging-provider-bangalore">RCS Messaging Provider Bangalore</a>
        <a href="/corporate-video-maker-bangalore">Corporate Video Maker Bangalore</a>
        <a href="/video-production-agency-bangalore">Video Production Agency Bangalore</a>
        <a href="/photography-services-bangalore">Photography Services Bangalore</a>
        <a href="/web-design-company-bangalore">Web Design Company Bangalore</a>
        <a href="/web-development-company-bangalore">Web Development Company Bangalore</a>
        <a href="/ecommerce-website-development-company-bangalore">Ecommerce Website Development Bangalore</a>
        <a href="/wordpress-website-development-company-bangalore">WordPress Website Development Bangalore</a>
        <a href="/website-maintenance-company-bangalore">Website Maintenance Company Bangalore</a>
        <a href="/seo-training-in-bangalore">SEO Training in Bangalore</a>
        <a href="/our-work">Our Work</a>
        <a href="/internet-marketing-agency">Team S30</a>
        <a href="/blog">Blog</a>
        <a href="/audit">Free AI SEO Audit</a>
        <a href="/performance-planner">Performance Marketing Planner</a>
        <a href="/booking">Book a Consultation</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/cookie-policy">Cookie Policy</a>
      </nav>`;

// The static crawler block in index.html describes the home page. Every other
// route gets its own block so the source HTML matches that page's content.

// ---- Page content extraction -------------------------------------------------
// Reads the route's page component (and the local components it imports, two
// levels deep) and pulls out the real headings / paragraphs / list items so the
// crawler-visible HTML mirrors what visitors actually see on that page.

const sourceCache = new Map();

const readSource = async (file) => {
  if (sourceCache.has(file)) return sourceCache.get(file);
  let text = "";
  try {
    text = await fs.readFile(file, "utf8");
  } catch {
    text = "";
  }
  sourceCache.set(file, text);
  return text;
};

const resolveLocalImports = (source, fromFile) => {
  const files = [];
  const importRe = /from\s+"(@\/[^"]+|\.\.?\/[^"]+)"|import\("(@\/[^"]+|\.\.?\/[^"]+)"\)/g;
  for (const match of source.matchAll(importRe)) {
    const spec = match[1] || match[2];
    if (!spec) continue;
    if (/\.(css|json|png|jpe?g|svg|webp|mp4)$/i.test(spec)) continue;
    if (spec.includes("/ui/") || spec.includes("integrations/supabase")) continue;
    const base = spec.startsWith("@/")
      ? path.join(rootDir, "src", spec.slice(2))
      : path.resolve(path.dirname(fromFile), spec);
    files.push(`${base}.tsx`);
  }
  return files;
};

const cleanText = (value) =>
  value
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .trim();

const isUsefulText = (value) =>
  value.length > 2 &&
  value.length < 600 &&
  /[a-zA-Z]/.test(value) &&
  !value.includes("{") &&
  !value.includes("}") &&
  !/^[\W\d]+$/.test(value);

const extractFromSource = (source) => {
  const nodes = [];
  const seen = new Set();

  const push = (tag, raw) => {
    const text = cleanText(raw);
    if (!isUsefulText(text)) return;
    const key = `${tag}:${text.toLowerCase()}`;
    if (seen.has(key)) return;
    seen.add(key);
    nodes.push({ tag, text });
  };

  const jsxRe = /<(h1|h2|h3|h4|p|li|blockquote)(?:\s[^>]*)?>([^<>{}]+)<\/\1>/g;
  for (const match of source.matchAll(jsxRe)) {
    const tag = match[1] === "h1" ? "h2" : match[1] === "h4" ? "h3" : match[1];
    push(tag, match[2]);
  }

  const literalRe =
    /\b(?:title|heading|headline|subheading|subtext|description|label|question|answer|text|quote|name)\s*:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
  for (const match of source.matchAll(literalRe)) {
    push("p", decodeJsStringLiteral(match[1]));
  }

  return nodes;
};

const buildPageContent = async (pageFile) => {
  if (!pageFile) return [];
  const visited = new Set();
  const queue = [{ file: pageFile, depth: 0 }];
  const nodes = [];

  while (queue.length) {
    const { file, depth } = queue.shift();
    if (visited.has(file)) continue;
    visited.add(file);
    const source = await readSource(file);
    if (!source) continue;
    nodes.push(...extractFromSource(source));
    if (depth < 2) {
      for (const next of resolveLocalImports(source, file)) {
        queue.push({ file: next, depth: depth + 1 });
      }
    }
  }

  const seen = new Set();
  return nodes
    .filter((node) => {
      const key = node.text.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 400);
};

const replaceSeoContent = (html, routePath, metadata, route, faqItems, contentNodes = []) => {
  if (routePath === "/") return html;

  const start = html.indexOf('<div id="seo-content"');
  if (start === -1) return html;
  const endMarker = "</article>\n    </div>";
  const end = html.indexOf(endMarker, start);
  if (end === -1) return html;

  const heading = route?.name || metadata.title.split("|")[0].trim();
  const faqQuestions = new Set(faqItems.map((f) => cleanText(f.question).toLowerCase()));
  const faqAnswers = new Set(faqItems.map((f) => cleanText(f.answer).toLowerCase()));
  const bodyBlock = contentNodes
    .filter(
      (node) =>
        !faqQuestions.has(node.text.toLowerCase()) &&
        !faqAnswers.has(node.text.toLowerCase()) &&
        node.text !== heading &&
        node.text !== metadata.description
    )
    .map((node) => `          <${node.tag}>${escapeHtml(node.text)}</${node.tag}>`)
    .join("\n");
  const contentSection = bodyBlock ? `\n        <section>\n${bodyBlock}\n        </section>` : "";
  const faqBlock = faqItems.length
    ? `\n        <section>\n          <h2>Frequently Asked Questions</h2>\n${faqItems
        .map((f) => `          <h3>${escapeHtml(f.question)}</h3>\n          <p>${escapeHtml(f.answer)}</p>`)
        .join("\n")}\n        </section>`
    : "";

  const block = `<div id="seo-content" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;">
${NAV_LINKS}

      <article>
        <header>
          <h1>${escapeHtml(heading)}</h1>
          <p>${escapeHtml(metadata.description)}</p>
        </header>${contentSection}${faqBlock}

        <footer>
          <p>The Super 30 — AI Digital Marketing Agency. Bangalore, Karnataka, India. Phone: +91 89041 50555.</p>
        </footer>
      </article>
    </div>`;

  return html.slice(0, start) + block + html.slice(end + endMarker.length);
};

const routeToOutputFile = (routePath) => {
  if (routePath === "/") return distIndexFile;
  const normalizedPath = routePath.replace(/^\//, "");
  return path.join(rootDir, "dist", normalizedPath, "index.html");
};

// ---- Blog posts (CMS content) -----------------------------------------------
// Every published post in the CMS gets its own static HTML file whose <head>
// and crawler-visible body come from the content typed in the editor.

const readEnv = async () => {
  const env = { ...process.env };
  try {
    const raw = await fs.readFile(path.join(rootDir, ".env"), "utf8");
    for (const line of raw.split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
      if (match && !env[match[1]]) env[match[1]] = match[2];
    }
  } catch {
    /* no .env in CI — rely on process.env */
  }
  return env;
};

const sanitizeArticleHtml = (html = "") =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/\sjavascript:/gi, " ")
    .replace(/\/storage\/v1\/object\/public\/blog-media\//g, "/functions/v1/blog-media/")
    .trim();

const htmlToText = (html = "") =>
  cleanText(
    html
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
  );

const fetchPublishedPosts = async () => {
  const env = await readEnv();
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [];
  const endpoint =
    `${url}/rest/v1/blogs?select=slug,title,excerpt,content,cover_image_url,category,read_time,author_name,` +
    `published_at,updated_at,meta_title,meta_description,meta_keywords,canonical_url,og_title,og_description,og_image_url,json_ld` +
    `&status=eq.published&order=published_at.desc`;
  try {
    const response = await fetch(endpoint, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.warn(`Skipping blog prerender — could not load posts: ${error.message}`);
    return [];
  }
};

const buildBlogSeoContent = (post, url, articleHtml) => {
  const published = post.published_at ? new Date(post.published_at).toISOString() : "";
  return `<div id="seo-content" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;">
${NAV_LINKS}

      <article>
        <header>
          <h1>${escapeHtml(post.title)}</h1>
          ${post.excerpt ? `<p>${escapeHtml(post.excerpt)}</p>` : ""}
          <p>${[
            post.author_name ? `By ${post.author_name}` : "",
            published ? `Published ${published.slice(0, 10)}` : "",
            post.category || "",
            post.read_time || "",
          ]
            .filter(Boolean)
            .map((value) => escapeHtml(value))
            .join(" · ")}</p>
          ${post.cover_image_url ? `<img src="${escapeHtml(post.cover_image_url)}" alt="${escapeHtml(post.title)}" />` : ""}
        </header>
        <section>
${articleHtml}
        </section>
        <footer>
          <p><a href="${escapeHtml(url)}">${escapeHtml(post.title)}</a> — The Super 30, AI Digital Marketing Agency, Bangalore, Karnataka, India. Phone: +91 89041 50555.</p>
          <p><a href="/blog">All articles</a></p>
        </footer>
      </article>
    </div>`;
};

const replaceSeoBlock = (html, block) => {
  const start = html.indexOf('<div id="seo-content"');
  if (start === -1) return html;
  const endMarker = "</article>\n    </div>";
  const end = html.indexOf(endMarker, start);
  if (end === -1) return html;
  return html.slice(0, start) + block + html.slice(end + endMarker.length);
};

const generateBlogPages = async (distIndexHtml, organization) => {
  const posts = await fetchPublishedPosts();
  if (!posts.length) return 0;

  for (const post of posts) {
    const url = `${siteOrigin}/blog/${post.slug}`;
    const articleHtml = sanitizeArticleHtml(post.content || "");
    const plain = htmlToText(articleHtml);
    const title = post.meta_title || `${post.title} | The Super 30`;
    const description = (post.meta_description || post.excerpt || plain).slice(0, 300);
    const image = post.og_image_url || post.cover_image_url || OG_IMAGE;
    const published = post.published_at ? new Date(post.published_at).toISOString() : undefined;
    const modified = post.updated_at ? new Date(post.updated_at).toISOString() : published;

    const article = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: post.title.slice(0, 110),
      description,
      image: image ? [image] : undefined,
      articleSection: post.category || undefined,
      wordCount: plain ? plain.split(/\s+/).length : undefined,
      keywords: post.meta_keywords || undefined,
      datePublished: published,
      dateModified: modified,
      inLanguage: "en-IN",
      author: {
        "@type": "Person",
        name: post.author_name || organization.name || "The Super 30",
      },
      publisher: {
        "@type": "Organization",
        name: organization.name || "The Super 30",
        url: siteOrigin,
        logo: { "@type": "ImageObject", url: `${siteOrigin}/og-image.jpg` },
      },
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteOrigin}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    };

    const schema = post.json_ld ? [post.json_ld, breadcrumb] : [article, breadcrumb];

    const metadata = {
      title,
      description,
      keywords: post.meta_keywords || "",
      canonical: post.canonical_url || url,
      robots: "index, follow",
      ogTitle: post.og_title || post.meta_title || post.title,
      ogDescription: post.og_description || description,
      ogType: "article",
      ogUrl: url,
      image,
      imageAlt: post.title,
      twitterCard: "summary_large_image",
      twitterTitle: post.og_title || post.meta_title || post.title,
      twitterDescription: post.og_description || description,
      articleMeta: [
        published ? `<meta property="article:published_time" content="${escapeHtml(published)}" />` : "",
        modified ? `<meta property="article:modified_time" content="${escapeHtml(modified)}" />` : "",
        post.author_name ? `<meta property="article:author" content="${escapeHtml(post.author_name)}" />` : "",
        post.category ? `<meta property="article:section" content="${escapeHtml(post.category)}" />` : "",
      ].filter(Boolean),
      schema,
    };

    const baseHtml = replaceSeoBlock(distIndexHtml, buildBlogSeoContent(post, url, articleHtml));
    const outputFile = path.join(rootDir, "dist", "blog", post.slug, "index.html");
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, injectMetadata(baseHtml, metadata), "utf8");
  }

  // Blog index: list every published post so the archive is crawlable too.
  const listFile = path.join(rootDir, "dist", "blog", "index.html");
  try {
    const listHtml = await fs.readFile(listFile, "utf8");
    const items = posts
      .map(
        (post) =>
          `          <li><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a>` +
          `${post.excerpt ? ` — ${escapeHtml(post.excerpt)}` : ""}</li>`
      )
      .join("\n");
    const injected = listHtml.replace(
      "</article>\n    </div>",
      `  <section>\n          <h2>Latest articles</h2>\n          <ul>\n${items}\n          </ul>\n        </section>\n      </article>\n    </div>`
    );
    await fs.writeFile(listFile, injected, "utf8");
  } catch {
    /* blog index not generated */
  }

  // Sitemap: keep published post URLs in sync with the CMS.
  const sitemapFile = path.join(rootDir, "dist", "sitemap.xml");
  try {
    let sitemap = await fs.readFile(sitemapFile, "utf8");
    sitemap = sitemap.replace(/\s*<url>\s*<loc>[^<]*\/blog\/[^<]*<\/loc>[\s\S]*?<\/url>/g, "");
    const entries = posts
      .map((post) => {
        const lastmod = (post.updated_at || post.published_at || new Date().toISOString()).slice(0, 10);
        return `  <url>\n    <loc>${siteOrigin}/blog/${post.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
      })
      .join("\n");
    sitemap = sitemap.replace("</urlset>", `${entries}\n</urlset>`);
    await fs.writeFile(sitemapFile, sitemap, "utf8");
  } catch {
    /* no sitemap in dist */
  }

  return posts.length;
};


const main = async () => {
  const [appSource, distIndexHtml, seoMetaRaw, schemaRoutesRaw, faqsRaw, organizationRaw] = await Promise.all([
    fs.readFile(appFile, "utf8"),
    fs.readFile(distIndexFile, "utf8"),
    fs.readFile(seoMetaFile, "utf8"),
    fs.readFile(schemaRoutesFile, "utf8"),
    fs.readFile(faqsFile, "utf8"),
    fs.readFile(organizationFile, "utf8"),
  ]);

  const seoMeta = JSON.parse(seoMetaRaw);
  const schemaRoutes = JSON.parse(schemaRoutesRaw);
  const faqs = JSON.parse(faqsRaw);
  const organization = JSON.parse(organizationRaw);

  const buildSchema = (routePath, metadata) =>
    buildRouteGraph(routePath, {
      org: organization,
      routes: schemaRoutes,
      faqs,
      seo: { ...seoMeta, [routePath]: { ...(seoMeta[routePath] || {}), ...metadata } },
    });

  const importMap = new Map();
  const importRegex = /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\("(.+?)"\)/g;
  for (const match of appSource.matchAll(importRegex)) {
    const [, componentName, importPath] = match;
    importMap.set(componentName, path.join(rootDir, "src", importPath.replace(/^\.\/pages\//, "pages/") + ".tsx"));
  }

  const routeRegex = /<Route\s+path="([^"]+)"\s+element={<([A-Za-z0-9_]+)(?:\s*\/|\s)/g;
  const staticRoutes = [];

  for (const match of appSource.matchAll(routeRegex)) {
    const [, routePath, componentName] = match;
    if (routePath.includes(":")) continue;
    if (routePath === "*") continue;
    if (componentName === "Navigate") continue;

    const filePath = importMap.get(componentName);
    if (!filePath) continue;
    staticRoutes.push({ routePath, filePath });
  }

  let generatedCount = 0;

  const seenRoutes = new Set();
  const routeFileMap = new Map(staticRoutes.map((r) => [r.routePath, r.filePath]));

  const writeRoute = async (routePath, metadata) => {
    const outputFile = routeToOutputFile(routePath);
    const withSchema = { ...metadata, schema: buildSchema(routePath, metadata) };
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    const route = schemaRoutes[routePath];
    const faqItems = route?.faqSlug ? faqs[route.faqSlug] || [] : [];
    const contentNodes = routePath === "/" ? [] : await buildPageContent(routeFileMap.get(routePath));
    const baseHtml = replaceSeoContent(distIndexHtml, routePath, metadata, route, faqItems, contentNodes);
    await fs.writeFile(outputFile, injectMetadata(baseHtml, withSchema), "utf8");
    seenRoutes.add(routePath);
    generatedCount += 1;
  };

  // 1. Curated metadata (source of truth) — one static HTML file per route.
  for (const [routePath, entry] of Object.entries(seoMeta)) {
    const fallbackCanonical = routePath === "/" ? `${siteOrigin}/` : `${siteOrigin}${routePath}`;
    await writeRoute(routePath, {
      title: entry.title,
      description: entry.description,
      keywords: entry.keywords || "",
      canonical: entry.canonical || fallbackCanonical,
      robots: entry.robots || "index, follow",
      ogTitle: entry.ogTitle || entry.title,
      ogDescription: entry.ogDescription || entry.description,
      ogType: entry.ogType || "website",
      ogUrl: entry.ogUrl || entry.canonical || fallbackCanonical,
      twitterCard: entry.twitterCard || "summary_large_image",
      twitterTitle: entry.twitterTitle || entry.ogTitle || entry.title,
      twitterDescription: entry.twitterDescription || entry.ogDescription || entry.description,
    });
  }

  // 2. Remaining routes — parsed from the page source.
  for (const route of staticRoutes) {
    if (seenRoutes.has(route.routePath)) continue;
    const source = await fs.readFile(route.filePath, "utf8");
    const metadata = parsePageMetadata(source, route.routePath);
    if (!metadata) continue;
    await writeRoute(route.routePath, metadata);
  }

  const blogCount = await generateBlogPages(distIndexHtml, organization);

  console.log(`Generated SEO HTML for ${generatedCount} static routes and ${blogCount} blog posts.`);

};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});