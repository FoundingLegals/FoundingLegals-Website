import { services } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/ServiceLayout";
import NameRegistrationLayout from "@/components/NameRegistrationLayout";
import CompanyIncorporationLayout from "@/components/CompanyIncorporationLayout";
import LlpRegistrationLayout from "@/components/LlpRegistrationLayout";
import OpcRegistrationLayout from "@/components/OpcRegistrationLayout";
import WhichCompanyTypeLayout from "@/components/WhichCompanyTypeLayout";
import PartnershipRegistrationLayout from "@/components/PartnershipRegistrationLayout";
import SoleProprietorshipRegistrationLayout from "@/components/SoleProprietorshipRegistrationLayout";
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
  return params;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (
    !service && 
    resolvedParams.slug !== "which-company-type-to-register" && 
    resolvedParams.slug !== "partnership-firm-registration" &&
    resolvedParams.slug !== "sole-proprietorship-registration"
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
