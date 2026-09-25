<script lang="ts">
import { onMount } from "svelte";
import { experiences, sections } from "$lib/data/data";
import { handlerSectionKeyPress } from "$lib/helpers/helpers";
import { getCommands } from "$lib/stores/commands.svelte";
import { getIsInHeader, navigation } from "$lib/stores/navigation.svelte";
import { shake } from "$lib/stores/shake.svelte";

function handlerNavigationKeyPress(e: KeyboardEvent) {
	const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

	const atStart = navigation.activeIndex == sections.length;
	const atEnd =
		navigation.activeIndex == sections.length + experiences.length - 1;

	if (goUp) {
		if (getIsInHeader()) {
			return;
		}
		if (atStart) {
			navigation.activeIndex = 1;
			return;
		}
		navigation.activeIndex -= 1;
	}
	if (goDown) {
		if (atEnd) {
			shake.down = true;
			return;
		}
		if (getIsInHeader()) {
			navigation.activeIndex = sections.length;
			return;
		}
		navigation.activeIndex += 1;
	}
	if (goLeft && !getIsInHeader()) {
		shake.left = true;
	}
	if (goRight && !getIsInHeader()) {
		shake.right = true;
	}
	if (goExecute) {
		if (!getIsInHeader()) {
			window.open(
				experiences[navigation.activeIndex - sections.length].url,
			);
		}
	}
}

onMount(() => {
	window.addEventListener("keypress", handlerSectionKeyPress);
	window.addEventListener("keydown", handlerNavigationKeyPress);

	return () => {
		window.addEventListener("keypress", handlerSectionKeyPress);
		window.removeEventListener("keydown", handlerNavigationKeyPress);
	};
});
onMount(() => {
	window.addEventListener("keypress", handlerSectionKeyPress);

	return () => {
		window.removeEventListener("keypress", handlerSectionKeyPress);
	};
});
</script>

<div class="experiences-wrapper">
	{#each experiences as experience, i (experience.description)}
    <div class="experience">
      <div class="details">
        <div class="name">
          <a
            href={experience.url}
            target="_blank"
            rel="external noopener noreferrer"
            class={[
              `position ${navigation.activeIndex == i + sections.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == i + sections.length && shake.right ? 'shake-right' : ''} ${navigation.activeIndex == i + sections.length && shake.down ? 'shake-down' : ''}`,
              (() => (i + sections.length == navigation.activeIndex ? 'active' : ''))()
            ]}
            onanimationend={() => {
              shake.left = false;
              shake.right = false;
              shake.down = false;
            }}
          >
            {experience.position}
          </a>
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
.position {
	padding: 1px 0.25rem;
	width: max-content;
	color: var(--bright-white);
	text-decoration: none;

	&:hover,
	&.active {
		--flicker-color: var(--experience);
		background: var(--flicker-color);
		color: var(--black);
		animation: flicker 0.4s steps(1, end) 1;
	}
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
	*.active {
		--flicker-color: var(--black) !important;
		color: var(--bright-white) !important;
	}
	.experiences-wrapper {
		padding: 0 0.25rem;
	}
}
</style>
