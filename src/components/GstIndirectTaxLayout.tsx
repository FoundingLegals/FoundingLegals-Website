"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Categories & Framework" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "TAX COMPLIANCE",
    name: "Complete Monthly & Annual Compliance",
    description: "End-to-end management of GSTR-1, GSTR-3B, QRMP IFF uploads, and GSTR-9/9C annual reconciliation returns under one CA team.",
    highlight: "Full Tax Filing Shield",
    icon: "📜"
  },
  {
    category: "CREDIT OPTIMIZATION",
    name: "100% GSTR-2B Input Tax Credit Offset",
    description: "Automated monthly 3-way reconciliation (Purchase Ledgers vs GSTR-2B) ensures zero missed credits and minimizes cash tax outlays.",
    highlight: "100% ITC Recovery",
    icon: "💳"
  },
  {
    category: "NOTICE PROTECTION",
    name: "Rule 88C & 88D Automated Notice Defense",
    description: "Algorithmic validation aligns outward GSTR-1 sales with GSTR-3B tax paid, preventing automated DRC-01B intimation notices.",
    highlight: "Rule 88C Notice Defense",
    icon: "🛡️"
  },
  {
    category: "SUPPLIER AUDIT",
    name: "Real-Time Defaulting Vendor Audit",
    description: "Receive monthly reports identifying non-compliant suppliers who collected tax from you but failed to file their GSTR-1.",
    highlight: "Vendor Audit Protection",
    icon: "🔍"
  },
  {
    category: "E-WAY & E-INVOICE",
    name: "Seamless E-Way Bill & E-Invoicing API",
    description: "Automated generation and compliance for IRN e-invoices and movement e-way bills for turnover above threshold limits.",
    highlight: "E-Invoice & E-Way Ready",
    icon: "🚀"
  },
  {
    category: "AUDIT READINESS",
    name: "CA-Certified Annual GSTR-9C Audit",
    description: "Preparation of annual reconciliation statements for turnover > ₹5 Crore, aligning audited financial accounts with portal filings.",
    highlight: "Certified Audit Clearance",
    icon: "🏛️"
  }
];

// --- CATEGORIES & FRAMEWORK ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "GST Registration & Setup",
    description: "Mandatory 15-digit GSTIN allotment for turnover > ₹40L (goods) / ₹20L (services) or compulsory e-commerce/inter-state trading."
  },
  {
    number: "2",
    title: "Monthly Filing (GSTR-1 & 3B)",
    description: "Mandatory for regular dealers with turnover > ₹5 Crore or those choosing monthly credit flow for B2B clients."
  },
  {
    number: "3",
    title: "Quarterly Filing (QRMP Scheme)",
    description: "Simplified quarterly return filing regime with monthly PMT-06 tax payments for turnover up to ₹5 Crore."
  },
  {
    number: "4",
    title: "Annual Audit (GSTR-9 & 9C)",
    description: "Consolidated annual return and CA-certified reconciliation statement comparing audited P&L with GST returns."
  }
];

// --- CA WORKFLOW PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Monthly Data Sync & Ledger Extraction",
    desc: "Ingestion of monthly sales registers, purchase ledgers, and credit/debit notes into your FoundingLegals vault."
  },
  {
    step: "STEP 2",
    title: "GSTR-2B 3-Way Master Reconciliation",
    desc: "Algorithmic cross-matching of purchase bills against GSTR-2B portal downloads; isolating unlisted vendor invoices."
  },
  {
    step: "STEP 3",
    title: "GSTR-1 Outward Sales Audit",
    desc: "Verification of B2B sales, B2C sales, HSN summaries, and place-of-supply rules prior to portal submission."
  },
  {
    step: "STEP 4",
    title: "GSTR-3B Tax Computation & Challans",
    desc: "Calculating net cash tax payable, setting off IGST/CGST/SGST credits, and creating electronic cash challans."
  },
  {
    step: "STEP 5",
    title: "Senior CA Verification & E-Filing",
    desc: "Final audit by a dedicated Chartered Accountant, client sign-off, and portal filing via EVC or DSC."
  },
  {
    step: "STEP 6",
    title: "Annual Consolidation & Audit",
    desc: "Executing annual GSTR-9 return filings and GSTR-9C reconciliation statements at year-end."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "15-digit GSTIN Certificate (Form GST REG-06)",
  "Monthly Sales Registers (B2B, B2C, Exports, HSN summaries)",
  "Monthly Purchase Registers & Inward Tax Invoices",
  "GSTR-2A & GSTR-2B Statement Downloads from GST Portal",
  "Audited Financial Statements (P&L Account, Balance Sheet for GSTR-9C)",
  "GST Portal Login Credentials (User ID & Password)"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What compliance services are included under GST & Indirect Tax management?",
    answer: "Our comprehensive CA package includes monthly GSTR-1 sales filing, GSTR-3B tax computation, monthly GSTR-2B ITC reconciliations, QRMP quarterly filing, annual GSTR-9 return filing, and GSTR-9C CA audit certification."
  },
  {
    question: "How does FoundingLegals protect my business from Rule 88C automated tax notices?",
    answer: "Rule 88C flags discrepancies between the output tax declared in GSTR-1 and the tax paid in GSTR-3B. Our CA team performs pre-filing cross-verification to ensure 100% mathematical alignment before submission, preventing DRC-01B intimation notices."
  },
  {
    question: "What is the threshold limit for mandatory GSTR-9C audit certification?",
    answer: "Form GSTR-9C (Reconciliation Statement) is mandatory for all regular GST taxpayers whose aggregate annual turnover exceeds ₹5 Crore in the financial year."
  },
  {
    question: "Can I claim Input Tax Credit on invoices not appearing in GSTR-2B?",
    answer: "No. Under Section 16(2)(aa) of the CGST Act, ITC can strictly be claimed only for purchase invoices that appear in your auto-drafted Form GSTR-2B on the GST portal."
  },
  {
    question: "What is the fee advantage for FoundingLegals members?",
    answer: "FoundingLegals members save 50% on ongoing monthly Indirect Tax retainers compared to traditional CA firm billing structures."
  }
];

export default function GstIndirectTaxLayout() {
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
            <span>Master Indirect Tax Compliance</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            GST & Indirect Tax Compliance — <span className="italic text-[#48532B]">End-to-End CA Retainer</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive Goods and Services Tax (GST) management under the CGST / SGST / IGST Act, 2017. Dedicated CA oversight for monthly GSTR-1, GSTR-3B, 3-way GSTR-2B ITC reconciliations, QRMP schemes, and annual GSTR-9/9C audit filings.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Started with CA Tax Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> Complete Tax Protection & Member Savings
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

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                The Goods and Services Tax (GST) framework is India’s premier indirect tax structure governing the supply of goods and services nationwide. Operating under a dual GST mechanism — Central GST (CGST) and State GST (SGST) for intra-state supplies, and Integrated GST (IGST) for inter-state transactions — compliance requires continuous monthly and annual execution.
              </p>
              <p>
                Modern GST compliance requires far more than basic data entry. Under strict provisions of <strong className="font-semibold text-[#1A1917]">Section 16(2)(aa)</strong>, Input Tax Credit (ITC) can only be claimed if your suppliers file their GSTR-1 on time. Discrepancies between GSTR-1 and GSTR-3B trigger automated notices under <strong className="font-semibold text-[#1A1917]">Rule 88C</strong>, demanding immediate tax recovery.
              </p>
              <p>
                At <strong className="font-semibold text-[#1A1917]">FoundingLegals</strong>, our senior Chartered Accountant team manages your complete Indirect Tax architecture — handling monthly GSTR-1/3B filings, QRMP schemes, 3-way GSTR-2B reconciliations, E-Way bills, E-Invoicing APIs, and annual GSTR-9/9C audit certifications.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>GST Tax Retainer Summary</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-1 (Outward Sales):</span>
                  <span className="font-bold text-[#48532B]">11th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-3B (Tax Payment):</span>
                  <span className="font-bold text-[#48532B]">20th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>QRMP Scheme:</span>
                  <span className="font-bold text-[#1A1917]">Quarterly</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>GSTR-9/9C Audit:</span>
                  <span className="font-bold text-[#48532B]">31st December</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule CA Tax Review
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of Full Retainer</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-2xs hover:border-[#D4D8C8] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F0F2EB] text-[#48532B]">
                    {item.highlight}
                  </span>
                </div>
                <div className="text-xs font-bold text-[#706D67] uppercase tracking-wider">{item.category}</div>
                <h3 className="text-base font-bold text-[#1A1917]">{item.name}</h3>
                <p className="text-xs text-[#55524D] leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: ELIGIBILITY & FRAMEWORK ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Compliance Pillars</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Indirect Tax Framework</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ELIGIBILITY_CRITERIA.map((crit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-3 relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-[#F0F2EB] text-[#48532B] font-bold text-xs flex items-center justify-center">
                  {crit.number}
                </div>
                <h3 className="text-sm font-bold text-[#1A1917]">{crit.title}</h3>
                <p className="text-xs text-[#55524D] leading-relaxed font-light">{crit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: PROCESS ── */}
        <section id="process" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">CA Workflow</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">CA Retainer Process</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-2xs space-y-2">
                <span className="text-xs font-bold text-[#48532B] tracking-wider">{step.step}</span>
                <h3 className="text-sm font-bold text-[#1A1917]">{step.title}</h3>
                <p className="text-xs text-[#55524D] leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: DOCUMENTS ── */}
        <section id="documents" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Checklist</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Documents & Ledgers Required</h2>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E5E0DA]">
            <ul className="grid md:grid-cols-2 gap-4">
              {REQUIRED_DOCUMENTS.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-[#1A1917]">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SECTION 6: TIMELINE & CALENDAR ── */}
        <section id="timeline" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Timeline</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Compliance Calendar</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
            <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#48532B]" />
              <span>Indirect Tax Due Dates</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-xs text-[#55524D]">
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-1 Outward Sales:</span>
                  <span className="font-bold text-[#48532B]">11th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-2B ITC Statement:</span>
                  <span className="font-bold text-[#1A1917]">14th Monthly</span>
                </li>
                <li className="flex justify-between">
                  <span>GSTR-3B Tax Remittance:</span>
                  <span className="font-bold text-[#48532B]">20th Monthly</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>QRMP PMT-06 Deposit:</span>
                  <span className="font-bold text-[#1A1917]">25th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-9 Annual Consolidation:</span>
                  <span className="font-bold text-[#48532B]">31st December</span>
                </li>
                <li className="flex justify-between">
                  <span>GSTR-9C Reconciliation Audit:</span>
                  <span className="font-bold text-[#48532B]">31st December</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">The FoundingLegals Edge</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Why Choose FoundingLegals?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <Award className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Dedicated Senior CA</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Direct access to qualified CAs managing your monthly tax returns.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Notice Immunity</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Pre-filing cross-verification protecting your business from Rule 88C flags.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Cloud Vault</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Permanent encrypted archival for all GSTR-1/3B/9 receipts and Challans.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Save 50% on monthly retainers compared to traditional CA audit firms.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: FAQS ── */}
        <section id="faqs" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Expert Clarifications</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-[#E5E0DA] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-semibold text-sm text-[#1A1917] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#48532B] shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-xs text-[#55524D] leading-relaxed font-light border-t border-[#F2ECE4] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── MODAL CONSULTATION FORM ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative space-y-6 shadow-2xl border border-[#E5E0DA]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[#706D67] hover:text-[#1A1917] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Connect with Tax CA Team</h3>
              <p className="text-xs text-[#55524D]">Schedule a call with a dedicated Chartered Accountant for your GST & Indirect Tax retainers.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Full Name"
                className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#E5E0DA] rounded-xl focus:outline-none focus:border-[#48532B]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Business Email Address"
                className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#E5E0DA] rounded-xl focus:outline-none focus:border-[#48532B]"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Mobile / WhatsApp Number"
                className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#E5E0DA] rounded-xl focus:outline-none focus:border-[#48532B]"
              />

              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                {formState.submitting ? "Submitting..." : "Schedule CA Consultation"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
