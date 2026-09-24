"use client";

import Image from "next/image";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className={styles.content} data-reveal="left">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>THE PHILOSOPHY</span>
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>MORE THAN</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>MOVEMENT</span>
            </span>
          </h2>
          <div className={styles.description}>
            <p className={styles.intro} data-reveal-lines>
              <span data-reveal-line-mask>
                <span data-reveal-line>
                  An elevator does more than move between floors
                </span>
              </span>
            </p>

            <p data-reveal-lines>
              <span data-reveal-line-mask>
                <span data-reveal-line>
                  At TekniX, we believe every journey deserves
                </span>
              </span>
              <span data-reveal-line-mask>
                <span data-reveal-line>
                  thoughtful consideration - from the engineering
                </span>
              </span>
              <span data-reveal-line-mask>
                <span data-reveal-line>
                  behind the system to the experience inside the cabin.
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div className={styles.visual} data-reveal-image data-parallax="40">
          <div className={styles.imageWrapper}>
            <Image
              src="/Images/About/philosophy.png"
              alt="TekniX elevator cabin"
              fill
              sizes="
                (max-width: 700px) 88vw,
                42vw
              "
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
