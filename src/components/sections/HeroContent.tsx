"use client";

import Link from "next/link";

import { FadeIn } from "@/components/motion/FadeIn";
import { SlideUp } from "@/components/motion/SlideUp";
import { HeroMockup } from "@/components/sections/HeroMockup";

type HeroContentProps = {
  headline: string;
  subtext: string;
};

export function HeroContent({ headline, subtext }: HeroContentProps) {
  return (
    <div className="grid items-center gap-10 laptop:grid-cols-2 laptop:gap-16">
      <SlideUp className="flex flex-col text-center laptop:text-left">
        <h1 className="mx-auto max-w-2xl text-display-md font-bold tracking-tight text-text-primary laptop:mx-0 laptop:max-w-none laptop:text-display-lg ultra:text-display-xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary laptop:mx-0">
          {subtext}
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
      </SlideUp>
      <FadeIn
        delay={0.15}
        className="relative mx-auto flex w-full max-w-lg items-center justify-center laptop:mx-0 laptop:max-w-none"
      >
        <HeroMockup />
      </FadeIn>
    </div>
  );
}
