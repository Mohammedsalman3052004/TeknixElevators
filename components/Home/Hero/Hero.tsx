import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "@/components/UI/Button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/Images/Home/hero.png"
        alt="TekniX Elevators"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.gradient} />

      <div className={styles.content}>
        <h1 className={styles.heroTitle}>
          ENGINEERED FOR
          <br />
          LIFE IN MOTION
        </h1>

        <p className={styles.description}>
          Thoughtful engineering. Refined design.
          <br />
          Made around the way you move.
        </p>

        <Button name="EXPLORE TEKNIX" href="/about" variant="white" />
      </div>
    </section>
  );
}
