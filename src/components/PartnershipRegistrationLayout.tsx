"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, Star, ShieldCheck, FileText, Building2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

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
    description: "Essential partnership deed drafting and PAN/TAN kit.",
    badge: "Essential Package",
    badgeStyles: "bg-gray-100 text-gray-700 border border-gray-200/50",
    serviceName: "Partnership Firm - BASIC Plan (₹1,999 + Stamp Duty)",
    included: [
      "Partnership Deed Drafting",
      "Stamp Duty & Notarization Support",
      "Firm PAN & TAN Allotment",
      "Current Bank Account Assistance"
    ]
  },
  {
    name: "STANDARD",
    price: "₹4,999",
    feeSubtext: "+ Stamp Duty",
    description: "Complete ROF state registration and MSME setup package.",
    badge: "Most Popular",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    isPopular: true,
    serviceName: "Partnership Firm - STANDARD Plan (₹4,999 + Stamp Duty)",
    included: [
      "Partnership Deed Drafting",
      "Stamp Duty & Notarization Support",
      "Firm PAN & TAN Allotment",
      "Registrar of Firms (ROF) Application",
      "ROF Form A & Form B Filing",
      "Current Bank Account Assistance",
      "MSME / Udyam Registration"
    ]
  },
  {
    name: "PREMIUM",
    price: "₹6,999",
    feeSubtext: "+ Stamp Duty",
    description: "All-inclusive registration, GST, and trademark protection package.",
    badge: "Best Value",
    badgeStyles: "bg-brown-100 text-brown-900 border border-brown-200/30",
    serviceName: "Partnership Firm - PREMIUM Plan (₹6,999 + Stamp Duty)",
    included: [
      "Partnership Deed Drafting",
      "Stamp Duty & Notarization Support",
      "Firm PAN & TAN Allotment",
      "Registrar of Firms (ROF) Application",
      "ROF Form A & Form B Filing",
      "Current Bank Account Assistance",
      "MSME / Udyam Registration",
      "GST Registration Filing",
      "Trademark Class Search & Registration"
    ]
  }
];

export default function PartnershipRegistrationLayout() {
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

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={() => openModal("Partnership Firm Registration")}
            className="px-6 py-3.5 bg-olive-600 hover:bg-olive-705 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            Register Partnership Firm
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
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1917] mb-2">
              Select Your Partnership Registration Plan
            </h2>
            <p className="text-[13px] text-gray-500 max-w-xl">
              Transparent packages covering legal deed drafting, PAN, TAN, and Registrar of Firms (ROF) filing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch pt-2">
            {PARTNERSHIP_PLANS.map((plan) => {
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
                      {ALL_PARTNERSHIP_FEATURES.map((feature, fIdx) => {
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

      {/* ── FORMSPREE MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col max-h-[90vh]">
            <div className="bg-[#FAF9F6] p-6 border-b border-gray-150 relative">
              <span className="text-[9px] font-bold text-olive-700 tracking-widest uppercase block mb-1">
                PARTNERSHIP FIRM REGISTRATION
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
                    Thank you. A legal expert from our team will contact you within 24 hours to draft your Partnership Deed and process filing.
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
                      placeholder="e.g. Rajesh Kumar"
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
                      placeholder="rajesh@example.com"
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
                      placeholder="e.g. Delhi"
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
