import { notFound } from "next/navigation";

import { ServiceBenefits } from "@/components/sections/services/ServiceBenefits";
import { ServiceDetailHero } from "@/components/sections/services/ServiceDetailHero";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceFeatures } from "@/components/sections/services/ServiceFeatures";
import { ServiceOverview } from "@/components/sections/services/ServiceOverview";
import { ServiceTechnologies } from "@/components/sections/services/ServiceTechnologies";
import { ServiceWorkflow } from "@/components/sections/services/ServiceWorkflow";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/resolve-service";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found — Anhloom" };
  }

  return {
    title: `${service.title} — Anhloom`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceOverview service={service} />
      <ServiceBenefits service={service} />
      <ServiceFeatures service={service} />
      <ServiceTechnologies service={service} />
      <ServiceWorkflow service={service} />
      <ServiceFAQ service={service} />
    </>
  );
}
