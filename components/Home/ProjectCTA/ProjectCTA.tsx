import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import styles from "./ProjectCTA.module.css";

export default function ProjectCTA() {
  return (
    <section className={styles.cta} data-reveal="up">
      {/* Decorative vertical lines */}
      <div className={styles.verticalLineLeft} />
      <div className={styles.verticalLineRight} />

      <div className={styles.content}>
        {/* Eyebrow */}
        <div className={styles.eyebrow} data-reveal="up">
          <span className={styles.line} />
          <span>BEGIN THE CONVERSATION</span>
          <span className={styles.line} />
        </div>

        {/* Heading */}
        {/* Heading */}
        <h2 className={styles.title} data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>LET'S BUILD WHAT</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>MATTERS.</span>
          </span>
        </h2>

        {/* Description */}
        <p className={styles.description} data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>Tell us what you're building.</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>
              We'll help you find the right way to move through it.
            </span>
          </span>
        </p>

        {/* Button */}
        <Button
          data-reveal="up"
          name="DISCUSS YOUR PROJECT"
          href="/contact"
          variant="white"
        />

        {/* Secondary link */}
        <Link href="/contact" className={styles.contactLink} data-reveal="up">
          CONTACT TEKNIX
        </Link>
      </div>
    </section>
  );
}
