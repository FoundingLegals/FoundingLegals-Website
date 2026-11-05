import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemesAndGrantsLayout from "@/components/SchemesAndGrantsLayout";

export const metadata: Metadata = {
  title: "Government Schemes & Grants for Startups | Founding Legals",
  description:
    "Access non-dilutive startup capital, SISFS grants, DPIIT incentives and state subsidies with zero equity dilution.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/schemes-and-grants",
  },
  openGraph: {
    title: "Government Schemes & Grants for Startups | Founding Legals",
    description:
      "Access non-dilutive startup capital, SISFS grants, DPIIT incentives and state subsidies with zero equity dilution.",
    url: "https://www.foundinglegals.com/features/schemes-and-grants",
    type: "website",
  },
};

export default function SchemesAndGrantsPage() {
  return (
    <>
      <Header />
      <main>
        <SchemesAndGrantsLayout />
      </main>
      <Footer />
    </>
  );
}

