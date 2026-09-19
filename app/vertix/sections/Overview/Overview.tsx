"use client";

import styles from "./Overview.module.css";

const specifications = [
  {
    title: (
      <>
        304 GRADE
        <br />
        STAINLESS STEEL
      </>
    ),
    description:
      "Polished material quality with a durable architectural finish.",
  },
  {
    title: (
      <>
        UP TO
        <br />
        20 STOPS
      </>
    ),
    description:
      "Capacity for buildings requiring greater travel.",
  },
  {
    title: (
      <>
        UP TO
        <br />
        2.0 M/S
      </>
    ),
    description:
      "Higher speed capability for a more efficient journey.",
  },
  {
    title: (
      <>
        EXTENSIVE
        <br />
        CUSTOMISATION
      </>
    ),
    description:
      "More freedom across materials, finishes and interior details.",
  },
];

export default function Overview() {
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
          MORE FREEDOM TO CREATE
        </h2>


        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <p
          className={styles.intro}
          data-reveal="up"
        >
          Every building has its own character. Vertix is designed to give
          you greater freedom to shape the elevator around it. With
          higher-grade materials, increased performance capability and
          extensive design possibilities, Vertix brings together
          technology and flexibility in one refined product.
        </p>


        {/* =========================================
            SPECIFICATIONS
        ========================================= */}

        <div className={styles.specifications}>
          {specifications.map((item, index) => (
            <div
              className={styles.spec}
              key={index}
              data-reveal="up"
            >
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}