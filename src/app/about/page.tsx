import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/AboutHero";

export const metadata: Metadata = {
  title: "About — Anhloom",
  description:
    "Learn about Anhloom's story, vision, leadership team, and journey helping products bloom.",
};

export default function AboutPage() {
  return <AboutHero />;
}
