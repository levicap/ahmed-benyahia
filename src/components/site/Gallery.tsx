"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SiteMedia } from "@/data/siteMedia";

/** Screenshot carousel: large view, previous/next buttons and a strip of real thumbnails. */
export function Gallery({ title, items }: { title: string; items: SiteMedia[] }) {
  const [i, setI] = useState(0);
  const strip = useRef<HTMLDivElement>(null);
  const count = items.length;
  const go = (n: number) => setI((n + count) % count);

  // keep the active thumbnail centred in the strip (scrolls the strip only, never the page)
  useEffect(() => {
    const box = strip.current;
    const el = box?.children[i] as HTMLElement | undefined;
    if (!box || !el) return;
    box.scrollTo({ left: el.offsetLeft - (box.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [i]);

  const cur = items[i];

  return (
    <div
      className="reveal"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px", marginBottom: 24 }}>
        <h2 className="display" style={{ margin: 0, fontSize: "clamp(26px, 2.6vw, 34px)", letterSpacing: "-0.03em" }}>Inside the build</h2>
        {count > 1 && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 14, color: "var(--s-muted)", minWidth: 52, textAlign: "right" }} aria-live="polite">
              {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <button type="button" className="gal-btn" onClick={() => go(i - 1)} aria-label="Previous screenshot"><ArrowLeft size={18} strokeWidth={1.6} /></button>
            <button type="button" className="gal-btn" onClick={() => go(i + 1)} aria-label="Next screenshot"><ArrowRight size={18} strokeWidth={1.6} /></button>
          </div>
        )}
      </div>

      <div className="gal">
        <Image key={cur.src} src={cur.src} alt={`${title} — screenshot ${i + 1} of ${count}`} fill sizes="(max-width: 1280px) 100vw, 1184px" />
        {count > 1 && (
          <>
            <button type="button" className="gal-side gal-prev" onClick={() => go(i - 1)} aria-label="Previous screenshot"><ArrowLeft size={20} strokeWidth={1.6} /></button>
            <button type="button" className="gal-side gal-next" onClick={() => go(i + 1)} aria-label="Next screenshot"><ArrowRight size={20} strokeWidth={1.6} /></button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="gal-strip" ref={strip}>
          {items.map((m, n) => (
            <button key={m.src} type="button" className="gal-thumb" aria-label={`Show screenshot ${n + 1}`} aria-current={n === i} onClick={() => setI(n)}>
              <Image src={m.src} alt="" fill sizes="180px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
