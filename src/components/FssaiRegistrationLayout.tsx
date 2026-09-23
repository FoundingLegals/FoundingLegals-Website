"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  Send,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Award,
  FileText,
  TrendingUp,
  DollarSign,
  Building2,
  Clock,
  HelpCircle,
  CheckCircle2,
  Shield,
  Search,
  Download,
  AlertTriangle,
  Scale,
  Users,
  Store,
  UtensilsCrossed,
  Truck,
  Globe,
  Star,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "License Categories" },
  { id: "eligibility", label: "Eligibility & Thresholds" },
  { id: "who-needs-it", label: "Who Needs It" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step Process" },
  { id: "certificate", label: "Certificate & Verification" },
  { id: "fees", label: "Government Fees" },
  { id: "benefits", label: "Benefits" },
  { id: "penalties", label: "Penalties & Validity" },
  { id: "why-foundinglegals", label: "Why Founding Legals" },
  { id: "faqs", label: "FAQ's" },
];

// --- STATUTORY BENEFITS DATA ---
const BENEFITS = [
  {
    category: "LEGAL STATUTORY COMPLIANCE",
    name: "Unrestricted Food Business Operations",
    description: "Food businesses covered under the Food Safety and Standards Act, 2006 obtain the mandatory statutory authority to carry out manufacturing, trading, or catering legally.",
    highlight: "100% Statutory Immunity",
    icon: "📜",
  },
  {
    category: "REGULATORY IDENTIFICATION",
    name: "14-Digit FSSAI License Number",
    description: "Receive a unique 14-digit national registration number to display on product packaging, delivery boxes, menu cards, and premises signage.",
    highlight: "National Regulatory Recognition",
    icon: "🛡️",
  },
  {
    category: "E-COMMERCE & AGGREGATOR LISTING",
    name: "Swiggy, Zomato, Zepto & Blinkit Onboarding",
    description: "Mandatory prerequisite required by food delivery aggregators and quick-commerce platforms to list your food catalog and restaurant menu.",
    highlight: "Aggregator Onboarding Ready",
    icon: "🛵",
  },
  {
    category: "PERPETUAL VALIDITY (2026 FRAMEWORK)",
    name: "No Periodic Renewal Required",
    description: "Under the revised statutory framework effective from 1 April 2026, licenses enjoy perpetual validity unless suspended or cancelled, eliminating periodic renewal friction.",
    highlight: "Lifetime Perpetual Validity",
    icon: "⚡",
  },
  {
    category: "CONSUMER BRAND TRUST",
    name: "Standardized Hygiene & Quality Seal",
    description: "Demonstrate strict adherence to sanitary and food hygiene norms, boosting consumer confidence, retail distribution deals, and corporate catering contracts.",
    highlight: "Verified Consumer Trust",
    icon: "⭐",
  },
  {
    category: "PENALTY SHIELD",
    name: "Immunity from Section 63 Prosecution",
    description: "Shield your management from severe statutory penalties under Section 63 of FSS Act (imprisonment up to 6 months and monetary fines up to ₹5 Lakhs).",
    highlight: "Section 63 Legal Protection",
    icon: "⚖️",
  },
];

// --- 3 LICENSE TYPES ---
const LICENSE_TYPES = [
  {
    title: "1. Basic FSSAI Registration",
    turnover: "Turnover Up to ₹1.5 Crore",
    badge: "Petty Food Businesses",
    suitableFor: "Small food stalls, hawkers, home-based cloud kitchens, small retailers, and petty food manufacturers.",
    statutoryFee: "₹100 per year",
    validity: "Perpetual under 2026 Framework",
    formType: "Form-A Application",
    features: [
      "Turnover ceiling revised up to ₹1.5 Crore (from 1 April 2026)",
      "Simplified single-window Form-A filing via FoSCoS",
      "Immediate digital registration certificate grant",
      "Valid for single premises intra-state operations",
    ],
  },
  {
    title: "2. State FSSAI License",
    turnover: "Turnover ₹1.5 Crore to ₹50 Crore",
    badge: "Medium Food Businesses",
    suitableFor: "Mid-sized restaurants, commercial cloud kitchens, caterers, bakeries, distributors, and food processing units.",
    statutoryFee: "₹5,000 per year",
    validity: "Perpetual under 2026 Framework",
    formType: "Form-B Application",
    features: [
      "Mid-tier turnover framework: ₹1.5 Cr to ₹50 Cr",
      "Mandatory for commercial kitchens & restaurant chains",
      "Includes food safety officer inspection & FSMS declaration",
      "Full Swiggy, Zomato, and retail distributor onboarding",
    ],
  },
  {
    title: "3. Central FSSAI License",
    turnover: "Turnover Above ₹50 Crore or Multi-State",
    badge: "Large FBOs, Importers & E-Commerce",
    suitableFor: "Food importers/exporters, e-commerce food platforms, multi-state chains, high-capacity processors, and central kitchens.",
    statutoryFee: "₹7,500 per year",
    validity: "Perpetual under 2026 Framework",
    formType: "Form-B (Central Authority)",
    features: [
      "Mandatory for all Food Importers & Exporters (ICEGATE linked)",
      "Covers multi-state operations under single Head Office license",
      "Mandatory for E-Commerce Food Marketplaces (regardless of turnover)",
      "Dedicated Central Food Safety Authority scrutiny & grant",
    ],
  },
];

// --- WHO NEEDS IT ---
const WHO_NEEDS = [
  {
    title: "Food Manufacturers & Processors",
    desc: "Bakeries, flour mills, beverage units, confectioneries, dairy processing plants, packaging and relabelling units.",
    icon: Building2,
  },
  {
    title: "Restaurants, Cafes & Cloud Kitchens",
    desc: "Fine dining, quick-service restaurants (QSR), cloud kitchens, cafeterias, canteens, catering companies, and food trucks.",
    icon: UtensilsCrossed,
  },
  {
    title: "Wholesalers, Retailers & Distributors",
    desc: "Supermarkets, kirana stores, dry-fruit merchants, cold storage facilities, warehouse operators, and food logistics fleets.",
    icon: Store,
  },
  {
    title: "E-Commerce & Online Marketplaces",
    desc: "Online grocery apps, delivery platforms, e-commerce food sellers (mandatory Central License regardless of turnover).",
    icon: Globe,
  },
  {
    title: "Food Importers & Merchant Exporters",
    desc: "Businesses importing foreign food products or ingredients into India (requires Central License linked with IEC and AD Code).",
    icon: Truck,
  },
  {
    title: "Institutional Food Service Providers",
    desc: "School canteens, university messes, hospital kitchen facilities, railway catering contractors, and corporate cafeterias.",
    icon: Users,
  },
];

// --- DOCUMENTS DATA ---
const DOCS_LIST = [
  {
    category: "Basic Registration (Form A)",
    items: [
      "Government-issued Photo ID & Address Proof (PAN, Aadhaar, Passport) of Proprietor / Partners / Directors",
      "Proof of Business Address (Rent Agreement + Electricity Bill + Owner NOC / Property Deed)",
      "Passport size photograph of the applicant / authorized signatory",
      "Business Constitution (Partnership Deed, Certificate of Incorporation, MOA & AOA, if applicable)",
      "List of food products / categories intended to be handled",
    ],
  },
  {
    category: "State & Central License (Form B)",
    items: [
      "Blueprint / Layout Plan of the food processing unit or commercial kitchen showing dimensions",
      "Potable Water Analysis Test Report from a NABL-accredited or recognized testing laboratory",
      "List of Directors / Partners / Executive Members with complete contact details and ID proofs",
      "List of Machinery & Equipment installed with operational capacities and horsepower ratings",
      "Food Safety Management System (FSMS) Plan & Self-Declaration",
      "NOC from Municipal Corporation / Local Health Authority / Gram Panchayat (where applicable)",
      "Import Export Code (IEC) certificate for food importers and merchant exporters",
      "Nomination of Authorized Technical Person / Food Safety Supervisor with qualification proofs",
    ],
  },
];

// --- STEP BY STEP PROCESS ---
const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "Category & Eligibility Assessment",
    desc: "Our senior compliance CA evaluates your Kind of Business (KoB), production capacity, and revised turnover thresholds to determine whether Basic, State, or Central License applies.",
  },
  {
    step: "STEP 2",
    title: "Documentation & Layout Review",
    desc: "We verify your premises rent agreement, electricity bill, kitchen layout blueprint, food category list, and potable water testing report to guarantee zero FoSCoS rejection.",
  },
  {
    step: "STEP 3",
    title: "FoSCoS Portal Application Filing",
    desc: "We prepare and submit your official Form A (Registration) or Form B (License) on the Food Safety Compliance System (FoSCoS) portal with precise KoB codes.",
  },
  {
    step: "STEP 4",
    title: "Statutory Fee Settlement",
    desc: "Pay the designated government fee online (₹100 for Basic, ₹5,000 for State, or ₹7,500 for Central) with instantaneous receipt generation and tracking number.",
  },
  {
    step: "STEP 5",
    title: "Departmental Scrutiny & Inspection",
    desc: "We track your application through the Food Safety Officer scrutiny, resolve any departmental queries within 24 hours, and coordinate site inspection if required.",
  },
  {
    step: "STEP 6",
    title: "14-Digit FSSAI License Issuance",
    desc: "Download your official digital FSSAI License Certificate bearing the 14-digit registration number, valid across India under the perpetual compliance framework.",
  },
];

// --- FAQS DATA ---
const FAQS = [
  {
    question: "What is FSSAI Registration and who is required to obtain it in India?",
    answer: "FSSAI Registration is a mandatory statutory food safety requirement established under the Food Safety and Standards Act, 2006. Any individual or business involved in manufacturing, processing, packaging, storing, transporting, distributing, retailing, or importing food products in India must obtain an FSSAI Registration or License before commencing operations.",
  },
  {
    question: "What are the revised turnover thresholds for Basic, State, and Central FSSAI Licenses?",
    answer: "Under the revised regulatory framework effective from 1 April 2026: (1) Basic FSSAI Registration applies to small businesses with annual turnover up to ₹1.5 Crore. (2) State FSSAI License applies to mid-sized food businesses with turnover between ₹1.5 Crore and ₹50 Crore. (3) Central FSSAI License applies to large food businesses with turnover exceeding ₹50 Crore, as well as 100% of food importers, merchant exporters, and e-commerce food operators regardless of turnover.",
  },
  {
    question: "Is FSSAI License perpetual or does it need periodic renewal?",
    answer: "Under the revised 2026 regulations, FSSAI Licenses issued on or after 1 April 2026 have perpetual validity without the need for periodic renewal! However, food businesses must continue paying the applicable annual fee through FoSCoS and submit annual change reports when there are alterations in business activities, premises, or directors.",
  },
  {
    question: "What is the penalty for operating a food business without an FSSAI License?",
    answer: "Under Section 63 of the Food Safety and Standards Act, 2006, operating a food business without a valid FSSAI registration or license is a punishable offense carrying imprisonment of up to 6 months and a monetary penalty of up to ₹5,00,000 (₹5 Lakhs). Continuing offenses attract additional daily fines up to ₹1 Lakh.",
  },
  {
    question: "Can I run a Cloud Kitchen or Home Bakery with an FSSAI License?",
    answer: "Yes! Cloud kitchens and home bakeries are strictly classified as Food Business Operators (FBOs). If your turnover is up to ₹1.5 Crore, you can start with a Basic Registration. If your kitchen turnover exceeds ₹1.5 Crore or you partner with Swiggy and Zomato in multiple hubs, a State License is required. Founding Legals handles complete kitchen approval end-to-end.",
  },
  {
    question: "What are the government statutory fees for FSSAI registration?",
    answer: "The government fee structure is: (1) Basic FSSAI Registration: ₹100 per year. (2) State FSSAI License: ₹5,000 per year. (3) Central FSSAI License: ₹7,500 per year. For license modifications or addition of food categories, the fee is ₹1,000 plus applicable differential fees.",
  },
  {
    question: "How do I check and verify an FSSAI License number online?",
    answer: "You can verify any 14-digit FSSAI License number on the FoSCoS portal (foscos.fssai.gov.in) under the 'FBO Search' tool. Entering the 14-digit number reveals the registered business name, operating address, license category (Basic/State/Central), valid food product categories, and active compliance status.",
  },
  {
    question: "What documents are required to apply for an FSSAI Food License?",
    answer: "Key documents include: (1) Photo ID and address proof of the proprietor/directors (PAN + Aadhaar), (2) Proof of business premises (Rent Agreement + Electricity Bill + Landlord NOC), (3) Business registration documents (MOA/AOA, Partnership Deed, or Incorporation Certificate), (4) Blueprint/Layout of kitchen/plant, (5) Potable water testing report from a NABL lab, and (6) Food Safety Management System (FSMS) plan.",
  },
  {
    question: "Do food e-commerce sellers need a Central License?",
    answer: "Yes. Food businesses operating under the E-Commerce Kind of Business (selling food products online, running D2C food brands, or operating marketplace platforms) are statutory required to hold a Central FSSAI License, irrespective of their annual turnover.",
  },
  {
    question: "Can a single premise have multiple FSSAI licenses?",
    answer: "Under the 'One Premise, One Approval' statutory rule, a single physical premise can hold only one FSSAI License. Multiple eligible food activities (e.g. restaurant + bakery + retail counter) are consolidated under that single approval on the FoSCoS portal.",
  },
  {
    question: "How long does it take to obtain an FSSAI License through Founding Legals?",
    answer: "Basic FSSAI Registration is typically granted within 3 to 7 business days. State and Central FSSAI Licenses generally take 7 to 15 business days, depending on Food Safety Officer scrutiny and site inspection scheduling. Founding Legals fast-tracks application drafting to guarantee zero query delays.",
  },
  {
    question: "How do I download my approved FSSAI Certificate from FoSCoS?",
    answer: "Once approved by the authority, log in to your FoSCoS account using your application credentials, navigate to 'Issued Documents' → 'Download Certificate', and download your tamper-proof PDF certificate containing the official QR code and 14-digit FSSAI registration number.",
  },
];

export default function FssaiRegistrationLayout() {
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
        behavior: "smooth",
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
            <ShieldCheck className="w-4 h-4 text-[#48532B]" />
            <span>FSSAI Food Safety & Standards Authority of India · 2026 Compliant</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1917] tracking-tight max-w-4xl mx-auto leading-tight">
            FSSAI Registration & Food License Online — <span className="italic text-[#48532B]">Complete India FoSCoS Assistance</span>
          </h1>

          <p className="text-base md:text-lg text-[#55524D] max-w-3xl mx-auto leading-relaxed font-light">
            Apply for your statutory 14-digit FSSAI Basic Registration, State License, or Central License with Founding Legals. Get expert eligibility assessment under the revised <strong className="font-semibold text-[#1A1917]">2026 turnover thresholds</strong>, document compilation, error-free FoSCoS filing, and query support for restaurants, cloud kitchens, D2C food brands, and manufacturers.
          </p>

          {/* Trust Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#55524D]">
            <div className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span><strong>4.8 / 5</strong> (11,000+ Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Award className="w-4 h-4 text-[#48532B]" />
              <span><strong>500+</strong> MCA & FSSAI Certified Experts</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Building2 className="w-4 h-4 text-[#48532B]" />
              <span><strong>2 Lakh+</strong> Food Businesses Advised Pan-India</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#48532B]" />
              <span><strong>Perpetual Validity</strong> (No Periodic Renewal from 2026)</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-semibold rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply for Food License (FSSAI)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="text-xs text-[#706D67] font-medium flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#48532B]" /> Issued in 3–10 Business Days
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
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Food Safety Act, 2006</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">What is FSSAI Registration in India?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4 text-sm md:text-base text-[#55524D] leading-relaxed">
              <p>
                <strong>FSSAI Registration</strong> is a mandatory statutory food safety requirement for all eligible food businesses operating in India. The <strong>Food Safety and Standards Authority of India (FSSAI)</strong>, established under the Ministry of Health and Family Welfare, regulates and oversees food safety under the Food Safety and Standards Act, 2006.
              </p>
              <p>
                Every food business operator (FBO)—from home-based bakers and cloud kitchens to fine-dining restaurants, large-scale manufacturers, and food importers—must obtain the applicable FSSAI Registration or License <strong>before commencing commercial food activities</strong>.
              </p>
              <p>
                Applications are processed digitally via the central <strong>FoSCoS (Food Safety Compliance System) portal</strong>. Upon approval, businesses receive a government-issued certificate containing an official <strong>14-digit FSSAI number</strong>, which must be displayed on product packaging, delivery boxes, and operational premises.
              </p>
              
              <div className="p-4 rounded-2xl bg-[#F0F2EB] border border-[#D4D8C8] text-xs text-[#48532B] space-y-1.5">
                <span className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#48532B]" /> 2026 Revised Turnover Framework Highlight:
                </span>
                <p>
                  Effective 1 April 2026, FSSAI has raised the turnover threshold for Basic Registration to <strong>up to ₹1.5 Crore</strong>, State License to <strong>₹1.5 Crore to ₹50 Crore</strong>, and introduced <strong>perpetual lifetime validity</strong> without cumbersome periodic renewals!
                </p>
              </div>
            </div>

            {/* Quick Fact Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1A1917]">Key Statutory Facts</h3>
              <ul className="space-y-3 text-xs text-[#55524D]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Statutory Law:</strong> Food Safety & Standards Act, 2006</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Registration Portal:</strong> FoSCoS (foscos.fssai.gov.in)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Identifier:</strong> 14-Digit Unique FSSAI Number</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Mandatory Platforms:</strong> Swiggy, Zomato, Zepto, Blinkit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span><strong>Section 63 Penalties:</strong> Fines up to ₹5 Lakhs & 6 months imprisonment</span>
                </li>
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#48532B] text-white text-xs font-semibold rounded-xl hover:bg-[#394222] transition-colors cursor-pointer"
              >
                Check My FSSAI Eligibility
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: LICENSE TYPES ── */}
        <section id="types" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Classification Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Which FSSAI Approval Do You Need?</h2>
            <p className="text-sm text-[#706D67] mt-1">
              FSSAI approvals fall into 3 primary categories depending on your Kind of Business (KoB), production capacity, and annual turnover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LICENSE_TYPES.map((type, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-[#E5E0DA] shadow-xs flex flex-col justify-between hover:border-[#48532B]/40 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F0F2EB] text-[#48532B] text-[11px] font-semibold">
                    {type.badge}
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1A1917]">{type.title}</h3>
                    <p className="text-xs font-semibold text-[#48532B] mt-0.5">{type.turnover}</p>
                  </div>

                  <p className="text-xs text-[#55524D] leading-relaxed">
                    <strong>Suitable For:</strong> {type.suitableFor}
                  </p>

                  <div className="pt-2 border-t border-[#F2ECE4] space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Key Specifications</span>
                    {type.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#55524D]">
                        <Check className="w-3.5 h-3.5 text-[#48532B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Govt Statutory Fee</span>
                    <span className="text-xs font-bold text-[#1A1917]">{type.statutoryFee}</span>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-[#F0F2EB] hover:bg-[#48532B] text-[#48532B] hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Important Regulatory Note:</strong> While turnover defines the general tier, certain food activities—such as 100% of food importers, merchant exporters, e-commerce grocery sellers, and central government catering—<strong>statutorily require a Central FSSAI License regardless of turnover</strong>.
            </div>
          </div>
        </section>

        {/* ── SECTION 3: ELIGIBILITY & THRESHOLDS ── */}
        <section id="eligibility" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Rules</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Eligibility Criteria & Thresholds</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-[#E5E0DA] rounded-2xl overflow-hidden bg-white shadow-xs">
              <thead className="bg-[#F5F0EB] text-[#1A1917] font-semibold border-b border-[#E5E0DA]">
                <tr>
                  <th className="py-4 px-6">FSSAI Category</th>
                  <th className="py-4 px-6">Revised Turnover Threshold (2026)</th>
                  <th className="py-4 px-6">Capacity & Scope</th>
                  <th className="py-4 px-6">Fit For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2ECE4] text-[#55524D]">
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-4 px-6 font-semibold text-[#1A1917]">Basic FSSAI Registration</td>
                  <td className="py-4 px-6 font-semibold text-[#48532B]">Up to ₹1.5 Crore / year</td>
                  <td className="py-4 px-6">Production up to 100 kg/ltr per day</td>
                  <td className="py-4 px-6">Petty retailers, hawkers, tea stalls, small home bakers</td>
                </tr>
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-4 px-6 font-semibold text-[#1A1917]">State FSSAI License</td>
                  <td className="py-4 px-6 font-semibold text-[#48532B]">₹1.5 Crore to ₹50 Crore / year</td>
                  <td className="py-4 px-6">Manufacturing up to 2 Metric Tonnes / day (Dairy up to 50,000 L/day)</td>
                  <td className="py-4 px-6">Restaurants, cloud kitchens, bakeries, wholesalers, caterers</td>
                </tr>
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-4 px-6 font-semibold text-[#1A1917]">Central FSSAI License</td>
                  <td className="py-4 px-6 font-semibold text-[#48532B]">Exceeding ₹50 Crore / year</td>
                  <td className="py-4 px-6">Production &gt; 2 MT/day, Importers &amp; E-Commerce (No limit)</td>
                  <td className="py-4 px-6">Food importers, exporters, e-commerce, multi-state chains</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[#E5E0DA] space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">Multi-Location Operation Rule</h4>
              <p className="text-xs text-[#55524D] leading-relaxed">
                If a food business operates across two or more Indian states, the company must declare one premise as its <strong>Head Office</strong> and secure a <strong>Central FSSAI License</strong> for it. Each operating sub-branch/kitchen then obtains the applicable State or Basic license based on individual unit capacity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5E0DA] space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#1A1917]">One Premise, One License Principle</h4>
              <p className="text-xs text-[#55524D] leading-relaxed">
                A single physical commercial premise can hold only one active FSSAI License. If you operate multiple food activities (such as manufacturing + restaurant delivery + packaging), all activities must be consolidated into the single premise license on FoSCoS.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: WHO NEEDS IT ── */}
        <section id="who-needs-it" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Applicable Food Businesses</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Who Should Obtain an FSSAI License?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_NEEDS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0F2EB] flex items-center justify-center text-[#48532B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1A1917]">{item.title}</h3>
                  <p className="text-xs text-[#55524D] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 5: DOCUMENTS REQUIRED ── */}
        <section id="documents" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Checklist</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Documents Required for FSSAI License</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOCS_LIST.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#F2ECE4]">
                  <FileText className="w-5 h-5 text-[#48532B]" />
                  <h3 className="font-serif font-bold text-base text-[#1A1917]">{group.category}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#55524D] leading-relaxed">
                      <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#F0F2EB] border border-[#D4D8C8] text-xs text-[#48532B] flex items-center justify-between flex-wrap gap-3">
            <span>Need assistance preparing your kitchen layout blueprint or water test report?</span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-[#48532B] text-white rounded-xl font-semibold hover:bg-[#394222] transition-colors cursor-pointer"
            >
              Get Expert Documentation Support
            </button>
          </div>
        </section>

        {/* ── SECTION 6: PROCESS ── */}
        <section id="process" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">FoSCoS Portal Filing</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">How to Register for FSSAI License Online in India</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3 relative">
                <span className="text-xs font-bold text-[#48532B] tracking-wider">{step.step}</span>
                <h3 className="font-serif font-bold text-base text-[#1A1917]">{step.title}</h3>
                <p className="text-xs text-[#55524D] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: CERTIFICATE & VERIFICATION ── */}
        <section id="certificate" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Certificate & FoSCoS Verification</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">FSSAI Registration Certificate & Online Verification</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#F2ECE4]">
                <Download className="w-5 h-5 text-[#48532B]" />
                <h3 className="font-serif font-bold text-base text-[#1A1917]">How to Download FSSAI Certificate from FoSCoS</h3>
              </div>
              <ol className="space-y-3 text-xs text-[#55524D] list-decimal list-inside leading-relaxed">
                <li>Log in to the official FoSCoS portal (foscos.fssai.gov.in) with your application credentials.</li>
                <li>Go to the navigation panel and click on <strong>“License/Registration” → “Download Certificate”</strong>.</li>
                <li>Locate your approved application reference number or 14-digit license number.</li>
                <li>Click <strong>“Download PDF”</strong> to obtain the tamper-proof digital certificate with official QR code.</li>
                <li>Laminate and prominently display the certificate at your food counter, kitchen entrance, or billing desk.</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#F2ECE4]">
                <Search className="w-5 h-5 text-[#48532B]" />
                <h3 className="font-serif font-bold text-base text-[#1A1917]">How to Check &amp; Verify FSSAI License Number</h3>
              </div>
              <p className="text-xs text-[#55524D] leading-relaxed">
                Any consumer, business partner, or compliance officer can verify the validity of your 14-digit FSSAI number online in seconds:
              </p>
              <ul className="space-y-2.5 text-xs text-[#55524D]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span>Visit <strong>foscos.fssai.gov.in/fbo-search</strong> on any device.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span>Enter the 14-digit registration number and captcha code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#48532B] shrink-0 mt-0.5" />
                  <span>Instantly inspect business entity name, approved address, product categories, and perpetual status.</span>
                </li>
              </ul>

              <div className="p-3 bg-[#F0F2EB] rounded-xl text-[11px] text-[#48532B] font-medium">
                Mandatory rule: The 14-digit number must be printed alongside the FSSAI logo on all commercial food labels.
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: FEES ── */}
        <section id="fees" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Statutory Pricing</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">FSSAI Government Fees Structure</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs text-center space-y-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Basic Registration</span>
              <p className="text-2xl font-serif font-bold text-[#1A1917]">₹100 <span className="text-xs font-normal text-gray-400">/ year</span></p>
              <p className="text-[11px] text-[#706D67]">Turnover up to ₹1.5 Cr</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#48532B]/30 shadow-xs text-center space-y-2 relative">
              <span className="text-xs text-[#48532B] uppercase tracking-wider font-semibold">State FSSAI License</span>
              <p className="text-2xl font-serif font-bold text-[#48532B]">₹5,000 <span className="text-xs font-normal text-gray-400">/ year</span></p>
              <p className="text-[11px] text-[#706D67]">Turnover ₹1.5 Cr to ₹50 Cr</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs text-center space-y-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Central FSSAI License</span>
              <p className="text-2xl font-serif font-bold text-[#1A1917]">₹7,500 <span className="text-xs font-normal text-gray-400">/ year</span></p>
              <p className="text-[11px] text-[#706D67]">Turnover &gt; ₹50 Cr / Importers</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs text-center space-y-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">License Modification</span>
              <p className="text-2xl font-serif font-bold text-[#1A1917]">₹1,000 <span className="text-xs font-normal text-gray-400">+ diff</span></p>
              <p className="text-[11px] text-[#706D67]">Category or address change</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: BENEFITS ── */}
        <section id="benefits" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Business Advantages</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Benefits of FSSAI License in India</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3">
                <span className="text-2xl block">{b.icon}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#48532B]">{b.category}</span>
                <h3 className="font-serif font-bold text-base text-[#1A1917]">{b.name}</h3>
                <p className="text-xs text-[#55524D] leading-relaxed">{b.description}</p>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#F0F2EB] text-[#48532B] text-[10px] font-bold">
                    {b.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 10: PENALTIES ── */}
        <section id="penalties" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Legal Compliance Risks</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Penalties for Non-Compliance With FSSAI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200 space-y-3">
              <Scale className="w-6 h-6 text-rose-600" />
              <h3 className="font-serif font-bold text-base text-rose-950">Operating Without License (Sec 63)</h3>
              <p className="text-xs text-rose-900 leading-relaxed">
                Operating a food business without an FSSAI approval attracts imprisonment up to <strong>6 months</strong> and a monetary fine of up to <strong>₹5,00,000</strong>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="font-serif font-bold text-base text-amber-950">Subsequent &amp; Continuing Offenses</h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                Continuing offenses attract enhanced punishment, cancellation of business permissions, and daily recurring fines of up to <strong>₹1,00,000 per day</strong>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-3">
              <Shield className="w-6 h-6 text-stone-700" />
              <h3 className="font-serif font-bold text-base text-stone-900">Sub-standard or Unsafe Food</h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                Penalties range from ₹3 Lakhs to ₹10 Lakhs plus non-bailable criminal prosecution in cases causing grievous injury or endangerment to public health.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 11: WHY FOUNDING LEGALS ── */}
        <section id="why-foundinglegals" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">The Founding Legals Advantage</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Why Choose Founding Legals for Your Food License?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3">
              <Award className="w-6 h-6 text-[#48532B]" />
              <h3 className="font-serif font-bold text-base text-[#1A1917]">500+ CA &amp; Legal Experts</h3>
              <p className="text-xs text-[#55524D] leading-relaxed">
                Direct consultation with experienced Chartered Accountants and Food Safety compliance specialists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3">
              <CheckCircle2 className="w-6 h-6 text-[#48532B]" />
              <h3 className="font-serif font-bold text-base text-[#1A1917]">Zero Query Filing</h3>
              <p className="text-xs text-[#55524D] leading-relaxed">
                Meticulous pre-submission audit of blueprints and water tests guarantees immediate department sign-off.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3">
              <Clock className="w-6 h-6 text-[#48532B]" />
              <h3 className="font-serif font-bold text-base text-[#1A1917]">Fast-Track Approval</h3>
              <p className="text-xs text-[#55524D] leading-relaxed">
                Real-time tracking on FoSCoS and liaison with local Food Safety Officers to accelerate license issuance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E5E0DA] shadow-xs space-y-3">
              <TrendingUp className="w-6 h-6 text-[#48532B]" />
              <h3 className="font-serif font-bold text-base text-[#1A1917]">End-to-End Compliance</h3>
              <p className="text-xs text-[#55524D] leading-relaxed">
                Assistance with Trade License, GST registration, Trademark logo protection, and periodic change reporting.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 12: FAQS ── */}
        <section id="faqs" className="scroll-mt-48 space-y-6">
          <div className="border-b border-[#E5E0DA] pb-4">
            <span className="text-xs font-semibold text-[#48532B] uppercase tracking-wider">Frequently Asked Questions</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1917] mt-1">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E5E0DA] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F6] transition-colors"
                >
                  <span className="font-serif font-semibold text-sm text-[#1A1917]">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#48532B] shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#55524D] leading-relaxed border-t border-[#F2ECE4]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── LEAD CAPTURE FORM / CTA BANNER ── */}
        <section className="bg-gradient-to-br from-[#48532B] to-[#2E361B] text-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">Fast-Track Your Food License Today</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Ready to Get Your 14-Digit FSSAI License?</h2>
            <p className="text-xs md:text-sm text-stone-200 leading-relaxed font-light">
              Connect with Founding Legals' food compliance specialists. We identify your exact tier, prepare your documents, and secure your FoSCoS approval with zero friction.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name*"
              required
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              required
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email Address*"
              required
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <div className="sm:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#48532B] hover:bg-stone-100 font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{formState.submitting ? "Submitting..." : "Claim Your Free Consultation"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-stone-300">
                🔒 Your Information Is 100% Confidential. Zero Spam.
              </span>
            </div>
            {formState.succeeded && (
              <div className="sm:col-span-3 p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-center text-xs text-white">
                Thank you! Our FSSAI legal expert will contact you within 15 minutes.
              </div>
            )}
          </form>
        </section>

      </div>

      {/* ── MODAL FORM ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
            >
              ✕
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#48532B]">Founding Legals Consultation</span>
              <h3 className="font-serif font-bold text-xl text-[#1A1917] mt-0.5">Apply for FSSAI License</h3>
              <p className="text-xs text-[#706D67] mt-1">
                Enter your details to receive an instant eligibility assessment and government fee quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E0DA] text-xs focus:outline-none focus:border-[#48532B]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E0DA] text-xs focus:outline-none focus:border-[#48532B]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E0DA] text-xs focus:outline-none focus:border-[#48532B]"
              />
              <select
                name="licenseType"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E0DA] text-xs focus:outline-none focus:border-[#48532B] text-gray-700"
              >
                <option value="Basic Registration (Up to ₹1.5 Cr)">Basic FSSAI Registration (Turnover up to ₹1.5 Cr)</option>
                <option value="State License (₹1.5 Cr to ₹50 Cr)">State FSSAI License (Turnover ₹1.5 Cr to ₹50 Cr)</option>
                <option value="Central License (> ₹50 Cr / Importer)">Central FSSAI License (Above ₹50 Cr / Importers)</option>
                <option value="Not Sure - Need Guidance">Not Sure - Need CA Guidance</option>
              </select>

              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full py-3 bg-[#48532B] text-white text-xs font-bold rounded-xl hover:bg-[#394222] transition-colors cursor-pointer"
              >
                {formState.submitting ? "Submitting..." : "Submit Application Request"}
              </button>

              {formState.succeeded && (
                <p className="text-xs text-emerald-600 font-semibold text-center pt-1">
                  Application received! Our senior CA will reach out promptly.
                </p>
              )}
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
