import type { PositionState } from "./helpers.d.ts";
import { global as G } from "../stores/global.svelte.ts";

export const position = {
	DISTANCE: 150,
	x: {
		increase(positionState: PositionState) {
			positionState.x += position.DISTANCE;
		},
		decrease(positionState: PositionState) {
			positionState.x -= position.DISTANCE;
		},
	},
	y: {
		increase(positionState: PositionState) {
			positionState.y += position.DISTANCE;
		},
		decrease(positionState: PositionState) {
			positionState.y -= position.DISTANCE;
		},
	},
	reset(positionState: PositionState) {
		positionState.x = 0;
		positionState.y = 0;
		G.activeRow = 1;
	},
};
