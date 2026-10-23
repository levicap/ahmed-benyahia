"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { PROJECT_TYPES, type CatalogueItem, type ProjectType } from "@/data/site";
import { Arrow } from "./Brand";
import { StackChips, splitStack } from "./StackChips";

type Filter = "all" | ProjectType;

export function ProjectsBrowser({ items }: { items: CatalogueItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  // bump to replay the card entrance animation whenever the result set changes
  const [run, setRun] = useState(0);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (p) =>
        (filter === "all" || p.type === filter) &&
        (!q || `${p.title} ${p.summary} ${p.stack} ${p.typeLabel}`.toLowerCase().includes(q)),
    );
  }, [items, filter, query]);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: items.length },
    ...PROJECT_TYPES.map((t) => ({ id: t.id as Filter, label: t.label, count: items.filter((p) => p.type === t.id).length })),
  ];

  return (
    <section aria-label="Project list" className="wrap" style={{ paddingTop: "clamp(56px, 7vw, 88px)" }}>
      <div className="toolbar">
        <div role="group" aria-label="Filter by type" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => { setFilter(f.id); setRun((r) => r + 1); }}
            >
              {f.label} <span className="count">{f.count}</span>
            </button>
          ))}
        </div>
        <label className="search">
          <Search size={16} strokeWidth={1.8} color="var(--s-muted)" aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            placeholder="Search projects or tools"
            onChange={(e) => { setQuery(e.target.value); setRun((r) => r + 1); }}
          />
        </label>
      </div>

      <p aria-live="polite" style={{ margin: "20px 0 32px", fontSize: 14, color: "var(--s-muted)" }}>
        Showing <strong style={{ color: "var(--s-ink)" }}>{shown.length}</strong> of {items.length} projects
      </p>

      {shown.length > 0 ? (
        <div className="pgrid" key={run}>
          {shown.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="pcard" style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}>
              <div className="thumb">
                <Image src={p.thumb} alt={`${p.title} preview`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 290px" />
                <span className="tag">{p.typeLabel}</span>
              </div>
              <h3><span>{p.title}</span><Arrow /></h3>
              <p className="d">{p.summary}</p>
              <div style={{ marginTop: 12 }}><StackChips items={splitStack(p.stack)} size="sm" /></div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ padding: "64px 0", textAlign: "center", borderBottom: "1px solid var(--s-line)" }}>
          <p className="display" style={{ margin: 0, fontSize: 24 }}>No projects match that search.</p>
          <p style={{ margin: "8px 0 0", color: "var(--s-muted)" }}>Try another keyword, or ask whether I’ve built something similar.</p>
        </div>
      )}
    </section>
  );
}
