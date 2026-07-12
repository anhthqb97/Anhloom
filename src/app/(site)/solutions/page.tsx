import {
  SolutionsListingGrid,
  SolutionsListingHero,
} from "@/components/sections/solutions/SolutionsListing";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Solutions",
  description:
    "Explore Anhloom product solutions — AI chatbots, CRM, ERP, SaaS, marketplaces, and e-commerce platforms.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <SolutionsListingHero />
      <SolutionsListingGrid />
    </>
  );
}
