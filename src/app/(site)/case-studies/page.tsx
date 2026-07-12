import {
  CaseStudiesListingGrid,
  CaseStudiesListingHero,
} from "@/components/sections/case-studies/CaseStudiesListing";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Case Studies",
  description:
    "Read Anhloom case studies — how we help clients solve complex business challenges with measurable outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesListingHero />
      <CaseStudiesListingGrid />
    </>
  );
}
