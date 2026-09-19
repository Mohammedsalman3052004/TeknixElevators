"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <div className={styles.background}>
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

        <div
          className={styles.content}
          data-reveal="left"
        >

          <h1>
            MADE TO
            <br />
            BECOME YOURS
          </h1>

          <p>
            A refined gearless elevator combining performance,
            material quality and greater freedom in design.
          </p>

        </div>

      </div>

    </section>
  );
}