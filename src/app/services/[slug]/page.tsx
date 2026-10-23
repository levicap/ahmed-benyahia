import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { serviceDetails } from "@/data/serviceDetails";
import { CALENDLY, catalogueBySlug, serviceNames } from "@/data/site";
import { toSlug } from "@/lib/slug";
import { Arrow, vars } from "@/components/site/Brand";
import { PageCta } from "@/components/site/SiteShell";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.slug === slug);
  if (!detail) return {};
  return { title: `${serviceNames[slug] ?? slug} — Ahmed Ben Yahia`, description: detail.tagline };
}

/** Split "60%" → { n: 60, suffix: "%" } so the number can count up. */
function splitStat(v: string) {
  const m = v.match(/^(\d+)(.*)$/);
  return m ? { n: Number(m[1]), suffix: m[2] } : null;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.slug === slug);
  if (!detail) notFound();
  const name = serviceNames[slug] ?? slug;
  const index = serviceDetails.findIndex((s) => s.slug === slug) + 1;
  const related = detail.relatedProjects.map((t) => catalogueBySlug[toSlug(t)]).filter(Boolean);
  const others = serviceDetails.filter((s) => s.slug !== slug);

  return (
    <main>
      <section aria-labelledby="sv-title" className="wrap" style={{ paddingTop: "clamp(48px, 7vw, 96px)" }}>
        <Link href="/#practice" className="back fadein" style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, fontSize: 14, fontWeight: 500, color: "var(--s-muted)" }}>
          <ArrowLeft className="arr" size={16} strokeWidth={1.6} aria-hidden="true" /> All practice areas
        </Link>
        <p className="eyebrow fadein" style={{ margin: "28px 0 24px" }}>Practice area {String(index).padStart(2, "0")} · {name}</p>
        <h1 id="sv-title" className="h-page" style={{ maxWidth: 1100 }}>
          <span className="line"><span>{detail.tagline}</span></span>
        </h1>
        <div className="rule draw d2" style={{ marginTop: 56 }} />
        <div className="fadein d3" style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", paddingTop: 32 }}>
          <p className="lede" style={{ flex: "1.3 1 420px", maxWidth: 620 }}>{detail.overview}</p>
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: 20 }}>
            <dl className="kv-light">
              <div><dt>Engagement model</dt><dd>Fixed scope, fixed price</dd></div>
              <div><dt>Progress</dt><dd>Weekly demo + written update</dd></div>
              <div><dt>Support</dt><dd>30 days included</dd></div>
            </dl>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-ink btn-block go">Discuss your project <Arrow size={18} /></a>
          </div>
        </div>
      </section>

      {detail.stats.length > 0 && (
        <section aria-label="Typical outcomes" className="night" style={{ marginTop: "clamp(64px, 8vw, 96px)" }}>
          <div className="wrap rband">
            {detail.stats.map((s, i) => {
              const n = splitStat(s.value);
              return (
                <div key={s.label}>
                  <div className="v">
                    {n ? <><span className="num" style={vars({ "--n": n.n }, { animationDelay: `${i * 120}ms` })} /><span style={{ color: "var(--s-accent-night)" }}>{n.suffix}</span></> : s.value}
                  </div>
                  <p>{s.label}</p>
                </div>
              );
            })}
          </div>
          <p className="wrap" style={{ margin: "0 auto", paddingBottom: 28, fontSize: 12, color: "var(--s-on-night-muted)" }}>Results from delivered engagements in this practice area.</p>
        </section>
      )}

      <section aria-labelledby="how-title" className="wrap sec">
        <div className="shead reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">01 — How it works</p>
          <h2 id="how-title" className="h2 shead-main">From your current process to a system that runs itself.</h2>
        </div>
        <ol className="phases reveal">
          {detail.howItWorks.map((step, i) => (
            <li key={step.title}>
              <div className="rule-2 draw-v" style={{ background: i === detail.howItWorks.length - 1 ? "var(--s-accent)" : undefined }} />
              <p className="meta"><b>Step {String(i + 1).padStart(2, "0")}</b></p>
              <h3>{step.title}</h3>
              <p className="d">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="scope-title" className="wrap sec">
        <div className="shead reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">02 — Scope of work</p>
          <h2 id="scope-title" className="h2 shead-main">What the engagement delivers.</h2>
        </div>
        <ol className="reveal" style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--s-ink)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))", columnGap: 48 }}>
          {detail.includes.map((x, i) => (
            <li key={x} className="trow" style={{ padding: "24px 8px", gap: 24, flexWrap: "nowrap" }}>
              <span style={{ flex: "0 0 32px", fontSize: 13, fontWeight: 600, color: "var(--s-accent-text)" }}>{String.fromCharCode(65 + i)}</span>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="rel-title" className="wrap sec">
          <div className="shead reveal" style={{ marginBottom: 40 }}>
            <p className="eyebrow">03 — Related projects</p>
            <div className="shead-main shead-row">
              <h2 id="rel-title" className="h2">Delivered and running in production.</h2>
              <Link href="/projects" className="ulink go">All projects <Arrow /></Link>
            </div>
          </div>
          <div className="pgrid">
            {related.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="pcard">
                <div className="thumb">
                  <Image src={p.thumb} alt={`${p.title} preview`} fill sizes="(max-width: 640px) 100vw, 380px" />
                  <span className="tag">{p.typeLabel}</span>
                </div>
                <h3><span>{p.title}</span><Arrow /></h3>
                <p className="d">{p.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section aria-label="Other practice areas" className="wrap" style={{ paddingTop: 72 }}>
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "20px 48px" }}>
          <p className="eyebrow" style={{ flex: "1 1 220px" }}>Other practice areas</p>
          <div style={{ flex: "3 1 600px", display: "flex", flexWrap: "wrap", gap: 10 }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="btn btn-out btn-sm" style={{ borderColor: "rgba(47,43,38,0.3)", fontWeight: 500 }}>
                {serviceNames[o.slug] ?? o.slug}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta title={`Ready to scope your ${name.toLowerCase()} project?`} />
    </main>
  );
}
