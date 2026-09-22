import Image from "next/image";
import styles from "./Journey.module.css";

export default function Journey() {
  return (
    <section className={styles.journey}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.line} />
            <span>MORE THAN MOVEMENT.</span>
          </div>

          <h2 className={styles.title} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>EVERY JOURNEY</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>CARRIES</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>SOMETHING</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>THAT MATTERS</span>
            </span>
          </h2>

          <p className={styles.description} data-reveal="up">
            From the first step to the last floor, every journey is
            <br className={styles.desktopBreak} />
            part of something bigger.
          </p>
        </div>

        {/* Right Image */}
        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="60"
        >
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
