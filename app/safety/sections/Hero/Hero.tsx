"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div
        className={styles.background}
        data-reveal-image
        data-parallax="40"
      >
        {/* Desktop Banner */}
        <Image
          src="/Images/About/safety-hero.webp"
          alt="Teknix safety"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.desktopBanner}`}
        />

        {/* Mobile Banner */}
        <Image
          src="/Images/About/safety-mobilebanner.webp"
          alt="Teknix safety"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.mobileBanner}`}
        />

        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <h1 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>PEOPLE FIRST.</span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>SAFETY ALWAYS.</span>
            </span>
          </h1>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Safety isn't a feature we add — it's the standard every
              </span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>
                Teknix elevator is engineered around, from day one.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}