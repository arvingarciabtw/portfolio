// these are helpers for the footer
export const keys = {
  navigation: [
    { key: "h", symbol: "h" },
    { key: "j", symbol: "j" },
    { key: "k", symbol: "k" },
    { key: "l", symbol: "l" },
    { key: "ArrowLeft", symbol: "←" },
    { key: "ArrowDown", symbol: "↓" },
    { key: "ArrowUp", symbol: "↑" },
    { key: "ArrowRight", symbol: "→" },
  ],
  section: [
    { key: "1", symbol: "1" },
    { key: "2", symbol: "2" },
    { key: "3", symbol: "3" },
  ],
  execute: [
    { key: "Enter", symbol: "Enter" },
    { key: " ", symbol: "Space" },
  ],
  scroll: [
    { key: "w", symbol: "w" },
    { key: "a", symbol: "a" },
    { key: "s", symbol: "s" },
    { key: "d", symbol: "d" },
  ],
  position: [{ key: "p", symbol: "p" }],
  reset: [{ key: "r", symbol: "r" }],
  hide: [{ key: "x", symbol: "x" }],
  theme: [{ key: "t", symbol: "t" }],
  contrast: [{ key: "c", symbol: "c" }],
  zoom: [
    { key: "-", symbol: "-" },
    { key: "+", symbol: "+" },
  ],
  weight: [
    { key: "[", symbol: "[" },
    { key: "]", symbol: "]" },
  ],
};

export const keyGroups = [
  {
    group: keys.navigation,
    class: "navigate",
    description: "navigate (vim/arrows)",
  },
  {
    group: keys.section,
    class: "section",
    description: "section",
  },
  {
    group: keys.execute,
    class: "execute",
    description: "execute",
  },
  {
    group: keys.scroll,
    class: "scroll",
    description: "scroll",
  },
  {
    group: keys.zoom,
    class: "zoom",
    description: "zoom",
  },
  {
    group: keys.weight,
    class: "weight",
    description: "weight",
  },
  {
    group: keys.position,
    class: "pos",
    description: "pos",
  },
  {
    group: keys.hide,
    class: "hide",
    description: "hide",
  },
  {
    group: keys.reset,
    class: "reset",
    description: "reset",
  },
  {
    group: keys.theme,
    class: "theme",
    description: "theme",
  },
  {
    group: keys.contrast,
    class: "contrast",
    description: "contrast",
  },
];
