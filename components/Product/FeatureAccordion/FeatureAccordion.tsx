"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FeatureAccordion.module.css";

export interface FeatureAccordionItem {
  title: string;
  description: string;
}

export interface FeatureAccordionProps {
  heading: string;
  image?: { src: string; alt: string };
  items: FeatureAccordionItem[];
}

export default function FeatureAccordion({
  heading,
  image,
  items,
}: FeatureAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-reveal="up">
          {heading}
        </h2>

        <div className={`${styles.content} ${!image ? styles.noImage : ""}`}>
          {image && (
            <div
              className={styles.imageWrapper}
              data-reveal-image
              data-parallax="40"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 80vw, 390px"
                className={styles.image}
              />
            </div>
          )}

          <div className={styles.featureList}>
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className={styles.featureItem}
                  data-reveal="right"
                >
                  <button
                    type="button"
                    className={styles.feature}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.featureText}>{item.title}</span>

                    <span
                      className={`${styles.arrow} ${
                        isOpen ? styles.arrowOpen : ""
                      }`}
                    >
                      ↗
                    </span>
                  </button>

                  <div
                    className={`${styles.descriptionWrapper} ${
                      isOpen ? styles.descriptionOpen : ""
                    }`}
                  >
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
