import { goto } from "$app/navigation";
import { global as G, pageMaps } from "#lib/stores/global.svelte.js";

type Direction = "left" | "right" | "up" | "down";
type Position = { row: number; idx: number };

function isVisible(el: HTMLElement): boolean {
  const check = (el as HTMLElement & { checkVisibility?: () => boolean })
    .checkVisibility;

  return check ? check.call(el) : el.getClientRects().length > 0;
}

function visibleNavigables(): HTMLAnchorElement[] {
  return Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-navigable]"),
  ).filter(isVisible);
}

function getNavigable(row: number, idx: number): HTMLAnchorElement | null {
  return (
    visibleNavigables().find(
      (el) =>
        Number(el.dataset.row) === row && Number(el.dataset.idx) === idx,
    ) ?? null
  );
}

export function isBlogPage(): boolean {
  return typeof globalThis.location !== "undefined" &&
    globalThis.location.pathname.startsWith("/blog/");
}

export function resetColumnMemory() {
  G.lastContentRow = 1;
  G.lastTocRow = null;
}

function rememberPosition(row: number, idx: number) {
  if (row === 0) return;

  if (idx === 0) {
    G.lastContentRow = row;
  } else if (idx === 1) {
    G.lastTocRow = row;
  }
}

export function nextPosition(
  direction: Direction,
  row: number,
  idx: number,
): Position | null {
  switch (direction) {
    case "down":
      if (row === 0) {
        return getNavigable(1, 0) ? { row: 1, idx: 0 } : null;
      }

      return getNavigable(row + 1, idx) ? { row: row + 1, idx } : null;
    case "up":
      if (row === 0) return null;

      if (row === 1) {
        return getNavigable(0, 0) ? { row: 0, idx: 0 } : null;
      }

      return getNavigable(row - 1, idx) ? { row: row - 1, idx } : null;
    case "left": {
      if (row === 0) {
        const next = idx - 1;
        return getNavigable(0, next) ? { row: 0, idx: next } : null;
      }

      if (idx === 0) return null;

      if (G.lastContentRow !== null && getNavigable(G.lastContentRow, 0)) {
        return { row: G.lastContentRow, idx: 0 };
      }

      return getNavigable(1, 0) ? { row: 1, idx: 0 } : null;
    }
    case "right": {
      if (row === 0) {
        const next = idx + 1;
        return getNavigable(0, next) ? { row: 0, idx: next } : null;
      }

      if (idx === 1) return null;

      if (G.lastTocRow !== null && getNavigable(G.lastTocRow, 1)) {
        return { row: G.lastTocRow, idx: 1 };
      }

      return getNavigable(1, 1) ? { row: 1, idx: 1 } : null;
    }
  }

  return null;
}

function resetForRoute(path: string) {
  G.activeRow = 1;
  G.activeIndex = 0;
  resetColumnMemory();

  switch (path) {
    case "/":
      pageMaps.home[0] = 0;
      G.activeIndex = pageMaps.home[1];
      break;
    case "/about":
      pageMaps.about[0] = 4;
      G.activeIndex = pageMaps.about[1];
      break;
  }
}

export function navigate(path: string) {
  if (!path.startsWith("/")) return;

  goto(path);
  resetForRoute(path);
}

export function render(e: KeyboardEvent): {
  external: boolean;
  path: string;
} {
  e.preventDefault();

  const navigable = getNavigable(G.activeRow, G.activeIndex);

  if (!navigable) {
    return {
      external: false,
      path: "",
    };
  }

  navigable.click();

  const target = new URL(navigable.href);
  const isCurrentRoute = target.origin === globalThis.location.origin &&
    target.pathname === globalThis.location.pathname;

  if (isCurrentRoute) {
    return {
      external: false,
      path: "",
    };
  }

  const isExternal = navigable.target === "_blank";

  if (!isExternal) {
    resetColumnMemory();
  }

  return {
    external: isExternal,
    path: target.pathname,
  };
}

export const move = {
  left: (e: KeyboardEvent) => {
    e.preventDefault();

    if (G.activeRow === 0) {
      if (G.activeIndex > 0) {
        G.activeIndex--;
      }
      render(e);
      return;
    }

    if (isBlogPage()) {
      const next = nextPosition("left", G.activeRow, G.activeIndex);

      if (next) {
        G.activeRow = next.row;
        G.activeIndex = next.idx;
        rememberPosition(next.row, next.idx);
      }
      return;
    }

    if (G.activeIndex > 0) {
      G.activeIndex--;
    }
  },
  down: (e: KeyboardEvent) => {
    e.preventDefault();

    if (isBlogPage()) {
      const next = nextPosition("down", G.activeRow, G.activeIndex);

      if (next) {
        G.activeRow = next.row;
        G.activeIndex = next.idx;
        rememberPosition(next.row, next.idx);
      }
      return;
    }

    if (G.activeRow < G.maxRow) {
      if (G.maxRowIndex > 0) {
        G.indexMap[G.activeRow] = G.activeIndex;
      }
      G.activeRow++;
      G.activeIndex = G.indexMap[G.activeRow] ?? 0;
    }
  },
  up: (e: KeyboardEvent) => {
    e.preventDefault();

    if (isBlogPage()) {
      const next = nextPosition("up", G.activeRow, G.activeIndex);

      if (next) {
        G.activeRow = next.row;
        G.activeIndex = next.idx;
        rememberPosition(next.row, next.idx);
      }
      return;
    }

    if (G.activeRow > 0) {
      if (G.maxRowIndex > 0) {
        G.indexMap[G.activeRow] = G.activeIndex;
      }
      G.activeRow--;
      G.activeIndex = G.indexMap[G.activeRow] ?? 0;
    }
  },
  right: (e: KeyboardEvent) => {
    e.preventDefault();

    if (G.activeRow === 0) {
      if (G.activeIndex < G.maxRowIndex) {
        G.activeIndex++;
      }
      render(e);
      return;
    }

    if (isBlogPage()) {
      const next = nextPosition("right", G.activeRow, G.activeIndex);

      if (next) {
        G.activeRow = next.row;
        G.activeIndex = next.idx;
        rememberPosition(next.row, next.idx);
      }
      return;
    }

    if (G.activeIndex < G.maxRowIndex) {
      G.activeIndex++;
    }
  },
};

export function execute(e: KeyboardEvent) {
  const inHeader = G.activeRow === 0;
  const { external, path } = render(e);

  if (!inHeader && !external && path) {
    resetForRoute(path);
  }
}
