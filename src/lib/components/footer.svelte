<script lang="ts">
import { keyGroups, keys } from "$lib/helpers/keys";
import { onMount } from "svelte";

let char = $state("");

function blink(key: string) {
  char = key;
  setTimeout(() => {
    char = "";
  }, 100);
}

function navigationListener(e: KeyboardEvent) {
  if (
    keys.navigation.some((nk) => nk.key === e.key) ||
    keys.section.some((sk) => sk.key === e.key) ||
    keys.execute.some((ek) => ek.key === e.key) ||
    keys.scroll.some((ek) => ek.key === e.key) ||
    keys.reset.some((ek) => ek.key === e.key) ||
    keys.hide.some((ek) => ek.key === e.key) ||
    keys.theme.some((ek) => ek.key === e.key) ||
    keys.contrast.some((ek) => ek.key === e.key) ||
    keys.zoom.some((ek) => ek.key === e.key) ||
    keys.weight.some((ek) => ek.key === e.key) ||
    keys.position.some((ek) => ek.key === e.key)
  ) {
    blink(e.key);
  }
}

let hide = $state(false);

function hideListener(e: KeyboardEvent) {
  if (e.key == "x") {
    hide = !hide;
  }
}

onMount(() => {
  window.addEventListener("keydown", navigationListener);
  window.addEventListener("keydown", hideListener);

  return () => {
    window.removeEventListener("keydown", navigationListener);
    window.removeEventListener("keydown", hideListener);
  };
});
</script>

<footer class={`${hide ? 'hide' : ''}`}>
  <ul class="key-list">
		{#each keyGroups as kg (kg)}
			<li class={`key-group ${kg.class}`}>
				<div class="keys">
					{#each kg.group as k (k)}
						<kbd
							class={[
								'key',
								(() => {
									if (kg.group === keys.execute) {
										if (char == k.key) {
											return `${k.symbol} pressed`;
										}
										return '';
									}
									if (char == k.key) {
										return `${k.key} pressed`;
									}
									return '';
								})()
							]}
						>
							{k.symbol}
						</kbd>
					{/each}
				</div>
				<p class="description">{kg.description}</p>
			</li>
		{/each}
	</ul>
</footer>

<style>
footer {
  padding: 0.25rem 1rem 1rem;
  width: 100dvw;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: var(--black);
  display: grid;
  place-items: center;

  &.hide {
    display: none;
  }
}
.key-list {
  padding: 0 1.25rem;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
}
.key-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &.navigate {
    --key-color: var(--navigate);
  }
  &.section {
    --key-color: var(--section);
  }
  &.execute {
    --key-color: var(--execute);
  }
  &.scroll {
    --key-color: var(--scroll);
  }
  &.pos {
    --key-color: var(--pos);
  }
  &.reset {
    --key-color: var(--reset);
  }
  &.hide {
    --key-color: var(--hide);
  }
  &.theme {
    --key-color: var(--theme);
  }
  &.contrast {
    --key-color: var(--contrast);
  }
  &.zoom {
    --key-color: var(--zoom);
  }
  &.weight {
    --key-color: var(--weight);
  }
}
.description {
  color: var(--key-color);
}
.keys {
  display: flex;
  gap: 0.5rem;
}
.key {
  padding: 0.125rem 0.25rem;
  display: grid;
  place-items: center;
  border: 1px solid;
  border-bottom: 2px solid;
  text-transform: uppercase;
  line-height: 1;
  color: var(--key-color);
  border-color: var(--key-color);

  &.pressed {
    color: var(--black);
    background-color: var(--key-color);
    border-color: var(--key-color);
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
