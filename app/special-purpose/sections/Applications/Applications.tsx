import Image from "next/image";
import { applications } from "../../content";
import styles from "./Applications.module.css";

export default function Applications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label} data-reveal="up">
            APPLICATIONS
          </span>
          <h2 data-reveal="up">
            ONE ENGINEERING APPROACH. MULTIPLE INDUSTRIES.
          </h2>
        </div>

        <div className={styles.grid}>
          {applications.map((item) => (
            <div className={styles.tile} key={item.name} data-reveal="up">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 700px) 45vw, 22vw"
                className={styles.tileImage}
              />
              <div className={styles.tileOverlay} />
              <span className={styles.tileName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}