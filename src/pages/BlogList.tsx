import { forwardRef, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowRight, Loader2, Search, Sparkles, BookOpen, ChartNoAxesCombined, SearchCheck, Target } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string | null;
  read_time: string | null;
  author_name: string | null;
  published_at: string | null;
}

/** Rewrite legacy public-bucket URLs to the public media proxy. */
const toMediaUrl = (url?: string | null): string | undefined =>
  url
    ? url.replace(
        /\/storage\/v1\/object\/public\/blog-media\//g,
        "/functions/v1/blog-media/"
      )
    : undefined;

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

const ArticleImage = ({ post, priority = false }: { post: Post; priority?: boolean }) => (
  <div className="aspect-[16/9] overflow-hidden bg-muted">
    {post.cover_image_url ? (
      <img
        src={toMediaUrl(post.cover_image_url)}
        alt={post.title}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    ) : (
      <div className="h-full w-full bg-muted" aria-hidden="true" />
    )}
  </div>
);

const BlogList = forwardRef<HTMLElement>((_, ref) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blogs")
        .select("id, slug, title, excerpt, cover_image_url, category, read_time, author_name, published_at")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      setPosts((data as Post[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category).filter((category): category is string => Boolean(category))))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesQuery = !normalizedQuery || `${post.title} ${post.excerpt ?? ""} ${post.category ?? ""}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, posts, query]);

  const featuredPost = filteredPosts[0];
  const latestPosts = filteredPosts.slice(1, 4);
  const editorialPicks = filteredPosts.slice(1, 4);
  const topicGroups = categories
    .filter((category) => category !== "All")
    .map((category) => ({
      category,
      count: posts.filter((post) => post.category === category).length,
    }));

  const focusAreas = [
    { title: "AI SEO", description: "Search visibility, content systems and strategies built for AI-powered discovery.", href: "/seo-company-bangalore", icon: SearchCheck },
    { title: "Lead Generation", description: "Practical frameworks for attracting and converting qualified business opportunities.", href: "/lead-generation-agency-bangalore", icon: Target },
    { title: "Performance Marketing", description: "Sharper campaign decisions grounded in measurement, testing and profitable growth.", href: "/lead-generation-agency-bangalore", icon: ChartNoAxesCombined },
  ];

  return (
    <>
      <Helmet>
        <title>Blog - AI SEO & Lead Generation Insights | The Super 30</title>
        <meta name="description" content="Explore expert guides on AI SEO, performance marketing, lead generation, and proven digital growth strategies to scale your business - The Super 30 team." />
        <link rel="canonical" href="https://www.thesuper30.ai/blog" />
      </Helmet>
      <Navbar />
      <main ref={ref} className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <header className="mb-10 md:mb-14">
            {/* Orange + Black hero banner */}
            <div className="relative overflow-hidden rounded-2xl bg-black md:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-orange))]/20 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[hsl(var(--brand-orange))]/30 blur-3xl md:h-56 md:w-56" aria-hidden="true" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[hsl(var(--brand-orange))]/20 blur-2xl md:h-48 md:w-48" aria-hidden="true" />

              <div className="relative flex flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-12 md:py-14">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-orange))]" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--brand-orange))]">The Super 30 Journal</span>
                  </div>
                  <h1 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                    Super 30 <span className="text-[hsl(var(--brand-orange))]">Perspectives.</span>
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                    Practical insights on AI SEO, performance marketing, lead generation and digital growth.
                  </p>
                </div>

                <div className="w-full md:max-w-sm">
                  <label className="flex h-12 items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 backdrop-blur-sm transition-all focus-within:border-[hsl(var(--brand-orange))] focus-within:bg-white/15 md:h-14">
                    <Search className="h-5 w-5 text-[hsl(var(--brand-orange))]" aria-hidden="true" />
                    <span className="sr-only">Search articles</span>
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search insights"
                      className="h-full min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/50"
                    />
                  </label>
                  <p className="mt-2.5 text-xs text-white/50">
                    {loading ? "Loading articles…" : `${posts.length} expert article${posts.length === 1 ? "" : "s"} available`}
                  </p>
                </div>
              </div>

              <div className="relative border-t border-white/10 px-6 py-3 md:px-12">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-white/60">
                  <span className="text-[hsl(var(--brand-orange))]">Explore topics:</span>
                  <span>AI SEO</span>
                  <span className="hidden text-white/30 sm:inline">•</span>
                  <span>Lead Generation</span>
                  <span className="hidden text-white/30 sm:inline">•</span>
                  <span>Performance Marketing</span>
                  <span className="hidden text-white/30 sm:inline">•</span>
                  <span>Digital Growth</span>
                </div>
              </div>
            </div>

            {!loading && categories.length > 1 && (
              <nav aria-label="Blog categories" className="flex items-center gap-2 overflow-x-auto border-t border-border py-4">
                <span className="mr-2 shrink-0 text-[11px] font-semibold uppercase text-muted-foreground">Explore</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    type="button"
                    size="sm"
                    variant={activeCategory === category ? "default" : "ghost"}
                    onClick={() => setActiveCategory(category)}
                    className="shrink-0 rounded-full px-5"
                  >
                    {category}
                  </Button>
                ))}
              </nav>
            )}
          </header>

          {loading ? (
            <div className="flex justify-center py-24"><Loader2 className="h-6 w-6 animate-spin text-editorial-accent" /></div>
          ) : filteredPosts.length === 0 ? (
            <div className="border-y border-border py-20 text-center text-muted-foreground">
              No articles match your search.
            </div>
          ) : (
            <>
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <Link to={`/blog/${featuredPost.slug}`} className="group lg:col-span-8">
                  <ArticleImage post={featuredPost} priority />
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-editorial-accent">
                    <span>Featured Insight</span><span className="h-px w-8 bg-editorial-accent" />
                    {featuredPost.read_time && <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3.5 w-3.5" />{featuredPost.read_time}</span>}
                  </div>
                  <h2 className="mt-4 max-w-4xl text-2xl font-medium leading-tight text-editorial-ink transition-colors group-hover:text-editorial-accent sm:text-3xl md:text-4xl">{featuredPost.title}</h2>
                  {featuredPost.excerpt && <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{featuredPost.excerpt}</p>}
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    {featuredPost.author_name && <span className="font-medium text-foreground">By {featuredPost.author_name}</span>}
                    {featuredPost.published_at && <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatPublishedDate(featuredPost.published_at)}</span>}
                  </div>
                </Link>

                <aside className="space-y-10 lg:col-span-4">
                  <section className="relative overflow-hidden rounded-2xl bg-editorial-ink p-7 text-primary-foreground md:p-9">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-editorial-accent/10 blur-2xl" aria-hidden="true" />
                    <div className="relative">
                      <Sparkles className="mb-8 h-6 w-6 text-editorial-accent" />
                      <p className="text-xs font-semibold uppercase text-editorial-accent">Growth Consultation</p>
                      <h2 className="mt-3 text-2xl font-medium leading-tight">Turn your next insight into measurable growth.</h2>
                      <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">Talk with our team about AI SEO, lead generation and performance marketing.</p>
                      <Button asChild className="mt-7 w-full rounded-full bg-editorial-accent text-primary-foreground hover:bg-editorial-accent/90">
                        <Link to="/contact-us">Book a Consultation <ArrowRight /></Link>
                      </Button>
                    </div>
                  </section>

                  {latestPosts.length > 0 && (
                    <section>
                      <h2 className="border-b border-border pb-4 text-xs font-semibold uppercase text-muted-foreground">Latest Articles</h2>
                      <ol className="divide-y divide-border">
                        {latestPosts.map((post, index) => (
                          <li key={post.id}>
                            <Link to={`/blog/${post.slug}`} className="group flex gap-4 py-5">
                              <span className="text-2xl text-border">{String(index + 1).padStart(2, "0")}</span>
                              <span>
                                <span className="line-clamp-2 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-editorial-accent">{post.title}</span>
                                <span className="mt-2 block text-xs uppercase text-muted-foreground">{post.category ?? "Insights"}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}
                </aside>
              </div>

              {editorialPicks.length > 0 && (
              <section className="relative mt-16 overflow-hidden rounded-3xl bg-editorial-ink px-6 py-10 text-primary-foreground md:mt-24 md:px-10 md:py-14">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-editorial-accent/10 blur-3xl" aria-hidden="true" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-editorial-accent/5 blur-3xl" aria-hidden="true" />
                  <div className="relative">
                    <div className="mb-8 flex flex-col gap-3 border-b border-primary-foreground/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase text-editorial-accent">Selected by our team</p>
                        <h2 className="mt-2 text-2xl font-medium md:text-3xl">Editor's selection</h2>
                      </div>
                      <p className="max-w-md text-sm leading-relaxed text-primary-foreground/60">Focused reading for teams building a stronger, more measurable digital growth engine.</p>
                    </div>
                    <div className="grid divide-y divide-primary-foreground/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                      {editorialPicks.map((post, index) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="group flex min-h-56 flex-col justify-between py-7 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                          <div>
                            <div className="flex items-center justify-between text-xs uppercase text-primary-foreground/50">
                              <span>{post.category ?? "Insights"}</span>
                              <span>{String(index + 1).padStart(2, "0")}</span>
                            </div>
                            <h3 className="mt-5 text-xl font-medium leading-snug transition-colors group-hover:text-editorial-accent md:text-2xl">{post.title}</h3>
                          </div>
                          <span className="mt-8 flex items-center gap-2 text-sm font-medium text-editorial-accent">Read insight <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              <section className="mt-16 border-y border-border py-12 md:mt-24 md:py-16">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
                  <div>
                    <p className="text-xs font-semibold uppercase text-editorial-accent">Growth library</p>
                    <h2 className="mt-3 text-2xl font-medium leading-tight text-editorial-ink md:text-4xl">Start with the outcome you need.</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">Explore specialist thinking across the core areas that shape sustainable digital growth.</p>
                  </div>
                  <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
                    {focusAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <Link key={area.title} to={area.href} className="group flex min-h-64 flex-col bg-background p-7 transition-colors hover:bg-editorial-tint">
                          <Icon className="h-6 w-6 text-editorial-accent" aria-hidden="true" />
                          <h3 className="mt-10 text-xl font-medium text-editorial-ink">{area.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                          <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-editorial-ink">Explore topic <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section className="mt-16 border-t border-border pt-10 md:mt-24 md:pt-14">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div><p className="text-xs font-semibold uppercase text-editorial-accent">Browse the journal</p><h2 className="mt-2 text-2xl font-medium text-editorial-ink md:text-3xl">More expert insights</h2></div>
                  <span className="hidden text-sm text-muted-foreground sm:block">{filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}</span>
                </div>
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.slice(1).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col">
                      <ArticleImage post={post} />
                      <div className="mt-5 flex items-center gap-3 text-xs uppercase text-muted-foreground"><span className="text-editorial-accent">{post.category ?? "Insights"}</span>{post.read_time && <><span>•</span><span>{post.read_time}</span></>}</div>
                      <h3 className="mt-3 text-xl font-medium leading-snug text-editorial-ink transition-colors group-hover:text-editorial-accent">{post.title}</h3>
                      {post.excerpt && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>}
                      <span className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                    </Link>
                  ))}
                </div>
              </section>

              {topicGroups.length > 0 && (
                <section className="mt-16 md:mt-24">
                  <div className="mb-8 flex items-end justify-between gap-4">
                    <div><p className="text-xs font-semibold uppercase text-editorial-accent">Explore the archive</p><h2 className="mt-2 text-2xl font-medium text-editorial-ink md:text-3xl">Insights by topic</h2></div>
                    <BookOpen className="hidden h-7 w-7 text-editorial-accent sm:block" aria-hidden="true" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {topicGroups.map(({ category, count }, index) => (
                      <Button
                        key={category}
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setActiveCategory(category);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group h-auto min-h-32 justify-between rounded-2xl border-border px-6 py-5 text-left hover:border-editorial-accent hover:bg-editorial-tint"
                      >
                        <span className="min-w-0"><span className="block text-xs font-normal text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><span className="mt-4 block whitespace-normal text-base font-medium text-editorial-ink">{category}</span></span>
                        <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-colors group-hover:border-editorial-accent group-hover:text-editorial-accent">{count}</span>
                      </Button>
                    ))}
                  </div>
                </section>
              )}

              <section className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-editorial-tint px-6 py-10 md:mt-24 md:px-12 md:py-14">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-editorial-accent/10 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-editorial-accent/5 blur-3xl" aria-hidden="true" />
                <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl"><p className="text-xs font-semibold uppercase text-editorial-accent">Ready to grow?</p><h2 className="mt-3 text-2xl font-medium leading-tight text-editorial-ink md:text-4xl">Build a smarter digital growth strategy.</h2><p className="mt-3 text-muted-foreground">Get a focused consultation with The Super 30 team.</p></div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="rounded-full bg-editorial-accent text-primary-foreground hover:bg-editorial-accent/90"><Link to="/contact-us">Get Free Consultation <ArrowRight /></Link></Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-editorial-ink text-editorial-ink hover:bg-background"><Link to="/our-work">See Our Work</Link></Button>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
});

BlogList.displayName = "BlogList";

export default BlogList;