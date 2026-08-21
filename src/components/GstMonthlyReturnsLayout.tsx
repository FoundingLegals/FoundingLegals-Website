"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Eligibility & Applicability" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Penalties" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "UNINTERRUPTED B2B CREDIT",
    name: "Uninterrupted B2B Client ITC Flow",
    description: "Filing GSTR-1 on or before the 11th ensures your sales invoices populate in your buyers' GSTR-2B on the 14th, eliminating client payment holds and preserving vendor relationships.",
    highlight: "Seamless Client Credit Flow",
    icon: "⚡"
  },
  {
    category: "TAX OFFSETS",
    name: "Maximum Eligible ITC Recovery",
    description: "Monthly matching of purchase registers against GSTR-2B statements prevents missed credit claims and minimizes net cash tax outlays.",
    highlight: "Lower Monthly Cash Tax",
    icon: "💰"
  },
  {
    category: "NOTICE PROTECTION",
    name: "Rule 88C Notice & Suspension Defense",
    description: "CA cross-verification aligns GSTR-1 sales figures with GSTR-3B liabilities, shielding your entity from automated Rule 88C tax recovery notices.",
    highlight: "Rule 88C Notice Immunity",
    icon: "🛡️"
  },
  {
    category: "TARIFF ACCURACY",
    name: "Audit-Ready HSN & Tariff Accuracy",
    description: "Verification of mandatory 4-digit or 6-digit HSN/SAC code summaries, ensuring compliance with CBIC tax rate notifications.",
    highlight: "Verified Tariff Codes",
    icon: "📋"
  },
  {
    category: "CASH LEDGER",
    name: "Electronic Cash Ledger & Challan Management",
    description: "Automated creation of PMT-06 challans for exact net tax payable in cash after applying legal IGST/CGST/SGST set-off rules.",
    highlight: "Exact Payment Challans",
    icon: "🏦"
  },
  {
    category: "SUPPLIER AUDIT",
    name: "Real-Time Defaulting Supplier Detection",
    description: "Receive monthly reports identifying suppliers who collected GST from you but failed to file their GSTR-1, blocking your credit.",
    highlight: "Supplier Risk Monitoring",
    icon: "🔔"
  }
];

// --- APPLICABILITY CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Turnover Above ₹5 Crore (Mandatory)",
    description: "Mandatory monthly filing regime for all regular GST registered taxpayers with aggregate annual turnover exceeding ₹5 Crore."
  },
  {
    number: "2",
    title: "Turnover Up to ₹5 Crore (Optional Monthly)",
    description: "Taxpayers with turnover up to ₹5 Crore who choose monthly filing over QRMP to maintain steady credit flow for B2B clients."
  },
  {
    number: "3",
    title: "High-Frequency B2B Suppliers",
    description: "Businesses issuing multiple B2B invoices monthly requiring regular HSN code verification and buyer credit updates."
  },
  {
    number: "4",
    title: "E-Commerce & Multi-State Entities",
    description: "Entities selling on Amazon/Flipkart or maintaining multi-state GSTINs requiring active monthly tax ledgers."
  }
];

// --- FILING PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Monthly Data Sync (by 5th)",
    desc: "Upload sales invoice ledgers, credit/debit notes, and purchase registers into your secure FoundingLegals vault."
  },
  {
    step: "STEP 2",
    title: "GSTR-1 Draft Compilation & HSN Audit",
    desc: "Categorization of B2B sales, B2C sales, exports, and HSN summary tables; checking invoice numbering sequence."
  },
  {
    step: "STEP 3",
    title: "GSTR-2B Automated ITC Reconciliation",
    desc: "Algorithmic matching of inward purchase bills against portal GSTR-2B; flagging non-filing vendors."
  },
  {
    step: "STEP 4",
    title: "GSTR-3B Tax Computation & Challan Creation",
    desc: "Calculating net tax liability, applying statutory credit set-off rules (IGST -> CGST/SGST), and generating net cash challans."
  },
  {
    step: "STEP 5",
    title: "Senior CA Review & Client Approval",
    desc: "A dedicated Chartered Accountant validates figures, checks tax rate applicability, and shares draft returns for approval."
  },
  {
    step: "STEP 6",
    title: "E-Filing & ARN Vaulting",
    desc: "Electronic submission via EVC or DSC on the GST portal, followed by instant archival of ARN receipts in your vault."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "Outward Sales Register (Invoice number, GSTIN, Taxable Value, Tax Rates, POS)",
  "Inward Purchase Register & Credit/Debit Notes",
  "GSTR-2B Statement downloaded from GST Portal",
  "Electronic Cash & Credit Ledger balances",
  "Export Documents (Bill of Entry, Shipping Bills, LUT reference if zero-rated)",
  "GST Portal Credentials (Username & Password for secure API access)"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "Can I amend an error made in a previously filed GSTR-1 return?",
    answer: "Yes. Errors in invoice details, taxable values, GSTINs, or Place of Supply can be amended in subsequent months' GSTR-1 filings under the 'Amends' section before the statutory deadline (the 30th November following the end of the financial year)."
  },
  {
    question: "What is Rule 88C and why does it send automated notices?",
    answer: "Rule 88C compares the tax liability declared in your GSTR-1 with the tax paid in your GSTR-3B. If GSTR-1 tax exceeds GSTR-3B tax by a specified limit, the portal generates an automated DRC-01B intimation. You must pay the difference or submit a formal CA explanation within 7 days to prevent portal blocking."
  },
  {
    question: "What is Rule 86B and does it require paying 1% tax in cash?",
    answer: "Rule 86B applies to registered entities whose monthly taxable turnover (excluding exempt goods and zero-rated exports) exceeds ₹50 Lakhs. Under Rule 86B, the entity cannot use ITC to discharge more than 99% of its total output tax liability — meaning at least 1% of the tax liability must be paid in cash."
  },
  {
    question: "Is Input Tax Credit allowed for purchase invoices missing from GSTR-2B?",
    answer: "No. Under Section 16(2)(aa) of the CGST Act, Input Tax Credit can strictly be claimed only for invoices that appear in your auto-drafted Form GSTR-2B. Unlisted invoices cannot be claimed in GSTR-3B."
  },
  {
    question: "What are the exact due dates for monthly GSTR-1 and GSTR-3B?",
    answer: "Monthly GSTR-1 is due on the 11th of every month following the tax period. Monthly GSTR-3B is due on the 20th of every month following the tax period."
  }
];

export default function GstMonthlyReturnsLayout() {
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
            <span>Monthly GST Return Compliance</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Monthly GST Return Filing — <span className="italic text-[#48532B]">GSTR-1 & GSTR-3B</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            File your outward sales statement (GSTR-1) by the 11th and self-assessment tax return (GSTR-3B) by the 20th of every month. Protect buyer Input Tax Credit (ITC), conduct monthly GSTR-2B reconciliations, and eliminate late fees with dedicated CA management.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>File Monthly GST Returns</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> 100% On-Time Filing & Zero Penalty Guarantee
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Operational Tax Compliance</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                Monthly GST compliance consists of two interdependent statutory return filings: <strong className="font-semibold text-[#1A1917]">GSTR-1</strong> (the detailed statement of outward sales, debit/credit notes, and tax collected) and <strong className="font-semibold text-[#1A1917]">GSTR-3B</strong> (the summary return for self-assessment of tax liability, ITC utilization, and cash tax payment).
              </p>
              <p>
                Under strict enforcement of Rule 36(4) and Section 16(2)(aa) of the CGST Act, your B2B buyers can legally claim Input Tax Credit (ITC) <strong className="font-semibold text-[#1A1917]">only if your GSTR-1 is accurately filed on or before the 11th of every month</strong>. Delaying or misreporting GSTR-1 immediately blocks your corporate clients' tax credits, leading to withheld client payments and damaged business credibility.
              </p>
              <p>
                Furthermore, any downward variance between the output tax reported in GSTR-1 and the tax remitted in GSTR-3B triggers automated portal flags under <strong className="font-semibold text-[#1A1917]">Rule 88C</strong>. Tax authorities issue automated DRC-01B notices demanding immediate payment or formal explanation, failing which bank accounts and portal credentials can be frozen. FoundingLegals assigns a dedicated Chartered Accountant to execute your monthly filing cycle.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Monthly Compliance Calendar</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-1 (Outward Sales):</span>
                  <span className="font-bold text-[#48532B]">11th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-2B (ITC Available):</span>
                  <span className="font-bold text-[#1A1917]">14th Monthly</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>GSTR-3B (Tax Payment):</span>
                  <span className="font-bold text-[#48532B]">20th Monthly</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule CA Filing Support
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of Monthly Compliance</h2>
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

        {/* ── SECTION 3: ELIGIBILITY & APPLICABILITY ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Filing Mandate</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Eligibility & Applicability</h2>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Monthly Filing Process</h2>
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

        {/* ── SECTION 6: TIMELINE & PENALTIES ── */}
        <section id="timeline" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Due Dates & Fines</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Penalty Structure</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Monthly Statutory Due Dates</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-1 Outward Supplies:</span>
                  <span className="font-bold text-[#48532B]">11th of Following Month</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>GSTR-2B Statement Generation:</span>
                  <span className="font-bold text-[#1A1917]">14th of Following Month</span>
                </li>
                <li className="flex justify-between">
                  <span>GSTR-3B Tax Liability Payment:</span>
                  <span className="font-bold text-[#48532B]">20th of Following Month</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#48532B]" />
                <span>Late Fees & Interest Levy</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Late Fee (Tax Liability Return):</span>
                  <span className="font-bold text-[#1A1917]">₹50 / Day (₹25 CGST + ₹25 SGST)</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Late Fee (NIL Return):</span>
                  <span className="font-bold text-[#1A1917]">₹20 / Day (₹10 CGST + ₹10 SGST)</span>
                </li>
                <li className="flex justify-between">
                  <span>Interest under Sec 50:</span>
                  <span className="font-bold text-[#48532B]">18% P.A. on Cash Liability</span>
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
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Returns prepared and audited by qualified CAs — no entry-level data operators.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Vendor Risk Audit</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Monthly mismatch reports flagging suppliers who collect tax but fail to file.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Vault Archival</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Permanent encrypted cloud storage for return summaries, Challans, and ARNs.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">FoundingLegals members save 50% compared to traditional CA firm retainers.</p>
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">File Monthly GST Returns</h3>
              <p className="text-xs text-[#55524D]">Connect with a dedicated Chartered Accountant for zero-error GSTR-1 & GSTR-3B filing.</p>
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
              <input
                type="text"
                name="gstin"
                placeholder="GSTIN Number (Optional)"
                className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#E5E0DA] rounded-xl focus:outline-none focus:border-[#48532B]"
              />

              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                {formState.submitting ? "Submitting..." : "Connect with CA Team"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
