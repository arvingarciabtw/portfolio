<script lang="ts">
import { onMount } from "svelte";
import "../global.css";
import faviconForLight from "#lib/assets/favicon-for-light.png";
import faviconForDark from "#lib/assets/favicon-for-dark.png";
import { font } from "#lib/helpers/fonts.js";
import {
	execute,
	move,
	navigate,
	resetColumnMemory,
} from "#lib/helpers/navigation.js";
import { scroll } from "#lib/helpers/scroll.js";
import { settings } from "#lib/helpers/settings.js";
import { theme } from "#lib/helpers/theme.js";
import { global as G } from "#lib/stores/global.svelte.js";
import Header from "#lib/components/header.svelte";
import Footer from "#lib/components/footer.svelte";

let { children } = $props();

let currentTheme = $state({
	val: typeof document !== "undefined"
		? document.documentElement.getAttribute("data-theme") || ""
		: "",
});
let fontState = $state({
	size: 14,
	weight: 400,
});

function settingsListener(e: KeyboardEvent) {
	switch (e.key) {
		case "w":
			scroll.up();
			break;
		case "a":
			scroll.left();
			break;
		case "s":
			scroll.down();
			break;
		case "d":
			scroll.right();
			break;
		case "r":
			settings.reset(fontState);
			scroll.reset();
			G.activeRow = 1;
			G.activeIndex = 0;
			resetColumnMemory();
			break;
		case "p":
			scroll.reset();
			G.activeRow = 1;
			G.activeIndex = 0;
			resetColumnMemory();
			break;
		case "t":
			theme.mode(currentTheme);
			break;
		case "c":
			theme.contrast(currentTheme);
			break;
		case "+":
			font.size.increase(fontState);
			break;
		case "-":
			font.size.decrease(e, fontState);
			break;
		case "]":
			font.weight.increase(fontState);
			break;
		case "[":
			font.weight.decrease(fontState);
			break;
	}
}

function navigationListener(e: KeyboardEvent) {
	switch (e.key) {
		case "1":
			navigate("/");
			break;
		case "2":
			navigate("/experience");
			break;
		case "3":
			navigate("/projects");
			break;
		case "4":
			navigate("/oss");
			break;
		case "5":
			navigate("/about");
			break;
		case "h":
		case "ArrowLeft":
			move.left(e);
			break;
		case "j":
		case "ArrowDown":
			move.down(e);
			break;
		case "k":
		case "ArrowUp":
			move.up(e);
			break;
		case "l":
		case "ArrowRight":
			move.right(e);
			break;
		case " ":
		case "Enter":
			execute(e);
			break;
	}
}

onMount(() => {
	window.addEventListener("keydown", settingsListener);
	window.addEventListener("keydown", navigationListener);

	return () => {
		window.removeEventListener("keydown", settingsListener);
		window.removeEventListener("keydown", navigationListener);
	};
});
</script>

<svelte:head>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href={faviconForLight}
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href={faviconForDark}
		media="(prefers-color-scheme: dark)"
	/>
	<title>arvin</title>
</svelte:head>

<Header font={{ size: fontState.size, weight: fontState.weight }} />
<main>
  {@render children()}
</main>
<Footer />

<style>
main {
	padding: 6rem 1rem 7rem;
	display: grid;
	justify-items: center;
	gap: 4rem;
}

@media (max-width: 500px) {
	main {
		padding: 5rem 1rem 2rem;
	}
}
</style>
