<script>
  import { TECHNOLOGIES } from "../lib/constants";
  import Divider from "../components/divider.svelte";
  import Project from "../components/project.svelte";
  import Footer from "../components/footer.svelte";
</script>

<main class="wrapper">
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

  <section class="projects">
    <Divider />

    <Project
      url="https://fractal.arvingarcia.com"
      name="Fractal"
      year="2026"
      technologies={TECHNOLOGIES.fractal}
      description="A programmer-centric spaced repetition web application with native syntax highlighting and an algorithm for faster card reviews."
      path="/fractal"
    />

    <Divider />

    <Project
      url="https://syntype.arvingarcia.com"
      name="Syntype"
      year="2026"
      technologies={TECHNOLOGIES.syntype}
      description="A practical typing test where you type actual code blocks, instead of a random assortment of words."
      path="/syntype"
    />

    <Divider />

    <Project
      url="https://monad.arvingarcia.com"
      name="Monad"
      year="2026"
      technologies={TECHNOLOGIES.monad}
      description="A personal design system for building user interfaces which supports Svelte and React."
      path="/monad"
    />

    <Divider />

    <Project
      url="https://labs.arvingarcia.com"
      name="Canvas"
      year="2026"
      technologies={TECHNOLOGIES.canvas}
      description="A collection of experiments on my personal interests on 3d graphics and shaders."
      path="/canvas"
    />

    <Divider />
  </section>

  <Footer />
</main>

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

  @media (max-width: 1000px) {
    .hero {
      grid-template-columns: 400px 1fr;
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
  }

  @media (max-width: 500px) {
    .projects-head p {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .hero .info,
    .projects-head {
      padding: 1.5rem;
    }
    .hero p,
    .cta-container a {
      font-size: 0.75rem;
    }
  }
</style>
