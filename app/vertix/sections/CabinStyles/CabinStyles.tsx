"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CabinStyles.module.css";

const cabinStyles = [
  {
    id: "modern",
    name: "Modern",
    desc: "Advanced machine-room-less design with gearless technology, delivering efficient performance while maximizing usable space.",
    image: "/Images/Evo/cabin-interior.webp",
  },
  {
    id: "signature",
    name: "Signature",
    desc: "State-of-the-art control technology with direct landing and self-diagnostic systems for precise and reliable operation.",
    image: "/Images/Evo/cabin-signature.webp",
  },
  {
    id: "noire",
    name: "Noire",
    desc: "Servo PMSM technology with precise rotary-encoder leveling for a smooth, silent and comfortable ride.",
    image: "/Images/Evo/cabin-noir.webp",
  },
  {
    id: "vittoria",
    name: "Vittoria",
    desc: "Advanced safety systems including anti-squeeze doors, dual disc brakes and automatic rescue functionality for enhanced passenger protection.",
    image: "/Images/Evo/cabin-vittoria.webp",
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
          <span className={styles.eyebrow}>YOUR VERTIX. YOUR STYLE.</span>
          <h2 className={styles.title}>STEP INTO YOUR STYLE</h2>
        </div>

        <div className={styles.showcaseWrapper}>
          {/* Left: Style Selector */}
          <div className={styles.stylesList}>
            {cabinStyles.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={activeIndex === idx}
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

          {/* Right: Cabin Images (all stacked, active one fades in) */}
          <div className={styles.imageContainer}>
            {cabinStyles.map((item, idx) => (
              <Image
                key={item.id}
                src={item.image}
                alt={`Teknix EVO ${item.name} Luxury Interior Finish`}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                priority={idx === 0}
                aria-hidden={activeIndex !== idx}
                className={`${styles.cabinImg} ${
                  activeIndex === idx ? styles.cabinImgActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}