"use client";

import styles from "./ProductSpecifications.module.css";

const specifications = [
  {
    type: "TYPE",
    value: "MRL / MMR",
    description: "Machine Room-Less",
    icon: "type",
  },
  {
    type: "CAPACITY",
    value: "408 – 1632 KG",
    description: "6 – 16 Persons",
    icon: "capacity",
  },
  {
    type: "SPEED",
    value: "1–3 MPS",
    description: "Metres per second",
    icon: "speed",
  },
  {
    type: "LANDINGS",
    value: "2 – 30",
    description: "Floors",
    icon: "landings",
  },
  {
    type: "DRIVE",
    value: "GEARLESS PMSM",
    description: "Frequency Controlled",
    icon: "drive",
  },
  {
    type: "OPERATION",
    value: "FULL COLLECTIVE",
    description: "Selective",
    icon: "operation",
  },
  {
    type: "DOOR WIDTH",
    value: "700 / 800 / 900 / 1000 / 1200 MM",
    description: "Clear opening",
    icon: "door",
  },
  {
    type: "DOOR HEIGHT",
    value: "2100–2400 MM",
    description: "Standard clear height",
    icon: "height",
  },
];

function SpecificationIcon({ type }: { type: string }) {
  switch (type) {
    case "type":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 21V5h10v16" />
          <path d="M4 21h16" />
          <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
        </svg>
      );

    case "capacity":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="7" width="14" height="13" rx="1" />
          <path d="M8 7V4h8v3" />
          <path d="M9 11h6M12 9v4" />
        </svg>
      );

    case "speed":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 16a7 7 0 1 1 14 0" />
          <path d="M12 13l4-4" />
          <path d="M12 17v.01" />
        </svg>
      );

    case "landings":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4v16M17 4v16" />
          <path d="M4 7h6M4 11h6M4 15h6M14 7h6M14 11h6M14 15h6" />
        </svg>
      );

    case "drive":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5v3M12 16v3M5 12h3M16 12h3" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );

    case "operation":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M9 8h6M9 12h2M13 12h2M9 16h2M13 16h2" />
        </svg>
      );

    case "door":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" />
          <path d="M12 4v16M9 12h.01M15 12h.01" />
        </svg>
      );

    case "height":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14M5 8l3-3 3 3M5 16l3 3 3-3" />
          <path d="M14 5h5M14 19h5" />
        </svg>
      );

    default:
      return null;
  }
}

export default function ProductSpecifications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className={styles.header}
          data-reveal="up"
        >
          <h2>
            FOR EVERYTHING THAT MATTERS
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
          {specifications.map((spec, index) => (
            <div
              className={styles.card}
              key={spec.type}
              style={{
                transitionDelay: `${index * 40}ms`,
              }}
            >

              <div className={styles.icon}>
                <SpecificationIcon type={spec.icon} />
              </div>

              <span className={styles.label}>
                {spec.type}
              </span>

              <h3>
                {spec.value}
              </h3>

              <p>
                {spec.description}
              </p>

              <span className={styles.cardLine} />

            </div>
          ))}
        </div>


        {/* =========================================
            BROCHURE LINK
        ========================================= */}

        <a
          href="/brochures/vertix-brochure.pdf"
          className={styles.brochure}
        >
          <span>DOWNLOAD VERTIX BROCHURE</span>

          <span className={styles.brochureArrow}>
            →
          </span>
        </a>

      </div>
    </section>
  );
}