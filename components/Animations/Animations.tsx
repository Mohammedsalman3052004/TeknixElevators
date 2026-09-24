"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Used by <Preloader /> to release scrolling once the intro has finished. */
export function unlockScroll() {
  lenis?.start();
}

/** Used by the Navbar side panel to freeze page scroll while it is open. */
export function lockScroll() {
  lenis?.stop();
}

/**
 * Line-by-line fade-up reveal for [data-reveal-line] children inside `container`.
 * Call this directly for above-the-fold text (e.g. Hero, once the preloader
 * finishes) — it is NOT scroll-triggered on its own.
 */
export function revealLines(
  container: HTMLElement | null,
  opts?: { stagger?: number; delay?: number },
) {
  if (!container) return;

  const lines = container.querySelectorAll<HTMLElement>("[data-reveal-line]");
  if (!lines.length) return;

  gsap.set(lines, { yPercent: 100, opacity: 0 });

  gsap.to(lines, {
    yPercent: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    stagger: opts?.stagger ?? 0.12,
    delay: opts?.delay ?? 0,
  });
}

export default function Animations() {
  const pathname = usePathname();

  // Lenis <-> GSAP sync — runs once for the app's lifetime
  useEffect(() => {
    lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    if (document.documentElement.dataset.preloading === "true") {
      lenis.stop();
    }

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

  // All scroll-driven reveals — re-scans on route change
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const build = () => {
      if (prefersReducedMotion) return;

      // 1) Fade reveals — data-reveal="up" | "left" | "right"
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const fromVars: Record<string, gsap.TweenVars> = {
        up: { y: 60, opacity: 0 },
        left: { x: -60, opacity: 0 },
        right: { x: 60, opacity: 0 },
      };

      (["up", "left", "right"] as const).forEach((dir) => {
        const group = items.filter((el) => (el.dataset.reveal || "up") === dir);
        if (!group.length) return;

        gsap.set(group, fromVars[dir]);

        ScrollTrigger.batch(group, {
          start: "top 85%",
          onEnter: (batch) =>
            gsap.to(batch, {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
              overwrite: true,
            }),
        });
      });

      // 2) Line-by-line reveal ON SCROLL — wrap with data-reveal-lines,
      //    mark each line with data-reveal-line (for below-the-fold headings)
      gsap.utils
        .toArray<HTMLElement>("[data-reveal-lines]")
        .forEach((container) => {
          const lines =
            container.querySelectorAll<HTMLElement>("[data-reveal-line]");
          if (!lines.length) return;

          gsap.set(lines, { yPercent: 100, opacity: 0 });

          ScrollTrigger.create({
            trigger: container,
            start: "top 85%",
            once: true,
            onEnter: () =>
              gsap.to(lines, {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.12,
              }),
          });
        });

      // 3) Image open reveal — clip grows top-to-bottom + scale settle
      // 3) Image open reveal — clip grows top-to-bottom + scale settle
      // 3) Image open reveal — clip grows top-to-bottom + scale settle
gsap.utils
  .toArray<HTMLElement>("[data-reveal-image]")
  .forEach((wrapper) => {
    const imgs = wrapper.querySelectorAll("img");

    if (!imgs.length) return;

    gsap.set(wrapper, {
      clipPath: "inset(0% 0% 100% 0%)",
    });

    gsap.set(imgs, {
      scale: 1.15,
    });

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top 80%",
      once: true,

      onEnter: () => {
        // IMAGE REVEAL
        gsap.to(wrapper, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.inOut",

          // IMPORTANT
          // Tell Hero that image animation is finished
          onComplete: () => {
            wrapper.dispatchEvent(
              new CustomEvent("reveal-image-complete")
            );
          },
        });

        // IMAGE SCALE
        gsap.to(imgs, {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        });
      },
    });
  });

      // 4) Parallax — data-parallax="60" moves the image slower/faster than scroll
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((wrapper) => {
        const imgs = wrapper.querySelectorAll("img");
        if (!imgs.length) return;

        const strength = parseFloat(wrapper.dataset.parallax || "60");

        gsap.fromTo(
          imgs,
          { y: -strength },
          {
            y: strength,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    };

    const ctx = gsap.context(() => {});
    let onIntroStart: (() => void) | null = null;

    if (document.documentElement.dataset.preloading === "true") {
      // Opening animation is playing — hold every reveal until it says go
      onIntroStart = () => ctx.add(build);
      window.addEventListener("teknix:intro-start", onIntroStart, {
        once: true,
      });
    } else {
      ctx.add(build);
    }

    return () => {
      if (onIntroStart) {
        window.removeEventListener("teknix:intro-start", onIntroStart);
      }
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
