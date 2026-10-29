import { describe, expect, it } from "vitest";

import { buildChartData, type ChartSession } from "./chart-data";

function session(date: string, sets: [number, number][]): ChartSession {
  return {
    date,
    sets: sets.map(([weightKg, reps]) => ({ weightKg, reps })),
  };
}

describe("차트 데이터", () => {
  it("세트 번호마다 선 하나를 만들고, 세트가 없는 날은 비워 둔다", () => {
    const data = buildChartData(
      [session("2026-10-26", [[50, 10], [47.5, 10]]), session("2026-10-29", [[50, 8]])],
      "kg"
    );

    expect(data.dates).toEqual(["2026-10-26", "2026-10-29"]);
    expect(data.lines).toEqual([
      { setNumber: 1, points: [500, 400] },
      { setNumber: 2, points: [475, null] },
    ]);
  });

  it("최근 5번 운동일만 보여준다", () => {
    const sessions = [10, 12, 15, 19, 22, 26].map((day) => session(`2026-10-${day}`, [[50, 10]]));

    expect(buildChartData(sessions, "kg").dates).toEqual([
      "2026-10-12",
      "2026-10-15",
      "2026-10-19",
      "2026-10-22",
      "2026-10-26",
    ]);
  });

  it("세로축은 0이 아니라 값의 범위에 맞춘다", () => {
    const data = buildChartData(
      [session("2026-10-26", [[50, 10], [47.5, 10]]), session("2026-10-29", [[50, 8]])],
      "kg"
    );

    expect(data.yMin).toBe(300);
    expect(data.yMax).toBe(600);
    expect(data.ticks).toEqual([300, 375, 450, 525, 600]);
  });

  it("lb로 보면 운동량도 lb 기준으로 환산한다", () => {
    const data = buildChartData([session("2026-10-26", [[100, 1]])], "lb");

    expect(data.lines[0].points[0]).toBeCloseTo(220.462, 2);
  });
});
