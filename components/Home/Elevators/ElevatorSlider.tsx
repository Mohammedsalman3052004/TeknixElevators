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

  // Detect whether the current pointer gesture was actually a drag
  const hasDragged = useRef(false);

  // Used to prevent the accidental click generated immediately
  // after finishing a drag
  const lastDragTime = useRef(0);

  /* =========================================
     CARD WIDTH
  ========================================= */

  const getCardWidth = () => {
    if (!sliderRef.current) return 0;

    const card = sliderRef.current.querySelector(
      `.${styles.card}`,
    ) as HTMLElement | null;

    return card?.offsetWidth ?? 0;
  };

  /* =========================================
     GAP
  ========================================= */

  const getGap = () => {
    if (!sliderRef.current) return 0;

    const computedStyles = window.getComputedStyle(
      sliderRef.current,
    );

    return parseFloat(computedStyles.gap) || 0;
  };

  /* =========================================
     GO TO SLIDE
  ========================================= */

  const goToSlide = (index: number) => {
    const total = elevators.length;

    const newIndex = Math.max(
      0,
      Math.min(index, total - 1),
    );

    const cardWidth = getCardWidth();
    const gap = getGap();

    if (!cardWidth) return;

    sliderRef.current?.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: "smooth",
    });

    setActiveIndex(newIndex);
  };

  /* =========================================
     PREVIOUS
  ========================================= */

  const previousSlide = () => {
    goToSlide(activeIndex - 1);
  };

  /* =========================================
     NEXT
  ========================================= */

  const nextSlide = () => {
    goToSlide(activeIndex + 1);
  };

  /* =========================================
     POINTER DOWN
  ========================================= */

  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!sliderRef.current) return;

    /*
     * If the user is pressing directly on a link
     * or button, don't start slider dragging.
     */
    const target = e.target as HTMLElement;

    if (target.closest("a, button")) {
      return;
    }

    setIsDragging(true);

    startX.current = e.clientX;
    currentX.current = e.clientX;

    /*
     * Reset drag state for this new gesture.
     */
    hasDragged.current = false;

    /*
     * Capture pointer so dragging continues even if
     * the pointer moves outside the slider.
     */
    sliderRef.current.setPointerCapture(
      e.pointerId,
    );
  };

  /* =========================================
     POINTER MOVE
  ========================================= */

  const handlePointerMove = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDragging || !sliderRef.current) return;

    currentX.current = e.clientX;

    const distance =
      currentX.current - startX.current;

    /*
     * Only consider it a drag after the pointer
     * actually moves.
     */
    if (Math.abs(distance) > 5) {
      hasDragged.current = true;
    }

    /*
     * Move slider.
     */
    sliderRef.current.scrollLeft -= distance;

    startX.current = currentX.current;
  };

  /* =========================================
     POINTER UP
  ========================================= */

  const handlePointerUp = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!sliderRef.current) return;

    /*
     * Release pointer capture.
     */
    if (
      sliderRef.current.hasPointerCapture(
        e.pointerId,
      )
    ) {
      sliderRef.current.releasePointerCapture(
        e.pointerId,
      );
    }

    setIsDragging(false);

    /*
     * If the user only clicked and didn't drag,
     * don't do anything.
     */
    if (!hasDragged.current) {
      return;
    }

    /*
     * Remember exactly when the drag finished.
     */
    lastDragTime.current = performance.now();

    const cardWidth = getCardWidth();
    const gap = getGap();

    if (!cardWidth) {
      hasDragged.current = false;
      return;
    }

    /*
     * Find the closest card.
     */
    const position =
      sliderRef.current.scrollLeft;

    const index = Math.round(
      position / (cardWidth + gap),
    );

    /*
     * Snap to the closest card.
     */
    goToSlide(index);

    /*
     * IMPORTANT:
     *
     * Reset this immediately.
     *
     * Previously this remained TRUE after dragging,
     * which caused DISCOVER links to stop working.
     */
    hasDragged.current = false;
  };

  /* =========================================
     POINTER CANCEL
  ========================================= */

  const handlePointerCancel = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (
      sliderRef.current?.hasPointerCapture(
        e.pointerId,
      )
    ) {
      sliderRef.current.releasePointerCapture(
        e.pointerId,
      );
    }

    setIsDragging(false);

    hasDragged.current = false;
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <section className={styles.section}>

      {/* =====================================
          HEADER
      ===================================== */}

      <div className={styles.header}>

        <div className={styles.headingWrapper}>

          <span
            className={styles.eyebrow}
            data-reveal="up"
          >
            THE ELEVATORS
          </span>

          <h2 data-reveal-lines>

            <span data-reveal-line-mask>
              <span data-reveal-line>
                DESIGNED FOR
              </span>
            </span>

            <span data-reveal-line-mask>
              <span data-reveal-line>
                DIFFERENT WAYS TO MOVE.
              </span>
            </span>

          </h2>

        </div>

        {/* =================================
            CONTROLS
        ================================= */}

        <div
          className={styles.controls}
          data-reveal="up"
        >

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
            disabled={
              activeIndex === elevators.length - 1
            }
            aria-label="Next elevator"
            className={styles.controlButton}
          >
            →
          </button>

        </div>

      </div>

      {/* =====================================
          SLIDER
      ===================================== */}

      <div
        ref={sliderRef}
        className={`${styles.slider} ${
          isDragging ? styles.dragging : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >

        {elevators.map((elevator, index) => (

          <article
            className={styles.card}
            key={`${elevator.title}-${index}`}
            data-reveal="up"
          >

            {/* =================================
                IMAGE
            ================================= */}

            <Image
              src={elevator.image}
              alt={elevator.title}
              fill
              draggable={false}
              sizes="
                (max-width: 768px) 85vw,
                (max-width: 1200px) 55vw,
                36vw
              "
              className={styles.image}
            />

            {/* =================================
                DARK GRADIENT
            ================================= */}

            <div className={styles.overlay} />

            {/* =================================
                CARD NUMBER
            ================================= */}

            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* =================================
                CARD CONTENT
            ================================= */}

            <div className={styles.cardContent}>

              <div>

                <h3>
                  {elevator.title}
                </h3>

                <p>
                  {elevator.description}
                </p>

              </div>

              {/* =================================
                  DISCOVER BUTTON
              ================================= */}

              <Link
                href={elevator.href}
                className={styles.discover}

                /*
                 * VERY IMPORTANT:
                 *
                 * Don't allow the slider itself to
                 * start dragging when pressing the
                 * Discover button.
                 */
                onPointerDown={(e) => {
                  e.stopPropagation();
                }}

                onClick={(e) => {
                  /*
                   * A pointer release immediately after
                   * dragging can sometimes generate a click.
                   *
                   * Block ONLY that accidental click.
                   */
                  const timeSinceDrag =
                    performance.now() -
                    lastDragTime.current;

                  if (timeSinceDrag < 150) {
                    e.preventDefault();
                  }

                  /*
                   * Otherwise:
                   *
                   * href works normally.
                   */
                }}
              >

                <span>
                  {elevator.buttonText}
                </span>

                <span className={styles.arrow}>
                  →
                </span>

              </Link>

            </div>

          </article>

        ))}

      </div>

      {/* =====================================
          PAGINATION
      ===================================== */}

      <div className={styles.pagination}>

        {elevators.map((_, index) => (

          <button
            key={index}
            type="button"
            className={`${styles.dot} ${
              activeIndex === index
                ? styles.activeDot
                : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />

        ))}

      </div>

    </section>
  );
}