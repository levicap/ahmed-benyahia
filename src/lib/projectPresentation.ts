const PUBLIC_PROJECT_TITLES: Record<string, string> = {
  "Workforce Second Brain Automation Layer": "Second Brain Automation Layer",
  "Finoria ERP": "Desktop ERP for Small Businesses",
  "Gantic to Spott CRM Migration Sync": "CRM Migration & Synchronization",
  "Postily – AI Social Media Platform": "AI Social Media Platform",
  "APIspark – Drag & Drop API Builder": "Drag & Drop API Builder",
  "Scenewear E-Commerce": "Fashion E-Commerce Platform",
  "MiniSport Internal RAG Assistant": "Internal RAG Assistant",
  "BookieLink Customer Support Bot": "Customer Support RAG Bot",
  "iPrint AI Voice & Chat Support Agent": "AI Voice & Chat Support Agent",
  "Tonic SMS Automation System": "SMS Automation System",
  "OlalaHomes Property Dashboard": "Property Operations Dashboard",
  "Ghanem Labs — Web3 Audit SaaS": "Web3 Audit SaaS",
  "Outreach Genie — LinkedIn Outbound SaaS": "LinkedIn Outbound SaaS",
  "TechForce GitHub Developer Sourcing": "GitHub Developer Sourcing",
  "TechForce Indeed Jobs Enrichment Pipeline": "Indeed Jobs Enrichment Pipeline",
  "Strategy Navigator — AI SaaS Platform": "Strategy Planning AI SaaS",
  "JourneyAI — AI Sales Assistant Platform": "AI Sales Assistant Platform",
  "SaleSide AI — Sales Meeting Assistant": "Real-Time Sales Meeting Assistant",
  "EduNova — LMS with AI & WebSocket": "AI Learning Management Platform",
  "ExplodingLeads — Lead Signal Engine": "Lead Signal Engine",
};

export function getPublicProjectTitle(title: string) {
  return PUBLIC_PROJECT_TITLES[title] ?? title;
}
