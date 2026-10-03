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
          src="/Images/About/service-hero.webp"
          alt="Teknix lift service and maintenance"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.desktopBanner}`}
        />

        {/* Mobile Banner */}
        <Image
          src="/Images/About/service-mobilebanner.webp"
          alt="Teknix lift service and maintenance"
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
              <span data-reveal-line>KEEPING EVERY</span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>JOURNEY RUNNING</span>
            </span>
          </h1>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Proactive service and maintenance plans that keep your
              </span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>
                elevators safe, reliable and running without interruption.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}