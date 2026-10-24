export type Global = {
	activeRow: number;
	activeIndex: number;
	maxRowIndex: number;
	maxRow: number;
	indexMap: Record<number, number>;
	lastContentRow: number | null;
	lastTocRow: number | null;
};

export type PageMaps = {
	home: Record<number, number>;
	about: Record<number, number>;
};
