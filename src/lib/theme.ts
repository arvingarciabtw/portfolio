import { writable } from "svelte/store";

function createThemeStore() {
  const { subscribe, set } = writable<string>("system");

  return {
    subscribe,
    set: (value: string) => {
      localStorage.setItem("theme", value);
      set(value);
      applyTheme(value);
    },
  };
}

export const theme = createThemeStore();

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getResolvedTheme(t: string = "system") {
  return t === "system" ? getSystemTheme() : t;
}

function applyTheme(t: string) {
  const resolved = getResolvedTheme(t);
  document.documentElement.setAttribute("data-theme", resolved);
}

export function initTheme() {
  const stored = localStorage.getItem("theme");
  const initial = stored || "system";

  theme.set(initial);
  applyTheme(initial);
}
