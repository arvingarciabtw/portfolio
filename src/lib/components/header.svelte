<script lang="ts">
import { onMount } from "svelte";
import { sections } from "$lib/data/data";
import Navigable from "./navigable.svelte";
import { global as G } from "$lib/stores/global.svelte";

G.maxRowIndex = 3;

let { font } = $props();

onMount(() => {
	return () => {
	};
});
</script>

<header>
	<div class="wrapper">
		<ul class="section-list">
			{#each sections as section, i (section.name)}
				<li class={`section ${section.name}`}>
          <Navigable 
            content={`0${i + 1} ${section.name}`}
            href={section.url}
            external={false}
            row={0}
            idx={i}
            multi={true}
          />
				</li>
		  {/each}
		</ul>
		<div class="states">
			<!-- need to figure out how to show the theme INSTANTLY here... -->
			<p>{font.size}px</p>
			<p>{font.weight}</p>
		</div>
	</div>
</header>

<style>
header {
	padding: 1.5rem 1rem 0.25rem;
	display: grid;
	place-items: center;
	background: var(--black);
	z-index: 1; /* to stack above scrollable main el */
}
.wrapper {
	padding: 0 1rem;
	width: 100%;
	max-width: 90rem;
	display: grid;
	grid-template-columns: 1fr max-content;
	place-items: center;
	gap: 4rem;
}

.section-list {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem 2.5rem;
}
.section {
	color: var(--flicker-color);
}
.section.home {
	--flicker-color: var(--home);
}
.section.experience {
	--flicker-color: var(--experience);
}
.section.projects {
	--flicker-color: var(--project);
}
.section.about {
	--flicker-color: var(--about);
}
.states {
	display: flex;
	gap: 3rem;
	color: var(--white);
}

@media (max-width: 700px) {
	.states {
		display: none;
	}
}

@media (max-width: 500px) {
	header {
		padding: 1rem 0;
	}
	.section-list {
		flex-wrap: wrap;
		gap: 0.25rem 1rem;
	}
}
</style>
