import { describe, expect, it } from "vitest";

import { formatDateLabel, monthCells, shiftDate } from "./date";

describe("날짜", () => {
  it("월 달력은 1일의 요일만큼 앞을 비워 둔다", () => {
    const cells = monthCells(2026, 9);

    expect(cells.slice(0, 4)).toEqual([null, null, null, null]);
    expect(cells[4]).toBe("2026-10-01");
    expect(cells.filter(Boolean)).toHaveLength(31);
    expect(cells.at(-1)).toBe("2026-10-31");
  });

  it("하루씩 옮기면 달이 바뀌어도 이어진다", () => {
    expect(shiftDate("2026-10-31", 1)).toBe("2026-11-01");
    expect(shiftDate("2026-11-01", -1)).toBe("2026-10-31");
  });

  it("날짜 라벨은 월/일과 요일로 보여준다", () => {
    expect(formatDateLabel("2026-10-29")).toBe("10/29 (목)");
  });
});
