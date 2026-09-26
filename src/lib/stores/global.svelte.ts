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
