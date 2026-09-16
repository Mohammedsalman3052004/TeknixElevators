import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const leftLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "ELEVATORS", href: "/elevators" },
  { name: "ESCALATORS", href: "/escalators" },
  { name: "SERVICES", href: "/services" },
];

const rightLinks = [
  { name: "EXPERIENCE CENTRE", href: "/experience-centre" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Left Navigation */}
      <div className={styles.leftNav}>
        {leftLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>

      {/* Center Logo */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/Images/logo.png"
          alt="TekniX Elevators"
          width={130}
          height={50}
          priority
        />
      </Link>

      {/* Right Navigation */}
      <div className={styles.rightNav}>
        {rightLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}