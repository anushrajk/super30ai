import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Sparkles, Loader2 } from "lucide-react";
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

const SITE = "https://super30ai.lovable.app";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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
  const ogImage = post.og_image_url || post.cover_image_url || undefined;
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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {post.cover_image_url && (
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto max-w-3xl">
                {post.category && (
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                )}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{post.title}</h1>
              </div>
            </div>
          </div>
        )}

        {!post.cover_image_url && (
          <div className="container mx-auto max-w-3xl px-4 pt-8">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                {post.category}
              </span>
            )}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{post.title}</h1>
          </div>
        )}

        <div className="container mx-auto max-w-3xl px-4 py-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {post.author_name && (
              <div className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author_name}</div>
            )}
            {post.published_at && (
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.published_at).toLocaleDateString()}</div>
            )}
            {post.read_time && (
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.read_time}</div>
            )}
          </div>
        </div>

        <article className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 p-6 md:p-10 rounded-2xl bg-muted/50 border border-border text-center">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Ready to dominate AI-powered search?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Join 300+ brands that trust The Super 30 for AI SEO and lead generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/seo-company-bangalore">
                <Button size="lg">Start Free Audit <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline">Talk to Our Experts</Button>
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <Link to="/blog" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;