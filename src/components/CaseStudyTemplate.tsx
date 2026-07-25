"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import type { Project } from "@/types";

const TECH_SLUG: Record<string, string> = {
  "Next.js":          "nextdotjs",
  "React":            "react",
  "Node.js":          "nodedotjs",
  "Python":           "python",
  "TypeScript":       "typescript",
  "JavaScript":       "javascript",
  "Electron.js":      "electron",
  "Go":               "go",
  "Express.js":       "express",
  "Spring Boot":      "springboot",
  "PostgreSQL":       "postgresql",
  "MongoDB":          "mongodb",
  "SQLite":           "sqlite",
  "Supabase":         "supabase",
  "Airtable API":     "airtable",
  "Recharts":         "recharts",
  "Prisma":           "prisma",
  "Docker":           "docker",
  "Vercel":           "vercel",
  "GitHub Actions":   "githubactions",
  "GitHub API":       "github",
  "Tailwind CSS":     "tailwindcss",
  "OpenAI API":       "openai",
  "Gemini API":       "googlegemini",
  "n8n":              "n8n",
  "Twilio":           "twilio",
  "Asana API":        "asana",
  "Gmail":            "gmail",
  "Slack API":        "slack",
  "Fathom API":       "fathom",
  "WhatsApp":         "whatsapp",
  "Webflow API":      "webflow",
  "LinkedIn API":     "linkedin",
  "Chrome Extension": "googlechrome",
  "LangChain":        "langchain",
};

const TAG_COLORS: Record<string, string> = {
  "Next.js": "#64748b",
  React: "#61dafb",
  "Node.js": "#5fa04e",
  Python: "#3776ab",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "Electron.js": "#47848f",
  Go: "#00add8",
  "Express.js": "#9ca3af",
  "Spring Boot": "#6db33f",
  PostgreSQL: "#4169e1",
  MongoDB: "#47a248",
  SQLite: "#3f8fd2",
  Supabase: "#3ecf8e",
  "Airtable API": "#18bfff",
  Recharts: "#8884d8",
  Prisma: "#7c3aed",
  Docker: "#2496ed",
  Vercel: "#64748b",
  "GitHub Actions": "#2088ff",
  "GitHub API": "#8b949e",
  "Tailwind CSS": "#06b6d4",
  "OpenAI API": "#10a37f",
  "Gemini API": "#8e75b2",
  n8n: "#ea4b71",
  Twilio: "#f22f46",
  "Asana API": "#f06a6a",
  Gmail: "#ea4335",
  "Slack API": "#e01e5a",
  "Fathom API": "#ff5a5f",
  WhatsApp: "#25d366",
  "Webflow API": "#146ef5",
  "LinkedIn API": "#0a66c2",
  "Chrome Extension": "#4285f4",
  LangChain: "#10b981",
  "Apollo API": "#3d6ce7",
  LLM: "#c084fc",
  AI: "#c084fc",
  Webhooks: "#f97316",
  "Vector Database": "#10b981",
  ElevenLabs: "#9ca3af",
  "Kit.com": "#ef4444",
  "Prompt Orchestration": "#a855f7",
  "Image Generation": "#ec4899",
  "Google API": "#4285f4",
  RapidAPI: "#0055da",
  "Gospott CRM": "#22c55e",
  "Clarify CRM": "#14b8a6",
  "Indeed Scraping": "#2557a7",
  "Web Scraping": "#f59e0b",
  FindMyEmail: "#06b6d4",
  "Gantic CRM": "#64748b",
  "Spott API": "#22c55e",
  "CRM Automation": "#14b8a6",
  Transcription: "#8b5cf6",
  ERP: "#0ea5e9",
  "Desktop App": "#47848f",
};

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  const num = parseInt(normalized, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getTagColor(tag: string): string {
  return TAG_COLORS[tag] ?? "#10b981";
}

function TechPill({ tag }: { tag: string }) {
  const slug = TECH_SLUG[tag];
  const [err, setErr] = useState(false);
  const color = getTagColor(tag);

  return (
    <span
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold"
      style={{
        background: `linear-gradient(135deg, ${hexToRgba(color, 0.16)}, var(--surface))`,
        borderColor: hexToRgba(color, 0.34),
        color: "var(--text-muted)",
      }}
    >
      {slug && !err && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://api.iconify.design/simple-icons:${slug}.svg?color=${encodeURIComponent(color)}`}
          alt=""
          width={13}
          height={13}
          className="h-3.5 w-3.5 shrink-0"
          onError={() => setErr(true)}
        />
      )}
      {(!slug || err) && (
        <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      )}
      {tag}
    </span>
  );
}

const SECTIONS: readonly { num: string; label: string; key: keyof CaseStudy }[] = [
  { num: "01", label: "The Problem",  key: "problem"  },
  { num: "02", label: "The Solution", key: "solution" },
  { num: "03", label: "The Results",  key: "results"  },
];

const ease = [0.4, 0, 0.2, 1] as const;

interface Props {
  study: CaseStudy;
  project: Project | undefined;
}

export function CaseStudyTemplate({ study, project }: Props) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)" }}>
      {/* Sticky nav */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={15} />
            All Projects
          </Link>
          <Link href="/" className="text-sm font-black" style={{ color: "var(--text)" }}>
            Ahmed<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="py-16 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Category + links row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              {project?.category ?? "Project"}
            </span>
            {project?.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                <ExternalLink size={12} /> Live Demo
              </a>
            )}
            {project?.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                <GitBranch size={12} /> View Code
              </a>
            )}
          </div>

          {/* Title */}
          <h1
            className="font-black mb-5 leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.04em",
              color: "var(--text)",
            }}
          >
            {project?.title ?? "Case Study"}
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            {project?.description}
          </p>

          {(project?.bestFor || project?.resultLabel) && (
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {project.bestFor && (
                <div
                  className="rounded-xl border p-4"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <p
                    className="mb-1 text-[10px] font-black uppercase tracking-[0.16em]"
                    style={{ color: "var(--accent)" }}
                  >
                    Best for
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {project.bestFor}
                  </p>
                </div>
              )}
              {project.resultLabel && (
                <div
                  className="rounded-xl border p-4"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <p
                    className="mb-1 text-[10px] font-black uppercase tracking-[0.16em]"
                    style={{ color: "var(--accent)" }}
                  >
                    Impact
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {project.resultLabel}
                  </p>
                </div>
              )}
            </div>
          )}

        </motion.section>

        {/* NUMBERED SECTIONS */}
        {SECTIONS.map(({ num, label, key }, i) => {
          const section = study[key];
          const bullets = key === "solution" ? study.solution.bullets : [];

          return (
            <motion.section
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.06 }}
              className="py-14 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex gap-8 md:gap-16">
                {/* Big decorative number */}
                <div className="shrink-0 w-12 md:w-16 pt-1">
                  <span
                    className="font-black leading-none select-none"
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      color: "var(--accent)",
                      opacity: 0.18,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    {label}
                  </p>
                  <h3
                    className="text-xl md:text-2xl font-black mb-5"
                    style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
                  >
                    {section.subtitle}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {section.content}
                  </p>

                  {bullets.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>
                        Key capabilities:
                      </p>
                      <ul className="space-y-3">
                        {bullets.map((b, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: j * 0.05 }}
                            className="flex items-start gap-3 text-sm leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span
                              className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "var(--accent)" }}
                            />
                            {b}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          );
        })}

        {/* STACK */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="pt-14"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--accent)" }}
          >
            Stack Used
          </p>
          <div className="flex flex-wrap gap-2.5">
            {(project?.tags ?? []).map((tag) => (
              <TechPill key={tag} tag={tag} />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
