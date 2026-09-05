"use client";

import { motion } from "framer-motion";
import { Check, FileCheck2, LifeBuoy, Milestone, RefreshCw, ShieldCheck } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Guarantee.module.css";

const ICON_MAP: Record<string, React.ReactNode> = {
  "file-check": <FileCheck2 size={18} aria-hidden="true" />,
  "refresh-cw": <RefreshCw size={18} aria-hidden="true" />,
  milestone: <Milestone size={18} aria-hidden="true" />,
  "life-buoy": <LifeBuoy size={18} aria-hidden="true" />,
};

export function Guarantee() {
  return (
    <section id="guarantee" className={styles.section} aria-labelledby="guarantee-title">
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <p className={styles.eyebrow}>Delivery safeguards</p>
            <h2 id="guarantee-title">Clear terms. Predictable delivery.</h2>
          </div>
          <p>Every engagement starts with agreed expectations and visible checkpoints, so you know what is being built, how it will be reviewed, and what happens after launch.</p>
        </motion.div>

        <div className={styles.shell}>
          <div className={styles.guarantees}>
            {data.guarantee.map((item, index) => (
              <motion.article
                key={item.title}
                className={styles.guarantee}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: index * .08 }}
              >
                <div className={styles.ruleLine}><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div className={styles.icon}>{ICON_MAP[item.icon] ?? <ShieldCheck size={18} aria-hidden="true" />}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.status}><Check size={12} aria-hidden="true" /> agreed before kickoff</div>
              </motion.article>
            ))}
          </div>
          <div className={styles.shellFooter}><span>Scope, review points, ownership, and support are documented before implementation begins.</span><strong>No surprises.</strong></div>
        </div>
      </div>
    </section>
  );
}
