import { ServicesListingGrid, ServicesListingHero } from "@/components/sections/services/ServicesListing";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Services",
  description:
    "Explore Anhloom engineering services — AI, custom software, web, mobile, cloud, and dedicated teams.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesListingHero />
      <ServicesListingGrid />
    </>
  );
}
