"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { elevators } from "./elevators";
import styles from "./ElevatorSlider.module.css";

export default function ElevatorSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);
  const hasDragged = useRef(false);

  const getCardWidth = () => {
    if (!sliderRef.current) return 0;

    const card = sliderRef.current.querySelector(
      `.${styles.card}`,
    ) as HTMLElement | null;

    return card?.offsetWidth ?? 0;
  };

  const getGap = () => {
    if (!sliderRef.current) return 0;

    const stylesComputed = window.getComputedStyle(sliderRef.current);
    return parseFloat(stylesComputed.gap) || 0;
  };

  const goToSlide = (index: number) => {
    const total = elevators.length;

    const newIndex = Math.max(0, Math.min(index, total - 1));

    const cardWidth = getCardWidth();
    const gap = getGap();

    sliderRef.current?.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: "smooth",
    });

    setActiveIndex(newIndex);
  };

  const previousSlide = () => {
    goToSlide(activeIndex - 1);
  };

  const nextSlide = () => {
    goToSlide(activeIndex + 1);
  };

  /*
   * Mouse / Touch dragging
   */
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    setIsDragging(true);

    startX.current = e.clientX;
    currentX.current = e.clientX;
    hasDragged.current = false;

    sliderRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    currentX.current = e.clientX;

    const distance = currentX.current - startX.current;

    if (Math.abs(distance) > 5) {
      hasDragged.current = true;
    }

    sliderRef.current.scrollLeft -= distance;

    startX.current = currentX.current;
  };

  const handlePointerUp = () => {
    if (!sliderRef.current) return;

    setIsDragging(false);

    if (!hasDragged.current) return;

    const cardWidth = getCardWidth();
    const gap = getGap();

    if (!cardWidth) return;

    const position = sliderRef.current.scrollLeft;

    const index = Math.round(position / (cardWidth + gap));

    goToSlide(index);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headingWrapper}>
          <span className={styles.eyebrow}>THE ELEVATORS</span>

          <h2>
            DESIGNED FOR
            <br />
            DIFFERENT WAYS TO MOVE.
          </h2>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button
            type="button"
            onClick={previousSlide}
            disabled={activeIndex === 0}
            aria-label="Previous elevator"
            className={styles.controlButton}
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            disabled={activeIndex === elevators.length - 1}
            aria-label="Next elevator"
            className={styles.controlButton}
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className={`${styles.slider} ${isDragging ? styles.dragging : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {elevators.map((elevator, index) => (
          <article className={styles.card} key={`${elevator.title}-${index}`}>
            {/* Image */}
            <Image
              src={elevator.image}
              alt={elevator.title}
              fill
              draggable={false}
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 55vw, 36vw"
              className={styles.image}
            />

            {/* Dark gradient */}
            <div className={styles.overlay} />

            {/* Card number */}
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className={styles.cardContent}>
              <div>
                <h3>{elevator.title}</h3>

                <p>{elevator.description}</p>
              </div>

              <Link
                href={elevator.href}
                className={styles.discover}
                onClick={(e) => {
                  if (hasDragged.current) {
                    e.preventDefault();
                  }
                }}
              >
                <span>{elevator.buttonText}</span>
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {elevators.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.dot} ${
              activeIndex === index ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
