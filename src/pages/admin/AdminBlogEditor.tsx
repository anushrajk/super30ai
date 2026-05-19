import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RichTextEditor } from "@/components/cms/RichTextEditor";
import { slugify } from "@/lib/slugify";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Save, Eye } from "lucide-react";

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  category: string;
  read_time: string;
  author_name: string;
  status: "draft" | "published";
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image_url: string;
  json_ld: string;
}

const empty: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  cover_image_url: "",
  category: "",
  read_time: "",
  author_name: "",
  status: "draft",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
  og_title: "",
  og_description: "",
  og_image_url: "",
  json_ld: "",
};

const AdminBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth", { replace: true });
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
      if (error) {
        toast.error(error.message);
        navigate("/admin/blogs");
        return;
      }
      setForm({
        title: data.title ?? "",
        slug: data.slug ?? "",
        excerpt: data.excerpt ?? "",
        content: data.content ?? "",
        cover_image_url: data.cover_image_url ?? "",
        category: data.category ?? "",
        read_time: data.read_time ?? "",
        author_name: data.author_name ?? "",
        status: (data.status as "draft" | "published") ?? "draft",
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
        meta_keywords: data.meta_keywords ?? "",
        canonical_url: data.canonical_url ?? "",
        og_title: data.og_title ?? "",
        og_description: data.og_description ?? "",
        og_image_url: data.og_image_url ?? "",
        json_ld: data.json_ld ? JSON.stringify(data.json_ld, null, 2) : "",
      });
      setSlugTouched(true);
      setLoading(false);
    })();
  }, [id, isEdit, navigate]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleTitleChange = (v: string) => {
    update("title", v);
    if (!slugTouched) update("slug", slugify(v));
  };

  const handleSave = async (publish?: boolean) => {
    if (!user) return;
    if (!form.title.trim()) return toast.error("Title is required");
    if (!form.slug.trim()) return toast.error("Slug is required");

    let jsonLd: unknown = null;
    if (form.json_ld.trim()) {
      try {
        jsonLd = JSON.parse(form.json_ld);
      } catch {
        return toast.error("JSON-LD is not valid JSON");
      }
    }

    const status = publish === undefined ? form.status : publish ? "published" : "draft";

    const payload = {
      title: form.title.trim(),
      slug: slugify(form.slug),
      excerpt: form.excerpt.trim() || null,
      content: form.content,
      cover_image_url: form.cover_image_url.trim() || null,
      category: form.category.trim() || null,
      read_time: form.read_time.trim() || null,
      author_name: form.author_name.trim() || user.email || null,
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
      meta_title: form.meta_title.trim() || null,
      meta_description: form.meta_description.trim() || null,
      meta_keywords: form.meta_keywords.trim() || null,
      canonical_url: form.canonical_url.trim() || null,
      og_title: form.og_title.trim() || null,
      og_description: form.og_description.trim() || null,
      og_image_url: form.og_image_url.trim() || null,
      json_ld: jsonLd,
      author_id: user.id,
    };

    setSaving(true);
    if (isEdit) {
      const { error } = await supabase.from("blogs").update(payload).eq("id", id!);
      setSaving(false);
      if (error) return toast.error(error.message);
      toast.success(status === "published" ? "Published" : "Saved");
      setForm((f) => ({ ...f, status }));
    } else {
      const { data, error } = await supabase.from("blogs").insert(payload).select("id").single();
      setSaving(false);
      if (error) return toast.error(error.message);
      toast.success(status === "published" ? "Published" : "Saved as draft");
      navigate(`/admin/blogs/${data!.id}/edit`, { replace: true });
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  const liveUrl = `${window.location.origin}/blog/${form.slug || "your-slug"}`;

  return (
    <>
      <Helmet>
        <title>{isEdit ? "Edit post" : "New post"} — Blog CMS</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="min-h-screen bg-muted/30">
        <div className="border-b bg-background sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-2">
            <Link to="/admin/blogs" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-1" /> All posts
            </Link>
            <div className="flex gap-2">
              {form.status === "published" && (
                <Link to={`/blog/${form.slug}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" /> View live
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="sm" disabled={saving} onClick={() => handleSave(false)}>
                <Save className="w-4 h-4 mr-1" /> Save draft
              </Button>
              <Button size="sm" disabled={saving} onClick={() => handleSave(true)}>
                {saving ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : null}
                {form.status === "published" ? "Update" : "Publish"}
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Content</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input id="title" value={form.title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="A killer headline" />
                </div>
                <div>
                  <Label htmlFor="slug">URL slug *</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">/blog/</span>
                    <Input id="slug" value={form.slug} onChange={(e) => { setSlugTouched(true); update("slug", e.target.value); }} placeholder="my-post" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 break-all">Live URL: {liveUrl}</p>
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt (shown in listings)</Label>
                  <Textarea id="excerpt" rows={2} value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} maxLength={300} />
                </div>
                <div>
                  <Label>Body *</Label>
                  <RichTextEditor value={form.content} onChange={(v) => update("content", v)} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">SEO</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="meta_title">Meta title <span className="text-xs text-muted-foreground">({form.meta_title.length}/60)</span></Label>
                  <Input id="meta_title" value={form.meta_title} onChange={(e) => update("meta_title", e.target.value)} maxLength={70} placeholder={form.title} />
                </div>
                <div>
                  <Label htmlFor="meta_description">Meta description <span className="text-xs text-muted-foreground">({form.meta_description.length}/160)</span></Label>
                  <Textarea id="meta_description" rows={2} value={form.meta_description} onChange={(e) => update("meta_description", e.target.value)} maxLength={170} />
                </div>
                <div>
                  <Label htmlFor="meta_keywords">Meta keywords (comma-separated)</Label>
                  <Input id="meta_keywords" value={form.meta_keywords} onChange={(e) => update("meta_keywords", e.target.value)} placeholder="ai seo, performance marketing" />
                </div>
                <div>
                  <Label htmlFor="canonical_url">Canonical URL (optional)</Label>
                  <Input id="canonical_url" value={form.canonical_url} onChange={(e) => update("canonical_url", e.target.value)} placeholder={liveUrl} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="og_title">OG title</Label>
                    <Input id="og_title" value={form.og_title} onChange={(e) => update("og_title", e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="og_image_url">OG image URL</Label>
                    <Input id="og_image_url" value={form.og_image_url} onChange={(e) => update("og_image_url", e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="og_description">OG description</Label>
                  <Textarea id="og_description" rows={2} value={form.og_description} onChange={(e) => update("og_description", e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="json_ld">JSON-LD structured data (optional)</Label>
                  <Textarea id="json_ld" rows={6} className="font-mono text-xs" value={form.json_ld} onChange={(e) => update("json_ld", e.target.value)} placeholder='{"@context":"https://schema.org","@type":"Article",...}' />
                  <p className="text-xs text-muted-foreground mt-1">Leave empty for auto-generated Article schema.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Publish</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="status">Published</Label>
                  <Switch id="status" checked={form.status === "published"} onCheckedChange={(c) => update("status", c ? "published" : "draft")} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Drafts are not visible publicly. Published posts appear at the live URL and in the blog index.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Meta</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" value={form.category} onChange={(e) => update("category", e.target.value)} placeholder="AI SEO" />
                </div>
                <div>
                  <Label htmlFor="read_time">Read time</Label>
                  <Input id="read_time" value={form.read_time} onChange={(e) => update("read_time", e.target.value)} placeholder="5 min read" />
                </div>
                <div>
                  <Label htmlFor="author_name">Author name</Label>
                  <Input id="author_name" value={form.author_name} onChange={(e) => update("author_name", e.target.value)} placeholder={user?.email ?? ""} />
                </div>
                <div>
                  <Label htmlFor="cover">Cover image URL</Label>
                  <Input id="cover" value={form.cover_image_url} onChange={(e) => update("cover_image_url", e.target.value)} placeholder="https://..." />
                  {form.cover_image_url && (
                    <img src={form.cover_image_url} alt="Cover preview" className="mt-2 rounded-md w-full aspect-video object-cover" />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminBlogEditor;