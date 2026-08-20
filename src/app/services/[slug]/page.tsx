import { services } from "@/lib/servicesData";
import { getNewServicePage, newServiceSlugs } from "@/lib/newServicesData";
import { AGREEMENTS_DATABASE } from "@/lib/agreementsData";
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
import TrademarkRegistrationLayout from "@/components/TrademarkRegistrationLayout";
import AgreementsLayout from "@/components/AgreementsLayout";
import InvestmentReadinessLayout from "@/components/InvestmentReadinessLayout";
import NewServicePageLayout from "@/components/NewServicePageLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AGREEMENT_SLUGS = new Set<string>([
  ...AGREEMENTS_DATABASE.map((a) => a.id),
  "mutual-nda",
  "internship-agreement",
  "software-license",
]);

const SLUG_ALIASES: Record<string, string> = {
  // GST & Indirect Tax subservices & variants
  "gstr9-annual-return": "gst-indirect-tax",
  "tds-return-filing": "gst-indirect-tax",
  "gst-registration": "gst-indirect-tax",
  "iec-registration": "gst-indirect-tax",
  "labour-license": "gst-indirect-tax",
  "fssai-license": "gst-indirect-tax",
  "fssai-state-license": "gst-indirect-tax",
  "fssai-central-license": "gst-indirect-tax",
  "professional-tax": "gst-indirect-tax",
  "gst-monthly-returns": "gst-indirect-tax",
  "gst-quarterly-returns": "gst-indirect-tax",

  // Audit subservices
  "gst-audit": "audit-attestation",
  "tax-audit": "audit-attestation",

  // Certifications subservices
  "msme-registration": "certifications",
  "dpiit-recognition": "certifications",

  // Financial & Investment subservices
  "loan-project-report": "financial-investment",

  // IP subservices
  "trademark-registration": "intellectual-property",

  // Income tax variants
  "income-tax-filing": "income-tax-advisory",

  // Incorporation aliases
  "pvt-ltd-incorporation": "company-incorporation",
  "pvt-ltd-company-incorporation": "company-incorporation",
  "llp-incorporation": "llp-registration",
  "opc-incorporation": "opc-registration",
  "partnership-registration": "partnership-firm-registration",
  "sole-proprietorship": "sole-proprietorship-registration",
  "public-limited-incorporation": "public-limited-company",
};

export function generateStaticParams() {
  const allSlugs = new Set<string>([
    ...services.map((s) => s.slug),
    "which-company-type-to-register",
    "partnership-firm-registration",
    "sole-proprietorship-registration",
    "public-limited-company",
    ...newServiceSlugs,
    ...Object.keys(SLUG_ALIASES),
  ]);

  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const rawParams = await params;
  let rawSlug = rawParams.slug || "";
  
  // Normalize string: decode URI, convert spaces/underscores to hyphens, lowercase
  let slug = decodeURIComponent(rawSlug).toLowerCase().trim().replace(/[\s_]+/g, "-");

  // If slug is an alias or subservice slug, resolve to target category/service slug
  if (SLUG_ALIASES[slug]) {
    slug = SLUG_ALIASES[slug];
  }

  const service = services.find((s) => s.slug === slug);
  
  if (
    !service && 
    slug !== "which-company-type-to-register" && 
    slug !== "partnership-firm-registration" &&
    slug !== "sole-proprietorship-registration" &&
    slug !== "public-limited-company" &&
    !newServiceSlugs.includes(slug)
  ) {
    return notFound();
  }

  // Which Company Type to Register Layout
  if (slug === "which-company-type-to-register") {
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
  if (slug === "partnership-firm-registration") {
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
  if (slug === "sole-proprietorship-registration") {
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
  if (slug === "public-limited-company") {
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
  if (slug === "name-registration") {
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
  if (slug === "company-incorporation") {
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
  if (slug === "llp-registration") {
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
  if (slug === "opc-registration") {
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

  // Trademark Registration & Intellectual Property Layout
  if (slug === "trademark-registration" || slug === "intellectual-property") {
    return (
      <>
        <Header />
        <main>
          <TrademarkRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  // Agreements Directory layout or Single Agreement view
  if (slug === "agreements" || AGREEMENT_SLUGS.has(slug)) {
    return (
      <>
        <Header />
        <main>
          <AgreementsLayout initialAgreementId={slug !== "agreements" ? slug : undefined} />
        </main>
        <Footer />
      </>
    );
  }

  // Investment Readiness Layout
  if (
    slug === "pitch-to-investors" ||
    slug === "finance-for-fundraising" ||
    slug === "find-investors"
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
  const newPage = getNewServicePage(slug);
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
