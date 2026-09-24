"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* =========================================
          HERO IMAGE
      ========================================= */}

      <div className={styles.imageWrapper} data-reveal-image data-parallax="40">
        <Image
          src="/Images/Greentek/greentek-hero.png"
          alt="Greentek elevator"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>

      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className={styles.overlay} />

      {/* =========================================
          PAGE LABEL
      ========================================= */}

      {/* <div className={styles.pageLabel}>
        Greentek
      </div> */}

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className={styles.content}>
        <div className={styles.headingWrap}>
          <h1 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>WHEN EVERY DETAIL</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>GOES FURTHER</span>
            </span>
          </h1>
        </div>

        <div className={styles.description}>
          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                An advanced elevator engineered for greater
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                performance, refined movement, and the demands of
              </span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>premium buildings.</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
