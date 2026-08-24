/**
 * Single source of truth for the site's JSON-LD.
 * Consumed at runtime by src/lib/pageSchema.ts (<PageSchema />)
 * and at build time by scripts/generate-route-seo.mjs so the
 * prerendered HTML and the React app emit identical structured data.
 */

export const SITE_ORIGIN = "https://www.thesuper30.ai";

const ORG_ID = `${SITE_ORIGIN}/#organization`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

const abs = (path) => (path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`);
const pageId = (url) => `${url}#webpage`;

const areaServedNodes = (org) =>
  (org.areaServed || []).map((a) => ({ "@type": a.type, name: a.name }));

const ratingNode = (rating) =>
  rating
    ? {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        bestRating: rating.bestRating,
        worstRating: rating.worstRating,
        reviewCount: rating.reviewCount,
      }
    : undefined;

/** LocalBusiness (ProfessionalService) node — carries NAP, geo, hours, price range, rating. */
export const buildOrganizationNode = (org) => {
  const node = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: org.name,
    legalName: org.legalName,
    alternateName: org.alternateName,
    url: `${SITE_ORIGIN}/`,
    logo: { "@type": "ImageObject", "@id": `${SITE_ORIGIN}/#logo`, url: `${SITE_ORIGIN}/favicon.png`, caption: org.name },
    image: { "@id": `${SITE_ORIGIN}/#logo` },
    description: org.description,
    slogan: org.slogan,
    telephone: org.telephone,
    email: org.email,
    foundingDate: org.foundingDate,
    numberOfEmployees: { "@type": "QuantitativeValue", value: org.numberOfEmployees },
    priceRange: org.priceRange,
    currenciesAccepted: org.currenciesAccepted,
    paymentAccepted: org.paymentAccepted,
    knowsLanguage: org.knowsLanguage,
    address: { "@type": "PostalAddress", ...org.address },
    geo: { "@type": "GeoCoordinates", latitude: org.geo.latitude, longitude: org.geo.longitude },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${org.geo.latitude},${org.geo.longitude}`,
    openingHoursSpecification: (org.openingHours || []).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: areaServedNodes(org),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: org.telephone,
        email: org.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    ],
    aggregateRating: ratingNode(org.aggregateRating),
    sameAs: org.sameAs,
  };
  return prune(node);
};

const prune = (value) => {
  if (Array.isArray(value)) return value.map(prune).filter((v) => v !== undefined);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const cleaned = prune(v);
      if (cleaned === undefined || cleaned === null || cleaned === "") continue;
      if (Array.isArray(cleaned) && cleaned.length === 0) continue;
      out[k] = cleaned;
    }
    return out;
  }
  return value;
};

const faqNode = (url, items) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

const breadcrumbNode = (url, trail) => ({
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: trail.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

const buildTrail = (path, routes) => {
  const trail = [{ name: "Home", url: `${SITE_ORIGIN}/` }];
  const route = routes[path];
  if (!route) return trail;
  const parentPath = route.parent;
  const parent = parentPath ? routes[parentPath] : null;
  if (parent) trail.push({ name: parent.name, url: abs(parentPath) });
  trail.push({ name: route.name, url: abs(path) });
  return trail;
};

const serviceOffer = (org, url, price) => ({
  "@type": "Offer",
  url,
  priceCurrency: org.defaultOffer.priceCurrency,
  price: price ?? org.defaultOffer.lowPrice,
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: org.defaultOffer.priceCurrency,
    minPrice: price ?? org.defaultOffer.lowPrice,
    valueAddedTaxIncluded: false,
  },
  availability: "https://schema.org/InStock",
  areaServed: areaServedNodes(org),
  seller: { "@id": ORG_ID },
});

/**
 * @param {string} path        route path, e.g. "/seo-company-bangalore"
 * @param {object} data        { org, routes, faqs, seo }
 * @returns {object[]}         array of JSON-LD documents (one @graph document)
 */
export const buildRouteGraph = (path, data) => {
  const { org, routes, faqs, seo } = data;
  const meta = seo[path] || {};
  const url = meta.canonical || abs(path);
  const nodes = [];

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: org.name,
    url: `${SITE_ORIGIN}/`,
    description: (seo["/"] || {}).description || org.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };

  if (path === "/") {
    const primaries = Object.entries(routes).filter(([, r]) => r.primary);
    nodes.push(buildOrganizationNode(org));
    nodes.push(website);
    nodes.push(
      prune({
        "@type": "WebPage",
        "@id": pageId(url),
        url,
        name: meta.title,
        description: meta.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        primaryImageOfPage: { "@id": `${SITE_ORIGIN}/#logo` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      })
    );
    nodes.push(breadcrumbNode(url, [{ name: "Home", url: `${SITE_ORIGIN}/` }]));

    // Parent (menu-level) services get priority on the home page.
    for (const [servicePath, route] of primaries) {
      const serviceUrl = (seo[servicePath] || {}).canonical || abs(servicePath);
      nodes.push(
        prune({
          "@type": "Service",
          "@id": `${serviceUrl}#service`,
          name: route.name,
          serviceType: route.serviceType || route.name,
          description: (seo[servicePath] || {}).description,
          url: serviceUrl,
          provider: { "@id": ORG_ID },
          areaServed: areaServedNodes(org),
          offers: serviceOffer(org, serviceUrl, route.price),
          aggregateRating: ratingNode(org.aggregateRating),
        })
      );
    }

    nodes.push({
      "@type": "OfferCatalog",
      "@id": `${SITE_ORIGIN}/#services`,
      name: "Digital Marketing Services",
      itemListElement: primaries.map(([servicePath], i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@id": `${(seo[servicePath] || {}).canonical || abs(servicePath)}#service` },
      })),
    });

    const homeFaqs = faqs["home"] || [];
    if (homeFaqs.length) nodes.push(faqNode(url, homeFaqs));

    return [{ "@context": "https://schema.org", "@graph": nodes }];
  }

  const route = routes[path];
  if (!route) return [];

  nodes.push(website);
  nodes.push(breadcrumbNode(url, buildTrail(path, routes)));

  const pageType = route.type === "Service" ? "WebPage" : route.type;
  nodes.push(
    prune({
      "@type": pageType,
      "@id": pageId(url),
      url,
      name: meta.title || route.name,
      description: meta.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      about: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      primaryImageOfPage: { "@id": `${SITE_ORIGIN}/#logo` },
    })
  );

  if (route.type === "Service") {
    nodes.push(
      prune({
        "@type": "Service",
        "@id": `${url}#service`,
        name: route.name,
        serviceType: route.serviceType || route.name,
        description: meta.description,
        url,
        mainEntityOfPage: { "@id": pageId(url) },
        provider: { "@id": ORG_ID },
        areaServed: areaServedNodes(org),
        audience: { "@type": "BusinessAudience", name: "Businesses in Bengaluru and across India" },
        offers: serviceOffer(org, url, route.price),
        aggregateRating: ratingNode(org.aggregateRating),
        isRelatedTo: route.parent
          ? { "@id": `${(seo[route.parent] || {}).canonical || abs(route.parent)}#service` }
          : undefined,
      })
    );
  }

  const items = route.faqSlug ? faqs[route.faqSlug] || [] : [];
  if (items.length) nodes.push(faqNode(url, items));

  return [{ "@context": "https://schema.org", "@graph": nodes }];
};
