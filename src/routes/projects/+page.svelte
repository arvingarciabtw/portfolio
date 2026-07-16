<script lang="ts">
	import { onMount } from 'svelte';
	import { sections, projects } from '$lib/data/data';
	import { handlerSectionKeyPress } from '$lib/helpers/helpers';
	import { getCommands } from '$lib/stores/commands.svelte';
	import { navigation, getIsInHeader } from '$lib/stores/navigation.svelte';
	import { shake } from '$lib/stores/shake.svelte';
	import Download from '$lib/icons/download.svelte';
	import Fork from '$lib/icons/fork.svelte';
	import Star from '$lib/icons/star.svelte';

	function handlerNavigationKeyPress(e: KeyboardEvent) {
		const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

		const atStart = navigation.activeIndex == sections.length;
		const atEnd = navigation.activeIndex == sections.length + projects.length - 1;

		if (goUp) {
			if (getIsInHeader()) {
				return;
			}
			if (atStart) {
				navigation.activeIndex = 2;
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
				window.open(projects[navigation.activeIndex - sections.length].url);
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
</script>

<div class="projects-wrapper">
	{#each projects as project, i (project.name)}
		<a class="project" href={project.url} target="_blank" rel="external noopener noreferrer">
			<div class="details">
				<div class="selection">
					<p class="pointer">{navigation.activeIndex == i + sections.length ? '>' : ''}</p>
					<p
						class={[
							`name ${navigation.activeIndex == i + sections.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == i + sections.length && shake.right ? 'shake-right' : ''} ${navigation.activeIndex == i + sections.length && shake.down ? 'shake-down' : ''}`,
							(() => (i + sections.length == navigation.activeIndex ? 'active' : ''))()
						]}
						onanimationend={() => {
							shake.left = false;
							shake.right = false;
							shake.down = false;
						}}
					>
						{project.name}
					</p>
				</div>
				<div class="metrics">
					{#if project.metrics.stars != 0 && project.metrics.stars != null}
						<div class="metric stars">
							<Star />
							<p>
								{project.metrics.stars}{project.metrics.stars > 10 ? '+' : ''}
							</p>
						</div>
					{/if}
					{#if project.metrics.forks != 0 && project.metrics.forks != null}
						<div class="metric forks">
							<Fork />
							<p>
								{project.metrics.forks}{project.metrics.forks > 10 ? '+' : ''}
							</p>
						</div>
					{/if}
					{#if project.metrics.downloads != 0 && project.metrics.downloads != null}
						<div class="metric downloads">
							<Download />
							<p>
								{project.metrics.downloads}{project.metrics.downloads > 10 ? '+' : ''}
							</p>
						</div>
					{/if}
				</div>
			</div>
			<ul class="technology-list">
				{#each project.technologies as technology, i (technology)}
					<li class="technology">
						<p>{technology}</p>
						{#if i != project.technologies.length - 1}
							<p class="separator">·</p>
						{/if}
					</li>
				{/each}
			</ul>
			<p class="description">{project.description}</p>
		</a>
	{/each}
</div>

<style>
	.projects-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		.project {
			max-width: 24rem;
			text-decoration: none;

			.details {
				display: grid;
				grid-template-columns: max-content 1fr;

				.selection {
					display: grid;
					grid-template-columns: 12px 1fr;
					gap: 0.25rem;

					.pointer {
						color: var(--project);
					}
					.name {
						padding: 0 0.25rem;
						width: max-content;
						color: var(--bright-white);
					}
				}

				.metrics {
					justify-content: end;
					display: flex;
					gap: 1.25rem;

					.metric {
						display: flex;
						align-items: center;
						gap: 0.5rem;
					}
					.stars {
						color: var(--bright-yellow);
					}
					.forks {
						color: var(--bright-green);
					}
					.downloads {
						color: var(--bright-blue);
					}
				}
			}
			.technology-list {
				margin: 0.25rem 0 0 1.25rem;
				padding: 0;
				display: flex;
				gap: 0.5rem;
				list-style-type: none;

				.technology {
					display: flex;
					gap: 0.5rem;
					color: var(--bright-cyan);

					.separator {
						color: var(--white);
					}
				}
			}
			.description {
				margin: 0.25rem 0 0 1.25rem;
				color: var(--white);
				text-wrap: stable;
			}
		}
		.project:hover .details .name,
		.project .details .name.active {
			--flicker-color: var(--project);
			background: var(--flicker-color);
			color: var(--black);
			animation: flicker 0.4s steps(1, end) 1;
		}

		.project .details .name.name.shake-down,
		.project .details .name.name.shake-left,
		.project .details .name.name.shake-right {
			padding: 0 0.25rem;
			display: inline-block;
		}
		.project .details .name.shake-down {
			animation: shake-down 0.1s;
		}
		.project .details .name.shake-left {
			animation: shake-left 0.1s;
		}
		.project .details .name.shake-right {
			animation: shake-right 0.1s;
		}
	}

	@media (max-width: 500px) {
		.pointer {
			display: none;
		}

		.projects-wrapper {
			.project {
				.description {
					margin-left: 0.25rem;
				}
				.technology-list {
					margin: 0.25rem 0 0 0.25rem;
				}
			}

			.project .details .name.active {
				--flicker-color: var(--black);
				background: var(--flicker-color);
				color: var(--bright-white);
				animation: none;
			}
		}
	}
</style>
