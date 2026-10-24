export const scroll = {
	STEP: 300,
	up() {
		window.scrollBy({ top: -scroll.STEP });
	},
	down() {
		window.scrollBy({ top: scroll.STEP });
	},
	left() {
		window.scrollBy({ left: -scroll.STEP });
	},
	right() {
		window.scrollBy({ left: scroll.STEP });
	},
	reset() {
		window.scrollTo({ top: 0, left: 0 });
	},
};
