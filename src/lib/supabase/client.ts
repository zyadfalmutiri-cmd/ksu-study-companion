import { createClient } from "@supabase/supabase-js";

// Browser-side client — uses the publishable key only, safe to expose.
export const supabaseBrowserClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);
