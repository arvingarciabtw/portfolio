<script lang="ts">
import { onMount } from "svelte";
import {
	conditions,
	games,
	music,
	philosophies,
	socials,
	software,
} from "$lib/data/data";
import { global as G, pageMaps } from "$lib/stores/global.svelte";
import Navigable from "$lib/components/navigable.svelte";

const rowMap: Record<number, number> = {
	0: 4,
	1: 1,
	2: 0,
	3: 0,
	4: 0,
	5: 5,
	6: 4,
	7: 4,
	8: 1,
};

G.maxRow = Object.keys(rowMap).length - 1;
G.indexMap = pageMaps.about;

$effect(() => {
	G.maxRowIndex = rowMap[G.activeRow] ?? 0;
});

onMount(() => {
	return () => {
	};
});
</script>

<div class="about-wrapper">
	<section class="general">
		<h1>socials</h1>
		<div class="description">
			<ul class="row">
				{#each socials as social, i (social)}
					<li class="social">
            <Navigable 
              content={social.content} 
              href={social.href} 
              external={true}
              row=1
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
		</div>
	</section>

	<section class="philosophy">
		<h1>philosophy</h1>
		<div class="description">
			<ul class="philosophy-list">
				{#each philosophies as philosophy, i (philosophy)}
					<li class="philosophy">
            <Navigable 
              content={philosophy.content} 
              href={philosophy.href} 
              external={true}
              row={i + 2}
              idx={0}
              underlined={true}
            />
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="software">
		<h1>software</h1>
		<div class="description">
			<ul class="row">
				{#each software as s, i (s)}
					<li class="tool">
            <Navigable 
              content={s.content} 
              href={s.href} 
              external={true}
              row={5}
              idx={i}
              underlined={true}
              multi={true}
            />
					</li>
					{#if i != software.length - 1}
						<li class="separator">·</li>
					{/if}
				{/each}
			</ul>
		</div>
	</section>

	<section class="games">
		<h1>games</h1>
		<div class="description">
			<ul class="row">
				{#each games as game, i (game)}
					<li class="tool">
            <Navigable 
              content={game.content} 
              href={game.href} 
              external={true}
              row={6}
              idx={i}
              underlined={true}
              multi={true}
            />
					</li>
					{#if i != games.length - 1}
						<li class="separator">·</li>
					{/if}
				{/each}
			</ul>
		</div>
	</section>

	<section class="music">
		<h1>music</h1>
		<div class="description">
			<ul class="row">
				{#each music as artist, i (artist)}
					<li class="tool">
            <Navigable 
              content={artist.content} 
              href={artist.href} 
              external={true}
              row={7}
              idx={i}
              underlined={true}
              multi={true}
            />
					</li>
					{#if i != music.length - 1}
						<li class="separator">·</li>
					{/if}
				{/each}
			</ul>
		</div>
	</section>

	<section class="conditions">
		<h1>conditions</h1>
		<div class="description">
			<ul class="row">
				{#each conditions as condition, i (condition)}
					<li class="tool">
            <Navigable 
              content={condition.content} 
              href={condition.href} 
              external={true}
              row={8}
              idx={i}
              underlined={true}
              multi={true}
            />
					</li>
					{#if i != conditions.length - 1}
						<li class="separator">·</li>
					{/if}
				{/each}
			</ul>
		</div>
	</section>

	<section class="animals">
		<h1>animals</h1>
		<div class="description">
			<p>cats &gt;= dogs</p>
		</div>
	</section>
</div>

<style>
.about-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 78rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	--flicker-color: var(--about);
}
section {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
.description {
	max-width: 50rem;
	gap: 0.5rem;
	color: var(--white);
}
p {
	text-wrap: balance;
	line-height: 1.75;
}
ul {
	margin-left: -0.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.375rem 0.5rem;
	}
}

@media (max-width: 500px) {
	.about-wrapper {
		padding: 0;
		padding-left: 0.25rem;
		margin-left: 0;
	}
}
</style>
