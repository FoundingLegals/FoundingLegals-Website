import AgreementsLayout from "@/components/AgreementsLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AGREEMENTS_DATABASE } from "@/lib/agreementsData";
import type { Metadata } from "next";

export function generateStaticParams() {
  const ids = new Set<string>([
    ...AGREEMENTS_DATABASE.map((a) => a.id),
    "mutual-nda",
    "internship-agreement",
    "software-license",
  ]);
  return Array.from(ids).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const rawId = resolvedParams.id || "";
  const cleanId = decodeURIComponent(rawId).toLowerCase().trim();
  const agreement = AGREEMENTS_DATABASE.find(
    (a) => a.id.toLowerCase() === cleanId || a.name.toLowerCase().replace(/[\s-]+/g, "-") === cleanId
  );

  const title = agreement?.name || cleanId.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const desc =
    agreement?.overview ||
    `Download, customize, and legally execute ${title} in India. Prepared by qualified corporate lawyers with statutory Indian stamp duty guidance.`;
  const canonicalUrl = `https://www.foundinglegals.com/services/LegalServices/agreements/${cleanId}`;

  return {
    title: `${title} Drafting & Legal Execution | Founding Legals`,
    description: desc,
    keywords: [
      title.toLowerCase(),
      `${title.toLowerCase()} India`,
      `${title.toLowerCase()} format`,
      `${title.toLowerCase()} draft online`,
      "startup agreements India",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Founding Legals`,
      description: desc,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Founding Legals`,
      description: desc,
    },
  };
}

export default async function AgreementDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const rawId = resolvedParams.id || "";
  const cleanId = decodeURIComponent(rawId).toLowerCase().trim();

  return (
    <>
      <Header />
      <main>
        <AgreementsLayout initialAgreementId={cleanId} />
      </main>
      <Footer />
    </>
  );
}
