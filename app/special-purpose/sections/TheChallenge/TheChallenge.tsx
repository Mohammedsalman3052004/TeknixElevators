import { challengeTags } from "../../content";
import styles from "./TheChallenge.module.css";

export default function TheChallenge() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label} data-reveal="up">
          THE CHALLENGE
        </span>

        <h2 data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>DIFFERENT ENVIRONMENTS.</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>DIFFERENT ENGINEERING.</span>
          </span>
        </h2>

        <div className={styles.tags} data-reveal="up">
          {challengeTags.map((tag, index) => (
            <span key={tag} className={styles.tag}>
              {tag}
              {index < challengeTags.length - 1 && (
                <span className={styles.divider}>—</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}