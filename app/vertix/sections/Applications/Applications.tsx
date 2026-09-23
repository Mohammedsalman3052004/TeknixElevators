"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Applications.module.css";

const categories = [
  {
    id: "residential",
    label: "RESIDENTIAL",
    image: "/Images/Vertix/residential.png",
    description:
      "An architecture-first approach for premium residences where every detail is curated.",
  },
  {
    id: "hospitality",
    label: "HOSPITALITY",
    image: "/Images/Vertix/residential.png",
    description:
      "Designed to create a refined arrival experience where comfort and movement come together.",
  },
  {
    id: "commercial",
    label: "COMMERCIAL",
    image: "/Images/Vertix/residential.png",
    description:
      "Reliable vertical transportation designed around the demands of modern commercial spaces.",
  },
  {
    id: "premium",
    label: "PREMIUM DEVELOPMENTS",
    image: "/Images/Vertix/residential.png",
    description:
      "Elevator solutions that complement distinctive architecture and premium developments.",
  },
];

export default function Applications() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = categories[activeIndex];

  return (
    <section className={styles.section}>
      {/* =========================================
          HEADER
      ========================================= */}

      <div className={styles.header} data-reveal="up">
        <h2 data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>MORE THAN A STANDARD</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>ELEVATOR</span>
          </span>
        </h2>

        <p data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>
              Vertix is designed to offer more possibilities — more freedom in
              finishes, more
            </span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>
              flexibility in design, more capability for different types of
              buildings.
            </span>
          </span>
        </p>
      </div>

      {/* =========================================
          CATEGORY NAVIGATION
      ========================================= */}

      <div className={styles.categories} data-reveal="up">
        {categories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            className={`${styles.category} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* =========================================
          IMAGE AREA
      ========================================= */}

      <div className={styles.imageSection}>
        <div className={styles.imageWrapper} data-reveal-image data-parallax="40">
          {/* IMAGE */}

          <Image
            key={activeCategory.image}
            src={activeCategory.image}
            alt={activeCategory.label}
            fill
            sizes="100vw"
            className={styles.image}
            priority={activeIndex === 0}
          />

          {/* DARK GRADIENT */}

          <div className={styles.gradient} />

          {/* =====================================
              BOTTOM LEFT TEXT
          ===================================== */}

          <div key={activeCategory.id} className={styles.imageContent}>
            <p>{activeCategory.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
