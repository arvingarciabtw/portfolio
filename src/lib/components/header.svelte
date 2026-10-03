<script lang="ts">
import { onMount } from "svelte";
import { sections } from "$lib/data/data";
import Navigable from "./navigable.svelte";
import { global as G } from "$lib/stores/global.svelte";

G.maxRowIndex = 4;

let { font } = $props();

onMount(() => {
	return () => {
	};
});
</script>

<header>
	<div class="wrapper">
		<ul class="section-list">
			{#each sections as section, i (section)}
				<li class={`section ${section.content}`}>
          <Navigable 
            content={`0${i + 1} ${section.content}`}
            href={section.href}
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
	padding: 1.5rem 1rem;
	width: 100dvw;
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	background: var(--black);
	overflow-x: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	z-index: 1; /* to stack above scrollable main el */
}
.wrapper {
	padding: 0 1.25rem 0 1rem;
	width: 100%;
	max-width: 78rem;
	display: grid;
	grid-template-columns: 1fr max-content;
	place-items: center;
	gap: 4rem;
}

.section-list {
	width: 100%;
	display: flex;
	gap: 0.5rem 2.5rem;
}
.section {
	color: var(--flicker-color);
	display: grid;
	grid-template-columns: repeat(2, max-content);
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
.section.oss {
	--flicker-color: var(--oss);
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
		width: 100%;
		padding: 1rem 0;
	}
	.section-list {
		gap: 0.25rem 1rem;
	}
}
</style>
