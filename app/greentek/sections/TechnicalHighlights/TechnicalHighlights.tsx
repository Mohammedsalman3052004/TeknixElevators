"use client";

import Image from "next/image";
import styles from "./TechnicalHighlights.module.css";

const highlights = [
  {
    number: "01",
    title: "HEAVY DUTY GUIDE RAILS",
    description: "Greater support and ride stability",
  },
  {
    number: "02",
    title: "SORBOTANE GUIDE TECHNOLOGY",
    description: "Designed to reduce unwanted vibration",
  },
  {
    number: "03",
    title: "ADVANCED DAMPING",
    description: "Designed to reduce unwanted noise and movement",
  },
  {
    number: "04",
    title: "CONTINUOUS AUTOMATIC LUBRICATION",
    description: "Designed to support consistently smooth movement",
  },
];

export default function TechnicalHighlights() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            IMAGE
        ========================================= */}

        <div className={styles.media} data-reveal-image data-parallax="40">
          <Image
            src="/Images/Greentek/greentek-details.png"
            alt="Greentek elevator engineering"
            fill
            sizes="(max-width: 800px) 88vw, 420px"
            className={styles.image}
          />
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className={styles.content} data-reveal="right">
          <header className={styles.header}>
            <h2 data-reveal-lines>
              <span data-reveal-line-mask>
                <span data-reveal-line>THE DETAILS GO DEEPER</span>
              </span>
            </h2>

            <p data-reveal-lines>
              <span data-reveal-line-mask>
                <span data-reveal-line>
                  Every journey may only take a few seconds.
                </span>
              </span>
            </p>
          </header>

          {/* =====================================
              TECHNICAL HIGHLIGHTS
          ===================================== */}

          <div className={styles.highlights}>
            {highlights.map((item) => (
              <div
                key={item.number}
                className={styles.highlight}
                data-reveal="up"
              >
                <span className={styles.number}>{item.number}</span>

                <div className={styles.highlightContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className={styles.arrow}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
