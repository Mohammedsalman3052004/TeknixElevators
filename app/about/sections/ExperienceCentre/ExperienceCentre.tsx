"use client";

import styles from "./ExperienceCentre.module.css";
import Image from "next/image";

export default function ExperienceCentre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className={styles.content} data-reveal="left">
          <div className={styles.eyebrow}>
            <span />
            <span>THE EXPERIENCE</span>
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>SEE THE DIFFERENCE</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>FOR YOURSELF</span>
            </span>
          </h2>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Visit the TekniX Experience Centre to experience the
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                elevators, explore materials and finishes, compare
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                products and step inside different cabin designs.
              </span>
            </span>
          </p>
        </div>

        {/* =========================================
            RIGHT MEDIA
        ========================================= */}

        <div className={styles.media} >
          <div
            className={styles.mediaInner}
            data-reveal-image
            data-parallax="40"
          >
            {/* Add image / video here later */}
            <Image
              src="/Images/About/philosophy.png"
              alt="TekniX elevator cabin"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
