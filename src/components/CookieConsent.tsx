"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getAnalyticsConsent();
    setVisible(stored === null);
  }, []);

  function handleChoice(next: Exclude<AnalyticsConsent, null>) {
    setAnalyticsConsent(next);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className={cn(
        "fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-lg border border-border",
        "bg-surface p-6 shadow-xl laptop:inset-x-8",
      )}
    >
      <h2
        id="cookie-consent-title"
        className="text-heading-md font-semibold text-text-primary"
      >
        Cookie preferences
      </h2>
      <p
        id="cookie-consent-description"
        className="mt-2 text-body-sm text-text-secondary"
      >
        We use analytics cookies to understand how visitors use our site. You can
        accept or decline non-essential tracking.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button size="sm" onClick={() => handleChoice("accepted")}>
          Accept analytics
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => handleChoice("rejected")}
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
