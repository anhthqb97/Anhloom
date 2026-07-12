import dynamic from "next/dynamic";

import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/json-ld";
import { buildSiteMetadata, siteConfig } from "@/lib/seo";

const Solutions = dynamic(() =>
  import("@/components/sections/Solutions").then((mod) => mod.Solutions),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((mod) => mod.Process),
);
const FeaturedProjects = dynamic(() =>
  import("@/components/sections/FeaturedProjects").then(
    (mod) => mod.FeaturedProjects,
  ),
);
const TechStack = dynamic(() =>
  import("@/components/sections/TechStack").then((mod) => mod.TechStack),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((mod) => mod.Testimonials),
);

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
