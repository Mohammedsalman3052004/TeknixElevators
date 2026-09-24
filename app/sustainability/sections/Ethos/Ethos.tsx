import Image from "next/image";
import { ethos, closingStatement } from "../../content";
import styles from "./Ethos.module.css";

export default function Ethos() {
  return (
    <section className={styles.section}>
      <div
        className={styles.banner}
        data-reveal-image
        data-parallax="40"
      >
        <Image
          src="/Images/Vertix/vertix-hero.png"
          alt="TekniX sustainability in practice"
          fill
          sizes="100vw"
          className={styles.bannerImage}
        />
      </div>

      <div className={styles.container}>
        {ethos.map((paragraph, index) => (
          <p key={index} className={styles.paragraph} data-reveal="up">
            {paragraph}
          </p>
        ))}

        <p className={styles.closing} data-reveal="up">
          {closingStatement}
        </p>
      </div>
    </section>
  );
}