import { describe, expect, it } from "vitest";

import { parseRecordLink, recordHref } from "./record-link";

describe("기록 화면 주소", () => {
  it("선택한 운동과 날짜를 주소에 담고, 오늘이면 날짜는 생략한다", () => {
    const href = recordHref(
      { part: "등", exercise: "렛풀다운", brand: "Hammer Strength", date: "2026-10-29" },
      "2026-10-29"
    );

    const params = new URLSearchParams(href.slice(2));
    expect(href.startsWith("/?")).toBe(true);
    expect(Object.fromEntries(params)).toEqual({
      part: "등",
      exercise: "렛풀다운",
      brand: "Hammer Strength",
    });
  });

  it("지난 날짜는 주소에 남긴다", () => {
    const href = recordHref({ date: "2026-10-12" }, "2026-10-29");

    expect(href).toBe("/?date=2026-10-12");
  });

  it("주소에서 읽을 때 오늘 이후 날짜는 오늘로 돌린다", () => {
    const parsed = parseRecordLink(new URLSearchParams("date=2026-12-01&pick=1"), "2026-10-29");

    expect(parsed.date).toBe("2026-10-29");
    expect(parsed.pick).toBe(true);
  });

  it("목록에 없는 브랜드가 주소에 있으면 선택하지 않은 것으로 본다", () => {
    const parsed = parseRecordLink(new URLSearchParams("part=등&exercise=렛풀다운&brand=없는브랜드"), "2026-10-29");

    expect(parsed.selected).toBeNull();
  });
});
