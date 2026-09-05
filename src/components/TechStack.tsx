"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { getTechBrand } from "@/data/techBrand";
import { TechLogo } from "@/components/ui/TechLogo";
import styles from "./TechStack.module.css";

const TOOL_GROUPS = [
  {
    id: "01",
    title: "Interface layer",
    command: "render.user_experience()",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "JavaScript", "Electron.js"],
  },
  {
    id: "02",
    title: "Intelligence layer",
    command: "reason.with_context()",
    tools: ["LangChain", "OpenAI", "ElevenLabs", "Claude", "Gemini"],
  },
  {
    id: "03",
    title: "Automation layer",
    command: "orchestrate.operations()",
    tools: ["n8n", "Zapier", "Make", "HubSpot"],
  },
  {
    id: "04",
    title: "Infrastructure layer",
    command: "ship.reliably()",
    tools: ["Node.js", "Express.js", "Nest.js", "Python", "PostgreSQL", "MongoDB", "SQLite", "Supabase", "Docker", "Vercel", "GitHub Actions"],
  },
] as const;

export function TechStack() {
  return (
    <section id="stack" className={styles.section} aria-labelledby="stack-title">
      <div className={styles.inner}>
        <motion.div className={styles.intro} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} viewport={{ once: true }}>
          <div>
            <p className={styles.eyebrow}>Technology</p>
            <h2 id="stack-title">A practical stack for intelligent systems.</h2>
          </div>
          <div className={styles.stackNote}>
            <span><i /> Built for maintainability</span>
            <p>Automation platforms when speed matters. Custom code when control matters. Every tool is chosen around the workflow—not the trend.</p>
          </div>
        </motion.div>
        <div className={styles.pipeline} aria-label="Technology stack grouped by system layer">
          {TOOL_GROUPS.map((group, groupIndex) => {
            const tools = data.stack.filter((tool) => (group.tools as readonly string[]).includes(tool.name));
            return (
              <motion.article
                className={styles.group}
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: .42, delay: groupIndex * .07 }}
              >
                <header>
                  <span className={styles.groupIndex}>{group.id}</span>
                  <div><h3>{group.title}</h3><code>{group.command}</code></div>
                  <span className={styles.toolCount}>{tools.length} tools</span>
                </header>
                <div className={styles.tools} role="list">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className={`${styles.tool} ${tool.name === "Claude" ? styles.claude : ""}`}
                      role="listitem"
                      style={{ "--brand": getTechBrand(tool.name)?.color ?? "var(--accent-2)" } as CSSProperties}
                    >
                      <span className={styles.iconPlate}><TechLogo name={tool.name} className={styles.fallback} size={26} /></span>
                      <span><strong>{tool.name}</strong><small>{tool.category}</small></span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
