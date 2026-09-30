"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BrochureModal.module.css";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureHref: string;
  formName: string; // e.g. "Optima Download Form"
}

const countryCodes = [
  { code: "+91", label: "IN +91" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+971", label: "UAE +971" },
  { code: "+61", label: "AU +61" },
  { code: "+65", label: "SG +65" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function BrochureModal({
  isOpen,
  onClose,
  brochureHref,
  formName,
}: BrochureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);

  /* Lock page scroll while open */
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  /* Reset form state whenever the modal is closed */
  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setName("");
      setEmail("");
      setCountryCode("+91");
      setPhone("");
      setStatus("idle");
      setError("");
    }, 300);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email.";
    if (!/^\d{6,12}$/.test(phone.replace(/\s/g, ""))) return "Please enter a valid mobile number.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStatus("submitting");

    /* ---------------------------------------------------------
       TEMPORARY: simulates a submit so the popup flow works now.
       This block gets replaced with the real Cloud Function call
       once the email + Sheets backend is ready. The payload below
       is already shaped the way that call will need it.
    --------------------------------------------------------- */
        const payload = {
      formName,           // e.g. "Optima Download Form"
      name,
      email,
      phone: `${countryCode} ${phone}`,
    };

    try {
      const response = await fetch(
        "https://emailjsfuntions-428145106157.asia-south1.run.app/brochure-download",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setError("Something went wrong. Please try again.");
      return;
    }

    /* Trigger the PDF download only after a successful submit */
    const link = document.createElement("a");
    link.href = brochureHref;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className={styles.overlay} onMouseDown={handleBackdropClick}>
      <div className={styles.dialog} ref={dialogRef} role="dialog" aria-modal="true">
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <span className={styles.eyebrow}>{formName}</span>
        <h3 className={styles.title}>Get the brochure</h3>
        <p className={styles.subtitle}>
          Share your details and the PDF will download right away.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="brochure-name">Name</label>
            <input
              id="brochure-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="brochure-email">Email</label>
            <input
              id="brochure-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="brochure-phone">Mobile number</label>
            <div className={styles.phoneRow}>
              <select
                className={styles.countrySelect}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                aria-label="Country code"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>

              <input
                id="brochure-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98765 43210"
                autoComplete="tel-national"
              />
            </div>
          </div>

          {error && <p className={styles.errorText}>{error}</p>}
          {status === "success" && (
            <p className={styles.successText}>Thank you — your download has started.</p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "submitting" || status === "success"}
          >
            {status === "submitting"
              ? "SUBMITTING..."
              : status === "success"
              ? "DOWNLOADING..."
              : "SUBMIT & DOWNLOAD"}
          </button>
        </form>
      </div>
    </div>
  );
}