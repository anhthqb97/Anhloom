import {
  TechnologiesGrid,
  TechnologiesHero,
} from "@/components/sections/technologies/TechnologiesPage";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Technologies",
  description:
    "Explore the technologies Anhloom uses — frontend, backend, cloud, AI, DevOps, and more.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  return (
    <>
      <TechnologiesHero />
      <TechnologiesGrid />
    </>
  );
}
