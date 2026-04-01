<script>
  import Divider from "./components/divider.svelte";
</script>

<div class="wrapper">
  <section class="hero">
    <div class="info">
      <h1 class="heading">Arvin Garcia</h1>
      <div class="hook">
        <p>I love to design.</p>
        <p>I love to build those designs.</p>
      </div>
      <div class="brief-info">
        <p>
          Previously interned @ <a
            href="https://www.bridge360.ph/"
            target="_blank"
            rel="noopener noreferrer">Bridge360 Inc.</a
          > as a full stack developer.
        </p>
        <p>
          A CS graduate @ <a
            href="https://www.mapua.edu.ph/"
            target="_blank"
            rel="noopener noreferrer">Mapúa University</a
          >.
        </p>
        <p>Based in the Philippines.</p>
      </div>
      <div class="cta-container">
        <a href="/">
          <div class="corner"></div>
          <div class="corner"></div>
          Resume
          <div class="corner"></div>
          <div class="corner"></div>
        </a>
        <a
          href="https://github.com/arvingarciabtw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="corner"></div>
          <div class="corner"></div>
          GitHub
          <div class="corner"></div>
          <div class="corner"></div>
        </a>
      </div>
    </div>
    <div class="art"></div>
  </section>

  <Divider />

  <div class="projects-head">
    <h1>Projects</h1>
    <p>26 - TODAY</p>
  </div>

  <Divider />

  <section>
    <section class="project">
      <div class="top">
        <a
          class="redirect"
          href="https://fractal.arvingarcia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 class="name">Fractal</h1>
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
        <p class="year">2026</p>
      </div>
      <div class="middle">
        <div class="img-placeholder"></div>
        <div class="pills"></div>
      </div>
      <div class="bottom">
        <div class="description">
          A programmer-centric spaced repetition web application with native
          syntax highlighting and an algorithm for faster card reviews.
        </div>
        <a href="/">&gt;&gt; Read Case Study</a>
      </div>
    </section>

    <Divider />
    <section class="project">
      <div class="top">
        <a
          class="redirect"
          href="https://syntype.arvingarcia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 class="name">Syntype</h1>
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
        <p class="year">2026</p>
      </div>
      <div class="middle">
        <div class="img-placeholder"></div>
        <div class="pills"></div>
      </div>
      <div class="bottom">
        <div class="description">
          A practical typing test where you type actual code blocks, instead of
          a random assortment of words.
        </div>
        <a href="/">&gt;&gt; Read Case Study</a>
      </div>
    </section>

    <Divider />
    <section class="project">
      <div class="top">
        <a
          class="redirect"
          href="https://monad.arvingarcia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 class="name">Monad</h1>
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
        <p class="year">2026</p>
      </div>
      <div class="middle">
        <div class="img-placeholder"></div>
        <div class="pills"></div>
      </div>
      <div class="bottom">
        <div class="description">
          A personal design system for building user interfaces which supports
          Svelte and React.
        </div>
        <a href="/">&gt;&gt; Read Case Study</a>
      </div>
    </section>

    <Divider />
    <section class="project">
      <div class="top">
        <a
          class="redirect"
          href="https://labs.arvingarcia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 class="name">Labs</h1>
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
        <p class="year">2026</p>
      </div>
      <div class="middle">
        <div class="img-placeholder"></div>
        <div class="pills"></div>
      </div>
      <div class="bottom">
        <div class="description">
          A collection of experiments on my personal interests on 3d graphics
          and shaders.
        </div>
        <a href="/">&gt;&gt; Read Case Study</a>
      </div>
    </section>

    <Divider />
  </section>

  <footer>
    <p>© 2026 Arvin Garcia</p>
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
  </footer>
</div>

<style>
  p {
    font-family: "source-serif-4", serif;
    font-size: 14px;
    line-height: 1.75;
  }
  a {
    color: black;
  }
  a:hover {
    text-decoration: none;
  }
  .wrapper {
    margin: 0 1rem;
    border: 1px solid var(--color-gray-200);
  }
  .hero {
    display: grid;
    grid-template-columns: 510px 1fr;
  }
  .hero .info {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-right: 1px solid var(--color-gray-200);
  }
  .hero .art {
    background: var(--color-gray-100);
  }
  .heading {
    font-family: "offbit-trial-101", monospace;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .projects-head {
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h1 {
      font-family: "offbit-trial-101", monospace;
      font-size: 3rem;
      text-transform: uppercase;
      line-height: 1;
    }
    p {
      font-family: "departure-mono", monospace;
    }
  }
  .cta-container {
    margin-top: 8px;
    display: flex;
    gap: 12px;

    a {
      padding: 0.25rem 0.75rem;
      position: relative;
      font-family: "departure-mono", monospace;
      font-size: 14px;
      text-transform: uppercase;
      background: transparent;
      border: 1px solid var(--color-gray-200);
      border-radius: none;
      text-decoration: none;
      cursor: pointer;
    }
    a:hover {
      border: 1px dashed black;
    }
    a .corner {
      position: absolute;
      width: 3px;
      height: 3px;
      background: black;
    }
    a .corner:nth-of-type(1) {
      top: -2px;
      left: -2px;
    }
    a .corner:nth-of-type(2) {
      top: -2px;
      right: -2px;
    }
    a .corner:nth-of-type(3) {
      bottom: -2px;
      left: -2px;
    }
    a .corner:nth-of-type(4) {
      bottom: -2px;
      right: -2px;
    }
  }
  .project {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    max-width: 440px;
  }
  .project:nth-of-type(3) .description {
    max-width: 400px;
  }
  .project:last-of-type .description {
    max-width: 400px;
  }
  .project .bottom a {
    justify-self: end;
    align-self: center;
    font-family: "departure-mono", monospace;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
  }
  footer {
    padding: 3rem;
    display: flex;
    justify-content: space-between;
  }
  footer p,
  footer ul {
    font-family: "departure-mono", monospace;
    font-size: 14px;
    text-transform: uppercase;
  }
  footer ul {
    padding: 0;
    display: flex;
    gap: 2rem;
    list-style-type: none;
  }
  footer ul a {
    text-decoration: none;
  }
  footer ul a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    .hero {
      grid-template-columns: 400px 1fr;
    }
    .project .img-placeholder {
      height: 30rem;
    }
  }

  @media (max-width: 650px) {
    .hero {
      grid-template-columns: 1fr;
    }
    .hero .info {
      border-right: 0;
    }
    .art {
      display: none;
    }
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
    .projects-head p {
      display: none;
    }
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
    footer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
</style>
