"use client";

import { useLayoutEffect } from "react";

const STORAGE_KEY = "theme";
const COOKIE = "theme=dark;path=/;max-age=31536000;SameSite=Lax";
const COOKIE_LIGHT = "theme=light;path=/;max-age=31536000;SameSite=Lax";

function setTheme(mode: "dark" | "light") {
  const root = document.documentElement;
  const isDark = mode === "dark";
  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", isDark ? "#0b0b0e" : "#f9f8f2");
  }

  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }

  document.cookie = isDark ? COOKIE : COOKIE_LIGHT;
}

function getInitialMode(): "dark" | "light" {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function PortfolioTheme() {
  useLayoutEffect(() => {
    setTheme(getInitialMode());

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const btn = target?.closest?.('button[aria-label="Toggle theme"]');
      if (!btn) return;

      const root = document.documentElement;
      const next: "dark" | "light" = root.classList.contains("dark")
        ? "light"
        : "dark";
      setTheme(next);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
