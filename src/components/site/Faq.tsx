import Link from "next/link";
import { Plus } from "lucide-react";
import { faqGroups } from "@/data/site";
import { Arrow } from "./Brand";

export function Faq({ label = "Questions" }: { label?: string }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="wrap sec" style={{ paddingBottom: "clamp(96px, 11vw, 152px)" }}>
      <div className="faq-wrap">
        <div className="faq-side reveal">
          <p className="eyebrow" style={{ marginBottom: 16 }}>{label}</p>
          <h2 id="faq-title" className="h2" style={{ fontSize: "clamp(32px, 3.6vw, 48px)" }}>Everything clients ask before booking.</h2>
          <div className="note-box">
            <p style={{ margin: 0, fontWeight: 600 }}>Have a question that isn’t here?</p>
            <p style={{ margin: "6px 0 0", fontSize: 15, color: "var(--s-ink2)" }}>Ask it on the free call, or send a message — you’ll get a straight answer within one business day.</p>
            <Link href="/#contact" className="ulink go" style={{ marginTop: 8 }}>Ask a question <Arrow /></Link>
          </div>
        </div>
        <div className="faq-main faq reveal">
          {faqGroups.map((g, gi) => (
            <div key={g.group}>
              <p className="faq-group">{g.group}</p>
              {g.items.map((item, ii) => {
                return (
                  <details key={item.q} open={gi === 0 && ii === 0}>
                    <summary>{item.q}<Plus className="plus" size={20} strokeWidth={1.6} aria-hidden="true" /></summary>
                    <p>{item.a}</p>
                  </details>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
