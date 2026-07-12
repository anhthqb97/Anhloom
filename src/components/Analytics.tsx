"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  getAnalyticsConsent,
  trackPageView,
  type AnalyticsConsent,
} from "@/lib/analytics";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

function AnalyticsScripts() {
  if (!gaId && !clarityId) {
    return null;
  }

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}
      {clarityId ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}

function AnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

export function Analytics() {
  const [consent, setConsent] = useState<AnalyticsConsent>(null);

  useEffect(() => {
    setConsent(getAnalyticsConsent());

    function handleConsentChange() {
      setConsent(getAnalyticsConsent());
    }

    window.addEventListener("analytics-consent-changed", handleConsentChange);
    return () =>
      window.removeEventListener("analytics-consent-changed", handleConsentChange);
  }, []);

  if (consent !== "accepted") {
    return null;
  }

  return (
    <>
      <AnalyticsScripts />
      <AnalyticsPageView />
    </>
  );
}
