import type { Metadata } from "next";
import Link from "next/link";
import { catalogue, typeCounts } from "@/data/site";
import { ProjectsBrowser } from "@/components/site/ProjectsBrowser";
import { PageCta } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Projects — AI Automation, SaaS & Custom Software | Ahmed Ben Yahia",
  description:
    "Portfolio of n8n automations, AI agents, RAG assistants, SaaS platforms, custom software and a desktop ERP built by Ahmed Ben Yahia.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section aria-labelledby="pj-title" className="wrap" style={{ paddingTop: "clamp(48px, 7vw, 96px)" }}>
        <nav aria-label="Breadcrumb" className="crumbs fadein">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Projects</span>
        </nav>
        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 48px" }}>
          <h1 id="pj-title" className="h-hero" style={{ fontSize: "clamp(56px, 9vw, 140px)" }}>
            <span className="line"><span>Projects<span className="accent">.</span></span></span>
          </h1>
          <p className="lede fadein d2" style={{ flex: "0 1 460px" }}>
            {catalogue.length} systems and products delivered — from n8n automations and AI agents to SaaS platforms, custom software and a desktop ERP.
          </p>
        </div>
        <div className="rule draw d2" style={{ marginTop: "clamp(40px, 5vw, 64px)" }} />
        <dl className="metas fadein d3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))" }}>
          {typeCounts.map((t) => (
            <div key={t.id} style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end" }}>
              <dt>{t.label}</dt>
              <dd className="num-big" style={{ margin: "0 0 6px", fontSize: 36 }}>{t.count}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ProjectsBrowser items={catalogue} />

      <PageCta title="Need something similar built for your team?" />
    </main>
  );
}
