import { toDisplayVolume, type WeightUnit } from "@/features/weight-unit";

export const CHART_SESSION_COUNT = 5;

/** 차트가 필요로 하는 운동일의 모양. 기록 모듈의 Workout이 그대로 들어맞는다. */
export type ChartSession = {
  date: string;
  sets: { weightKg: number | null; reps: number | null }[];
};
const AXIS_STEP = 100;

export type ChartLine = { setNumber: number; points: (number | null)[] };

export type ChartData = {
  dates: string[];
  lines: ChartLine[];
  yMin: number;
  yMax: number;
  ticks: number[];
};

/**
 * 같은 종목·브랜드의 운동일들(오래된 순)에서 최근 5번을 골라,
 * 세트 번호별 운동량(무게 × 횟수) 선과 세로축 범위를 만든다.
 */
export function buildChartData(sessions: ChartSession[], unit: WeightUnit): ChartData {
  const recent = sessions.slice(-CHART_SESSION_COUNT);
  const volumes = recent.map((session) =>
    session.sets.flatMap((set) =>
      set.weightKg === null || set.reps === null ? [] : [toDisplayVolume(set.weightKg * set.reps, unit)]
    )
  );
  const setCount = Math.max(0, ...volumes.map((v) => v.length));
  const lines: ChartLine[] = Array.from({ length: setCount }, (_, index) => ({
    setNumber: index + 1,
    points: volumes.map((v) => v[index] ?? null),
  }));

  const all = volumes.flat();
  const yMin = all.length ? Math.max(0, Math.floor(Math.min(...all) / AXIS_STEP) * AXIS_STEP - AXIS_STEP) : 0;
  const yMax = all.length ? Math.ceil(Math.max(...all) / AXIS_STEP) * AXIS_STEP + AXIS_STEP : AXIS_STEP;
  const ticks = Array.from({ length: 5 }, (_, i) => yMin + ((yMax - yMin) / 4) * i);

  return { dates: recent.map((session) => session.date), lines, yMin, yMax, ticks };
}
