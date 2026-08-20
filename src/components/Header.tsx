"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  FileText,
  Building2,
  CreditCard,
  Receipt,
  BarChart3,
  ShieldCheck,
  FolderOpen,
  Presentation,
  Search,
  TrendingUp,
  Banknote,
  Scale,
  Zap,
  Landmark,
  Rocket,
  ClipboardCheck,
  Handshake,
  User,
  Users,
  Award,
  Briefcase,
  Scroll,
  ArrowRight,
  Sparkles,
  Video,
  Check,
} from "lucide-react";

/* ── Menu data (For Founders Dropdown - UNTOUCHED) ── */
const sections = [
  {
    title: "Start",
    description: "Launch your company and get investment ready",
    icon: Rocket,
    items: [
      { name: "Company Registration", href: "/services/CAservices/name-registration" },
      { name: "Bank Opening", href: "/services/CAservices/bank-opening" },
      { name: "DPIIT Certification", href: "/services/CAservices/certifications" },
      {
        name: "GST Filing & Taxation",
        href: "/services/CAservices/gst-filing-and-taxation",
      },
      { name: "Client Management", href: "/services/LegalServices/client-management" },
      { name: "Team Management", href: "/services/LegalServices/team-management" },
    ],
  },
  {
    title: "Compliance",
    description: "Stay compliant and manage your filings",
    icon: ClipboardCheck,
    items: [
      {
        name: "Essential Startup Approach",
        href: "/services/LegalServices/essential-startup-approach",
      },
      { name: "Spend Analysis", href: "/services/CAservices/spend-analysis" },
      { name: "Document Management", href: "/services/LegalServices/document-management" },
      { name: "Legal Agreements", href: "/services/LegalServices/agreements" },
    ],
  },
  {
    title: "Raise",
    description: "Everything you need to close investment",
    icon: TrendingUp,
    items: [
      { name: "Pitch to Investors", href: "/services/LegalServices/pitch-to-investors" },
      { name: "Find Investors", href: "/services/LegalServices/find-investors", isNew: true },
      { name: "Raise Before a Round", href: "/services/LegalServices/raise-before-a-round" },
      { name: "Do a Funding Round", href: "/services/LegalServices/do-a-funding-round" },
      {
        name: "Finance for Fundraising",
        href: "/services/LegalServices/finance-for-fundraising",
      },
      {
        name: "Legal Advice for a Round",
        href: "/services/LegalServices/legal-advice-for-a-round",
      },
      { name: "Instant Investment", href: "/services/LegalServices/instant-investment" },
      { name: "IP Protection", href: "/services/LegalServices/ip-protection" },
    ],
  },
];

/* ── SERVICE CATEGORIES & ITEMS (Updated - Legal Services segregated) ── */
const SERVICE_CATEGORIES = [
  {
    id: "incorporation",
    name: "Business Incorporation",
    fullName: "Business Incorporation & Entity Registration",
    services: [
      { name: "Private Limited Company (Pvt. Ltd.) Incorporation", href: "/services/CAservices/company-incorporation" },
      { name: "Public Limited Company Incorporation", href: "/services/CAservices/public-limited-company" },
      { name: "Limited Liability Partnership (LLP) Incorporation", href: "/services/CAservices/llp-registration" },
      { name: "Partnership Firm Registration", href: "/services/CAservices/partnership-firm-registration" },
      { name: "Solo Proprietorship Registration", href: "/services/CAservices/sole-proprietorship-registration" },
    ]
  },
  {
    id: "licenses",
    name: "Licenses & Registrations",
    fullName: "Licenses & Registrations",
    services: [
      { name: "DPIIT / Startup India Registration", href: "/services/CAservices/dpiit-recognition" },
      { name: "GST Registration", href: "/services/CAservices/gst-registration" },
      { name: "UDYAM / MSME Registration", href: "/services/CAservices/msme-registration" },
      { name: "FSSAI Food License (Central)", href: "/services/CAservices/fssai-central-license" },
      { name: "FSSAI Food License (State)", href: "/services/CAservices/fssai-state-license" },
      { name: "IEC (Import Export Code)", href: "/services/CAservices/iec-registration" },
      { name: "Labour License", href: "/services/CAservices/labour-license" },
      { name: "Professional Tax Registration", href: "/services/CAservices/gst-indirect-tax" },
    ]
  },
  {
    id: "ip_services",
    name: "Intellectual Property (IP)",
    fullName: "Intellectual Property (IP) Services",
    services: [
      { name: "Trademark Registration", href: "/services/LegalServices/trademark-registration" },
    ]
  },
  {
    id: "gst_compliance",
    name: "GST & Indirect Tax",
    fullName: "GST & Indirect Tax Compliance",
    services: [
      { name: "Monthly GST Return Filing", href: "/services/CAservices/gst-indirect-tax" },
      { name: "Quarterly GST Return Filing", href: "/services/CAservices/gst-indirect-tax" },
      { name: "Annual GST Return (GSTR-9)", href: "/services/CAservices/gstr9-annual-return" },
      { name: "TDS Return Filing", href: "/services/CAservices/tds-return-filing" },
      { name: "Professional Tax Return Filing", href: "/services/CAservices/gst-indirect-tax" },
    ]
  },
  {
    id: "income_tax",
    name: "Income Tax & Advisory",
    fullName: "Income Tax Filing & Advisory",
    services: [
      { name: "Salary ITR Filing", href: "/services/CAservices/salary-itr-filing" },
      { name: "Business ITR Filing", href: "/services/CAservices/business-itr-filing" },
      { name: "ITR-3 Filing (Professional/Business)", href: "/services/CAservices/itr-3-filing" },
      { name: "ITR-4 Filing (Presumptive)", href: "/services/CAservices/itr-4-filing" },
      { name: "ITR-5 Filing (LLPs/Partnerships)", href: "/services/CAservices/itr-5-filing" },
      { name: "ITR-6 Filing (Companies)", href: "/services/CAservices/itr-6-filing" },
      { name: "ITR-7 Filing (Trusts/NGOs)", href: "/services/CAservices/itr-7-filing" },
    ]
  },
  {
    id: "audit_services",
    name: "Audit & Attestation",
    fullName: "Audit & Attestation Services",
    services: [
      { name: "GST Audit Execution (GSTR-9C)", href: "/services/CAservices/gst-audit" },
      { name: "Tax Audit Execution", href: "/services/CAservices/tax-audit" },
    ]
  },
  {
    id: "certifications_filings",
    name: "Certifications & Filings",
    fullName: "Certifications & Filings",
    services: [
      { name: "DPIIT Startup India Certification", href: "/services/CAservices/dpiit-recognition" },
      { name: "ROC Annual Compliance Filing", href: "/services/CAservices/certifications" },
      { name: "ISO Certification", href: "/services/CAservices/certifications" },
    ]
  },
  {
    id: "financial_services",
    name: "Financial & Investment",
    fullName: "Financial & Investment Services",
    services: [
      { name: "Loan Project Report Preparation", href: "/services/CAservices/loan-project-report" },
    ]
  },
  {
    id: "investment_ready",
    name: "Investment Ready Services",
    fullName: "Investment Ready Services",
    services: [
      { name: "Launch", href: "/services/LegalServices/pitch-to-investors" },
      { name: "Investor Ready", href: "/services/LegalServices/pitch-to-investors" },
      { name: "Fundraising Accelerator", href: "/services/LegalServices/pitch-to-investors" },
      { name: "Capital Raise Complete", href: "/services/LegalServices/pitch-to-investors" },
    ]
  }
];

/* ── SEGREGATED LEGAL SERVICES CATEGORIES ── */
const LEGAL_SERVICES_CLUSTERS = [
  {
    category: "Startup & Founders",
    icon: Rocket,
    items: [
      { name: "Founders' Agreement", href: "/services/LegalServices/agreements/founders-agreement" },
      { name: "Shareholders' Agreement (SHA)", href: "/services/LegalServices/agreements/shareholders-agreement" },
      { name: "Share Subscription Agreement (SSA)", href: "/services/LegalServices/agreements/share-subscription-agreement" },
      { name: "Convertible Note Agreement", href: "/services/LegalServices/agreements/convertible-note-agreement" },
    ]
  },
  {
    category: "Employment & HR",
    icon: Users,
    items: [
      { name: "Offer Letter", href: "/services/LegalServices/agreements/offer-letter" },
      { name: "Internship Agreement", href: "/services/LegalServices/agreements/internship-offer-letter" },
      { name: "Consultancy Agreement", href: "/services/LegalServices/agreements/consultancy-agreement" },
      { name: "Service Certificate", href: "/services/LegalServices/agreements/service-certificate" },
      { name: "Non-Compete Agreement", href: "/services/LegalServices/agreements/non-compete-agreement" },
    ]
  },
  {
    category: "IP & Confidentiality",
    icon: ShieldCheck,
    items: [
      { name: "Mutual NDA", href: "/services/LegalServices/agreements/non-disclosure-agreement" },
      { name: "IP Assignment Agreement", href: "/services/LegalServices/agreements/ip-assignment-agreement" },
      { name: "Technology Transfer Agreement", href: "/services/LegalServices/agreements/technology-transfer-agreement" },
      { name: "Software License Agreement", href: "/services/LegalServices/agreements/software-license-agreement" },
      { name: "Trademark License Agreement", href: "/services/LegalServices/agreements/trademark-license-agreement" },
    ]
  },
  {
    category: "Commercial & Business",
    icon: Briefcase,
    items: [
      { name: "Service Agreement", href: "/services/LegalServices/agreements/service-agreement" },
      { name: "Master Service Agreement (MSA)", href: "/services/LegalServices/agreements/master-service-agreement" },
      { name: "Vendor Agreement", href: "/services/LegalServices/agreements/vendor-agreement" },
      { name: "Distribution Agreement", href: "/services/LegalServices/agreements/distribution-agreement" },
      { name: "Joint Venture Agreement", href: "/services/LegalServices/agreements/joint-venture-agreement" },
      { name: "Franchise Agreement", href: "/services/LegalServices/agreements/franchise-agreement" },
      { name: "Supply Agreement", href: "/services/LegalServices/agreements/supply-agreement" },
      { name: "Rental Agreement", href: "/services/LegalServices/agreements/rental-agreement" },
      { name: "Commercial Rental Agreement", href: "/services/LegalServices/agreements/commercial-rental-agreement" },
    ]
  }
];

export default function Header() {
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com/").replace(/\/$/, "");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // States for For Founders Menu
  const [megaOpen, setMegaOpen] = useState(false);
  
  // States for Services Dropdown Menu
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState("incorporation");

  // State for Legal Services Dropdown
  const [legalServicesOpen, setLegalServicesOpen] = useState(false);

  // State for Company Dropdown
  const [companyOpen, setCompanyOpen] = useState(false);
  
  // State for mobile open sections
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [mobileActiveSub, setMobileActiveSub] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeAllDropdowns = () => {
    setMegaOpen(false);
    setServicesOpen(false);
    setLegalServicesOpen(false);
    setCompanyOpen(false);
  };

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Floating pill nav */}
      <nav
        className={`relative z-50 max-w-7xl mx-auto rounded-full transition-all duration-500 ease-out ${
          isScrolled || isMobileOpen
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(43,39,35,0.1)]"
            : "bg-white shadow-[0_1px_12px_rgba(43,39,35,0.06)]"
        }`}
      >
        <div className="flex items-center justify-between h-[54px] sm:h-[60px] px-4 sm:px-6 lg:px-7">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group">
            <img
              src="/founding-legals-logo.png"
              alt="Founding Legals"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center h-full gap-0.5 sm:gap-1">
            
            {/* 1. For Founders Mega Dropdown */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => {
                closeAllDropdowns();
                setMegaOpen(true);
              }}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1 px-3 py-[6px] text-[12.5px] font-semibold rounded-full transition-all duration-200 ${
                  megaOpen
                    ? "bg-cream-dark text-brown-900"
                    : "text-olive-700 hover:bg-cream hover:text-brown-900"
                }`}
              >
                For Founders
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {megaOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-full max-w-[860px] z-50">
                  <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(43,39,35,0.12)] border border-brown-100/40 animate-dropdown">
                    <div className="grid grid-cols-3 divide-x divide-brown-100/50 p-8 gap-0">
                      {sections.map((section) => (
                        <div key={section.title} className="px-6 first:pl-0 last:pr-0">
                          <div className="flex items-center gap-2.5 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-olive-600/10 flex items-center justify-center">
                              <section.icon className="w-4 h-4 text-olive-600" />
                            </div>
                            <h3 className="text-[15px] font-bold text-brown-900">
                              {section.title}
                            </h3>
                          </div>
                          <p className="text-[12px] text-brown-400 leading-relaxed mb-5 pl-[42px]">
                            {section.description}
                          </p>

                          <div className="space-y-0.5">
                            {section.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 px-3 py-[6px] -mx-1 rounded-lg text-[12.5px] font-medium text-brown-600 hover:text-brown-900 hover:bg-cream transition-colors duration-150"
                              >
                                {item.name}
                                {"isNew" in item && item.isNew && (
                                  <span className="text-[9px] font-bold uppercase tracking-widest bg-lime-bg text-olive-700 px-1.5 py-0.5 rounded-full">
                                    New
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Custom CA Services Dropdown */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => {
                closeAllDropdowns();
                setServicesOpen(true);
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1 px-3 py-[6px] text-[12.5px] font-semibold rounded-full transition-all duration-200 ${
                  servicesOpen
                    ? "bg-cream-dark text-brown-900"
                    : "text-olive-700 hover:bg-cream hover:text-brown-900"
                }`}
              >
                CA Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-full max-w-[1140px] z-50">
                  <div className="bg-white rounded-3xl shadow-[0_16px_48px_rgba(43,39,35,0.14)] border border-brown-100/40 overflow-hidden animate-dropdown grid grid-cols-12">
                    {/* Left Pane (Categories List) */}
                    <div className="col-span-4 bg-[#FAF9F6] border-r border-brown-100/40 p-4 space-y-1 flex flex-col justify-start max-h-[460px] overflow-y-auto">
                      {SERVICE_CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          onMouseEnter={() => setActiveServiceCategory(category.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all leading-snug ${
                            activeServiceCategory === category.id
                              ? "bg-[#5C6F2D] text-white shadow-sm"
                              : "text-brown-700 hover:bg-brown-100/30"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>

                    {/* Right Pane (Dynamic Contents) */}
                    <div className="col-span-8 p-6 max-h-[460px] overflow-y-auto bg-white text-left">
                      {SERVICE_CATEGORIES.map((category) => {
                        if (activeServiceCategory !== category.id) return null;
                        return (
                          <div key={category.id} className="space-y-4">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#5C6F2D] border-b border-brown-100/40 pb-2">
                              {category.fullName}
                            </h4>
                            <div className="grid grid-cols-2 gap-y-3.5 gap-x-6">
                              {category.services.map((s) => (
                                <a
                                  key={s.name}
                                  href={s.href}
                                  className="text-[12.5px] font-medium text-brown-600 hover:text-olive-700 transition-colors leading-tight py-1"
                                >
                                  {s.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Static Pricing & Contact items */}
            <a
              href="/pricing"
              onMouseEnter={closeAllDropdowns}
              className="px-3 py-[6px] text-[12.5px] font-semibold text-brown-600 hover:bg-cream hover:text-brown-800 rounded-full transition-all duration-200"
            >
              Pricing
            </a>
            <a
              href="/contact"
              onMouseEnter={closeAllDropdowns}
              className="px-3 py-[6px] text-[12.5px] font-semibold text-brown-600 hover:bg-cream hover:text-brown-800 rounded-full transition-all duration-200"
            >
              Contact
            </a>

            {/* 3. SEGREGATED LEGAL SERVICES DROPDOWN */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => {
                closeAllDropdowns();
                setLegalServicesOpen(true);
              }}
              onMouseLeave={() => setLegalServicesOpen(false)}
            >
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1 px-3 py-[6px] text-[12.5px] font-semibold rounded-full transition-all duration-200 ${
                  legalServicesOpen
                    ? "bg-cream-dark text-brown-900"
                    : "text-olive-700 hover:bg-cream hover:text-brown-900"
                }`}
              >
                Legal Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${legalServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {legalServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-full max-w-[1080px] z-50">
                  <div className="bg-white rounded-3xl shadow-[0_16px_48px_rgba(43,39,35,0.14)] border border-brown-100/40 overflow-hidden animate-dropdown p-6">
                    <div className="flex items-center justify-between border-b border-brown-100/50 pb-3 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#5C6F2D]/10 flex items-center justify-center">
                          <Scale className="w-4 h-4 text-[#5C6F2D]" />
                        </div>
                        <div>
                          <h3 className="text-[14px] font-bold text-brown-900 leading-none">Legal Services & Vetted Contracts</h3>
                          <p className="text-[11px] text-brown-500 mt-0.5">Customizable, lawyer-approved contracts & agreements tailored for Indian startups</p>
                        </div>
                      </div>
                      <a
                        href="/services/LegalServices/agreements"
                        className="inline-flex items-center gap-1 text-[12px] font-bold text-[#5C6F2D] hover:text-olive-800 hover:underline"
                      >
                        Explore All 20+ Agreements
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="grid grid-cols-4 gap-6 text-left">
                      {LEGAL_SERVICES_CLUSTERS.map((cluster) => (
                        <div key={cluster.category} className="space-y-3">
                          <div className="flex items-center gap-1.5 border-b border-brown-100/40 pb-2">
                            <cluster.icon className="w-3.5 h-3.5 text-[#5C6F2D]" />
                            <h4 className="text-[12px] font-bold text-brown-900 tracking-tight">
                              {cluster.category}
                            </h4>
                          </div>
                          <div className="space-y-1.5">
                            {cluster.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block text-[12px] font-medium text-brown-600 hover:text-[#5C6F2D] transition-colors leading-snug hover:translate-x-0.5 transform duration-150"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-brown-100/50 bg-[#FAF9F6] -mx-6 -mb-6 px-6 py-3.5 flex items-center justify-between rounded-b-3xl">
                      <div className="flex items-center gap-2 text-[12px] text-brown-700">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Need a custom legal agreement tailored by senior advocate experts?</span>
                      </div>
                      <a
                        href="/contact"
                        className="text-[12px] font-bold text-[#5C6F2D] hover:underline"
                      >
                        Request Custom Legal Drafting →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Company Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                closeAllDropdowns();
                setCompanyOpen(true);
              }}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1 px-3 py-[6px] text-[12.5px] font-semibold rounded-full transition-all duration-200 ${
                  companyOpen
                    ? "bg-[#F0EBDF] text-[#33312c]"
                    : "text-brown-600 hover:bg-cream hover:text-brown-800"
                }`}
              >
                Company
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
                />
              </button>

              {companyOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 z-50">
                  <div className="bg-[#f5f1e6] rounded-[20px] shadow-[0_12px_40px_rgba(43,39,35,0.08)] border border-brown-200/50 animate-dropdown flex items-center gap-1 px-2.5 py-2">
                    <a
                      href="/company/about-us"
                      className="px-3.5 py-1.5 text-[12.5px] font-semibold text-[#33312c] hover:text-olive-700 hover:bg-white/60 rounded-xl transition-all duration-200 whitespace-nowrap"
                    >
                      About us
                    </a>
                    <div className="w-px h-4 bg-brown-300/40" />
                    <a
                      href="/company/careers"
                      className="px-3.5 py-1.5 text-[12.5px] font-semibold text-[#33312c] hover:text-olive-700 hover:bg-white/60 rounded-xl transition-all duration-200 whitespace-nowrap"
                    >
                      Careers
                    </a>
                    <div className="w-px h-4 bg-brown-300/40" />
                    <a
                      href="/company/partnership"
                      className="px-3.5 py-1.5 text-[12.5px] font-semibold text-[#33312c] hover:text-olive-700 hover:bg-white/60 rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5"
                    >
                      <Handshake className="w-3.5 h-3.5" />
                      Partnership
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`${appUrl}/sign-up`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-4.5 py-[7px] bg-gradient-to-r from-olive-600/15 to-olive-700/25 backdrop-blur-sm border border-olive-600/35 text-olive-800 hover:from-olive-600 hover:to-olive-800 hover:text-white hover:border-olive-700 text-[12.5px] font-semibold rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Sign Up
            </a>
            <a
              href={`${appUrl}/sign-in`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-4.5 py-[7px] bg-white/80 backdrop-blur-sm border border-brown-200/60 text-brown-900 text-[12.5px] font-semibold rounded-full hover:bg-white hover:border-brown-300 hover:shadow-sm transition-all duration-300"
            >
              Log in
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors"
            aria-label="Toggle menu"
          >
            <X
              className={`absolute w-[18px] h-[18px] text-brown-700 transition-all duration-300 ${
                isMobileOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
              }`}
            />
            <Menu
              className={`absolute w-[18px] h-[18px] text-brown-700 transition-all duration-300 ${
                isMobileOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#fcfbf9] lg:hidden overflow-y-auto pt-[80px] sm:pt-[96px] pb-10">
          <div className="px-4">
            
            {/* Accordion List */}
            <div className="space-y-3 text-left">
              
              {/* MOBILE - For Founders Accordion */}
              <div className="bg-white rounded-2xl border border-brown-100/60 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleSection("founders")}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-olive-600/10 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-olive-600" />
                    </div>
                    <span className="text-[14px] font-bold text-brown-900 uppercase tracking-wide">
                      For Founders
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-brown-500 transition-transform duration-300 ${
                      openSections.includes("founders") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("founders") && (
                  <div className="px-4 pb-4 space-y-3">
                    {sections.map((sec) => (
                      <div key={sec.title} className="space-y-1">
                        <span className="text-[11px] font-bold text-brown-400 uppercase tracking-wider">{sec.title}</span>
                        <div className="pl-2 space-y-1">
                          {sec.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block py-1.5 text-[13px] font-medium text-brown-600 hover:text-brown-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MOBILE - Custom Services Accordion */}
              <div className="bg-white rounded-2xl border border-brown-100/60 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleSection("services")}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-olive-600/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-olive-600" />
                    </div>
                    <span className="text-[14px] font-bold text-brown-900 uppercase tracking-wide">
                      CA Services
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-brown-500 transition-transform duration-300 ${
                      openSections.includes("services") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("services") && (
                  <div className="px-4 pb-4 space-y-3.5">
                    {SERVICE_CATEGORIES.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <button
                          onClick={() => setMobileActiveSub(mobileActiveSub === category.id ? null : category.id)}
                          className="w-full flex items-center justify-between text-[12.5px] font-bold text-brown-800 border-b border-brown-100/40 pb-1 text-left"
                        >
                          <span>{category.fullName}</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-brown-500 shrink-0 transition-transform ${mobileActiveSub === category.id ? "rotate-180" : ""}`} />
                        </button>
                        {mobileActiveSub === category.id && (
                          <div className="pl-3 space-y-2 max-h-[250px] overflow-y-auto">
                            {category.services.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="block py-1 text-[13px] font-medium text-brown-600"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MOBILE - Segregated Legal Services Accordion */}
              <div className="bg-white rounded-2xl border border-brown-100/60 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleSection("legalservices")}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-olive-600/10 flex items-center justify-center">
                      <Scale className="w-4 h-4 text-olive-600" />
                    </div>
                    <span className="text-[14px] font-bold text-brown-900 uppercase tracking-wide">
                      Legal Services
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-brown-500 transition-transform duration-300 ${
                      openSections.includes("legalservices") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("legalservices") && (
                  <div className="px-4 pb-4 space-y-3.5">
                    {LEGAL_SERVICES_CLUSTERS.map((cluster) => (
                      <div key={cluster.category} className="space-y-2">
                        <span className="block text-[12px] font-bold text-[#5C6F2D] border-b border-brown-100/40 pb-1 uppercase tracking-wider">
                          {cluster.category}
                        </span>
                        <div className="pl-2 space-y-1.5">
                          {cluster.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block py-0.5 text-[12.5px] font-medium text-brown-600 hover:text-brown-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Other Mobile Nav Items */}
            <div className="mt-6 pt-4 border-t border-brown-200/50 px-2 space-y-1 text-left">
              <a
                href="/company/about-us"
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-brown-700 hover:text-brown-900 rounded-xl hover:bg-cream transition-colors"
              >
                About Us
              </a>
              <a
                href="/company/careers"
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-brown-700 hover:text-brown-900 rounded-xl hover:bg-cream transition-colors"
              >
                Careers
              </a>
              <a
                href="/company/partnership"
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-brown-700 hover:text-brown-900 rounded-xl hover:bg-cream transition-colors"
              >
                Partnership
              </a>
              <a
                href="/pricing"
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-brown-700 hover:text-brown-900 rounded-xl hover:bg-cream transition-colors"
              >
                Pricing
              </a>
              <a
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-brown-700 hover:text-brown-900 rounded-xl hover:bg-cream transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`${appUrl}/sign-up`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-olive-600/15 to-olive-700/25 backdrop-blur-sm border border-olive-600/35 text-olive-800 hover:from-olive-600 hover:to-olive-800 hover:text-white hover:border-olive-700 text-[14px] font-semibold rounded-full hover:shadow-md transition-all duration-300"
              >
                Sign Up
              </a>
              <a
                href={`${appUrl}/sign-in`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center px-4 py-3 bg-white border border-brown-200 text-brown-900 text-[14px] font-semibold rounded-full hover:bg-cream shadow-sm transition-all duration-300"
              >
                Log in
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
