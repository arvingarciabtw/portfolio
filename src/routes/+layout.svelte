<script lang="ts">
import { onMount } from "svelte";
import { afterNavigate } from "$app/navigation";
import "../global.css";
import faviconForLight from "$lib/assets/favicon-for-light.png";
import faviconForDark from "$lib/assets/favicon-for-dark.png";
import { font } from "$lib/helpers/fonts";
import { execute, move, navigate } from "$lib/helpers/navigation";
import { position } from "$lib/helpers/position";
import { settings } from "$lib/helpers/settings";
import { theme } from "$lib/helpers/theme";
import Header from "$lib/components/header.svelte";
import Footer from "$lib/components/footer.svelte";

let { children } = $props();

let currentTheme = $state({
	val: typeof document !== "undefined"
		? document.documentElement.getAttribute("data-theme") || ""
		: "",
});
let positionState = $state({
	x: 0,
	y: 0,
});
let fontState = $state({
	size: 14,
	weight: 400,
});

function settingsListener(e: KeyboardEvent) {
	switch (e.key) {
		case "w":
			position.y.increase(positionState);
			break;
		case "a":
			position.x.increase(positionState);
			break;
		case "s":
			position.y.decrease(positionState);
			break;
		case "d":
			position.x.decrease(positionState);
			break;
		case "r":
			settings.reset(positionState, fontState);
			break;
		case "p":
			position.reset(positionState);
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
			move.down();
			break;
		case "k":
		case "ArrowUp":
			move.up();
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

afterNavigate(() => {
	position.reset(positionState);
});

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
<main style:transform="translate({positionState.x}px, {positionState.y}px)">
  {@render children()}
</main>
<Footer />

<style>
main {
	padding: 0 1rem 7rem;
	display: grid;
	place-items: center;
	gap: 4rem;
	transition: transform 0.3s ease;
}
</style>
