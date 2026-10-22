// ─────────────────────────────────────────────────────────────
// FoundingLegals — Central Service Fixed Pricing Registry
// Explicit fixed member prices for every service & category
// ─────────────────────────────────────────────────────────────

export interface ServicePrice {
  price: string;
  unit: string;
  note: string;
  badge?: string;
}

export const SERVICE_PRICING: Record<string, ServicePrice> = {
  // Start & Incorporation
  "name-registration": { price: "₹499", unit: "", note: "MCA RUN name search, drafting & reservation for 20 days" },
  "company-incorporation": { price: "₹1,999", unit: " + Govt. Fee", note: "All-inclusive CA fee · 7 to 10 Working Days · SPICe+ filing, DIN, DSC, MOA/AOA, PAN, TAN" },
  "llp-registration": { price: "₹1,999", unit: " + Govt. Fee", note: "All-inclusive CA fee · 7 to 8 Working Days · FiLLiP filing, Form 3 & custom LLP agreement" },
  "opc-registration": { price: "₹1,999", unit: " + Govt. Fee", note: "All-inclusive CA fee · 7 to 8 Working Days · SPICe+ filing, nominee INC-3 & DSC" },
  "partnership-firm-registration": { price: "₹999", unit: "", note: "Partnership deed drafting, notary & ROF registration" },
  "sole-proprietorship-registration": { price: "₹499", unit: "", note: "Enterprise registration, GST/MSME link & bank NOC" },
  "which-company-type-to-register": { price: "Free", unit: "", note: "Guided CA entity selector consultation" },
  "bank-opening": { price: "Free", unit: "", note: "Included with company incorporation via AGILE-PRO-S" },

  // Registrations & Licenses
  "gst-registration": { price: "₹1,499", unit: " onwards", note: "1 to 2 Working Days · GSTIN issued with complete document verification" },
  "msme-registration": { price: "₹999", unit: "", note: "1 to 2 Working Days · UDYAM registration certificate delivered online" },
  "udyam-registration": { price: "₹999", unit: "", note: "1 to 2 Working Days · UDYAM registration certificate delivered online" },
  "iec-registration": { price: "₹1,999", unit: " + Govt. Fee", note: "1 to 2 Working Days · DGFT Import Export Code with lifetime validity" },
  "fssai-license": { price: "₹2,999", unit: " onwards", note: "State license ₹2,999 · Central license ₹9,999 + Govt. Fee" },
  "fssai-state-license": { price: "₹2,999", unit: " + Govt. Fee", note: "5 to 7 Working Days · State food license for restaurants & manufacturers" },
  "fssai-central-license": { price: "₹9,999", unit: " + Govt. Fee", note: "7 to 10 Working Days · Central food license for multi-state or large units" },
  "labour-license": { price: "₹999", unit: "", note: "Contract labour registration under state act" },
  "certifications": { price: "₹1,999", unit: " + Govt. Fee", note: "2 to 4 Working Days · DPIIT Startup India recognition & 80-IAC filing" },
  "dpiit-recognition": { price: "₹1,999", unit: " + Govt. Fee", note: "2 to 4 Working Days · DPIIT Startup Recognition Certificate" },
  "professional-tax-registration": { price: "₹5,999", unit: "", note: "2 to 4 Working Days · Employer and director professional tax enrollment" },
  "lut-registration": { price: "₹2,999", unit: "", note: "1 to 2 Working Days · Form GST RFD-11 Letter of Undertaking for zero-rated export" },
  "ad-code-registration": { price: "₹2,499", unit: "", note: "1 to 3 Working Days · Bank Authorized Dealer code registration at port customs" },

  // IP & Trademarks
  "trademark-registration": { price: "₹799", unit: "/class", note: "TM-A filing per class · Attorney search & objection defense included" },
  "intellectual-property": { price: "₹799", unit: "/class", note: "Trademark (Logo & Name), Copyright & Brand Registry protection" },
  "ip-protection": { price: "₹799", unit: "/class", note: "Comprehensive IP moat · Trademarks, Copyrights & Patent strategy" },

  // Tax & Compliance
  "gst-filing-and-taxation": { price: "₹799", unit: "/month onwards", note: "1 to 2 Working Days · Monthly GSTR-1, GSTR-3B & GSTR-2B reconciliation" },
  "gst-indirect-tax": { price: "₹799", unit: "/month onwards", note: "Complete GST compliance · GSTR-1, 3B, 9 & 9C audit" },
  "gst-monthly-returns": { price: "₹799", unit: " onwards", note: "1 to 2 Working Days · Monthly GST filing & ITC reconciliation" },
  "gst-quarterly-returns": { price: "₹1,999", unit: " onwards", note: "1 to 2 Working Days · QRMP quarterly GST filing" },
  "gstr9-annual-return": { price: "₹3,999", unit: " onwards", note: "1 to 2 Working Days · Annual GSTR-9 reconciliation return" },
  "tds-return-filing": { price: "₹999", unit: "/quarter", note: "Quarterly TDS return filing · Form 24Q / 26Q / 27Q" },
  "professional-tax-return-filing": { price: "₹2,999", unit: " onwards", note: "2 to 4 Working Days · Professional Tax periodic return filing" },

  // Income Tax Filing
  "income-tax-advisory": { price: "₹249", unit: " onwards", note: "Salary ITR from ₹249 · Business ITR ₹749 · Corporate ITR-6 ₹3,416" },
  "income-tax-filing": { price: "₹249", unit: " onwards", note: "CA-reviewed income tax filing across all ITR forms" },
  "salary-itr-filing": { price: "₹249", unit: "", note: "Salaried employee return · Form 16 & AIS deduction optimisation" },
  "business-itr-filing": { price: "₹749", unit: "", note: "Proprietor & freelancer return · Business expense claims" },
  "itr-3-filing": { price: "₹1,499", unit: "", note: "Detailed business accounts · Balance sheet, P&L & Schedule BP" },
  "itr-4-filing": { price: "₹999", unit: "", note: "Presumptive taxation scheme · Section 44AD / 44ADA" },
  "itr-5-filing": { price: "₹2,875", unit: "", note: "LLPs & Partnership firms · Partner capital accounts & 40(b) salary" },
  "itr-6-filing": { price: "₹3,416", unit: "", note: "Pvt Ltd & Public companies · MAT (115JB) & statutory audit link" },
  "itr-7-filing": { price: "₹3,750", unit: "", note: "Trusts, NGOs & Section 8 companies · Section 11/12 exemptions" },

  // Subsidies & Loan Services / Government Services
  "subsidy-application-support": { price: "₹4,999", unit: " onwards", note: "Central & State industrial investment subsidy application support" },
  "grant-application-support": { price: "₹4,999", unit: " onwards", note: "SISFS, BIRAC & state startup seed grant proposal filing" },
  "government-loan-assistance": { price: "₹3,999", unit: " onwards", note: "CGTMSE & MSME priority sector collateral-free bank loan assistance" },
  "government-tender-support": { price: "₹2,999", unit: " onwards", note: "GeM registration, vendor assessment & tender bid documentation" },
  "registration-licence-assistance": { price: "₹1,999", unit: " onwards", note: "Shop Act, municipal trade license & statutory commercial permits" },
  "government-certification-support": { price: "₹3,499", unit: " onwards", note: "ISO 9001/27001, ZED, CE & BIS government quality certifications" },
  "project-report-preparation": { price: "₹2,499", unit: "", note: "Detailed Project Report (DPR) with 5-year CMA data & DSCR analysis" },
  "loan-project-report": { price: "₹2,499", unit: "", note: "Bank DPR with 5-year financials, DSCR & market analysis" },

  // Legal Services & Agreements
  "customized-agreement-draft": { price: "₹1,999", unit: " onwards", note: "1 to 2 Days · Lawyer-drafted bespoke commercial contract" },
  "founders-agreement": { price: "₹299", unit: "/contract", note: "1 to 2 Days · Equity vesting, roles & exit terms documented" },
  "agreements": { price: "₹299", unit: "/contract", note: "21 lawyer-drafted contracts, stamp duty guide & Aadhaar e-sign" },

  // Investor Readiness
  "pitch-to-investors": { price: "₹6,999", unit: " onwards", note: "Launch ₹6,999 · Investor Ready ₹12,999 · Accelerator ₹18,999 · Complete ₹24,999" },
  "launch": { price: "₹6,999", unit: "", note: "Investor pitch deck, modern design & editable files" },
  "investor-ready": { price: "₹12,999", unit: "", note: "Premium deck, financial model, advanced charts & 5 revisions" },
  "fundraising-accelerator": { price: "₹18,999", unit: "", note: "Pitch deck, SWOT, P&L projections, outreach templates & guidance" },
  "capital-raise-complete": { price: "₹24,999", unit: "", note: "Full toolkit, verified angel investor database & mock Q&A" },
  "finance-for-fundraising": { price: "₹2,999", unit: "", note: "Company valuation report & VC due diligence readiness" },

  // Audit
  "audit-attestation": { price: "₹2,499", unit: " onwards", note: "Section 44AB Tax Audit ₹2,499 · GSTR-9C Audit ₹4,165" },
  "tax-audit": { price: "₹2,499", unit: "", note: "Section 44AB Tax Audit execution & Form 3CB/3CD filing" },
  "gst-audit": { price: "₹4,165", unit: "", note: "GSTR-9C CA-certified reconciliation statement (>₹5Cr turnover)" },

  // Annual Compliance & Apps
  "essential-startup-approach": { price: "₹4,999", unit: "/year", note: "Full annual compliance · AOC-4, MGT-7, DIR-3 KYC & Minutes" },
  "client-management": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · Up to 5 team members" },
  "team-management": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · Up to 5 team members" },
  "payroll-management": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · Automated payslips & TDS" },
  "spend-analysis": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · Real-time burn & runway tracking" },
  "document-management": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · Encrypted vault & e-signs" },
  "schemes-and-grants": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · DPIIT SISFS & grants engine" },
  "investor-directory": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · 3,000+ curated investor contacts" },
  "marketplace": { price: "₹658", unit: "/month", note: "Included in Founding Legals Pre-Seed Plan · Exclusive founder-to-founder perks & deals" },
  "business-incorporation": { price: "₹1,999", unit: " onwards", note: "Pvt Ltd, LLP, OPC & Proprietorship incorporation packages" },
  "licenses-registrations": { price: "₹999", unit: " onwards", note: "GST, MSME, FSSAI, IEC & Labour licenses" },
};

export const DEFAULT_SERVICE_PRICE: ServicePrice = {
  price: "₹999",
  unit: "",
  note: "Fixed transparent fee · CA-managed execution with 0 hidden charges",
};

export function getServicePrice(slug: string): ServicePrice {
  return SERVICE_PRICING[slug] || DEFAULT_SERVICE_PRICE;
}
