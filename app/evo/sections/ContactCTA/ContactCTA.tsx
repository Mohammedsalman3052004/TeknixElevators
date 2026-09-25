import Link from "next/link";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.section} id="contact-cta">
      <div className={styles.container}>
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          <span>BEGIN YOUR EVO JOURNEY</span>
          <span className={styles.line} />
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
          ELEVATE YOUR <em>RESIDENCE</em>.
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Whether integrating into an existing villa or creating a bespoke
          architectural shaft for new construction, our engineering team provides
          custom hoistway layout calculations, 3D BIM integration, and finish consultations.
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.btnPrimary}>
            DISCUSS YOUR PROJECT →
          </Link>
          <Link href="/experience-centre" className={styles.btnSecondary}>
            VISIT EXPERIENCE CENTRE
          </Link>
        </div>
      </div>
    </section>
  );
}
