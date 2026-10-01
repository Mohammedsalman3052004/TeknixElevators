import Image from "next/image";
import styles from "./ExperienceCentre.module.css";
import Button from "@/components/UI/Button/Button";

export default function ExperienceCentre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.line}></span>
            <span>EXPERIENCE CENTRE</span>
          </div>

          <h2 className={styles.title} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>SEE IT. FEEL IT.</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>EXPERIENCE</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>Teknix</span>
            </span>
          </h2>

          <p className={styles.description} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>Explore our elevators, finishes and</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>possibilities in person</span>
            </span>
          </p>

          <Button
            data-reveal="up"
            name="VISIT THE EXPERIENCE CENTRE"
            href="/contact"
            variant="black"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="60"
        >
          <Image
            src="/Images/Home/experiance.png"
            alt="Teknix Experience Centre"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={`${styles.image} ${styles.active}`}
          />

          {/* GRADIENT OVERLAY */}
          <div className={styles.gradient}></div>
        </div>
      </div>
    </section>
  );
}