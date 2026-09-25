"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://emailjsfuntions-428145106157.asia-south1.run.app/teknix-contact-form-new",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

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
    <section className={styles.section}>
      <div className={styles.container} data-reveal="up">
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>CONTACT</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>LET US CONNECT YOU</span>
            </span>
          </h2>

          <p>Share a few details and our team will get back to you.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>NAME</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>

            <label className={styles.field}>
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </label>
          </div>

          <label className={styles.field}>
            <span>MOBILE</span>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
            />
          </label>

          <label className={styles.field}>
            <span>YOUR MESSAGE</span>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </label>

          {status === "success" && (
            <p style={{ color: "green", fontWeight: 600 }}>
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "red", fontWeight: 600 }}>
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "loading"}
          >
            <span>{status === "loading" ? "Sending..." : "SEND MESSAGE"}</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}