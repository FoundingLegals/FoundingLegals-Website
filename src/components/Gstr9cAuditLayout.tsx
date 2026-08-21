"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Audit Mandate & Slabs" },
  { id: "process", label: "Audit Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "CA CERTIFICATION",
    name: "Statutory CA Audit Certification",
    description: "Official Chartered Accountant certification validating the reconciliation of your audited financial statements (P&L and Balance Sheet) with GST portal declarations.",
    highlight: "100% Verified CA Audit Sign-off",
    icon: "📜"
  },
  {
    category: "P&L RECONCILIATION",
    name: "Financial P&L vs GST Turnover Alignment",
    description: "Reconciles unbilled revenue, advance receipts, stock transfers, sale of capital assets, and exempt income against GST portal turnover tables.",
    highlight: "Flawless Revenue Reconciliation",
    icon: "⚖️"
  },
  {
    category: "EXPENSE ITC AUDIT",
    name: "Table 14 Expense-Wise ITC Audit",
    description: "Detailed scrutiny of Input Tax Credit claimed across business expense ledgers (rent, audit fees, subscriptions, freight, legal fees) against portal claims.",
    highlight: "Table 14 Expense Audit Clearance",
    icon: "🔍"
  },
  {
    category: "DEPARTMENT DEFENSE",
    name: "Section 65 Departmental Audit Defense",
    description: "Proactive CA certification eliminates un-reconciled tax variances, shielding your enterprise from automated Section 65 audit scrutiny notices.",
    highlight: "Section 65 Notice Immunity",
    icon: "🛡️"
  },
  {
    category: "DRC-03 SETTLEMENT",
    name: "Voluntary DRC-03 Shortfall Resolution",
    description: "Identify tax differences or un-reversed ineligible ITC voluntarily and discharge them via Form DRC-03 to avoid 100% penalty levies under Section 74.",
    highlight: "Voluntary DRC-03 Clearance",
    icon: "💸"
  },
  {
    category: "CORPORATE GOVERNANCE",
    name: "Investor & Banking Audit Ready",
    description: "CA-certified Form GSTR-9C enhances enterprise valuation, loan underwriting approvals, and institutional investor due diligence standing.",
    highlight: "Investor & Bank Audit Clearance",
    icon: "🏢"
  }
];

// --- AUDIT MANDATE DATA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Aggregate Turnover > ₹5 Crore",
    description: "Mandatory for all registered entities whose aggregate annual turnover across India exceeds ₹5 Crore in the financial year."
  },
  {
    number: "2",
    title: "PAN-Level Multi-GSTIN Entities",
    description: "Calculated at the PAN level across all branch locations; if PAN turnover exceeds ₹5 Crore, GSTR-9C is mandatory for every GSTIN."
  },
  {
    number: "3",
    title: "Audited Financial Accounts Required",
    description: "Must be accompanied by the entity's Audited Balance Sheet, Profit & Loss Account, and Statutory Tax Audit Report (Form 3CD)."
  },
  {
    number: "4",
    title: "Prerequisite: GSTR-9 Mandatory",
    description: "Form GSTR-9 (Annual Return) must be drafted and reconciled prior to finalizing the GSTR-9C reconciliation statement."
  }
];

// --- AUDIT PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Audited Financials & Ledger Ingestion",
    desc: "Extraction of Audited P&L, Balance Sheet, Trial Balance, Form 3CD, and 12-month GST return copies."
  },
  {
    step: "STEP 2",
    title: "Table 5 & 7 Revenue Reconciliation",
    desc: "Reconciling Gross Revenue per P&L with GST Turnover; mapping unbilled advances, export turnover, and unadjusted credit notes."
  },
  {
    step: "STEP 3",
    title: "Table 9 Rate-Wise Tax Liability Audit",
    desc: "Reconciling tax payable at 5%, 12%, 18%, and 28% rates between audited financial ledgers and GST portal returns."
  },
  {
    step: "STEP 4",
    title: "Table 12 & 14 Expense-Wise ITC Scrutiny",
    desc: "Auditing ITC claimed on raw materials, capital goods, and general business overheads against P&L expense ledgers."
  },
  {
    step: "STEP 5",
    title: "Drafting CA Reconciliation Report",
    desc: "Compiling reconciliation tables, preparing CA audit qualification notes, and calculating voluntary DRC-03 tax payments."
  },
  {
    step: "STEP 6",
    title: "Senior CA Sign-off & Portal Submission",
    desc: "Chartered Accountant digital signature (DSC) certification and submission on the GST portal before 31st December."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "Audited Financial Statements (Balance Sheet, Profit & Loss Account, Notes to Accounts)",
  "Statutory Audit Report & Tax Audit Report (Form 3CD)",
  "Copies of all 12 GSTR-1 returns, 12 GSTR-3B returns, and PMT-06 paid challans",
  "Copy of draft or filed Form GSTR-9 Annual Return",
  "Complete Trial Balance with ledger-wise expense breakups",
  "Year-end GSTR-2A and GSTR-2B statement downloads",
  "Reconciliation statement of advance receipts and unbilled revenue",
  "Copies of DRC-03 voluntary tax deposit receipts made during the year"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is the key difference between Form GSTR-9 and Form GSTR-9C?",
    answer: "Form GSTR-9 is a consolidated annual return required for taxpayers with turnover > ₹2 Crore. Form GSTR-9C is a specialized CA-certified Audit & Reconciliation Statement required for taxpayers with turnover > ₹5 Crore that explicitly reconciles audited financial accounts (P&L) with GST portal returns."
  },
  {
    question: "Is GSTR-9C calculated at the GSTIN level or PAN level?",
    answer: "The ₹5 Crore threshold for GSTR-9C applicability is evaluated at the PAN level (aggregate turnover of all branches across India). If the PAN-level turnover exceeds ₹5 Crore, GSTR-9C must be filed for each individual GSTIN registered under that PAN."
  },
  {
    question: "What is Table 14 in Form GSTR-9C and why is it critical?",
    answer: "Table 14 reconciles the Input Tax Credit (ITC) claimed in GST returns with the eligible ITC recorded under specific expense heads in your audited Profit & Loss statement (such as freight, legal fees, repairs, office rent, software, and capital goods)."
  },
  {
    question: "How are differences between P&L turnover and GST portal turnover explained in GSTR-9C?",
    answer: "Discrepancies arising from unbilled revenue, unadjusted advance payments, exempted supplies, sale of capital goods, or stock transfers are explicitly reconciled in Table 5 (Gross Turnover) and Table 7 (Taxable Turnover) with detailed CA notes."
  },
  {
    question: "What is the statutory due date for filing GSTR-9C?",
    answer: "The statutory due date for filing Form GSTR-9C is 31st December following the end of the Financial Year."
  }
];

export default function Gstr9cAuditLayout() {
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
            <span>GST Audit & Reconciliation (GSTR-9C)</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            GST Audit & Reconciliation — <span className="italic text-[#48532B]">Form GSTR-9C Statement</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Mandatory CA-certified reconciliation statement for enterprises with aggregate turnover exceeding ₹5 Crore. Reconcile audited P&L turnover, rate-wise tax paid, and Table 14 expense-wise ITC with GST portal tables.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Execute GSTR-9C CA Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> 100% CA Certified Sign-off & P&L Alignment
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Audit Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                Under Section 44 of the CGST Act, 2017, read with Rule 80(3), every registered entity whose aggregate annual turnover across India exceeds <strong className="font-semibold text-[#1A1917]">₹5 Crore</strong> must submit a self-certified or CA-certified Reconciliation Statement in <strong className="font-semibold text-[#1A1917]">Form GSTR-9C</strong> alongside their annual return (Form GSTR-9).
              </p>
              <p>
                Form GSTR-9C is an intensive audit document that performs line-by-line reconciliation between the entity’s <strong className="font-semibold text-[#1A1917]">Audited Financial Statements (Profit & Loss Account and Balance Sheet)</strong> and the figures declared on the GST portal.
              </p>
              <p>
                The audit reconciliation encompasses four major tables: <strong className="font-semibold text-[#1A1917]">Table 5 & 7</strong> (Gross & Taxable Turnover), <strong className="font-semibold text-[#1A1917]">Table 9</strong> (Rate-wise Tax Liability), <strong className="font-semibold text-[#1A1917]">Table 12</strong> (ITC Reconciliation), and <strong className="font-semibold text-[#1A1917]">Table 14</strong> (Expense-wise ITC audit). Our Chartered Accountants ensure 100% mathematical accuracy and issue certified audit observations.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>GSTR-9C Audit Summary</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Mandatory Threshold:</span>
                  <span className="font-bold text-[#48532B]">Turnover &gt; ₹5 Crore</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Statutory Deadline:</span>
                  <span className="font-bold text-[#1A1917]">31st December</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Scope:</span>
                  <span className="font-bold text-[#48532B]">Audited P&L to Portal</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule GSTR-9C CA Audit
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Audit Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of GSTR-9C Certification</h2>
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

        {/* ── SECTION 3: AUDIT MANDATE & SLABS ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Applicability Mandate</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Audit Mandate & Applicability</h2>
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

        {/* ── SECTION 4: AUDIT PROCESS ── */}
        <section id="process" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">CA Audit Execution</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">GSTR-9C Audit Process</h2>
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Audit Checklist</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Documents Required</h2>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Calendar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>GSTR-9C Filing Deadline</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Statutory Filing Due Date:</span>
                  <span className="font-bold text-[#48532B]">31st December Post-FY</span>
                </li>
                <li className="flex justify-between">
                  <span>DRC-03 Settlement Window:</span>
                  <span className="font-bold text-[#1A1917]">Prior to Audit Submission</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#48532B]" />
                <span>Non-Compliance Consequences</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Compounding Late Fees:</span>
                  <span className="font-bold text-[#1A1917]">Up to ₹200 / Day</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Departmental Scrutiny:</span>
                  <span className="font-bold text-[#1A1917]">Sec 65 Tax Department Audit</span>
                </li>
                <li className="flex justify-between">
                  <span>General Penalty under Sec 125:</span>
                  <span className="font-bold text-[#48532B]">Up to ₹50,000</span>
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
              <h3 className="text-sm font-bold text-[#1A1917]">Qualified CA Sign-off</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Audit conducted and digitally signed by experienced Chartered Accountants.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Table 14 Expense Audit</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Detailed expense ledger analysis preventing inappropriate ITC claims.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Multi-GSTIN Audit</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">PAN-level audit consolidation across multi-state branch networks.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">FoundingLegals members save 50% compared to traditional CA audit fees.</p>
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Execute GSTR-9C CA Audit</h3>
              <p className="text-xs text-[#55524D]">Connect with a Chartered Accountant to certify your Form GSTR-9C reconciliation statement.</p>
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
                {formState.submitting ? "Submitting..." : "Schedule GSTR-9C CA Audit"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
