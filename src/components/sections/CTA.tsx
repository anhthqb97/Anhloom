import Link from "next/link";

import { CTABanner } from "@/components/sections/CTABanner";

export function CTA() {
  return (
    <CTABanner>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-heading-xl font-bold text-text-primary laptop:text-display-md">
          Let&apos;s Build Your Next Digital Product
        </h2>
        <p className="mt-4 text-body-lg text-text-secondary">
          Tell us about your product goals and we&apos;ll help you plan the
          right path from MVP to scale.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/estimate"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-primary-600 bg-transparent px-4 text-body-md font-medium text-primary-600 transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
          >
            Estimate Project Cost
          </Link>
          <Link
            href="/contact?intent=consultation"
            className="inline-flex h-10 items-center justify-center rounded-sm bg-primary-600 px-4 text-body-md font-medium text-white transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/contact?intent=sales"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-primary-600 bg-transparent px-4 text-body-md font-medium text-primary-600 transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </CTABanner>
  );
}
