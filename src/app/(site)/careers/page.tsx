import { CareersApplicationForm } from "@/components/sections/careers/CareersApplicationForm";
import {
  CareersBenefits,
  CareersCultureGrid,
  CareersHero,
} from "@/components/sections/careers/CareersPage";
import { CareersOpenPositions } from "@/components/sections/careers/CareersOpenPositions";
import { JsonLd } from "@/components/JsonLd";
import { jobPostingJsonLd } from "@/lib/json-ld";
import { careerPositions } from "@/lib/careers";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Careers",
  description:
    "Join Anhloom — open engineering, design, and product roles with remote-friendly culture and modern tooling.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={careerPositions.map((position) =>
          jobPostingJsonLd({
            title: position.title,
            description: position.description,
            department: position.department,
            location: position.location,
            employmentType: position.employmentType,
            path: `/careers#${position.slug}`,
          }),
        )}
      />
      <CareersHero />
      <CareersCultureGrid />
      <CareersBenefits />
      <CareersOpenPositions />
      <CareersApplicationForm />
    </>
  );
}
