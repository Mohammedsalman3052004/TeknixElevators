import Image from "next/image";
import styles from "./Flexibility.module.css";

export default function Flexibility() {
  return (
    <section className={styles.section} aria-labelledby="flexibility-title">
      <h2 id="flexibility-title" className={styles.heading}>
        FLEXIBILITY AT ITS HEART
      </h2>

      {/* Scrolls sideways on small screens so the drawings stay readable */}
      <div
        className={styles.scroller}
        role="region"
        aria-label="Car size and capacity options"
        tabIndex={0}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/Images/VillaMatek/flexibility-layouts.png"
            alt="Plan view of four car sizes: 850x660 180kg/2 persons, 950x810 250kg/3 persons, 1050x860 300kg/4 persons and 1150x960 400kg/5 persons"
            fill
            sizes="(max-width: 768px) 760px, (max-width: 1440px) 90vw, 1300px"
            className={styles.image}
          />
        </div>
      </div>

      <p className={styles.hint} aria-hidden="true">
        Swipe to see all sizes
      </p>
    </section>
  );
}