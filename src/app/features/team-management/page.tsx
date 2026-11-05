import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamManagementLayout from "@/components/TeamManagementLayout";

export const metadata: Metadata = {
  title: "Team Management Software for Startups | Founding Legals",
  description:
    "Hire, onboard and manage your team with confidence. Maintain employee records, employment contracts, NDAs and policies — all in one place.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/team-management",
  },
  openGraph: {
    title: "Team Management Software for Startups | Founding Legals",
    description:
      "Hire, onboard and manage your team with confidence. Maintain employee records, employment contracts, NDAs and policies — all in one place.",
    url: "https://www.foundinglegals.com/features/team-management",
    type: "website",
  },
};

export default function TeamManagementPage() {
  return (
    <>
      <Header />
      <main>
        <TeamManagementLayout />
      </main>
      <Footer />
    </>
  );
}

