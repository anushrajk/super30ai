import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const appFile = path.join(rootDir, "src", "App.tsx");
const distIndexFile = path.join(rootDir, "dist", "index.html");
const siteOrigin = "https://www.thesuper30.ai";

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
    // ServicePageTemplate uses seo.title/description/canonical for og/twitter too
    ogTitle = title;
    ogDescription = description;
    ogUrl = canonical;
    twitterTitle = title;
    twitterDescription = description;
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
  ]
    .filter(Boolean)
    .join("\n    ");

  return cleanHtml.replace("</head>", `    ${tags}\n  </head>`);
};

const routeToOutputFile = (routePath) => {
  if (routePath === "/") return distIndexFile;
  const normalizedPath = routePath.replace(/^\//, "");
  return path.join(rootDir, "dist", normalizedPath, "index.html");
};

const main = async () => {
  const [appSource, distIndexHtml] = await Promise.all([
    fs.readFile(appFile, "utf8"),
    fs.readFile(distIndexFile, "utf8"),
  ]);

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

  for (const route of staticRoutes) {
    const source = await fs.readFile(route.filePath, "utf8");
    const metadata = parsePageMetadata(source, route.routePath);
    if (!metadata) continue;

    const outputFile = routeToOutputFile(route.routePath);
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, injectMetadata(distIndexHtml, metadata), "utf8");
    generatedCount += 1;
  }

  console.log(`Generated SEO HTML for ${generatedCount} static routes.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});