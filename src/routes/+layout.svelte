<script lang="ts">
	import '../global.css';
	import faviconForLight from '$lib/assets/favicon-for-light.png';
	import faviconForDark from '$lib/assets/favicon-for-dark.png';
	import Header from '$lib/components/macro/header.svelte';
	import Footer from '$lib/components/macro/footer.svelte';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let x = $state(0);
	let y = $state(0);

	function handlerScrollKeyPress(e: KeyboardEvent) {
		const DISTANCE = 50;
		switch (e.key) {
			case 'w':
				y += DISTANCE;
				break;
			case 'a':
				x += DISTANCE;
				break;
			case 's':
				y -= DISTANCE;
				break;
			case 'd':
				x -= DISTANCE;
				break;
		}
	}

	function handlerPositionReset(e: KeyboardEvent) {
		if (e.key == 'r') {
			reset();
			fontSize = 14;

			document.documentElement.style.fontSize = `${fontSize}px`;
		}
	}

	let currentTheme = $state(
		typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') || '' : ''
	);

	function setTheme(theme: string) {
		const one_year = 60 * 60 * 24 * 365;
		document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
		document.documentElement.setAttribute('data-theme', theme);
		currentTheme = theme;
	}

	function toggleTheme(): void {
		let theme = currentTheme;
		if (currentTheme == 'dark-hard') {
			theme = 'light-hard';
		} else if (currentTheme == 'dark') {
			theme = 'light';
		} else if (currentTheme == 'light-hard') {
			theme = 'dark-hard';
		} else if (currentTheme == 'light') {
			theme = 'dark';
		}
		setTheme(theme);
	}

	function toggleContrast(): void {
		let theme = currentTheme;
		if (currentTheme == 'dark-hard') {
			theme = 'dark';
		} else if (currentTheme == 'dark') {
			theme = 'dark-hard';
		} else if (currentTheme == 'light-hard') {
			theme = 'light';
		} else if (currentTheme == 'light') {
			theme = 'light-hard';
		}
		setTheme(theme);
	}

	function handlerTheme(e: KeyboardEvent) {
		if (e.key == 't') {
			toggleTheme();
		}
	}

	function handlerContrast(e: KeyboardEvent) {
		if (e.key == 'c') {
			toggleContrast();
		}
	}

	let fontSize = $state(14);

	function handlerFontSize(e: KeyboardEvent) {
		if (e.key == '+' && fontSize < 24) {
			fontSize++;
		}
		if (e.key == '-' && fontSize > 8) {
			fontSize--;
		}

		document.documentElement.style.fontSize = `${fontSize}px`;
	}

	function reset() {
		x = 0;
		y = 0;
	}

	afterNavigate(() => {
		reset();
	});

	onMount(() => {
		window.addEventListener('keydown', handlerScrollKeyPress);
		window.addEventListener('keydown', handlerPositionReset);
		window.addEventListener('keydown', handlerTheme);
		window.addEventListener('keydown', handlerContrast);
		window.addEventListener('keydown', handlerFontSize);

		return () => {
			window.removeEventListener('keydown', handlerScrollKeyPress);
			window.removeEventListener('keydown', handlerPositionReset);
			window.removeEventListener('keydown', handlerTheme);
			window.removeEventListener('keydown', handlerContrast);
			window.removeEventListener('keydown', handlerFontSize);
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
	<link
		rel="preload"
		href="/fonts/commit-mono-regular-subset.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<title>arvin</title>
</svelte:head>

<Header theme={currentTheme} {fontSize} />
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
