"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const [active, setActive] = useState(0);
  const exp = data.experience[active];

  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "var(--bg)" }}
      aria-label="Work experience"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Career"
            title="Work Experience"
            subtitle="My professional journey — the companies I built for and the impact I made along the way."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true, margin: "-30px" }}
          className="flex flex-col md:flex-row"
        >
          {/* ── TAB STRIP ── */}
          <div
            className="relative flex flex-row md:flex-col overflow-x-auto md:overflow-visible shrink-0 md:w-44 border-b md:border-b-0 md:border-r"
            style={{ borderColor: "var(--border)" }}
          >
            {data.experience.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative flex flex-col items-start px-5 py-4 text-left whitespace-nowrap transition-all duration-200 focus:outline-none"
                style={{ minWidth: "max-content" }}
                aria-selected={active === i}
              >
                {/* Mobile: bottom border indicator */}
                <span
                  className="md:hidden absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200"
                  style={{ background: active === i ? "var(--accent)" : "transparent" }}
                />
                {/* Desktop: right border indicator */}
                <span
                  className="hidden md:block absolute right-0 top-0 bottom-0 w-0.5 transition-all duration-200"
                  style={{ background: active === i ? "var(--accent)" : "transparent" }}
                />

                <span
                  className="text-sm font-bold leading-tight transition-colors duration-200"
                  style={{ color: active === i ? "var(--accent)" : "var(--text)" }}
                >
                  {e.company.split(" ")[0]}
                </span>
                <span
                  className="text-[11px] mt-0.5 font-medium"
                  style={{ color: active === i ? "var(--accent)" : "var(--text-dim)", opacity: active === i ? 0.8 : 1 }}
                >
                  {e.startDate.split(" ")[1]}
                </span>

                {/* Active background highlight */}
                {active === i && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "var(--accent-dim)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── CONTENT PANEL ── */}
          <div className="flex-1 min-w-0 pt-8 md:pt-0 md:pl-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Header: logo + role + meta */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Company logo chip */}
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center border"
                    style={{ borderColor: "var(--border)", background: "var(--bg3)" }}
                  >
                    {exp.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                        style={{ padding: "6px" }}
                      />
                    ) : (
                      <span className="text-xs font-black" style={{ color: "var(--accent)" }}>
                        {exp.company
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Role + company + meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <h3
                          className="text-lg font-bold leading-tight"
                          style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                          {exp.company}
                        </p>
                      </div>
                      {exp.endDate === "Present" && (
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0"
                          style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-1.5">
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{ color: "var(--text-dim)" }}
                      >
                        <Calendar size={11} />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{ color: "var(--text-dim)" }}
                      >
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <ul className="space-y-3">
                    {exp.achievements.map((a, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.28, delay: j * 0.055 }}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--accent)" }}
                        />
                        {a}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}