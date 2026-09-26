<script lang="ts">
import { onMount } from "svelte";
let { content, href, external, row, idx, underlined = false, multi = false } =
	$props();
import { global as G } from "$lib/stores/global.svelte";

const isActive = $derived(
	row == G.activeRow && idx == G.activeIndex,
);
const isLastVisited = $derived(
	G.lastVisitedIndexByRow[row] === idx &&
		row != G.activeRow,
);

let shake = $state({
	left: false,
	down: false,
	up: false,
	right: false,
});

function navigationListener(e: KeyboardEvent) {
	const rowMatches = row == G.activeRow;
	const idxMatches = idx == G.activeIndex;
	const inFirstRow = G.activeRow == 0;
	const inLastRow = G.activeRow == G.maxRow;
	const inFirstIdx = idx == 0;
	const inLastIdx = idx == G.maxRowIndex;

	switch (e.key) {
		case "h":
		case "ArrowLeft":
			if (inFirstIdx && rowMatches && idxMatches) shake.left = true;
			break;
		case "j":
		case "ArrowDown":
			if (rowMatches && idxMatches && inLastRow) shake.down = true;
			break;
		case "k":
		case "ArrowUp":
			if (rowMatches && idxMatches && inFirstRow) shake.up = true;
			break;
		case "l":
		case "ArrowRight":
			if (inLastIdx && rowMatches && idxMatches) shake.right = true;
			break;
	}
}

onMount(() => {
	window.addEventListener("keydown", navigationListener);

	return () => {
		window.removeEventListener("keydown", navigationListener);
	};
});
</script>

<a
	class={`navigable 
    ${(isLastVisited && multi) && "last-visited"} 
    ${isActive && "active"} 
    ${underlined && "underlined"} 
    ${shake.left && "shake-left"} 
    ${shake.down && "shake-down"} 
    ${shake.up && "shake-up"}
    ${shake.right && "shake-right"}`
  }
	onanimationend={() => {
    shake.left = false
    shake.down = false
    shake.up = false
    shake.right = false
  }}
	href={href}
	target={external ? "_blank" : undefined}
	rel={external ? "noopener noreferrer" : undefined}
	data-navigable
	data-row={row}
	data-idx={idx}
	onmousedown={() => {
    G.activeRow = 1
    G.activeIndex = 0
  }}
>
  {content}
</a>

<style>
a.navigable {
	padding: 1px 0.25rem;
	width: max-content;
	display: inline-block;
	color: inherit;
	line-height: 1.5;

	&.underlined {
		text-decoration: underline dotted;
	}

	&:hover,
	&.last-visited,
	&.active {
		&.underlined {
			text-decoration: none;
		}
	}

	&:hover {
		background: var(--flicker-color);
		color: var(--black);
		animation: flicker 0.4s steps(1, end) 1;
	}

	&.last-visited {
		background-color: var(--black);
		color: var(--bright-white);
		opacity: 0.5;
		background-size: 4px 4px;
		background-image: repeating-linear-gradient(45deg, var(--bright-black)
			0, var(--bright-black)
			1px, var(--black), var(--black) 50%);
	}

	&.active {
		background: var(--flicker-color);
		color: var(--black);
		animation: flicker 0.4s steps(1, end) 1;
	}

	&.shake-up,
	&.shake-down,
	&.shake-left,
	&.shake-right {
		padding: 1px 0.25rem;
		display: inline-block;
	}
	&.shake-up {
		animation: shake-up 0.1s;
	}
	&.shake-down {
		animation: shake-down 0.1s;
	}
	&.shake-left {
		animation: shake-left 0.1s;
	}
	&.shake-right {
		animation: shake-right 0.1s;
	}
}

@media (max-width: 500px) {
	a.navigable {
		padding: 0.25rem;

		&:hover,
		&.last-visited,
		&.active {
			&.underlined {
				text-decoration: underline dotted;
			}
		}

		&.last-visited,
		&.active {
			opacity: 1;
			background: transparent;
			--flicker-color: var(--black);
			color: inherit;
		}
	}
}
</style>
