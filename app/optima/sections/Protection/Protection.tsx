"use client";

import Image from "next/image";
import styles from "./Protection.module.css";

const features = [
  "CONTROL SYSTEM",
  "GEARLESS DRIVE",
  "CURVE GENERATION",
  "DOOR OPERATOR",
  "DOOR PROTECTION",
  "HUMAN INTERFACE",
  "OPERATION",
  "DIRECTION INDICATORS",
  "CALL CANCELLATION",
  "AUTO ON / OFF",
  "OVERSPEED PROTECTION",
  "AUTOMATIC RESCUE",
  "CAR ILLUMINATION",
  "CAR VENTILATION",
  "POWER SUPPLY",
  "PHASE LOSS PROTECTION",
  "OVER-RUN PROTECTION",
];

export default function Protection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div
          className={styles.heading}
          data-reveal="up"
        >
          <h2>
            INTELLIGENT CONTROL.
            <br />
            REFINED MOVEMENT.
            <br />
            THOUGHTFUL PROTECTION.
          </h2>
        </div>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className={styles.content}>

          {/* IMAGE */}

          <div
            className={styles.imageWrapper}
            data-reveal="left"
          >
            <Image
              src="/Images/Optima/optima-protection.jpg"
              alt="Optima elevator shaft"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className={styles.image}
            />
          </div>


          {/* FEATURE LIST */}

          <div
            className={styles.featureList}
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