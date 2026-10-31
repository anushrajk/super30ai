import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type JournalPost = { id: string; slug: string; title: string; cover_image_url: string | null; category: string | null };

export function HomeJournal() {
  const [posts, setPosts] = useState<JournalPost[]>([]);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let active = true;
    supabase.from("blogs").select("id, slug, title, cover_image_url, category")
      .eq("status", "published").order("published_at", { ascending: false }).limit(3)
      .then(({ data, error }) => {
        if (!active) return;
        setFailed(Boolean(error));
        setPosts(data ?? []);
      });
    return () => { active = false; };
  }, []);
  return <section className="s30-section s30-journal">
    <div className="s30-container">
      <div className="s30-heading centered"><span className="s30-eyebrow">THE SUPER 30 JOURNAL</span><h2>Stay Updated with Industry<br />Trends Today</h2></div>
      {failed && <p className="text-center text-muted-foreground">Articles couldn’t be loaded right now.</p>}
      <div className="s30-three-grid">{posts.map(post => <Link className="s30-article" to={`/blog/${post.slug}`} key={post.id}>
        {post.cover_image_url && <img src={post.cover_image_url.replace(/\/storage\/v1\/object\/public\/blog-media\//g, "/functions/v1/blog-media/")} alt={post.title} width={600} height={400} loading="lazy" />}
        <div><span className="s30-eyebrow">{post.category || "INSIGHTS"}</span><h3>{post.title}</h3><span className="s30-text-link">Read article <ArrowUpRight size={15} /></span></div>
      </Link>)}</div>
      <Link className="s30-text-link journal-link" to="/blog">Explore the journal <ArrowUpRight size={16} /></Link>
    </div>
  </section>;
}