import Image from "next/image";
import styles from "./ShaftOptions.module.css";

export default function ShaftOptions() {
  return (
    <section className={styles.section} id="shaft-options">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>VERSATILE CONFIGURATIONS</span>
          <h2 className={styles.title}>
            DESIGNED TO FIT YOUR SPACE.<br />YOUR ARCHITECTURE
          </h2>
        </div>

        <div className={styles.comparisonWrapper}>
          {/* Card 1: Existing Shaft */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/Images/Evo/shaft-3d.png"
                alt="3D isometric cutaway diagram of Teknix EVO installed in an existing concrete shaft"
                width={220}
                height={380}
                className={styles.shaftImg}
                priority={false}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>EXISTING SHAFT</h3>
              <p className={styles.cardDesc}>
                For RCC, concrete and masonry shafts. Ideal for existing villas,
                renovation projects, and homes with a pre-defined elevator hoistway.
              </p>
              <div className={styles.availableLabel}>COMPATIBILITY</div>
              <ul className={styles.featureList}>
                <li>Masonry / Concrete Hoistways</li>
                <li>Retrofit & Historic Renovations</li>
                <li>Zero Machine Room Overhead</li>
              </ul>
            </div>
          </div>

          {/* OR Badge */}
          <div className={styles.orBadge}>
            <span>OR</span>
          </div>

          {/* Card 2: EVO Profile Shaft */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/Images/Evo/cabin-structure.png"
                alt="Teknix EVO self-supporting panoramic glass and architectural metal profile shaft"
                width={220}
                height={380}
                className={styles.shaftImg}
                priority={false}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>EVO PROFILE SHAFT</h3>
              <p className={styles.cardDesc}>
                A complete self-supporting elevator and architectural glass
                shaft solution requiring no pre-existing civil masonry work.
              </p>
              <div className={styles.availableLabel}>AVAILABLE IN:</div>
              <ul className={styles.featureList}>
                <li>ALUMINIUM PROFILE</li>
                <li>COLD ROLLED STEEL PROFILE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
