<script lang="ts">
	import { onMount } from 'svelte';
	import { sections, experiences } from '$lib/data/data';
	import { handlerSectionKeyPress } from '$lib/helpers/helpers';
	import { getCommands } from '$lib/stores/commands.svelte';
	import { navigation, getIsInHeader } from '$lib/stores/navigation.svelte';
	import { shake } from '$lib/stores/shake.svelte';

	function handlerNavigationKeyPress(e: KeyboardEvent) {
		const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

		const atStart = navigation.activeIndex == sections.length;
		const atEnd = navigation.activeIndex == sections.length + experiences.length - 1;

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
				window.open(experiences[navigation.activeIndex - sections.length].url);
			}
		}
	}

	onMount(() => {
		window.addEventListener('keypress', handlerSectionKeyPress);
		window.addEventListener('keydown', handlerNavigationKeyPress);

		return () => {
			window.addEventListener('keypress', handlerSectionKeyPress);
			window.removeEventListener('keydown', handlerNavigationKeyPress);
		};
	});
	onMount(() => {
		window.addEventListener('keypress', handlerSectionKeyPress);

		return () => {
			window.removeEventListener('keypress', handlerSectionKeyPress);
		};
	});
</script>

<div class="experiences-wrapper">
	{#each experiences as experience, i (experience.description)}
		<div class="experience">
			<div class="selection">
				<p class="pointer">{navigation.activeIndex == i + sections.length ? '>' : ''}</p>
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
			<ul class="position-details">
				<li class="company">{experience.company}</li>
				<li class="separator">·</li>
				<li class="date">{experience.date}</li>
				<li class="separator">·</li>
				{#each experience.technologies as technology, i (technology)}
					<li class="technology">{technology}</li>
					{#if i != experience.technologies.length - 1}
						<li class="separator">·</li>
					{/if}
				{/each}
			</ul>
			<ul class="points">
				{#each experience.points as point (point)}
					<li class="point">
						<p class="symbol">*</p>
						<p class="description">{point}</p>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style>
	.experiences-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		/* TODO: remove this once points are rewritten */
		.note {
			margin-left: 1.25rem;
			color: var(--white);
		}

		.experience {
			.selection {
				display: grid;
				grid-template-columns: 1px 1fr;
				gap: 1rem;

				.pointer {
					color: var(--experience);
				}
				.position {
					padding: 0 0.25rem;
					width: max-content;
					color: var(--bright-white);
					text-decoration: none;
				}

				.position:hover,
				.position.active {
					--flicker-color: var(--experience);
					background: var(--flicker-color);
					color: var(--black);
					animation: flicker 0.4s steps(1, end) 1;
				}

				.position.shake-left,
				.position.shake-right,
				.position.shake-down {
					padding: 0 0.25rem;
					display: inline-block;
				}
				.position.shake-left {
					animation: shake-left 0.1s;
				}
				.position.shake-right {
					animation: shake-right 0.1s;
				}
				.position.shake-down {
					animation: shake-down 0.1s;
				}
			}

			.position-details,
			.points {
				margin-left: 1.25rem;
				padding: 0;
				list-style-type: none;
			}

			.position-details {
				margin-top: 0.25rem;
				display: flex;
				flex-wrap: wrap;
				gap: 0.125rem 0.5rem;

				.separator {
					color: var(--white);
				}
				.company {
					color: var(--bright-blue);
				}
				.date {
					color: var(--bright-magenta);
				}
				.technology {
					color: var(--bright-cyan);
				}
			}

			.points {
				margin: 1rem 0 0 1.25rem;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				.point {
					display: flex;
					gap: 0.5rem;
					color: var(--white);
					max-width: 44rem;
					line-height: 1.75;
				}
			}
		}
	}

	@media (max-width: 500px) {
		.pointer {
			display: none;
		}
		.experiences-wrapper {
			.note,
			.experience {
				margin-left: 0.25rem;
			}
			.experience {
				.selection {
					margin: 0;
					gap: 0;

					.position {
						padding: 0;
					}
					.position.active {
						--flicker-color: var(--black);
						background: var(--flicker-color);
						color: var(--bright-white);
						animation: flicker 0.4s steps(1, end) 1;
					}
				}
				.position-details,
				.points {
					margin-left: 0;
				}
			}
		}
	}
</style>
