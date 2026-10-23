import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { improveArticleHtml } from "../src/lib/seoContent.js";
import { buildRouteGraph } from "../src/lib/schemaGraph.js";

test("internal editorial links are followable while external link policies remain", () => {
  const html = improveArticleHtml('<a href="/contact-us" rel="nofollow noopener">Contact</a><a href="https://example.org" rel="nofollow">External</a>', "Article");
  assert.match(html, /href="\/contact-us" rel="noopener"/);
  assert.match(html, /href="https:\/\/example.org" rel="nofollow"/);
});

test("blog schema uses CreativeWork image rather than WebPage-only properties", () => {
  const load = (name) => JSON.parse(fs.readFileSync(new URL(`../src/data/${name}.json`, import.meta.url)));
  const graph = buildRouteGraph("/blog", { org: load("organization"), routes: load("schemaRoutes"), faqs: load("faqs"), seo: load("seoMeta") });
  const blog = graph[0]["@graph"].find((node) => node["@type"] === "Blog");
  assert.ok(blog);
  assert.equal("breadcrumb" in blog, false);
  assert.equal("primaryImageOfPage" in blog, false);
  assert.ok(blog.image);
});
import { readFileSync as __read, readdirSync as __ls, statSync as __st, existsSync as __ex } from "node:fs";
import { join as __join } from "node:path";
import __assert from "node:assert/strict";
import { test as __test } from "node:test";
import { industryTitle as __it } from "../src/lib/seoContent.js";

__test("industry titles stay within 60 characters", () => {
  __assert.ok(__it("Hotel Management & Hospitality").length <= 60);
});

__test("every built page has exactly one <title>", { skip: !__ex("dist") }, () => {
  const walk = (d) => __ls(d).flatMap((f) => { const p = __join(d, f); return __st(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : []; });
  for (const f of walk("dist")) __assert.equal((__read(f, "utf8").match(/<title\b/g) || []).length, 1, f);
});
