import schemaRoutes from "@/data/schemaRoutes.json";
import faqsData from "@/data/faqs.json";
import seoMetaData from "@/data/seoMeta.json";

export const SITE_ORIGIN = "https://www.thesuper30.ai";

type RouteSchema = {
  name: string;
  type: "Service" | "WebPage" | "Blog";
  serviceType?: string;
  faqSlug?: string;
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
export const buildRouteSchema = (path: string): Record<string, unknown>[] => {
  const route = routes[path];
  if (!route) return [];

  const meta = seo[path] ?? {};
  const url = meta.canonical || `${SITE_ORIGIN}${path}`;
  const name = meta.title || route.name;
  const description = meta.description || "";

  const graph: Record<string, unknown>[] = [
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
      description,
      url,
      provider: ORGANIZATION,
      areaServed: { "@type": "City", name: "Bangalore" },
    });
  } else {
    graph.push({
      "@context": "https://schema.org",
      "@type": route.type,
      name,
      description,
      url,
      isPartOf: { "@type": "WebSite", name: "The Super 30", url: `${SITE_ORIGIN}/` },
      publisher: ORGANIZATION,
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
