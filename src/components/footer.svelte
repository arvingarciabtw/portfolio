<script lang="ts">
  import { theme, getResolvedTheme } from "../lib/theme";

  $: resolvedTheme = getResolvedTheme($theme);
  $: iconSuffix = resolvedTheme === "dark" ? "-white" : "-black";

  function setTheme(mode: string) {
    theme.set(mode);
  }
</script>

<footer>
  <ul>
    <li>
      <a
        href="https://github.com/arvingarciabtw"
        target="_blank"
        rel="noopener noreferrer">GitHub</a
      >
    </li>
    <li>
      <a
        href="https://blog.arvingarcia.com/"
        target="_blank"
        rel="noopener noreferrer">Blog</a
      >
    </li>
  </ul>
  <p>© 2026 Arvin Garcia</p>
  <div class="modes">
    <button
      class:active={$theme === "system"}
      onclick={() => setTheme("system")}
      aria-label="System theme"
    >
      <img src="/modes/system{iconSuffix}.svg" alt="System icon" />
    </button>
    <button
      class:active={$theme === "light"}
      onclick={() => setTheme("light")}
      aria-label="Light theme"
    >
      <img src="/modes/sun{iconSuffix}.svg" alt="Sun icon" />
    </button>
    <button
      class:active={$theme === "dark"}
      onclick={() => setTheme("dark")}
      aria-label="Dark theme"
    >
      <img src="/modes/moon{iconSuffix}.svg" alt="Moon icon" />
    </button>
  </div>
</footer>

<style>
  footer {
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer .modes {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  footer button {
    padding: 0.5rem 0;
    background: transparent;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s;
  }
  footer button.active {
    border-bottom: 1px dashed var(--color-fg);
  }
  footer .modes img {
    width: 1rem;
    height: 1rem;
  }
  footer p,
  footer ul {
    font-family: "departure-mono", monospace;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
  footer ul {
    padding: 0;
    display: flex;
    gap: 2rem;
    list-style-type: none;
  }
  footer ul a {
    color: var(--color-fg);
    text-decoration: none;
  }
  footer ul a:hover {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    footer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }

  @media (max-width: 500px) {
    footer {
      padding: 1.5rem;
      gap: 1rem;
    }
    footer p,
    footer ul {
      font-size: 0.875rem;
    }
    footer ul {
      gap: 1rem;
    }
  }
</style>
