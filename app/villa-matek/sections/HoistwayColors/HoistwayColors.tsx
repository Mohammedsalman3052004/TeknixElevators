import Image from "next/image";
import styles from "./HoistwayColors.module.css";

type ColorOption = {
  id: string;
  label: string;
};

const colors: ColorOption[] = [
  { id: "deep-gray", label: "Deep Gray" },
  { id: "champagne-gold", label: "Champagne Gold" },
  { id: "porcelain-white", label: "Porcelain White" },
];

export default function HoistwayColors() {
  return (
    <section className={styles.section} aria-labelledby="hoistway-colors-title">
      <h2 id="hoistway-colors-title" className={styles.heading}>
        HOISTWAY FRAME COLOR SELECTION
      </h2>

      <div className={styles.imageWrapper}>
        <Image
          src="/Images/VillaMatek/hoistway-frame-colors.webp"
          alt="Hoistway frame colors: Deep Gray, Champagne Gold and Porcelain White"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className={styles.image}
        />
      </div>

      <ul className={styles.labels}>
        {colors.map((color) => (
          <li key={color.id} className={styles.label}>
            {color.label}
          </li>
        ))}
      </ul>

      <div className={styles.noteWrapper}>
        <p className={styles.note}>
          NOTE: THE ABOVE ARE STANDARD COLORS AND OTHER COLORS CAN BE
          CUSTOMIZED
        </p>
      </div>
    </section>
  );
}