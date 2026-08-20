"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Eligibility" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "TAX HOLIDAY",
    name: "Section 80-IAC Income Tax Holiday",
    description: "Enjoy 100% deduction on corporate income tax profits for 3 consecutive financial years out of your first 10 years of incorporation (subject to IMB approval).",
    highlight: "3 Years 100% Tax Exemption",
    icon: "💰"
  },
  {
    category: "CAPITAL IMMUNITY",
    name: "Angel Tax Immunity (Sec 56(2)(viib))",
    description: "Immunity from tax scrutiny on share premium received from domestic angel investors, HNIs, and venture funds up to ₹25 Crore aggregate paid-up capital.",
    highlight: "Zero Angel Tax Scrutiny",
    icon: "🛡️"
  },
  {
    category: "IPR SAVINGS",
    name: "80% Patent & 50% TM Fee Discount",
    description: "Drastically lower legal IP protection expenses with 80% statutory rebate on patent filing & fast-track examination (Form 18A), plus 50% discount on Trademark Form TM-A.",
    highlight: "80% Patent Rebate",
    icon: "🚀"
  },
  {
    category: "DEBT-EQUITY HYBRID",
    name: "Convertible Notes Issuance Eligibility",
    description: "Legally issue debt-equity hybrid Convertible Notes for single tranches of ₹25 Lakhs or more, convertible into equity within 10 years under MCA rules.",
    highlight: "10-Year Conversion Window",
    icon: "📜"
  },
  {
    category: "PUBLIC TENDERS",
    name: "Government Procurement Exemptions",
    description: "Exemption from submitting Earnest Money Deposit (EMD) or meeting prior turnover and prior experience criteria in public tenders across central ministries.",
    highlight: "No EMD or Prior Turnover Required",
    icon: "🏛️"
  },
  {
    category: "GOVT FUNDING",
    name: "Fund of Funds (FFS) & Credit Access",
    description: "Direct access to SEBI-registered Alternative Investment Funds (AIFs) backed by SIDBI’s ₹10,000 Crore Fund of Funds and collateral-free credit guarantees.",
    highlight: "₹10,000 Cr FFS Access",
    icon: "📈"
  }
];

// --- ENTITY ELIGIBILITY DATA ---
const ENTITY_TYPES = [
  {
    type: "Private Limited Company (Pvt Ltd)",
    badge: "MOST PREFERRED",
    description: "Fully eligible for DPIIT recognition, 3-year Sec 80-IAC Tax Holiday, Angel Tax Exemption (Sec 56(2)(viib)), and Convertible Notes issuance.",
    icon: "🏢"
  },
  {
    type: "Limited Liability Partnership (LLP)",
    badge: "HIGHLY ELIGIBLE",
    description: "Eligible for DPIIT recognition certificate, labour self-certification, 80% patent discounts, and SIDBI Fund of Funds access.",
    icon: "🤝"
  },
  {
    type: "Registered Partnership Firm",
    badge: "ELIGIBLE FOR RECOGNITION",
    description: "Eligible for DPIIT recognition certificate and IP discounts (must convert to Pvt Ltd/LLP to claim 80-IAC tax holiday).",
    icon: "✍️"
  }
];

// --- ELIGIBILITY CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Entity Age (< 10 Years)",
    description: "The entity must not have completed 10 years from its date of incorporation or registration."
  },
  {
    number: "2",
    title: "Turnover Limit (≤ ₹100 Crore)",
    description: "Annual turnover must not have exceeded ₹100 Crore in any financial year since incorporation."
  },
  {
    number: "3",
    title: "Original Business Identity",
    description: "Must be an original entity — not formed by splitting up, restructuring, or reconstructing an existing business."
  },
  {
    number: "4",
    title: "Innovation & Scalability Mandate",
    description: "Must work towards innovation, development, or improvement of products or services, OR have a scalable business model with potential for employment generation."
  }
];

// --- REGISTRATION PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Corporate Entity Setup",
    desc: "Incorporate your business as a Private Limited Company, LLP, or Registered Partnership Firm with MCA/Registrar."
  },
  {
    step: "STEP 2",
    title: "Pitch Deck & Narrative Drafting",
    desc: "Our CA/CS team drafts a comprehensive write-up highlighting your product innovation, market solution, and growth plan."
  },
  {
    step: "STEP 3",
    title: "Startup India Mapping",
    desc: "Create and map your corporate credentials on the official National Startup India Portal."
  },
  {
    step: "STEP 4",
    title: "DPIIT Online Form Submission",
    desc: "File Form DPIIT-1 with CIN/LLPIN, board resolution, authorized signatory details, and sector classifications."
  },
  {
    step: "STEP 5",
    title: "Document Verification",
    desc: "Upload Certificate of Incorporation, MOA/AOA, pitch presentation, and product website/app links."
  },
  {
    step: "STEP 6",
    title: "Officer Scrutiny & Review",
    desc: "DPIIT officers scrutinise the application to ensure compliance with Notification G.S.R. 127(E)."
  },
  {
    step: "STEP 7",
    title: "Certificate Issuance",
    desc: "Receive your official digital DPIIT Recognition Certificate with a unique 10-year DIPP registration number."
  }
];

// --- DOCUMENTS DATA ---
const INDIVIDUAL_DOCS = [
  "Certificate of Incorporation (CoI) or Partnership Registration Certificate",
  "Memorandum of Association (MOA) & Articles of Association (AOA) / LLP Agreement",
  "Directors / Designated Partners PAN, Aadhaar, and Contact Details",
  "Pitch Deck / Detailed Business Presentation (PDF)",
  "Website Link, Mobile App Link, or Product Prototype Screenshots",
  "Board Resolution / Authorization Letter for Authorized Signatory",
  "Financial Statements & Income Tax Returns (if operating > 1 financial year)",
  "Patent or Trademark Certificates / Application numbers (if available)"
];

const COMPANY_DOCS = [
  "Form 2 Angel Tax Exemption Declaration under Section 56(2)(viib)",
  "Section 80-IAC Application for Inter-Ministerial Board (IMB) Tax Holiday",
  "CA Certified Financial Projections & Share Valuation Report (if applicable)",
  "Audited Balance Sheets & Profit & Loss accounts for previous operating years",
  "Self-Certification undertaking for 9 Labour & Environmental Laws compliance"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is DPIIT Recognition and why does my startup need it?",
    answer: "DPIIT recognition is an official registration granted by the Ministry of Commerce & Industry that certifies your business as a recognised startup in India. It is required to claim 3-year tax holidays under Section 80-IAC, Angel Tax immunity, 80% patent discounts, and the right to issue Convertible Notes."
  },
  {
    question: "Can a Sole Proprietorship apply for DPIIT Recognition?",
    answer: "No. Under Indian law, Sole Proprietorships and unregistered partnerships are NOT eligible for DPIIT recognition. You must first convert or register your business as a Private Limited Company, LLP, or Registered Partnership Firm."
  },
  {
    question: "Is the Section 80-IAC Tax Holiday automatically granted with DPIIT Recognition?",
    answer: "No. DPIIT recognition gives you the baseline certificate. To claim the 100% Income Tax Holiday under Section 80-IAC, a separate application must be submitted to the Inter-Ministerial Board (IMB) of Certification."
  },
  {
    question: "How long is the DPIIT Recognition Certificate valid?",
    answer: "The certificate is valid for up to 10 years from the entity's date of incorporation/registration, provided annual turnover does not exceed ₹100 Crore in any financial year."
  },
  {
    question: "What is the Government Fee for DPIIT Startup Registration?",
    answer: "There is ZERO government fee charged by DPIIT for issuing the Startup India Recognition Certificate. You only pay for FoundingLegals' professional drafting and CA/CS verification services."
  },
  {
    question: "Can a company formed by restructuring an old business get DPIIT status?",
    answer: "No. Any entity formed by splitting up or reconstructing an existing business or sole proprietorship is strictly disqualified from obtaining DPIIT recognition."
  },
  {
    question: "What is Angel Tax Exemption under Section 56(2)(viib)?",
    answer: "Angel Tax is a tax levied on excess share premium received when a startup issues shares to domestic investors above Fair Market Value (FMV). DPIIT-recognised startups filing Form 2 are completely exempt from Angel Tax up to an aggregate paid-up capital of ₹25 Crore."
  }
];

export default function DpiitRegistrationLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const subTabsContainerRef = useRef<HTMLDivElement>(null);

  // Formspree Integration for Lead Modal
  const [formState, handleSubmit] = useForm("xqeyrnpp");

  // Sticky navbar listener
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }

      // Bottom of page detection for FAQ
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const fullHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= fullHeight - 120) {
        setActiveTab("faqs");
        return;
      }

      // Active section scroll tracking
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

  // Auto-scroll active sub-tab pill horizontally
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
            <span>Govt of India Startup Recognition</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            Get DPIIT / Startup India Recognised — <span className="italic text-[#48532B]">Unlock Statutory Tax Holidays</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            DPIIT Recognition is the official statutory gateway under Notification G.S.R. 127(E) that grants eligible Indian startups a <strong className="font-semibold text-[#1A1917]">3-year 100% Income Tax Holiday (Sec 80-IAC)</strong>, <strong className="font-semibold text-[#1A1917]">Angel Tax Immunity (Sec 56(2)(viib))</strong>, <strong className="font-semibold text-[#1A1917]">80% Patent & 50% TM Fee Rebates</strong>, and eligibility to raise capital via <strong className="font-semibold text-[#1A1917]">Convertible Notes</strong>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for DPIIT Recognition</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" /> 100% Online Approval Assistance
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-[#55524D] leading-relaxed font-light">
              <p>
                <strong className="text-[#1A1917] font-medium">DPIIT Recognition</strong> (formerly DIPP) is an official recognition certificate issued by the Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry, Government of India under Notification G.S.R. 127(E).
              </p>
              <p>
                The Startup India initiative was established to transform India into a nation of job creators. Obtaining a DPIIT Recognition Certificate formally validates your entity as an innovative startup under Indian law, unlocking sovereign tax exemptions, fast-tracked intellectual property registration, self-certification under 9 environmental & labour laws, and access to SIDBI’s ₹10,000 Crore Fund of Funds.
              </p>
              <p>
                Whether you are preparing to raise your first angel round, seeking fast-track patent protection, or aiming to bid for government tenders without EMD, DPIIT recognition is the single most vital credential for your private limited company or LLP.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1A1917]">Key Highlights of DPIIT Recognition</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#55524D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>100% Tax Holiday:</strong> 3 consecutive years out of first 10 years (Sec 80-IAC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Angel Tax Exemption:</strong> Immunity under Section 56(2)(viib) up to ₹25 Cr.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>80% IP Rebate:</strong> Fast-track patent examination (Form 18A) & 50% off TM filing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Convertible Notes:</strong> Issue 10-year debt-equity notes under MCA framework.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: STATUTORY BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Legal Advantages</span>
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

        {/* ── SECTION 3: ELIGIBILITY & TYPES ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-8">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Qualification Mandate</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Entity Eligibility & Qualification</h2>
          </div>

          {/* Eligible Entity Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">Eligible Business Entity Structures</h3>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">DPIIT Registration Process</h2>
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
                <FileText className="w-4 h-4 text-[#48532B]" /> Mandatory DPIIT Application Checklist
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
                <ShieldCheck className="w-4 h-4 text-[#48532B]" /> Section 80-IAC & Angel Tax Documentation
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Timeline & Compliance Calendar</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-xs">
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 1</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Documentation & Pitch Narrative</h4>
              <p className="text-[#55524D] leading-relaxed">Document collection, Pitch Deck review, and CA/CS drafting of innovation quotient write-up.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 2</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Portal Form Filing</h4>
              <p className="text-[#55524D] leading-relaxed">National Startup India profile creation and Form DPIIT online submission.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 3–5</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Certificate Issuance</h4>
              <p className="text-[#55524D] leading-relaxed">DPIIT officer verification and digital 10-year Recognition Certificate grant.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">POST-RECOGNITION</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Tax Exemption Filings</h4>
              <p className="text-[#55524D] leading-relaxed">Submission of Form 2 Angel Tax exemption and Sec 80-IAC IMB tax holiday applications.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="bg-gradient-to-r from-[#48532B] to-[#394222] rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <span className="text-xs font-semibold text-[#EAECE4] uppercase tracking-wider">The FoundingLegals Advantage</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Why Choose FoundingLegals for DPIIT Registration?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm pt-4">
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-base text-white">Senior CA & CS Pitch Narrative</h4>
                <p className="text-[#EAECE4] leading-relaxed">Our in-house legal experts craft your innovation narrative to align 100% with DPIIT officer scrutiny guidelines.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-base text-white">Zero Rejection Guarantee</h4>
                <p className="text-[#EAECE4] leading-relaxed">Every application is pre-scrutinised to prevent queries, rejections, or delays in certificate issuance.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-base text-white">Complete Tax Immunity Filing</h4>
                <p className="text-[#EAECE4] leading-relaxed">We assist beyond the certificate—filing Form 2 Angel Tax exemption and Section 80-IAC tax holiday applications.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#48532B] hover:bg-[#F0F2EB] font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Get DPIIT Recognised Today
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
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Apply for DPIIT Recognition</h3>
              <p className="text-xs text-[#55524D] font-light">Fill your details below. Our senior CA/CS experts will guide your application.</p>
            </div>

            {formState.succeeded ? (
              <div className="bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#48532B] mx-auto" />
                <h4 className="font-serif font-bold text-base">Application Received!</h4>
                <p className="text-xs font-light">Our Startup India legal specialist will contact you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input type="hidden" name="service" value="DPIIT / Startup India Registration" />
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Company / Entity Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Acme Technologies Pvt Ltd"
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
                  <span>Submit Application Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

