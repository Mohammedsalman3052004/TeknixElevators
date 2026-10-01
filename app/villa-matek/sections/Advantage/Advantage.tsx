import Image from "next/image";
import styles from "./Advantage.module.css";

export default function Advantage() {
  return (
    <section className={styles.section} id="advantage">
      <div className={styles.container}>
        {/* Left column: Text & Stats */}
        <div className={styles.left}>
          <span className={styles.eyebrow} data-reveal="up">
            THE VILLA MATEK ADVANTAGE
          </span>
          <h2 className={styles.title} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>MINIMAL CIVIL WORK,</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>ELEVATED LIVING</span>
            </span>
          </h2>
          <p className={styles.description} data-reveal="up">
            Teknix Villa Matek is specially engineered for luxury private residences,
            requiring minimal structural intervention. With an ultra-low 60 mm pit depth
            and compact 2250 mm overhead clearance, it integrates effortlessly into
            existing floors and architecture without compromising ceiling aesthetics.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem} data-reveal="up">
              <div className={styles.statValue}>
                60 <span className={styles.statUnit}>MM</span>
              </div>
              <span className={styles.statLabel}>MINIMUM PIT</span>
            </div>

            <div className={styles.statItem} data-reveal="up">
              <div className={styles.statValue}>
                2250 <span className={styles.statUnit}>MM</span>
              </div>
              <span className={styles.statLabel}>MINIMUM OVERHEAD</span>
            </div>

            <div className={styles.statItem} data-reveal="up">
              <div className={styles.statValue}>
                400 <span className={styles.statUnit}>KG</span>
              </div>
              <span className={styles.statLabel}>MAX CAPACITY</span>
            </div>
          </div>
        </div>

        {/* Right column: Technical Schematic Image */}
        <div className={styles.right} data-reveal-image data-parallax="40">
          <div className={styles.imageWrapper}>
            <Image
              src="/Images/Evo/technical-drawing.png"
              alt="Teknix Villa Matek minimum overhead and pit technical cross-section diagram"
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
