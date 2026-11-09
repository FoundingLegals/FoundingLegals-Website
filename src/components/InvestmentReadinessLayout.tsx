"use client";

import React, { useState } from "react";
import { 
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  ShieldCheck,
  Sparkles,
  Headphones
} from "lucide-react";
import { talkToExpert } from "@/lib/appNavigation";

interface PlanFeature {
  text: string;
  isNew?: boolean;
  isInherited?: boolean;
}

interface Plan {
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: PlanFeature[];
}

interface Addon {
  id: string;
  name: string;
  price: string;
  description: string;
}

const APP_SIGNUP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com").replace(/\/$/, "") + "/sign-up";

export default function InvestmentReadinessLayout({ serviceSlug = "pitch-to-investors" }: { serviceSlug?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startupName: "",
    briefDescription: ""
  });

  const isFinance = serviceSlug === "finance-for-fundraising";
  const badgeText = isFinance ? "FINANCE FOR FUNDRAISING" : "PITCH TO INVESTORS";
  const heroTitle = isFinance
    ? "Make Your Financials & Valuation VC-Ready Before Diligence"
    : "Build a Pitch Deck That Gets Meetings & Closes Investment";
  const heroDescription = isFinance
    ? "Clear investor due diligence smoothly with IBBI-registered valuation reports, clean financial models, and full statutory compliance that keep your valuation intact."
    : "Turn your startup vision into an investor-ready deck. Battle-tested narrative structures, dynamic financial models, and slide design preferred by top angels and VC partners.";
  const heroImage = isFinance
    ? "/finance-for-fundraising-hero-seamless.png"
    : "/pitch-to-investors-hero-seamless.png";

  const trustCards = isFinance ? [
    { icon: <Award className="w-5 h-5" />, title: "IBBI Certified Reports", desc: "Mandatory valuation reports for domestic and FEMA foreign investment." },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Pre-DD Audit Complete", desc: "Identify and resolve hidden tax liabilities and revenue recognition gaps." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "SEBI & FEMA Aligned", desc: "Ensure your startup books withstand institutional partner scrutiny." }
  ] : [
    { icon: <Zap className="w-5 h-5" />, title: "VC-Grade Narrative", desc: "Engineered to keep investor attention within the critical 3-minute window." },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Dynamic Financial Models", desc: "Transparent unit economics and growth models to support your valuation." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Compliance Guardrails", desc: "Align documents with Indian ROC, MCA, and FEMA regulations." }
  ];

  const plans: Plan[] = [
    {
      name: "Launch",
      price: "₹6,999",
      description: "Perfect for first-time founders looking to present their startup professionally to investors, incubators, and accelerators. We create a clear, visually appealing, and investor-ready pitch deck tailored to your business idea. Ideal for founders who need a strong first version of their pitch deck to communicate their vision, business model, market opportunity, and growth potential effectively.",
      features: [
        { text: "Custom investor pitch deck.", isNew: true },
        { text: "Up to 2 revisions.", isNew: true },
        { text: "Professional & modern design.", isNew: true },
        { text: "Fully editable PPT & high-quality PDF.", isNew: true },
        { text: "Basic charts, icons & graphics.", isNew: true }
      ]
    },
    {
      name: "Investor Ready",
      price: "₹12,999",
      description: "Get a professionally designed investor-ready pitch deck with a financial model, advanced charts, animations, premium slide design, editable PPT & PDF files, and up to 5 revisions. Ideal for startups preparing for seed funding, angel investors, VC meetings, and accelerator applications.",
      features: [
        { text: "Everything in Launch.", isInherited: true },
        { text: "Premium Pitch Deck.", isNew: true },
        { text: "Premium slide design.", isNew: true },
        { text: "Dynamic financial model.", isNew: true },
        { text: "Advanced charts & animations.", isNew: true },
        { text: "Up to 5 revisions.", isNew: true }
      ]
    },
    {
      name: "Fundraising Accelerator",
      price: "₹18,999",
      badge: "Most Popular",
      description: "Get a complete investor fundraising package with a premium pitch deck, SWOT analysis, P&L projections, unlimited revisions, executive summary, investor outreach templates, LinkedIn messaging templates, and a fundraising guidance session. Ideal for startups preparing for seed funding, angel investors, venture capital meetings, and accelerator applications.",
      features: [
        { text: "Everything in Investor Ready.", isInherited: true },
        { text: "SWOT analysis & P&L projections.", isNew: true },
        { text: "Unlimited revisions.", isNew: true },
        { text: "One-page Executive Summary.", isNew: true },
        { text: "Investor email outreach templates.", isNew: true },
        { text: "LinkedIn messaging templates.", isNew: true },
        { text: "Fundraising guidance session.", isNew: true }
      ]
    },
    {
      name: "Capital Raise Complete",
      price: "₹24,999",
      badge: "Best Value",
      description: "Get a complete investor fundraising toolkit with a premium pitch deck, financial projections, SWOT analysis, investor outreach templates, a verified angel investor database, priority support, priority delivery, and a personalized investor readiness review or mock Q&A session. Ideal for startups preparing for seed funding, angel investors, venture capital meetings, and accelerator applications.",
      features: [
        { text: "Everything in Fundraising Accelerator.", isInherited: true },
        { text: "Complete investor fundraising toolkit.", isNew: true },
        { text: "Verified angel investor database.", isNew: true },
        { text: "Personalized readiness review / mock Q&A.", isNew: true },
        { text: "Priority support & priority delivery.", isNew: true }
      ]
    }
  ];

  const addons: Addon[] = [
    {
      id: "video-pitch",
      name: "Video Pitch",
      price: "₹15,000",
      description: "Create a compelling, professional video pitch to dynamically present your startup's vision, traction, and unique value proposition directly to top-tier venture capitalists and angel networks, complete with customized scripting, expert editing, and high-impact visual design."
    },
    {
      id: "financial-model",
      name: "Financial Model",
      price: "₹5,999",
      description: "Equip your startup with a dynamic, institutional-grade financial forecast including comprehensive 3-to-5-year profit & loss, cash flow projections, unit economics, and custom valuation models built to withstand intense investor due diligence."
    },
    {
      id: "angel-data",
      name: "Angel Investor Data",
      price: "₹7,000",
      description: "Gain direct access to a verified database of 3,000+ active global and regional angel investors, filtered by sector preference, historical ticket size, and contact channels, to significantly accelerate and streamline your fundraising cold outreach."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          service: "Investment Readiness & Fundraising",
          category: "Legal Services",
          company: formData.startupName,
          message: formData.briefDescription,
        }),
      });
    } catch (err) {
      console.warn("Investment readiness submission log:", err);
    } finally {
      setSubmitting(false);
      window.open(APP_SIGNUP_URL, "_blank", "noopener,noreferrer");
    }
  };

  const handleOptAndPay = (planName: string, type: "plan" | "addon" = "plan") => {
    const redirectUrl = `${APP_SIGNUP_URL}?${type}=${encodeURIComponent(planName)}`;
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#F6F4F0] font-sans text-[#2c2b29] pt-[100px] pb-24">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-[#E5E1D6] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-24 mb-16">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#E8EFE0]/60 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Heading, Badge, Subtitle, CTAs */}
            <div className="lg:col-span-7 text-left">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2E3] border border-[#D5E4C3] text-xs font-semibold text-[#486330] mb-5 sm:mb-6 shadow-2xs">
                <span className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-[10px] sm:text-[11px] text-[#3D5A20]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#486330]" />
                  {badgeText}
                </span>
                <span className="text-[#8DA07B] font-light">·</span>
                <span className="text-[#597441] font-normal text-[11px] sm:text-[11.5px]">
                  Part of the Founding Legals Platform
                </span>
              </div>

              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[52px] font-bold tracking-tight text-[#1C1A17] leading-[1.1] mb-5">
                {heroTitle}
              </h1>

              <p className="text-[15px] sm:text-[16.5px] text-[#5C5850] font-normal leading-relaxed mb-7 max-w-xl">
                {heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <a
                  href="#plans-section"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[14px] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Choose Your Plan (From ₹6,999)</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
                <button
                  type="button"
                  onClick={() => talkToExpert(isFinance ? "Finance for Fundraising" : "Pitch to Investors")}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 bg-white hover:bg-[#F5F2EA] text-[#1C1A17] font-semibold text-[13.5px] rounded-full border border-[#D8D3C8] transition-all duration-200 cursor-pointer shadow-2xs hover:border-[#BFB8AA]"
                >
                  <Headphones className="w-4 h-4 text-[#445626]" />
                  <span>Talk to an Expert</span>
                </button>
              </div>

              {/* 3 Trust Cards */}
              <div className="grid sm:grid-cols-3 gap-3.5 pt-3 border-t border-[#EAE5DC]">
                {trustCards.map(c => (
                  <div key={c.title} className="bg-white rounded-xl p-3.5 border border-[#E8E4DC] shadow-2xs">
                    <div className="text-[#445626] mb-1.5">{c.icon}</div>
                    <h3 className="font-bold text-[#1C1A17] text-[12.5px] mb-0.5">{c.title}</h3>
                    <p className="text-[11px] text-[#736F66] leading-snug">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Seamless Hero Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="absolute inset-0 bg-radial from-[#E2ECDB]/60 via-[#FAF8F5]/30 to-transparent blur-3xl pointer-events-none -z-10" />
              <img
                src={heroImage}
                alt={heroTitle}
                className="w-full h-auto max-w-[500px] object-contain mix-blend-multiply opacity-95 transition-opacity duration-300 drop-shadow-[0_12px_32px_rgba(40,60,25,0.06)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section id="plans-section" className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto mb-24 scroll-mt-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-[38px] font-serif font-medium text-[#2b2723] mb-3">Choose Your Plan</h2>
          <p className="text-[13px] text-[#9b958f] font-light max-w-lg mx-auto">
            Click <strong className="text-[#5A7338]">Opt &amp; Pay</strong> on any plan to register and complete payment in our secure application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map(pkg => {
            const isPopular = pkg.badge === "Most Popular";

            return (
              <div
                key={pkg.name}
                className={`group relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  pkg.badge === "Most Popular"
                    ? "bg-olive-600 text-white shadow-2xl shadow-olive-900/30 lg:-translate-y-3 ring-4 ring-olive-600/15"
                    : pkg.badge === "Best Value"
                    ? "bg-[#3d5a25] text-white shadow-xl shadow-olive-900/20"
                    : "bg-[#4a6830] text-white shadow-lg shadow-olive-900/15 hover:shadow-xl"
                }`}
              >
                {/* Background orbs clipped helper */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 -translate-y-16 transition-all duration-700 ease-out group-hover:scale-125 group-hover:bg-white/8" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-10 translate-y-10" />
                </div>

                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                      isPopular ? "bg-[#d4e8b0] text-olive-900" : "bg-white/90 text-[#2b2723]"
                    }`}>
                      {isPopular && <Sparkles className="w-3 h-3 text-olive-700" />}
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-[20px] font-serif font-bold text-white">{pkg.name}</h3>
                    <p className="text-[11.5px] text-olive-100 font-light mt-1 leading-relaxed">{pkg.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-5 border-b border-white/15">
                    <span className="text-[34px] font-bold text-white tracking-tight">{pkg.price}</span>
                    <span className="text-[11px] text-olive-200 font-light ml-1.5">one-time</span>
                  </div>

                  {/* Features – dots only */}
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        {feat.isInherited ? (
                          <>
                            <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                            <span className="text-[12px] text-olive-200 font-light leading-snug">{feat.text}</span>
                          </>
                        ) : (
                          <>
                            <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#d4e8b0] shrink-0" />
                            <span className="text-[12.5px] text-white font-semibold leading-snug">{feat.text}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Opt & Pay & Talk to Expert CTAs */}
                  <div className="mt-7 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => handleOptAndPay(pkg.name, "plan")}
                      className={`w-full py-3.5 rounded-xl text-[13px] font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn cursor-pointer ${
                        isPopular
                          ? "bg-[#d4e8b0] text-olive-900 hover:bg-white"
                          : "bg-white/15 text-white hover:bg-white hover:text-olive-800 border border-white/20"
                      }`}
                    >
                      <span>Opt &amp; Pay</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <button
                      type="button"
                      onClick={() => talkToExpert(`Investment Readiness — ${pkg.name}`)}
                      className="w-full py-2.5 rounded-xl text-[12px] font-semibold bg-black/20 hover:bg-black/30 text-white/90 border border-white/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Headphones className="w-3.5 h-3.5 text-[#d4e8b0]" />
                      <span>Talk to Expert</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#2b2723] mb-3">Standalone Add-ons</h2>
          <p className="text-[13px] text-[#9b958f] font-light max-w-md mx-auto">
            Enhance your round preparation with modular datasets, dynamic models, or investor video decks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {addons.map(addon => (
            <div
              key={addon.id}
              className="group relative p-6 rounded-2xl flex flex-col overflow-hidden bg-[#4a6830] text-white shadow-lg shadow-olive-900/15 hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative orb */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full translate-x-10 -translate-y-10 transition-all duration-700 group-hover:scale-125 group-hover:bg-white/8 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-white text-[18px] mb-2">{addon.name}</h3>
                <p className="text-[11.5px] text-olive-100 leading-relaxed font-light mb-5 flex-1">{addon.description}</p>
                <div className="border-t border-white/15 pt-4 flex items-center justify-between mb-4">
                  <span className="text-[22px] font-bold text-white">{addon.price}</span>
                  <span className="text-[10px] text-olive-200 font-light">one-time</span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleOptAndPay(addon.name, "addon")}
                    className="w-full py-3 rounded-xl text-[13px] font-bold bg-white/15 text-white hover:bg-white hover:text-olive-800 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Opt &amp; Pay</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    type="button"
                    onClick={() => talkToExpert(`Addon: ${addon.name}`)}
                    className="w-full py-2 rounded-xl text-[11px] font-semibold bg-black/20 hover:bg-black/30 text-white/80 border border-white/15 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Headphones className="w-3 h-3 text-[#d4e8b0]" />
                    <span>Talk to Expert</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[760px] mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8E4DC] shadow-[0_16px_48px_rgba(43,39,35,0.04)]">

          {/* Form heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-olive-600" />
              <span className="text-[10px] font-bold text-olive-700 uppercase tracking-widest">General Inquiry</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#2b2723] mb-2">
              Have questions? Talk to our team
            </h2>
            <p className="text-[13px] text-[#9b958f] font-light leading-relaxed">
              Not sure which plan fits best? Share your details and a fundraising expert will reach out within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-[#7a7470] uppercase tracking-wider mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E8E4DC] rounded-xl text-[13px] text-[#2b2723] placeholder-[#C0BDB8] focus:outline-none focus:border-[#5A7338] focus:ring-1 focus:ring-[#5A7338]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#7a7470] uppercase tracking-wider mb-1.5">Startup Name *</label>
                <input
                  type="text"
                  name="startupName"
                  required
                  value={formData.startupName}
                  onChange={handleInputChange}
                  placeholder="e.g. TechVentures Pvt Ltd"
                  className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E8E4DC] rounded-xl text-[13px] text-[#2b2723] placeholder-[#C0BDB8] focus:outline-none focus:border-[#5A7338] focus:ring-1 focus:ring-[#5A7338]/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-[#7a7470] uppercase tracking-wider mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. rahul@startup.com"
                  className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E8E4DC] rounded-xl text-[13px] text-[#2b2723] placeholder-[#C0BDB8] focus:outline-none focus:border-[#5A7338] focus:ring-1 focus:ring-[#5A7338]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#7a7470] uppercase tracking-wider mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E8E4DC] rounded-xl text-[13px] text-[#2b2723] placeholder-[#C0BDB8] focus:outline-none focus:border-[#5A7338] focus:ring-1 focus:ring-[#5A7338]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#7a7470] uppercase tracking-wider mb-1.5">Brief Business Description</label>
              <textarea
                name="briefDescription"
                rows={3}
                value={formData.briefDescription}
                onChange={handleInputChange}
                placeholder="Tell us in a few words what your startup does and what stage you're at..."
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E8E4DC] rounded-xl text-[13px] text-[#2b2723] placeholder-[#C0BDB8] focus:outline-none focus:border-[#5A7338] focus:ring-1 focus:ring-[#5A7338]/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#5A7338] hover:bg-[#4A5D2A] text-white font-bold text-[13px] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Proceed to Sign Up &amp; Payment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[10.5px] text-[#b0aa9f] text-center font-light">
              You'll be redirected to our secure application to complete sign-up and payment.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
