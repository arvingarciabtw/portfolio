<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getCommands } from '$lib/stores/commands.svelte';
	import { navigation, getIsInHeader } from '$lib/stores/navigation.svelte';
	import { shake } from '$lib/stores/shake.svelte';
	import { sections, experiences, projects, socials } from '$lib/data/data';
	import { handlerSectionKeyPress } from '$lib/helpers/helpers';

	function handlerNavigationKeyPress(e: KeyboardEvent) {
		const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

		const atStartOfSocials = navigation.activeIndex == sections.length;
		const atStartOfExperiences = navigation.activeIndex == sections.length + socials.length;
		const atEndOfProjects =
			navigation.activeIndex ==
			sections.length + socials.length + experiences.length + projects.length - 1;
		const atEndOfSocials = navigation.activeIndex == sections.length + socials.length - 1;

		const inSocials =
			navigation.activeIndex >= sections.length &&
			navigation.activeIndex < sections.length + socials.length;
		const inExperiences =
			navigation.activeIndex >= sections.length + socials.length &&
			navigation.activeIndex < sections.length + socials.length + experiences.length;
		const inProjects =
			navigation.activeIndex >= sections.length + socials.length + experiences.length;

		if (goUp) {
			if (getIsInHeader()) {
				return;
			}
			if (inSocials) {
				navigation.activeIndex = 0;
				return;
			}
			if (atStartOfExperiences) {
				navigation.activeIndex = sections.length;
				return;
			}
			navigation.activeIndex -= 1;
		}
		if (goDown) {
			if (inSocials) {
				navigation.activeIndex = sections.length + socials.length;
				return;
			}
			if (atEndOfProjects) {
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
			if (atStartOfSocials || !inSocials) {
				shake.left = true;
				return;
			}
			navigation.activeIndex -= 1;
		}
		if (goRight && !getIsInHeader()) {
			if (atEndOfSocials || !inSocials) {
				shake.right = true;
				return;
			}
			navigation.activeIndex += 1;
		}
		if (goExecute) {
			if (inSocials) {
				window.open(socials[navigation.activeIndex - sections.length].url);
			}
			if (inExperiences) {
				goto(resolve('/experience'));
				navigation.activeIndex -= socials.length;
			}
			if (inProjects) {
				goto(resolve('/projects'));
				navigation.activeIndex -= socials.length + experiences.length;
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

<div class="author">
	<p>arvin garcia</p>
	<p class="description">software dev based in the philippines.</p>
	<ul class="social-list">
		{#each socials as social, i (social)}
			<li class="social">
				<a
					href={social.url}
					target="_blank"
					rel="external noopener noreferrer"
					class={`${navigation.activeIndex == i + sections.length ? 'active' : ''} ${navigation.activeIndex == i + sections.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == i + sections.length && shake.right ? 'shake-right' : ''}`}
					onanimationend={() => {
						shake.left = false;
						shake.right = false;
						shake.down = false;
					}}>{social.name}</a
				>
			</li>
			{#if i != socials.length - 1}
				<li class="separator">·</li>
			{/if}
		{/each}
	</ul>

	<!-- TODO: uncomment this when implemented -->
	<!-- <div class="ssh"> -->
	<!-- 	<p>to view my portfolio in the terminal:</p> -->
	<!-- 	<p>ssh arvingarcia.com [tbf]</p> -->
	<!-- </div> -->
</div>

<ul class="experience-list">
	{#each experiences as experience, i (experience.description)}
		<li class="experience">
			<a
				href={resolve('/experience')}
				onclick={() => {
					navigation.activeIndex = i + sections.length;
				}}
			>
				<div class="selection">
					<p class="pointer">
						{navigation.activeIndex >= sections.length + socials.length &&
						i == navigation.activeIndex - sections.length - socials.length
							? '>'
							: '\u00A0'}
					</p>
					<p
						class={[
							`position ${navigation.activeIndex == i + sections.length + socials.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == i + sections.length + socials.length && shake.right ? 'shake-right' : ''}`,
							(() =>
								i + sections.length + socials.length == navigation.activeIndex ? 'active' : '')()
						]}
						onanimationend={() => {
							shake.left = false;
							shake.right = false;
							shake.down = false;
						}}
					>
						{experience.position}
					</p>
				</div>
			</a>
			<p class="description">{experience.description}</p>
		</li>
	{/each}
</ul>

<ul class="project-list">
	{#each projects as project, i (project.name)}
		<li class="project">
			<a
				href={resolve('/projects')}
				onclick={() => {
					navigation.activeIndex = i + sections.length;
				}}
			>
				<p class="pointer">
					{navigation.activeIndex >= sections.length + socials.length + experiences.length &&
					i == navigation.activeIndex - sections.length - socials.length - experiences.length
						? '>'
						: '\u00A0'}
				</p>
				<div class="selection">
					<span class="padder"></span>
					<p
						class={[
							`name ${navigation.activeIndex == i + sections.length + socials.length + experiences.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == i + sections.length + socials.length + experiences.length && shake.right ? 'shake-right' : ''} ${navigation.activeIndex == i + sections.length + socials.length + experiences.length && shake.down ? 'shake-down' : ''}`,
							(() =>
								i + sections.length + socials.length + experiences.length == navigation.activeIndex
									? 'active'
									: '')()
						]}
						onanimationend={() => {
							shake.left = false;
							shake.right = false;
							shake.down = false;
						}}
					>
						{project.name}
					</p>
					<span class="padder"></span>
					<p class="description-short">{project.descriptionShort}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	.author {
		margin-left: 1.25rem;
	}

	.ssh {
		margin-top: 1.5rem;
		color: var(--white);
	}

	.description {
		margin-top: 0.25rem;
		color: var(--white);
	}
	.social-list {
		margin: 0.25rem 0 0 -0.25rem;
		padding: 0;
		display: flex;
		gap: 0.5rem;
		list-style-type: none;

		.social,
		.separator {
			color: var(--white);
		}

		.social a {
			padding: 0.125rem 0.25rem;
			color: var(--white);
			text-decoration: underline;
		}
		.social a:hover {
			text-decoration: none;
		}
		.social a.active {
			--flicker-color: var(--bright-orange);
			background: var(--flicker-color);
			color: var(--black);
			animation: flicker 0.4s steps(1, end) 1;
			text-decoration: none;
		}

		.social a.shake-down,
		.social a.shake-left,
		.social a.shake-right {
			padding: 0 0.25rem;
			display: inline-block;
		}
		.social a.shake-down {
			animation: shake-down 0.1s;
		}
		.social a.shake-left {
			animation: shake-left 0.1s;
		}
		.social a.shake-right {
			animation: shake-right 0.1s;
		}
	}

	.experience-list {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		list-style-type: none;

		.experience {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			a {
				color: var(--bright-white);
				text-decoration: none;
				width: max-content;
			}

			div {
				display: grid;
				grid-template-columns: 1rem max-content;

				.position {
					padding: 0 0.25rem;
				}
			}

			.description {
				margin-left: 1.25rem;
				max-width: 30rem;
				color: var(--white);
			}
		}

		.experience a .pointer {
			color: var(--experience);
		}

		.experience a:hover .position,
		.experience a .position.active {
			--flicker-color: var(--experience);
			background: var(--flicker-color);
			color: var(--black);
			animation: flicker 0.4s steps(1, end) 1;
		}

		.experience a .position.shake-down,
		.experience a .position.shake-left,
		.experience a .position.shake-right {
			padding: 0 0.25rem;
			display: inline-block;
		}
		.experience a .position.shake-down {
			animation: shake-down 0.1s;
		}
		.experience a .position.shake-left {
			animation: shake-left 0.1s;
		}
		.experience a .position.shake-right {
			animation: shake-right 0.1s;
		}
	}

	.project-list {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style-type: none;

		.project a {
			width: max-content;
			display: grid;
			grid-template-columns: 0.5rem 1fr;
			align-items: center;
			color: var(--bright-white);
			text-decoration: none;

			.pointer {
				margin-top: 0.175rem;
				align-self: start;
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 0;

				.padder {
					display: inline-block;
					height: 3px;
					width: 1px;
				}
				.description-short {
					margin-left: 0.75rem;
					color: var(--white);
				}
				.name {
					padding: 0 0.25rem;
					margin: 0 0 0 0.5rem;
					width: max-content;
				}
			}
		}

		.project a .pointer {
			color: var(--project);
		}

		.project a:hover .name,
		.project a .name.active {
			--flicker-color: var(--project);
			background: var(--flicker-color);
			color: var(--black);
			animation: flicker 0.4s steps(1, end) 1;
		}

		.project a .name.shake-down,
		.project a .name.shake-left,
		.project a .name.shake-right {
			padding: 0 0.25rem;
			display: inline-block;
		}
		.project a .name.shake-down {
			animation: shake-down 0.1s;
		}
		.project a .name.shake-left {
			animation: shake-left 0.1s;
		}
		.project a .name.shake-right {
			animation: shake-right 0.1s;
		}
	}

	@media (max-width: 500px) {
		.pointer {
			display: none;
		}

		.author {
			margin-left: 0.25rem;
		}

		.social-list {
			.social a.active {
				--flicker-color: var(--black);
				background: var(--flicker-color);
				color: var(--white);
				animation: none;
				text-decoration: underline;
			}
		}

		.experience-list {
			.experience {
				div {
					grid-template-columns: 1fr;
				}

				.description {
					margin-left: 0.25rem;
					max-width: 100%;
				}
			}
			.experience a .position.active {
				--flicker-color: var(--black);
				background: var(--flicker-color);
				color: var(--bright-white);
				animation: none;
			}
		}

		.project-list {
			.project a {
				grid-template-columns: 1fr;
				div {
					.name,
					.description-short {
						padding: 0;
						margin: 0 0 0 0.25rem;
					}
				}
			}
			.project a .name.active {
				--flicker-color: var(--black);
				background: var(--flicker-color);
				color: var(--bright-white);
				animation: none;
			}
		}
	}
</style>
