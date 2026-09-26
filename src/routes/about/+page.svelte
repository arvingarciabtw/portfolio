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
import { global as G } from "$lib/stores/global.svelte";
import Navigable from "$lib/components/navigable.svelte";

const rowMap: Record<number, number> = {
	0: 3, // header
	1: 1, // socials
	2: 0, // phil 1
	3: 0, // phil 2
	4: 0, // phil 3
	5: 5, // software
	6: 4, // games
	7: 4, // music
	8: 1, // conditions
};

G.maxRow = Object.keys(rowMap).length - 1;
G.lastVisitedIndexByRow = {
	0: 3,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
};

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
              href={social.url} 
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
              href={philosophy.url} 
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
              href={s.url} 
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
              href={game.url} 
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
              href={artist.url} 
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
              href={condition.url} 
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
	max-width: 90rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
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
