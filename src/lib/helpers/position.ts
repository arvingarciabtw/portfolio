import type { PositionState } from "./helpers.d.ts";

export const position = {
	DISTANCE: 50,
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
	},
};
