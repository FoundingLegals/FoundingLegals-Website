import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientManagementLayout from "@/components/ClientManagementLayout";

export const metadata: Metadata = {
  title: "Client Management Software for Startups | Founding Legals",
  description:
    "Run your client operations from one smart workspace. Manage clients, contracts, invoices and payments — all in one place.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/client-management",
  },
  openGraph: {
    title: "Client Management Software for Startups | Founding Legals",
    description:
      "Run your client operations from one smart workspace. Manage clients, contracts, invoices and payments — all in one place.",
    url: "https://www.foundinglegals.com/features/client-management",
    type: "website",
  },
};

export default function ClientManagementPage() {
  return (
    <>
      <Header />
      <main>
        <ClientManagementLayout />
      </main>
      <Footer />
    </>
  );
}
