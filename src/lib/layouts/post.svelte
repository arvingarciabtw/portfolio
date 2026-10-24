<script lang="ts">
  import type { Snippet } from "svelte";
  import { global as G } from "#lib/stores/global.svelte.js";
  import { resetColumnMemory } from "#lib/helpers/navigation.js";
  import Navigable from "#lib/components/navigable.svelte";

  type Heading = {
    id: string;
    text: string;
  };

  type Props = {
    title: string;
    description: string;
    pubDate: string;
    headings?: Heading[];
    children: Snippet;
  };

  let {
    title,
    description,
    pubDate,
    headings = [],
    children,
  }: Props = $props();

  const toc = $derived([
    { text: title, href: "#title" },
    ...headings.map((heading) => ({
      text: heading.text,
      href: `#${heading.id}`,
    })),
  ]);

  G.activeRow = 1;
  G.activeIndex = 0;
  G.indexMap = {
    0: 0,
  };
  resetColumnMemory();
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<div class="post-wrapper">
  <article class="post">
    <div class="title">
      <Navigable
        content={title}
        href={"#"}
        external={false}
        row={1}
        idx={0}
        underlined={false}
        multi={false}
        id={"title"}
      />
    </div>
    <time>{pubDate}</time>
    {@render children()}
  </article>
  <aside>
    <div class="wrapper">
      <h1>table of contents</h1>
      <ul>
        {#each toc as item, i (item.href)}
          <li>
            <Navigable
              content={item.text}
              href={item.href}
              external={false}
              row={i + 1}
              idx={1}
              underlined={false}
              multi={false}
            />
          </li>
        {/each}
      </ul>
    </div>
  </aside>
</div>

<style>
  .post-wrapper {
    padding: 0 1.25rem;
    width: 100%;
    max-width: 78rem;
    display: grid;
    grid-template-columns: 1fr 250px;
    gap: 8rem;
    --flicker-color: var(--blog);
    --active-color: var(--flicker-color);
  }
  .post {
    display: grid;
    text-transform: lowercase;

    .title {
      margin-left: -0.25rem;
    }
    time {
      display: block;
      margin: 0.75rem 0 3rem;
    }

    :global(p) {
      margin-bottom: 2rem;
      line-height: 2;
      color: var(--white);
    }
    :global(h1) {
      scroll-margin-top: 6rem;
      scroll-margin-bottom: 0rem;
    }
    :global(h2) {
      margin-bottom: 0.75rem;
      scroll-margin-top: 6rem;
      scroll-margin-bottom: 6rem;

      &::before {
        content: "## ";
      }
    }
    :global(a) {
      color: var(--flicker-color);
    }
    :global(ul) {
      margin: 1rem 0 3rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      color: var(--white);

      :global(li) {
        &::before {
          content: "- ";
        }
      }
    }
    :global(h2 + ul) {
      color: var(--flicker-color);
    }
    :global(ol) {
      margin-bottom: 3rem;
      padding-left: 1.875rem;
      list-style-type: decimal;
      color: var(--white);
    }
    :global(pre) {
      margin-bottom: 3rem;
      padding: 1.5rem;
      background: var(--black-alt);
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    :global(pre),
    :global(code) {
      text-transform: none;
    }
    :global(code) {
      padding: 0.25rem 0.5rem;
      background: var(--black-alt);
      border: 1px dashed var(--black-alt-2);
      color: var(--bright-white);
    }
    :global(pre code) {
      padding: 0;
      background: transparent;
      border: none;
    }
    :global(blockquote) {
      margin-bottom: 3rem;
      padding-left: 1.5rem;
      border-left: 4px solid var(--bright-black);
      opacity: 0.4;
    }
    :global(blockquote > p) {
      margin-bottom: 0;
      color: var(--bright-white);
    }
  }
  aside {
    position: relative;
  }
  aside .wrapper {
    position: sticky;
    top: 6rem;
    left: 0;
  }
  aside ul {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-transform: lowercase;
  }
  aside h1 {
    padding: 0 0.25rem;
    color: var(--flicker-color);
  }
  aside ul li {
    line-height: 2;
    color: var(--bright-white);
  }

  @media (max-width: 1000px) {
    .post-wrapper {
      grid-template-columns: 1fr 200px;
    }
  }

  @media (max-width: 750px) {
    .post-wrapper {
      grid-template-columns: 1fr;
    }
    aside {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .post-wrapper {
      padding: 0;
    }
    .post {
      :global(ul) {
        gap: 0rem;
      }
      :global(blockquote) {
        padding-left: 1rem;
      }
    }
  }
</style>
