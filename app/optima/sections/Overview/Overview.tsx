"use client";

import Image from "next/image";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className={styles.content} data-reveal="left">

          <h2>
            MADE FOR
            <br />
            WHAT MATTERS
          </h2>

          <div className={styles.description}>
            <p>
              Optima brings the essential elements of a modern
              TekniX elevator into a refined and practical solution.
            </p>

            <p>
              Designed for low-rise buildings, it combines gearless
              technology, thoughtful engineering and selected
              design options around the requirements of everyday
              movement.
            </p>
          </div>

        </div>


        {/* =========================================
            IMAGE AREA
        ========================================= */}

        <div className={styles.visual}>

          {/* Main Image */}

          <div
            className={styles.imageWrapper}
            data-reveal="up"
          >
            <Image
              src="/Images/Optima/optima-overview.png"
              alt="Optima elevator"
              fill
              sizes="(max-width: 650px) 80vw, 320px"
              className={styles.image}
            />
          </div>


          {/* =====================================
              TOP LEFT
          ===================================== */}

          <div
            className={`${styles.spec} ${styles.topLeft}`}
            data-reveal="left"
          >
            <span>Upto</span>
            <strong>9 STOPS</strong>

            <span className={styles.line} />
          </div>


          {/* =====================================
              BOTTOM LEFT
          ===================================== */}

          <div
            className={`${styles.spec} ${styles.bottomLeft}`}
            data-reveal="left"
          >
            <span>Gearless</span>
            <strong>TECHNOLOGY</strong>

            <span className={styles.line} />
          </div>


          {/* =====================================
              TOP RIGHT
          ===================================== */}

          <div
            className={`${styles.spec} ${styles.topRight}`}
            data-reveal="right"
          >
            <span>Upto</span>
            <strong>1.5 M/S</strong>

            <span className={styles.line} />
          </div>


          {/* =====================================
              BOTTOM RIGHT
          ===================================== */}

          <div
            className={`${styles.spec} ${styles.bottomRight}`}
            data-reveal="right"
          >
            <span>Teknix</span>
            <strong>ENGINEERING</strong>

            <span className={styles.line} />
          </div>

        </div>

      </div>
    </section>
  );
}