import { overview } from "../../content";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {overview.paragraphs.map((paragraph, index) => (
          <p key={index} data-reveal="up">
            {paragraph}
          </p>
        ))}

        <p className={styles.statement} data-reveal="up">
          {overview.statement}
        </p>

        {overview.closingParagraphs.map((paragraph, index) => (
          <p key={index} data-reveal="up">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}