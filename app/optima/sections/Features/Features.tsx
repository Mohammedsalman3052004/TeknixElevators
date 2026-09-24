"use client";

import Image from "next/image";
import styles from "./Features.module.css";

const features = [
  {
    number: "01",
    title: "SMOOTH STARTS & STOPS",
    description: "Controlled elevator movement for comfort at every floor.",
  },
  {
    number: "02",
    title: "PRECISE LEVELLING",
    description: "Accurate floor alignment, every time.",
  },
  {
    number: "03",
    title: "GEARLESS PERFORMANCE",
    description: "Efficient technology within a compact system footprint.",
  },
  {
    number: "04",
    title: "CONTROLLED DOOR OPERATION",
    description: "Smooth and reliable operation across every cycle.",
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            IMAGE
        ========================================= */}

        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="40"
        >
          <Image
            src="/Images/Optima/optima-features.png"
            alt="Optima elevator"
            fill
            sizes="
              (max-width: 600px) 100vw,
              (max-width: 800px) 80vw,
              520px
            "
            className={styles.image}
          />
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className={styles.content} data-reveal="right">
          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>A SMOOTHER WAY UP.</span>
            </span>
          </h2>

          <p className={styles.intro} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Every journey may only take a few seconds.
              </span>
            </span>
          </p>

          {/* =====================================
              FEATURES
          ===================================== */}

          <div className={styles.features}>
            {features.map((feature) => (
              <div
                key={feature.number}
                className={styles.feature}
                data-reveal="up"
              >
                <div className={styles.featureTop}>
                  <span className={styles.number}>{feature.number}</span>

                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
