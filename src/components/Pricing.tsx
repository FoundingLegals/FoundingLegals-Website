"use client";

import { useState } from "react";
import { Check, Sparkles, ChevronDown, ShieldCheck, Building2, ArrowRight, Star, Zap, FileCheck, IndianRupee, Headphones, Gift } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

type Tier = {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  monthly: number | null;
  monthlyRegular: number | null;
  annual: number | null;
  annualRegular: number | null;
  highlight?: boolean;
  custom?: boolean;
  features: string[];
  ctaText: string;
  ctaSubtext: string;
  openInNewTab: boolean;
};

// Subscription tiers customized to Pre seed, Seed, Series A, and Enterprise
const TIERS: Tier[] = [
  {
    id: "Basic",
    name: "Pre seed",
    tagline: "Everything a small founding team needs to get the paperwork right.",
    bestFor: "1 to 5 person teams.",
    monthly: 789,
    monthlyRegular: 999,
    annual: 7890,
    annualRegular: 11988,
    ctaText: "Start 14-Day Free Trial",
    ctaSubtext: "14-day free trial - No credit card needed",
    openInNewTab: true,
    features: [
      "25 monthly credits pool",
      "Upto 5 team members",
      "Upto 5 agreement draftings monthly",
      "Upto 6 Aadhaar e-signs monthly",
      "Upto 8 invoices generated monthly",
      "Free hiring agreements & team management",
    ],
  },
  {
    id: "pro",
    name: "Seed",
    tagline: "For startups that have found product-market fit and are scaling the team.",
    bestFor: "1 to 10 person teams.",
    monthly: 1139,
    monthlyRegular: 1425,
    annual: 11390,
    annualRegular: 17100,
    highlight: true,
    ctaText: "Proceed with Seed",
    ctaSubtext: "",
    openInNewTab: true,
    features: [
      "50 monthly credits pool",
      "Upto 10 team members",
      "Upto 10 agreement draftings monthly",
      "Upto 12 Aadhaar e-signs monthly",
      "Upto 16 invoices generated monthly",
      "Free hiring agreements & team management",
    ],
  },
  {
    id: "essential",
    name: "Series A",
    tagline: "For growing startups preparing for Series A and beyond.",
    bestFor: "1 to 20 person teams.",
    monthly: 1499,
    monthlyRegular: 1875,
    annual: 14990,
    annualRegular: 22500,
    ctaText: "Proceed with Series-A",
    ctaSubtext: "",
    openInNewTab: true,
    features: [
      "100 monthly credits pool",
      "Upto 20 team members",
      "Upto 20 agreement draftings monthly",
      "Upto 25 Aadhaar e-signs monthly",
      "Upto 33 invoices generated monthly",
      "Free hiring agreements & team management",
    ],
  },
  {
    id: "custom",
    name: "Enterprise",
    tagline: "Tailored for larger teams with specific compliance, volume or integration needs.",
    bestFor: "Contact for custom solutions.",
    monthly: null,
    monthlyRegular: null,
    annual: null,
    annualRegular: null,
    custom: true,
    ctaText: "Contact Sales",
    ctaSubtext: "",
    openInNewTab: false,
    features: [
      "Custom monthly credits pool",
      "Unlimited team members",
      "Custom agreement draftings monthly",
      "Custom Aadhaar e-signs monthly",
      "Custom invoices generated monthly",
      "Free hiring agreements & team management",
    ],
  },
];

const FAQS = [
  {
    q: "What is the difference between Monthly and Annual Early Bird pricing?",
    a: "Our Monthly Plans carry a promotional 20% Early Bird discount that is active now. Our Annual Plans lock in a 33% Permanent Early Bird rate forever - your price will never increase as we ship new features, making annual billing the smartest long-term choice.",
  },
  {
    q: "What happens after the 14-day free trial?",
    a: "You move to the plan you selected at signup. We email you 3 days before the trial ends so you can upgrade, downgrade or cancel - no surprise charges.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, any time. Upgrades take effect immediately. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "What if I exceed my plan's monthly usage?",
    a: "Overages are handled transparently. If you need extra credits, you can easily top up your balance at any time for just ₹10 per credit, making it completely pay-as-you-go.",
  },
  {
    q: "Are these prices inclusive of GST?",
    a: "Prices are exclusive of 18% GST. GST is added on the final invoice and is fully claimable as input tax credit (ITC) by registered businesses.",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sectionRef = useReveal();

  return (
    <div ref={sectionRef} className="font-sans text-brown-900 bg-cream">
      {/* - Hero - */}
      {/* - Hero - */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-cream relative overflow-hidden">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#48532B]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Top 2-Column Hero: Headline & CTAs on Left, Realistic Office Mockup on Right */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-14">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Announcement Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-brown-200/80 shadow-xs mb-6 text-xs hover:border-brown-300 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#2F4A22] inline-block"></span>
                <span className="font-bold uppercase tracking-wider text-[#2F4A22]">
                  Founder Launch Special
                </span>
                <span className="text-brown-300 font-light">|</span>
                <span className="font-medium text-[#55524D]">
                  Complete MCA Approval &amp; Dedicated CA Support
                </span>
              </div>

              {/* Grand Hero Headline matching attached mockup */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-[#1A1917] leading-[1.08] tracking-[-0.025em] mb-6">
                Incorporate your<br />
                company for<br />
                <span className="text-[#2C4A21] relative inline-block font-normal">
                  ₹1,999 only.
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-3 text-[#5A7C42]/50 overflow-visible pointer-events-none"
                    viewBox="0 0 240 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M3 8.5C55 2.5 130 3 237 7.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-[15px] sm:text-[17px] text-[#55524D] leading-relaxed font-light mb-8 max-w-[500px]">
                Everything you need to go from idea to officially registered business — with transparent pricing, lawyer-reviewed templates, e-sign and dedicated CA support.
              </p>

              {/* Quick Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 mb-5">
                <a
                  href="#company-types"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#263C1B] hover:bg-[#1E3015] text-white text-[14px] font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Choose Entity Type</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#FAF9F6] text-[#1A1917] text-[14px] font-semibold rounded-full border border-brown-200/80 transition-all shadow-2xs hover:shadow-xs hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View Platform Plans ↓</span>
                </a>
              </div>

              {/* Sub-CTA Note */}
              <div className="flex items-center gap-2.5 text-xs text-[#6B665F] font-medium pt-1">
                <Gift className="w-4 h-4 text-[#263C1B]" />
                <span>14-day free trial</span>
                <span className="text-brown-300">|</span>
                <span>No hidden charges</span>
              </div>
            </div>

            {/* Right Realistic Laptop & Office Desk Showcase */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] rounded-3xl overflow-hidden shadow-2xl border border-brown-200/40 bg-white/40">
                <img
                  src="/pricing-hero-pro.png"
                  alt="FoundingLegals Company Registration Dashboard and Certificate"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Feature Strip (Matching User Reference) */}
          <div className="mt-8 pt-8 border-t border-brown-200/60 max-w-6xl mx-auto mb-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-brown-200/50">
              
              {/* 1. Fast Track */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#E3F4DE] text-[#2C4A21] flex items-center justify-center shrink-0 shadow-2xs">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#1A1917] leading-tight">Fast Track</p>
                  <p className="text-[11px] sm:text-xs text-brown-600 font-medium">7–10 Days MCA</p>
                </div>
              </div>

              {/* 2. Lawyer Reviewed */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#E3F4DE] text-[#2C4A21] flex items-center justify-center shrink-0 shadow-2xs">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#1A1917] leading-tight">Lawyer Reviewed</p>
                  <p className="text-[11px] sm:text-xs text-brown-600 font-medium">100% Compliant</p>
                </div>
              </div>

              {/* 3. Transparent Pricing */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#E3F4DE] text-[#2C4A21] flex items-center justify-center shrink-0 shadow-2xs">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#1A1917] leading-tight">Transparent Pricing</p>
                  <p className="text-[11px] sm:text-xs text-brown-600 font-medium">No Hidden Charges</p>
                </div>
              </div>

              {/* 4. Dedicated Support */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#E3F4DE] text-[#2C4A21] flex items-center justify-center shrink-0 shadow-2xs">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#1A1917] leading-tight">Dedicated Support</p>
                  <p className="text-[11px] sm:text-xs text-brown-600 font-medium">CA &amp; Legal Experts</p>
                </div>
              </div>

            </div>
          </div>

          {/* - Choose from the most popular company types (Reference from Razorpay Rize) - */}
          <div id="company-types" className="pt-4 pb-12 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#48532B] bg-[#48532B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#48532B]/20">
                Most Popular Company Types
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#1A1917] tracking-tight">
                Choose from the most popular <span className="text-[#48532B] font-semibold italic">company types</span>
              </h2>
              <p className="text-[14px] text-brown-600 mt-2 font-light max-w-xl mx-auto">
                Flat professional fee of ₹1,999 across all primary business registration structures. Includes complete legal documentation &amp; filing assistance.
              </p>
            </div>

            {/* 3 Small Tiles Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              
              {/* Tile 1: Private Limited Company */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#48532B] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">
                <div className="absolute -top-3 left-6 bg-[#48532B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Most Popular for Startups
                </div>

                <div>
                  <h3 className="font-serif text-[20px] font-bold text-[#1A1917] mt-1 mb-2">
                    Private Limited Company (Pvt. Ltd.)
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 mb-6 pb-4 border-b border-brown-100">
                    <span className="text-[32px] font-extrabold font-serif text-[#1A1917] tracking-tight">
                      ₹1,999
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      + Govt. Fee
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#7C766E] mb-3">
                    Best Suited For
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-brown-700 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Service-based businesses &amp; tech startups</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Businesses looking to issue equity shares &amp; ESOPs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Startups seeking investment through VC/Angel funding</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="/services/CAservices/company-incorporation"
                  className="w-full py-3 px-5 bg-[#48532B] hover:bg-[#394222] text-white font-bold text-xs sm:text-[13px] rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer"
                >
                  <span>Register Pvt. Ltd.</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Tile 2: Limited Liability Partnership */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brown-200/80 shadow-xs hover:shadow-xl hover:border-[#48532B]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">
                <div className="absolute -top-3 left-6 bg-olive-100 text-olive-800 border border-olive-200/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs">
                  Best for Professionals
                </div>

                <div>
                  <h3 className="font-serif text-[20px] font-bold text-[#1A1917] mt-1 mb-2">
                    Limited Liability Partnership (LLP)
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 mb-6 pb-4 border-b border-brown-100">
                    <span className="text-[32px] font-extrabold font-serif text-[#1A1917] tracking-tight">
                      ₹1,999
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      + Govt. Fee
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#7C766E] mb-3">
                    Best Suited For
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-brown-700 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Professional services &amp; consulting agencies</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Firms seeking flexible capital contribution from Partners</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Firms sharing resources with low statutory compliance</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="/services/CAservices/llp-registration"
                  className="w-full py-3 px-5 bg-white hover:bg-[#FAF9F6] text-[#1A1917] border border-brown-300 font-bold text-xs sm:text-[13px] rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                >
                  <span>Register LLP</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Tile 3: One Person Company */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brown-200/80 shadow-xs hover:shadow-xl hover:border-[#48532B]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">
                <div className="absolute -top-3 left-6 bg-brown-100 text-brown-800 border border-brown-200/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs">
                  Single Founder Setup
                </div>

                <div>
                  <h3 className="font-serif text-[20px] font-bold text-[#1A1917] mt-1 mb-2">
                    One Person Company (OPC)
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 mb-6 pb-4 border-b border-brown-100">
                    <span className="text-[32px] font-extrabold font-serif text-[#1A1917] tracking-tight">
                      ₹1,999
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      + Govt. Fee
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#7C766E] mb-3">
                    Best Suited For
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-brown-700 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Freelancers, solopreneurs &amp; small-scale businesses</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Businesses looking for corporate status with minimal compliance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48532B] mt-2 shrink-0"></span>
                      <span>Founders retaining 100% single-ownership &amp; limited liability</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="/services/CAservices/opc-registration"
                  className="w-full py-3 px-5 bg-white hover:bg-[#FAF9F6] text-[#1A1917] border border-brown-300 font-bold text-xs sm:text-[13px] rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                >
                  <span>Register OPC</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Proof Stats Ribbon (Reference from Razorpay Rize image 2: Made with ❤️ for founders) */}
            <div className="mt-12 pt-8 border-t border-brown-200/60 max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1917]">3,000+</p>
                <p className="text-xs text-brown-600 font-medium mt-0.5">Companies Registered</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-brown-200/70" />
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#48532B]">₹2.5 Cr+</p>
                <p className="text-xs text-brown-600 font-medium mt-0.5">Money Saved for Founders</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-brown-200/70" />
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1917] flex items-center justify-center gap-1">
                  4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                  <span className="text-xs font-normal text-gray-400">/ 5</span>
                </p>
                <p className="text-xs text-brown-600 font-medium mt-0.5">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Billing toggle */}
          <div id="plans" className="mt-4 inline-flex items-center bg-cream-dark rounded-full p-1.5 border border-brown-200 shadow-inner scroll-mt-28">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2.5 text-xs sm:text-[13px] font-bold rounded-full transition-all duration-200 ${
                !annual
                  ? "bg-olive-600 text-white shadow-sm"
                  : "text-brown-600 hover:text-brown-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2.5 text-xs sm:text-[13px] font-bold rounded-full transition-all duration-200 inline-flex items-center gap-2 ${
                annual
                  ? "bg-olive-600 text-white shadow-sm"
                  : "text-brown-600 hover:text-brown-900"
              }`}
            >
              Annual
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  annual ? "bg-lime-bg text-olive-800" : "bg-olive-600/10 text-olive-700"
                }`}
              >
                Save more
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* - Pricing cards - */}
      <section className="pb-20 lg:pb-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
            {TIERS.map((tier) => {
              const price =
                tier.monthly === null || tier.annual === null
                  ? null
                  : annual
                  ? tier.annual
                  : tier.monthly;

              const regularPrice =
                tier.monthlyRegular === null || tier.annualRegular === null
                  ? null
                  : annual
                  ? tier.annualRegular
                  : tier.monthlyRegular;

              const annualSaving =
                tier.monthly !== null && tier.annual !== null
                  ? tier.monthly * 12 - tier.annual
                  : 0;

              return (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                    tier.highlight
                      ? "bg-olive-600 text-white shadow-2xl shadow-olive-900/30 lg:-translate-y-3 ring-4 ring-olive-600/15"
                      : "bg-cream-light border border-brown-200 hover:border-brown-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-lime-bg text-olive-900 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        <Sparkles className="w-3 h-3 text-olive-700 animate-pulse" />
                        Most popular
                      </div>
                    </div>
                  )}

                  {/* Name + tagline */}
                  <div className="mb-6">
                    <h3
                      className={`font-serif text-2xl sm:text-3xl font-medium mb-2 ${
                        tier.highlight ? "text-white" : "text-brown-900"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        tier.highlight ? "text-olive-100" : "text-brown-500"
                      }`}
                    >
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {price === null ? (
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                            tier.highlight ? "text-white" : "text-brown-900"
                          }`}
                        >
                          Let&apos;s talk
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {/* Price row */}
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span
                            className={`text-5xl font-bold tracking-tight ${
                              tier.highlight ? "text-white" : "text-brown-900"
                            }`}
                          >
                            ₹{price.toLocaleString("en-IN")}
                          </span>
                          {regularPrice && (
                            <span
                              className={`text-base line-through font-medium opacity-50 ${
                                tier.highlight ? "text-olive-200" : "text-brown-400"
                              }`}
                            >
                              ₹{regularPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${
                              tier.highlight ? "text-olive-200" : "text-brown-400"
                            }`}
                          >
                            {annual ? "/year + GST" : "/mo + GST"}
                          </span>
                        </div>

                        {/* Early Bird badge */}
                        <div>
                          {annual ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-lime-bg text-olive-800 uppercase tracking-wider">
                              🐦 33% Permanent Early Bird
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wider">
                              ⚡ 20% Early Bird Active
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <p
                      className={`text-xs mt-3 font-medium leading-relaxed ${
                        tier.highlight ? "text-olive-100" : "text-brown-500"
                      }`}
                    >
                      {price === null
                        ? "Custom pricing tailored to your needs."
                        : annual
                        ? `Billed annually at ₹${tier.annual!.toLocaleString(
                            "en-IN"
                          )} - Save ₹${annualSaving.toLocaleString("en-IN")}/yr`
                        : `Billed monthly - Save ₹${(
                            tier.monthlyRegular! - tier.monthly!
                          ).toLocaleString("en-IN")}/mo vs standard`}
                    </p>
                    <p
                      className={`text-xs mt-2 italic ${
                        tier.highlight ? "text-olive-100" : "text-brown-500"
                      }`}
                    >
                      Best for: {tier.bestFor}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={
                      tier.custom ? "/contact" : "/start"
                    }
                    target={tier.openInNewTab ? "_blank" : undefined}
                    rel={tier.openInNewTab ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-[13.5px] font-bold tracking-wide transition-all duration-300 mb-2 ${
                      tier.highlight
                        ? "bg-lime-bg text-olive-900 hover:bg-white shadow-md"
                        : "bg-olive-600 text-white hover:bg-olive-700 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {tier.ctaText}
                  </a>

                  {/* CTA Subtext */}
                  <div className="h-5 flex items-center justify-center mb-5">
                    {tier.ctaSubtext ? (
                      <p
                        className={`text-[11px] font-medium text-center ${
                          tier.highlight ? "text-olive-200" : "text-brown-400"
                        }`}
                      >
                        {tier.ctaSubtext}
                      </p>
                    ) : null}
                  </div>

                  {/* Divider */}
                  <div
                    className={`border-t mb-6 ${
                      tier.highlight ? "border-white/15" : "border-brown-200"
                    }`}
                  />

                  {/* Features */}
                  <ul className="space-y-3 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 stroke-[3] ${
                            tier.highlight ? "text-lime-bg" : "text-olive-600"
                          }`}
                        />
                        <span
                          className={`text-[13px] leading-relaxed ${
                            tier.highlight ? "text-olive-50" : "text-brown-700"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Trust line */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-brown-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-olive-600" />
              Lawyer-reviewed templates
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-olive-600" />
              AES-256 encrypted vault
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-olive-600" />
              Aadhaar e-Sign approved
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-olive-600" />
              DPDP Act 2023 compliant
            </span>
          </div>
        </div>
      </section>

      {/* - Credit Limits Utility Section - */}
      <section className="py-20 bg-cream-light border-t border-brown-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-4">
              How Credits Are Charged
            </h2>
            <p className="text-base text-brown-500 leading-relaxed">
              Founding Legals utilizes simple, action-oriented credit metrics. Here is exactly how your credit limit is calculated per transaction.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-cream rounded-2xl border border-brown-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-cream-dark/60 text-[12px] font-semibold uppercase tracking-wider text-brown-700">
                    <th className="px-6 py-4">Action Type</th>
                    <th className="px-6 py-4 text-center">Credit Cost</th>
                    <th className="px-6 py-4 text-right">How It Works</th>
                  </tr>
                </thead>
                <tbody className="text-[13.5px] text-brown-600">
                  {[
                    ["Agreement Generation", "5 credits", "Per dynamic document draft successfully generated"],
                    ["e signature", "4 credits", "Per digital signature flow completely executed"],
                    ["Invoices", "3 credits", "Per standard or custom invoice created and sent"],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className={`${
                        i % 2 === 0 ? "bg-cream" : "bg-cream-light/60"
                      } border-t border-brown-100`}
                    >
                      <td className="px-6 py-4 font-semibold text-brown-900">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-olive-700">
                        {row[1]}
                      </td>
                      <td className="px-6 py-4 text-right text-brown-500">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top up extra credits description - warm, human, simple */}
          <div className="max-w-2xl mx-auto text-center mt-12 bg-cream/55 border border-brown-200/50 p-6 rounded-2xl">
            <p className="text-[15px] font-semibold text-brown-900 mb-2">
              Need more credits? We have got you covered!
            </p>
            <p className="text-[14px] text-brown-600 leading-relaxed">
              If you ever run low, you can top up extra credits at any time for just <span className="font-bold text-olive-700">₹10 per credit</span>. It is completely pay-as-you-go, which means you only pay for what you actually use - no monthly minimums, no setup fees, and absolutely no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* - FAQ - */}
      <section className="py-20 lg:py-24 bg-cream border-t border-brown-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-3">
              Pricing questions, answered.
            </h2>
            <p className="text-base text-brown-500">
              Still unsure?{" "}
              <a href="/contact" className="text-olive-700 font-medium hover:underline">
                Talk to us
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="bg-cream-light border border-brown-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold text-brown-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brown-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 text-[14px] text-brown-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
