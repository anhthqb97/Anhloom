import { notFound } from "next/navigation";

import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { ServiceBenefits } from "@/components/sections/services/ServiceBenefits";
import { ServiceDetailHero } from "@/components/sections/services/ServiceDetailHero";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceFeatures } from "@/components/sections/services/ServiceFeatures";
import { ServiceOverview } from "@/components/sections/services/ServiceOverview";
import { ServiceTechnologies } from "@/components/sections/services/ServiceTechnologies";
import { ServiceWorkflow } from "@/components/sections/services/ServiceWorkflow";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/json-ld";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/resolve-service";
import { buildSiteMetadata } from "@/lib/seo";

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
    return { title: "Service Not Found" };
  }

  return buildSiteMetadata({
    title: service.title,
    description: service.tagline,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <PageBreadcrumb items={breadcrumbItems} />
      <JsonLd
        data={serviceJsonLd({
          title: service.title,
          description: service.tagline,
          path: `/services/${slug}`,
        })}
      />
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
