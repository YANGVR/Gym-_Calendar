import { createPersistedStore } from "@/lib/persisted-store";

import type { WeightUnit } from "./index";

function isUnit(value: unknown): value is WeightUnit {
  return value === "kg" || value === "lb";
}

const store = createPersistedStore<WeightUnit>("gym-unit:v1", "kg", isUnit);

/** [단위, 단위 바꾸기]. 선택은 이 브라우저에 저장된다. */
export function useWeightUnit(): [WeightUnit, (unit: WeightUnit) => void] {
  const [unit, update] = store.useStore();
  return [unit, (next) => update(() => next)];
}
