/**
 * Request-time renderer for blog pages.
 *
 * Serves the built SPA shell with real CMS content, meta tags and JSON-LD
 * injected into the HTML source, so crawlers see the published post
 * immediately after it is published — no rebuild required.
 *
 * Routes (proxied by the host):
 *   /blog          -> /functions/v1/blog-ssr
 *   /blog/<slug>   -> /functions/v1/blog-ssr/<slug>
 */

const SITE = Deno.env.get("SITE_ORIGIN") ?? "https://www.thesuper30.ai";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const OG_FALLBACK = `${SITE}/og-image.jpg`;

const esc = (v = "") =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Legacy public-bucket URLs -> public media proxy. */
const toMedia = (v = "") =>
  v.replace(/\/storage\/v1\/object\/public\/blog-media\//g, "/functions/v1/blog-media/");

const absolute = (v = "") => {
  const u = toMedia(v);
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  if (u.startsWith("/functions/v1/")) return `${SUPABASE_URL}${u}`;
  return `${SITE}${u.startsWith("/") ? "" : "/"}${u}`;
};

const sanitize = (html = "") =>
  toMedia(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
      .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
      .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
      .replace(/\sjavascript:/gi, " ")
  ).trim();

const toText = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const FIELDS =
  "slug,title,excerpt,content,cover_image_url,category,read_time,author_name,published_at,updated_at," +
  "meta_title,meta_description,meta_keywords,canonical_url,og_title,og_description,og_image_url,json_ld";

// deno-lint-ignore no-explicit-any
const query = async (qs: string): Promise<any[]> => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs?select=${FIELDS}&${qs}`, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
  });
  if (!res.ok) return [];
  return await res.json();
};

/** Fetch the deployed SPA shell (hashed asset tags included). */
const getShell = async (): Promise<string> => {
  const res = await fetch(`${SITE}/index.html`, { headers: { "user-agent": "blog-ssr" } });
  if (!res.ok) throw new Error(`shell ${res.status}`);
  return await res.text();
};

/** Replace the head metadata + crawler content block of the shell. */
const render = (shell: string, head: string, seoContent: string) => {
  let html = shell;

  // Strip head tags we are about to replace.
  html = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="keywords"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="robots"[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, "")
    .replace(/\s*<meta\s+property="article:[^"]*"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, "")
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

  html = html.replace("</head>", `${head}\n  </head>`);

  const start = html.indexOf('<div id="seo-content"');
  if (start !== -1) {
    const endMarker = "</div>";
    // The block always ends with `</article>\n    </div>` in the built shell.
    const artEnd = html.indexOf("</article>", start);
    const end = artEnd !== -1 ? html.indexOf(endMarker, artEnd) : html.indexOf(endMarker, start);
    if (end !== -1) html = html.slice(0, start) + seoContent + html.slice(end + endMarker.length);
  } else {
    html = html.replace("</body>", `${seoContent}\n  </body>`);
  }

  return html;
};

const wrapSeo = (inner: string) =>
  `<div id="seo-content" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;">
${inner}
    </div>`;

// deno-lint-ignore no-explicit-any
const renderPost = (post: any) => {
  const url = `${SITE}/blog/${post.slug}`;
  const article = sanitize(post.content || "");
  const plain = toText(article);
  const title = post.meta_title || `${post.title} | The Super 30`;
  const description = (post.meta_description || post.excerpt || plain).slice(0, 300);
  const image = absolute(post.og_image_url || post.cover_image_url || "") || OG_FALLBACK;
  const cover = absolute(post.cover_image_url || "");
  const published = post.published_at ? new Date(post.published_at).toISOString() : "";
  const modified = post.updated_at ? new Date(post.updated_at).toISOString() : published;

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: String(post.title).slice(0, 110),
    description,
    image: [image],
    articleSection: post.category || undefined,
    wordCount: plain ? plain.split(/\s+/).length : undefined,
    keywords: post.meta_keywords || undefined,
    datePublished: published || undefined,
    dateModified: modified || undefined,
    inLanguage: "en-IN",
    author: { "@type": "Person", name: post.author_name || "The Super 30" },
    publisher: {
      "@type": "Organization",
      name: "The Super 30",
      url: SITE,
      logo: { "@type": "ImageObject", url: OG_FALLBACK },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const schema = post.json_ld ? [post.json_ld, breadcrumb] : [blogPosting, breadcrumb];

  const head = [
    `    <title>${esc(title)}</title>`,
    `    <meta name="description" content="${esc(description)}" />`,
    post.meta_keywords ? `    <meta name="keywords" content="${esc(post.meta_keywords)}" />` : "",
    `    <link rel="canonical" href="${esc(post.canonical_url || url)}" />`,
    `    <meta name="robots" content="index, follow" />`,
    `    <meta property="og:type" content="article" />`,
    `    <meta property="og:title" content="${esc(post.og_title || post.meta_title || post.title)}" />`,
    `    <meta property="og:description" content="${esc(post.og_description || description)}" />`,
    `    <meta property="og:url" content="${esc(url)}" />`,
    `    <meta property="og:image" content="${esc(image)}" />`,
    `    <meta property="og:image:alt" content="${esc(post.title)}" />`,
    published ? `    <meta property="article:published_time" content="${esc(published)}" />` : "",
    modified ? `    <meta property="article:modified_time" content="${esc(modified)}" />` : "",
    post.author_name ? `    <meta property="article:author" content="${esc(post.author_name)}" />` : "",
    post.category ? `    <meta property="article:section" content="${esc(post.category)}" />` : "",
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${esc(post.og_title || post.meta_title || post.title)}" />`,
    `    <meta name="twitter:description" content="${esc(post.og_description || description)}" />`,
    `    <meta name="twitter:image" content="${esc(image)}" />`,
    ...schema.map((node) => `    <script type="application/ld+json">${JSON.stringify(node)}</script>`),
  ]
    .filter(Boolean)
    .join("\n");

  const seo = wrapSeo(`      <article>
        <header>
          <h1>${esc(post.title)}</h1>
          ${post.excerpt ? `<p>${esc(post.excerpt)}</p>` : ""}
          <p>${[
            post.author_name ? `By ${post.author_name}` : "",
            published ? `Published ${published.slice(0, 10)}` : "",
            post.category || "",
            post.read_time || "",
          ]
            .filter(Boolean)
            .map(esc)
            .join(" · ")}</p>
          ${cover ? `<img src="${esc(cover)}" alt="${esc(post.title)}" />` : ""}
        </header>
        <section>
${article}
        </section>
        <footer>
          <p><a href="${esc(url)}">${esc(post.title)}</a> — The Super 30, AI Digital Marketing Agency, Bangalore, Karnataka, India. Phone: +91 89041 50555.</p>
          <p><a href="/blog">All articles</a></p>
        </footer>
      </article>`);

  return { head, seo };
};

// deno-lint-ignore no-explicit-any
const renderList = (posts: any[]) => {
  const url = `${SITE}/blog`;
  const title = "Blog - AI SEO & Digital Marketing Insights | The Super 30";
  const description =
    "Practical AI SEO, lead generation and performance marketing insights from The Super 30 — strategies, playbooks and case studies for growing brands.";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#list`,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const head = [
    `    <title>${esc(title)}</title>`,
    `    <meta name="description" content="${esc(description)}" />`,
    `    <link rel="canonical" href="${url}" />`,
    `    <meta name="robots" content="index, follow" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:title" content="${esc(title)}" />`,
    `    <meta property="og:description" content="${esc(description)}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:image" content="${OG_FALLBACK}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <script type="application/ld+json">${JSON.stringify(itemList)}</script>`,
  ].join("\n");

  const seo = wrapSeo(`      <article>
        <h1>Blog — AI SEO &amp; Digital Marketing Insights</h1>
        <ul>
${posts
  .map(
    (post) =>
      `          <li><a href="/blog/${esc(post.slug)}">${esc(post.title)}</a>${
        post.excerpt ? ` — ${esc(post.excerpt)}` : ""
      }</li>`
  )
  .join("\n")}
        </ul>
      </article>`);

  return { head, seo };
};

Deno.serve(async (req) => {
  const { pathname } = new URL(req.url);
  const slug = decodeURIComponent(pathname.replace(/^\/functions\/v1\/blog-ssr\/?/, "").replace(/\/+$/, ""));

  let shell: string;
  try {
    shell = await getShell();
  } catch (error) {
    return new Response(`Shell unavailable: ${(error as Error).message}`, { status: 502 });
  }

  const headers = {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=86400",
  };

  try {
    if (!slug || slug === "blog") {
      const posts = await query("status=eq.published&order=published_at.desc&limit=200");
      const { head, seo } = renderList(posts);
      return new Response(render(shell, head, seo), { headers });
    }

    const [post] = await query(`status=eq.published&slug=eq.${encodeURIComponent(slug)}&limit=1`);
    if (!post) return new Response(shell, { status: 404, headers });

    const { head, seo } = renderPost(post);
    return new Response(render(shell, head, seo), { headers });
  } catch (error) {
    console.error("blog-ssr error", error);
    // Never break the page: fall back to the plain SPA shell.
    return new Response(shell, { headers });
  }
});
