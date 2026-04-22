export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceDetail {
  slug: string;
  tagline: string;
  overview: string;
  includes: string[];
  howItWorks: ServiceStep[];
  stats: ServiceStat[];
  /** Project titles that map to case studies via toSlug() */
  relatedProjects: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ai-rag-systems",
    tagline: "Turn your docs, FAQs, and knowledge base into a 24/7 AI assistant.",
    overview:
      "I design and deploy production-grade Retrieval-Augmented Generation systems that let your team — or your customers — query any document, policy, or knowledge base in plain English. Built with automated ingestion pipelines that re-index content on update, semantic vector search for accurate retrieval, and OpenAI-powered conversational interfaces that stay in context.",
    includes: [
      "Document ingestion pipeline with automatic re-indexing on update",
      "Vector database setup (pgvector or Pinecone) with chunking strategy",
      "Semantic similarity search tuned for your content type",
      "Conversational query interface with memory and context window",
      "Webhook or API endpoint for embedding into any product",
      "Analytics layer to track query accuracy and escalation rate",
    ],
    howItWorks: [
      {
        title: "Ingest & Embed",
        description:
          "Your documents — PDFs, Notion pages, CSVs, website content — are ingested, chunked, and embedded into a vector database. The pipeline re-runs automatically whenever content changes.",
      },
      {
        title: "Retrieve & Rank",
        description:
          "When a user asks a question, semantic search retrieves the most relevant chunks from the vector DB. Context is assembled and ranked before being passed to the LLM.",
      },
      {
        title: "Generate & Deliver",
        description:
          "OpenAI synthesises a grounded, accurate answer from retrieved context. Unknown queries are escalated or flagged — the bot never hallucinates outside of your data.",
      },
    ],
    stats: [
      { value: "60%", label: "Support queries automated" },
      { value: "85%", label: "Bot accuracy on first response" },
      { value: "70%", label: "Ticket volume reduction (month 1)" },
    ],
    relatedProjects: [
      "MiniSport Internal RAG Assistant",
      "BookieLink Customer Support Bot",
      "iPrint AI Voice & Chat Support Agent",
    ],
  },
  {
    slug: "workflow-automation",
    tagline: "Stop doing the same work twice. Automate it once, run it forever.",
    overview:
      "I map your manual workflows, identify every repetitive bottleneck, and replace them with n8n or Zapier automations that run reliably without human involvement. From field service reporting to CRM enrichment to content publishing — if it follows a pattern, it can be automated.",
    includes: [
      "Full workflow audit and automation opportunity mapping",
      "n8n or Zapier pipeline design and deployment",
      "Webhook and API orchestration between third-party tools",
      "Cron-scheduled and event-triggered pipeline execution",
      "Error handling, alerting, and retry logic",
      "Documentation and handoff for in-house management",
    ],
    howItWorks: [
      {
        title: "Map the Manual Work",
        description:
          "We audit your current process, document every manual step, and identify what should be automated vs. what requires human judgment.",
      },
      {
        title: "Build & Connect",
        description:
          "I build the n8n or Zapier workflow, connect all your existing tools via APIs and webhooks, and configure triggers, conditions, and data transformations.",
      },
      {
        title: "Test, Deploy & Monitor",
        description:
          "The pipeline is tested end-to-end in a staging environment before go-live. Monitoring and error alerting are set up so you know immediately if anything breaks.",
      },
    ],
    stats: [
      { value: "15h", label: "Saved per week per client" },
      { value: "80%", label: "Reduction in manual screening" },
      { value: "98%", label: "Deliverability on 10K+ campaigns" },
    ],
    relatedProjects: [
      "Tonic SMS Automation System",
      "SEO Content & Webflow Automation",
      "AI Book Writing Agent",
      "AI Book Recommendation Automation",
    ],
  },
  {
    slug: "full-stack-development",
    tagline: "From idea to deployed product — clean code, real results.",
    overview:
      "I build scalable, production-ready web applications using Next.js, Node.js, and PostgreSQL. Whether you need a SaaS platform, an internal dashboard, or a client-facing e-commerce store — I own the full stack from database schema to UI, with CI/CD and deployment included.",
    includes: [
      "Next.js frontend with responsive UI and Tailwind CSS",
      "Node.js or Express REST API backend",
      "PostgreSQL or MongoDB database design and migrations",
      "Authentication — JWT, OAuth2, RBAC",
      "Payment integration via Stripe",
      "Deployment on Vercel or cloud with GitHub Actions CI/CD",
    ],
    howItWorks: [
      {
        title: "Scope & Architect",
        description:
          "We define user stories, data models, and API contracts. I produce a technical spec before writing a single line of code.",
      },
      {
        title: "Build Iteratively",
        description:
          "Development happens in weekly sprints. You see working features early and often — not a big-bang delivery at the end.",
      },
      {
        title: "Ship & Support",
        description:
          "Full deployment, documentation, and 30 days of post-launch support included. Codebase handed off clean with README and env setup.",
      },
    ],
    stats: [
      { value: "3wk", label: "Avg. time to first live version" },
      { value: "$50K+", label: "Monthly transactions processed" },
      { value: "95+", label: "Lighthouse performance score" },
    ],
    relatedProjects: [
      "Postily – AI Social Media Platform",
      "APIspark – Drag & Drop API Builder",
      "Scenewear E-Commerce",
      "OlalaHomes Property Dashboard",
      "Ghanem Labs — Web3 Audit SaaS",
      "Outreach Genie — LinkedIn Outbound SaaS",
    ],
  },
  {
    slug: "ai-voice-agents",
    tagline: "Your business answers the phone — even at 3am.",
    overview:
      "I build AI voice agents powered by ElevenLabs and Twilio that handle inbound and outbound phone calls with human-like speech. Customers get instant, accurate answers without hold times. Voice agents can take payments, book appointments, and escalate to a human when truly needed — all inside a single call.",
    includes: [
      "ElevenLabs voice synthesis with custom voice clone or preset",
      "Twilio telephony integration for inbound and outbound calls",
      "Conversational AI with context memory across the call",
      "Stripe payment collection inside the voice flow",
      "Automated booking and calendar scheduling",
      "Call transcript logging and escalation routing",
    ],
    howItWorks: [
      {
        title: "Design the Call Flow",
        description:
          "We map every scenario the agent needs to handle — FAQs, payments, bookings, escalations — and define the conversation logic and fallback paths.",
      },
      {
        title: "Build Voice + Brain",
        description:
          "ElevenLabs provides the voice. The AI brain is powered by OpenAI with your business context baked in via a system prompt and RAG retrieval layer.",
      },
      {
        title: "Deploy on Your Number",
        description:
          "The agent is connected to your Twilio number and goes live. Calls are recorded, transcribed, and logged for review.",
      },
    ],
    stats: [
      { value: "500+", label: "Daily queries handled autonomously" },
      { value: "45%", label: "Response time improvement" },
      { value: "0", label: "Headcount added" },
    ],
    relatedProjects: [
      "iPrint AI Voice & Chat Support Agent",
    ],
  },
  {
    slug: "lead-generation-scraping",
    tagline: "Wake up to an inbox of warm, qualified, enriched leads — every day.",
    overview:
      "I build automated lead acquisition pipelines that scrape target platforms, score leads against your ICP with LLMs, enrich contact data via Apollo or FindThatLead, and insert ready records into your CRM. No manual sourcing. No cold lists. Just warm leads with verified contact data waiting for outreach.",
    includes: [
      "Multi-source scraping: LinkedIn, GitHub, Indeed, Upwork, Google",
      "LLM-based ICP qualification scoring against custom criteria",
      "Apollo API and FindThatLead contact enrichment",
      "Deduplication and CRM insertion (HubSpot, Gospott, Clarify, Supabase)",
      "Signal-based triggering: new hire, new office, new job posts",
      "Delivery to Gmail, Slack, or CRM with full context",
    ],
    howItWorks: [
      {
        title: "Define Your ICP",
        description:
          "We document your ideal customer profile — industry, size, signals, job titles — and translate it into scoring rules for the AI qualification layer.",
      },
      {
        title: "Scrape & Score",
        description:
          "Automated scrapers pull leads from target platforms on a schedule. Each lead is scored by an LLM against your criteria. Only qualifying leads proceed.",
      },
      {
        title: "Enrich & Deliver",
        description:
          "Verified email and contact data is appended via Apollo. Enriched records land in your CRM or inbox — ready for outreach with no additional research.",
      },
    ],
    stats: [
      { value: "80%", label: "Manual sourcing eliminated" },
      { value: "10K+", label: "Leads processed per campaign" },
      { value: "3×", label: "Pipeline throughput increase" },
    ],
    relatedProjects: [
      "Lead Acquisition System",
      "TechForce GitHub Developer Sourcing",
      "TechForce Indeed Jobs Enrichment Pipeline",
      "Upwork Jobs Scraper & Contact Enrichment",
      "ExplodingLeads — Lead Signal Engine",
    ],
  },
  {
    slug: "database-backend",
    tagline: "Robust data foundations that scale as your product grows.",
    overview:
      "I design and build PostgreSQL, MongoDB, and Supabase backends optimised for AI workloads, real-time applications, and high-volume transactional systems. From schema design to query optimisation to vector storage — your data layer is built to handle production load from day one.",
    includes: [
      "PostgreSQL schema design, migrations, and indexing strategy",
      "Supabase setup with Row Level Security and real-time subscriptions",
      "Vector database configuration for AI/RAG workloads (pgvector, Pinecone)",
      "ORM setup with Prisma or TypeORM",
      "Redis caching layer for high-frequency read operations",
      "API layer with full CRUD, filtering, pagination, and auth",
    ],
    howItWorks: [
      {
        title: "Model the Data",
        description:
          "We design the entity-relationship model together before any tables are created. Normalization, indexing, and access patterns are planned upfront.",
      },
      {
        title: "Build the Backend",
        description:
          "The API layer is built on Node.js with full authentication, input validation, and error handling. Queries are optimised for the expected data volume.",
      },
      {
        title: "Test & Harden",
        description:
          "Load testing, security hardening (SQL injection, rate limiting), and backup strategies are configured before handing over to production.",
      },
    ],
    stats: [
      { value: "40%", label: "Faster load times with caching" },
      { value: "$50K+", label: "Monthly transactions processed" },
      { value: "SOC-2", label: "Compliance-ready auth implementation" },
    ],
    relatedProjects: [
      "OlalaHomes Property Dashboard",
      "Scenewear E-Commerce",
      "Postily – AI Social Media Platform",
    ],
  },
  {
    slug: "devops-cloud",
    tagline: "Ship faster with automated pipelines and zero-downtime deployments.",
    overview:
      "I set up CI/CD pipelines, Docker containerisation, and cloud deployments that make releasing code safe, fast, and repeatable. From GitHub Actions workflows to Vercel edge deployments — your infrastructure is automated so your team ships without fear.",
    includes: [
      "GitHub Actions CI/CD pipeline with test, build, and deploy stages",
      "Docker containerisation and docker-compose local dev setup",
      "Vercel or cloud deployment with preview environments per PR",
      "Environment variable management and secret scanning",
      "Automated database migration on deploy",
      "Monitoring, error tracking, and uptime alerting",
    ],
    howItWorks: [
      {
        title: "Audit Current Setup",
        description:
          "We review your existing deployment process and identify manual steps, security gaps, and points of failure in the pipeline.",
      },
      {
        title: "Automate the Pipeline",
        description:
          "GitHub Actions is configured to run tests, lint checks, and build steps on every PR. Merges to main deploy automatically with zero manual steps.",
      },
      {
        title: "Monitor & Alert",
        description:
          "Error tracking and uptime monitoring are connected so your team is notified of issues before customers report them.",
      },
    ],
    stats: [
      { value: "0", label: "Manual deploy steps after setup" },
      { value: "95+", label: "Lighthouse score achieved" },
      { value: "100%", label: "Rollback coverage on every deploy" },
    ],
    relatedProjects: [
      "APIspark – Drag & Drop API Builder",
      "Postily – AI Social Media Platform",
    ],
  },
  {
    slug: "api-integration",
    tagline: "Make your tools talk to each other — reliably and at scale.",
    overview:
      "I integrate any combination of third-party APIs — Stripe, HubSpot, ElevenLabs, Apollo, Webflow, Twilio, and 50+ more — into your product or automation stack. Every integration includes error handling, retry logic, webhook validation, and monitoring so data flows reliably without manual babysitting.",
    includes: [
      "REST and GraphQL API integration with full error handling",
      "Webhook ingestion with signature validation and idempotency",
      "OAuth2 and API key authentication management",
      "Rate limit handling and automatic retry logic",
      "Data transformation and normalisation between systems",
      "Monitoring and alerting for integration health",
    ],
    howItWorks: [
      {
        title: "Map the Data Flow",
        description:
          "We document what data needs to move between which systems, when it should trigger, and what transformations are required.",
      },
      {
        title: "Build & Secure",
        description:
          "Integration code is built with proper authentication, webhook validation, and idempotency so no event is processed twice or missed.",
      },
      {
        title: "Test Edge Cases",
        description:
          "Every integration is tested against API rate limits, malformed payloads, and service downtime scenarios before going live.",
      },
    ],
    stats: [
      { value: "50+", label: "APIs integrated across projects" },
      { value: "99.9%", label: "Webhook delivery reliability" },
      { value: "0", label: "Data loss incidents" },
    ],
    relatedProjects: [
      "iPrint AI Voice & Chat Support Agent",
      "Tonic SMS Automation System",
      "Lead Acquisition System",
    ],
  },
];
