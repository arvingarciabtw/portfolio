<script>
  import { TECHNOLOGIES } from "./lib/constants";
  import { Router, Route } from "svelte-routing";
  import CaseStudy from "./pages/case-study.svelte";
  import Home from "./pages/home.svelte";
</script>

<Router>
  <Route path="/"><Home /></Route>
  <Route path="/fractal"
    ><CaseStudy
      url="https://fractal.arvingarcia.com"
      name="Fractal"
      year="2026"
      technologies={TECHNOLOGIES.fractal}
    >
      {#snippet challenge()}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          aspernatur ad cupiditate adipisci ratione ea neque fugiat, earum
          reprehenderit! Voluptatibus harum numquam excepturi aperiam nisi
          laborum rerum assumenda earum ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tempore quas eligendi beatae sed. Soluta maxime ratione quod molestiae
          atque, voluptate, quasi similique ex ab hic illum adipisci
          necessitatibus deserunt.
        </p>
      {/snippet}
      {#snippet approach()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          provident laudantium? Non, minus quaerat aliquid dolor suscipit
          pariatur, iste labore quos laboriosam at magni tempore, optio eveniet
          iusto esse excepturi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut
          expedita minus odit iste rem magni dolore est facere non possimus
          perferendis voluptate ratione impedit corrupti minima quibusdam eos
          velit.
        </p>
      {/snippet}
      {#snippet outcome()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sint
          libero obcaecati autem minus porro omnis cum, nisi accusamus cumque id
          ad quisquam officiis saepe totam eveniet blanditiis quae error!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          itaque corporis aspernatur mollitia quae. Vero sed pariatur omnis
          corrupti obcaecati hic excepturi, labore voluptatem amet nihil,
          sapiente error in eum.
        </p>
      {/snippet}
    </CaseStudy></Route
  >
  <Route path="/syntype">
    <CaseStudy
      url="https://syntype.arvingarcia.com"
      name="Syntype"
      year="2026"
      technologies={TECHNOLOGIES.syntype}
    >
      {#snippet challenge()}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          aspernatur ad cupiditate adipisci ratione ea neque fugiat, earum
          reprehenderit! Voluptatibus harum numquam excepturi aperiam nisi
          laborum rerum assumenda earum ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tempore quas eligendi beatae sed. Soluta maxime ratione quod molestiae
          atque, voluptate, quasi similique ex ab hic illum adipisci
          necessitatibus deserunt.
        </p>
      {/snippet}
      {#snippet approach()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          provident laudantium? Non, minus quaerat aliquid dolor suscipit
          pariatur, iste labore quos laboriosam at magni tempore, optio eveniet
          iusto esse excepturi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut
          expedita minus odit iste rem magni dolore est facere non possimus
          perferendis voluptate ratione impedit corrupti minima quibusdam eos
          velit.
        </p>
      {/snippet}
      {#snippet outcome()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sint
          libero obcaecati autem minus porro omnis cum, nisi accusamus cumque id
          ad quisquam officiis saepe totam eveniet blanditiis quae error!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          itaque corporis aspernatur mollitia quae. Vero sed pariatur omnis
          corrupti obcaecati hic excepturi, labore voluptatem amet nihil,
          sapiente error in eum.
        </p>
      {/snippet}
    </CaseStudy>
  </Route>
  <Route path="/monad"
    ><CaseStudy
      url="https://monad.arvingarcia.com"
      name="Monad"
      year="2026"
      technologies={TECHNOLOGIES.monad}
    >
      {#snippet challenge()}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          aspernatur ad cupiditate adipisci ratione ea neque fugiat, earum
          reprehenderit! Voluptatibus harum numquam excepturi aperiam nisi
          laborum rerum assumenda earum ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tempore quas eligendi beatae sed. Soluta maxime ratione quod molestiae
          atque, voluptate, quasi similique ex ab hic illum adipisci
          necessitatibus deserunt.
        </p>
      {/snippet}
      {#snippet approach()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          provident laudantium? Non, minus quaerat aliquid dolor suscipit
          pariatur, iste labore quos laboriosam at magni tempore, optio eveniet
          iusto esse excepturi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut
          expedita minus odit iste rem magni dolore est facere non possimus
          perferendis voluptate ratione impedit corrupti minima quibusdam eos
          velit.
        </p>
      {/snippet}
      {#snippet outcome()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sint
          libero obcaecati autem minus porro omnis cum, nisi accusamus cumque id
          ad quisquam officiis saepe totam eveniet blanditiis quae error!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          itaque corporis aspernatur mollitia quae. Vero sed pariatur omnis
          corrupti obcaecati hic excepturi, labore voluptatem amet nihil,
          sapiente error in eum.
        </p>
      {/snippet}
    </CaseStudy></Route
  >
  <Route path="/canvas"
    ><CaseStudy
      url="https://canvas.arvingarcia.com"
      name="Canvas"
      year="2026"
      technologies={TECHNOLOGIES.canvas}
    >
      {#snippet challenge()}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          aspernatur ad cupiditate adipisci ratione ea neque fugiat, earum
          reprehenderit! Voluptatibus harum numquam excepturi aperiam nisi
          laborum rerum assumenda earum ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tempore quas eligendi beatae sed. Soluta maxime ratione quod molestiae
          atque, voluptate, quasi similique ex ab hic illum adipisci
          necessitatibus deserunt.
        </p>
      {/snippet}
      {#snippet approach()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          provident laudantium? Non, minus quaerat aliquid dolor suscipit
          pariatur, iste labore quos laboriosam at magni tempore, optio eveniet
          iusto esse excepturi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut
          expedita minus odit iste rem magni dolore est facere non possimus
          perferendis voluptate ratione impedit corrupti minima quibusdam eos
          velit.
        </p>
      {/snippet}
      {#snippet outcome()}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sint
          libero obcaecati autem minus porro omnis cum, nisi accusamus cumque id
          ad quisquam officiis saepe totam eveniet blanditiis quae error!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          itaque corporis aspernatur mollitia quae. Vero sed pariatur omnis
          corrupti obcaecati hic excepturi, labore voluptatem amet nihil,
          sapiente error in eum.
        </p>
      {/snippet}
    </CaseStudy></Route
  >
</Router>
