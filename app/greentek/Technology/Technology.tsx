"use client";

import Image from "next/image";
import styles from "./Technology.module.css";

const features = [
  "SPATIAL EFFICIENCY TECHNOLOGY",
  "PERFORMANCE MAXIMIZATION SYSTEM",
  "INTELLIGENT CONTROL MECHANISM",
  "IOT-ENHANCED MICROCONTROLLER",
  "PRECISION LEVELING ENGINE",
  "RELIABILITY ENHANCEMENT TECHNOLOGY",
  "AEROSPACE-GRADE SAFETY CIRCUIT",
  "WHISPER-QUIET OPERATION SYSTEM",
  "RAPID PROCESSING ENGINE",
  "ULTRA-SMOOTH RIDE TECHNOLOGY",
  "DIRECT ADAPTIVE LANDING INTERFACE",
  "CLOSED-LOOP DRIVE INTEGRATION",
  "VIBRATION ISOLATION SYSTEM",
  "CONTINUOUS LUBRICATION TECHNOLOGY",
  "FLUIDIC DOOR OPERATION SYSTEM",
];

export default function Technology() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <h2
          className={styles.heading}
          data-reveal="up"
        >
          WHERE EVERYTHING THAT MATTERS
        </h2>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className={styles.content}>

          {/* =======================================
              IMAGE
          ======================================= */}

          <div
            className={styles.imageWrapper}
            data-reveal="left"
          >
            <Image
              src="/Images/Greentek/technology.png"
              alt="Vertix elevator technology"
              fill
              priority={false}
              sizes="
                (max-width: 650px) 88vw,
                (max-width: 1000px) 70vw,
                500px
              "
              className={styles.image}
            />
          </div>


          {/* =======================================
              FEATURE LIST
          ======================================= */}

          <div
            className={styles.features}
            data-reveal="right"
          >
            {features.map((feature, index) => (
              <div
                className={styles.feature}
                key={feature}
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.featureName}>
                  {feature}
                </span>

                <span className={styles.arrow}>
                  ↗
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}