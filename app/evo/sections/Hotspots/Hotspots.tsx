import Image from "next/image";
import styles from "./Hotspots.module.css";

const leftBoxes = [
  {
    num: "01",
    tag: "DRIVE & MOTION",
    title: "DYNAMIC MOTION SAFEGUARD",
    desc: "Helps detect and prevent unintended car movement before motion initiates, ensuring continuous positioning lock.",
  },
  {
    num: "03",
    tag: "VELOCITY CONTROL",
    title: "CENTRIFUGAL OVERSPEED SAFETY SHIELD",
    desc: "Mechanical and electronic governor instantly responds to abnormal velocity conditions, arresting car movement smoothly.",
  },
  {
    num: "06",
    tag: "ENTRANCE SENSING",
    title: "ANTI-SEQUENCE PROTECTION",
    desc: "Multi-beam full-height infrared light curtain detects any obstruction and automatically reverses door closing sequence.",
  },
];

const rightBoxes = [
  {
    num: "02",
    tag: "THRESHOLD SAFETY",
    title: "UNDER-DOOR SAFETY BARRIER",
    desc: "Additional physical and sensor barrier beneath landing sill providing comprehensive clearance protection.",
  },
  {
    num: "05",
    tag: "BRAKING SYSTEM",
    title: "DUAL-VENTED BRAKE PRECISION TECHNOLOGY",
    desc: "Independent dual-circuit braking architecture ensuring controlled, whisper-quiet stops and enhanced cabin stability.",
  },
  {
    num: "04",
    tag: "INTELLIGENT MONITORING",
    title: "SMARTSENSE BRAKING INTELLIGENCE",
    desc: "Active micro-controller monitors the descent curve in real-time to eliminate sudden jerk and prevent unintended descent.",
  },
];

export default function Hotspots() {
  return (
    <section className={styles.section} id="safety-systems">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>SAFETY ARCHITECTURE</span>
          <h2 className={styles.title}>
            PRECISION ENGINEERING &amp; SAFETY SYSTEMS
          </h2>
          <p className={styles.subtitle}>
            Multi-layered redundant protection engineered into every mechanical,
            electrical, and digital component of the EVO platform.
          </p>
        </div>

        {/* 3-Column Layout: Left Boxes | Center Isometric Image | Right Boxes */}
        <div className={styles.diagramLayout}>
          {/* Left Column (01, 03, 06) */}
          <div className={styles.boxesColumn}>
            {leftBoxes.map((b) => (
              <div key={b.num} className={styles.premiumBox}>
                <div className={styles.boxHeader}>
                  <span className={styles.boxNumber}>{b.num}</span>
                  <span className={styles.boxTag}>{b.tag}</span>
                </div>
                <h3 className={styles.boxTitle}>{b.title}</h3>
                <p className={styles.boxDesc}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Isometric Elevator Diagram */}
          <div className={styles.centerGraphic}>
            <Image
              src="/Images/Evo/sometric-elevator-system-diagram.png"
              alt="Teknix EVO isometric elevator system diagram highlighting numbered precision safety components"
              width={640}
              height={640}
              className={styles.diagramImage}
              priority={false}
            />
          </div>

          {/* Right Column (02, 05, 04) */}
          <div className={styles.boxesColumn}>
            {rightBoxes.map((b) => (
              <div key={b.num} className={styles.premiumBox}>
                <div className={styles.boxHeader}>
                  <span className={styles.boxNumber}>{b.num}</span>
                  <span className={styles.boxTag}>{b.tag}</span>
                </div>
                <h3 className={styles.boxTitle}>{b.title}</h3>
                <p className={styles.boxDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
