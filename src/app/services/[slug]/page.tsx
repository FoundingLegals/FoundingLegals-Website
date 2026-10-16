import dynamic from "next/dynamic";
import { services } from "@/lib/servicesData";
import { getNewServicePage, newServiceSlugs } from "@/lib/newServicesData";
import { AGREEMENTS_DATABASE } from "@/lib/agreementsData";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dynamically code-split layouts so only the active route's component is loaded into memory
const ServiceLayout = dynamic(() => import("@/components/ServiceLayout"));
const NameRegistrationLayout = dynamic(() => import("@/components/NameRegistrationLayout"));
const CompanyIncorporationLayout = dynamic(() => import("@/components/CompanyIncorporationLayout"));
const LlpRegistrationLayout = dynamic(() => import("@/components/LlpRegistrationLayout"));
const OpcRegistrationLayout = dynamic(() => import("@/components/OpcRegistrationLayout"));
const WhichCompanyTypeLayout = dynamic(() => import("@/components/WhichCompanyTypeLayout"));
const PartnershipRegistrationLayout = dynamic(() => import("@/components/PartnershipRegistrationLayout"));
const SoleProprietorshipRegistrationLayout = dynamic(() => import("@/components/SoleProprietorshipRegistrationLayout"));
const PublicLimitedRegistrationLayout = dynamic(() => import("@/components/PublicLimitedRegistrationLayout"));
const TrademarkRegistrationLayout = dynamic(() => import("@/components/TrademarkRegistrationLayout"));
const DpiitRegistrationLayout = dynamic(() => import("@/components/DpiitRegistrationLayout"));
const GstRegistrationLayout = dynamic(() => import("@/components/GstRegistrationLayout"));
const GstIndirectTaxLayout = dynamic(() => import("@/components/GstIndirectTaxLayout"));
const UdyamRegistrationLayout = dynamic(() => import("@/components/UdyamRegistrationLayout"));
const FssaiCentralRegistrationLayout = dynamic(() => import("@/components/FssaiCentralRegistrationLayout"));
const FssaiStateRegistrationLayout = dynamic(() => import("@/components/FssaiStateRegistrationLayout"));
const FssaiRegistrationLayout = dynamic(() => import("@/components/FssaiRegistrationLayout"));
const IecRegistrationLayout = dynamic(() => import("@/components/IecRegistrationLayout"));
const LabourLicenseRegistrationLayout = dynamic(() => import("@/components/LabourLicenseRegistrationLayout"));
const ProfessionalTaxRegistrationLayout = dynamic(() => import("@/components/ProfessionalTaxRegistrationLayout"));
const GstMonthlyReturnsLayout = dynamic(() => import("@/components/GstMonthlyReturnsLayout"));
const GstQuarterlyReturnsLayout = dynamic(() => import("@/components/GstQuarterlyReturnsLayout"));
const Gstr9AnnualReturnLayout = dynamic(() => import("@/components/Gstr9AnnualReturnLayout"));
const Gstr9cAuditLayout = dynamic(() => import("@/components/Gstr9cAuditLayout"));
const TaxAuditExecutionLayout = dynamic(() => import("@/components/TaxAuditExecutionLayout"));
const TdsReturnFilingLayout = dynamic(() => import("@/components/TdsReturnFilingLayout"));
const AgreementsLayout = dynamic(() => import("@/components/AgreementsLayout"));
const InvestmentReadinessLayout = dynamic(() => import("@/components/InvestmentReadinessLayout"));
const NewServicePageLayout = dynamic(() => import("@/components/NewServicePageLayout"));

const AGREEMENT_SLUGS = new Set<string>([
  ...AGREEMENTS_DATABASE.map((a) => a.id),
  "mutual-nda",
  "internship-agreement",
  "software-license",
]);

const SLUG_ALIASES: Record<string, string> = {
  // GST & Indirect Tax subservices & variants
  "professional-tax": "professional-tax-return-filing",

  // MSME / UDYAM alias
  "msme-registration": "udyam-registration",

  // Financial & Investment subservices
  "loan-project-report": "financial-investment",
  "find-investors": "pitch-to-investors",

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

  // FSSAI aliases
  "fssai-license": "fssai-registration",
  "basic-fssai-license": "fssai-registration",
  "food-license": "fssai-registration",
  "fssai-basic-license": "fssai-registration",
  "fssai-food-license": "fssai-registration",
  "state-fssai-license": "fssai-state-license",
  "central-fssai-license": "fssai-central-license",
  "fssai-state-registration": "fssai-state-license",
  "fssai-central-registration": "fssai-central-license",

  // IEC and Labour aliases
  "import-export-code": "iec-registration",
  "import-export-license": "iec-registration",
  "iec-code": "iec-registration",
  "contract-labour-license": "labour-license",
  "clra-license": "labour-license",
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
    "dpiit-registration",
    "dpiit-certification",
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
    "fssai-registration",
    "basic-fssai-license",
    "food-license",
    "iec-registration",
    "import-export-code",
    "labour-license",
    "agreements",
    "payroll-management",
    "schemes-and-grants",
    "investor-directory",
    "marketplace",
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
    slug === "finance-for-fundraising"
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

  // FSSAI State Food License Layout
  if (
    slug === "fssai-state-license" ||
    slug === "fssai-state-registration" ||
    slug === "state-fssai-license"
  ) {
    return (
      <>
        <Header />
        <main>
          <FssaiStateRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // FSSAI Central Food License Layout
  if (
    slug === "fssai-central-license" ||
    slug === "fssai-central-registration" ||
    slug === "central-fssai-license"
  ) {
    return (
      <>
        <Header />
        <main>
          <FssaiCentralRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // FSSAI Registration / Basic Food License Master Layout
  if (
    slug === "fssai-registration" ||
    slug === "fssai-license" ||
    slug === "basic-fssai-license" ||
    slug === "food-license" ||
    slug === "fssai-basic-license" ||
    slug === "fssai-food-license"
  ) {
    return (
      <>
        <Header />
        <main>
          <FssaiRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // IEC (Import Export Code) Layout
  if (
    slug === "iec-registration" ||
    slug === "import-export-code" ||
    slug === "iec-code" ||
    slug === "import-export-license"
  ) {
    return (
      <>
        <Header />
        <main>
          <IecRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // Labour License (CLRA) Layout
  if (
    slug === "labour-license" ||
    slug === "contract-labour-license" ||
    slug === "clra-license"
  ) {
    return (
      <>
        <Header />
        <main>
          <LabourLicenseRegistrationLayout />
        </main>
        <Footer />
      </>
    );
  }

  // UDYAM / MSME Registration Layout
  if (
    slug === "udyam-registration" ||
    slug === "msme-registration" ||
    slug === "udyam-certificate"
  ) {
    return (
      <>
        <Header />
        <main>
          <UdyamRegistrationLayout />
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
