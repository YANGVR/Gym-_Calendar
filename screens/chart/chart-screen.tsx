"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { buildChartData, ProgressChart, setColor } from "@/features/progress-chart";
import { formatWeight, toDisplayVolume, useWeightUnit } from "@/features/weight-unit";
import { recordedSets, sessionsOf, useWorkoutLog } from "@/features/workout-log";
import { formatDateLabel } from "@/lib/date";
import { useHydrated } from "@/lib/persisted-store";

export function ChartScreen() {
  const hydrated = useHydrated();
  const [log] = useWorkoutLog();
  const [unit] = useWeightUnit();
  const [picked, setPicked] = useState<string | null>(null);
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);

  if (!hydrated) return null;

  const combos = [
    ...new Map(
      log
        .filter((workout) => recordedSets(workout).length > 0)
        .map((workout) => [`${workout.exercise}|${workout.brand}`, { exercise: workout.exercise, brand: workout.brand }])
    ).values(),
  ];

  if (combos.length === 0) {
    return (
      <Empty className="border">
        <EmptyHeader>
          <EmptyTitle>아직 차트로 볼 기록이 없어요</EmptyTitle>
          <EmptyDescription>기록 화면에서 첫 세트를 남기면 이곳에 최근 운동일이 쌓여요.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const combo = combos.find((c) => `${c.exercise}|${c.brand}` === picked) ?? combos[0];
  const sessions = sessionsOf(log, combo);
  const data = buildChartData(sessions, unit);
  const recent = sessions.slice(-data.dates.length);
  const selectedIndex = Math.min(chosenIndex ?? recent.length - 1, recent.length - 1);
  const session = recent[selectedIndex];
  const sets = recordedSets(session);
  const total = sets.reduce((sum, set) => sum + toDisplayVolume(set.weightKg * set.reps, unit), 0);

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-7">
      <NativeSelect
        className="w-full lg:col-span-2 lg:max-w-sm"
        aria-label="종목과 브랜드"
        value={`${combo.exercise}|${combo.brand}`}
        onChange={(event) => {
          setPicked(event.target.value);
          setChosenIndex(null);
        }}
      >
        {combos.map((c) => (
          <NativeSelectOption key={`${c.exercise}|${c.brand}`} value={`${c.exercise}|${c.brand}`}>
            {c.brand} {c.exercise}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <Card>
        <CardContent className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">
            세트별 운동량 ({unit} × 회) · 최근 {data.dates.length}번 운동일
          </p>
          <ProgressChart data={data} selectedIndex={selectedIndex} onSelect={setChosenIndex} formatDate={formatDateLabel} />
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground" aria-label="세트 색상">
            {data.lines.map((line) => (
              <li key={line.setNumber} className="flex items-center gap-1">
                <span className="size-2.5 rounded-sm" style={{ background: setColor(line.setNumber) }} />
                {line.setNumber}세트
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card size="sm">
        <CardContent className="flex flex-col gap-2" aria-live="polite">
          <p>
            <b>{formatDateLabel(session.date)}</b>
            <span className="text-xs text-muted-foreground">
              {" "}
              · 총 {Math.round(total).toLocaleString()} {unit}×회
            </span>
          </p>
          <ul className="flex flex-col gap-1.5 tabular-nums">
            {sets.map((set, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="size-2.5 rounded-sm" style={{ background: setColor(index + 1) }} />
                <span>{index + 1}세트</span>
                <span className="ml-auto text-muted-foreground">
                  {formatWeight(set.weightKg, unit)}
                  {unit} × {set.reps}회
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
