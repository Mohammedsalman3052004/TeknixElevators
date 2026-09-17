"use client";

import { useEffect, useState } from "react";
import styles from "./ExperienceCentre.module.css";
import Button from "@/components/UI/Button/Button";

const images = [
  "/Images/Home/experience-1.png",
  "/Images/Home/experience-2.jpg",
  "/Images/Home/experience-3.jpg",
  "/Images/Home/experience-4.jpg",
];

export default function ExperienceCentre() {
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

        {/* LEFT CONTENT */}
        <div className={styles.content}>

          <div className={styles.eyebrow}>
            <span className={styles.line}></span>
            <span>EXPERIENCE CENTRE</span>
          </div>

          <h2 className={styles.title}>
            SEE IT. FEEL IT.
            <br />
            EXPERIENCE
            <br />
            TEKNIX
          </h2>

          <p className={styles.description}>
            Explore our elevators, finishes and
            <br />
            possibilities in person
          </p>

          <Button
            name="VISIT THE EXPERIENCE CENTRE"
            href="/experience-centre"
            variant="black"
          />

        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className={styles.imageWrapper}>

          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="TekniX Experience Centre"
              className={`${styles.image} ${
                index === activeImage ? styles.active : ""
              }`}
            />
          ))}

          {/* GRADIENT OVERLAY */}
          <div className={styles.gradient}></div>

        </div>

      </div>
    </section>
  );
}