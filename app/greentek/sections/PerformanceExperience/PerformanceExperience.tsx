"use client";

import Image from "next/image";
import styles from "./PerformanceExperience.module.css";

const features = [
  {
    title: "SMOOTHER",
    description:
      "Controlled acceleration and stopping designed for a refined journey.",
  },
  {
    title: "QUIETER",
    description:
      "Vibration control and damping technologies designed to reduce unwanted noise.",
  },
  {
    title: "MORE STABLE",
    description:
      "Heavy-duty engineering designed to support a more stable elevator journey.",
  },
];

export default function PerformanceExperience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div
          className={styles.content}
          data-reveal="left"
        >
          <h2>REFINED IN MOTION</h2>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${styles.feature} ${
                  index === 2 ? styles.featureLast : ""
                }`}
              >
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div
          className={styles.visual}
          data-reveal="right"
        >
          <Image
            src="/Images/Greentek/greentek-performance.jpg"
            alt="Greentek elevator technician"
            fill
            sizes="(max-width: 768px) 88vw, 500px"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}