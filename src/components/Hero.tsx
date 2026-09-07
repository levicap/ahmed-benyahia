"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
} from "lucide-react";
import { data } from "@/data/portfolio";
import { TechLogo } from "@/components/ui/TechLogo";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <motion.article
        className={styles.panel}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <aside className={styles.profile} aria-label="Profile and delivery record">
          <div className={styles.portrait}>
            <Image
              src={data.photo}
              alt={`Portrait of ${data.name}`}
              fill
              sizes="(max-width: 700px) 52vw, 240px"
              priority
            />
          </div>

          <div className={styles.stats}>
            {data.stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className={styles.content}>
          <header className={styles.identity}>
            <div>
              <p>{data.name}</p>
              <span>Full-Stack &amp; AI Automation Engineer</span>
            </div>

            <nav className={styles.socials} aria-label="Professional profiles">
              <a href={data.social.upwork} target="_blank" rel="noreferrer" aria-label="Upwork profile" title="Upwork">
                <span><TechLogo name="Upwork" size={17} className={styles.socialFallback} /></span>
                <strong>Upwork</strong>
              </a>
              <a href={data.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub">
                <span><TechLogo name="GitHub" size={17} className={styles.socialFallback} /></span>
                <strong>GitHub</strong>
              </a>
              <a href={data.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
                <span><TechLogo name="LinkedIn" size={17} className={styles.socialFallback} /></span>
                <strong>LinkedIn</strong>
              </a>
            </nav>
          </header>

          <div className={styles.message}>
            <h1 id="hero-title">
              Build smarter. <em>Work lighter.</em>
            </h1>
            <p className={styles.lede}>
              I build the systems that take repetitive work off your team’s plate—from
              SaaS products and internal tools to RAG assistants, voice agents, and
              n8n workflows. Information moves where it should, updates happen
              automatically, and everyone can see what happens next. I combine
              full-stack engineering, automation tools, and custom code to make
              operations clearer and more reliable.
            </p>

            <div className={styles.actions}>
              <a href={data.social.calendly} target="_blank" rel="noreferrer" className={styles.primary}>
                <CalendarDays size={16} aria-hidden="true" />
                Book a free consultation
                <ArrowRight size={14} aria-hidden="true" />
              </a>
              <a href="#projects" className={styles.secondary}>
                View case studies
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>

            <p className={styles.trust}>
              <Check size={14} aria-hidden="true" />
              Trusted for production AI, automation, and SaaS delivery
            </p>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
