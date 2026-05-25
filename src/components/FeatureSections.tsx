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

/* ============================================================
   FEATURE SECTION: START
   Layout: Left = document visual (like founding leals's contract preview)
           Right = icon + badge + heading + 3 feature bullets
   ============================================================ */
export function StartSection() {
  const ref = useReveal();

  return (
    <section
      id="start"
      ref={ref}
      className="py-20 lg:py-28 bg-cream border-t border-brown-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left    document visual (contract screenshot style) */}
          <div className="reveal-left">
            <div className="bg-cream-dark rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden relative aspect-14/10 sm:aspect-16/10 flex items-center justify-center">
                <video
                  src="/videos/start.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </div>

          {/* Right    features (founding leals style: icon + badge, heading, 3 bullet features) */}
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
              Born ready. From day one.
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Incorporation in 7 days
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Name, SPICe+, DIN, DSC, PAN and TAN     filed for you
                    with live status updates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Landmark className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Banking &amp; certifications, sorted
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Current account, Udyam (MSME) and DPIIT recognition
                        lined up without portal-hopping.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Receipt className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    GST set up, returns on autopilot
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    GSTIN registration plus monthly and quarterly returns
                        nudged a week ahead, never the night before.
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
    <section
      id="compliance"
      ref={ref}
      className="py-20 lg:py-28 bg-cream-light border-t border-brown-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left    features */}
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
              Compliance, quietly running in the background.
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    ROC, always on time
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    AOC-4, MGT-7, board resolutions, statutory registers
                        filed before the deadline, never after.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <CreditCard className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Invoices &amp; spend, neatly tracked
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    GST-ready invoices, payments tracked, monthly books
                    your CA can open without a single follow-up email.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Shield className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    One vault, always audit-ready
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Filings, agreements and resolutions in one folder.
                    When diligence calls, you share a link     not a
                    last-minute scramble.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right    interactive visual */}
          <div className="reveal-right">
            <div className="bg-cream-dark rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden relative aspect-14/10 sm:aspect-16/10 flex items-center justify-center">
                <video
                  src="/videos/governance.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute w-full h-auto left-0 top-0 scale-[1.03] origin-top -translate-y-[1%]"
                  style={{ backgroundColor: "white" }}
                />
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
    <section
      id="raise"
      ref={ref}
      className="py-20 lg:py-28 bg-cream border-t border-brown-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left    interactive visual */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="bg-cream-dark rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden relative aspect-14/10 sm:aspect-16/10 flex items-center justify-center">
                {/* Ready for Raise video */}
                <video
                  src="/videos/raise.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ backgroundColor: "white", userSelect: "none" }}
                />
              </div>
            </div>
          </div>

          {/* Right    features */}
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
              The yes from your investor shouldn&apos;t catch you off guard.
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    A data room that holds up
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Cap table, deck and key documents in one shareable
                    space     reusable round after round.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <BarChart3 className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Round paperwork in lockstep
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Term sheets, SHA, SSA, board approvals, share
                    allotments     one timeline, zero handover gaps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Scale className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Plain-English clause notes
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Every term sheet comes with footnotes from Indian
                    advocates     so you understand what you&apos;re signing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <FolderOpen className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900 mb-1.5">
                    Encrypted IP &amp; governance vault
                  </h3>
                  <p className="text-brown-500 text-[15px] sm:text-base leading-relaxed">
                    Trademarks, IP assignments and board records    
                    versioned, encrypted, ready when DD starts.
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
    <section
      id="raise"
      ref={ref}
      className="relative overflow-hidden border-t border-brown-100"
    >
      {/* Text left + Animated node visualization right */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left    text content */}
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-lime-bg" />
                </div>
                <span className="text-xs font-medium text-olive-700">
                  Intelligence
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-6">
                See what&apos;s next, long before it&apos;s due.
              </h2>
              <p className="text-base sm:text-lg text-brown-500 leading-relaxed mb-10 max-w-lg">
                Every filing, board meeting and certification on one
                timeline     with reminders calibrated to your team,
                not the portal.
              </p>
              <a
                href="https://app.foundinglegals.com/sign-up"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-olive-600 text-lime-bg font-medium rounded-full hover:bg-olive-800 transition-all text-base"
              >
                Start Free
              </a>
            </div>

            {/* Right    animated node tree (founding leals.ai style) */}
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
                <svg
                  className="node-tree-animate node-delay-3 absolute top-[175px] left-0 w-full h-[60px] pointer-events-none"
                  preserveAspectRatio="none"
                >
                  {/* Right branch line */}
                  <line
                    x1="50%"
                    y1="20"
                    x2="85%"
                    y2="55"
                    stroke="#d4c9a8"
                    strokeWidth="1.5"
                    className="lg:block hidden"
                  />
                  <line
                    x1="50%"
                    y1="20"
                    x2="75%"
                    y2="55"
                    stroke="#d4c9a8"
                    strokeWidth="1.5"
                    className="lg:hidden"
                  />
                </svg>

                {/* Tags row 1    right side */}
                <div className="node-tree-animate node-delay-4 absolute top-[240px] right-0 flex flex-wrap gap-3 justify-end max-w-[360px]">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Filing Type
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-olive-600 text-white">
                      ROC
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Due Date
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-dark border border-brown-200 text-brown-700">
                      Oct 30, 2025
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Category
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#e8d5e8] text-[#7a3d7a]">
                      Annual Return
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Risk Level
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-dark border border-brown-200 text-brown-600">
                      Low
                    </span>
                  </div>
                </div>

                {/* Tags row 2    right side lower */}
                <div className="node-tree-animate node-delay-5 absolute top-[310px] right-0 flex flex-wrap gap-3 justify-end max-w-[360px]">
                  {/* Small connector circle */}
                  <div className="absolute -top-3 right-[180px] w-2 h-2 rounded-full border border-brown-300 bg-cream hidden lg:block" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Jurisdiction
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#d4ebd4] text-[#2d6b2d]">
                      India, MCA
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Compliance Status
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#ffecd4] text-[#995500]">
                      On Track
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-brown-400 font-medium">
                      Auto-remind
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-dark border border-brown-200 text-brown-600">
                      Yes
                    </span>
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
