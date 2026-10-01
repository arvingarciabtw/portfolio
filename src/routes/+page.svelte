<script lang="ts">
import { global as G, pageMaps } from "$lib/stores/global.svelte";
import { socials } from "$lib/data/data";
import Navigable from "$lib/components/navigable.svelte";
import type { PageData } from "./$types";

let { data }: { data: PageData } = $props();

const rowMap: Record<number, number> = {
	0: 4,
	1: 1,
};

const LENGTH_2026 = data.groups[0].posts.length;
const LENGTH_2025 = data.groups[1].posts.length;

for (let i = 2; i <= LENGTH_2026 + 1; i++) {
	rowMap[i] = 0;
}

for (let i = 2 + LENGTH_2026 + 1; i <= LENGTH_2026 + LENGTH_2025 + 2; i++) {
	rowMap[i] = 0;
}

G.maxRow = Object.keys(rowMap).length - 1;
G.indexMap = pageMaps.home;

$effect(() => {
	G.maxRowIndex = rowMap[G.activeRow] ?? 0;
});
</script>

<div class="home-wrapper">
	<section class="author">
		<h1>arvin garcia</h1>
		<p class="description">a software dev based in the philippines.</p>
		<ul class="social-list">
      {#each socials as social, i (social)}
        <li class="social">  
          <Navigable 
            content={social.content}
            href={social.href}
            external={true}
            row={1}
            idx={i}
            underlined={true}
            multi={true}
          />
        </li>
        {#if i != socials.length - 1}
          <li class="separator">·</li>
        {/if}
      {/each}
    </ul>
	</section>

	<div class="blog">
		{#each data.groups as group, gIdx (group)}
			<div class="year">
				<h2>{group.year}</h2>
				<ul class="article-list">
					{#each group.posts as post, pIdx (post)}
						<li class="article">
              <span class="pointer">*</span>
              <span class="content">
              <Navigable 
                content={post.title}
                href={`/blog/${post.slug}`}
                external={false}
                row={gIdx == 0 ? 2 + pIdx : 2 + LENGTH_2025 + pIdx + 1}
                idx={0}
                underlined={false}
                multi={false}
              /> 
              <span class="line"></span>
              <span class="date">{post.pubDate.slice(0, 6)}</span>
              </span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style>
.home-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 78rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	--flicker-color: var(--home);
}
.author h1 {
	margin-bottom: 0.25rem;
}
section {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	.description {
		color: var(--white);
	}
}
.social-list {
	margin-left: -0.25rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--white);
}
.blog {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-transform: lowercase;
}
.article-list {
	margin-top: 2rem;
}
.article {
	margin-bottom: 0.75rem;
	display: grid;
	grid-template-columns: max-content 1fr;
	align-items: center;
	gap: 0.5rem;

	.content {
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		align-items: center;
		gap: 1.5rem;
		color: var(--white);
	}
}
.pointer {
	color: var(--white);
}
.line {
	margin-top: 0.625rem;
	border-bottom: 1px dotted var(--white);
}
.date {
	justify-self: end;
}

@media (max-width: 600px) {
	.article {
		margin-bottom: 0.5rem;
		align-items: start;
		gap: 0.375rem;

		.content {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			gap: 0.25rem 1rem;
		}
	}
	.pointer {
		padding-top: 0.125rem;
		min-height: 100%;
	}
	.line {
		display: none;
	}
	.date {
		padding: 0 0.125rem;
	}
}

@media (max-width: 500px) {
	.pointer {
		padding-top: 0.25rem;
	}
	.home-wrapper {
		padding: 0 0.25rem;
	}
}
</style>
