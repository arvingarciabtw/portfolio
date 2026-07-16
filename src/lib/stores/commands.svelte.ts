export function getCommands(e: KeyboardEvent) {
	const goUp = e.key == 'k' || e.key == 'ArrowUp';
	const goDown = e.key == 'j' || e.key == 'ArrowDown';
	const goLeft = e.key == 'h' || e.key == 'ArrowLeft';
	const goRight = e.key == 'l' || e.key == 'ArrowRight';
	const goExecute = e.key == 'Enter' || e.key == ' ';

	return {
		goUp,
		goDown,
		goLeft,
		goRight,
		goExecute
	};
}
