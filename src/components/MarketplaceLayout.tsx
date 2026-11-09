"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Headphones,
  ChevronDown,
  Check,
  Tag,
  Zap,
  Gift,
  Cloud,
  Coins,
  Search,
  Sparkles,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  Briefcase,
  Laptop,
} from "lucide-react";
import { openFreeConsultation } from "@/lib/consultation";

export default function MarketplaceLayout() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"cloud" | "saas" | "services">("cloud");

  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com/").replace(/\/$/, "");

  const faqs = [
    {
      q: "What is the Startup Marketplace in Founding Legals?",
      a: "The Marketplace provides founders with over ₹15 Lakhs in exclusive perks, cloud credits (AWS, Google Cloud, Stripe), SaaS discounts, and pre-negotiated rates on vetted professional services like fractional CFOs and trademark attorneys.",
    },
    {
      q: "Are the cloud credits guaranteed for my startup?",
      a: "Yes. All Founding Legals members who have incorporated their entity and completed basic profile verification qualify for our standard partner packages on AWS Activate, Google Cloud for Startups, and Stripe fee waivers.",
    },
    {
      q: "How do I redeem a perk or discount code?",
      a: "Simply click 'Claim Deal' next to any partner offer inside your Founding Legals dashboard. You will receive an instant promo code, partner invite link, or priority onboarding route.",
    },
    {
      q: "Is Marketplace access included in the Founder Plan?",
      a: "Yes! Full access to claim all ₹15 Lakhs+ in startup perks and partner deals, along with Client Management, Team Management, Payroll, and Document Management, is completely bundled into the Founder Plan starting at ₹658/month.",
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
                  STARTUP MARKETPLACE
                </span>
                <span className="text-[#8DA07B] font-light">·</span>
                <span className="text-[#597441] font-normal text-[11px] sm:text-[11.5px]">
                  Part of the Founding Legals Platform
                </span>
              </div>

              {/* Main Heading (Properly aligned into 3 balanced lines) */}
              <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold tracking-tight text-[#1C1A17] leading-[1.12] mb-5">
                Unlock ₹15L+ in Perks, <br />
                <span className="whitespace-nowrap">Cloud Credits &amp; Tools</span> <br />
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
              <p className="text-[14px] sm:text-[15.5px] text-[#5C5850] font-normal leading-relaxed mb-7 max-w-lg">
                Access curated cloud credits, exclusive SaaS discounts, and vetted specialist services — all negotiated for Founding Legals founders.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={`${appUrl}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[14px] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Explore Marketplace</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  type="button"
                  onClick={() => openFreeConsultation({ service: "Marketplace", topic: "Startup Perks & Cloud Credits Consultation" })}
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
                  src="/marketplace-hero-seamless.png"
                  alt="Founding Legals Marketplace - Unlock ₹15L+ in Perks, Cloud Credits & Tools in One Place"
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
          SECTION 1: PRODUCT EXPERIENCE (Every founder perk. One view.)
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
                Every founder perk. <br />
                One view.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5C5850] font-light leading-relaxed">
                See cloud infrastructure credits, software savings and partner deals together.
              </p>
            </div>

            {/* Right: Interactive Tabs & Mockup Table View */}
            <div className="lg:col-span-8">
              
              {/* Tab Selector Pills (Above Mockup) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("cloud")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "cloud"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Cloud &amp; Infra Credits</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("saas")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "saas"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>SaaS &amp; Software Deals</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("services")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "services"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Vetted Advisory Services</span>
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
                          <Gift className="w-3.5 h-3.5 text-[#A8D377]" />
                          <span>Perks &amp; Marketplace</span>
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
                      {/* Top bar inside dashboard */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[13.5px] font-bold text-[#1C1A17]">Exclusive Founder Deals</span>
                          <span className="text-[10px] text-[#7A756C]">₹15,40,000+ total perks value</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="px-2.5 py-1 bg-white border border-[#EAE5DC] rounded-md text-[10px] text-[#7A756C] flex items-center gap-1.5">
                            <Search className="w-3 h-3 text-[#A09B90]" />
                            <span>Search perk, cloud, CRM...</span>
                          </div>
                          
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#445626] text-white text-[10.5px] font-semibold"
                          >
                            <span>Claim All Perks</span>
                          </button>
                        </div>
                      </div>

                      {/* Tab 1: Cloud & Infra Credits Table */}
                      {activeTab === "cloud" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Partner Provider</th>
                                <th className="py-2 px-2 font-medium">Credit Package</th>
                                <th className="py-2 px-2 font-medium">Preserved Value</th>
                                <th className="py-2 px-2 font-medium">Eligibility</th>
                                <th className="py-2 px-3 font-medium text-right">Redemption</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-[#FFE7D6] text-[#C2410C] font-bold text-[8px] flex items-center justify-center shrink-0">
                                      AW
                                    </span>
                                    <span>AWS Activate Founder</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">$5,000 Cloud Credits</td>
                                <td className="py-2.5 px-2 font-semibold text-[#1C1A17]">₹4,15,000</td>
                                <td className="py-2.5 px-2 text-[#3D5A20] font-medium">All Incorporated Startups</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    ✓ Instant Code
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-[#D5EAF7] text-[#1D5E8C] font-bold text-[8px] flex items-center justify-center shrink-0">
                                      GC
                                    </span>
                                    <span>Google Cloud for Startups</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">$2,000 Cloud Credits</td>
                                <td className="py-2.5 px-2 font-semibold text-[#1C1A17]">₹1,66,000</td>
                                <td className="py-2.5 px-2 text-[#3D5A20] font-medium">New GCP Accounts</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    ✓ Partner Link
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-[#E5D8F2] text-[#693B93] font-bold text-[8px] flex items-center justify-center shrink-0">
                                      ST
                                    </span>
                                    <span>Stripe Fee Waiver</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">₹15 Lakhs Fee-Free Volume</td>
                                <td className="py-2.5 px-2 font-semibold text-[#1C1A17]">₹30,000</td>
                                <td className="py-2.5 px-2 text-[#3D5A20] font-medium">Active Payment Gateway</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    ✓ Auto-Applied
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Tab 2: SaaS & Software Deals Table */}
                      {activeTab === "saas" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">SaaS Platform</th>
                                <th className="py-2 px-2.5 font-medium">Exclusive Perk</th>
                                <th className="py-2 px-2.5 font-medium">Discount Value</th>
                                <th className="py-2 px-2.5 font-medium">Duration</th>
                                <th className="py-2 px-3 font-medium text-right">Claim Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">HubSpot for Startups</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">75% Off CRM &amp; Marketing Suite</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹2,80,000 / yr</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">First 12 Months</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Active Voucher
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Notion Team Workspace</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">$1,000 Credit + Unlimited AI</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹83,000</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">6 Months Free</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Direct Credit
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Mixpanel Product Analytics</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">$50,000 Analytics Credits</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">₹4,15,000</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">1 Year Full Tier</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#E5EEF9] text-[#245899] font-semibold text-[8.5px]">
                                    Startup Tier
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Tab 3: Vetted Advisory Services Table */}
                      {activeTab === "services" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Specialist Engagement</th>
                                <th className="py-2 px-2.5 font-medium">Scope</th>
                                <th className="py-2 px-2.5 font-medium">Negotiated Founder Rate</th>
                                <th className="py-2 px-2.5 font-medium">Vetting</th>
                                <th className="py-2 px-3 font-medium text-right">Booking</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Fractional CFO Strategy</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Financial Models &amp; Pitch MIS</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">40% Member Discount</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Ex-Big 4 Partners</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Available
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Patent &amp; DeepTech IP Counsel</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Provisional &amp; Complete Patent</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">Fixed Founder Package</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Registered Patent Agents</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Direct Connect
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Growth Marketing &amp; SEO Audit</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">GTM Playbook &amp; Conversion</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">Complimentary 1-Hour Audit</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Verified Growth Leads</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    1 Slot Open
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
                From membership <br />
                to redeemed savings.
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
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Browse deals</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Explore pre-negotiated perks curated for early-stage teams.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  2
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">One-click claim</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Instant activation codes and priority onboarding links.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  3
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Deploy credits</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Apply discounts straight to your AWS, GCP and SaaS billing.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  4
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Track savings</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Monitor preserved treasury and extended startup runway.
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
                Less cash out of pocket. <br />
                More building power.
              </h2>
            </div>

            {/* Right: 3 Value Columns */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 text-left">
              
              {/* Pillar 1 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <Coins className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">₹15 Lakhs+ direct savings</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Preserve early founder capital by deploying pre-negotiated credits instead of paying retail rates.
                </p>
              </div>

              {/* Pillar 2 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Vetted partner reliability</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Every software deal and fractional expert in our directory is vetted for early-stage startup compatibility.
                </p>
              </div>

              {/* Pillar 3 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <Zap className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Instant activation</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Claim tools and credits straight from your dashboard without cumbersome broker calls or long qualification cycles.
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
                        <span>Full access to ₹15 Lakhs+ Perks &amp; Cloud Credits</span>
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
          SECTION 5: FAQS (Focused on Perks & Marketplace)
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
                  Supercharge your startup tech stack.
                </h2>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-14 bg-white/20" />

              {/* Middle Subtext */}
              <div className="text-left max-w-md">
                <p className="text-[13.5px] sm:text-[14.5px] text-white/80 font-light leading-relaxed">
                  Claim cloud infrastructure credits, save on essential software and connect with vetted startup advisors — the smart way with Founding Legals.
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

