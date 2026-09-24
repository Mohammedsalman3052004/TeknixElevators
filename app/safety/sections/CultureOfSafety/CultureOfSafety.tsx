import Image from "next/image";
import styles from "./CultureOfSafety.module.css";

export default function CultureOfSafety() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper} data-reveal-image data-parallax="30">
          <Image
            src="/Images/Home/elevator-1.png"
            alt="TekniX elevator passengers"
            fill
            sizes="(max-width: 900px) 90vw, 380px"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 data-reveal="up">BUILDING A CULTURE OF SAFETY</h2>

          <p data-reveal="up">
            At TEKNIX, safety is our foremost commitment. Since our
            inception, the principle of &lsquo;People First&rsquo; has been
            the cornerstone of our philosophy, guiding us to lead the
            industry in safety standards. This unwavering dedication
            remains unchanged. What will continue to evolve is the
            sophistication of the technologies we harness, constantly
            enhancing both your safety and the luxurious experience of
            every ride.
          </p>

          <blockquote className={styles.quote} data-reveal="up">
            Our focus on protecting and caring for people has made Teknix a
            leader in safety.
          </blockquote>

          <p data-reveal="up">
            We want to provide freedom to move in a personal, sustainable
            and safe way. We do this by putting your needs first — using
            the best available technology to serve you, inventing new
            technology where none already exists and combining
            technologies to deliver new
          </p>
        </div>
      </div>
    </section>
  );
}