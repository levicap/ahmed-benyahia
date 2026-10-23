import type { Metadata } from "next";
import { Bell, Database, FileText, GitBranch, RefreshCw, ShieldCheck } from "lucide-react";
import { CALENDLY } from "@/data/site";
import { PageCta } from "@/components/site/SiteShell";
import { vars } from "@/components/site/Brand";

export const metadata: Metadata = {
  title: "How I work — A defined engagement process | Ahmed Ben Yahia",
  description:
    "Five phases from discovery call to hand-over: fixed-price proposals, weekly demos, documented systems and 30 days of support for every AI and automation engagement.",
};

const principles = [
  { n: "I.", t: "Outcome before technology", d: "Each engagement starts from a measurable result — hours saved, response time, error rate. Tools are chosen afterwards." },
  { n: "II.", t: "Scope in writing", d: "Deliverables, acceptance criteria and revision rounds are agreed before a line of code is written." },
  { n: "III.", t: "Progress you can see", d: "Working software every week — a live demo you can test, not a status slide." },
  { n: "IV.", t: "Built to be owned", d: "Documentation, ownership notes and monitoring, so the system never depends on me to keep running." },
];

const phases = [
  {
    t: "Discovery call", badge: "Day 1 · 30 minutes",
    what: "We walk through the workflow end to end — volumes, manual steps, failure points — and separate what should be automated from what needs human judgement.",
    get: "A clear recommendation on whether, and how, to proceed — useful even if we don’t work together.",
    need: "The person who runs the process today, and a few real examples of its inputs and outputs.",
  },
  {
    t: "Proposal & scope", badge: "Day 2–3",
    what: "I design the architecture, choose the tooling, and list every risk and dependency before committing to a timeline.",
    get: "A written proposal: scope, deliverables, fixed price, milestones, acceptance criteria and included revision rounds.",
    need: "Review and sign-off. An NDA is signed first if anything sensitive is involved.",
  },
  {
    t: "Design & build", badge: "1–3 weeks",
    what: "The system is built in working modules and connected to your tools through APIs and webhooks, with error handling, retries and alerting from the start.",
    get: "A weekly demo and written update, with risks and open decisions raised early — never at the deadline.",
    need: "Feedback on each demo, plus access to test data and the accounts the system connects to.",
  },
  {
    t: "Launch & handover", badge: "Final week",
    what: "QA against the agreed acceptance criteria, production deployment, and monitoring switched on.",
    get: "The live system, full documentation and ownership notes your team can maintain from.",
    need: "Final acceptance against the criteria agreed in phase 02.",
  },
  {
    t: "Support & partnership", badge: "30 days included", dark: true,
    what: "Fixes, tuning and small adjustments as real usage arrives — the period where systems earn trust.",
    get: "Written response expectations, and the option of a monthly retainer for monitoring and new features.",
    need: "Report anything unexpected through the channel your team already uses.",
  },
];

const timelines = [
  { t: "Workflow automation", r: "1–2 weeks", min: 16.7, max: 33.3, accent: false },
  { t: "Lead & data pipeline", r: "1–2 weeks", min: 16.7, max: 33.3, accent: false },
  { t: "AI knowledge assistant", r: "3–6 weeks", min: 50, max: 100, accent: true },
  { t: "SaaS platform", r: "3–6 weeks", min: 50, max: 100, accent: true },
];

const standards = [
  { I: RefreshCw, t: "Error handling & retries", d: "Failed steps retry safely and never leave half-processed records." },
  { I: Bell, t: "Alerting & monitoring", d: "The right person hears about a problem before your customers do." },
  { I: ShieldCheck, t: "Secure access", d: "Authentication, role-based permissions and least-privilege credentials." },
  { I: Database, t: "Data validation", d: "Field mapping, deduplication and checks before anything reaches your CRM." },
  { I: GitBranch, t: "Version control & CI/CD", d: "Every change tracked in Git and deployed through a repeatable pipeline." },
  { I: FileText, t: "Documentation", d: "How it works, how to change it, and what to do when something breaks." },
];

export default function ApproachPage() {
  return (
    <main>
      <section aria-labelledby="ap-title" className="wrap" style={{ paddingTop: "clamp(64px, 9vw, 120px)" }}>
        <p className="eyebrow fadein" style={{ marginBottom: 32 }}>How I work</p>
        <h1 id="ap-title" className="h-page" style={{ fontSize: "clamp(42px, 5.8vw, 84px)", maxWidth: 1100 }}>
          <span className="line"><span>A disciplined process,</span></span>
          <span className="line"><span className="d1">from first call to a system</span></span>
          <span className="line"><span className="d2">your team <span className="accent">owns.</span></span></span>
        </h1>
        <div className="rule draw d2" style={{ marginTop: "clamp(48px, 6vw, 72px)" }} />
        <div className="fadein d3" style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", paddingTop: 32 }}>
          <p className="lede" style={{ flex: "1.3 1 420px", maxWidth: 560 }}>Every engagement follows the same five phases. You know what will be delivered, when you will see it, what it costs and what is needed from your side — before any build begins.</p>
          <dl className="kv-light" style={{ flex: "1 1 380px" }}>
            <div><dt>Typical duration</dt><dd>1–6 weeks</dd></div>
            <div><dt>Pricing</dt><dd>Fixed, per project</dd></div>
            <div><dt>Progress reporting</dt><dd>Weekly demo + written update</dd></div>
            <div><dt>Post-launch support</dt><dd>30 days included</dd></div>
          </dl>
        </div>
      </section>

      <section aria-labelledby="pr-title" className="wrap sec">
        <div className="shead reveal">
          <p className="eyebrow">01 — Principles</p>
          <h2 id="pr-title" className="h2 shead-main">Four commitments behind every engagement.</h2>
        </div>
        <ol className="phases reveal" style={{ gap: "40px 32px", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))" }}>
          {principles.map((p, i) => (
            <li key={p.t} style={{ paddingRight: 0 }}>
              <div className="rule-2 draw-v" style={{ background: i === 3 ? "var(--s-accent)" : undefined }} />
              <p className="meta"><b>{p.n}</b></p>
              <h3 style={{ marginTop: 12 }}>{p.t}</h3>
              <p className="d" style={{ marginBottom: 0 }}>{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="ph-title" className="wrap sec">
        <div className="shead reveal">
          <p className="eyebrow">02 — The engagement</p>
          <h2 id="ph-title" className="h2 shead-main">Phase by phase: what happens, what you receive, what I need from you.</h2>
        </div>
        <div className="steps" style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "32px 48px" }}>
          <aside aria-hidden="true" style={{ flex: "1 1 220px", minWidth: 0 }}>
            <div className="rail">
              <div className="rail-bar"><div className="rail-fill" /></div>
              <ol>{phases.map((p, i) => <li key={p.t}><b>{String(i + 1).padStart(2, "0")}</b> {p.t.split(" ")[0]}</li>)}</ol>
            </div>
          </aside>
          <ol className="ph-list" style={{ flex: "3 1 640px", minWidth: 0 }}>
            {phases.map((p, i) => (
              <li key={p.t} className="ph reveal">
                <div className="ph-top">
                  <h3><span className="accent" style={{ color: "var(--s-accent-text)" }}>{String(i + 1).padStart(2, "0")}</span>&nbsp; {p.t}</h3>
                  <span className={`ph-badge${p.dark ? " dark" : ""}`}>{p.badge}</span>
                </div>
                <div className="ph-cols">
                  <div><p className="eyebrow">What happens</p><p>{p.what}</p></div>
                  <div><p className="eyebrow">You receive</p><p>{p.get}</p></div>
                  <div><p className="eyebrow">Your input</p><p>{p.need}</p></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="tl-title" className="band tint">
        <div className="wrap band-in">
          <div className="shead reveal">
            <p className="eyebrow">03 — Typical timelines</p>
            <h2 id="tl-title" className="h2 shead-main">Weeks, not quarters. Confirmed in your proposal.</h2>
          </div>
          <div className="gantt reveal" role="table" aria-label="Typical project timelines in weeks">
            <div role="row" style={{ display: "flex", gap: 24, paddingBottom: 14, borderBottom: "1px solid var(--s-ink)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--s-muted)" }}>
              <span role="columnheader" style={{ flex: "0 0 min(240px, 38%)" }}>Engagement</span>
              <span role="columnheader" style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
                {[1, 2, 3, 4, 5, 6].map((w) => <span key={w}>Wk {w}</span>)}
              </span>
            </div>
            {timelines.map((t) => (
              <div role="row" className="row" key={t.t}>
                <span role="cell" className="lab">{t.t}<small>{t.r}</small></span>
                <span role="cell" className="track">
                  <span className="bar" style={{ width: `${t.max}%`, background: t.accent ? "rgba(193,95,60,0.22)" : "rgba(38,35,31,0.16)" }} />
                  <span className="bar" style={{ width: `${t.min}%`, background: t.accent ? "var(--s-accent)" : "var(--s-ink)" }} />
                </span>
              </div>
            ))}
            <p style={{ margin: "20px 0 0", display: "flex", flexWrap: "wrap", gap: "8px 24px", fontSize: 13, color: "var(--s-muted)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 14, height: 8, background: "var(--s-ink)" }} />Typical minimum</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 14, height: 8, background: "rgba(38,35,31,0.16)" }} />Range, depending on scope</span>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="st-title" className="wrap sec">
        <div className="shead reveal">
          <p className="eyebrow">04 — Engineering standards</p>
          <h2 id="st-title" className="h2 shead-main">Included in every build, not sold as extras.</h2>
        </div>
        <div className="cells reveal" style={vars({ "--cell": "360px" })}>
          {standards.map(({ I, t, d }) => (
            <div key={t} className="std">
              <I size={26} strokeWidth={1.5} aria-hidden="true" />
              <div><h3>{t}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="cm-title" className="band night">
        <div className="wrap band-in" style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px" }}>
          <div className="reveal" style={{ flex: "1 1 380px", minWidth: 0 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>05 — Working together</p>
            <h2 id="cm-title" className="h2">Predictable communication across time zones.</h2>
          </div>
          <dl className="kv reveal" style={{ flex: "1.2 1 480px", minWidth: 0 }}>
            <div><dt>Working hours</dt><dd>Monday–Friday, 9:00–17:00 UTC+1</dd></div>
            <div><dt>Response time</dt><dd>Within a few hours, business days</dd></div>
            <div><dt>Progress updates</dt><dd>Weekly demo and written summary</dd></div>
            <div><dt>Time-zone overlap</dt><dd>Full with Europe · Mornings with the US</dd></div>
            <div><dt>Confidentiality</dt><dd>NDA before any sensitive information</dd></div>
          </dl>
        </div>
      </section>

      <PageCta title="Start with phase 01. It’s free." label="Book the discovery call" href={CALENDLY} />
    </main>
  );
}
