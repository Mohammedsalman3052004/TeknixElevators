"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

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

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* =========================================
          HERO IMAGE
      ========================================= */}

      <div className={styles.imageWrapper}>
        <Image
          src="/Images/Greentek/greentek-hero.png"
          alt="Greentek elevator"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>


      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className={styles.overlay} />


      {/* =========================================
          PAGE LABEL
      ========================================= */}

      <div className={styles.pageLabel}>
        Greentek
      </div>


      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav className={styles.navbar}>

        {/* LEFT NAV */}

        <div className={styles.leftNav}>
          {leftLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* CENTER LOGO */}

        <Link
          href="/"
          className={styles.logo}
        >
          <Image
            src="/Images/logo.png"
            alt="TekniX Elevators"
            width={130}
            height={50}
            priority
          />
        </Link>


        {/* RIGHT NAV */}

        <div className={styles.rightNav}>
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* MOBILE MENU */}

        <button
          className={styles.menuButton}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className={styles.content}>

        <div
          className={styles.headingWrap}
          data-reveal="left"
        >
          <h1>
            WHEN EVERY DETAIL
            <br />
            GOES FURTHER
          </h1>
        </div>


        <div
          className={styles.description}
          data-reveal="left"
        >
          <p>
            An advanced elevator engineered for greater
            performance, refined movement, and the demands of
            premium buildings.
          </p>
        </div>

      </div>

    </section>
  );
}