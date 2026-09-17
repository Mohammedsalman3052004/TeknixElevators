"use client";

import { useState } from "react";
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

const mobileLinks = [
  ...leftLinks,
  ...rightLinks,
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>

        {/* Desktop Left */}
        <div className={styles.leftNav}>
          {leftLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/Images/logo.png"
            alt="TekniX Elevators"
            width={130}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Right */}
        <div className={styles.rightNav}>
          {rightLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile / Tablet Hamburger */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuContent}>

          {mobileLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.name}</span>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}

        </div>
      </div>
    </>
  );
}