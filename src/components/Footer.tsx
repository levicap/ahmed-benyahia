import { ArrowUpRight } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Footer.module.css";

const LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#booking", label: "Contact" },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}><strong>{data.name}</strong><i /></a>
        <nav aria-label="Footer navigation">{LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <a className={styles.top} href="#hero">back to top <ArrowUpRight size={12} aria-hidden="true" /></a>
      </div>
      <div className={styles.status}>
        <span>© {new Date().getFullYear()} / AI systems studio</span>
        <span><i /> {data.availability ? "available for selected projects" : "currently booked"}</span>
        <span>Sfax, Tunisia · UTC+1</span>
      </div>
    </footer>
  );
}
