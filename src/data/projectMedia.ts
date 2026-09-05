export interface ProjectMediaItem {
  src: string;
  alt: string;
  caption: string;
}

const media = (folder: string, files: string[], project: string): ProjectMediaItem[] =>
  files.map((file, index) => ({
    src: `/${folder}/${file}`,
    alt: `${project} interface — view ${index + 1}`,
    caption: index === 0 ? "Primary workflow view" : `Product view ${index + 1}`,
  }));

export const projectMedia: Record<string, ProjectMediaItem[]> = {
  "invoice-parsing-kpi-reporting-dashboard": media(
    "invoice%20parsing",
    [
      "Screenshot%202026-08-08%20210219.png",
      "Screenshot%202026-08-08%20210303.png",
      "Screenshot%202026-08-08%20210339.png",
      "Screenshot%202026-08-08%20210418.png",
    ],
    "Invoice parsing and KPI dashboard",
  ),
  "workforce-second-brain-automation-layer": media(
    "workfoce%20second%20brain",
    [
      "Screenshot%202026-08-08%20205926.png",
      "Screenshot%202026-08-08%20210016.png",
      "Screenshot%202026-08-08%20210032.png",
      "Screenshot%202026-08-08%20210047.png",
      "Screenshot%202026-08-08%20210103.png",
      "Screenshot%202026-08-08%20210137.png",
    ],
    "Workforce second brain automation",
  ),
  "finoria-erp": media(
    "finoria",
    [
      "Screenshot%202026-08-08%20210541.png",
      "Screenshot%202026-08-08%20210614.png",
      "Screenshot%202026-08-08%20210635.png",
      "Screenshot%202026-08-08%20210853.png",
      "Screenshot%202026-08-08%20210918.png",
      "Screenshot%202026-08-08%20210932.png",
    ],
    "Finoria ERP",
  ),
  "gantic-to-spott-crm-migration-sync": media(
    "gantic%20to%20crm",
    [
      "Screenshot%202026-08-08%20211033.png",
      "Screenshot%202026-08-08%20211122.png",
    ],
    "Gantic to Spott CRM migration",
  ),
  "asana-board-daily-update-digest": media(
    "asana",
    [
      "Screenshot%202026-08-08%20211216.png",
      "Screenshot%202026-08-08%20211251.png",
      "Screenshot%202026-08-08%20211335.png",
      "Screenshot%202026-08-08%20211400.png",
    ],
    "Asana daily update automation",
  ),
  "apispark-drag-drop-api-builder": media(
    "apispark",
    [
      "aaa.png",
      "Screenshot%202026-08-08%20211505.png",
      "Screenshot%202026-08-08%20211626.png",
      "Screenshot%202026-08-08%20211700.png",
    ],
    "APIspark visual API builder",
  ),
  "scenewear-e-commerce": media(
    "scenewear",
    [
      "Screenshot%202026-08-08%20211918.png",
      "Screenshot%202026-08-08%20212010.png",
      "Screenshot%202026-08-08%20212055.png",
      "Screenshot%202026-08-08%20212121.png",
    ],
    "Scenewear e-commerce platform",
  ),
  "minisport-internal-rag-assistant": media(
    "minisport",
    [
      "Screenshot%202026-08-08%20212216.png",
      "Screenshot%202026-08-08%20212256.png",
      "Screenshot%202026-08-08%20212346.png",
    ],
    "MiniSport internal RAG assistant",
  ),
  "bookielink-customer-support-bot": media(
    "bookielink",
    [
      "Screenshot%202026-08-08%20212505.png",
      "Screenshot%202026-08-08%20212612.png",
      "Screenshot%202026-08-08%20212640.png",
      "Screenshot%202026-08-08%20212706.png",
    ],
    "BookieLink support assistant",
  ),
  "iprint-ai-voice-chat-support-agent": media(
    "iprint",
    [
      "Screenshot%202026-08-08%20212818.png",
      "Screenshot%202026-08-08%20212853.png",
      "Screenshot%202026-08-08%20212918.png",
      "Screenshot%202026-08-08%20213020.png",
      "Screenshot%202026-08-08%20221622.png",
      "Screenshot%202026-08-08%20221648.png",
      "Screenshot%202026-08-08%20221725.png",
    ],
    "iPrint AI support system",
  ),
  "lead-acquisition-system": media(
    "leads",
    [
      "Screenshot%202026-08-08%20213231.png",
      "Screenshot%202026-08-08%20213408.png",
      "Screenshot%202026-08-08%20213429.png",
      "Screenshot%202026-08-08%20213458.png",
      "Screenshot%202026-08-08%20213522.png",
    ],
    "Lead acquisition system",
  ),
  "tonic-sms-automation-system": media(
    "tonic%20sms",
    ["Screenshot%202026-08-08%20213907.png", "tonic.png"],
    "Tonic SMS automation",
  ),
  "seo-content-webflow-automation": media(
    "seo%20webflow",
    [
      "Screenshot%202026-08-08%20214422.png",
      "Screenshot%202026-08-08%20214452.png",
    ],
    "SEO and Webflow automation",
  ),
  "olalahomes-property-dashboard": media(
    "olala%20homes%20report",
    [
      "Screenshot%202026-08-08%20214102.png",
      "Screenshot%202026-08-08%20214134.png",
      "Screenshot%202026-08-08%20214149.png",
      "Screenshot%202026-08-08%20214200.png",
      "Screenshot%202026-08-08%20214228.png",
      "Screenshot%202026-08-08%20214255.png",
    ],
    "OlalaHomes reporting dashboard",
  ),
  "ghanem-labs-web3-audit-saas": media(
    "ghanem%20labs",
    [
      "Screenshot%202026-08-08%20214538.png",
      "Screenshot%202026-08-08%20214610.png",
      "Screenshot%202026-08-08%20214707.png",
      "Screenshot%202026-08-08%20214741.png",
      "Screenshot%202026-08-08%20214809.png",
    ],
    "Ghanem Labs Web3 audit platform",
  ),
  "outreach-genie-linkedin-outbound-saas": media(
    "outreach%20genie",
    [
      "Screenshot%202026-08-08%20214931.png",
      "Screenshot%202026-08-08%20215004.png",
      "Screenshot%202026-08-08%20215028.png",
      "Screenshot%202026-08-08%20215054.png",
      "Screenshot%202026-08-08%20215137.png",
      "Screenshot%202026-08-08%20215157.png",
      "Screenshot%202026-08-08%20215229.png",
    ],
    "Outreach Genie",
  ),
  "upwork-jobs-scraper-contact-enrichment": media(
    "upwork%20scrapper",
    [
      "Screenshot%202026-08-08%20215528.png",
      "Screenshot%202026-08-08%20215624.png",
      "Screenshot%202026-08-08%20215655.png",
      "Screenshot%202026-08-08%20215710.png",
    ],
    "Upwork job and contact enrichment workflow",
  ),
  "strategy-navigator-ai-saas-platform": media(
    "strategynavigator",
    [
      "Screenshot%202026-08-08%20215734.png",
      "Screenshot%202026-08-08%20215806.png",
      "Screenshot%202026-08-08%20215852.png",
      "Screenshot%202026-08-08%20215916.png",
      "Screenshot%202026-08-08%20215935.png",
    ],
    "Strategy Navigator AI SaaS",
  ),
  "journeyai-ai-sales-assistant-platform": media(
    "journeyai",
    [
      "Screenshot%202026-08-08%20220029.png",
      "Screenshot%202026-08-08%20220059.png",
      "Screenshot%202026-08-08%20220236.png",
    ],
    "JourneyAI sales assistant",
  ),
  "edunova-lms-with-ai-websocket": media(
    "edunova",
    [
      "Screenshot%202026-08-08%20220444.png",
      "Screenshot%202026-08-08%20220511.png",
      "Screenshot%202026-08-08%20220630.png",
      "Screenshot%202026-08-08%20220729.png",
    ],
    "EduNova learning platform",
  ),
  "explodingleads-lead-signal-engine": media(
    "exploding%20leads",
    [
      "Screenshot%202026-08-08%20221254.png",
      "Screenshot%202026-08-08%20221345.png",
    ],
    "ExplodingLeads signal engine",
  ),
};
