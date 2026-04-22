"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    q: "Do you work with non-technical clients?",
    a: "Yes — most of my clients aren't developers. I handle all the technical scoping, architecture, and delivery. You describe the problem and the outcome you want; I figure out how to build it and explain it in plain language throughout.",
  },
  {
    q: "What's your timezone and availability?",
    a: "I'm based in Sfax, Tunisia (UTC+1). I'm available Monday–Friday, 9am–5pm local time, and I maintain async communication with clients across EU and US timezones. Response time is typically under a few hours during business hours.",
  },
  {
    q: "How long does a typical project take?",
    a: "Automation pipelines and AI integrations usually take 1–2 weeks. Full SaaS platforms or complex RAG systems typically run 3–6 weeks depending on scope. I'll give you a precise timeline in the proposal before any work begins.",
  },
  {
    q: "Do you offer retainer or ongoing support?",
    a: "Yes. All projects include 30 days of post-launch support. After that, I offer monthly retainer packages for ongoing maintenance, feature additions, and monitoring. Ask me about current availability on the discovery call.",
  },
  {
    q: "What's included in your pricing?",
    a: "Every project includes scoping, build, testing, documentation, and 30 days of post-launch support. Pricing is fixed per project — no hourly surprises. Typical automation projects start from $500. Complex AI systems or SaaS platforms are scoped individually.",
  },
  {
    q: "Can you work with our existing tools and stack?",
    a: "Almost certainly yes. I've integrated with 50+ platforms — HubSpot, Stripe, Twilio, Webflow, Supabase, Apollo, ElevenLabs, and many more. If you're already using a CRM, database, or automation tool, I build around it rather than replacing it.",
  },
  {
    q: "What happens if I'm not happy with the result?",
    a: "I offer unlimited revisions within the agreed scope until you're satisfied, plus a satisfaction guarantee — if the deliverable genuinely doesn't match what we scoped, I'll fix it at no extra cost. My guarantee section on this page covers the full details.",
  },
  {
    q: "Do you sign NDAs or work under confidentiality?",
    a: "Yes, absolutely. I sign NDAs before any sensitive information is shared. Client data and proprietary workflows are never shared or reused. Several of my automation projects don't appear publicly here for exactly that reason.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: index * 0.05 }}
      viewport={{ once: true, margin: "-16px" }}
      className="border-b last:border-b-0"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-sm font-semibold leading-snug transition-colors duration-200 group-hover:opacity-80"
          style={{ color: "var(--text)" }}
        >
          {q}
        </span>
        <ChevronDown
          size={17}
          className="shrink-0 transition-transform duration-300"
          style={{
            color: "var(--accent)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-sm leading-relaxed pb-5"
              style={{ color: "var(--text-muted)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="FAQ"
            title="Common questions"
            subtitle="Everything you need to know before booking a call."
            center
          />
        </motion.div>

        <div
          className="rounded-2xl border overflow-hidden"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div className="px-6">
            {FAQS.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
