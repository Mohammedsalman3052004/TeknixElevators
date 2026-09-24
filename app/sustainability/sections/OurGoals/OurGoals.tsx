import { goals } from "../../content";
import styles from "./OurGoals.module.css";

export default function OurGoals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-reveal="up">
          Our Carbon Commitment
        </h2>

        <div className={styles.grid}>
          {goals.map((goal) => (
            <div className={styles.card} key={goal.label} data-reveal="up">
              <span className={styles.label}>{goal.label}</span>
              <h3>{goal.heading}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}