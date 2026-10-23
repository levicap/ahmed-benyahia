import { data } from "@/data/portfolio";
import { getPublicProjectTitle } from "@/lib/projectPresentation";
import { toSlug } from "@/lib/slug";

/* ---------------------------------------------------------------------------
   Project catalogue
   Display titles anonymise client work; slugs stay tied to the original
   project titles so every card resolves to an existing case study.
--------------------------------------------------------------------------- */

export type ProjectType = "automation" | "agents" | "saas" | "custom" | "desktop";

export const PROJECT_TYPES: { id: ProjectType; label: string }[] = [
  { id: "automation", label: "Automation" },
  { id: "agents", label: "AI agents" },
  { id: "saas", label: "SaaS" },
  { id: "custom", label: "Custom software" },
  { id: "desktop", label: "Desktop app" },
];

export interface CatalogueItem {
  slug: string;
  title: string;
  type: ProjectType;
  typeLabel: string;
  summary: string;
  stack: string;
  thumb: string;
}

type Entry = [originalTitle: string, displayTitle: string, type: ProjectType, thumb: string, summary: string, stack: string];

const ENTRIES: Entry[] = [
  ["SmartPaie — Tunisian Payroll & CNSS SaaS", "SmartPaie", "saas", "smartpaie", "Payroll SaaS for Tunisian companies: payslips, CNSS, IRPP and HR documents.", "React · Nest.js · PostgreSQL · Docker"],
  ["Keen Analytics — Privacy-First Web Analytics", "Keen Analytics", "saas", "keen", "Cookie-free web analytics that shows which sources bring paying customers.", "Next.js · Go · Docker · JS SDK"],
  ["Outreach Genie — LinkedIn Outbound SaaS", "Outreach Genie", "saas", "outreach-v2", "LinkedIn outbound workspace: prospect lists, flows, AI messaging and analytics.", "Next.js · PostgreSQL · OpenAI"],
  ["Strategy Navigator — AI SaaS Platform", "Strategy Navigator", "saas", "strategy", "Multi-tenant strategy platform with RBAC, AI assistants and Stripe billing.", "React · Node.js · OpenAI"],
  ["Workforce Second Brain Automation Layer", "Workforce Second Brain", "automation", "workforce", "Review-gated company memory from meetings, Slack and CRM signals.", "n8n · Go · Gemini · Docker"],
  ["Workforce Finance Reporting Dashboard", "Workforce Finance", "custom", "wffinance", "Internal dashboard turning Exact Online ledgers into live balance sheet and P&L reports.", "Next.js · n8n · Exact Online API"],
  ["iPrint AI Voice & Chat Support Agent", "AI voice & chat support agent", "agents", "voice", "Chat and phone agent handling 500+ queries a day with payments built in.", "n8n · ElevenLabs · Twilio"],
  ["JourneyAI — AI Sales Assistant Platform", "JourneyAI", "saas", "journey", "AI sales assistants for call prep, summaries and follow-up emails.", "Next.js · WebSocket · OpenAI"],
  ["SaleSide AI — Sales Meeting Assistant", "SaleSide AI", "saas", "saleside", "Sales meeting intelligence: transcripts, objections and action items.", "Next.js · WebSocket · OpenAI"],
  ["MiniSport Internal RAG Assistant", "Internal RAG knowledge assistant", "agents", "rag", "Staff query company documentation in plain language — 60% fewer queries.", "n8n · OpenAI · Vector DB"],
  ["BookieLink Customer Support Bot", "RAG customer support bot", "agents", "supportbot", "Trained on thousands of Q&A records — 70% fewer tickets in month one.", "n8n · OpenAI · Vector DB"],
  ["Invoice Parsing & KPI Reporting Dashboard", "Invoice parsing & KPI dashboard", "custom", "invoice", "Messy vendor reports normalised into one analytics model with live KPIs.", "Next.js · Supabase · Airtable"],
  ["OlalaHomes Property Dashboard", "Property operations dashboard", "custom", "property", "Occupancy, revenue and reviews in one view — 15+ hours saved weekly.", "Next.js · PostgreSQL · Recharts"],
  ["Ghanem Labs — Web3 Audit SaaS", "Ghanem Labs", "saas", "ghanem", "Web3 audit SaaS: smart-contract audits and on-chain threat detection.", "Next.js · Web3 · OpenAI"],
  ["APIspark – Drag & Drop API Builder", "APIspark", "saas", "apispark", "Drag-and-drop API builder with AI code generation and OpenAPI docs.", "Next.js · Prisma · AI"],
  ["EduNova — LMS with AI & WebSocket", "EduNova", "saas", "edunova", "LMS with course management, AI tutor and real-time collaboration.", "React · WebSocket · OpenAI"],
  ["Postily – AI Social Media Platform", "Postily", "saas", "postily", "Social media SaaS: AI captions, scheduling and analytics in one workspace.", "Next.js · MongoDB · OpenAI"],
  ["Finoria ERP", "Finoria ERP", "desktop", "finoria", "Offline desktop ERP for sales, purchases, stock and payments.", "Electron · SQLite"],
  ["Scenewear E-Commerce", "Scenewear e-commerce", "custom", "scenewear", "Full storefront that moved a clothing brand off DM orders.", "Next.js · Spring Boot · PostgreSQL"],
  ["ExplodingLeads — Lead Signal Engine", "Lead signal engine", "automation", "signals", "Hiring and expansion signals qualified by AI and delivered to Gmail.", "n8n · OpenAI · Google API"],
  ["Lead Acquisition System", "Lead acquisition system", "automation", "leads", "Scrapes, enriches and qualifies prospects — CRM-ready records.", "n8n · Apollo · LLM"],
  ["TechForce GitHub Developer Sourcing", "GitHub developer sourcing", "automation", "leads", "Finds developers by job location on GitHub and syncs them to the CRM.", "n8n · GitHub API · Supabase"],
  ["TechForce Indeed Jobs Enrichment Pipeline", "Indeed jobs enrichment pipeline", "automation", "signals", "Job listings scraped, synced to CRM and enriched with verified contacts.", "n8n · Apollo · Clarify CRM"],
  ["Upwork Jobs Scraper & Contact Enrichment", "Upwork jobs scraper & enrichment", "automation", "upwork", "Chrome extension and pipeline from job discovery to qualified contacts.", "Chrome ext. · n8n · Apollo"],
  ["Gantic to Spott CRM Migration Sync", "CRM migration sync", "automation", "gantic", "Candidate records moved between CRMs with field mapping and deduplication.", "n8n · Spott API · Webhooks"],
  ["Tonic SMS Automation System", "SMS campaign automation", "automation", "sms", "Targeted SMS to 10K+ subscribers at 98% deliverability.", "n8n · Twilio · Kit.com"],
  ["Meeting Transcript to Asana Workflow", "Meeting transcript → Asana tasks", "automation", "meeting", "Action items, owners and context extracted from calls into Asana.", "n8n · OpenAI · Asana API"],
  ["Asana Board Daily Update Digest", "Asana daily update digest", "automation", "asana", "A morning summary of what moved, what’s blocked and what needs follow-up.", "n8n · OpenAI · Gmail"],
  ["SEO Content & Webflow Automation", "SEO content & Webflow automation", "automation", "seo", "Researches, writes, illustrates and publishes articles to Webflow CMS.", "n8n · OpenAI · Webflow API"],
  ["AI Book Writing Agent", "AI book writing agent", "agents", "bookagent", "Turns raw transcripts into structured, review-ready book chapters.", "n8n · OpenAI"],
  ["AI Book Recommendation Automation", "AI book recommendation automation", "automation", "bookrec", "AI interview plus job data returns eight role-relevant book picks.", "n8n · OpenAI · Database"],
  ["AI Career Path Mapper", "AI Career Path Mapper", "custom", "career", "Personalised roadmap from current role to target job, with skill gaps.", "Next.js · Express · Gemini"],
  ["AI Motivation Letter Generator", "AI Motivation Letter Generator", "custom", "motivation", "Ten tailored, ATS-friendly motivation letters in under a minute.", "Next.js · Express · Gemini"],
];

const typeLabel = (t: ProjectType) => PROJECT_TYPES.find((p) => p.id === t)!.label;

export const catalogue: CatalogueItem[] = ENTRIES.map(([orig, title, type, thumb, summary, stack]) => {
  const anonymizedTitle = getPublicProjectTitle(orig);

  return {
    slug: toSlug(orig),
    title: anonymizedTitle === orig ? title : anonymizedTitle,
    type,
    typeLabel: typeLabel(type),
    summary,
    stack,
    thumb: `/site/thumbs/${thumb}.jpg`,
  };
});

export const catalogueBySlug = Object.fromEntries(catalogue.map((c) => [c.slug, c]));

export const typeCounts = PROJECT_TYPES.map((t) => ({
  ...t,
  count: catalogue.filter((c) => c.type === t.id).length,
}));

/* ---------------------------------------------------------------------------
   Home page content
--------------------------------------------------------------------------- */

export const CALENDLY = data.social.calendly;
export const EMAIL = "ahmedbenyahia654@gmail.com";

export const whatIBuild = [
  "RAG knowledge assistants",
  "AI voice & chat agents",
  "n8n workflow automation",
  "SaaS & internal tools",
  "Lead & data pipelines",
];

export const problems = [
  { q: "“My team answers the same customer questions all day.”", sol: "AI support agent or RAG chatbot", href: "/services/ai-rag-systems" },
  { q: "“Someone spends every Monday building the weekly report.”", sol: "Automated reporting dashboard", href: "/services/full-stack-development" },
  { q: "“We copy data between our CRM, sheets and inbox by hand.”", sol: "n8n workflow automation", href: "/services/workflow-automation" },
  { q: "“Calls and messages go unanswered after hours.”", sol: "AI voice & chat agent", href: "/services/ai-voice-agents" },
  { q: "“Our sales team spends hours finding and qualifying leads.”", sol: "Lead sourcing & enrichment pipeline", href: "/services/lead-generation-scraping" },
  { q: "“We’ve outgrown spreadsheets, but off-the-shelf tools don’t fit.”", sol: "Custom SaaS or internal tool", href: "/services/full-stack-development" },
];

export const practiceAreas = [
  { t: "AI & RAG knowledge systems", d: "RAG chatbots and internal knowledge assistants that answer from your documents with cited sources — and escalate anything they cannot ground.", m: "3–6 weeks", href: "/services/ai-rag-systems" },
  { t: "n8n workflow automation", d: "Business process automation with n8n, Make, Zapier and custom APIs — with error handling, retries and alerting so it runs unsupervised.", m: "1–2 weeks", href: "/services/workflow-automation" },
  { t: "AI voice & chat agents", d: "AI phone, SMS and chat agents built on ElevenLabs, Twilio and OpenAI that resolve requests, take payments and book appointments.", m: "Scoped per project", href: "/services/ai-voice-agents" },
  { t: "SaaS & custom software", d: "Full-stack SaaS development, dashboards and internal tools on Next.js, Node.js, TypeScript and PostgreSQL.", m: "3–6 weeks", href: "/services/full-stack-development" },
  { t: "Lead generation & data pipelines", d: "Automated lead scraping, enrichment and AI qualification — delivered CRM-ready to HubSpot, Apollo or your pipeline.", m: "1–2 weeks", href: "/services/lead-generation-scraping" },
  { t: "Integrations & infrastructure", d: "Stripe, HubSpot, Apollo and 50+ platforms connected, deployed with Docker and CI/CD.", m: "Scoped per project", href: "/services/api-integration" },
];

export const phasesPreview = [
  { n: "Phase 01", when: "Day 1", t: "Diagnose", d: "Map the workflow, quantify the manual effort, and define what success is measured against." },
  { n: "Phase 02", when: "Day 2–3", t: "Specify", d: "A fixed-price proposal: scope, architecture, timeline, acceptance criteria and revision rounds." },
  { n: "Phase 03", when: "1–3 weeks", t: "Build", d: "Delivered in working modules, with a demo and written update every week." },
  { n: "Phase 04", when: "Final week + 30 days", t: "Hand over", d: "QA, deployment, documentation and ownership transfer — followed by 30 days of support." },
];

export const featuredCases = [
  {
    slug: toSlug("Outreach Genie — LinkedIn Outbound SaaS"),
    no: "01", tag: "SaaS product", sector: "Sales & recruiting",
    title: "A LinkedIn outbound workspace",
    img: "/site/feature/og-landing-v2.jpg", alt: "LinkedIn outbound product landing page",
    challenge: "Sales teams and recruiters ran LinkedIn outreach from spreadsheets, notes and disconnected tools, with no pipeline visibility and follow-ups slipping through.",
    built: "A SaaS workspace for prospect lists, visual multi-step outreach flows, AI-assisted personalised messaging, team roles and campaign analytics.",
    n: 10, suffix: "×", result: "outreach capacity per team", stack: "Next.js · PostgreSQL · LinkedIn API · OpenAI",
  },
  {
    slug: toSlug("iPrint AI Voice & Chat Support Agent"),
    no: "02", tag: "AI agent", sector: "Print & e-commerce",
    title: "An AI support desk across chat and phone",
    img: "/site/feature/voice-dashboard.jpg", alt: "Support agent metrics dashboard",
    challenge: "More than 500 enquiries a day across chat and phone, a small support team, growing wait times and missed follow-ups.",
    built: "One AI agent behind both channels — ElevenLabs voice over Twilio and web chat — with Stripe payments and booking inside the conversation.",
    n: 500, suffix: "+", result: "queries resolved daily · 45% faster replies", stack: "n8n · ElevenLabs · Twilio · OpenAI · Stripe",
  },
  {
    slug: toSlug("Workforce Second Brain Automation Layer"),
    no: "03", tag: "AI automation", sector: "Recruiting operations",
    title: "A governed company-memory layer",
    img: "/site/feature/workforce.jpg", alt: "Company-memory meeting intelligence settings",
    challenge: "Useful context from meetings, Slack and candidate conversations was lost — but raw data could not simply be dumped into a knowledge base.",
    built: "A review-gated pipeline: meeting and CRM signals are extracted, approved in Slack, sanitised and committed to a Git-backed Markdown vault.",
    n: 100, suffix: "%", result: "of knowledge changes reviewed before they’re saved", stack: "n8n · Go · Next.js · Gemini · Docker",
  },
];

export const fitYes = [
  "Have a repeatable process eating 5+ hours of someone’s week",
  "Want one accountable engineer instead of an agency hand-off chain",
  "Value a fixed price and written acceptance criteria",
  "Already use tools like HubSpot, Slack, Airtable or a CRM and want them connected",
  "Want a system your team owns and understands after launch",
];
export const fitNo = [
  "Need a large in-house team for a multi-year programme",
  "Want an AI demo for a pitch, not a system that runs in production",
  "Are comparing on the lowest hourly rate rather than a fixed, accountable outcome",
  "Can’t make anyone available for a short weekly review and feedback",
  "Haven’t yet decided which process matters most — though the free call can help with exactly that",
];

export const diagnosticGets = [
  "Your biggest time sink, identified and sized",
  "What to automate first — and what to leave alone",
  "A realistic timeline and price range",
  "No sales pitch, no obligation",
];

export const faqGroups: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Working together",
    items: [
      { q: "Do I need a technical team to work with you?", a: "No. Most clients are operations, support or sales leaders. I handle scoping, architecture and delivery, and explain every decision in plain business terms." },
      { q: "What do you need from us to get started?", a: "Thirty minutes with the person who runs the process today, a few real examples of its inputs and outputs, and access to the tools the system will connect to." },
      { q: "Which time zones do you work with?", a: "I’m based in Tunisia (UTC+1), with full overlap with Europe and morning overlap with North America. Replies come within one business day, usually much faster." },
    ],
  },
  {
    group: "Pricing & timelines",
    items: [
      { q: "How much does a project cost?", a: "Every project is fixed-price, agreed in writing before work starts. Automation projects typically start from $300; AI platforms and SaaS products are scoped individually. You receive the price in your proposal within two to three days of our call." },
      { q: "How quickly will we see results?", a: "You see working software in the first week. Automation pipelines and AI integrations usually go live in 1–2 weeks; full SaaS platforms or complex RAG systems in 3–6 weeks." },
      { q: "What if the result doesn’t match what we agreed?", a: "Acceptance criteria are written into the proposal. If a deliverable doesn’t meet them, I fix it at no additional cost." },
    ],
  },
  {
    group: "AI, data & ownership",
    items: [
      { q: "Can an AI assistant give our customers wrong answers?", a: "Assistants answer only from your approved sources, cite where each answer came from, and escalate anything they can’t ground to a person. They are tested on your real questions before launch." },
      { q: "Who owns the code, workflows and accounts?", a: "You do. Everything is built in your accounts or handed over to them, with documentation and ownership notes, so you are never dependent on me to keep it running." },
      { q: "How is confidentiality handled?", a: "An NDA is signed before anything sensitive is shared. Client data and workflows are never reused — which is why client names aren’t published on this site." },
      { q: "Will it work with the tools we already use?", a: "Almost certainly. I’ve integrated 50+ platforms — HubSpot, Stripe, Twilio, Slack, Airtable, Supabase and more — and build around your stack rather than replacing it." },
    ],
  },
  {
    group: "After launch",
    items: [
      { q: "What happens if something breaks?", a: "Every system ships with error handling, retries and alerts. Thirty days of support are included, and an optional monthly retainer covers monitoring, maintenance and new features." },
    ],
  },
];

/* ---------------------------------------------------------------------------
   About page
--------------------------------------------------------------------------- */

export const career = [
  {
    when: "Nov 2025 — Present", where: "Remote", role: "AI Automation Engineer", org: "Lean Orchester", logo: "/lean.png",
    points: [
      "RAG pipeline for a sports retailer with automated ingestion, reducing support queries by 60%.",
      "Chat and voice support agent handling 500+ daily queries with payments built in, improving response time by 45%.",
      "Lead enrichment automation combining Apollo, LLMs and scraping, reducing screening time by 80%.",
      "Field-service reporting pipeline for jobs, technician KPIs and revenue, saving 15 hours a week.",
    ],
  },
  { when: "Jul — Aug 2024", where: "Remote", role: "Full-Stack Developer", org: "Grow Up Agency", logo: "/growup.jpg", text: "Healthcare management system with secure authentication, automated email and SMS notifications, and real-time dashboards." },
  { when: "Feb — May 2024", where: "Sfax, Tunisia", role: "Full-Stack Developer", org: "Aziin Engineering Solutions", logo: "/aziin.jpg", text: "E-learning SaaS for 1,000+ users with live video, real-time chat, Stripe payments and an AI exam generator that reduced instructor workload by 40%." },
  { when: "Jul — Aug 2023", where: "Sfax, Tunisia", role: "Frontend Developer", org: "Novel-Ti", logo: "/novel.png", text: "Responsive interface for an NFC-based product traceability system, reducing page load time by 20%." },
];

export const capabilities = [
  ["AI & language models", "OpenAI, Claude, Gemini, LangChain, ElevenLabs, vector databases"],
  ["Automation", "n8n, Make, Zapier, webhooks, HubSpot, Apollo"],
  ["Application development", "TypeScript, Python, Next.js, React, Node.js, Nest.js, Electron"],
  ["Data", "PostgreSQL, Supabase, MongoDB, SQLite"],
  ["Infrastructure", "Docker, Vercel, GitHub Actions, CI/CD"],
];

export const stackGroups: { label: string; cats: string[] }[] = [
  { label: "AI & language models", cats: ["ai"] },
  { label: "Automation & integrations", cats: ["automation"] },
  { label: "Frontend & desktop", cats: ["frontend", "desktop"] },
  { label: "Backend & languages", cats: ["backend", "language"] },
  { label: "Data", cats: ["database"] },
  { label: "Infrastructure", cats: ["devops"] },
];

/* service display names */
export const serviceNames: Record<string, string> = {
  "ai-rag-systems": "AI & RAG knowledge systems",
  "workflow-automation": "n8n workflow automation",
  "full-stack-development": "SaaS & custom software",
  "ai-voice-agents": "AI voice & chat agents",
  "lead-generation-scraping": "Lead generation & data pipelines",
  "database-backend": "Database & backend",
  "devops-cloud": "DevOps & cloud",
  "api-integration": "Integrations & infrastructure",
};
