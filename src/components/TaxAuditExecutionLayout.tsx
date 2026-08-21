"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Audit Slabs & Mandates" },
  { id: "process", label: "Audit Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Penalties" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "PENALTY IMMUNITY",
    name: "Section 271B Penalty Immunity",
    description: "Filing your statutory Tax Audit report on time eliminates the severe non-compliance penalty of 0.5% of gross turnover or ₹1,500,000 under Section 271B.",
    highlight: "₹1.5 Lakhs Penalty Immunity",
    icon: "🛡️"
  },
  {
    category: "EXPENSE DEDUCTIONS",
    name: "Legitimate Expense Deduction Clearance",
    description: "Senior CA scrutiny ensures 100% allowable business expenses are claimed while identifying statutory disallowances before Income Tax Department scrutiny.",
    highlight: "Max Allowable Tax Claims",
    icon: "💼"
  },
  {
    category: "BANK LOANS & CREDIT",
    name: "Bank Loan & Credit Line Approval",
    description: "Form 3CA/3CB and Form 3CD audit reports certified by a Chartered Accountant are mandatory prerequisites demanded by commercial banks and NBFCs for credit facilities.",
    highlight: "Bank Loan & OD Clearance",
    icon: "🏦"
  },
  {
    category: "STATUTORY PAYMENTS",
    name: "Section 43B & 43B(h) MSME Compliance",
    description: "Verifies timely deposit of statutory dues (PF, ESIC, GST) and payment to registered MSME suppliers within 15/45 days to protect tax deductibility.",
    highlight: "Sec 43B(h) MSME Clearance",
    icon: "⚖️"
  },
  {
    category: "CASH TRANSACTIONS",
    name: "Cash Audit (Sec 40A(3) & 269SS/269T)",
    description: "Audits cash payments > ₹10,000 and cash loans/repayments > ₹20,000 to prevent 100% penalty disallowances under tax assessment.",
    highlight: "Cash Audit Clearance",
    icon: "💵"
  },
  {
    category: "INVESTOR VALUATION",
    name: "Investor & Venture Audit Ready",
    description: "CA-certified Form 3CD report enhances startup corporate governance standing, institutional investor valuation, and due diligence checks.",
    highlight: "Investor-Ready Financials",
    icon: "🏢"
  }
];

// --- AUDIT MANDATE DATA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Business Turnover > ₹1 Crore",
    description: "Mandatory for entities carrying on business whose total aggregate turnover exceeds ₹1 Crore (Standard Cash/Digital Mix)."
  },
  {
    number: "2",
    title: "Digital Business Turnover > ₹10 Crore",
    description: "Applies if aggregate cash receipts and cash payments do not exceed 5% of total annual business transactions."
  },
  {
    number: "3",
    title: "Professional Receipts > ₹50 Lakhs",
    description: "Mandatory for professionals (Doctors, Lawyers, CAs, Architects, Engineers, Consultants) with gross receipts > ₹50 Lakhs (or > ₹75L digital)."
  },
  {
    number: "4",
    title: "Presumptive Tax Opt-Out Entities",
    description: "Taxpayers opting out of Section 44AD / 44ADA / 44AE before the 5-year lock-in period claiming lower profit margins."
  }
];

// --- CA AUDIT PROCESS STEPS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Trial Balance & Ledger Scrutiny",
    desc: "Ingestion and review of trial balance ledgers, audited P&L accounts, balance sheets, and annual bank statements."
  },
  {
    step: "STEP 2",
    title: "44-Clause Form 3CD Audit Verification",
    desc: "Detailed audit of statutory disallowances (Sec 40(a)(ia) TDS, Sec 40A(3) cash payments, Sec 43B statutory dues)."
  },
  {
    step: "STEP 3",
    title: "Section 43B(h) MSME Payment Audit",
    desc: "Verification of outstanding vendor ledgers against MSME registration status and payment timelines (15/45 days)."
  },
  {
    step: "STEP 4",
    title: "Drafting Form 3CA / 3CB & Form 3CD Report",
    desc: "Compiling 44 audit clauses, preparing CA qualification observations, and finalizing tax audit schedules."
  },
  {
    step: "STEP 5",
    title: "Senior CA Sign-off & Portal Submission",
    desc: "Chartered Accountant digital signature (DSC) certification and upload on the Income Tax E-Filing Portal before 31st October."
  },
  {
    step: "STEP 6",
    title: "Client Acceptance & Vault Archival",
    desc: "Taxpayer approves the CA audit report on the Income Tax portal, followed by permanent vault archival of files."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "Trial Balance, Audited Balance Sheet, Profit & Loss Account, and Notes to Accounts",
  "Bank Statements for all business accounts for the full financial year",
  "Complete Outward Sales Registers, Purchase Registers, and Credit/Debit Notes",
  "Form 26AS, Annual Information Statement (AIS), and Tax Information Summary (TIS)",
  "TDS Return Acknowledgments & Paid ITNS 281 Challan Receipts",
  "MSME Registration Certificates & Payment Receipts of suppliers (Sec 43B(h) audit)",
  "Fixed Asset Register & Statutory Depreciation Schedule under Income Tax Rules",
  "Copies of PY Tax Audit Report (Form 3CD) and PY ITR Acknowledgment"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is the difference between Form 3CA and Form 3CB in a Tax Audit?",
    answer: "Form 3CA is used when the entity's accounts are already mandated to be audited under another law (such as Companies Act for Pvt Ltd companies or LLP Act for LLPs). Form 3CB is used when the accounts are audited exclusively under Section 44AB of the Income Tax Act (such as sole proprietorships and partnership firms)."
  },
  {
    question: "What is Section 43B(h) and how does it affect business tax deductions?",
    answer: "Section 43B(h) mandates that any sum payable to a registered Micro or Small Enterprise (MSME) for goods or services must be paid within 15 days (or up to 45 days if there is a written agreement). If payment is delayed beyond this timeline, the expense is disallowed in that financial year and added back to taxable business income."
  },
  {
    question: "What is the penalty for failing to get accounts audited under Section 44AB?",
    answer: "Under Section 271B of the Income Tax Act, failure to get accounts audited or submit the tax audit report by the due date attracts a mandatory penalty equal to 0.5% of gross turnover/receipts or ₹1,500,000 (whichever is lower)."
  },
  {
    question: "When is the ₹10 Crore turnover threshold applicable for business tax audit?",
    answer: "The ₹10 Crore turnover threshold applies if both: (1) aggregate cash receipts do not exceed 5% of total gross receipts, and (2) aggregate cash payments do not exceed 5% of total payments made during the financial year."
  },
  {
    question: "What is the statutory due date for filing Section 44AB Tax Audit reports?",
    answer: "The statutory due date for filing Form 3CA/3CB and Form 3CD Tax Audit reports on the Income Tax portal is 31st October of the Assessment Year."
  }
];

export default function TaxAuditExecutionLayout() {
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
            <span>Section 44AB Income Tax Audit</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Tax Audit Execution — <span className="italic text-[#48532B]">Form 3CA / 3CB & Form 3CD</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Mandatory Income Tax Audit under Section 44AB for businesses with turnover &gt; ₹1 Crore (or ₹10 Crore digital) and professionals earning &gt; ₹50 Lakhs. Senior CA audit certification covering 44-clause Form 3CD, Section 43B(h) MSME compliance, and Form 3CA/3CB portal submission.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Execute Section 44AB Tax Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> 100% CA Certified Audit & Zero Sec 271B Penalty
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Income Tax Audit Architecture</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                Under Section 44AB of the Income Tax Act, 1961, every person carrying on a business or profession whose total sales, turnover, or gross receipts exceed statutory threshold limits is legally required to get their accounts audited by a qualified Chartered Accountant before filing their Income Tax Return.
              </p>
              <p>
                A Statutory Tax Audit comprises two mandatory reports uploaded electronically on the Income Tax E-Filing Portal: <strong className="font-semibold text-[#1A1917]">Form 3CA / Form 3CB</strong> (the auditor's principal report certifying the true and fair view of financial accounts) and <strong className="font-semibold text-[#1A1917]">Form 3CD</strong> (a detailed 44-clause statement of particulars disclosing statutory tax adjustments).
              </p>
              <p>
                The audit scrutinizes compliance across critical tax heads: <strong className="font-semibold text-[#1A1917]">Section 40(a)(ia)</strong> (TDS deduction defaults), <strong className="font-semibold text-[#1A1917]">Section 40A(3)</strong> (cash payments exceeding ₹10,000), <strong className="font-semibold text-[#1A1917]">Section 43B & 43B(h)</strong> (timely payment of statutory dues and payments to registered MSME vendors within 15/45 days), and <strong className="font-semibold text-[#1A1917]">Section 269SS/269T</strong> (cash loan deposits and repayments). FoundingLegals provides dedicated CA audit management.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Section 44AB Audit Calendar</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Tax Audit Due Date:</span>
                  <span className="font-bold text-[#48532B]">31st October</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Audited ITR Due Date:</span>
                  <span className="font-bold text-[#1A1917]">31st October</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Sec 271B Penalty Cap:</span>
                  <span className="font-bold text-[#48532B]">₹1.5 Lakhs / 0.5%</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule Section 44AB CA Audit
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Audit Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of Tax Audit Certification</h2>
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

        {/* ── SECTION 3: AUDIT SLABS & MANDATES ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Thresholds</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Audit Slabs & Mandates</h2>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Tax Audit Process</h2>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Penalty Structure</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Section 44AB Statutory Due Dates</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Tax Audit Filing Deadline:</span>
                  <span className="font-bold text-[#48532B]">31st October of AY</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Audited ITR Filing Deadline:</span>
                  <span className="font-bold text-[#1A1917]">31st October of AY</span>
                </li>
                <li className="flex justify-between">
                  <span>Transfer Pricing (Form 3CEB):</span>
                  <span className="font-bold text-[#48532B]">30th November of AY</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#48532B]" />
                <span>Statutory Penalty Slabs</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Sec 271B Late Penalty:</span>
                  <span className="font-bold text-[#1A1917]">0.5% Turnover or ₹1.5 Lakhs</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Sec 40A(3) Cash Payment:</span>
                  <span className="font-bold text-[#1A1917]">100% Disallowance &gt; ₹10k</span>
                </li>
                <li className="flex justify-between">
                  <span>Sec 43B(h) MSME Disallowance:</span>
                  <span className="font-bold text-[#48532B]">Expense Disallowed if &gt; 45 Days</span>
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
              <h3 className="text-sm font-bold text-[#1A1917]">Qualified CA Certification</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Audit executed and digitally signed by senior Chartered Accountants.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">MSME Sec 43B(h) Audit</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Automated tracking of MSME vendor payments to prevent expense disallowances.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">44-Clause Scrutiny</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Thorough clause-by-clause Form 3CD drafting protecting your business from penalties.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">FoundingLegals members save 50% compared to traditional CA audit firm retainers.</p>
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Execute Section 44AB Tax Audit</h3>
              <p className="text-xs text-[#55524D]">Connect with a Chartered Accountant to certify your Form 3CA/3CB and Form 3CD reports.</p>
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
                {formState.submitting ? "Submitting..." : "Schedule CA Tax Audit Consultation"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
