import Image from "next/image";
import styles from "./SpecsExploded.module.css";

const specsData = [
  { label: "Rated Speed", value: "0.20 m/s" },
  { label: "Drive Power", value: "1.2 / 1.7 kW" },
  { label: "Maximum Stops", value: "6 Stops" },
  { label: "Capacity Options", value: "408 / 612 kg" },
  { label: "Power Supply", value: "Single Phase" },
  { label: "Minimum Pit", value: "300 mm" },
];

export default function SpecsExploded() {
  return (
    <section className={styles.section} id="specifications">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Images/Evo/specs-exploded.png"
            alt="Teknix EVO exploded technical components diagram and specifications"
            width={1297}
            height={591}
            className={styles.explodedImg}
            priority={false}
          />
        </div>

        {/* Quick Specs Scannable Strip */}
        <div className={styles.specsGrid}>
          {specsData.map((s) => (
            <div key={s.label} className={styles.specItem}>
              <span className={styles.specLabel}>{s.label}</span>
              <span className={styles.specValue}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
