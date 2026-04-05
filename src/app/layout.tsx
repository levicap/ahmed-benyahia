import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ahmed Ben Yahia — AI & Automation Engineer",
  description:
    "Top Rated freelancer building production-grade RAG systems, autonomous AI agents, and scalable n8n workflows. 15+ projects, 10+ happy clients.",
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
    description: "Production-grade RAG systems, AI agents, and workflow automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
