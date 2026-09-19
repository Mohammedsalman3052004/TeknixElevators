"use client";

import styles from "./Specifications.module.css";

const specifications = [
  {
    label: "TYPE",
    value: "MRL / MMR",
    sub: "Machine Room-Less",
    icon: "type",
  },
  {
    label: "CAPACITY",
    value: "408 – 1020 KG",
    sub: "6 – 15 Persons",
    icon: "capacity",
  },
  {
    label: "SPEED",
    value: "1–1.5 MPS",
    sub: "Metres per second",
    icon: "speed",
  },
  {
    label: "LANDINGS",
    value: "2 – 15",
    sub: "Floors",
    icon: "landings",
  },
  {
    label: "DRIVE",
    value: "GEARLESS PMSM",
    sub: "Frequency Controlled",
    icon: "drive",
  },
  {
    label: "OPERATION",
    value: "FULL COLLECTIVE",
    sub: "Selective",
    icon: "operation",
  },
  {
    label: "DOOR WIDTH",
    value: "700 / 800 / 900 MM",
    sub: "Clear opening",
    icon: "width",
  },
  {
    label: "DOOR HEIGHT",
    value: "2000 MM",
    sub: "Standard clear height",
    icon: "height",
  },
];

export default function Specifications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADER
        ========================================= */}

        <div className={styles.header} data-reveal="up">
          <h2>
            WHERE TECHNOLOGY MEETS COMFORT.
          </h2>

          <p>
            A refined gearless elevator solution designed around the
            <br className={styles.desktopBreak} />
            requirements of modern low-rise buildings.
          </p>
        </div>


        {/* =========================================
            SPECIFICATION GRID
        ========================================= */}

        <div
          className={styles.grid}
          data-reveal="up"
        >
          {specifications.map((item, index) => (
            <div
              className={styles.card}
              key={item.label}
              style={{
                "--index": index,
              } as React.CSSProperties}
            >

              {/* Icon */}

              <div className={styles.icon}>
                <span className={`${styles.iconShape} ${styles[item.icon]}`} />
              </div>


              {/* Content */}

              <div className={styles.cardContent}>
                <span className={styles.label}>
                  {item.label}
                </span>

                <h3>
                  {item.value}
                </h3>

                <p>
                  {item.sub}
                </p>
              </div>


              {/* Small bottom line */}

              <span className={styles.smallLine} />

            </div>
          ))}
        </div>


        {/* =========================================
            DOWNLOAD
        ========================================= */}

        <a
          href="/documents/vertix-brochure.pdf"
          className={styles.download}
          data-reveal="up"
        >
          <span>DOWNLOAD VERTIX BROCHURE</span>

          <span className={styles.arrow}>
            →
          </span>
        </a>

      </div>
    </section>
  );
}