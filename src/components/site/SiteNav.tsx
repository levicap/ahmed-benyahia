"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CALENDLY } from "@/data/site";

const LINKS = [
  { href: "/#practice", label: "Services", match: "/services" },
  { href: "/approach", label: "How I work", match: "/approach" },
  { href: "/projects", label: "Work", match: "/projects" },
  { href: "/about", label: "About", match: "/about" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (match: string) => pathname === match || pathname.startsWith(`${match}/`);

  return (
    <header className="nav-hdr">
      <nav aria-label="Main navigation" className="wrap nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/ahmed-linkedin.png" alt="" width={40} height={40} priority />
          <span>
            <span className="brand-name">Ahmed Ben Yahia</span>
            <span className="brand-sub">AI &amp; Automation Engineering</span>
          </span>
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="navlink" aria-current={isActive(l.match) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-ink btn-sm nav-cta">
          Request a consultation
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div id="mobile-nav" className="nav-mobile" data-open={open}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-ink btn-block">
          Book a diagnostic call
        </a>
      </div>
    </header>
  );
}
