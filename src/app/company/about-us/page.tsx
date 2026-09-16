"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Building2,
  FileText,
  CalendarCheck2,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

// Real Community Moments from Gallery
const COMMUNITY_MOMENTS = [
  {
    title: "Founder Conversations",
    description: "Direct sessions understanding what founders find difficult, slow, or confusing.",
    image: "/Gallery_images/IMG_1450 (1).png",
  },
  {
    title: "Startup Summits",
    description: "Engaging with operators and emerging startups across the ecosystem.",
    image: "/Gallery_images/IMG_1331.png",
  },
  {
    title: "Campus Initiatives",
    description: "Introducing legal and business fundamentals to aspiring student entrepreneurs.",
    image: "/Gallery_images/IMG_2884.png",
  },
  {
    title: "Mentoring & Knowledge",
    description: "Sharing practical perspectives while learning from next-gen business builders.",
    image: "/Gallery_images/IMG_2888.png",
  },
];

// Platform Capabilities - Short, punchy, tangible
const PLATFORM_CAPABILITIES = [
  {
    title: "Incorporation & Setup",
    description: "Private Limited, LLP, OPC, PAN/TAN, and foundational charter documents.",
    icon: Building2,
    badge: "Day 1",
  },
  {
    title: "Agreements & Contracts",
    description: "Founder agreements, ESOP pools, NDAs, and commercial contracts.",
    icon: FileText,
    badge: "Contracts",
  },
  {
    title: "Compliance & Governance",
    description: "Annual ROC filings, director KYC, statutory registers, and deadline alerts.",
    icon: CalendarCheck2,
    badge: "Filings",
  },
  {
    title: "Intellectual Property",
    description: "Trademark search, brand registration, and proprietary asset protection.",
    icon: ShieldCheck,
    badge: "Protection",
  },
  {
    title: "Fundraising Readiness",
    description: "Cap tables, term sheets, SHA drafting, and diligence-ready corporate data.",
    icon: TrendingUp,
    badge: "Capital",
  },
  {
    title: "Business Services",
    description: "GST, MSME/Udyam certificates, state licenses, and legal advisory.",
    icon: Briefcase,
    badge: "Operations",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans text-[#2B2723] pt-[72px] sm:pt-[84px] overflow-x-hidden">
      <Header />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto pt-6 sm:pt-10 pb-10 md:pb-14">
        <div className="rounded-[32px] sm:rounded-[36px] overflow-hidden bg-[#5A6E3B] text-white shadow-[0_16px_40px_rgba(90,110,59,0.18)] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Text */}
          <div className="w-full lg:w-[56%] p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-[#E8F5A3] text-[11px] font-bold uppercase tracking-wider rounded-md mb-5 w-fit backdrop-blur-xs">
              About Founding Legals
            </div>

            <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-serif font-medium leading-[1.15] tracking-tight mb-4 text-white">
              Making the legal side of business easier to navigate.
            </h1>

            <p className="text-white/90 text-[15px] sm:text-[17px] leading-[1.7] font-light max-w-xl mb-6">
              Every business starts with a legal foundation. Founding Legals brings incorporation, agreements, compliance, and IP together into a single, technology-led platform  giving founders clarity without the administrative friction.
            </p>

            {/* Quick Proof Chips */}
            <div className="flex flex-wrap gap-2 text-[12px] text-white/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8F5A3]" /> Built for Indian Founders
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8F5A3]" /> 28 States Covered
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8F5A3]" /> Technology-Led
              </span>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="w-full lg:w-[44%] relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] self-stretch overflow-hidden bg-[#4A5D2A]">
            <img
              src="/Gallery_images/IMG_0726.png"
              alt="Founding Legals team at exhibition booth"
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE REALITY & WHY WE EXIST
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-8 md:py-12">
        <div className="bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#EDE6DE] shadow-xs flex flex-col lg:flex-row items-stretch">
          
          {/* Photo */}
          <div className="w-full lg:w-[44%] relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden bg-[#F5F0EB]">
            <img
              src="/Gallery_images/IMG_0740.png"
              alt="Founding Legals founder consulting with client"
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Narrative */}
          <div className="w-full lg:w-[56%] p-6 sm:p-9 lg:p-11 flex flex-col justify-center">
            <div className="inline-flex items-center px-2.5 py-0.5 bg-[#F5F0EB] text-[#5A6E3B] text-[11px] font-bold uppercase tracking-wider rounded-md mb-3 w-fit">
              Why Founding Legals
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-serif font-medium text-[#2B2723] leading-snug mb-4">
              Built around the realities of running a business.
            </h2>

            <p className="text-[15px] text-[#524B44] leading-[1.7] mb-4">
              Legal and compliance work in India is essential, yet notoriously fragmented. A contract sits in one folder, compliance dates on a calendar, and state-level stamp duties require chasing multiple professionals.
            </p>

            <p className="text-[15px] text-[#524B44] leading-[1.7] mb-5">
              Founding Legals unifies these services, documents, and workflows in one place.
            </p>

            {/* Punchline Card */}
            <div className="border-l-3 border-[#5A6E3B] bg-[#FAF9F6] pl-4 py-2.5 rounded-r-xl">
              <p className="text-[#2B2723] font-semibold text-[15px] sm:text-[16px]">
                The objective is not to add another layer of complexity. It is to remove it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ONE PLATFORM: Compact 6-Card Grid
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-8 md:py-12">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center px-2.5 py-0.5 bg-[#E6EDC6] text-[#425227] text-[11px] font-bold uppercase tracking-wider rounded-md mb-3">
            One Connected Platform
          </div>

          <h2 className="text-[28px] sm:text-[36px] font-serif font-medium text-[#2B2723] leading-tight mb-2">
            One Platform for the Legal Needs of a Business
          </h2>

          <p className="text-[15px] text-[#65605B]">
            From incorporation to scale — manage the legal foundation behind your operations in one place.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PLATFORM_CAPABILITIES.map((cap, idx) => {
            const IconComp = cap.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EDE6DE] shadow-xs hover:shadow-md hover:border-[#5A6E3B]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F0EB] text-[#5A6E3B] flex items-center justify-center group-hover:bg-[#5A6E3B] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A756F] bg-[#FAF9F6] px-2 py-0.5 rounded border border-[#EDE6DE]">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-serif font-medium text-[#2B2723] mb-1.5 group-hover:text-[#5A6E3B] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-[13px] sm:text-[14px] text-[#524B44] leading-[1.6]">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. COMMUNITY & JOURNEY (Photo Gallery)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-8 md:py-12">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center px-2.5 py-0.5 bg-[#F5F0EB] text-[#5A6E3B] text-[11px] font-bold uppercase tracking-wider rounded-md mb-3">
            Community & Listening
          </div>

          <h2 className="text-[28px] sm:text-[36px] font-serif font-medium text-[#2B2723] leading-tight mb-2">
            Close to the Businesses We Serve
          </h2>

          <p className="text-[15px] text-[#65605B]">
            Our product is shaped by hundreds of real conversations with founders, startup summits, and campus communities across India.
          </p>
        </div>

        {/* 4 Community Photos - 4:3 Aspect Ratio for Full Uncropped Framing */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {COMMUNITY_MOMENTS.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#EDE6DE] shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#F5F0EB]">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-start">
                <h3 className="text-[15px] font-serif font-medium text-[#2B2723] leading-snug mb-1.5">
                  {m.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-[#65605B] leading-[1.6]">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement Strip */}
        <div className="bg-[#E6EDC6]/60 rounded-2xl p-5 sm:p-6 border border-[#D4E157]/40 text-center max-w-3xl mx-auto">
          <p className="text-[15px] sm:text-[16px] text-[#3C481D] font-medium leading-relaxed">
            &ldquo;When the legal fundamentals are in order, businesses can spend more of their attention on what comes next.&rdquo;
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CALL TO ACTION & CAREERS
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-8 md:py-14 space-y-6">
        {/* Main CTA */}
        <div className="bg-[#5A6E3B] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 text-center shadow-[0_16px_40px_rgba(90,110,59,0.18)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[30px] sm:text-[40px] font-serif font-medium text-white mb-2 leading-tight">
              Your Business. Your Next Chapter.
            </h2>

            <p className="text-[18px] font-serif text-[#E8F5A3] font-normal mb-4">
              Let the legal side be the part you manage with clarity.
            </p>

            <p className="text-white/90 text-[14px] sm:text-[15px] leading-[1.7] font-light mb-7 max-w-lg mx-auto">
              Whether you are starting a company, managing an established business, or preparing for your next stage of growth, Founding Legals is your structured home for compliance and legal operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
              <Link
                href="/start"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 bg-white text-[#5A6E3B] text-[14px] font-bold rounded-xl hover:bg-[#E8F5A3] transition-all shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 bg-black/20 text-white text-[14px] font-bold rounded-xl hover:bg-black/30 transition-all border border-white/20"
              >
                <span>Talk to Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Careers Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EDE6DE] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="text-[16px] sm:text-[17px] font-serif font-medium text-[#2B2723] mb-1">
              Help shape the future of business legal technology.
            </h4>
            <p className="text-[13px] text-[#65605B]">
              We’re looking for thoughtful builders who want to make running a business simpler in India.
            </p>
          </div>

          <Link
            href="/company/careers"
            className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-[#5A6E3B] text-white text-[13px] font-bold rounded-xl hover:bg-[#4A5D2A] transition-all"
          >
            <span>Explore Careers</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
