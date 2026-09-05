"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { CalendarDays, Menu, Moon, Sun, X } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "About" },
  { href: "#booking", label: "Contact" },
];

const subscribe = () => () => undefined;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.shell}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Main navigation">
        <a href="#hero" className={styles.brand} aria-label="Ahmed Ben Yahia, home">
          <strong>{data.name}</strong><i aria-hidden="true" />
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <div className={styles.actions}>
          {mounted && (
            <button type="button" className={styles.iconButton} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label={`Use ${resolvedTheme === "dark" ? "light" : "dark"} theme`}>
              {resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          <a href={data.social.calendly} target="_blank" rel="noreferrer" className={styles.cta}>
            <CalendarDays size={14} aria-hidden="true" /> Book a call
          </a>
          <button type="button" className={styles.menuButton} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation">
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <a href={data.social.calendly} target="_blank" rel="noreferrer" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Book a free strategy call</a>
        </div>
      )}
    </div>
  );
}
