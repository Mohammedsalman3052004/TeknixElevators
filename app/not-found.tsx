import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.background} />

      <div className={styles.content}>
        {/* Small label */}
        <div className={styles.label}>
          <span className={styles.line} />
          <span>TEKNIX</span>
          <span className={styles.line} />
        </div>

        {/* Main text */}
        <h1 className={styles.title}>
          SOMETHING
          <br />
          <span>NEW IS COMING.</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>
          We are working on something exceptional.
          <br />
          This page will be available soon.
        </p>

        {/* Button */}
        <Link href="/" className={styles.button}>
          <span>BACK TO HOME</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </div>

      {/* Decorative number */}
      <div className={styles.number}>01</div>

      {/* Bottom text */}
      {/* <div className={styles.bottomText}>
        VERTICAL TRANSPORT SOLUTION
      </div> */}
    </main>
  );
}