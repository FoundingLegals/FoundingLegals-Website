import dynamic from "next/dynamic";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const rawParams = await params;
  let rawSlug = rawParams.slug || "";
  let slug = decodeURIComponent(rawSlug).toLowerCase().trim().replace(/[\s_]+/g, "-");
  if (SLUG_ALIASES[slug]) {
    slug = SLUG_ALIASES[slug];
  }

  const BASE_URL = "https://www.foundinglegals.com";

  // Dedicated high-ranking metadata for Private Limited Company Registration
  if (slug === "company-incorporation" || slug === "pvt-ltd-registration" || slug === "private-limited-company") {
    return {
      title: "Private Limited Company Registration in India | Founding Legals",
      description:
        "Register your Private Limited Company in India in 7-10 days. Get MCA SPICe+ approval, DSC, DIN, MOA/AOA, PAN/TAN, and certificate of incorporation with zero hidden fees.",
      keywords: [
        "private limited company registration",
        "company incorporation",
        "company registration in India",
        "register a private limited company",
        "company incorporation cost",
        "company registration fees",
        "pvt ltd registration online",
        "SPICe plus MCA registration",
        "startup registration India",
      ],
      alternates: {
        canonical: `${BASE_URL}/services/CAservices/company-incorporation`,
      },
      openGraph: {
        title: "Private Limited Company Registration in India | Founding Legals",
        description:
          "Fast-track company incorporation in India with dedicated CA support. Transparent government fees, zero hidden margins, and 100% digital execution.",
        url: `${BASE_URL}/services/CAservices/company-incorporation`,
        type: "website",
        images: [
          {
            url: `${BASE_URL}/company-registration-hero.png`,
            width: 1200,
            height: 630,
            alt: "Private Limited Company Registration in India",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Private Limited Company Registration in India | Founding Legals",
        description: "Register your Private Limited Company in India in 7-10 days with dedicated CA support.",
        images: [`${BASE_URL}/company-registration-hero.png`],
      },
    };
  }

  // Dedicated titles for key legal & CA services
  const customMetadata: Record<string, { title: string; desc: string; keywords: string[] }> = {
    "llp-registration": {
      title: "Limited Liability Partnership (LLP) Registration in India | Founding Legals",
      desc: "Register your Limited Liability Partnership (LLP) in 7-10 days. 100% online MCA filing, RUN-LLP name approval, FiLLiP forms, and drafted LLP agreement.",
      keywords: ["LLP registration India", "register LLP online", "limited liability partnership", "LLP agreement drafting"],
    },
    "opc-registration": {
      title: "One Person Company (OPC) Registration in India | Founding Legals",
      desc: "Incorporate a One Person Company (OPC) with 100% sole promoter ownership and corporate limited liability. Fast SPICe+ filing by qualified CAs.",
      keywords: ["One Person Company registration", "OPC registration India", "register OPC online", "solo founder company incorporation"],
    },
    "gst-registration": {
      title: "GST Registration Online in India | Founding Legals",
      desc: "Get your 15-digit GSTIN in 3-5 working days. Seamless online GST registration for startups, proprietorships, LLPs, and companies across all Indian states.",
      keywords: ["GST registration online", "apply for GSTIN", "startup GST registration", "GST registration fees India"],
    },
    "dpiit-recognition": {
      title: "DPIIT Startup India Registration & 80-IAC Tax Exemption | Founding Legals",
      desc: "Get officially recognised by DPIIT under Startup India. Unlock 3-year Section 80-IAC tax holiday, patent fee rebates, and self-certification benefits.",
      keywords: ["DPIIT registration", "Startup India certification", "Section 80 IAC tax exemption", "DPIIT certificate"],
    },
    "trademark-registration": {
      title: "Trademark Registration Online in India | Founding Legals",
      desc: "Protect your brand name, logo, and slogan under the Trade Marks Act, 1999. Online trademark search, Vienna classification, and TM-A filing by IP attorneys.",
      keywords: ["trademark registration India", "register brand name", "online TM filing", "trademark search India"],
    },
    "udyam-registration": {
      title: "UDYAM & MSME Registration Online | Founding Legals",
      desc: "Apply for MSME / UDYAM certificate online. Gain priority sector bank loans, government tender subsidies, and protection against delayed payments.",
      keywords: ["Udyam registration online", "MSME registration", "MSME certificate", "Udyam portal India"],
    },
    "fssai-registration": {
      title: "FSSAI Food License Registration in India | Founding Legals",
      desc: "Apply for Basic, State, and Central FSSAI Food Licenses online. Complete FosCos compliance, document verification, and fast certificate delivery.",
      keywords: ["FSSAI registration online", "food license India", "FosCos registration", "FSSAI license fees"],
    },
  };

  if (customMetadata[slug]) {
    const item = customMetadata[slug];
    return {
      title: item.title,
      description: item.desc,
      keywords: item.keywords,
      alternates: {
        canonical: `${BASE_URL}/services/CAservices/${slug}`,
      },
      openGraph: {
        title: item.title,
        description: item.desc,
        url: `${BASE_URL}/services/CAservices/${slug}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: item.title,
        description: item.desc,
      },
    };
  }

  // Dynamic fallback for all other services & categories
  const svc = services.find((s) => s.slug === slug);
  const newP = getNewServicePage(slug);
  const title = svc?.title || newP?.name || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const desc = svc?.heroDescription || newP?.tagline || `Expert legal and CA services for ${title} in India. Fast, 100% online compliance by Founding Legals.`;

  return {
    title: `${title} | Founding Legals`,
    description: desc,
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
    openGraph: {
      title: `${title} | Founding Legals`,
      description: desc,
      url: `${BASE_URL}/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Founding Legals`,
      description: desc,
    },
  };
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
    const incorporationJsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "@id": "https://www.foundinglegals.com/services/CAservices/company-incorporation#service",
        name: "Private Limited Company Registration in India",
        alternateName: [
          "Company Incorporation India",
          "Pvt Ltd Company Registration",
          "Register a Private Limited Company",
          "Private Limited Company Incorporation Online",
        ],
        description:
          "Fast-track private limited company incorporation in India with digital signatures (DSC), Director Identification Number (DIN), MOA & AOA drafting, PAN, TAN, bank account opening, and MCA Certificate of Incorporation.",
        url: "https://www.foundinglegals.com/services/CAservices/company-incorporation",
        provider: {
          "@type": "ProfessionalService",
          name: "Founding Legals",
          url: "https://www.foundinglegals.com",
          telephone: "+91-9108168270",
          email: "connect@foundinglegals.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        },
        serviceType: "Company Incorporation",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Company Incorporation Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Private Limited Company Registration Professional Service",
              },
              price: "1999",
              priceCurrency: "INR",
            },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the total cost to register a Private Limited Company in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The total cost consists of Founding Legals flat professional fee of ₹1,999 + MCA SPICe+ filing fees (waived ₹0 by the Central Government for authorized capital up to ₹15 Lakhs) + mandatory Class-3 DSC tokens (approx ₹1,500-₹2,000 for 2 directors) + state-specific stamp duty on SPICe+ Part B, MOA, and AOA (ranging from ₹1,000 to ₹8,000 depending on your state and capital).",
            },
          },
          {
            "@type": "Question",
            name: "How long does company registration take in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With Founding Legals fast-track workflow, incorporation typically takes 7 to 10 working days, subject to MCA ROC processing speeds and document readiness.",
            },
          },
          {
            "@type": "Question",
            name: "What are the minimum requirements to incorporate a Pvt Ltd company?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You require at least two directors (at least one must be a resident of India), two shareholders (can be the same individuals as directors), a unique company name complying with MCA naming rules, and a registered office address in India.",
            },
          },
          {
            "@type": "Question",
            name: "Is commercial office space mandatory for company registration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. You can register your company at a residential address or home office. You simply need an electricity or water bill (less than 2 months old) and an NOC from the property owner.",
            },
          },
          {
            "@type": "Question",
            name: "What documents are required for private limited company registration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For each director/shareholder: PAN Card, Aadhaar Card, Passport/Voter ID/Driving License, recent bank statement or utility bill (under 2 months old), and passport-size photo. For the registered office: latest electricity/utility bill, NOC from the owner, and rent agreement if leased.",
            },
          },
          {
            "@type": "Question",
            name: "Can a foreign national or NRI be a director in an Indian Pvt Ltd Company?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, foreign nationals and NRIs can become directors and hold shares, provided at least one director on the board is a resident of India. Foreign documents must be notarized or apostilled.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.foundinglegals.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.foundinglegals.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Company Incorporation",
            item: "https://www.foundinglegals.com/services/CAservices/company-incorporation",
          },
        ],
      },
    ];

    return (
      <>
        <Header />
        <main>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(incorporationJsonLd),
            }}
          />
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
