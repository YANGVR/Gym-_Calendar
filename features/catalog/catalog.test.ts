import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  BRANDS,
  PARTS,
  brandsIn,
  brandsOf,
  categoriesOf,
  categoryOf,
  exercisesOf,
  hasVideo,
  howToSteps,
  imageOf,
  KINDS,
  partOfCombo,
  partsOf,
  EQUIPMENT,
  equipmentOf,
  freeWeightExercises,
} from "./index";

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

  it("렛풀다운은 Pin 여섯 브랜드와 Plate Gym80으로 나뉜다", () => {
    expect(categoriesOf("렛풀다운")).toEqual(["Pin", "Plate"]);
    expect(brandsIn("렛풀다운", "Plate")).toEqual(["Gym80"]);
    expect(brandsIn("렛풀다운", "Pin")).toEqual([
      "Hammer Strength",
      "Life Fitness",
      "Technogym",
      "Cybex",
      "Prime",
      "Nautilus",
    ]);
    expect(categoryOf("렛풀다운", "Gym80")).toBe("Plate");
  });

  it("카테고리가 하나뿐인 종목은 그 하나만 나온다", () => {
    expect(categoriesOf("시티드 로우")).toEqual(["Pin"]);
    expect(categoriesOf("레그 컬")).toEqual(["Pin"]);
  });

  it("모든 브랜드는 정확히 한 카테고리에 속한다", () => {
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        const split = categoriesOf(exercise).flatMap((category) => brandsIn(exercise, category));
        expect([...split].sort()).toEqual([...brandsOf(exercise)].sort());
      }
    }
  });

  it("분류는 Machine과 Free Weight이고, 두 분류 모두 같은 다섯 부위를 쓴다", () => {
    expect(KINDS).toEqual(["Machine", "Free Weight"]);
    expect(partsOf("Machine")).toEqual(PARTS);
    expect(partsOf("Free Weight")).toEqual(PARTS);
  });

  it("프리웨이트는 부위마다 Dumbbell, Barbell, Cable 운동 목록이 있고 운동 방법이 2~3줄 있다", () => {
    expect(EQUIPMENT).toEqual(["Dumbbell", "Barbell", "Cable"]);
    for (const part of PARTS) {
      expect(equipmentOf(part)).toEqual(["Dumbbell", "Barbell", "Cable"]);
      for (const equipment of EQUIPMENT) {
        const names = freeWeightExercises(part, equipment);
        expect(names.length).toBeGreaterThanOrEqual(2);
        for (const name of names) {
          expect(howToSteps(name, equipment).length).toBeGreaterThanOrEqual(2);
          expect(howToSteps(name, equipment).length).toBeLessThanOrEqual(3);
        }
      }
    }
    expect(freeWeightExercises("가슴", "Barbell")).toEqual(["벤치 프레스", "인클라인 벤치 프레스", "디클라인 벤치 프레스"]);
  });

  it("프리웨이트 조합의 부위를 찾고, 목록에 없는 조합은 거절한다", () => {
    expect(partOfCombo("벤치 프레스", "Barbell")).toBe("가슴");
    expect(partOfCombo("스쿼트", "Dumbbell")).toBe("하체");
    expect(partOfCombo("고블릿 스쿼트", "Dumbbell")).toBeUndefined();
    expect(partOfCombo("렛풀다운", "Hammer Strength")).toBe("등");
    expect(partOfCombo("렛풀다운", "Barbell")).toBeUndefined();
  });

  it("프리웨이트 운동 40개 모두 사진 파일이 있다", () => {
    let total = 0;
    for (const part of PARTS) {
      for (const equipment of EQUIPMENT) {
        for (const name of freeWeightExercises(part, equipment)) {
          const image = imageOf(name, equipment);
          expect(image?.src, `${equipment} ${name}`).toMatch(/^\/free-weight\/.+\.png$/);
          expect(existsSync(join(process.cwd(), "public", image!.src)), `${equipment} ${name}`).toBe(true);
          total += 1;
        }
      }
    }
    expect(total).toBe(40);
  });

  it("Cable은 부위마다 2~3개 운동이 있고, 그 조합의 부위를 찾는다", () => {
    expect(freeWeightExercises("가슴", "Cable")).toEqual(["크로스오버", "플랫 플라이", "인클라인 플라이"]);
    expect(freeWeightExercises("하체", "Cable")).toEqual(["킥백", "힙 어덕션"]);
    expect(partOfCombo("크로스오버", "Cable")).toBe("가슴");
    // 같은 이름이라도 장비가 다르면 따로 취급한다.
    expect(partOfCombo("시티드 로우", "Cable")).toBe("등");
    expect(partOfCombo("시티드 로우", "Barbell")).toBeUndefined();
    expect(imageOf("시티드 로우", "Cable")?.src).toBe("/free-weight/cable-seated-row.png");
  });
});
