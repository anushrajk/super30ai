// Shared CORS configuration for Edge Functions
// Allows specified origins for security

// List of allowed origins (production + development)
const ALLOWED_ORIGINS = [
  'https://s30.co.in',
  'https://www.s30.co.in',
  'https://super30.io',
  'https://www.super30.io',
  'https://thesuper30.ai',
  'https://www.thesuper30.ai',
  'http://localhost:5173',  // Vite dev server
  'http://localhost:4173',  // Vite preview
  'http://localhost:8080',  // Alternative dev port
];

function isLovablePreviewOrigin(origin: string): boolean {
  try {
    const { hostname, protocol } = new URL(origin);
    if (protocol !== 'https:') return false;

    // Only allow this project's specific Lovable preview/hosted domains
    const PROJECT_ID = '9fc41acf-a44c-4b4e-b257-9336c6b074a9';
    const ALLOWED_LOVABLE_HOSTS = [
      `id-preview--${PROJECT_ID}.lovableproject.com`,
      `super30ai.lovable.app`,
    ];
    return ALLOWED_LOVABLE_HOSTS.includes(hostname);
  } catch {
    return false;
  }
}

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

  // Allow known production/dev origins + Lovable preview origins
  const origin = requestOrigin && (ALLOWED_ORIGINS.includes(requestOrigin) || isLovablePreviewOrigin(requestOrigin))
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
