"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, Search, Star, ShieldCheck, Building2, FileText, Award } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "benefits", label: "Benefits" },
  { id: "process-documents", label: "Process & Documents" },
  { id: "fees", label: "Fees" },
  { id: "compliances", label: "Compliances" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is a Public Limited Company?",
    answer: "A Public Limited Company (PLC) is a corporate business structure registered under the Indian Companies Act, 2013. It is owned by shareholders, offers limited liability protection, and has the legal authority to issue shares and raise capital from the general public or institutional investors."
  },
  {
    question: "What is the minimum requirement of directors and shareholders for a Public Limited Company?",
    answer: "A Public Limited Company requires a minimum of 7 shareholders (with no maximum limit) and a minimum of 3 directors (at least one must be a resident of India)."
  },
  {
    question: "Is there a minimum paid-up capital requirement for a Public Limited Company?",
    answer: "Under current MCA regulations, the mandatory minimum paid-up capital requirement of ₹5 Lakhs has been removed. However, substantial capital is recommended based on your business operations."
  },
  {
    question: "Can a Public Limited Company issue shares to the public immediately after incorporation?",
    answer: "After receiving the Certificate of Incorporation and filing Form INC-20A (Commencement of Business), a Public Limited Company can issue shares privately. To make an Initial Public Offering (IPO) on stock exchanges (BSE/NSE), it must comply with SEBI ICDR regulations."
  },
  {
    question: "What is the difference between a Private Limited Company and a Public Limited Company?",
    answer: "A Private Limited Company restricts share transferability and caps members at 200 without public fundraising. A Public Limited Company allows freely transferable shares, uncapped shareholders, and public capital raising."
  },
  {
    question: "Is it mandatory to appoint a Company Secretary (CS) in a Public Limited Company?",
    answer: "Yes, under Section 203 of the Companies Act, 2013, every Public Limited Company having a paid-up share capital of ₹10 Crore or more must appoint a whole-time Company Secretary."
  },
  {
    question: "How long does it take to register a Public Limited Company with FoundingLegals?",
    answer: "With complete documents and prompt client responses, FoundingLegals completes Public Limited Company incorporation in 10 to 14 working days."
  },
  {
    question: "What tax rate applies to a Public Limited Company in India?",
    answer: "Domestic Public Limited Companies in India are taxed at a concessional corporate income tax rate of 22% (plus applicable surcharge and 4% health & education cess) under Section 115BAA of the Income Tax Act."
  }
];

// --- PRICING PLANS DATA ---
const ALL_PUBLIC_FEATURES = [
  "Company Name Approval (RUN/SPICe+ Part A)",
  "DSC for 3 Directors",
  "DIN Allotment for 3 Directors",
  "Drafting MOA & AOA",
  "SPICe+ Part B Filing with MCA CRC",
  "Certificate of Incorporation (COI)",
  "Corporate PAN + TAN",
  "AGILE-PRO-S (GST/EPFO/ESIC/Bank Account)",
  "Commencement of Business Filing (INC-20A)",
  "Dedicated Corporate CS Manager",
  "Share Certificate Templates",
  "Statutory Register Setup",
  "Trademark Class Search & Filing",
  "Investor Pitch Deck Assistance"
];

const PUBLIC_PLANS = [
  {
    name: "BASIC",
    price: "₹14,999",
    feeSubtext: "+ Govt Stamp Duty",
    description: "Standard incorporation kit for 7 shareholders and 3 directors.",
    badge: "Essential Package",
    badgeStyles: "bg-gray-100 text-gray-700 border border-gray-200/50",
    serviceName: "Public Limited Company - BASIC Plan (₹14,999 + Stamp Duty)",
    included: [
      "Company Name Approval (RUN/SPICe+ Part A)",
      "DSC for 3 Directors",
      "DIN Allotment for 3 Directors",
      "Drafting MOA & AOA",
      "SPICe+ Part B Filing with MCA CRC",
      "Certificate of Incorporation (COI)",
      "Corporate PAN + TAN",
      "AGILE-PRO-S (GST/EPFO/ESIC/Bank Account)",
      "Dedicated Corporate CS Manager"
    ]
  },
  {
    name: "STANDARD",
    price: "₹24,999",
    feeSubtext: "+ Govt Stamp Duty",
    description: "Complete incorporation package with INC-20A and statutory registers.",
    badge: "Most Popular",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    isPopular: true,
    serviceName: "Public Limited Company - STANDARD Plan (₹24,999 + Stamp Duty)",
    included: [
      "Company Name Approval (RUN/SPICe+ Part A)",
      "DSC for 3 Directors",
      "DIN Allotment for 3 Directors",
      "Drafting MOA & AOA",
      "SPICe+ Part B Filing with MCA CRC",
      "Certificate of Incorporation (COI)",
      "Corporate PAN + TAN",
      "AGILE-PRO-S (GST/EPFO/ESIC/Bank Account)",
      "Commencement of Business Filing (INC-20A)",
      "Dedicated Corporate CS Manager",
      "Share Certificate Templates",
      "Statutory Register Setup"
    ]
  },
  {
    name: "PREMIUM",
    price: "₹34,999",
    feeSubtext: "+ Govt Stamp Duty",
    description: "All-inclusive corporate launch pad with trademark filing and investor support.",
    badge: "Best Value",
    badgeStyles: "bg-brown-100 text-brown-900 border border-brown-200/30",
    serviceName: "Public Limited Company - PREMIUM Plan (₹34,999 + Stamp Duty)",
    included: [
      "Company Name Approval (RUN/SPICe+ Part A)",
      "DSC for 3 Directors",
      "DIN Allotment for 3 Directors",
      "Drafting MOA & AOA",
      "SPICe+ Part B Filing with MCA CRC",
      "Certificate of Incorporation (COI)",
      "Corporate PAN + TAN",
      "AGILE-PRO-S (GST/EPFO/ESIC/Bank Account)",
      "Commencement of Business Filing (INC-20A)",
      "Dedicated Corporate CS Manager",
      "Share Certificate Templates",
      "Statutory Register Setup",
      "Trademark Class Search & Filing",
      "Investor Pitch Deck Assistance"
    ]
  }
];

export default function PublicLimitedRegistrationLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [modalState, handleModalSubmit] = useForm("xqeyrnpp");

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

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

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
            Starts at ₹14,999 + Stamp Duty
          </span>
          <span className="text-[11px] font-bold text-brown-600 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/30 inline-block">
            Fast Track 10-14 Days MCA Process
          </span>
        </div>

        <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[50px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
          Public Limited Company Registration in India
        </h1>
        
        <div className="text-[15px] md:text-[16px] text-brown-600 leading-relaxed space-y-4 max-w-5xl">
          <p>
            A <strong>Public Limited Company (PLC)</strong> is the premier corporate structure in India designed for enterprises planning large-scale operations, public equity fundraising, or stock exchange listing (BSE/NSE). Governed by the <strong>Ministry of Corporate Affairs (MCA)</strong> under the Companies Act, 2013, a Public Limited Company provides uncapped member capacity and free transferability of shares.
          </p>
          <p>
            FoundingLegals provides end-to-end CA/CS corporate legal support—from name reservation via SPICe+ Part A to custom MOA/AOA drafting, director DIN/DSC issuance, and Certificate of Incorporation procurement.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={() => openModal("Public Limited Company Registration")}
            className="px-6 py-3.5 bg-olive-600 hover:bg-olive-705 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            Register Public Limited Company
          </button>
          <div className="text-[12.5px] text-gray-500">
            Professional fee starts at <strong className="text-olive-750 font-bold">₹14,999</strong> + actual state stamp duty.
          </div>
        </div>
      </section>

      {/* ── PRICING PLANS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="border-t border-gray-200 mb-8" />

        <div className="space-y-6 pt-4 mb-10 pb-4">
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1917] mb-2">
              Select Your Public Limited Incorporation Plan
            </h2>
            <p className="text-[13px] text-gray-500 max-w-xl">
              Transparent, CA-managed corporate setup packages with complete MCA filing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch pt-2">
            {PUBLIC_PLANS.map((plan) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={plan.name}
                  className={`group relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 overflow-hidden transform hover:-translate-y-1.5 ${
                    isPopular
                      ? "bg-[#5B6836] text-white border-2 border-[#5B6836] shadow-xl hover:shadow-[0_20px_40px_rgba(91,104,54,0.25)]"
                      : "bg-[#F8FAF4] text-[#2A3416] border border-[#D5DFBE]/70 shadow-xs hover:shadow-md hover:border-[#B4C599]"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none blur-xl group-hover:scale-110 transition-transform duration-700" />
                  )}

                  <div>
                    {plan.badge && (
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:scale-105 ${
                          isPopular
                            ? "bg-[#E2E9C8] text-[#344015]"
                            : "bg-[#E6ECDB] text-[#4F5D30] border border-[#D5DFBE]"
                        }`}>
                          {isPopular && <Star className="w-3 h-3 fill-[#344015] animate-pulse" />}
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="mb-4 flex items-baseline gap-1.5">
                      <span className={`text-[32px] font-bold font-serif tracking-tight transition-all duration-300 ${
                        isPopular ? "text-white" : "text-[#2A3416]"
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-[12px] font-normal ${
                        isPopular ? "text-white/70" : "text-gray-400"
                      }`}>
                        {plan.feeSubtext}
                      </span>
                    </div>

                    <h3 className={`font-serif text-[19px] font-bold mb-1.5 ${
                      isPopular ? "text-white" : "text-[#2A3416]"
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-[11.5px] leading-relaxed mb-6 pb-4 border-b transition-all duration-300 ${
                      isPopular
                        ? "text-white/85 border-white/10"
                        : "text-gray-550 border-[#CBD7B5]/40"
                    }`}>
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {ALL_PUBLIC_FEATURES.map((feature, fIdx) => {
                        const isIncluded = plan.included.includes(feature);
                        return (
                          <li key={fIdx} className="flex items-start gap-2.5 text-[12px] leading-snug">
                            {isIncluded ? (
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${
                                isPopular ? "text-[#E2E9C8]" : "text-olive-650"
                              }`} />
                            ) : (
                              <X className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPopular ? "text-white/20" : "text-gray-300"
                              }`} />
                            )}
                            <span className={`transition-all duration-300 ${
                              isIncluded
                                ? isPopular ? "text-white font-medium" : "text-[#2A3416] font-medium"
                                : isPopular ? "text-white/30 font-light line-through" : "text-gray-400 font-light line-through"
                            }`}>
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    onClick={() => openModal(plan.serviceName)}
                    className={`w-full py-3 rounded-full font-bold text-[12px] transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm transform group-hover:scale-[1.02] active:scale-[0.98] ${
                      isPopular
                        ? "bg-[#E2E9C8] hover:bg-[#D5DFB7] text-[#344015] font-semibold"
                        : "bg-white hover:bg-[#FDFDFD] text-[#2A3416] border border-[#CBD7B5] hover:border-[#B4C599]"
                    }`}
                  >
                    <span>Opt &amp; Register</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
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
              A Public Limited Company (PLC) is a separate legal entity registered under the Companies Act, 2013. It offers limited liability protection to its members and possesses perpetual succession. Unlike Private Limited Companies, a Public Limited Company can raise equity capital from the public, list its securities on recognized Indian stock exchanges (BSE/NSE), and accept unlimited shareholders.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              FoundingLegals provides CA/CS expert guidance throughout the incorporation lifecycle. We manage company name reservation (SPICe+ Part A), director DIN/DSC registration, Memorandum of Association (MOA) and Articles of Association (AOA) drafting, SPICe+ Part B MCA filing, PAN, TAN, and Certificate of Incorporation issuance.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(a) Public Equity Fundraising</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Authorized to raise capital via public share offerings, debentures, and institutional investors.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(b) Freely Transferable Shares</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Shareholders can buy, sell, or transfer shares freely without company-level restrictions.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(c) Separate Corporate Legal Entity</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Perpetual succession ensures the company&apos;s existence remains independent of shareholder changes.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(d) Uncapped Shareholder Capacity</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Requires a minimum of 7 shareholders with no maximum limit on member capacity.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Eligibility */}
          <article id="eligibility" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Eligibility Criteria for Public Limited Incorporation
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              To incorporate a Public Limited Company on the MCA portal, the following statutory requirements must be satisfied:
            </p>
            <div className="space-y-4">
              {[
                { title: "Minimum 7 Shareholders", desc: "Requires at least 7 shareholders (individuals or body corporates) to subscribe to the Memorandum of Association (MOA)." },
                { title: "Minimum 3 Directors", desc: "Requires at least 3 directors (individuals). At least one director must be a resident of India (stayed ≥ 120 days in India during the financial year)." },
                { title: "Digital Signature Certificate (DSC) & DIN", desc: "Class-3 Digital Signature Certificates and Director Identification Numbers (DIN) are mandatory for all directors." },
                { title: "Company Name Ending in 'Limited'", desc: "The proposed corporate name must end with the suffix 'Limited' and comply with MCA Naming Guidelines." },
                { title: "Registered Office Address", desc: "Must possess a valid physical commercial or registered address in India supported by a utility bill and owner NOC." }
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
              Benefits of Registering a Public Limited Company
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">1. Ability to Raise Capital via Public Offering</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Only Public Limited Companies can issue initial public offerings (IPO), rights issues, or debentures to secure large-scale equity financing.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">2. Enhanced Corporate Brand Prestige</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Public Limited Companies carry high regulatory transparency, building immense trust with banks, financial institutions, vendor partners, and investors.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">3. Uncapped Member Growth</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  No ceiling on the number of members allows widespread public shareholder participation and employee stock ownership plans (ESOPs).
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">4. Limited Personal Asset Risk</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Shareholders&apos; personal financial liability is strictly capped at the nominal value of shares subscribed.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4: Process & Documents */}
          <article id="process-documents" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Step-by-Step Incorporation Process &amp; Document Checklist
            </h2>
            <div className="space-y-4">
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 1: Obtain Digital Signatures (DSC) &amp; DIN</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Class-3 DSC obtained for all 3 proposed directors to sign electronic e-forms on MCA portal.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 2: Name Reservation (SPICe+ Part A / RUN)</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Submit up to 2 unique names ending in &apos;Limited&apos; for MCA CRC approval.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 3: Drafting Charter Documents (MOA &amp; AOA)</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Draft e-MOA (INC-33) and e-AOA (INC-34) with main business objects and internal governance clauses.</p>
              </div>
              <div className="p-5 border border-[#E5E1D6] rounded-2xl bg-[#FAF9F6]">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">Step 4: SPICe+ Part B Submission &amp; COI Issuance</h4>
                <p className="text-[13.5px] text-[#6B6965] font-light">Submit integration form with PAN, TAN, AGILE-PRO-S to receive Certificate of Incorporation with 21-digit CIN.</p>
              </div>
            </div>

            <div className="pt-4 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Documents for Directors &amp; Shareholders</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> PAN Card of all 7 shareholders &amp; 3 directors</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Passport / Voter ID / Aadhaar / Driving License</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Bank Statement / Utility Bill (&lt; 2 months old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Passport-size photographs</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Registered Office Premises Proof</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Electricity / Gas / Water Bill (&lt; 30 days old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Rent Agreement / Lease Deed / Tax Receipt</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> No Objection Certificate (NOC) from property owner</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 5: Fees */}
          <article id="fees" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Public Limited Company Registration Fee Breakdown
            </h2>
            <div className="overflow-x-auto border border-[#E5E1D6] rounded-2xl">
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
                    <td className="p-4 font-semibold text-[#1A1917]">Name Reservation (RUN / SPICe+ Part A)</td>
                    <td className="p-4">₹1,000</td>
                    <td className="p-4">MCA Fee for 2 proposed names</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">DSC for 3 Directors</td>
                    <td className="p-4">₹3,000 – ₹4,500</td>
                    <td className="p-4">Class-3 Digital Signature Certificates</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">State Stamp Duty (MOA &amp; AOA)</td>
                    <td className="p-4">Varies by State</td>
                    <td className="p-4">Based on authorized capital contribution</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">PAN + TAN + AGILE-PRO-S</td>
                    <td className="p-4">Included</td>
                    <td className="p-4">Issued automatically with incorporation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">FoundingLegals Professional Fee</td>
                    <td className="p-4">Starts at ₹14,999</td>
                    <td className="p-4">Full CA/CS corporate execution &amp; MOA/AOA drafting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 6: Compliances */}
          <article id="compliances" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Post-Incorporation Annual Regulatory Compliances
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Public Limited Companies carry strict regulatory oversight under the MCA:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-2">Commencement of Business (INC-20A)</h4>
                <p className="text-[13px] text-[#6B6965] font-light">Must file Form INC-20A within 180 days of incorporation showing capital deposit into bank account.</p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-2">Mandatory Board Meetings</h4>
                <p className="text-[13px] text-[#6B6965] font-light">Must hold minimum 4 board meetings annually with a maximum gap of 120 days between two consecutive meetings.</p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-2">Annual General Meeting (AGM)</h4>
                <p className="text-[13px] text-[#6B6965] font-light">Must convene an AGM every financial year within 6 months of financial year end.</p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-2">MCA Annual Filings (AOC-4 &amp; MGT-7)</h4>
                <p className="text-[13px] text-[#6B6965] font-light">File Form AOC-4 (Financial Statements) &amp; Form MGT-7 (Annual Return) with MCA CRC.</p>
              </div>
            </div>
          </article>

          {/* Section 7: Why FoundingLegals */}
          <article id="why-foundinglegals" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Why FoundingLegals for Public Limited Incorporation?
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Senior CA & CS Advisory", desc: "Our experienced corporate secretarial team handles complex MOA/AOA clauses and capital structure planning." },
                { title: "2. 100% Upfront Fixed Pricing", desc: "Clear itemized professional quotes starting at ₹14,999 with zero hidden charges." },
                { title: "3. Fast 10-14 Days Timeline", desc: "Dedicated submission managers ensure zero MCA form resubmission queries." },
                { title: "4. Full CS Retainership & Compliance", desc: "Complete post-incorporation CS retainership for INC-20A, board resolutions, and annual MCA filings." }
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

      {/* ── FORMSPREE MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col max-h-[90vh]">
            <div className="bg-[#FAF9F6] p-6 border-b border-gray-150 relative">
              <span className="text-[9px] font-bold text-olive-700 tracking-widest uppercase block mb-1">
                PUBLIC LIMITED INCORPORATION
              </span>
              <h3 className="font-serif text-lg font-bold text-brown-900 pr-8">
                {selectedService}
              </h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  modalState.succeeded = false;
                }}
                className="absolute top-6 right-6 text-brown-400 hover:text-brown-900 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              {modalState.succeeded ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-olive-50 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 text-olive-600" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brown-900">Application Submitted!</h4>
                  <p className="text-sm text-brown-500 max-w-sm mx-auto leading-relaxed">
                    Thank you. A senior corporate secretary from our team will contact you within 24 hours to begin your Public Limited Company filing.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      modalState.succeeded = false;
                    }}
                    className="mt-6 px-6 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <input type="hidden" name="service" value={selectedService} />

                  <div>
                    <label htmlFor="modal-name" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      required
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={modalState.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-city" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      City of Business
                    </label>
                    <input
                      id="modal-city"
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Mumbai"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={modalState.submitting}
                      className="w-full py-3 bg-olive-600 hover:bg-olive-700 disabled:bg-gray-300 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-olive-600/10"
                    >
                      {modalState.submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
