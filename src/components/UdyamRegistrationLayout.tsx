"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Classification & Criteria" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "IP DISCOUNT",
    name: "50% Off Trademark & Patent Fees",
    description: "Instantly claim 50% discount on statutory government trademark filing fees (paying ₹4,500 instead of ₹9,000 per class on Form TM-A) plus patent rebates.",
    highlight: "Save ₹4,500 Per TM Class",
    icon: "🏷️"
  },
  {
    category: "PAYMENT PROTECTION",
    name: "45-Day Payment Rule (Samadhaan)",
    description: "Buyers must settle MSME invoices within 45 days. Failure triggers compound interest penalties at 3x the RBI bank rate under Income Tax Sec 43B(h).",
    highlight: "Legal 45-Day Recovery",
    icon: "⚖️"
  },
  {
    category: "CREDIT ACCESS",
    name: "Collateral-Free Credit (CGTMSE)",
    description: "Access up to ₹2 Crore collateral-free bank loans guaranteed by the Credit Guarantee Fund Trust for Micro & Small Enterprises.",
    highlight: "Up to ₹2 Cr Collateral-Free",
    icon: "💳"
  },
  {
    category: "UTILITY SUBVENTION",
    name: "Electricity & Bank Rate Subvention",
    description: "Enjoy 1% to 1.5% interest rate subvention on bank overdrafts and claim industrial electricity tariff concessions from state electricity boards.",
    highlight: "Bank Subvention & Bill Relief",
    icon: "⚡"
  },
  {
    category: "PUBLIC TENDERS",
    name: "Government Procurement EMD Exemption",
    description: "Exemption from submitting Earnest Money Deposit (EMD) and tender document fees in central ministry and PSU procurements.",
    highlight: "Zero EMD Tender Bidding",
    icon: "🏛️"
  },
  {
    category: "CERTIFICATION REBATES",
    name: "75% ISO & Barcode Fee Subsidies",
    description: "Claim reimbursement up to 75% for obtaining ISO 9001/14001 quality certifications and GS1 barcode registrations.",
    highlight: "75% ISO Fee Subsidy",
    icon: "🛡️"
  }
];

// --- ENTITY TYPES DATA ---
const ENTITY_TYPES = [
  {
    type: "Micro Enterprise",
    badge: "INVESTMENT ≤ ₹1 CR",
    description: "Net investment in Plant & Machinery/Equipment ≤ ₹1 Crore AND Annual Aggregate Business Turnover ≤ ₹5 Crore.",
    icon: "🌱"
  },
  {
    type: "Small Enterprise",
    badge: "INVESTMENT ≤ ₹10 CR",
    description: "Net investment in Plant & Machinery/Equipment ≤ ₹10 Crore AND Annual Aggregate Business Turnover ≤ ₹50 Crore.",
    icon: "🚀"
  },
  {
    type: "Medium Enterprise",
    badge: "INVESTMENT ≤ ₹50 CR",
    description: "Net investment in Plant & Machinery/Equipment ≤ ₹50 Crore AND Annual Aggregate Business Turnover ≤ ₹250 Crore.",
    icon: "🏢"
  }
];

// --- CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Investment Limit Criterion",
    description: "Aggregate net investment in plant & machinery or equipment evaluated from Income Tax ITR records."
  },
  {
    number: "2",
    title: "Turnover Limit Criterion",
    description: "Total aggregate turnover evaluated from GSTIN returns (excluding export turnover from calculation)."
  },
  {
    number: "3",
    title: "Valid Aadhaar of Representative",
    description: "Aadhaar Card of Proprietor, Managing Partner, or Authorized Director linked with active mobile number."
  },
  {
    number: "4",
    title: "PAN & GSTIN Integration",
    description: "Mandatory auto-linking with Income Tax and GST portals for dynamic turnover & investment verification."
  }
];

// --- REGISTRATION PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Enterprise Classification",
    desc: "Evaluate investment & turnover limits to select correct Micro, Small, or Medium classification."
  },
  {
    step: "STEP 2",
    title: "Aadhaar & PAN Validation",
    desc: "Verify Aadhaar OTP and validate business PAN credentials on the official Udyam Portal."
  },
  {
    step: "STEP 3",
    title: "NIC Code Mapping",
    desc: "Assign precise National Industrial Classification (NIC 2-digit, 4-digit & 5-digit) activity codes."
  },
  {
    step: "STEP 4",
    title: "Investment & Turnover Declaration",
    desc: "Populate or auto-fetch plant & machinery investment figures and annual business turnover."
  },
  {
    step: "STEP 5",
    title: "Office Location & Bank Details",
    desc: "Enter principal place of business, bank account details (IFSC/Account No.), and worker headcount."
  },
  {
    step: "STEP 6",
    title: "Final Verification & OTP Submission",
    desc: "Review self-declaration details and complete final OTP submission on the portal."
  },
  {
    step: "STEP 7",
    title: "Udyam Certificate Grant",
    desc: "Receive official digital Udyam Registration Certificate with a unique 16-digit URN & QR code."
  }
];

// --- DOCUMENTS DATA ---
const INDIVIDUAL_DOCS = [
  "Entrepreneur / Partner / Director’s Aadhaar Card (linked with mobile)",
  "Business Entity PAN Card & Applicant PAN Card",
  "Bank Account Details (Passbook / Cancelled Cheque with IFSC)",
  "Registered Office Address Details (Electricity Bill / Rent Agreement)"
];

const COMPANY_DOCS = [
  "GSTIN Registration Certificate (if registered under GST)",
  "Plant & Machinery / Equipment Investment details",
  "Employee headcount breakdown (Male / Female / Total)",
  "Self-declaration of business activities for NIC code assignment"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "How does Udyam Registration help save 50% on Trademark Registration?",
    answer: "Under Indian Trade Marks Rules, 2017, Udyam-registered MSMEs pay only ₹4,500 per class per application instead of the standard ₹9,000 corporate statutory fee."
  },
  {
    question: "Is Udyam Registration mandatory for new businesses?",
    answer: "While voluntary, Udyam registration is essential if you wish to claim MSME subsidies, delayed payment protections, IP fee rebates, and priority bank loans."
  },
  {
    question: "Can retail and wholesale traders apply for Udyam Registration?",
    answer: "Yes. The Ministry of MSME officially permits Retail and Wholesale Traders to register on the Udyam portal for Priority Sector Lending (PSL) benefits."
  },
  {
    question: "What is the statutory Government Fee for Udyam Registration?",
    answer: "There is ZERO government fee for filing Udyam Registration on the official portal. You only pay FoundingLegals' transparent CA filing fee."
  },
  {
    question: "What is the 45-day MSME Payment Rule under Section 43B(h)?",
    answer: "Under Income Tax Act Section 43B(h), buyers making payments to Udyam-registered micro or small enterprises beyond 45 days cannot claim tax deductions on those expenses until actual payment is made."
  },
  {
    question: "What is the difference between Udyog Aadhaar and Udyam Registration?",
    answer: "Udyog Aadhaar (UAM) has been fully replaced by Udyam Registration. All older UAM certificates are invalid; entities must re-register on Udyam."
  },
  {
    question: "Is physical verification required to get an Udyam Certificate?",
    answer: "No. The entire Udyam registration process is 100% online, paperless, and based on self-declaration integrated with PAN/GSTIN databases."
  }
];

export default function UdyamRegistrationLayout() {
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
            <span>Govt MSME Registration & Subsidy Access</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            UDYAM / MSME Registration Online — <span className="italic text-[#48532B]">Unlock Sovereign Benefits</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Formally register your Micro, Small, or Medium Enterprise under the MSMED Act, 2006 on the official Udyam portal. Unlock <strong className="font-semibold text-[#1A1917]">50% Trademark & Patent filing rebates</strong>, <strong className="font-semibold text-[#1A1917]">priority sector bank lending</strong>, <strong className="font-semibold text-[#1A1917]">45-day payment protection (Samadhaan)</strong>, and <strong className="font-semibold text-[#1A1917]">public tender EMD exemptions</strong>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for UDYAM Registration</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> Issued in 24–48 Business Hours
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory MSMED Act</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-[#55524D] leading-relaxed font-light">
              <p>
                <strong className="text-[#1A1917] font-medium">Udyam Registration</strong> is the official statutory registration system introduced by the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, under the MSMED Act, 2006.
              </p>
              <p>
                Replacing the former Udyog Aadhaar Memorandum (UAM) and EM-II filings, Udyam Registration provides a permanent 16-digit <strong className="text-[#1A1917]">Udyam Registration Number (URN)</strong> accompanied by an official digital certificate embedded with a verifiable QR code.
              </p>
              <p>
                Whether you operate a manufacturing plant, a tech startup, a service firm, or a retail business, obtaining Udyam registration is essential to access government subsidies, claim a 50% discount on statutory trademark government fees (paying ₹4,500 instead of ₹9,000 per class), secure collateral-free loans under CGTMSE up to ₹2 Crore, and enforce 45-day payment timelines under Section 43B(h) of the Income Tax Act.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1A1917]">Key Highlights of Udyam Registration</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#55524D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>50% Off TM Fees:</strong> Pay ₹4,500 instead of ₹9,000 per class on Trademark TM-A.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>45-Day Recovery Rule:</strong> Enforce 45-day payment cycles under Sec 43B(h).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Collateral-Free Credit:</strong> Loans up to ₹2 Cr under CGTMSE scheme.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Zero EMD Tenders:</strong> Exemption from EMD fees in central govt public procurements.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: STATUTORY BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Enterprise Advantages</span>
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

        {/* ── SECTION 3: CLASSIFICATION & CRITERIA ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-8">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Revised Composite Limits</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">MSME Classification & Criteria</h2>
          </div>

          {/* MSME Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">Revised MSME Classification Categories</h3>
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

          {/* 4 Mandatory Criteria */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">4 Mandatory Composite Criteria</h3>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Udyam Registration Process</h2>
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
                <FileText className="w-4 h-4 text-[#48532B]" /> Basic Identity & Address Checklist
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
                <ShieldCheck className="w-4 h-4 text-[#48532B]" /> Enterprise Financial & Activity Checklist
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Renewal Calendar</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-xs">
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 1</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">NIC Code Mapping</h4>
              <p className="text-[#55524D] leading-relaxed">Document verification, Aadhaar OTP validation, and NIC code mapping.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 2</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Portal Filing & URN Allotment</h4>
              <p className="text-[#55524D] leading-relaxed">Self-declaration portal filing and instant URN generation.</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">ANNUAL UPDATE</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Auto-Sync Integration</h4>
              <p className="text-[#55524D] leading-relaxed">Dynamic auto-synchronization of turnover and investment via GST & ITR portals.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">LIFETIME</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Permanent Certificate</h4>
              <p className="text-[#55524D] leading-relaxed">Permanent validity unless cancelled or re-classified by Ministry of MSME.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="bg-gradient-to-r from-[#48532B] to-[#394222] rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <span className="text-xs font-semibold text-[#EAECE4] uppercase tracking-wider">The FoundingLegals Advantage</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Why Choose FoundingLegals for UDYAM Registration?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm pt-4">
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Senior CA NIC Code Mapping</h4>
                <p className="text-[#EAECE4] leading-relaxed">We map exact 5-digit NIC codes to ensure maximum government subsidy eligibility and tender access.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Instant TM 50% Discount</h4>
                <p className="text-[#EAECE4] leading-relaxed">Immediate mapping of your Udyam Certificate to claim 50% discount on statutory trademark filings.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">45-Day Payment Recovery Support</h4>
                <p className="text-[#EAECE4] leading-relaxed">Comprehensive assistance to enforce 45-day payment recovery under Section 43B(h) and Samadhaan.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#48532B] hover:bg-[#F0F2EB] font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Apply for UDYAM Registration Now
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Apply for UDYAM Registration</h3>
              <p className="text-xs text-[#55524D] font-light">Fill your details below. Our senior CA team will issue your official Udyam Certificate.</p>
            </div>

            {formState.succeeded ? (
              <div className="bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#48532B] mx-auto" />
                <h4 className="font-serif font-bold text-base">Application Received!</h4>
                <p className="text-xs font-light">Our MSME registration consultant will contact you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input type="hidden" name="service" value="UDYAM / MSME Registration" />
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Business / Enterprise Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Acme Industries"
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
                  <label className="block text-[#1A1917] font-semibold mb-1">Phone Number (Aadhaar-Linked)</label>
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
                  <span>Submit UDYAM Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
