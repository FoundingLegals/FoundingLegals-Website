"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, Star, ShieldCheck, FileText, Building2, Calculator, Headphones } from "lucide-react";
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
    question: "Is Partnership Firm Registration mandatory in India?",
    answer: "Registration under the Indian Partnership Act, 1932 is optional but highly recommended. An unregistered partnership firm cannot enforce contractual rights in court against third parties or co-partners."
  },
  {
    question: "What is a Partnership Deed?",
    answer: "A Partnership Deed is a written legal instrument executed on stamp paper by all partners. It details partner names, business objectives, capital contributions, profit-sharing ratios, interest on capital, and dispute resolution rules."
  },
  {
    question: "How long does it take to register a Partnership Firm with FoundingLegals?",
    answer: "Drafting the Partnership Deed and executing stamp duty takes 2 to 3 days. Full registration with the Registrar of Firms (ROF) typically takes 7 to 10 working days depending on state processing timelines."
  },
  {
    question: "Can a Partnership Firm open a Current Bank Account?",
    answer: "Yes. Once the Partnership Deed is executed and a firm-level PAN card is issued by NSDL/UTIITSL, you can open a Current Bank Account in the firm's name."
  },
  {
    question: "What is the maximum number of partners allowed in a Partnership Firm?",
    answer: "Under Rule 10 of the Companies (Miscellaneous) Rules, 2014, the maximum number of partners permitted in a traditional partnership firm is 50."
  },
  {
    question: "How is a Partnership Firm taxed in India?",
    answer: "A Partnership Firm is taxed as an independent entity at a flat income tax rate of 30% (plus applicable surcharge and 4% Health & Education Cess)."
  }
];

// --- PRICING PLANS DATA ---
const ALL_PARTNERSHIP_FEATURES = [
  "Partnership Deed Drafting",
  "Stamp Duty & Notarization Support",
  "Firm PAN & TAN Allotment",
  "Registrar of Firms (ROF) Application",
  "ROF Form A & Form B Filing",
  "Current Bank Account Assistance",
  "MSME / Udyam Registration",
  "GST Registration Filing",
  "Trademark Class Search & Registration"
];

const PARTNERSHIP_PLANS = [
  {
    name: "BASIC",
    price: "₹1,999",
    feeSubtext: "+ Stamp Duty",
    description: "Comprehensive partnership legal drafting, stamp execution, and firm registration kit.",
    badge: "Essential Package",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    serviceName: "Partnership Firm - BASIC Plan (₹1,999 + Stamp Duty)",
    included: [
      "Custom Partnership Deed Drafting",
      "Stamp Duty & Notarization Support",
      "Firm PAN Card Allotment",
      "Firm TAN (Tax Deduction) Allotment",
      "Current Bank Account Opening Support",
      "Partner Profit-Sharing & Capital Clause Drafting",
      "ROF (Registrar of Firms) Filing Guidance",
      "MSME / Udyam Certificate Support",
      "Business Commencement Checklist",
      "Dedicated Legal & CA Expert Advisory"
    ]
  }
];

export default function PartnershipRegistrationLayout() {
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
            Starts at ₹1,999 + Stamp Duty
          </span>
          <span className="text-[11px] font-bold text-brown-600 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/30 inline-block">
            Fast Track 7-10 Days Registration
          </span>
        </div>

        <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[50px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
          Partnership Firm Registration in India
        </h1>
        
        <div className="text-[15px] md:text-[16px] text-brown-600 leading-relaxed space-y-4 max-w-5xl">
          <p>
            A <strong>Partnership Firm</strong> is a popular business structure governed by the <strong>Indian Partnership Act, 1932</strong>. It is formed when two or more individuals agree to share the profits and responsibilities of a business venture under a mutual agreement known as a <strong>Partnership Deed</strong>.
          </p>
          <p>
            FoundingLegals provides CA/CS expert legal assistance to draft custom partnership deeds, execute non-judicial stamp duty, obtain firm-level PAN & TAN, and submit formal registration filings with the Registrar of Firms (ROF) in your respective state.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => navigateToApp("Partnership Firm Registration")}
            className="px-6 py-3.5 bg-olive-600 hover:bg-olive-705 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            <span>Opt Service &amp; Register</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => talkToExpert("Partnership Firm Registration")}
            className="px-6 py-3.5 bg-white hover:bg-olive-50 text-olive-750 border border-olive-600/40 font-semibold text-[13px] rounded-full transition-all cursor-pointer shadow-2xs flex items-center gap-2 shrink-0"
          >
            <Headphones className="w-4 h-4 text-olive-700" />
            <span>Talk to Expert</span>
          </button>
          <button
            type="button"
            onClick={() => openCostEstimator({ entityType: "partnership" })}
            className="px-5 py-3.5 bg-white hover:bg-brown-50 text-brown-900 border border-brown-300 font-semibold text-[13px] rounded-full transition-all cursor-pointer shadow-2xs flex items-center gap-2 shrink-0"
          >
            <Calculator className="w-4 h-4 text-olive-700" />
            <span>Estimate Stamp Duty &amp; Cost</span>
          </button>
          <div className="text-[12.5px] text-gray-500">
            Professional fee starts at <strong className="text-olive-750 font-bold">₹1,999</strong> + state stamp duty.
          </div>
        </div>
      </section>

      {/* ── PRICING PLANS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="border-t border-gray-200 mb-8" />

        <div className="space-y-6 pt-4 mb-10 pb-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#1A1917] mb-2 tracking-tight">
              Select Your Partnership Registration Plan
            </h2>
            <p className="text-[14px] text-gray-600 max-w-lg mx-auto font-light leading-relaxed">
              Transparent package covering custom legal deed drafting, state stamp paper notarization, PAN, and TAN allotment.
            </p>
          </div>

          <div className="w-full">
            {PARTNERSHIP_PLANS.map((plan) => (
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
                      {plan.badge || "Essential Package"}
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#5B6836] bg-white/80 px-3 py-1 rounded-full border border-olive-200/60 shadow-2xs">
                      Deed Drafting &amp; Tax Kit
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-olive-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Fast Track 3–5 Working Days Execution</span>
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
                            State stamp paper at actuals
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#1A1917] mb-2">
                        {plan.name} Partnership Registration Kit
                      </h3>
                      <p className="text-[13.5px] text-gray-600 leading-relaxed font-light mb-6">
                        {plan.description} Complete legal structuring to protect partner liabilities and establish clear profit sharing.
                      </p>

                      {/* Trust Highlights */}
                      <div className="space-y-2 bg-white/80 border border-olive-200/70 rounded-2xl p-4 shadow-2xs">
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Custom Partnership Deed drafted by corporate lawyers</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Firm PAN &amp; TAN allotment for corporate banking</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Notarization &amp; ROF guidance with dedicated legal support</span>
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
                          onClick={() => openCostEstimator({ entityType: "partnership" })}
                          className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-[#F2F6EC] text-[#2E4218] border border-[#2E4218]/40 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Calculator className="w-3.5 h-3.5 text-olive-700" />
                          <span>Estimate Cost</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-gray-500 text-center font-light pt-1">
                        Zero hidden charges · Official stamp duty receipts &amp; legal verification
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
                        <span>Indian Partnership Act, 1932 compliant drafting by Senior Advocates.</span>
                      </div>
                      <span className="text-olive-800 font-semibold cursor-pointer hover:underline" onClick={() => openCostEstimator({ entityType: "partnership" })}>
                        View Stamp Duty Calculator →
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
              A Partnership Firm is an agreement between two or more individuals to join forces and operate a lawful commercial enterprise. Regulated by the Indian Partnership Act, 1932, a partnership firm allows entrepreneurs to pool financial resources, operational expertise, and managerial responsibility without complex corporate formalities.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Although registration with the Registrar of Firms (ROF) is optional under Indian law, obtaining formal registration confers major legal advantages—including the right to sue third parties in the firm&apos;s name and file legal recovery claims. FoundingLegals handles drafting, notarization, stamp duty execution, and ROF state submissions seamlessly.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(a) Simple Formation</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Requires minimum 2 partners and can be set up quickly with minimal initial capital requirements.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(b) Customized Partnership Deed</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Complete flexibility to specify capital contribution, profit splits, salary, interest, and exit terms.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(c) Independent Firm PAN</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Issued a dedicated firm-level PAN card for opening current bank accounts and tax filings.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(d) Low Compliance Overhead</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  No mandatory annual MCA filings or statutory board meeting mandates.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Eligibility */}
          <article id="eligibility" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Eligibility Criteria for Partnership Firm Registration
            </h2>
            <div className="space-y-4">
              {[
                { title: "Minimum 2 Partners & Maximum 50", desc: "Requires at least 2 partners who are legally competent to contract (major of age, sound mind). Maximum capacity is capped at 50 partners." },
                { title: "Lawful Business Purpose", desc: "The agreement must be formed to execute a legal commercial or professional business activity aimed at making a profit." },
                { title: "Unique Firm Name", desc: "The proposed name must not conflict with active registered trademarks or existing corporate entities in India." },
                { title: "Registered Business Premises", desc: "Must possess a physical office address in India with a recent utility bill and landlord NOC." },
                { title: "Partnership Deed Execution", desc: "Execution of a written Partnership Deed on non-judicial stamp paper of appropriate state value." }
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
              Benefits of Registering a Partnership Firm
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">1. Enforcement of Legal Rights</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Registered partnership firms have full legal standing to file civil lawsuits against defaulting clients, suppliers, or co-partners for breach of contract.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">2. Shared Financial & Managerial Risk</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Capital contributions and operational workload are distributed among partners, providing resilience and combined skills.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">3. Flexible Profit-Sharing & Terms</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Partners can freely define profit ratios, interest on capital, partner salaries, and management roles inside the deed.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">4. Easy Conversion to LLP or Pvt Ltd</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Registered partnership firms can easily convert into a Limited Liability Partnership (LLP) or Private Limited Company as operations scale.
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
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 1: Drafting the Partnership Deed</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Draft customized clauses specifying firm name, partner details, profit ratios, and operational terms.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 2: Non-Judicial Stamp Duty Execution</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Print the deed on non-judicial stamp paper of prescribed state value and execute signatures with notary attestation.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 3: Firm PAN &amp; TAN Allotment</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Apply for firm-level PAN and TAN cards using Form 49A with NSDL/UTIITSL.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 4: Registrar of Firms (ROF) Filing</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Submit Form A / Form 1 to the Registrar of Firms with certified deed copy and office address proof to receive the Registration Certificate.</p>
              </div>
            </div>

            <div className="pt-4 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Documents for Partners</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> PAN Card of all partners (Mandatory)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Aadhaar Card / Passport / Voter ID</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Recent Bank Statement / Utility Bill (&lt; 30 days)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Passport-size photographs</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Registered Office Premises Proof</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Electricity or Water Bill (&lt; 30 days old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Rent Agreement / Lease Deed / Ownership Tax Receipt</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Signed No Objection Certificate (NOC) from landlord</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 5: Fees */}
          <article id="fees" className="scroll-mt-36 bg-[#FAF9F6] border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Partnership Registration Fee Breakdown
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
                    <td className="p-4 font-semibold text-[#1A1917]">Partnership Deed Drafting</td>
                    <td className="p-4">Included</td>
                    <td className="p-4">Tailored deed drafted by legal experts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Non-Judicial Stamp Duty</td>
                    <td className="p-4">₹500 – ₹2,000</td>
                    <td className="p-4">State-wise stamp duty based on capital</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Firm PAN &amp; TAN Cards</td>
                    <td className="p-4">₹150 – ₹300</td>
                    <td className="p-4">Government processing fee</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Registrar of Firms (ROF) Application</td>
                    <td className="p-4">State Fee</td>
                    <td className="p-4">State-specific ROF filing fee</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">FoundingLegals Professional Fee</td>
                    <td className="p-4">Starts at ₹1,999</td>
                    <td className="p-4">Complete drafting, notarization, &amp; filing assistance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 6: Checklist */}
          <article id="checklist" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Pre &amp; Post-Registration Checklist
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Pre-Registration Checklist</h4>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Select unique firm name</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Draft Partnership Deed with capital contributions &amp; profit splits</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Execute stamp paper notarization</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Collect PAN, Aadhaar, and office utility bill</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Post-Registration Checklist</h4>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Receive ROF Registration Certificate</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Receive firm PAN &amp; TAN cards</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Open Current Bank Account in firm name</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Apply for GST &amp; MSME (Udyam) registration</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 7: Why FoundingLegals */}
          <article id="why-foundinglegals" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Why FoundingLegals for Partnership Firm Registration?
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Tailored Legal Deed Drafting", desc: "Expert lawyers draft custom partnership deeds covering all operational contingencies, capital splits, and dispute resolution." },
                { title: "2. Fast 7–10 Days Processing", desc: "Fast-track execution from stamp paper purchase to ROF filing." },
                { title: "3. Transparent Flat Fee", desc: "No hidden charges. Clear professional fee starting at ₹1,999." },
                { title: "4. End-to-End Tax & Bank Support", desc: "Assistance with firm PAN, TAN, current bank account opening, and MSME/GST registrations." }
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
