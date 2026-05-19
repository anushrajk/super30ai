import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";

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

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Helmet>
        <title>Blog — AI SEO & Lead Generation Insights | The Super 30</title>
        <meta name="description" content="Practical guides on AI SEO, performance marketing and lead generation from The Super 30 team." />
        <link rel="canonical" href="https://super30ai.lovable.app/blog" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-20 md:pt-24 bg-background">
        <div className="container mx-auto px-4 py-10">
          <header className="max-w-2xl mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Blog</h1>
            <p className="text-muted-foreground">Insights on AI SEO, performance marketing and growth.</p>
          </header>

          {loading ? (
            <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin" /></div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 border border-dashed rounded-lg text-muted-foreground">
              No posts published yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-background hover:border-primary/40 transition overflow-hidden flex flex-col"
                >
                  {p.cover_image_url ? (
                    <img src={p.cover_image_url} alt={p.title} className="w-full aspect-video object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full aspect-video bg-gradient-to-br from-muted to-muted/60" />
                  )}
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    {p.category && (
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">{p.category}</span>
                    )}
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition line-clamp-2">{p.title}</h2>
                    {p.excerpt && <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-3">
                      {p.published_at && (
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(p.published_at).toLocaleDateString()}</span>
                      )}
                      {p.read_time && (
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.read_time}</span>
                      )}
                      <span className="ml-auto flex items-center gap-1 text-primary">Read <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogList;