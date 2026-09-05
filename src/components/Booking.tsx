"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CalendarDays, CheckCircle2, Clock3, GitBranch, Link2, Mail } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Booking.module.css";

const CONTACTS = [
  { label: "Email", href: data.social.email, Icon: Mail },
  { label: "Upwork", href: data.social.upwork, Icon: BriefcaseBusiness },
  { label: "LinkedIn", href: data.social.linkedin, Icon: Link2 },
  { label: "GitHub", href: data.social.github, Icon: GitBranch },
];

export function Booking() {
  return (
    <section id="booking" className={styles.section} aria-labelledby="booking-title">
      <motion.div className={styles.card} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .6, ease: [.22, 1, .36, 1] }}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Available for selected projects</p>
          <h2 id="booking-title">Bring me the workflow that is <span>slowing you down.</span></h2>
          <p className={styles.lede}>We’ll identify the real bottleneck, decide what should be automated, and map the smallest reliable system worth building.</p>
          <a href={data.social.calendly} target="_blank" rel="noreferrer" className={styles.primary}>
            <CalendarDays size={17} aria-hidden="true" /> Book a free strategy call <ArrowRight size={15} aria-hidden="true" />
          </a>
          <div className={styles.direct}>
            <span>Or connect directly</span>
            <nav className={styles.socials} aria-label="Contact profiles">
              {CONTACTS.map(({ label, href, Icon }) => href && (
                <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}>
                  <Icon size={13} aria-hidden="true" /> {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <aside className={styles.panel} aria-label="What to expect">
          <p className={styles.panelLabel}>What happens next</p>
          <h3>A useful conversation, even if we do not work together.</h3>
          <div className={styles.expectations}>
            <div><span><Clock3 size={15} /></span><p><strong>30 focused minutes</strong><small>Enough time to understand the workflow.</small></p></div>
            <div><span><CheckCircle2 size={15} /></span><p><strong>No generic sales pitch</strong><small>We discuss your actual operation.</small></p></div>
            <div><span><ArrowRight size={15} /></span><p><strong>Clear next steps</strong><small>Scope, risks, and the sensible path forward.</small></p></div>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}
