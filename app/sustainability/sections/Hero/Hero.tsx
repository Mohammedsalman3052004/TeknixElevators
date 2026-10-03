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
          src="/Images/About/sustainable-hero.webp"
          alt="Teknix sustainability"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.desktopBanner}`}
        />

        {/* Mobile Banner */}
        <Image
          src="/Images/About/sustainable-mobilebanner.webp"
          alt="Teknix sustainability"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.mobileBanner}`}
        />

        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <h1 data-reveal="up">
            SUSTAINABILITY
          </h1>

          <p data-reveal="up">
            A profound sense of responsibility, woven into every product we
            build and every decision we make.
          </p>
        </div>
      </div>
    </section>
  );
}