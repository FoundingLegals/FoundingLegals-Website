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
  Award,
  Receipt,
  Sparkles,
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
} from "lucide-react";

/* ── Menu data ── */

const sections = [
  {
    title: "Start",
    description: "Launch your company and get investment ready",
    icon: Rocket,
    items: [
      { name: "Name Registration", href: "/services/name-registration" },
      { name: "Company Incorporation", href: "/services/company-incorporation" },
      { name: "Bank Opening", href: "/services/bank-opening" },
      { name: "Certifications", href: "/services/certifications" },
      { name: "GST Filing & Taxation", href: "/services/gst-filing-and-taxation" },
    ],
  },
  {
    title: "Compliance",
    description: "Stay compliant and manage your filings",
    icon: ClipboardCheck,
    items: [
      { name: "Essential Startup Approach", href: "/services/essential-startup-approach" },
      { name: "Client Invoice", href: "/services/client-invoice" },
      { name: "Spend Analysis", href: "/services/spend-analysis" },
      { name: "IP Protection", href: "/services/ip-protection" },
      { name: "Document Management", href: "/services/document-management" },
    ],
  },
  {
    title: "Raise",
    description: "Everything you need to close investment",
    icon: TrendingUp,
    items: [
      { name: "Pitch to Investors", href: "/services/pitch-to-investors" },
      { name: "Find Investors", href: "/services/find-investors", isNew: true },
      { name: "Raise Before a Round", href: "/services/raise-before-a-round" },
      { name: "Do a Funding Round", href: "/services/do-a-funding-round" },
      { name: "Finance for Fundraising", href: "/services/finance-for-fundraising" },
      { name: "Legal Advice for a Round", href: "/services/legal-advice-for-a-round" },
      { name: "Instant Investment", href: "/services/instant-investment" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Floating pill nav */}
      <nav
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ease-out ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(43,39,35,0.1)]"
          : "bg-white shadow-[0_1px_12px_rgba(43,39,35,0.06)]"
          }`}
      >
        <div className="flex items-center justify-between h-[56px] sm:h-[62px] px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group">
            <img
              src="/Founding Legals Logo.png"
              alt="Founding Legals"
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* For Founders — mega dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1.5 px-4 py-[7px] text-[13px] font-semibold rounded-full transition-all duration-200 ${megaOpen
                  ? "bg-cream-dark text-brown-900"
                  : "text-olive-700 hover:bg-cream hover:text-brown-900"
                  }`}
              >
                For Founders
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Mega dropdown panel */}
              {megaOpen && (
                <>
                  {/* Invisible hover bridge */}
                  <div className="absolute top-full left-0 right-0 h-4" />
                  <div className="fixed left-1/2 -translate-x-1/2 top-[74px] w-full max-w-[860px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(43,39,35,0.12)] border border-brown-100/40 animate-dropdown">
                    <div className="grid grid-cols-3 divide-x divide-brown-100/50 p-8 gap-0">
                      {sections.map((section) => (
                        <div key={section.title} className="px-6 first:pl-0 last:pr-0">
                          {/* Section header */}
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

                          {/* Links */}
                          <div className="space-y-0.5">
                            {section.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 px-3 py-[6px] -mx-1 rounded-lg text-[13px] font-medium text-brown-600 hover:text-brown-900 hover:bg-cream transition-colors duration-150"
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
                </>
              )}
            </div>

            {/* Static nav items */}
            <a
              href="#pricing"
              className="px-4 py-[7px] text-[13px] font-medium text-brown-600 hover:bg-cream hover:text-brown-800 rounded-full transition-all duration-200"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="px-4 py-[7px] text-[13px] font-medium text-brown-600 hover:bg-cream hover:text-brown-800 rounded-full transition-all duration-200"
            >
              Schedule Demo
            </a>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                suppressHydrationWarning
                className={`flex items-center gap-1.5 px-4 py-[7px] text-[13px] font-medium rounded-full transition-all duration-200 ${companyOpen
                  ? "bg-[#F0EBDF] text-[#33312c]"
                  : "text-brown-600 hover:bg-cream hover:text-brown-800"
                  }`}
              >
                Company
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Mega dropdown panel */}
              {companyOpen && (
                <>
                  {/* Invisible hover bridge */}
                  <div className="absolute top-full left-0 right-0 h-4" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-[52px] w-[300px] bg-[#f5f1e6] rounded-[24px] shadow-[0_12px_40px_rgba(43,39,35,0.08)] animate-dropdown flex flex-col items-center justify-center gap-4 px-10 py-6">
                    <a href="/company/about-us" className="text-[14px] font-serif text-[#33312c] hover:text-olive-700 transition-colors">About us</a>
                    <div className="w-full h-px bg-brown-100/50" />
                    <a href="/company/careers" className="text-[14px] font-serif text-[#33312c] hover:text-olive-700 transition-colors">Careers</a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-1.5">
            <a
              href="https://app.foundinglegals.com/sign-up"
              className="px-5 py-[7px] bg-olive-600 text-white text-[13px] font-semibold rounded-full hover:bg-olive-700 transition-colors duration-200"
            >
              Start Free
            </a>
            <a
              href="https://app.foundinglegals.com/sign-in"
              className="px-4 py-[7px] text-[13px] font-medium text-brown-500 hover:text-brown-800 transition-colors duration-200"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-[18px] h-[18px] text-brown-700" />
            ) : (
              <Menu className="w-[18px] h-[18px] text-brown-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden mt-2 max-w-[1200px] mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,39,35,0.12)] border border-brown-100/60 animate-dropdown overflow-hidden max-h-[80vh] overflow-y-auto">
          <div className="p-3">
            {sections.map((section, sIdx) => (
              <div key={section.title}>
                {sIdx > 0 && <div className="border-t border-brown-100/60 my-1.5" />}
                <div className="flex items-center gap-2 px-3 pt-3 pb-1">
                  <div className="w-6 h-6 rounded-md bg-olive-600/10 flex items-center justify-center">
                    <section.icon className="w-3 h-3 text-olive-600" />
                  </div>
                  <span className="text-[11px] font-bold text-brown-900 uppercase tracking-[0.08em]">
                    {section.title}
                  </span>
                </div>
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-3 py-2 ml-8 rounded-lg text-[13px] font-medium text-brown-600 hover:text-brown-900 hover:bg-cream transition-colors"
                  >
                    {item.name}
                    {"isNew" in item && item.isNew && (
                      <span className="ml-2 text-[9px] font-bold uppercase tracking-widest bg-lime-bg text-olive-700 px-1.5 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </a>
                ))}
              </div>
            ))}

            <div className="border-t border-brown-100/60 my-1.5" />
            <div className="px-2 pt-1 pb-2 space-y-1.5">
              <a
                href="/company/about-us"
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-2 text-[13px] font-medium text-brown-600 hover:text-brown-900 rounded-lg hover:bg-cream transition-colors"
              >
                About Us
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-2 text-[13px] font-medium text-brown-600 hover:text-brown-900 rounded-lg hover:bg-cream transition-colors"
              >
                Pricing
              </a>
              <a
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-2 text-[13px] font-medium text-brown-600 hover:text-brown-900 rounded-lg hover:bg-cream transition-colors"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-2 text-[13px] font-medium text-brown-600 hover:text-brown-900 rounded-lg hover:bg-cream transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://app.foundinglegals.com/sign-in"
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-2 text-[13px] font-medium text-brown-600 hover:text-brown-900 rounded-lg hover:bg-cream transition-colors"
              >
                Login
              </a>
              <a
                href="/services"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center px-4 py-2.5 bg-olive-600 text-white text-[13px] font-semibold rounded-full hover:bg-olive-700 transition-colors"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
