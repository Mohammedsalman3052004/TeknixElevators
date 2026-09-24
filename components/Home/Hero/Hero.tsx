"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Hero.module.css";
import Button from "@/components/UI/Button/Button";
import { revealLines } from "@/components/Animations/Animations";
import FillButton from "@/components/UI/FillButton/Fillbutton";

export default function Hero() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const title = titleRef.current;
    const description = descRef.current;
    const button = buttonRef.current;

    if (!wrapper) return;

    /*
    =========================================
    INITIAL HERO STATE
    =========================================

    IMPORTANT:

    Hide the text immediately.

    Previously this was happening inside
    revealLines(), which was called only after
    the image animation finished.

    That caused the text to appear first,
    then animate again.
    */

    const titleLines =
      title?.querySelectorAll<HTMLElement>("[data-reveal-line]");

    const descriptionLines =
      description?.querySelectorAll<HTMLElement>("[data-reveal-line]");

    if (titleLines?.length) {
      gsap.set(titleLines, {
        yPercent: 100,
        opacity: 0,
      });
    }

    if (descriptionLines?.length) {
      gsap.set(descriptionLines, {
        yPercent: 100,
        opacity: 0,
      });
    }

    /*
    =========================================
    BUTTON INITIAL STATE
    =========================================
    */

    if (button) {
      gsap.set(button, {
        y: 30,
        opacity: 0,
      });
    }

    /*
    =========================================
    IMAGE FINISHED
    =========================================
    */

    const onImageDone = () => {

      /*
      -----------------------------------------
      TITLE
      -----------------------------------------
      */

      revealLines(title, {
        stagger: 0.12,
      });


      /*
      -----------------------------------------
      DESCRIPTION
      -----------------------------------------
      */

      revealLines(description, {
        delay: 0.15,
        stagger: 0.1,
      });


      /*
      -----------------------------------------
      BUTTON
      -----------------------------------------
      */

      if (button) {
        gsap.to(button, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        });
      }
    };


    /*
    =========================================
    LISTEN FOR IMAGE COMPLETION
    =========================================
    */

    wrapper.addEventListener(
      "reveal-image-complete",
      onImageDone
    );


    /*
    =========================================
    CLEANUP
    =========================================
    */

    return () => {
      wrapper.removeEventListener(
        "reveal-image-complete",
        onImageDone
      );

      gsap.killTweensOf([
        titleLines,
        descriptionLines,
        button,
      ]);
    };
  }, []);

  return (
    <section className={styles.hero}>

      {/* =====================================
          HERO IMAGE
      ===================================== */}

      <div
        ref={imageWrapperRef}
        className={styles.heroImageWrapper}
        data-reveal-image
        data-parallax="40"
      >
        <Image
          src="/Images/Home/hero.png"
          alt="TekniX Elevators"
          fill
          priority
          className={styles.heroImage}
        />
      </div>


      {/* =====================================
          GRADIENT
      ===================================== */}

      <div className={styles.gradient} />


      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <div className={styles.content}>

        {/* TITLE */}

        <h1
          className={styles.heroTitle}
          ref={titleRef}
        >
          <span className={styles.lineMask}>
            <span
              className={styles.line}
              data-reveal-line
            >
              ENGINEERED FOR
            </span>
          </span>

          <span className={styles.lineMask}>
            <span
              className={styles.line}
              data-reveal-line
            >
              LIFE IN MOTION
            </span>
          </span>
        </h1>


        {/* DESCRIPTION */}

        <p
          className={styles.description}
          ref={descRef}
        >
          <span className={styles.lineMask}>
            <span
              className={styles.line}
              data-reveal-line
            >
              Thoughtful engineering. Refined design.
            </span>
          </span>

          <span className={styles.lineMask}>
            <span
              className={styles.line}
              data-reveal-line
            >
              Made around the way you move.
            </span>
          </span>
        </p>


        {/* BUTTON */}

        <div ref={buttonRef} >
          <FillButton href="/companies">Explore Our Companies</FillButton>
        </div>

      </div>

    </section>
  );
}