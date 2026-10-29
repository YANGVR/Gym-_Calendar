const WEEKDAYS = "일월화수목금토";

export function toISODate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

/** 기기의 현지 날짜(YYYY-MM-DD). */
export function todayISO(): string {
  return toISODate(new Date());
}

export function parseISODate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function shiftDate(iso: string, days: number): string {
  const date = parseISODate(iso);
  date.setDate(date.getDate() + days);
  return toISODate(date);
}

/** 일요일 시작 월 달력 칸. 1일 앞은 null, 이후는 ISO 날짜. month는 0부터. */
export function monthCells(year: number, month: number): (string | null)[] {
  const firstWeekday = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  return [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from({ length: days }, (_, i) => toISODate(new Date(year, month, i + 1))),
  ];
}

/** "10/29 (목)" */
export function formatDateLabel(iso: string): string {
  const date = parseISODate(iso);
  return `${date.getMonth() + 1}/${date.getDate()} (${WEEKDAYS[date.getDay()]})`;
}

/** "10/29" */
export function formatShortDate(iso: string): string {
  const date = parseISODate(iso);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}
