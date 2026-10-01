"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Prowess.module.css";

type Item = {
  title: string;
  text: string;
};

const items: Item[] = [
  {
    title: "CUSTOMIZED DESIGN",
    text: "Choose a interior design from our ready to pick preconfigured cars or make a choice and create your own concept from the range of materials available.",
  },
  {
    title: "HIBERNATION FUNCTION",
    text: "When on idle standby mode, elevator goes into hibernation function, where in the power consumption reduces by 80%, and starts up immediately on call registration.",
  },
  {
    title: "ZERO HEADROOM & LOW PIT DEPTH",
    text: "Another outstanding feature of Hydratek is low Pit Depth Requirement and Zero Headroom space which ads extra space for you to use and giving you a clutter free headspace in the uppermost floor.",
  },
  {
    title: "SMOOTHER RIDE",
    text: "Hydratek elevators come with Multicomputer & machine learning based controller system, mated along with a Submerged Drive system & Direction control valve device for ultra smooth riding.",
  },
  {
    title: "ENVIRONMENT FRIENDLY",
    text: "Hydratek uses high viscosity & high demulsiblity fluid of biodegradable grade, and extreme long life making it much more environment friendly then other products.",
  },
  {
    title: "LOW POWER CONSUMPTION",
    text: "Hydratek consumes 30-40% low power compared to other hydraulically operated elevators, due to the Progressive Submerged Drive system equipped with Mechanically or electronically operated Control valves giving high savings on power.",
  },
];

export default function Prowess() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>ADVANTAGES OF HYDRATEK</span>
          </span>
        </h2>

        <div className={styles.grid}>
          <div
            className={styles.imageWrapper}
            data-reveal-image
            data-parallax="40"
          >
            <Image
              src="/Images/Hydratek/hydratek-advantages.webp"
              alt="Hydratek elevator interior"
              fill
              sizes="(max-width: 800px) 85vw, 390px"
              className={styles.image}
            />
          </div>

          <ul className={styles.list}>
            {items.map((item, index) => {
              const isOpen = active === index;

              return (
                <li
                  key={item.title}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                  data-reveal="up"
                >
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setActive(isOpen ? null : index)}
                  >
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.title}>{item.title}</span>

                    <svg
                      className={styles.arrow}
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 10L10 2M4 2h6v6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                    </svg>
                  </button>

                  <div className={styles.panel}>
                    <p>{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}