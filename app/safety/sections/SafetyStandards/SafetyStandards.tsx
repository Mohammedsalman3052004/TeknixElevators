import styles from "./SafetyStandards.module.css";

export interface SafetyStandardItem {
  title: string;
  description: string;
}

export interface SafetyStandardsProps {
  heading: string;
  items: SafetyStandardItem[];
}

export default function SafetyStandards({ heading, items }: SafetyStandardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-reveal="up">
          {heading}
        </h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div className={styles.item} key={item.title} data-reveal="up">
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