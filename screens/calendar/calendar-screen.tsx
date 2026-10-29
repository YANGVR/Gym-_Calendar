"use client";

import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { ConfirmButton } from "@/components/confirm-button";
import { MachineImage } from "@/components/machine-image";
import { NumberField } from "@/components/number-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { imageOf } from "@/features/catalog";
import { formatWeight, fromDisplayWeight, useWeightUnit, type WeightUnit } from "@/features/weight-unit";
import {
  addSet,
  datesWithRecords,
  isRecorded,
  removeSet,
  removeWorkout,
  setSetValue,
  useWorkoutLog,
  workoutsOn,
  type Workout,
} from "@/features/workout-log";
import { formatDateLabel, monthCells, parseISODate } from "@/lib/date";
import { useToday } from "@/lib/use-today";
import { cn } from "@/lib/utils";

const WEEKDAYS = [...("일월화수목금토")];

export function CalendarScreen() {
  const today = useToday();
  const [log] = useWorkoutLog();
  const [month, setMonth] = useState<{ year: number; month: number } | null>(null);
  const [selected, setSelected] = useState<string | null | undefined>(undefined);
  const [editing, setEditing] = useState<string | null>(null);

  if (!today) return null;

  const base = parseISODate(today);
  const shown = month ?? { year: base.getFullYear(), month: base.getMonth() };
  const day = selected === undefined ? today : selected;
  const recordedDates = datesWithRecords(log);

  function move(delta: number) {
    const next = new Date(shown.year, shown.month + delta, 1);
    setMonth({ year: next.getFullYear(), month: next.getMonth() });
    setSelected(null);
    setEditing(null);
  }

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start lg:gap-7">
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" aria-label="이전 달" onClick={() => move(-1)}>
              <ChevronLeftIcon />
            </Button>
            <h2 className="text-base font-semibold">
              {shown.year}년 {shown.month + 1}월
            </h2>
            <Button variant="ghost" size="icon" aria-label="다음 달" onClick={() => move(1)}>
              <ChevronRightIcon />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center">
            {WEEKDAYS.map((name) => (
              <span key={name} className="py-1 text-xs font-semibold text-muted-foreground">
                {name}
              </span>
            ))}
            {monthCells(shown.year, shown.month).map((iso, index) =>
              iso === null ? (
                <span key={`blank-${index}`} aria-hidden="true" />
              ) : (
                <DayCell
                  key={iso}
                  iso={iso}
                  isToday={iso === today}
                  isSelected={iso === day}
                  hasRecord={recordedDates.has(iso)}
                  onSelect={() => {
                    setSelected(iso);
                    setEditing(null);
                  }}
                />
              )
            )}
          </div>
        </CardContent>
      </Card>

      <DayRecords date={day} editing={editing} onEdit={setEditing} />
    </div>
  );
}

function DayCell({
  iso,
  isToday,
  isSelected,
  hasRecord,
  onSelect,
}: {
  iso: string;
  isToday: boolean;
  isSelected: boolean;
  hasRecord: boolean;
  onSelect: () => void;
}) {
  const dayNumber = Number(iso.slice(8));
  return (
    <Button
      variant={isSelected ? "default" : "ghost"}
      aria-pressed={isSelected}
      aria-label={`${Number(iso.slice(5, 7))}월 ${dayNumber}일${hasRecord ? ", 기록 있음" : ""}`}
      className={cn("relative h-10 font-medium tabular-nums", isToday && !isSelected && "ring-1 ring-foreground")}
      onClick={onSelect}
    >
      {dayNumber}
      {hasRecord && (
        <span
          aria-hidden="true"
          className={cn("absolute bottom-1 size-1.5 rounded-full", isSelected ? "bg-primary-foreground" : "bg-set-1")}
        />
      )}
    </Button>
  );
}

function DayRecords({
  date,
  editing,
  onEdit,
}: {
  date: string | null;
  editing: string | null;
  onEdit: (id: string | null) => void;
}) {
  const today = useToday();
  const [log, updateLog] = useWorkoutLog();
  const [unit] = useWeightUnit();

  if (!date) {
    return (
      <Empty className="border">
        <EmptyHeader>
          <EmptyDescription>날짜를 누르면 그날 한 운동을 볼 수 있어요.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const workouts = workoutsOn(log, date);
  return (
    <section className="flex flex-col gap-3" aria-label="선택한 날의 기록">
      <h3 className="text-sm font-semibold">
        {formatDateLabel(date)}
        {date === today && " · 오늘"}
      </h3>
      {workouts.length === 0 ? (
        <Empty className="border">
          <EmptyHeader>
            <EmptyTitle>기록 없음</EmptyTitle>
          </EmptyHeader>
        </Empty>
      ) : (
        workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            unit={unit}
            editing={editing === workout.id}
            onToggleEdit={() => onEdit(editing === workout.id ? null : workout.id)}
            onDelete={() => {
              updateLog((current) => removeWorkout(current, workout.id));
              onEdit(null);
            }}
            onAddSet={() => updateLog((current) => addSet(current, workout))}
            onChangeSet={(index, patch) => updateLog((current) => setSetValue(current, workout, index, patch))}
            onRemoveSet={(index) => {
              updateLog((current) => removeSet(current, workout, index));
              if (workout.sets.filter(isRecorded).length <= 1) onEdit(null);
            }}
          />
        ))
      )}
    </section>
  );
}

function WorkoutCard({
  workout,
  unit,
  editing,
  onToggleEdit,
  onDelete,
  onAddSet,
  onChangeSet,
  onRemoveSet,
}: {
  workout: Workout;
  unit: WeightUnit;
  editing: boolean;
  onToggleEdit: () => void;
  onDelete: () => void;
  onAddSet: () => void;
  onChangeSet: (index: number, patch: { weightKg?: number | null; reps?: number | null }) => void;
  onRemoveSet: (index: number) => void;
}) {
  const rows = workout.sets.map((set, index) => ({ set, index }));
  // 고치는 중에는 값을 지워 다시 입력하는 줄도 남겨 둔다.
  const sets = editing ? rows : rows.filter(({ set }) => isRecorded(set));

  return (
    <Card size="sm">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <MachineImage
            brand={workout.brand}
            src={imageOf(workout.exercise, workout.brand)?.src}
            clip={imageOf(workout.exercise, workout.brand)?.clip}
            className="h-10 w-14 shrink-0 text-[0.625rem] leading-tight"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{workout.exercise}</p>
            <p className="truncate text-xs text-muted-foreground">
              {workout.brand} · {workout.part}
            </p>
          </div>
          <Button variant={editing ? "default" : "outline"} size="sm" onClick={onToggleEdit}>
            {editing ? "완료" : "수정"}
          </Button>
          <ConfirmButton size="sm" className="text-destructive" confirmLabel="한 번 더 눌러 삭제" onConfirm={onDelete}>
            삭제
          </ConfirmButton>
        </div>

        {editing ? (
          <ul className="flex flex-col gap-2">
            {sets.map(({ set, index }) => (
              <li key={index} className="grid grid-cols-[2.5rem_1fr_1fr_3.5rem] items-center gap-2">
                <span className="text-sm font-bold text-muted-foreground">{index + 1}세트</span>
                <NumberField
                  label={`${index + 1}세트 무게`}
                  value={set.weightKg}
                  suffix={unit}
                  inputMode="decimal"
                  resetKey={unit}
                  toText={(value) => (value === null ? "" : formatWeight(value, unit))}
                  fromText={(text) => {
                    const value = Number(text.trim().replace(",", "."));
                    return text.trim() === "" || Number.isNaN(value) ? null : fromDisplayWeight(value, unit);
                  }}
                  onCommit={(value) => onChangeSet(index, { weightKg: value })}
                />
                <NumberField
                  label={`${index + 1}세트 횟수`}
                  value={set.reps}
                  suffix="회"
                  inputMode="numeric"
                  resetKey="reps"
                  toText={(value) => (value === null ? "" : String(value))}
                  fromText={(text) => {
                    const value = Number(text.trim());
                    return text.trim() === "" || Number.isNaN(value) ? null : Math.round(value);
                  }}
                  onCommit={(value) => onChangeSet(index, { reps: value })}
                />
                <ConfirmButton
                  variant="outline"
                  className="h-10 w-full text-destructive"
                  aria-label={`${index + 1}세트 삭제`}
                  confirmLabel="삭제?"
                  onConfirm={() => onRemoveSet(index)}
                >
                  <MinusIcon />
                </ConfirmButton>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-1.5 tabular-nums">
            {sets.map(({ set, index }) => (
              <li key={index} className="flex gap-2">
                <span className="w-10 font-bold text-muted-foreground">{index + 1}세트</span>
                <span className="font-semibold">
                  {isRecorded(set) && `${formatWeight(set.weightKg, unit)}${unit} × ${set.reps}회`}
                </span>
              </li>
            ))}
          </ul>
        )}

        <Button variant="outline" size="sm" className="self-start" onClick={onAddSet}>
          <PlusIcon data-icon="inline-start" />
          세트 추가
        </Button>
      </CardContent>
    </Card>
  );
}
