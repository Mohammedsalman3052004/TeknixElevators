"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} data-reveal-image data-parallax="40">
        <Image
          src="/Images/Home/hero.png"
          alt="TekniX safety"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
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
                TekniX elevator is engineered around, from day one.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}