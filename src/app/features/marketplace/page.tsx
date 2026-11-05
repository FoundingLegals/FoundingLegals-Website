import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketplaceLayout from "@/components/MarketplaceLayout";

export const metadata: Metadata = {
  title: "Startup Marketplace & Founder Perks | Founding Legals",
  description:
    "Unlock over ₹15 Lakhs in cloud credits, SaaS perks, and vetted expert services for tech startups.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/marketplace",
  },
  openGraph: {
    title: "Startup Marketplace & Founder Perks | Founding Legals",
    description:
      "Unlock over ₹15 Lakhs in cloud credits, SaaS perks, and vetted expert services for tech startups.",
    url: "https://www.foundinglegals.com/features/marketplace",
    type: "website",
  },
};

export default function MarketplacePage() {
  return (
    <>
      <Header />
      <main>
        <MarketplaceLayout />
      </main>
      <Footer />
    </>
  );
}

