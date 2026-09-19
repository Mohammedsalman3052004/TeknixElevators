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

          {/* -----------------------------------------
              IMAGE
          ----------------------------------------- */}

          <div
            className={styles.imageWrapper}
            data-reveal="left"
          >
            <Image
              src="/Images/Vertix/vertix-technology.png"
              alt="Vertix elevator technology"
              fill
              sizes="(max-width: 900px) 80vw, 390px"
              className={styles.image}
            />
          </div>


          {/* -----------------------------------------
              FEATURE LIST
          ----------------------------------------- */}

          <div className={styles.featureList}>

            {features.map((feature, index) => (
              <div
                key={feature}
                className={styles.feature}
                data-reveal="right"
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.featureText}>
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