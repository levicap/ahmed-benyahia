import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Briefcase, Mail, MessageCircle } from "lucide-react";
import { data } from "@/data/portfolio";
import { EMAIL } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="foot" aria-label="Site footer">
      <div className="wrap foot-in">
        <div className="foot-cols">
          <div className="foot-about">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Image src="/ahmed-linkedin.png" alt="Ahmed Ben Yahia" width={64} height={64} style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "50% 25%" }} />
              <div>
                <p className="display" style={{ margin: 0, fontSize: 20, letterSpacing: "-0.02em", color: "var(--s-on-night)" }}>Ahmed Ben Yahia</p>
                <p style={{ margin: "2px 0 0", fontSize: 14 }}>AI Automation Engineer &amp; Full-Stack Developer</p>
              </div>
            </div>
            <p style={{ margin: "24px 0 0", maxWidth: 380, fontSize: 15, lineHeight: 1.65 }}>
              Independent engineer building RAG assistants, AI voice agents, n8n workflow automation and custom SaaS for teams in Europe, the Middle East and North America.
            </p>
            <p style={{ margin: "20px 0 0", display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--s-on-night)" }}>
              <span className="dot" style={{ background: "#8ea0ff" }} />
              Accepting selected engagements
            </p>
          </div>

          <nav aria-label="Services" className="foot-col">
            <span className="head">Services</span>
            <Link href="/services/ai-rag-systems" className="flink">AI &amp; RAG systems</Link>
            <Link href="/services/workflow-automation" className="flink">Workflow automation</Link>
            <Link href="/services/ai-voice-agents" className="flink">AI voice &amp; chat agents</Link>
            <Link href="/services/full-stack-development" className="flink">SaaS development</Link>
            <Link href="/services/lead-generation-scraping" className="flink">Lead &amp; data pipelines</Link>
          </nav>

          <nav aria-label="Practice" className="foot-col">
            <span className="head">Practice</span>
            <Link href="/approach" className="flink">How I work</Link>
            <Link href="/projects" className="flink">All projects</Link>
            <Link href="/about" className="flink">About</Link>
            <Link href="/#contact" className="flink">Request a consultation</Link>
          </nav>

          <nav aria-label="Contact and profiles" className="foot-col" style={{ flexBasis: 210 }}>
            <span className="head">Connect</span>
            <a href={`mailto:${EMAIL}`} className="flink"><Mail size={15} strokeWidth={1.6} aria-hidden="true" />{EMAIL}</a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="flink"><LinkedInIcon />LinkedIn</a>
            <a href={data.social.upwork} target="_blank" rel="noreferrer" className="flink"><Briefcase size={15} strokeWidth={1.6} aria-hidden="true" />Upwork</a>
            <a href={data.social.github} target="_blank" rel="noreferrer" className="flink"><GitHubIcon />GitHub</a>
            <a href={data.social.whatsapp} target="_blank" rel="noreferrer" className="flink"><MessageCircle size={15} strokeWidth={1.6} aria-hidden="true" />WhatsApp</a>
          </nav>
        </div>

        <p aria-hidden="true" className="foot-mark">Ahmed Ben Yahia</p>

        <div className="foot-bar">
          <span>© {new Date().getFullYear()} Ahmed Ben Yahia. All rights reserved.</span>
          <span>Sfax, Tunisia · UTC+1 · Mon–Fri, 9:00–17:00</span>
          <a href="#top" className="flink" style={{ minHeight: 44, fontWeight: 600, color: "var(--s-on-night)" }}>
            Back to top <ArrowUp size={15} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
