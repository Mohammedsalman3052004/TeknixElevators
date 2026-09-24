"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} data-reveal-image data-parallax="40">
        <Image
          src="/Images/Home/hero.png"
          alt="TekniX corporate profile"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <h1 data-reveal="up">WE TEKNIX</h1>

          <p data-reveal="up">
            In a world of ceaseless evolution and urban sophistication, the
            human spirit remains resolute, striving for extraordinary
            aspirations and remarkable achievements.
          </p>
        </div>
      </div>
    </section>
  );
}