import Image from "next/image";
import styles from "./Journey.module.css";

export default function Journey() {
  return (
    <section className={styles.journey}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.content}>

          <div className={styles.eyebrow}>
            <span className={styles.line} />
            <span>MORE THAN MOVEMENT.</span>
          </div>

          <h2 className={styles.title}>
            EVERY JOURNEY
            <br />
            CARRIES
            <br />
            SOMETHING
            <br />
            THAT MATTERS
          </h2>

          <p className={styles.description}>
            From the first step to the last floor, every journey is
            <br className={styles.desktopBreak} />
            part of something bigger.
          </p>

        </div>


        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/Images/Home/journey.png"
            alt="Family using a TekniX elevator"
            fill
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}