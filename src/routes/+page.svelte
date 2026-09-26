<script lang="ts">
import { global as G } from "$lib/stores/global.svelte";
import { socials } from "$lib/data/data";
import Navigable from "$lib/components/navigable.svelte";

const rowMap: Record<number, number> = {
	0: 3, // header
	1: 1, // socials
	2: 0, // exp
	3: 0, // proj
	4: 0, // about
};

G.maxRow = Object.keys(rowMap).length - 1;
G.lastVisitedIndexByRow = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
};

$effect(() => {
	G.maxRowIndex = rowMap[G.activeRow] ?? 0;
});
</script>

<div class="home-wrapper">
	<section class="author">
		<h1>arvin garcia</h1>
		<p class="description">software dev based in the philippines.</p>
		<ul class="social-list">
      {#each socials as social, i (social)}
        <li class="social">  
          <Navigable 
            content={social.content}
            href={social.url}
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

	<section class="experience">
		<div>
			<Navigable
				content="see experience"
				href="/experience"
				external={false}
				row={2}
				idx={0}
			/>
		</div>
		<p class="description">fullstack dev intern. did volunteer work.</p>
	</section>

	<section class="projects">
		<div>
			<Navigable
				content="see projects"
				href="/projects"
				external={false}
				row={3}
				idx={0}
			/>
		</div>
		<p class="description">some of the stuff i've done.</p>
	</section>

	<section class="about">
		<div>
			<Navigable
				content="see about"
				href="/about"
				external={false}
				row={4}
				idx={0}
			/>
		</div>
		<p
			class="description">less about the work, more about me.</p>
	</section>
</div>

<style>
.home-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 90rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	--flicker-color: var(--home);
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
	gap: 0.5rem;
	color: var(--white);
}
.experience {
	width: max-content;
	cursor: pointer;
}
.experience > div,
.projects > div,
.about > div {
	margin-left: -0.25rem;
}

@media (max-width: 500px) {
	.home-wrapper {
		padding: 0 0.25rem;
	}
}
</style>
