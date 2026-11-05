"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Headphones,
  ChevronDown,
  Check,
  TrendingDown,
  TrendingUp,
  BarChart3,
  Search,
  PieChart,
  ShieldCheck,
  Zap,
  CreditCard,
  Coins,
  Layers,
  Sparkles,
  Users,
  AlertCircle,
  Clock,
} from "lucide-react";
import { openFreeConsultation } from "@/lib/consultation";

export default function SpendAnalysisLayout() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"expenses" | "runway" | "subscriptions">("expenses");

  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com/").replace(/\/$/, "");

  const faqs = [
    {
      q: "What is Spend Analysis in Founding Legals?",
      a: "Spend Analysis gives founders real-time visibility into their company burn rate, recurring software subscriptions, vendor outlays, and dynamic cash runway horizon without needing manual spreadsheets.",
    },
    {
      q: "How does Spend Analysis identify unused software subscriptions?",
      a: "The system automatically tracks recurring vendor transactions across payment cards and bank statements, flagging inactive licenses, duplicate tools, and upcoming annual renewals before charges process.",
    },
    {
      q: "Can I simulate different hiring and revenue scenarios for my runway?",
      a: "Yes. You can model how new team hires, upcoming customer payments, or shifting marketing budgets impact your zero-cash date, helping you time your next funding round accurately.",
    },
    {
      q: "Is Spend Analysis included in the Founder Plan?",
      a: "Yes! Complete access to Spend Analysis, along with Client Management, Team Management, Payroll, and Investor Directory, is fully bundled into the Founder Plan starting at ₹658/month with zero add-on fees.",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1C1A17] selection:bg-[#DCE7D0] selection:text-[#2A3B18]">
      
      {/* ══════════════════════════════════════════════════════════
          HERO SECTION (Matching Senior Executive Standard DITTO)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF8F5] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-22 overflow-hidden">
        {/* Soft atmospheric ambient gradient */}
        <div className="absolute top-0 right-1/4 w-[520px] h-[380px] bg-[#E8EFE0]/50 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Subtext & Action Buttons */}
            <div className="lg:col-span-7 text-left">
              
              {/* Category Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2E3] border border-[#D5E4C3] text-xs font-semibold text-[#486330] mb-5 sm:mb-6 shadow-2xs">
                <span className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-[10px] sm:text-[11px] text-[#3D5A20]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#486330]" />
                  SPEND ANALYSIS
                </span>
                <span className="text-[#8DA07B] font-light">·</span>
                <span className="text-[#597441] font-normal text-[11px] sm:text-[11.5px]">
                  Part of the Founding Legals Platform
                </span>
              </div>

              {/* Main Heading (Properly aligned into 3 balanced lines) */}
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[52px] font-bold tracking-tight text-[#1C1A17] leading-[1.1] mb-5">
                Track Startup Burn, <br />
                <span className="whitespace-nowrap">Runway &amp; Subscriptions</span> <br />
                <span className="relative inline-block text-[#3F5E24] italic font-normal mt-1">
                  in One Place
                  {/* Artistic green brush curve underline */}
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#597B2E] pointer-events-none overflow-visible"
                    viewBox="0 0 240 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 3 8 C 50 2, 140 2, 237 6 C 160 12, 70 11, 3 8 Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtitle / Tag Line */}
              <p className="text-[15px] sm:text-[16.5px] text-[#5C5850] font-normal leading-relaxed mb-7 max-w-xl">
                Keep expenses, vendor outlays, SaaS subscriptions and runway horizons clear — without the spreadsheet chaos.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={`${appUrl}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[14px] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Explore Spend Analysis</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  type="button"
                  onClick={() => openFreeConsultation({ service: "Spend Analysis", topic: "Startup Spend Analysis & Runway Enquiry" })}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 bg-white hover:bg-[#F5F2EA] text-[#1C1A17] font-semibold text-[13.5px] rounded-full border border-[#D8D3C8] transition-all duration-200 cursor-pointer shadow-2xs hover:border-[#BFB8AA]"
                >
                  <Headphones className="w-4 h-4 text-[#445626]" />
                  <span>Talk to an Expert</span>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Visual Graphic (Instant Visual Understanding) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
              {/* Soft atmospheric ambient glow behind the character */}
              <div className="absolute inset-0 bg-radial from-[#E2ECDB]/60 via-[#FAF8F5]/30 to-transparent blur-3xl pointer-events-none -z-10" />

              <div className="relative w-full max-w-[500px] select-none">
                <Image
                  src="/spend-analysis-hero-seamless.png"
                  alt="Founding Legals Spend Analysis - Track Startup Burn, Runway & Subscriptions in One Place"
                  width={1200}
                  height={896}
                  priority
                  className="w-full h-auto object-contain mix-blend-multiply opacity-90 transition-opacity duration-300 drop-shadow-[0_12px_32px_rgba(40,60,25,0.06)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: PRODUCT EXPERIENCE (Every rupee. One view.)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Product Experience Title & Intro */}
            <div className="lg:col-span-4 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#445626]">
                  PRODUCT EXPERIENCE
                </span>
                <span className="w-10 h-px bg-[#D5D0C5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1C1A17] leading-[1.12] mb-3">
                Every rupee. <br />
                One view.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5C5850] font-light leading-relaxed">
                See operational expenses, runway projections and SaaS tools together.
              </p>
            </div>

            {/* Right: Interactive Tabs & Mockup Table View */}
            <div className="lg:col-span-8">
              
              {/* Tab Selector Pills (Above Mockup) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("expenses")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "expenses"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <PieChart className="w-3.5 h-3.5" />
                  <span>Expense Breakdown</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("runway")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "runway"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Runway Horizon</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("subscriptions")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "subscriptions"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>SaaS &amp; Subscriptions</span>
                </button>
              </div>

              {/* Preview Window Card Frame */}
              <div className="bg-white rounded-2xl border border-[#DDD6CA] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="grid grid-cols-12 min-h-[300px]">
                  
                  {/* Dark Left Sidebar */}
                  <div className="col-span-3 bg-[#182A1B] text-white p-3.5 text-left hidden sm:flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Logo */}
                      <div className="flex items-center gap-2 pb-2.5 border-b border-white/10 text-[11px] font-bold">
                        <span className="w-4 h-4 rounded-full bg-[#82B350] text-[#182A1B] flex items-center justify-center text-[8.5px] font-black">
                          FL
                        </span>
                        <span className="tracking-tight text-white font-semibold">FoundingLegals</span>
                      </div>
                      {/* Menu */}
                      <div className="space-y-1 text-[11px]">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/50">
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>Dashboard</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/50">
                          <Users className="w-3.5 h-3.5" />
                          <span>Clients</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/50">
                          <Users className="w-3.5 h-3.5" />
                          <span>Team</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/50">
                          <Coins className="w-3.5 h-3.5" />
                          <span>Payroll</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-[#293F2B] text-white font-semibold">
                          <PieChart className="w-3.5 h-3.5 text-[#A8D377]" />
                          <span>Spend Analysis</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white/50">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Investors</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white/50">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Reports</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Pane */}
                  <div className="col-span-12 sm:col-span-9 p-4 bg-[#FAF9F6] text-left flex flex-col justify-between">
                    <div>
                      {/* Top metric highlights inside dashboard */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[13.5px] font-bold text-[#1C1A17]">Treasury Overview</span>
                          <span className="text-[10px] text-[#7A756C]">Oct 2026 · Real-time sync</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="px-2.5 py-1 bg-white border border-[#EAE5DC] rounded-md text-[10px] text-[#7A756C] flex items-center gap-1.5">
                            <Search className="w-3 h-3 text-[#A09B90]" />
                            <span>Filter vendor, category...</span>
                          </div>
                          
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#445626] text-white text-[10.5px] font-semibold"
                          >
                            <span>+ Add Expense</span>
                          </button>
                        </div>
                      </div>

                      {/* Summary Metrics Row */}
                      <div className="grid grid-cols-3 gap-2.5 mb-3">
                        <div className="p-2.5 rounded-lg bg-white border border-[#EAE5DC]">
                          <span className="text-[9.5px] text-[#7A756C] block uppercase font-medium">Monthly Burn</span>
                          <span className="text-[14px] font-bold text-[#1C1A17]">₹4,25,000</span>
                          <span className="text-[9px] text-[#3D5A20] font-medium block">↓ 8% vs last month</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#EAE5DC]">
                          <span className="text-[9.5px] text-[#7A756C] block uppercase font-medium">Cash Runway</span>
                          <span className="text-[14px] font-bold text-[#1C1A17]">18.4 Months</span>
                          <span className="text-[9px] text-[#3D5A20] font-medium block">Healthy horizon</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#EAE5DC]">
                          <span className="text-[9.5px] text-[#7A756C] block uppercase font-medium">Active Subscriptions</span>
                          <span className="text-[14px] font-bold text-[#1C1A17]">14 Tools</span>
                          <span className="text-[9px] text-[#A66D14] font-medium block">2 unused seats flagged</span>
                        </div>
                      </div>

                      {/* Tab 1: Expense Breakdown Table */}
                      {activeTab === "expenses" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Expense Category</th>
                                <th className="py-2 px-2 font-medium">Key Vendor</th>
                                <th className="py-2 px-2 font-medium">Monthly Outlay</th>
                                <th className="py-2 px-2 font-medium">Share</th>
                                <th className="py-2 px-3 font-medium text-right">Trend</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#445626]" />
                                    <span>Engineering &amp; Cloud</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">AWS Cloud &amp; GitHub</td>
                                <td className="py-2.5 px-2 font-semibold text-[#1C1A17]">₹1,85,000</td>
                                <td className="py-2.5 px-2 text-[#5C5850]">43.5%</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Stable
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#82B350]" />
                                    <span>Team &amp; Operations</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">WeWork Coworking</td>
                                <td className="py-2.5 px-2 font-semibold text-[#1C1A17]">₹1,20,000</td>
                                <td className="py-2.5 px-2 text-[#5C5850]">28.2%</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Budgeted
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#B89642]" />
                                    <span>SaaS &amp; Productivity</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">Google Suite, Slack, Figma</td>
                                <td className="py-2.5 px-2 font-semibold text-[#1C1A17]">₹48,500</td>
                                <td className="py-2.5 px-2 text-[#5C5850]">11.4%</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-[8.5px]">
                                    Audit Alert
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Tab 2: Runway Horizon Projection */}
                      {activeTab === "runway" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Planning Scenario</th>
                                <th className="py-2 px-2.5 font-medium">Net Monthly Burn</th>
                                <th className="py-2 px-2.5 font-medium">Current Cash</th>
                                <th className="py-2 px-2.5 font-medium">Zero-Cash Date</th>
                                <th className="py-2 px-3 font-medium text-right">Runway Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Current Baseline</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">₹4,25,000 / mo</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹78,20,000</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Apr 2028</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    18.4 Months
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">With 2 New Hires</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">₹5,60,000 / mo</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹78,20,000</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Dec 2027</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    13.9 Months
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Conservative Runway</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">₹3,80,000 / mo</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹78,20,000</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Jul 2028</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#E5EEF9] text-[#245899] font-semibold text-[8.5px]">
                                    20.5 Months
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Tab 3: SaaS & Subscriptions Table */}
                      {activeTab === "subscriptions" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">SaaS Tool</th>
                                <th className="py-2 px-2.5 font-medium">Billing Cycle</th>
                                <th className="py-2 px-2.5 font-medium">Assigned Seats</th>
                                <th className="py-2 px-2.5 font-medium">Monthly Cost</th>
                                <th className="py-2 px-3 font-medium text-right">Optimization</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Google Workspace Business</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Monthly</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">12 / 12 Active</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹14,400</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Fully Utilized
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Figma Professional</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Annual</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">4 / 6 Active (2 unused)</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹7,200</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-[8.5px]">
                                    Trim 2 Seats
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Notion Team Workspace</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Monthly</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">10 / 10 Active</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹8,200</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Optimized
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: HOW IT WORKS (4 Simple Horizontal Steps)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Title */}
            <div className="lg:col-span-4 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#445626]">
                  HOW IT WORKS
                </span>
                <span className="w-10 h-px bg-[#D5D0C5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1A17] leading-[1.12]">
                From bank feed <br />
                to extended runway.
              </h2>
            </div>

            {/* Right: 4 Horizontal Step Columns with Circled Numbers & Soft Green Icons */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-5 text-left">
              
              {/* Step 1 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  1
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Connect expenses</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Import bank feeds, corporate cards and vendor invoices in seconds.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  2
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <PieChart className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Auto-categorize</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Tag disbursements into R&amp;D, marketing, operations and SaaS licenses.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  3
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Detect waste</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Spot inactive software seats, overlapping tools and sudden price hikes.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  4
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Model runway</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Simulate hiring and cash inflows to predict your optimal funding window.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: WHY FOUNDERS CHOOSE (Clean 3 Pillars)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Title */}
            <div className="lg:col-span-4 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#445626]">
                  WHY FOUNDERS CHOOSE
                </span>
                <span className="w-10 h-px bg-[#D5D0C5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1A17] leading-[1.12]">
                Less spreadsheet chaos. <br />
                More runway momentum.
              </h2>
            </div>

            {/* Right: 3 Value Columns */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 text-left">
              
              {/* Pillar 1 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <Zap className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Eliminate SaaS waste</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Automatically flag redundant software seats and forgotten renewals that silently drain startup treasury.
                </p>
              </div>

              {/* Pillar 2 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <TrendingUp className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Predictable monthly burn</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Know your exact net cash burn and zero-cash horizon under real hiring and customer collection scenarios.
                </p>
              </div>

              {/* Pillar 3 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Investor-ready MIS records</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Export organized monthly operational reports formatted for angel syndicates, venture funds, and board audits.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: FOUNDER MEMBERSHIP (Single Unified Plan Card)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-4 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#445626]">
                  FOUNDER MEMBERSHIP
                </span>
                <span className="w-10 h-px bg-[#D5D0C5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1A17] leading-[1.12] mb-3">
                One plan. <br />
                Eight tools.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5C5850] font-light leading-relaxed">
                Your startup essentials, together.
              </p>
            </div>

            {/* Right: Clean Unified Card */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-[#DDD6CA] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.04)] text-left">
                
                {/* Card Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1A17] tracking-tight mb-5 pb-3 border-b border-[#F0ECE3]">
                  Founding Legals Founder Plan
                </h3>

                <div className="grid sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Left subcolumn: Price & Primary CTA */}
                  <div className="sm:col-span-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#7A756C] uppercase tracking-wider block mb-1">
                        PRICE STARTS FROM
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold font-serif text-[#1C1A17] tracking-tight">
                          ₹658
                        </span>
                        <span className="text-[12px] font-medium text-[#7A756C]">/month</span>
                      </div>
                      <div className="text-[11.5px] text-[#7A756C] mt-0.5">
                        ₹7,890/year
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={`${appUrl}/sign-up`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[13px] rounded-full transition-all duration-200 shadow-sm cursor-pointer"
                      >
                        <span>Opt for Founder Plan</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>

                  {/* Right subcolumn: Features & Secondary CTA */}
                  <div className="sm:col-span-7 space-y-3 sm:border-l sm:border-[#F0ECE3] sm:pl-6 text-[12.5px] text-[#3D3A34]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#445626] stroke-[2.5] shrink-0" />
                        <span>Full access to Spend Analysis &amp; Runway Projections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#445626] stroke-[2.5] shrink-0" />
                        <span>Complete 8-tool founder platform suite</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#445626] stroke-[2.5] shrink-0" />
                        <span>Collaborative workspace for up to 5 team members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#445626] stroke-[2.5] shrink-0" />
                        <span>Encrypted document storage &amp; data export</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openFreeConsultation({ service: "Founder Plan", topic: "Founder Plan Consultation" })}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-white hover:bg-[#FAF8F5] text-[#1C1A17] font-semibold text-[12.5px] rounded-full border border-[#D8D3C8] transition-all duration-200 cursor-pointer shadow-2xs"
                      >
                        <Headphones className="w-3.5 h-3.5 text-[#445626]" />
                        <span>Talk to an Expert</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: FAQS (Focused on Spend & Treasury)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left */}
            <div className="lg:col-span-4 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#445626]">
                  FAQS
                </span>
                <span className="w-10 h-px bg-[#D5D0C5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1A17] leading-[1.12] mb-3">
                Have questions?
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5C5850] font-light leading-relaxed">
                Quick answers to get you started.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-8 space-y-2.5 text-left">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-xl border border-[#DDD6CA] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-left cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                    >
                      <span className="text-[14px] font-semibold text-[#1C1A17] pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7A756C] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#445626]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-[13px] text-[#5C5850] leading-relaxed border-t border-[#F2EDE4] font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: BOTTOM CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="relative overflow-hidden bg-[#2D4022] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-md">
            
            {/* Soft decorative background curved wave */}
            <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#3B532C] opacity-50 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              
              {/* Left Title */}
              <div className="lg:max-w-xs text-left">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-[1.18] text-white">
                  Take control of your burn and runway.
                </h2>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-14 bg-white/20" />

              {/* Middle Subtext */}
              <div className="text-left max-w-md">
                <p className="text-[13.5px] sm:text-[14.5px] text-white/80 font-light leading-relaxed">
                  Track vendor disbursements, eliminate SaaS waste and model your cash runway horizon — the smart way with Founding Legals.
                </p>
              </div>

              {/* Right CTA Button */}
              <div className="shrink-0 text-left">
                <a
                  href={`${appUrl}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5F0D0] hover:bg-white text-[#2D4022] font-bold text-[13.5px] rounded-full transition-all duration-200 shadow-sm hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

