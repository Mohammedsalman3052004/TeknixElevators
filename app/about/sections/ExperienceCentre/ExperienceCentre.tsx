"use client";

import styles from "./ExperienceCentre.module.css";

export default function ExperienceCentre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div
          className={styles.content}
          data-reveal="left"
        >
          <div className={styles.eyebrow}>
            <span />
            <span>THE EXPERIENCE</span>
          </div>

          <h2>
            SEE THE DIFFERENCE
            <br />
            FOR YOURSELF
          </h2>

          <p>
            Visit the TekniX Experience Centre to experience the
            elevators, explore materials and finishes, compare
            products and step inside different cabin designs.
          </p>
        </div>


        {/* =========================================
            RIGHT MEDIA
        ========================================= */}

        <div
          className={styles.media}
          data-reveal="right"
        >
          <div className={styles.mediaInner}>
            {/* Add image / video here later */}
          </div>
        </div>

      </div>
    </section>
  );
}