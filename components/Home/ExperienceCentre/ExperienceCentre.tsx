"use client";

import { useEffect, useRef } from "react";
import styles from "./ExperienceCentre.module.css";
import Button from "@/components/UI/Button/Button";

export default function ExperienceCentre() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React doesn't always render the `muted` attribute, which blocks
  // autoplay on iOS/Safari. Setting it manually fixes that.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});
  }, []);

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

        {/* RIGHT VIDEO */}
        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="60"
        >
          <video
            ref={videoRef}
            className={`${styles.image} ${styles.active}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/Images/Home/experience-1.png"
            aria-label="Teknix Experience Centre"
          >
            <source src="/Videos/Home/experience.webm" type="video/webm" />
            <source src="/Videos/Home/experience.mp4" type="video/mp4" />
          </video>

          {/* GRADIENT OVERLAY */}
          <div className={styles.gradient}></div>
        </div>
      </div>
    </section>
  );
}