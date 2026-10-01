"use client";

import Image from "next/image";
import styles from "./Difference.module.css";

const points = [
  "The compactness of the footprint.",
  "The quietness of the journey.",
  "The smoothness of every start and stop.",
];

const stats = [
  {
    value: "50%",
    label: "Smaller Footprint",
  },
  {
    value: "30%",
    label: "Less Construction Space",
  },
  {
    value: "5 PERSONS",
    label: "Max Capacity",
  },
  {
    value: "BELT DRIVE",
    label: "Traction System",
  },
];

export default function Difference() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className={styles.content}>
          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>THE DIFFERENCE IS IN</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>WHAT YOU FEEL</span>
            </span>
          </h2>

          {/* Points */}

          <div className={styles.points}>
            {points.map((point) => (
              <div className={styles.point} key={point} data-reveal="up">
                <span className={styles.dot}>·</span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Stats */}

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.value} data-reveal="up">
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
          data-reveal-image
          data-parallax="40"
        >
          <Image
            src="/Images/Villamatek/villamatek-difference.png"
            alt="Villamatek home elevator interior"
            fill
            sizes="(max-width: 800px) 85vw, 420px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}