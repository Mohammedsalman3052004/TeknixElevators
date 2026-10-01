"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ThoughtInMotion.module.css";

const images = [
  "/Images/Home/thought.webp",
  // "/Images/Home/thought-2.jpg",
  // "/Images/Home/thought-3.jpg",
  // "/Images/Home/thought-4.jpg",
];

const links = ["ENGINEERING", "MANUFACTURING", "TECHNOLOGY"];

export default function ThoughtInMotion() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =====================================
            LEFT IMAGE SLIDER
        ===================================== */}

        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="60"
        >
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt="Teknix elevator engineering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              className={`${styles.image} ${
                index === activeImage ? styles.active : ""
              }`}
            />
          ))}

          {/* Gradient overlay */}
          <div className={styles.gradient}></div>
        </div>

        {/* =====================================
            RIGHT CONTENT
        ===================================== */}

        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.eyebrowLine}></span>

            <span>BEHIND EVERY JOURNEY</span>
          </div>

          {/* Heading */}
          <h2 className={styles.title} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>THOUGHT.</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>IN MOTION</span>
            </span>
          </h2>

          {/* Description */}
          <p className={styles.description} data-reveal="up">
            Every Teknix elevator begins with a considered approach to
            engineering, materials, technology and the environment it will
            inhabit.
          </p>

          {/* Labels (not clickable) */}
          <ul className={styles.links}>
            {links.map((name) => (
              <li key={name} className={styles.link} data-reveal="up">
                <span className={styles.linkText}>{name}</span>

                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}