import {
  PortfolioListingGrid,
  PortfolioListingHero,
} from "@/components/sections/portfolio/PortfolioListing";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Portfolio",
  description:
    "Explore Anhloom portfolio — AI, SaaS, FinTech, healthcare, and industry platforms with measurable outcomes.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioListingHero />
      <PortfolioListingGrid />
    </>
  );
}
