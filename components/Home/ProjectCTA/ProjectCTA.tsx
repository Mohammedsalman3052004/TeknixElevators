import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import styles from "./ProjectCTA.module.css";

export default function ProjectCTA() {
  return (
    <section className={styles.cta}>
      {/* Decorative vertical lines */}
      <div className={styles.verticalLineLeft} />
      <div className={styles.verticalLineRight} />

      <div className={styles.content}>
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          <span>BEGIN THE CONVERSATION</span>
          <span className={styles.line} />
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
          LET’S BUILD
          <br />
          WHAT
          <br />
          MATTERS.
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Tell us what you're building.
          <br />
          We'll help you find the right way to move through it.
        </p>

        {/* Button */}
        <Button
          name="DISCUSS YOUR PROJECT"
          href="/contact"
          variant="white"
        />

        {/* Secondary link */}
        <Link href="/contact" className={styles.contactLink}>
          CONTACT TEKNIX
        </Link>
      </div>
    </section>
  );
}