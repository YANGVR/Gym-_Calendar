import type { Workout, WorkoutSet } from "./model";

/** workouts 테이블의 한 행(브라우저로 오가는 모양). user_id는 서버가 채운다. */
export type WorkoutRow = {
  id: string;
  date: string;
  part: string;
  exercise: string;
  brand: string;
  sets: WorkoutSet[] | null;
};

export function toRow(workout: Workout): WorkoutRow {
  const { id, date, part, exercise, brand, sets } = workout;
  return { id, date, part, exercise, brand, sets };
}

export function fromRow(row: WorkoutRow): Workout {
  return {
    id: row.id,
    date: row.date,
    part: row.part,
    exercise: row.exercise,
    brand: row.brand,
    sets: Array.isArray(row.sets) ? row.sets : [],
  };
}

const sameContent = (a: Workout, b: Workout) =>
  a.date === b.date &&
  a.part === b.part &&
  a.exercise === b.exercise &&
  a.brand === b.brand &&
  JSON.stringify(a.sets) === JSON.stringify(b.sets);

/** 서버가 알고 있는 기록(before)과 지금 기록(after)의 차이: 올릴 것과 지울 것. */
export function diffWorkouts(before: Workout[], after: Workout[]) {
  const known = new Map(before.map((workout) => [workout.id, workout]));
  const upserts = after.filter((workout) => {
    const old = known.get(workout.id);
    return !old || !sameContent(old, workout);
  });
  const current = new Set(after.map((workout) => workout.id));
  const deletes = before.filter((workout) => !current.has(workout.id)).map((workout) => workout.id);
  return { upserts, deletes };
}
