"use client";

import Image from "next/image";
import styles from "./Performance.module.css";

const features = [
  {
    title: "Smoother",
    description:
      "Controlled starts and stops designed to create a more refined journey.",
    image: "/Images/Vertix/refine-1.png",
    alt: "Vertix elevator lobby with panoramic city view",
  },
  {
    title: "Quieter",
    description:
      "Technology designed to reduce unwanted vibration and operational noise.",
    image: "/Images/Vertix/refine2.png",
    alt: "Vertix elevator interior with brushed steel finish",
  },
  {
    title: "More Precise",
    description:
      "Accurate levelling and controlled movement from floor to floor.",
    image: "/Images/Vertix/refine-3.png",
    alt: "Vertix elevator beside a floating staircase",
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
        {/* HEADER */}
        <div className={styles.header} data-reveal="up">
          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>REFINED PERFORMANCE</span>
            </span>
          </h2>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>The difference is in how it feels</span>
            </span>
          </p>
        </div>

        {/* THREE FEATURES: image + text together */}
        <div className={styles.features}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className={styles.feature}
              data-reveal="up"
            >
              <div className={styles.featureImage} data-reveal-image>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 650px) 90vw, 260px"
                  className={styles.image}
                />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM SPECIFICATIONS */}
        <div className={styles.specifications}>
          {specifications.map((spec) => (
            <div key={spec.title} className={styles.spec} data-reveal="up">
              <h4>{spec.title}</h4>
              <p>{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}