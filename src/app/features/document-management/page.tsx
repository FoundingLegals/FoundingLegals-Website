import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentManagementLayout from "@/components/DocumentManagementLayout";

export const metadata: Metadata = {
  title: "Startup Document Management & Legal Vault | Founding Legals",
  description:
    "Secure 256-bit encrypted founder vault for incorporation certificates, board resolutions, investor SHAs and tax records.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/document-management",
  },
  openGraph: {
    title: "Startup Document Management & Legal Vault | Founding Legals",
    description:
      "Secure 256-bit encrypted founder vault for incorporation certificates, board resolutions, investor SHAs and tax records.",
    url: "https://www.foundinglegals.com/features/document-management",
    type: "website",
  },
};

export default function DocumentManagementPage() {
  return (
    <>
      <Header />
      <main>
        <DocumentManagementLayout />
      </main>
      <Footer />
    </>
  );
}

