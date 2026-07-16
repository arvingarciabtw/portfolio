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
			executeKeys.some((ek) => ek.key === e.key)
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
		padding: 0 1.25rem;
	}
	.key-list {
		padding: 0;
		display: flex;
		gap: 3rem;
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
