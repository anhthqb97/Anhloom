import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section padding="lg">
      <Container>
        <div className="grid items-center gap-12 laptop:grid-cols-2 laptop:gap-16">
          <div className="flex flex-col">
            <h1 className="text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg ultra:text-display-xl">
              We Help Products Bloom — From MVP to Scale
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-text-secondary">
              Anhloom engineers custom software, cloud infrastructure, and
              AI-powered systems for startups and global brands ready to grow.
            </p>
            <div className="mt-8">
              <a
                href="/contact?intent=meeting"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-primary-600 px-4 text-body-md font-medium text-white transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
              >
                Book a Meeting
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center" />
        </div>
      </Container>
    </Section>
  );
}
