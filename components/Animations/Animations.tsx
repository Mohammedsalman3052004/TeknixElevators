"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export default function Animations() {
  const pathname = usePathname();

  // Lenis <-> GSAP sync — runs once for the app's lifetime
  useEffect(() => {
    lenis = new Lenis({
  duration: 0.8,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
});

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Scroll-reveal for any [data-reveal] element — re-scans on route change
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      if (!items.length) return;

      gsap.set(items, { y: 60, opacity: 0 });

      ScrollTrigger.batch(items, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            overwrite: true,
          }),
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}