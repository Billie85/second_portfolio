import styles from './HomeAnimation.module.css';

export function HomePage() {
  return (
    <>
      <h1 className={styles.counter}>0</h1>
      <div className={styles.overlay}>
        {[...Array(14)].map((_, index) => (
          <div key={index} className={styles.bar}></div>
        ))}
      </div>
      <div className={styles.MainWindow}>
        <nav className={styles.HeaderMain}>
          <a className={styles.HeaderFont} href="#">Home</a>
          <a className={styles.HeaderFont} href="#">About</a>
          <a className={styles.HeaderFont} href="#">Contact</a>
        </nav>
        <div className={styles.Name1}>
          <p className={styles.NameFont}>Welcome My Portfolio</p>
        </div>
        <div className={styles.Name2}>
          <p className={styles.NameFont}>I'm Ayumi</p>
        </div>
      </div>
    </>
  );
}