"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Customization.module.css";

const slides = [
  {
    image: "/Images/Optima/optima-custom-1.png",
    // label: "STANDARD CONFIGURATION",
  },
  // {
  //   image: "/Images/Optima/optima-custom-2.jpg",
  //   label: "GLASS DOOR",
  // },
  // {
  //   image: "/Images/Optima/optima-custom-3.jpg",
  //   label: "TOUCH SCREEN",
  // },
  // {
  //   image: "/Images/Optima/optima-custom-4.jpg",
  //   label: "ROSE GOLD CABIN",
  // },
];

const options = [
  {
    type: "INCLUDED",
    title: "STANDARD CONFIGURATION",
    description:
      "Stainless steel finish with clean lines and a considered cabin layout.",
  },
  {
    type: "UPGRADE OPTION",
    title: "GLASS DOOR",
    description: "",
  },
  {
    type: "UPGRADE OPTION",
    title: "TOUCH SCREEN",
    description: "",
  },
  {
    type: "PREMIUM FINISH",
    title: "ROSE GOLD CABIN",
    description: "",
  },
];

export default function Customization() {
  const [activeSlide, setActiveSlide] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  /*
   * =========================================
   * AUTO SLIDER
   * =========================================
   */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  /*
   * =========================================
   * GSAP SLIDE ANIMATION
   * =========================================
   */

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const image = imageRef.current;
      const text = textRef.current;

      gsap.fromTo(
        image,
        {
          opacity: 0,
          scale: 1.025,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.25,
          ease: "power3.out",
        },
      );
    });

    return () => ctx.revert();
  }, [activeSlide]);

  /*
   * =========================================
   * IMAGE HOVER
   * =========================================
   */

  const handleMouseEnter = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current.querySelector("img"), {
      scale: 1.035,
      duration: 1,
      ease: "power3.out",
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 6,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current.querySelector("img"), {
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            LEFT IMAGE SLIDER
        ========================================= */}

        <div
          className={styles.visual}
          data-reveal="left"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.imageWrapper}>
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                ref={index === activeSlide ? imageRef : null}
                className={`${styles.slide} ${
                  index === activeSlide ? styles.active : ""
                }`}
                data-reveal-image
                data-parallax="40"
              >
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  sizes="
                    (max-width: 650px) 100vw,
                    (max-width: 1000px) 80vw,
                    520px
                  "
                  className={styles.image}
                />
              </div>
            ))}

            {/* Bottom-left image label */}

            <div ref={textRef} className={styles.imageLabel}>
              <span>INCLUDED</span>

              <strong>{slides[activeSlide].label}</strong>
            </div>
          </div>

          {/* Slider indicators */}

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show image ${index + 1}`}
                className={`${styles.dot} ${
                  index === activeSlide ? styles.activeDot : ""
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* =========================================
            RIGHT CONTENT
        ========================================= */}

        <div className={styles.content} data-reveal="right">
          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>MAKE IT YOUR OWN.</span>
            </span>
          </h2>

          <p className={styles.intro} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>
                Optima offers selected upgrade options to personalise the
                elevator around your project.
              </span>
            </span>
          </p>

          {/* =====================================
              OPTIONS
          ===================================== */}

          <div className={styles.options}>
            {options.map((option, index) => (
              <div
                key={option.title}
                className={styles.option}
                data-reveal="up"
              >
                <div className={styles.optionHeader}>
                  <div>
                    <span className={styles.optionType}>{option.type}</span>

                    <h3>{option.title}</h3>
                  </div>

                  <span className={styles.optionDot} />
                </div>

                {option.description && <p>{option.description}</p>}
              </div>
            ))}
          </div>

          {/* =====================================
              FOOTNOTE
          ===================================== */}

          <p className={styles.note}>
            Options shown are representative. Final configuration subject to
            project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
