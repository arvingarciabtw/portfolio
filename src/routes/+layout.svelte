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

	function reset() {
		x = 0;
		y = 0;
	}

	function handlerPositionReset(e: KeyboardEvent) {
		if (e.key == 'r') {
			reset();
		}
	}

	afterNavigate(() => {
		reset();
	});

	onMount(() => {
		window.addEventListener('keydown', handlerScrollKeyPress);
		window.addEventListener('keydown', handlerPositionReset);

		return () => {
			window.removeEventListener('keydown', handlerScrollKeyPress);
			window.removeEventListener('keydown', handlerPositionReset);
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

<Header />
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
