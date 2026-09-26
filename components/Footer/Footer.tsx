"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const productLinks = [
  { name: "EVO", href: "/evo" },
  { name: "Optima", href: "/optima" },
  { name: "Vertix", href: "/vertix" },
  { name: "Greentek", href: "/greentek" },
  { name: "Villa Matek", href: "/villa-matek" },
  { name: "Hydratek", href: "/hydratek" },
  { name: "Special Purpose", href: "/special-purpose" },
];

/* Single-target items go straight to href.
   Multi-target items show a flyout of children on hover/click. */
type AppLink =
  | { name: string; href: string; children?: undefined }
  | { name: string; href?: undefined; children: { name: string; href: string }[] };

const applicationLinks: AppLink[] = [
  { name: "Villas", href: "/villa-matek" },
  {
    name: "Apartments",
    children: [
      { name: "Optima", href: "/optima" },
      { name: "Greentek", href: "/greentek" },
    ],
  },
  { name: "Hotels", href: "/vertix" },
  {
    name: "Offices",
    children: [
      { name: "Optima", href: "/optima" },
      { name: "Greentek", href: "/greentek" },
    ],
  },
  { name: "Hospitals", href: "/vertix" },
  { name: "Data Centres", href: "/vertix" },
  { name: "Industry", href: "/hydratek" },
];

const teknixLinks = [
  { name: "Why TekniX", href: "/about" },
  { name: "Engineering", href: "/engineering" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Technology", href: "/technology" },
  { name: "Experience Centre", href: "/experience-centre" },
];

const resourceLinks = [
  { name: "Blogs", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Brochures & Downloads", href: "/downloads" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/teknixelevators/", icon: "facebook" },
  { name: "X", href: "https://twitter.com/TeknixE", icon: "x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/teknixelevators/", icon: "linkedin" },
  { name: "Instagram", href: "https://www.instagram.com/teknixelevators_india/", icon: "instagram" },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  switch (name) {
    case "facebook":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-8.1h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6C15.8 3.5 14.85 3.4 13.75 3.4c-2.3 0-3.9 1.4-3.9 4v2.4H7.15v3.1h2.7V21h3.65z" />
        </svg>
      );
    case "x":
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 2.4h3.3l-7.2 8.2 8.5 11h-6.6l-5.2-6.8-6 6.8H2.4l7.7-8.8-8.2-10.4h6.8l4.7 6.3 5.5-6.3zm-1.15 17.3h1.8L7.35 4.2H5.4l12.35 15.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3.5 21.5h3V9h-3v12.5zm6.5 0h3v-6.6c0-1.7.65-2.7 2.05-2.7 1.3 0 1.95 1 1.95 2.7v6.6h3v-7.2c0-3.3-1.75-4.9-4.2-4.9-1.9 0-2.75 1.05-3.25 1.8V9H9.5c.05 1.05 0 12.5 0 12.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

/* -----------------------------------------
   APPLICATIONS ITEM (handles flyout)
   ----------------------------------------- */

function ApplicationItem({ link }: { link: AppLink }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleEnter = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    if (!open) return;

    const onOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  if (!link.children) {
    return <Link href={link.href}>{link.name}</Link>;
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.appItem}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={styles.appItemTrigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {link.name}
        <span className={`${styles.appArrow} ${open ? styles.appArrowOpen : ""}`}>
          →
        </span>
      </button>

      <div className={`${styles.subMenu} ${open ? styles.subMenuOpen : ""}`}>
        {link.children.map((child) => (
          <Link
            key={child.name}
            href={child.href}
            className={styles.subMenuLink}
            onClick={() => setOpen(false)}
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------
   FOOTER
   ----------------------------------------- */

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <h2 className={styles.heading}>FOR EVERYTHING THAT MATTERS.</h2>

        <Link href="/" className={styles.logo}>
          <Image
            src="/Images/logo-black.png"
            alt="TekniX Elevators"
            width={160}
            height={60}
          />
        </Link>
      </div>

      {/* Links */}
      <div className={styles.linksSection}>
        <div className={styles.column}>
          <h3>PRODUCTS</h3>
          <div className={styles.links}>
            {productLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3>APPLICATIONS</h3>
          <div className={styles.links}>
            {applicationLinks.map((link) => (
              <ApplicationItem key={link.name} link={link} />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3>TEKNIX</h3>
          <div className={styles.links}>
            {teknixLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3>RESOURCES</h3>
          <div className={styles.links}>
            {resourceLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>© 2026 TekniX Elevators. All rights reserved.</p>

        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}