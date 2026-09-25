<script lang="ts">
import { onMount } from "svelte";
import { goto } from "$app/navigation";
import { resolve } from "$app/paths";
import Download from "$lib/icons/download.svelte";
import Fork from "$lib/icons/fork.svelte";
import Star from "$lib/icons/star.svelte";
import { getCommands } from "$lib/stores/commands.svelte";
import { getIsInHeader, navigation } from "$lib/stores/navigation.svelte";
import { shake } from "$lib/stores/shake.svelte";
import { projects, sections, socials } from "$lib/data/data";
import { handlerSectionKeyPress } from "$lib/helpers/helpers";

const EXPERIENCE_LENGTH = 1;

function handlerNavigationKeyPress(e: KeyboardEvent) {
  const { goUp, goDown, goLeft, goRight, goExecute } = getCommands(e);

  const atStartOfSocials = navigation.activeIndex == sections.length;
  const atStartOfExperiences =
    navigation.activeIndex == sections.length + socials.length;
  const atEndOfProjects = navigation.activeIndex ==
    sections.length +
      socials.length +
      EXPERIENCE_LENGTH +
      projects.slice(0, 3).length -
      1;
  const atEndOfSocials =
    navigation.activeIndex == sections.length + socials.length - 1;

  const inSocials = navigation.activeIndex >= sections.length &&
    navigation.activeIndex < sections.length + socials.length;
  const inExperiences =
    navigation.activeIndex >= sections.length + socials.length &&
    navigation.activeIndex <
      sections.length + socials.length + EXPERIENCE_LENGTH;
  const inProjects = navigation.activeIndex >=
    sections.length + socials.length + EXPERIENCE_LENGTH;

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
      goto(resolve("/experience"));
      navigation.activeIndex -= socials.length;
    }
    if (inProjects) {
      goto(resolve("/projects"));
      navigation.activeIndex -= socials.length + EXPERIENCE_LENGTH;
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

<div class="home-wrapper">
  <section class="author">
    <h1>arvin garcia</h1>
    <p class="description">software dev based in the philippines.</p>
    <ul class="social-list">
      {#each socials as social, i (social)}
        <li class="social">
          <a
            href={social.url}
            target="_blank"
            rel="external noopener noreferrer"
            class={`${navigation.activeIndex == i + sections.length ? "active" : ""} ${navigation.activeIndex == i + sections.length && shake.left ? "shake-left" : ""} ${navigation.activeIndex == i + sections.length && shake.right ? "shake-right" : ""}`}
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
  </section>

  <section class="experience">
    <a
      href={resolve("/experience")}
      onclick={() => {
          navigation.activeIndex = 0 + sections.length;
        }}
    >
      <h1
        class={[
              `position ${navigation.activeIndex == 0 + sections.length + socials.length && shake.left ? "shake-left" : ""} ${navigation.activeIndex == 0 + sections.length + socials.length && shake.right ? "shake-right" : ""}`,
              (() =>
                0 + sections.length + socials.length == navigation.activeIndex
                  ? "active"
                  : "")(),
            ]}
        onanimationend={() => {
              shake.left = false;
              shake.right = false;
              shake.down = false;
            }}
      >
            see experience
          </h1>
    </a>
    <p class="description">fullstack dev intern. did volunteer work.</p>
  </section>

  <section class="projects">
    <ul>
    {#each projects.slice(0, 3) as project, i (project.name)}
      <li class="project">
        <a
          href={resolve("/projects")}
          onclick={() => {
            navigation.activeIndex = i + sections.length;
          }}
        >
            <div class="details">
              <div
                class={[
                  `name ${navigation.activeIndex == i + sections.length + socials.length + EXPERIENCE_LENGTH && shake.left ? "shake-left" : ""} ${navigation.activeIndex == i + sections.length + socials.length + EXPERIENCE_LENGTH && shake.right ? "shake-right" : ""} ${navigation.activeIndex == i + sections.length + socials.length + EXPERIENCE_LENGTH && shake.down ? "shake-down" : ""}`,
                  (() =>
                    i + sections.length + socials.length + EXPERIENCE_LENGTH ==
                    navigation.activeIndex
                      ? "active"
                      : "")(),
                ]}
                onanimationend={() => {
                  shake.left = false;
                  shake.right = false;
                  shake.down = false;
                }}
              >
                <p>{project.name}</p>
              </div>
              <div class="metrics">
                {#if project.metrics.stars != null && project.metrics.stars > 10}
                  <div class="metric stars">
                    <div class="icon">
                      <Star />
                    </div>
                    <p>
                      {project.metrics.stars}{project.metrics.stars > 10
                        ? "+"
                        : ""}
                    </p>
                  </div>
                {/if}
                {#if project.metrics.downloads != null && project.metrics.downloads > 10}
                  <div class="metric downloads">
                    <div class="icon">
                      <Download />
                    </div>
                    <p>
                      {project.metrics.downloads}{project.metrics.downloads > 10
                        ? "+"
                        : ""}
                    </p>
                  </div>
                {/if}
                {#if project.metrics.forks != null && project.metrics.forks != 0}
                  <div class="metric forks">
                    <div class="icon">
                      <Fork />
                    </div>
                    <p>
                      {project.metrics.forks}{project.metrics.forks > 10
                        ? "+"
                        : ""}
                    </p>
                  </div>
                {/if}
              </div>
            </div>
            <p class="description">{project.descriptionShort}</p>
        </a>
      </li>
    {/each}
  </ul>
  </section>
</div>

<style>
.home-wrapper {
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

  .description {
    color: var(--white);
  }
}
.social-list {
  margin-left: -0.25rem;
  display: flex;
  gap: 0.5rem;
}

.social a {
  padding: 1px 0.25rem;
  display: inline-block;
  text-decoration: underline dotted;
  color: var(--white);

  &:hover {
    text-decoration: none;
  }

  &.active {
    --flicker-color: var(--about);
    text-decoration: none;
  }
}
.experience {
  width: max-content;
  cursor: pointer;

  &:hover .position {
    --flicker-color: var(--experience);
    background: var(--flicker-color);
    color: var(--black);
    animation: flicker 0.4s steps(1, end) 1;
  }
}
.experience .position {
  margin-left: -0.25rem;
  padding: 1px 0.25rem;
  width: max-content;
  color: var(--bright-white);
  text-decoration: none;

  &.active {
    --flicker-color: var(--experience);
  }
}

.projects ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.project a {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--bright-white);
  text-decoration: none;

  &:hover .name {
    --flicker-color: var(--project);
    background: var(--flicker-color);
    color: var(--black);
    animation: flicker 0.4s steps(1, end) 1;
  }

  .name {
    margin-left: -0.25rem;
    padding: 0 0.25rem;

    &.active {
      --flicker-color: var(--project);
    }
  }
}
.project .details {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0.5rem;
}
.metrics {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 0.5rem;
}
.metric {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: var(--bright-yellow);
}
.metric .icon {
  min-height: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: end;
}
.metric.stars {
  color: var(--star);
}
.metric.downloads {
  color: var(--download);
}
.metric.forks {
  color: var(--fork);
}

@media (max-width: 500px) {
  .home-wrapper {
    padding: 0 0.25rem;
  }
  *.active {
    --flicker-color: var(--black) !important;
    color: var(--bright-white) !important;
  }
  a.active {
    text-decoration: underline dotted !important;
    color: var(--white) !important;
  }
}
</style>
