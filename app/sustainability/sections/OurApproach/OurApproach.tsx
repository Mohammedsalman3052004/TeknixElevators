import Image from "next/image";
import { ourApproach } from "../../content";
import styles from "./OurApproach.module.css";

export default function OurApproach() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content} data-reveal="left">
          <span className={styles.label} data-reveal="up">
            OUR APPROACH
          </span>

          <h2 data-reveal="up">A Responsibility We Build Into Every Ride</h2>

          {ourApproach.map((paragraph, index) => (
            <p key={index} data-reveal="up">
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="30"
        >
          <Image
            src="/Images/Home/elevator-1.png"
            alt="TekniX sustainable engineering"
            fill
            sizes="(max-width: 900px) 100vw, 420px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}