"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

interface Tier {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  deliveryTime: string;
  featured?: boolean;
  includes: string[];
  cta: string;
}

const TIERS: Tier[] = [
  {
    name: "Automation Starter",
    price: "$300 – $800",
    priceNote: "depending on scope",
    tagline: "Kill one painful manual task — fast",
    deliveryTime: "3–5 days",
    includes: [
      "1 n8n or Make automation workflow",
      "Up to 3 app & API integrations",
      "Error handling, retries & alert notifications",
      "Full workflow documentation handed off",
      "You own the workflow — zero lock-in",
      "30 days free support after delivery",
      "Free scoping call before any commitment",
    ],
    cta: "Book a free call",
  },
  {
    name: "Full Stack",
    price: "$500 – $2,000",
    priceNote: "depending on scope",
    tagline: "Custom web app or internal tool built end-to-end",
    deliveryTime: "1–3 weeks",
    includes: [
      "Next.js / React frontend",
      "Node.js backend + PostgreSQL / Supabase",
      "Auth (JWT / OAuth2) + role management",
      "Stripe or payment gateway integration",
      "Deployed on Vercel / your infrastructure",
      "Mobile-responsive & production-ready",
      "45 days free support after delivery",
      "1 free revision round included",
    ],
    cta: "Book a free call",
  },
  {
    name: "AI Growth",
    price: "$800 – $2,500",
    priceNote: "depending on scope",
    tagline: "AI pipeline that replaces a part-time hire",
    deliveryTime: "1–2 weeks",
    featured: true,
    includes: [
      "Multi-step n8n automation pipeline",
      "LLM integration (GPT-4o / Claude / Gemini)",
      "RAG chatbot or lead qualification agent",
      "CRM sync, enrichment & deduplication",
      "Loom walkthrough video on delivery",
      "60 days free support after delivery",
      "1 free revision round included",
      "Free scoping call before any commitment",
    ],
    cta: "Book a free call",
  },
  {
    name: "Enterprise",
    price: "$2,500 – $6,000+",
    priceNote: "scoped per project",
    tagline: "Complete AI system — RAG, voice agents, or full SaaS",
    deliveryTime: "2–6 weeks",
    includes: [
      "RAG knowledge system or ElevenLabs Voice AI",
      "Full SaaS platform or internal tool",
      "Vector search + multi-source data ingestion",
      "Auth, payments & admin dashboard",
      "CI/CD pipeline on your infrastructure",
      "NDA signing before project kickoff",
      "90 days free support after delivery",
      "Retainer option for ongoing maintenance",
    ],
    cta: "Let's scope it",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Pricing"
            title="Simple, range-based pricing"
            subtitle="Ranges reflect real project complexity — every project is scoped on a free call so you know the exact cost before anything starts."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true, margin: "-20px" }}
              className="relative flex flex-col rounded-2xl border p-7"
              style={{
                background: tier.featured ? "var(--accent-dim)" : "var(--surface)",
                borderColor: tier.featured ? "var(--accent)" : "var(--border)",
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  <Zap size={11} />
                  Most popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {tier.name}
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className="text-3xl font-bold leading-none"
                    style={{ color: "var(--text)" }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-sm pb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {tier.priceNote}
                  </span>
                </div>
                <p
                  className="text-sm leading-snug mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {tier.tagline}
                </p>
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                    background: "transparent",
                  }}
                >
                  Delivery: {tier.deliveryTime}
                </span>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/#booking"
                className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  tier.featured
                    ? {
                        background: "var(--accent)",
                        color: "#fff",
                      }
                    : {
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                        background: "transparent",
                      }
                }
                onMouseEnter={(e) => {
                  if (!tier.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }
                }}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-8"
          style={{ color: "var(--text-dim)" }}
        >
          All prices in USD. Not sure which tier fits?{" "}
          <Link
            href="/#booking"
            className="underline underline-offset-2 transition-colors duration-200"
            style={{ color: "var(--accent)" }}
          >
            Book a free 20-min scoping call
          </Link>{" "}
          and I'll tell you exactly what you need.
        </motion.p>
      </div>
    </section>
  );
}
