export type WeightUnit = "kg" | "lb";

export { useWeightUnit } from "./use-weight-unit";

const LB_PER_KG = 2.20462;

export function toDisplayWeight(kg: number, unit: WeightUnit): number {
  return unit === "kg" ? kg : kg * LB_PER_KG;
}

export function fromDisplayWeight(value: number, unit: WeightUnit): number {
  return unit === "kg" ? value : value / LB_PER_KG;
}

/** 표시용 문자열. 소수 첫째 자리까지, 끝의 .0은 생략한다. */
export function formatWeight(kg: number, unit: WeightUnit): string {
  return String(Math.round(toDisplayWeight(kg, unit) * 10) / 10);
}

/** 운동량(무게 × 횟수)을 표시 단위로 환산한다. */
export function toDisplayVolume(kgReps: number, unit: WeightUnit): number {
  return toDisplayWeight(kgReps, unit);
}
