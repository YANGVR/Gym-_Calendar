"use client";

import {
  CalendarDaysIcon,
  ChartLineIcon,
  ChevronLeftIcon,
  DumbbellIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { useDarkMode } from "@/features/theme";
import { flushWorkouts, resetWorkouts, useWorkoutLog, useWorkoutSync, workoutsOn } from "@/features/workout-log";
import { formatDateLabel } from "@/lib/date";
import { createClient } from "@/lib/supabase/client";
import { useToday } from "@/lib/use-today";
import { cn } from "@/lib/utils";

import { parseRecordLink, recordHref } from "../record-link";
import { DataGate } from "./data-gate";

const TABS = [
  { href: "/", label: "기록", title: "헬스 일지", Icon: DumbbellIcon },
  { href: "/calendar", label: "달력", title: "달력", Icon: CalendarDaysIcon },
  { href: "/chart", label: "차트", title: "차트", Icon: ChartLineIcon },
  { href: "/friends", label: "친구", title: "친구", Icon: UsersIcon },
];

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { sync } = useWorkoutSync();
  const params = useSearchParams();
  const today = useToday();
  const [log] = useWorkoutLog();
  const [dark, toggleDark] = useDarkMode();

  const onRecord = pathname === "/";
  const record = today ? parseRecordLink(params, today) : null;
  const stripDate = onRecord && record ? record.date : today;
  const workouts = stripDate ? workoutsOn(log, stripDate) : [];
  const current = TABS.find((tab) => isActive(tab.href, pathname)) ?? TABS[0];

  // 좁은 화면에서 운동을 고른 뒤 세트를 입력하는 중이면, 한 단계 앞인 운동 고르기로 돌아간다.
  // 그 밖에는 브라우저의 뒤로 가기와 같고, 이전 화면이 없으면 기록 화면으로 간다.
  function goBack() {
    const narrow = !window.matchMedia("(min-width: 1024px)").matches;
    if (onRecord && narrow && today && record?.selected && !record.pick) {
      router.replace(recordHref({ ...record.selected, date: record.date, pick: true }, today));
      return;
    }
    if (window.history.length > 1) router.back();
    else router.push("/");
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-4 px-4 pt-4">
      <header className="order-1 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="뒤로 가기"
            onClick={goBack}
          >
            <ChevronLeftIcon />
          </Button>
          <h1 className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight">
            {onRecord && <Image src="/mascot-dumbbell.png" alt="" width={407} height={299} className="h-12 w-auto" priority />}
            {current.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {sync === "saving" && (
            <span role="status" className="text-xs text-muted-foreground">
              저장 중…
            </span>
          )}
          {sync === "error" && (
            <Button variant="outline" size="sm" className="text-destructive" onClick={flushWorkouts}>
              저장 실패 · 다시 시도
            </Button>
          )}
          <Button variant="outline" size="icon" aria-label="다크모드 전환" onClick={toggleDark}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="로그아웃"
            onClick={async () => {
              await createClient().auth.signOut();
              resetWorkouts();
              router.replace("/login");
              router.refresh();
            }}
          >
            <LogOutIcon />
          </Button>
        </div>
      </header>

      <nav
        aria-label="화면 이동"
        className="sticky bottom-0 order-5 -mx-4 grid grid-cols-4 gap-1 border-t bg-background px-4 py-2 lg:static lg:order-2 lg:mx-0 lg:flex lg:border-t-0 lg:border-b lg:px-0 lg:py-0"
      >
        {TABS.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive(tab.href, pathname) ? "page" : undefined}
            className={cn(
              buttonVariants({ variant: isActive(tab.href, pathname) ? "secondary" : "ghost", size: "lg" }),
              "max-lg:h-auto max-lg:flex-col max-lg:gap-0.5 max-lg:py-1.5 max-lg:text-xs lg:rounded-b-none"
            )}
          >
            <tab.Icon aria-hidden className="size-5 lg:size-4" />
            {tab.label}
          </Link>
        ))}
      </nav>

      {today && onRecord && (
        <section aria-label="운동 목록" className="order-3 flex flex-col gap-2">
          <h2 className="text-xs font-medium text-muted-foreground">
            {stripDate === today ? "오늘 한 운동" : `${formatDateLabel(stripDate)} 한 운동`}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {onRecord && (
              <Link
                href={recordHref({ ...record?.selected, date: record?.date, pick: true }, today)}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-dashed text-muted-foreground")}
              >
                + 운동 추가
              </Link>
            )}
            {workouts.map((workout) => {
              const active =
                onRecord &&
                !record?.pick &&
                record?.selected?.exercise === workout.exercise &&
                record.selected.brand === workout.brand &&
                record.selected.model === workout.model;
              return (
                <Link
                  key={workout.id}
                  href={recordHref({ ...workout, date: workout.date }, today)}
                  aria-label={`${workout.exercise} ${workout.brand}${workout.model ? ` ${workout.model}` : ""} 기록 열기`}
                  className={cn(
                    buttonVariants({ variant: active ? "default" : "outline", size: "sm" }),
                    "max-w-full"
                  )}
                >
                  <span>{workout.exercise}</span>
                  <small className="truncate text-[0.7rem] opacity-70">
                    {workout.model ? `${workout.brand} ${workout.model}` : workout.brand}
                  </small>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <main className="order-4 flex-1 pb-4">
        <DataGate>{children}</DataGate>
      </main>
    </div>
  );
}
