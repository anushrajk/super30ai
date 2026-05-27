import meta from "./seoMeta.json";

export type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  canonical: string;
};

const data = meta as Record<string, SeoMeta>;

export const getSeo = (path: string): SeoMeta | undefined => data[path];
