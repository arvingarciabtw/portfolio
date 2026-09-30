<script lang="ts">
let { title, pubDate, children } = $props();
</script>

<article class="post">
	<h1>{title}</h1>
	<time>{pubDate}</time>
	{@render children()}
</article>

<style>
.post {
	display: grid;
	text-transform: lowercase;
	--flicker-color: var(--blog);
	--active-color: var(--flicker-color);

	h1 {
		color: var(--flicker-color);
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
		text-decoration: underline dotted;
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
