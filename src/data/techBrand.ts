export interface TechBrand {
  icon: string;
  color: string;
}

const simpleIcon = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;

const devIcon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

export const TECH_BRANDS: Record<string, TechBrand> = {
  Upwork: { icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/upwork.svg", color: "#14a800" },
  GitHub: { icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg", color: "#181717" },
  LinkedIn: { icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg", color: "#0a66c2" },
  "Next.js": { icon: simpleIcon("nextdotjs", "#111111"), color: "#111111" },
  React: { icon: devIcon("react"), color: "#61dafb" },
  "Tailwind CSS": { icon: devIcon("tailwindcss"), color: "#38bdf8" },
  TypeScript: { icon: devIcon("typescript"), color: "#3178c6" },
  JavaScript: { icon: devIcon("javascript"), color: "#f7df1e" },
  Python: { icon: devIcon("python"), color: "#3776ab" },
  Go: { icon: devIcon("go"), color: "#00add8" },
  "Electron.js": { icon: devIcon("electron"), color: "#47848f" },
  "Node.js": { icon: devIcon("nodejs"), color: "#5fa04e" },
  "Express.js": { icon: simpleIcon("express", "#111111"), color: "#222222" },
  "Nest.js": { icon: devIcon("nestjs"), color: "#e0234e" },
  "Spring Boot": { icon: devIcon("spring"), color: "#6db33f" },
  n8n: { icon: simpleIcon("n8n", "#ea4b71"), color: "#ea4b71" },
  Zapier: { icon: simpleIcon("zapier", "#ff4f00"), color: "#ff4f00" },
  Make: { icon: simpleIcon("make", "#6d00cc"), color: "#6d00cc" },
  LangChain: { icon: simpleIcon("langchain", "#1c3c3c"), color: "#1c3c3c" },
  OpenAI: { icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", color: "#412991" },
  "OpenAI API": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", color: "#412991" },
  Claude: { icon: simpleIcon("anthropic", "#d97757"), color: "#d97757" },
  Gemini: { icon: simpleIcon("googlegemini", "#8e75b2"), color: "#8e75b2" },
  "Gemini API": { icon: simpleIcon("googlegemini", "#8e75b2"), color: "#8e75b2" },
  LLM: { icon: simpleIcon("openai", "#412991"), color: "#412991" },
  ElevenLabs: { icon: simpleIcon("elevenlabs", "#111111"), color: "#111111" },
  Twilio: { icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twilio.svg", color: "#f22f46" },
  WhatsApp: { icon: simpleIcon("whatsapp", "#25d366"), color: "#25d366" },
  "Slack API": { icon: devIcon("slack"), color: "#4a154b" },
  Stripe: { icon: simpleIcon("stripe", "#635bff"), color: "#635bff" },
  HubSpot: { icon: simpleIcon("hubspot", "#ff7a59"), color: "#ff7a59" },
  Apollo: { icon: simpleIcon("apollo", "#3d6ce7"), color: "#3d6ce7" },
  "Apollo API": { icon: simpleIcon("apollo", "#3d6ce7"), color: "#3d6ce7" },
  PostgreSQL: { icon: devIcon("postgresql"), color: "#4169e1" },
  MongoDB: { icon: devIcon("mongodb"), color: "#47a248" },
  SQLite: { icon: devIcon("sqlite"), color: "#0f80cc" },
  Supabase: { icon: simpleIcon("supabase", "#3ecf8e"), color: "#3ecf8e" },
  Prisma: { icon: simpleIcon("prisma", "#2d3748"), color: "#2d3748" },
  Airtable: { icon: simpleIcon("airtable", "#18bfff"), color: "#18bfff" },
  "Airtable API": { icon: simpleIcon("airtable", "#18bfff"), color: "#18bfff" },
  Docker: { icon: devIcon("docker"), color: "#2496ed" },
  Vercel: { icon: simpleIcon("vercel", "#111111"), color: "#111111" },
  "GitHub Actions": { icon: devIcon("githubactions"), color: "#2088ff" },
  "GitHub API": { icon: simpleIcon("github", "#181717"), color: "#181717" },
  "LinkedIn API": { icon: simpleIcon("linkedin", "#0a66c2"), color: "#0a66c2" },
  "Webflow API": { icon: simpleIcon("webflow", "#146ef5"), color: "#146ef5" },
  WebSocket: { icon: simpleIcon("socketdotio", "#111111"), color: "#111111" },
  Recharts: { icon: simpleIcon("chartdotjs", "#ff6384"), color: "#ff6384" },
  "Chrome Extension": { icon: simpleIcon("googlechrome", "#4285f4"), color: "#4285f4" },
  Gmail: { icon: simpleIcon("gmail", "#ea4335"), color: "#ea4335" },
  "Google API": { icon: simpleIcon("google", "#4285f4"), color: "#4285f4" },
};

export function getTechBrand(name: string): TechBrand | undefined {
  return TECH_BRANDS[name];
}
