import schemaRoutes from "@/data/schemaRoutes.json";
import faqsData from "@/data/faqs.json";
import seoMetaData from "@/data/seoMeta.json";
import organization from "@/data/organization.json";
import { buildRouteGraph, buildOrganizationNode, SITE_ORIGIN as ORIGIN } from "./schemaGraph.js";

export const SITE_ORIGIN: string = ORIGIN;

export const ORGANIZATION = buildOrganizationNode(organization) as Record<string, unknown>;

/**
 * Builds the JSON-LD documents for a route from the shared schema graph
 * (organization profile + route map + curated meta + page FAQs).
 */
export const buildRouteSchema = (path: string): Record<string, unknown>[] =>
  buildRouteGraph(path, {
    org: organization,
    routes: schemaRoutes,
    faqs: faqsData,
    seo: seoMetaData,
  }) as Record<string, unknown>[];

/** True when the prerendered HTML already contains this route's JSON-LD. */
export const hasPrerenderedSchema = (): boolean =>
  typeof document !== "undefined" &&
  !!document.querySelector('script[type="application/ld+json"][data-schema="prerender"]');
