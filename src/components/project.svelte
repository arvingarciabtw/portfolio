<script>
  import { Link } from "svelte-routing";

  const { url, name, year, technologies, description, path } = $props();
</script>

<section class="project">
  <div class="top">
    <a class="redirect" href={url} target="_blank" rel="noopener noreferrer">
      <h1 class="name">{name}</h1>
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg
      >
    </a>
    <p class="year">{year}</p>
  </div>
  <div class="middle">
    <div class="img-placeholder">
      <div class="technologies">
        {#each technologies as technology}
          <p class="technology">{technology}</p>
        {/each}
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="description">
      {description}
    </div>
    <Link to={path} class="case-study-link">&gt;&gt; Read Case Study</Link>
  </div>
</section>

<style>
  .project {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .project a {
    color: var(--color-fg);
  }
  .project .redirect {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    cursor: pointer;
  }
  .project .name {
    font-size: 0.875rem;
    font-weight: 400;
  }
  .project .icon {
    height: 18px;
  }
  .project .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "departure-mono", monospace;
    text-transform: uppercase;
  }
  .project .year {
    font-family: "departure-mono", monospace;
    font-size: 0.875rem;
  }
  .project .middle {
    width: 100%;
  }
  .project .img-placeholder {
    position: relative;
    width: 100%;
    height: 40rem;
    background: var(--color-gray-900);
    border: 1px dashed var(--color-gray-700);
  }
  .project .technologies {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
  }
  .project .technology {
    padding: 0.15rem 0.5rem;
    font-family: "departure-mono", monospace;
    font-size: 0.75rem;
    text-transform: uppercase;
    background: var(--color-fg);
    color: var(--color-bg);
  }
  .project .bottom {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 2rem;
  }
  .project .description {
    max-width: 560px;
    font-family: "sentient", serif;
    font-size: 0.875rem;
  }
  .project:nth-of-type(2) .description {
    max-width: 400px;
  }
  .project:nth-of-type(3) .description {
    max-width: 360px;
  }
  .project:last-of-type .description {
    max-width: 340px;
  }
  :global(.project .bottom a) {
    justify-self: end;
    align-self: center;
    font-family: "departure-mono", monospace;
    font-size: 0.875rem;
    text-transform: uppercase;
    color: var(--color-fg);
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    .project .img-placeholder {
      height: 30rem;
    }
  }

  @media (max-width: 650px) {
    .project .img-placeholder {
      height: 20rem;
    }
    .project .bottom {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    :global(.project .bottom a) {
      align-self: start;
    }
  }

  @media (max-width: 500px) {
    .project .img-placeholder {
      height: 15rem;
    }
  }

  @media (max-width: 420px) {
    .project {
      padding: 1.5rem;
      gap: 1.5rem;
    }
    .project .name,
    .project .year,
    .project .description,
    :global(.project .bottom a) {
      font-size: 0.75rem;
    }
    .project .technology {
      font-size: 0.625rem;
    }
    .project .img-placeholder {
      margin: 0 -1.5rem;
      width: auto;
      border-left: none;
      border-right: none;
    }
  }
</style>
