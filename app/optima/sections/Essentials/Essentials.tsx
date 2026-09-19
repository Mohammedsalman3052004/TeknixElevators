"use client";

import Link from "next/link";
import styles from "./Essentials.module.css";

const specifications = [
  {
    icon: "type",
    label: "TYPE",
    value: "MRL / MMR",
    sub: "Machine Room-Less",
  },
  {
    icon: "capacity",
    label: "CAPACITY",
    value: "408 – 884 KG",
    sub: "6 – 13 Persons",
  },
  {
    icon: "speed",
    label: "SPEED",
    value: "1 MPS",
    sub: "Metres per second",
  },
  {
    icon: "landings",
    label: "LANDINGS",
    value: "2 – 10",
    sub: "Floors",
  },
  {
    icon: "drive",
    label: "DRIVE",
    value: "GEARLESS PMSM",
    sub: "Frequency Controlled",
  },
  {
    icon: "operation",
    label: "OPERATION",
    value: "FULL COLLECTIVE",
    sub: "Selective",
  },
  {
    icon: "door",
    label: "DOOR WIDTH",
    value: "700 / 800 / 900 MM",
    sub: "Clear opening",
  },
  {
    icon: "height",
    label: "DOOR HEIGHT",
    value: "2000 MM",
    sub: "Standard clear height",
  },
];

function SpecIcon({ type }: { type: string }) {
  switch (type) {
    case "type":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 20V4h10v16" />
          <path d="M4 20h16" />
          <path d="M9 8h6M9 12h6M9 16h6" />
        </svg>
      );

    case "capacity":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="7" width="12" height="13" rx="1" />
          <path d="M9 7V4h6v3M9 11h6M9 15h6" />
        </svg>
      );

    case "speed":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 16a7 7 0 1 1 14 0" />
          <path d="M12 16l4-5" />
          <path d="M12 5v2" />
        </svg>
      );

    case "landings":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4v16M18 4v16M6 7h12M6 12h12M6 17h12" />
        </svg>
      );

    case "drive":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
      );

    case "operation":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="6" height="16" />
          <rect x="13" y="4" width="6" height="16" />
          <path d="M8 8h.01M8 12h.01M16 8h.01M16 12h.01" />
        </svg>
      );

    case "door":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" />
          <path d="M12 4v16M8 8v8M16 8v8" />
        </svg>
      );

    case "height":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="4" width="10" height="16" />
          <path d="M4 7h3M4 12h3M4 17h3M17 7h3M17 12h3M17 17h3" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Essentials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div className={styles.headingBlock} data-reveal="up">
          <h2>
            THE ESSENTIALS.
            <br />
            ENGINEERED WITH PRECISION.
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

        <div className={styles.specGrid}>

          {specifications.map((item, index) => (
            <div
              key={item.label}
              className={styles.specCard}
              data-reveal="up"
              style={{
                transitionDelay: `${index * 40}ms`,
              }}
            >
              <div className={styles.cardInner}>

                <div className={styles.icon}>
                  <SpecIcon type={item.icon} />
                </div>

                <span className={styles.label}>
                  {item.label}
                </span>

                <h3>
                  {item.value}
                </h3>

                <p>
                  {item.sub}
                </p>

                <span className={styles.cardLine} />

              </div>
            </div>
          ))}

        </div>


        {/* =========================================
            BROCHURE
        ========================================= */}

        <Link
          href="/brochure/optima.pdf"
          className={styles.brochure}
          target="_blank"
        >
          <span>DOWNLOAD OPTIMA BROCHURE</span>

          <span className={styles.brochureArrow}>
            →
          </span>
        </Link>

      </div>
    </section>
  );
}