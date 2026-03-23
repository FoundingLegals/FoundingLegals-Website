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
   Layout: Left = document visual (like founding leals's contract preview)
           Right = icon + badge + heading + 3 feature bullets
   ============================================================ */
export function StartSection() {
  const ref = useReveal();

  return (
    <section id="start" ref={ref} className="py-20 lg:py-28 bg-cream border-t border-brown-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — document visual (founding leals's contract screenshot style) */}
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
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
              </div>
            </div>
          </div>

          {/* Right — features (founding leals style: icon + badge, heading, 3 bullet features) */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-lime-bg" />
              </div>
              <span className="text-sm font-medium text-olive-700 bg-lime-bg px-3 py-1 rounded-full">
                Start
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-10">
            Seamless Corporate Foundations
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Precision Incorporation
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Execute your Private Limited registration with absolute accuracy, from name reservation to final certification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Landmark className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Operational Excellence
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Accelerate your market entry with integrated banking, MSME certification, and regulatory readiness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Receipt className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Automated Tax Compliance
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Navigate the Indian tax landscape with automated GST filings and strategic financial reporting.
                  </p>
                </div>
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
   (like founding leals's Intelligence section)
   ============================================================ */
export function ComplianceSection() {
  const ref = useReveal();

  return (
    <section id="compliance" ref={ref} className="py-20 lg:py-28 bg-cream-light border-t border-brown-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

            <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-10">
              Governance Without Complexity
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Strategic ROC Oversight
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Maintain flawless corporate standing with automated ROC monitoring, board resolutions, and statutory compliance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <CreditCard className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Centralized Invoicing
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Deploy professional, GST-compliant financial operations with real-time visibility into corporate expenditures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <FolderOpen className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    IP and Document Vault
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Safeguard your intellectual property and manage critical corporate governance files in an encrypted, centralized vault.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — interactive visual (founding leals's AI Field style) */}
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
                      <div className="flex items-center gap-3 w-[140px] justify-end">
                        <span className="text-xs text-brown-400 w-14 text-right">{item.date}</span>
                        <span
                          className={`text-[10px] text-center font-bold px-2 py-0.5 rounded-full w-[64px] ${item.status === "Filed"
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

              {/* CTA card like founding leals's "Create AI Field" */}
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
   Layout: Left = features, Right = interactive visual
   (Replicating the successful Compliance layout)
   ============================================================ */
export function RaiseSection() {
  const ref = useReveal();

  return (
    <section id="raise" ref={ref} className="py-20 lg:py-28 bg-cream border-t border-brown-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — interactive visual (Requested left orientation) */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="bg-cream-dark rounded-3xl p-10 relative">
              {/* Equity dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-olive-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-lime-bg" />
                  </div>
                  <div>
                    <p className="text-xs text-brown-400">Fundraising Status</p>
                    <p className="text-sm font-semibold text-brown-900">Investment Ready</p>
                  </div>
                  <div className="ml-auto w-3 h-3 rounded-full bg-olive-500" />
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "Pitch Deck & Materials", status: "Prepared", detail: "100%" },
                    { name: "Investor Outreach", status: "Active", detail: "24 Contacted" },
                    { name: "Due Diligence Room", status: "Ready", detail: "Updated" },
                    { name: "Term Sheet Negotiations", status: "Ongoing", detail: "2 Drafts" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-cream-light"
                    >
                      <span className="text-sm text-brown-700">{item.name}</span>
                      <div className="flex items-center gap-3 w-[164px] justify-end">
                        <span className="text-xs text-brown-400 w-[84px] text-right">{item.detail}</span>
                        <span
                          className={`text-[10px] text-center font-bold px-2 py-0.5 rounded-full w-[68px] ${item.status === "Prepared" || item.status === "Active" || item.status === "Ready"
                            ? "bg-lime-bg text-olive-700"
                            : "bg-cream-dark text-brown-600"
                            }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center gap-3 cursor-pointer hover:shadow-md transition-shadow">
                <Plus className="w-6 h-6 text-brown-400" />
                <span className="text-base font-medium text-brown-700">
                  Issue New Shares
                </span>
              </div>
            </div>
          </div>

          {/* Right — features */}
          <div className="reveal-right order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-lime-bg" />
              </div>
              <span className="text-sm font-medium text-olive-700 bg-lime-bg px-3 py-1 rounded-full">
                Raise
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-10">
              Accelerate Funding Readiness
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Investor Intelligence
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Develop sophisticated pitch materials and identify strategic investment partners for your growth cycle.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <BarChart3 className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Structured Round Execution
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Streamline complex fundraising events with automated documentation and comprehensive due diligence infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Scale className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Expert Legal Advisory
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Engage with term sheets and investor agreements from a position of strength with expert legal and financial oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   FEATURE SECTION: INTELLIGENCE
   Layout: Text left / animated node tree right
   (Matching founding leals.ai's "Turn your agreements into strategic intelligence")
   ============================================================ */
export function IntelligenceSection() {
  const ref = useReveal();

  return (
    <section id="raise" ref={ref} className="relative overflow-hidden border-t border-brown-100">
      {/* Text left + Animated node visualization right */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — text content */}
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-lime-bg" />
                </div>
                <span className="text-xs font-medium text-olive-700">Intelligence</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-6">
                Strategic Regulatory Intelligence
              </h2>
              <p className="text-base sm:text-lg text-brown-500 leading-relaxed mb-10 max-w-lg">
                Transform complex regulatory requirements into strategic clarity. Our command center provides the real-time insights necessary to navigate the Indian legal landscape with confidence.
              </p>
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-olive-600 text-lime-bg font-medium rounded-full hover:bg-olive-800 transition-all text-base"
              >
                Request Demo
              </a>
            </div>

            {/* Right — animated node tree (founding leals.ai style) */}
            <div className="reveal-right">
              <div className="relative min-h-[420px]">
                {/* Document preview card at top */}
                <div className="node-tree-animate node-delay-1 absolute top-0 left-[calc(50%-2px)] lg:left-[35%] w-[200px]">
                  <div className="bg-cream-dark rounded-2xl border border-brown-200 p-5 h-[140px] overflow-hidden">
                    <div className="space-y-2">
                      <div className="h-2 bg-brown-200 rounded w-[75%]" />
                      <div className="h-2 bg-brown-200 rounded w-[90%]" />
                      <div className="h-1.5 bg-brown-100 rounded w-[60%]" />
                      <div className="h-1.5 bg-brown-100 rounded w-[80%]" />
                      <div className="h-1.5 bg-brown-100 rounded w-[45%]" />
                      <div className="h-2 bg-brown-200 rounded w-[70%]" />
                    </div>
                  </div>
                </div>

                {/* Central node icon */}
                <div className="node-tree-animate node-delay-2 absolute top-[155px] left-[calc(50%-2px)] lg:left-[35%] w-[200px] flex justify-center">
                  {/* Vertical connector line */}
                  <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-brown-200" />
                  <div className="w-12 h-12 rounded-xl bg-cream-dark border-2 border-brown-200 flex items-center justify-center">
                    <Presentation className="w-5 h-5 text-olive-600" />
                  </div>
                </div>

                {/* Branch lines from center node */}
                <svg className="node-tree-animate node-delay-3 absolute top-[175px] left-0 w-full h-[60px] pointer-events-none" preserveAspectRatio="none">
                  {/* Right branch line */}
                  <line x1="50%" y1="20" x2="85%" y2="55" stroke="#d4c9a8" strokeWidth="1.5" className="lg:block hidden" />
                  <line x1="50%" y1="20" x2="75%" y2="55" stroke="#d4c9a8" strokeWidth="1.5" className="lg:hidden" />
                </svg>

                {/* Tags row 1 — right side */}
                <div className="node-tree-animate node-delay-4 absolute top-[240px] right-0 flex flex-wrap gap-3 justify-end max-w-[360px]">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Filing Type</span>
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-olive-600 text-white">ROC</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Due Date</span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-dark border border-brown-200 text-brown-700">Oct 30, 2025</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Category</span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#e8d5e8] text-[#7a3d7a]">Annual Return</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Risk Level</span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-dark border border-brown-200 text-brown-600">Low</span>
                  </div>
                </div>

                {/* Tags row 2 — right side lower */}
                <div className="node-tree-animate node-delay-5 absolute top-[310px] right-0 flex flex-wrap gap-3 justify-end max-w-[360px]">
                  {/* Small connector circle */}
                  <div className="absolute -top-3 right-[180px] w-2 h-2 rounded-full border border-brown-300 bg-cream hidden lg:block" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Jurisdiction</span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#d4ebd4] text-[#2d6b2d]">India, MCA</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Compliance Status</span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#ffecd4] text-[#995500]">On Track</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">Auto-remind</span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-dark border border-brown-200 text-brown-600">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
