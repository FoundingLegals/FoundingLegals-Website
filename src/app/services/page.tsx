"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { useForm, ValidationError } from "@formspree/react";
import {
  Sparkles, CheckCircle2, Calendar, Mail, Phone, ChevronDown,
  Search, ShieldCheck, Scale, Building2, Award, Presentation, Zap,
  Landmark, Handshake, CreditCard, Receipt, BarChart3, FolderOpen,
  User, Briefcase, Shield, TrendingUp, Info, HelpCircle, ArrowRight, Check, LogIn, Scroll
} from "lucide-react";
import { useState, useCallback } from "react";
import Link from "next/link";

// ── Auth-aware redirect helper ─────────────────────────────────────────────
// SuperTokens sets "sFrontToken" cookie when a session is active.
// We read it on the CLIENT (document.cookie) without any backend call.
//
// On click:
//   ✓ Signed-in user  → /dashboard  (app routes them to the right section
//                        by role: founder→pitch, member→team, etc.)
//   ✓ New visitor     → /sign-up?redirectToPath=%2Fdashboard
//
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com").replace(/\/$/, "");

function getHasSessionCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((c) => c.trim().startsWith("sFrontToken="));
}

const iconMap: Record<string, React.ComponentType<any>> = {
  "name-registration": Search,
  "company-incorporation": Building2,
  "llp-registration": Handshake,
  "opc-registration": User,
  "bank-opening": Landmark,
  "certifications": Award,
  "gst-filing-and-taxation": Receipt,
  "essential-startup-approach": ShieldCheck,
  "client-management": CreditCard,
  "team-management": Briefcase,
  "spend-analysis": BarChart3,
  "ip-protection": Shield,
  "document-management": FolderOpen,
  "agreements": Scroll,
  "pitch-to-investors": Presentation,
  "find-investors": Search,
  "raise-before-a-round": Zap,
  "do-a-funding-round": TrendingUp,
  "finance-for-fundraising": BarChart3,
  "legal-advice-for-a-round": Scale,
  "instant-investment": Zap,
};

export default function ServicesPage() {
  const [state, handleSubmit] = useForm("xqeyrnpp");
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Navigation / Tabs state
  const [activeTool, setActiveTool] = useState<"directory" | "comparison" | "calculator">("directory");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ── Smart redirect: signed-in → dashboard (role routing), new user → sign-up ──
  const handleExploreClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (getHasSessionCookie()) {
      // Returning user: the app's /dashboard route reads their role and dispatches
      // them to the correct section (pitch, team, compliance, investor etc.)
      window.open(`${APP_URL}/dashboard`, "_blank", "noopener,noreferrer");
    } else {
      // New user: redirect to sign-up and then land on /dashboard after auth
      window.open(
        `${APP_URL}/sign-up?redirectToPath=%2Fdashboard`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }, []);

  // Calculator State
  const [selectedState, setSelectedState] = useState("Karnataka");
  const [authorizedCapital, setAuthorizedCapital] = useState(100000);
  const [numDirectors, setNumDirectors] = useState(2);

  const categories = ["all", "Start", "Compliance", "Raise"];

  // Filter services by search query AND category
  const filteredServices = services.filter((s) => {
    const matchesCategory = activeCategory === "all" || s.heroCategory.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.heroDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculator states data
  const stateRates: Record<string, { stampDuty: number; stampDutyMultiplier: number }> = {
    "Karnataka": { stampDuty: 1000, stampDutyMultiplier: 0.001 },
    "Maharashtra": { stampDuty: 2000, stampDutyMultiplier: 0.0015 },
    "Delhi": { stampDuty: 500, stampDutyMultiplier: 0.0005 },
    "Tamil Nadu": { stampDuty: 1500, stampDutyMultiplier: 0.0012 },
    "Telangana": { stampDuty: 1200, stampDutyMultiplier: 0.001 },
    "Gujarat": { stampDuty: 1000, stampDutyMultiplier: 0.0008 },
    "Uttar Pradesh": { stampDuty: 1500, stampDutyMultiplier: 0.001 },
  };

  // Calculator Logic
  const calcDSC = numDirectors * 1500;
  const rates = stateRates[selectedState] || { stampDuty: 1000, stampDutyMultiplier: 0.001 };
  const calcStampDuty = rates.stampDuty + Math.floor(authorizedCapital * rates.stampDutyMultiplier);
  const calcGovtFee = authorizedCapital > 1000000 ? 3000 : authorizedCapital > 500000 ? 1500 : 0;
  const calcPanTan = 132;
  const calcProfessional = 2999;
  const calcTotal = calcDSC + calcStampDuty + calcGovtFee + calcPanTan + calcProfessional;

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-[#F6F4F0] pt-32 pb-20 px-6">
        <Header />
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-10 text-center shadow-sm border border-brown-100">
          <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-olive-600" />
          </div>
          <h2 className="text-2xl font-serif font-semibold text-brown-900 mb-4">Request Received</h2>
          <p className="text-brown-600 text-sm leading-relaxed mb-8">
            Thank you for selecting Founding Legals. One of our experts will contact you within 24 hours.
          </p>
          <a href="/" className="text-olive-600 font-semibold hover:underline text-sm">Return to Home</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF9]">
      <Header />

      {/* Hero Banner */}
      <section className="pt-36 pb-12 px-6 sm:px-12 lg:px-24 bg-[#F6F4F0] border-b border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-olive-50 border border-olive-100 rounded-lg text-olive-700 text-[13px] font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            Founding Legals Services Suite
          </span>
          
          <h1 className="text-[44px] sm:text-[60px] font-serif font-medium text-brown-900 leading-[1.1] mb-6">
            Architect your legal foundation <br />
            <span className="italic text-olive-700">with absolute precision.</span>
          </h1>
          
          <p className="text-lg sm:text-[20px] text-brown-600 leading-relaxed max-w-2xl mx-auto font-light mb-12">
            Explore our expert-led services or compare entity structures using our interactive toolkits.
          </p>

          {/* Immersive Tool Switcher */}
          <div className="inline-flex p-1.5 bg-[#f0ebe1]/60 backdrop-blur-md border border-[#e5e1d6] rounded-full max-w-[420px] w-full mx-auto">
            <button
              onClick={() => setActiveTool("directory")}
              className={`flex-1 py-3 px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTool === "directory" ? "bg-[#5A7338] text-white shadow-sm" : "text-brown-700 hover:text-brown-900"
              }`}
            >
              Services Directory
            </button>
            <button
              onClick={() => setActiveTool("comparison")}
              className={`flex-1 py-3 px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTool === "comparison" ? "bg-[#5A7338] text-white shadow-sm" : "text-brown-700 hover:text-brown-900"
              }`}
            >
              Entity Comparison
            </button>
          </div>
        </div>
      </section>

      {/* Tool Content Area */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto">
          
          {/* TOOL 1: SERVICES DIRECTORY */}
          {activeTool === "directory" && (
            <div>
              {/* Directory Filter Bar */}
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 pb-6 border-b border-brown-100">
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        activeCategory === cat
                          ? "bg-[#5A7338] text-white shadow-sm"
                          : "bg-[#FAF9F6] border border-brown-200/50 text-brown-700 hover:bg-white hover:text-brown-900"
                      }`}
                    >
                      {cat === "all" ? "All categories" : cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:w-80">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brown-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-brown-200/60 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all text-sm placeholder-brown-300"
                  />
                </div>
              </div>

              {/* Grid Layout */}
              {filteredServices.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service) => {
                    const IconComponent = iconMap[service.slug] || Briefcase;
                    return (
                      <div
                        key={service.slug}
                        className="group bg-[#f0ebe1]/40 backdrop-blur-sm rounded-[32px] p-8 sm:p-10 border border-[#e5e1d6]/80 flex flex-col justify-between h-full min-h-[350px] transition-all duration-500 hover:bg-[#f0ebe1]/80 hover:shadow-[0_20px_40px_rgba(43,39,35,0.04)]"
                      >
                        <div className="text-left">
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#5A7338] shadow-sm">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-bold text-olive-700 bg-olive-50 border border-olive-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                              {service.heroCategory}
                            </span>
                          </div>
                          
                          <h3 className="text-[20px] font-serif font-semibold text-[#3a3732] mb-3 group-hover:text-[#2b2723] transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-[13px] text-[#6b6965] leading-[1.6] font-light mb-6">
                            {service.heroDescription}
                          </p>

                          {/* Key Deliverables Bullet Points */}
                          <div className="mt-4 pt-4 border-t border-[#e5e1d6]/50 space-y-2">
                            <span className="text-[10px] uppercase tracking-wider text-brown-400 font-semibold block mb-1">Key Deliverables</span>
                            {service.features?.slice(0, 2).map((feat, idx) => (
                              <div key={idx} className="flex gap-2 items-start text-left">
                                <Check className="w-3.5 h-3.5 text-[#5A7338] mt-0.5 shrink-0" />
                                <span className="text-[11px] text-[#6b6965] font-light">
                                  <strong>{feat.title}:</strong> {feat.description}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-[#e5e1d6]/40 flex items-center justify-between gap-3">
                          <button
                            onClick={handleExploreClick}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5A7338] text-white text-[13px] font-semibold rounded-full hover:bg-[#4a5f2e] transition-all duration-300 shadow-md shadow-[#5A7338]/20 hover:shadow-[#5A7338]/30 hover:-translate-y-0.5 cursor-pointer"
                          >
                            Get Started
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-[11px] text-brown-400 hover:text-brown-700 transition-colors underline-offset-2 hover:underline"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-[#FAF9F6] border border-dashed border-brown-200 rounded-[32px]">
                  <HelpCircle className="w-12 h-12 text-brown-300 mx-auto mb-4" />
                  <p className="text-brown-600 font-serif text-lg">No services found matching your query.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                    className="text-sm text-olive-600 font-semibold mt-3 hover:underline cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TOOL 2: ENTITY COMPARISON GRID */}
          {activeTool === "comparison" && (
            <div className="overflow-x-auto">
              <h2 className="font-serif text-2xl font-semibold text-brown-900 mb-8 text-left">Entity Comparison Matrix</h2>
              <table className="w-full border-collapse rounded-[24px] overflow-hidden border border-brown-100 shadow-sm text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[#f0ebe1] text-[#3a3732] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    <th className="py-5 px-6 border-b border-[#e5e1d6]">Feature / Parameter</th>
                    <th className="py-5 px-6 border-b border-[#e5e1d6]">Private Limited (Pvt Ltd)</th>
                    <th className="py-5 px-6 border-b border-[#e5e1d6]">Limited Liability Partnership (LLP)</th>
                    <th className="py-5 px-6 border-b border-[#e5e1d6]">One Person Company (OPC)</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-xs sm:text-sm text-brown-700">
                  <tr className="border-b border-brown-50 hover:bg-[#FDFCF9] transition-all">
                    <td className="py-4 px-6 font-semibold text-brown-900">Liability</td>
                    <td className="py-4 px-6">Limited to value of shares subscribed.</td>
                    <td className="py-4 px-6">Limited to agreed contribution of partners.</td>
                    <td className="py-4 px-6">Limited to investment value in the company.</td>
                  </tr>
                  <tr className="border-b border-brown-50 hover:bg-[#FDFCF9] transition-all">
                    <td className="py-4 px-6 font-semibold text-brown-900">VC Preference</td>
                    <td className="py-4 px-6 text-[#2d6b2d] font-bold bg-[#d4ebd4]/30">High (Best for raising funding)</td>
                    <td className="py-4 px-6 text-[#7a5500] font-semibold">Low (Rarely backed by institutional VCs)</td>
                    <td className="py-4 px-6 text-[#992222] font-semibold">Very Low (Not suitable for raising funds)</td>
                  </tr>
                  <tr className="border-b border-brown-50 hover:bg-[#FDFCF9] transition-all">
                    <td className="py-4 px-6 font-semibold text-brown-900">Tax Rates</td>
                    <td className="py-4 px-6 font-medium">22% - 25% + Surcharge & Surcharges</td>
                    <td className="py-4 px-6">Flat 30% Flat Rate + Cess</td>
                    <td className="py-4 px-6">22% - 25% + Surcharge & Surcharges</td>
                  </tr>
                  <tr className="border-b border-brown-50 hover:bg-[#FDFCF9] transition-all">
                    <td className="py-4 px-6 font-semibold text-brown-900">Annual Compliance</td>
                    <td className="py-4 px-6 text-red-600 font-medium">High (Auditing and annual returns mandatory)</td>
                    <td className="py-4 px-6">Medium (Audit only if turnover &gt; 40L)</td>
                    <td className="py-4 px-6">Medium (Slightly relaxed requirements)</td>
                  </tr>
                  <tr className="border-b border-brown-50 hover:bg-[#FDFCF9] transition-all">
                    <td className="py-4 px-6 font-semibold text-brown-900">Ownership / Members</td>
                    <td className="py-4 px-6">Min 2, Max 200 Shareholders</td>
                    <td className="py-4 px-6">Min 2 Partners, No Maximum Limit</td>
                    <td className="py-4 px-6">Exactly 1 Director & 1 Nominee</td>
                  </tr>
                  <tr className="hover:bg-[#FDFCF9] transition-all">
                    <td className="py-4 px-6 font-semibold text-brown-900">Foreign Investment</td>
                    <td className="py-4 px-6 text-[#2d6b2d] font-semibold">Fully Allowed (via FDI Automatic Route)</td>
                    <td className="py-4 px-6">Allowed with strict RBI regulations</td>
                    <td className="py-4 px-6 text-red-500">Not Allowed (Indian citizens only)</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-8 p-6 bg-olive-50/50 border border-olive-100 rounded-[20px] flex gap-3 text-left">
                <Info className="w-5 h-5 text-olive-700 mt-0.5 shrink-0" />
                <p className="text-xs text-olive-800 leading-relaxed">
                  <strong>Senior Expert Tip:</strong> Institutional VCs require startups to incorporate as a <strong>Private Limited Company</strong> in order to issue equity and execute Share Subscription Agreements (SSA). If your immediate goal is to stay boot-strapped, an LLP offers lower compliance costs.
                </p>
              </div>
            </div>
          )}



        </div>
      </section>

      {/* Inquiry Form Section (Existing contacts form logic preserved) */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-50 border border-olive-100 rounded-lg text-olive-700 text-[13px] font-medium mb-8">
                <Calendar className="w-4 h-4" />
                Schedule a Consultation
              </div>
              
              <h2 className="text-[40px] sm:text-[48px] font-serif font-medium text-brown-900 leading-[1.1] mb-6 text-left">
                Still unsure about your legal needs? <br />
                <span className="italic text-olive-700">Let's talk.</span>
              </h2>
              
              <p className="text-[17px] text-brown-600 leading-relaxed max-w-lg font-light mb-12 text-left">
                Get custom advice on your business structure, tax liabilities, fundraising plans, or any contract queries.
              </p>

              <div className="space-y-8 pt-4">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white border border-brown-100 flex items-center justify-center text-olive-700 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1 text-left">Email Us</div>
                    <div className="text-[16px] text-brown-700 font-medium">info@foundinglegals.com</div>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white border border-brown-100 flex items-center justify-center text-olive-700 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1 text-left">Phone</div>
                    <div className="text-[16px] text-brown-700 font-medium">+91 9791222557</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-brown-100 shadow-[0_20px_60px_rgba(43,39,35,0.05)]">
            <h3 className="text-[28px] font-serif font-semibold text-brown-900 mb-8 tracking-tight text-left">Request Custom Service</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                    placeholder="Arjun"
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                    placeholder="Mehta"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                  placeholder="arjun@startup.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
              </div>

              <div>
                <label htmlFor="company" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                  placeholder="Unicorn Inc."
                />
              </div>

              <div className="relative">
                <label className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Desired Legal Support</label>
                <input type="hidden" name="service" value={selectedService} required />
                
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-5 py-3 bg-[#FAF9F6] border border-brown-100 rounded-xl text-[14px] text-brown-900 text-left focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all shadow-sm"
                >
                  <span className={selectedService ? "text-brown-900" : "text-brown-400"}>
                    {selectedService || "Select a service..."}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-olive-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-brown-100 rounded-xl shadow-[0_20px_50px_rgba(43,39,35,0.1)] max-h-60 overflow-y-auto overflow-x-hidden py-1">
                    {services.map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => {
                          setSelectedService(s.title);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-5 py-2.5 text-[13px] text-brown-600 hover:bg-olive-50 hover:text-olive-700 transition-colors border-b border-brown-50 last:border-0"
                      >
                        {s.title}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService("Custom Legal Assistance");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-[13px] text-[#33312c] hover:bg-olive-50 hover:text-olive-700 transition-colors"
                    >
                      Custom Legal Assistance
                    </button>
                  </div>
                )}
                <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-[10px] mt-1.5" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 resize-none text-left"
                  placeholder="Tell us about your startup or specific requirements..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-[#5A7338] hover:bg-[#4a5f2e] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-olive-900/20 transition-all flex items-center justify-center cursor-pointer"
                >
                  {state.submitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Submit Request"
                  )}
                </button>
                <p className="text-[10px] text-brown-400 mt-6 leading-relaxed font-light px-1 text-left">
                  By submitting this form, you agree to our privacy policy and consent to receiving marketing communications.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
