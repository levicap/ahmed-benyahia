"use client";

import { motion } from "framer-motion";
import { GitPullRequestArrow, ShieldCheck } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <motion.header className={styles.header} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><p className={styles.eyebrow}>How I work</p><h2 id="process-title">From unclear process to reliable production.</h2></div>
          <p>Every project follows a visible delivery loop. You know what is being built, what changed, and what happens next.</p>
        </motion.header>
        <div className={styles.pipeline}>
          {data.process.map((step, index) => (
            <motion.article key={step.step} className={styles.step} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}>
              <span className={styles.node}>{String(step.step).padStart(2,"0")}</span>
              <span className={styles.badge}>{step.badge}</span><h3>{step.title}</h3><p>{step.description}</p>
            </motion.article>
          ))}
        </div>
        <div className={styles.handoff}><GitPullRequestArrow size={18} /><p><strong>Human review stays in the loop.</strong> Working modules, decisions, and risks are shared before launch—not after.</p><span><ShieldCheck size={11} /> 30-day support</span></div>
      </div>
    </section>
  );
}
