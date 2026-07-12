import {
  PricingHero,
  PricingTiers,
} from "@/components/sections/pricing/PricingPage";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Pricing",
  description:
    "Anhloom pricing — starter MVPs, growth squads, and enterprise engagements tailored to your product stage.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
    </>
  );
}
