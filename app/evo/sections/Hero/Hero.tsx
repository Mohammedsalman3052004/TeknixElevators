import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Background hero image */}
      <Image
        src="/Images/Evo/evo-hero.webp"
        alt="Teknix Special Purpose Elevator in modern environment"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>

        <span
          className={styles.eyebrow}
          data-reveal="up"
        >
          TEKNIX ELEVATORS
        </span>

        <div data-reveal-lines>
          <h1>
            <span data-reveal-line>
              THE EVOLUTION
            </span>
            <span data-reveal-line>
              <em>OF HOME ELEVATORS</em>
            </span>
          </h1>
        </div>

        <p data-reveal="up">
          Compact belt-drive technology, low power consumption, and refined
          architectural design engineered to integrate seamlessly into your home.
        </p>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span>SCROLL</span>
      </div>

    </section>
  );
}
