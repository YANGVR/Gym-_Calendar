import { describe, expect, it } from "vitest";

import { diffWorkouts, fromRow, toRow, type Workout } from "./index";

function workout(id: string, reps: number): Workout {
  return {
    id,
    date: "2026-10-29",
    part: "등",
    exercise: "렛풀다운",
    brand: "Hammer Strength",
    model: "Select Lat Pulldown",
    sets: [{ weightKg: 50, reps }],
  };
}

describe("서버와 맞출 변경 찾기", () => {
  it("새로 생긴 기록과 값이 바뀐 기록은 올리고, 사라진 기록은 지운다", () => {
    const before = [workout("a", 10), workout("b", 10), workout("c", 10)];
    const after = [workout("a", 10), workout("b", 8), workout("d", 5)];

    const { upserts, deletes } = diffWorkouts(before, after);

    expect(upserts.map((w) => w.id).sort()).toEqual(["b", "d"]);
    expect(deletes).toEqual(["c"]);
  });

  it("바뀐 것이 없으면 아무것도 보내지 않는다", () => {
    const log = [workout("a", 10)];

    expect(diffWorkouts(log, [workout("a", 10)])).toEqual({ upserts: [], deletes: [] });
  });
});

describe("서버 행과 기록의 변환", () => {
  it("행으로 바꿨다가 되돌려도 같은 기록이다", () => {
    const original = workout("a", 10);

    expect(fromRow(toRow(original))).toEqual(original);
  });

  it("행의 세트가 비어 있거나 없으면 빈 목록으로 읽는다", () => {
    expect(
      fromRow({ id: "a", date: "2026-10-29", part: "등", exercise: "렛풀다운", brand: "Prime", model: null, sets: null }).sets
    ).toEqual([]);
  });

  it("행의 모델이 비어 있으면 빈 문자열로 읽는다", () => {
    const row = { id: "a", date: "2026-10-29", part: "등", exercise: "렛풀다운", brand: "Prime", model: null, sets: [] };

    expect(fromRow(row).model).toBe("");
  });
});

describe("모델이 바뀐 기록", () => {
  it("모델만 바뀌어도 올릴 기록으로 본다", () => {
    const before = [workout("a", 10)];
    const after = [{ ...workout("a", 10), model: "Other Pulldown" }];

    expect(diffWorkouts(before, after).upserts).toHaveLength(1);
  });
});
