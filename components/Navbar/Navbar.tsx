"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Button from "@/components/UI/Button/Button";
import {
  lockScroll,
  unlockScroll,
} from "@/components/Animations/Animations";
import styles from "./Navbar.module.css";

/* =========================================
   LINKS
   ========================================= */

type SubLink = { name: string; href: string };

type NavItem = {
  name: string;
  href?: string;
  children?: SubLink[];
};

/* Outer navbar (right side) — single level only */
const barLinks: SubLink[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "RESIDENTIAL", href: "/residential" },
  { name: "COMMERCIAL", href: "/commercial" },
  { name: "BLOGS", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

/* Left side panel — with sub links */
const panelLinks: NavItem[] = [
  { name: "HOME", href: "/" },
  {
    name: "ABOUT US",
    children: [
      { name: "CORPORATE PROFILE", href: "/about" },
      { name: "SUSTAINABILITY", href: "/sustainability" },
    ],
  },
  {
    name: "ELEVATORS",
    children: [
      { name: "OPTIMA", href: "/optima" },
      { name: "VERTIX", href: "/vertix" },
      { name: "GREENTEK", href: "/greentek" },
      { name: "HYDRATEK", href: "/hydratek" },
      { name: "VILLA MATEK", href: "/villamatek" },
    ],
  },
  {
    name: "ESCALATORS",
    children: [
      { name: "TESC-20", href: "/tesc-20" },
      { name: "TESC-50", href: "/tesc-50" },
      { name: "TMW-15", href: "/tmw-15" },
    ],
  },
  {
    name: "SERVICES",
    children: [
      { name: "SERVICE & MAINTENANCE", href: "/lifts-service-and-maintenance" },
      { name: "SAFETY", href: "/safety" },
    ],
  },
  { name: "BLOGS", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

/* =========================================
   ICONS
   ========================================= */

function Chevron() {
  return (
    <svg
      className={styles.chevron}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function BackArrow() {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 6H1M6 1L1 6l5 5"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =========================================
   NAVBAR
   ========================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [subIndex, setSubIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const mainViewRef = useRef<HTMLDivElement>(null);
  const subViewRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const wasOpen = useRef(false);
  const firstSubRun = useRef(true);

  const activeItem = panelLinks[subIndex];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenu = () => setOpen(false);

  const openSub = (index: number) => {
    setSubIndex(index);
    setSubOpen(true);
  };

  /* -----------------------------------------
     PANEL TIMELINE (built once)
     ----------------------------------------- */

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          root.style.visibility = "hidden";

          gsap.set(mainViewRef.current, { x: 0, autoAlpha: 1 });
          gsap.set(subViewRef.current, { x: 40, autoAlpha: 0 });

          setSubOpen(false);
        },
      });

      tl.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        0,
      );

      tl.fromTo(
        panelRef.current,
        { xPercent: -100 },
        { xPercent: 0, duration: 0.8, ease: "power4.inOut" },
        0,
      );

      tl.fromTo(
        root.querySelectorAll("[data-nav-head]"),
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0.4,
      );

      tl.fromTo(
        root.querySelectorAll("[data-nav-item]"),
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        },
        0.4,
      );

      tl.fromTo(
        root.querySelectorAll("[data-nav-foot]"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0.85,
      );

      tlRef.current = tl;
    }, root);

    return () => {
      ctx.revert();
      tlRef.current = null;
    };
  }, []);

  /* -----------------------------------------
     OPEN / CLOSE
     ----------------------------------------- */

  useEffect(() => {
    const tl = tlRef.current;
    const root = rootRef.current;
    if (!tl || !root) return;

    const html = document.documentElement;

    if (open) {
      wasOpen.current = true;

      root.style.visibility = "visible";
      html.style.overflow = "hidden";
      lockScroll();

      tl.timeScale(1).play();
      closeBtnRef.current?.focus({ preventScroll: true });
    } else if (wasOpen.current) {
      wasOpen.current = false;

      html.style.overflow = "";
      unlockScroll();

      tl.timeScale(1.6).reverse();
      menuBtnRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  /* Safety: never leave the page locked */
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      unlockScroll();
    };
  }, []);

  /* Escape closes the panel */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* -----------------------------------------
     SUB MENU (drill-down)
     ----------------------------------------- */

  useEffect(() => {
    const main = mainViewRef.current;
    const sub = subViewRef.current;
    if (!main || !sub) return;

    if (firstSubRun.current) {
      firstSubRun.current = false;
      gsap.set(sub, { x: 40, autoAlpha: 0 });
      return;
    }

    if (subOpen) {
      gsap.to(main, {
        x: -40,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.in",
        overwrite: "auto",
      });

      gsap.fromTo(
        sub,
        { x: 40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.55,
          delay: 0.18,
          ease: "power3.out",
          overwrite: "auto",
        },
      );

      gsap.fromTo(
        sub.querySelectorAll("[data-sub-item]"),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.05,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
    } else {
      gsap.to(sub, {
        x: 40,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
        overwrite: "auto",
      });

      gsap.fromTo(
        main,
        { x: -40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.55,
          delay: 0.18,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
    }
  }, [subOpen]);

  /* =========================================
     RENDER
     ========================================= */

  return (
    <>
      {/* ---------- OUTER NAVBAR ---------- */}

      <header className={styles.navbar}>
        <div className={styles.left}>
          <button
            ref={menuBtnRef}
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className={styles.logo} aria-label="TekniX Elevators">
            <Image
              src="/Images/logo-black.png"
              alt="TekniX Elevators"
              width={214}
              height={67}
              priority
            />
          </Link>
        </div>

        <nav className={styles.links} aria-label="Primary">
          {barLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.link} ${
                isActive(link.href) ? styles.linkActive : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* ---------- SIDE PANEL ---------- */}

      <div ref={rootRef} className={styles.drawer} aria-hidden={!open}>
        <div
          ref={backdropRef}
          className={styles.backdrop}
          onClick={closeMenu}
        />

        <aside
          ref={panelRef}
          id="site-menu"
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          {/* Close + logo */}
          <div className={styles.panelHead} data-nav-head>
            <button
              ref={closeBtnRef}
              type="button"
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span />
              <span />
            </button>

            <Link
              href="/"
              className={styles.logo}
              onClick={closeMenu}
              aria-label="TekniX Elevators"
            >
              <Image
                src="/Images/logo-black.png"
                alt="TekniX Elevators"
                width={214}
                height={67}
              />
            </Link>
          </div>

          {/* Views */}
          <div className={styles.views}>
            {/* MAIN LIST */}
            <div
              ref={mainViewRef}
              className={styles.view}
              data-lenis-prevent
            >
              <ul className={styles.list}>
                {panelLinks.map((item, index) => {
                  const active = item.children
                    ? item.children.some((c) => isActive(c.href))
                    : item.href
                      ? isActive(item.href)
                      : false;

                  return (
                    <li
                      key={item.name}
                      className={styles.listItem}
                      data-nav-item
                    >
                      {item.children ? (
                        <button
                          type="button"
                          className={`${styles.item} ${
                            active ? styles.itemActive : ""
                          }`}
                          onClick={() => openSub(index)}
                        >
                          <span>{item.name}</span>
                          <Chevron />
                        </button>
                      ) : (
                        <Link
                          href={item.href ?? "/"}
                          className={`${styles.item} ${
                            active ? styles.itemActive : ""
                          }`}
                          onClick={closeMenu}
                        >
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* SUB LIST */}
            <div
              ref={subViewRef}
              className={styles.view}
              data-lenis-prevent
            >
              <button
                type="button"
                className={styles.backRow}
                onClick={() => setSubOpen(false)}
              >
                <span className={styles.backIcon}>
                  <BackArrow />
                </span>
                <span className={styles.backTitle}>{activeItem.name}</span>
              </button>

              <ul className={styles.list}>
                {activeItem.children?.map((child) => (
                  <li
                    key={child.name}
                    className={styles.subListItem}
                    data-sub-item
                  >
                    <Link
                      href={child.href}
                      className={`${styles.subItem} ${
                        isActive(child.href) ? styles.itemActive : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom button */}
          {/* <div className={styles.panelFoot} data-nav-foot>
            <Button
              name="EXPERIENCE CENTRE"
              href="/experience-centre"
              variant="black"
            />
          </div> */}
        </aside>
      </div>
    </>
  );
}
