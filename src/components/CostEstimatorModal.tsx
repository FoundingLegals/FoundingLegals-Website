"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
} from "lucide-react";
import {
  ALL_INDIAN_STATES,
  ENTITY_CONFIGS,
  EntityTypeId,
  calculateQuote,
  ItemizedQuote
} from "@/lib/pricingEngineData";

const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com").replace(/\/$/, "");

// Primary entity tabs shown in the cost estimator header
const PRIMARY_ENTITIES: { id: EntityTypeId; label: string }[] = [
  { id: "pvt_ltd", label: "Private Company" },
  { id: "opc", label: "OPC" },
  { id: "llp", label: "LLP" },
  { id: "section8", label: "Section 8" },
];

export default function CostEstimatorModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Form input states
  const [entityType, setEntityType] = useState<EntityTypeId>("pvt_ltd");
  const [selectedState, setSelectedState] = useState<string>("Karnataka");
  const [hasShareCapital, setHasShareCapital] = useState<string>("yes");
  const [numDirectors, setNumDirectors] = useState<number>(2);
  const [numDsc, setNumDsc] = useState<number>(2);
  const [authorizedCapital, setAuthorizedCapital] = useState<number>(100000);

  // Accordion toggle for Government Fees
  const [isGovtFeesExpanded, setIsGovtFeesExpanded] = useState<boolean>(true);

  // Calculated quote state
  const [quote, setQuote] = useState<ItemizedQuote>(() =>
    calculateQuote({
      entityType: "pvt_ltd",
      state: "Karnataka",
      authorizedCapital: 100000,
      numDirectors: 2,
      numDsc: 2
    })
  );

  const modalRef = useRef<HTMLDivElement>(null);

  // Listen for global open-cost-estimator event
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ state?: string; entityType?: EntityTypeId }>;
      const targetEntity = customEvent.detail?.entityType && ENTITY_CONFIGS[customEvent.detail.entityType]
        ? customEvent.detail.entityType
        : "pvt_ltd";
      const targetState = customEvent.detail?.state && ALL_INDIAN_STATES.includes(customEvent.detail.state)
        ? customEvent.detail.state
        : "Karnataka";

      setEntityType(targetEntity);
      setSelectedState(targetState);

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
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Real-time calculation effect
  useEffect(() => {
    const parsedCap = hasShareCapital === "no" ? 0 : authorizedCapital;
    const newQuote = calculateQuote({
      entityType,
      state: selectedState,
      authorizedCapital: parsedCap,
      numDirectors,
      numDsc
    });
    setQuote(newQuote);
  }, [entityType, selectedState, hasShareCapital, numDirectors, numDsc, authorizedCapital]);

  const handleEntitySelect = (type: EntityTypeId) => {
    setEntityType(type);
    const conf = ENTITY_CONFIGS[type];
    if (conf) {
      setNumDirectors(conf.defaultDirectors);
      setNumDsc(conf.defaultDsc);
      setAuthorizedCapital(conf.defaultCapital);
      setHasShareCapital(conf.hasShareCapitalOption ? "yes" : "no");
    }
  };

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const parsedCap = hasShareCapital === "no" ? 0 : authorizedCapital;
    const newQuote = calculateQuote({
      entityType,
      state: selectedState,
      authorizedCapital: parsedCap,
      numDirectors,
      numDsc
    });
    setQuote(newQuote);
  };

  const handleProceedToPay = () => {
    setIsOpen(false);
    window.open(`${APP_URL}/sign-up?redirectToPath=%2Fdashboard`, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  const isLLP = entityType === "llp";
  const isOPC = entityType === "opc";
  const minDirectors = isOPC ? 1 : 2;

  // Formatting helpers
  const formatRs = (val: number) => `₹${val.toLocaleString("en-IN")}`;

  // Government vs Professional Ratio for progress bar
  const total = quote.totalCost || 1;
  const govtPercent = Math.min(100, Math.round((quote.govtFeesSubtotal / total) * 100));
  const profPercent = Math.max(0, 100 - govtPercent);

  // Entity display name
  const entityDisplayBadge = isLLP
    ? "LLP"
    : isOPC
    ? "OPC"
    : entityType === "section8"
    ? "Section 8"
    : "Private Company";

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
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 md:p-9 text-left font-sans max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── HEADER ── */}
        <div className="mb-6 pr-8">
          <h2 id="cost-estimator-heading" className="text-2xl sm:text-[26px] font-bold text-[#1e293b] tracking-tight">
            Estimate Your Incorporation Cost
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-1 leading-relaxed">
            Government fees, stamp duty, DSC and professional fees, calculated for your state and capital.
          </p>
        </div>

        {/* ── 2-COLUMN STRUCTURE (EXACT TO REFERENCE SCREENSHOT) ── */}
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT COLUMN: Input Parameters Form */}
          <div className="md:col-span-7 space-y-4">
            <form onSubmit={handleCalculate} className="space-y-4">

              {/* Entity type tabs / pills */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-2">
                  Entity type
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRIMARY_ENTITIES.map((item) => {
                    const isSelected = entityType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleEntitySelect(item.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#0B1528] text-white shadow-xs"
                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 1: State & Number of Directors/Partners */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* State Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                    State of registered office
                  </label>
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs sm:text-[13px] text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all cursor-pointer appearance-none pr-8"
                    >
                      {ALL_INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* No. of directors / partners Stepper */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-800">
                      {isLLP ? "No. of partners" : "No. of directors"}
                    </label>
                    <span className="text-[11px] text-slate-400">
                      min {minDirectors}
                    </span>
                  </div>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden h-[42px]">
                    <button
                      type="button"
                      onClick={() => setNumDirectors((prev) => Math.max(minDirectors, prev - 1))}
                      disabled={numDirectors <= minDirectors}
                      className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex-1 text-center font-bold text-xs sm:text-[13px] text-slate-800 select-none">
                      {numDirectors}
                    </div>
                    <button
                      type="button"
                      onClick={() => setNumDirectors((prev) => prev + 1)}
                      className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 2: Share capital (or Entity Subtype for LLP) & DSC Required */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Left: Share Capital or Subtype */}
                {isLLP ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Entity subtype
                    </label>
                    <div className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[12.5px] text-slate-600 font-medium select-none h-[42px] flex items-center truncate">
                      Limited Liability Partnership
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Share capital
                    </label>
                    <div className="flex bg-slate-100 p-1 rounded-xl h-[42px] items-center">
                      <button
                        type="button"
                        onClick={() => setHasShareCapital("yes")}
                        className={`flex-1 h-full rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          hasShareCapital === "yes"
                            ? "bg-white text-slate-800 shadow-xs"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        Has capital
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasShareCapital("no")}
                        className={`flex-1 h-full rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          hasShareCapital === "no"
                            ? "bg-white text-slate-800 shadow-xs"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        No capital
                      </button>
                    </div>
                  </div>
                )}

                {/* Right: DSC Required Stepper */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-800">
                      DSC required
                    </label>
                    <span className="text-[11px] text-slate-400">
                      ₹2,500 each
                    </span>
                  </div>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden h-[42px]">
                    <button
                      type="button"
                      onClick={() => setNumDsc((prev) => Math.max(0, prev - 1))}
                      disabled={numDsc <= 0}
                      className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex-1 text-center font-bold text-xs sm:text-[13px] text-slate-800 select-none">
                      {numDsc}
                    </div>
                    <button
                      type="button"
                      onClick={() => setNumDsc((prev) => prev + 1)}
                      className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Authorized share capital / Capital contribution */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-800">
                    {isLLP ? "Capital contribution" : "Authorized share capital"}
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[
                      { label: "₹1L", value: 100000 },
                      { label: "₹5L", value: 500000 },
                      { label: "₹10L", value: 1000000 },
                      { label: "₹15L", value: 1500000 },
                    ].map((pill) => (
                      <button
                        key={pill.label}
                        type="button"
                        onClick={() => setAuthorizedCapital(pill.value)}
                        className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                          authorizedCapital === pill.value
                            ? "bg-[#fed7aa] text-[#9a3412] font-bold"
                            : "bg-[#fff7ed] text-[#c2410c] hover:bg-[#ffedd5]"
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 select-none">
                    ₹
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    disabled={hasShareCapital === "no"}
                    value={hasShareCapital === "no" ? "0" : authorizedCapital.toLocaleString("en-IN")}
                    onChange={(e) => {
                      const numericVal = Number(e.target.value.replace(/[^0-9]/g, "")) || 0;
                      setAuthorizedCapital(numericVal);
                    }}
                    placeholder="1,00,000"
                    className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-[13px] text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all disabled:bg-slate-100 disabled:text-slate-400"
                  />
                </div>
              </div>

              {/* Calculate Cost Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm rounded-xl shadow-md shadow-orange-900/10 transition-all cursor-pointer active:scale-98"
                >
                  Calculate Cost
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2 font-normal">
                  {isLLP
                    ? `Stamp duty at published LLP Agreement rates for ${selectedState}.`
                    : `Stamp duty at published MOA and AOA rates for ${selectedState}.`}
                </p>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: Dark Card Summary (EXACT TO REFERENCE SCREENSHOT) */}
          <div className="md:col-span-5 bg-[#121c38] rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between space-y-4">

            {/* Top row: Total incorporation cost label + Entity & State badge */}
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-normal">Total incorporation cost</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                    {formatRs(quote.totalCost)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-white">{entityDisplayBadge}</div>
                  <div className="text-[11px] text-slate-400">{selectedState}</div>
                </div>
              </div>

              {/* Ratio Bar */}
              <div className="w-full h-1.5 rounded-full overflow-hidden flex bg-slate-700/60 mt-4">
                <div style={{ width: `${govtPercent}%` }} className="bg-[#ea580c] h-full" />
                <div style={{ width: `${profPercent}%` }} className="bg-[#10b981] h-full" />
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-[11px] text-slate-300 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ea580c] inline-block" />
                  <span>Government</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block" />
                  <span>Professional</span>
                </div>
              </div>
            </div>

            {/* Middle Section: Government Fees Accordion */}
            <div className="space-y-2 border-t border-slate-700/60 pt-3">
              <button
                type="button"
                onClick={() => setIsGovtFeesExpanded(!isGovtFeesExpanded)}
                className="w-full flex items-center justify-between text-xs sm:text-[13px] font-bold text-white py-1 hover:text-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  {isGovtFeesExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  <span>Government fees</span>
                </div>
                <span className="font-bold text-white">{formatRs(quote.govtFeesSubtotal)}</span>
              </button>

              {isGovtFeesExpanded && (
                <div className="space-y-2.5 pt-1 text-xs text-slate-300">
                  {/* ROC fees */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">ROC fees</span>
                    <span className="flex-1 border-b border-dotted border-slate-700/80 mx-2 mb-1" />
                    <span className="font-semibold text-white">{formatRs(quote.rocFees + quote.govtIncorporationFee)}</span>
                  </div>

                  {/* Stamp Duty */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Stamp duty ({selectedState})</span>
                      <span className="flex-1 border-b border-dotted border-slate-700/80 mx-2 mb-1" />
                      <span className="font-semibold text-white">{formatRs(quote.stampDuty)}</span>
                    </div>
                    {/* Orange-bordered info box */}
                    <div className="mt-1 pl-2.5 py-1 border-l-2 border-[#ea580c] bg-[#1a2340]/70 rounded-r text-[10.5px] text-slate-300 leading-snug">
                      {isLLP
                        ? "LLP Agreement · Contribution ₹1 lakh – ₹5 lakh"
                        : "MOA + AOA (INC-33 / INC-34) · Authorised capital up to ₹1 lakh"}
                    </div>
                  </div>

                  {/* Director fees / Partner fees */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">{isLLP ? "Partner fees" : "Director fees"}</span>
                    <span className="flex-1 border-b border-dotted border-slate-700/80 mx-2 mb-1" />
                    <span className="font-semibold text-white">{formatRs(quote.directorFees)}</span>
                  </div>

                  {/* DSC */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">DSC ({numDsc} × ₹2,500)</span>
                    <span className="flex-1 border-b border-dotted border-slate-700/80 mx-2 mb-1" />
                    <span className="font-semibold text-white">{formatRs(quote.dscFees)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Professional Fees Box */}
            <div className="bg-[#1b2648] rounded-xl px-4 py-3 flex items-center justify-between text-xs sm:text-[13px] font-bold text-white shadow-xs">
              <span>Professional fees</span>
              <span className="font-bold text-white">{formatRs(quote.professionalFees)}</span>
            </div>

            {/* Proceed to Pay Button & Footer Note */}
            <div>
              <button
                type="button"
                onClick={handleProceedToPay}
                className="w-full py-3.5 px-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer text-center active:scale-98"
              >
                Proceed to Pay
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2.5 font-normal">
                Estimate only — final fees depend on MCA filing and state stamp rules.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
