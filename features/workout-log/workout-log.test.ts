import { describe, expect, it } from "vitest";

import {
  addSet,
  compareSet,
  datesWithRecords,
  previousSession,
  removeSet,
  removeWorkout,
  setSetValue,
  workoutsOn,
  type Workout,
} from "./index";

const target = {
  date: "2026-10-29",
  part: "등",
  exercise: "렛풀다운",
  brand: "Hammer Strength",
  model: "Select Lat Pulldown",
};

function workout(
  id: string,
  date: string,
  brand: string,
  sets: [number | null, number | null][],
  model = "Select Lat Pulldown"
): Workout {
  return {
    id,
    date,
    part: "등",
    exercise: "렛풀다운",
    brand,
    model,
    sets: sets.map(([weightKg, reps]) => ({ weightKg, reps })),
  };
}

describe("세트 입력", () => {
  it("기록이 없는 날짜에 값을 입력하면 그 운동 기록이 새로 생긴다", () => {
    const log = setSetValue([], target, 0, { weightKg: 52.5, reps: 8 });

    expect(log).toHaveLength(1);
    expect(log[0]).toMatchObject({
      date: "2026-10-29",
      exercise: "렛풀다운",
      brand: "Hammer Strength",
      sets: [{ weightKg: 52.5, reps: 8 }],
    });
  });

  it("이미 있는 세트의 값은 고치고 다른 세트는 그대로 둔다", () => {
    let log = setSetValue([], target, 0, { weightKg: 50, reps: 10 });
    log = addSet(log, target);
    log = setSetValue(log, target, 1, { reps: 9 });

    expect(log[0].sets).toEqual([
      { weightKg: 50, reps: 10 },
      { weightKg: 50, reps: 9 },
    ]);
  });

  it("세트 추가는 직전 세트 값을 채운 줄을 만든다", () => {
    let log = setSetValue([], target, 0, { weightKg: 52.5, reps: 8 });
    log = addSet(log, target);

    expect(log[0].sets[1]).toEqual({ weightKg: 52.5, reps: 8 });
  });
});

describe("삭제", () => {
  const log = [workout("a", "2026-10-29", "Hammer Strength", [[52.5, 8], [50, 10], [50, 9]])];

  it("세트를 지우면 뒤 세트의 번호가 당겨진다", () => {
    const next = removeSet(log, target, 0);

    expect(next[0].sets).toEqual([
      { weightKg: 50, reps: 10 },
      { weightKg: 50, reps: 9 },
    ]);
  });

  it("마지막 세트를 지우면 그 운동 기록이 사라진다", () => {
    let next = log;
    for (let i = 0; i < 3; i++) next = removeSet(next, target, 0);

    expect(next).toEqual([]);
  });

  it("운동 기록 하나를 통째로 지운다", () => {
    expect(removeWorkout(log, "a")).toEqual([]);
  });
});

describe("조회와 비교", () => {
  const log = [
    workout("a", "2026-10-22", "Hammer Strength", [[50, 8], [47.5, 10]]),
    workout("b", "2026-10-26", "Hammer Strength", [[50, 10], [50, 9]]),
    workout("c", "2026-10-28", "Life Fitness", [[45, 10]]),
    workout("d", "2026-10-29", "Hammer Strength", [[null, null]]),
  ];

  it("같은 종목이라도 다른 브랜드는 이전 기록으로 치지 않는다", () => {
    const prev = previousSession(log, { exercise: "렛풀다운", brand: "Hammer Strength", model: "Select Lat Pulldown" }, "2026-10-29");

    expect(prev?.id).toBe("b");
  });

  it("고른 날짜보다 앞선 기록만 이전 기록이 된다", () => {
    const prev = previousSession(log, { exercise: "렛풀다운", brand: "Hammer Strength", model: "Select Lat Pulldown" }, "2026-10-26");

    expect(prev?.id).toBe("a");
    expect(
      previousSession(log, { exercise: "렛풀다운", brand: "Hammer Strength", model: "Select Lat Pulldown" }, "2026-10-22")
    ).toBeUndefined();
  });

  it("세트 비교는 무게와 횟수의 차이를 돌려준다", () => {
    expect(compareSet({ weightKg: 52.5, reps: 8 }, { weightKg: 50, reps: 10 })).toEqual({
      weightDiffKg: 2.5,
      repsDiff: -2,
    });
    expect(compareSet({ weightKg: 50, reps: 8 }, undefined)).toBeNull();
  });

  it("값이 없는 운동은 날짜별 목록과 달력 표시에서 빠진다", () => {
    expect(workoutsOn(log, "2026-10-29")).toEqual([]);
    expect(workoutsOn(log, "2026-10-26").map((w) => w.id)).toEqual(["b"]);
    expect([...datesWithRecords(log)].sort()).toEqual(["2026-10-22", "2026-10-26", "2026-10-28"]);
  });
});

describe("머신 모델", () => {
  const other = { ...target, model: "Other Pulldown" };

  it("같은 날 같은 브랜드라도 모델이 다르면 별도 기록이 된다", () => {
    let log = setSetValue([], target, 0, { weightKg: 50, reps: 10 });
    log = setSetValue(log, other, 0, { weightKg: 40, reps: 12 });

    expect(log).toHaveLength(2);
    expect(log.map((w) => w.model).sort()).toEqual(["Other Pulldown", "Select Lat Pulldown"]);
  });

  it("지난 기록은 같은 모델에서만 찾는다", () => {
    const log = [
      workout("a", "2026-10-22", "Hammer Strength", [[50, 10]]),
      workout("b", "2026-10-25", "Hammer Strength", [[30, 12]], "Other Pulldown"),
    ];

    const key = { exercise: "렛풀다운", brand: "Hammer Strength" };
    expect(previousSession(log, { ...key, model: "Select Lat Pulldown" }, "2026-10-29")?.id).toBe("a");
    expect(previousSession(log, { ...key, model: "Other Pulldown" }, "2026-10-29")?.id).toBe("b");
    expect(previousSession(log, { ...key, model: "" }, "2026-10-29")).toBeUndefined();
  });
});
