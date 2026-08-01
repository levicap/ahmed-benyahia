"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

function LinkedInIcon() {
  return (
    <svg
      className={styles.linkedinBrandIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5ZM8 19H5V8h3v11ZM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764ZM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.397-2.586 7-2.777 7 2.476V19Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <motion.div
        className={styles.heroCard}
        initial={{ opacity: 0, y: 20, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease }}
      >
        <div className={styles.cardBody}>
          <motion.div
            className={styles.copy}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.14 }}
          >
            <motion.div variants={reveal} className={styles.availability} role="status">
              <span className={styles.liveDot} aria-hidden="true" />
              Available for new projects
            </motion.div>

            <motion.h1 variants={reveal} id="hero-title" className={styles.headline}>
              Build smarter.
              <span>Work lighter.</span>
            </motion.h1>

            <motion.p variants={reveal} className={styles.description}>
              I build dependable systems for the work your team is tired of handling by hand. Tasks move
              forward automatically, updates arrive without follow-ups, and everyone stays clear on what is
              happening. With automation and custom software, I make your operations simpler, faster, and
              easier to trust.
            </motion.p>

            <motion.div variants={reveal} className={styles.actions}>
              <a
                href={data.social.calendly}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryAction}
              >
                <CalendarDays size={17} aria-hidden="true" />
                Book a free strategy call
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#projects" className={styles.secondaryAction}>
                View selected work
              </a>
            </motion.div>

            <motion.p variants={reveal} className={styles.callNote}>
              <CheckCircle2 size={14} aria-hidden="true" />
              30 minutes · No sales pitch · Clear next steps
            </motion.p>
          </motion.div>

          <motion.aside
            className={styles.profileCard}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62, ease, delay: 0.24 }}
            aria-label="Profile summary"
          >
            <div className={styles.profileGlow} aria-hidden="true" />

            <div className={`${styles.metricChip} ${styles.projectsChip}`}>
              <strong>{data.stats[0]?.value}</strong>
              <span>projects shipped</span>
            </div>
            <div className={`${styles.metricChip} ${styles.deliveryChip}`}>
              <strong>{data.stats[3]?.value}</strong>
              <span>on-time delivery</span>
            </div>

            <div className={styles.portraitFrame}>
              <Image
                src={data.photo}
                alt={`Portrait of ${data.name}`}
                fill
                priority
                sizes="(max-width: 760px) 132px, 160px"
                className={styles.portrait}
              />
            </div>

            <div className={styles.profileCopy}>
              <h2>{data.name}</h2>
              <p>AI Automation &amp; Full-Stack Engineer</p>
            </div>

            <nav className={styles.socialLinks} aria-label="Professional profiles">
              <a href={data.social.upwork} target="_blank" rel="noreferrer">
                <span className={`${styles.brandIcon} ${styles.upworkIcon}`} aria-hidden="true" />
                Upwork
              </a>
              {data.social.github && (
                <a href={data.social.github} target="_blank" rel="noreferrer">
                  <span className={`${styles.brandIcon} ${styles.githubIcon}`} aria-hidden="true" />
                  GitHub
                </a>
              )}
              <a href={data.social.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
            </nav>
          </motion.aside>
        </div>

        <footer className={styles.cardFooter}>
          <p className={styles.trustStatement}>
            <CheckCircle2 size={18} aria-hidden="true" />
            <strong>Trusted for production AI, automation, and SaaS delivery</strong>
          </p>
          <div className={styles.stats} aria-label="Professional highlights">
            <span><strong>{data.stats[0]?.value}</strong><small>projects</small></span>
            <span><strong>{data.stats[1]?.value}</strong><small>clients</small></span>
            <span><strong>{data.stats[2]?.value}</strong><small>years</small></span>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
