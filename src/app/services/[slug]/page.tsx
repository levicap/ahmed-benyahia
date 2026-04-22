import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceDetails } from "@/data/serviceDetails";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.slug === slug);
  if (!detail) return {};
  const title = detail.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace("Ai", "AI")
    .replace("Rag", "RAG")
    .replace("Api", "API")
    .replace("Devops", "DevOps");
  return {
    title: `${title} — Ahmed Ben Yahia`,
    description: detail.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.slug === slug);
  if (!detail) notFound();
  return <ServicePageTemplate detail={detail} />;
}
