"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} data-reveal-image data-parallax="40">
        <Image
          src="/Images/Home/hero.png"
          alt="TekniX sustainability"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <h1 data-reveal="up">SUSTAINABILITY</h1>

          <p data-reveal="up">
            A profound sense of responsibility, woven into every product we
            build and every decision we make.
          </p>
        </div>
      </div>
    </section>
  );
}