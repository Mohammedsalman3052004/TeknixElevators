"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image with Reveal & Parallax */}
      <div className={styles.background} data-reveal-image data-parallax="40">
        <Image
          src="/Images/About/about-hero.png"
          alt="TekniX Privacy Policy & Data Integrity"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <div className={styles.tagWrapper}>
            <span className={styles.badge}>LEGAL & COMPLIANCE</span>
            <span className={styles.bullet}>•</span>
            <span className={styles.date}>LAST UPDATED: 2026</span>
          </div>

          <h1 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>PRIVACY</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>POLICY</span>
            </span>
          </h1>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Our rigorous commitment to transparency, data protection,
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                and user privacy across our digital and mobile application platforms.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
