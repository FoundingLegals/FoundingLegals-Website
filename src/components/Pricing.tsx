"use client";

import { useState } from "react";
import { Check, ChevronDown, Info, Shield, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const states: Record<string, number> = {
  Maharashtra: 1300,
  Karnataka: 600,
  Delhi: 1000,
  "Tamil Nadu": 800,
  Telangana: 700,
  "Uttar Pradesh": 500,
  Gujarat: 600,
  Rajasthan: 500,
  Kerala: 1000,
  "West Bengal": 800,
  "Madhya Pradesh": 500,
  Haryana: 700,
  Punjab: 600,
  Goa: 500,
  "Andhra Pradesh": 700,
};

const capitalSlabs = [
  { label: "₹1 Lakh", value: 100000, mcaFee: 500, run: 1000 },
  { label: "₹5 Lakh", value: 500000, mcaFee: 2000, run: 1000 },
  { label: "₹10 Lakh", value: 1000000, mcaFee: 2000, run: 1000 },
  { label: "₹25 Lakh", value: 2500000, mcaFee: 4000, run: 1000 },
  { label: "₹50 Lakh", value: 5000000, mcaFee: 5000, run: 1000 },
  { label: "₹1 Crore", value: 10000000, mcaFee: 5000, run: 1000 },
];

const addOns = [
  { id: "gst", name: "GST Registration", price: 1499 },
  { id: "iec", name: "IEC Registration", price: 1999 },
  { id: "trademark", name: "Trademark Filing", price: 2499 },
  { id: "startup", name: "Startup India (DPIIT)", price: 2999 },
  { id: "audit", name: "Auditor Appointment", price: 1499 },
];

const included = [
  "Name Approval (RUN/ReRUN)",
  "SPICe+ Incorporation",
  "DIN for 2 Directors",
  "DSC for 2 Directors",
  "PAN & TAN",
  "Certificate of Incorporation",
  "MoA & AoA Drafting",
  "Registered Office Filing",
];

const PROFESSIONAL_FEE = 4999;

export default function Pricing() {
  const [selectedState, setSelectedState] = useState("Maharashtra");
  const [selectedCapital, setSelectedCapital] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const sectionRef = useReveal();

  const stampDuty = states[selectedState] || 600;
  const capital = capitalSlabs[selectedCapital];
  const govtFees = stampDuty + capital.mcaFee + capital.run + 1500;
  const addOnTotal = addOns
    .filter((a) => selectedAddOns.includes(a.id))
    .reduce((s, a) => s + a.price, 0);
  const total = govtFees + PROFESSIONAL_FEE + addOnTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — founding leals style */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-bg rounded-full mb-6">
            <span className="text-sm font-medium text-olive-700">
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 mb-5">
            Transparent Startup Pricing
          </h2>
          <p className="text-lg text-brown-500 leading-relaxed">
            Government charges + our professional fee — split clearly so you
            know where every rupee goes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 reveal">
          {/* Calculator - Left */}
          <div className="lg:col-span-3 space-y-6">
            {/* State selector */}
            <div className="bg-cream rounded-2xl border border-brown-200 p-6">
              <label className="block text-sm font-semibold text-brown-900 mb-3">
                State of Incorporation
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsStateOpen(!isStateOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-cream-light border border-brown-200 rounded-xl text-left hover:border-brown-300 transition-colors"
                >
                  <span className="font-medium text-brown-900">
                    {selectedState}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brown-400 transition-transform ${isStateOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isStateOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-brown-200 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                    {Object.keys(states).map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedState(state);
                          setIsStateOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${state === selectedState
                            ? "bg-cream text-brown-900 font-semibold"
                            : "text-brown-600"
                          }`}
                      >
                        {state}
                        <span className="float-right text-brown-400">
                          ₹{states[state].toLocaleString("en-IN")} stamp duty
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Authorized Capital */}
            <div className="bg-cream rounded-2xl border border-brown-200 p-6">
              <label className="block text-sm font-semibold text-brown-900 mb-1">
                Authorized Capital
              </label>
              <p className="text-xs text-brown-400 mb-4">
                MCA incorporation fee varies by authorized capital
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {capitalSlabs.map((slab, idx) => (
                  <button
                    key={slab.label}
                    onClick={() => setSelectedCapital(idx)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${idx === selectedCapital
                        ? "bg-olive-600 text-lime-bg shadow-md"
                        : "bg-cream-light border border-brown-200 text-brown-600 hover:border-brown-300"
                      }`}
                  >
                    {slab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-Ons */}
            <div className="bg-cream rounded-2xl border border-brown-200 p-6">
              <label className="block text-sm font-semibold text-brown-900 mb-4">
                Optional Add-Ons
              </label>
              <div className="space-y-2">
                {addOns.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedAddOns.includes(addon.id)
                        ? "bg-lime-bg border-2 border-olive-600"
                        : "bg-cream-light border border-brown-200 hover:border-brown-300"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center ${selectedAddOns.includes(addon.id)
                            ? "bg-olive-600 text-white"
                            : "border border-brown-300"
                          }`}
                      >
                        {selectedAddOns.includes(addon.id) && (
                          <Check className="w-3 h-3" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-brown-900">
                        {addon.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-brown-600">
                      +₹{addon.price.toLocaleString("en-IN")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Card - Right — olive green like founding leals's visual panels */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-olive-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-lime-bg" />
                <h3 className="text-lg font-bold">Fee Breakdown</h3>
              </div>

              {/* Government Fees */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-olive-200">
                    Government Charges
                  </span>
                  <Info className="w-3.5 h-3.5 text-olive-300" />
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-olive-100">Name Reservation (RUN)</span>
                    <span className="font-medium">
                      ₹{capital.run.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-olive-100">
                      Stamp Duty ({selectedState})
                    </span>
                    <span className="font-medium">
                      ₹{stampDuty.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-olive-100">SPICe+ / MCA Fee</span>
                    <span className="font-medium">
                      ₹{capital.mcaFee.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-olive-100">DIN + DSC (2 Dir.)</span>
                    <span className="font-medium">₹1,500</span>
                  </div>
                </div>
                <div className="flex justify-between mt-3 pt-3 border-t border-white/20 text-sm font-semibold">
                  <span className="text-olive-100">Subtotal — Govt.</span>
                  <span>₹{govtFees.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Professional Fee */}
              <div className="mb-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-olive-200 mb-3">
                  Professional Charges
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-lime-bg font-medium">Our Service Fee</span>
                  <span className="font-semibold text-lime-bg">
                    ₹{PROFESSIONAL_FEE.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Add-ons */}
              {selectedAddOns.length > 0 && (
                <div className="mb-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-olive-200 mb-3">
                    Add-Ons
                  </div>
                  {addOns
                    .filter((a) => selectedAddOns.includes(a.id))
                    .map((addon) => (
                      <div
                        key={addon.id}
                        className="flex justify-between text-sm mb-1.5"
                      >
                        <span className="text-olive-100">{addon.name}</span>
                        <span className="font-medium">
                          ₹{addon.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  <div className="flex justify-between mt-2 pt-2 border-t border-white/20 text-sm font-semibold">
                    <span className="text-olive-100">Subtotal — Add-Ons</span>
                    <span>₹{addOnTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="pt-5 border-t border-white/20">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-xs text-olive-200 uppercase tracking-wider block mb-0.5">
                      Total Estimated
                    </span>
                    <span className="text-sm text-olive-100">
                      incl. all govt. fees
                    </span>
                  </div>
                  <span className="text-4xl font-bold text-white">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
                <a
                  href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-lime-bg text-olive-800 font-semibold rounded-full hover:bg-white transition-all"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-xs text-olive-200 mt-3">
                  Exact fees confirmed after document review
                </p>
              </div>

              {/* What's included */}
              <div className="mt-6 pt-5 border-t border-white/20">
                <p className="text-xs font-semibold text-olive-200 uppercase tracking-wider mb-3">
                  What&apos;s Included
                </p>
                <div className="space-y-2">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-olive-100">
                      <Check className="w-3.5 h-3.5 text-lime-bg shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
