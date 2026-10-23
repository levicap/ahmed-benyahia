"use client";

import { useState } from "react";
import { EMAIL } from "@/data/site";
import { Arrow } from "./Brand";
import { Dropdown } from "./Dropdown";

const AREAS = [
  "AI & knowledge systems",
  "Workflow automation",
  "AI voice & chat agents",
  "SaaS & custom software",
  "Lead & data pipelines",
  "Not sure yet",
];

/** Opens the visitor's email client with the enquiry pre-filled — no backend needed. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Project enquiry — ${f.get("area")}${f.get("company") ? ` · ${f.get("company")}` : ""}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Company: ${f.get("company") || "—"}`,
      `Area: ${f.get("area")}`,
      "",
      String(f.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="cform reveal" onSubmit={onSubmit}>
      <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
      <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
      <label>Company<input type="text" name="company" autoComplete="organization" /></label>
      <Dropdown name="area" label="Area of interest" options={AREAS} />
      <label className="full">
        Which workflow takes the most time today?
        <textarea name="message" rows={5} required />
      </label>
      <div className="row">
        <span style={{ fontSize: 13, color: "var(--s-on-night-muted)" }} aria-live="polite">
          {sent ? "Your email app should open with the message ready to send." : "Confidential. NDA available on request."}
        </span>
        <button type="submit" className="btn btn-acc go">Send enquiry <Arrow size={18} /></button>
      </div>
    </form>
  );
}
