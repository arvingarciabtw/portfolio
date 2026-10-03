<script lang="ts">
import { global as G } from "$lib/stores/global.svelte";
import Navigable from "$lib/components/navigable.svelte";

let { title, description, pubDate, children } = $props();

G.indexMap = {
	0: 0,
};
</script>

<svelte:head>
	<meta name="description" content={description} />
</svelte:head>

<div class="post-wrapper">
	<article class="post">
    <div class="title">
        <Navigable
            content={title}
            href={"#"}
            external={false}
            row={1}
            idx={0}
            underlined={false}
            multi={false}
        />
    </div>
    <time>{pubDate}</time>
    {@render children()}
	</article>
</div>

<style>
.post-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 78rem;
}
.post {
	display: grid;
	text-transform: lowercase;
	--flicker-color: var(--blog);
	--active-color: var(--flicker-color);

	.title {
		margin-left: -0.25rem;
	}
	time {
		display: block;
		margin: 0.75rem 0 3rem;
	}

	:global(p) {
		margin-bottom: 2rem;
		line-height: 2;
		color: var(--white);
	}
	:global(h2) {
		margin-bottom: 0.75rem;

		&::before {
			content: "## ";
		}
	}
	:global(a) {
		color: var(--flicker-color);
	}
	:global(ul) {
		margin: 1rem 0 3rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		color: var(--white);

		:global(li) {
			&::before {
				content: "- ";
			}
		}
	}
	:global(h2 + ul) {
		color: var(--flicker-color);
	}
	:global(ol) {
		margin-bottom: 3rem;
		padding-left: 1.875rem;
		list-style-type: decimal;
		color: var(--white);
	}
	:global(pre) {
		margin-bottom: 3rem;
		padding: 1.5rem;
		background: var(--black-alt);
		overflow-x: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	:global(pre),
	:global(code) {
		text-transform: none;
	}
	:global(code) {
		padding: 0.25rem 0.5rem;
		background: var(--black-alt);
		border: 1px dashed var(--black-alt-2);
		color: var(--bright-white);
	}
	:global(pre code) {
		padding: 0;
		background: transparent;
		border: none;
	}
	:global(blockquote) {
		margin-bottom: 3rem;
		padding-left: 1.5rem;
		border-left: 4px solid var(--bright-yellow);
	}
	:global(blockquote > p) {
		margin-bottom: 0;
		color: var(--bright-yellow);
	}
}

@media (max-width: 500px) {
	.post {
		:global(ul) {
			gap: 0rem;
		}
		:global(blockquote) {
			padding-left: 1rem;
		}
	}
}
</style>
