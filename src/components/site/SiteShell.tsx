import Link from "next/link";
import { CALENDLY } from "@/data/site";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { Arrow } from "./Brand";
import { WhatsAppFab } from "./WhatsAppFab";

/** Shared page frame: progress bar, sticky nav, page content and footer. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site" id="top">
      <div className="progress" aria-hidden="true" />
      <SiteNav />
      {children}
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

/** The closing call-to-action used at the bottom of inner pages. */
export function PageCta({ title, label = "Book a diagnostic call", href = CALENDLY }: { title: string; label?: string; href?: string }) {
  const external = href.startsWith("http");
  return (
    <section className="wrap" style={{ paddingBlock: "clamp(96px, 11vw, 144px)" }}>
      <div className="rule draw-v" />
      <div className="pcta reveal">
        <h2 className="h2">{title}</h2>
        {external ? (
          <a href={href} target="_blank" rel="noreferrer" className="btn btn-ink go">{label} <Arrow size={18} /></a>
        ) : (
          <Link href={href} className="btn btn-ink go">{label} <Arrow size={18} /></Link>
        )}
      </div>
    </section>
  );
}
