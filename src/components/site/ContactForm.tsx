"use client";

import { useState, type FormEvent } from "react";
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

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type SubmitState = "idle" | "sending" | "success" | "error";

/** Sends enquiries through EmailJS without opening the visitor's email client. */
export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("Confidential. NDA available on request.");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitState("error");
      setStatusMessage(`The form is not configured yet. Please email ${EMAIL}.`);
      return;
    }

    const fields = new FormData(form);
    const fromName = String(fields.get("from_name") || "").trim();
    const fromEmail = String(fields.get("from_email") || "").trim();

    setSubmitState("sending");
    setStatusMessage("Sending your enquiry…");

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: fromName,
            from_email: fromEmail,
            reply_to: fromEmail,
            company: String(fields.get("company") || "").trim() || "Not provided",
            area: String(fields.get("area") || "Not specified"),
            message: String(fields.get("message") || "").trim(),
            submitted_at: new Intl.DateTimeFormat("en", {
              year: "numeric",
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            }).format(new Date()),
          },
        }),
      });

      if (!response.ok) throw new Error(await response.text());

      form.reset();
      setSubmitState("success");
      setStatusMessage("Thanks — your enquiry was sent. I’ll reply within one business day.");
    } catch {
      setSubmitState("error");
      setStatusMessage(`Something went wrong. Please try again or email ${EMAIL}.`);
    }
  }

  return (
    <form id="contact-form" className="cform reveal" onSubmit={onSubmit} aria-busy={submitState === "sending"}>
      <label>Full name<input type="text" name="from_name" autoComplete="name" required /></label>
      <label>Work email<input type="email" name="from_email" autoComplete="email" required /></label>
      <label>Company<input type="text" name="company" autoComplete="organization" /></label>
      <Dropdown name="area" label="Area of interest" options={AREAS} />
      <label className="full">
        Which workflow takes the most time today?
        <textarea name="message" rows={5} required />
      </label>
      <div className="row">
        <span
          id="contact-form-status"
          className={`form-status form-status-${submitState}`}
          role={submitState === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {statusMessage}
        </span>
        <button
          type="submit"
          className="btn btn-acc go"
          disabled={submitState === "sending"}
          aria-describedby="contact-form-status"
        >
          {submitState === "sending" ? "Sending…" : "Send enquiry"}
          <Arrow size={18} />
        </button>
      </div>
    </form>
  );
}
