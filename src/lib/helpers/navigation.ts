import { goto } from "$app/navigation";
import { global as G, pageMaps } from "$lib/stores/global.svelte";

export function navigate(path: string) {
	goto(path);

	G.activeRow = 1;

	switch (path) {
		case "/":
			pageMaps.home[0] = 0;
			G.activeIndex = pageMaps.home[1];
			break;
		case "/about":
			pageMaps.about[0] = 4;
			G.activeIndex = pageMaps.about[1];
			break;
		default:
			G.activeIndex = 0;
	}
}

export function render(e: KeyboardEvent): boolean {
	e.preventDefault();

	const navigable = document.querySelector<HTMLAnchorElement>(
		`[data-navigable][data-row="${G.activeRow}"][data-idx="${G.activeIndex}"]`,
	);
	if (!navigable) return false;

	const target = new URL(navigable.href);
	const isCurrentRoute = target.origin === globalThis.location.origin &&
		target.pathname === globalThis.location.pathname;

	if (isCurrentRoute) return false;

	const isExternal = navigable.target === "_blank";

	navigable.click();

	return !isExternal;
}

export const move = {
	left: (e: KeyboardEvent) => {
		if (G.activeIndex > 0) {
			G.activeIndex--;
		}
		if (G.activeRow == 0) {
			render(e);
		}
	},
	down: () => {
		if (G.activeRow < G.maxRow) {
			if (G.maxRowIndex > 0) {
				G.indexMap[G.activeRow] = G.activeIndex;
			}
			G.activeRow++;
			G.activeIndex = G.indexMap[G.activeRow] ?? 0;
		}
	},
	up: () => {
		if (G.activeRow > 0) {
			if (G.maxRowIndex > 0) {
				G.indexMap[G.activeRow] = G.activeIndex;
			}
			G.activeRow--;
			G.activeIndex = G.indexMap[G.activeRow] ?? 0;
		}
	},
	right: (e: KeyboardEvent) => {
		if (G.activeIndex < G.maxRowIndex) {
			G.activeIndex++;
		}
		if (G.activeRow == 0) {
			render(e);
		}
	},
};

export function execute(e: KeyboardEvent) {
	if (render(e)) {
		G.activeRow = 1;
		G.activeIndex = 0;
	}
}
