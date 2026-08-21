"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Deductor Eligibility" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Penalties" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "PENALTY IMMUNITY",
    name: "Zero Section 234E Late Fee Levy",
    description: "On-time quarterly filing eliminates the non-waivable statutory penalty of ₹200 for every day of filing delay.",
    highlight: "₹200/Day Penalty Immunity",
    icon: "🚫"
  },
  {
    category: "EXPENSE DEDUCTION",
    name: "100% Expense Deductibility (Sec 40(a)(ia))",
    description: "Timely TDS deduction and remittance ensures 100% of vendor bills, contractor payments, and professional fees remain tax-deductible.",
    highlight: "100% Tax Expense Clearance",
    icon: "💼"
  },
  {
    category: "PAN VERIFICATION",
    name: "Automated PAN Verification & Sec 206AA",
    description: "Algorithmic verification of deductee PANs against the Income Tax database prevents accidental 20% flat tax deduction mandates for invalid PANs.",
    highlight: "Automated PAN Status Check",
    icon: "🔍"
  },
  {
    category: "TRACES CERTIFICATES",
    name: "Instant Form 16 & 16A Generation",
    description: "Automated download and distribution of digitally signed Form 16 (Part A & B for employees) and Form 16A (for vendors and consultants).",
    highlight: "Automated Form 16/16A Issuance",
    icon: "📄"
  },
  {
    category: "VENDOR 26AS CREDIT",
    name: "Accurate Vendor Form 26AS & AIS Credit",
    description: "Quarterly filing ensures tax deducted reflects immediately in your suppliers' Form 26AS and Annual Information Statement (AIS).",
    highlight: "Real-Time Vendor Tax Credit",
    icon: "📊"
  },
  {
    category: "NON-FILER AUDIT",
    name: "Section 206AB Non-Filer Rate Check",
    description: "System automatically checks whether vendors are 'specified persons' under Section 206AB who require higher tax withholding due to past ITR non-filing.",
    highlight: "Sec 206AB Rate Verification",
    icon: "⚖️"
  }
];

// --- DEDUCTOR ELIGIBILITY DATA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Corporate Entities (Companies & LLPs)",
    description: "Mandatory withholding tax compliance for all Private Limited Companies, Public Companies, OPCs, and LLPs."
  },
  {
    number: "2",
    title: "Firms, Trusts & Associations",
    description: "Mandatory for Partnership Firms, Sole Proprietorships, Trusts, Societies, and AOPs making qualifying payments."
  },
  {
    number: "3",
    title: "Tax Audit Taxpayers (Sec 44AB)",
    description: "Individuals and HUFs whose total business turnover exceeded ₹1 Crore (or ₹50 L for professionals) in the preceding FY."
  },
  {
    number: "4",
    title: "Property Buyers & Rent Payers",
    description: "Individuals paying rent > ₹50,000/month (Sec 194IB) or buying property > ₹50 Lakhs (Sec 194IA)."
  }
];

// --- FILING PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Monthly Data Ingestion",
    desc: "Upload monthly payroll ledgers, vendor payment advice, and paid Challan ITNS 281 receipts into your FoundingLegals vault."
  },
  {
    step: "STEP 2",
    title: "PAN Validation & Rate Audit",
    desc: "Algorithmic verification of deductee PANs (checking operative status, Aadhaar linkage, and Section 206AB higher rate triggers)."
  },
  {
    step: "STEP 3",
    title: "Challan ITNS 281 OLTAS Matching",
    desc: "Verification of BSR codes, Challan Serial Numbers (CSN), deposit dates, and tax heads against government OLTAS portal records."
  },
  {
    step: "STEP 4",
    title: "FVU Validation & Return E-Filing",
    desc: "Generation of return text files, validation via NSDL File Validation Utility (FVU), and e-filing on the Income Tax Portal."
  },
  {
    step: "STEP 5",
    title: "TRACES Reconciliation & Correction",
    desc: "Monitoring TRACES portal processing status; downloading justification reports and filing correction returns if mismatches occur."
  },
  {
    step: "STEP 6",
    title: "Form 16 / 16A Generation & Disbursement",
    desc: "Downloading bulk text zip files from TRACES, converting them to digitally signed PDFs, and archiving them in your vault."
  }
];

// --- DOCUMENTS DATA ---
const REQUIRED_DOCUMENTS = [
  "TAN Details (Tax Deduction and Collection Account Number)",
  "Paid Challan ITNS 281 Receipts (BSR Code, Challan Serial Number, Deposit Date, Amount)",
  "Deductee Payment Ledger (Name, PAN, Payment Section, Date, Gross Amount, Tax Deducted)",
  "Employee Investment Declarations & Regime Selection (Form 12BB for Q4 Form 24Q)",
  "Lower Deduction Certificates (Form 13 issued by Assessing Officer if applicable)",
  "Income Tax Portal Credentials for E-Filing Verification"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What happens if I deduct TDS under Section 194J (10%) instead of Section 194C (2%)?",
    answer: "Deducting tax at a higher rate than statutory mandates does not attract interest penalties for short deduction. However, to ensure your vendor receives proper credit alignment in their Form 26AS, our CA team files a C3 TRACES correction return to update the section code."
  },
  {
    question: "What is a TRACES Justification Report and how is it resolved?",
    answer: "A Justification Report is a detailed statement generated by TRACES highlighting defaults such as short payment, short deduction, late payment interest, or late filing fees. Resolving it requires matching unconsumed challans or filing a TRACES correction return."
  },
  {
    question: "What is Section 194Q and when does TDS on purchase of goods apply?",
    answer: "Section 194Q applies to buyers whose total business turnover exceeded ₹10 Crore in the preceding financial year. The buyer must deduct TDS at 0.1% on purchases of goods from a resident seller if total purchases from that seller exceed ₹50 Lakhs in the financial year."
  },
  {
    question: "Can expense disallowance under Section 40(a)(ia) be reversed in subsequent years?",
    answer: "Yes. If 30% of an expense is disallowed in a financial year due to non-deduction or non-payment of TDS, that disallowed portion is fully allowed as a tax deduction in the subsequent financial year in which the TDS is deposited."
  },
  {
    question: "What are the quarterly due dates for TDS return filing?",
    answer: "Q1 (Apr-Jun) is due by 31st July; Q2 (Jul-Sep) is due by 31st October; Q3 (Oct-Dec) is due by 31st January; Q4 (Jan-Mar) is due by 31st May."
  }
];

export default function TdsReturnFilingLayout() {
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
            <span>Quarterly TDS Return & TRACES</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            TDS Return Filing — <span className="italic text-[#48532B]">Form 24Q, 26Q & 27Q</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Quarterly withholding tax filing for salary and non-salary payments. Perform automated PAN validations, Challan ITNS 281 OLTAS matching, TRACES reconciliation, and instant bulk Form 16 / 16A generation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>File Quarterly TDS Return</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> Zero Sec 234E Penalty Guarantee & TRACES Support
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Withholding Tax System</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm text-[#55524D] leading-relaxed">
              <p>
                Under the Income Tax Act, 1961, every business entity making specified payments — such as employee salaries (Section 192), contractor fees (Section 194C), professional & technical services (Section 194J), rent (Section 194I), commission (Section 194H), or purchase of goods (Section 194Q) — is legally required to deduct Tax Deducted at Source (TDS) at prescribed statutory rates.
              </p>
              <p>
                Tax deducted during any calendar month must be remitted to the Central Government via <strong className="font-semibold text-[#1A1917]">Challan ITNS 281 on or before the 7th of the following month</strong>. Following monthly deposits, the deductor must file quarterly TDS returns on the official government portal (<strong className="font-semibold text-[#1A1917]">TRACES / NSDL</strong>).
              </p>
              <p>
                Failing to deduct, late depositing, or filing inaccurate TDS returns triggers mandatory <strong className="font-semibold text-[#1A1917]">Section 234E late fees of ₹200/day</strong>, Section 201(1A) interest (1% to 1.5%/month), and disallowance of <strong className="font-semibold text-[#1A1917]">30% of the underlying business expenditure</strong> under Section 40(a)(ia). FoundingLegals manages your entire TDS cycle.
              </p>
            </div>

            {/* Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="text-sm font-semibold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Quarterly Compliance Calendar</span>
              </h3>
              <ul className="text-xs space-y-3 text-[#55524D]">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Q1 (Apr – Jun):</span>
                  <span className="font-bold text-[#48532B]">31st July</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Q2 (Jul – Sep):</span>
                  <span className="font-bold text-[#48532B]">31st October</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Q3 (Oct – Dec):</span>
                  <span className="font-bold text-[#48532B]">31st January</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Q4 (Jan – Mar):</span>
                  <span className="font-bold text-[#48532B]">31st May</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#F0F2EB] hover:bg-[#E2E6D8] text-[#48532B] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule TDS Filing Support
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of TDS Compliance</h2>
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

        {/* ── SECTION 3: DEDUCTOR ELIGIBILITY ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Tax Deductors</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Deductor Eligibility & Mandates</h2>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">TDS Return Process</h2>
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

        {/* ── SECTION 6: TIMELINE & PENALTIES ── */}
        <section id="timeline" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Filing Deadlines</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Penalty Structure</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#48532B]" />
                <span>Quarterly Return Due Dates</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Monthly Challan Deposit:</span>
                  <span className="font-bold text-[#48532B]">7th of Following Month</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Q1 (Apr–Jun) Return:</span>
                  <span className="font-bold text-[#1A1917]">31st July</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Q2 (Jul–Sep) Return:</span>
                  <span className="font-bold text-[#1A1917]">31st October</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Q3 (Oct–Dec) Return:</span>
                  <span className="font-bold text-[#1A1917]">31st January</span>
                </li>
                <li className="flex justify-between">
                  <span>Q4 (Jan–Mar) Return:</span>
                  <span className="font-bold text-[#48532B]">31st May</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-4">
              <h3 className="text-sm font-bold text-[#1A1917] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#48532B]" />
                <span>Late Fee & Interest Penalties</span>
              </h3>
              <ul className="text-xs text-[#55524D] space-y-3">
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Sec 234E Late Fee:</span>
                  <span className="font-bold text-[#1A1917]">₹200 / Day (Capped at Tax)</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Late Deduction Interest:</span>
                  <span className="font-bold text-[#1A1917]">1.0% / Month (Sec 201(1A))</span>
                </li>
                <li className="flex justify-between border-b border-[#F2ECE4] pb-2">
                  <span>Late Deposit Interest:</span>
                  <span className="font-bold text-[#48532B]">1.5% / Month (Sec 201(1A))</span>
                </li>
                <li className="flex justify-between">
                  <span>Sec 40(a)(ia) Disallowance:</span>
                  <span className="font-bold text-[#1A1917]">30% Expense Disallowed</span>
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
              <h3 className="text-sm font-bold text-[#1A1917]">Automated PAN Audit</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Algorithmic checks detecting inoperative PANs & Sec 206AB higher rate triggers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">TRACES Correction</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">Complete CA support for C1, C2, C3, and C9 TRACES correction statement filings.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <FileText className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">Bulk Form 16/16A</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">One-click bulk download and distribution of digitally signed Form 16/16A files.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E5E0DA] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="text-sm font-bold text-[#1A1917]">50% Member Rate</h3>
              <p className="text-xs text-[#55524D] leading-relaxed font-light">FoundingLegals members save 50% compared to traditional CA retainers.</p>
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">File Quarterly TDS Return</h3>
              <p className="text-xs text-[#55524D]">Connect with a Chartered Accountant for zero-default Form 24Q, 26Q, or 27Q return filing.</p>
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
                name="tan"
                placeholder="TAN Number (Optional)"
                className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#E5E0DA] rounded-xl focus:outline-none focus:border-[#48532B]"
              />

              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                {formState.submitting ? "Submitting..." : "Schedule TDS CA Consultation"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
