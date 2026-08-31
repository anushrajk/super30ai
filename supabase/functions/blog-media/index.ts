// Public read-only proxy for the private `blog-media` storage bucket.
// Public buckets are disabled for this workspace, so blog images are served
// through this function instead: /functions/v1/blog-media/<object path>

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      },
    });
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    return new Response("Method not allowed", { status: 405 });
  }

  const url = new URL(req.url);
  // Strip the function prefix to get the object path inside the bucket.
  const objectPath = decodeURIComponent(
    url.pathname.replace(/^\/functions\/v1\/blog-media\/?/, "").replace(/^blog-media\/?/, ""),
  );

  if (!objectPath || objectPath.includes("..")) {
    return new Response("Not found", { status: 404 });
  }

  const upstream = await fetch(
    `${SUPABASE_URL}/storage/v1/object/blog-media/${objectPath
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`,
    { headers: { Authorization: `Bearer ${SERVICE_KEY}`, apikey: SERVICE_KEY } },
  );

  if (!upstream.ok) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(req.method === "HEAD" ? null : upstream.body, {
    status: 200,
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
    },
  });
});
