import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  BRANDS,
  PARTS,
  brandsIn,
  brandsOf,
  categoriesOf,
  modelsIn,
  modelsOf,
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
  it("여섯 부위마다 머신 종목이 1개 이상 있다", () => {
    expect(PARTS).toEqual(["가슴", "등", "어깨", "하체", "팔", "복근"]);
    for (const part of PARTS) {
      expect(exercisesOf(part).length).toBeGreaterThanOrEqual(1);
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

  it("렛풀다운은 기본 일곱 브랜드와 추가 브랜드가 모두 연결돼 있다", () => {
    expect(brandsOf("렛풀다운")).toEqual([
      "Hammer Strength",
      "Life Fitness",
      "Technogym",
      "Cybex",
      "Gym80",
      "Prime",
      "Nautilus",
      "Matrix",
      "Precor",
      "Atlantis",
      "Hoist",
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

  it("사진을 아직 구하지 못한 머신 모델은 두 개뿐이고, 나머지는 실제 파일이 있다", () => {
    const missing: string[] = [];
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        for (const brand of brandsOf(exercise)) {
          for (const model of modelsOf(exercise, brand)) {
            const image = imageOf(exercise, brand, model.name);
            if (!image) {
              missing.push(`${exercise}|${brand}`);
              continue;
            }
            expect(existsSync(join(process.cwd(), "public", image.src))).toBe(true);
          }
        }
      }
    }
    expect(missing.sort()).toEqual(["T바 로우|Prime", "레터럴 레이즈|Technogym"]);
  });

  it("모든 종목·브랜드에 머신 모델이 하나 이상 있고, 같은 브랜드 안에서 이름이 겹치지 않는다", () => {
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        for (const brand of brandsOf(exercise)) {
          const names = modelsOf(exercise, brand).map((model) => model.name);
          expect(names.length).toBeGreaterThan(0);
          expect(new Set(names).size).toBe(names.length);
        }
      }
    }
  });

  it("같은 브랜드의 체스트 프레스에는 여러 머신 모델이 있고, 모델마다 이미지가 다르다", () => {
    const models = modelsOf("체스트 프레스", "Hammer Strength");
    expect(models.length).toBeGreaterThan(1);
    expect(new Set(models.map((model) => model.src)).size).toBe(models.length);
    expect(imageOf("체스트 프레스", "Hammer Strength", models[1].name)?.src).toBe(models[1].src);
    // 모델을 생략하면 첫 모델의 이미지다.
    expect(imageOf("체스트 프레스", "Hammer Strength")?.src).toBe(models[0].src);
  });

  it("한 브랜드의 모델은 카테고리별로 나뉜다", () => {
    const pin = modelsIn("체스트 프레스", "Hammer Strength", "Pin");
    const plate = modelsIn("체스트 프레스", "Hammer Strength", "Plate");
    expect(pin.length).toBeGreaterThan(0);
    expect(plate.length).toBeGreaterThan(0);
    expect(brandsIn("체스트 프레스", "Plate")).toContain("Hammer Strength");
    expect(brandsIn("체스트 프레스", "Pin")).toContain("Hammer Strength");
  });

  it("렛풀다운은 모든 브랜드에 Pin 모델이 있고, Plate 모델이 있는 브랜드는 따로 나뉜다", () => {
    expect(categoriesOf("렛풀다운")).toEqual(["Pin", "Plate"]);
    expect(brandsIn("렛풀다운", "Pin")).toEqual(expect.arrayContaining(["Life Fitness", "Cybex", "Gym80", "Matrix", "Precor"]));
    expect(brandsIn("렛풀다운", "Plate")).toEqual(
      expect.arrayContaining(["Hammer Strength", "Technogym", "Gym80", "Prime", "Nautilus", "Atlantis", "Hoist"])
    );
    expect(brandsIn("렛풀다운", "Plate")).not.toContain("Life Fitness");
    // Gym80은 Pure Kraft는 Plate, Sygnum은 Pin이라 한 브랜드가 두 카테고리에 나온다.
    expect(modelsIn("렛풀다운", "Gym80", "Plate").map((m) => m.name)).toEqual(["Pure Kraft Lat Pulldown Dual"]);
    expect(modelsIn("렛풀다운", "Gym80", "Pin").length).toBeGreaterThan(1);
  });

  it("카테고리가 하나뿐인 종목은 그 하나만 나온다", () => {
    expect(categoriesOf("레그 컬")).toEqual(["Pin"]);
    expect(categoriesOf("레그 익스텐션")).toEqual(["Pin"]);
  });

  it("모든 브랜드는 하나 이상의 카테고리에 속한다", () => {
    for (const part of PARTS) {
      for (const exercise of exercisesOf(part)) {
        const split = new Set(categoriesOf(exercise).flatMap((category) => brandsIn(exercise, category)));
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
        expect(names.length).toBeGreaterThanOrEqual(1);
        for (const name of names) {
          expect(howToSteps(name, equipment).length).toBeGreaterThanOrEqual(2);
          expect(howToSteps(name, equipment).length).toBeLessThanOrEqual(3);
        }
      }
    }
    expect(freeWeightExercises("가슴", "Barbell").slice(0, 3)).toEqual(["벤치 프레스", "인클라인 벤치 프레스", "디클라인 벤치 프레스"]);
  });

  it("프리웨이트 조합의 부위를 찾고, 목록에 없는 조합은 거절한다", () => {
    expect(partOfCombo("벤치 프레스", "Barbell")).toBe("가슴");
    expect(partOfCombo("스쿼트", "Dumbbell")).toBe("하체");
    expect(partOfCombo("고블릿 스쿼트", "Dumbbell")).toBeUndefined();
    expect(partOfCombo("렛풀다운", "Hammer Strength")).toBe("등");
    expect(partOfCombo("렛풀다운", "Barbell")).toBeUndefined();
  });

  it("프리웨이트 운동 모두 사진 파일이 있다", () => {
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
    expect(total).toBeGreaterThanOrEqual(90);
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
