"use client";

import Image from "next/image";
import styles from "./BuildingGrid.module.css";

const projects = [
  {
    number: "01",
    title: "VILLAS & PRIVATE HOMES",
    image: "/Images/Home/villas.png",
    href: "/villas",
  },
  {
    number: "02",
    title: "APARTMENTS & RESIDENTIAL",
    image: "/Images/Home/apartments.png",
    href: "/apartments",
  },
  {
    number: "03",
    title: "HOTELS",
    image: "/Images/Home/hotels.png",
    href: "/hotels",
  },
  {
    number: "04",
    title: "OFFICES",
    image: "/Images/Home/offices.png",
    href: "/offices",
  },
  {
    number: "05",
    title: "RETAIL",
    image: "/Images/Home/retail.png",
    href: "/retail",
  },
  {
    number: "06",
    title: "HOSPITALS",
    image: "/Images/Home/hospitals.png",
    href: "/hospitals",
  },
  {
    number: "07",
    title: "DATA CENTRES",
    image: "/Images/Home/data-centres.png",
    href: "/data-centres",
  },
  {
    number: "08",
    title: "INDUSTRY",
    image: "/Images/Home/industry.png",
    href: "/industry",
  },
  {
    number: "09",
    title: "SPECIAL APPLICATIONS",
    image: "/Images/Home/special-applications.png",
    href: "/special-applications",
  },
];

export default function BuildingGrid() {
  return (
    <section className={styles.section}>

      {/* =========================================
          HEADER
      ========================================= */}

      <div className={styles.header}>
        <h2 className={styles.heading} data-reveal>
          WHAT ARE YOU BUILDING
        </h2>
      </div>


      {/* =========================================
          GRID
      ========================================= */}

      <div className={styles.grid}>

        {projects.map((project) => (
          <a
            key={project.number}
            href={project.href}
            className={styles.card}
          >

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

          </a>
        ))}

      </div>

    </section>
  );
}