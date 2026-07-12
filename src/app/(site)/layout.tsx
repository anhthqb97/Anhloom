import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { Navbar } from "@/components/Navbar";
import { SkipToContent } from "@/components/SkipToContent";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieConsent />
      <Analytics />
    </>
  );
}
