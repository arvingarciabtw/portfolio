<script>
  import Divider from "../components/divider.svelte";
  import Footer from "../components/footer.svelte";

  const { url, name, year, technologies, challenge, approach, outcome } =
    $props();
</script>

<div class="wrapper">
  <div class="cell hero">
    <div class="top">
      <a href="/" class="back">&lt;&lt;</a>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Redirect to live site"
      >
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
    </div>
    <div class="img-placeholder">
      <div class="technologies">
        {#each technologies as technology}
          <p class="technology">{technology}</p>
        {/each}
      </div>
    </div>
    <div class="project">
      <h1 class="name">{name}</h1>
      <p class="year">{year}</p>
    </div>
  </div>

  <Divider />

  <div class="cell info">
    <h1 class="heading">Challenge</h1>
    <div class="description">
      {@render challenge()}
    </div>
  </div>

  <Divider />

  <div class="cell info">
    <h1 class="heading">Approach</h1>
    <div class="description">
      {@render approach()}
    </div>
  </div>

  <Divider />

  <div class="cell info">
    <h1 class="heading">Outcome</h1>
    <div class="description">
      {@render outcome()}
    </div>
  </div>

  <Divider />

  <Footer />
</div>

<style>
  p {
    font-family: "source-serif-4", serif;
    font-size: 0.875rem;
  }
  .wrapper {
    margin: 0rem 1rem;
    border: 1px solid var(--color-gray-200);
    min-height: 100dvh;
  }
  .cell {
    padding: 3rem;
  }
  .hero {
    padding-top: 1.75rem;
    padding-bottom: 2.5rem;
    display: grid;
    grid-template-rows: 2.25rem 1fr 4rem;
    gap: 2rem;
    min-height: 100svh;
  }
  .hero .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero .top a {
    color: black;
  }
  .back {
    font-family: "departure-mono", monospace;
    font-size: 1.25rem;
    color: black;
    text-decoration: none;
  }
  .img-placeholder {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-gray-100);
    border: 1px dashed var(--color-gray-400);
  }
  .technologies {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
  }
  .technology {
    padding: 0.15rem 0.5rem;
    font-family: "departure-mono", monospace;
    font-size: 0.75rem;
    text-transform: uppercase;
    background: black;
    color: white;
  }
  .project {
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .project .name {
    font-family: "offbit-trial-101", monospace;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .project .year {
    font-family: "departure-mono", monospace;
    font-size: 0.875rem;
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 500px;
  }
  .info .heading {
    font-family: "departure-mono", monospace;
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  .info .description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: "source-serif-4", serif;
    font-size: 0.875rem;
  }

  @media (max-width: 420px) {
    .cell {
      padding: 1.5rem;
    }
    .hero {
      padding-top: 1rem;
      gap: 1rem;
    }
    .back {
      font-size: 1rem;
    }
    .hero .icon {
      width: 18px;
      height: 18px;
    }
    .technology {
      font-size: 0.75rem;
    }
    .img-placeholder {
      margin: 0 -1.5rem;
      width: auto;
      border-left: none;
      border-right: none;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .info .description {
      font-size: 0.75rem;
    }
  }
</style>
