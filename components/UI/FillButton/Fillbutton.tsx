"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import gsap from "gsap";
import styles from "./FillButton.module.css";

interface FillButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function FillButton({
  children,
  href,
  onClick,
  className = "",
}: FillButtonProps) {
  const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);

  const getPoint = (e: MouseEvent) => {
    const rect = (btnRef.current as HTMLElement).getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleEnter = (e: MouseEvent) => {
    const { x, y } = getPoint(e);
    gsap.killTweensOf(fillRef.current);
    gsap.set(fillRef.current, { left: x, top: y, scale: 0 });
    gsap.to(fillRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = (e: MouseEvent) => {
    const { x, y } = getPoint(e);
    gsap.killTweensOf(fillRef.current);
    gsap.to(fillRef.current, {
      left: x,
      top: y,
      scale: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const content = (
    <>
      <span ref={fillRef} className={styles.fill} />
      <span className={styles.label}>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`${styles.btn} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
    >
      {content}
    </button>
  );
}