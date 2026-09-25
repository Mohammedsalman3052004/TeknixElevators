"use client";

import { useEffect, useState } from "react";
import styles from "./ThoughtInMotion.module.css";

const images = [
  "/Images/Home/thought-1.png",
  // "/Images/Home/thought-2.jpg",
  // "/Images/Home/thought-3.jpg",
  // "/Images/Home/thought-4.jpg",
];

const links = [
  {
    name: "ENGINEERING",
    href: "/",
  },
  {
    name: "MANUFACTURING",
    href: "/",
  },
  {
    name: "TECHNOLOGY",
    href: "/",
  },
];

export default function ThoughtInMotion() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
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
            <img
              key={image}
              src={image}
              alt="TekniX elevator engineering"
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
            Every Teknix elevator begins with a considered
            <br />
            approach to engineering, materials, technology and
            <br />
            the environment it will inhabit.
          </p>

          {/* Links */}
          <div className={styles.links}>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.link}
                data-reveal="up"
              >
                <span className={styles.linkText}>{link.name}</span>

                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
