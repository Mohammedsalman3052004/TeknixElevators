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
          src="/Images/VillaMatek/hero.png"
          alt="Villa Matek elevator"
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
              <span data-reveal-line>WHERE ELEGANCE</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>MOVES WITH YOU</span>
            </span>
          </h1>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                A residential elevator designed to become part of your home
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                — combining refined design, gearless technology and a
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                choice of cabin styles.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
