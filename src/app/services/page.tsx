"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { useForm, ValidationError } from "@formspree/react";
import {
  Sparkles, CheckCircle2, Calendar, Mail, Phone, ChevronDown,
  Search, ShieldCheck, Scale, Building2, Award, Presentation, Zap,
  Landmark, Handshake, CreditCard, Receipt, BarChart3, FolderOpen,
  User, Briefcase, Shield, TrendingUp, Info, HelpCircle, ArrowRight, Check, LogIn, Scroll, Calculator, MapPin, TrendingDown
} from "lucide-react";
import { useState, useCallback } from "react";
import Link from "next/link";
import {
  ALL_INDIAN_STATES,
  TOP_STARTUP_STATES,
  STATE_STAMP_DUTY_LOOKUP,
  ENTITY_CONFIGS,
  EntityTypeId,
  calculateQuote,
  openCostEstimator
} from "@/lib/pricingEngineData";

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
      window.open(`${APP_URL}/dashboard`, "_blank", "noopener,noreferrer");
    } else {
      window.open(
        `${APP_URL}/sign-up?redirectToPath=%2Fdashboard`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }, []);

  // Calculator State
  const [selectedState, setSelectedState] = useState("Karnataka");
  const [selectedEntity, setSelectedEntity] = useState<EntityTypeId>("pvt_ltd");
  const [authorizedCapital, setAuthorizedCapital] = useState(100000);
  const [numDirectors, setNumDirectors] = useState(2);
  const [numDsc, setNumDsc] = useState(2);

  const categories = ["all", "Start", "Compliance", "Raise"];

  // Filter services by search query AND category
  const filteredServices = services.filter((s) => {
    const matchesCategory = activeCategory === "all" || s.heroCategory.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.heroDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate live quote
  const liveQuote = calculateQuote({
    entityType: selectedEntity,
    state: selectedState,
    authorizedCapital,
    numDirectors,
    numDsc
  });

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
            Explore our expert-led services, compare entity structures, or estimate state-wise statutory incorporation costs across 28 Indian states.
          </p>

          {/* Immersive Tool Switcher */}
          <div className="inline-flex p-1.5 bg-[#f0ebe1]/70 backdrop-blur-md border border-[#e5e1d6] rounded-full max-w-[620px] w-full mx-auto shadow-sm">
            <button
              onClick={() => setActiveTool("directory")}
              className={`flex-1 py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTool === "directory" ? "bg-[#5A7338] text-white shadow-sm" : "text-brown-700 hover:text-brown-900"
              }`}
            >
              Services Directory
            </button>
            <button
              onClick={() => setActiveTool("comparison")}
              className={`flex-1 py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTool === "comparison" ? "bg-[#5A7338] text-white shadow-sm" : "text-brown-700 hover:text-brown-900"
              }`}
            >
              Entity Comparison
            </button>
            <button
              onClick={() => setActiveTool("calculator")}
              className={`flex-1 py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTool === "calculator" ? "bg-[#5A7338] text-white shadow-sm" : "text-brown-700 hover:text-brown-900"
              }`}
            >
              <Calculator className="w-3.5 h-3.5 shrink-0" />
              <span>28 States Cost</span>
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
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat
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
                            href={
                              ["agreements", "ip-protection", "trademark-registration", "pitch-to-investors", "finance-for-fundraising", "raise-before-a-round", "do-a-funding-round", "legal-advice-for-a-round", "instant-investment", "document-management", "essential-startup-approach", "client-management", "team-management"].includes(service.slug)
                                ? `/services/LegalServices/${service.slug}`
                                : `/services/CAservices/${service.slug}`
                            }
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

          {/* TOOL 3: 28 STATES COST ESTIMATOR */}
          {activeTool === "calculator" && (
            <div className="text-left space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brown-100">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brown-900">
                    28 States Statutory Cost &amp; Stamp Duty Estimator
                  </h2>
                  <p className="text-sm text-brown-600 font-light mt-1">
                    Calculate real-time MCA registration fees and state-specific stamp duty across all 28 Indian States &amp; UTs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openCostEstimator({ state: selectedState, entityType: selectedEntity })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Open Full Screen Estimator</span>
                </button>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-6">
                  {/* State selection */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-brown-700 flex items-center gap-1.5 mb-2.5">
                      <MapPin className="w-3.5 h-3.5 text-olive-700" />
                      Select Incorporation State ({selectedState})
                    </label>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {TOP_STARTUP_STATES.map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setSelectedState(st)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            selectedState === st
                              ? "bg-olive-600 text-white shadow-xs"
                              : "bg-white border border-brown-200 text-brown-700 hover:bg-olive-50"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-brown-200 rounded-xl text-xs sm:text-sm font-medium text-brown-900 focus:outline-none focus:border-olive-500 shadow-xs"
                    >
                      {ALL_INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st} — Stamp Duty: ₹{STATE_STAMP_DUTY_LOOKUP[st]?.pvtLtdStampDuty.toLocaleString("en-IN")} ({STATE_STAMP_DUTY_LOOKUP[st]?.rocOffice || "ROC"})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Entity type */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-brown-700 flex items-center gap-1.5 mb-2.5">
                      <Building2 className="w-3.5 h-3.5 text-olive-700" />
                      Select Entity Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "pvt_ltd", name: "Pvt Ltd Company" },
                        { id: "llp", name: "LLP" },
                        { id: "opc", name: "OPC" },
                        { id: "partnership", name: "Partnership Firm" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedEntity(item.id as EntityTypeId)}
                          className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                            selectedEntity === item.id
                              ? "bg-olive-50 border-olive-600 text-olive-900 ring-2 ring-olive-600/20"
                              : "bg-white border-brown-200 text-brown-700 hover:bg-brown-50"
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Capital presets */}
                  <div className="bg-white p-5 rounded-2xl border border-brown-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brown-800">Authorized Share Capital</span>
                      <span className="text-sm font-bold text-olive-700 bg-olive-50 px-3 py-1 rounded-lg border border-olive-200">
                        ₹{authorizedCapital.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[100000, 500000, 1000000, 1500000, 2500000, 5000000].map((cap) => (
                        <button
                          key={cap}
                          type="button"
                          onClick={() => setAuthorizedCapital(cap)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                            authorizedCapital === cap
                              ? "bg-olive-600 text-white shadow-xs"
                              : "bg-[#FAF9F6] border border-brown-200 text-brown-700"
                          }`}
                        >
                          ₹{(cap / 100000).toFixed(cap % 100000 === 0 ? 0 : 1)} Lakh
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Estimate Receipt Column */}
                <div className="lg:col-span-5 bg-white p-6 rounded-3xl border-2 border-olive-600/20 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-brown-100">
                    <div className="flex items-center gap-2">
                      <Receipt className="w-4 h-4 text-olive-700" />
                      <h3 className="font-serif text-lg font-semibold text-brown-900">
                        Live Cost Estimate
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-olive-800 bg-olive-50 px-2.5 py-0.5 rounded-full border border-olive-200">
                      {liveQuote.selectedState}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-brown-700">
                    <div className="flex justify-between py-1 border-b border-brown-50">
                      <span className="text-brown-500">State Stamp Duty (MOA/AOA)</span>
                      <span className="font-semibold text-brown-900">₹{liveQuote.stampDuty.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-brown-50">
                      <span className="text-brown-500">MCA SPICe+ Name &amp; Filing</span>
                      <span className="font-semibold text-brown-900">
                        {liveQuote.govtIncorporationFee === 0 ? "₹1,000 (SPICe+ Exemption)" : `₹${(liveQuote.rocFees + liveQuote.govtIncorporationFee).toLocaleString("en-IN")}`}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-brown-50">
                      <span className="text-brown-500">Class-3 DSC ({numDsc} Tokens)</span>
                      <span className="font-semibold text-brown-900">₹{liveQuote.dscFees.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-brown-50">
                      <span className="text-brown-500">PAN, TAN &amp; Verification</span>
                      <span className="font-semibold text-brown-900">₹{(liveQuote.panTanFee + liveQuote.directorFees).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between py-1 bg-olive-50/60 px-2 rounded-lg border border-olive-100">
                      <span className="font-bold text-olive-900">Founding Legals Member Fee</span>
                      <span className="font-extrabold text-olive-900">₹{liveQuote.professionalFees.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t-2 border-brown-200 bg-[#FAF9F6] p-3.5 rounded-xl">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-brown-500">Total All-Inclusive</span>
                      <span className="text-2xl font-serif font-extrabold text-brown-900">
                        ₹{liveQuote.totalCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="text-right text-[11px] font-semibold text-olive-700">
                      Save ₹{liveQuote.estimatedSavings.toLocaleString("en-IN")} vs Traditional CA (50%+ Off)
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openCostEstimator({ state: selectedState, entityType: selectedEntity })}
                    className="w-full py-3 bg-olive-600 hover:bg-olive-700 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View 28 States Breakdown &amp; Start</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
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

              <div className="grid sm:grid-cols-2 gap-6">
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
                  <label htmlFor="mobile" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Mobile / WhatsApp</label>
                  <div className="flex gap-2">
                    <span className="flex items-center px-3.5 border border-brown-100 rounded-xl bg-[#FAF9F6] text-xs font-bold text-brown-600 shrink-0">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>
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
