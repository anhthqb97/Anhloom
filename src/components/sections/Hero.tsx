import { Container } from "@/components/Container";
import { HeroContent } from "@/components/sections/HeroContent";
import { Section } from "@/components/Section";
import { getHeroSection, getPageBySlug } from "@/lib/sanity";

export async function Hero() {
  const page = await getPageBySlug("home");
  const hero = getHeroSection(page);

  const headline =
    hero?.headline ?? "We Help Products Bloom — From MVP to Scale";
  const subtext =
    hero?.subtext ??
    "Anhloom engineers custom software, cloud infrastructure, and AI-powered systems for startups and global brands ready to grow.";

  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-20" />
        <div className="hero-glow-bg absolute inset-0 opacity-80" />
      </div>
      <Container>
        <HeroContent headline={headline} subtext={subtext} />
      </Container>
    </Section>
  );
}
