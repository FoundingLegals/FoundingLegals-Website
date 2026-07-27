import type { Metadata } from "next";
import "./globals.css";
import LoadingOverlay from "@/components/LoadingOverlay";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "FoundingLegals    Complete Startup Legal & Compliance Platform for India",
  description:
    "From company registration to fund raising    FoundingLegals is the all-in-one compliance and growth platform built exclusively for Indian startups. We handle the paperwork, you build the product.",
  keywords:
    "startup legal os, company incorporation India, GST registration, DPIIT certification, fund raising, startup compliance, agreements, cap table, private limited registration, LLP registration",
  openGraph: {
    title: "FoundingLegals    Complete Startup Legal & Compliance Platform for India",
    description:
      "From company registration to fund raising    the all-in-one compliance and growth platform built exclusively for Indian startups.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem("hasSeenFoundingLegalsSplash") === "true") {
                  document.documentElement.classList.add("splash-seen");
                }
              } catch (e) {}
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .splash-seen #loading-overlay {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body className="antialiased bg-cream" suppressHydrationWarning>
        <ScrollToTop />
        <LoadingOverlay />
        {children}
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
