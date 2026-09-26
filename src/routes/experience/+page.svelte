<script lang="ts">
import { experiences } from "$lib/data/data";
import { global as G } from "$lib/stores/global.svelte";
import Navigable from "$lib/components/navigable.svelte";

const rowMap: Record<number, number> = {
	0: 3, // header
	// below should probably be dynamically generated, based on experiences.length
	1: 0, // exp 1
	2: 0, // exp 2
};

G.maxRow = Object.keys(rowMap).length - 1;
G.lastVisitedIndexByRow = {
	0: 1,
};

$effect(() => {
	G.maxRowIndex = rowMap[G.activeRow] ?? 0;
});
</script>

<div class="experiences-wrapper">
	{#each experiences as experience, i (experience.description)}
    <div class="experience">
      <div class="details">
        <div class="name">
          <Navigable 
            content={experience.position}
            href={experience.url}
            external={true}
            row={i + 1}
            idx={0}
          />
        </div>
        <div class="others">
          <ul>
            <li class="company">{experience.company}</li>
            <li class="separator">·</li>
            <li class="date">{experience.date}</li>
          </ul>
        </div>
      </div>
			<ul class="points">
				{#each experience.points as point (point)}
					<li class="point">
						<p class="symbol">*</p>
						{@html point}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style>
.experiences-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 90rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	--flicker-color: var(--experience);
}
.experience {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}
.details {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}
.name {
	margin-left: -0.25rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
}
.others {
	margin-top: 0.25rem;
	max-width: 45rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0 4rem;
}
ul {
	display: flex;
	flex-wrap: wrap;
	gap: 0.125rem 0.5rem;
}
.separator {
	color: var(--white);
}
.company {
	color: var(--bright-blue);
}
.date {
	color: var(--bright-magenta);
}
.points {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
.point {
	display: flex;
	gap: 0.5rem;
	color: var(--white);
	max-width: 44rem;
	line-height: 2;
}

@media (max-width: 500px) {
	.experiences-wrapper {
		padding: 0 0.25rem;
	}
}
</style>
