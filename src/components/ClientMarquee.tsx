"use client";

import { useState } from "react";
import { data } from "@/data/portfolio";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const isImage = logo.startsWith("/");

  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-2xl border whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-accent)] cursor-default group"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {isImage && !failed ? (
        <div
          className="w-7 h-7 rounded-md shrink-0 overflow-hidden flex items-center justify-center p-0.5"
          style={{ background: "#fff" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt={name}
            width={26}
            height={26}
            className="w-full h-full object-contain"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <span
          className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-black shrink-0"
          style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
        >
          {name[0]}
        </span>
      )}
      <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: { name: string; logo: string }[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg2), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg2), transparent)" }}
      />
      <div
        className="flex gap-3"
        style={{
          width: "max-content",
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((c, i) => (
          <ClientLogo key={i} name={c.name} logo={c.logo} />
        ))}
      </div>
    </div>
  );
}

export function ClientMarquee() {
  const clients = data.clients;

  return (
    <section
      className="py-16 overflow-hidden border-y"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      aria-label="Client logos"
    >
      <p
        className="text-center text-xs font-bold uppercase tracking-widest mb-8"
        style={{ color: "var(--text-dim)" }}
      >
        Trusted by teams at
      </p>
      <MarqueeRow items={clients} direction="left" speed={28} />
    </section>
  );
}
