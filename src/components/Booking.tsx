"use client";

import { motion } from "framer-motion";
import {
  Briefcase, Link2, MessageCircle, GitBranch, Mail, CalendarClock,
} from "lucide-react";
import { data } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SOCIAL_LINKS = [
  { key: "upwork",   label: "Upwork",    Icon: Briefcase },
  { key: "linkedin", label: "LinkedIn",  Icon: Link2 },
  { key: "whatsapp", label: "WhatsApp",  Icon: MessageCircle },
  { key: "github",   label: "GitHub",    Icon: GitBranch },
  { key: "email",    label: "Email",     Icon: Mail },
] as const;

export function Booking() {
  const { social } = data;
  const hasCalendly =
    social.calendly && !social.calendly.endsWith("calendly.com");

  return (
    <section
      id="booking"
      className="py-24 border-t"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      aria-label="Book a call"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mb-10"
        >
          <SectionHeader
            label="Let's Build Together"
            title={`Ready to start\nyour project?`}
            subtitle="Book a free 30-minute strategy call. No sales pitch — just real value, clarity, and a clear path forward."
            center
          />
        </motion.div>

        {/* Calendly embed or placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border overflow-hidden mb-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {hasCalendly ? (
            <iframe
              src={social.calendly}
              width="100%"
              height="630px"
              frameBorder="0"
              title="Book a call"
              className="block"
            />
          ) : (
            /* Placeholder when no real Calendly URL is set */
            <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                style={{
                  background: "var(--accent-dim)",
                  borderColor: "var(--border-accent)",
                  color: "var(--accent)",
                }}
              >
                <CalendarClock size={30} />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>
                  Calendly Embed
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Set your{" "}
                  <code
                    className="font-mono text-xs px-1.5 py-0.5 rounded"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                  >
                    social.calendly
                  </code>{" "}
                  URL in{" "}
                  <code
                    className="font-mono text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    /src/data/portfolio.ts
                  </code>
                </p>
              </div>
              <MagneticButton>
                <a
                  href={social.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <CalendarClock size={15} />
                  Schedule a Call
                </a>
              </MagneticButton>
            </div>
          )}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
            or reach out directly
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {SOCIAL_LINKS.map(({ key, label, Icon }) => {
            const url = social[key as keyof typeof social];
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target={key === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <Icon size={15} />
                {label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
