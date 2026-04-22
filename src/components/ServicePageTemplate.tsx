"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, CheckCircle2, ExternalLink,
  GitBranch, ChevronRight,
} from "lucide-react";
import type { ServiceDetail } from "@/data/serviceDetails";
import { data } from "@/data/portfolio";
import { toSlug } from "@/lib/slug";

const ease = [0.4, 0, 0.2, 1] as const;

function RelatedProjectCard({ title }: { title: string }) {
  const project = data.projects.find((p) => p.title === title);
  const [imgErr, setImgErr] = useState(false);
  if (!project) return null;
  const slug = toSlug(project.title);

  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-emerald-400/20 to-teal-400/10 overflow-hidden">
        {project.thumbnail && !imgErr ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-top"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black opacity-10" style={{ color: "var(--accent)" }}>
              {project.title[0]}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col">
        <h3
          className="text-sm font-bold mb-1.5 leading-snug"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
          <span
            className="inline-flex items-center gap-1 text-xs font-bold transition-opacity group-hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            Case Study <ArrowRight size={10} />
          </span>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: "var(--text-muted)" }}
              >
                <ExternalLink size={12} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: "var(--text-muted)" }}
              >
                <GitBranch size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

interface Props {
  detail: ServiceDetail;
}

export function ServicePageTemplate({ detail }: Props) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)" }}>
      {/* Sticky nav */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={15} />
            All Services
          </Link>
          <Link href="/" className="text-sm font-black" style={{ color: "var(--text)" }}>
            Ahmed<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* ── HERO ── */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="py-16 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
          >
            Service
          </span>

          <h1
            className="font-black mb-5 leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "-0.04em",
              color: "var(--text)",
            }}
          >
            {detail.slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")
              .replace("Ai", "AI")
              .replace("Rag", "RAG")
              .replace("Api", "API")
              .replace("Devops", "DevOps")}
          </h1>

          <p
            className="text-xl font-semibold leading-snug mb-6"
            style={{ color: "var(--accent)", letterSpacing: "-0.01em" }}
          >
            {detail.tagline}
          </p>

          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            {detail.overview}
          </p>
        </motion.section>

        {/* ── STATS ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
          className="py-12 border-b grid grid-cols-3 gap-6"
          style={{ borderColor: "var(--border)" }}
        >
          {detail.stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-3xl font-black mb-1"
                style={{ color: "var(--accent)", letterSpacing: "-0.04em" }}
              >
                {value}
              </p>
              <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                {label}
              </p>
            </div>
          ))}
        </motion.section>

        {/* ── WHAT'S INCLUDED ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.15 }}
          className="py-12 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
          >
            What&apos;s included
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {detail.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <CheckCircle2
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--accent)" }}
                />
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ── HOW IT WORKS ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.2 }}
          className="py-12 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <h2
            className="text-xl font-bold mb-8"
            style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
          >
            How it works
          </h2>
          <div className="flex flex-col gap-4">
            {detail.howItWorks.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-5 p-5 rounded-2xl border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black border"
                  style={{
                    background: "var(--accent-dim)",
                    borderColor: "var(--border-accent)",
                    color: "var(--accent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    className="font-bold mb-1.5 text-sm"
                    style={{ color: "var(--text)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── RELATED PROJECTS ── */}
        {detail.relatedProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.25 }}
            className="py-12 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
            >
              Real projects using this service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.relatedProjects.map((title) => (
                <RelatedProjectCard key={title} title={title} />
              ))}
            </div>
          </motion.section>
        )}

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
          className="pt-14 text-center"
        >
          <h2
            className="text-2xl font-black mb-3"
            style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
          >
            Ready to get started?
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Book a free 30-minute discovery call and let&apos;s scope out your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "var(--accent)" }}
            >
              Book a Call <ChevronRight size={14} />
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border transition-all duration-200 hover:opacity-80"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              View All Projects
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
