import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpendAnalysisLayout from "@/components/SpendAnalysisLayout";

export const metadata: Metadata = {
  title: "Startup Spend Analysis & Runway Tracking | Founding Legals",
  description:
    "Track startup burn rate, vendor disbursements, recurring subscriptions and runway horizons in one place without the spreadsheet chaos.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/spend-analysis",
  },
  openGraph: {
    title: "Startup Spend Analysis & Runway Tracking | Founding Legals",
    description:
      "Track startup burn rate, vendor disbursements, recurring subscriptions and runway horizons in one place without the spreadsheet chaos.",
    url: "https://www.foundinglegals.com/features/spend-analysis",
    type: "website",
  },
};

export default function SpendAnalysisPage() {
  return (
    <>
      <Header />
      <main>
        <SpendAnalysisLayout />
      </main>
      <Footer />
    </>
  );
}

