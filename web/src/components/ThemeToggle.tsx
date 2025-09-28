"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      document.documentElement.classList.toggle("dark", mq.matches);
    }
  }, []);

  if (!mounted) return null;

  const isDark = document.documentElement.classList.contains("dark");
  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={toggle}
      className="rounded-xl border border-gray-200 dark:border-surface-300 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-surface-300 transition"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
