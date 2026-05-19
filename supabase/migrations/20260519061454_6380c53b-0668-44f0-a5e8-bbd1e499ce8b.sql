-- Blogs table for CMS
CREATE TABLE public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL DEFAULT '',
  cover_image_url TEXT,
  category TEXT,
  read_time TEXT,
  author_id UUID NOT NULL,
  author_name TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  published_at TIMESTAMPTZ,
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  canonical_url TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image_url TEXT,
  json_ld JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_blogs_slug ON public.blogs(slug);
CREATE INDEX idx_blogs_status_published ON public.blogs(status, published_at DESC);
CREATE INDEX idx_blogs_author ON public.blogs(author_id);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Public read published blogs"
ON public.blogs FOR SELECT
USING (status = 'published');

-- Authenticated users can read all (for admin)
CREATE POLICY "Authenticated read all blogs"
ON public.blogs FOR SELECT
TO authenticated
USING (true);

-- Authenticated users can insert their own posts
CREATE POLICY "Authenticated insert own blog"
ON public.blogs FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = author_id);

-- Authors can update their own posts
CREATE POLICY "Authors update own blog"
ON public.blogs FOR UPDATE
TO authenticated
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

-- Authors can delete their own posts
CREATE POLICY "Authors delete own blog"
ON public.blogs FOR DELETE
TO authenticated
USING (auth.uid() = author_id);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.set_blogs_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW EXECUTE FUNCTION public.set_blogs_updated_at();