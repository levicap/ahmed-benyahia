"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import { data } from "@/data/portfolio";
import { toSlug } from "@/lib/slug";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Map tag name → simple-icons slug (used with Iconify API)
const TECH_SLUG: Record<string, string> = {
  "Next.js":        "nextdotjs",
  "React":          "react",
  "Node.js":        "nodedotjs",
  "Python":         "python",
  "TypeScript":     "typescript",
  "JavaScript":     "javascript",
  "Electron.js":    "electron",
  "Go":             "go",
  "Express.js":     "express",
  "Spring Boot":    "springboot",
  "PostgreSQL":     "postgresql",
  "MongoDB":        "mongodb",
  "SQLite":         "sqlite",
  "Supabase":       "supabase",
  "Airtable API":   "airtable",
  "Recharts":       "recharts",
  "Prisma":         "prisma",
  "Docker":         "docker",
  "Vercel":         "vercel",
  "GitHub Actions": "githubactions",
  "GitHub API":     "github",
  "Tailwind CSS":   "tailwindcss",
  "OpenAI API":     "openai",
  "Gemini API":     "googlegemini",
  "Claude":         "anthropic",
  "Claude Code":    "anthropic",
  "Codex":          "openai",
  "Cursor":         "cursor",
  "Gemini":         "googlegemini",
  "n8n":            "n8n",
  "Twilio":         "twilio",
  "Asana API":      "asana",
  "Gmail":          "gmail",
  "Slack API":      "slack",
  "Fathom API":     "fathom",
  "WhatsApp":       "whatsapp",
  "Webflow API":    "webflow",
  "LinkedIn API":   "linkedin",
  "Chrome Extension":"googlechrome",
  "LangChain":      "langchain",
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
  Claude: "#cc785c",
  "Claude Code": "#cc785c",
  Codex: "#10a37f",
  Cursor: "#7c3aed",
  Gemini: "#8e75b2",
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

function TechIcon({ tag, color }: { tag: string; color: string }) {
  const slug = TECH_SLUG[tag];
  const [err, setErr] = useState(false);
  if (!slug || err) {
    return <span className="h-2 w-2 rounded-full" style={{ background: color }} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://api.iconify.design/simple-icons:${slug}.svg?color=${encodeURIComponent(color)}`}
      alt={tag}
      width={12}
      height={12}
      className="h-3 w-3 shrink-0"
      onError={() => setErr(true)}
    />
  );
}

function StackBadge({ tag }: { tag: string }) {
  const color = getTagColor(tag);

  return (
    <span
      className="inline-flex h-6 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md border px-2 text-[10.5px] font-semibold"
      style={{
        background: `linear-gradient(135deg, ${hexToRgba(color, 0.16)}, var(--surface))`,
        borderColor: hexToRgba(color, 0.34),
        color: "var(--text-muted)",
      }}
      title={tag}
    >
      <span
        className="grid h-4 w-4 shrink-0 place-items-center rounded"
        style={{ background: hexToRgba(color, 0.14) }}
      >
        <TechIcon tag={tag} color={color} />
      </span>
      <span>{tag}</span>
    </span>
  );
}

const CAT_GRADIENT: Record<string, string> = {
  SaaS:        "from-emerald-400/20 via-teal-400/10 to-blue-400/10",
  "E-Commerce":"from-purple-400/20 via-pink-400/10 to-rose-400/10",
  "Web App":   "from-blue-400/20 via-cyan-400/10 to-sky-400/10",
  "Desktop App":"from-cyan-400/20 via-slate-400/10 to-emerald-400/10",
  API:         "from-amber-400/20 via-orange-400/10 to-red-400/10",
  Mobile:      "from-lime-400/20 via-green-400/10 to-teal-400/10",
};

type Project = (typeof data.projects)[0];

function getProjectLabel(project: Project): string {
  if (project.resultLabel) return project.resultLabel;
  const haystack = `${project.title} ${project.category} ${project.tags.join(" ")}`.toLowerCase();
  if (haystack.includes("crm")) return "CRM Automation";
  if (haystack.includes("dashboard") || haystack.includes("recharts")) return "Dashboard";
  if (project.category === "Desktop App") return "Desktop ERP";
  if (project.category === "AI Automation" || project.category === "Automation") return "Workflow Automation";
  if (project.category === "SaaS") return "Full Stack SaaS";
  if (project.category === "E-Commerce") return "Commerce Platform";
  if (project.category === "AI Tool") return "AI Product";
  return project.category;
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [imgErr, setImgErr] = useState(false);
  const grad = CAT_GRADIENT[project.category] ?? "from-emerald-400/20 to-teal-400/10";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay }}
      className="group relative flex h-full min-h-[560px] w-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* Thumbnail */}
      <div className={`relative h-40 shrink-0 overflow-hidden bg-gradient-to-br md:h-44 lg:h-40 ${grad}`}>
        {project.thumbnail && !imgErr ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-top"
            onError={() => setImgErr(true)}
          />
        ) : (
          /* Placeholder */
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-7xl font-black opacity-10 select-none"
              style={{ color: "var(--accent)" }}
            >
              {project.title[0]}
            </span>
            {/* Grid decoration */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            }}
          >
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "var(--accent)" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={11} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitBranch size={11} /> Code
                </a>
              )}
            </div>
          </div>
        )}

        {/* Category pill */}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <div className="shrink-0">
          <span
            className="mb-2 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black uppercase leading-none tracking-[0.12em]"
            style={{
              background: "var(--accent-dim)",
              borderColor: "var(--border-accent)",
              color: "var(--accent)",
            }}
          >
            {getProjectLabel(project)}
          </span>
          <h3
            className="mb-2 text-[15px] font-bold leading-tight"
            style={{
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-[13px] leading-[1.55]"
            style={{
              color: "var(--text-muted)",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div
          className="mt-4 rounded-xl border p-3"
          style={{
            background: "rgba(255,255,255,0.018)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="mb-1.5 text-[10px] font-black uppercase leading-none tracking-[0.16em]"
            style={{ color: "var(--text-dim)" }}
          >
            Stack
          </p>
          <div className="flex content-start flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <StackBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Case Study link — always pinned to bottom */}
        <div className="mt-auto pt-3">
          <a
            href={`/projects/${toSlug(project.title)}`}
            className="inline-flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 hover:opacity-90"
            style={{
              background: "var(--accent-dim)",
              borderColor: "var(--border-accent)",
              color: "var(--accent)",
            }}
          >
            <span>View Case Study</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

const FULL_STACK_CATS = new Set(["AI Tool", "SaaS", "E-Commerce", "Portfolio", "Web App", "Desktop App"]);
const AUTOMATION_CATS = new Set(["AI Automation", "Automation"]);
const FILTERS = ["All", "AI Automation", "SaaS", "ERP/Desktop", "CRM", "Dashboards", "Full Stack"] as const;
type ProjectFilter = (typeof FILTERS)[number];

function projectMatchesFilter(project: Project, filter: ProjectFilter): boolean {
  const haystack = `${project.title} ${project.category} ${project.tags.join(" ")}`.toLowerCase();

  switch (filter) {
    case "All":
      return true;
    case "AI Automation":
      return AUTOMATION_CATS.has(project.category);
    case "SaaS":
      return project.category === "SaaS" || project.category === "AI Tool";
    case "ERP/Desktop":
      return project.category === "Desktop App" || haystack.includes("erp") || haystack.includes("electron");
    case "CRM":
      return haystack.includes("crm") || haystack.includes("spott") || haystack.includes("gospott") || haystack.includes("clarify");
    case "Dashboards":
      return haystack.includes("dashboard") || haystack.includes("reporting") || haystack.includes("kpi") || project.tags.includes("Recharts");
    case "Full Stack":
      return FULL_STACK_CATS.has(project.category);
  }
}

export function Projects() {
  const [active, setActive] = useState<ProjectFilter>("All");

  const filtered =
    active === "All"
      ? data.projects
      : data.projects.filter((project) => projectMatchesFilter(project, active));

  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: "var(--bg2)" }}
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            subtitle="A curated selection of recent work — each crafted with precision and a focus on real business outcomes."
          />
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{
                  background: isActive ? "var(--accent)" : "var(--surface)",
                  color: isActive ? "#fff" : "var(--text-muted)",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div layout className="grid auto-rows-fr grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={i * 0.05} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
