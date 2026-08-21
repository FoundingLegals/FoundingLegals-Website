"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Eligibility & Schemes" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Due Dates" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "REDUCED COMPLIANCE",
    name: "70% Reduction in Return Filings",
    description: "File only 4 GSTR-3B summary returns annually instead of 12, dramatically cutting down administrative friction and accounting stress.",
    highlight: "4 Returns/Yr Instead of 12",
    icon: "📉"
  },
  {
    category: "MONTHLY ITC TRANSFER",
    name: "Monthly B2B Credit Flow via IFF",
    description: "Upload high-value B2B sales invoices monthly (up to ₹50 Lakhs/month) via the IFF, allowing buyers to claim ITC every month without waiting for quarter-end.",
    highlight: "Monthly Buyer Credit Transfer",
    icon: "🚀"
  },
  {
    category: "PAYMENT FLEXIBILITY",
    name: "Flexible Monthly Tax Payment Options",
    description: "Choose between a pre-filled 35% automated challan (Fixed Sum Method) or exact actual liability calculation (Self-Assessment Method).",
    highlight: "Cash Flow Payment Flexibility",
    icon: "💵"
  },
  {
    category: "INTEREST IMMUNITY",
    name: "Interest Protection Under Fixed Sum Method",
    description: "Under the Fixed Sum Method, depositing the 35% pre-filled challan amount on time eliminates interest charges even if final quarterly tax liability turns out higher.",
    highlight: "Interest Penalty Immunity",
    icon: "🛡️"
  },
  {
    category: "COST SAVINGS",
    name: "Lower CA Retainer Expenses",
    description: "Benefit from reduced professional management fees while retaining full Chartered Accountant audit oversight and compliance guarantees.",
    highlight: "Cost-Effective Filing",
    icon: "💼"
  },
  {
    category: "QUARTERLY AUDIT",
    name: "Quarterly 3-Way Reconciliation",
    description: "Complete quarter-end cross-matching of 3 months of purchase bills against quarterly GSTR-2B statements.",
    highlight: "Full 3-Month ITC Audit",
    icon: "🔍"
  }
];

// --- APPLICABILITY CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Turnover Up to ₹5 Crore",
    description: "Available for registered regular dealers whose aggregate annual turnover was up to ₹5 Crore in the preceding or current FY."
  },
  {
    number: "2",
    title: "Latest GSTR-3B Filed",
    description: "Must have filed the latest due GSTR-3B return prior to opting into the QRMP scheme on the GST portal."
  },
  {
    number: "3",
    title: "Small Businesses & Startups",
    description: "Ideal for startups, small traders, and service providers wanting to lower monthly filing frequency."
  },
  {
    number: "4",
    title: "Mixed B2B & B2C Suppliers",
    description: "Businesses wanting to pass monthly ITC to B2B clients via IFF while filing full returns quarterly."
  }
];

// --- FILING PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "QRMP Opt-In & Strategy Selection",
    desc: "Evaluation of business cash flow to select either the Fixed Sum Method (FSM) or Self-Assessment Method (SAM)."
  },
  {
    step: "STEP 2",
    title: "Month 1 & 2 IFF Upload (by 13th)",
    desc: "Uploading high-value B2B invoices via the Invoice Furnishing Facility (IFF) by the 13th of the following month."
  },
  {
    step: "STEP 3",
    title: "Month 1 & 2 Tax Deposit (PMT-06 by 25th)",
    desc: "Computing monthly tax liability and depositing it via Form GST PMT-06 by the 25th of the following month."
  },
  {
    step: "STEP 4",
    title: "Quarter-End Audit & 2B Matching",
    desc: "Extracting 3 months of sales registers and purchase ledgers; performing 3-way reconciliation against quarterly GSTR-2B."
  },
  {
    step: "STEP 5",
    title: "Quarterly Return Filing",
    desc: "Submitting Quarterly GSTR-1 (13th) and Quarterly GSTR-3B (22nd/24th), setting off cash deposited via PMT-06 against final liability."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "Quarterly Outward Sales Register (Month-wise B2B and B2C breakup)",
  "Quarterly Inward Purchase Ledgers & Credit/Debit Notes",
  "Monthly GSTR-2B Statements for Month 1, Month 2, and Month 3",
  "Form GST PMT-06 paid challan receipts for Month 1 and Month 2",
  "Quarterly Bank Statements for cash ledger reconciliation",
  "GST Portal Credentials (User ID & Password)"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "Is uploading invoices via IFF mandatory every month under QRMP?",
    answer: "No. Filing IFF in Month 1 and Month 2 is completely optional. However, if you make B2B sales to corporate clients, uploading invoices via IFF ensures those clients receive monthly ITC in their GSTR-2B without waiting for your quarterly return."
  },
  {
    question: "How is the 35% Fixed Sum Method calculated for monthly tax payment?",
    answer: "Under the Fixed Sum Method, if your previous GSTR-3B was filed on a quarterly basis, the portal auto-generates a PMT-06 challan equal to 35% of the tax paid in cash in that previous quarterly return. If your previous return was monthly, the challan equals 100% of the tax paid in cash in the last month."
  },
  {
    question: "What is the maximum invoice value limit for monthly IFF uploads?",
    answer: "Under current GST rules, a taxpayer can upload B2B invoices up to a cumulative value of ₹50 Lakhs per month through the IFF in Month 1 and Month 2. Any remaining B2B or B2C invoices are included in the final Quarterly GSTR-1 return."
  },
  {
    question: "Can I switch between QRMP and Monthly filing schemes during the year?",
    answer: "Yes. Taxpayers can opt in or opt out of the QRMP scheme on the GST portal during the selection window (from the 1st day of the second month of the preceding quarter until the last day of the first month of the current quarter)."
  },
  {
    question: "What are the quarterly due dates for GSTR-1 and GSTR-3B under QRMP?",
    answer: "Quarterly GSTR-1 is due on the 13th of the month following the quarter. Quarterly GSTR-3B is due on the 22nd (Category 1 states like MH, KA, TN) or 24th (Category 2 states like DL, HR, UP) of the month following the quarter."
  }
];

export default function GstQuarterlyReturnsLayout() {
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
            <span>Quarterly GST Return (QRMP Scheme)</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Quarterly GST Filing — <span className="italic text-[#48532B]">QRMP & Monthly IFF</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            File GSTR-1 and GSTR-3B once every quarter for businesses with turnover up to ₹5 Crore. Upload monthly B2B invoices via IFF, pay monthly tax via PMT-06, and cut your compliance burden by 70%.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Opt for QRMP Quarterly Filing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> Reduced Compliance Overhead & CA Guidance
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Small Business Tax Scheme</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                The <strong className="font-semibold text-[#1A1917]">Quarterly Return Monthly Payment (QRMP)</strong> scheme, introduced under Section 39(1) of the CGST Act, is a simplified statutory compliance framework designed for taxpayers with aggregate annual turnover up to <strong className="font-semibold text-[#1A1917]">₹5 Crore</strong>.
              </p>
              <p>
                Under the QRMP scheme, businesses file their primary returns — <strong className="font-semibold text-[#1A1917]">GSTR-1</strong> (Outward Supplies) and <strong className="font-semibold text-[#1A1917]">GSTR-3B</strong> (Summary Tax Return) — <strong className="font-semibold text-[#1A1917]">once per quarter</strong> (4 times a year instead of 12). However, to prevent B2B buyers from experiencing delays in claiming Input Tax Credit, the scheme provides an optional <strong className="font-semibold text-[#1A1917]">Invoice Furnishing Facility (IFF)</strong> for Month 1 and Month 2 of the quarter.
              </p>
              <p>
                Monthly tax liabilities are deposited using <strong className="font-semibold text-[#1A1917]">Form GST PMT-06</strong> by the 25th of the following month, using either the <strong className="font-semibold text-[#1A1917]">Fixed Sum Method</strong> (a pre-generated 35% challan) or the <strong className="font-semibold text-[#1A1917]">Self-Assessment Method</strong>. FoundingLegals manages your QRMP lifecycle seamlessly.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>QRMP Compliance Schedule</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Month 1 & 2 IFF:</span>
                  <span className="font-bold text-[#48532B]">13th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Month 1 & 2 PMT-06:</span>
                  <span className="font-bold text-[#1A1917]">25th Monthly</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Quarterly GSTR-1:</span>
                  <span className="font-bold text-[#48532B]">13th Post-Quarter</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Quarterly GSTR-3B:</span>
                  <span className="font-bold text-[#48532B]">22nd / 24th</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Opt-in to QRMP Scheme
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of QRMP Scheme</h2>
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

        {/* ── SECTION 3: ELIGIBILITY & SCHEMES ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Scheme Rules</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Eligibility & Scheme Details</h2>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">QRMP Filing Process</h2>
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

        {/* ── SECTION 6: TIMELINE & DUE DATES ── */}
        <section id="timeline" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Timeline</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Due Dates</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
            <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#48532B]" />
              <span>QRMP Statutory Calendar</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-xs text-[#55524D]">
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Month 1 & 2 IFF Upload:</span>
                  <span className="font-bold text-[#48532B]">13th of Following Month</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Month 1 & 2 PMT-06 Tax Deposit:</span>
                  <span className="font-bold text-[#1A1917]">25th of Following Month</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Quarterly GSTR-1:</span>
                  <span className="font-bold text-[#48532B]">13th of Month After Quarter</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Quarterly GSTR-3B (Cat 1 States):</span>
                  <span className="font-bold text-[#1A1917]">22nd of Month After Quarter</span>
                </li>
                <li className="flex justify-between">
                  <span>Quarterly GSTR-3B (Cat 2 States):</span>
                  <span className="font-bold text-[#1A1917]">24th of Month After Quarter</span>
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
              <h3 className="text-sm font-bold text-[#1A1917]">Cash Flow Strategy</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">CA advice on Fixed Sum vs Self-Assessment to optimize working capital.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Zero Interest Risk</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Precise PMT-06 computation protecting your business from statutory interest.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Prompt IFF Uploads</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Timely monthly B2B invoice uploads keeping client relations healthy.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">FoundingLegals members save 50% compared to standard market retainers.</p>
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Opt-in to QRMP Scheme</h3>
              <p className="text-xs text-[#55524D]">Connect with a Chartered Accountant to manage your quarterly GST filing & monthly IFF.</p>
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
