"use client";

import Image from "next/image";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
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
            <span className={styles.eyebrowLine} />
            <span>THE PHILOSOPHY</span>
          </div>

          <h2>
            MORE THAN
            <br />
            MOVEMENT
          </h2>

          <div className={styles.description}>
            <p className={styles.intro}>
              An elevator does more than move between floors
            </p>

            <p>
              At TekniX, we believe every journey deserves
              thoughtful consideration - from the engineering
              behind the system to the experience inside the cabin.
            </p>
          </div>
        </div>


        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div
          className={styles.visual}
          data-reveal="right"
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/Images/About/philosophy.png"
              alt="TekniX elevator cabin"
              fill
              sizes="
                (max-width: 700px) 88vw,
                42vw
              "
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}