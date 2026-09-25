import Image from "next/image";
import styles from "./Lifestyle.module.css";

export default function Lifestyle() {
  return (
    <section className={styles.section} id="lifestyle">
      <div className={styles.container}>
        {/* Left Column: Image */}
        <div className={styles.imageCol}>
          <Image
            src="/Images/Evo/lifestyle.png"
            alt="Family enjoying the seamless accessibility of Teknix EVO home elevator"
            width={760}
            height={520}
            className={styles.lifestyleImg}
            priority={false}
          />
        </div>

        {/* Right Column: Content */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>BUILT AROUND YOUR HOME</span>
          <h2 className={styles.title}>
            MORE POSSIBILITIES<br />LESS SPACE REQUIRED
          </h2>
          <p className={styles.introText}>
            EVO is engineered to integrate naturally into your architecture —
            not dominate it. Every detail is calibrated for silent operation,
            refined luxury, and effortless daily movement.
          </p>

          <div className={styles.pillarsList}>
            <div className={styles.pillarItem}>
              <div className={styles.pillarTitle}>
                COMPACT BY <span className={styles.pillarHighlight}>DESIGN</span>
              </div>
              <p className={styles.pillarDesc}>
                More Elevator, Less Footprint. Maximizes usable interior space with minimal architectural alterations.
              </p>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarTitle}>
                LOWER <span className={styles.pillarHighlight}>POWER</span>
              </div>
              <p className={styles.pillarDesc}>
                More performance, less energy. High-efficiency gearless belt drive operates on standard residential power supply.
              </p>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarTitle}>
                DESIGNED TO <span className={styles.pillarHighlight}>BELONG</span>
              </div>
              <p className={styles.pillarDesc}>
                Choose between an existing concrete/masonry shaft or a self-supporting EVO profile glass shaft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
