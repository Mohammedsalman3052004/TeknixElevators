import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/Images/Optima/optima-hero.png"
        alt="Optima elevator"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>

        <h1 data-reveal="up">
          EVERYTHING YOU NEED
          <br />
          NOTHING YOU NEED
        </h1>

        <p data-reveal="up">
          Thoughtful engineering. Refined design.
          <br />
          Made around the way you move.
        </p>
      </div>
    </section>
  );
}