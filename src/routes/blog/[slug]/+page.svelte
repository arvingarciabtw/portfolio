<script module lang="ts">
import type { Component } from "svelte";

type PostModule = {
	default: Component;
	metadata: {
		title: string;
		description: string;
		pubDate: string;
	};
};

const posts = import.meta.glob<PostModule>("/src/content/blog/*.svx", {
	eager: true,
});
</script>

<script lang="ts">
import { page } from "$app/state";

const post = $derived(posts[`/src/content/blog/${page.params.slug}.svx`]);
</script>

<svelte:head>
	<title>arvin</title>
	<meta name="description" content={post.metadata.description} />
</svelte:head>

{#if post}
    {@const Content = post.default}

    <div class="article-wrapper">
	<Content />
</div>
{/if}

<style>
.article-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 78rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

@media (max-width: 500px) {
	.article-wrapper {
		padding: 0 0.25rem;
	}
}
</style>
