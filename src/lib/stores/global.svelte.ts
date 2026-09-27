type Global = {
	activeRow: number;
	activeIndex: number;
	maxRowIndex: number;
	maxRow: number;
	lastVisitedIndexByRow: Record<number, number>;
};

export const global: Global = $state({
	activeRow: 1,
	activeIndex: 0,
	maxRowIndex: 0,
	maxRow: 0,
	lastVisitedIndexByRow: {},
});

type PageMaps = {
	home: Record<number, number>;
	about: Record<number, number>;
};

export const pageMaps: PageMaps = {
	home: {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
	},
	about: {
		0: 3,
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
