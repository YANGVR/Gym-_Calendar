"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { ConfirmButton } from "@/components/confirm-button";
import { MachineImage } from "@/components/machine-image";
import { NumberField } from "@/components/number-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  KINDS,
  PARTS,
  brandsIn,
  categoriesOf,
  exercisesOf,
  hasVideo,
  howToSteps,
  imageOf,
  modelsIn,
  modelsOf,
  isEquipment,
  equipmentOf,
  freeWeightExercises,
  partsOf,
  type Equipment,
  type ExerciseKind,
  type MachineCategory,
} from "@/features/catalog";
import {
  formatWeight,
  fromDisplayWeight,
  useWeightUnit,
  type WeightUnit,
} from "@/features/weight-unit";
import {
  addSet,
  compareSet,
  findWorkout,
  isRecorded,
  previousSession,
  recordedSets,
  removeSet,
  removeWorkout,
  sessionsOf,
  setSetValue,
  useWorkoutLog,
  workoutsOn,
  type WorkoutSet,
} from "@/features/workout-log";
import { formatDateLabel, shiftDate } from "@/lib/date";
import { useToday } from "@/lib/use-today";
import { cn } from "@/lib/utils";

import {
  parseRecordLink,
  recordHref,
  type RecordSelection,
} from "../record-link";

export function RecordScreen() {
  const today = useToday();
  const params = useSearchParams();
  const router = useRouter();
  const [log] = useWorkoutLog();

  if (!today) return null;
  const { date, selected, pick } = parseRecordLink(params, today);
  const picking = !selected || pick;

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start lg:gap-7">
      <div className={cn(!picking && "hidden lg:block")}>
        <ExercisePicker
          key={
            selected
              ? `${selected.exercise}|${selected.brand}|${selected.model}`
              : "none"
          }
          selected={selected}
          log={log}
          onBack={
            selected
              ? () => router.replace(recordHref({ ...selected, date }, today))
              : undefined
          }
          onSelect={(choice) =>
            router.replace(recordHref({ ...choice, date }, today))
          }
        />
      </div>
      {selected ? (
        <WorkoutPanel
          key={`${date}|${selected.exercise}|${selected.brand}|${selected.model}`}
          selected={selected}
          date={date}
          today={today}
          onNavigate={(link) => router.replace(recordHref(link, today))}
        />
      ) : (
        <p className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground lg:mt-0">
          머신 브랜드를 고르면 세트를 기록할 수 있어요.
        </p>
      )}
    </div>
  );
}

function ExercisePicker({
  selected,
  log,
  onBack,
  onSelect,
}: {
  selected: RecordSelection | null;
  log: ReturnType<typeof useWorkoutLog>[0];
  onBack?: () => void;
  onSelect: (selection: RecordSelection) => void;
}) {
  const selectedEquipment =
    selected && isEquipment(selected.brand) ? selected.brand : null;
  const [kind, setKind] = useState<ExerciseKind>(
    selectedEquipment ? "Free Weight" : "Machine",
  );
  const [part, setPart] = useState(selected?.part ?? PARTS[0]);
  const [exercise, setExercise] = useState(() =>
    selected && !selectedEquipment ? selected.exercise : exercisesOf(part)[0],
  );
  const [category, setCategory] = useState<MachineCategory>(() => {
    const model =
      selected && !selectedEquipment
        ? modelsOf(selected.exercise, selected.brand).find(
            (m) => m.name === selected.model,
          )
        : undefined;
    return model?.category ?? categoriesOf(exercise)[0];
  });
  // 모델이 여러 개인 브랜드를 눌렀을 때 모델 카드를 펼치기 위해 기억한다.
  const [openBrand, setOpenBrand] = useState<string | null>(() =>
    selected && !selectedEquipment ? selected.brand : null,
  );
  const [equipment, setEquipment] = useState<Equipment>(
    selectedEquipment ?? equipmentOf(part)[0],
  );

  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        {onBack && (
          <Button
            variant="outline"
            size="sm"
            className="self-start lg:hidden"
            onClick={onBack}
          >
            <ChevronLeftIcon data-icon="inline-start" />
            돌아가기
          </Button>
        )}
        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium text-muted-foreground">분류</h2>
          <ToggleGroup
            variant="outline"
            spacing={1}
            className="flex-wrap"
            aria-label="분류"
            value={[kind]}
            onValueChange={(value) =>
              value[0] && setKind(value[0] as ExerciseKind)
            }
          >
            {KINDS.map((name) => (
              <ToggleGroupItem key={name} value={name}>
                {name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium text-muted-foreground">부위</h2>
          <ToggleGroup
            variant="outline"
            spacing={1}
            className="flex-wrap"
            aria-label="부위"
            value={[part]}
            onValueChange={(value) => {
              if (!value[0]) return;
              const first = exercisesOf(value[0])[0];
              setPart(value[0]);
              setExercise(first);
              setCategory(categoriesOf(first)[0]);
              setOpenBrand(null);
              setEquipment(equipmentOf(value[0])[0]);
            }}
          >
            {partsOf(kind).map((name) => (
              <ToggleGroupItem key={name} value={name}>
                {name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </section>
        {kind === "Free Weight" ? (
          <>
            <section className="flex flex-col gap-2">
              <h2 className="text-xs font-medium text-muted-foreground">
                장비
              </h2>
              <ToggleGroup
                variant="outline"
                spacing={1}
                className="flex-wrap"
                aria-label="장비"
                value={[equipment]}
                onValueChange={(value) =>
                  value[0] && setEquipment(value[0] as Equipment)
                }
              >
                {equipmentOf(part).map((name) => (
                  <ToggleGroupItem key={name} value={name}>
                    {name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-xs font-medium text-muted-foreground">
                종목
              </h2>
              <div
                role="group"
                aria-label="프리웨이트 종목"
                className="grid grid-cols-2 gap-2"
              >
                {freeWeightExercises(part, equipment).map((name) => {
                  const on =
                    selected?.exercise === name && selected.brand === equipment;
                  const count = sessionsOf(log, {
                    exercise: name,
                    brand: equipment,
                    model: "",
                  }).length;
                  return (
                    <button
                      key={name}
                      type="button"
                      aria-label={name}
                      aria-pressed={on}
                      onClick={() =>
                        onSelect({
                          part,
                          exercise: name,
                          brand: equipment,
                          model: "",
                        })
                      }
                      className="flex flex-col gap-1.5 rounded-lg border bg-card p-1.5 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <MachineImage
                        brand={equipment}
                        alt={`${name} ${equipment}`}
                        src={imageOf(name, equipment)?.src}
                        className="aspect-[4/3] w-full text-sm"
                      />
                      <span className="px-0.5 text-sm font-semibold">
                        {name}
                      </span>
                      <span className="px-0.5 pb-0.5 text-xs text-muted-foreground">
                        {count ? `기록 ${count}회` : "기록 없음"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="flex flex-col gap-2">
              <h2 className="text-xs font-medium text-muted-foreground">
                종목
              </h2>
              <ToggleGroup
                variant="outline"
                spacing={1}
                className="flex-wrap"
                aria-label="종목"
                value={[exercise]}
                onValueChange={(value) => {
                  if (!value[0]) return;
                  setExercise(value[0]);
                  setCategory(categoriesOf(value[0])[0]);
                  setOpenBrand(null);
                }}
              >
                {exercisesOf(part).map((name) => (
                  <ToggleGroupItem key={name} value={name}>
                    {name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-xs font-medium text-muted-foreground">
                머신 카테고리
              </h2>
              <ToggleGroup
                variant="outline"
                spacing={1}
                className="flex-wrap"
                aria-label="머신 카테고리"
                value={[category]}
                onValueChange={(value) => {
                  if (!value[0]) return;
                  setCategory(value[0] as MachineCategory);
                  setOpenBrand(null);
                }}
              >
                {categoriesOf(exercise).map((name) => (
                  <ToggleGroupItem key={name} value={name}>
                    {name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-xs font-medium text-muted-foreground">
                머신 브랜드
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {brandsIn(exercise, category).map((brand) => {
                  const models = modelsIn(exercise, brand, category);
                  const count = models.reduce(
                    (sum, model) =>
                      sum +
                      sessionsOf(log, { exercise, brand, model: model.name })
                        .length,
                    0,
                  );
                  const on =
                    selected?.exercise === exercise && selected.brand === brand;
                  return (
                    <button
                      key={brand}
                      type="button"
                      aria-pressed={on || openBrand === brand}
                      onClick={() => setOpenBrand(brand)}
                      className="flex flex-col gap-0.5 rounded-lg border bg-card p-2.5 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <span className="text-sm font-semibold">{brand}</span>
                      <span className="text-xs text-muted-foreground">
                        머신 {models.length}종 ·{" "}
                        {count ? `기록 ${count}회` : "기록 없음"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
            {openBrand &&
              modelsIn(exercise, openBrand, category).length > 0 && (
                <section className="flex flex-col gap-2">
                  <h2 className="text-xs font-medium text-muted-foreground">
                    {openBrand} 머신 모델
                  </h2>
                  <div
                    role="group"
                    aria-label="머신 모델"
                    className="grid grid-cols-2 gap-2"
                  >
                    {modelsIn(exercise, openBrand, category).map((model) => {
                      const on =
                        selected?.exercise === exercise &&
                        selected.brand === openBrand &&
                        selected.model === model.name;
                      const count = sessionsOf(log, {
                        exercise,
                        brand: openBrand,
                        model: model.name,
                      }).length;
                      return (
                        <button
                          key={model.name}
                          type="button"
                          aria-pressed={on}
                          onClick={() =>
                            onSelect({
                              part,
                              exercise,
                              brand: openBrand,
                              model: model.name,
                            })
                          }
                          className="flex flex-col gap-1.5 rounded-lg border bg-card p-1.5 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          <MachineImage
                            brand={openBrand}
                            alt={`${openBrand} ${model.name}`}
                            src={model.src}
                            clip={model.clip}
                            className="aspect-[4/3] w-full text-sm"
                          />
                          <span className="px-0.5 text-sm font-semibold">
                            {model.name}
                          </span>
                          <span className="px-0.5 pb-0.5 text-xs text-muted-foreground">
                            {count ? `기록 ${count}회` : "기록 없음"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

function WorkoutPanel({
  selected,
  date,
  today,
  onNavigate,
}: {
  selected: RecordSelection;
  date: string;
  today: string;
  onNavigate: (link: {
    part?: string;
    exercise?: string;
    brand?: string;
    model?: string;
    date?: string;
    pick?: boolean;
  }) => void;
}) {
  const [log, updateLog] = useWorkoutLog();
  const [unit] = useWeightUnit();
  const [guideOpen, setGuideOpen] = useState(false);

  const target = { ...selected, date };
  const workout = findWorkout(log, target);
  const previous = previousSession(log, selected, date);
  const previousSets = previous ? recordedSets(previous) : [];
  const rows: WorkoutSet[] =
    workout && workout.sets.length > 0
      ? workout.sets
      : [{ weightKg: null, reps: null }];
  const video = hasVideo(selected.exercise, selected.brand);

  function removeAndShowNext() {
    if (!workout) return;
    const next = removeWorkout(log, workout.id);
    updateLog(() => next);
    const rest = workoutsOn(next, date)[0];
    onNavigate(rest ? { ...rest, date } : { date });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1 basis-40">
          <h2 className="text-base font-semibold leading-snug">
            {selected.exercise} · {selected.brand}
          </h2>
          {selected.model && (
            <p className="text-sm font-medium text-muted-foreground">
              {selected.model}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            {formatDateLabel(date)}
            {date === today && " · 오늘"} 기록
          </p>
        </div>
        <div className="flex gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => onNavigate({ ...selected, date, pick: true })}
          >
            변경
          </Button>
          <Button
            variant="outline"
            size="sm"
            aria-expanded={guideOpen}
            onClick={() => setGuideOpen((open) => !open)}
          >
            운동 방법 보기
          </Button>
        </div>
      </div>

      {guideOpen && (
        <Card size="sm" aria-label="운동 방법">
          <CardHeader>
            <CardTitle>{selected.exercise} 운동 방법</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <MachineImage
              brand={
                video
                  ? `${selected.brand} ${selected.exercise} 영상`
                  : `${selected.brand} ${selected.exercise}`
              }
              src={
                imageOf(selected.exercise, selected.brand, selected.model)?.src
              }
              clip={
                imageOf(selected.exercise, selected.brand, selected.model)?.clip
              }
              alt={
                isEquipment(selected.brand)
                  ? `${selected.exercise} ${selected.brand}`
                  : undefined
              }
              className="aspect-video w-full text-sm"
            />
            {isEquipment(selected.brand) && (
              <p className="text-xs text-muted-foreground">
                운동 그림: Everkinetic (
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  CC BY-SA 4.0
                </a>
                )
              </p>
            )}
            <ol className="flex list-decimal flex-col gap-1 pl-5 text-sm">
              {howToSteps(selected.exercise, selected.brand).map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <Button
              variant="outline"
              size="sm"
              className="self-start"
              onClick={() => setGuideOpen(false)}
            >
              닫기
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center gap-1.5">
        <Button
          variant="outline"
          size="icon"
          aria-label="전날"
          onClick={() => onNavigate({ ...selected, date: shiftDate(date, -1) })}
        >
          <ChevronLeftIcon />
        </Button>
        <Input
          type="date"
          aria-label="기록 날짜"
          max={today}
          value={date}
          className="h-9 flex-1 font-semibold"
          onChange={(event) =>
            event.target.value &&
            onNavigate({ ...selected, date: event.target.value })
          }
        />
        <Button
          variant="outline"
          size="icon"
          aria-label="다음날"
          disabled={date >= today}
          onClick={() => onNavigate({ ...selected, date: shiftDate(date, 1) })}
        >
          <ChevronRightIcon />
        </Button>
        {date !== today && (
          <Button
            variant="outline"
            onClick={() => onNavigate({ ...selected, date: today })}
          >
            오늘로
          </Button>
        )}
      </div>

      <p className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
        {previous
          ? `지난 기록 · ${formatDateLabel(previous.date)} — ${previousSets
              .map((set) => `${formatWeight(set.weightKg, unit)}×${set.reps}`)
              .join(", ")}`
          : "첫 기록이에요. 비교할 지난 기록이 아직 없어요."}
      </p>

      <ul className="flex flex-col gap-3">
        {rows.map((set, index) => (
          <SetRow
            key={index}
            index={index}
            set={set}
            previousSet={previousSets[index]}
            unit={unit}
            onChange={(patch) =>
              updateLog((current) =>
                setSetValue(current, { ...target }, index, patch),
              )
            }
            onRemove={() =>
              updateLog((current) => removeSet(current, target, index))
            }
          />
        ))}
      </ul>

      <Button
        size="lg"
        onClick={() => updateLog((current) => addSet(current, target))}
      >
        <PlusIcon data-icon="inline-start" />
        세트 추가
      </Button>
      {workout && recordedSets(workout).length > 0 && (
        <ConfirmButton
          size="lg"
          className="text-destructive"
          confirmLabel="한 번 더 눌러 삭제"
          onConfirm={removeAndShowNext}
        >
          이 운동 기록 삭제
        </ConfirmButton>
      )}
      <p className="text-center text-xs text-muted-foreground">
        입력하는 즉시 {date === today ? "오늘" : formatDateLabel(date)} 기록에
        저장돼요
      </p>
    </div>
  );
}

function SetRow({
  index,
  set,
  previousSet,
  unit,
  onChange,
  onRemove,
}: {
  index: number;
  set: WorkoutSet;
  previousSet: { weightKg: number; reps: number } | undefined;
  unit: WeightUnit;
  onChange: (patch: Partial<WorkoutSet>) => void;
  onRemove: () => void;
}) {
  const diff = isRecorded(set) ? compareSet(set, previousSet) : null;
  const blank = set.weightKg === null && set.reps === null;

  return (
    <li className="grid grid-cols-[2.5rem_1fr_1fr_3.5rem] items-center gap-x-2 gap-y-1">
      <span className="text-sm font-bold text-muted-foreground">
        {index + 1}세트
      </span>
      <NumberField
        label={`${index + 1}세트 무게`}
        value={set.weightKg}
        suffix={unit}
        inputMode="decimal"
        placeholder={
          previousSet ? formatWeight(previousSet.weightKg, unit) : "무게"
        }
        resetKey={unit}
        toText={(value) => (value === null ? "" : formatWeight(value, unit))}
        fromText={(text) => {
          const value = Number(text.trim().replace(",", "."));
          return text.trim() === "" || Number.isNaN(value)
            ? null
            : fromDisplayWeight(value, unit);
        }}
        onCommit={(value) => onChange({ weightKg: value })}
      />
      <NumberField
        label={`${index + 1}세트 횟수`}
        value={set.reps}
        suffix="회"
        inputMode="numeric"
        placeholder={previousSet ? String(previousSet.reps) : "횟수"}
        resetKey="reps"
        toText={(value) => (value === null ? "" : String(value))}
        fromText={(text) => {
          const value = Number(text.trim());
          return text.trim() === "" || Number.isNaN(value)
            ? null
            : Math.round(value);
        }}
        onCommit={(value) => onChange({ reps: value })}
      />
      <ConfirmButton
        variant="outline"
        className="h-10 w-full text-destructive"
        aria-label={`${index + 1}세트 삭제`}
        confirmLabel="삭제?"
        immediate={blank}
        onConfirm={onRemove}
      >
        <MinusIcon />
      </ConfirmButton>
      <p className="col-start-2 col-end-5 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
        {previousSet ? (
          <>
            <span>
              지난번 {formatWeight(previousSet.weightKg, unit)}
              {unit} × {previousSet.reps}
            </span>
            {diff && (
              <>
                <Diff
                  value={diff.weightDiffKg}
                  display={(v) => formatWeight(Math.abs(v), unit) + unit}
                />
                <Diff
                  value={diff.repsDiff}
                  display={(v) => `${Math.abs(v)}회`}
                />
              </>
            )}
          </>
        ) : (
          <span>지난 기록 없음</span>
        )}
      </p>
    </li>
  );
}

function Diff({
  value,
  display,
}: {
  value: number;
  display: (value: number) => string;
}) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : "±";
  return (
    <span
      className={cn(
        "font-bold tabular-nums",
        value > 0 && "text-up",
        value < 0 && "text-destructive",
        value === 0 && "text-muted-foreground",
      )}
    >
      {sign}
      {display(value)}
    </span>
  );
}
