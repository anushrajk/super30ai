// Shared CORS configuration for Edge Functions
// Allows specified origins for security

// List of allowed origins (production + development)
const ALLOWED_ORIGINS = [
  'https://s30.co.in',
  'https://www.s30.co.in',
  'https://super30.io',
  'https://www.super30.io',
  'http://localhost:5173',  // Vite dev server
  'http://localhost:4173',  // Vite preview
  'http://localhost:8080',  // Alternative dev port
];

// Get the allowed origin from environment or use default list
const ENV_ALLOWED_ORIGIN = Deno.env.get('ALLOWED_ORIGIN');

export function getCorsHeaders(requestOrigin?: string | null): Record<string, string> {
  // If env var is set, use it (for simple single-domain setup)
  if (ENV_ALLOWED_ORIGIN) {
    return {
      'Access-Control-Allow-Origin': ENV_ALLOWED_ORIGIN,
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-session-id',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    };
  }

  // Check if the request origin is in our allowed list
  const origin = requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)
    ? requestOrigin
    : ALLOWED_ORIGINS[0]; // Default to first allowed origin

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-session-id',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  };
}

export function handleCorsPreFlight(req: Request): Response | null {
  if (req.method === 'OPTIONS') {
    const origin = req.headers.get('origin');
    return new Response(null, { headers: getCorsHeaders(origin) });
  }
  return null;
}
