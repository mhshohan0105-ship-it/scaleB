"use client";

import { Moon, Sun } from "lucide-react";

// Both icons render; CSS shows the right one from <html data-theme>, so nothing depends on client state.
export default function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("scaleb-theme", next);
    } catch {}
  }

  return (
    <button className="theme-toggle" onClick={toggle} type="button" aria-label="Switch between light and dark mode" title="Switch theme">
      <Sun className="theme-dark-only" size={18} />
      <Moon className="theme-light-only" size={18} />
    </button>
  );
}
