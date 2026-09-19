"use client";

import Image from "next/image";
import styles from "./Performance.module.css";

const features = [
  {
    title: "Smoother",
    description:
      "Controlled starts and stops designed to create a more refined journey.",
  },
  {
    title: "Quieter",
    description:
      "Technology designed to reduce unwanted vibration and operational noise.",
  },
  {
    title: "More Precise",
    description:
      "Accurate levelling and controlled movement from floor to floor.",
  },
];

const specifications = [
  {
    title: "SERVO PERMANENT MAGNET MOTOR",
    description: "Smooth starts and controlled movement.",
  },
  {
    title: "PRECISE LEVELLING",
    description: "Rotary encoder technology for accurate floor alignment.",
  },
  {
    title: "ADVANCED DRIVE TECHNOLOGY",
    description: "Controlled acceleration and smooth stops.",
  },
  {
    title: "PMS DOOR MOTOR",
    description: "Efficient and controlled door operation.",
  },
  {
    title: "SORBOTANE GUIDES",
    description: "Designed to reduce vibration and improve ride comfort.",
  },
];

export default function Performance() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADER
        ========================================= */}

        <div className={styles.header} data-reveal="up">
          <h2>REFINED PERFORMANCE</h2>

          <p>The difference is in how it feels</p>
        </div>


        {/* =========================================
            SINGLE CENTER IMAGE
        ========================================= */}

        <div
          className={styles.imageWrapper}
          data-reveal="up"
        >
          <Image
            src="/Images/Vertix/performance.png"
            alt="Vertix refined performance"
            fill
            sizes="(max-width: 650px) 90vw, 70vw"
            className={styles.image}
          />
        </div>


        {/* =========================================
            THREE MAIN FEATURES
        ========================================= */}

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={styles.feature}
              data-reveal="up"
            >
              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>


        {/* =========================================
            BOTTOM SPECIFICATIONS
        ========================================= */}

        <div className={styles.specifications}>
          {specifications.map((spec) => (
            <div
              key={spec.title}
              className={styles.spec}
              data-reveal="up"
            >
              <h4>{spec.title}</h4>

              <p>{spec.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}