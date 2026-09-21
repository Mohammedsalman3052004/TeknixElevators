"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Background Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/Images/About/about-hero.png"
          alt="TekniX elevator interior"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.overlay} />
      </div>


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div
        className={styles.content}
        data-reveal="left"
      >
        <h1>
          MORE BEHIND
          <br />
          EVERY JOURNEY
        </h1>

        <p>
          Thoughtful engineering. Refined design.
          <br />
          Made around the way you move.
        </p>
      </div>

    </section>
  );
}