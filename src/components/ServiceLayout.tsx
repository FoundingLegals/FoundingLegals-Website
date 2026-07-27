"use client";

import { ServicePattern } from "@/lib/servicesData";
import {
  Check, ArrowRight, BarChart3, Shield, Users, Zap, Clock,
  ChevronDown, FileText,
} from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ── Market competitor pricing keyed by slug ──────────────────
type PricingRow = { vendor: string; price: string; note?: string };

const COMPETITOR_PRICING: Record<string, PricingRow[]> = {
  "gst-filing-and-taxation": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹800/mo", note: "Monthly GSTR filing" },
    { vendor: "RegisterKaro", price: "₹999/mo", note: "Monthly GSTR filing" },
    { vendor: "IndiaFilings", price: "₹1,499/mo", note: "Monthly GSTR filing" },
    { vendor: "LegalWiz", price: "₹799/mo", note: "Monthly GSTR filing" },
    { vendor: "IncorpX", price: "₹2,999/mo", note: "Monthly GSTR filing" },
    { vendor: "RegisterEase", price: "₹499/mo", note: "Monthly GSTR filing" },
  ],
  "gst-registration": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹499", note: "Professional fee" },
    { vendor: "RegisterKaro", price: "₹999", note: "Professional fee" },
    { vendor: "IndiaFilings", price: "₹1,499", note: "Professional fee" },
    { vendor: "LegalWiz", price: "₹1,999", note: "Professional fee" },
  ],
  "company-incorporation": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹999", note: "Professional fee + govt. fees" },
    { vendor: "RegisterKaro", price: "₹1,999", note: "Professional fee + govt. fees" },
    { vendor: "IndiaFilings", price: "₹2,899", note: "Professional fee + govt. fees" },
    { vendor: "LegalWiz", price: "₹2,999", note: "Professional fee + govt. fees" },
    { vendor: "RegisterEase", price: "₹1,499", note: "Professional fee + govt. fees" },
  ],
  "llp-registration": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹1,499", note: "Professional fee + govt. fees" },
    { vendor: "RegisterKaro", price: "₹3,000", note: "Professional fee" },
    { vendor: "IndiaFilings", price: "₹2,899", note: "Professional fee" },
    { vendor: "LegalWiz", price: "₹3,999", note: "Professional fee" },
  ],
  "opc-registration": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹999", note: "Professional fee + govt. fees" },
    { vendor: "RegisterKaro", price: "₹1,999", note: "Professional fee" },
    { vendor: "IndiaFilings", price: "₹2,899", note: "Professional fee" },
  ],
  "trademark-registration": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹1,499", note: "Prof. fee · + ₹4,500–₹9,000 govt." },
    { vendor: "RegisterKaro", price: "₹1,499", note: "Prof. fee + govt. fee" },
    { vendor: "IndiaFilings", price: "₹1,999", note: "Per class" },
    { vendor: "LegalWiz", price: "₹1,999", note: "Per application" },
    { vendor: "RegisterEase", price: "₹1,499", note: "Per class" },
  ],
  "msme-registration": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹3,499", note: "Professional fee" },
    { vendor: "RegisterKaro", price: "Free", note: "Self-service portal only" },
    { vendor: "RegisterEase", price: "₹999", note: "Professional fee" },
  ],
  "income-tax-filing": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹499–₹13,000", note: "Depends on ITR type" },
    { vendor: "RegisterKaro", price: "₹500–₹5,000", note: "Depends on ITR type" },
    { vendor: "Tax2win", price: "₹299–₹999", note: "Software-assisted" },
    { vendor: "IndiaFilings", price: "₹2,500", note: "ITR-6 only published" },
  ],
  "tax-audit": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹5,000", note: "Tax audit (Section 44AB)" },
    { vendor: "RegisterKaro", price: "₹5,000", note: "Tax audit professional fee" },
    { vendor: "CA firm (mid-size)", price: "₹15,000–₹50,000", note: "Varies by turnover" },
  ],
  "gst-audit": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹5,000", note: "GSTR-9C execution" },
    { vendor: "RegisterKaro", price: "₹10,000", note: "GSTR-9C execution" },
    { vendor: "RegisterEase", price: "₹9,999", note: "GSTR-9C execution" },
  ],
  "iec-registration": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹999", note: "Professional fee" },
    { vendor: "RegisterKaro", price: "On Request", note: "No published price" },
    { vendor: "IndiaFilings", price: "On Request", note: "No published price" },
  ],
  "fssai-license": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹1,999–₹10,000", note: "State vs. Central license" },
    { vendor: "RegisterKaro", price: "On Request", note: "No published price" },
    { vendor: "IndiaFilings", price: "On Request", note: "No published price" },
  ],
  "tds-return-filing": [
    { vendor: "Vakilsearch (Zolvit)", price: "₹3,500", note: "Per quarter" },
    { vendor: "RegisterKaro", price: "₹2,000", note: "Per quarter" },
  ],
};

// ── FoundingLegals member pricing — set rates at ~50% of market ──
// Calculated from competitor avg; rounded to nearest clean number
const MEMBER_PRICING: Record<string, { price: string; unit: string; note: string }> = {
  "gst-filing-and-taxation": { price: "₹549",    unit: "/month",    note: "GSTR-1 + GSTR-3B + ITC reconciliation · CA-managed" },
  "gst-registration":         { price: "₹499",    unit: "",          note: "One-time · GSTIN delivered in 3–5 working days" },
  "company-incorporation":    { price: "₹999",    unit: "",          note: "Professional fee · Govt. & stamp duty fees extra" },
  "llp-registration":         { price: "₹1,499",  unit: "",          note: "Professional fee · Govt. & stamp duty fees extra" },
  "opc-registration":         { price: "₹999",    unit: "",          note: "Professional fee · Govt. fees extra" },
  "trademark-registration":   { price: "₹799",    unit: "/class",    note: "Professional fee per class · Govt. fee ₹4,500–₹9,000 extra" },
  "msme-registration":        { price: "₹499",    unit: "",          note: "UDYAM/MSME registration · Certificate in 2 days" },
  "income-tax-filing":        { price: "₹249",    unit: " onwards",  note: "Salary ITR from ₹249 · Business ITR from ₹749 · ITR-6 from ₹4,999" },
  "tax-audit":                { price: "₹2,499",  unit: "",          note: "Section 44AB audit · Form 3CB/3CD included" },
  "gst-audit":                { price: "₹4,165",  unit: "",          note: "GSTR-9C CA-certified reconciliation statement" },
  "iec-registration":         { price: "₹499",    unit: "",          note: "One-time · IEC issued in 3–5 working days" },
  "fssai-license":            { price: "₹999",    unit: " onwards",  note: "State license from ₹999 · Central from ₹4,999 · Govt. fee extra" },
  "tds-return-filing":        { price: "₹999",    unit: "/quarter",  note: "24Q / 26Q / 27Q filing · PAN-wise deductee details" },
};

const DEFAULT_MEMBER_PRICING = {
  price: "50% off",
  unit: "",
  note: "Of the published market rate — CA-executed, not software",
};

// Default fallback competitor pricing for unlisted slugs
const DEFAULT_PRICING: PricingRow[] = [
  { vendor: "Vakilsearch (Zolvit)", price: "₹999–₹5,000", note: "Professional fee only" },
  { vendor: "RegisterKaro", price: "₹1,999–₹10,000", note: "Professional fee only" },
  { vendor: "IndiaFilings", price: "₹2,899–₹15,000", note: "Per-service pricing" },
  { vendor: "LegalWiz", price: "₹2,999–₹3,999", note: "Limited services" },
  { vendor: "Independent CA (market rate)", price: "₹5,000–₹25,000", note: "City-dependent" },
];

// ── Generic process steps keyed by category keywords ────────
function getProcess(service: ServicePattern) {
  const t = (service.title + " " + (service.heroCategory || "")).toLowerCase();
  if (t.includes("gst") || t.includes("tax") || t.includes("itr") || t.includes("filing")) {
    return [
      { n: "01", title: "Document collection", desc: "Upload invoices, bank statements, and TDS certificates securely through your FoundingLegals vault." },
      { n: "02", title: "Computation & review", desc: "Our CA prepares the return / computation and shares it with you for review before any submission." },
      { n: "03", title: "Filing & acknowledgment", desc: "Return is filed on the government portal. Acknowledgment and filed copy stored in your document vault." },
      { n: "04", title: "Compliance tracking", desc: "We track your filing history, due dates, and any departmental notices — proactively, not reactively." },
    ];
  }
  if (t.includes("registration") || t.includes("incorporation") || t.includes("license")) {
    return [
      { n: "01", title: "Eligibility & document check", desc: "We review your entity type, documents, and requirements to confirm the exact application pathway." },
      { n: "02", title: "Application preparation", desc: "All forms, portal registrations, and supporting documents are prepared and verified by our CA team." },
      { n: "03", title: "Government filing & tracking", desc: "We file with the relevant authority and track your application status — handling any departmental queries." },
      { n: "04", title: "Certificate delivery", desc: "Certificates are stored in your document vault with renewal dates tracked and alert set up." },
    ];
  }
  return [
    { n: "01", title: "Requirement discussion", desc: "A CA reviews your specific situation and confirms exactly what's needed — no guesswork." },
    { n: "02", title: "Document & data collection", desc: "All required documents are collected securely through your FoundingLegals vault." },
    { n: "03", title: "Execution & verification", desc: "The service is executed by a qualified CA. All outputs are verified before delivery." },
    { n: "04", title: "Delivery & ongoing support", desc: "Final deliverables are stored in your vault. Our team remains available for follow-up questions." },
  ];
}

// ── FAQ generator ────────────────────────────────────────────
function getFaqs(service: ServicePattern) {
  const t = service.title.toLowerCase();
  if (t.includes("gst") && t.includes("filing")) {
    return [
      { q: "What is the due date for GSTR-1 and GSTR-3B?", a: "For monthly filers: GSTR-1 is due by the 11th of the following month, and GSTR-3B by the 20th. For quarterly filers under the QRMP scheme: GSTR-1 is due by the 13th of the month following the quarter, and GSTR-3B by the 22nd/24th depending on your state." },
      { q: "What happens if I miss a GST filing deadline?", a: "Late filing attracts ₹50/day (₹25 CGST + ₹25 SGST) for returns with tax liability, and ₹20/day for NIL returns. Interest at 18% per annum applies on unpaid tax from the due date. Missed filings also block your buyers' input tax credit claims." },
      { q: "Is GSTR-9 mandatory for all registered taxpayers?", a: "GSTR-9 (annual return) is mandatory for most registered taxpayers. It is optional for those with annual aggregate turnover up to ₹2 crore. GSTR-9C (CA-certified reconciliation) is required for businesses with turnover above ₹5 crore." },
      { q: "Can FoundingLegals handle GST notices from the department?", a: "Yes. Any GST departmental notice — scrutiny assessment, demand notice, or mismatch notice — is handled by our CA team, including preparation of formal written responses and representation where required." },
    ];
  }
  if (t.includes("trademark")) {
    return [
      { q: "How long does trademark registration take in India?", a: "The full process takes 18–36 months. However, your legal rights are established from the filing date — so filing early is what matters, not waiting for the certificate." },
      { q: "What is the government fee for trademark registration?", a: "The trademark government fee is ₹4,500 per class for startups and MSMEs (entities registered under MSME Act or DPIIT-recognised startups), and ₹9,000 per class for all other applicants. This fee is statutory, non-refundable, and separate from professional fees." },
      { q: "Can I use the ™ symbol immediately after filing?", a: "Yes. The ™ symbol can be used as soon as you file the trademark application. The ® symbol can only be used after the trademark is formally registered and the certificate is issued." },
      { q: "What if someone objects to my trademark application?", a: "Objections can arise from the Trademark Registry examiner (under Sections 9 or 11) or from third parties during the four-month opposition window. Both types of objections are handled by our IP attorneys as part of the member rate engagement." },
    ];
  }
  if (t.includes("incorporation") || t.includes("registration") || t.includes("company")) {
    return [
      { q: "How long does the registration process take?", a: "Most entity registrations take 7–15 working days from the date all documents are submitted. MCA processing for Pvt Ltd typically takes 5–10 days. Delays are most commonly caused by name rejection or document deficiencies — both of which we pre-check before filing." },
      { q: "Are government fees included in FoundingLegals pricing?", a: "Government fees (MCA filing fee, stamp duty, state government charges) are statutory and non-negotiable. They are additional to the professional fee on all platforms including FoundingLegals. We provide a complete cost breakdown before you proceed." },
      { q: "Do I need a physical office before incorporating?", a: "You need a valid registered address in India. This can be your residential address, a co-working space, or a virtual office. The address must be verifiable with a utility bill and an NOC from the premises owner." },
      { q: "Can I change my entity type after incorporating?", a: "Entity conversion is possible — for example, converting a proprietorship to an LLP or a Pvt Ltd. However, it involves a fresh incorporation and transfer of assets and liabilities. Starting with the right entity type is significantly more efficient." },
    ];
  }
  // Generic fallback FAQs
  return [
    { q: "How quickly can this service be completed?", a: "Timelines vary by service type and the completeness of documents provided. Most compliance services are completed within 5–15 working days. We provide a specific timeline estimate at the start of each engagement." },
    { q: "What makes FoundingLegals different from other platforms?", a: "Every service on FoundingLegals is executed by a qualified Chartered Accountant — not a software algorithm. You get real CA expertise at 50% of the published market rate, with your documents stored securely in one place." },
    { q: "Are government fees covered by the member rate?", a: "Government fees (GST department, MCA, stamp duty, trademark registry) are statutory obligations that no platform can waive. They are additional to professional fees across all platforms. FoundingLegals member rates apply to professional fees only." },
    { q: "What if I have questions after the service is delivered?", a: "Your assigned CA remains available for follow-up questions related to the delivered service. For complex queries that require additional analysis, we schedule a structured consultation — also at member rates." },
  ];
}

import { getServicePrice } from "@/lib/servicePricingData";

// ── Main Layout ──────────────────────────────────────────────
export default function ServiceLayout({ service }: { service: ServicePattern }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const memberRate = getServicePrice(service.slug);

  const process = getProcess(service);
  const faqs = getFaqs(service);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2b2723]">

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-[#E5E1D6]">
        <div className="relative z-10 max-w-7xl mx-auto pt-[120px] pb-[100px] px-6 sm:px-12 lg:px-24">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div>
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-olive-50 border border-olive-200 rounded-lg text-olive-700 text-[11px] font-bold uppercase tracking-widest mb-7">
                <FileText className="w-3.5 h-3.5" />
                {service.heroCategory || "FoundingLegals Service"}
              </div>

              <h1 className="text-[38px] sm:text-[50px] lg:text-[58px] font-medium text-[#2b2723] leading-[1.08] tracking-[-0.02em] font-serif mb-6">
                {service.heroTitle}
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#6b6965] leading-relaxed mb-10 max-w-xl font-light">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[14px] font-bold rounded-full transition-all shadow-md"
                >
                  Get Started at Member Rate
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#F6F4F0] text-[#2b2723] text-[14px] font-medium rounded-full border border-[#E5E1D6] transition-all shadow-sm"
                >
                  Talk to a CA
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-[#6b6965]">
                <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-[#5A7338]" /> CA-executed service</span>
                <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-[#5A7338]" /> 1,000+ clients</span>
                <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-[#5A7338]" /> 50% below market</span>
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#5A7338]" /> On-time guarantee</span>
              </div>
            </div>

            {/* Right: Clean Light Pricing Highlight Card */}
            <div className="bg-white border border-[#E5E1D6] rounded-3xl p-8 lg:p-9 shadow-xl shadow-black/[0.03] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#5A7338]/5 rounded-full translate-x-12 -translate-y-12 pointer-events-none" />
              
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5A7338] mb-3">
                FoundingLegals Fixed Rate
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[44px] font-bold text-[#2b2723] leading-none">{memberRate.price}</span>
                <span className="text-[18px] text-[#6b6965] font-semibold">{memberRate.unit}</span>
              </div>

              <p className="text-[13px] text-[#6b6965] font-light leading-relaxed mb-6">
                {memberRate.note}
              </p>

              <div className="space-y-3 pt-6 border-t border-[#F0EDE6] mb-8">
                <div className="flex items-center gap-3 text-[13px] text-[#3a3732]">
                  <Check className="w-4 h-4 text-[#5A7338] shrink-0" />
                  <span>Qualified CA execution & filing</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-[#3a3732]">
                  <Check className="w-4 h-4 text-[#5A7338] shrink-0" />
                  <span>End-to-end document verification</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-[#3a3732]">
                  <Check className="w-4 h-4 text-[#5A7338] shrink-0" />
                  <span>Government portal submission & tracking</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-[#3a3732]">
                  <Check className="w-4 h-4 text-[#5A7338] shrink-0" />
                  <span>Lifetime vault backup & renewal alerts</span>
                </div>
              </div>

              <Link
                href="/start"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[13.5px] font-bold rounded-full transition-all shadow-md"
              >
                Proceed with Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT'S INCLUDED (Benefits) ───────────────────────── */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-b border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-3">
              {service.featuresTitle || "What's included in this service"}
            </h2>
            <p className="text-[15px] text-[#6b6965] font-light max-w-xl mx-auto">
              Every service is CA-executed from start to finish — not outsourced to a software form or an unqualified operator.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, idx) => {
              const iconKey = feature.iconName as keyof typeof Icons;
              const Icon = (Icons[iconKey] || Icons.CheckCircle2) as React.ElementType;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-7 hover:border-[#5A7338]/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-olive-50 border border-olive-100 flex items-center justify-center text-[#5A7338] mb-5">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#2b2723] mb-2">{feature.title}</h3>
                  <p className="text-[13px] text-[#6b6965] leading-relaxed font-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS ─────────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-b border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-[28px] sm:text-[38px] font-medium text-[#2b2723] mb-8 leading-[1.1]">
              {service.benefitsTitle || "Why this matters for your business"}
            </h2>
            <ul className="space-y-5">
              {service.benefits.map((benefit, idx) => {
                const parts = benefit.split(".");
                const title = parts[0].trim();
                const desc = parts.slice(1).join(".").trim();
                return (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#5A7338]/10 border border-[#5A7338]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#5A7338] stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-[14px] font-bold text-[#2b2723]">{title}.</span>{" "}
                      <span className="text-[14px] text-[#6b6965] font-light leading-relaxed">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: process steps */}
          <div className="space-y-4">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A7338] mb-6">
              How it works — step by step
            </div>
            {process.map((step) => (
              <div
                key={step.n}
                className="flex gap-5 bg-white rounded-2xl border border-[#E5E1D6] p-5 shadow-sm"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#2b2723] flex items-center justify-center text-white font-bold text-[12px]">
                  {step.n}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#2b2723] mb-1">{step.title}</div>
                  <div className="text-[12.5px] text-[#6b6965] font-light leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FIXED SERVICE PRICING ────────────────────────────── */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#F6F4F0] border-b border-[#E5E1D6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#5A7338]/10 border border-[#5A7338]/20 rounded-full text-[#5A7338] text-[11px] font-bold uppercase tracking-widest mb-4">
              <Shield className="w-3.5 h-3.5" />
              Transparent Fixed Pricing
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] font-medium text-[#2b2723] mb-3">
              Fixed Pricing for {service.title}
            </h2>
            <p className="text-[15px] text-[#6b6965] font-light max-w-lg mx-auto">
              100% transparent pricing with qualified Chartered Accountant execution. No hidden charges or unexpected surprise fees.
            </p>
          </div>

          {/* Premium Fixed Price Card */}
          <div className="bg-white rounded-3xl border border-[#E5E1D6] p-8 sm:p-10 shadow-lg shadow-black/[0.03] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#5A7338]/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#E5E1D6]">
              <div>
                <span className="inline-block px-3 py-1 bg-olive-50 border border-olive-200 text-[#5A7338] text-[11px] font-bold rounded-md uppercase tracking-wider mb-3">
                  CA-Managed Delivery
                </span>
                <h3 className="text-[24px] font-serif font-bold text-[#2b2723]">
                  {service.title} Package
                </h3>
                <p className="text-[14px] text-[#6b6965] font-light mt-1">
                  {memberRate.note}
                </p>
              </div>

              <div className="flex flex-col md:items-end">
                <div className="text-[12px] text-[#9b958f] uppercase font-bold tracking-wider mb-1">Fixed Member Rate</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[40px] font-bold text-[#2b2723] leading-none">{memberRate.price}</span>
                  <span className="text-[16px] text-[#6b6965] font-medium">{memberRate.unit}</span>
                </div>
                <span className="text-[11px] text-[#5A7338] font-semibold mt-1">✓ Statutory & MCA Compliant</span>
              </div>
            </div>

            {/* Included highlights */}
            <div className="py-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#5A7338]" />
                </div>
                <span className="text-[13.5px] text-[#3a3732]">Assigned Senior Chartered Accountant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#5A7338]" />
                </div>
                <span className="text-[13.5px] text-[#3a3732]">Complete Document Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#5A7338]" />
                </div>
                <span className="text-[13.5px] text-[#3a3732]">Government Portal Filing & Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#5A7338]" />
                </div>
                <span className="text-[13.5px] text-[#3a3732]">Secure Storage in Document Vault</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F0EDE6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[12px] text-[#6b6965] font-light">
                Statutory government fees (MCA, GST dept., stamp duty) are non-negotiable and charged at actuals.
              </div>
              <Link
                href="/start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[14px] font-bold rounded-full transition-all shadow-md shrink-0"
              >
                Proceed with Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Value banner */}
          <div className="mt-8 bg-[#2b2723] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-olive-400 mb-2">All-Access Platform Membership</div>
              <div className="text-[20px] font-bold text-white leading-tight">
                Get every legal & compliance service at member rates<br />
                <span className="text-[#a39e98] text-[15px] font-light">Starting at just ₹658/month for your entire startup.</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[13px] font-bold rounded-full transition-all whitespace-nowrap"
              >
                Start 14-Day Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="text-[12px] text-[#a39e98] hover:text-white font-medium text-center transition-colors"
              >
                View all membership plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FEATURE GRID ─────────────────────────────────────── */}
      {service.ctaTitle && (
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-b border-[#E5E1D6]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-4">{service.ctaTitle}</h2>
              {service.ctaDescription && (
                <p className="text-[16px] text-[#6b6965] font-light leading-relaxed">{service.ctaDescription}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. FAQs ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-b border-[#E5E1D6]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-3">
              Frequently asked questions
            </h2>
            <p className="text-[15px] text-[#6b6965] font-light">
              Still unsure?{" "}
              <Link href="/contact" className="text-olive-700 font-medium hover:underline">
                Talk to a CA directly.
              </Link>
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-[#E5E1D6] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-[14.5px] font-semibold text-[#2b2723] pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#6b6965] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[13.5px] text-[#4a4642] leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#2b2723]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-olive-400 mb-5">
            Ready to get started?
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] font-medium text-white leading-[1.1] mb-5">
            {service.heroTitle}
            <br />
            <span className="text-olive-400 italic">at 50% of market rate.</span>
          </h2>
          <p className="text-[16px] text-[#a39e98] font-light max-w-xl mx-auto mb-10">
            ₹658 a month. CA-managed execution. One login for every legal and compliance service your startup needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[15px] font-bold rounded-full transition-all shadow-lg shadow-olive-900/30"
            >
              Start 14-Day Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white text-[15px] font-medium rounded-full border border-white/15 transition-all"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
