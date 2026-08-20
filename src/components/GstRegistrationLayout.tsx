"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Thresholds & Criteria" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "COMMERCIAL EXPANSION",
    name: "Legal Inter-State & E-Commerce Selling",
    description: "Sell products across state borders legally and list your catalog on Amazon, Flipkart, Meesho, and Blinkit without tax restriction.",
    highlight: "National E-Commerce Gateway",
    icon: "🌐"
  },
  {
    category: "TAX OFFSETS",
    name: "100% Input Tax Credit (ITC) Claiming",
    description: "Seamlessly offset tax paid on raw materials, office rent, software subscriptions, and capital purchases against your output GST liability.",
    highlight: "100% Tax Offset Credit",
    icon: "💳"
  },
  {
    category: "CORPORATE CONTRACTS",
    name: "B2B & Government Tender Eligibility",
    description: "Possessing a valid GSTIN is a mandatory prerequisite to bid for corporate vendor contracts and central/state government procurement tenders.",
    highlight: "Tender Bidding Qualification",
    icon: "🏛️"
  },
  {
    category: "BANKING & GATEWAYS",
    name: "Current Account & Payment Gateway Access",
    description: "Fulfill statutory banking requirements to open multi-currency current accounts and activate online payment collection gateways like Razorpay.",
    highlight: "Instant Merchant Onboarding",
    icon: "🏦"
  },
  {
    category: "LOWER TAX RATE",
    name: "Composition Scheme (1% Fixed Tax Rate)",
    description: "Small traders and manufacturers with turnover up to ₹1.5 Crore can opt for the Composition Scheme, paying a low 1% fixed tax rate with minimal filing.",
    highlight: "1% Fixed Tax Option",
    icon: "📊"
  },
  {
    category: "TRUST & AUDIT",
    name: "Enhanced Credibility & Audit Transparency",
    description: "A verified GSTIN instills immediate commercial trust among vendors, suppliers, corporate buyers, and institutional financial auditors.",
    highlight: "Verified Tax Credibility",
    icon: "🛡️"
  }
];

// --- ENTITY TYPES DATA ---
const ENTITY_TYPES = [
  {
    type: "Normal Taxpayer (Standard Entity)",
    badge: "MOST COMMON",
    description: "Standard registration for entities operating above turnover thresholds or selling inter-state. Full ITC claiming benefits.",
    icon: "🏢"
  },
  {
    type: "Composition Taxpayer",
    badge: "FOR SMALL TRADERS",
    description: "Option for small traders/manufacturers with turnover < ₹1.5 Cr. Pay fixed 1% tax with simplified quarterly filings.",
    icon: "🏬"
  },
  {
    type: "Casual & Non-Resident Taxable Person",
    badge: "TEMPORARY / FOREIGN",
    description: "Temporary registration for exhibition stalls, pop-up events (up to 90 days), or foreign entities conducting transactions in India.",
    icon: "✈️"
  }
];

// --- THRESHOLDS & CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Goods Turnover Threshold (₹40 L / ₹20 L)",
    description: "Mandatory for physical goods suppliers exceeding ₹40 Lakhs annual turnover (₹20 Lakhs in Special Category States)."
  },
  {
    number: "2",
    title: "Services Turnover Threshold (₹20 L / ₹10 L)",
    description: "Mandatory for service providers exceeding ₹20 Lakhs annual turnover (₹10 Lakhs in Special Category States)."
  },
  {
    number: "3",
    title: "Compulsory Registration (Zero Threshold)",
    description: "Mandatory regardless of turnover for E-commerce sellers, Inter-state suppliers, Casual taxpayers, and RCM taxpayers."
  },
  {
    number: "4",
    title: "Voluntary GST Registration",
    description: "Early-stage businesses choosing to register voluntarily to claim ITC on setup costs and project corporate credibility."
  }
];

// --- REGISTRATION PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Document Gathering & CA Scrutiny",
    desc: "Compile applicant identity proofs, business constitution details, and address proof for principal place of business."
  },
  {
    step: "STEP 2",
    title: "TRN Generation (Part-A)",
    desc: "Generate a 15-digit Temporary Reference Number (TRN) via PAN, Email, and Mobile OTP verification."
  },
  {
    step: "STEP 3",
    title: "Detailed Form Part-B Filing",
    desc: "Complete business application specifying HSN/SAC codes, corporate constitution, and authorized signatories."
  },
  {
    step: "STEP 4",
    title: "Registered Address Verification",
    desc: "Upload Electricity Bill, Rent Agreement, and NOC from the property owner for registered office."
  },
  {
    step: "STEP 5",
    title: "Aadhaar Biometric Authentication",
    desc: "Complete instant Aadhaar OTP verification for promoters, partners, or directors."
  },
  {
    step: "STEP 6",
    title: "Officer Scrutiny & Notice Handling",
    desc: "GST officer reviews submission. Our CA team handles any clarification notice (Form GST REG-03)."
  },
  {
    step: "STEP 7",
    title: "GSTIN Allotment & Certificate",
    desc: "Receive your official 15-digit GSTIN and download Certificate of Registration (Form GST REG-06)."
  }
];

// --- DOCUMENTS DATA ---
const INDIVIDUAL_DOCS = [
  "Proprietor’s PAN Card, Aadhaar Card, and Passport Photo",
  "Bank Account Proof (Cancelled Cheque, Passbook, or Bank Statement)",
  "Registered Office Electricity Bill / Property Tax Receipt",
  "Rent Agreement & Property Owner NOC (if rented / leased premises)"
];

const COMPANY_DOCS = [
  "Company / LLP PAN Card & Certificate of Incorporation (CoI) / LLP Agreement",
  "Directors’ / Designated Partners’ PAN Cards, Aadhaar Cards & Photos",
  "Board Resolution / Letter of Authorization for Authorized Signatory",
  "Registered Office Address Proof (Electricity Bill + Rent Agreement + NOC)",
  "Bank Account Proof (Cancelled Cheque / Bank Statement with Bank Seal)"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "Is GST Registration mandatory for selling products online on Amazon or Flipkart?",
    answer: "Yes. Statutory tax rules mandate that any business selling goods through an e-commerce operator must possess a valid GSTIN, regardless of turnover."
  },
  {
    question: "Can I apply for GST registration using my residential address?",
    answer: "Yes. You can use your residential address as your principal place of business by providing an Electricity Bill/Property Tax receipt along with an NOC (No Objection Certificate) from the property owner."
  },
  {
    question: "What is the statutory Government Fee for GST Registration?",
    answer: "There is ZERO government fee charged by the GST Department for issuing a GST Registration Certificate. You only pay FoundingLegals' transparent CA filing fee."
  },
  {
    question: "What is the difference between Normal GST and the Composition Scheme?",
    answer: "Normal GST allows full Input Tax Credit (ITC) claiming with standard tax rates (5%, 12%, 18%, 28%). Composition Scheme is for small businesses (turnover < ₹1.5 Cr) paying a fixed 1% tax rate with no ITC and simpler quarterly filing."
  },
  {
    question: "How long does it take to get a GSTIN after filing the application?",
    answer: "Upon successful Aadhaar authentication, GST registration certificates are usually issued within 3 to 7 working days."
  },
  {
    question: "What is a 15-digit GSTIN code structure?",
    answer: "The 15-digit code consists of: State Code (first 2 digits) + Entity PAN (next 10 digits) + Entity Code (13th digit) + 'Z' alphabet (14th digit) + Checksum digit (15th digit)."
  },
  {
    question: "What happens if I operate above the threshold limit without GST registration?",
    answer: "Operating without GST when mandatory attracts severe statutory penalties under Section 122 of CGST Act — 100% of the tax due or ₹10,000 (whichever is higher)."
  }
];

export default function GstRegistrationLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const subTabsContainerRef = useRef<HTMLDivElement>(null);

  const [formState, handleSubmit] = useForm("xqeyrnpp");

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const fullHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= fullHeight - 120) {
        setActiveTab("faqs");
        return;
      }

      const sectionIds = TABS.map((t) => t.id);
      const headerOffset = 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset + 40) {
            setActiveTab(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (subTabsContainerRef.current) {
      const activeBtn = subTabsContainerRef.current.querySelector<HTMLButtonElement>(`[data-tab-id="${activeTab}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 180;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1917] font-sans antialiased selection:bg-[#F0F2EB] selection:text-[#48532B]">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#F5F0EB] via-[#FAF9F6] to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] text-xs font-semibold tracking-wide shadow-2xs">
            <Award className="w-4 h-4 text-[#48532B]" />
            <span>Mandatory Business Tax Compliance</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            GST Registration Online — <span className="italic text-[#48532B]">Secure Your 15-Digit GSTIN</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Obtain your statutory Goods and Services Tax Identification Number (GSTIN) under the CGST / SGST / IGST Act, 2017. Enable legal inter-state trading, e-commerce selling, <strong className="font-semibold text-[#1A1917]">100% Input Tax Credit (ITC) claiming</strong>, and corporate B2B contract bidding with complete CA-verified accuracy.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for GST Registration</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> Issued in 3–7 Business Days
            </span>
          </div>

        </div>
      </section>

      {/* ── STICKY SUB-NAVIGATION BAR ── */}
      <div
        ref={navRef}
        className={`sticky top-[68px] sm:top-[74px] z-40 transition-colors duration-200 ${
          isSticky ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E0DA]" : "bg-transparent"
        }`}
      >
        {isSticky && (
          <div className="absolute -top-28 left-0 right-0 h-28 bg-white pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 relative z-10">
          <div
            ref={subTabsContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none py-1 px-1"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                data-tab-id={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#F0F2EB] text-[#48532B] border border-[#D4D8C8] font-semibold shadow-2xs"
                    : "text-[#706D67] hover:text-[#1A1917] hover:bg-[#F2ECE4] border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-20">

        {/* ── SECTION 1: OVERVIEW ── */}
        <section id="overview" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Indirect Tax Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-[#55524D] leading-relaxed font-light">
              <p>
                <strong className="text-[#1A1917] font-medium">Goods and Services Tax (GST)</strong> is a comprehensive indirect tax levied on the manufacture, sale, and consumption of goods and services across India.
              </p>
              <p>
                Enacted under the CGST Act, 2017, GST registration awards a unique 15-digit state-wise GSTIN to business entities. Registration is legally mandatory for businesses crossing prescribed annual turnover limits (₹40 Lakhs/₹20 Lakhs for Goods and ₹20 Lakhs/₹10 Lakhs for Services). Statutory law also mandates GST registration <strong className="text-[#1A1917]">irrespective of turnover</strong> for e-commerce sellers, inter-state suppliers, and reverse charge mechanism taxpayers.
              </p>
              <p>
                Beyond statutory compliance, a valid GSTIN enables your business to claim Input Tax Credit (ITC) on all business purchases, open corporate current accounts, register on payment gateways (Razorpay/Cashfree), and establish trust with corporate clients.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1A1917]">Key Statutory GSTIN Highlights</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#55524D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>100% ITC Offsets:</strong> Claim tax credits on all business equipment, software, and rent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>E-Commerce Qualification:</strong> Mandatory to sell on Amazon, Flipkart, Meesho, & Blinkit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>B2B Vendor Bidding:</strong> Mandatory prerequisite for corporate vendor contracts & tenders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Composition Scheme:</strong> 1% fixed tax rate for small traders with turnover &lt; ₹1.5 Cr.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: STATUTORY BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Business Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">6 Core Statutory Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0DA] hover:border-[#48532B] rounded-2xl p-6 space-y-3 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{b.icon}</span>
                    <span className="text-[10px] font-bold text-[#48532B] bg-[#F0F2EB] px-2.5 py-0.5 rounded-full border border-[#D4D8C8]">
                      {b.category}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1A1917]">{b.name}</h3>
                  <p className="text-xs text-[#55524D] leading-relaxed font-light">{b.description}</p>
                </div>
                <div className="pt-3 border-t border-[#F2ECE4]">
                  <span className="text-[11px] font-semibold text-[#48532B] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> {b.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: THRESHOLDS & CRITERIA ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-8">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Limits</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Registration Thresholds & Types</h2>
          </div>

          {/* Types of Registrations */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">GST Registration Categories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {ENTITY_TYPES.map((e, idx) => (
                <div key={idx} className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{e.icon}</span>
                    <span className="text-[10px] font-bold text-[#48532B] bg-[#F0F2EB] px-2.5 py-0.5 rounded-full border border-[#D4D8C8]">
                      {e.badge}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1A1917]">{e.type}</h4>
                  <p className="text-xs text-[#55524D] leading-relaxed font-light">{e.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Threshold Criteria */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">Mandatory Threshold & Registration Rules</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {ELIGIBILITY_CRITERIA.map((c, idx) => (
                <div key={idx} className="bg-white border border-[#E5E0DA] rounded-2xl p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#F0F2EB] text-[#48532B] font-bold text-sm flex items-center justify-center shrink-0 border border-[#D4D8C8]">
                    {c.number}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#1A1917]">{c.title}</h4>
                    <p className="text-xs text-[#55524D] leading-relaxed font-light">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: PROCESS ── */}
        <section id="process" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Step-by-Step Flow</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">GST Registration Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0DA] rounded-2xl p-5 space-y-3 relative">
                <span className="text-[10px] font-bold text-[#48532B] bg-[#F0F2EB] px-2.5 py-0.5 rounded-full border border-[#D4D8C8]">
                  {s.step}
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1917]">{s.title}</h3>
                <p className="text-xs text-[#55524D] leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: DOCUMENTS REQUIRED ── */}
        <section id="documents" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Checklist</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Required Documents</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-2xl p-6 space-y-4">
              <h3 className="font-serif font-bold text-base text-[#1A1917] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#48532B]" /> Proprietorship GST Checklist
              </h3>
              <ul className="space-y-2.5 text-xs text-[#55524D]">
                {INDIVIDUAL_DOCS.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-2xl p-6 space-y-4">
              <h3 className="font-serif font-bold text-base text-[#1A1917] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#48532B]" /> Pvt Ltd / LLP / Partnership Checklist
              </h3>
              <ul className="space-y-2.5 text-xs text-[#55524D]">
                {COMPANY_DOCS.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: TIMELINE & COMPLIANCE ── */}
        <section id="timeline" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Schedules</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Statutory Return Deadlines</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-xs">
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 1</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">TRN Generation & Scrutiny</h4>
              <p className="text-[#55524D] leading-relaxed">Document gathering, HSN code classification, and TRN generation via PAN OTP.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 2</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Part-B & Biometric Filing</h4>
              <p className="text-[#55524D] leading-relaxed">Form REG-01 Part-B submission and instant Aadhaar Authentication.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 3–7</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">GSTIN Certificate Allotment</h4>
              <p className="text-[#55524D] leading-relaxed">Jurisdictional officer verification and 15-digit GSTIN (Form GST REG-06) grant.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">MONTHLY / QUARTERLY</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">GST Return Compliance</h4>
              <p className="text-[#55524D] leading-relaxed">GSTR-1 by 11th, GSTR-3B by 20th of every month (or QRMP scheme deadlines).</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="bg-gradient-to-r from-[#48532B] to-[#394222] rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <span className="text-xs font-semibold text-[#EAECE4] uppercase tracking-wider">The FoundingLegals Advantage</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Why Choose FoundingLegals for GST Registration?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm pt-4">
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-base text-white">Senior CA Verification</h4>
                <p className="text-[#EAECE4] leading-relaxed">Our chartered accountants review your document submissions and map accurate HSN/SAC codes.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-base text-white">Zero Notice Rejection Guarantee</h4>
                <p className="text-[#EAECE4] leading-relaxed">We handle all officer clarification notices (Form GST REG-03) at zero additional charge.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-base text-white">Registered Address & NOC Support</h4>
                <p className="text-[#EAECE4] leading-relaxed">Expert guidance on address proof documentation for home offices, rented premises, or virtual workspaces.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#48532B] hover:bg-[#F0F2EB] font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Apply for GST Registration Now
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: FAQS ── */}
        <section id="faqs" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Clarifications</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Frequently Asked Questions</h2>
            </div>
            <span className="text-xs text-[#706D67] font-medium">{FAQS.length} Q&As</span>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0DA] rounded-2xl overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-semibold text-sm text-[#1A1917] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#48532B] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#706D67] transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-[#55524D] leading-relaxed font-light border-t border-[#F2ECE4] pt-4 bg-[#FAF7F2]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── LEAD CAPTURE MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#706D67] hover:text-[#1A1917] p-1 rounded-full hover:bg-[#F2ECE4] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Fast-Track Filing</span>
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Apply for GST Registration</h3>
              <p className="text-xs text-[#55524D] font-light">Fill your details below. Our senior CA experts will initiate your GSTIN filing.</p>
            </div>

            {formState.succeeded ? (
              <div className="bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#48532B] mx-auto" />
                <h4 className="font-serif font-bold text-base">Application Received!</h4>
                <p className="text-xs font-light">Our GST tax consultant will contact you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input type="hidden" name="service" value="GST Registration" />
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Business Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Acme Enterprises"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. founder@acme.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit GST Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
