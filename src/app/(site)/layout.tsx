import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { Chatbot } from "@/components/chat/Chatbot";
import { CookieConsent } from "@/components/CookieConsent";
import { Navbar } from "@/components/Navbar";
import { SearchDialog } from "@/components/search/SearchDialog";
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
      <Chatbot />
      <SearchDialog />
    </>
  );
}
