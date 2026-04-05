"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { data } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const WORDS = ["AI systems", "automations", "RAG pipelines", "AI agents"];
const ease = [0.4, 0, 0.2, 1] as const;

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIdx((i) => (i + 1) % WORDS.length);
    }, 2400);
    return () => clearTimeout(timeoutId);
  }, [wordIdx]);

  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Grid background */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Central glow orb */}
      <div
        className="pointer-events-none absolute rounded-full blur-[180px]"
        style={{
          width: 800,
          height: 800,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          background: "rgba(16,185,129,0.07)",
        }}
        aria-hidden="true"
      />

      {/* Lamp line at top — pulled from ohmfordev/21st.dev */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 flex justify-center"
        aria-hidden="true"
      >
        <div
          className="h-px w-64 mt-0"
          style={{
            background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
            opacity: 0.6,
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 flex justify-center"
        aria-hidden="true"
      >
        <div
          className="rounded-full blur-3xl"
          style={{
            width: 320,
            height: 80,
            marginTop: -40,
            background: "var(--accent)",
            opacity: 0.12,
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">

        {/* Small avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="mb-6"
        >
          <div
            className="relative w-[72px] h-[72px] rounded-full overflow-hidden"
            style={{
              border: "2px solid var(--accent)",
              boxShadow: "0 0 0 4px var(--accent-dim), 0 0 32px var(--accent-glow)",
            }}
          >
            {!imgError ? (
              <Image
                src={data.photo}
                alt={data.name}
                fill
                className="object-cover object-top"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-base font-black"
                style={{ background: "var(--bg3)", color: "var(--accent)" }}
              >
                {initials}
              </div>
            )}
          </div>
        </motion.div>

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.1 }}
          className="mb-8"
        >
          <div className="avail-badge" role="status" aria-live="polite">
            <span className="avail-dot" />
            Available for new projects
          </div>
        </motion.div>

        {/* ── BIG HEADLINE — Tommy Jepsen spring word swap ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.18 }}
          className="font-black leading-[1.08] tracking-tighter mb-6"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5rem)",
            letterSpacing: "-0.05em",
            color: "var(--text)",
          }}
        >
          I build{" "}
          {/* Animated word container — spring slide like Tommy Jepsen */}
          <span
            className="relative inline-flex justify-center overflow-hidden"
            style={{ verticalAlign: "bottom", height: "1.15em", minWidth: "clamp(160px, 36vw, 360px)" }}
          >
            &nbsp;
            {WORDS.map((word, index) => (
              <motion.span
                key={index}
                className="absolute inset-0 flex items-center justify-center font-black"
                initial={{ opacity: 0, y: "100%" }}
                transition={{ type: "spring", stiffness: 50, damping: 14 }}
                animate={
                  wordIdx === index
                    ? { y: "0%", opacity: 1 }
                    : { y: wordIdx > index ? "-100%" : "100%", opacity: 0 }
                }
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <br />
          that actually work.
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
          style={{ color: "var(--text-muted)" }}
        >
          {data.bio}
        </motion.p>

        {/* Full-stack skill chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.38 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {["Next.js", "Node.js", "Python", "PostgreSQL", "n8n", "LangChain", "OpenAI API"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.48 }}
          className="flex gap-3 flex-wrap justify-center mb-10"
        >
          <MagneticButton>
            <a href="#booking" className="btn-primary">
              <Calendar size={15} />
              Book a Free Call
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#projects" className="btn-secondary">
              See My Work
              <ArrowRight size={15} />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-px overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--border)", background: "var(--border)" }}
        >
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 px-6 min-w-[110px]"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-black text-2xl leading-none mb-1"
                style={{ color: "var(--text)", letterSpacing: "-0.04em" }}
              >
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-xs font-semibold" style={{ color: "var(--text-dim)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}