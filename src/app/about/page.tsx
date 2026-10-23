import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { career, stackGroups } from "@/data/site";
import { data } from "@/data/portfolio";
import { StackChips } from "@/components/site/StackChips";
import { PageCta } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "About — Ahmed Ben Yahia, AI Automation Engineer",
  description:
    "Full-stack and AI automation engineer based in Tunisia, working with operations, support and sales teams across Europe and North America.",
};

export default function AboutPage() {
  return (
    <main>
      <section aria-labelledby="ab-title" className="wrap" style={{ paddingTop: "clamp(56px, 8vw, 112px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "flex-end" }}>
          <div style={{ flex: "1.5 1 520px", minWidth: 0 }}>
            <p className="eyebrow fadein" style={{ marginBottom: 32 }}>About</p>
            <h1 id="ab-title" className="h-page" style={{ fontSize: "clamp(40px, 5.4vw, 78px)" }}>
              <span className="line"><span>An engineer who measures</span></span>
              <span className="line"><span className="d1">success by what keeps</span></span>
              <span className="line"><span className="d2">running <span className="accent">after launch.</span></span></span>
            </h1>
            <p className="lede fadein d3" style={{ marginTop: 40, maxWidth: 560 }}>
              I’m Ahmed Ben Yahia, a full-stack and AI automation engineer based in Tunisia. I work with operations, support and sales leaders across Europe and North America to replace repetitive work with dependable systems.
            </p>
          </div>
          <figure style={{ flex: "1 1 320px", maxWidth: 420, margin: 0 }}>
            <div className="portrait unveil d1">
              <Image className="settle d1" src="/ahmed-linkedin.png" alt="Portrait of Ahmed Ben Yahia" fill priority sizes="420px" />
            </div>
            <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 12, paddingTop: 14, fontSize: 13, color: "var(--s-muted)" }}>
              <span>Ahmed Ben Yahia</span><span>Tunisia · UTC+1</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="pf-title" className="wrap sec">
        <div className="split reveal">
          <p className="eyebrow">01 — Profile</p>
          <div className="body">
            <h2 id="pf-title" className="display" style={{ margin: 0, fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.025em" }}>
              My work sits where software engineering meets operations: understanding how a business actually runs, then building the AI, automation and software that make it run with less effort.
            </h2>
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px 40px", color: "var(--s-ink2)" }}>
              <p style={{ margin: 0 }}>I currently work as an AI Automation Engineer at Lean Orchester, delivering production RAG pipelines, voice agents and automation systems for international clients in e-commerce, SaaS and B2B.</p>
              <p style={{ margin: 0 }}>Alongside that, I take on a limited number of independent engagements — each one scoped in writing, delivered in weekly increments and handed over with full documentation.</p>
            </div>
            <div className="co-strip" aria-label="Companies I have worked with">
              {career.map((r) => (
                <span key={r.org} className="co-logo" title={r.org}><Image src={r.logo} alt={`${r.org} logo`} width={60} height={60} /></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cr-title" className="wrap sec">
        <div className="shead reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">02 — Career</p>
          <h2 id="cr-title" className="h2 shead-main">Professional experience.</h2>
        </div>
        <div className="rule draw-v" />
        {career.map((r) => (
          <article key={r.org} className="role reveal">
            <div className="when"><b>{r.when}</b>{r.where}</div>
            <div className="what">
              <div className="who">
                <span className="co-logo"><Image src={r.logo} alt={`${r.org} logo`} width={48} height={48} /></span>
                <div>
                  <h3>{r.role}</h3>
                  <p style={{ margin: "2px 0 0", fontSize: 15, color: "var(--s-muted)" }}>{r.org}</p>
                </div>
              </div>
              {"points" in r && r.points ? <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul> : <p>{r.text}</p>}
            </div>
          </article>
        ))}
        <a href="/cv-ahmedbenyahia.pdf" target="_blank" rel="noreferrer" className="ulink" style={{ marginTop: 28 }}>
          Download CV (PDF) <Download size={16} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </section>

      <section aria-labelledby="cap-title" className="band night">
        <div className="wrap band-in">
          <div className="shead reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">03 — Technical capabilities</p>
            <h2 id="cap-title" className="h2 shead-main">Chosen for reliability, not novelty.</h2>
          </div>
          <dl className="sgroups reveal">
            {stackGroups.map((g) => (
              <div key={g.label} className="sgroup">
                <dt>{g.label}</dt>
                <dd><StackChips items={data.stack.filter((t) => g.cats.includes(t.category)).map((t) => t.name)} size="lg" /></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PageCta title="Let’s discuss where your team’s time is going." />
    </main>
  );
}
