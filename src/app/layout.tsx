import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ahmed Ben Yahia — AI & Automation Engineer",
  description:
    "AI automation engineer building reliable workflow systems, intelligent internal tools, and production SaaS. 27+ projects delivered for 10+ clients.",
  keywords: [
    "AI Engineer",
    "RAG Systems",
    "n8n Automation",
    "LangChain",
    "Full Stack Developer",
    "Next.js",
    "Freelancer",
  ],
  openGraph: {
    title: "Ahmed Ben Yahia — AI & Automation Engineer",
    description: "Reliable AI systems, workflow automation, and production SaaS built around real operational problems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Runtime loading avoids making the production build depend on Google Fonts availability. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
