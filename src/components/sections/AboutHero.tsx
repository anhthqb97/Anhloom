import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getHeroSection, getPageBySlug } from "@/lib/sanity";

export async function AboutHero() {
  const page = await getPageBySlug("about");
  const hero = getHeroSection(page);

  const eyebrow = hero?.eyebrow ?? "About Anhloom";
  const headline = hero?.headline ?? "Helping Products Bloom";
  const subtext =
    hero?.subtext ??
    "We partner with startups and global brands to engineer software, cloud systems, and AI products that grow from idea to scale.";

  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-25" />
        <div className="hero-glow-bg absolute inset-0 opacity-70" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            {subtext}
          </p>
        </div>
      </Container>
    </Section>
  );
}
