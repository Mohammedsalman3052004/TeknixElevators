"use client";

import Image from "next/image";
import styles from "./Mastery.module.css";

const items = [
  {
    icon: "/Icons/Hydratek/heavy-duty.svg",
    title: "ULTRA HEAVY DUTY VERTICAL DRIVE SYSTEM",
    text: "Hydratek comes with first in class ultra heavy duty guide rail drive system, with increased guide rail thickness for extra support and ultra smooth ride and longevity of the elevator",
  },
  {
    icon: "/Icons/Hydratek/isolation.svg",
    title: "DYNAMIC ISOLATION",
    text: "Teknix Hydratek elevators come with dynamic noise isolation technology using undercar dampers & floating upper car isolators for a noise & vibration free ride.",
  },
  {
    icon: "/Icons/Hydratek/sheave.svg",
    title: "MONOMER-CAST POLAMIDE TRANSMISSION SHEAVE",
    text: "Teknix Hydratek elevators are pre-fitted with monomer-cast Polamide sheaves which reduce the noise levels due to friction and therby increasing the life of ropes by upto 50%.",
  },
  {
    icon: "/Icons/Hydratek/smooth-ride.svg",
    title: "SMOOTHER RIDE",
    text: "Hydratek comes equipped with submerged drive system giving super smooth ride",
  },
  {
    icon: "/Icons/Hydratek/safe.svg",
    title: "ULTRA SAFE",
    text: "Hydratek elevators are equipped with line rupture protection valves as a standard feature",
  },
  {
    icon: "/Icons/Hydratek/low-noise.svg",
    title: "LOW OPERATING NOISE",
    text: "HYDRATEK’S Progressive submerged fluid dynamics technology reduces the operating noise.",
  },
];

export default function Mastery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            HEADER
        ========================================= */}

        <div className={styles.header}>
          <h2 className={styles.heading} data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>DYNAMIC PRECISE SUCCINCT</span>
            </span>
          </h2>

          <p className={styles.intro} data-reveal="up">
            Progressive Architecture with functionality & design at its core,
            Impressively and harmoniously combined in the interior that exudes
            sophisticated & precise German Engineering technology and advanced
            Italian workmanship that last for generations.
          </p>
        </div>

        {/* =========================================
            FEATURES
        ========================================= */}

        <div className={styles.grid}>
          {items.map((item) => (
            <div className={styles.item} key={item.title} data-reveal="up">
              <div className={styles.iconCircle}>
                <Image
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                  className={styles.icon}
                />
              </div>

              <h3 className={styles.title}>{item.title}</h3>

              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}