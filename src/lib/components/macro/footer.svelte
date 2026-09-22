<script lang="ts">
	import { onMount } from 'svelte';

	const navigationKeys = [
		{ key: 'h', symbol: 'h' },
		{ key: 'j', symbol: 'j' },
		{ key: 'k', symbol: 'k' },
		{ key: 'l', symbol: 'l' },
		{ key: 'ArrowLeft', symbol: '←' },
		{ key: 'ArrowDown', symbol: '↓' },
		{ key: 'ArrowUp', symbol: '↑' },
		{ key: 'ArrowRight', symbol: '→' }
	];
	const sectionKeys = [
		{ key: '1', symbol: '1' },
		{ key: '2', symbol: '2' },
		{ key: '3', symbol: '3' }
	];
	const executeKeys = [
		{ key: 'Enter', symbol: 'Enter' },
		{ key: ' ', symbol: 'Space' }
	];
	const scrollKeys = [
		{ key: 'w', symbol: 'w' },
		{ key: 'a', symbol: 'a' },
		{ key: 's', symbol: 's' },
		{ key: 'd', symbol: 'd' }
	];

	const keyGroups = [
		{
			group: navigationKeys,
			class: 'navigate',
			description: 'navigate (vim/arrows)'
		},
		{
			group: sectionKeys,
			class: 'section',
			description: 'section'
		},
		{
			group: scrollKeys,
			class: 'scroll',
			description: 'scroll'
		},
		{
			group: executeKeys,
			class: 'execute',
			description: 'execute'
		}
	];

	let char = $state('');

	function blink(key: string) {
		char = key;
		setTimeout(() => {
			char = '';
		}, 100);
	}

	function handlerNavigationKeyPress(e: KeyboardEvent) {
		if (
			navigationKeys.some((nk) => nk.key === e.key) ||
			sectionKeys.some((sk) => sk.key === e.key) ||
			executeKeys.some((ek) => ek.key === e.key) ||
			scrollKeys.some((ek) => ek.key === e.key)
		) {
			blink(e.key);
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handlerNavigationKeyPress);

		return () => {
			window.removeEventListener('keydown', handlerNavigationKeyPress);
		};
	});
</script>

<footer>
	<ul class="key-list">
		{#each keyGroups as kg (kg)}
			<li class={`key-group ${kg.class}`}>
				<div class="keys">
					{#each kg.group as k (k)}
						<p
							class={[
								'key',
								(() => {
									if (kg.group === executeKeys) {
										if (char == k.key) {
											return k.symbol;
										}
										return '';
									}
									if (char == k.key) {
										return k.key;
									}
									return '';
								})()
							]}
						>
							{k.symbol}
						</p>
					{/each}
				</div>
				<p class="description">{kg.description}</p>
			</li>
		{/each}
	</ul>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100dvw;
		padding: 1.5rem 1rem;
		background: var(--black);
		z-index: 1;
		display: grid;
		place-items: center;
	}
	.key-list {
		width: 100%;
		max-width: 80rem;
		padding: 0 1.25rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 3rem;
		list-style-type: none;

		.key-group {
			display: flex;
			flex-direction: column;
			gap: 0.125rem;

			.keys {
				display: flex;
				gap: 0.5rem;

				.key {
					padding: 0 0.375rem;
					display: grid;
					place-items: center;
					border: 1px solid;
					border-bottom: 2px solid;
					text-transform: uppercase;
				}
				.h,
				.j,
				.k,
				.l,
				.ArrowLeft,
				.ArrowDown,
				.ArrowUp,
				.ArrowRight {
					background-color: var(--bright-blue);
					color: var(--black);
					border-color: var(--bright-blue);
				}
				.\31,
				.\32,
				.\33 {
					background-color: var(--bright-magenta);
					color: var(--black);
					border-color: var(--bright-magenta);
				}
				.Enter,
				.Space {
					background-color: var(--bright-cyan);
					color: var(--black);
					border-color: var(--bright-cyan);
				}
				.w,
				.a,
				.s,
				.d {
					background-color: var(--bright-green);
					color: var(--black);
					border-color: var(--bright-green);
				}
			}
		}

		.navigate {
			color: var(--bright-blue);
			border-color: var(--bright-blue);
		}
		.section {
			color: var(--bright-magenta);
			border-color: var(--bright-magenta);
		}
		.execute {
			color: var(--bright-cyan);
			border-color: var(--bright-cyan);
		}
		.scroll {
			color: var(--bright-green);
			border-color: var(--bright-green);
		}
	}

	@media (max-width: 500px) {
		footer {
			padding: 0;
		}
		.key-list {
			display: none;
		}
	}
</style>
