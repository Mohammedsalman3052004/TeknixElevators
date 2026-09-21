"use client";

import Image from "next/image";
import styles from "./ThoughtfulByDesign.module.css";

const features = [
  {
    number: "01",
    title: "ENGINEERING",
    subtitle: "Performance & Safety",
  },
  {
    number: "02",
    title: "MATERIALS",
    subtitle: "Durability & Quality",
  },
  {
    number: "03",
    title: "TECHNOLOGY",
    subtitle: "Smarter for Operation",
  },
  {
    number: "04",
    title: "DESIGN",
    subtitle: "Timeless Integration",
  },
];

export default function ThoughtfulByDesign() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div className={styles.intro} data-reveal="up">
          <h2>THOUGHTFUL BY DESIGN</h2>

          <p>
            Every TekniX elevator begins with a
            <br />
            considered approach to :
          </p>
        </div>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className={styles.content}>

          {/* IMAGE */}

          <div
            className={styles.imageArea}
            data-reveal="left"
          >
            <div className={styles.imageGlow} />

            <div className={styles.imageWrapper}>
              <Image
                src="/Images/About/thoughtful-by-design.png"
                alt="TekniX elevator engineering"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className={styles.image}
              />
            </div>
          </div>


          {/* =====================================
              FEATURE LIST
          ===================================== */}

          <div className={styles.features} data-reveal="right">

            {features.map((feature) => (
              <div
                className={styles.feature}
                key={feature.number}
              >

                <div className={styles.featureContent}>

                  <span className={styles.number}>
                    {feature.number}
                  </span>

                  <div className={styles.text}>
                    <h3>{feature.title}</h3>

                    <p>{feature.subtitle}</p>
                  </div>

                </div>


                {/* ARROW */}

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