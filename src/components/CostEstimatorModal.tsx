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

// Primary entity tabs shown in the cost estimator (Section 8 removed as requested)
const PRIMARY_ENTITIES: { id: EntityTypeId; label: string }[] = [
  { id: "pvt_ltd", label: "Private Company" },
  { id: "opc", label: "OPC" },
  { id: "llp", label: "LLP" },
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
  const [capitalInput, setCapitalInput] = useState<string>("1,00,000");

  // Accordion toggle for Government Fees
  const [isGovtFeesExpanded, setIsGovtFeesExpanded] = useState<boolean>(true);

  // Calculated quote state (Professional fee = ₹1,999)
  const [quote, setQuote] = useState<ItemizedQuote>(() =>
    calculateQuote({
      entityType: "pvt_ltd",
      state: "Karnataka",
      hasShareCapital: true,
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
      const incomingEntity = customEvent.detail?.entityType;
      const isPrimary = incomingEntity === "pvt_ltd" || incomingEntity === "opc" || incomingEntity === "llp";
      const targetEntity: EntityTypeId = isPrimary ? (incomingEntity as EntityTypeId) : "pvt_ltd";
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
      setCapitalInput(Number(capital).toLocaleString("en-IN"));
      setHasShareCapital(conf.hasShareCapitalOption ? "yes" : "no");

      const newQuote = calculateQuote({
        entityType: targetEntity,
        state: targetState,
        hasShareCapital: conf.hasShareCapitalOption,
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

  // Real-time calculation effect dynamically updated with authorized capital
  useEffect(() => {
    const isCap = hasShareCapital === "yes";
    const parsedCap = !isCap ? 0 : authorizedCapital;
    const newQuote = calculateQuote({
      entityType,
      state: selectedState,
      hasShareCapital: isCap,
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
      setCapitalInput(Number(conf.defaultCapital).toLocaleString("en-IN"));
      setHasShareCapital(conf.hasShareCapitalOption ? "yes" : "no");
    }
  };

  const handleSelectCapitalPreset = (val: number) => {
    setAuthorizedCapital(val);
    setCapitalInput(val.toLocaleString("en-IN"));
  };

  const handleCapitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setAuthorizedCapital(0);
      setCapitalInput("");
    } else {
      const num = Number(raw);
      setAuthorizedCapital(num);
      setCapitalInput(num.toLocaleString("en-IN"));
    }
  };

  const handleCapitalBlur = () => {
    if (authorizedCapital <= 0) {
      setAuthorizedCapital(100000);
      setCapitalInput("1,00,000");
    }
  };

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const isCap = hasShareCapital === "yes";
    const parsedCap = !isCap ? 0 : authorizedCapital;
    const newQuote = calculateQuote({
      entityType,
      state: selectedState,
      hasShareCapital: isCap,
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

  // Entity display badge
  const entityDisplayBadge = isLLP
    ? "LLP"
    : isOPC
    ? "OPC"
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
        className="relative w-full max-w-4xl bg-[#FDFCF9] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E5E1D6] p-6 sm:p-8 md:p-9 text-left font-sans max-h-[95vh] overflow-y-auto animate-dropdown"
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

        {/* ── HEADER (FOUNDING LEGALS WARM LUXURY THEME) ── */}
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
          <div className="md:col-span-7 bg-white rounded-2xl border border-brown-200/80 p-5 sm:p-6 shadow-xs space-y-4">
            <form onSubmit={handleCalculate} className="space-y-4">

              {/* Entity type tabs / pills (Section 8 removed) */}
              <div>
                <label className="block text-[11.5px] font-bold text-olive-900 mb-2">
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
                            ? "bg-[#3c481d] text-white shadow-xs"
                            : "bg-white hover:bg-olive-50 text-brown-700 border border-brown-200"
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
                  <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                    State of registered office
                  </label>
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#FAF9F6] border border-brown-200 hover:border-olive-600 focus:border-olive-600 focus:ring-2 focus:ring-olive-500/20 rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold transition-all cursor-pointer appearance-none pr-8"
                    >
                      {ALL_INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-brown-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* No. of directors / partners Stepper */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11.5px] font-bold text-olive-900">
                      {isLLP ? "No. of partners" : "No. of directors"}
                    </label>
                    <span className="text-[11px] text-brown-400">
                      min {minDirectors}
                    </span>
                  </div>
                  <div className="flex items-center border border-brown-200 rounded-xl bg-[#FAF9F6] overflow-hidden h-[42px]">
                    <button
                      type="button"
                      onClick={() => setNumDirectors((prev) => Math.max(minDirectors, prev - 1))}
                      disabled={numDirectors <= minDirectors}
                      className="w-10 h-full flex items-center justify-center text-brown-600 hover:text-brown-900 hover:bg-brown-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex-1 text-center font-bold text-xs sm:text-[13px] text-brown-900 select-none">
                      {numDirectors}
                    </div>
                    <button
                      type="button"
                      onClick={() => setNumDirectors((prev) => prev + 1)}
                      className="w-10 h-full flex items-center justify-center text-brown-600 hover:text-brown-900 hover:bg-brown-100 transition-colors cursor-pointer"
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
                    <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                      Entity subtype
                    </label>
                    <div className="w-full px-3 py-2.5 bg-[#FAF9F6] border border-brown-200 rounded-xl text-xs sm:text-[12.5px] text-brown-700 font-semibold select-none h-[42px] flex items-center truncate">
                      Limited Liability Partnership
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11.5px] font-bold text-olive-900 mb-1.5">
                      Share capital
                    </label>
                    <div className="flex bg-[#EDE6DE] p-1 rounded-xl h-[42px] items-center">
                      <button
                        type="button"
                        onClick={() => setHasShareCapital("yes")}
                        className={`flex-1 h-full rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          hasShareCapital === "yes"
                            ? "bg-white text-brown-900 shadow-xs"
                            : "text-brown-600 hover:text-brown-900"
                        }`}
                      >
                        Has capital
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasShareCapital("no")}
                        className={`flex-1 h-full rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          hasShareCapital === "no"
                            ? "bg-white text-brown-900 shadow-xs"
                            : "text-brown-600 hover:text-brown-900"
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
                    <label className="text-[11.5px] font-bold text-olive-900">
                      DSC required
                    </label>
                    <span className="text-[11px] text-brown-400">
                      ₹2,500 each
                    </span>
                  </div>
                  <div className="flex items-center border border-brown-200 rounded-xl bg-[#FAF9F6] overflow-hidden h-[42px]">
                    <button
                      type="button"
                      onClick={() => setNumDsc((prev) => Math.max(0, prev - 1))}
                      disabled={numDsc <= 0}
                      className="w-10 h-full flex items-center justify-center text-brown-600 hover:text-brown-900 hover:bg-brown-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex-1 text-center font-bold text-xs sm:text-[13px] text-brown-900 select-none">
                      {numDsc}
                    </div>
                    <button
                      type="button"
                      onClick={() => setNumDsc((prev) => prev + 1)}
                      className="w-10 h-full flex items-center justify-center text-brown-600 hover:text-brown-900 hover:bg-brown-100 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Authorized share capital / Capital contribution */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11.5px] font-bold text-olive-900">
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
                        onClick={() => handleSelectCapitalPreset(pill.value)}
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                          authorizedCapital === pill.value
                            ? "bg-[#5C6F2D] text-white font-bold shadow-xs"
                            : "bg-[#F5F0EB] text-brown-800 hover:bg-[#E6EDC6] border border-brown-200/80"
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-olive-700 select-none">
                    ₹
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    disabled={hasShareCapital === "no"}
                    value={hasShareCapital === "no" ? "0" : capitalInput}
                    onChange={handleCapitalChange}
                    onBlur={handleCapitalBlur}
                    placeholder="1,00,000"
                    className="w-full pl-8 pr-3.5 py-2.5 bg-[#FAF9F6] hover:bg-white border border-brown-200 hover:border-olive-600 focus:border-olive-600 focus:ring-2 focus:ring-olive-500/20 rounded-xl text-xs sm:text-[13px] text-brown-900 font-semibold transition-all disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
              </div>

              {/* Calculate Cost Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white font-bold text-sm rounded-xl shadow-md shadow-olive-900/15 transition-all cursor-pointer active:scale-98"
                >
                  Calculate Cost
                </button>
                <p className="text-[11px] text-brown-500 text-center mt-2 font-light">
                  {isLLP
                    ? `Stamp duty at published LLP Agreement rates for ${selectedState}.`
                    : `Stamp duty at published MOA and AOA rates for ${selectedState}.`}
                </p>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: Dark Card Summary (Founding Legals High-Contrast Luxury Theme) */}
          <div className="md:col-span-5 bg-[#131d2e] rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between space-y-4">

            {/* Top row: Total incorporation cost label + Entity & State badge */}
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-normal">Total incorporation cost</span>
                  <div className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight mt-1">
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
                <div style={{ width: `${govtPercent}%` }} className="bg-[#ea580c] h-full transition-all duration-300" />
                <div style={{ width: `${profPercent}%` }} className="bg-[#10b981] h-full transition-all duration-300" />
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
                    {/* Dynamic statutory stamp duty info box */}
                    <div className="mt-1 pl-2.5 py-1 border-l-2 border-[#ea580c] bg-[#1a2340]/70 rounded-r text-[10.5px] text-slate-300 leading-snug">
                      {quote.stampDutyDescription ||
                        (isLLP
                          ? "LLP Agreement · Contribution ₹1 lakh – ₹5 lakh"
                          : "MOA + AOA (INC-33 / INC-34) · Authorised capital up to ₹1 lakh")}
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

            {/* Professional Fees Box (Calibrated to ₹1,999) */}
            <div className="bg-[#1c2940] rounded-xl px-4 py-3 flex items-center justify-between text-xs sm:text-[13px] font-bold text-white shadow-xs">
              <span>Professional fees</span>
              <span className="font-bold text-white">{formatRs(quote.professionalFees)}</span>
            </div>

            {/* Proceed to Pay Button & Footer Note */}
            <div>
              <button
                type="button"
                onClick={handleProceedToPay}
                className="w-full py-3.5 px-4 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer text-center active:scale-98"
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
