import type { PortfolioData } from "@/types";

export const data: PortfolioData = {
  name: "Ahmed Ben Yahia",
  photo: "/ahmed-linkedin.png",
  title: [
    "Full-Stack & AI Automation Engineer",
    "RAG Systems Specialist",
    "Full Stack Developer",
    "LLM Pipeline Builder",
  ],
  bio: "I build the systems that save your team 15+ hours a week — RAG pipelines, AI agents, and n8n automations that run on autopilot so you scale without hiring. 27+ projects delivered for international clients across SaaS, e-commerce, and B2B.",
  availability: true,

  stats: [
    { value: "27+",  label: "Projects Delivered" },
    { value: "10+",  label: "Happy Clients" },
    { value: "2+",   label: "Years Experience" },
    { value: "98%",  label: "On-Time Delivery" },
  ],

  platforms: [
    { name: "Upwork",   badge: "Available",     url: "https://www.upwork.com/freelancers/~01ea5c88341e5ce942" },
    { name: "LinkedIn", badge: "Open to Work",  url: "https://linkedin.com/in/ahmedbenyahia" },
  ],

  clients: [
    { name: "MiniSport",  logo: "/minisport.svg" },
    { name: "iPrint",     logo: "/images/iprint.png" },
    { name: "Bookielink", logo: "/images/bookielink.png" },
    { name: "OlalaHomes", logo: "/images/olala.png" },
    { name: "ServiceM8",  logo: "/images/servicem8.png" },
    { name: "Tonic",      logo: "/images/tonic.png" },
    { name: "TechForce",  logo: "/images/techforce.png" },
  ],

  services: [
    {
      title: "AI & RAG Systems",
      description:
        "Production-grade Retrieval-Augmented Generation pipelines with automated document ingestion, vector search, and conversational AI — for customer support and internal knowledge bases.",
      icon: "layers",
      size: "featured",
    },
    {
      title: "Workflow Automation",
      description:
        "End-to-end automation with n8n, Zapier, and custom APIs — eliminating manual work and saving 15+ hours/week.",
      icon: "zap",
      size: "narrow",
    },
    {
      title: "Full Stack Development",
      description:
        "Scalable web apps with Next.js, Node.js, and PostgreSQL — from landing pages to full SaaS platforms.",
      icon: "plug",
      size: "narrow",
    },
    {
      title: "AI Voice Agents",
      description:
        "Human-like voice AI systems using ElevenLabs and Twilio for real-time phone and SMS customer interactions.",
      icon: "gauge",
      size: "half",
    },
    {
      title: "Lead Generation & Scraping",
      description:
        "Automated pipelines that scrape, enrich, and qualify leads from Upwork, LinkedIn, GitHub, and more — synced directly to your CRM.",
      icon: "pen-tool",
      size: "half",
    },
    {
      title: "Database & Backend",
      description:
        "Robust backends with PostgreSQL, MongoDB, Supabase, and vector databases optimized for AI workloads.",
      icon: "database",
      size: "third",
    },
    {
      title: "DevOps & Cloud",
      description:
        "CI/CD pipelines, Docker containerization, and cloud deployments via GitHub Actions and Vercel.",
      icon: "cloud",
      size: "third",
    },
    {
      title: "API Integration",
      description:
        "Seamless third-party integrations — Stripe, HubSpot, Chatwoot, Apollo, ElevenLabs, and 50+ more.",
      icon: "search",
      size: "third",
    },
  ],

  process: [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "We map out your workflow, identify automation opportunities, and define clear success metrics together.",
      badge: "Day 1",
    },
    {
      step: 2,
      title: "Proposal & Scope",
      description:
        "You receive a detailed technical proposal with timeline, deliverables, and a clear price range — no surprises.",
      badge: "Day 2–3",
    },
    {
      step: 3,
      title: "Design & Build",
      description:
        "I build iteratively with weekly updates, shipping working modules so you see progress continuously.",
      badge: "1–3 Weeks",
    },
    {
      step: 4,
      title: "Review & Launch",
      description:
        "Final QA, documentation handoff, and deployment — with 30 days of post-launch support included.",
      badge: "Final Week",
    },
  ],

  stack: [
    { name: "Next.js",       category: "frontend"   },
    { name: "React",         category: "frontend"   },
    { name: "Tailwind CSS",  category: "frontend"   },
    { name: "TypeScript",    category: "language"   },
    { name: "Python",        category: "language"   },
    { name: "JavaScript",    category: "language"   },
    { name: "Electron.js",   category: "desktop"    },
    { name: "Node.js",       category: "backend"    },
    { name: "Express.js",    category: "backend"    },
    { name: "Nest.js",       category: "backend"    },
    { name: "n8n",           category: "automation" },
    { name: "Zapier",        category: "automation" },
    { name: "LangChain",     category: "ai"         },
    { name: "OpenAI",        category: "ai"         },
    { name: "ElevenLabs",    category: "ai"         },
    { name: "Claude",        category: "ai"         },
    { name: "Gemini",        category: "ai"         },
    { name: "Make",          category: "automation" },
    { name: "HubSpot",       category: "automation" },
    { name: "Apollo",        category: "automation" },
    { name: "PostgreSQL",    category: "database"   },
    { name: "MongoDB",       category: "database"   },
    { name: "SQLite",        category: "database"   },
    { name: "Supabase",      category: "database"   },
    { name: "Docker",        category: "devops"     },
    { name: "Vercel",        category: "devops"     },
    { name: "GitHub Actions",category: "devops"     },
  ],

  projects: [
    {
      title: "Invoice Parsing & KPI Reporting Dashboard",
      description:
        "A finance operations dashboard that turns messy invoice inputs into one clean, Airtable-ready format. It combines parsing, Supabase storage, Airtable sync, and Recharts KPIs so teams can review invoice flow and reporting from one place.",
      thumbnail: "/reporting%20.png",
      tags: ["Next.js", "Supabase", "Airtable API", "Recharts", "TypeScript"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "",
      featured: true,
      resultLabel: "Invoice Ops Dashboard",
      bestFor: "Finance teams replacing manual invoice cleanup",
    },
    {
      title: "Workforce Second Brain Automation Layer",
      description:
        "A controlled company-memory layer for Workforce that connects meetings, Slack approvals, WhatsApp/Spott communication, and a Git-backed knowledge vault. It turns approved operational signals into sanitized Markdown knowledge while keeping source systems authoritative.",
      thumbnail: "/second%20brain%20workforce.png",
      tags: ["Next.js", "Node.js", "Go", "Docker", "SQLite", "n8n", "Fathom API", "Slack API", "GitHub API", "Spott API", "WhatsApp", "Gemini API"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
      featured: true,
      resultLabel: "Controlled Knowledge Vault",
      bestFor: "Operations teams that need reviewed company memory",
    },
    {
      title: "Finoria ERP",
      description:
        "A desktop ERP that gives small businesses one local system for sales, purchases, stock, and payment tracking. Built with Electron.js and SQLite so teams can run daily operations reliably without spreadsheets or internet-dependent tools.",
      thumbnail: "/finoria.png",
      tags: ["Electron.js", "SQLite", "JavaScript", "ERP", "Desktop App"],
      category: "Desktop App",
      liveUrl: "",
      githubUrl: "",
      featured: true,
      resultLabel: "Offline Desktop ERP",
      bestFor: "Small businesses managing core operations locally",
    },
    {
      title: "Gantic to Spott CRM Migration Sync",
      description:
        "A CRM migration automation that keeps candidate records moving from Gantic into Spott without manual exports. The workflow maps fields, avoids duplicate records, and protects recruiting operations while the client moves to a new CRM.",
      thumbnail: "/gantictospottcrm.png",
      tags: ["n8n", "Gantic CRM", "Spott API", "CRM Automation", "Webhooks"],
      category: "Automation",
      liveUrl: "",
      githubUrl: "",
      featured: true,
      resultLabel: "CRM Migration",
      bestFor: "Recruiting teams moving between CRMs",
    },
    {
      title: "Meeting Transcript to Asana Workflow",
      description:
        "A meeting-to-execution workflow that converts transcript notes into structured Asana tasks. It extracts action items, owners, and context so decisions made in meetings become trackable work instead of forgotten notes.",
      thumbnail: "/meeting%20transcipt%20.png",
      tags: ["n8n", "Asana API", "OpenAI API", "Transcription", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
      resultLabel: "Meeting to Tasks",
      bestFor: "Teams turning calls into accountable execution",
    },
    {
      title: "Asana Board Daily Update Digest",
      description:
        "A daily operations digest for Asana boards that turns task changes into a clear morning summary. It helps the client see what moved, what is blocked, and where follow-up is needed without manually checking every board.",
      thumbnail: "/asana%20board.png",
      tags: ["n8n", "Asana API", "OpenAI API", "Gmail", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
      resultLabel: "Daily Ops Digest",
      bestFor: "Managers who need Asana visibility without board checking",
    },
    {
      title: "AI Career Path Mapper",
      description:
        "An AI career planning platform that turns a user's current role and target job into a practical roadmap. It identifies skill gaps, recommends learning paths, and gives job seekers a structured plan instead of generic career advice.",
      thumbnail: "/carrer.png",
      tags: ["Next.js", "Express.js", "Gemini API", "TypeScript"],
      category: "AI Tool",
      liveUrl: "https://ai-path-carrer-generator.vercel.app/",
      githubUrl: "https://github.com/levicap/ai-path-carrer-generator",
    },
    {
      title: "AI Motivation Letter Generator",
      description:
        "A job application tool that generates 10 tailored, ATS-friendly motivation letters for a specific company and role. It saves applicants hours of writing while giving them polished PDF/Word-ready options.",
      thumbnail: "/motivation.png",
      tags: ["Next.js", "Express.js", "Gemini API", "TypeScript"],
      category: "AI Tool",
      liveUrl: "https://motivation-letter-ai.vercel.app/",
      githubUrl: "https://github.com/levicap/motivationletteraiapi",
    },
    {
      title: "Postily – AI Social Media Platform",
      description:
        "A social media SaaS that helps teams create, schedule, and analyze posts from one workspace. AI captions, image generation, campaign planning, and analytics reduce the manual work behind consistent publishing.",
      thumbnail: "/postily.png",
      tags: ["Next.js", "MongoDB", "OpenAI API"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "https://github.com/ahmedbenyahia/postily",
    },
    {
      title: "APIspark – Drag & Drop API Builder",
      description:
        "A visual API builder that lets developers design backend flows with drag-and-drop blocks, AI-generated code, and automatic documentation. It shortens the repetitive setup phase before real business logic begins.",
      thumbnail: "/apisparkp.png",
      tags: ["Next.js", "Node.js", "Prisma", "AI"],
      category: "SaaS",
      liveUrl: "https://apisparkdev.vercel.app/",
      githubUrl: "https://github.com/levicap/apispark-saas",
    },
    {
      title: "Scenewear E-Commerce",
      description:
        "A full e-commerce platform for a local clothing brand, covering catalog browsing, cart flow, and order management. It moved the business from manual social-media orders into a scalable online storefront.",
      thumbnail: "/scenewear.png",
      tags: ["Next.js", "Spring Boot", "PostgreSQL"],
      category: "E-Commerce",
      liveUrl: "https://scenewear-ecommerce.vercel.app/",
      githubUrl: "https://github.com/levicap/scenewear-ecommerce",
    },

    {
      title: "MiniSport Internal RAG Assistant",
      description:
        "An internal RAG assistant that lets the MiniSport team ask questions across company documentation in natural language. It reduces time spent searching docs and gives staff faster, more consistent answers.",
      thumbnail: "/minisport-rag.png",
      tags: ["n8n", "OpenAI API", "Vector Database", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "BookieLink Customer Support Bot",
      description:
        "A RAG-powered support bot trained on thousands of BookieLink Q&A records. It handles repetitive customer questions automatically, reduces support tickets, and frees the team for higher-value cases.",
      thumbnail: "/bookilink-bot.png",
      tags: ["n8n", "OpenAI API", "Vector Database", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "iPrint AI Voice & Chat Support Agent",
      description:
        "A combined chat and voice support agent for iPrint using ElevenLabs, Twilio, and payment integrations. It handles high-volume customer requests, improves response speed, and keeps sales/support actions inside one conversation.",
      thumbnail: "/iprint-chatbot.png",
      tags: ["n8n", "ElevenLabs", "Twilio", "OpenAI API"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
      resultLabel: "High-volume support automation",
      bestFor: "Support teams handling repetitive chat and phone requests",
    },
    {
      title: "Lead Acquisition System",
      description:
        "A lead acquisition pipeline that scrapes, enriches, qualifies, and formats prospects from Upwork, GitHub, and Indeed. It gives sales/recruiting teams CRM-ready records instead of hours of manual sourcing.",
      thumbnail: "/leads.png",
      tags: ["n8n", "Web Scraping", "Apollo API", "LLM"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Tonic SMS Automation System",
      description:
        "A campaign automation system that connects Kit.com and Twilio to send targeted SMS at scale. It gives marketing teams a repeatable way to reach subscribers, track delivery, and run campaigns without manual sending.",
      thumbnail: "/tonic.png",
      tags: ["n8n", "Twilio", "Kit.com", "Webhooks"],
      category: "Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "AI Book Writing Agent",
      description:
        "An AI writing workflow that turns raw transcripts into structured book chapters with consistent tone and organization. It helps authors move from spoken ideas to review-ready manuscript drafts much faster.",
      thumbnail: "/book.png",
      tags: ["n8n", "OpenAI API", "Prompt Orchestration"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "SEO Content & Webflow Automation",
      description:
        "An SEO publishing automation that researches a target vertical, writes optimized articles, generates matching images, and updates Webflow CMS. It turns content production into a repeatable pipeline instead of a manual publishing process.",
      thumbnail: "/seo.png",
      tags: ["n8n", "OpenAI API", "Webflow API", "Image Generation"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "OlalaHomes Property Dashboard",
      description:
        "A property management dashboard for OlalaHomes that centralizes rentals, occupancy, revenue, and maintenance activity. It replaces spreadsheet reporting with one operational view for faster property decisions.",
      thumbnail: "/olalahomes.png",
      tags: ["Next.js", "PostgreSQL", "Recharts", "TypeScript"],
      category: "SaaS",
      liveUrl: "",
      githubUrl: "",
      resultLabel: "15+ hours saved each week",
      bestFor: "Property teams replacing spreadsheet-based reporting",
    },
    {
      title: "Ghanem Labs — Web3 Audit SaaS",
      description:
        "A Web3 intelligence SaaS for smart contract audits, tokenomics checks, and on-chain threat detection. It turns complex blockchain risk signals into clear reports investors can use before committing capital.",
      thumbnail: "/ghanemlabs.png",
      tags: ["Next.js", "Node.js", "Web3", "OpenAI API", "TypeScript"],
      category: "SaaS",
      liveUrl: "https://www.ghanemlab.com/",
      githubUrl: "",
    },
    {
      title: "Outreach Genie — LinkedIn Outbound SaaS",
      description:
        "A LinkedIn outbound workspace for prospect lists, team access, campaign tracking, and AI-assisted messaging. It helps sales teams run outreach with pipeline clarity instead of scattered spreadsheets and notes.",
      thumbnail: "/outreach.png",
      tags: ["Next.js", "PostgreSQL", "LinkedIn API", "OpenAI API"],
      category: "SaaS",
      liveUrl: "https://www.outreachgenie.ai/",
      githubUrl: "",
    },
    {
      title: "AI Book Recommendation Automation",
      description:
        "A personalized recommendation workflow for aisr.qa that combines user job data with an AI interview. It returns eight role-relevant book picks, making recommendations feel curated without manual research.",
      thumbnail: "/bookrecomendation.png",
      tags: ["n8n", "OpenAI API", "Database Query", "Webhooks"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "TechForce GitHub Developer Sourcing",
      description:
        "A recruiting pipeline for TechForce that reads open job locations, finds matching GitHub developers by city, and syncs qualified profiles into Gospott CRM. It turns location-based sourcing into a repeatable automated workflow.",
      thumbnail: "/leads.png",
      tags: ["n8n", "GitHub API", "Supabase", "Gospott CRM", "Web Scraping"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "TechForce Indeed Jobs Enrichment Pipeline",
      description:
        "An Indeed-to-CRM enrichment pipeline that scrapes job listings, syncs them to Clarify, and adds verified contact data from Apollo. It gives TechForce warmer outreach records with less manual research.",
      thumbnail: "/leads.png",
      tags: ["n8n", "Indeed Scraping", "Apollo API", "Clarify CRM", "Web Scraping"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Upwork Jobs Scraper & Contact Enrichment",
      description:
        "A Chrome extension and n8n pipeline for capturing Upwork jobs, enriching leads, and preparing outreach records. It helps freelancers and agencies move from job discovery to qualified contact lists faster.",
      thumbnail: "/upwork.png",
      tags: ["Chrome Extension", "n8n", "FindMyEmail", "Apollo API", "Web Scraping"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Strategy Navigator — AI SaaS Platform",
      description:
        "A multi-tenant strategy SaaS with RBAC, AI assistants, analytics, and billing. It gives teams one structured workspace for planning and tracking strategy instead of spreading decisions across slides, spreadsheets, and disconnected tools.",
      thumbnail: "/strategy-saas.png",
      tags: ["React", "Node.js", "OpenAI API", "TypeScript"],
      category: "SaaS",
      liveUrl: "https://strategynavigator.ai/",
      githubUrl: "",
      resultLabel: "One workspace for strategy execution",
      bestFor: "Leadership teams managing strategy across disconnected tools",
    },
    {
      title: "JourneyAI — AI Sales Assistant Platform",
      description:
        "An AI sales assistant platform that supports reps before and after calls with meeting prep, summaries, and follow-up drafts. Real-time workflows reduce admin work so sales teams can spend more time on active conversations.",
      thumbnail: "/journeyai-saas.png",
      tags: ["React", "Next.js", "Node.js", "WebSocket", "OpenAI API"],
      category: "SaaS",
      liveUrl: "https://meetjourney.ai/",
      githubUrl: "",
    },
    {
      title: "SaleSide AI — Sales Meeting Assistant",
      description:
        "A sales meeting intelligence platform that captures transcripts, objections, summaries, and action items. It preserves the value of each customer conversation and removes manual note-taking from the sales workflow.",
      thumbnail: "/salesside-saas.png",
      tags: ["React", "Next.js", "Node.js", "WebSocket", "OpenAI API"],
      category: "SaaS",
      liveUrl: "https://saleside.ai/",
      githubUrl: "",
    },
    {
      title: "EduNova — LMS with AI & WebSocket",
      description:
        "An LMS with course management, AI chatbot support, and real-time WebSocket collaboration. It improves learner engagement by combining structured content, instant help, and live communication in one platform.",
      thumbnail: "/edunova-lms.png",
      tags: ["React", "Next.js", "Node.js", "WebSocket", "OpenAI API"],
      category: "SaaS",
      liveUrl: "https://e-learning-five-tau.vercel.app/",
      githubUrl: "",
    },
    {
      title: "ExplodingLeads — Lead Signal Engine",
      description:
        "A lead-signal engine that monitors hiring, expansion, and job-posting signals, then qualifies them with AI before delivery. Sales teams receive context-rich leads in Gmail instead of manually scanning the web.",
      thumbnail: "/leadssignals.png",
      tags: ["n8n", "Google API", "RapidAPI", "OpenAI API", "Gmail", "LinkedIn"],
      category: "AI Automation",
      liveUrl: "",
      githubUrl: "",
    },
  ],

  experience: [
    {
      company: "Lean Orchester",
      logo: "/lean.png",
      role: "AI Automation Engineer",
      startDate: "Nov 2025",
      endDate: "Present",
      location: "Remote",
      description:
        "Building production AI automation systems and RAG pipelines for international clients across e-commerce, SaaS, and B2B platforms.",
      achievements: [
        "Built RAG pipeline for Minisport.hk with automated document ingestion and conversational retrieval, reducing support queries by 60%.",
        "Engineered enterprise chatbot for iPrint handling 500+ daily queries with Stripe integration and automated scheduling, improving response time by 45%.",
        "Converted chatbot into Voice AI Agent using ElevenLabs, enabling natural language voice interactions for expanded accessibility.",
        "Developed lead enrichment automation using Apollo API, LLMs, and web scraping, reducing candidate screening time by 80%.",
        "Built ConvertKit-Twilio SMS campaign system delivering messages to 10K+ subscribers with 98% deliverability.",
        "Automated ServiceM8 reporting pipeline extracting jobs, technician KPIs, and revenue metrics, saving 15 hours/week of manual work.",
      ],
    },
    {
      company: "Aziin Engineering Solutions",
      logo: "/aziin.jpg",
      role: "Full Stack Developer Intern",
      startDate: "Feb 2024",
      endDate: "May 2024",
      location: "Hybrid — Sfax, Tunisia",
      description:
        "Architected and developed an e-learning SaaS platform from scratch for 1,000+ concurrent users.",
      achievements: [
        "Architected e-learning SaaS platform serving 1,000+ users with live video (Agora), real-time chat, and AI adaptive learning, boosting engagement by 35%.",
        "Implemented JWT/OAuth2 authentication with RBAC ensuring SOC-2 compliance and integrated Stripe processing $50K+ monthly transactions.",
        "Developed AI exam generator using GPT-4 with auto-grading, reducing instructor workload by 40% for 500+ students.",
        "Optimized performance with Redis caching and code splitting, achieving 40% faster loads and a 95+ Lighthouse score.",
      ],
    },
    {
      company: "Grow Up Agency",
      logo: "/growup.jpg",
      role: "Full Stack Developer Intern",
      startDate: "Jul 2024",
      endDate: "Aug 2024",
      location: "Remote",
      description:
        "Developed a secure healthcare management system with automated notification workflows.",
      achievements: [
        "Developed CRUD functionalities and secure authentication for a healthcare management system, improving operational efficiency by 30%.",
        "Implemented automated email/SMS notifications using Node.js, SMTP, and Twilio with real-time dashboards built in Recharts.",
      ],
    },
    {
      company: "Novel-Ti",
      logo: "/novel.png",
      role: "Frontend Developer Intern",
      startDate: "Jul 2023",
      endDate: "Aug 2023",
      location: "Sfax, Tunisia",
      description:
        "Designed and optimized the responsive UI for an NFC-based product traceability system.",
      achievements: [
        "Designed responsive UI for NFC-based traceability system, improving performance and reducing page load time by 20%.",
      ],
    },
  ],

  testimonials: [
    {
      name: "James O.",
      photo: "",
      project: "BookieLink Support Bot",
      review:
        "Honestly didn't think a chatbot could handle our support volume without constant babysitting. Ours now runs on its own — tickets dropped by 70% in the first month. The handoff was clean, documentation was solid, and I haven't had to touch it since.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Matthew K.",
      photo: "/matthew-minisport.jpg",
      project: "MiniSport Internal Assistant",
      review:
        "Ahmed was exactly the kind of person you want on a project like this — he understood what we needed before we finished explaining it. The assistant went from nothing to deployed in under two weeks. Team adopted it immediately.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "David A.",
      photo: "/david-iprint.jpg",
      project: "iPrint AI Voice & Chat Agent",
      review:
        "We were drowning in support requests. The system handles 500+ queries a day — chat and voice — with Stripe payments running inside the same conversation. I was skeptical it would hold up, but it's been running without issues. Response time is up 45%.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Carlos M.",
      photo: "/carlos-olalahomes.jpg",
      project: "OlalaHomes Property Dashboard",
      review:
        "Ahmed delivered something we'd been putting off for months. Clean dashboard, real data, no spreadsheets. Occupancy and revenue across all properties in one place. Good communication throughout, no surprises on delivery.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Marcus R.",
      photo: "",
      project: "Lead Acquisition Automation",
      review:
        "Our sourcing used to be 80% manual work. Now leads come in enriched, scored, and ready to contact — straight into the CRM. The pipeline runs on its own. I haven't thought about it since it launched, which is exactly how it should be.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "Roman T.",
      photo: "/roman-techfore.jpg",
      project: "TechForce Developer Sourcing Pipeline",
      review:
        "Finding developers by location was taking our team hours. Now we get warm, enriched profiles in Gospott without lifting a finger. Ahmed was a rockstar on this — fast, no back-and-forth, just shipped.",
      rating: 5,
      platform: "Direct",
    },
    {
      name: "David L.",
      photo: "/david-exploding%20leads.png",
      project: "ExplodingLeads — Lead Signal Engine",
      review:
        "What got me was the signal filtering — it's not just scraping, it's actually qualifying. We get notified when a company hires a new ops role or opens a new location, and those leads land in Gmail ready to contact. Completely changed how we do outbound.",
      rating: 5,
      platform: "Direct",
    },

  ],

  guarantee: [
    {
      title: "Written Scope & Acceptance",
      description:
        "Before development starts, we agree on the deliverables, dependencies, and the checks that define a successful handover.",
      icon: "file-check",
    },
    {
      title: "Defined Revision Rounds",
      description:
        "Your proposal states how many review rounds are included, when feedback is collected, and how additional changes are handled.",
      icon: "refresh-cw",
    },
    {
      title: "Visible Delivery Milestones",
      description:
        "The work is divided into clear checkpoints with working demos, progress updates, and early visibility into risks or decisions.",
      icon: "milestone",
    },
    {
      title: "Documented Support Window",
      description:
        "Handover includes documentation, ownership notes, and a written support period with clear response and maintenance expectations.",
      icon: "life-buoy",
    },
  ],

  social: {
    upwork:   "https://www.upwork.com/freelancers/~01ea5c88341e5ce942",
    linkedin: "https://linkedin.com/in/ahmedbenyahia",
    whatsapp: "https://wa.me/21650193344",
    calendly: "https://calendly.com/ahmedbenyahia654/30min?hide_gdpr_banner=1&timezone=Africa%2FTunis",
    github:   "https://github.com/levicap",
    email:    "mailto:ahmedbenyahia654@gmail.com",
  },
};
