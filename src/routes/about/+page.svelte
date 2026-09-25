<script lang="ts">
import { onMount } from "svelte";
import { philosophies, sections, socials, tech } from "$lib/data/data";
import { handlerSectionKeyPress } from "$lib/helpers/helpers";
import { getCommands } from "$lib/stores/commands.svelte";
import { getIsInHeader, navigation } from "$lib/stores/navigation.svelte";
import { shake } from "$lib/stores/shake.svelte";

function handlerNavigationKeyPress(e: KeyboardEvent) {
  const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

  const atStart = navigation.activeIndex == sections.length;
  const atEnd = navigation.activeIndex ==
    sections.length + socials.length + philosophies.length;

  const atStartOfPhilosophies =
    navigation.activeIndex == sections.length + socials.length;
  const atEndOfSocials =
    navigation.activeIndex == sections.length + socials.length - 1;

  const inSocials = navigation.activeIndex >= sections.length &&
    navigation.activeIndex < sections.length + socials.length;
  const inPhilosophies =
    navigation.activeIndex >= sections.length + socials.length &&
    navigation.activeIndex <
      sections.length + socials.length + philosophies.length;

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
        window.open(
          philosophies[
            navigation.activeIndex - sections.length - socials.length
          ].url,
        );
      }
      if (atEnd) {
        window.open("https://commitmono.com/");
      }
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
</script>

<div class="about-wrapper">
  <section class="general">
    <h1>socials</h1>
    <div class="description">
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
  </section>
  <section class="philosophy">
    <h1>philosophy</h1>
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
  </section>
  <section class="tech">
    <h1>tech</h1>
    <div class="description">
      <ul class="tech-list">
				{#each Object.entries(tech) as [key, value] (key)}
					<li class="tech">
						{key}: {value}
					</li>
				{/each}
			</ul>
    </div>
  </section>
  <section class="credit">
    <h1>credit</h1>
    <div class="description">
      <p>
				the ui/ux is based on the <a
					href="https://commitmono.com/"
					target="_blank"
					rel="external noopener noreferrer"
					class={`commit-mono ${navigation.activeIndex == sections.length + socials.length + philosophies.length ? 'active' : ''} ${navigation.activeIndex == sections.length + socials.length + philosophies.length && shake.left ? 'shake-left' : ''} ${navigation.activeIndex == sections.length + socials.length + philosophies.length && shake.right ? 'shake-right' : ''} ${navigation.activeIndex == sections.length + socials.length + philosophies.length && shake.down ? 'shake-down' : ''}`}
					onanimationend={() => {
						shake.left = false;
						shake.right = false;
						shake.down = false;
					}}>commit mono</a
				> website.
			</p>
    </div>
  </section>
</div>

<style>
.about-wrapper {
  padding: 0 1.25rem;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.description {
  max-width: 40rem;
  gap: 0.5rem;
  color: var(--white);
}
p {
  text-wrap: balance;
  line-height: 1.75;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.social-list,
  &.philosophy-list {
    margin-left: -0.25rem;
  }

  &.social-list {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
}
.commit-mono {
  display: inline-block;
  padding: 1px 0.25rem;
  line-height: 1.5;
}
a {
  padding: 1px 0.25rem;
  display: inline-block;
  color: var(--white);
  text-decoration: underline dotted;

  &:hover {
    text-decoration: none;
  }

  &.active {
    --flicker-color: var(--about);
    text-decoration: none;
  }
}

@media (max-width: 500px) {
  *.active {
    --flicker-color: var(--black) !important;
    color: var(--bright-white) !important;
  }
  a.active {
    text-decoration: underline dotted !important;
    color: var(--white) !important;
  }
  .about-wrapper {
    padding: 0;
    padding-left: 0.25rem;
    margin-left: 0;
  }
}
</style>
