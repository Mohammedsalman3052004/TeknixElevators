import { certification } from "../../content";
import styles from "./Certification.module.css";

export default function Certification() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label} data-reveal="up">
            {certification.heading}
          </span>

          <h2 data-reveal="up">{certification.subheading}</h2>

          {certification.intro.map((paragraph, index) => (
            <p key={index} data-reveal="up">
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.grid}>
          {certification.items.map((item) => (
            <div className={styles.item} key={item} data-reveal="up">
              <span className={styles.bullet} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className={styles.closing} data-reveal="up">
          {certification.closing}
        </p>
      </div>
    </section>
  );
}