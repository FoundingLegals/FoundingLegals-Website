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
import DpiitRegistrationLayout from "@/components/DpiitRegistrationLayout";
import GstRegistrationLayout from "@/components/GstRegistrationLayout";
import GstIndirectTaxLayout from "@/components/GstIndirectTaxLayout";
import UdyamRegistrationLayout from "@/components/UdyamRegistrationLayout";
import FssaiCentralRegistrationLayout from "@/components/FssaiCentralRegistrationLayout";
import FssaiStateRegistrationLayout from "@/components/FssaiStateRegistrationLayout";
import IecRegistrationLayout from "@/components/IecRegistrationLayout";
import LabourLicenseRegistrationLayout from "@/components/LabourLicenseRegistrationLayout";
import ProfessionalTaxRegistrationLayout from "@/components/ProfessionalTaxRegistrationLayout";
import GstMonthlyReturnsLayout from "@/components/GstMonthlyReturnsLayout";
import GstQuarterlyReturnsLayout from "@/components/GstQuarterlyReturnsLayout";
import Gstr9AnnualReturnLayout from "@/components/Gstr9AnnualReturnLayout";
import Gstr9cAuditLayout from "@/components/Gstr9cAuditLayout";
import TaxAuditExecutionLayout from "@/components/TaxAuditExecutionLayout";
import TdsReturnFilingLayout from "@/components/TdsReturnFilingLayout";
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
  "professional-tax": "professional-tax-return-filing",

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
    "company-incorporation",
    "llp-registration",
    "opc-registration",
    "partnership-firm-registration",
    "sole-proprietorship-registration",
    "public-limited-company",
    "trademark-registration",
    "dpiit-recognition",
    "gst-registration",
    "gst-indirect-tax",
    "gst-monthly-returns",
    "gst-quarterly-returns",
    "gstr9-annual-return",
    "gstr9c-gst-audit",
    "gstr9c-audit",
    "gst-audit",
    "tax-audit",
    "tax-audit-execution",
    "tax audit",
    "tax_audit",
    "tax%20audit",
    "tds-return-filing",
    "professional-tax-registration",
    "professional-tax-return-filing",
    "professional-tax",
    "msme-registration",
    "udyam-registration",
    "fssai-central-license",
    "fssai-state-license",
    "fssai-license",
    "iec-registration",
    "import-export-code",
    "labour-license",
    "contract-labour-license",
    "agreements",
    "investment-readiness",
    "startup-investment-readiness",
    ...newServiceSlugs,
    ...Object.keys(SLUG_ALIASES),
    ...Object.values(SLUG_ALIASES),
    ...Array.from(AGREEMENT_SLUGS),
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
  }

  // DPIIT / Startup India Registration Layout
  if (slug === "dpiit-registration" || slug === "dpiit-recognition" || slug === "dpiit-certification" || slug === "certifications") {
    return (
      <>
        <Header />
        <main>
          <DpiitRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // GST Registration Layout
  if (slug === "gst-registration") {
    return (
      <>
        <Header />
        <main>
          <GstRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Master GST & Indirect Tax Layout
  if (slug === "gst-indirect-tax") {
    return (
      <>
        <Header />
        <main>
          <GstIndirectTaxLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Monthly GST Return Filing Layout
  if (slug === "gst-monthly-returns") {
    return (
      <>
        <Header />
        <main>
          <GstMonthlyReturnsLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Quarterly GST Return Filing (QRMP) Layout
  if (slug === "gst-quarterly-returns") {
    return (
      <>
        <Header />
        <main>
          <GstQuarterlyReturnsLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Annual GST Return (GSTR-9) Layout
  if (slug === "gstr9-annual-return") {
    return (
      <>
        <Header />
        <main>
          <Gstr9AnnualReturnLayout />
        </main>
        <Footer />
      </>
    );
  }

  // CA-Certified GST Audit (GSTR-9C) Layout
  if (slug === "gstr9c-gst-audit" || slug === "gstr9c-audit" || slug === "gst-audit") {
    return (
      <>
        <Header />
        <main>
          <Gstr9cAuditLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Section 44AB Tax Audit Layout
  if (slug === "tax-audit" || slug === "tax-audit-execution" || slug === "tax_audit") {
    return (
      <>
        <Header />
        <main>
          <TaxAuditExecutionLayout />
        </main>
        <Footer />
      </>
    );
  }

  // TDS Return Filing Layout
  if (slug === "tds-return-filing") {
    return (
      <>
        <Header />
        <main>
          <TdsReturnFilingLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Professional Tax Registration & Filing Layout
  if (
    slug === "professional-tax-registration" ||
    slug === "professional-tax" ||
    slug === "professional-tax-return-filing"
  ) {
    return (
      <>
        <Header />
        <main>
          <ProfessionalTaxRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

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
