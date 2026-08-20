import AgreementsLayout from "@/components/AgreementsLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AGREEMENTS_DATABASE } from "@/lib/agreementsData";

export function generateStaticParams() {
  const ids = new Set<string>([
    ...AGREEMENTS_DATABASE.map((a) => a.id),
    "mutual-nda",
    "internship-agreement",
    "software-license",
  ]);
  return Array.from(ids).map((id) => ({ id }));
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
