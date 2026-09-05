"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, FileQuestion } from "lucide-react";
import styles from "./FAQ.module.css";

const FAQS = [
  { q: "Do you work with non-technical clients?", a: "Yes — most of my clients aren't developers. I handle all the technical scoping, architecture, and delivery. You describe the problem and the outcome you want; I figure out how to build it and explain it in plain language throughout." },
  { q: "What's your timezone and availability?", a: "I'm based in Sfax, Tunisia (UTC+1). I'm available Monday–Friday, 9am–5pm local time, and I maintain async communication with clients across EU and US timezones. Response time is typically under a few hours during business hours." },
  { q: "How long does a typical project take?", a: "Automation pipelines and AI integrations usually take 1–2 weeks. Full SaaS platforms or complex RAG systems typically run 3–6 weeks depending on scope. I'll give you a precise timeline in the proposal before any work begins." },
  { q: "Do you offer retainer or ongoing support?", a: "Yes. All projects include 30 days of post-launch support. After that, I offer monthly retainer packages for ongoing maintenance, feature additions, and monitoring. Ask me about current availability on the discovery call." },
  { q: "What's included in your pricing?", a: "Every project includes scoping, build, testing, documentation, and 30 days of post-launch support. Pricing is fixed per project — no hourly surprises. Typical automation projects start from $500. Complex AI systems or SaaS platforms are scoped individually." },
  { q: "Can you work with our existing tools and stack?", a: "Almost certainly yes. I've integrated with 50+ platforms — HubSpot, Stripe, Twilio, Webflow, Supabase, Apollo, ElevenLabs, and many more. If you're already using a CRM, database, or automation tool, I build around it rather than replacing it." },
  { q: "What happens if I'm not happy with the result?", a: "I offer unlimited revisions within the agreed scope until you're satisfied, plus a satisfaction guarantee — if the deliverable genuinely doesn't match what we scoped, I'll fix it at no extra cost. My guarantee section on this page covers the full details." },
  { q: "Do you sign NDAs or work under confidentiality?", a: "Yes, absolutely. I sign NDAs before any sensitive information is shared. Client data and proprietary workflows are never shared or reused. Several of my automation projects don't appear publicly here for exactly that reason." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className={styles.item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .035 }}>
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
        <span>{q}</span>
        <ChevronDown size={15} aria-hidden="true" className={open ? styles.rotated : ""} />
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div className={styles.answer} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}><p>{a}</p></motion.div>}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <aside className={styles.intro}>
          <p className={styles.eyebrow}>Frequently asked</p>
          <h2 id="faq-title">Questions before we build?</h2>
          <p>Clear answers about process, timelines, pricing, support, and how we work together.</p>
          <div className={styles.document}><FileQuestion size={17} aria-hidden="true" /><div><strong>Project context welcomed</strong><span>The more specific the problem, the more useful the first call.</span></div></div>
        </aside>
        <div className={styles.base}>
          <div className={styles.items}>{FAQS.map((item, index) => <FAQItem key={item.q} {...item} index={index} />)}</div>
        </div>
      </div>
    </section>
  );
}
