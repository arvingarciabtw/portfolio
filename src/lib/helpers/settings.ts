import type { FontState, PositionState } from "./helpers.d.ts";
import { position } from "./position.ts";

export const settings = {
	reset(positionState: PositionState, fontState: FontState) {
		position.reset(positionState);

		fontState.size = 14;
		fontState.weight = 400;

		document.documentElement.style.fontSize = `${fontState.size}px`;
		document.documentElement.style.fontWeight = fontState.weight.toString();
	},
};
