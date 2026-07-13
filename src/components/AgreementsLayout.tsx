"use client";

import React, { useState, useMemo, useCallback } from "react";
import { 
  FileText, Shield, Briefcase, Handshake, Search, Scale, 
  ArrowRight, ShieldCheck, Check, Info, FileSpreadsheet,
  AlertCircle, Stamp, Sparkles, HelpCircle, ChevronDown, CheckCircle2,
  Copy, CheckSquare, Clock
} from "lucide-react";
import { AGREEMENTS_DATABASE, AgreementDetail } from "@/lib/agreementsData";

export default function AgreementsLayout() {
  const [activeId, setActiveId] = useState<string>("founders-agreement");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Sub-tabs navigation state
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "importance" | "components" | "drafting" | "template" | "faqs">("overview");
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Redirection Link helper (session-aware)
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com").replace(/\/$/, "");

  const handleExploreClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const hasSession = document.cookie.split(";").some((c) => c.trim().startsWith("sFrontToken="));
    if (hasSession) {
      window.open(`${appUrl}/dashboard`, "_blank", "noopener,noreferrer");
    } else {
      window.open(`${appUrl}/sign-up?redirectToPath=%2Fdashboard`, "_blank", "noopener,noreferrer");
    }
  }, [appUrl]);

  // Categories list
  const categories = ["All", "Equity & Corporate", "HR & Employment", "Commercial & Sales", "IP & Licensing"];

  // Filtered Agreements for Left Sidebar
  const filteredAgreements = useMemo(() => {
    return AGREEMENTS_DATABASE.filter((ag) => {
      const matchesCategory = selectedCategory === "All" || ag.category === selectedCategory;
      const matchesSearch = ag.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            ag.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Get active agreement data
  const activeAgreement = useMemo(() => {
    return AGREEMENTS_DATABASE.find((ag) => ag.id === activeId) || AGREEMENTS_DATABASE[0];
  }, [activeId]);

  // Handle Copy Template
  const handleCopyTemplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(activeAgreement.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // General FAQs
  const generalFaqItems = [
    {
      q: "What is stamp duty and why is it necessary for agreements in India?",
      a: "Stamp duty is a statutory tax levied by state governments on legal instruments to make them valid and admissible as evidence in a court of law. Under Section 35 of the Indian Stamp Act 1899, an unstamped or insufficiently stamped agreement cannot be admitted in court to enforce rights unless the deficient duty and heavy penalties (up to 10 times the original stamp duty) are paid."
    },
    {
      q: "Can I sign startup agreements digitally in India?",
      a: "Yes, under Section 10A of the Information Technology Act 2000, agreements signed electronically (such as through Digital Signature Certificates (DSC) or Aadhaar-based e-Signatures) are fully valid and enforceable. However, stamp duty must still be paid (usually via online e-stamping) and linked to the document for complete enforceability."
    },
    {
      q: "Which state's stamp duty rate should I pay?",
      a: "Stamp duty is paid based on the state where the agreement is executed (signed). If the parties are in different states (e.g., founders in Karnataka and investors in Maharashtra), the agreement should generally be stamped according to the state with the higher stamp duty rate to prevent any dispute regarding enforceability."
    },
    {
      q: "Is notarization different from stamping?",
      a: "Yes. Stamping is the payment of government tax on a document. Notarization is the verification of the identity of the signees by a licensed notary public. While stamping is mandatory for admissibility in court, notarization is optional for most commercial agreements but serves as strong proof of authentic execution."
    }
  ];

  const subTabs = [
    { id: "overview", name: "Overview" },
    { id: "importance", name: "Why Important" },
    { id: "components", name: "Components" },
    { id: "drafting", name: "Drafting & Cost" },
    { id: "template", name: "Template" },
    { id: "faqs", name: "FAQs" }
  ] as const;

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-brown-900">
      
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F0EB] to-[#FDFCF9] pt-32 pb-16 px-6 md:px-12 border-b border-brown-100/30">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-olive-50 border border-olive-200/40 rounded-full text-olive-750 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
            Vetted contracts repository
          </span>
          <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[54px] font-semibold text-[#1A1917] leading-[1.1] tracking-tight">
            Complete Legal Library of <br />
            <span className="italic text-[#5A7338]">Startup Agreements</span>
          </h1>
          <p className="text-[15px] sm:text-base text-brown-650 max-w-2xl mx-auto leading-relaxed font-light">
            Understand key clauses, compare documents, calculate drafting costs, and copy templates for 21 essential agreements.
          </p>
        </div>
        
        {/* Decor background blobs */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-olive-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F5F2EB] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* ── FILTER & SEARCH PANEL ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#FAF9F6] border border-brown-200/40 p-4 rounded-3xl">
          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  // Auto-switch active agreement to the first item in the newly selected category
                  const inCat = AGREEMENTS_DATABASE.filter(a => cat === "All" || a.category === cat);
                  if (inCat.length > 0 && !inCat.some(a => a.id === activeId)) {
                    setActiveId(inCat[0].id);
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#5A7338] text-white shadow-sm"
                    : "text-brown-600 hover:bg-white hover:text-brown-900 border border-transparent hover:border-brown-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brown-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search 21 agreements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-brown-200/60 bg-white focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all text-sm placeholder-brown-300"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN INTERACTIVE CONTAINER ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* LEFT COLUMN: Agreements Directory List */}
          <aside className="bg-[#FAF9F6] border border-brown-200/40 rounded-3xl p-5 space-y-4 max-h-[720px] overflow-y-auto lg:sticky lg:top-28">
            <div className="pb-3 border-b border-brown-200/40 flex justify-between items-center">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Agreements
              </h3>
              <span className="text-[10px] font-bold text-olive-750 bg-olive-50 border border-olive-100 px-2 py-0.5 rounded-full">
                {filteredAgreements.length} Listed
              </span>
            </div>

            {filteredAgreements.length > 0 ? (
              <div className="space-y-1">
                {filteredAgreements.map((ag) => {
                  const isActive = ag.id === activeId;
                  return (
                    <button
                      key={ag.id}
                      onClick={() => {
                        setActiveId(ag.id);
                        setActiveSubTab("overview");
                      }}
                      className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-white border border-olive-350 shadow-sm text-[#1A1917]"
                          : "text-brown-600 hover:bg-white hover:text-brown-900 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className={`w-4 h-4 shrink-0 ${isActive ? "text-[#5A7338]" : "text-brown-400"}`} />
                        <div>
                          <span className={`text-xs block font-semibold leading-tight ${isActive ? "text-[#1A1917]" : "text-brown-700"}`}>
                            {ag.name}
                          </span>
                          <span className="text-[9px] text-brown-400 block mt-0.5 font-light">
                            {ag.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                        isActive ? "text-[#5A7338] translate-x-0" : "text-brown-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      }`} />
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center text-brown-400">
                <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-xs">No matches found.</p>
              </div>
            )}
          </aside>

          {/* CENTER COLUMN: Deep Educational Viewport & Sub-navigation */}
          <main className="bg-white border border-brown-200/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 min-h-[680px]">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-brown-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold text-olive-750 bg-olive-50 border border-olive-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {activeAgreement.category}
                  </span>
                  {activeAgreement.requiredForFundraising && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Fundraising Standard
                    </span>
                  )}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1917] leading-tight">
                  {activeAgreement.name}
                </h2>
              </div>

              <div className="bg-[#FAF9F6] border border-brown-100 px-3 py-2 rounded-xl text-center shrink-0">
                <span className="text-[9px] text-brown-400 block uppercase font-bold tracking-wider mb-0.5">Complexity</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  activeAgreement.complexity === "High" ? "bg-red-50 text-red-700 border border-red-100" :
                  activeAgreement.complexity === "Medium" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                  "bg-olive-50 text-olive-700 border border-olive-100"
                }`}>
                  {activeAgreement.complexity}
                </span>
              </div>
            </div>

            {/* Sub-tab navigation menu */}
            <div className="flex border-b border-brown-100 overflow-x-auto gap-2 pb-px scrollbar-none">
              {subTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`py-2 px-3 border-b-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeSubTab === tab.id
                      ? "border-[#5A7338] text-[#5A7338]"
                      : "border-transparent text-brown-500 hover:text-brown-900"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="pt-2">
              
              {/* Tab 1: Overview */}
              {activeSubTab === "overview" && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-[14px] text-brown-800 leading-relaxed font-semibold italic">
                      {activeAgreement.tagline}
                    </p>
                    <p className="text-[13.5px] text-brown-600 leading-relaxed font-light">
                      {activeAgreement.overview}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#5A7338]" /> Who Needs a {activeAgreement.name}?
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-brown-650">
                      {activeAgreement.whoNeedsIt.map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-start bg-[#FAF9F6] p-2.5 rounded-xl border border-brown-100/40">
                          <Check className="w-3.5 h-3.5 text-[#5A7338] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50/40 border border-amber-200/50 rounded-2xl p-4 flex gap-3 text-amber-900 text-xs leading-relaxed">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-950 font-serif mb-0.5">Execution Rule:</strong>
                      Ensure this agreement is printed on stamp paper of correct denomination or executed digitally with a valid e-stamp certificate. Unstamped agreements carry up to a 10x penalty in Indian courts.
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Why Important */}
              {activeSubTab === "importance" && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917]">Why is this document critical?</h4>
                    <ul className="space-y-2.5">
                      {activeAgreement.whyImportant.map((imp, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-brown-650 leading-relaxed items-start">
                          <span className="w-1.5 h-1.5 bg-[#5A7338] rounded-full shrink-0 mt-1.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Comparison versus table */}
                  {activeAgreement.comparison && (
                    <div className="space-y-3 pt-4 border-t border-brown-100">
                      <h4 className="font-serif text-sm font-bold text-[#1A1917]">
                        {activeAgreement.comparison.title}
                      </h4>
                      <div className="overflow-x-auto border border-brown-100 rounded-xl shadow-xs">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-gray-50 border-b border-brown-100">
                              <th className="p-2.5 font-bold text-brown-800 font-serif w-1/4">Aspect</th>
                              <th className="p-2.5 font-bold text-brown-800 font-serif">{activeAgreement.name}</th>
                              <th className="p-2.5 font-bold text-brown-800 font-serif">{activeAgreement.comparison.versusName}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-brown-100 text-brown-600 bg-white">
                            {activeAgreement.comparison.table.map((row, idx) => (
                              <tr key={idx}>
                                <td className="p-2.5 font-bold text-brown-800">{row.aspect}</td>
                                <td className="p-2.5 leading-normal">{row.activeDoc}</td>
                                <td className="p-2.5 leading-normal">{row.versusDoc}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Components */}
              {activeSubTab === "components" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917]">Key Components & Clauses</h4>
                    <p className="text-xs text-brown-500 font-light">Every standard layout template contains these essential components:</p>
                  </div>
                  <div className="border border-brown-100 rounded-xl overflow-hidden shadow-xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-50 border-b border-brown-100 text-brown-800 font-serif">
                          <th className="p-2.5 font-bold w-1/3">Component</th>
                          <th className="p-2.5 font-bold">Legal Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brown-100 text-brown-600 bg-white">
                        {activeAgreement.components.map((comp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="p-2.5 font-semibold text-brown-900">{comp.term}</td>
                            <td className="p-2.5 leading-relaxed">{comp.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 4: Drafting & Cost */}
              {activeSubTab === "drafting" && (
                <div className="space-y-6">
                  
                  {/* Stamp Duty Rates */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <Stamp className="w-4.5 h-4.5 text-[#5A7338]" /> State Stamp Duty Matrix (India)
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="bg-[#FAF9F6] border border-brown-100 p-3 rounded-xl text-center">
                        <span className="block text-[9px] text-brown-400 font-bold uppercase">Karnataka</span>
                        <span className="text-xs font-semibold text-brown-850 mt-1 block">{activeAgreement.stampDuty.karnataka}</span>
                      </div>
                      <div className="bg-[#FAF9F6] border border-brown-100 p-3 rounded-xl text-center">
                        <span className="block text-[9px] text-brown-400 font-bold uppercase">Maharashtra</span>
                        <span className="text-xs font-semibold text-brown-850 mt-1 block">{activeAgreement.stampDuty.maharashtra}</span>
                      </div>
                      <div className="bg-[#FAF9F6] border border-brown-100 p-3 rounded-xl text-center">
                        <span className="block text-[9px] text-brown-400 font-bold uppercase">Delhi</span>
                        <span className="text-xs font-semibold text-brown-850 mt-1 block">{activeAgreement.stampDuty.delhi}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-brown-500 font-light mt-1 text-center italic">
                      General: {activeAgreement.stampDuty.general}
                    </p>
                  </div>

                  {/* Documents Required */}
                  <div className="space-y-3 pt-4 border-t border-brown-100">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <CheckSquare className="w-4.5 h-4.5 text-[#5A7338]" /> Information & Documents Required
                    </h4>
                    <ul className="space-y-2 text-xs text-brown-650">
                      {activeAgreement.docsRequired.map((doc, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7338] shrink-0 mt-1.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Drafting Cost */}
                  <div className="space-y-3 pt-4 border-t border-brown-100">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <Scale className="w-4.5 h-4.5 text-[#5A7338]" /> Estimated Drafting Cost
                    </h4>
                    <div className="border border-brown-100 rounded-xl overflow-hidden shadow-xs">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-gray-50 border-b border-brown-100 text-brown-800 font-serif">
                            <th className="p-2.5 font-bold">Service Type</th>
                            <th className="p-2.5 font-bold">Description</th>
                            <th className="p-2.5 font-bold">Estimated Cost</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brown-100 text-brown-600 bg-white">
                          {activeAgreement.costTable.map((row, idx) => (
                            <tr key={idx}>
                              <td className="p-2.5 font-semibold text-brown-900">{row.service}</td>
                              <td className="p-2.5">{row.desc}</td>
                              <td className="p-2.5 font-bold text-[#5A7338]">{row.cost}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Procedure */}
                  <div className="space-y-3 pt-4 border-t border-brown-100">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <Clock className="w-4.5 h-4.5 text-[#5A7338]" /> Procedure for Drafting & Execution
                    </h4>
                    <ol className="space-y-2.5 text-xs text-brown-650">
                      {activeAgreement.procedure.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                </div>
              )}

              {/* Tab 5: Template */}
              {activeSubTab === "template" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-brown-400 font-semibold uppercase tracking-wider">Vetted Contract Template</span>
                    <button
                      onClick={handleCopyTemplate}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-olive-50 hover:bg-olive-100 text-olive-750 text-xs font-semibold rounded-lg transition-all border border-olive-200/40 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? "Copied!" : "Copy Template"}</span>
                    </button>
                  </div>

                  <div className="relative">
                    <pre className="bg-[#FAF9F6] border border-brown-100 rounded-xl p-4 overflow-x-auto text-[11px] font-mono text-brown-700 leading-relaxed text-left whitespace-pre-wrap max-h-[380px] overflow-y-auto">
                      {activeAgreement.template}
                    </pre>
                    <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-brown-100 text-[10px] text-brown-400">
                      Standard Indian Draft
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 6: FAQs */}
              {activeSubTab === "faqs" && (
                <div className="space-y-3">
                  <h4 className="font-serif text-sm font-bold text-[#1A1917] mb-2">{activeAgreement.name} FAQs</h4>
                  {activeAgreement.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-brown-100 bg-[#FAF9F6]/40 rounded-xl p-4 space-y-1.5">
                      <span className="block font-serif font-bold text-xs text-brown-900">Q. {faq.q}</span>
                      <span className="block text-xs text-brown-650 leading-relaxed font-light">A. {faq.a}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* CTA action */}
            <div className="pt-6 border-t border-brown-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-brown-400 block font-light">Need this agreement drafted?</span>
                <span className="text-[13px] font-semibold text-brown-700">Access our premium builder with pre-vetted legal templates.</span>
              </div>
              
              <button
                onClick={handleExploreClick}
                className="px-6 py-3 bg-[#5A7338] hover:bg-[#4a5f2e] text-white font-bold text-[13px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-xs"
              >
                <span>Draft in Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </main>

        </div>
      </section>

      {/* ── GENERAL FAQ SECTION ── */}
      <section className="bg-[#FAF9F6] border-y border-brown-200/40 py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold text-[#1A1917]">
              Understanding Agreement Execution in India
            </h2>
            <p className="text-[14.5px] text-brown-600 max-w-xl mx-auto font-light">
              Clear up structural doubts surrounding legal validity, e-signatures, and the Indian Stamp Act of 1899.
            </p>
          </div>

          <div className="space-y-3">
            {generalFaqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-brown-200/50 bg-white rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50/50 cursor-pointer"
                  >
                    <span className="font-serif font-bold text-[14.5px] text-brown-900 pr-4">{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brown-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#5A7338]" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[13.5px] text-brown-650 leading-relaxed border-t border-brown-100/30 pt-4 font-light">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER CALL-TO-ACTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-gradient-to-br from-olive-600 to-olive-800 text-white rounded-[32px] p-8 md:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block">
              Founding Legals Automated Drafts
            </span>
            <h3 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-tight">
              Ready to execute your agreements?
            </h3>
            <p className="text-[14px] sm:text-[15.5px] text-olive-100 leading-relaxed max-w-xl mx-auto font-light">
              Connect to our dashboard to automatically generate customized, partner-vetted agreements, send them for digital signatures, and manage their status.
            </p>
            <div className="pt-4">
              <button
                onClick={handleExploreClick}
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
