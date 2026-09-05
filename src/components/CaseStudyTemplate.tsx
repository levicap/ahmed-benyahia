"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ExternalLink,
  GitBranch,
  Images,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { projectMedia } from "@/data/projectMedia";
import { data } from "@/data/portfolio";
import { toSlug } from "@/lib/slug";
import type { Project } from "@/types";
import { getTechBrand } from "@/data/techBrand";
import { TechLogo } from "@/components/ui/TechLogo";
import styles from "./CaseStudyTemplate.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  study: CaseStudy;
  project: Project | undefined;
}

export function CaseStudyTemplate({ study, project }: Props) {
  const slug = project ? toSlug(project.title) : "";
  const gallery = projectMedia[slug] ?? [];
  const [selectedImage, setSelectedImage] = useState(0);
  const activeMedia = gallery[selectedImage];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft size={15} aria-hidden="true" />
            Selected work
          </Link>
          <a
            href={data.social.calendly}
            target="_blank"
            rel="noreferrer"
            className={styles.headerCta}
          >
            Discuss a similar project
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease }}
        >
          <div className={styles.heroCopy}>
            <div className={styles.eyebrowRow}>
              <span>Case study</span>
              <i aria-hidden="true" />
              <span>{project?.category ?? "Client project"}</span>
            </div>
            <h1>{project?.title ?? "Case Study"}</h1>
            <p className={styles.lede}>{project?.description}</p>

            <div className={styles.heroActions}>
              {project?.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.primaryLink}>
                  View live product
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
              {project?.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
                  <GitBranch size={14} aria-hidden="true" />
                  View code
                </a>
              )}
            </div>

            <div className={styles.heroStack} aria-label="Technology used in this project">
              <span className={styles.heroStackLabel}>System stack</span>
              <div className={styles.heroStackList}>
                {(project?.tags ?? []).map((tag) => (
                  <div
                    key={tag}
                    className={styles.heroTech}
                    style={{ "--brand": getTechBrand(tag)?.color ?? "var(--accent)" } as CSSProperties}
                  >
                    <span className={styles.heroTechIcon}>
                      <TechLogo name={tag} size={19} className={styles.techFallback} />
                    </span>
                    <strong>{tag}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.contextGrid}>
            <article>
              <small>Built for</small>
              <strong>{project?.bestFor ?? "A real operational bottleneck"}</strong>
            </article>
            <article>
              <small>Business impact</small>
              <strong>{project?.resultLabel ?? "A faster, more reliable workflow"}</strong>
            </article>
            <article>
              <small>Delivery approach</small>
              <strong>Scoped, built, tested, and documented</strong>
            </article>
          </div>
        </motion.section>

        <section className={styles.storySection} aria-label="Project story">
          <article className={styles.storyCard}>
            <span className={styles.stepNumber}>01</span>
            <div>
              <p className={styles.sectionLabel}>The challenge</p>
              <h2>{study.problem.subtitle}</h2>
              <p>{study.problem.content}</p>
            </div>
          </article>

          <article className={`${styles.storyCard} ${styles.solutionCard}`}>
            <span className={styles.stepNumber}>02</span>
            <div>
              <p className={styles.sectionLabel}>The build</p>
              <h2>{study.solution.subtitle}</h2>
              <p>{study.solution.content}</p>
              <ul>
                {study.solution.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span><Check size={13} aria-hidden="true" /></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className={`${styles.storyCard} ${styles.resultCard}`}>
            <span className={styles.stepNumber}>03</span>
            <div>
              <p className={styles.sectionLabel}>The outcome</p>
              <h2>{study.results.subtitle}</h2>
              <p>{study.results.content}</p>
            </div>
          </article>
        </section>

        {activeMedia && (
          <motion.section
            className={styles.gallerySection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionLabel}>Inside the build</p>
                <h2>See the system, not just the summary.</h2>
              </div>
              <span className={styles.galleryCount}>
                <Images size={15} aria-hidden="true" />
                {gallery.length} project views
              </span>
            </div>

            <div className={styles.featuredMedia}>
              <div className={styles.browserBar} aria-hidden="true">
                <span /><span /><span />
                <small>{project?.title}</small>
              </div>
              <div className={styles.featuredImage}>
                <Image
                  key={activeMedia.src}
                  src={activeMedia.src}
                  alt={activeMedia.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1120px"
                  className={styles.mediaImage}
                />
              </div>
              <p>{activeMedia.caption}</p>
            </div>

            {gallery.length > 1 && (
              <div className={styles.thumbnailGrid}>
                {gallery.map((item, index) => (
                  <button
                    type="button"
                    key={item.src}
                    onClick={() => setSelectedImage(index)}
                    className={index === selectedImage ? styles.activeThumbnail : undefined}
                    aria-label={`Show ${item.caption}`}
                    aria-pressed={index === selectedImage}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 42vw, 180px"
                      className={styles.thumbnailImage}
                    />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            )}
          </motion.section>
        )}

        <section className={styles.projectCta}>
          <div>
            <p className={styles.sectionLabel}>Have a similar bottleneck?</p>
            <h2>Let’s map the fastest path from manual work to a reliable system.</h2>
            <p>Bring the workflow that is slowing your team down. You’ll leave with a clearer next step—even if we do not work together.</p>
          </div>
          <a href={data.social.calendly} target="_blank" rel="noreferrer">
            <CalendarDays size={17} aria-hidden="true" />
            Book a free strategy call
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}
