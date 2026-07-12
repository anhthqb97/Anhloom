export const CONSENT_STORAGE_KEY = "anhloom-cookie-consent";

export type AnalyticsConsent = "accepted" | "rejected" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") {
    return null;
  }

  const value = localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setAnalyticsConsent(consent: Exclude<AnalyticsConsent, null>) {
  localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  window.dispatchEvent(new CustomEvent("analytics-consent-changed", { detail: consent }));
}

export function trackPageView(path: string) {
  if (getAnalyticsConsent() !== "accepted") {
    return;
  }

  window.gtag?.("event", "page_view", {
    page_path: path,
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (getAnalyticsConsent() !== "accepted") {
    return;
  }

  window.gtag?.("event", name, params);
}
