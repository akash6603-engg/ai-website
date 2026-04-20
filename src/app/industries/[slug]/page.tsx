import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/lib/industries-data";
import ServicePageClient from "@/app/services/[slug]/ServicePageClient";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.title} | Osmosis AI`,
    description: industry.description.slice(0, 160),
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <ServicePageClient service={industry} />;
}
