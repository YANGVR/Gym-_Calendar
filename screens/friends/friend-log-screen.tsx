"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { MachineImage } from "@/components/machine-image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { imageOf, isEquipment } from "@/features/catalog";
import { fetchFriendLists } from "@/features/friends";
import { formatWeight, useWeightUnit } from "@/features/weight-unit";
import { datesWithRecords, fetchWorkoutsOf, recordedSets, workoutsOn, type Workout } from "@/features/workout-log";
import { formatDateLabel } from "@/lib/date";

type State = { status: "loading" } | { status: "error" } | { status: "ready"; username: string; log: Workout[] };

/** 친구의 운동 기록을 날짜별로 읽기만 한다. */
export function FriendLogScreen() {
  const { id } = useParams<{ id: string }>();
  const [unit] = useWeightUnit();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [lists, log] = await Promise.all([fetchFriendLists(), fetchWorkoutsOf(id)]);
        const friend = lists.friends.find((candidate) => candidate.userId === id);
        if (cancelled) return;
        setState(friend ? { status: "ready", username: friend.username, log } : { status: "error" });
      } catch {
        if (!cancelled) setState({ status: "error" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const back = (
    <Link href="/friends" className={buttonVariants({ variant: "outline", size: "sm" })}>
      친구 목록
    </Link>
  );

  if (state.status === "loading") {
    return (
      <p role="status" className="py-10 text-center text-sm text-muted-foreground">
        친구 기록을 불러오는 중이에요…
      </p>
    );
  }
  if (state.status === "error") {
    return (
      <div className="flex flex-col items-start gap-3">
        <p role="alert" className="text-sm text-destructive">
          친구 기록을 볼 수 없어요. 친구가 아니거나 불러오지 못했어요.
        </p>
        {back}
      </div>
    );
  }

  const dates = [...datesWithRecords(state.log)].sort().reverse();

  return (
    <div className="flex flex-col gap-4 lg:max-w-2xl">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold">{state.username}님의 기록</h2>
        {back}
      </div>
      {dates.length === 0 ? (
        <p className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">아직 기록이 없어요.</p>
      ) : (
        dates.map((date) => (
          <section key={date} aria-label={formatDateLabel(date)} className="flex flex-col gap-2">
            <h3 className="text-xs font-medium text-muted-foreground">{formatDateLabel(date)}</h3>
            {workoutsOn(state.log, date).map((workout) => (
              <Card key={workout.id} size="sm">
                <CardContent className="flex items-start gap-2.5">
                  <MachineImage
                    brand={workout.brand}
                    src={imageOf(workout.exercise, workout.brand, workout.model)?.src}
                    clip={imageOf(workout.exercise, workout.brand, workout.model)?.clip}
                    alt={isEquipment(workout.brand) ? `${workout.exercise} ${workout.brand}` : undefined}
                    className="h-10 w-14 shrink-0 text-[0.625rem] leading-tight"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{workout.exercise}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {workout.model ? `${workout.brand} ${workout.model}` : workout.brand} · {workout.part}
                    </p>
                    <ul className="mt-1.5 flex flex-col gap-0.5 text-sm tabular-nums">
                      {recordedSets(workout).map((set, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="w-10 text-muted-foreground">{index + 1}세트</span>
                          <span>
                            {formatWeight(set.weightKg, unit)}
                            {unit} × {set.reps}회
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        ))
      )}
    </div>
  );
}
