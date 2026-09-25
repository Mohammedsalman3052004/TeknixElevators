import Image from "next/image";
import styles from "./Advantage.module.css";

export default function Advantage() {
  return (
    <section className={styles.section} id="advantage">
      <div className={styles.container}>
        {/* Left column: Text & Stats */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>THE EVO ADVANTAGE</span>
          <h2 className={styles.title}>
            COMPACT ENGINEERING,<br />ELEVATED LIVING
          </h2>
          <p className={styles.description}>
            Teknix EVO is designed to bring the convenience of an elevator into
            homes with limited space—combining compact belt-drive technology,
            ultra-low power consumption, and refined architectural aesthetics.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                300 <span className={styles.statUnit}>MM</span>
              </div>
              <span className={styles.statLabel}>MINIMUM PIT</span>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statValue}>
                3200 <span className={styles.statUnit}>MM</span>
              </div>
              <span className={styles.statLabel}>MINIMUM OVERHEAD</span>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statValue}>
                1.2 <span className={styles.statUnit}>KW</span>
              </div>
              <span className={styles.statLabel}>DRIVE POWER</span>
            </div>
          </div>
        </div>

        {/* Right column: Technical Schematic Image */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Images/Evo/technical-drawing.png"
              alt="Teknix EVO minimum overhead and pit technical cross-section diagram"
              width={420}
              height={580}
              className={styles.schematicImage}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
