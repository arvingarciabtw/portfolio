import type { Global, PageMaps } from "./global.d.ts";

export const global: Global = $state({
	activeRow: 1,
	activeIndex: 0,
	maxRowIndex: 0,
	maxRow: 0,
	indexMap: {
		0: 0,
	},
});

export const pageMaps: PageMaps = {
	// the other pages don't have multi-rows,
	// which is why they aren't declared here
	home: {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
	},
	about: {
		0: 4,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
	},
};
