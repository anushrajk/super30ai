import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Edit3, Trash2, ExternalLink, LogOut, Loader2 } from "lucide-react";

interface BlogRow {
  id: string;
  slug: string;
  title: string;
  status: "draft" | "published";
  author_id: string;
  author_name: string | null;
  published_at: string | null;
  updated_at: string;
}

const AdminBlogs = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth", { replace: true });
  }, [user, authLoading, navigate]);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("id, slug, title, status, author_id, author_name, published_at, updated_at")
      .order("updated_at", { ascending: false });
    if (error) toast.error(error.message);
    setPosts((data as BlogRow[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    fetchPosts();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog CMS — Manage Posts</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="min-h-screen bg-muted/30">
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Blog CMS</h1>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <Link to="/blog" target="_blank">
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-1" /> View blog
                </Button>
              </Link>
              <Link to="/admin/blogs/new">
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-1" /> New post
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 border border-dashed rounded-lg bg-background">
              <p className="text-muted-foreground mb-4">No posts yet. Create your first one.</p>
              <Link to="/admin/blogs/new">
                <Button><Plus className="w-4 h-4 mr-1" /> New post</Button>
              </Link>
            </div>
          ) : (
            <div className="bg-background rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="text-left px-4 py-3">Title</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Slug</th>
                    <th className="text-left px-4 py-3">Updated</th>
                    <th className="text-right px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((p) => {
                    const mine = p.author_id === user.id;
                    return (
                      <tr key={p.id} className="border-t">
                        <td className="px-4 py-3 font-medium">{p.title}</td>
                        <td className="px-4 py-3">
                          <Badge variant={p.status === "published" ? "default" : "secondary"}>
                            {p.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">/{p.slug}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(p.updated_at).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-1">
                            {p.status === "published" && (
                              <Link to={`/blog/${p.slug}`} target="_blank">
                                <Button size="icon" variant="ghost" title="View">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </Link>
                            )}
                            {mine ? (
                              <>
                                <Link to={`/admin/blogs/${p.id}/edit`}>
                                  <Button size="icon" variant="ghost" title="Edit">
                                    <Edit3 className="w-4 h-4" />
                                  </Button>
                                </Link>
                                <Button size="icon" variant="ghost" onClick={() => handleDelete(p.id, p.title)} title="Delete">
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              </>
                            ) : (
                              <span className="text-xs text-muted-foreground pr-2">by {p.author_name ?? "—"}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default AdminBlogs;