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

<style>
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
    color: black;
    text-decoration: none;
  }
  footer ul a:hover {
    text-decoration: underline;
  }

  @media (max-width: 420px) {
    footer {
      padding: 1.5rem;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    footer p,
    footer ul {
      font-size: 0.75rem;
    }
  }
</style>
