<script lang="ts">
	import { onMount } from 'svelte';
	import { sections, socials, philosophies, tech } from '$lib/data/data';
	import { handlerSectionKeyPress } from '$lib/helpers/helpers';
	import { getCommands } from '$lib/stores/commands.svelte';
	import { navigation, getIsInHeader } from '$lib/stores/navigation.svelte';
	import { shake } from '$lib/stores/shake.svelte';

	function handlerNavigationKeyPress(e: KeyboardEvent) {
		const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

		const atStart = navigation.activeIndex == sections.length;
		const atEnd = navigation.activeIndex == sections.length + socials.length + philosophies.length;

		const atStartOfPhilosophies = navigation.activeIndex == sections.length + socials.length;
		const atEndOfSocials = navigation.activeIndex == sections.length + socials.length - 1;

		const inSocials =
			navigation.activeIndex >= sections.length &&
			navigation.activeIndex < sections.length + socials.length;
		const inPhilosophies =
			navigation.activeIndex >= sections.length + socials.length &&
			navigation.activeIndex < sections.length + socials.length + philosophies.length;

		if (goUp) {
			if (getIsInHeader()) {
				return;
			}
			if (atStart || inSocials) {
				navigation.activeIndex = 3;
				return;
			}
			if (atStartOfPhilosophies) {
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
			if (atStart || !inSocials) {
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
			if (!getIsInHeader()) {
				if (inSocials) {
					window.open(socials[navigation.activeIndex - sections.length].url);
				}
				if (inPhilosophies) {
					window.open(philosophies[navigation.activeIndex - sections.length - socials.length].url);
				}
				if (atEnd) {
					window.open('https://commitmono.com/');
				}
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

<div class="about-wrapper">
	<div class="general">
		<p>general</p>
		<div class="description">
			<p>hi, i'm arvin. a software dev based in the philippines.</p>
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
		</div>
	</div>
	<div class="philosophy">
		<p>philosophy</p>
		<div class="description">
			<ul class="philosophy-list">
				{#each philosophies as philosophy, i (philosophy)}
					<li class="philosophy">
						<a
							href={philosophy.url}
							target="_blank"
							rel="external noopener noreferrer"
							class={`${navigation.activeIndex == i + sections.length + socials.length ? 'active' : ''} ${navigation.activeIndex == i + sections.length + socials.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == i + sections.length + socials.length && shake.right ? 'shake-right' : ''}`}
							onanimationend={() => {
								shake.left = false;
								shake.right = false;
								shake.down = false;
							}}>{philosophy.description}.</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="tech">
		<p>tech</p>
		<div class="description">
			<ul class="tech-list">
				{#each Object.entries(tech) as [key, value] (key)}
					<li class="tech">
						{key}: {value}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="preference">
		<p>preference</p>
		<div class="description">
			<p>i like go and svelte. simple, yet powerful.</p>
			<p>i like to learn zig on the weekends.</p>
		</div>
	</div>
	<div class="credit">
		<p>credit</p>
		<div class="description">
			<p>
				the ui/ux is heavily inspired from the <a
					href="https://commitmono.com/"
					target="_blank"
					rel="external noopener noreferrer"
					class={`commit-mono ${navigation.activeIndex == sections.length + socials.length + philosophies.length ? 'active' : ''} ${navigation.activeIndex == sections.length + socials.length + philosophies.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == sections.length + socials.length + philosophies.length && shake.right ? 'shake-right' : ''} ${navigation.activeIndex == sections.length + socials.length + philosophies.length && shake.down ? 'shake-down' : ''}`}
					onanimationend={() => {
						shake.left = false;
						shake.right = false;
						shake.down = false;
					}}>commit mono</a
				> website. credit as well to their dope font.
			</p>
		</div>
	</div>
</div>

<style>
	.about-wrapper {
		margin-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;

		div {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.description {
				max-width: 40rem;
				gap: 0.5rem;
				color: var(--white);

				p {
					text-wrap: balance;
					line-height: 1.75;
				}
				ul {
					padding: 0;
					display: flex;
					flex-direction: column;
					gap: 0.375rem;
					list-style-type: none;
				}
				ul.social-list,
				ul.philosophy-list,
				.commit-mono {
					margin-left: -0.25rem;
				}
				ul.social-list {
					margin-top: -0.125rem;
					display: flex;
					flex-direction: row;
					gap: 0.5rem;
				}
				.commit-mono {
					display: inline-block;
					padding: 0 0.25rem;
				}
				a {
					padding: 0.125rem 0.25rem;
					color: var(--white);
					text-decoration: underline;
				}
				a:hover {
					text-decoration: none;
				}
				a.active {
					--flicker-color: var(--bright-orange);
					background: var(--flicker-color);
					color: var(--black);
					animation: flicker 0.4s steps(1, end) 1;
					text-decoration: none;
				}
				a.shake-down,
				a.shake-left,
				a.shake-right {
					padding: 0 0.25rem;
					display: inline-block;
				}
				a.shake-down {
					animation: shake-down 0.1s;
				}
				a.shake-left {
					animation: shake-left 0.1s;
				}
				a.shake-right {
					animation: shake-right 0.1s;
				}
			}
		}
	}

	@media (max-width: 500px) {
		.about-wrapper {
			margin-left: 0.25rem;

			div {
				.description {
					a.active {
						background-color: var(--black);
						color: var(--white);
						animation: none;
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
