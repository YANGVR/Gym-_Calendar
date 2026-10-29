import { useSyncExternalStore } from "react";

/**
 * localStorage에 JSON으로 저장하는 작은 외부 스토어.
 * 서버 렌더링 중에는 `initial`을 돌려주고, 브라우저에서 처음 읽을 때 저장된 값을 불러온다.
 */
export function createPersistedStore<T>(key: string, initial: T, isValid: (value: unknown) => value is T) {
  let cache: T | undefined;
  const listeners = new Set<() => void>();

  function read(): T {
    if (cache !== undefined) return cache;
    try {
      const raw = localStorage.getItem(key);
      const parsed: unknown = raw === null ? initial : JSON.parse(raw);
      cache = isValid(parsed) ? parsed : initial;
    } catch {
      cache = initial;
    }
    return cache;
  }

  function write(next: T) {
    cache = next;
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // 저장소를 쓸 수 없어도 이번 방문 동안은 메모리 값으로 동작한다.
    }
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (event: StorageEvent) => {
      if (event.key !== key) return;
      cache = undefined;
      listener();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  }

  function useStore(): [T, (update: (current: T) => T) => void] {
    const value = useSyncExternalStore(subscribe, read, () => initial);
    return [value, (update) => write(update(read()))];
  }

  return { useStore };
}

const noopSubscribe = () => () => {};

/** 브라우저에서 첫 렌더링이 끝났는지(저장된 값을 읽을 수 있는지) 알려준다. */
export function useHydrated(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}
