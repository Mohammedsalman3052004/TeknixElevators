"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <div
        className={styles.background}
        data-reveal-image
        data-parallax="40"
      >
        {/* Desktop Banner */}
        <Image
          src="/Images/Hydratek/hero.webp"
          alt="Hydratek elevator"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.desktopBanner}`}
        />

        {/* Mobile Banner */}
        <Image
          src="/Images/Hydratek/mobilebanner.webp"
          alt="Hydratek elevator"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.mobileBanner}`}
        />

        {/* Dark overlay */}
        <div className={styles.overlay} />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <h1 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>WHERE PRECISION</span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>MEETS FLUIDITY</span>
            </span>
          </h1>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Hydratek brings advanced hydraulic technology, refined
              </span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>
                engineering and Italian-inspired craftsmanship together.
              </span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>
                for an exceptionally smooth elevator experience.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}