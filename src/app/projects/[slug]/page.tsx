import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { data } from "@/data/portfolio";
import { catalogue, catalogueBySlug } from "@/data/site";
import { siteMedia } from "@/data/siteMedia";
import { toSlug } from "@/lib/slug";
import { Arrow } from "@/components/site/Brand";
import { Gallery } from "@/components/site/Gallery";
import { StackChips, splitStack } from "@/components/site/StackChips";
import { PageCta } from "@/components/site/SiteShell";

export function generateStaticParams() {
  return catalogue.filter((c) => caseStudies[c.slug]).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = catalogueBySlug[slug];
  if (!item) return {};
  return { title: `${item.title} — Case study | Ahmed Ben Yahia`, description: item.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  const item = catalogueBySlug[slug];
  if (!study || !item) notFound();

  const project = data.projects.find((p) => toSlug(p.title) === slug);
  const media = siteMedia[slug] ?? [];
  const hero = media[0]?.src ?? item.thumb;
  const idx = catalogue.findIndex((c) => c.slug === slug);
  const next = catalogue[(idx + 1) % catalogue.length];

  return (
    <main>
      <section aria-labelledby="cs-title" className="wrap" style={{ paddingTop: "clamp(48px, 7vw, 96px)" }}>
        <Link href="/projects" className="back fadein" style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, fontSize: 14, fontWeight: 500, color: "var(--s-muted)" }}>
          <ArrowLeft className="arr" size={16} strokeWidth={1.6} aria-hidden="true" /> All projects
        </Link>
        <p className="eyebrow fadein" style={{ margin: "28px 0 24px" }}>Case study · {item.typeLabel}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "flex-end" }}>
          <h1 id="cs-title" className="h-page" style={{ flex: "999 1 640px", minWidth: 0 }}>
            <span className="line"><span>{item.title}</span></span>
          </h1>
          {project?.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-ink go fadein d3" style={{ flex: "0 1 280px" }}>
              Visit live product <ExternalLink size={17} strokeWidth={1.6} aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="lede fadein d2" style={{ marginTop: 32, maxWidth: 760 }}>{project?.description ?? item.summary}</p>
        <div className="rule draw d2" style={{ marginTop: 48 }} />
        <dl className="metas fadein d3">
          <div><dt>Project type</dt><dd>{item.typeLabel}</dd></div>
          <div><dt>Best for</dt><dd>{project?.bestFor ?? "Teams replacing manual work"}</dd></div>
          <div><dt>Outcome</dt><dd>{project?.resultLabel ?? "A faster, more reliable workflow"}</dd></div>
          <div><dt>Core stack</dt><dd>{(project?.tags ?? []).slice(0, 3).join(", ") || item.stack}</dd></div>
        </dl>
      </section>

      <section aria-label="Project overview" className="wrap" style={{ paddingTop: 32 }}>
        <div className="unveil d3" style={{ position: "relative", aspectRatio: "16 / 7.6", overflow: "hidden", background: "var(--s-bg2)", border: "1px solid var(--s-line)" }}>
          <Image className="settle d3" src={hero} alt={`${item.title} overview`} fill priority sizes="(max-width: 1280px) 100vw, 1184px" style={{ objectFit: "cover", objectPosition: "0 0" }} />
        </div>
      </section>

      <section aria-labelledby="stack-title" className="wrap" style={{ paddingTop: "clamp(56px, 7vw, 88px)" }}>
        <div className="split reveal" style={{ alignItems: "baseline" }}>
          <p id="stack-title" className="eyebrow">Technology stack</p>
          <div className="body"><StackChips items={project?.tags?.length ? project.tags : splitStack(item.stack)} size="lg" /></div>
        </div>
      </section>

      <section aria-label="Project detail" className="wrap sec" style={{ display: "flex", flexDirection: "column", gap: "clamp(64px, 8vw, 104px)" }}>
        <article className="split reveal">
          <p className="eyebrow">01 — The challenge</p>
          <div className="body">
            <h2 className="h2-sm">{study.problem.subtitle}</h2>
            <p>{study.problem.content}</p>
          </div>
        </article>
        <article className="split reveal">
          <p className="eyebrow">02 — What I built</p>
          <div className="body">
            <h2 className="h2-sm">{study.solution.subtitle}</h2>
            <p>{study.solution.content}</p>
            <ul className="checks">
              {study.solution.bullets.map((b) => (
                <li key={b}><Check size={20} strokeWidth={1.8} aria-hidden="true" />{b}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {media.length > 0 && (
        <section aria-label="Inside the build" className="wrap" style={{ paddingTop: "clamp(80px, 10vw, 120px)" }}>
          <Gallery title={item.title} items={media} />
        </section>
      )}

      <section aria-label="Outcome" className="wrap" style={{ paddingTop: "clamp(80px, 10vw, 120px)" }}>
        <article className="split reveal">
          <p className="eyebrow">03 — The outcome</p>
          <div className="body">
            <h2 className="h2-sm">{study.results.subtitle}</h2>
            <p>{study.results.content}</p>
          </div>
        </article>
      </section>

      <section aria-label="Next project" className="wrap sec">
        <Link href={`/projects/${next.slug}`} className="next go reveal">
          <div className="txt">
            <p className="eyebrow">Next project</p>
            <h2 className="h2-sm">{next.title}</h2>
            <p style={{ margin: 0, fontSize: 15, color: "var(--s-muted)" }}>{next.typeLabel} · {next.stack}</p>
            <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 600 }}>Read the case study <Arrow /></span>
          </div>
          <div className="pic"><Image src={next.thumb} alt={`${next.title} preview`} fill sizes="(max-width: 900px) 100vw, 640px" /></div>
        </Link>
      </section>

      <PageCta title="Planning something similar for your team?" />
    </main>
  );
}
