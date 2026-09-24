import Image from "next/image";
import styles from "./VisionMission.module.css";

interface VisionMissionRow {
  label: string;
  heading: string;
  description: string;
  image: { src: string; alt: string };
  reverse?: boolean;
}

const rows: VisionMissionRow[] = [
  {
    label: "OUR VISION",
    heading: "Our Vision",
    description:
      "At Teknix, we envision a future where vertical transportation transcends mere functionality, becoming a hallmark of elegance and innovation. Our dedication lies in crafting an experience that embodies safety, reliability, and unparalleled luxury. Each of our products is meticulously engineered to ensure energy efficiency while exuding an aura of sophistication. We are committed to redefining urban mobility, minimizing our carbon footprint through avant-garde technology and exquisite design. Together, we will create a refined and sustainable urban landscape, elevating life to unparalleled heights for discerning individuals who demand nothing less than excellence.",
    image: {
      src: "/Images/Home/elevator-1.png",
      alt: "TekniX vision",
    },
  },
  {
    label: "OUR MISSION",
    heading: "Our Mission",
    description:
      "Teknix, at all times maintain and embody the principles of integrity, honesty and quality. These efforts bring prosperity to our business associates and our customers, and robust growth in us.",
    image: {
      src: "/Images/Home/elevator-2.png",
      alt: "TekniX mission",
    },
    reverse: true,
  },
];

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 data-reveal="up">Our Commitment to Excellence</h2>
        <p data-reveal="up">
          At Teknix Elevators, we pride ourselves on delivering exceptional quality, safety, and reliability, consistently meeting the high benchmarks of our ISO 9001:2008 certification
        </p>
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className={`${styles.row} ${row.reverse ? styles.reverse : ""}`}
        >
          <div
            className={styles.imageWrapper}
            data-reveal-image
            data-parallax="30"
          >
            <Image
              src={row.image.src}
              alt={row.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.label} data-reveal="up">
              {row.label}
            </span>
            <h2 data-reveal="up">{row.heading}</h2>
            <p data-reveal="up">{row.description}</p>
          </div>
        </div>
      ))}

      {/* <div className={styles.commitment}>
        <h2 data-reveal="up">Our Commitment to Excellence</h2>
        <p data-reveal="up">
          At Teknix Elevators, we pride ourselves on delivering exceptional
          quality, safety, and reliability, consistently meeting the high
          benchmarks of our ISO 9001:2008 certification
        </p>
      </div> */}
    </section>
  );
}
