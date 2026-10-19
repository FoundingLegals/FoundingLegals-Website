"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Check,
  X,
  Send,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Star,
  Calculator,
  Headphones,
  Building2,
  FileText,
  ShieldCheck,
  Clock,
  Coins,
  Scale,
  FileSignature,
  Zap,
  Award,
  CheckCircle2,
  Sparkles,
  Users,
  Briefcase,
  TrendingUp,
  Landmark,
  Receipt,
  FileSpreadsheet
} from "lucide-react";
import { openCostEstimator } from "@/lib/pricingEngineData";
import { navigateToApp, talkToExpert } from "@/lib/appNavigation";

// --- SECTION TABS FOR PAGE NAVIGATION ---
const TABS = [
  { id: "overview", label: "Private Limited Overview" },
  { id: "process", label: "Registration Process" },
  { id: "documents", label: "Documents Required" },
  { id: "government-fees", label: "Government Fees" },
  { id: "professional-fees", label: "Professional Fees" },
  { id: "total-cost", label: "Total Cost Breakdown" },
  { id: "what-we-handle", label: "What Founding Legals Handles" },
  { id: "timeline", label: "Process Timeline" },
  { id: "faqs", label: "FAQs" },
  { id: "get-started", label: "Get Started" }
];

// --- COMPREHENSIVE SEO FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is a Private Limited Company in India?",
    answer: "A Private Limited Company (Pvt Ltd) is a legally recognized business entity registered under the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs (MCA). It provides limited liability protection to its shareholders, holds a separate legal identity from its owners, allows perpetual succession, and is the gold-standard corporate structure required by venture capital and angel investors for raising equity funding in India."
  },
  {
    question: "How much does private limited company registration cost in India?",
    answer: "The total cost to incorporate a Private Limited Company in India consists of three components: (1) MCA Government Fees (which is ₹0 filing fee for authorized capital up to ₹15 Lakhs under SPICe+), (2) State Stamp Duty on MOA, AOA, and Form SPICe+ (which varies by state from ₹500 to ₹5,000), and (3) Professional Fees. Founding Legals offers transparent CA-assisted incorporation packages starting at ₹1,999 + Govt fees, with zero hidden markups and official statutory receipts provided."
  },
  {
    question: "What is the step-by-step company registration process?",
    answer: "The company registration process follows 7 key steps: (1) Procurement of Class-3 Digital Signature Certificates (DSC) for all directors, (2) Name approval application via MCA SPICe+ Part A (RUN), (3) Drafting Memorandum of Association (MOA) and Articles of Association (AOA), (4) Filing SPICe+ Part B along with AGILE-PRO-S for PAN, TAN, EPFO, ESIC, and bank account setup, (5) Payment of state stamp duty, (6) RoC verification and issuance of the Certificate of Incorporation (COI) with a 21-digit CIN, and (7) Filing Form INC-20A for Commencement of Business within 180 days."
  },
  {
    question: "What documents are required to register a private limited company?",
    answer: "For Indian directors and shareholders: PAN Card (mandatory), Identity Proof (Passport, Voter ID, Aadhaar, or Driving License), Address Proof (Bank Statement, Electricity or Mobile Bill under 2 months old), and passport-size photographs. For the registered office: Recent electricity or utility bill (under 30 days old), rent agreement or property deed, and a signed No Objection Certificate (NOC) from the property owner."
  },
  {
    question: "How long does it take to register a company in India?",
    answer: "With Founding Legals, the typical private limited company registration takes 7 to 10 working days end-to-end. Name approval takes 1-2 days, drafting e-MOA and e-AOA takes 1-2 days, and MCA RoC verification and Certificate of Incorporation issuance takes 3-5 working days, subject to government server processing speed."
  },
  {
    question: "Is physical presence required for company incorporation?",
    answer: "No, physical presence is not required at any stage. The entire company registration process with Founding Legals is 100% digital and paperless. All document submissions, DSC applications, MCA filings, and government approvals are handled online through our secure founder platform."
  },
  {
    question: "What is the difference between authorized capital and paid-up capital?",
    answer: "Authorized capital is the maximum amount of share capital that a company is legally authorized to issue to its shareholders as stated in its Memorandum of Association (typically ₹1,00,000 for early-stage startups). Paid-up capital is the actual amount of money paid by shareholders into the company's bank account for shares allotted. Following the Companies Act amendment, there is no mandatory minimum paid-up capital requirement to register a company in India."
  },
  {
    question: "Can an NRI or foreign national be a director in an Indian Private Limited Company?",
    answer: "Yes, foreign nationals, NRIs, and foreign companies can register and invest in an Indian Private Limited Company under the Foreign Direct Investment (FDI) automatic route in most sectors. However, at least one director on the Board of Directors must be an Indian resident (who has stayed in India for at least 182 days during the financial year)."
  },
  {
    question: "What post-incorporation compliances are mandatory for startups?",
    answer: "Immediately after incorporation, a company must: (1) Open a corporate bank account and deposit share capital, (2) Appoint a statutory auditor via Form ADT-1 within 30 days, (3) File Form INC-20A (Commencement of Business) within 180 days, (4) Issue share certificates to subscribers within 60 days, and (5) Complete annual filings (AOC-4 for financial accounts, MGT-7 for annual returns, and DIR-3 KYC for directors)."
  },
  {
    question: "Why should startups choose Founding Legals over traditional consultancies?",
    answer: "Founding Legals combines qualified Chartered Accountants and corporate advocates with proprietary legal-tech automation. You receive 100% transparent pricing starting at ₹1,999, fast-track 7-day turnaround, official MCA receipts, free DPIIT Startup India consultation, investor-ready MOA/AOA clauses, and secure lifetime vault access for all company credentials."
  }
];

// --- PRICING DELIVERABLES ---
const INCLUDED_DELIVERABLES = [
  "Name availability check & SPICe+ Part A reservation",
  "2 Class-3 Digital Signature Certificates (DSC) with 2-year validity",
  "2 Director Identification Numbers (DIN) for directors",
  "Custom drafting of e-MOA (Memorandum) & e-AOA (Articles)",
  "SPICe+ Part B incorporation form drafting & MCA ROC filing",
  "Certificate of Incorporation (COI) with 21-digit CIN",
  "Company PAN (Permanent Account Number) & TAN allotment",
  "EPFO, ESIC & Professional Tax statutory registrations",
  "Corporate Bank Account opening assistance with zero balance",
  "Form INC-20A Commencement of Business filing guidance"
];

export default function CompanyIncorporationLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const item of TABS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Structured Data Schema for Google Rich Snippets
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.foundinglegals.com/services/CAservices/company-incorporation#service",
        "name": "Private Limited Company Registration in India",
        "serviceType": "Company Incorporation",
        "description": "Complete online Private Limited Company Registration in India. End-to-end MCA SPICe+ filing, name approval, 2x DSC, 2x DIN, e-MOA, e-AOA, PAN, TAN, and Certificate of Incorporation in 7-10 working days.",
        "provider": {
          "@type": "Organization",
          "name": "Founding Legals",
          "url": "https://www.foundinglegals.com",
          "logo": "https://www.foundinglegals.com/founding-legals-logo.png",
          "telephone": "+919791222557",
          "email": "info@foundinglegals.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5th Floor, The Herbt's Square Building, Autonagar, APIIC IT Park, Mangalagiri",
            "addressLocality": "Amaravati",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "522503",
            "addressCountry": "IN"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "offers": {
          "@type": "Offer",
          "price": "1999",
          "priceCurrency": "INR",
          "url": "https://www.foundinglegals.com/services/CAservices/company-incorporation",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.foundinglegals.com/services/CAservices/company-incorporation#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.foundinglegals.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.foundinglegals.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Private Limited Company Registration in India",
            "item": "https://www.foundinglegals.com/services/CAservices/company-incorporation"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.foundinglegals.com/services/CAservices/company-incorporation#faq",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2c2925]">
      {/* Inject Schema.org JSON-LD for Search Engines */}
      <Script
        id="company-incorporation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* ── TOP HERO SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-brown-600 font-medium">
          <Link href="/" className="hover:text-olive-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-olive-700 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-olive-900 font-semibold">Private Limited Company Registration</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14 mb-10">

          {/* LEFT: Text Content */}
          <div className="flex-1 min-w-0">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[11px] font-bold text-olive-800 tracking-widest uppercase bg-olive-50 px-4 py-1.5 rounded-full border border-olive-200/60 inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Starting at ₹1,999 + Govt Fees
              </span>
              <span className="text-[11px] font-bold text-brown-700 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/60 inline-block">
                Fast-Track 7 to 10 Working Days Process
              </span>
            </div>

            {/* Main SEO H1 */}
            <h1 className="font-serif text-[28px] sm:text-[38px] md:text-[46px] lg:text-[48px] font-semibold text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
              Private Limited Company Registration in India
            </h1>
            
            {/* Clear Introduction: What Founding Legals provides, Who it is for, What you get */}
            <div className="text-[15px] md:text-[16px] text-brown-700 leading-relaxed space-y-4 mb-8 font-normal">
              <p>
                <strong>Founding Legals</strong> delivers a seamless, end-to-end <strong>company incorporation</strong> platform built exclusively for Indian startups and entrepreneurs. We manage the entire statutory workflow under the <strong>Ministry of Corporate Affairs (MCA)</strong> — from name approval and Class-3 DSC issuance to e-MOA/AOA drafting, SPICe+ filing, and Certificate of Incorporation issuance.
              </p>
              <p>
                <strong>Who is this for?</strong> Ideal for startup founders, tech ventures, bootstrapped creators, and growth-stage entrepreneurs looking to establish limited liability protection, protect personal assets, issue ESOPs, and build an investor-ready corporate vehicle recognized by venture capital funds and angel networks.
              </p>
              <p>
                <strong>What you get:</strong> An official <strong>Certificate of Incorporation (COI)</strong> with your 21-digit Corporate Identity Number (CIN), Director Identification Numbers (DIN), Digital Signature Certificates (DSC), company PAN &amp; TAN cards, tailored MOA &amp; AOA, zero-balance bank account assistance, and complete post-incorporation INC-20A guidance.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => navigateToApp("Private Limited (Pvt Ltd) Company Incorporation")}
                className="bg-[#48532B] hover:bg-olive-800 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>Opt Service &amp; Register</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => talkToExpert("Private Limited (Pvt Ltd) Company Incorporation")}
                className="bg-white hover:bg-olive-50 text-[#48532B] border border-[#48532B]/40 font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-2xs inline-flex items-center gap-2 active:scale-95"
              >
                <Headphones className="w-4 h-4 text-[#48532B]" />
                <span>Talk to CA Expert</span>
              </button>
              <button
                type="button"
                onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                className="bg-white hover:bg-brown-50 text-brown-900 border border-brown-300 font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-2xs inline-flex items-center gap-2 active:scale-95"
              >
                <Calculator className="w-4 h-4 text-olive-700" />
                <span>Calculate Total Cost</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Hero Image & Trust Card */}
          <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0">
            <div className="w-full rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative">
              <img
                src="/company-registration-hero.png"
                alt="Private Limited Company Registration in India - Founding Legals"
                className="w-full h-auto object-cover object-center"
              />
              <div className="p-5 bg-white border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-olive-900">100% Online &amp; MCA Verified</p>
                  <p className="text-[11px] text-gray-500">Government fees transparently calculated</p>
                </div>
                <span className="px-3 py-1 bg-olive-100 text-olive-900 rounded-lg text-xs font-bold">
                  Zero Hidden Margins
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── COMPLETE INCORPORATION PACKAGE SUMMARY ── */}
        <div className="pt-4 mb-12 border-b border-gray-100 pb-12">
          <div className="w-full bg-gradient-to-br from-[#FAFBF8] via-white to-[#F2F6EC] rounded-[28px] md:rounded-[32px] border-2 border-[#48592A]/40 p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#D8E4CA]/70 mb-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E4ECDC] text-[#2C3E14] border border-[#CCD8B8]">
                  <Star className="w-3 h-3 fill-[#2C3E14]" />
                  All-Inclusive Incorporation Kit
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#48592A] bg-white px-3 py-1 rounded-full border border-brown-200/60">
                  Flat MCA Package · Form SPICe+
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-olive-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Fast-Track 7–10 Working Days Process</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* LEFT: Pricing & CTAs */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-r lg:border-[#D8E4CA]/70 lg:pr-8">
                <div>
                  <div className="mb-2 flex items-baseline gap-2.5">
                    <span className="text-[44px] sm:text-[52px] font-extrabold font-serif text-[#1A1917] tracking-tight leading-none">
                      ₹1,999
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-olive-900 leading-tight">
                        + Govt Fees &amp; Stamp Duty
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">
                        Official MCA receipts provided
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-[22px] font-bold text-[#1A1917] mb-2">
                    Private Limited Company Registration Package
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mb-5">
                    Full execution from company name reservation to official Certificate of Incorporation (COI) issuance, backed by senior Chartered Accountants.
                  </p>

                  <div className="space-y-2.5 bg-white/90 border border-olive-200/70 rounded-2xl p-4 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                      <Check className="w-4 h-4 text-olive-700 shrink-0" />
                      <span>Includes 2 Class-3 Digital Signature Certificates (DSC)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                      <Check className="w-4 h-4 text-olive-700 shrink-0" />
                      <span>Includes 2 Director Identification Numbers (DIN)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                      <Check className="w-4 h-4 text-olive-700 shrink-0" />
                      <span>Company PAN, TAN, PF, ESIC &amp; Bank Account Assistance</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => navigateToApp("Private Limited (Pvt Ltd) Company Incorporation")}
                    className="w-full py-4 px-6 rounded-xl font-bold text-[14px] bg-[#2E4218] hover:bg-[#1E2E0F] text-white transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2.5 shadow-md active:scale-95"
                  >
                    <span>Register Private Limited Company</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => talkToExpert("Private Limited (Pvt Ltd) Company Incorporation")}
                      className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-olive-50 text-[#2E4218] border border-[#2E4218]/40 transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Headphones className="w-3.5 h-3.5 text-[#2E4218]" />
                      <span>Talk to CA Expert</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                      className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-[#F2F6EC] text-[#2E4218] border border-[#2E4218]/40 transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Calculator className="w-3.5 h-3.5 text-olive-700" />
                      <span>Estimate State Cost</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-500 text-center font-normal pt-1">
                    Zero hidden charges · 100% digital process across all 28 Indian states
                  </p>
                </div>
              </div>

              {/* RIGHT: Included Deliverables */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[11.5px] font-extrabold uppercase tracking-widest text-[#48592A] flex items-center gap-1.5">
                      <span>Included Statutory Deliverables</span>
                      <span className="text-[10.5px] font-bold text-olive-800 bg-olive-100/80 px-2 py-0.5 rounded-full border border-olive-200">
                        10 Key Deliverables
                      </span>
                    </p>
                    <span className="text-[11.5px] text-gray-500 font-medium hidden sm:inline">
                      Complete Startup Launch Kit
                    </span>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3 text-[13px]">
                    {INCLUDED_DELIVERABLES.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#D8E4CA]/60 hover:border-[#48592A]/50 transition-all shadow-2xs leading-snug"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#E4ECDC] text-[#2C3E14] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span className="font-semibold text-[#1A1917]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8E4CA]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#2A3416]">
                  <div className="flex items-center gap-2 text-olive-900 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600" />
                    <span>State stamp duty varies by state (Maharashtra, Karnataka, Delhi, etc.)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                    className="text-olive-800 hover:text-olive-950 font-bold underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Check exact state stamp duty</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY TAB NAVIGATION & IN-DEPTH CONTENT SECTIONS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Sticky Horizontal Navigation Bar */}
        <div className="sticky top-20 z-30 mb-10 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E5E1D6] p-2 shadow-sm">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-4 py-2 rounded-xl text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#EBF3FF] text-[#1E3A8A] border border-[#BFDBFE] font-bold shadow-xs"
                      : "text-[#5C5954] hover:text-[#1A1917] hover:bg-gray-50 border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">

          {/* ── SECTION 1: PRIVATE LIMITED COMPANY REGISTRATION (OVERVIEW & BENEFITS) ── */}
          <article id="overview" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <Building2 className="w-4 h-4" />
              <span>Entity Structure &amp; Startup Foundation</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Private Limited Company Registration in India
            </h2>
            <div className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed space-y-4 font-normal">
              <p>
                A <strong>Private Limited Company</strong> is India’s foremost corporate business structure, created under the <strong>Companies Act, 2013</strong>. It establishes an independent legal entity separate from its founders and shareholders. This separation provides the bedrock of commercial trust in India: your personal assets (home, savings, personal property) remain entirely insulated against business liabilities and commercial debts.
              </p>
              <p>
                Whether you plan to bootstrap your business or seek venture capital investment from Indian and global VC funds, establishing a Private Limited Company provides the legal authority required to issue equity shares, create Employee Stock Ownership Plans (ESOPs), enter government contracts, and obtain <strong>DPIIT Startup India</strong> tax exemptions under Section 80-IAC.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center font-bold text-xs mb-3">
                  01
                </div>
                <h3 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1.5">Limited Liability</h3>
                <p className="text-[13px] text-[#6B6965] leading-relaxed">
                  Shareholders’ liability is restricted strictly to the unpaid nominal value of their subscribed shares. Personal assets are 100% safeguarded.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center font-bold text-xs mb-3">
                  02
                </div>
                <h3 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1.5">Perpetual Succession</h3>
                <p className="text-[13px] text-[#6B6965] leading-relaxed">
                  The company possesses uninterrupted existence. Ownership transfers, resignation, or death of directors do not dissolve the legal entity.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center font-bold text-xs mb-3">
                  03
                </div>
                <h3 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1.5">Equity Fundraising</h3>
                <p className="text-[13px] text-[#6B6965] leading-relaxed">
                  Only private limited entities can issue equity, CCPS, and convertible notes to angel investors, VC firms, and foreign institutional investors.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center font-bold text-xs mb-3">
                  04
                </div>
                <h3 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1.5">Corporate Credibility</h3>
                <p className="text-[13px] text-[#6B6965] leading-relaxed">
                  Public MCA verification gives domestic banks, enterprise clients, international SaaS vendors, and payment gateways high institutional confidence.
                </p>
              </div>
            </div>
          </article>

          {/* ── SECTION 2: COMPANY REGISTRATION PROCESS ── */}
          <article id="process" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <FileSignature className="w-4 h-4" />
              <span>Step-by-Step SPICe+ Workflow</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Company Registration Process in India
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-normal">
              In India, company registration is executed through the MCA&apos;s unified <strong>SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus)</strong> web form. Founding Legals guides you through each distinct stage with dedicated CA oversight:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Digital Signature Certificate (DSC) Procurement",
                  desc: "Every proposed director must obtain a Class-3 Digital Signature Certificate (DSC) containing high-security encryption keys to authenticate electronic forms on the MCA V3 portal. We handle verification online via video KYC."
                },
                {
                  step: "02",
                  title: "Company Name Reservation (SPICe+ Part A / RUN)",
                  desc: "We submit your top 2 preferred company names to the Central Registration Centre (CRC). Names must be unique, business-descriptive, and free of trademark conflicts under the Trade Marks Act, 1999."
                },
                {
                  step: "03",
                  title: "Drafting e-MOA & e-AOA Charters",
                  desc: "Our corporate legal team drafts your Memorandum of Association (defining primary and ancillary business objectives) and Articles of Association (governance rules, share rights, and board authority) tailored for startup scalability."
                },
                {
                  step: "04",
                  title: "Filing SPICe+ Part B & AGILE-PRO-S",
                  desc: "We submit the unified incorporation form to the MCA, incorporating director details, registered office verification, DIN allotment, PAN, TAN, EPFO, ESIC, and corporate bank account pre-selection in a single integrated application."
                },
                {
                  step: "05",
                  title: "State Stamp Duty Payment & ROC Scrutiny",
                  desc: "Payment of statutory state stamp duty based on your registered office state. The Registrar of Companies (ROC) reviews and verifies your documentation and legal consents (Form INC-9 and DIR-2)."
                },
                {
                  step: "06",
                  title: "Issuance of Certificate of Incorporation (COI)",
                  desc: "Upon successful verification, the ROC issues your official Certificate of Incorporation containing your 21-digit Corporate Identity Number (CIN), permanent PAN, and TAN."
                },
                {
                  step: "07",
                  title: "Commencement of Business (Form INC-20A)",
                  desc: "Within 180 days of incorporation, shareholders deposit their subscribed capital into the newly opened bank account, and we file Form INC-20A to legally initiate commercial business operations."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 sm:gap-5 p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#2B2723] text-white font-bold flex items-center justify-center shrink-0 text-[14px]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-[17px] font-bold text-[#1A1917] mb-1">{item.title}</h3>
                    <p className="text-[13.5px] text-[#6B6965] leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* ── SECTION 3: DOCUMENTS REQUIRED ── */}
          <article id="documents" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <FileText className="w-4 h-4" />
              <span>Mandatory Documentation Checklist</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Documents Required for Company Incorporation
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-normal">
              To ensure zero objections from the Registrar of Companies (ROC), all submitted documents must be self-attested, valid, and clearly legible:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl space-y-3">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917]">
                  1. For Indian Directors &amp; Shareholders
                </h3>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>PAN Card:</strong> Mandatory for all Indian citizens (name must match identity proofs exactly).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Identity Proof:</strong> Valid Passport, Voter ID Card, Aadhaar Card, or Driving License.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Address Proof:</strong> Bank Statement, Electricity Bill, Mobile Bill, or Telephone Bill (strictly under 2 months old).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Photographs:</strong> Recent passport-sized color photograph for each director.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl space-y-3">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917]">
                  2. Registered Office Address Proof
                </h3>
                <ul className="space-y-2.5 text-[13.5px] text-[#4A4642]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Utility Bill:</strong> Recent Electricity Bill, Gas Bill, Water Bill, or Property Tax receipt (under 30 days old).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Proof of Ownership:</strong> Registered Rent Agreement / Lease Deed or Ownership Sale Deed.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Landlord NOC:</strong> Signed No Objection Certificate (NOC) from the property owner permitting commercial usage.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                    <span><strong>Residential Addresses Permitted:</strong> A home address can legally serve as your registered office.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl space-y-3 sm:col-span-2">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1917]">
                  3. Statutory Charters &amp; Consents (Prepared by Founding Legals)
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-brown-200">
                    <h4 className="font-bold text-sm text-brown-900 mb-1">e-MOA &amp; e-AOA</h4>
                    <p className="text-xs text-brown-600">Electronic Memorandum and Articles of Association drafted per Table A / F of Schedule I.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-brown-200">
                    <h4 className="font-bold text-sm text-brown-900 mb-1">Form DIR-2</h4>
                    <p className="text-xs text-brown-600">Formal written consent of directors to act on the board per Section 152(5) of the Companies Act.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-brown-200">
                    <h4 className="font-bold text-sm text-brown-900 mb-1">Form INC-9</h4>
                    <p className="text-xs text-brown-600">Electronic affidavit declaring that promoters have no prior convictions relating to company fraud.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ── SECTION 4: GOVERNMENT FEES ── */}
          <article id="government-fees" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <Landmark className="w-4 h-4" />
              <span>Statutory Ministry of Corporate Affairs Fees</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Government Fees for Company Registration
            </h2>
            <div className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed space-y-4 font-normal">
              <p>
                Under the Government of India’s <em>Ease of Doing Business</em> initiative, the Ministry of Corporate Affairs (MCA) has <strong>waived the MCA filing fee (SPICe+ Part B)</strong> for all companies incorporated with an authorized capital of up to <strong>₹15,00,000 (₹15 Lakhs)</strong>.
              </p>
              <p>
                The remaining mandatory government fees comprise:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14.5px]">
                <li><strong>SPICe+ Part A Name Reservation (RUN):</strong> ₹1,000 (reserves 2 proposed names for 20 days with 1 re-submission chance).</li>
                <li><strong>PAN &amp; TAN Allotment Fee:</strong> ₹133 (combined fee collected by NSDL/MCA).</li>
                <li><strong>State Stamp Duty on MOA, AOA &amp; SPICe+:</strong> Payable to the respective State Government where your registered office is situated. Stamp duty varies by state (e.g. ₹500 in Delhi/Haryana, ₹2,000 to ₹3,000 in Maharashtra/Karnataka, and higher in Punjab/Kerala).</li>
              </ul>
            </div>

            <div className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-[17px] font-bold text-[#1A1917]">Need to check your state’s exact stamp duty?</h4>
                <p className="text-xs text-[#6B6965] mt-1">Our engine covers official stamp duty rules across all 28 Indian States &amp; 8 Union Territories.</p>
              </div>
              <button
                type="button"
                onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                className="px-6 py-3 rounded-xl bg-olive-700 hover:bg-olive-800 text-white font-semibold text-xs transition-all shadow-sm shrink-0"
              >
                Launch State Stamp Duty Estimator
              </button>
            </div>
          </article>

          {/* ── SECTION 5: PROFESSIONAL FEES ── */}
          <article id="professional-fees" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <Award className="w-4 h-4" />
              <span>Transparent Advisory &amp; Legal Execution</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Professional Fees: Transparent &amp; Fair
            </h2>
            <div className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed space-y-4 font-normal">
              <p>
                Traditional consultancies often quote vague prices like &ldquo;all-inclusive ₹15,000&rdquo; without showing what goes to the government versus their own margin. At <strong>Founding Legals</strong>, we believe in 100% price transparency:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 bg-[#FAF9F6] border border-olive-200 rounded-2xl text-center">
                  <span className="text-xs font-bold text-olive-700 uppercase">Professional Fee</span>
                  <div className="text-3xl font-serif font-extrabold text-brown-900 mt-1 mb-1">₹1,999</div>
                  <p className="text-xs text-brown-600">CA drafting, ROC coordination &amp; e-filing</p>
                </div>
                <div className="p-5 bg-[#FAF9F6] border border-olive-200 rounded-2xl text-center">
                  <span className="text-xs font-bold text-olive-700 uppercase">Class-3 DSC (2 Nos)</span>
                  <div className="text-3xl font-serif font-extrabold text-brown-900 mt-1 mb-1">Included</div>
                  <p className="text-xs text-brown-600">2-year validity digital signature tokens</p>
                </div>
                <div className="p-5 bg-[#FAF9F6] border border-olive-200 rounded-2xl text-center">
                  <span className="text-xs font-bold text-olive-700 uppercase">Hidden Margins</span>
                  <div className="text-3xl font-serif font-extrabold text-emerald-700 mt-1 mb-1">₹0</div>
                  <p className="text-xs text-brown-600">Original government receipts provided</p>
                </div>
              </div>
            </div>
          </article>

          {/* ── SECTION 6: TOTAL COST BREAKDOWN ── */}
          <article id="total-cost" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <Coins className="w-4 h-4" />
              <span>Complete Financial Transparency</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Total Cost of Company Incorporation in India
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-normal">
              Here is the exact cost breakdown for registering a Private Limited Company with ₹1,00,000 authorized capital:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#E5E1D6]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FAF9F6] text-[#1A1917] font-serif border-b border-[#E5E1D6]">
                  <tr>
                    <th className="p-4 font-bold">Cost Component</th>
                    <th className="p-4 font-bold">Payee / Authority</th>
                    <th className="p-4 font-bold">Approximate Amount</th>
                    <th className="p-4 font-bold">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E1D6] text-brown-700 text-xs sm:text-sm">
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">Name Reservation (RUN / SPICe+ Part A)</td>
                    <td className="p-4">Ministry of Corporate Affairs (MCA)</td>
                    <td className="p-4 font-mono font-bold">₹1,000</td>
                    <td className="p-4 text-xs">Reserves 2 names for 20 days with 1 resubmission</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">SPICe+ Part B Filing Fee (Up to ₹15L Capital)</td>
                    <td className="p-4">MCA (Government of India)</td>
                    <td className="p-4 font-mono font-bold text-emerald-700">₹0 (Waived)</td>
                    <td className="p-4 text-xs">Zero filing fee under Ease of Doing Business</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">State Stamp Duty (MOA, AOA, SPICe+)</td>
                    <td className="p-4">State Revenue Department</td>
                    <td className="p-4 font-mono font-bold">₹500 – ₹3,500</td>
                    <td className="p-4 text-xs">Varies by registered state (e.g. ₹500 in Delhi, ₹2,000 in MH)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">2x Class-3 Digital Signatures (DSC)</td>
                    <td className="p-4">Certifying Authority (eMudhra / VSign)</td>
                    <td className="p-4 font-mono font-bold">Included</td>
                    <td className="p-4 text-xs">2-year valid cryptographic USB tokens for 2 directors</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">2x Director Identification Numbers (DIN)</td>
                    <td className="p-4">MCA Allotment</td>
                    <td className="p-4 font-mono font-bold">Included</td>
                    <td className="p-4 text-xs">Integrated within SPICe+ approval</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">PAN &amp; TAN Statutory Cards</td>
                    <td className="p-4">Income Tax Department (NSDL)</td>
                    <td className="p-4 font-mono font-bold">₹133 (Included)</td>
                    <td className="p-4 text-xs">Delivered electronically and via physical card</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brown-900">Founding Legals CA Drafting &amp; Filing</td>
                    <td className="p-4">Founding Legals (Arvya Tech)</td>
                    <td className="p-4 font-mono font-bold text-olive-800">₹1,999</td>
                    <td className="p-4 text-xs">Dedicated CA assistance, e-MOA/AOA drafting &amp; filing</td>
                  </tr>
                  <tr className="bg-olive-50/70 font-bold text-brown-900">
                    <td className="p-4 font-serif text-sm sm:text-base">Total Estimated Cost</td>
                    <td className="p-4">All-Inclusive Transparent Total</td>
                    <td className="p-4 font-mono text-sm sm:text-base text-olive-900">₹6,500 – ₹10,500</td>
                    <td className="p-4 text-xs text-olive-800 font-semibold">Zero hidden charges. Full receipts given.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* ── SECTION 7: WHAT FOUNDING LEGALS HANDLES ── */}
          <article id="what-we-handle" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <ShieldCheck className="w-4 h-4" />
              <span>Full-Spectrum Legal Infrastructure</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              What Founding Legals Handles for You
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-normal">
              We remove the legal friction so you can focus entirely on product and sales. Here is everything our dedicated CA team manages:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "1. MCA Name Clearance",
                  desc: "Preliminary trademark search and SPICe+ Part A filing to ensure your name passes MCA scrutiny without objection."
                },
                {
                  title: "2. Class-3 DSC Issuance",
                  desc: "End-to-end procurement and validation of cryptographic digital signature certificates for all proposed directors."
                },
                {
                  title: "3. Investor-Ready MOA & AOA",
                  desc: "Custom drafting of company charters with expansive operational clauses suited for future VC and institutional investment."
                },
                {
                  title: "4. Unified SPICe+ Filing",
                  desc: "Preparation and submission of Part B forms, DIR-2 consents, INC-9 declarations, and AGILE-PRO-S compliance attachments."
                },
                {
                  title: "5. Certificate of Incorporation",
                  desc: "Tracking ROC approval and delivering your official Certificate of Incorporation bearing your 21-digit CIN."
                },
                {
                  title: "6. PAN, TAN & Bank Account",
                  desc: "Simultaneous allotment of company PAN, TAN, and direct integration with leading banks for zero-balance startup accounts."
                },
                {
                  title: "7. EPFO & ESIC Registrations",
                  desc: "Automatic establishment of employee provident fund and state insurance codes to ensure workforce compliance."
                },
                {
                  title: "8. Form INC-20A Guidance",
                  desc: "Full assistance with bank capital deposit verification and filing the mandatory Declaration of Commencement within 180 days."
                },
                {
                  title: "9. Lifetime Digital Vault",
                  desc: "256-bit encrypted storage of your CIN, MOA, AOA, COI, and director credentials accessible on web and mobile."
                }
              ].map((h, i) => (
                <div key={i} className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl hover:border-olive-400 transition-colors">
                  <h3 className="font-serif text-[16px] font-bold text-[#1A1917] mb-1.5">{h.title}</h3>
                  <p className="text-[13px] text-[#6B6965] leading-relaxed font-normal">{h.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* ── SECTION 8: HOW LONG THE PROCESS TAKES ── */}
          <article id="timeline" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <Clock className="w-4 h-4" />
              <span>Predictable Timeline &amp; Milestones</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              How Long Does the Company Registration Process Take?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-normal">
              The entire private limited company registration process takes <strong>7 to 10 working days</strong> from document submission to certificate issuance:
            </p>

            <div className="relative border-l-2 border-olive-400 pl-6 ml-3 space-y-8 py-2">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-olive-700 ring-4 ring-white" />
                <span className="text-xs font-bold text-olive-800 uppercase tracking-wider bg-olive-100 px-2.5 py-0.5 rounded-md">Days 1 – 2</span>
                <h3 className="font-serif text-[17px] font-bold text-[#1A1917] mt-1.5">DSC Issuance &amp; Name Reservation</h3>
                <p className="text-[13.5px] text-[#6B6965] leading-relaxed mt-1">
                  Directors complete video KYC for Class-3 DSC issuance. Our team files SPICe+ Part A for company name reservation on the MCA portal.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-olive-700 ring-4 ring-white" />
                <span className="text-xs font-bold text-olive-800 uppercase tracking-wider bg-olive-100 px-2.5 py-0.5 rounded-md">Days 3 – 4</span>
                <h3 className="font-serif text-[17px] font-bold text-[#1A1917] mt-1.5">Drafting e-MOA, e-AOA &amp; Director Consents</h3>
                <p className="text-[13.5px] text-[#6B6965] leading-relaxed mt-1">
                  Upon name approval, our lawyers draft your e-MOA and e-AOA. Directors electronically sign the INC-9 declaration and DIR-2 consents using their DSCs.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-olive-700 ring-4 ring-white" />
                <span className="text-xs font-bold text-olive-800 uppercase tracking-wider bg-olive-100 px-2.5 py-0.5 rounded-md">Days 5 – 7</span>
                <h3 className="font-serif text-[17px] font-bold text-[#1A1917] mt-1.5">MCA SPICe+ Part B Filing &amp; ROC Approval</h3>
                <p className="text-[13.5px] text-[#6B6965] leading-relaxed mt-1">
                  We upload the complete SPICe+ dossier and pay state stamp duty. The Registrar of Companies (ROC) reviews the application and issues the official Certificate of Incorporation (COI).
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-olive-700 ring-4 ring-white" />
                <span className="text-xs font-bold text-olive-800 uppercase tracking-wider bg-olive-100 px-2.5 py-0.5 rounded-md">Days 8 – 10</span>
                <h3 className="font-serif text-[17px] font-bold text-[#1A1917] mt-1.5">PAN, TAN &amp; Bank Account Activation</h3>
                <p className="text-[13.5px] text-[#6B6965] leading-relaxed mt-1">
                  Electronic PAN and TAN are allotted. We connect you with our partner banks for immediate zero-balance corporate account opening and share certificate issuance.
                </p>
              </div>
            </div>
          </article>

          {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS (FAQS) ── */}
          <article id="faqs" className="scroll-mt-36 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-700">
              <HelpCircle className="w-4 h-4" />
              <span>Answers to Common Founder Questions</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1A1917]">
              Frequently Asked Questions on Company Registration
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border border-[#E5E1D6] rounded-2xl overflow-hidden transition-all bg-[#FAF9F6]">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50/50 cursor-pointer"
                    >
                      <h3 className="font-serif text-[15.5px] font-semibold text-[#1A1917] pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-olive-700" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-[14px] text-[#4A4642] leading-relaxed border-t border-[#E5E1D6] pt-4 bg-white font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </article>

          {/* ── SECTION 10: GET STARTED (HIGH CONVERSION CTA) ── */}
          <article id="get-started" className="scroll-mt-36 bg-gradient-to-br from-[#1E2E0F] via-[#2E4218] to-[#142008] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-white/10 text-olive-200 px-3.5 py-1.5 rounded-full inline-block border border-white/10">
                Launch Your Startup Today
              </span>
              <h2 className="font-serif text-[28px] sm:text-[38px] font-semibold leading-tight text-white">
                Register Your Private Limited Company with Founding Legals
              </h2>
              <p className="text-[15px] sm:text-[16px] text-white/80 leading-relaxed font-light">
                Join thousands of Indian startup founders who trust Founding Legals for fast-track company incorporation, digital signatures, MCA compliance, and investor-ready legal infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigateToApp("Private Limited (Pvt Ltd) Company Incorporation")}
                className="bg-white hover:bg-olive-50 text-[#1E2E0F] font-bold text-[14px] px-8 py-4 rounded-xl transition-all cursor-pointer shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Start Online Incorporation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => talkToExpert("Private Limited (Pvt Ltd) Company Incorporation")}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold text-[14px] px-6 py-4 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
              >
                <Headphones className="w-4 h-4 text-olive-300" />
                <span>Schedule Free 30-Min CA Consultation</span>
              </button>
              <button
                type="button"
                onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold text-[14px] px-6 py-4 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
              >
                <Calculator className="w-4 h-4 text-olive-300" />
                <span>Calculate Exact State Fees</span>
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                ₹1,999 Flat Professional Fee
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Official MCA Statutory Receipts
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Fast-Track 7 to 10 Working Days
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Zero Physical Visits Required
              </span>
            </div>
          </article>

        </div>
      </section>

    </div>
  );
}
