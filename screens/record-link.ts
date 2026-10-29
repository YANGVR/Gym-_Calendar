import { partOfCombo } from "@/features/catalog";

export type RecordSelection = { part: string; exercise: string; brand: string };

type RecordLink = Partial<RecordSelection> & { date?: string; pick?: boolean };

/** 기록 화면 주소. 오늘 날짜는 주소에 남기지 않는다. */
export function recordHref(link: RecordLink, today: string): string {
  const params = new URLSearchParams();
  if (link.part) params.set("part", link.part);
  if (link.exercise) params.set("exercise", link.exercise);
  if (link.brand) params.set("brand", link.brand);
  if (link.date && link.date !== today) params.set("date", link.date);
  if (link.pick) params.set("pick", "1");
  const query = params.toString();
  return query ? `/?${query}` : "/";
}

/** 주소에서 선택한 운동, 기록 날짜, 선택 영역을 펼칠지 읽는다. 오늘 이후 날짜는 오늘로 돌린다. */
export function parseRecordLink(params: URLSearchParams, today: string) {
  const rawDate = params.get("date");
  const date = rawDate && /^\d{4}-\d{2}-\d{2}$/.test(rawDate) && rawDate <= today ? rawDate : today;
  const exercise = params.get("exercise");
  const brand = params.get("brand");
  const part = exercise && brand ? partOfCombo(exercise, brand) : undefined;
  const selected: RecordSelection | null = exercise && brand && part ? { part, exercise, brand } : null;
  return { date, selected, pick: params.get("pick") === "1" };
}
