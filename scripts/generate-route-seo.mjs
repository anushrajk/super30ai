import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const appFile = path.join(rootDir, "src", "App.tsx");
const distIndexFile = path.join(rootDir, "dist", "index.html");
const siteOrigin = "https://www.thesuper30.ai";
const seoMetaFile = path.join(rootDir, "src", "data", "seoMeta.json");
const schemaRoutesFile = path.join(rootDir, "src", "data", "schemaRoutes.json");
const faqsFile = path.join(rootDir, "src", "data", "faqs.json");

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
    .replace(/\s*<link[^>]+rel="canonical"[^>]*>/gi, "");

const injectMetadata = (html, metadata) => {
  const cleanHtml = stripSeoTags(html);
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
    `<meta name="twitter:card" content="${escapeHtml(metadata.twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.twitterTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.twitterDescription)}" />`,
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


const NAV_LINKS = `      <nav>
        <a href="/">Home</a>
        <a href="/seo-company-bangalore">AI-Powered SEO</a>
        <a href="/lead-generation-agency-bangalore">Lead Generation</a>
        <a href="/digital-marketing-agency-bangalore">Digital Strategy &amp; Growth</a>
        <a href="/social-media-design-agency-bangalore">Social Media</a>
        <a href="/graphic-design-agency-bangalore">Design</a>
        <a href="/web-design-company-bangalore">Web Design</a>
        <a href="/work">Our Work</a>
        <a href="/about">Team S30</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>`;

// The static crawler block in index.html describes the home page. Every other
// route gets its own block so the source HTML matches that page's content.
const replaceSeoContent = (html, routePath, metadata, route, faqItems) => {
  if (routePath === "/") return html;

  const start = html.indexOf('<div id="seo-content"');
  if (start === -1) return html;
  const endMarker = "</article>\n    </div>";
  const end = html.indexOf(endMarker, start);
  if (end === -1) return html;

  const heading = route?.name || metadata.title.split("|")[0].trim();
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
        </header>${faqBlock}

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

const main = async () => {
  const [appSource, distIndexHtml, seoMetaRaw, schemaRoutesRaw, faqsRaw] = await Promise.all([
    fs.readFile(appFile, "utf8"),
    fs.readFile(distIndexFile, "utf8"),
    fs.readFile(seoMetaFile, "utf8"),
    fs.readFile(schemaRoutesFile, "utf8"),
    fs.readFile(faqsFile, "utf8"),
  ]);

  const seoMeta = JSON.parse(seoMetaRaw);
  const schemaRoutes = JSON.parse(schemaRoutesRaw);
  const faqs = JSON.parse(faqsRaw);

  const organization = {
    "@type": "Organization",
    "@id": `${siteOrigin}/#organization`,
    name: "The Super 30",
    url: `${siteOrigin}/`,
    telephone: "+91 89041 50555",
    logo: { "@type": "ImageObject", url: `${siteOrigin}/favicon.png` },
    image: `${siteOrigin}/favicon.png`,
    description:
      "The Super 30 is an AI-driven digital marketing agency in Bangalore offering SEO, lead generation, social media, design and web development services.",
    areaServed: { "@type": "City", name: "Bangalore" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: ["https://www.instagram.com/thesuper30.ai/"],
  };

  const buildSchema = (routePath, metadata) => {
    if (routePath === "/") {
      const homeGraph = [
        { "@context": "https://schema.org", ...organization },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteOrigin}/#website`,
          name: "The Super 30",
          url: `${siteOrigin}/`,
          description: metadata.description,
          publisher: { "@id": `${siteOrigin}/#organization` },
        },
      ];
      const homeItems = faqs["home"] || [];
      if (homeItems.length) {
        homeGraph.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeItems.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        });
      }
      return homeGraph;
    }

    const route = schemaRoutes[routePath];
    if (!route) return [];

    const url = metadata.canonical;
    const graph = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
          { "@type": "ListItem", position: 2, name: route.name, item: url },
        ],
      },
    ];

    if (route.type === "Service") {
      graph.push({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: route.serviceType || route.name,
        name: route.name,
        description: metadata.description,
        url,
        provider: { "@id": `${siteOrigin}/#organization` },
        areaServed: { "@type": "City", name: "Bangalore" },
      });
    } else {
      graph.push({
        "@context": "https://schema.org",
        "@type": route.type,
        name: route.name,
        description: metadata.description,
        url,
        isPartOf: { "@id": `${siteOrigin}/#website` },
        publisher: { "@id": `${siteOrigin}/#organization` },
      });
    }

    const items = route.faqSlug ? faqs[route.faqSlug] || [] : [];
    if (items.length) {
      graph.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }

    return graph;
  };

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

  const writeRoute = async (routePath, metadata) => {
    const outputFile = routeToOutputFile(routePath);
    const withSchema = { ...metadata, schema: buildSchema(routePath, metadata) };
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    const route = schemaRoutes[routePath];
    const faqItems = route?.faqSlug ? faqs[route.faqSlug] || [] : [];
    const baseHtml = replaceSeoContent(distIndexHtml, routePath, metadata, route, faqItems);
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

  console.log(`Generated SEO HTML for ${generatedCount} static routes.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});