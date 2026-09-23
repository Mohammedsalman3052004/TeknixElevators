"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* =========================================
          HERO IMAGE
      ========================================= */}

      <div className={styles.imageWrapper}>
        <Image
          src="/Images/Greentek/greentek-hero.png"
          alt="Greentek elevator"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>


      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className={styles.overlay} />


      {/* =========================================
          PAGE LABEL
      ========================================= */}

      {/* <div className={styles.pageLabel}>
        Greentek
      </div> */}


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className={styles.content}>

        <div
          className={styles.headingWrap}
          data-reveal="left"
        >
          <h1>
            WHEN EVERY DETAIL
            <br />
            GOES FURTHER
          </h1>
        </div>


        <div
          className={styles.description}
          data-reveal="left"
        >
          <p>
            An advanced elevator engineered for greater
            performance, refined movement, and the demands of
            premium buildings.
          </p>
        </div>

      </div>

    </section>
  );
}