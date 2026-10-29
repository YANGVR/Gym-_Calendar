"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authErrorMessage, usernameToEmail, validateCredentials, type AuthMode } from "@/features/auth";
import { resetWorkouts } from "@/features/workout-log";
import { createClient } from "@/lib/supabase/client";

type Problem = { field: "username" | "password" | "form"; message: string } | null;

export function LoginScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [problem, setProblem] = useState<Problem>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const signup = mode === "signup";

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (pending) return;
    setNotice(null);

    const invalid = validateCredentials(username, password);
    if (invalid) {
      setProblem(invalid);
      return;
    }
    setProblem(null);
    setPending(true);

    const supabase = createClient();
    const credentials = { email: usernameToEmail(username), password };
    const { data, error } = signup
      ? await supabase.auth.signUp(credentials)
      : await supabase.auth.signInWithPassword(credentials);

    if (error) {
      setProblem({ field: "form", message: authErrorMessage(error, mode) });
      setPending(false);
      return;
    }
    if (!data.session) {
      setNotice("가입은 됐지만 로그인이 완료되지 않았어요. 잠시 뒤 로그인해 주세요.");
      setPending(false);
      return;
    }
    // 성공하면 화면이 넘어갈 때까지 버튼을 계속 막아 둔다.
    resetWorkouts();
    router.replace("/");
    router.refresh();
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <Image src="/mascot.png" alt="" width={407} height={299} className="h-24 w-auto" priority />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">{signup ? "회원가입" : "로그인"}</CardTitle>
          <CardDescription>
            {signup ? "아이디와 비밀번호로 내 헬스 일지를 만들어요." : "내 헬스 일지를 보려면 로그인해 주세요."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} noValidate className="flex flex-col gap-4">
            <FieldGroup>
              <Field data-invalid={problem?.field === "username" || undefined}>
                <FieldLabel htmlFor="username">아이디</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  autoComplete="username"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  value={username}
                  aria-invalid={problem?.field === "username" || undefined}
                  onChange={(event) => setUsername(event.target.value)}
                />
                {problem?.field === "username" && <FieldError>{problem.message}</FieldError>}
              </Field>
              <Field data-invalid={problem?.field === "password" || undefined}>
                <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  autoComplete={signup ? "new-password" : "current-password"}
                  value={password}
                  aria-invalid={problem?.field === "password" || undefined}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {problem?.field === "password" && <FieldError>{problem.message}</FieldError>}
              </Field>
            </FieldGroup>

            {problem?.field === "form" && (
              <p role="alert" className="text-sm text-destructive">
                {problem.message}
              </p>
            )}
            {notice && (
              <p role="status" className="text-sm text-muted-foreground">
                {notice}
              </p>
            )}

            <Button type="submit" size="lg" disabled={pending}>
              {pending ? "잠시만요…" : signup ? "회원가입" : "로그인"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Button
        variant="link"
        disabled={pending}
        onClick={() => {
          setMode(signup ? "login" : "signup");
          setProblem(null);
          setNotice(null);
        }}
      >
        {signup ? "이미 계정이 있어요. 로그인" : "처음이에요. 회원가입"}
      </Button>
    </div>
  );
}
