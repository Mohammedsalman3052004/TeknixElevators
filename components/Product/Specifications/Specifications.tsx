"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Specifications.module.css";
import BrochureModal from "@/components/BrochureModal/BrochureModal";

export type SpecIcon =
  | "type"
  | "capacity"
  | "speed"
  | "landings"
  | "drive"
  | "operation"
  | "width"
  | "height";

export interface SpecItem {
  label: string;
  value: string;
  sub: string;
  icon: SpecIcon;
}

export interface SpecificationsProps {
  title: string;
  description: string;
  items: SpecItem[];
  /* All three are optional now — leave them out to hide the button entirely */
  brochureHref?: string;
  brochureLabel?: string;
  brochureFormName?: string; // e.g. "Optima Download Form" — shown in the submitted lead
}

const iconMap: Record<SpecIcon, string> = {
  type: "/Icons/Specifications-Icons-1.svg",
  capacity: "/Icons/Specifications-Icons-2.svg",
  speed: "/Icons/Specifications-Icons-3.svg",
  landings: "/Icons/Specifications-Icons-4.svg",
  drive: "/Icons/Specifications-Icons-5.svg",
  operation: "/Icons/Specifications-Icons-6.svg",
  width: "/Icons/Specifications-Icons-7.svg",
  height: "/Icons/Specifications-Icons-8.svg",
};

export default function Specifications({
  title,
  description,
  items,
  brochureHref,
  brochureLabel,
  brochureFormName,
}: SpecificationsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const showBrochureButton = Boolean(brochureHref && brochureLabel);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>{title}</span>
            </span>
          </h2>

          <p data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>{description}</span>
            </span>
          </p>
        </div>

        {/* SPECIFICATION GRID */}
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div
              className={styles.card}
              key={`${item.label}-${index}`}
              style={{ "--index": index } as React.CSSProperties}
              data-reveal="up"
            >
              <div className={styles.icon}>
                <Image
                  src={iconMap[item.icon]}
                  alt=""
                  width={20}
                  height={20}
                  className={styles.iconImage}
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.label}>{item.label}</span>
                <h3>{item.value}</h3>
                <p>{item.sub}</p>
              </div>

              <span className={styles.smallLine} />
            </div>
          ))}
        </div>

        {/* DOWNLOAD — only rendered when the page provides brochure data */}
        {showBrochureButton && (
          <button
            type="button"
            className={styles.download}
            data-reveal="up"
            onClick={() => setModalOpen(true)}
          >
            <span>{brochureLabel}</span>
            <span className={styles.arrow}>→</span>
          </button>
        )}
      </div>

      {showBrochureButton && (
        <BrochureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          brochureHref={brochureHref as string}
          formName={brochureFormName ?? (brochureLabel as string)}
        />
      )}
    </section>
  );
}