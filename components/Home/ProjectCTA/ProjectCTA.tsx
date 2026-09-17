import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import styles from "./ProjectCTA.module.css";

export default function ProjectCTA() {
  return (
    <section className={styles.cta} data-reveal>
      {/* Decorative vertical lines */}
      <div className={styles.verticalLineLeft} />
      <div className={styles.verticalLineRight} />

      <div className={styles.content}>
        {/* Eyebrow */}
        <div className={styles.eyebrow} data-reveal>
          <span className={styles.line} />
          <span>BEGIN THE CONVERSATION</span>
          <span className={styles.line} />
        </div>

        {/* Heading */}
        <h2 className={styles.title} data-reveal>
          LET’S BUILD
          <br />
          WHAT
          <br />
          MATTERS.
        </h2>

        {/* Description */}
        <p className={styles.description} data-reveal>
          Tell us what you're building.
          <br />
          We'll help you find the right way to move through it.
        </p>

        {/* Button */}
        <Button
          data-reveal
          name="DISCUSS YOUR PROJECT"
          href="/contact"
          variant="white"
        />

        {/* Secondary link */}
        <Link href="/contact" className={styles.contactLink} data-reveal>
          CONTACT TEKNIX
        </Link>
      </div>
    </section>
  );
}
