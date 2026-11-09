"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Headphones,
  ChevronDown,
  Check,
  ShieldCheck,
  FolderLock,
  Lock,
  FileText,
  Search,
  Eye,
  Download,
  Users,
  Coins,
  BarChart3,
  Sparkles,
  Layers,
  FileCheck2,
  Share2,
} from "lucide-react";
import { openFreeConsultation } from "@/lib/consultation";

export default function DocumentManagementLayout() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"vault" | "dataroom" | "mca">("vault");

  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com/").replace(/\/$/, "");

  const faqs = [
    {
      q: "What is Document Management in Founding Legals?",
      a: "Document Management is an encrypted founder vault specifically architected for Indian startups. It consolidates your incorporation certificates, board minutes, shareholder agreements, trademarks, and tax records into an organized, investor-ready repository.",
    },
    {
      q: "How secure is the document storage?",
      a: "All documents are encrypted at rest with 256-bit AES military-grade encryption and transmitted over TLS 1.3. Access is safeguarded by strict multi-tenant isolation, role-based permissions, and immutable audit logs.",
    },
    {
      q: "How does the Investor Data Room work?",
      a: "When raising capital or undergoing financial diligence, you can generate a secure, time-limited data room link with granular read-only permissions and watermark protection, preventing unapproved downloads or leaks.",
    },
    {
      q: "Is Document Management included in the Founder Plan?",
      a: "Yes! Full access to Document Management, along with Client Management, Team Management, Payroll, and Investor Directory, is completely bundled into the Founder Plan starting at ₹658/month with generous encrypted storage.",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1C1A17]">
      
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
                  DOCUMENT MANAGEMENT
                </span>
                <span className="text-[#8DA07B] font-light">·</span>
                <span className="text-[#597441] font-normal text-[11px] sm:text-[11.5px]">
                  Part of the Founding Legals Platform
                </span>
              </div>

              {/* Main Heading (Properly aligned into 3 balanced lines) */}
              <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold tracking-tight text-[#1C1A17] leading-[1.12] mb-5">
                Organize Legal Vault, <br />
                <span className="whitespace-nowrap">Agreements &amp; MCA Records</span> <br />
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
                Keep incorporation files, investor agreements, board minutes and compliance certificates organised — without the scattered folders.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={`${appUrl}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[14px] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Explore Document Management</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  type="button"
                  onClick={() => openFreeConsultation({ service: "Document Management", topic: "Corporate Legal Vault & Data Room Enquiry" })}
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
                  src="/document-management-hero-seamless.png"
                  alt="Founding Legals Document Management - Organize Legal Vault, Agreements & MCA Records in One Place"
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
          SECTION 1: PRODUCT EXPERIENCE (Every document. One view.)
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
                Every document. <br />
                One view.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5C5850] font-light leading-relaxed">
                See corporate filings, legal contracts and investor rooms together.
              </p>
            </div>

            {/* Right: Interactive Tabs & Mockup Table View */}
            <div className="lg:col-span-8">
              
              {/* Tab Selector Pills (Above Mockup) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("vault")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "vault"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <FolderLock className="w-3.5 h-3.5" />
                  <span>Corporate Vault</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("dataroom")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "dataroom"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Investor Data Room</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("mca")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                    activeTab === "mca"
                      ? "bg-[#384A1C] text-white border-[#384A1C] shadow-xs"
                      : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>MCA &amp; Tax Filings</span>
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
                          <FolderLock className="w-3.5 h-3.5 text-[#A8D377]" />
                          <span>Document Vault</span>
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
                          <span className="text-[13.5px] font-bold text-[#1C1A17]">Company Document Vault</span>
                          <span className="text-[10px] text-[#7A756C]">256-bit AES · 34 files indexed</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="px-2.5 py-1 bg-white border border-[#EAE5DC] rounded-md text-[10px] text-[#7A756C] flex items-center gap-1.5">
                            <Search className="w-3 h-3 text-[#A09B90]" />
                            <span>Search file, tag, date...</span>
                          </div>
                          
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#445626] text-white text-[10.5px] font-semibold"
                          >
                            <span>+ Upload Document</span>
                          </button>
                        </div>
                      </div>

                      {/* Tab 1: Corporate Vault Table */}
                      {activeTab === "vault" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Document Title</th>
                                <th className="py-2 px-2 font-medium">Category</th>
                                <th className="py-2 px-2 font-medium">Security</th>
                                <th className="py-2 px-2 font-medium">Last Modified</th>
                                <th className="py-2 px-3 font-medium text-right">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <FileText className="w-3.5 h-3.5 text-[#445626]" />
                                    <span>Certificate of Incorporation (COI)</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">MCA Statutory</td>
                                <td className="py-2.5 px-2 text-[#3D5A20] font-medium">Encrypted</td>
                                <td className="py-2.5 px-2 text-[#5C5850]">12 Oct 2026</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    ✓ Verified
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <FileText className="w-3.5 h-3.5 text-[#445626]" />
                                    <span>Memorandum &amp; Articles (MOA/AOA)</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">Governance</td>
                                <td className="py-2.5 px-2 text-[#3D5A20] font-medium">Encrypted</td>
                                <td className="py-2.5 px-2 text-[#5C5850]">14 Oct 2026</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    ✓ Executed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <FileText className="w-3.5 h-3.5 text-[#445626]" />
                                    <span>Founders' Agreement &amp; IP Assignment</span>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 text-[#5C5850]">Legal Agreements</td>
                                <td className="py-2.5 px-2 text-[#3D5A20] font-medium">Encrypted</td>
                                <td className="py-2.5 px-2 text-[#5C5850]">18 Oct 2026</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    ✓ 100% Signed
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Tab 2: Investor Data Room Table */}
                      {activeTab === "dataroom" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Data Room Package</th>
                                <th className="py-2 px-2.5 font-medium">Active Recipient</th>
                                <th className="py-2 px-2.5 font-medium">Permission Mode</th>
                                <th className="py-2 px-2.5 font-medium">Expires</th>
                                <th className="py-2 px-3 font-medium text-right">Access Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Seed Round Diligence Room</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Peak Ventures India</td>
                                <td className="py-2.5 px-2.5 text-[#3D5A20]">View-Only + Watermark</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">In 14 Days</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Active (3 Views)
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Angel Syndicate Room</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">5 Co-investors</td>
                                <td className="py-2.5 px-2.5 text-[#3D5A20]">View &amp; Feedback</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">In 7 Days</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Active (8 Views)
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Auditor Compliance Room</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Statutory Auditor Team</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Full Audit Access</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">In 30 Days</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#E5EEF9] text-[#245899] font-semibold text-[8.5px]">
                                    Verified Auditor
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Tab 3: MCA & Tax Records Table */}
                      {activeTab === "mca" && (
                        <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                                <th className="py-2 px-3 font-medium">Statutory Filing</th>
                                <th className="py-2 px-2.5 font-medium">SRN / Acknowledgement</th>
                                <th className="py-2 px-2.5 font-medium">Financial Year</th>
                                <th className="py-2 px-2.5 font-medium">Filing Authority</th>
                                <th className="py-2 px-3 font-medium text-right">Compliance</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F2EDE4]">
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">Form INC-20A (Commencement)</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">SRN #AA8491029</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">FY 2026-27</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">ROC Mumbai</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Approved
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">DPIIT Startup Recognition</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">DIPP #124891</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">Perpetual</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">Govt of India</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Active Benefit
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2.5 px-3 font-medium text-[#1C1A17]">GST Registration Certificate (REG-06)</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">ARN #AA27092601</td>
                                <td className="py-2.5 px-2.5 text-[#5C5850]">FY 2026-27</td>
                                <td className="py-2.5 px-2.5 font-semibold text-[#1C1A17]">CBIC GST Portal</td>
                                <td className="py-2.5 px-3 text-right">
                                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBF2E3] text-[#3D5A20] font-semibold text-[8.5px]">
                                    Active GSTIN
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
                From scattered drives <br />
                to structured diligence.
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
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Upload &amp; index</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Drag and drop corporate files with instant OCR text indexing.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  2
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <FolderLock className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Auto-tag taxonomy</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Automatically sort into MCA, Board, IP, Tax and HR vaults.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  3
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Set permissions</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Control granular access levels for co-founders, CAs and lawyers.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <div className="w-6 h-6 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-[11px] mb-3.5 shadow-2xs">
                  4
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#EAF2E2] text-[#445626] flex items-center justify-center mb-3">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">Share data room</h3>
                <p className="text-[12px] text-[#5C5850] font-light leading-relaxed">
                  Generate secure, watermarked diligence links for investors.
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
                Less lost paperwork. <br />
                More audit readiness.
              </h2>
            </div>

            {/* Right: 3 Value Columns */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 text-left">
              
              {/* Pillar 1 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Bank-grade 256-bit AES</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Rest easy knowing all company secrets and founder equity agreements are encrypted with enterprise security.
                </p>
              </div>

              {/* Pillar 2 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <Share2 className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Diligence in minutes</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Never spend two weeks compiling scattered PDFs when venture funds request your corporate records.
                </p>
              </div>

              {/* Pillar 3 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] text-[#445626] flex items-center justify-center mb-3.5 shadow-2xs">
                  <FileCheck2 className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1C1A17] mb-1.5">Statutory lifetime custody</h3>
                <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                  Retain permanent digital custody of Certificate of Incorporation, MOA, AOA, PAN, TAN and DSC records.
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
                        <span>Full access to Encrypted Document Management</span>
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
          SECTION 5: FAQS (Focused on Document Storage & Security)
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
                  Secure and organize your corporate records.
                </h2>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-14 bg-white/20" />

              {/* Middle Subtext */}
              <div className="text-left max-w-md">
                <p className="text-[13.5px] sm:text-[14.5px] text-white/80 font-light leading-relaxed">
                  Store corporate filings, manage investor data rooms and retain permanent statutory custody — the smart way with Founding Legals.
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

