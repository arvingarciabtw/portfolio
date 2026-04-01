<script>
  const { url, name, year, description, route } = $props();
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
    <div class="img-placeholder"></div>
    <!-- TODO: dynamic pills -->
    <div class="pills"></div>
  </div>
  <div class="bottom">
    <div class="description">
      {description}
    </div>
    <a href={route}>&gt;&gt; Read Case Study</a>
  </div>
</section>

<style>
  .project {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .project a {
    color: black;
  }
  .project .redirect {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
  }
  .project .name {
    font-size: 14px;
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
    font-size: 14px;
  }
  .project .middle {
    width: 100%;
  }
  .project .img-placeholder {
    width: 100%;
    height: 40rem;
    background: var(--color-gray-100);
    border: 1px dashed var(--color-gray-400);
  }
  .project .bottom {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 2rem;
  }
  .project .description {
    max-width: 560px;
    font-family: "source-serif-4", serif;
    font-size: 14px;
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
  .project .bottom a {
    justify-self: end;
    align-self: center;
    font-family: "departure-mono", monospace;
    font-size: 14px;
    text-transform: uppercase;
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
    .project .bottom a {
      align-self: start;
    }
  }

  @media (max-width: 500px) {
    .project .img-placeholder {
      height: 15rem;
    }
  }

  @media (max-width: 420px) {
    .project .img-placeholder {
      margin: 0 -3rem;
      width: auto;
      border-left: none;
      border-right: none;
    }
  }
</style>
