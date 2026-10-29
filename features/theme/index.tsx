"use client";

import { useEffect } from "react";

import { createPersistedStore, useHydrated } from "@/lib/persisted-store";

export type ThemeChoice = "light" | "dark" | "system";

function isChoice(value: unknown): value is ThemeChoice {
  return value === "light" || value === "dark" || value === "system";
}

const KEY = "gym-theme:v1";
const store = createPersistedStore<ThemeChoice>(KEY, "system", isChoice);

function prefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function isDark(choice: ThemeChoice): boolean {
  return choice === "dark" || (choice === "system" && prefersDark());
}

/** [다크모드 여부, 라이트/다크 전환]. 처음에는 기기 설정을 따르고, 한 번 고르면 그 선택을 기억한다. */
export function useDarkMode(): [boolean, () => void] {
  const [choice, update] = store.useStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark(choice));
  }, [choice]);

  const hydrated = useHydrated();
  const dark = hydrated && isDark(choice);
  return [dark, () => update(() => (dark ? "light" : "dark"))];
}

/** 첫 화면이 그려지기 전에 저장된 테마를 적용해 깜빡임을 막는 인라인 스크립트. */
export const themeInitScript = `(function(){try{var c=localStorage.getItem(${JSON.stringify(KEY)});c=c?JSON.parse(c):"system";var d=c==="dark"||(c!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;
