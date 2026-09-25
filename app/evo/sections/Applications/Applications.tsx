import Link from "next/link";
import styles from "./Applications.module.css";

const sectors = [
  "Chemical & Petrochemical",
  "Oil & Gas",
  "Pharmaceutical",
  "Food & Beverage",
  "Manufacturing",
  "Automotive",
  "Warehousing & Logistics",
  "Cement & Minerals",
  "Power & Utilities",
  "Water & Wastewater",
  "Marine & Coastal",
  "Research & Laboratory Facilities",
  "Process Industries",
  "Industrial Buildings",
];

export default function Applications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div className={styles.headingBlock} data-reveal="up">
          <div>
            <span className={styles.eyebrow}>WHERE WE OPERATE</span>
            <h2>
              SECTORS &
              <br />
              APPLICATIONS
            </h2>
          </div>

          <p className={styles.headingNote}>
            Teknix Special Purpose Elevators can be engineered for a wide
            range of industrial and specialised environments.
          </p>
        </div>


        {/* =========================================
            GRID
        ========================================= */}

        <div className={styles.grid}>
          {sectors.map((sector, index) => (
            <div
              key={sector}
              className={styles.card}
              data-reveal="up"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <span className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.cardName}>{sector}</span>
            </div>
          ))}
        </div>


        {/* =========================================
            CTA
        ========================================= */}

        <div className={styles.cta} data-reveal="up">
          <p>Have a specialised project in mind?</p>
          <Link href="/contact" className={styles.ctaLink}>
            DISCUSS YOUR PROJECT
            <span className={styles.ctaArrow}>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
