"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Eligibility & Criteria" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Late Fees" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "RECTIFICATION WINDOW",
    name: "Final Year-End Error Adjustment",
    description: "Utilize the statutory annual return filing window to adjust genuine reporting mistakes, un-claimed spillover ITC, or tax calculation variances from prior monthly returns.",
    highlight: "Year-End Adjustment Window",
    icon: "⚖️"
  },
  {
    category: "AUDIT IMMUNITY",
    name: "Section 65 Audit Scrutiny Defense",
    description: "Thorough 3-way reconciliation (Financial Books vs GSTR-9 vs Monthly Returns) eliminates red flags that trigger automated tax departmental audit notices.",
    highlight: "Audit Scrutiny Protection",
    icon: "🛡️"
  },
  {
    category: "DRC-03 SETTLEMENT",
    name: "Voluntary DRC-03 Tax Settlement",
    description: "Identify tax shortfalls voluntarily and settle them via Form DRC-03 with statutory interest, avoiding severe 100% penalty levies under Section 74.",
    highlight: "Voluntary DRC-03 Settlement",
    icon: "💸"
  },
  {
    category: "3-WAY RECONCILIATION",
    name: "Flawless P&L vs Portal Alignment",
    description: "Reconcile gross revenue, export income, exempt supplies, and input expenses between audited financial ledgers and GST portal tables.",
    highlight: "3-Way Master Reconciliation",
    icon: "📊"
  },
  {
    category: "CREDIT RATING",
    name: "Investor & Lender Due Diligence",
    description: "Clean, CA-reconciled GSTR-9 and 9C filings enhance enterprise valuation, bank credit underwriting, and investor due diligence standing.",
    highlight: "Investor-Ready Financials",
    icon: "🏢"
  },
  {
    category: "HSN REPORTING",
    name: "Consolidated Annual HSN Summary",
    description: "Consolidate outward and inward HSN/SAC summaries across the 12-month period in compliance with government audit notifications.",
    highlight: "Consolidated HSN Reporting",
    icon: "📦"
  }
];

// --- CRITERIA DATA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Form GSTR-9 (Turnover > ₹2 Crore)",
    description: "Mandatory annual return for all regular GST taxpayers with aggregate turnover exceeding ₹2 Crore in the financial year."
  },
  {
    number: "2",
    title: "Form GSTR-9C (Turnover > ₹5 Crore)",
    description: "Mandatory CA-certified reconciliation statement for taxpayers with aggregate turnover exceeding ₹5 Crore."
  },
  {
    number: "3",
    title: "Optional below ₹2 Crore",
    description: "Filing GSTR-9 is optional for taxpayers with turnover under ₹2 Crore, but recommended for clean tax audit records."
  },
  {
    number: "4",
    title: "Mandatory for Corporate Entities",
    description: "Crucial compliance document required for private limited companies, LLPs, and audited partnership firms."
  }
];

// --- AUDIT PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Financial Year Data Extraction",
    desc: "Gathering all 12 GSTR-1s, 12 GSTR-3Bs, GSTR-2A/2B portal downloads, and Audited Financial Statements (P&L, Balance Sheet)."
  },
  {
    step: "STEP 2",
    title: "3-Way Master Reconciliation Audit",
    desc: "Cross-verifying Sales Revenue, Input Expenses, ITC Ledgers, and HSN Summaries between financial ledgers and filed portal returns."
  },
  {
    step: "STEP 3",
    title: "Variance Mapping & DRC-03 Calculation",
    desc: "Isolating tax shortfalls, un-reversed ineligible ITC, or spill-over credits; calculating voluntary DRC-03 tax and interest payments."
  },
  {
    step: "STEP 4",
    title: "Draft GSTR-9 & 9C Preparation",
    desc: "Compiling multi-table reconciliation schedules, preparing turnover adjustment tables, and drafting CA certification notes."
  },
  {
    step: "STEP 5",
    title: "Senior CA Review & Sign-off",
    desc: "Senior CA reviews audit observations, validates reconciliation schedules, and approves draft returns."
  },
  {
    step: "STEP 6",
    title: "Portal Submission & Vaulting",
    desc: "Online submission on the GST portal before 31st December and permanent archival of filed copies and ARNs in your vault."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "Audited Financial Statements (Balance Sheet, Profit & Loss Account, Notes to Accounts)",
  "Statutory Audit Report & Tax Audit Report (Form 3CD)",
  "Copies of all 12 GSTR-1 returns, 12 GSTR-3B returns, and PMT-06 paid challans",
  "Complete 12-month Sales Register, Purchase Register, and Credit/Debit Notes",
  "Year-end GSTR-2A and GSTR-2B portal downloads",
  "Copies of any DRC-03 voluntary tax payment receipts made during the year"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "Can Input Tax Credit (ITC) be claimed for the first time in Form GSTR-9?",
    answer: "No. GSTR-9 is a consolidation return. Statutory rules prohibit claiming new Input Tax Credit through Form GSTR-9. Unclaimed ITC for a financial year must be claimed in monthly returns filed up to the statutory cutoff date (the 30th November following the end of the financial year)."
  },
  {
    question: "What if there is a difference between Gross Turnover in P&L and Turnover in GSTR-9?",
    answer: "Variances between audited P&L revenue and GST turnover (caused by unbilled revenue, advance receipts, stock transfers, sale of fixed assets, or exempt income) are common. These differences must be explicitly reconciled and justified in Table 5 & Table 7 of Form GSTR-9C."
  },
  {
    question: "What happens if an entity fails to file GSTR-9 and GSTR-9C?",
    answer: "Non-filing attracts compounding daily late fees. More critically, tax authorities issue notices under Section 46 and may initiate scrutiny assessments under Section 65, leading to automated demand notices for un-reconciled ITC and turnover mismatches."
  },
  {
    question: "Can short-paid tax identified during GSTR-9 reconciliation be paid in cash?",
    answer: "Yes. Short tax payments or un-reversed ineligible ITC identified during annual reconciliation can be discharged voluntarily using Form DRC-03 on the GST portal, selecting 'Annual Return' as the cause of payment."
  },
  {
    question: "What is the statutory due date for GSTR-9 and GSTR-9C?",
    answer: "The statutory due date for filing GSTR-9 and GSTR-9C is 31st December following the end of the Financial Year."
  }
];

export default function Gstr9AnnualReturnLayout() {
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
            <span>Annual GST Return (Form GSTR-9)</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Annual GST Return — <span className="italic text-[#48532B]">Form GSTR-9 Consolidation</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive annual consolidation of 12-month GSTR-1 outward sales and GSTR-3B tax returns. Reconcile monthly portal filings, rectify year-end reporting variances, and file DRC-03 voluntary tax settlements with CA accuracy.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>File GSTR-9 Annual Return</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> 12-Month Consolidation & Zero Audit Notice Guarantee
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Annual Reconciliation Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                Under Section 44 of the CGST Act, every registered regular taxpayer must file an Annual Return in <strong className="font-semibold text-[#1A1917]">Form GSTR-9</strong>. Furthermore, for entities with aggregate annual turnover exceeding <strong className="font-semibold text-[#1A1917]">₹5 Crore</strong>, a self-certified Reconciliation Statement in <strong className="font-semibold text-[#1A1917]">Form GSTR-9C</strong> must be prepared and submitted alongside the audited financial accounts.
              </p>
              <p>
                Form GSTR-9 acts as the final statutory consolidation of all outward sales, inward purchases, Input Tax Credit (ITC) claimed, ITC reversed, tax paid, and demands/refunds reported across the 12 months of the financial year. Form GSTR-9C explicitly reconciles the Gross Turnover, Taxable Turnover, Tax Paid, and ITC reported in GSTR-9 against the figures declared in the entity’s <strong className="font-semibold text-[#1A1917]">Audited Financial Statements (Balance Sheet and Profit & Loss Account)</strong>.
              </p>
              <p>
                GSTR-9 filing represents the <strong className="font-semibold text-[#1A1917]">final legal window</strong> for businesses to reconcile year-end reporting variances, declare spill-over credits from the previous financial year, and voluntarily settle short-paid taxes or un-reversed ineligible ITC via <strong className="font-semibold text-[#1A1917]">Form DRC-03</strong> before tax authorities initiate audit proceedings under Section 65.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Statutory Annual Deadlines</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>ITC Cutoff Date:</span>
                  <span className="font-bold text-[#48532B]">30th November</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-9 / 9C Due Date:</span>
                  <span className="font-bold text-[#1A1917]">31st December</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Late Fee Cap (up to ₹5 Cr):</span>
                  <span className="font-bold text-[#48532B]">0.04% Turnover</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule Annual Audit Review
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Audit Benefits</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of Annual Filing</h2>
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

        {/* ── SECTION 3: ELIGIBILITY & CRITERIA ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Threshold Criteria</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Eligibility & Criteria</h2>
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">CA Audit Workflow</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">GSTR-9 & 9C Audit Process</h2>
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

        {/* ── SECTION 6: TIMELINE & LATE FEES ── */}
        <section id="timeline" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Timeline</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Penalty Structure</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Statutory Filing Deadline</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Annual Filing Deadline:</span>
                  <span className="font-bold text-[#48532B]">31st December Post-FY</span>
                </li>
                <li className="flex justify-between">
                  <span>DRC-03 Payment Window:</span>
                  <span className="font-bold text-[#1A1917]">Prior to Return Submission</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#48532B]" />
                <span>Late Fee Structure</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Turnover Up to ₹5 Cr:</span>
                  <span className="font-bold text-[#1A1917]">₹50 / Day (Cap 0.04% Turnover)</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Turnover ₹5 Cr – ₹50 Cr:</span>
                  <span className="font-bold text-[#1A1917]">₹100 / Day (Cap 0.04% Turnover)</span>
                </li>
                <li className="flex justify-between">
                  <span>Turnover Above ₹50 Cr:</span>
                  <span className="font-bold text-[#48532B]">₹200 / Day (Cap 0.50% Turnover)</span>
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
              <h3 className="text-sm font-bold text-[#1A1917]">Forensic CA Audit</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Senior CAs analyze 12-month transaction ledgers and financial statements.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">15+ Audit Scripts</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Automated consistency scripts detecting hidden red flags before submission.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">DRC-03 Guidance</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Legal advice on voluntary tax settlement to prevent 100% fraud penalties.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">FoundingLegals members save 50% compared to traditional audit firm fees.</p>
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">File GSTR-9 & 9C Audit</h3>
              <p className="text-xs text-[#55524D]">Connect with a Chartered Accountant to reconcile your financial ledgers & file annual returns.</p>
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
                {formState.submitting ? "Submitting..." : "Schedule CA Audit Consultation"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
