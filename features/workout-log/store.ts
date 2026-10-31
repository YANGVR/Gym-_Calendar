import { useSyncExternalStore } from "react";

import { createClient } from "@/lib/supabase/client";

import type { Workout } from "./model";
import { diffWorkouts, fromRow, toRow, WORKOUT_COLUMNS, type WorkoutRow } from "./sync";

export type SyncStatus = "idle" | "saving" | "error";

type State = {
  log: Workout[];
  loaded: boolean;
  loadError: boolean;
  sync: SyncStatus;
};

const SAVE_DELAY_MS = 400;

const initial: State = { log: [], loaded: false, loadError: false, sync: "idle" };
let state: State = initial;
/** 서버가 마지막으로 확인해 준 기록. 이것과 지금 기록의 차이만 서버에 보낸다. */
let confirmed: Workout[] = [];
let timer: ReturnType<typeof setTimeout> | undefined;
let syncing = false;
let loading = false;
const listeners = new Set<() => void>();

function set(next: Partial<State>) {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

async function runSync() {
  if (syncing) return;
  syncing = true;
  try {
    for (;;) {
      const snapshot = state.log;
      const { upserts, deletes } = diffWorkouts(confirmed, snapshot);
      if (upserts.length === 0 && deletes.length === 0) {
        set({ sync: "idle" });
        return;
      }
      set({ sync: "saving" });
      const supabase = createClient();
      // 같은 날 같은 머신을 지웠다 다시 만든 경우를 위해 지우기를 먼저 한다.
      if (deletes.length > 0) {
        const { error } = await supabase.from("workouts").delete().in("id", deletes);
        if (error) throw error;
      }
      if (upserts.length > 0) {
        const { error } = await supabase.from("workouts").upsert(upserts.map(toRow), { onConflict: "id" });
        if (error) throw error;
      }
      confirmed = snapshot;
      // 저장하는 동안 기록이 또 바뀌었으면 한 번 더 돈다.
    }
  } catch {
    set({ sync: "error" });
  } finally {
    syncing = false;
  }
}

function scheduleSync() {
  clearTimeout(timer);
  set({ sync: "saving" });
  timer = setTimeout(() => void runSync(), SAVE_DELAY_MS);
}

/** 저장되지 않은 변경을 지금 서버로 보낸다(실패 후 다시 시도, 화면을 떠날 때). */
export function flushWorkouts() {
  clearTimeout(timer);
  void runSync();
}

/** 로그인한 계정의 기록을 서버에서 불러온다. 이미 불러왔으면 아무것도 하지 않는다. */
export async function loadWorkouts() {
  if (state.loaded || loading) return;
  loading = true;
  set({ loadError: false });
  const supabase = createClient();
  const { data: auth } = await supabase.auth.getUser();
  // 친구의 기록도 읽을 수 있으므로, 내 기록만 달라고 user_id로 좁힌다.
  const { data, error } = auth.user
    ? await supabase
        .from("workouts")
        .select(WORKOUT_COLUMNS)
        .eq("user_id", auth.user.id)
        .order("date", { ascending: true })
    : { data: null, error: new Error("not_signed_in") };
  loading = false;
  if (error) {
    set({ loadError: true });
    return;
  }
  const rows = (data ?? []) as WorkoutRow[];
  confirmed = rows.map(fromRow);
  set({ log: confirmed, loaded: true, loadError: false, sync: "idle" });
}

/** 친구의 기록을 읽어 온다(읽기 전용). 친구가 아니면 서버가 행을 주지 않아 빈 목록이 온다. */
export async function fetchWorkoutsOf(userId: string): Promise<Workout[]> {
  const { data, error } = await createClient()
    .from("workouts")
    .select(WORKOUT_COLUMNS)
    .eq("user_id", userId)
    .order("date", { ascending: true });
  if (error) throw error;
  return ((data ?? []) as WorkoutRow[]).map(fromRow);
}

/** 로그아웃하거나 계정이 바뀔 때 메모리의 기록을 비운다. 서버의 기록은 그대로다. */
export function resetWorkouts() {
  clearTimeout(timer);
  confirmed = [];
  state = initial;
  listeners.forEach((listener) => listener());
}

function update(change: (current: Workout[]) => Workout[]) {
  const next = change(state.log);
  if (next === state.log) return;
  set({ log: next });
  scheduleSync();
}

/** 계정의 운동 기록. update는 현재 기록을 받아 다음 기록을 돌려주고, 바뀐 부분은 곧바로 서버에 저장된다. */
export function useWorkoutLog(): [Workout[], typeof update] {
  const current = useSyncExternalStore(subscribe, () => state.log, () => initial.log);
  return [current, update];
}

/** 불러오기와 저장의 진행 상태. */
export function useWorkoutSync() {
  const loaded = useSyncExternalStore(subscribe, () => state.loaded, () => false);
  const loadError = useSyncExternalStore(subscribe, () => state.loadError, () => false);
  const sync = useSyncExternalStore(subscribe, () => state.sync, () => "idle" as SyncStatus);
  return { loaded, loadError, sync };
}
