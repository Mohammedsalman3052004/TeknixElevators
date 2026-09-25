import styles from "./Challenges.module.css";

const challenges = [
  "Dust and particulate contamination",
  "Water spray and moisture exposure",
  "Hazardous or potentially explosive atmospheres",
  "Chemical and corrosive environments",
  "High-temperature or demanding industrial conditions",
  "Heavy-duty and high-frequency usage",
  "Stringent hygiene requirements",
  "Special material requirements",
  "Restricted installation environments",
  "Project-specific safety and certification requirements",
];

export default function Challenges() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div className={styles.headingBlock} data-reveal="up">
          <span className={styles.eyebrow}>THE CHALLENGE</span>

          <h2>
            WHEN A STANDARD
            <br />
            ELEVATOR ISN&apos;T ENOUGH
          </h2>

          <p className={styles.intro}>
            A conventional elevator is generally designed for a controlled
            indoor environment. Specialised industrial applications present
            very different challenges — and simply selecting a higher-capacity
            elevator is not enough.
          </p>
        </div>


        {/* =========================================
            GRID
        ========================================= */}

        <div className={styles.grid}>
          {challenges.map((item, index) => (
            <div
              key={item}
              className={styles.item}
              data-reveal="up"
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <span className={styles.num}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.text}>{item}</span>
            </div>
          ))}
        </div>


        {/* Note */}

        <p className={styles.note} data-reveal="up">
          <strong>The elevator itself needs to be engineered around the environment</strong> in
          which it will operate. Teknix works with consultants, architects,
          industrial clients and project teams to develop the appropriate
          elevator configuration.
        </p>

      </div>
    </section>
  );
}
