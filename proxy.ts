import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * 모든 화면 요청 앞에서 로그인 세션을 새로 고치고 접근을 제한한다.
 * 로그인하지 않았으면 로그인 화면으로, 이미 로그인했으면 로그인 화면 대신 기록 화면으로 보낸다.
 */
export async function proxy(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    return new NextResponse("Supabase 환경 변수가 설정되지 않았습니다. .env.example을 참고해 .env.local을 만들어 주세요.", {
      status: 500,
    });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
      },
    },
  });

  // 세션 새로 고침과 서버 검증된 신원 확인. getSession은 서버에서 믿지 않는다.
  const { data } = await supabase.auth.getClaims();
  const signedIn = Boolean(data?.claims);
  const onLogin = request.nextUrl.pathname === "/login";

  if (signedIn === onLogin) {
    // 로그인 안 한 채 앱 화면(signedIn=false, onLogin=false) 또는 로그인한 채 로그인 화면(true, true)
    const redirect = NextResponse.redirect(new URL(signedIn ? "/" : "/login", request.url));
    supabaseResponse.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
    for (const header of ["cache-control", "expires", "pragma"]) {
      const value = supabaseResponse.headers.get(header);
      if (value) redirect.headers.set(header, value);
    }
    return redirect;
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|machines/|mascot-dumbbell.png).*)"],
};
