import type { Metadata } from "next";
import "./globals.css";
import LoadingOverlay from "@/components/LoadingOverlay";

export const metadata: Metadata = {
  title:
    "FoundingLegals — Complete Startup Legal & Compliance Platform for India",
  description:
    "From company registration to fund raising — FoundingLegals is the all-in-one compliance and growth platform built exclusively for Indian startups. We handle the paperwork, you build the product.",
  keywords:
    "startup legal os, company incorporation India, GST registration, DPIIT certification, fund raising, startup compliance, agreements, cap table, private limited registration, LLP registration",
  openGraph: {
    title: "FoundingLegals — Complete Startup Legal & Compliance Platform for India",
    description:
      "From company registration to fund raising — the all-in-one compliance and growth platform built exclusively for Indian startups.",
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
      </head>
      <body className="antialiased bg-cream">
        <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}
