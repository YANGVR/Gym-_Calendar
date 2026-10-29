"use client";

import { useEffect, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { flushWorkouts, loadWorkouts, resetWorkouts, useWorkoutSync } from "@/features/workout-log";
import { createClient } from "@/lib/supabase/client";

/** 계정의 기록을 서버에서 불러오는 동안과 실패했을 때를 보여주고, 불러온 뒤에 화면을 연다. */
export function DataGate({ children }: { children: ReactNode }) {
  const { loaded, loadError } = useWorkoutSync();

  useEffect(() => {
    void loadWorkouts();
    const { data } = createClient().auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") resetWorkouts();
    });
    const onHide = () => {
      if (document.visibilityState === "hidden") flushWorkouts();
    };
    document.addEventListener("visibilitychange", onHide);
    return () => {
      data.subscription.unsubscribe();
      document.removeEventListener("visibilitychange", onHide);
    };
  }, []);

  if (loaded) return children;

  if (loadError) {
    return (
      <Empty className="border">
        <EmptyHeader>
          <EmptyTitle>기록을 불러오지 못했어요</EmptyTitle>
          <EmptyDescription>네트워크 연결을 확인하고 다시 시도해 주세요.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button onClick={() => void loadWorkouts()}>다시 시도</Button>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <p role="status" className="py-10 text-center text-sm text-muted-foreground">
      기록을 불러오는 중이에요…
    </p>
  );
}
