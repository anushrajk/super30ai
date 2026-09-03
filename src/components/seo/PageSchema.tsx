import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { buildRouteSchema } from "@/lib/pageSchema";
import { hasPrerenderedSchema } from "@/lib/pageSchema";

/**
 * Emits structured data for routes that don't hardcode their own JSON-LD.
 */
export const PageSchema = () => {
  const { pathname } = useLocation();
  const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const graph = buildRouteSchema(path);

  // Prerendered HTML already ships this exact graph; emitting it again from
  // the client duplicates every entity for crawlers that execute JS.
  if (!graph.length || hasPrerenderedSchema()) return null;

  return (
    <Helmet>
      {graph.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  );
};
