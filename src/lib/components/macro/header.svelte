<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { sections } from '$lib/data/data';
	import { getCommands } from '$lib/stores/commands.svelte';
	import { navigation, getIsInHeader } from '$lib/stores/navigation.svelte';
	import { shake } from '$lib/stores/shake.svelte';

	const currentUrl = $derived(page.url.pathname);

	function handlerNavigationKeyPress(e: KeyboardEvent) {
		const { goUp, goLeft, goRight, goExecute } = getCommands(e);

		const atStart = navigation.activeIndex == 0;
		const atEnd = navigation.activeIndex == sections.length - 1;

		if (goUp && getIsInHeader()) {
			shake.up = true;
		}
		if (goLeft && getIsInHeader()) {
			if (atStart) {
				shake.left = true;
				return;
			}
			shake.left = false;
			navigation.activeIndex--;
			goto(resolve(sections[navigation.activeIndex].url));
		}
		if (goRight && getIsInHeader()) {
			if (atEnd) {
				shake.right = true;
				return;
			}
			shake.right = false;
			navigation.activeIndex++;
			goto(resolve(sections[navigation.activeIndex].url));
		}
		if (goExecute && getIsInHeader()) {
			goto(resolve(sections[navigation.activeIndex].url));
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handlerNavigationKeyPress);

		return () => {
			window.removeEventListener('keydown', handlerNavigationKeyPress);
		};
	});
</script>

<header>
	<ul class="section-list">
		{#each sections as section, i (section.name)}
			<li class={`section ${section.name}`}>
				<a
					href={resolve(section.url)}
					class={`${currentUrl == section.url && navigation.activeIndex != i ? 'active-prio' : ''} ${navigation.activeIndex == i ? 'active' : ''} ${navigation.activeIndex == i && shake.up ? 'shake-up' : ''} ${i == 0 && navigation.activeIndex == 0 && shake.left ? 'shake-left' : ''} ${i == sections.length - 1 && navigation.activeIndex == sections.length - 1 && shake.right ? 'shake-right' : ''}`}
					onclick={() => {
						navigation.activeIndex = i;
					}}
					onanimationend={() => {
						shake.up = false;
						shake.left = false;
						shake.right = false;
					}}
				>
					0{i + 1}
					{section.name}
				</a>
			</li>
		{/each}
	</ul>
</header>

<style>
	header {
		padding: 0 1rem;

		.section-list {
			padding: 0;
			display: flex;
			gap: 2.5rem;
			list-style-type: none;

			/* general a element styles. */
			.section a {
				padding: 0.125rem 0.25rem;
				text-decoration: none;
			}
			.home a {
				color: var(--home);
			}
			.experience a {
				color: var(--experience);
			}
			.projects a {
				color: var(--project);
			}
			.about a {
				color: var(--bright-orange);
			}

			/* hover and active styles. */
			.section a:hover,
			.section a.active {
				background: var(--flicker-color);
				color: var(--black);
				animation: flicker 0.4s steps(1, end) 1;
			}
			.home a:hover,
			.home a.active {
				--flicker-color: var(--home);
			}
			.experience a:hover,
			.experience a.active {
				--flicker-color: var(--experience);
			}
			.projects a:hover,
			.projects a.active {
				--flicker-color: var(--project);
			}
			.about a:hover,
			.about a.active {
				--flicker-color: var(--bright-orange);
			}

			/* active-prio styles. */
			.section a.active-prio {
				--dot-bg: var(--black);
				--dot-size: 1px;
				--dot-space: 2px;
				background:
					linear-gradient(
							90deg,
							var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
							transparent 1%
						)
						center / var(--dot-space) var(--dot-space),
					linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%)
						center / var(--dot-space) var(--dot-space),
					var(--dot-color);
			}
			.home a.active-prio {
				--dot-color: var(--red);
				color: var(--home);
			}
			.experience a.active-prio {
				--dot-color: var(--green);
				color: var(--experience);
			}
			.projects a.active-prio {
				--dot-color: var(--project);
				color: var(--project);
			}
			.about a.active-prio {
				--dot-color: var(--bright-orange);
				color: var(--bright-orange);
			}

			/* shake styles. */
			.section a.shake-up,
			.section a.shake-left,
			.section a.shake-right {
				padding: 0 0.25rem;
				display: inline-block;
			}
			.section a.shake-up {
				animation: shake-up 0.1s;
			}
			.section a.shake-left {
				animation: shake-left 0.1s;
			}
			.section a.shake-right {
				animation: shake-right 0.1s;
			}
		}
	}

	@media (max-width: 500px) {
		header {
			padding: 0;

			.section-list {
				flex-wrap: wrap;
				gap: 0.25rem 1rem;
			}
		}
	}
</style>
