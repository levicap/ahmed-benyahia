"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cloud, Database, Gauge, Layers, PenTool, Plug, Search, Zap } from "lucide-react";
import { data } from "@/data/portfolio";
import { toSlug } from "@/lib/slug";
import styles from "./Services.module.css";

const icons: Record<string, React.ReactNode> = {
  layers: <Layers size={17} />, zap: <Zap size={17} />, plug: <Plug size={17} />,
  gauge: <Gauge size={17} />, "pen-tool": <PenTool size={17} />, cloud: <Cloud size={17} />,
  database: <Database size={17} />, search: <Search size={17} />,
};

export function Services() {
  const featured = data.services.find((service) => service.size === "featured");
  const rest = data.services.filter((service) => service !== featured);
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <motion.header className={styles.header} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><p className={styles.eyebrow}>What I build</p><h2 id="services-title">Systems that think, move, and report.</h2></div>
          <p>From one broken workflow to a complete product, I scope the smallest reliable system that solves the real business problem.</p>
        </motion.header>

        <div className={styles.capabilities}>
          {featured && (
            <Link href={`/services/${toSlug(featured.title)}`} className={styles.featured}>
              <div className={styles.featuredCopy}>
                <span className={styles.serviceIndex}>Featured capability</span>
                <h3>{featured.title}</h3><p>{featured.description}</p>
                <span className={styles.featuredLink}>Explore this service <ArrowRight size={13} /></span>
              </div>
              <div className={styles.ragMap} aria-label="Example intelligent system architecture">
                <div className={styles.ragNode}><small>01 · connect</small><strong>Your knowledge</strong><span>Documents, calls, tools</span></div>
                <div className={styles.connector}><i /><ArrowRight size={14} /></div>
                <div className={styles.ragNode}><small>02 · understand</small><strong>Relevant context</strong><span>Retrieval with guardrails</span></div>
                <div className={styles.connector}><i /><ArrowRight size={14} /></div>
                <div className={styles.ragNode}><small>03 · deliver</small><strong>Useful action</strong><span>Answers your team can trust</span></div>
              </div>
            </Link>
          )}
          <div className={styles.list}>
            {rest.map((service, index) => (
              <Link key={service.title} href={`/services/${toSlug(service.title)}`} className={styles.card}>
                <span className={styles.number}>{String(index + 2).padStart(2,"0")}</span>
                <span className={styles.icon}>{icons[service.icon] ?? <Layers size={17} />}</span>
                <div className={styles.cardBody}><h3>{service.title}</h3><p>{service.description}</p></div>
                <ArrowUpRight className={styles.arrow} size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
