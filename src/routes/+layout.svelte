<script lang="ts">
	import '../global.css';
	import faviconForLight from '$lib/assets/favicon-for-light.png';
	import faviconForDark from '$lib/assets/favicon-for-dark.png';
	import Header from '$lib/components/macro/header.svelte';
	import Footer from '$lib/components/macro/footer.svelte';

	let { children } = $props();
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
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		display: grid;
		align-content: center;
		gap: 4rem;
	}
</style>
