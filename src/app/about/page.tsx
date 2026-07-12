import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutVisionMission } from "@/components/sections/AboutVisionMission";

export const metadata: Metadata = {
  title: "About — Anhloom",
  description:
    "Learn about Anhloom's story, vision, leadership team, and journey helping products bloom.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutTeam />
    </>
  );
}
