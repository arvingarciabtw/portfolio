import type { FontState } from "./helpers.d.ts";

export const font = {
	size: {
		MIN: 10,
		MAX: 24,
		increase(state: FontState) {
			if (state.size < this.MAX) state.size++;
			document.documentElement.style.fontSize = `${state.size}px`;
		},
		decrease(e: KeyboardEvent, state: FontState) {
			if (!e.ctrlKey && state.size > this.MIN) state.size--;
			document.documentElement.style.fontSize = `${state.size}px`;
		},
	},
	weight: {
		MIN: 200,
		MAX: 700,
		FACTOR: 25,
		increase(state: FontState) {
			if (state.weight < this.MAX) {
				state.weight = state.weight + this.FACTOR;
			}
			document.documentElement.style.fontWeight = state.weight
				.toString();
		},
		decrease(state: FontState) {
			if (state.weight > this.MIN) {
				state.weight = state.weight - this.FACTOR;
			}
			document.documentElement.style.fontWeight = state.weight
				.toString();
		},
	},
};
