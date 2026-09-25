import styles from "./Intro.module.css";

const stats = [
  { value: "6",      label: "SOLUTION CATEGORIES" },
  { value: "14+",    label: "INDUSTRY SECTORS"     },
  { value: "CUSTOM", label: "ENGINEERED PER PROJECT" },
];

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            LEFT — STICKY HEADING
        ========================================= */}

        <div className={styles.left} data-reveal="left">
          <span className={styles.eyebrow}>OVERVIEW</span>

          <div data-reveal-lines>
            <h2>
              <span data-reveal-line>BEYOND</span>
              <span data-reveal-line>STANDARD.</span>
              <span data-reveal-line className={styles.accent}>
                BY DESIGN.
              </span>
            </h2>
          </div>
        </div>


        {/* =========================================
            RIGHT — CONTENT
        ========================================= */}

        <div className={styles.right}>

          <p data-reveal="up">
            Not every elevator operates in a conventional building. Industrial
            plants, chemical facilities, manufacturing units, warehouses,
            pharmaceutical facilities, food-processing plants and other
            specialised environments can demand elevator systems that go
            far beyond standard passenger or goods transportation.
          </p>

          <p data-reveal="up">
            <strong>Teknix Special Purpose Elevators</strong> are engineered
            around the environment, application and safety requirements of the
            project — from explosion-risk areas and high-dust environments to
            applications requiring enhanced ingress protection, specialised
            materials or project-specific certifications.
          </p>

          <p data-reveal="up">
            Our approach combines elevator engineering, application-specific
            design, carefully selected components and controlled manufacturing
            to create solutions tailored to the requirements of each installation.
          </p>


          {/* Stat Strip */}

          <div className={styles.statStrip}>
            {stats.map((s) => (
              <div
                key={s.label}
                className={styles.stat}
                data-reveal="up"
              >
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
