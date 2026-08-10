"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, HelpCircle, Search, Star } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "benefits", label: "Benefits" },
  { id: "documents", label: "Documents" },
  { id: "fees", label: "Fees" },
  { id: "checklist", label: "Checklist" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is an LLP Agreement?",
    answer: "An LLP Agreement is a legal document executed among the partners of a Limited Liability Partnership. It defines the mutual rights, duties, capital contribution, and profit-sharing ratios of the partners, and must be filed with the MCA within 30 days of incorporation."
  },
  {
    question: "Can Founding Legals assist in the LLP incorporation process?",
    answer: "Yes, Founding Legals provides a guided, end-to-end experience. We manage documentation, name approval reservation (RUN), prepare incorporation filings (FiLLiP), draft the LLP Agreement, and submit all forms to the MCA portal."
  },
  {
    question: "How long does LLP registration take?",
    answer: "Registering an LLP in India generally takes 7 to 15 working days, depending on name reservation approvals, correct document submission, and Ministry of Corporate Affairs (MCA) processing timelines."
  },
  {
    question: "What are the major advantages and disadvantages of LLP registration in India?",
    answer: "Advantages include limited liability, separate legal entity status, lower compliance than a Private Limited company, and perpetual succession. Disadvantages include inability to raise equity funding from VCs via shares and higher tax rate (30% flat) compared to startup company incentives."
  },
  {
    question: "Who is eligible for LLP registration in India?",
    answer: "Any two or more individuals or body corporates who wish to carry on a lawful business with a view to profit can form an LLP. At least one partner must be a resident of India."
  },
  {
    question: "What is the basic difference between a traditional Partnership and an LLP in India?",
    answer: "A traditional partnership has unlimited liability where partners' personal assets are at risk, and it is not a separate legal entity. An LLP offers limited liability to its partners and has separate legal entity status under the LLP Act, 2008."
  },
  {
    question: "What steps can I take to confirm my LLP registration status?",
    answer: "You can check the registration status of any LLP on the Ministry of Corporate Affairs (MCA) official website using the 'Find LLP/Company' search service under MCA Services."
  },
  {
    question: "How is a Limited Liability Partnership (LLP) taxed in India?",
    answer: "LLPs are taxed as separate legal entities. They pay a flat income tax rate of 30%, plus a surcharge of 12% if taxable income exceeds ₹1 Crore, along with a 4% Health and Education cess."
  },
  {
    question: "Can changes in partners impact the LLP registration or existence in India?",
    answer: "No, an LLP has perpetual succession. The death, retirement, or insolvency of a partner does not affect the legal existence of the LLP."
  },
  {
    question: "Is it possible to add or remove partners after LLP incorporation?",
    answer: "Yes, partners can be added or removed after incorporation by executing a supplementary LLP agreement and filing the relevant forms (Form 4 and Form 3) with the MCA."
  },
  {
    question: "Is it necessary to have a written LLP Agreement for LLP incorporation?",
    answer: "Yes, a written LLP Agreement is mandatory. It must be executed on appropriate stamp paper, signed by all partners, and filed with the MCA within 30 days of registration."
  },
  {
    question: "What is a DPIN, and why is it required?",
    answer: "A Designated Partner Identification Number (DPIN) is a unique identification number assigned by the MCA. It is mandatory for anyone wishing to be appointed as a Designated Partner in an LLP."
  },
  {
    question: "Can an NRI or foreign national be a partner in an LLP in India?",
    answer: "Yes, an NRI or foreign national can be a partner or a Designated Partner in an LLP, provided at least one Designated Partner is a resident Indian."
  },
  {
    question: "Can an LLP registered in India be listed on the Stock Exchange?",
    answer: "No, under current SEBI regulations, an LLP cannot list its shares or securities on a stock exchange because it does not have share capital."
  },
  {
    question: "What are the compliance charges and maintenance costs for LLPs in India?",
    answer: "LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) annually. Maintenance costs include government filing fees, stamp duties, professional fee for filings, and audit fees (if turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs)."
  },
  {
    question: "Can I maintain LLP incorporation as the sole partner if my other partner withdraws?",
    answer: "No, an LLP must have at least two partners. If the number of partners falls below two and the LLP carries on business for more than six months, the sole partner becomes personally liable."
  },
  {
    question: "Can an existing business be converted into an LLP in India?",
    answer: "Yes, partnership firms, private limited companies, and unlisted public companies can be converted into LLPs under the provisions of the LLP Act, 2008."
  },
  {
    question: "What is a Limited Liability Partnership Registration Number?",
    answer: "It is the LLPIN (Limited Liability Partnership Identification Number), a unique 7-digit alphanumeric code assigned by the ROC upon successful incorporation."
  },
  {
    question: "How to Get a Registration Number for a Limited Liability Partnership?",
    answer: "You get the registration number (LLPIN) on the Certificate of Incorporation issued by the ROC after submitting Form FiLLiP and completing all registration steps."
  }
];

// --- LLP PRICING PLANS DATA ---
const ALL_LLP_FEATURES = [
  "LLP name help",
  "LLP name reservation (RUN-LLP)",
  "Partnership PAN + TAN",
  "LLP Agreement drafting",
  "PF and ESIC registration",
  "Incorporation certificate in 10-12 days",
  "DSC preparation in 3-4 days",
  "DPIN for partners",
  "Expert assisted process",
  "Commencement certificate assistance",
  "MSME Registration",
  "Startup India Registration",
  "Digital signature certificate",
  "Partners DSC",
  "Trademark Registration",
  "Pitch Deck"
];

const LLP_PLANS = [
  {
    name: "BASIC",
    price: "₹1,999",
    feeSubtext: "+ Govt Fees",
    description: "Essential LLP registration and partnership setup kit.",
    badge: "Essential Setup",
    badgeStyles: "bg-gray-100 text-gray-700 border border-gray-200/50",
    serviceName: "LLP Registration - BASIC Plan (₹1,999 + Govt Fees)",
    included: [
      "LLP name help",
      "LLP name reservation (RUN-LLP)",
      "Partnership PAN + TAN",
      "LLP Agreement drafting",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DPIN for partners",
      "Expert assisted process",
      "Commencement certificate assistance"
    ]
  },
  {
    name: "STANDARD",
    price: "₹6,999",
    feeSubtext: "+ Govt Fees",
    description: "Standard LLP package including government registration and acceleration programs.",
    badge: "Most Popular",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    isPopular: true,
    serviceName: "LLP Registration - STANDARD Plan (₹6,999 + Govt Fees)",
    included: [
      "LLP name help",
      "LLP name reservation (RUN-LLP)",
      "Partnership PAN + TAN",
      "LLP Agreement drafting",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DPIN for partners",
      "Expert assisted process",
      "Commencement certificate assistance",
      "MSME Registration",
      "Startup India Registration"
    ]
  },
  {
    name: "PREMIUM",
    price: "₹8,999",
    feeSubtext: "+ Govt Fees",
    description: "Comprehensive LLP package including trademarks, physical DSCs and investor decks.",
    badge: "Best Value",
    badgeStyles: "bg-brown-100 text-brown-900 border border-brown-200/30",
    serviceName: "LLP Registration - PREMIUM Plan (₹8,999 + Govt Fees)",
    included: [
      "LLP name help",
      "LLP name reservation (RUN-LLP)",
      "Partnership PAN + TAN",
      "LLP Agreement drafting",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DPIN for partners",
      "Expert assisted process",
      "Commencement certificate assistance",
      "MSME Registration",
      "Startup India Registration",
      "Digital signature certificate",
      "Partners DSC",
      "Trademark Registration",
      "Pitch Deck"
    ]
  }
];

export default function LlpRegistrationLayout() {
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

    window.addEventListener("scroll", handleScroll);
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
      
      {/* ── TOP HEADER SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-6">
        {/* Pricing details on the top of the hero section */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-4 py-1.5 rounded-full border border-olive-200/40 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-650 animate-pulse" />
            Starting at ₹1,999 + Govt Fees
          </span>
          <span className="text-[11px] font-bold text-brown-600 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/30 inline-block">
            Fast Track 10-12 Days Process
          </span>
        </div>

        <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[50px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
          Limited Liability Partnership Registration in India
        </h1>
        
        <div className="text-[15px] md:text-[16px] text-brown-600 leading-relaxed space-y-4 max-w-5xl">
          <p>
            A <strong>Limited Liability Partnership (LLP)</strong> is a hybrid business structure that combines the flexibility of a partnership with the limited liability protection of a company. It allows partners to manage the business directly while keeping their personal assets protected from business liabilities, making Limited Liability Partnership (LLP) registration a preferred choice for professionals and growing businesses.
          </p>
          <p>
            They are popular among professionals, service businesses, and small to mid-sized firms due to their low compliance requirements and operational flexibility.
          </p>
          <p>
            LLPs in India are regulated by the <strong>Ministry of Corporate Affairs (MCA)</strong> under the LLP Act, 2008. The Registrar of Companies (ROC) oversees the registration of LLPs, compliance filings, and governance.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={() => openModal("Limited Liability Partnership (LLP) Registration")}
            className="px-6 py-3.5 bg-olive-600 hover:bg-olive-705 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            Register your LLP
          </button>
          <div className="text-[12.5px] text-gray-500">
            Professional fee starts at <strong className="text-olive-750 font-bold">₹1,999</strong> + actual government state fees.
          </div>
        </div>
      </section>

      {/* ── LLP PRICING CARDS SECTION (full-width, above two-column) ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="border-t border-gray-200 mb-8" />

        <div className="space-y-6 pt-4 mb-10 pb-4">
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1917] mb-2">
              Choose the Best LLP Company Registration Plan
            </h2>
            <p className="text-[13px] text-gray-500 max-w-xl">
              Select the plan that fits your business needs. All plans include standard drafting, filings, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch pt-2">
            {LLP_PLANS.map((plan) => {
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
                  {/* Subtle curved light reflection overlay for the popular card */}
                  {isPopular && (
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none blur-xl group-hover:scale-110 transition-transform duration-700" />
                  )}

                  <div>
                    {/* Plan Badge */}
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

                    {/* Price */}
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

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {ALL_LLP_FEATURES.map((feature, fIdx) => {
                        const isIncluded = plan.included.includes(feature);
                        return (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-[12px] leading-snug"
                          >
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
                                ? isPopular
                                  ? "text-white font-medium"
                                  : "text-[#2A3416] font-medium"
                                : isPopular
                                ? "text-white/30 font-light line-through"
                                : "text-gray-400 font-light line-through"
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
              A Limited Liability Partnership (LLP) is a hybrid business structure that combines the benefits of a conventional partnership with the limited liability protection of a corporation. Formed and registered under the Limited Liability Partnership Act, 2008, an LLP offers partners the flexibility of organizing internal management based on mutual agreement while safeguarding personal assets against business debts and liabilities.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              FoundingLegals simplifies the entire process by providing comprehensive end-to-end support for LLP registration, legal documentation, and regulatory compliance in India. Our expert CA and CS team handles LLP name reservation, FiLLiP form filings, custom LLP agreement drafting, and Certificate of Incorporation issuance with 100% pricing transparency.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(a) Hybrid Entity Structure</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Combines organizational flexibility of traditional partnerships with corporate limited liability protection.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(b) Limited Personal Liability</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Partners&apos; personal assets are protected. Liability is limited strictly to their agreed capital contribution.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(c) Separate Legal Existence</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Perpetual succession ensures the LLP continues as an independent legal entity regardless of partner changes.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(d) Lower Compliance Burden</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  No mandatory statutory audit unless turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Eligibility */}
          <article id="eligibility" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Eligibility Criteria for LLP Registration in India
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Before initiating LLP incorporation on the MCA portal, ensure the following eligibility parameters are satisfied:
            </p>
            <div className="space-y-4">
              {[
                { title: "Minimum 2 Partners & No Upper Limit", desc: "A minimum of 2 partners (individuals or body corporates) is required. Unlike Private Limited Companies, there is no maximum limit on the number of partners." },
                { title: "At Least 2 Designated Partners", desc: "At least 2 individual partners must be assigned as Designated Partners, with at least one being a resident of India (stayed ≥ 120 days in India during the financial year)." },
                { title: "Digital Signature Certificate (DSC)", desc: "Class-3 DSC is mandatory for all proposed designated partners to digitally sign electronic e-forms and FiLLiP submissions." },
                { title: "Registered Address in India", desc: "Must possess a valid physical commercial or residential office address in India with a recent utility bill and landlord No Objection Certificate (NOC)." },
                { title: "No Minimum Capital Requirement", desc: "There is no minimum statutory capital limit required by the MCA. Partners can decide any initial capital contribution (e.g., ₹10,000)." },
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
              Benefits of Registering a Limited Liability Partnership (LLP)
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Key commercial advantages of choosing an LLP entity structure:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">1. Limited Liability Protection</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Partners are protected against personal liability for company obligations. No partner is held liable for another partner&apos;s independent misconduct or negligence.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">2. Low Compliance Costs</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Lower recurring maintenance fees and simplified filing requirements. Mandatory CA audit applies only if turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">3. Internal Governance Flexibility</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Partners can freely draft their custom LLP Agreement to govern decision-making, profit sharing, management roles, and admission/exit of partners.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">4. No Dividend Distribution Tax</h3>
                <p className="text-[13.5px] text-[#6B6965] font-light leading-relaxed">
                  Profits distributed to partners are free from Dividend Distribution Tax (DDT), reducing tax cascade for active firm partners.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4: Documents */}
          <article id="documents" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Documents Required for LLP Registration
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Essential partner identity, address, and premises documents for online filing:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">For Indian Designated Partners</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>PAN Card</strong> (Mandatory for Indian partners)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Identity Proof:</strong> Aadhaar / Passport / Voter ID / Driving License</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Address Proof:</strong> Recent Bank Statement / Utility Bill (&lt; 30 days old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> Passport-size photographs</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">For Foreign Partners / NRIs</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Passport:</strong> Mandatory (apostilled/notarized in home country)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Address Proof:</strong> Driver&apos;s License / Residence Card / Bank statement</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Registered Office Premises Proof</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Utility Bill:</strong> Electricity or Water bill (&lt; 30 days old)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Proof of Right:</strong> Rent Agreement or Ownership Deed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>NOC:</strong> Signed No Objection Certificate from owner</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">LLP Charter &amp; Form Submissions</h4>
                <ul className="space-y-2 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>FiLLiP Form:</strong> Main incorporation form with MCA</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Form 3:</strong> LLP Agreement filing (within 30 days of COI)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#5A7338]" /> <strong>Form DIR-9 &amp; Form 9:</strong> Partner declarations &amp; consents</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 5: Fees */}
          <article id="fees" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Limited Liability Partnership (LLP) Registration Fees &amp; Breakdown
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Clear, transparent cost overview for registering an LLP in India:
            </p>
            <div className="overflow-x-auto border border-[#E5E1D6] rounded-2xl">
              <table className="w-full text-left border-collapse text-[13.5px]">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E5E1D6] text-[#1A1917] font-serif font-semibold">
                    <th className="p-4">Fee Component</th>
                    <th className="p-4">Approximate Amount (₹)</th>
                    <th className="p-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E1D6] text-[#4A4642]">
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Name Reservation (RUN-LLP)</td>
                    <td className="p-4">₹200</td>
                    <td className="p-4">MCA portal fee for 2 proposed names</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">FiLLiP Incorporation Form</td>
                    <td className="p-4">₹500 – ₹1,000</td>
                    <td className="p-4">Based on capital contribution up to ₹1 Lakh</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Stamp Duty on LLP Agreement</td>
                    <td className="p-4">₹1,000 – ₹2,000</td>
                    <td className="p-4">State-wise statutory stamp duty (e.g. Karnataka / Maharashtra)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">Class-3 DSC (2 Partners)</td>
                    <td className="p-4">₹1,500 – ₹2,000</td>
                    <td className="p-4">Digital Signature Certificates for designated partners</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">PAN &amp; TAN Allotment</td>
                    <td className="p-4">Included</td>
                    <td className="p-4">Issued automatically with Certificate of Incorporation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#1A1917]">FoundingLegals Professional Fee</td>
                    <td className="p-4">Starts at ₹1,999</td>
                    <td className="p-4">Complete drafting, CA review, &amp; MCA filing assistance</td>
                  </tr>
                  <tr className="bg-olive-50/40 font-bold text-olive-800">
                    <td className="p-4">Total Indicative Cost</td>
                    <td className="p-4">₹5,500 – ₹8,500</td>
                    <td className="p-4">Statutory state stamp duty charged at actuals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 6: Checklist */}
          <article id="checklist" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Pre &amp; Post-Registration Checklist for LLP Incorporation
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Step-by-step checklist to ensure 100% seamless compliance:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Pre-Filing Requirements</h4>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Minimum 2 partners identified (at least 1 Indian resident)</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Class-3 DSC obtained for designated partners</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Unique LLP name reserved via RUN-LLP form</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Partner identity &amp; registered office utility bill + NOC ready</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Custom LLP Agreement drafted with profit-sharing ratios</li>
                </ul>
              </div>
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917] mb-3">Post-Filing Compliances</h4>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Certificate of Incorporation received with 7-digit LLPIN</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> File Form 3 (LLP Agreement) with MCA within 30 days</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Open LLP current bank account &amp; deposit partner capital</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Annual Return (Form 11) filed before May 30 annually</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" /> Solvency Statement (Form 8) filed before October 30</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 7: Why FoundingLegals */}
          <article id="why-foundinglegals" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Why FoundingLegals for LLP Registration?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              FoundingLegals provides CA-managed incorporation services designed for speed, affordability, and regulatory peace of mind:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Qualified CA & CS Execution", desc: "Every document review, name approval reservation, and FiLLiP filing is handled by qualified Chartered Accountants." },
                { title: "2. Fast 7–10 Days Turnaround", desc: "Streamlined submission workflows to secure name reservation and Certificate of Incorporation in record time." },
                { title: "3. 100% Upfront Fixed Pricing", desc: "CA-managed incorporation services at fixed member rates starting at ₹1,999 with 100% fee transparency." },
                { title: "4. Custom LLP Agreement Drafting", desc: "We draft tailored partnership agreements covering capital contributions, management roles, profit splits, and exit clauses." },
                { title: "5. Lifetime Vault Storage & Alerts", desc: "Store all incorporation certificates, LLPIN, PAN, and TAN securely in your digital vault with automated filing reminders." },
                { title: "6. Bank Account & Tax Setup Assistance", desc: "Post-registration support for business bank account opening, GST registration, and annual filing compliance." }
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

      {/* ── FORMSPREE OPT-IN MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-[#FAF9F6] p-6 border-b border-gray-150 relative">
              <span className="text-[9px] font-bold text-olive-700 tracking-widest uppercase block mb-1">
                REGISTER YOUR BUSINESS
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

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {modalState.succeeded ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-olive-50 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 text-olive-600" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brown-900">Application Submitted!</h4>
                  <p className="text-sm text-brown-500 max-w-sm mx-auto leading-relaxed">
                    Thank you. A legal incorporation specialist from our team will contact you within 24 hours to begin your filing.
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
                  {/* Service type hidden input */}
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="rahul@example.com"
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
                      placeholder="e.g. Bangalore"
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
