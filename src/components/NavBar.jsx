import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.headerApp}>
      <nav>
        <img
          src="/logo_optimized.webp"
          alt="Arvin Garcia profile picture"
          width="36px"
          height="36px"
        />
      </nav>
    </header>
  );
}

export default NavBar;
