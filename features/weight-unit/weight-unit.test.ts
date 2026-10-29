import { describe, expect, it } from "vitest";

import { formatWeight, fromDisplayWeight, toDisplayWeight } from "./index";

describe("무게 단위", () => {
  it("kg는 그대로, lb는 환산해서 소수 첫째 자리로 보여준다", () => {
    expect(formatWeight(52.5, "kg")).toBe("52.5");
    expect(formatWeight(50, "kg")).toBe("50");
    expect(formatWeight(52.5, "lb")).toBe("115.7");
  });

  it("lb로 입력한 값은 저장 후 다시 lb로 보일 때 같은 값이다", () => {
    for (const lb of [45, 135, 142.5, 225]) {
      const stored = fromDisplayWeight(lb, "lb");
      expect(formatWeight(stored, "lb")).toBe(String(lb));
    }
  });

  it("단위를 바꿔도 저장된 kg 값은 변하지 않는다", () => {
    const stored = fromDisplayWeight(100, "lb");
    expect(toDisplayWeight(stored, "kg")).toBeCloseTo(45.4, 1);
    expect(fromDisplayWeight(45.4, "kg")).toBe(45.4);
  });
});
