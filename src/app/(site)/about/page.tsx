import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutVisionMission } from "@/components/sections/AboutVisionMission";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "About",
  description:
    "Learn about Anhloom's story, vision, leadership team, and journey helping products bloom.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutTeam />
      <AboutTimeline />
    </>
  );
}
