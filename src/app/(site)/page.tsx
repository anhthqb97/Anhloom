import { CTA } from "@/components/sections/CTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Stats } from "@/components/sections/Stats";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/json-ld";
import { buildSiteMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <Stats />
      <TrustedBy />
      <Services />
      <Solutions />
      <Process />
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  );
}
