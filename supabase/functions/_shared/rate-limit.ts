import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

interface RateLimitConfig {
  operation: string;
  limit: number;
  windowMinutes?: number; // defaults to 60
}

interface RateLimitResult {
  allowed: boolean;
  response?: Response;
}

/**
 * Check and enforce rate limiting using the rate_limits table.
 * Uses IP-based or session-based identifier.
 */
export async function checkRateLimit(
  req: Request,
  corsHeaders: Record<string, string>,
  config: RateLimitConfig,
  sessionId?: string
): Promise<RateLimitResult> {
  const windowMinutes = config.windowMinutes ?? 60;

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  // Use session ID if available, otherwise fall back to IP
  let identifier: string;
  if (sessionId) {
    identifier = `session:${sessionId}`;
  } else {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    identifier = `ip:${clientIp}`;
  }

  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString();

  const { count, error: countError } = await supabase
    .from("rate_limits")
    .select("*", { count: "exact", head: true })
    .eq("identifier", identifier)
    .eq("operation", config.operation)
    .gte("created_at", windowStart);

  if (countError) {
    console.error("Rate limit check error:", countError);
  }

  if (count !== null && count >= config.limit) {
    console.log(`Rate limit exceeded for ${identifier} on ${config.operation}: ${count}/${config.limit}`);
    return {
      allowed: false,
      response: new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      ),
    };
  }

  // Record this request
  await supabase.from("rate_limits").insert({
    identifier,
    operation: config.operation,
  });

  // Probabilistic cleanup (1% chance)
  if (Math.random() < 0.01) {
    await supabase.rpc("cleanup_old_rate_limits").catch(() => {});
  }

  return { allowed: true };
}
