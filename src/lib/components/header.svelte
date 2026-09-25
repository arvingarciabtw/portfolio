<script lang="ts">
import { onMount } from "svelte";
import { goto } from "$app/navigation";
import { resolve } from "$app/paths";
import { page } from "$app/state";
import { sections } from "$lib/data/data";
import { getCommands } from "$lib/stores/commands.svelte";
import { getIsInHeader, navigation } from "$lib/stores/navigation.svelte";
import { shake } from "$lib/stores/shake.svelte";

const currentUrl = $derived(page.url.pathname);

function navigationListener(e: KeyboardEvent) {
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
  window.addEventListener("keydown", navigationListener);

  return () => {
    window.removeEventListener("keydown", navigationListener);
  };
});

let { font } = $props();
</script>

<header>
  <div class="wrapper">
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
    <div class="states">
      <!-- need to figure out how to show the theme INSTANTLY here... -->
      <p>{font.size}px</p>
      <p>{font.weight}</p>
    </div>
  </div>
</header>

<style>
header {
  padding: 1.5rem 1rem 0.25rem;
  display: grid;
  place-items: center;
  background: var(--black);
  z-index: 1; /* to stack above scrollable main el */
}
.wrapper {
  padding: 0 1rem;
  width: 100%;
  max-width: 90rem;
  display: grid;
  grid-template-columns: 1fr max-content;
  place-items: center;
  gap: 4rem;
}

.section-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2.5rem;
}
.states {
  display: flex;
  gap: 3rem;
  color: var(--white);
}
.section a {
  padding: 1px 0.25rem;
  display: inline-block;
  text-decoration: none;
  width: max-content;

  &:hover,
  &.active {
    background: var(--flicker-color);
    color: var(--black);
    animation: flicker 0.4s steps(1, end) 1;
  }

  &.active-prio {
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
      linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
      transparent 1%)
      center / var(--dot-space) var(--dot-space),
      var(--dot-color);
  }
}
.home a {
  color: var(--home);

  &:hover,
  &.active,
  &.active-prio {
    --flicker-color: var(--home);
    --dot-color: var(--home);
  }
}
.experience a {
  color: var(--experience);

  &:hover,
  &.active,
  &.active-prio {
    --flicker-color: var(--experience);
    --dot-color: var(--experience);
  }
}
.projects a {
  color: var(--project);

  &:hover,
  &.active,
  &.active-prio {
    --flicker-color: var(--project);
    --dot-color: var(--project);
  }
}
.about a {
  color: var(--about);

  &:hover,
  &.active,
  &.active-prio {
    --flicker-color: var(--about);
    --dot-color: var(--about);
  }
}

@media (max-width: 700px) {
  .states {
    display: none;
  }
}

@media (max-width: 500px) {
  header {
    padding: 1rem 0;
  }
  .section-list {
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
  }
  .section a {
    padding: 0.125rem 0.25rem;
  }
}
</style>
