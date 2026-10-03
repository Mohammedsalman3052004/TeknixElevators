"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className={styles.background}
        data-reveal-image
        data-parallax="40"
      >

        {/* Desktop Banner */}
        <Image
          src="/Images/About/corporatehero.webp"
          alt="Teknix corporate profile"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.desktopBanner}`}
        />

        {/* Mobile Banner */}
        <Image
          src="/Images/About/corp-mobilebanner.webp"
          alt="Teknix corporate profile"
          fill
          priority
          sizes="100vw"
          className={`${styles.backgroundImage} ${styles.mobileBanner}`}
        />

        <div className={styles.overlay} />

      </div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className={styles.container}>

        <div
          className={styles.content}
          data-reveal="left"
        >

          <h1 data-reveal="up">
            WE TEKNIX
          </h1>

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