import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestorDirectoryLayout from "@/components/InvestorDirectoryLayout";

export const metadata: Metadata = {
  title: "Startup Investor Directory | Discover 3,000+ Active Angels & VCs | Founding Legals",
  description:
    "Connect with verified angel investors, syndicates and venture capital funds actively deploying capital into Indian technology startups. Filter by ticket size, stage, and sector.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/investor-directory",
  },
  openGraph: {
    title: "Startup Investor Directory | Discover 3,000+ Active Angels & VCs | Founding Legals",
    description:
      "Connect with verified angel investors, syndicates and venture capital funds actively deploying capital into Indian technology startups. Filter by ticket size, stage, and sector.",
    url: "https://www.foundinglegals.com/features/investor-directory",
    type: "website",
  },
};

export default function InvestorDirectoryPage() {
  return (
    <>
      <Header />
      <main>
        <InvestorDirectoryLayout />
      </main>
      <Footer />
    </>
  );
}

