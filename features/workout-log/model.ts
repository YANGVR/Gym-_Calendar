export type WorkoutSet = { weightKg: number | null; reps: number | null };

export type Workout = {
  id: string;
  date: string;
  part: string;
  exercise: string;
  brand: string;
  /** 머신 모델 이름. 모델을 고르지 않는 기록(프리웨이트, 모델이 도입되기 전 기록)은 빈 문자열. */
  model: string;
  sets: WorkoutSet[];
};

/** 날짜 + 종목 + 브랜드 + 모델이 하나의 운동 기록을 가리킨다. */
export type WorkoutKey = { date: string; exercise: string; brand: string; model: string };
/** 같은 머신(종목 + 브랜드 + 모델)의 기록끼리 비교하고 차트에 그린다. */
export type MachineKey = { exercise: string; brand: string; model: string };
export type WorkoutTarget = WorkoutKey & { part: string };

export type RecordedSet = { weightKg: number; reps: number };

export function isRecorded(set: WorkoutSet): set is RecordedSet {
  return set.weightKg !== null && set.reps !== null;
}

export function recordedSets(workout: Workout): RecordedSet[] {
  return workout.sets.filter(isRecorded);
}

const BLANK: WorkoutSet = { weightKg: null, reps: null };

function createId(): string {
  return crypto.randomUUID();
}

function matches(workout: Workout, key: WorkoutKey): boolean {
  return workout.date === key.date && workout.exercise === key.exercise && workout.brand === key.brand && workout.model === key.model;
}

export function findWorkout(log: Workout[], key: WorkoutKey): Workout | undefined {
  return log.find((workout) => matches(workout, key));
}

function upsert(log: Workout[], target: WorkoutTarget, change: (sets: WorkoutSet[]) => WorkoutSet[]): Workout[] {
  const existing = findWorkout(log, target);
  if (!existing) {
    const sets = change([]);
    if (sets.length === 0) return log;
    return [
      ...log,
      {
        id: createId(),
        date: target.date,
        part: target.part,
        exercise: target.exercise,
        brand: target.brand,
        model: target.model,
        sets,
      },
    ];
  }
  const sets = change(existing.sets);
  if (sets.length === 0) return log.filter((workout) => workout !== existing);
  return log.map((workout) => (workout === existing ? { ...workout, sets } : workout));
}

/** index번째 세트의 값을 고친다. 운동 기록이나 세트가 없으면 만든다. */
export function setSetValue(
  log: Workout[],
  target: WorkoutTarget,
  index: number,
  patch: Partial<WorkoutSet>
): Workout[] {
  return upsert(log, target, (sets) => {
    const next = [...sets];
    while (next.length <= index) next.push({ ...BLANK });
    next[index] = { ...next[index], ...patch };
    return next;
  });
}

/** 직전 세트 값을 채운 새 줄을 맨 아래에 붙인다. */
export function addSet(log: Workout[], target: WorkoutTarget): Workout[] {
  return upsert(log, target, (sets) => {
    const base = sets.length === 0 ? [{ ...BLANK }] : sets;
    const last = [...base].reverse().find(isRecorded) ?? base[base.length - 1];
    return [...base, { ...last }];
  });
}

export function removeSet(log: Workout[], key: WorkoutKey, index: number): Workout[] {
  const existing = findWorkout(log, key);
  if (!existing) return log;
  return upsert(log, { ...key, part: existing.part }, (sets) => sets.filter((_, i) => i !== index));
}

export function removeWorkout(log: Workout[], id: string): Workout[] {
  return log.filter((workout) => workout.id !== id);
}

/** 같은 머신(종목·브랜드·모델)에서 beforeDate보다 앞선 가장 최근 운동일의 기록. */
export function previousSession(
  log: Workout[],
  key: MachineKey,
  beforeDate: string
): Workout | undefined {
  return log
    .filter(
      (workout) =>
        workout.exercise === key.exercise &&
        workout.brand === key.brand &&
        workout.model === key.model &&
        workout.date < beforeDate &&
        recordedSets(workout).length > 0
    )
    .sort((a, b) => a.date.localeCompare(b.date))
    .at(-1);
}

export function compareSet(current: RecordedSet, previous: RecordedSet | undefined) {
  if (!previous) return null;
  return {
    weightDiffKg: Math.round((current.weightKg - previous.weightKg) * 100) / 100,
    repsDiff: current.reps - previous.reps,
  };
}

/** 값이 하나라도 기록된 운동만, 그날의 목록으로 돌려준다. */
export function workoutsOn(log: Workout[], date: string): Workout[] {
  return log.filter((workout) => workout.date === date && recordedSets(workout).length > 0);
}

export function datesWithRecords(log: Workout[]): Set<string> {
  return new Set(log.filter((workout) => recordedSets(workout).length > 0).map((workout) => workout.date));
}

/** 같은 머신(종목·브랜드·모델)의 기록된 운동일들을 오래된 순서로. */
export function sessionsOf(log: Workout[], key: MachineKey): Workout[] {
  return log
    .filter(
      (workout) =>
        workout.exercise === key.exercise &&
        workout.brand === key.brand &&
        workout.model === key.model &&
        recordedSets(workout).length > 0
    )
    .sort((a, b) => a.date.localeCompare(b.date));
}
