"use client";

import Image from "next/image";
import styles from "./FromIdeaToElevation.module.css";

const cards = [
  {
    image: "/Images/About/engineering.png",
    title: "ENGINEERING",
    subtitle: "Thoughtfully in motion",
  },
  {
    image: "/Images/About/manufacturing.png",
    title: "MANUFACTURING",
    subtitle: "Made with intention",
  },
  {
    image: "/Images/About/technology.png",
    title: "TECHNOLOGY",
    subtitle: "Precision, you can feel",
  },
];

export default function FromIdeaToElevation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div className={styles.intro} data-reveal="up">
          <h2>FROM IDEA TO ELEVATION</h2>

          <p>The difference is in how it feels</p>
        </div>


        {/* =========================================
            CARDS
        ========================================= */}

        <div className={styles.grid}>

          {cards.map((card, index) => (
            <article
              className={styles.card}
              key={card.title}
              data-reveal="up"
            >

              {/* IMAGE */}

              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 700px) 90vw, 30vw"
                  className={styles.image}
                />

                {/* subtle overlay */}
                <div className={styles.imageOverlay} />
              </div>


              {/* CONTENT */}

              <div className={styles.cardContent}>
                <h3>{card.title}</h3>

                <p>{card.subtitle}</p>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}