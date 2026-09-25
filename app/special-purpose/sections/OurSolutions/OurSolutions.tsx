import { solutions } from "../../content";
import styles from "./OurSolutions.module.css";

export default function OurSolutions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label} data-reveal="up">
            OUR SOLUTIONS
          </span>
          <h2 data-reveal="up">ENGINEERED FOR THE ENVIRONMENT</h2>
        </div>

        <div className={styles.grid}>
          {solutions.map((item, index) => (
            <div className={styles.card} key={item.title} data-reveal="up">
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}