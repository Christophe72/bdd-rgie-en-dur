"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme-mode";

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeToggle() {
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const isDark = theme === "dark";
  const ariaLabel = isHydrated
    ? isDark
      ? "Activer le mode jour"
      : "Activer le mode nuit"
    : "Basculer le mode jour/nuit";
  const title = isHydrated ? (isDark ? "Mode jour" : "Mode nuit") : "Thème";
  const icon = isHydrated ? (isDark ? "☀️" : "🌙") : "🌓";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={title}
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 rounded-full border border-neutral-300 bg-background px-3 py-2 text-xl leading-none"
    >
      {icon}
    </button>
  );
}
