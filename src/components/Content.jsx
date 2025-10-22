function Content() {
  return (
    <main>
      <h1
        style={{
          marginBottom: '0.75rem',
        }}
      >
        Portfolio
      </h1>
      <p>
        I'm currently studying web development. I will update this portfolio in
        the future when I work on my own projects.
      </p>
      <p
        style={{
          marginTop: '0.5rem',
        }}
      >
        For now, check out my{' '}
        <a
          href="https://blog.arvingarcia.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--accent)',
          }}
        >
          blog
        </a>{' '}
        where I write weekly about my learnings.
      </p>
    </main>
  );
}

export default Content;
