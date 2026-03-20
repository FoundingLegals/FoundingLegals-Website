"use client";

import {
  FileText,
  Building2,
  Landmark,
  Award,
  Receipt,
  Sparkles,
  CreditCard,
  BarChart3,
  ShieldCheck,
  FolderOpen,
  Presentation,
  Search,
  TrendingUp,
  Banknote,
  Scale,
  Zap,
  Shield,
  Plus,
} from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { HeroIllustration } from "./Illustrations";

/* ============================================================
   FEATURE SECTION: START
   Layout: Left = document visual (like ivo's contract preview)
           Right = icon + badge + heading + 3 feature bullets
   ============================================================ */
export function StartSection() {
  const ref = useReveal();

  return (
    <section id="start" ref={ref} className="py-24 lg:py-32 bg-cream border-t border-brown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — document visual (ivo's contract screenshot style) */}
          <div className="reveal-left">
            <div className="bg-cream-dark rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Simulated legal document */}
              <div className="bg-white rounded-2xl shadow-sm p-8 font-mono text-[11px] leading-[1.8] text-brown-500 uppercase tracking-wide max-h-[420px] overflow-hidden relative">
                <p className="mb-4">
                  <strong className="text-brown-800">1. NAME RESERVATION</strong>
                </p>
                <p className="mb-4">
                  THE PROPOSED NAME SHALL BE RESERVED VIA THE RUN
                  (RESERVE UNIQUE NAME) SERVICE OF THE MINISTRY OF
                  CORPORATE AFFAIRS. THE NAME SHALL COMPLY WITH
                  SECTION 4(2) OF THE COMPANIES ACT, 2013 AND RULE
                  8 OF THE COMPANIES (INCORPORATION) RULES, 2014.
                </p>
                <p className="mb-4">
                  <strong className="text-brown-800">2. INCORPORATION</strong>
                </p>
                <p className="mb-4">
                  THE COMPANY SHALL BE INCORPORATED VIA SPICE+ FORM
                  (SIMPLIFIED PROFORMA FOR INCORPORATING COMPANY
                  ELECTRONICALLY PLUS). THIS INTEGRATED FORM COVERS
                  NAME RESERVATION, INCORPORATION, DIN ALLOTMENT,
                  PAN & TAN APPLICATION, AND <span className="text-olive-600 underline decoration-olive-300">GSTIN REGISTRATION</span>.
                </p>
                <p className="mb-4">
                  <strong className="text-brown-800">3. AUTHORIZED CAPITAL</strong>
                </p>
                <p>
                  THE AUTHORIZED SHARE CAPITAL AS STATED IN THE
                  MEMORANDUM OF ASSOCIATION SHALL DETERMINE THE
                  STAMP DUTY PAYABLE TO THE STATE GOVERNMENT AND
                  THE FILING FEE PAYABLE TO THE{" "}
                  <span className="text-olive-600 line-through decoration-olive-300">REGISTRAR</span>{" "}
                  <span className="text-olive-600 underline decoration-olive-300">MCA PORTAL</span>.
                </p>
                {/* Fade out */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
          </div>

          {/* Right — features (ivo style: icon + badge, heading, 3 bullet features) */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-lime-bg" />
              </div>
              <span className="text-sm font-medium text-olive-700 bg-lime-bg px-3 py-1 rounded-full">
                Start
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-10">
              Everything you need to launch your company
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <FileText className="w-5 h-5 text-olive-600" />
                  <h3 className="font-semibold text-brown-900">
                    Name Registration & Company Incorporation
                  </h3>
                </div>
                <p className="text-brown-500 text-sm leading-relaxed pl-[30px]">
                  Reserve your company name via RUN and incorporate via SPICe+
                  with DIN, DSC, PAN, TAN, and COI — all in one integrated filing.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Landmark className="w-5 h-5 text-olive-600" />
                  <h3 className="font-semibold text-brown-900">
                    Bank Account Opening & Certifications
                  </h3>
                </div>
                <p className="text-brown-500 text-sm leading-relaxed pl-[30px]">
                  Open your company&apos;s current account with our banking partners and
                  obtain all required certifications including DPIIT, MSME, and IEC.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Receipt className="w-5 h-5 text-olive-600" />
                  <h3 className="font-semibold text-brown-900">
                    GST Filing & Taxation
                  </h3>
                </div>
                <p className="text-brown-500 text-sm leading-relaxed pl-[30px]">
                  GSTIN registration, monthly/quarterly returns, annual filing, and
                  complete income tax compliance — managed by our expert team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE SECTION: COMPLIANCE
   Layout: Left = features, Right = interactive visual
   (like ivo's Intelligence section)
   ============================================================ */
export function ComplianceSection() {
  const ref = useReveal();

  return (
    <section id="compliance" ref={ref} className="py-24 lg:py-32 bg-cream-light border-t border-brown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — features */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-lime-bg" />
              </div>
              <span className="text-sm font-medium text-olive-700 bg-lime-bg px-3 py-1 rounded-full">
                Compliance
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-10">
              Automated compliance insights at scale
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles className="w-5 h-5 text-olive-600" />
                  <h3 className="font-semibold text-brown-900">
                    Essential Startup Approach
                  </h3>
                </div>
                <p className="text-brown-500 text-sm leading-relaxed pl-[30px]">
                  A streamlined compliance framework designed specifically for startups —
                  covering ROC filings, board resolutions, and statutory registers.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <CreditCard className="w-5 h-5 text-olive-600" />
                  <h3 className="font-semibold text-brown-900">
                    Client Invoicing & Spend Analysis
                  </h3>
                </div>
                <p className="text-brown-500 text-sm leading-relaxed pl-[30px]">
                  Generate GST-compliant invoices and track your business spend with
                  category-wise breakdowns and compliance-ready reports.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <FolderOpen className="w-5 h-5 text-olive-600" />
                  <h3 className="font-semibold text-brown-900">
                    IP Protection & Document Management
                  </h3>
                </div>
                <p className="text-brown-500 text-sm leading-relaxed pl-[30px]">
                  Trademark registration, copyright filing, and a secure document vault
                  for all your incorporation certificates and compliance records.
                </p>
              </div>
            </div>
          </div>

          {/* Right — interactive visual (ivo's AI Field style) */}
          <div className="reveal-right">
            <div className="bg-cream-dark rounded-3xl p-10 relative">
              {/* Compliance dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-olive-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-lime-bg" />
                  </div>
                  <div>
                    <p className="text-xs text-brown-400">Compliance Status</p>
                    <p className="text-sm font-semibold text-brown-900">All filings up to date</p>
                  </div>
                  <div className="ml-auto w-3 h-3 rounded-full bg-olive-500" />
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "ROC Annual Return", status: "Filed", date: "Oct 30" },
                    { name: "GST R-3B (Monthly)", status: "Filed", date: "Nov 20" },
                    { name: "TDS Q3 Return", status: "Upcoming", date: "Jan 30" },
                    { name: "Board Meeting Minutes", status: "Draft", date: "Dec 15" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-cream-light"
                    >
                      <span className="text-sm text-brown-700">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-brown-400">{item.date}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            item.status === "Filed"
                              ? "bg-lime-bg text-olive-700"
                              : item.status === "Upcoming"
                              ? "bg-cream-dark text-brown-600"
                              : "bg-brown-100 text-brown-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card like ivo's "Create AI Field" */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center gap-3 cursor-pointer hover:shadow-md transition-shadow">
                <Plus className="w-6 h-6 text-brown-400" />
                <span className="text-base font-medium text-brown-700">
                  Add Compliance Task
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE SECTION: RAISE
   Layout: Full-width illustrated banner + text
   (like ivo's "Turn your agreements into strategic intelligence")
   ============================================================ */
export function RaiseSection() {
  const ref = useReveal();

  return (
    <section id="raise" ref={ref} className="relative overflow-hidden border-t border-brown-100">
      {/* Illustrated background — split layout like ivo */}
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left — illustration */}
        <div className="relative bg-olive-600 overflow-hidden reveal-scale">
          <HeroIllustration className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-olive-800/60 to-olive-600/40" />
        </div>

        {/* Right — olive visual with node graph (like ivo's relationship tree) */}
        <div className="bg-olive-600 relative overflow-hidden reveal-scale">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Node graph visualization */}
            <svg viewBox="0 0 400 300" className="w-full h-full max-w-md opacity-30">
              {/* Central node */}
              <rect x="150" y="120" width="100" height="60" rx="16" fill="white" fillOpacity="0.2" />
              <circle cx="200" cy="150" r="4" fill="white" fillOpacity="0.6" />

              {/* Branch lines */}
              <line x1="200" y1="120" x2="200" y2="60" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="250" y1="140" x2="340" y2="100" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="250" y1="160" x2="340" y2="200" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="150" y1="140" x2="60" y2="100" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="150" y1="160" x2="60" y2="220" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />

              {/* Outer nodes */}
              <circle cx="200" cy="50" r="20" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
              <circle cx="345" cy="95" r="16" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
              <circle cx="345" cy="205" r="16" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
              <circle cx="55" cy="95" r="16" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
              <circle cx="55" cy="225" r="16" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />

              {/* Labels */}
              <text x="200" y="155" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="8" fontFamily="Inter">FL</text>
            </svg>
          </div>

          {/* Floating label like ivo */}
          <div className="absolute bottom-12 right-12 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
            <span className="text-xs text-brown-500">Funding Stage</span>
            <span className="text-xs font-bold bg-orange-400 text-white px-2 py-0.5 rounded-full">
              Series A
            </span>
          </div>
        </div>
      </div>

      {/* Text content below — ivo style */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-lime-bg" />
              </div>
              <span className="text-xs font-medium text-olive-700">Raise</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 leading-[1.12] mb-6">
              Turn your startup into a fundable opportunity
            </h2>
            <p className="text-lg text-brown-500 leading-relaxed mb-10 max-w-lg">
              Our fundraising tools help you pitch to investors, manage rounds,
              and handle all legal documentation — from term sheets to SHA agreements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-olive-600 text-lime-bg font-medium rounded-full hover:bg-olive-800 transition-all text-base"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
