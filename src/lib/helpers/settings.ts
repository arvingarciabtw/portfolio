import type { FontState } from "./helpers.d.ts";

export const settings = {
	reset(fontState: FontState) {
		fontState.size = 14;
		fontState.weight = 400;

		document.documentElement.style.fontSize = `${fontState.size}px`;
		document.documentElement.style.fontWeight = fontState.weight.toString();
	},
};
