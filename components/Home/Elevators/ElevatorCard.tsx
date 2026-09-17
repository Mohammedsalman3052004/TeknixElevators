import Image from "next/image";
import Link from "next/link";
import styles from "./ElevatorCard.module.css";

interface ElevatorCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function ElevatorCard({
  image,
  title,
  description,
  buttonText,
  href,
}: ElevatorCardProps) {
  return (
    <article className={styles.card}>
      {/* Background Image */}

      <Image
        src={image}
        alt={title}
        fill
        sizes="
          (max-width: 650px) 92vw,
          (max-width: 1000px) 72vw,
          62vw
        "
        className={styles.image}
      />

      {/* Dark Gradient */}

      <div className={styles.gradient} />

      {/* Content */}

      <div className={styles.content}>

        <div className={styles.textContent}>
          <h3 className={styles.title}>
            {title}
          </h3>

          <p className={styles.description}>
            {description}
          </p>
        </div>

        <Link
          href={href}
          className={styles.button}
        >
          <span>{buttonText}</span>

          <span className={styles.arrow}>
            →
          </span>
        </Link>

      </div>
    </article>
  );
}