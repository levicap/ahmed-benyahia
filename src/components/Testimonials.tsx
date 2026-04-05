"use client";

import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="text-base"
          aria-hidden="true"
          style={{ color: i < rating ? "#f59e0b" : "var(--border)" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: "var(--bg2)" }}
      aria-label="Testimonials"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <SectionHeader
            label="Social Proof"
            title="What clients say"
            subtitle="Don't take my word for it — here's what people who've worked with me have to say."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  delay: i * 0.07,
                }}
                viewport={{ once: true, margin: "-20px" }}
                className="glass relative rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                style={{ boxShadow: "var(--shadow)" }}
              >
                {/* Decorative quote mark */}
                <div
                  className="absolute top-3 right-4 text-[6rem] font-black leading-none opacity-[0.04] pointer-events-none select-none"
                  style={{ color: "var(--accent)", fontFamily: "Georgia, serif" }}
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at top left, var(--accent-dim) 0%, transparent 60%)",
                  }}
                />

                <Stars rating={t.rating} />

                <p
                  className="text-sm leading-relaxed mb-5 italic relative"
                  style={{ color: "var(--text-muted)" }}
                >
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 overflow-hidden"
                    style={{
                      background: "var(--accent-dim)",
                      borderColor: "var(--border-accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {t.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      initials
                    )}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-dim)" }}>
                      {t.project} ·{" "}
                      <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                        {t.platform}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
