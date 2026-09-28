"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BuildingGrid.module.css";

const projects = [
  {
    number: "01",
    title: "VILLAS & PRIVATE HOMES",
    image: "/Images/Home/villas.png",
    links: [{ name: "Villa Matek", href: "/villa-matek" }],
  },
  {
    number: "02",
    title: "APARTMENTS & RESIDENTIAL",
    image: "/Images/Home/apartments.png",
    links: [
      { name: "Optima", href: "/optima" },
      { name: "Greentek", href: "/greentek" },
    ],
  },
  {
    number: "03",
    title: "HOTELS",
    image: "/Images/Home/hotels.png",
    links: [{ name: "Vertix", href: "/vertix" }],
  },
  {
    number: "04",
    title: "OFFICES",
    image: "/Images/Home/offices.png",
    links: [
      { name: "Optima", href: "/optima" },
      { name: "Greentek", href: "/greentek" },
    ],
  },
  {
    number: "05",
    title: "RETAIL",
    image: "/Images/Home/retail.png",
    links: [{ name: "EVO", href: "/evo" }],
  },
  {
    number: "06",
    title: "HOSPITALS",
    image: "/Images/Home/hospitals.png",
    links: [{ name: "Vertix", href: "/vertix" }],
  },
  {
    number: "07",
    title: "DATA CENTRES",
    image: "/Images/Home/data-centres.png",
    links: [{ name: "Vertix", href: "/vertix" }],
  },
  {
    number: "08",
    title: "INDUSTRY",
    image: "/Images/Home/industry.png",
    links: [
      { name: "Greentek", href: "/greentek" },
      { name: "Vertix", href: "/vertix" },
    ],
  },
  {
    number: "09",
    title: "SPECIAL APPLICATIONS",
    image: "/Images/Home/special-applications.png",
    links: [{ name: "Special Purpose", href: "/special-purpose" }],
  },
];

export default function BuildingGrid() {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  /* Close the options panel when clicking outside the grid */
  useEffect(() => {
    if (!openCard) return;

    const onOutside = (e: MouseEvent) => {
      if (gridRef.current && !gridRef.current.contains(e.target as Node)) {
        setOpenCard(null);
      }
    };

    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [openCard]);

  return (
    <section className={styles.section}>

      {/* =========================================
          HEADER
      ========================================= */}

      <div className={styles.header}>
        <h2 className={styles.heading} data-reveal="up">
          WHAT ARE YOU BUILDING
        </h2>
      </div>


      {/* =========================================
          GRID
      ========================================= */}

      <div className={styles.grid} ref={gridRef}>

        {projects.map((project) => {
          const isMulti = project.links.length > 1;
          const isOpen = openCard === project.number;

          const cardInner = (
            <>
              {/* Background Image */}

              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="
                  (max-width: 700px) 100vw,
                  (max-width: 1100px) 50vw,
                  33vw
                "
                className={styles.image}
              />


              {/* Gradient */}

              <div className={styles.gradient} />


              {/* Card Content */}

              <div className={styles.content}>

                <span className={styles.number}>
                  {project.number}
                </span>

                <div className={styles.bottom}>

                  <span className={styles.title}>
                    {project.title}
                  </span>

                  <span className={styles.arrow}>
                    →
                  </span>

                </div>

              </div>
            </>
          );

          /* ---------- SINGLE LINK → direct redirect ---------- */

          if (!isMulti) {
            return (
              <Link
                key={project.number}
                href={project.links[0].href}
                className={styles.card}
              >
                {cardInner}
              </Link>
            );
          }

          /* ---------- MULTIPLE LINKS → options inside the box ---------- */

          return (
            <div
              key={project.number}
              className={`${styles.card} ${styles.cardMulti}`}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpenCard(isOpen ? null : project.number)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenCard(isOpen ? null : project.number);
                }
                if (e.key === "Escape") setOpenCard(null);
              }}
            >
              {cardInner}

              <div
                className={`${styles.options} ${
                  isOpen ? styles.optionsOpen : ""
                }`}
              >
                <span className={styles.optionsClose}>CLOSE ×</span>

                <span className={styles.optionsLabel}>SELECT A PRODUCT</span>

                {project.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={styles.optionLink}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{link.name}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}