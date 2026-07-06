import { services } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/ServiceLayout";
import NameRegistrationLayout from "@/components/NameRegistrationLayout";
import CompanyIncorporationLayout from "@/components/CompanyIncorporationLayout";
import LlpRegistrationLayout from "@/components/LlpRegistrationLayout";
import OpcRegistrationLayout from "@/components/OpcRegistrationLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return services
    .filter((s) => s.slug !== "certifications")
    .map((s) => ({
      slug: s.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return notFound();
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
