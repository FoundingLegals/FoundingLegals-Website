"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck, Sparkles, Award, FileText, TrendingUp, DollarSign, Building2, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "eligibility", label: "Categories & Thresholds" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline & Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "MID-TIER OPERATING AUTHORITY",
    name: "Legal Operation for Medium FBOs",
    description: "Operate restaurants, cloud kitchens, bakeries, and processing units (turnover ₹12L–₹20Cr) with full legal sanction and state commissioner approval.",
    highlight: "Medium FBO Legal License",
    icon: "🍽️"
  },
  {
    category: "AGGREGATOR PARTNERSHIP",
    name: "Mandatory Food Delivery Listing",
    description: "Mandatory credential to list your kitchen, restaurant, or bakery menu on food aggregator platforms like Swiggy and Zomato.",
    highlight: "Swiggy & Zomato Partner Onboarding",
    icon: "🛵"
  },
  {
    category: "BRAND CONSUMER TRUST",
    name: "FSSAI 14-Digit Logo Packaging Display",
    description: "Display the trusted 14-digit FSSAI logo and State License number on product packaging, menu cards, and premises signage.",
    highlight: "14-Digit Packaging Logo",
    icon: "🛡️"
  },
  {
    category: "COMMERCIAL COMPLIANCE",
    name: "Commercial Premises & Business Loans",
    description: "Fulfill essential statutory requirements requested by commercial landlords, municipal health departments, and commercial bank lenders.",
    highlight: "Bank & Landlord Approval",
    icon: "🏦"
  },
  {
    category: "HYGIENE STANDARDS",
    name: "Standardized Hygiene & Safety Baselines",
    description: "Implements Hazard Analysis Critical Control Point (HACCP) hygiene baselines across kitchen staff, storage, and food preparation areas.",
    highlight: "HACCP Safety Standards",
    icon: "🧼"
  },
  {
    category: "PENALTY IMMUNITY",
    name: "Immunity from Statutory Penalties",
    description: "Avoid severe legal penalties under Section 63 of FSS Act (fines up to ₹5 Lakhs and imprisonment up to 6 months for unlicensed operations).",
    highlight: "Section 63 Legal Protection",
    icon: "⚖️"
  }
];

// --- FBO CATEGORIES DATA ---
const ENTITY_TYPES = [
  {
    type: "Restaurants, Hotels & Cloud Kitchens",
    badge: "TURNOVER ₹12L–₹20CR",
    description: "Eateries, fine-dining restaurants, hotels, and cloud kitchens operating with turnover between ₹12 Lakhs and ₹20 Crore.",
    icon: "🍳"
  },
  {
    type: "Medium Food Processors & Bakeries",
    badge: "CAPACITY ≤ 2 MT/DAY",
    description: "Food processing units and commercial bakeries producing up to 2 Metric Tonnes per day (or dairy processing up to 50,000 L/day).",
    icon: "🍞"
  },
  {
    type: "Wholesalers, Caterers & Distributors",
    badge: "INTRA-STATE DISTRIBUTORS",
    description: "Food distributors, wholesalers, caterers (serving > 500 persons/day), and specialized food transport vehicles.",
    icon: "🚚"
  }
];

// --- THRESHOLDS & CRITERIA ---
const ELIGIBILITY_CRITERIA = [
  {
    number: "1",
    title: "Annual Turnover (₹12 L to ₹20 Cr)",
    description: "Food businesses whose aggregate annual turnover is above ₹12 Lakhs and up to ₹20 Crore per annum."
  },
  {
    number: "2",
    title: "Manufacturing Capacity (≤ 2 MT/Day)",
    description: "Food processing/manufacturing capacity up to 2 Metric Tonnes per day (up to 500 Liters/day for dairy)."
  },
  {
    number: "3",
    title: "Catering Capacity (> 500 Persons/Day)",
    description: "Catering operations serving more than 500 persons per day or generating turnover > ₹12 Lakhs/year."
  },
  {
    number: "4",
    title: "Intra-State Boundary Limit",
    description: "Commercial food operations confined within the geographical boundaries of a single Indian state."
  }
];

// --- REGISTRATION PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Kind of Business (KOB) Selection",
    desc: "Select precise KOB codes and food product categories on the official FoSCoS portal."
  },
  {
    step: "STEP 2",
    title: "FoSCoS Form-B Application",
    desc: "Complete Form-B application specifying business capacities, address details, and food items."
  },
  {
    step: "STEP 3",
    title: "Address & Blueprint Compilation",
    desc: "Compile registered premises rent agreement, electricity bill, and kitchen layout blueprint."
  },
  {
    step: "STEP 4",
    title: "Water Test & FSMS Declaration",
    desc: "Upload certified potable water test report and Food Safety Management System (FSMS) self-declaration."
  },
  {
    step: "STEP 5",
    title: "Portal Submission & Fee Payment",
    desc: "Submit application on FoSCoS portal along with statutory state fee for chosen validity (1 to 5 years)."
  },
  {
    step: "STEP 6",
    title: "Food Safety Officer Inspection",
    desc: "State Food Safety Officer conducts physical inspection of kitchen/factory hygiene standards."
  },
  {
    step: "STEP 7",
    title: "14-Digit State License Grant",
    desc: "Receive official digital State FSSAI License certificate with 14-digit registration number."
  }
];

// --- DOCUMENTS DATA ---
const INDIVIDUAL_DOCS = [
  "Form-B signed by Authorized Proprietor, Partner, or Director",
  "Blueprint / Layout Plan of food processing unit or commercial kitchen showing dimensions",
  "Photo ID & Address Proof of Proprietor / Partners / Directors (PAN + Aadhaar)",
  "List of food categories to be manufactured, processed, or served"
];

const COMPANY_DOCS = [
  "Potable Water Analysis Test Report from a recognized laboratory",
  "Proof of Premises Possession (Electricity Bill + Rent Agreement + Owner NOC)",
  "Food Safety Management System (FSMS) Plan & Self-Declaration",
  "NOC from Municipal Corporation / Panchayat (if applicable)"
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is the turnover threshold for an FSSAI State License?",
    answer: "An FSSAI State License is required for food businesses with an annual turnover between ₹12 Lakhs and ₹20 Crore."
  },
  {
    question: "What is the difference between FSSAI Basic Registration and State License?",
    answer: "Basic Registration (FSSAI Registration) is for small businesses with turnover below ₹12 Lakhs. State License is for mid-sized businesses with turnover between ₹12 Lakhs and ₹20 Crore."
  },
  {
    question: "Is an FSSAI State License mandatory for starting a Cloud Kitchen on Swiggy or Zomato?",
    answer: "Yes. Cloud kitchens operating with turnover above ₹12 Lakhs must hold an FSSAI State License to partner with online delivery platforms like Swiggy and Zomato."
  },
  {
    question: "What is the validity period of an FSSAI State License?",
    answer: "An FSSAI State License can be obtained for a validity period ranging from 1 to 5 years, selectable at filing."
  },
  {
    question: "Is a water test report required for an FSSAI State License?",
    answer: "Yes. A potable water testing report confirming safe water quality is mandatory for all commercial food processing units, bakeries, and kitchens."
  },
  {
    question: "What is the penalty for operating a restaurant above ₹12 Lakhs turnover without a State License?",
    answer: "Operating an unlicensed food business attracts severe penalties under Section 63 of FSS Act — imprisonment up to 6 months and monetary fines up to ₹5 Lakhs."
  },
  {
    question: "How do I renew my FSSAI State License?",
    answer: "Renewal applications can be submitted online via the FoSCoS portal up to 180 days before the license expiry date."
  }
];

export default function FssaiStateRegistrationLayout() {
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
            <span>Mid-Sized Food Business Compliance</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            FSSAI State Food License Online — <span className="italic text-[#48532B]">Statutory Medium FBO Authority</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Secure your statutory 14-digit State Food Safety and Standards Authority of India (FSSAI) License under the Food Safety and Standards Act, 2006. Mandatory for mid-sized food manufacturers (<strong className="font-semibold text-[#1A1917]">turnover ₹12 Lakhs to ₹20 Crore</strong>), restaurants, cloud kitchens, caterers, and food distributors operating within a state.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for State FSSAI License</span>
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Food Safety Act</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm text-[#55524D] leading-relaxed font-light">
              <p>
                <strong className="text-[#1A1917] font-medium">FSSAI State License</strong> is the official food safety license granted by the State Licensing Authority under the Food Safety and Standards Authority of India (FSSAI), governed by the Commissioner of Food Safety in your state.
              </p>
              <p>
                Regulated under the Food Safety and Standards Act, 2006, the State License awards a 14-digit registration number that legally authorizes mid-tier food business operators (FBOs) to manufacture, process, store, distribute, or serve food items within a specific state boundary.
              </p>
              <p>
                Obtaining a State FSSAI License is statutorily mandatory for restaurants, hotels, bakeries, cloud kitchens, caterers, and food manufacturing units operating with an annual turnover between ₹12 Lakhs and ₹20 Crore, or processing up to 2 Metric Tonnes per day. It is also the essential prerequisite to partner with online food delivery platforms like Zomato and Swiggy.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E5E0DA] rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1A1917]">Key Highlights of FSSAI State License</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#55524D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Turnover Band:</strong> Mandatory for FBOs earning ₹12 Lakhs to ₹20 Crore/year.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Cloud Kitchen & Delivery:</strong> Prerequisite for Swiggy & Zomato partner onboarding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>14-Digit Packaging Logo:</strong> Display FSSAI mark on menus, retail packs, & signage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Inspection Protection:</strong> Legal immunity from Section 63 closure & penalty notices.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: STATUTORY BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Regulatory Advantages</span>
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

        {/* ── SECTION 3: CATEGORIES & THRESHOLDS ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-8">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Operational Scope</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Eligible Categories & Thresholds</h2>
          </div>

          {/* FBO Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">Eligible Medium FBO Categories</h3>
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
            <h3 className="text-lg font-serif font-bold text-[#1A1917]">4 Mandatory Statutory Thresholds</h3>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">FSSAI State Licensing Process</h2>
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
                <FileText className="w-4 h-4 text-[#48532B]" /> Entity & Kitchen Layout Checklist
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
                <ShieldCheck className="w-4 h-4 text-[#48532B]" /> Water Report & Premises Checklist
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
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Form-B & Water Test Review</h4>
              <p className="text-[#55524D] leading-relaxed">Document gathering, water test verification, and FoSCoS Form-B drafting.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 3–5</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Portal Filing & Scrutiny</h4>
              <p className="text-[#55524D] leading-relaxed">Online portal submission and State Licensing Officer document review.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 6–12</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">FSO Kitchen Inspection</h4>
              <p className="text-[#55524D] leading-relaxed">Physical premises inspection & hygiene check by State Food Safety Officer.</p>
            </div>
            <div className="bg-white border border-[#E5E0DA] p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[#48532B] block">DAY 12–15</span>
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">14-Digit License Grant</h4>
              <p className="text-[#55524D] leading-relaxed">Issuance of digital 14-digit State FSSAI License (valid for 1 to 5 years).</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY FOUNDINGLEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="bg-gradient-to-r from-[#48532B] to-[#394222] rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <span className="text-xs font-semibold text-[#EAECE4] uppercase tracking-wider">The FoundingLegals Advantage</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Why Choose FoundingLegals for State FSSAI License?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm pt-4">
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Expert FoSCoS KOB Code Selection</h4>
                <p className="text-[#EAECE4] leading-relaxed">Senior regulatory experts select exact KOB codes to ensure 100% approval without category rejections.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">Water Test & Blueprint Audit</h4>
                <p className="text-[#EAECE4] leading-relaxed">We verify your water test reports and kitchen blueprints to pass officer inspections on the first attempt.</p>
              </div>
              <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-xs border border-white/10">
                <h4 className="font-serif font-bold text-white">FSO Query & Notice Handling</h4>
                <p className="text-[#EAECE4] leading-relaxed">End-to-end management of queries or revision notices issued by State Food Safety Officers.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#48532B] hover:bg-[#F0F2EB] font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Apply for State FSSAI License Today
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
              <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Fast-Track Licensing</span>
              <h3 className="text-xl font-serif font-bold text-[#1A1917]">Apply for State FSSAI License</h3>
              <p className="text-xs text-[#55524D] font-light">Fill your details below. Our senior food safety team will initiate your FoSCoS state filing.</p>
            </div>

            {formState.succeeded ? (
              <div className="bg-[#F0F2EB] border border-[#D4D8C8] text-[#48532B] p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#48532B] mx-auto" />
                <h4 className="font-serif font-bold text-base">Application Received!</h4>
                <p className="text-xs font-light">Our FSSAI Licensing consultant will contact you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input type="hidden" name="service" value="FSSAI Food License (State)" />
                <div>
                  <label className="block text-[#1A1917] font-semibold mb-1">Restaurant / Entity Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Royal Kitchens & Foods"
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
                    placeholder="e.g. founder@royalkitchens.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0DA] bg-[#FAF7F2] focus:outline-none focus:border-[#48532B] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full py-3.5 bg-[#48532B] hover:bg-[#394222] text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit FSSAI State Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
