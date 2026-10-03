import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* =========================================
          BACKGROUND HERO IMAGE
      ========================================= */}

      {/* Desktop Banner */}
      <Image
        src="/Images/Evo/evo-hero.webp"
        alt="Teknix Special Purpose Elevator in modern environment"
        fill
        priority
        sizes="100vw"
        className={`${styles.image} ${styles.desktopBanner}`}
      />

      {/* Mobile Banner */}
      <Image
        src="/Images/Evo/mobilebanner.webp"
        alt="Teknix Special Purpose Elevator in modern environment"
        fill
        priority
        sizes="100vw"
        className={`${styles.image} ${styles.mobileBanner}`}
      />


      {/* =========================================
          OVERLAY
      ========================================= */}

      <div className={styles.overlay} />


      {/* =========================================
          CONTENT
      ========================================= */}

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


      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

      <div
        className={styles.scrollHint}
        aria-hidden="true"
      >
        <span className={styles.scrollLine} />
        <span>SCROLL</span>
      </div>

    </section>
  );
}