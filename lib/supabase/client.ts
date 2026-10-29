import { createBrowserClient } from "@supabase/ssr";

/** 브라우저용 Supabase 클라이언트. 공개 키(publishable)만 쓴다. */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
