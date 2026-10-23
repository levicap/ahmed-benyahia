import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./site.css";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Ahmed Ben Yahia — AI Automation Engineer & Full-Stack Developer | n8n, RAG, AI Agents",
  description:
    "AI automation engineer and full-stack developer building RAG knowledge assistants, AI voice and chat agents, n8n workflow automation and custom SaaS. Fixed-price engagements, documented hand-over.",
  keywords: [
    "AI automation engineer",
    "n8n automation",
    "RAG chatbot",
    "AI voice agent",
    "workflow automation",
    "full-stack developer",
    "Next.js developer",
    "SaaS development",
    "LangChain",
    "freelance AI engineer",
  ],
  openGraph: {
    title: "Ahmed Ben Yahia — AI Automation Engineer & Full-Stack Developer",
    description: "RAG assistants, AI agents, n8n automation and custom SaaS — documented, monitored and handed over clean.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script
          defer
          data-site="r4esmqhzkeegbjkc"
          src="http://localhost:8081/js/a.js"
          strategy="beforeInteractive"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Runtime loading avoids making the production build depend on Google Fonts availability. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
