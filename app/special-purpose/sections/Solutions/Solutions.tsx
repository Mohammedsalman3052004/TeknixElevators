"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Solutions.module.css";

/* =========================================
   DATA
========================================= */

const solutions = [
  {
    num: "01",
    title: "EXPLOSION-PROOF / HAZARDOUS AREA ELEVATORS",
    description: [
      "Certain industrial environments may contain flammable gases, vapours, mists or combustible dusts that can create a potentially explosive atmosphere.",
      "For such applications, elevator equipment may need to be specially designed and selected to minimise potential ignition sources and comply with the requirements applicable to the classified hazardous area.",
      "Teknix can engineer elevator solutions for specific hazardous-area applications, with the design developed around the project's hazardous-area classification, gas and dust characteristics, temperature classification, equipment protection requirements and applicable statutory requirements.",
    ],
    note: "Explosion-protected elevator design is application-specific. The final configuration and certification requirements depend on the hazardous-area classification and applicable standards.",
    apps: [
      "Chemical manufacturing plants",
      "Petrochemical facilities",
      "Refineries",
      "Paint and coating facilities",
      "Pharmaceutical manufacturing",
      "Solvent handling areas",
      "Oil & gas facilities",
      "Flammable material storage areas",
    ],
  },
  {
    num: "02",
    title: "IP55 RATED ELEVATOR SOLUTIONS",
    description: [
      "Where elevators are exposed to dust, moisture or water spray, conventional equipment may not provide the required level of environmental protection.",
      "Teknix can provide IP55-rated solutions for specified elevator components and electrical/control enclosures. IP55 provides dust protection and protection against water jets projected from any direction.",
      "The exact IP rating and components covered are defined as part of the project-specific technical specification.",
    ],
    note: null,
    apps: [
      "Manufacturing facilities",
      "Industrial plants",
      "Workshops",
      "Warehouses",
      "Automotive facilities",
      "Food-processing environments",
      "Outdoor or semi-exposed installations",
    ],
  },
  {
    num: "03",
    title: "IP65 RATED ELEVATOR SOLUTIONS",
    description: [
      "For environments where equipment is exposed to significantly higher levels of dust and water, Teknix can engineer solutions incorporating IP65-rated components and enclosures wherever required.",
      "IP65 provides complete dust-tight protection and protection against water jets — particularly relevant for elevator electrical systems, control equipment and other specified components.",
      "The required protection level is determined based on the actual environmental conditions and project requirements.",
    ],
    note: null,
    apps: [
      "Heavy manufacturing",
      "Industrial processing plants",
      "Food and beverage facilities",
      "Wash-down areas",
      "Industrial warehouses",
      "Chemical processing environments",
      "Areas exposed to regular cleaning and water jets",
    ],
  },
  {
    num: "04",
    title: "DUST-PROOF ELEVATORS",
    description: [
      "Fine particles can enter electrical equipment, affect sensors and switches, contaminate mechanical components and increase maintenance requirements.",
      "Teknix can engineer elevator systems for applications where dust ingress is a significant operational concern, incorporating dust-protected electrical enclosures, appropriate IP-rated components, sealed connections and application-specific engineering measures.",
    ],
    note: "The protection strategy is developed according to the type, concentration and characteristics of dust present at the site.",
    apps: [
      "Cement plants",
      "Mineral processing",
      "Stone processing",
      "Foundries",
      "Grain and agricultural processing",
      "Powder-processing industries",
      "Construction material plants",
    ],
  },
  {
    num: "05",
    title: "CORROSION-RESISTANT ELEVATOR SOLUTIONS",
    description: [
      "Humidity, chemicals, salt-laden air and corrosive substances can accelerate deterioration of conventional materials and finishes.",
      "For such applications, Teknix can develop elevator configurations using carefully selected corrosion-resistant materials and finishes based on the environment — including stainless steel components, protected electrical components, suitable surface treatments and application-specific fasteners.",
    ],
    note: "Material selection is determined according to the actual chemical, humidity and environmental exposure expected at the site.",
    apps: [
      "Chemical plants",
      "Coastal installations",
      "Marine environments",
      "Water treatment facilities",
      "Wastewater treatment plants",
      "Food-processing facilities",
      "Fertilizer plants",
    ],
  },
  {
    num: "06",
    title: "HYGIENIC & PHARMACEUTICAL ELEVATORS",
    description: [
      "Pharmaceutical, healthcare and food-processing environments can have stringent requirements relating to cleanliness, contamination control and material selection.",
      "Teknix can engineer elevator interiors and equipment configurations around these requirements, incorporating stainless steel interiors, smooth and easy-to-clean surfaces, reduced dirt-trap design, suitable flooring and application-specific door configurations.",
    ],
    note: null,
    apps: [
      "Pharmaceutical manufacturing",
      "Hospitals and medical facilities",
      "Food processing",
      "Dairy plants",
      "Clean manufacturing environments",
      "Research and laboratory facilities",
    ],
  },
];


/* =========================================
   ACCORDION ITEM COMPONENT
========================================= */

function SolutionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof solutions)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  /* GSAP open/close */
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (isOpen) {
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.item}>

      {/* Header */}
      <button
        type="button"
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`${styles.num} ${isOpen ? styles.active : ""}`}>
          {item.num}
        </span>

        <span className={`${styles.title} ${isOpen ? styles.active : ""}`}>
          {item.title}
        </span>

        <span className={`${styles.chevron} ${isOpen ? styles.open : ""}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>


      {/* Panel */}
      <div
        ref={panelRef}
        className={styles.panel}
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        <div className={styles.panelInner}>

          {/* LEFT — Description */}
          <div className={styles.panelLeft}>
            {item.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {item.note && (
              <p className={styles.note}>{item.note}</p>
            )}
          </div>


          {/* RIGHT — Typical Applications */}
          <div className={styles.panelRight}>
            <p className={styles.appsHeading}>TYPICAL APPLICATIONS</p>
            <div className={styles.apps}>
              {item.apps.map((app) => (
                <span key={app} className={styles.app}>
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}


/* =========================================
   MAIN SECTION
========================================= */

export default function Solutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.headingBlock} data-reveal="up">
          <span className={styles.eyebrow}>OUR SOLUTIONS</span>
          <h2>
            ENGINEERED FOR
            <br />
            EVERY ENVIRONMENT
          </h2>
        </div>


        {/* Accordion */}
        <div className={styles.list} data-reveal="up">
          {solutions.map((item, index) => (
            <SolutionItem
              key={item.num}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
