"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { 
  FileText, Shield, Briefcase, Handshake, Search, Scale, 
  ArrowRight, ArrowLeft, ShieldCheck, Check, Info, 
  AlertCircle, Sparkles, HelpCircle, ChevronDown, CheckCircle2,
  Copy, CheckSquare, Clock, Plus, X, FileSpreadsheet, Building2, UserCheck
} from "lucide-react";
import { 
  AGREEMENTS_DATABASE, 
  AgreementDetail, 
  SHOWCASE_SECTIONS, 
  ShowcaseAgreementItem 
} from "@/lib/agreementsData";

// ID Aliases map to ensure URL query params map correctly
const ID_ALIASES: Record<string, string> = {
  "mutual-nda": "non-disclosure-agreement",
  "internship-agreement": "internship-offer-letter",
};

export default function AgreementsLayout() {
  const [selectedAgreementId, setSelectedAgreementId] = useState<string>("founders-agreement");
  const [viewMode, setViewMode] = useState<"showcase" | "single">("showcase");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Sub-tabs navigation state for single agreement view
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "clauses" | "template" | "faqs">("overview");
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Read URL query parameter "?id=..." on mount & route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkUrlParams = () => {
        const params = new URLSearchParams(window.location.search);
        let urlId = params.get("id");
        if (urlId) {
          if (ID_ALIASES[urlId]) {
            urlId = ID_ALIASES[urlId];
          }
          const found = AGREEMENTS_DATABASE.find(a => a.id === urlId);
          if (found) {
            setSelectedAgreementId(found.id);
            setViewMode("single");
          }
        }
      };

      checkUrlParams();
      window.addEventListener("popstate", checkUrlParams);
      return () => window.removeEventListener("popstate", checkUrlParams);
    }
  }, []);

  // Redirection Link helper (session-aware)
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com").replace(/\/$/, "");

  const handleCreateAgreement = useCallback((e: React.MouseEvent, agreementId?: string) => {
    e.preventDefault();
    e.stopPropagation();
    const hasSession = typeof document !== "undefined" && document.cookie.split(";").some((c) => c.trim().startsWith("sFrontToken="));
    
    const targetId = agreementId || selectedAgreementId;
    const redirectPath = `%2Fdashboard%2Fagreements%2Fcreate%3Ftemplate%3D${targetId}`;
    
    if (hasSession) {
      window.open(`${appUrl}/dashboard`, "_blank", "noopener,noreferrer");
    } else {
      window.open(`${appUrl}/sign-up?redirectToPath=${redirectPath}`, "_blank", "noopener,noreferrer");
    }
  }, [appUrl, selectedAgreementId]);

  // Open specific agreement in dedicated single view
  const handleOpenParticularAgreement = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let targetId = id;
    if (ID_ALIASES[targetId]) {
      targetId = ID_ALIASES[targetId];
    }
    setSelectedAgreementId(targetId);
    setActiveSubTab("overview");
    setViewMode("single");
    
    // Update URL query param without full page reload
    if (typeof window !== "undefined" && window.history.pushState) {
      const newUrl = `${window.location.pathname}?id=${targetId}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
    
    // Scroll smoothly to top of content
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  // Switch back to showcase grid view
  const handleBackToShowcase = () => {
    setViewMode("showcase");
    if (typeof window !== "undefined" && window.history.pushState) {
      window.history.pushState({ path: window.location.pathname }, "", window.location.pathname);
    }
  };

  // Get active agreement detail data
  const activeAgreement = useMemo(() => {
    return AGREEMENTS_DATABASE.find((ag) => ag.id === selectedAgreementId) || AGREEMENTS_DATABASE[0];
  }, [selectedAgreementId]);

  // Filter showcase sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SHOWCASE_SECTIONS;
    const query = searchQuery.toLowerCase();
    
    return SHOWCASE_SECTIONS.map((sec) => {
      const filteredAgreements = sec.agreements.filter((ag) =>
        ag.name.toLowerCase().includes(query) || ag.description.toLowerCase().includes(query)
      );
      return { ...sec, agreements: filteredAgreements };
    }).filter((sec) => sec.agreements.length > 0);
  }, [searchQuery]);

  // Categories list for filter pills
  const categories = ["All", "Hire Someone", "Protect Your IP", "Get Investment Ready", "Commercial Agreements", "Property & Rental"];

  // Handle Copy Template
  const handleCopyTemplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(activeAgreement.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const subTabs = [
    { id: "overview", name: "Overview & Purpose" },
    { id: "clauses", name: "Key Clauses Included" },
    { id: "template", name: "Sample Template" },
    { id: "faqs", name: "FAQs" }
  ] as const;

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-brown-900">
      
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F0EB] to-[#FDFCF9] pt-32 pb-14 px-6 md:px-12 border-b border-brown-100/30">
        <div className="max-w-7xl mx-auto text-center space-y-5 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-olive-50 border border-olive-200/40 rounded-full text-olive-750 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
            Legal Document Templates Library
          </span>
          <h1 className="font-serif text-[36px] sm:text-[46px] md:text-[52px] font-semibold text-[#1A1917] leading-[1.1] tracking-tight">
            Complete Showcase of <br />
            <span className="italic text-[#5A7338]">Startup Legal Agreements</span>
          </h1>
          <p className="text-[15px] sm:text-base text-brown-650 max-w-2xl mx-auto leading-relaxed font-light">
            Browse sample templates, key clauses, and generate 21 partner-vetted legal agreements. Starting at just <span className="font-bold text-[#2E7D32]">₹50 per agreement</span>.
          </p>

          {/* Search & View Toggle bar */}
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 pt-2">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brown-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search agreements (e.g. Founders, NDA, Offer Letter, MSA)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (viewMode === "single") setViewMode("showcase");
                }}
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-brown-200/80 bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#5A7338]/30 focus:border-[#5A7338] transition-all text-sm placeholder-brown-300"
              />
            </div>

            {viewMode === "single" && (
              <button
                onClick={handleBackToShowcase}
                className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-brown-50 border border-brown-200 text-brown-800 text-xs font-bold rounded-full transition-all flex items-center justify-center gap-2 shrink-0 shadow-2xs cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#5A7338]" />
                <span>Showcase Grid</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Decor background blobs */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-olive-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F5F2EB] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* ── MODE 1: DEDICATED PARTICULAR AGREEMENT VIEW (When an agreement is clicked) ── */}
      {viewMode === "single" && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-8 animate-fadeIn">
          
          {/* Top navigation bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF9F6] border border-brown-200/50 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBackToShowcase}
                className="p-2 bg-white border border-brown-200/60 hover:bg-olive-50 hover:border-olive-300 rounded-xl text-brown-700 hover:text-[#5A7338] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Agreements</span>
              </button>
              <div className="h-4 w-px bg-brown-200 hidden sm:block" />
              <span className="text-xs text-brown-500 font-light truncate max-w-xs sm:max-w-md">
                Viewing Particular Agreement: <strong className="font-bold text-brown-900">{activeAgreement.name}</strong>
              </span>
            </div>

            {/* Quick selector dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-brown-400 font-semibold uppercase tracking-wider hidden md:inline">Switch Agreement:</span>
              <select
                value={selectedAgreementId}
                onChange={(e) => handleOpenParticularAgreement(e.target.value)}
                className="bg-white border border-brown-200 text-xs font-semibold text-brown-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A7338]/30 cursor-pointer"
              >
                {AGREEMENTS_DATABASE.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Main Particular Agreement Header & Action Hero */}
          <div className="bg-white border border-brown-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-left">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-brown-100">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-[#5A7338] bg-olive-50 border border-olive-200/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {activeAgreement.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] rounded-full text-xs font-bold shadow-2xs">
                    Starting at ₹50
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1917] leading-tight">
                  {activeAgreement.name}
                </h2>

                <p className="text-sm sm:text-base text-brown-700 font-medium leading-relaxed italic">
                  {activeAgreement.tagline}
                </p>
              </div>

              {/* Action Box */}
              <div className="bg-[#FAF9F6] border border-brown-200/60 p-5 rounded-2xl flex flex-col items-center justify-center space-y-3 shrink-0 text-center md:w-64">
                <span className="text-xs text-brown-500 font-light">
                  Ready to draft {activeAgreement.name}?
                </span>
                <span className="text-base font-serif font-bold text-[#2E7D32]">
                  Starting at ₹50
                </span>
                <button
                  onClick={(e) => handleCreateAgreement(e, activeAgreement.id)}
                  className="w-full py-3 px-5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Create Agreement</span>
                </button>
              </div>
            </div>

            {/* Sub-tabs Navigation */}
            <div className="flex border-b border-brown-100 overflow-x-auto gap-2 scrollbar-none pt-2">
              {subTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`py-3 px-4 border-b-2 text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeSubTab === tab.id
                      ? "border-[#5A7338] text-[#5A7338] bg-olive-50/50 rounded-t-lg"
                      : "border-transparent text-brown-500 hover:text-brown-900"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Sub-tab Content Viewport */}
            <div className="pt-4">
              
              {/* Tab 1: Overview */}
              {activeSubTab === "overview" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-bold text-brown-900">Document Overview</h3>
                    <p className="text-sm text-brown-650 leading-relaxed font-light">
                      {activeAgreement.overview}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5A7338]" /> Who Needs a {activeAgreement.name}?
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3 text-xs text-brown-700">
                      {activeAgreement.whoNeedsIt.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start bg-[#FAF9F6] p-3 rounded-xl border border-brown-100/60">
                          <Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: Key Clauses */}
              {activeSubTab === "clauses" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-brown-900">Key Clauses Included in {activeAgreement.name}</h3>
                    <p className="text-xs text-brown-500 font-light">Standard clauses and legal definitions included in this document:</p>
                  </div>
                  <div className="border border-brown-200/60 rounded-2xl overflow-hidden shadow-2xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#FAF9F6] border-b border-brown-200/60 text-brown-900 font-serif">
                          <th className="p-3 font-bold w-1/3">Clause / Component</th>
                          <th className="p-3 font-bold">Clause Summary</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brown-100 text-brown-700 bg-white">
                        {activeAgreement.components.map((comp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="p-3 font-bold text-brown-900">{comp.term}</td>
                            <td className="p-3 leading-relaxed">{comp.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 3: Sample Template */}
              {activeSubTab === "template" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center bg-[#FAF9F6] p-3 rounded-xl border border-brown-200/50">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#5A7338]" />
                      <span className="text-xs font-bold text-brown-900 uppercase tracking-wider">{activeAgreement.name} — Sample Document Template</span>
                    </div>
                    <button
                      onClick={handleCopyTemplate}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-xs font-bold rounded-lg transition-all cursor-pointer shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? "Copied!" : "Copy Template"}</span>
                    </button>
                  </div>

                  {/* Clean Dedicated Sample Document Image */}
                  {SHOWCASE_SECTIONS.flatMap(s => s.agreements).find(a => a.id === activeAgreement.id)?.previewImage && (
                    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-white border border-brown-200/80 shadow-md p-2">
                      <img
                        src={SHOWCASE_SECTIONS.flatMap(s => s.agreements).find(a => a.id === activeAgreement.id)?.previewImage}
                        alt={`${activeAgreement.name} Sample Document`}
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Tab 4: FAQs */}
              {activeSubTab === "faqs" && (
                <div className="space-y-3 animate-fadeIn">
                  <h3 className="font-serif text-lg font-bold text-brown-900 mb-3">{activeAgreement.name} FAQs</h3>
                  {activeAgreement.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-brown-200/60 bg-[#FAF9F6]/60 rounded-2xl p-4 space-y-2">
                      <span className="block font-serif font-bold text-sm text-brown-900">Q. {faq.q}</span>
                      <span className="block text-xs text-brown-700 leading-relaxed font-light">A. {faq.a}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Particular View Footer Action */}
            <div className="pt-6 border-t border-brown-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-xs text-brown-400 block font-light">Ready to customize {activeAgreement.name}?</span>
                <span className="text-xs font-bold text-[#2E7D32]">Starting at ₹50 · Quick Online Generation</span>
              </div>

              <button
                onClick={(e) => handleCreateAgreement(e, activeAgreement.id)}
                className="px-7 py-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>+ Create {activeAgreement.name}</span>
              </button>
            </div>

          </div>
        </section>
      )}

      {/* ── MODE 2: SHOWCASE GRID VIEW (Default / When browsing all) ── */}
      {viewMode === "showcase" && (
        <>
          {/* Category Filter Pills */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-2">
            <div className="flex flex-wrap gap-2 justify-center items-center bg-[#FAF9F6] border border-brown-200/40 p-2.5 rounded-full max-w-4xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#5A7338] text-white shadow-xs"
                      : "text-brown-700 hover:bg-white hover:text-brown-900 border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Grid Sections */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-16 pb-24">
            {filteredSections.map((section) => {
              if (selectedCategory !== "All" && selectedCategory !== section.title) {
                return null;
              }

              return (
                <div key={section.id} id={section.id} className="space-y-6 scroll-mt-28">
                  {/* Section Title & Subtitle */}
                  <div className="border-b border-brown-200/50 pb-4 text-left">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1917]">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-brown-600 font-light mt-1">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Agreement Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.agreements.map((ag) => (
                      <div
                        key={ag.id}
                        onClick={(e) => handleOpenParticularAgreement(ag.id, e)}
                        className="group bg-white border border-brown-200/70 hover:border-[#5A7338]/60 hover:shadow-xl rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden"
                      >
                        <div>
                          {/* Clean Sample Document Page Thumbnail */}
                          <div className="relative w-full h-36 mb-4 rounded-2xl overflow-hidden bg-white border border-brown-200/70 shadow-2xs group-hover:shadow-xs transition-all">
                            <img
                              src={ag.previewImage}
                              alt={`${ag.name} Sample Document`}
                              className="w-full h-full object-contain object-top p-1 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
                            <span className="absolute bottom-2 left-2.5 px-2.5 py-0.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-semibold rounded-md flex items-center gap-1">
                              <FileText className="w-3 h-3 text-[#FFE082]" /> Sample Document Page
                            </span>
                          </div>

                          {/* Top Bar: Starting at ₹50 badge & Icon */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] rounded-full text-[11px] font-bold shadow-2xs">
                              Starting at ₹50
                            </span>

                            <div className="w-7 h-7 rounded-xl bg-olive-50 border border-olive-100 flex items-center justify-center text-[#5A7338]">
                              <FileText className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Agreement Name */}
                          <h3 className="font-serif text-lg font-bold text-brown-900 mb-2 leading-snug group-hover:text-[#5A7338] transition-colors text-left">
                            {ag.name}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-brown-600 font-light leading-relaxed mb-5 text-left">
                            {ag.description}
                          </p>
                        </div>

                        {/* Card Bottom Action Bar */}
                        <div className="flex items-center gap-2 pt-2 border-t border-brown-100/50">
                          <button
                            onClick={(e) => handleCreateAgreement(e, ag.id)}
                            className="flex-1 py-2.5 px-4 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Create</span>
                          </button>

                          <button
                            onClick={(e) => handleOpenParticularAgreement(ag.id, e)}
                            className="px-3.5 py-2.5 bg-brown-50 hover:bg-olive-50 text-brown-700 hover:text-[#5A7338] text-xs font-bold rounded-xl transition-colors border border-brown-200/50 flex items-center gap-1 cursor-pointer"
                            title="View sample template & details"
                          >
                            <span>Sample</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        </>
      )}

      {/* ── FOOTER CALL-TO-ACTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-gradient-to-br from-olive-600 to-olive-800 text-white rounded-[32px] p-8 md:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block">
              Founding Legals Automated Drafts
            </span>
            <h3 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-tight">
              Ready to execute your agreements?
            </h3>
            <p className="text-[14px] sm:text-[15.5px] text-olive-100 leading-relaxed max-w-xl mx-auto font-light">
              Connect to our dashboard to automatically generate customized, partner-vetted agreements, send them for digital signatures, and manage their status. Starting at just ₹50.
            </p>
            <div className="pt-4">
              <button
                onClick={(e) => handleCreateAgreement(e)}
                className="px-8 py-3.5 bg-white hover:bg-[#F5F2EB] text-olive-850 font-bold text-[13px] rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                Go to Application Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
