import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client. Uses the service role key so background jobs
 * and server functions can bypass RLS when needed (e.g. document
 * processing). NEVER import this file from client-side code — the service
 * role key must never reach the browser.
 */
export function getSupabaseServerClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
