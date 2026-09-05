"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { data } from "@/data/portfolio";
import { toSlug } from "@/lib/slug";
import type { Project } from "@/types";
import { getTechBrand } from "@/data/techBrand";
import { TechLogo } from "@/components/ui/TechLogo";
import styles from "./Projects.module.css";

const FILTERS = ["All", "Automation", "AI & SaaS", "Business systems"] as const;
type Filter = (typeof FILTERS)[number];

const CURATED_TITLES = [
  "Workforce Second Brain Automation Layer",
  "Invoice Parsing & KPI Reporting Dashboard",
  "iPrint AI Voice & Chat Support Agent",
  "Strategy Navigator — AI SaaS Platform",
  "OlalaHomes Property Dashboard",
  "Finoria ERP",
  "Gantic to Spott CRM Migration Sync",
  "MiniSport Internal RAG Assistant",
  "Lead Acquisition System",
];

const CURATED_PROJECTS = CURATED_TITLES
  .map((title) => data.projects.find((project) => project.title === title))
  .filter((project): project is Project => Boolean(project));

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  const text = `${project.title} ${project.category} ${project.tags.join(" ")}`.toLowerCase();
  if (filter === "Automation") return text.includes("automation") || text.includes("n8n");
  if (filter === "AI & SaaS") return text.includes("ai") || project.category === "SaaS" || project.category === "AI Tool";
  return project.category === "Desktop App" || text.includes("crm") || text.includes("erp") || text.includes("dashboard");
}

function getOutcome(project: Project) {
  if (project.resultLabel) return project.resultLabel;
  const title = project.title.toLowerCase();
  if (title.includes("rag") || title.includes("support")) return "Faster customer support";
  if (title.includes("lead") || title.includes("scraper")) return "Less manual prospecting";
  if (title.includes("saas")) return "Production SaaS delivery";
  return "A clearer, faster workflow";
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.36 }}
      className={styles.projectCard}
    >
      <Link href={`/projects/${toSlug(project.title)}`} className={styles.imageLink} aria-label={`Read the ${project.title} case study`}>
        <Image
          src={project.thumbnail}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 34vw"
          className={styles.projectImage}
        />
        <span className={styles.category}>{project.category}</span>
        <span className={styles.imageCta}>Inspect system <ArrowRight size={13} aria-hidden="true" /></span>
      </Link>

      <div className={styles.cardBody}>
        <div className={styles.outcomeRow}>
          <span className={styles.outcomeDot} aria-hidden="true" />
          <span>{getOutcome(project)}</span>
        </div>
        <h3><Link href={`/projects/${toSlug(project.title)}`}>{project.title}</Link></h3>
        <p className={styles.description}>{project.description}</p>

        {project.bestFor && (
          <p className={styles.bestFor}><strong>Best for:</strong> {project.bestFor}</p>
        )}

        <div className={styles.stack} aria-label="Technology used">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className={styles.stackItem}
              style={{ "--brand": getTechBrand(tag)?.color ?? "var(--accent)" } as CSSProperties}
            >
              <i><TechLogo name={tag} size={15} className={styles.stackFallback} /></i>
              <b>{tag}</b>
            </span>
          ))}
          {project.tags.length > 4 && <span className={styles.moreTools}>+{project.tags.length - 4}</span>}
        </div>

        <div className={styles.cardActions}>
          <Link href={`/projects/${toSlug(project.title)}`} className={styles.caseStudyLink}>
            View case study
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <div className={styles.externalLinks}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live`}>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}>
                <GitBranch size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const curated = CURATED_PROJECTS.length === CURATED_TITLES.length
    ? CURATED_PROJECTS
    : data.projects.slice(0, 9);

  const visibleProjects = showAll
    ? data.projects.filter((project) => matchesFilter(project, activeFilter))
    : curated;

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <div>
            <p className={styles.eyebrow}>Selected work</p>
            <h2 id="projects-title">Proof of work, not a wall of logos.</h2>
          </div>
          <p>
            Real systems built around operational problems. Each case study explains the challenge,
            the decisions behind the build, and what changed for the client.
          </p>
        </div>

        {showAll && (
          <div className={styles.filterBar} aria-label="Filter projects">
            {FILTERS.map((filter) => (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        <motion.div layout className={styles.projectGrid}>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.exploreRow}>
          <div>
            <Layers3 size={17} aria-hidden="true" />
            <span><strong>{data.projects.length} projects</strong> across automation, AI, SaaS, and business systems</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setShowAll((value) => !value);
              setActiveFilter("All");
            }}
          >
            {showAll ? "Show selected work" : "Explore all projects"}
            <ArrowRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
