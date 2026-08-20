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
    category: "STAFF DEPLOYMENT",
    name: "Legal Authority to Deploy Contract Staff",
    description: "Deploy 20 or more contract workers, security guards, or facility personnel legally without risk of work stoppage or police intervention.",
    highlight: "20+ Contract Worker Authorization",
    icon: "👥"
  },
  {
    category: "VENDOR ELIGIBILITY",
    name: "Corporate Vendor & Sub-Contracting",
    description: "Holding a valid Labour License is a mandatory prerequisite required by corporate clients, factories, and IT parks before awarding staffing tenders.",
    highlight: "Corporate Tender Qualification",
    icon: "🏢"
  },
  {
    category: "PROSECUTION SHIELD",
    name: "Immunity from Prosecution & Penalties",
    description: "Shield your business and management from criminal prosecution, imprisonment (up to 3 months), and heavy fines under Section 23/24 of the CLRA Act.",
    highlight: "Section 23/24 Legal Immunity",
    icon: "🛡️"
  },
  {
    category: "WAGE & BENEFIT TRANSPARENCY",
    name: "Transparent EPF, ESI & Minimum Wages",
    description: "Establishes verifiable legal compliance for minimum wages, Equal Remuneration Act standards, Provident Fund (EPF), and Employee State Insurance (ESI).",
    highlight: "EPF & ESI Compliance",
    icon: "💼"
  },
  {
    category: "PUBLIC TENDERS",
    name: "Government Procurement Requirement",
    description: "Required by central/state government departments and PSUs for outsourcing facility management, housekeeping, and security manpower.",
    highlight: "Public Sector Tender Eligibility",
    icon: "🏛️"
  },
  {
    category: "STARTUP IMMUNITY",
    name: "Self-Certification under 9 Labour Laws",
    description: "Enables eligible DPIIT startups and MSMEs to self-certify compliance under 9 central labour statutes with immunity from routine inspections.",
    highlight: "Startup Self-Certification",
    icon: "📜"
  }
];

// --- ENTITY TYPES DATA ---
const ENTITY_TYPES = [
  {
    type: "Principal Employers",
    badge: "ESTABLISHMENT FORM-I",
    description: "Factories, commercial establishments, IT parks, and corporate offices engaging 20 or more contract workers.",
    icon: "🏭"
  },
  {
    type: "Manpower & Staffing Agencies",
    badge: "CONTRACTOR FORM-IV",
    description: "Contractors supplying temporary, technical, or administrative contract workers to client establishments.",
    icon: "👔"
  },
  {
    type: "Security & Facility Management",
    badge: "SPECIALIZED AGENCIES",
    description: "Agencies deploying security guards, housekeeping staff, maintenance crews, or canteen workers.",
    icon: "👮"
  }
];

// --- CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Worker Threshold (20+ Contract Workers)",
    description: "Engaging 20 or more contract workers on any single day in the preceding 12 months."
  },
  {
    number: "2",
    title: "Valid Form V Certificate",
    description: "Contractor must possess a valid Form V authorization certificate issued and signed by the Principal Employer."
  },
  {
    number: "3",
    title: "Active EPF & ESI Registration Codes",
    description: "Mandatory active Employee Provident Fund (EPF) and Employee State Insurance (ESI) code numbers."
  },
  {
    number: "4",
    title: "Statutory Security Deposit",
    description: "Refundable statutory security deposit deposited with the Labour Department based on worker headcount."
  }
];

// --- REGISTRATION PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Employee Audit & Jurisdiction Check",
    desc: "Conduct manpower audit to confirm worker numbers and applicable Central/State Labour Department jurisdiction."
  },
  {
    step: "STEP 2",
    title: "Form V Certificate Collection",
    desc: "Obtain signed Form V Certificate or Form-I registration copy from the Principal Employer."
  },
  {
    step: "STEP 3",
    title: "Shram Suvidha Portal Registration",
    desc: "Create LIN profile on the Shram Suvidha Portal (Central) or State Labour Department portal."
  },
  {
    step: "STEP 4",
    title: "Form IV Online Application",
    desc: "Complete Form IV online detailing establishment location, nature of contract work, and max workers."
  },
  {
    step: "STEP 5",
    title: "Document Upload & Security Deposit",
    desc: "Upload work order, Form V, EPF/ESI codes, and pay online security deposit & license fee."
  },
  {
    step: "STEP 6",
    title: "Labour Inspector Inspection",
    desc: "Jurisdictional Labour Officer scrutinises documents and conducts location inspection (if required)."
  },
  {
    step: "STEP 7",
    title: "Grant of Labour License (Form VI)",
    desc: "Receive official digital Labour License Certificate (Form VI) specifying permitted worker count."
  }
];

// --- DOCUMENTS DATA ---
const INDIVIDUAL_DOCS = [
  "Certificate of Incorporation / MOA / Partnership Deed / Proprietorship PAN",
  "Copy of Form V Certificate issued by the Principal Employer (mandatory for contractors)",
  "Copy of Principal Employer's Registration Certificate (Form I)",
  "Work Order / Service Agreement between Principal Employer and Contractor"
];

const COMPANY_DOCS = [
  "PAN Card and Aadhaar Card of Proprietor / Partners / Directors",
  "EPF Registration Certificate & ESI Registration Certificate code copies",
  "Registered Office Address Proof (Rent Agreement + Electricity Bill + NOC)",
  "Details of nature of work, contract duration, and maximum workers deployed"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is a Labour License and when does it become mandatory?",
    answer: "A Labour License (Form VI) is a statutory authorization under the CLRA Act required whenever a contractor or staffing agency engages 20 or more contract workers at any establishment."
  },
  {
    question: "What is the difference between Principal Employer Registration (Form I) and Contractor License (Form IV)?",
    answer: "Principal Employers holding an establishment register via Form I. Contractors supplying workers obtain a Labour License (Form IV) based on Form V issued by the Principal Employer."
  },
  {
    question: "What is a Form V Certificate in Labour Licensing?",
    answer: "Form V is an official certificate issued by the Principal Employer stating that they have hired the contractor to execute contract work for a specified number of workers."
  },
  {
    question: "What is the penalty for deploying contract labour without a license?",
    answer: "Operating without a Labour License attracts prosecution under Section 23/24 of CLRA Act — imprisonment up to 3 months, monetary fines, or both."
  },
  {
    question: "Is EPF and ESI registration compulsory for getting a Labour License?",
    answer: "Yes. Active EPF and ESI registration code numbers are mandatory statutory prerequisites for filing a Labour License application."
  },
  {
    question: "What is the validity period of a Labour License?",
    answer: "A Labour License is valid for the duration of the contract work order (or up to 1 to 5 years depending on state rules) and must be renewed prior to expiry."
  },
  {
    question: "Can one Labour License cover multiple client locations?",
    answer: "No. A separate Labour License (or formal amendment) is required for each distinct principal employer establishment location."
  }
];

export default function LabourLicenseRegistrationLayout() {
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
            <span>Mandatory Employment Statutory Compliance</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Labour License Registration Online — <span className="italic text-[#48532B]">CLRA & Establishment Compliance</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Secure your statutory Contract Labour License & Establishment Registration under the Contract Labour (Regulation & Abolition) Act, 1970 and State Shops & Commercial Establishments Acts. Essential for principal employers, manpower contractors, staffing agencies, and factories engaging <strong className="font-semibold text-[#1A1917]">20 or more contract workers</strong>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for Labour License</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> Issued in 7–15 Business Days
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">CLRA Act Statutory Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-[#55524D] leading-relaxed font-light">
              <p>
                A <strong className="text-[#1A1917] font-medium">Labour License</strong> is a statutory authorization granted under the Contract Labour (Regulation & Abolition) Act, 1970 (CLRA Act) by the Labour Department of the Central or State Government.
              </p>
              <p>
                Enacted to prevent exploitation of contract workmen and ensure standardized working conditions, the law mandates a two-tier compliance framework:
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-xs">
                <li><strong className="text-[#1A1917]">Principal Employers</strong> engaging 20+ contract workers must obtain a Registration Certificate (Form I).</li>
                <li><strong className="text-[#1A1917]">Manpower Contractors</strong> deploying 20+ contract workers must obtain a Labour License (Form IV).</li>
              </ul>
              <p>
                Obtaining a valid Labour License is essential for manpower suppliers, facility management firms, security agencies, and manufacturing units. It protects management from criminal prosecution under Section 23/24 of the CLRA Act, ensures EPF/ESI statutory compliance, and fulfills mandatory vendor requirements for corporate contracts.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1A1917]">Key Statutory Highlights</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#55524D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>20+ Worker Rule:</strong> Mandatory when employing 20+ contract workmen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Form V Authorization:</strong> Issued by Principal Employer to empower contractor filing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Section 23/24 Immunity:</strong> Protection from criminal prosecution & imprisonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Shram Suvidha Portal:</strong> Central online portal integration for unified LIN.</span>
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
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">Labour License Stakeholder Categories</h3>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Labour License Process</h2>
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
                <FileText className="w-4 h-4 text-[#48532B]" /> Principal Employer & Work Order Checklist
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
                <ShieldCheck className="w-4 h-4 text-[#48532B]" /> EPF/ESI & Contractor Identification
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
              <span className="text-xs font-bold text-[#48532B] block">DAY 1–2</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Form V Collection</h4>
              <p className="text-[#55524D] leading-relaxed">Manpower threshold audit, Form V collection from Principal Employer, and portal setup.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 3–5</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Form IV Portal Filing</h4>
              <p className="text-[#55524D] leading-relaxed">Form IV online application drafting, security deposit calculation, and fee submission.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 6–12</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Labour Officer Inspection</h4>
              <p className="text-[#55524D] leading-relaxed">Labour Inspector document scrutiny & establishment premises verification.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 12–15</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">License Allotment (Form VI)</h4>
              <p className="text-[#55524D] leading-relaxed">Grant of official Labour License Certificate (Form VI) for permitted worker count.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="bg-gradient-to-r from-[#48532B] to-[#394222] rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <span className="text-xs font-semibold text-[#EAECE4] uppercase tracking-wider">The FoundingLegals Advantage</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Why Choose FoundingLegals for Labour License?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm pt-4">
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Senior Labour Advocate Advisory</h4>
                <p className="text-[#EAECE4] leading-relaxed">Expert legal drafting of Form IV applications and Form V coordination with principal employers.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Accurate Security Deposit Calculation</h4>
                <p className="text-[#EAECE4] leading-relaxed">We calculate exact statutory security deposits and license fees to prevent portal payment errors.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Labour Officer Query Management</h4>
                <p className="text-[#EAECE4] leading-relaxed">End-to-end management of queries or inspection notices issued by Labour Department officers.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#48532B] hover:bg-[#F0F2EB] font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Apply for Labour License Today
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Apply for Labour License</h3>
              <p className="text-xs text-[#55524D] font-light">Fill your details below. Our senior labour legal experts will initiate your filing.</p>
            </div>

            {formState.succeeded ? (
              <div className="bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#48532B] mx-auto" />
                <h4 className="font-serif font-bold text-base">Application Received!</h4>
                <p className="text-xs font-light">Our labour legal specialist will contact you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input type="hidden" name="service" value="Labour License" />
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Company / Agency Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Apex Staffing Services Pvt Ltd"
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
                    placeholder="e.g. founder@apexstaffing.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Labour License Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
