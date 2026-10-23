import Image from "next/image";
import Link from "next/link";
import { Check, FileCheck, RefreshCw, Search, X } from "lucide-react";
import {
  CALENDLY,
  EMAIL,
  diagnosticGets,
  featuredCases,
  fitNo,
  fitYes,
  phasesPreview,
  practiceAreas,
  problems,
  typeCounts,
  whatIBuild,
  catalogue,
} from "@/data/site";
import { Arrow, vars } from "@/components/site/Brand";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { StackChips, splitStack } from "@/components/site/StackChips";

const PLURAL: Record<string, string> = {
  automation: "automations",
  agents: "AI agents",
  saas: "SaaS products",
  custom: "custom software builds",
  desktop: "desktop app",
};

export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section aria-labelledby="hero-title" className="wrap hero">
        <h1 id="hero-title" className="h-hero">
          <span className="line"><span>Automate the work.</span></span>
          <span className="line"><span className="d1">Scale the <span className="accent">business.</span></span></span>
        </h1>
        <div className="rule draw d2" style={{ marginTop: "clamp(48px, 6vw, 72px)" }} />

        <div className="hgrid">
          <figure className="hc hc1">
            <div className="portrait unveil d2">
              <Image className="settle d2" src="/ahmed-linkedin.png" alt="Ahmed Ben Yahia, AI automation engineer and full-stack developer" fill priority sizes="(max-width: 640px) 360px, 30vw" />
            </div>
            <figcaption className="fadein d5" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, paddingTop: 14, fontSize: 13, color: "var(--s-muted)" }}>
              <span><strong style={{ color: "var(--s-ink)", fontWeight: 600 }}>Ahmed Ben Yahia</strong><br />Sfax, Tunisia · UTC+1</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, color: "var(--s-ink)" }}><span className="dot pulse" />Available</span>
            </figcaption>
          </figure>

          <div className="hc hc2 fadein d3">
            <p className="eyebrow">Introduction</p>
            <p className="hero-intro">I’m an AI automation engineer and full-stack developer. I help operations, support and sales teams stop doing by hand what software can do reliably.</p>
            <p className="hero-p">That means RAG knowledge assistants that answer from your documents, AI voice and chat agents that resolve customer requests, n8n workflows that move data between your tools, and custom SaaS or dashboards when off-the-shelf software no longer fits.</p>
            <p className="hero-p">Every engagement is scoped in writing at a fixed price, delivered in weekly working increments and handed over with full documentation — so your team owns the system from day one.</p>
            <dl className="hstats">
              <div><dt>systems shipped</dt><dd><span className="num" style={vars({ "--n": 27 }, { animationDelay: "600ms" })} /><span className="accent">+</span></dd></div>
              <div><dt>client teams</dt><dd><span className="num" style={vars({ "--n": 10 }, { animationDelay: "650ms" })} /><span className="accent">+</span></dd></div>
              <div><dt>on schedule</dt><dd><span className="num" style={vars({ "--n": 98 }, { animationDelay: "700ms" })} /><span className="accent">%</span></dd></div>
            </dl>
          </div>

          <div className="hc hc3 fadein d4">
            <p className="eyebrow" style={{ marginBottom: 8 }}>What I build</p>
            <ul className="svc-list">
              {whatIBuild.map((s, i) => (
                <li key={s}><span className="n">{String(i + 1).padStart(2, "0")}</span><span style={{ fontWeight: 500 }}>{s}</span></li>
              ))}
            </ul>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-ink btn-block go" style={{ marginTop: "auto" }}>
              Book a diagnostic call <Arrow size={18} />
            </a>
            <p style={{ margin: "10px 0 0", fontSize: 12, color: "var(--s-muted)" }}>Free · 30 minutes · No obligation</p>
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section aria-labelledby="sectors-title" className="wrap">
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "baseline" }}>
          <p className="eyebrow" style={{ flex: "1 1 220px" }}>Sectors served</p>
          <h2 id="sectors-title" className="display" style={{ flex: "3 1 600px", margin: 0, fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.025em", color: "var(--s-ink2)" }}>
            Operations, support and sales teams in <span style={{ color: "var(--s-ink)" }}>e-commerce, SaaS, property management, recruiting, field services, education and finance</span> — wherever skilled people lose their week to repeatable work that AI and automation can take over.
          </h2>
        </div>
      </section>

      {/* ================= PROBLEMS ================= */}
      <section aria-labelledby="problems-title" className="band night">
        <div className="wrap band-in">
          <div className="shead reveal">
            <p className="eyebrow">01 — Problems I solve</p>
            <div className="shead-main">
              <h2 id="problems-title" className="h2">Does any of this sound familiar?</h2>
              <p style={{ margin: "20px 0 0", maxWidth: 560, fontSize: 17, color: "var(--s-on-night-muted)" }}>If two or more of these describe your week, there is almost certainly time and money to recover.</p>
            </div>
          </div>
          <div className="cells reveal" style={vars({ "--cell": "360px" })}>
            {problems.map((p, i) => (
              <Link key={p.q} href={p.href} className="prob">
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <p className="q">{p.q}</p>
                <span className="sol">{p.sol} <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section id="practice" aria-labelledby="practice-title" className="wrap sec">
        <div className="shead reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">02 — Practice areas</p>
          <h2 id="practice-title" className="h2 shead-main">Six capabilities. One accountable engineer.</h2>
        </div>
        <div className="trows">
          {practiceAreas.map((p, i) => (
            <Link key={p.t} href={p.href} className="trow">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <span className="t">{p.t}</span>
              <span className="d">{p.d}</span>
              <span className="m">{p.m}</span>
              <Arrow size={20} />
            </Link>
          ))}
        </div>
      </section>

      {/* ================= APPROACH PREVIEW ================= */}
      <section aria-labelledby="approach-title" className="band tint">
        <div className="wrap band-in">
          <div className="shead reveal" style={{ marginBottom: 64 }}>
            <p className="eyebrow">03 — How I work</p>
            <div className="shead-main shead-row">
              <h2 id="approach-title" className="h2" style={{ maxWidth: 680 }}>A defined method, so you always know what happens next.</h2>
              <Link href="/approach" className="ulink go">Read the full approach <Arrow /></Link>
            </div>
          </div>
          <ol className="phases reveal">
            {phasesPreview.map((p, i) => (
              <li key={p.t}>
                <div className="rule-2 draw-v" style={{ background: i === 3 ? "var(--s-accent)" : undefined }} />
                <p className="meta"><b>{p.n}</b><span>{p.when}</span></p>
                <h3>{p.t}</h3>
                <p className="d">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section id="work" aria-labelledby="work-title" className="wrap sec">
        <div className="shead reveal">
          <p className="eyebrow">04 — Selected work</p>
          <div className="shead-main">
            <h2 id="work-title" className="h2" style={{ maxWidth: 760 }}>Real problems, the systems I built, and what changed.</h2>
            <p style={{ margin: "20px 0 0", maxWidth: 620, fontSize: 17, color: "var(--s-ink2)" }}>Three engagements told the way clients ask about them: what was wrong, what I built, and the measurable result.</p>
          </div>
        </div>

        <div className="cases">
          {featuredCases.map((c) => (
            <article key={c.slug} className="case reveal">
              <div className="case-top">
                <p className="case-meta"><b>Case {c.no}</b><span>{c.tag}</span><span>{c.sector}</span></p>
                <Link href={`/projects/${c.slug}`} className="ulink go" style={{ fontSize: 14 }}>Read case study <Arrow /></Link>
              </div>
              <h3 className="case-title"><Link href={`/projects/${c.slug}`}>{c.title}</Link></h3>
              <Link href={`/projects/${c.slug}`} className="case-img" aria-label={`Open case study: ${c.title}`}>
                <Image src={c.img} alt={c.alt} fill sizes="(max-width: 1280px) 100vw, 1184px" />
              </Link>
              <div className="case-cols">
                <div><p className="eyebrow">Challenge</p><p>{c.challenge}</p></div>
                <div><p className="eyebrow">What I built</p><p>{c.built}</p></div>
                <div>
                  <p className="eyebrow">Result</p>
                  <div className="num-big" style={{ fontSize: 52 }}><span className="num nv" style={vars({ "--n": c.n })} /><span className="accent">{c.suffix}</span></div>
                  <p style={{ fontSize: 14 }}>{c.result}</p>
                  <div style={{ marginTop: "auto", paddingTop: 14 }}><StackChips items={splitStack(c.stack)} size="sm" /></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="viewall reveal">
          <div style={{ flex: "1 1 460px", minWidth: 0 }}>
            <p className="display" style={{ fontSize: "clamp(26px, 2.8vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.035em" }}>{catalogue.length} projects in the full portfolio.</p>
            <p style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: "8px 22px", fontSize: 14, color: "var(--s-on-night-muted)" }}>
              {typeCounts.map((t) => <span key={t.id}>{t.count} {PLURAL[t.id]}</span>)}
            </p>
          </div>
          <Link href="/projects" className="btn btn-acc go">View all projects <Arrow size={18} /></Link>
        </div>
      </section>

      {/* ================= FIT ================= */}
      <section aria-labelledby="fit-title" className="wrap sec">
        <div className="shead reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">05 — Is this a fit?</p>
          <h2 id="fit-title" className="h2 shead-main">An honest answer before you book.</h2>
        </div>
        <div className="fit reveal">
          <div className="fit-yes">
            <h3><span className="ic"><Check size={16} strokeWidth={2.2} aria-hidden="true" /></span>A strong fit if you…</h3>
            <ul>{fitYes.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="fit-no">
            <h3><span className="ic"><X size={16} strokeWidth={2.2} aria-hidden="true" /></span>Probably not a fit if you…</h3>
            <ul>{fitNo.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* ================= DIAGNOSTIC CTA ================= */}
      <section aria-labelledby="diag-title" className="wrap" style={{ paddingTop: "clamp(80px, 10vw, 120px)" }}>
        <div className="diag reveal">
          <div style={{ flex: "1.3 1 440px", minWidth: 0 }}>
            <p className="eyebrow">The free diagnostic call</p>
            <h2 id="diag-title" className="h2" style={{ fontSize: "clamp(32px, 3.8vw, 52px)" }}>30 minutes. You leave with a plan — whether we work together or not.</h2>
          </div>
          <div style={{ flex: "1 1 340px", minWidth: 0 }}>
            <ul>{diagnosticGets.map((x) => <li key={x}><Check size={18} strokeWidth={2} aria-hidden="true" style={{ flex: "0 0 18px", marginTop: 3 }} />{x}</li>)}</ul>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-night btn-block go" style={{ marginTop: 24 }}>Book your diagnostic call <Arrow size={18} /></a>
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section aria-labelledby="models-title" className="wrap sec">
        <div className="shead reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">06 — Ways to engage</p>
          <h2 id="models-title" className="h2 shead-main">Clear commercial terms from the first conversation.</h2>
        </div>
        <div className="cells reveal">
          <div className="model">
            <Search size={26} strokeWidth={1.5} color="var(--s-accent-text)" aria-hidden="true" />
            <h3 className="h3" style={{ marginTop: 12 }}>Diagnostic call</h3>
            <p className="price">30 minutes · No cost</p>
            <p className="d">We review the workflow, locate the real bottleneck and decide whether automation is worth it. You leave with a clear recommendation either way.</p>
          </div>
          <div className="model dark">
            <FileCheck size={26} strokeWidth={1.5} color="var(--s-accent-night)" aria-hidden="true" />
            <h3 className="h3" style={{ marginTop: 12 }}>Fixed-scope project</h3>
            <p className="price">Fixed price · From $300</p>
            <p className="d">Written scope, timeline and acceptance criteria. Includes build, testing, documentation and 30 days of support. AI platforms and SaaS are scoped individually.</p>
          </div>
          <div className="model">
            <RefreshCw size={26} strokeWidth={1.5} color="var(--s-accent-text)" aria-hidden="true" />
            <h3 className="h3" style={{ marginTop: 12 }}>Ongoing partnership</h3>
            <p className="price">Monthly retainer</p>
            <p className="d">Maintenance, monitoring and new capabilities after launch, for teams that want a dependable engineer on call.</p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <Faq label="07 — Questions" />

      {/* ================= CONTACT ================= */}
      <section id="contact" aria-labelledby="contact-title" className="night-deep">
        <div className="wrap contact" style={{ paddingBlock: "clamp(80px, 10vw, 136px)" }}>
          <div className="contact-info reveal">
            <p className="eyebrow" style={{ marginBottom: 24 }}>Request a consultation</p>
            <h2 id="contact-title" className="h2" style={{ fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: 1 }}>Tell me where the time is going.</h2>
            <p style={{ margin: "24px 0 0", maxWidth: 440, fontSize: 17, color: "var(--s-on-night-muted)" }}>Describe the workflow. I reply within one business day with initial thoughts and a time for a 30-minute diagnostic call.</p>
            <dl>
              <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
              <div><dt>Calendar</dt><dd><a href={CALENDLY} target="_blank" rel="noreferrer">Book directly on Calendly</a></dd></div>
              <div><dt>Hours</dt><dd>Mon–Fri, 9:00–17:00 UTC+1</dd></div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
