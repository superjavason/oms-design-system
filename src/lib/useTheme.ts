import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "oms-theme";

/** 计算初始主题：localStorage 显式选择优先，否则跟随系统偏好。 */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * 主题状态 Hook：管理亮/暗状态、持久化到 localStorage，
 * 并把 `dark` 类同步到 <html>。首次跟随系统偏好，切换后记住选择。
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });

  return { theme, toggle };
}
