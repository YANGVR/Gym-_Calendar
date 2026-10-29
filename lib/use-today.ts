import { useSyncExternalStore } from "react";

import { todayISO } from "./date";

const noopSubscribe = () => () => {};

/** 기기의 오늘 날짜. 서버 렌더링 중에는 아직 알 수 없으므로 빈 문자열이다. */
export function useToday(): string {
  return useSyncExternalStore(noopSubscribe, todayISO, () => "");
}
