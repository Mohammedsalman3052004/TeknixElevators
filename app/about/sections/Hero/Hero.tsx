"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.imageWrapper} data-reveal-image data-parallax="40">
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

      <div className={styles.content} data-reveal="left">
        <h1 data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>MORE BEHIND</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>EVERY JOURNEY</span>
          </span>
        </h1>

        <p data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>
              Thoughtful engineering. Refined design.
            </span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>Made around the way you move.</span>
          </span>
        </p>
      </div>
    </section>
  );
}
