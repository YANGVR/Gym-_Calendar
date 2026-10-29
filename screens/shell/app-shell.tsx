"use client";

import { LogOutIcon, MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useDarkMode } from "@/features/theme";
import { useWeightUnit, type WeightUnit } from "@/features/weight-unit";
import { flushWorkouts, resetWorkouts, useWorkoutLog, useWorkoutSync, workoutsOn } from "@/features/workout-log";
import { formatDateLabel } from "@/lib/date";
import { createClient } from "@/lib/supabase/client";
import { useToday } from "@/lib/use-today";
import { cn } from "@/lib/utils";

import { parseRecordLink, recordHref } from "../record-link";
import { DataGate } from "./data-gate";

const TABS = [
  { href: "/", label: "기록", title: "헬스 일지" },
  { href: "/calendar", label: "달력", title: "달력" },
  { href: "/chart", label: "차트", title: "차트" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { sync } = useWorkoutSync();
  const params = useSearchParams();
  const today = useToday();
  const [log] = useWorkoutLog();
  const [unit, setUnit] = useWeightUnit();
  const [dark, toggleDark] = useDarkMode();

  const onRecord = pathname === "/";
  const record = today ? parseRecordLink(params, today) : null;
  const stripDate = onRecord && record ? record.date : today;
  const workouts = stripDate ? workoutsOn(log, stripDate) : [];
  const current = TABS.find((tab) => tab.href === pathname) ?? TABS[0];

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-4 px-4 pt-4">
      <header className="order-1 flex items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight">
          {onRecord && <Image src="/mascot-dumbbell.png" alt="" width={407} height={299} className="h-12 w-auto" priority />}
          {current.title}
        </h1>
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
          <ToggleGroup
            variant="outline"
            aria-label="무게 단위"
            value={[unit]}
            onValueChange={(value) => value[0] && setUnit(value[0] as WeightUnit)}
          >
            <ToggleGroupItem value="kg">kg</ToggleGroupItem>
            <ToggleGroupItem value="lb">lb</ToggleGroupItem>
          </ToggleGroup>
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
        className="sticky bottom-0 order-5 -mx-4 grid grid-cols-3 gap-1 border-t bg-background px-4 py-2 lg:static lg:order-2 lg:mx-0 lg:flex lg:border-t-0 lg:border-b lg:px-0 lg:py-0"
      >
        {TABS.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={tab.href === pathname ? "page" : undefined}
            className={cn(
              buttonVariants({ variant: tab.href === pathname ? "secondary" : "ghost", size: "lg" }),
              "lg:rounded-b-none"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      {today && (
        <section aria-label="운동 목록" className="order-3 flex flex-col gap-2">
          <h2 className="text-xs font-medium text-muted-foreground">
            {stripDate === today ? "오늘 한 운동" : `${formatDateLabel(stripDate)} 한 운동`}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            <Link
              href={recordHref(
                {
                  ...(onRecord && record?.selected),
                  date: onRecord ? record?.date : today,
                  pick: true,
                },
                today
              )}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-dashed text-muted-foreground")}
            >
              + 운동 추가
            </Link>
            {workouts.map((workout) => {
              const active =
                onRecord &&
                !record?.pick &&
                record?.selected?.exercise === workout.exercise &&
                record.selected.brand === workout.brand;
              return (
                <Link
                  key={workout.id}
                  href={recordHref({ ...workout, date: workout.date }, today)}
                  aria-label={`${workout.exercise} ${workout.brand} 기록 열기`}
                  className={cn(
                    buttonVariants({ variant: active ? "default" : "outline", size: "sm" }),
                    "max-w-full"
                  )}
                >
                  <span>{workout.exercise}</span>
                  <small className="truncate text-[0.7rem] opacity-70">{workout.brand}</small>
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
