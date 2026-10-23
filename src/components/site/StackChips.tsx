import { techLogos } from "@/data/techLogos";

const ALIASES: Record<string, string> = {
  Electron: "Electron.js",
  Express: "Express.js",
  "Chrome ext.": "Chrome Extension",
  Slack: "Slack API",
  Webflow: "Webflow API",
  Airtable: "Airtable API",
  Gemini: "Gemini API",
  Apollo: "Apollo API",
  "JS SDK": "JavaScript",
  "JavaScript SDK": "JavaScript",
};

const logoFor = (name: string) => techLogos[name] ?? techLogos[ALIASES[name] ?? ""];

/** Technology chips with self-hosted brand logos (text only when no logo exists). */
export function StackChips({
  items,
  size = "md",
  max,
}: {
  items: string[];
  size?: "sm" | "md" | "lg";
  max?: number;
}) {
  const list = max ? items.slice(0, max) : items;
  const rest = max && items.length > max ? items.length - max : 0;
  const px = size === "lg" ? 24 : size === "md" ? 20 : 16;
  return (
    <ul className={`stack stack-${size}`} aria-label="Technology used">
      {list.map((t) => {
        const src = logoFor(t);
        return (
          <li key={t}>
            <span className="ic" aria-hidden="true">
              {/* Small static SVG marks; next/image adds nothing for these. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {src ? <img src={src} alt="" width={px} height={px} loading="lazy" /> : <b>{monogram(t)}</b>}
            </span>
            <span className="nm">{t}</span>
          </li>
        );
      })}
      {rest > 0 && <li className="more"><span className="nm">+{rest} more</span></li>}
    </ul>
  );
}

/** Two-letter mark for tools without a published logo (e.g. "Exact Online API" → "EO"). */
function monogram(name: string) {
  const words = name.replace(/\b(API|SDK)\b/g, "").trim().split(/[\s.-]+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[1][0] : (words[0] ?? name).slice(0, 2)).toUpperCase();
}

/** Splits catalogue stack strings like "Next.js · PostgreSQL · OpenAI". */
export function splitStack(s: string) {
  return s.split("·").map((x) => x.trim()).filter(Boolean);
}
