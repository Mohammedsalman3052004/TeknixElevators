"use client";

import { FormEvent, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import styles from "./EnquiryPopup.module.css";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const ENDPOINT =
  "https://emailjsfuntions-428145106157.asia-south1.run.app/teknix-contact-form";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* Lock page scroll + focus first field while open */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  /* Reset form shortly after closing (lets the exit feel clean) */
  useEffect(() => {
    if (isOpen) return;

    const timeout = setTimeout(() => {
      setForm(initialForm);
      setStatus("idle");
    }, 300);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  /* Auto-close after a successful submit */
  useEffect(() => {
    if (status !== "success") return;

    const timeout = setTimeout(close, 2200);
    return () => clearTimeout(timeout);
  }, [status, close]);

  const handleBackdropMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      close();
    }
  };

  const handleChange =
    (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          floors: "Not specified", // keeps payload compatible with the contact-form endpoint
          source: "Enquiry Popup",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Floating email button (sits above the WhatsApp button) */}
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-label="Send us an enquiry"
        aria-haspopup="dialog"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.overlay} onMouseDown={handleBackdropMouseDown}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
          >
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close enquiry form"
            >
              ×
            </button>

            <div className={styles.heading}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span>ENQUIRY</span>
                <span className={styles.eyebrowLine} />
              </div>

              <h2 id="enquiry-title">LET US CONNECT YOU</h2>
              <p>Share a few details and our team will get back to you.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>NAME</span>
                <input
                  ref={firstFieldRef}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  autoComplete="name"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>EMAIL</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>MOBILE</span>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange("mobile")}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{7,15}"
                  title="Please enter a valid mobile number"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>YOUR MESSAGE</span>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                />
              </label>

              <div className={styles.feedback} aria-live="polite">
                {status === "success" && (
                  <p className={styles.success}>
                    Thank you — your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className={styles.error}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "loading" || status === "success"}
              >
                <span>
                  {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                </span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}