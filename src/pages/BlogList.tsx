import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowRight, Loader2, Search, Sparkles } from "lucide-react";

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

const BlogList = () => {
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

  return (
    <>
      <Helmet>
        <title>Blog - AI SEO & Lead Generation Insights | The Super 30</title>
        <meta name="description" content="Explore expert guides on AI SEO, performance marketing, lead generation, and proven digital growth strategies to scale your business - The Super 30 team." />
        <link rel="canonical" href="https://www.thesuper30.ai/blog" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <header className="mb-10 border-b border-border pb-8 md:mb-12 md:pb-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-3 block text-xs font-semibold uppercase text-editorial-accent">Knowledge Hub</span>
                <h1 className="text-4xl font-medium leading-tight text-editorial-ink sm:text-5xl md:text-7xl">
                  Super 30 <span className="block text-muted-foreground">Perspectives.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Practical insights on AI SEO, performance marketing, lead generation and digital growth.
                </p>
              </div>

              <label className="flex h-12 w-full items-center gap-3 border-b border-foreground/20 lg:max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="sr-only">Search articles</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search insights"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </label>
            </div>

            {!loading && categories.length > 1 && (
              <nav aria-label="Blog categories" className="mt-8 flex gap-2 overflow-x-auto pb-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    type="button"
                    size="sm"
                    variant={activeCategory === category ? "default" : "outline"}
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
                  <section className="bg-editorial-ink p-7 text-primary-foreground md:p-9">
                    <Sparkles className="mb-8 h-6 w-6 text-editorial-accent" />
                    <p className="text-xs font-semibold uppercase text-editorial-accent">Growth Consultation</p>
                    <h2 className="mt-3 text-2xl font-medium leading-tight">Turn your next insight into measurable growth.</h2>
                    <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">Talk with our team about AI SEO, lead generation and performance marketing.</p>
                    <Button asChild className="mt-7 w-full rounded-full bg-editorial-accent text-primary-foreground hover:bg-editorial-accent/90">
                      <Link to="/contact-us">Book a Consultation <ArrowRight /></Link>
                    </Button>
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

              <section className="mt-16 bg-editorial-tint px-6 py-10 md:mt-24 md:px-12 md:py-14">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
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
};

export default BlogList;