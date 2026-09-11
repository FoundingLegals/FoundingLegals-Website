"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronDown,
  ChevronUp,
  Check,
  Search,
} from "lucide-react";
import {
  ALL_INDIAN_STATES,
  ENTITY_CONFIGS,
  EntityTypeId,
  calculateQuote,
  ItemizedQuote
} from "@/lib/pricingEngineData";

const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com").replace(/\/$/, "");

// Entity display label mapping
const ENTITY_DISPLAY_NAMES: Record<EntityTypeId, string> = {
  pvt_ltd: "Private Company",
  llp: "Limited Liability Partnership (LLP)",
  opc: "One Person Company (OPC)",
  public_ltd: "Public Limited Company",
  partnership: "Partnership Firm",
  sole_prop: "Sole Proprietorship",
  section8: "Section 8 Company",
  dpiit: "DPIIT Startup India",
  gst: "GST Registration",
  udyam: "UDYAM / MSME",
  iec: "Import Export Code",
  fssai_state: "FSSAI State License",
  fssai_central: "FSSAI Central License",
  trademark: "Trademark Registration",
  ptax: "Professional Tax",
  labour: "Labour License"
};

export default function CostEstimatorModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Form states
  const [entityType, setEntityType] = useState<EntityTypeId>("pvt_ltd");
  const [lockedEntity, setLockedEntity] = useState<EntityTypeId | null>("pvt_ltd");
  const [selectedState, setSelectedState] = useState<string>("Maharashtra");
  const [hasShareCapital, setHasShareCapital] = useState<string>("yes");
  const [numDirectors, setNumDirectors] = useState<number>(2);
  const [authorizedCapital, setAuthorizedCapital] = useState<number>(100000);
  const [numDsc, setNumDsc] = useState<number>(2);

  // Custom Dropdown Open States
  const [openDropdown, setOpenDropdown] = useState<"entity" | "state" | "capital" | null>(null);
  const [stateSearchQuery, setStateSearchQuery] = useState("");

  // Accordion toggle for Government Fees
  const [isGovtFeesExpanded, setIsGovtFeesExpanded] = useState<boolean>(true);

  // Calculated quote state
  const [quote, setQuote] = useState<ItemizedQuote>(() =>
    calculateQuote({
      entityType: "pvt_ltd",
      state: "Maharashtra",
      authorizedCapital: 100000,
      numDirectors: 2,
      numDsc: 2
    })
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Listen for global open-cost-estimator event
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ state?: string; entityType?: EntityTypeId }>;
      const targetEntity = customEvent.detail?.entityType && ENTITY_CONFIGS[customEvent.detail.entityType]
        ? customEvent.detail.entityType
        : "pvt_ltd";
      const targetState = customEvent.detail?.state && ALL_INDIAN_STATES.includes(customEvent.detail.state)
        ? customEvent.detail.state
        : "Maharashtra";

      setEntityType(targetEntity);
      setLockedEntity(targetEntity);
      setSelectedState(targetState);
      setOpenDropdown(null);
      setStateSearchQuery("");

      const conf = ENTITY_CONFIGS[targetEntity];
      const directors = conf.defaultDirectors;
      const dsc = conf.defaultDsc;
      const capital = conf.defaultCapital;

      setNumDirectors(directors);
      setNumDsc(dsc);
      setAuthorizedCapital(capital);
      setHasShareCapital(conf.hasShareCapitalOption ? "yes" : "no");

      const newQuote = calculateQuote({
        entityType: targetEntity,
        state: targetState,
        authorizedCapital: capital,
        numDirectors: directors,
        numDsc: dsc
      });
      setQuote(newQuote);
      setIsOpen(true);
    };

    window.addEventListener("open-cost-estimator", handleOpen);
    return () => window.removeEventListener("open-cost-estimator", handleOpen);
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openDropdown) {
          setOpenDropdown(null);
        } else {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, openDropdown]);

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setOpenDropdown(null);
    const newQuote = calculateQuote({
      entityType,
      state: selectedState,
      authorizedCapital: hasShareCapital === "no" ? 0 : Number(authorizedCapital) || 100000,
      numDirectors: Number(numDirectors) || 1,
      numDsc: Number(numDsc) || 0
    });
    setQuote(newQuote);
  };

  const handleProceedToPay = () => {
    setIsOpen(false);
    window.open(`${APP_URL}/sign-up?redirectToPath=%2Fdashboard`, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  // Format currency helpers
  const formatRs = (val: number) => `Rs ${val.toLocaleString("en-IN")}`;
  const capitalInLakh = authorizedCapital >= 100000
    ? `${(authorizedCapital / 100000).toFixed(authorizedCapital % 100000 === 0 ? 0 : 1)} lakh`
    : `${authorizedCapital.toLocaleString("en-IN")}`;

  // Filtered states for custom dropdown search
  const filteredStates = ALL_INDIAN_STATES.filter((st) =>
    st.toLowerCase().includes(stateSearchQuery.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cost-estimator-heading"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#FDFCF9] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E5E1D6] p-6 sm:p-8 md:p-9 text-left font-sans animate-dropdown max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F0EBE1] hover:bg-[#E5E1D6] text-brown-700 hover:text-brown-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── HEADER ── */}
        <div className="mb-6 pr-8">
          <h2 id="cost-estimator-heading" className="font-serif text-2xl sm:text-[28px] font-medium text-brown-900 tracking-tight">
            Estimate Your Incorporation Cost
          </h2>
          <p className="text-xs sm:text-[13.5px] text-brown-500 font-light mt-1 leading-relaxed">
            Government fees, stamp duty, DSC and professional fees, calculated for your state and capital.
          </p>
        </div>

        {/* ── 2-COLUMN STRUCTURE (FOUNDING LEGALS THEME) ── */}
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Input Parameters Form */}
          <div ref={dropdownRef} className="md:col-span-6 bg-white rounded-2xl border-2 border-[#5A7338]/40 p-5 sm:p-6 shadow-sm relative">
            <form onSubmit={handleCalculate} className="space-y-4">
              
              {/* Row 1: Entity Type & State */}
              <div className="grid grid-cols-2 gap-3.5">
                
                {/* 1. Custom Entity Type Dropdown */}
                <div className="relative">
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    Entity Type
                  </label>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === "entity" ? null : "entity")}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-[#D5DFBE] hover:border-[#5A7338] focus:border-[#5A7338] focus:ring-2 focus:ring-[#5A7338]/20 rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold shadow-2xs transition-all cursor-pointer text-left"
                  >
                    <span className="truncate">
                      {ENTITY_DISPLAY_NAMES[entityType] || ENTITY_CONFIGS[entityType]?.name || "Private Company"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#5A7338] shrink-0 transition-transform duration-200 ${openDropdown === "entity" ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === "entity" && (
                    <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-brown-200 py-1 max-h-56 overflow-y-auto animate-dropdown">
                      {lockedEntity ? (
                        <div
                          onClick={() => setOpenDropdown(null)}
                          className="px-3.5 py-2 text-xs sm:text-[12.5px] font-semibold text-olive-900 bg-olive-50 flex items-center justify-between cursor-pointer"
                        >
                          <span>{ENTITY_DISPLAY_NAMES[lockedEntity] || ENTITY_CONFIGS[lockedEntity]?.name}</span>
                          <Check className="w-3.5 h-3.5 text-[#5A7338]" />
                        </div>
                      ) : (
                        [
                          { id: "pvt_ltd", name: "Private Company" },
                          { id: "llp", name: "Limited Liability Partnership (LLP)" },
                          { id: "opc", name: "One Person Company (OPC)" },
                          { id: "public_ltd", name: "Public Limited Company" },
                          { id: "partnership", name: "Partnership Firm" },
                          { id: "sole_prop", name: "Sole Proprietorship" },
                          { id: "section8", name: "Section 8 Company" }
                        ].map((item) => {
                          const isSelected = entityType === item.id;
                          return (
                            <div
                              key={item.id}
                              onClick={() => {
                                const newType = item.id as EntityTypeId;
                                setEntityType(newType);
                                const conf = ENTITY_CONFIGS[newType];
                                if (conf) {
                                  setNumDirectors(conf.defaultDirectors);
                                  setNumDsc(conf.defaultDsc);
                                  setAuthorizedCapital(conf.defaultCapital);
                                }
                                setOpenDropdown(null);
                              }}
                              className={`px-3.5 py-2 text-xs sm:text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                isSelected ? "bg-olive-50 text-olive-900 font-bold" : "text-brown-700 hover:bg-[#FAF9F6] hover:text-brown-900"
                              }`}
                            >
                              <span>{item.name}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#5A7338]" />}
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Custom State Dropdown with Search */}
                <div className="relative">
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    State
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(openDropdown === "state" ? null : "state");
                      setStateSearchQuery("");
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-[#D5DFBE] hover:border-[#5A7338] focus:border-[#5A7338] focus:ring-2 focus:ring-[#5A7338]/20 rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold shadow-2xs transition-all cursor-pointer text-left"
                  >
                    <span className="truncate">{selectedState}</span>
                    <ChevronDown className={`w-4 h-4 text-[#5A7338] shrink-0 transition-transform duration-200 ${openDropdown === "state" ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === "state" && (
                    <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-brown-200 overflow-hidden animate-dropdown">
                      {/* Search Bar */}
                      <div className="p-2 border-b border-brown-100 bg-[#FAF9F6]">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-brown-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Search state..."
                            value={stateSearchQuery}
                            onChange={(e) => setStateSearchQuery(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-white border border-brown-200 rounded-lg text-xs text-brown-900 focus:outline-none focus:border-[#5A7338]"
                            autoFocus
                          />
                        </div>
                      </div>

                      {/* State Options */}
                      <div className="max-h-48 overflow-y-auto py-1">
                        {filteredStates.length > 0 ? (
                          filteredStates.map((st) => {
                            const isSelected = selectedState === st;
                            return (
                              <div
                                key={st}
                                onClick={() => {
                                  setSelectedState(st);
                                  setOpenDropdown(null);
                                }}
                                className={`px-3.5 py-2 text-xs sm:text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                  isSelected ? "bg-olive-50 text-olive-900 font-bold" : "text-brown-700 hover:bg-[#FAF9F6] hover:text-brown-900"
                                }`}
                              >
                                <span>{st}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#5A7338]" />}
                              </div>
                            );
                          })
                        ) : (
                          <div className="px-3.5 py-3 text-xs text-brown-400 text-center">
                            No state found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Row 2: Share Capital Status & No. Of Directors */}
              <div className="grid grid-cols-2 gap-3.5">
                
                {/* 3. Custom Share Capital Status Dropdown */}
                <div className="relative">
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    Share Capital Status
                  </label>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === "capital" ? null : "capital")}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-[#D5DFBE] hover:border-[#5A7338] focus:border-[#5A7338] focus:ring-2 focus:ring-[#5A7338]/20 rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold shadow-2xs transition-all cursor-pointer text-left"
                  >
                    <span className="truncate">
                      {hasShareCapital === "yes" ? "Company having share capital" : "Company not having share capital"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#5A7338] shrink-0 transition-transform duration-200 ${openDropdown === "capital" ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === "capital" && (
                    <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-brown-200 py-1 animate-dropdown">
                      {[
                        { val: "yes", label: "Company having share capital" },
                        { val: "no", label: "Company not having share capital" }
                      ].map((item) => {
                        const isSelected = hasShareCapital === item.val;
                        return (
                          <div
                            key={item.val}
                            onClick={() => {
                              setHasShareCapital(item.val);
                              setOpenDropdown(null);
                            }}
                            className={`px-3.5 py-2 text-xs sm:text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                              isSelected ? "bg-olive-50 text-olive-900 font-bold" : "text-brown-700 hover:bg-[#FAF9F6] hover:text-brown-900"
                            }`}
                          >
                            <span>{item.label}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#5A7338]" />}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* No. of Directors Input */}
                <div>
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    No. Of Directors
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={15}
                    value={numDirectors}
                    onChange={(e) => setNumDirectors(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-[#D5DFBE] hover:border-[#5A7338] rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold focus:outline-none focus:border-[#5A7338] focus:ring-2 focus:ring-[#5A7338]/20 shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Authorized Share Capital & No. Of DSC */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    Authorized Share Capital (Rs)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-olive-700">
                      ₹
                    </span>
                    <input
                      type="number"
                      step={10000}
                      min={0}
                      disabled={hasShareCapital === "no"}
                      value={hasShareCapital === "no" ? 0 : authorizedCapital}
                      onChange={(e) => setAuthorizedCapital(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full pl-8 pr-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-[#D5DFBE] hover:border-[#5A7338] rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold focus:outline-none focus:border-[#5A7338] focus:ring-2 focus:ring-[#5A7338]/20 shadow-2xs disabled:bg-gray-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    No. Of DSC Required
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={numDirectors}
                    value={numDsc}
                    onChange={(e) => setNumDsc(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-[#D5DFBE] hover:border-[#5A7338] rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold focus:outline-none focus:border-[#5A7338] focus:ring-2 focus:ring-[#5A7338]/20 shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Accent Note */}
              <div className="pt-2 text-xs font-semibold text-brown-800 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#5A7338] rounded-full inline-block" />
                <span>Calculate Stamp Duty Fees:</span>
              </div>

              {/* Calculate Cost Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#5A7338] hover:bg-[#48532B] text-white font-bold text-sm rounded-xl shadow-md shadow-olive-900/15 transition-all cursor-pointer active:scale-98"
              >
                Calculate Cost
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Real-Time Breakdown & Summary */}
          <div className="md:col-span-6 space-y-3.5">
            
            {/* 1. Government Fees Accordion Box */}
            <div className="bg-white rounded-2xl border border-brown-200/90 overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => setIsGovtFeesExpanded(!isGovtFeesExpanded)}
                className="w-full px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm text-brown-900 hover:bg-[#FAF9F6] transition-colors cursor-pointer"
              >
                <span>Government Fees</span>
                <div className="flex items-center gap-1.5 text-brown-900 font-bold">
                  <span>{formatRs(quote.govtFeesSubtotal)}</span>
                  {isGovtFeesExpanded ? (
                    <ChevronUp className="w-4 h-4 text-brown-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brown-500" />
                  )}
                </div>
              </button>

              {isGovtFeesExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-brown-100 space-y-3 text-xs text-brown-700 bg-[#FAF9F6]/40">
                  
                  {/* ROC Fees */}
                  <div className="flex items-center justify-between py-1 border-b border-brown-100/60">
                    <span className="text-brown-600">ROC Fees</span>
                    <span className="font-semibold text-brown-900">
                      {formatRs(quote.rocFees + quote.govtIncorporationFee)}
                    </span>
                  </div>

                  {/* Stamp Duty Row + Detail Sub-card */}
                  <div className="py-1 border-b border-brown-100/60 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-brown-600">
                        Stamp Duty ({quote.selectedState})
                      </span>
                      <span className="font-semibold text-olive-800">
                        {formatRs(quote.stampDuty)}
                      </span>
                    </div>

                    {/* Sub details card */}
                    <div className="bg-white rounded-xl p-3 border border-brown-200/80 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between font-semibold text-brown-900 text-[11.5px]">
                        <span>MOA + AOA (INC-33 / INC-34)</span>
                        <span className="font-bold text-[#5A7338]">{formatRs(quote.stampDuty)}</span>
                      </div>
                      <div className="text-[10.5px] text-brown-500 font-light">
                        {quote.selectedState} rate for authorised capital of ₹{authorizedCapital.toLocaleString("en-IN")}
                      </div>
                      <div className="text-[10px] text-brown-400 font-light">
                        Authorised capital up to ₹{capitalInLakh}
                      </div>
                    </div>
                  </div>

                  {/* Director / Partner Fees */}
                  <div className="flex items-center justify-between py-1 border-b border-brown-100/60">
                    <span className="text-brown-600">Director / Partner Fees</span>
                    <span className="font-semibold text-brown-900">
                      {formatRs(quote.directorFees)}
                    </span>
                  </div>

                  {/* DSC Fees */}
                  <div className="flex items-center justify-between py-1">
                    <span className="text-brown-600">DSC Fees ({numDsc} × ₹2500)</span>
                    <span className="font-semibold text-brown-900">
                      {formatRs(quote.dscFees)}
                    </span>
                  </div>

                </div>
              )}
            </div>

            {/* 2. Professional Fees Box */}
            <div className="bg-white rounded-2xl border border-brown-200/90 px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm text-brown-900 shadow-xs">
              <span className="text-brown-800">Professional Fees</span>
              <span className="text-brown-900 font-bold">{formatRs(quote.professionalFees)}</span>
            </div>

            {/* 3. Total Incorporation Cost Box in Warm Luxury Theme */}
            <div className="bg-[#F5F1E6]/80 rounded-2xl border-2 border-olive-300/80 px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm shadow-xs">
              <span className="text-brown-900 font-bold">Total Incorporation Cost</span>
              <span className="text-base sm:text-lg font-serif font-extrabold text-[#48532B]">
                {formatRs(quote.totalCost)}
              </span>
            </div>

            {/* 4. Proceed to Pay Button in Olive Theme */}
            <button
              type="button"
              onClick={handleProceedToPay}
              className="w-full py-3.5 px-4 bg-[#48532B] hover:bg-olive-800 text-white font-bold text-sm rounded-xl shadow-lg shadow-olive-900/20 transition-all cursor-pointer text-center active:scale-98"
            >
              Proceed to Pay
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
