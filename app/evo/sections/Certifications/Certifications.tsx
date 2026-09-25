import styles from "./Certifications.module.css";

const standards = [
  "Applicable Indian elevator regulations and standards",
  "Relevant EN elevator standards",
  "IP protection requirements (IP55 / IP65 / custom)",
  "Hazardous-area / explosion-protection requirements",
  "Electrical equipment certifications",
  "Material specifications",
  "Project-specific inspection requirements",
  "Client or consultant specifications",
];

export default function Certifications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            LEFT
        ========================================= */}

        <div className={styles.left} data-reveal="left">
          <span className={styles.eyebrow}>STANDARDS & COMPLIANCE</span>

          <h2>
            ENGINEERING
            <br />
            WITH THE RIGHT
            <br />
            STANDARDS
          </h2>

          <p>
            Special-purpose elevators can involve multiple standards and
            certification requirements depending on the application, country,
            hazardous-area classification and equipment involved. Teknix
            evaluates the applicable requirements during the engineering
            stage — not as an afterthought.
          </p>
        </div>


        {/* =========================================
            RIGHT — LIST
        ========================================= */}

        <div className={styles.right} data-reveal="right">
          <div className={styles.list}>
            {standards.map((item, index) => (
              <div
                key={item}
                className={styles.listItem}
                data-reveal="up"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className={styles.dot} />
                <span className={styles.listText}>{item}</span>
              </div>
            ))}
          </div>
        </div>


        {/* =========================================
            FOOTNOTE
        ========================================= */}

        <p className={styles.footnote} data-reveal="up">
          Where certification is required, the exact certification scope should
          be established based on the specific component, equipment, elevator
          configuration and application. This ensures that the documentation and
          certification correspond to the actual equipment being supplied.
        </p>

      </div>
    </section>
  );
}
