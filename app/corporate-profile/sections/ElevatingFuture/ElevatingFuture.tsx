import { elevatingFuture } from "../../content";
import styles from "./ElevatingFuture.module.css";

export default function ElevatingFuture() {
  const { heading, intro, blocks, closing } = elevatingFuture;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-reveal="up">
          {heading}
        </h2>

        <p className={styles.intro} data-reveal="up">
          {intro}
        </p>

        <div className={styles.blocks}>
          {blocks.map((block) => (
            <div className={styles.block} key={block.heading} data-reveal="up">
              <h3>{block.heading}</h3>
              <p>{block.paragraph}</p>

              {block.bullets && (
                <ul className={styles.bullets}>
                  {block.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className={styles.closing} data-reveal="up">
          {closing}
        </p>
      </div>
    </section>
  );
}