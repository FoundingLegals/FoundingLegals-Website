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
  "company-incorporation": { price: "₹999", unit: "", note: "All-inclusive CA fee · SPICe+ filing, DIN, DSC, MOA/AOA, PAN, TAN" },
  "llp-registration": { price: "₹1,499", unit: "", note: "All-inclusive CA fee · FiLLiP filing, Form 3 & custom LLP agreement" },
  "opc-registration": { price: "₹999", unit: "", note: "All-inclusive CA fee · SPICe+ filing, nominee INC-3 & DSC" },
  "partnership-firm-registration": { price: "₹999", unit: "", note: "Partnership deed drafting, notary & ROF registration" },
  "sole-proprietorship-registration": { price: "₹499", unit: "", note: "Enterprise registration, GST/MSME link & bank NOC" },
  "which-company-type-to-register": { price: "Free", unit: "", note: "Guided CA entity selector consultation" },
  "bank-opening": { price: "Free", unit: "", note: "Included with company incorporation via AGILE-PRO-S" },

  // Registrations & Licenses
  "gst-registration": { price: "₹499", unit: "", note: "GSTIN issued in 3–5 working days · Document verification included" },
  "msme-registration": { price: "₹499", unit: "", note: "UDYAM registration certificate delivered in 48 hours" },
  "iec-registration": { price: "₹499", unit: "", note: "DGFT Import Export Code · Lifetime validity" },
  "fssai-license": { price: "₹999", unit: " onwards", note: "State license ₹999 · Central license ₹4,999" },
  "fssai-state-license": { price: "₹999", unit: "", note: "State food license for turnover ₹12L–₹20Cr" },
  "fssai-central-license": { price: "₹4,999", unit: "", note: "Central food license for turnover >₹20Cr or multi-state" },
  "labour-license": { price: "₹999", unit: "", note: "Contract labour registration under state act" },
  "certifications": { price: "₹1,499", unit: "", note: "DPIIT Startup India recognition & 80-IAC tax holiday filing" },
  "dpiit-recognition": { price: "₹1,499", unit: "", note: "Startup India DPIIT recognition certificate" },

  // IP & Trademarks
  "trademark-registration": { price: "₹799", unit: "/class", note: "TM-A filing per class · Attorney response to registry objections included" },
  "intellectual-property": { price: "₹799", unit: "/class", note: "Trademark, Copyright & Brand Registry protection" },
  "ip-protection": { price: "₹799", unit: "/class", note: "Comprehensive IP moat · Trademarks, Copyrights & Patent strategy" },

  // Tax & Compliance
  "gst-filing-and-taxation": { price: "₹549", unit: "/month", note: "Monthly GSTR-1, GSTR-3B & GSTR-2B ITC reconciliation" },
  "gst-indirect-tax": { price: "₹549", unit: "/month", note: "Complete GST compliance · GSTR-1, 3B, 9 & 9C audit" },
  "gst-monthly-returns": { price: "₹549", unit: "/month", note: "Monthly GSTR-1 & GSTR-3B return filing" },
  "gst-quarterly-returns": { price: "₹999", unit: "/quarter", note: "QRMP scheme quarterly return filing" },
  "gstr9-annual-return": { price: "₹1,999", unit: "", note: "GSTR-9 comprehensive annual reconciliation return" },
  "tds-return-filing": { price: "₹999", unit: "/quarter", note: "Quarterly TDS filing · Form 24Q / 26Q / 27Q" },

  // Income Tax Filing
  "income-tax-advisory": { price: "₹249", unit: " onwards", note: "ITR-1 from ₹249 · Business ITR from ₹749 · Corporate ITR-6 ₹3,416" },
  "income-tax-filing": { price: "₹249", unit: " onwards", note: "CA-reviewed income tax filing across all ITR forms" },
  "salary-itr-filing": { price: "₹249", unit: "", note: "Salaried employee return · Form 16 & AIS deduction optimisation" },
  "business-itr-filing": { price: "₹749", unit: "", note: "Proprietor & freelancer return · Business expense claims" },
  "itr-3-filing": { price: "₹1,499", unit: "", note: "Detailed business accounts · Balance sheet, P&L & Schedule BP" },
  "itr-4-filing": { price: "₹999", unit: "", note: "Presumptive taxation scheme · Section 44AD / 44ADA" },
  "itr-5-filing": { price: "₹2,875", unit: "", note: "LLPs & Partnership firms · Partner capital accounts & 40(b) salary" },
  "itr-6-filing": { price: "₹3,416", unit: "", note: "Pvt Ltd & Public companies · MAT (115JB) & statutory audit link" },
  "itr-7-filing": { price: "₹3,750", unit: "", note: "Trusts, NGOs & Section 8 companies · Section 11/12 exemptions" },

  // Audit
  "audit-attestation": { price: "₹2,499", unit: " onwards", note: "Section 44AB Tax Audit ₹2,499 · GSTR-9C Audit ₹4,165" },
  "tax-audit": { price: "₹2,499", unit: "", note: "Section 44AB Tax Audit execution & Form 3CB/3CD filing" },
  "gst-audit": { price: "₹4,165", unit: "", note: "GSTR-9C CA-certified reconciliation statement (>₹5Cr turnover)" },

  // Financial & Advisory
  "financial-investment": { price: "₹1,499", unit: " onwards", note: "Bank project reports, DPIIT recognition & investor data room" },
  "loan-project-report": { price: "₹2,499", unit: "", note: "Bank DPR with 5-year financials, DSCR & market analysis" },
  "pitch-to-investors": { price: "₹2,499", unit: "", note: "Investor pitch deck narrative review & 3-yr financial model" },
  "find-investors": { price: "Included", unit: "", note: "Access to 500+ angel & VC investor database" },
  "finance-for-fundraising": { price: "₹2,999", unit: "", note: "Company valuation report & VC due diligence readiness" },

  // Annual Compliance & Apps
  "essential-startup-approach": { price: "₹4,999", unit: "/year", note: "Full annual compliance · AOC-4, MGT-7, DIR-3 KYC & Minutes" },
  "client-management": { price: "₹299", unit: "/month", note: "Client CRM, GST invoicing portal & payment receipts" },
  "team-management": { price: "₹499", unit: "/month", note: "Headcount management, monthly payslips & ESOP portal" },
  "spend-analysis": { price: "₹399", unit: "/month", note: "Bank feed expense categorisation & live burn rate dashboard" },
  "document-management": { price: "₹299", unit: "/month", note: "AES-256 encrypted legal document vault & VC data room" },
  "agreements": { price: "₹299", unit: "/contract", note: "21 lawyer-drafted contracts, stamp duty guide & Aadhaar e-sign" },
  "business-incorporation": { price: "₹999", unit: " onwards", note: "Pvt Ltd, LLP, OPC & Proprietorship incorporation packages" },
  "licenses-registrations": { price: "₹499", unit: " onwards", note: "GST, MSME, FSSAI, IEC & Labour licenses" },
};

export const DEFAULT_SERVICE_PRICE: ServicePrice = {
  price: "₹999",
  unit: "",
  note: "Fixed transparent fee · CA-managed execution with 0 hidden charges",
};

export function getServicePrice(slug: string): ServicePrice {
  return SERVICE_PRICING[slug] || DEFAULT_SERVICE_PRICE;
}
