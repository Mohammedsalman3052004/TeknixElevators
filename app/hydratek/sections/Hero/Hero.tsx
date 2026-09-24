"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <div className={styles.background} data-reveal-image data-parallax="40">
        <Image
          src="/Images/Vertix/vertix-hero.png"
          alt="Vertix elevator"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
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
              <span data-reveal-line>MADE TO</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>BECOME YOURS</span>
            </span>
          </h1>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                A refined gearless elevator combining performance,
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                material quality and greater freedom in design.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
