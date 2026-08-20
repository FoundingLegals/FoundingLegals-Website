"use client";

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { 
  FileText, Shield, Briefcase, Handshake, Search, Scale, 
  ArrowRight, ArrowLeft, ShieldCheck, Check, Info, 
  AlertCircle, Sparkles, HelpCircle, ChevronDown, CheckCircle2,
  Copy, CheckSquare, Clock, Plus, X, FileSpreadsheet, Building2, UserCheck, ZoomIn, ZoomOut, RotateCcw
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
  "software-license": "software-license-agreement",
};

const PNG_WEBSITE_AGREEMENTS = new Set([
  "founders-agreement",
  "offer-letter",
  "consultancy-agreement",
  "internship-offer-letter",
  "service-agreement",
  "non-compete-agreement",
  "non-disclosure-agreement",
  "ip-assignment-agreement",
  "software-license-agreement",
  "technology-transfer-agreement",
  "franchise-agreement",
  "joint-venture-agreement",
  "distribution-agreement",
  "vendor-agreement",
  "master-service-agreement",
  "service-certificate",
  "convertible-note-agreement",
  "share-subscription-agreement",
  "shareholders-agreement",
  "trademark-license-agreement",
  "term-sheet",
]);

// Helper function to resolve sample document preview images
const getAgreementSampleImage = (id: string) => {
  if (PNG_WEBSITE_AGREEMENTS.has(id)) {
    return `/agreements/${id}-website.png`;
  }
  return `/agreements/${id}-sample.svg`;
};

export default function AgreementsLayout({ initialAgreementId }: { initialAgreementId?: string }) {
  const [selectedAgreementId, setSelectedAgreementId] = useState<string>(
    initialAgreementId ? (ID_ALIASES[initialAgreementId] || initialAgreementId) : "founders-agreement"
  );
  const [viewMode, setViewMode] = useState<"showcase" | "single">(initialAgreementId ? "single" : "showcase");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Sub-tabs navigation state for single agreement view
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "types" | "clauses" | "enforceability" | "template" | "faqs">("overview");
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);
  const [modalZoomScale, setModalZoomScale] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [startPanPoint, setStartPanPoint] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset zoom & pan when opening/closing modal
  const handleOpenZoomModal = useCallback(() => {
    setModalZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
    setIsZoomModalOpen(true);
  }, []);

  const handleCloseZoomModal = useCallback(() => {
    setIsZoomModalOpen(false);
    setModalZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
    setIsPanning(false);
  }, []);

  // Double click handler to toggle 220% zoom
  const handleImageDoubleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (modalZoomScale > 1) {
      setModalZoomScale(1);
      setPanPosition({ x: 0, y: 0 });
    } else {
      setModalZoomScale(2.2);
    }
  }, [modalZoomScale]);

  // Trackpad pinch / Mouse wheel zoom handler
  const handleImageWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.2 : -0.2;
    setModalZoomScale((prevScale) => {
      const nextScale = Math.min(Math.max(prevScale + zoomDelta, 1), 3.5);
      if (nextScale === 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return parseFloat(nextScale.toFixed(2));
    });
  }, []);

  // Mouse pan handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (modalZoomScale <= 1) return;
    e.preventDefault();
    setIsPanning(true);
    setStartPanPoint({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  }, [modalZoomScale, panPosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning || modalZoomScale <= 1) return;
    e.preventDefault();
    setPanPosition({
      x: e.clientX - startPanPoint.x,
      y: e.clientY - startPanPoint.y,
    });
  }, [isPanning, modalZoomScale, startPanPoint]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  // Read URL query parameter "?id=..." or pathname on mount & route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkUrlParams = () => {
        let urlId = initialAgreementId;

        // Check path segment (e.g. /services/LegalServices/agreements/founders-agreement)
        const pathSegments = window.location.pathname.split("/").filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1];
        const reservedSegments = new Set(["agreements", "LegalServices", "legal-services", "legalservices", "CAservices", "ca-services", "services"]);
        
        if (lastSegment && !reservedSegments.has(lastSegment)) {
          urlId = lastSegment;
        }

        // Fallback to query parameter ?id=...
        const params = new URLSearchParams(window.location.search);
        const queryId = params.get("id");
        if (queryId) {
          urlId = queryId;
        }

        if (urlId) {
          if (ID_ALIASES[urlId]) {
            urlId = ID_ALIASES[urlId];
          }
          const found = AGREEMENTS_DATABASE.find((a) => a.id === urlId);
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
  }, [initialAgreementId]);

  const navRef = useRef<HTMLDivElement>(null);
  const subTabsContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll tracking for sticky header, active tab highlighting & bottom of page detection
  useEffect(() => {
    if (viewMode !== "single") return;

    const handleScroll = () => {
      // 1. Update Sticky State
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }

      // 2. Bottom of page detection (especially FAQs)
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const fullHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= fullHeight - 120) {
        setActiveSubTab("faqs");
        return;
      }

      // 3. Scroll position tracking for active sub-tab
      const sectionIds = ["overview", "types", "clauses", "enforceability", "template", "faqs"];
      const headerOffset = 270;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset + 40) {
            setActiveSubTab(sectionIds[i] as any);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewMode]);

  // Auto-scroll active sub-tab pill into horizontal view
  useEffect(() => {
    if (viewMode === "single" && subTabsContainerRef.current) {
      const activeBtn = subTabsContainerRef.current.querySelector<HTMLButtonElement>(`[data-tab-id="${activeSubTab}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeSubTab, viewMode]);

  const handleScrollToSubTab = (tabId: string) => {
    setActiveSubTab(tabId as any);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 265;
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

  const handleCopyTemplate = () => {
    if (activeAgreement?.template) {
      navigator.clipboard.writeText(activeAgreement.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
    
    // Update URL to clean directory path without full page reload
    if (typeof window !== "undefined" && window.history.pushState) {
      const newUrl = `/services/LegalServices/agreements/${targetId}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
    
    // Scroll smoothly to top of content
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  // Switch back to showcase grid view
  const handleBackToShowcase = () => {
    setViewMode("showcase");
    if (typeof window !== "undefined" && window.history.pushState) {
      const newUrl = `/services/LegalServices/agreements`;
      window.history.pushState({ path: newUrl }, "", newUrl);
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

  const categories = ["All", "Hire Someone", "Protect Your IP", "Get Investment Ready", "Commercial Agreements", "Property & Rental"];

  const subTabs = [
    { id: "overview", name: "Overview & Purpose" },
    { id: "types", name: "Types & Scenarios" },
    { id: "clauses", name: "Key Clauses & Exclusions" },
    { id: "enforceability", name: "Legal Validity & Stamp Duty" },
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
      </section>

      {/* ── MODE 1: SINGLE AGREEMENT VIEW ── */}
      {viewMode === "single" && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-6 animate-fadeIn">
          
          {/* Combined Sticky Agreement Hero Header & Sub-tabs Container */}
          <div
            ref={navRef}
            className={`sticky top-[68px] sm:top-[74px] z-40 mb-8 -mx-6 md:-mx-12 px-6 md:px-12 py-2 space-y-3 transition-all duration-300 ${
              isSticky ? "bg-[#FDFCF9] border-b border-brown-200/80 shadow-xs" : "bg-transparent"
            }`}
          >
            {/* Top backdrop curtain mask activated ONLY when sticky */}
            {isSticky && (
              <div className="absolute -top-28 left-0 right-0 h-28 bg-[#FDFCF9] pointer-events-none" />
            )}

            <div className="max-w-7xl mx-auto relative z-10 space-y-3">
              {/* Main Agreement Header & Hero Card */}
              <div className={`bg-white border border-brown-200/60 rounded-3xl text-left transition-all duration-300 shadow-sm ${
                isSticky ? "p-4 sm:p-5 shadow-md border-brown-200" : "p-5 sm:p-7"
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-[#5A7338] bg-olive-50 border border-olive-200/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        {activeAgreement.category}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] rounded-full text-xs font-bold shadow-2xs">
                        Starting at ₹50
                      </span>
                    </div>

                    <h2 className={`font-serif font-bold text-[#1A1917] leading-tight transition-all duration-300 ${
                      isSticky ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                    }`}>
                      {activeAgreement.name}
                    </h2>

                    <p className={`text-xs sm:text-sm text-brown-700 font-medium leading-relaxed italic transition-all duration-300 ${
                      isSticky ? "line-clamp-1 text-xs" : ""
                    }`}>
                      {activeAgreement.tagline}
                    </p>
                  </div>

                  {/* Action Box */}
                  <div className={`bg-[#FAF9F6] border border-brown-200/60 rounded-2xl flex transition-all duration-300 ${
                    isSticky
                      ? "p-2.5 flex-row md:flex-col items-center justify-between gap-2 md:w-52"
                      : "p-3.5 flex-col items-center justify-center space-y-1.5 shrink-0 text-center md:w-60"
                  }`}>
                    {!isSticky && (
                      <span className="text-[11px] text-brown-500 font-light">
                        Ready to draft {activeAgreement.name}?
                      </span>
                    )}
                    <span className="text-sm font-serif font-bold text-[#2E7D32] shrink-0">
                      Starting at ₹50
                    </span>
                    <button
                      onClick={(e) => handleCreateAgreement(e, activeAgreement.id)}
                      className="w-full py-2 px-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow cursor-pointer active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Agreement</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-tabs Navigation Bar */}
              <div className="bg-white border border-brown-200/80 p-2 sm:p-2.5 rounded-2xl shadow-xs transition-all flex items-center justify-between gap-3">
                {/* Sub-tabs Pills */}
                <div ref={subTabsContainerRef} className="flex items-center gap-2 overflow-x-auto scrollbar-none no-scrollbar [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
                  {subTabs.map((tab) => (
                    <button
                      key={tab.id}
                      data-tab-id={tab.id}
                      onClick={() => handleScrollToSubTab(tab.id)}
                      className={`py-1.5 px-3.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        activeSubTab === tab.id
                          ? "bg-[#5A7338] text-white shadow-sm"
                          : "bg-[#FAF9F6] hover:bg-olive-50 text-brown-700 hover:text-[#5A7338] border border-brown-200/40"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                {/* Mini CTA on sticky bar */}
                <div className="hidden lg:flex items-center gap-3 shrink-0 pl-3 border-l border-brown-200/60">
                  <span className="text-xs font-bold text-brown-900 truncate max-w-[180px]">
                    {activeAgreement.name}
                  </span>
                  <button
                    onClick={(e) => handleCreateAgreement(e, activeAgreement.id)}
                    className="py-1.5 px-3 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1 shadow-xs cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Scroll Sections Container */}
          <div className="bg-white border border-brown-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-12 text-left">
            
            {/* Section 1: Overview & Purpose */}
            <section id="overview" className="scroll-mt-[270px] sm:scroll-mt-[280px] space-y-8 pb-8">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-brown-900 flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#5A7338]" /> Overview & Purpose
                  </h3>
                  <p className="text-sm text-brown-700 leading-relaxed font-light bg-[#FAF9F6] p-5 rounded-2xl border border-brown-100/60">
                    {activeAgreement.overview}
                  </p>
                </div>

                {activeAgreement.whyImportant && activeAgreement.whyImportant.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-bold text-[#1A1917] flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#5A7338]" /> Why is a {activeAgreement.name} Crucial?
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeAgreement.whyImportant.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-brown-200/60 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" />
                          <span className="text-xs text-brown-800 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-[#5A7338]" /> Who Needs a {activeAgreement.name}?
                    </h4>
                    <ul className="space-y-2 text-xs text-brown-700">
                      {activeAgreement.whoNeedsIt.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start bg-[#FAF9F6] p-3 rounded-xl border border-brown-100/60">
                          <Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1A1917] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#5A7338]" /> When Should You Execute It?
                    </h4>
                    <ul className="space-y-2 text-xs text-brown-700">
                      {activeAgreement.whenRequired.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start bg-[#FAF9F6] p-3 rounded-xl border border-brown-100/60">
                          <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activeAgreement.realWorldExamples && activeAgreement.realWorldExamples.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif text-base font-bold text-[#1A1917] flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#5A7338]" /> Real-World Scenarios & Case Examples
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {activeAgreement.realWorldExamples.map((ex, idx) => (
                        <div key={idx} className="bg-gradient-to-b from-[#FAF9F6] to-white p-4 rounded-2xl border border-brown-200/60 space-y-2">
                          <span className="inline-block text-[11px] font-bold text-[#5A7338] bg-olive-50 px-2.5 py-0.5 rounded-md border border-olive-100">
                            {ex.title}
                          </span>
                          <p className="text-xs text-brown-700 leading-relaxed font-light">
                            {ex.scenario}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Section 2: Types & Scenarios */}
              <section id="types" className="scroll-mt-[270px] sm:scroll-mt-[280px] space-y-6 pt-10 pb-8 border-t border-brown-200/60">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-brown-900 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-[#5A7338]" /> Types & Scenarios
                  </h3>
                  <p className="text-xs text-brown-500 font-light">Understanding contract variations ensures you select the correct agreement structure:</p>
                </div>

                {activeAgreement.types && activeAgreement.types.length > 0 ? (
                  <div className="grid md:grid-cols-3 gap-5">
                    {activeAgreement.types.map((type, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-2xl border border-brown-200/70 shadow-2xs space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-olive-50 border border-olive-200 text-[#5A7338] font-bold text-xs flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="font-serif text-sm font-bold text-brown-900">{type.name}</h4>
                          </div>
                          <p className="text-xs text-brown-650 leading-relaxed font-light">{type.definition}</p>
                        </div>
                        <div className="pt-2 border-t border-brown-100">
                          <span className="text-[10px] font-bold text-[#5A7338] uppercase tracking-wider block mb-1">Practical Use Case:</span>
                          <p className="text-[11px] text-brown-700 leading-tight italic bg-[#FAF9F6] p-2.5 rounded-xl border border-brown-100/50">
                            {type.useCase}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-brown-500 italic bg-[#FAF9F6] p-4 rounded-xl">
                    Standard single-format agreement applies. Choose customization parameters during creation.
                  </div>
                )}

                {activeAgreement.comparison && activeAgreement.comparison.table.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-brown-100">
                    <h4 className="font-serif text-base font-bold text-[#1A1917]">{activeAgreement.comparison.title}</h4>
                    <div className="border border-brown-200/60 rounded-2xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#FAF9F6] border-b border-brown-200/60 text-brown-900 font-serif">
                            <th className="p-3 font-bold w-1/4">Aspect</th>
                            <th className="p-3 font-bold text-[#5A7338]">{activeAgreement.name}</th>
                            <th className="p-3 font-bold text-brown-600">{activeAgreement.comparison.versusName}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brown-100 text-brown-700 bg-white">
                          {activeAgreement.comparison.table.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50">
                              <td className="p-3 font-bold text-brown-900">{row.aspect}</td>
                              <td className="p-3 leading-relaxed bg-olive-50/20">{row.activeDoc}</td>
                              <td className="p-3 leading-relaxed">{row.versusDoc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </section>

              {/* Section 3: Key Clauses & Exclusions */}
              <section id="clauses" className="scroll-mt-[270px] sm:scroll-mt-[280px] space-y-6 pt-10 pb-8 border-t border-brown-200/60">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-brown-900 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-[#5A7338]" /> Key Clauses & Exclusions
                  </h3>
                  <p className="text-xs text-brown-500 font-light">Essential terms and contractual provisions included in this document:</p>
                </div>
                
                <div className="border border-brown-200/60 rounded-2xl overflow-hidden shadow-2xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#FAF9F6] border-b border-brown-200/60 text-brown-900 font-serif">
                        <th className="p-3 font-bold w-1/3">Clause / Component</th>
                        <th className="p-3 font-bold">Clause Summary & Purpose</th>
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

                {activeAgreement.exclusions && activeAgreement.exclusions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="bg-[#FFFBEB] border border-[#FCD34D] p-5 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2 text-[#B45309]">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <h4 className="font-serif text-sm font-bold">Standard Legal Exclusions & Exceptions</h4>
                      </div>
                      <ul className="space-y-2 text-xs text-amber-900">
                        {activeAgreement.exclusions.map((ex, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-bold">•</span>
                            <span className="leading-relaxed">{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>

              {/* Section 4: Legal Validity & Stamp Duty */}
              <section id="enforceability" className="scroll-mt-[270px] sm:scroll-mt-[280px] space-y-6 pt-10 pb-8 border-t border-brown-200/60">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-brown-900 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#5A7338]" /> Legal Validity & Stamp Duty
                  </h3>
                  <p className="text-xs text-brown-500 font-light">Indian statutory acts, court enforceability, and stamp paper requirements:</p>
                </div>

                {activeAgreement.legalValidity && (
                  <div className="bg-gradient-to-r from-olive-50 to-[#FAF9F6] border border-olive-200/60 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#5A7338] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-olive-200">
                        Legal Act: {activeAgreement.legalValidity.act}
                      </span>
                      <Scale className="w-5 h-5 text-[#5A7338]" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-bold text-brown-900">Enforceability in Indian Courts</h4>
                      <p className="text-xs text-brown-700 leading-relaxed font-light">
                        {activeAgreement.legalValidity.overview}
                      </p>
                    </div>

                    {activeAgreement.legalValidity.remedies && activeAgreement.legalValidity.remedies.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-olive-200/40">
                        <span className="text-xs font-bold text-brown-900 block">Legal Remedies Available Upon Breach:</span>
                        <ul className="grid sm:grid-cols-3 gap-3">
                          {activeAgreement.legalValidity.remedies.map((rem, idx) => (
                            <li key={idx} className="bg-white p-3 rounded-xl border border-brown-200/50 text-[11px] text-brown-800 leading-snug font-medium">
                              {rem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeAgreement.stampDuty && (
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-bold text-brown-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#5A7338]" /> State-Wise Non-Judicial Stamp Duty Requirements
                    </h4>
                    <div className="grid sm:grid-cols-4 gap-3 text-xs">
                      <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-brown-200/60 space-y-1">
                        <span className="font-bold text-[#5A7338] block">Karnataka</span>
                        <span className="text-brown-700 text-[11px] block">{activeAgreement.stampDuty.karnataka}</span>
                      </div>
                      <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-brown-200/60 space-y-1">
                        <span className="font-bold text-[#5A7338] block">Maharashtra</span>
                        <span className="text-brown-700 text-[11px] block">{activeAgreement.stampDuty.maharashtra}</span>
                      </div>
                      <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-brown-200/60 space-y-1">
                        <span className="font-bold text-[#5A7338] block">Delhi NCR</span>
                        <span className="text-brown-700 text-[11px] block">{activeAgreement.stampDuty.delhi}</span>
                      </div>
                      <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-brown-200/60 space-y-1">
                        <span className="font-bold text-[#5A7338] block">Other States</span>
                        <span className="text-brown-700 text-[11px] block">{activeAgreement.stampDuty.general}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-brown-900">Execution Procedure</h4>
                    <ol className="space-y-2 text-xs text-brown-700">
                      {activeAgreement.procedure.map((step, idx) => (
                        <li key={idx} className="bg-white p-3 rounded-xl border border-brown-200/50 leading-relaxed font-light">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-brown-900">Pricing & Service Options</h4>
                    <div className="border border-brown-200/60 rounded-xl overflow-hidden text-xs">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-[#FAF9F6] font-serif border-b border-brown-200/60">
                          <tr>
                            <th className="p-2.5 font-bold">Option</th>
                            <th className="p-2.5 font-bold">Price</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brown-100 bg-white">
                          {activeAgreement.costTable.map((cost, idx) => (
                            <tr key={idx}>
                              <td className="p-2.5">
                                <span className="font-bold block text-brown-900">{cost.service}</span>
                                <span className="text-[11px] text-brown-500 font-light">{cost.desc}</span>
                              </td>
                              <td className="p-2.5 font-bold text-[#2E7D32] shrink-0">{cost.cost}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Sample Template — Zoomed-Out Full Document Card Preview */}
              <section id="template" className="scroll-mt-[270px] sm:scroll-mt-[280px] space-y-6 pt-10 pb-8 border-t border-brown-200/60">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-brown-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#5A7338]" /> Sample Template
                  </h3>
                  <p className="text-xs text-brown-500 font-light">Official partner-vetted visual document template preview (Full A4 Page View):</p>
                </div>

                {/* Full A4 Document Page Card Preview Container */}
                <div className="relative w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#FAF9F6] to-white border border-brown-200/80 shadow-lg p-5 sm:p-8 space-y-4 text-center">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brown-200/60 pb-3 text-left">
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-brown-900 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-[#5A7338]" /> {activeAgreement.name} — Full Document Page View
                      </span>
                      <span className="text-[11px] text-brown-500 font-light block">
                        Complete Letterhead Layout · Includes Clause Structure & Signatures
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#5A7338] font-bold bg-olive-50 px-3 py-1 rounded-full border border-olive-200">
                        Arvya Tech Verified Format
                      </span>
                      <button
                        onClick={handleOpenZoomModal}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Expand Full View</span>
                      </button>
                    </div>
                  </div>

                  {/* Zoomed Out Full Document Paper Preview Box */}
                  <div 
                    onClick={handleOpenZoomModal}
                    onDoubleClick={handleOpenZoomModal}
                    className="relative cursor-pointer group bg-white rounded-2xl p-3 sm:p-5 border border-brown-200/70 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex justify-center items-center"
                  >
                    <img
                      src={getAgreementSampleImage(activeAgreement.id)}
                      alt={`${activeAgreement.name} Full Visual Document Card`}
                      className="w-full h-auto object-contain rounded-xl shadow-sm border border-gray-200/80 transition-all duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/agreements/offer-letter-website.png';
                      }}
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-brown-900 shadow-md border border-brown-200 flex items-center gap-2">
                        <ZoomIn className="w-4 h-4 text-[#5A7338]" /> Click or Double-Click to Zoom Interactive Document
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fullscreen Interactive Zoom & Pan Modal Overlay */}
                {isZoomModalOpen && (
                  <div 
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
                    onClick={handleCloseZoomModal}
                  >
                    <div 
                      className="relative max-w-6xl w-full h-[92vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col space-y-4 text-left"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Modal Top Header Bar with Zoom Toolbar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brown-100 pb-3 shrink-0">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-[#5A7338]" />
                          <div>
                            <h3 className="font-serif text-base sm:text-lg font-bold text-brown-900 leading-tight">
                              {activeAgreement.name} — Interactive High-Res Document
                            </h3>
                            <span className="text-[11px] text-brown-500 font-light hidden sm:block">
                              Double-click to toggle 220% zoom • Mouse wheel / Pinch to scale • Click & drag to pan
                            </span>
                          </div>
                        </div>

                        {/* Interactive Zoom Toolbar Controls */}
                        <div className="flex items-center gap-2">
                          {/* Zoom Out Button */}
                          <button
                            onClick={() => {
                              setModalZoomScale((prev) => {
                                const next = Math.max(prev - 0.25, 1);
                                if (next === 1) setPanPosition({ x: 0, y: 0 });
                                return parseFloat(next.toFixed(2));
                              });
                            }}
                            className="p-2 bg-brown-50 hover:bg-olive-50 text-brown-700 hover:text-[#5A7338] rounded-xl border border-brown-200/60 transition-colors cursor-pointer"
                            title="Zoom Out (-)"
                          >
                            <ZoomOut className="w-4 h-4" />
                          </button>

                          {/* Zoom Scale Badge */}
                          <span className="px-3 py-1 bg-olive-50 border border-olive-200 text-[#5A7338] font-bold text-xs rounded-xl min-w-[60px] text-center shadow-2xs">
                            {Math.round(modalZoomScale * 100)}%
                          </span>

                          {/* Zoom In Button */}
                          <button
                            onClick={() => {
                              setModalZoomScale((prev) => parseFloat(Math.min(prev + 0.25, 3.5).toFixed(2)));
                            }}
                            className="p-2 bg-brown-50 hover:bg-olive-50 text-brown-700 hover:text-[#5A7338] rounded-xl border border-brown-200/60 transition-colors cursor-pointer"
                            title="Zoom In (+)"
                          >
                            <ZoomIn className="w-4 h-4" />
                          </button>

                          {/* Reset Button */}
                          <button
                            onClick={() => {
                              setModalZoomScale(1);
                              setPanPosition({ x: 0, y: 0 });
                            }}
                            className="p-2 bg-brown-50 hover:bg-brown-100 text-brown-700 rounded-xl border border-brown-200/60 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                            title="Reset Zoom (100%)"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Reset</span>
                          </button>

                          {/* Close Button */}
                          <button
                            onClick={handleCloseZoomModal}
                            className="p-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl border border-red-200 transition-colors cursor-pointer ml-1"
                            title="Close Preview (Esc)"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Interactive Zoom & Pan Image Viewport */}
                      <div 
                        className={`relative flex-1 w-full overflow-hidden rounded-2xl bg-[#F5F4F0] border border-brown-200/60 flex items-center justify-center p-4 select-none ${
                          modalZoomScale > 1 ? (isPanning ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
                        }`}
                        onWheel={handleImageWheel}
                        onDoubleClick={handleImageDoubleClick}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                      >
                        <div 
                          style={{
                            transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${modalZoomScale})`,
                            transformOrigin: "center center",
                            transition: isPanning ? "none" : "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                          }}
                          className="max-w-full max-h-full flex items-center justify-center pointer-events-auto"
                        >
                          <img
                            src={getAgreementSampleImage(activeAgreement.id)}
                            alt={`${activeAgreement.name} Full High-Res Document`}
                            className="max-w-full h-auto max-h-[82vh] object-contain rounded-xl shadow-xl border border-gray-200/80 pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Section 6: FAQs */}
              <section id="faqs" className="scroll-mt-[270px] sm:scroll-mt-[280px] space-y-6 pt-10 pb-4 border-t border-brown-200/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brown-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#5A7338]" /> Frequently Asked Questions
                  </h3>
                  <span className="text-xs text-brown-500 font-light">{activeAgreement.faqs.length} questions answered</span>
                </div>
                <div className="space-y-3">
                  {activeAgreement.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-brown-200/60 bg-[#FAF9F6]/60 rounded-2xl p-4 space-y-2 hover:border-olive-300 transition-colors">
                      <span className="block font-serif font-bold text-sm text-brown-900 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5" />
                        <span>Q. {faq.q}</span>
                      </span>
                      <span className="block text-xs text-brown-700 leading-relaxed font-light pl-6">
                        A. {faq.a}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
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
                className="px-8 py-3.5 bg-white hover:bg-[#F5F2EB] text-[#2B3616] font-bold text-[14px] rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 border border-white/80"
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
