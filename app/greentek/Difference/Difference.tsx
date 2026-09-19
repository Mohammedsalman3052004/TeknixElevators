"use client";

import Image from "next/image";
import styles from "./Difference.module.css";

const points = [
  "Stability of the cabin",
  "The quietness of the journey.",
  "The smoothness of everyday movement.",
];

const stats = [
  {
    value: "42",
    label: "Max Stops",
  },
  {
    value: "4.0 M/S",
    label: "Max Speed",
  },
  {
    value: "HEAVY DUTY",
    label: "Guide System",
  },
  {
    value: "ADVANCED",
    label: "Rine Refinement",
  },
];

export default function Difference() {
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
          <h2>
            THE DIFFERENCE IS IN
            <br />
            WHAT YOU FEEL
          </h2>

          {/* Points */}

          <div className={styles.points}>
            {points.map((point) => (
              <div
                className={styles.point}
                key={point}
              >
                <span className={styles.dot}>·</span>

                <span>{point}</span>
              </div>
            ))}
          </div>


          {/* Stats */}

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div
                className={styles.stat}
                key={stat.value}
              >
                <strong>{stat.value}</strong>

                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>


        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div
          className={styles.imageWrapper}
          data-reveal="right"
        >
          <Image
            src="/Images/Greentek/greentek-difference.png"
            alt="Greentek elevator interior"
            fill
            sizes="(max-width: 800px) 85vw, 420px"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}