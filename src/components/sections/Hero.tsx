import Link from "next/link";

import { Container } from "@/components/Container";
import { HeroMockup } from "@/components/sections/HeroMockup";
import { Section } from "@/components/Section";

export function Hero() {
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
        <div className="grid items-center gap-10 laptop:grid-cols-2 laptop:gap-16">
          <div className="flex flex-col text-center laptop:text-left">
            <h1 className="mx-auto max-w-2xl text-display-md font-bold tracking-tight text-text-primary laptop:mx-0 laptop:max-w-none laptop:text-display-lg ultra:text-display-xl">
              We Help Products Bloom — From MVP to Scale
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary laptop:mx-0">
              Anhloom engineers custom software, cloud infrastructure, and
              AI-powered systems for startups and global brands ready to grow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 laptop:justify-start">
              <Link
                href="/contact?intent=meeting"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-primary-600 px-4 text-body-md font-medium text-white transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
              >
                Book a Meeting
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-10 items-center justify-center rounded-sm border border-primary-600 bg-transparent px-4 text-body-md font-medium text-primary-600 transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center laptop:mx-0 laptop:max-w-none">
            <HeroMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
