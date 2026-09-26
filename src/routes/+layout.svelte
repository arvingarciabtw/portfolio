<script lang="ts">
import "../global.css";
import faviconForLight from "$lib/assets/favicon-for-light.png";
import faviconForDark from "$lib/assets/favicon-for-dark.png";
import { onMount } from "svelte";
import { afterNavigate } from "$app/navigation";
import { goto } from "$app/navigation";
import { global as G } from "$lib/stores/global.svelte";
import Header from "$lib/components/header.svelte";
import Footer from "$lib/components/footer.svelte";

let { children } = $props();

// theme
let currentTheme = $state(
	typeof document !== "undefined"
		? document.documentElement.getAttribute("data-theme") || ""
		: "",
);

function setTheme(theme: string) {
	const one_year = 60 * 60 * 24 * 365;
	document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
	document.documentElement.setAttribute("data-theme", theme);
	currentTheme = theme;
}

function toggleTheme(): void {
	let theme = currentTheme;
	if (currentTheme == "dark-hard") {
		theme = "light-hard";
	} else if (currentTheme == "dark") {
		theme = "light";
	} else if (currentTheme == "light-hard") {
		theme = "dark-hard";
	} else if (currentTheme == "light") {
		theme = "dark";
	}
	setTheme(theme);
}

// settings
let x = $state(0);
let y = $state(0);
let fontSize = $state(14);
let fontWeight = $state(400);

function settingsListener(e: KeyboardEvent) {
	const DISTANCE = 50;
	switch (e.key) {
		case "w":
			y += DISTANCE;
			break;
		case "a":
			x += DISTANCE;
			break;
		case "s":
			y -= DISTANCE;
			break;
		case "d":
			x -= DISTANCE;
			break;
		case "r":
			reset();
			fontSize = 14;
			fontWeight = 400;
			document.documentElement.style.fontSize = `${fontSize}px`;
			document.documentElement.style.fontWeight = fontWeight.toString();
			break;
		case "p":
			reset();
			break;
		case "t":
			toggleTheme();
			break;
		case "c":
			toggleContrast();
			break;
		case "+":
			if (fontSize < 24) fontSize++;
			document.documentElement.style.fontSize = `${fontSize}px`;
			break;
		case "-":
			if (!e.ctrlKey && fontSize > 10) fontSize--;
			document.documentElement.style.fontSize = `${fontSize}px`;
			break;
		case "]":
			if (fontWeight < 700) fontWeight = fontWeight + 25;
			document.documentElement.style.fontWeight = fontWeight.toString();
			break;
		case "[":
			if (fontWeight > 200) fontWeight = fontWeight - 25;
			document.documentElement.style.fontWeight = fontWeight.toString();
			break;
	}
}

function reset() {
	x = 0;
	y = 0;
}

function toggleContrast(): void {
	let theme = currentTheme;
	if (currentTheme == "dark-hard") {
		theme = "dark";
	} else if (currentTheme == "dark") {
		theme = "dark-hard";
	} else if (currentTheme == "light-hard") {
		theme = "light";
	} else if (currentTheme == "light") {
		theme = "light-hard";
	}
	setTheme(theme);
}

// navigation
function navigationListener(e: KeyboardEvent) {
	switch (e.key) {
		case "1":
			go("/");
			break;
		case "2":
			go("/experience");
			break;
		case "3":
			go("/projects");
			break;
		case "4":
			go("/about");
			break;
		case "h":
		case "ArrowLeft":
			if (G.activeIndex > 0) {
				G.activeIndex--;
			}
			if (G.activeRow == 0) {
				render(e);
			}
			break;
		case "j":
		case "ArrowDown":
			if (G.activeRow < G.maxRow) {
				if (G.maxRowIndex > 0) {
					G.lastVisitedIndexByRow[G.activeRow] = G.activeIndex;
				}
				G.activeRow++;
				G.activeIndex = G.lastVisitedIndexByRow[G.activeRow] ?? 0;
			}
			break;
		case "k":
		case "ArrowUp":
			if (G.activeRow > 0) {
				if (G.maxRowIndex > 0) {
					G.lastVisitedIndexByRow[G.activeRow] = G.activeIndex;
				}
				G.activeRow--;
				G.activeIndex = G.lastVisitedIndexByRow[G.activeRow] ?? 0;
			}
			break;
		case "l":
		case "ArrowRight":
			if (G.activeIndex < G.maxRowIndex) {
				G.activeIndex++;
			}
			if (G.activeRow == 0) {
				render(e);
			}
			break;
		case " ":
		case "Enter":
			if (render(e)) {
				G.activeRow = 1;
				G.activeIndex = 0;
			}
			break;
	}
}

function go(path: string) {
	goto(path);
	G.activeRow = 1;
	G.activeIndex = 0;
}

function render(e: KeyboardEvent): boolean {
	e.preventDefault();

	const navigable = document.querySelector<HTMLAnchorElement>(
		`[data-navigable][data-row="${G.activeRow}"][data-idx="${G.activeIndex}"]`,
	);
	if (!navigable) return false;

	const target = new URL(navigable.href);
	const isCurrentRoute = target.origin === window.location.origin &&
		target.pathname === window.location.pathname;

	if (isCurrentRoute) return false;

	const isExternal = navigable.target === "_blank";

	navigable.click();

	return !isExternal;
}

afterNavigate(() => {
	reset();
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

<Header font={{ size: fontSize, weight: fontWeight }} />
<main style:transform="translate({x}px, {y}px)">
  {@render children()}
</main>
<Footer />

<style>
main {
	padding: 0 1rem;
	display: grid;
	place-items: center;
	gap: 4rem;
}
</style>
