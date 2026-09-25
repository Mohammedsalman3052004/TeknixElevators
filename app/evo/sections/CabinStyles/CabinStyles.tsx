"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CabinStyles.module.css";

const cabinStyles = [
  {
    id: "modern",
    name: "Modern",
    desc: "Brushed stainless steel, flush architectural seams, honed natural marble floor, and perimeter cove lighting.",
  },
  {
    id: "signature",
    name: "Signature",
    desc: "Warm champagne bronze accents, fine textured architectural walls, and bespoke minimalist push buttons.",
  },
  {
    id: "noir",
    name: "Noir",
    desc: "Matte obsidian steel panels, dark smoked mirror rear wall, and focused recessed warm micro-downlights.",
  },
  {
    id: "victoria",
    name: "Victoria",
    desc: "Polished classical trims, rich architectural moldings, and opulent luxury stone appointments.",
  },
];

export default function CabinStyles() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevStyle = () => {
    setActiveIndex((prev) => (prev === 0 ? cabinStyles.length - 1 : prev - 1));
  };

  const nextStyle = () => {
    setActiveIndex((prev) => (prev === cabinStyles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.section} id="cabin-styles">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>YOUR EVO. YOUR EXPRESSION.</span>
          <h2 className={styles.title}>STEP INSIDE YOUR STYLE</h2>
        </div>

        <div className={styles.showcaseWrapper}>
          {/* Left: Style Selector */}
          <div className={styles.stylesList}>
            {cabinStyles.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.styleBtn} ${
                  activeIndex === idx ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className={styles.styleName}>{item.name}</span>
                <span className={styles.styleDescription}>{item.desc}</span>
              </button>
            ))}

            <div className={styles.controlsRow}>
              <button
                type="button"
                aria-label="Previous Style"
                className={styles.arrowBtn}
                onClick={prevStyle}
              >
                ↑
              </button>
              <button
                type="button"
                aria-label="Next Style"
                className={styles.arrowBtn}
                onClick={nextStyle}
              >
                ↓
              </button>
            </div>
          </div>

          {/* Right: Cabin Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/Images/Evo/cabin-interior.png"
              alt={`Teknix EVO ${cabinStyles[activeIndex].name} Luxury Interior Finish`}
              width={780}
              height={520}
              className={styles.cabinImg}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
