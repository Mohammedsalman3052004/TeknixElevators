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
          src="/Images/special-purpose/hero.webp"
          alt="Teknix special purpose elevators"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.desktopBanner}`}
        />

        {/* Mobile Banner */}
        <Image
          src="/Images/special-purpose/mobilebanner.webp"
          alt="Teknix special purpose elevators"
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
              <span data-reveal-line>ENGINEERED FOR</span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>BEYOND THE ORDINARY</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}