"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, Star, ShieldCheck, UserCheck, FileText, Calculator, Headphones } from "lucide-react";
import { openCostEstimator } from "@/lib/pricingEngineData";
import { navigateToApp, talkToExpert } from "@/lib/appNavigation";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "benefits", label: "Benefits" },
  { id: "process-documents", label: "Process & Documents" },
  { id: "fees", label: "Fees" },
  { id: "checklist", label: "Checklist" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "Is formal government registration mandatory for a Sole Proprietorship?",
    answer: "No single central registration certificate exists specifically for a Sole Proprietorship in India. However, to open a business Current Bank Account and legally trade, you must obtain government entity proofs such as GST Registration, MSME (Udyam) Registration, or a Shop & Establishment License."
  },
  {
    question: "Can I open a Current Bank Account for my Sole Proprietorship?",
    answer: "Yes. Banks require at least two government registration certificates in the firm's trade name (e.g. GST Certificate and Udyam Registration Certificate) along with the proprietor's PAN card and office address proof."
  },
  {
    question: "Can I choose any name for my Sole Proprietorship?",
    answer: "Yes, you can choose any unique business name provided it does not infringe on registered trademarks or contain restricted words (such as 'National', 'Government', or 'Crown')."
  },
  {
    question: "How is a Sole Proprietorship taxed in India?",
    answer: "A Sole Proprietorship is not taxed as a separate corporate entity. The income of the proprietorship is treated as the personal income of the proprietor and taxed according to individual income tax slab rates."
  },
  {
    question: "Can I convert my Sole Proprietorship into a Private Limited Company or LLP later?",
    answer: "Yes, as your business grows, you can easily convert your Sole Proprietorship into an LLP or Private Limited Company by executing an asset transfer agreement and completing MCA incorporation."
  },
  {
    question: "How long does Sole Proprietorship setup take with FoundingLegals?",
    answer: "FoundingLegals completes MSME (Udyam) registration, GST registration, and bank account documentation in just 3 to 5 working days."
  }
];

// --- PRICING PLANS DATA ---
const ALL_PROPRIETORSHIP_FEATURES = [
  "MSME / Udyam Registration Certificate",
  "GST Registration Filing",
  "Current Bank Account Assistance",
  "Shop & Establishment License Guidance",
  "CA Consultation & Tax Advice",
  "Trademark Class Search & Filing",
  "Invoice & Billing Templates"
];

const PROPRIETORSHIP_PLANS = [
  {
    name: "BASIC",
    price: "₹1,999",
    feeSubtext: "+ Govt Fee",
    description: "Complete proprietorship initiation kit with MSME registration and banking enablement.",
    badge: "Essential Setup",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    serviceName: "Sole Proprietorship - BASIC Plan (₹1,999 + Govt Fee)",
    included: [
      "MSME / Udyam Registration Certificate",
      "Current Bank Account Opening Support",
      "Shop & Establishment License Guidance",
      "GST Registration Filing Assistance",
      "Official Invoicing & Billing Templates",
      "Proprietor Declaration & Resolution Drafts",
      "Government MSME Portal Profile Setup",
      "Business Commencement Checklist",
      "Quarterly Compliance & Tax Advisory",
      "Dedicated Legal & CA Expert Support"
    ]
  }
];

export default function SoleProprietorshipRegistrationLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const item of TABS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2c2925]">
      
      {/* ── HERO HEADER SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-4 py-1.5 rounded-full border border-olive-200/40 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-650 animate-pulse" />
            Starts at ₹999 + Govt Fee
          </span>
          <span className="text-[11px] font-bold text-brown-600 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/30 inline-block">
            Fast 3-5 Days Setup
          </span>
        </div>

        <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[50px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
          Sole Proprietorship Registration in India
        </h1>
        
        <div className="text-[15px] md:text-[16px] text-brown-600 leading-relaxed space-y-4 max-w-5xl">
          <p>
            A <strong>Sole Proprietorship</strong> is the simplest and most common business model in India for individual entrepreneurs, freelancers, traders, and small business owners. Owned and managed by a single individual, it requires minimal regulatory compliance and offers complete operational control.
          </p>
          <p>
            FoundingLegals helps individual business owners obtain official government registrations—including <strong>MSME / Udyam Registration</strong>, <strong>GST Registration</strong>, and <strong>Shop &amp; Establishment Licensing</strong>—enabling you to open a business Current Bank Account effortlessly.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => navigateToApp("Sole Proprietorship Registration")}
            className="px-6 py-3.5 bg-olive-600 hover:bg-olive-705 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            <span>Opt Service &amp; Register</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => talkToExpert("Sole Proprietorship Registration")}
            className="px-6 py-3.5 bg-white hover:bg-olive-50 text-olive-750 border border-olive-600/40 font-semibold text-[13px] rounded-full transition-all cursor-pointer shadow-2xs flex items-center gap-2 shrink-0"
          >
            <Headphones className="w-4 h-4 text-olive-700" />
            <span>Talk to Expert</span>
          </button>
          <button
            type="button"
            onClick={() => openCostEstimator({ entityType: "sole_prop" })}
            className="px-5 py-3.5 bg-white hover:bg-brown-50 text-brown-900 border border-brown-300 font-semibold text-[13px] rounded-full transition-all cursor-pointer shadow-2xs flex items-center gap-2 shrink-0"
          >
            <Calculator className="w-4 h-4 text-olive-700" />
            <span>Estimate Setup Cost</span>
          </button>
          <div className="text-[12.5px] text-gray-500">
            Professional fee starts at <strong className="text-olive-750 font-bold">₹1,999</strong> + actual government fees.
          </div>
        </div>
      </section>

      {/* ── PRICING PLANS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="border-t border-gray-200 mb-8" />

        <div className="space-y-6 pt-4 mb-10 pb-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#1A1917] mb-2 tracking-tight">
              Select Your Sole Proprietorship Package
            </h2>
            <p className="text-[14px] text-gray-600 max-w-lg mx-auto font-light leading-relaxed">
              Transparent package designed to establish your official business legal identity, tax certifications, and current bank account.
            </p>
          </div>

          <div className="w-full">
            {PROPRIETORSHIP_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="w-full bg-gradient-to-br from-[#FAFBF8] via-white to-[#F2F6EC] rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#48592A]/80 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative Subtle Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-olive-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                {/* Top Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D8E4CA]/60">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E4ECDC] text-[#2C3E14] border border-[#CCD8B8]">
                      <Star className="w-3.5 h-3.5 fill-[#2C3E14]" />
                      {plan.badge || "Essential Setup"}
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#5B6836] bg-white/80 px-3 py-1 rounded-full border border-olive-200/60 shadow-2xs">
                      MSME &amp; Banking Kit
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-olive-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Fast Track 2–4 Working Days Execution</span>
                  </div>
                </div>

                {/* Main Landscape 2-Column Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  
                  {/* LEFT COLUMN: Pricing, Plan Meta & CTAs */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-r lg:border-[#D8E4CA]/70 lg:pr-8">
                    <div>
                      {/* Price Badge */}
                      <div className="mb-3 flex items-baseline gap-2.5">
                        <span className="text-[44px] sm:text-[52px] font-extrabold font-serif text-[#1A1917] tracking-tight leading-none">
                          {plan.price}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold text-olive-900 leading-tight">
                            {plan.feeSubtext}
                          </span>
                          <span className="text-[11px] text-gray-500 font-medium">
                            Transparent flat pricing
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#1A1917] mb-2">
                        {plan.name} Proprietorship Launch Kit
                      </h3>
                      <p className="text-[13.5px] text-gray-600 leading-relaxed font-light mb-6">
                        {plan.description} End-to-end statutory registrations ensuring your trade entity is legally empowered to accept business payments.
                      </p>

                      {/* Trust Highlights */}
                      <div className="space-y-2 bg-white/80 border border-olive-200/70 rounded-2xl p-4 shadow-2xs">
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Official MSME Udyam Certificate with lifetime validity</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Bank account resolution &amp; documentation verification</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Shop Act / Trade license guidance &amp; billing templates</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="button"
                        onClick={() => navigateToApp(plan.serviceName)}
                        className="w-full py-4 px-6 rounded-xl font-bold text-[14px] bg-[#2E4218] hover:bg-[#1E2E0F] text-white transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <span>Opt Service &amp; Register</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => talkToExpert(plan.serviceName)}
                          className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-olive-50 text-[#2E4218] border border-[#2E4218]/40 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Headphones className="w-3.5 h-3.5 text-[#2E4218]" />
                          <span>Talk to Expert</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => openCostEstimator({ entityType: "sole_prop" })}
                          className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-[#F2F6EC] text-[#2E4218] border border-[#2E4218]/40 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Calculator className="w-3.5 h-3.5 text-olive-700" />
                          <span>Estimate Cost</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-gray-500 text-center font-light pt-1">
                        Zero hidden charges · Official MSME portal filing &amp; compliance assurance
                      </p>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: What's Included Grid */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[11.5px] font-extrabold uppercase tracking-widest text-[#48592A] flex items-center gap-1.5">
                          <span>What&apos;s Included in This Package</span>
                          <span className="text-[10.5px] font-bold text-olive-800 bg-olive-100/80 px-2 py-0.5 rounded-full border border-olive-200">
                            {plan.included.length} Deliverables
                          </span>
                        </p>
                        <span className="text-[11.5px] text-gray-500 font-medium hidden sm:inline">
                          Complete Initiation Kit
                        </span>
                      </div>

                      {/* Deliverables Grid in 2 Columns */}
                      <ul className="grid sm:grid-cols-2 gap-3 text-[13px]">
                        {plan.included.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/70 hover:bg-white border border-[#D8E4CA]/50 hover:border-[#48592A]/40 transition-all duration-200 shadow-2xs leading-snug"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#E4ECDC] text-[#2C3E14] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                            <span className="font-semibold text-[#1A1917]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Helper Strip */}
                    <div className="mt-6 pt-4 border-t border-[#D8E4CA]/50 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 bg-white/50 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-olive-700 shrink-0" />
                        <span>Eligible for MSME collateral-free loans, subsidies &amp; priority bank accounts.</span>
                      </div>
                      <span className="text-olive-800 font-semibold cursor-pointer hover:underline" onClick={() => openCostEstimator({ entityType: "sole_prop" })}>
                        View Cost Estimator →
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY TAB NAVIGATION & DETAILED SECTIONS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Sticky Tab Bar */}
        <div className="sticky top-20 z-30 mb-10 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E5E1D6] p-2 shadow-sm">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-[13.5px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#EBF3FF] text-[#1E3A8A] border border-[#BFDBFE] font-bold shadow-xs"
                      : "text-[#5C5954] hover:text-[#1A1917] hover:bg-gray-50 border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Sections */}
        <div className="space-y-12">

          {/* Section 1: Overview */}
          <article id="overview" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Overview
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              A Sole Proprietorship is an unincorporated business structure owned and operated by one person. Under Indian tax laws, the business and the owner are treated as a single legal entity. It is ideal for small business owners, micro-enterprises, consultants, and shopkeepers seeking immediate commercial launch with minimal overhead.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              While there is no separate MCA charter for a proprietorship, Indian commercial banks require two valid government registration certificates to open a business Current Account under RBI Know Your Customer (KYC) guidelines. FoundingLegals secures your <strong>Udyam (MSME) Certificate</strong> and <strong>GST Registration</strong> to fulfill all banking and legal requirements.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(a) Complete Operational Control</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  The sole proprietor enjoys 100% decision-making authority and retains all business profits.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(b) Quick &amp; Low-Cost Setup</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Lowest formation cost with no complex Articles of Association or mandatory corporate board meetings.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(c) Taxed Under Individual Slabs</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Business income is filed under individual Income Tax Returns (ITR-3 / ITR-4) with slab-rate benefits.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(d) Easy Business Dissolution</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Can be closed or converted into an LLP / Pvt Ltd at any time with minimal formality.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Eligibility */}
          <article id="eligibility" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Eligibility Criteria for Sole Proprietorship
            </h2>
            <div className="space-y-4">
              {[
                { title: "Single Indian Resident Citizen", desc: "Must be a single individual who is a resident Indian citizen above 18 years of age." },
                { title: "Valid Personal PAN & Aadhaar", desc: "The proprietor must possess an active personal PAN card and Aadhaar card linked with an active mobile number." },
                { title: "Business Name Choice", desc: "A unique trade name that does not infringe on existing corporate names or registered trademarks." },
                { title: "Commercial or Residential Address", desc: "Valid physical office or residential premises address in India with a recent electricity bill and NOC." }
              ].map((req, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl items-start">
                  <div className="w-8 h-8 rounded-full bg-[#5A7338]/10 border border-[#5A7338]/20 text-[#5A7338] font-bold flex items-center justify-center shrink-0 mt-0.5 text-[13px]">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">{req.title}</h4>
                    <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 3: Benefits */}
          <article id="benefits" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Benefits of Sole Proprietorship Setup
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">1. Minimum Government Compliance</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  No mandatory annual ROC filings, board resolutions, or public financial disclosures.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">2. Full Business Confidentiality</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Financial records and business strategies remain private to the proprietor without public inspection access.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">3. Direct Tax Benefits &amp; Presumptive Tax</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Eligible for Section 44AD / 44ADA presumptive taxation schemes, reducing accounting and auditing burdens.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">4. Priority MSME Scheme Benefits</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Access to collateral-free bank loans (CGTMSE), lower interest rates, and MSME government subsidies.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4: Process & Documents */}
          <article id="process-documents" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Step-by-Step Registration Process &amp; Required Documents
            </h2>
            <div className="space-y-4">
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 1: Trade Name Selection &amp; Aadhaar Linkage</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Finalize unique business name and verify proprietor Aadhaar OTP authentication.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 2: MSME / Udyam Registration Certificate</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Obtain lifetime MSME (Udyam) Registration Certificate from the Ministry of MSME.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 3: GST Registration Application</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Submit Form GST REG-01 on the GST portal to obtain 15-digit GSTIN for your trade name.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 4: Current Bank Account Opening</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Submit Udyam &amp; GST certificates to your preferred bank to open a dedicated Current Account.</p>
              </div>
            </div>

            <div className="pt-4 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Proprietor Personal Documents</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> PAN Card of Proprietor (Mandatory)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Aadhaar Card (Linked with active mobile)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Cancelled Cheque / Bank Statement</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Passport-size photograph</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Business Address Proof</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Electricity or Water Bill (&lt; 30 days old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Rent Agreement / Ownership Tax Receipt</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> No Objection Certificate (NOC) from property owner</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 5: Fees */}
          <article id="fees" className="scroll-mt-36 bg-[#FAF9F6] border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Sole Proprietorship Registration Fee Breakdown
            </h2>
            <div className="overflow-x-auto border border-[#E5E1D6] rounded-2xl bg-white">
              <table className="w-full text-left border-collapse text-[13.5px]">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E5E1D6] text-[#1A1917] font-serif font-semibold">
                    <th className="p-4">Fee Component</th>
                    <th className="p-4">Amount (₹)</th>
                    <th className="p-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E1D6] text-[#4A4642]">
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">MSME / Udyam Registration</td>
                    <td className="p-4">Included</td>
                    <td className="p-4">Government portal filing</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">GST Registration Filing</td>
                    <td className="p-4">Included in Standard Plan</td>
                    <td className="p-4">Filing &amp; GSTIN ARN generation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Current Bank Account Support</td>
                    <td className="p-4">Included</td>
                    <td className="p-4">Bank resolution &amp; KYC documentation support</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">FoundingLegals Professional Fee</td>
                    <td className="p-4">Starts at ₹999</td>
                    <td className="p-4">Complete setup &amp; documentation support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 6: Checklist */}
          <article id="checklist" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Setup Checklist
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Pre-Filing Requirements</h4>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Select trade name for business</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Verify PAN and Aadhaar mobile linking</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Obtain electricity bill &amp; landlord NOC</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Post-Filing Tasks</h4>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Download Udyam &amp; GST certificates</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Open Current Bank Account in trade name</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Maintain GST return filings &amp; annual ITR</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 7: Why FoundingLegals */}
          <article id="why-foundinglegals" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Why FoundingLegals for Sole Proprietorship?
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Rapid 3–5 Days Turnaround", desc: "Instant Udyam & GST application filings for quick bank account activation." },
                { title: "2. 100% Upfront Fixed Pricing", desc: "No surprise fees. Clear packages starting at ₹999." },
                { title: "3. Guaranteed Bank KYC Compliance", desc: "We provide dual government certificates required by major banks for current account opening." },
                { title: "4. Future Conversion Guidance", desc: "Seamless guidance when you are ready to convert into a Private Limited Company or LLP." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                  <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-2">{item.title}</h4>
                  <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Section 8: FAQ's */}
          <article id="faqs" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border border-[#E5E1D6] rounded-2xl overflow-hidden transition-all bg-[#FAF9F6]">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50/50"
                    >
                      <span className="font-serif text-[15px] font-semibold text-[#1A1917] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#5A7338]" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-[14px] text-[#4A4642] leading-relaxed border-t border-[#E5E1D6] pt-4 bg-white font-light">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </article>

        </div>
      </section>

      {/* ── Direct application routing active: in-page form modal removed ── */}

    </div>
  );
}
