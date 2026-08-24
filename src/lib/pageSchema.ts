import schemaRoutes from "@/data/schemaRoutes.json";
import faqsData from "@/data/faqs.json";
import seoMetaData from "@/data/seoMeta.json";

export const SITE_ORIGIN = "https://www.thesuper30.ai";

type RouteSchema = {
  name: string;
  type: "Service" | "WebPage" | "Blog";
  serviceType?: string;
  faqSlug?: string;
  /** Page already hardcodes its own page/breadcrumb schema — emit only FAQPage. */
  faqOnly?: boolean;
};

type Faq = { question: string; answer: string };

const routes = schemaRoutes as Record<string, RouteSchema>;
const faqs = faqsData as Record<string, Faq[]>;
const seo = seoMetaData as Record<string, { title?: string; description?: string; canonical?: string }>;

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: "The Super 30",
  url: `${SITE_ORIGIN}/`,
  telephone: "+91 89041 50555",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}/favicon.png`,
  },
  image: `${SITE_ORIGIN}/favicon.png`,
  description:
    "The Super 30 is an AI-driven digital marketing agency in Bangalore offering SEO, lead generation, social media, design and web development services.",
  areaServed: { "@type": "City", name: "Bangalore" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/thesuper30.ai/"],
};

/**
 * Builds JSON-LD for a route from the data we already have
 * (route map + curated meta + page FAQs). Returns [] when the
 * route has no mapping (pages that hardcode their own schema).
 */
const homeFaqs = faqs["home"] ?? [];

const buildHomeSchema = (): Record<string, unknown>[] => {
  const meta = seo["/"] ?? {};
  const graph: Record<string, unknown>[] = [
    { "@context": "https://schema.org", ...ORGANIZATION },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: "The Super 30",
      url: `${SITE_ORIGIN}/`,
      description: meta.description || "",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ];
  if (homeFaqs.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return graph;
};

export const buildRouteSchema = (path: string): Record<string, unknown>[] => {
  if (path === "/") return buildHomeSchema();

  const route = routes[path];
  if (!route) return [];

  const meta = seo[path] ?? {};
  const url = meta.canonical || `${SITE_ORIGIN}${path}`;
  const name = route.name;
  const description = meta.description || "";

  const graph: Record<string, unknown>[] = route.faqOnly ? [] : [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: route.name, item: url },
      ],
    },
  ];

  if (route.type === "Service") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: route.serviceType || route.name,
      name,
      provider: { "@id": `${SITE_ORIGIN}/#organization` },
      description,
      url,
      areaServed: { "@type": "City", name: "Bangalore" },
    });
  } else {
    graph.push({
      "@context": "https://schema.org",
      "@type": route.type,
      name,
      description,
      url,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    });
  }

  const items = route.faqSlug ? faqs[route.faqSlug] ?? [] : [];
  if (items.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return graph;
};
