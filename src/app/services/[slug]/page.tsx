import { services } from "@/lib/servicesData";
import { getNewServicePage, newServiceSlugs } from "@/lib/newServicesData";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/ServiceLayout";
import NameRegistrationLayout from "@/components/NameRegistrationLayout";
import CompanyIncorporationLayout from "@/components/CompanyIncorporationLayout";
import LlpRegistrationLayout from "@/components/LlpRegistrationLayout";
import OpcRegistrationLayout from "@/components/OpcRegistrationLayout";
import WhichCompanyTypeLayout from "@/components/WhichCompanyTypeLayout";
import PartnershipRegistrationLayout from "@/components/PartnershipRegistrationLayout";
import SoleProprietorshipRegistrationLayout from "@/components/SoleProprietorshipRegistrationLayout";
import PublicLimitedRegistrationLayout from "@/components/PublicLimitedRegistrationLayout";
import AgreementsLayout from "@/components/AgreementsLayout";
import InvestmentReadinessLayout from "@/components/InvestmentReadinessLayout";
import NewServicePageLayout from "@/components/NewServicePageLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  const params = services
    .filter((s) => s.slug !== "certifications")
    .map((s) => ({
      slug: s.slug,
    }));
  params.push({ slug: "which-company-type-to-register" });
  params.push({ slug: "partnership-firm-registration" });
  params.push({ slug: "sole-proprietorship-registration" });
  params.push({ slug: "public-limited-company" });
  // ── New service & category pages ──
  newServiceSlugs.forEach((slug) => params.push({ slug }));
  return params;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (
    !service && 
    resolvedParams.slug !== "which-company-type-to-register" && 
    resolvedParams.slug !== "partnership-firm-registration" &&
    resolvedParams.slug !== "sole-proprietorship-registration" &&
    resolvedParams.slug !== "public-limited-company" &&
    !newServiceSlugs.includes(resolvedParams.slug)
  ) {
    return notFound();
  }

  // Which Company Type to Register Layout
  if (resolvedParams.slug === "which-company-type-to-register") {
    return (
      <>
        <Header />
        <main>
          <WhichCompanyTypeLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Partnership Firm Registration Layout
  if (resolvedParams.slug === "partnership-firm-registration") {
    return (
      <>
        <Header />
        <main>
          <PartnershipRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Sole Proprietorship Firm Registration Layout
  if (resolvedParams.slug === "sole-proprietorship-registration") {
    return (
      <>
        <Header />
        <main>
          <SoleProprietorshipRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Public Limited Company Incorporation Layout
  if (resolvedParams.slug === "public-limited-company") {
    return (
      <>
        <Header />
        <main>
          <PublicLimitedRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Name Registration gets the rich two-column layout
  if (resolvedParams.slug === "name-registration") {
    return (
      <>
        <Header />
        <main>
          <NameRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Company Incorporation gets the rich article layout
  if (resolvedParams.slug === "company-incorporation") {
    return (
      <>
        <Header />
        <main>
          <CompanyIncorporationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // LLP Registration gets the rich LLP article layout
  if (resolvedParams.slug === "llp-registration") {
    return (
      <>
        <Header />
        <main>
          <LlpRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // OPC Registration gets the rich OPC article layout
  if (resolvedParams.slug === "opc-registration") {
    return (
      <>
        <Header />
        <main>
          <OpcRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Agreements Directory layout
  if (resolvedParams.slug === "agreements") {
    return (
      <>
        <Header />
        <main>
          <AgreementsLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Investment Readiness Layout
  if (
    resolvedParams.slug === "pitch-to-investors" ||
    resolvedParams.slug === "finance-for-fundraising" ||
    resolvedParams.slug === "find-investors"
  ) {
    return (
      <>
        <Header />
        <main>
          <InvestmentReadinessLayout />
        </main>
        <Footer />
      </>
    );
  }

  // ── New service & category pages (15 pages) ──
  const newPage = getNewServicePage(resolvedParams.slug);
  if (newPage) {
    return <NewServicePageLayout page={newPage} />;
  }

  // Guard: service must be defined for the generic ServiceLayout
  if (!service) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceLayout service={service} />
      </main>
      <Footer />
    </>
  );
}
