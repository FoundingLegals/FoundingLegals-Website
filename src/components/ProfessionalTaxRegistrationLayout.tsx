"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Categories & Rules" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "DUAL TAX COVERAGE",
    name: "Dual Compliance (PTEC & PTRC)",
    description: "Fulfills statutory obligations both for entity tax enrollment (PTEC) and employee salary tax deduction remittance (PTRC).",
    highlight: "Complete PTEC + PTRC Coverage",
    icon: "📜"
  },
  {
    category: "BANK & MUNICIPAL",
    name: "Corporate Bank Account & Licenses",
    description: "Mandatory tax document required by commercial banks, municipal health departments, and corporate audit teams.",
    highlight: "Bank & Trade License Prerequisite",
    icon: "🏦"
  },
  {
    category: "PENALTY PROTECTION",
    name: "Shield Against Monthly Interest & Penalty",
    description: "Avoids severe state tax penalties (up to 24% per annum interest plus late filing fees up to ₹1,000/month).",
    highlight: "24% Penalty Immunity",
    icon: "🛡️"
  },
  {
    category: "PAYROLL DEDUCTION",
    name: "Transparent Payroll Salary Deduction",
    description: "Enables payroll teams to legally deduct monthly P-Tax (max ₹2,500/year per employee) from gross salaries under Section 16(iii) of Income Tax Act.",
    highlight: "Income Tax Sec 16(iii) Deductible",
    icon: "💼"
  },
  {
    category: "VENDOR AUDIT",
    name: "Corporate B2B Vendor Compliance",
    description: "Fulfills mandatory statutory tax audit checklists for enterprise client contracts and government sub-contracting.",
    highlight: "B2B Audit Compliance",
    icon: "🏢"
  },
  {
    category: "LIFETIME ENROLLMENT",
    name: "100% Online Permanent Enrollment",
    description: "Simple online enrollment process with lifetime validity for PTEC (subject to annual state tax payment by April 30th).",
    highlight: "Permanent Lifetime PTEC",
    icon: "♾️"
  }
];

// --- ENTITY TYPES DATA ---
const ENTITY_TYPES = [
  {
    type: "Employers & Companies (PTRC)",
    badge: "EMPLOYEE SALARY TAX",
    description: "Pvt Ltd Companies, LLPs, Partnerships, & Proprietorships deducting tax from employee salaries.",
    icon: "👥"
  },
  {
    type: "Self-Employed Professionals (PTEC)",
    badge: "INDIVIDUAL TAX",
    description: "Chartered Accountants, Doctors, Lawyers, Architects, Consultants, Engineers, & Agents.",
    icon: "👨‍⚕️"
  },
  {
    type: "Business Entities & Directors (PTEC)",
    badge: "CORPORATE TAX",
    description: "Commercial establishments, traders, directors, and partners operating in applicable states.",
    icon: "🏬"
  }
];

// --- CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Entity & Professional Mandate (PTEC)",
    description: "Mandatory for any entity or professional carrying on trade/business in P-Tax applicable states."
  },
  {
    number: "2",
    title: "Employee Salary Threshold (PTRC)",
    description: "Mandatory for employers paying staff monthly salaries exceeding state threshold slabs (> ₹15,000/mo)."
  },
  {
    number: "3",
    title: "Statutory Cap (₹2,500/Year Max)",
    description: "Article 276 of the Constitution caps maximum Professional Tax at ₹2,500 per annum per person."
  },
  {
    number: "4",
    title: "State-Specific Applicability",
    description: "Enforced in ~21 Indian states with state-specific monthly salary tax slab structures."
  }
];

// --- REGISTRATION PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "State Jurisdiction & Slab Analysis",
    desc: "Evaluate business location and employee salary structure to map correct PTEC & PTRC state tax slabs."
  },
  {
    step: "STEP 2",
    title: "Commercial Tax Portal Account",
    desc: "Create taxpayer profile on the state Commercial Tax Department portal."
  },
  {
    step: "STEP 3",
    title: "PTEC Application Filing",
    desc: "Draft Form PTEC application for entity and director/partner enrollment."
  },
  {
    step: "STEP 4",
    title: "PTRC Application Filing",
    desc: "Draft Form PTRC application for employer salary tax deduction registration."
  },
  {
    step: "STEP 5",
    title: "Document & Proof Upload",
    desc: "Upload COI/PAN, Rent Agreement, Electricity Bill, Bank details, and employee headcount."
  },
  {
    step: "STEP 6",
    title: "State Tax Officer Review",
    desc: "State Tax Officer reviews application and verifies uploaded business documents."
  },
  {
    step: "STEP 7",
    title: "PTEC & PTRC Certificate Allotment",
    desc: "Receive official digital PTEC and PTRC Registration Certificates with unique numbers."
  }
];

// --- DOCUMENTS DATA ---
const INDIVIDUAL_DOCS = [
  "Certificate of Incorporation (CoI) / LLP Agreement / Partnership Deed / Business PAN",
  "PAN Card and Aadhaar Card of Proprietor / Partners / Directors",
  "Address Proof of Registered Business Premises (Electricity Bill + Rent Agreement + NOC)",
  "Board Resolution / Letter of Authorization for authorized signatory"
];

const COMPANY_DOCS = [
  "Commercial Bank Account Details (Cancelled Cheque / Bank Statement)",
  "List of Employees with gross monthly salary details (mandatory for PTRC)",
  "Date of commencement of business operations proof",
  "Passport size photographs of Directors / Partners / Proprietor"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is the difference between PTEC and PTRC?",
    answer: "PTEC (Enrollment Certificate) is for the business entity, directors, or self-employed professionals to pay their own annual tax. PTRC (Registration Certificate) is for employers to deduct tax from employee salaries and deposit it with the state."
  },
  {
    question: "What is the maximum Professional Tax that can be charged in a year?",
    answer: "Under Article 276 of the Constitution of India, the maximum Professional Tax that can be levied on any individual is capped at ₹2,500 per annum."
  },
  {
    question: "Is Professional Tax applicable in all Indian states?",
    answer: "No. Professional Tax is levied in about 21 Indian states (including Maharashtra, Karnataka, West Bengal, Tamil Nadu, Telangana, Gujarat). States like Delhi, Haryana, and UP do not levy P-Tax."
  },
  {
    question: "Is PTEC mandatory for a Private Limited Company even with zero employees?",
    answer: "Yes. PTEC is mandatory for the company entity and its directors from the date of incorporation, regardless of employee headcount."
  },
  {
    question: "What is the penalty for late payment or non-registration of Professional Tax?",
    answer: "State tax departments charge interest up to 1.25%–2% per month for late payment plus non-filing penalties ranging from ₹100 to ₹1,000 per month."
  },
  {
    question: "Can Professional Tax deducted from employees be claimed as an Income Tax deduction?",
    answer: "Yes. Under Section 16(iii) of the Income Tax Act, 1961, Professional Tax paid is allowed as a full deduction from gross salary income."
  },
  {
    question: "How often are PTRC returns filed?",
    answer: "PTRC returns are filed monthly (by the 20th of the following month) if monthly tax liability exceeds ₹10,000, or quarterly if liability is below threshold."
  }
];

export default function ProfessionalTaxRegistrationLayout() {
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
            <span>Mandatory State Employment Tax Compliance</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Professional Tax (P-Tax) Registration — <span className="italic text-[#48532B]">PTEC & PTRC Compliance</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Obtain your statutory Professional Tax Enrollment Certificate (PTEC) & Registration Certificate (PTRC) issued by the State Commercial Tax Department. Essential for business entities, self-employed professionals (CAs, Doctors, Lawyers, Consultants), and employers deducting state professional tax from staff salaries.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for Professional Tax Registration</span>
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Article 276 Constitutional Mandate</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-[#55524D] leading-relaxed font-light">
              <p>
                <strong className="text-[#1A1917] font-medium">Professional Tax (P-Tax)</strong> is a state-level tax levied under Article 276 of the Constitution of India on professions, trades, callings, and employment.
              </p>
              <p>
                Enforced by State Commercial Tax Departments (in states such as Maharashtra, Karnataka, Tamil Nadu, West Bengal, Telangana, and Gujarat), Professional Tax operates under a compulsory dual-tier structure:
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-xs">
                <li><strong className="text-[#1A1917]">PTEC (Enrollment Certificate):</strong> Mandatory for entity, directors, partners, & self-employed professionals to pay entity tax.</li>
                <li><strong className="text-[#1A1917]">PTRC (Registration Certificate):</strong> Mandatory for employers to deduct & remit tax from employee salaries.</li>
              </ul>
              <p>
                Fulfilling P-Tax registration is statutorily mandatory to open corporate current accounts, clear municipal audits, pass corporate vendor compliance, and protect business management from heavy interest penalties.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1A1917]">Key Statutory P-Tax Highlights</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#55524D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Dual Certificates:</strong> PTEC (Entity/Director) & PTRC (Employer Salary Deduction).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Constitutional Cap:</strong> Capped at maximum ₹2,500 per annum per person (Art 276).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Income Tax Deduction:</strong> Full deduction allowed under Sec 16(iii) of Income Tax Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>PTEC Annual Deadline:</strong> Annual PTEC tax payable by April 30th every financial year.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: STATUTORY BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Compliance Advantages</span>
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

        {/* ── SECTION 3: CATEGORIES & RULES ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-8">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Mandate</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Categories & Rules</h2>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">P-Tax Taxpayer Categories</h3>
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
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">4 Mandatory Statutory Criteria</h3>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Professional Tax Process</h2>
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
                <FileText className="w-4 h-4 text-[#48532B]" /> Entity & Promoter Identification
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
                <ShieldCheck className="w-4 h-4 text-[#48532B]" /> Banking & Salary Details Checklist
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Return Calendar</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-xs">
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 1–2</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Slab Analysis & Setup</h4>
              <p className="text-[#55524D] leading-relaxed">Document verification, salary slab mapping, and State Tax portal profile setup.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 3–5</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">PTEC / PTRC Portal Filing</h4>
              <p className="text-[#55524D] leading-relaxed">PTEC & PTRC online application drafting and submission to State Tax Department.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 5–7</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Certificate Allotment</h4>
              <p className="text-[#55524D] leading-relaxed">State Tax Officer scrutiny and issuance of official PTEC & PTRC Certificates.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">MONTHLY / ANNUAL</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">PTRC Returns & PTEC Tax</h4>
              <p className="text-[#55524D] leading-relaxed">Monthly PTRC returns by 20th of following month & annual PTEC tax by April 30th.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="bg-gradient-to-r from-[#48532B] to-[#394222] rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <span className="text-xs font-semibold text-[#EAECE4] uppercase tracking-wider">The FoundingLegals Advantage</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Why Choose FoundingLegals for Professional Tax?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm pt-4">
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Senior CA Multi-State Advisory</h4>
                <p className="text-[#EAECE4] leading-relaxed">Expert mapping of state-specific salary tax slabs across all 21 P-Tax states.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Dual PTEC & PTRC Combo Filing</h4>
                <p className="text-[#EAECE4] leading-relaxed">Complete handling of both entity enrollment (PTEC) and employer registration (PTRC) in a single filing.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Zero Notice Rejection Guarantee</h4>
                <p className="text-[#EAECE4] leading-relaxed">We pre-verify address proofs and salary data to ensure 100% officer approval.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#48532B] hover:bg-[#F0F2EB] font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Apply for Professional Tax Today
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Apply for Professional Tax</h3>
              <p className="text-xs text-[#55524D] font-light">Fill your details below. Our senior tax CA experts will initiate your PTEC & PTRC filing.</p>
            </div>

            {formState.succeeded ? (
              <div className="bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#48532B] mx-auto" />
                <h4 className="font-serif font-bold text-base">Application Received!</h4>
                <p className="text-xs font-light">Our professional tax consultant will contact you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input type="hidden" name="service" value="Professional Tax Registration" />
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Company / Entity Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Apex Legal Solutions"
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
                    placeholder="e.g. founder@apexlegal.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Professional Tax Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
