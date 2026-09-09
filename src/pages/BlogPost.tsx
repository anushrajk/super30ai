import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { hasPrerenderedSchema } from "@/lib/pageSchema";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, User, Sparkles, Loader2, Share2 } from "lucide-react";
import { toast } from "sonner";
import type { Json } from "@/integrations/supabase/types";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  category: string | null;
  read_time: string | null;
  author_name: string | null;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  json_ld: Json | null;
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  cover_image_url: string | null;
  category: string | null;
  read_time: string | null;
}

const SITE = "https://www.thesuper30.ai";

/** Rewrite legacy public-bucket URLs to the public media proxy. */
const toMediaUrl = (url?: string | null): string | undefined =>
  url
    ? url.replace(
        /\/storage\/v1\/object\/public\/blog-media\//g,
        "/functions/v1/blog-media/"
      )
    : undefined;

/** Convert leftover markdown artifacts in stored HTML into proper semantic HTML. */
const normalizeContent = (html: string): string => {
  // Word and Google Docs frequently turn every space into a non-breaking
  // space. Convert those back so paragraphs wrap as normal prose.
  let out = html.replace(/&nbsp;|&#160;|\u00a0/gi, " ");

  // Legacy public-bucket URLs -> public edge-function media proxy
  out = out.replace(
    /\/storage\/v1\/object\/public\/blog-media\//g,
    "/functions/v1/blog-media/"
  );


  // <p>---</p> (or ***, ___) -> <hr>
  out = out.replace(/<p[^>]*>\s*(?:-{3,}|\*{3,}|_{3,})\s*<\/p>/gi, "<hr>");

  // <p>&gt; quoted text</p> -> <blockquote><p>text</p></blockquote>
  out = out.replace(
    /<p([^>]*)>\s*(?:&gt;|>)\s*([\s\S]*?)<\/p>/gi,
    (_m, attrs, inner) => `<blockquote><p${attrs}>${inner.trim()}</p></blockquote>`
  );

  // **bold** -> <strong>bold</strong>
  out = out.replace(/\*\*([^*<>]+)\*\*/g, "<strong>$1</strong>");

  // ## Heading lines wrapped in <p> -> real headings
  out = out.replace(
    /<p[^>]*>\s*(#{2,4})\s*([\s\S]*?)<\/p>/gi,
    (_m, hashes: string, inner: string) => {
      const level = Math.min(hashes.length, 4);
      return `<h${level}>${inner.trim()}</h${level}>`;
    }
  );

  // Merge adjacent blockquotes
  out = out.replace(/<\/blockquote>\s*<blockquote>/gi, "");

  // Pasted Word/Docs colour + background inline styles break the site typography
  out = out.replace(/\sstyle="[^"]*"/gi, "").replace(/\sstyle='[^']*'/gi, "");

  // A "Table of Contents" line pasted as a paragraph -> real heading
  out = out.replace(
    /<p[^>]*>(?:\s|<strong[^>]*>|<span[^>]*>|<b>)*table of contents\s*:?(?:\s|<\/strong>|<\/span>|<\/b>)*<\/p>/gi,
    "<h2>Table of Contents</h2>"
  );

  // Only the page header may carry an <h1>; demote in-body ones
  out = out.replace(/<h1([^>]*)>/gi, "<h2$1>").replace(/<\/h1>/gi, "</h2>");

  // Drop empty paragraphs that create random vertical gaps
  out = out.replace(
    /<p[^>]*>(?:\s|<br\s*\/?>|<span[^>]*>|<\/span>|<strong[^>]*>|<\/strong>|<em[^>]*>|<\/em>)*<\/p>/gi,
    ""
  );

  return out;
};

const formatPublishedDate = (date: string): string => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(new Date(date));
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  return `${value("day")} ${value("month")} ${value("year")} ${value("hour")}:${value("minute")} ${value("dayPeriod").toUpperCase()} IST`;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();
      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data as Post);
        const { data: related } = await supabase
          .from("blogs")
          .select("id, slug, title, cover_image_url, category, read_time")
          .eq("status", "published")
          .neq("slug", slug)
          .order("published_at", { ascending: false })
          .limit(3);
        setRelatedPosts((related as RelatedPost[]) ?? []);
      }
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </main>
      </>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Blog post not found</h1>
            <Link to="/blog"><Button><ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog</Button></Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const url = `${SITE}/blog/${post.slug}`;
  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || "";
  const ogTitle = post.og_title || title;
  const ogDesc = post.og_description || description;
  const coverImage = toMediaUrl(post.cover_image_url);
  const ogImage = toMediaUrl(post.og_image_url) || coverImage;
  const canonical = post.canonical_url || url;

  const jsonLd = post.json_ld ?? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: ogImage ? [ogImage] : undefined,
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: post.author_name ? { "@type": "Person", name: post.author_name } : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "The Super 30",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {post.meta_keywords && <meta name="keywords" content={post.meta_keywords} />}
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDesc} />
        <meta property="og:url" content={url} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDesc} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        {post.published_at && <meta property="article:published_time" content={post.published_at} />}
        {post.author_name && <meta property="article:author" content={post.author_name} />}
        {!hasPrerenderedSchema() && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-20 md:pt-24">
        <section className="border-b border-border bg-editorial-ink text-primary-foreground">
          <div className="container mx-auto flex flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between md:py-7">
            <div>
              <p className="text-xs font-semibold uppercase text-editorial-accent">The Super 30 Growth Brief</p>
              <p className="mt-1 text-lg font-medium md:text-xl">Turn marketing insight into measurable revenue.</p>
            </div>
            <Button asChild className="w-full rounded-full bg-editorial-accent text-primary-foreground hover:bg-editorial-accent/90 md:w-auto">
              <Link to="/contact-us">Book a Free Consultation <ArrowRight /></Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 pt-8 md:pt-12">
          <Link to="/blog" className="mb-7 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-editorial-accent">
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>

          <header className="max-w-4xl mb-8 md:mb-10">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
                {post.category}
              </span>
            )}
            <h1 className="mb-5 text-3xl font-medium leading-tight text-editorial-ink sm:text-4xl md:text-6xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mt-6 pb-6 border-b border-border">
              {post.author_name && (
                <div className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author_name}</div>
              )}
              {post.published_at && (
                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatPublishedDate(post.published_at)}</div>
              )}
              {post.read_time && (
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.read_time}</div>
              )}
              <button
                onClick={() => {
                  if (navigator.share) navigator.share({ title: post.title, url }).catch(() => {});
                  else { navigator.clipboard.writeText(url); toast.success("Link copied"); }
                }}
                className="inline-flex items-center gap-1.5 transition hover:text-editorial-accent md:ml-auto"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </header>

          {coverImage && (
            <figure className="mb-10 overflow-hidden bg-muted md:mb-14">
              <img
                src={coverImage}
                loading="eager"
                onError={(e) => { (e.currentTarget.closest("figure") as HTMLElement | null)?.remove(); }}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>
          )}
        </div>

        <div className="container mx-auto grid max-w-6xl gap-12 px-4 pb-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <article className="min-w-0">
            <div className="article-inline-cta mb-10">
              <div>
                <p className="article-inline-cta__eyebrow">Free growth review</p>
                <h2>Find the biggest opportunities hiding in your digital strategy.</h2>
              </div>
              <Button asChild className="rounded-full bg-editorial-accent text-primary-foreground hover:bg-editorial-accent/90">
                <Link to="/contact-us">Get Your Review <ArrowRight /></Link>
              </Button>
            </div>

            <div className="blog-content" dangerouslySetInnerHTML={{ __html: normalizeContent(post.content) }} />

            <section className="mt-12 bg-editorial-ink px-6 py-9 text-primary-foreground md:px-10 md:py-11">
              <Sparkles className="mb-5 h-6 w-6 text-editorial-accent" />
              <p className="text-xs font-semibold uppercase text-editorial-accent">Your next growth move</p>
              <h2 className="mt-3 max-w-2xl text-2xl font-medium leading-tight md:text-3xl">Build an AI-powered marketing strategy that delivers qualified leads.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/70 md:text-base">Work with The Super 30 on AI SEO, lead generation and performance marketing built around measurable outcomes.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-editorial-accent text-primary-foreground hover:bg-editorial-accent/90"><Link to="/contact-us">Book a Consultation <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/our-work">See Our Work</Link></Button>
              </div>
            </section>

            {post.author_name && (
              <section className="mt-10 flex items-start gap-4 border-y border-border py-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-editorial-tint text-editorial-ink"><User className="h-5 w-5" /></div>
                <div><p className="text-xs font-semibold uppercase text-editorial-accent">Written by</p><h2 className="mt-1 text-lg font-medium text-editorial-ink">{post.author_name}</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Insights from The Super 30 team on practical, revenue-focused digital growth.</p></div>
              </section>
            )}
          </article>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start" aria-label="Article resources">
            <section className="bg-editorial-tint p-7">
              <p className="text-xs font-semibold uppercase text-editorial-accent">Grow with confidence</p>
              <h2 className="mt-3 text-2xl font-medium leading-tight text-editorial-ink">Get a clear plan for your next stage of growth.</h2>
              <ul className="mt-5 space-y-3 text-sm text-editorial-ink/80">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-editorial-accent" />AI SEO opportunity review</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-editorial-accent" />Lead generation roadmap</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-editorial-accent" />Performance marketing audit</li>
              </ul>
              <Button asChild className="mt-7 w-full rounded-full bg-editorial-ink text-primary-foreground hover:bg-editorial-ink/90"><Link to="/contact-us">Talk to an Expert <ArrowRight /></Link></Button>
            </section>

            <section className="border border-border p-6">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Explore services</p>
              <nav className="mt-4 divide-y divide-border" aria-label="Related services">
                <Link to="/seo-company-bangalore" className="flex items-center justify-between py-3 text-sm font-medium text-editorial-ink hover:text-editorial-accent">AI SEO <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/lead-generation-agency-bangalore" className="flex items-center justify-between py-3 text-sm font-medium text-editorial-ink hover:text-editorial-accent">Lead Generation <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/digital-marketing-agency-bangalore" className="flex items-center justify-between py-3 text-sm font-medium text-editorial-ink hover:text-editorial-accent">Digital Marketing <ArrowRight className="h-4 w-4" /></Link>
              </nav>
            </section>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-14 md:py-20">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mb-8 flex items-end justify-between"><div><p className="text-xs font-semibold uppercase text-editorial-accent">Continue reading</p><h2 className="mt-2 text-2xl font-medium text-editorial-ink md:text-3xl">Suggested articles</h2></div><Link to="/blog" className="hidden items-center gap-2 text-sm font-medium text-editorial-ink hover:text-editorial-accent sm:flex">View all <ArrowRight className="h-4 w-4" /></Link></div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">{related.cover_image_url && <img src={toMediaUrl(related.cover_image_url)} alt={related.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />}</div>
                    <p className="mt-4 text-xs font-semibold uppercase text-editorial-accent">{related.category ?? "Insights"}{related.read_time ? ` · ${related.read_time}` : ""}</p>
                    <h3 className="mt-2 text-lg font-medium leading-snug text-editorial-ink transition-colors group-hover:text-editorial-accent">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;