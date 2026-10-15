"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check, X, Send, ArrowRight, ChevronDown, HelpCircle, Star, Calculator, Headphones } from "lucide-react";
import { openCostEstimator } from "@/lib/pricingEngineData";
import { navigateToApp, talkToExpert } from "@/lib/appNavigation";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types" },
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "compliance-calendar", label: "Compliance Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is a Private Limited Company?",
    answer: "A Private Limited Company (Pvt Ltd) is a privately held business entity structure that is one of the most highly recommended for startups and businesses in India. It offers limited liability to its shareholders, maintains a separate legal identity from its owners, and is regulated by the Ministry of Corporate Affairs (MCA)."
  },
  {
    question: "How does Founding Legals assist in Private Limited Company Registration?",
    answer: "Founding Legals handles the entire registration process end-to-end. We acquire your Digital Signature Certificates (DSC), prepare name approval applications, draft your Memorandum of Association (MOA) and Articles of Association (AOA), submit incorporation forms with the MCA, and coordinate with the Registrar of Companies (ROC) until the Certificate of Incorporation is issued."
  },
  {
    question: "How long does it take to register a Private Limited Company in India?",
    answer: "On average, the entire incorporation process takes about 7 to 10 working days, depending on name approval turnaround times and ROC processing speeds in your state."
  },
  {
    question: "What are some major advantages of a Private Limited Company in India?",
    answer: "Key advantages include limited liability (protecting personal assets), perpetual existence (independent of owner changes), ease of raising equity capital from VCs, capability to hold property, and high credibility among banks and global vendors."
  },
  {
    question: "What is the difference between a Private Limited Company and a Limited Liability Partnership (LLP)?",
    answer: "A Pvt Ltd company is ideal for startups seeking VC funding because it can issue shares and stock options (ESOPs), whereas an LLP is managed by partners without share capital. LLPs have lower compliance requirements but are generally not preferred by equity investors."
  },
  {
    question: "What documents are required for the incorporation of a Private Limited Company?",
    answer: "You will need identity proof (PAN card for Indian nationals), address proof (Aadhaar, utility bill, or bank statement), passport-size photos of all directors, and address proof for the registered office along with a No Objection Certificate (NOC) from the landlord."
  },
  {
    question: "What are the cost and fees, including pvt. ltd. company registration govt fees?",
    answer: "The government fee depends on the company's authorized capital and state of registration. Our professional drafting fee starts at ₹1,999. The overall cost including state stamp duty, DSC, and filing fee typically ranges from ₹8,000 to ₹25,000."
  },
  {
    question: "What is a Corporate Identity Number (CIN)?",
    answer: "A Corporate Identification Number (CIN) is a unique 21-digit alphanumeric code assigned by the ROC to companies registered under the MCA. It indicates the listing status, industry classification, state code, year of incorporation, and ownership type."
  },
  {
    question: "What is the significance of share capital in a Private Limited Company in India?",
    answer: "Share capital is the amount contributed by shareholders to fund the company. There is no minimum capital requirement to incorporate, but the shares represent ownership stakes and determine voting rights and dividend distribution."
  },
  {
    question: "Can a Private Limited Company raise funds from the public?",
    answer: "No, a Private Limited Company is restricted from inviting the general public to subscribe to its shares. However, it can raise funds from angel investors, venture capital funds, and private placements."
  },
  {
    question: "How can I verify if my Private Limited Company has been registered?",
    answer: "You can search and verify the registration status of any company on the Ministry of Corporate Affairs (MCA) official portal under the 'MCA Services' tab by searching for your company name or CIN."
  },
  {
    question: "What are the requirements for Annual Compliance for a Private Limited Company?",
    answer: "Annual compliance includes holding an Annual General Meeting (AGM), appointing a statutory auditor, filing AOC-4 (financial statements), MGT-7 (annual return), DIR-3 KYC for directors, and filing corporate income tax returns (ITR-6)."
  }
];

// --- INCORPORATION PRICING PLANS DATA ---
const ALL_FEATURES = [
  "Company name help",
  "SPICe+ form in 2-3 working days",
  "Company PAN + TAN",
  "MOA + AOA",
  "PF and ESIC registration",
  "Incorporation certificate in 7-10 working days",
  "DSC preparation in 3-4 days",
  "DIN for directors",
  "Expert assisted process",
  "INC 20A / Business commencement certificate",
  "MSME Registration",
  "Startup India Registration",
  "Digital signature certificate",
  "Company DSC",
  "Trademark Registration",
  "Pitch Deck"
];

const INCORPORATION_PLANS = [
  {
    name: "BASIC",
    price: "₹1,999",
    feeSubtext: "+ Govt Fees",
    description: "Essential company registration and incorporation kit with dedicated MCA compliance.",
    badge: "Essential Setup",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    serviceName: "Pvt Ltd Company Incorporation - BASIC Plan (₹1,999 + Govt Fees)",
    included: [
      "Company name help",
      "SPICe+ form in 2-3 working days",
      "Company PAN + TAN",
      "MOA + AOA",
      "PF and ESIC registration",
      "Incorporation certificate in 7-10 working days",
      "DSC preparation in 3-4 days",
      "DIN for directors",
      "Expert assisted process",
      "INC 20A / Business commencement certificate"
    ]
  }
];

export default function CompanyIncorporationLayout() {
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

    window.addEventListener("scroll", handleScroll);
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
      
      {/* ── TOP HEADER SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14 mb-10">

          {/* LEFT: Text Content */}
          <div className="flex-1 min-w-0">
            {/* Pricing details on the top of the hero section */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[11px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-4 py-1.5 rounded-full border border-olive-200/40 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-olive-650 animate-pulse" />
                Starting at ₹1,999 + Govt Fees
              </span>
              <span className="text-[11px] font-bold text-brown-600 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/30 inline-block">
                Fast Track 7 to 10 Working Days Process
              </span>
            </div>

            <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[46px] lg:text-[48px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
              Private Limited Company Registration in India
            </h1>
            
            <div className="text-[15px] md:text-[16px] text-brown-605 leading-relaxed space-y-4 mb-8">
              <p>
                A <strong>Private Limited Company (Pvt. Ltd.)</strong> is the most popular business structure in India, especially for startups and fast-growing businesses. It offers limited liability protection to its shareholders, maintains a separate legal identity from its owners, and is highly preferred by venture capital and angel investors.
              </p>
              <p>
                With perpetual existence and the ability to easily transfer shares and raise equity capital, establishing a Private Limited Company is the gold standard for scaling your venture.
              </p>
              <p>
                Private Limited Companies in India are regulated by the <strong>Ministry of Corporate Affairs (MCA)</strong> under the Companies Act, 2013. The Registrar of Companies (ROC) oversees the incorporation process and compliance filings.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToApp("Private Limited (Pvt Ltd) Company Incorporation")}
                className="bg-[#48532B] hover:bg-olive-800 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
              >
                <span>Opt Service &amp; Register</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => talkToExpert("Private Limited (Pvt Ltd) Company Incorporation")}
                className="bg-white hover:bg-olive-50 text-[#48532B] border border-[#48532B]/40 font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-2xs inline-flex items-center gap-2 active:scale-95"
              >
                <Headphones className="w-4 h-4 text-[#48532B]" />
                <span>Talk to Expert</span>
              </button>
              <button
                type="button"
                onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                className="bg-white hover:bg-brown-50 text-brown-900 border border-brown-300 font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-2xs inline-flex items-center gap-2 active:scale-95"
              >
                <Calculator className="w-4 h-4 text-olive-700" />
                <span>Estimate State Cost</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0">
            <div className="w-full h-[320px] sm:h-[380px] lg:h-[400px] xl:h-[440px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative">
              <img
                src="/company-registration-hero.png"
                alt="Private Limited Company Registration in India"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* Pricing Cards Section centered */}
        <div className="space-y-6 pt-4 mb-10 border-b border-gray-100 pb-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif text-[22px] md:text-[26px] font-semibold text-[#1A1917] mb-2">
              Choose the Best Pvt Ltd Company Registration Plan
            </h3>
            <p className="text-[13.5px] text-gray-500">
              Select the plan that fits your business needs. Includes standard drafting, filings, and dedicated CA support.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            {INCORPORATION_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="w-full max-w-lg bg-gradient-to-b from-[#F9FAF6] via-white to-[#F4F7EE] rounded-3xl p-7 sm:p-8 border-2 border-[#48592A] shadow-xl hover:shadow-2xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Plan Badge */}
                  {plan.badge && (
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#E4ECDC] text-[#2C3E14] border border-[#CCD8B8]">
                        <Star className="w-3 h-3 fill-[#2C3E14]" />
                        {plan.badge}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6836]">
                        Flat MCA Package
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-[40px] font-extrabold font-serif text-[#1A1917] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {plan.feeSubtext}
                    </span>
                  </div>

                  <h4 className="font-serif text-[21px] font-bold text-[#1A1917] mb-1">
                    {plan.name}
                  </h4>
                  <p className="text-[12.5px] text-gray-600 mb-6 pb-4 border-b border-[#D5DFBE]/60 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Included Deliverables in 2 Columns */}
                  <div className="mb-8">
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#48592A] mb-3.5">
                      What&apos;s Included in This Package
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 text-[12.5px] text-[#2A3416]">
                      {plan.included.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                          <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#3D5620]" />
                          <span className="font-medium text-[#222B13]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
                  <button
                    onClick={() => navigateToApp(plan.serviceName)}
                    className="flex-1 w-full py-3.5 px-4 rounded-xl font-bold text-[13.5px] bg-[#2E4218] hover:bg-[#1E2E0F] text-white transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2 shadow-md hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Opt Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => talkToExpert(plan.serviceName)}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl font-semibold text-[13.5px] bg-white hover:bg-olive-50 text-[#2E4218] border border-[#2E4218]/40 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Headphones className="w-4 h-4 text-[#2E4218]" />
                    <span>Talk to Expert</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY TAB NAVIGATION & DETAILED SECTIONS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Sticky Horizontal Navigation Bar */}
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

        {/* Tab Content Sections */}
        <div className="space-y-12">

          {/* Section 1: Overview */}
          <article id="overview" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Overview
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Private limited company registration in India provides limited liability, legal independence, and access to tax benefits. Governed by the Companies Act, 2013, it requires a DSC, DIN, and documents like ID and address proof. The SPICe+ form enables combined application for name approval, incorporation, PAN, TAN, and GST. Once approved by the RoC, you receive a Certificate of Incorporation, allowing the company to operate legally, own assets, and sign contracts. Compliance tasks like annual returns and financial reporting are mandatory post-registration.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              FoundingLegals streamlines the entire process by providing comprehensive end-to-end support for private limited company registration, legal documentation, and regulatory compliance. Our expert team ensures every step is handled efficiently and accurately, while maintaining complete transparency in pricing with no hidden costs.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(a) Members &amp; Directors</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Requires a minimum of 2 directors and 2 shareholders (up to maximum 200 members). At least one director must be an Indian resident.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(b) Limited Liability</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Shareholders’ personal assets are protected. Liability is limited strictly to unpaid share capital.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(c) Separate Legal Entity</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Perpetual succession ensures the company legal existence continues independently of member or ownership changes.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(d) Transferability &amp; Public Prohibition</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Restricts public transfer of shares and prohibits public invitations for shares or public deposits.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Types */}
          <article id="types" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Types of Private Limited Company (Pvt. Ltd.)
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Depending on ownership structure, member liability, and business goals, private limited entities in India fall into the following types:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A7338] bg-olive-50 px-2.5 py-1 rounded-md mb-3 inline-block">Most Popular</span>
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">Company Limited by Shares</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  The liability of members is limited strictly to the unpaid face value of shares held by them. This is the standard structure chosen by 99% of startups and equity-funded entities in India.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B6965] bg-gray-100 px-2.5 py-1 rounded-md mb-3 inline-block">Special Purpose</span>
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">Company Limited by Guarantee</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Members guarantee to contribute a fixed sum towards company assets in the event of winding up. Commonly used by trade associations and non-profit institutions.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B6965] bg-gray-100 px-2.5 py-1 rounded-md mb-3 inline-block">Rare</span>
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">Unlimited Company</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Members have unlimited personal liability for the company debts and liabilities. Rarely incorporated in modern commercial practice.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A7338] bg-olive-50 px-2.5 py-1 rounded-md mb-3 inline-block">Solo Founder</span>
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">One Person Company (OPC)</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Enables a single promoter to incorporate a private limited structure with corporate limited liability while maintaining full sole-proprietor control.
                </p>
              </div>
            </div>
          </article>

          {/* Section 3: Requirements */}
          <article id="requirements" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Requirements for Private Limited Company Registration
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              To register a Private Limited Company under MCA rules, ensure the following eligibility parameters are satisfied:
            </p>
            <div className="space-y-4">
              {[
                { title: "Minimum 2 Directors & 2 Shareholders", desc: "A minimum of 2 individuals are required (directors and shareholders can be the same). At least one director must be an Indian resident." },
                { title: "Digital Signature Certificate (DSC) & DIN", desc: "Class-3 DSC is mandatory for all proposed directors to sign electronic e-MOA, e-AOA, and SPICe+ forms. Director Identification Numbers (DIN) are allocated during incorporation." },
                { title: "Registered Address in India", desc: "Must possess a valid registered office address in India supported by a recent utility bill (electricity/gas/water bill within 30 days) and landlord NOC." },
                { title: "Unique Company Name", desc: "The proposed name must be unique, business-descriptive, compliant with MCA naming guidelines, and clear of conflicting registered trademarks." },
                { title: "No Minimum Paid-up Capital Requirement", desc: "The Companies Act 2015 amendment removed mandatory minimum capital. You can incorporate with ₹1 paid-up capital (₹1,00,000 authorized capital recommended)." },
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

          {/* Section 4: Process */}
          <article id="process" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Step-by-Step Private Limited Company Registration Process
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              FoundingLegals guides you through every stage of the SPICe+ incorporation workflow:
            </p>
            <div className="space-y-4">
              {[
                { n: "01", title: "Obtain Digital Signature Certificate (DSC)", desc: "All proposed directors obtain Class-3 Digital Signatures for electronic filing authentication." },
                { n: "02", title: "Apply for Director Identification Number (DIN)", desc: "Each director receives a unique DIN integrated within the SPICe+ form application." },
                { n: "03", title: "Name Approval via SPICe+ Part A", desc: "Reserve your company name by submitting 2 unique proposed names to the MCA RUN / SPICe+ Part A." },
                { n: "04", title: "Draft Incorporation Documents (e-MOA & e-AOA)", desc: "Prepare Memorandum of Association (objects clause), Articles of Association (governance), INC-9 self-declarations, and DIR-2 director consent." },
                { n: "05", title: "File SPICe+ Part B & AGILE-PRO-S", desc: "Complete main incorporation filing for simultaneous PAN, TAN, EPFO, ESIC, Professional Tax, and Corporate Bank Account allocation." },
                { n: "06", title: "RoC Verification & Certificate of Incorporation", desc: "The Registrar of Companies verifies submissions and issues the official Certificate of Incorporation (COI) with 21-digit CIN." },
                { n: "07", title: "Post-Registration Setup & Form INC-20A", desc: "Open bank account, deposit share capital, appoint statutory auditor (Form ADT-1), and file Form INC-20A within 180 days." },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl items-start">
                  <div className="w-10 h-10 rounded-2xl bg-[#2B2723] text-white font-bold flex items-center justify-center shrink-0 text-[13px]">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1">{step.title}</h4>
                    <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 5: Documents */}
          <article id="documents" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Documents Required for Private Limited Company Registration
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              All documents must be self-attested and clearly scanned.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">For Indian Directors &amp; Shareholders</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>PAN Card</strong> (Mandatory for Indian nationals)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Identity Proof:</strong> Passport / Aadhaar / Voter ID / Driving License</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Address Proof:</strong> Bank statement or utility bill (&lt; 2 months old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Passport-size photographs</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">For Foreign Nationals / NRIs</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Passport:</strong> Mandatory (notarized/apostilled in home country)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Address Proof:</strong> Driving License / Residence Card / Bank statement</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Registered Office Proof</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Utility Bill:</strong> Electricity or Gas bill (&lt; 30 days old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Proof of Rights:</strong> Rental Agreement / Property Sale Deed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>NOC:</strong> No Objection Certificate from landlord</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Company Charter &amp; Statutory Consent</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>e-MOA &amp; e-AOA:</strong> Main objects and governance rules</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Form INC-9:</strong> Self-declaration of directors &amp; subscribers</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Form DIR-2:</strong> Written consent to act as director</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 6: Compliance Calendar */}
          <article id="compliance-calendar" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Compliance Calendar for Companies: INC-20A, MGT-7, AOC-4 &amp; DIR-3 KYC
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Mandatory annual filings and timelines regulated by the Ministry of Corporate Affairs (MCA):
            </p>
            <div className="space-y-3">
              {[
                { form: "Form INC-20A", title: "Declaration of Commencement of Business", due: "Within 180 days of incorporation", desc: "Mandatory declaration confirming deposit of share capital into company bank account." },
                { form: "Form ADT-1", title: "Appointment of First Statutory Auditor", due: "Within 30 days of incorporation", desc: "Appointment of CA auditor to conduct mandatory annual audit until first AGM." },
                { form: "Form DIR-3 KYC", title: "Annual Director KYC Verification", due: "On or before September 30 annually", desc: "Mandatory annual director contact and identity verification. Delay incurs ₹5,000 penalty." },
                { form: "Form AOC-4", title: "Filing of Financial Statements & Balance Sheet", due: "Within 30 days of AGM", desc: "Filing of audited balance sheet, P&L statement, and auditor report with ROC." },
                { form: "Form MGT-7 / 7A", title: "Filing of Annual Return", due: "Within 60 days of AGM", desc: "Detailed disclosure of shareholding pattern, directors, and statutory registers." },
                { form: "Form ITR-6", title: "Corporate Income Tax Return", due: "On or before October 31 annually", desc: "Annual income tax return filing under Section 139 of the Income Tax Act." },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A7338] bg-olive-50 px-2.5 py-0.5 rounded-md mb-1 inline-block">
                      {item.form}
                    </span>
                    <h4 className="font-serif text-[16px] font-bold text-[#1A1917]">{item.title}</h4>
                    <p className="text-[13px] text-[#6B6965] font-light mt-0.5">{item.desc}</p>
                  </div>
                  <div className="shrink-0 text-right sm:border-l sm:border-[#E5E1D6] sm:pl-5">
                    <span className="text-[11px] font-bold uppercase text-gray-400 block">Due Date</span>
                    <span className="text-[13px] font-bold text-[#1A1917]">{item.due}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 7: Why FoundingLegals */}
          <article id="why-foundinglegals" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Why FoundingLegals for Private Limited Company Registration?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Registering a Private Limited Company is a major step toward building a scalable business. FoundingLegals combines qualified CA execution with transparent pricing and long-term compliance support:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. End-to-End Incorporation Support", desc: "From SPICe+ form filing to MCA approval, FoundingLegals handles the complete registration process, ensuring fast-track and hassle-free incorporation." },
                { title: "2. Company Name & Address Proof Assistance", desc: "We help you select a unique, MCA-compliant name and guide you through preparing valid address proof like a rent agreement or utility bill." },
                { title: "3. Transition from OPC/Proprietorship to Pvt Ltd", desc: "If you are operating as a sole proprietorship or OPC, we help you transition seamlessly to a private limited structure for investor readiness." },
                { title: "4. Bank Account Setup & Capital Advisory", desc: "Post-registration, we assist with business bank account setup and advise on minimum paid-up and authorized capital structure based on your goals." },
                { title: "5. Transparent Member Pricing (50% Off Market)", desc: "CA-managed incorporation services at fixed member rates starting at ₹1,999 with 100% fee transparency and zero hidden surprises." },
                { title: "6. Lifetime Vault Storage & Compliance Tracking", desc: "Store all incorporation certificates, CIN, PAN, and TAN securely in your digital vault with automated annual filing reminders." }
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
