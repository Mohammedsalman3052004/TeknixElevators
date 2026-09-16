import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "black" | "white";

interface ButtonProps {
  name: string;
  href: string;
  variant?: ButtonVariant;
}

export default function Button({
  name,
  href,
  variant = "white",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]}`}
    >
      <span>{name}</span>

      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}