import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { BRANDS, PARTS, brandsOf, exercisesOf, hasVideo, howToSteps, imageOf } from "./index";

describe("머신 목록", () => {
  it("다섯 부위마다 머신 종목이 2~3개씩 있다", () => {
    expect(PARTS).toEqual(["가슴", "등", "어깨", "하체", "팔"]);
    for (const part of PARTS) {
      expect(exercisesOf(part).length).toBeGreaterThanOrEqual(2);
      expect(exercisesOf(part).length).toBeLessThanOrEqual(3);
    }
  });

  it("종목마다 연결된 브랜드는 정해진 브랜드 후보 안에 있다", () => {
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        const brands = brandsOf(exercise);
        expect(brands.length).toBeGreaterThan(0);
        for (const brand of brands) expect(BRANDS).toContain(brand);
      }
    }
  });

  it("렛풀다운은 일곱 브랜드가 모두 연결돼 있다", () => {
    expect(brandsOf("렛풀다운")).toEqual([
      "Hammer Strength",
      "Life Fitness",
      "Technogym",
      "Cybex",
      "Gym80",
      "Prime",
      "Nautilus",
    ]);
  });

  it("영상이 있는 조합만 영상이 있다고 답한다", () => {
    expect(hasVideo("렛풀다운", "Hammer Strength")).toBe(true);
    expect(hasVideo("렛풀다운", "Prime")).toBe(false);
  });

  it("모든 종목에 운동 방법 문장이 2~3줄 있다", () => {
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        expect(howToSteps(exercise).length).toBeGreaterThanOrEqual(2);
        expect(howToSteps(exercise).length).toBeLessThanOrEqual(3);
      }
    }
  });

  it("이미지를 아직 구하지 못한 조합은 두 개뿐이고, 나머지는 실제 파일이 있다", () => {
    const missing: string[] = [];
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        for (const brand of brandsOf(exercise)) {
          const image = imageOf(exercise, brand);
          if (!image) {
            missing.push(`${exercise}|${brand}`);
            continue;
          }
          expect(existsSync(join(process.cwd(), "public", image.src))).toBe(true);
        }
      }
    }
    expect(missing.sort()).toEqual(["T바 로우|Prime", "레터럴 레이즈|Technogym"]);
  });
});
