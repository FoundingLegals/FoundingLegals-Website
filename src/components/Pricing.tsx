"use client";

import { useState, useEffect, useRef } from "react";
import {
  Check,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
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
    ctaText: "Proceed with Pre-Seed",
    ctaSubtext: "",
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
    q: "Can I cancel or change my plan anytime?",
    a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard - no lock-ins, no surprise charges.",
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

  // Company Types Section & Plans Visibility State
  const companyTypesRef = useRef<HTMLDivElement>(null);
  const [hasBlasted, setHasBlasted] = useState(false);
  const [plansVisible, setPlansVisible] = useState(true);

  const triggerPaperBomb = () => {
    if (typeof window === "undefined") return;
    try {
      // 1. Dual side cannon burst
      confetti({
        particleCount: 85,
        angle: 60,
        spread: 80,
        origin: { x: 0.12, y: 0.62 },
        colors: ["#DDF08B", "#2C4A21", "#F5D061", "#FFFFFF", "#5C6F2D", "#FFA07A"],
        disableForReducedMotion: true,
        zIndex: 9999,
      });
      confetti({
        particleCount: 85,
        angle: 120,
        spread: 80,
        origin: { x: 0.88, y: 0.62 },
        colors: ["#DDF08B", "#2C4A21", "#F5D061", "#FFFFFF", "#5C6F2D", "#FFA07A"],
        disableForReducedMotion: true,
        zIndex: 9999,
      });

      // 2. High-energy center Paper Bomb explosion at +180ms
      setTimeout(() => {
        confetti({
          particleCount: 125,
          spread: 120,
          origin: { x: 0.5, y: 0.5 },
          colors: ["#FFD700", "#DDF08B", "#FFFFFF", "#2C4A21", "#FF6B6B", "#4ADE80"],
          scalar: 1.25,
          ticks: 280,
          zIndex: 9999,
        });
      }, 180);
    } catch (e) {
      console.warn("Confetti error", e);
    }
  };

  useEffect(() => {
    if (!companyTypesRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasBlasted) {
          setHasBlasted(true);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(companyTypesRef.current);
    return () => observer.disconnect();
  }, [hasBlasted]);

  return (
    <div ref={sectionRef} className="font-sans text-brown-900 bg-cream relative overflow-hidden">
      {/* - Hero Section - Clean 2-Column Layout (Image 3 Reference) - */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-cream relative overflow-hidden z-10">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#48532B]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Top 2-Column Hero: Headline & CTAs on Left, Realistic Showcase on Right */}
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

              {/* Grand Hero Headline matching Image 3 Reference */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#1A1917] leading-[1.08] tracking-[-0.025em] mb-4">
                Make it official.<br />
                Get{" "}
                <span className="text-[#2C4A21] relative inline-block font-normal">
                  incorporated
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

              {/* Price Line */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1A1917] font-serif tracking-tight">
                  In just <span className="text-[#2C4A21]">₹1,999</span>
                </span>
                <span className="text-sm sm:text-base font-semibold text-brown-600">
                  + Govt. Fee
                </span>
              </div>

              <p className="text-[15px] sm:text-[16.5px] text-[#55524D] leading-relaxed font-light mb-8 max-w-[500px]">
                Make your business ready to scale. Everything you need to go from idea to officially registered company with transparent pricing, verified legal contracts, e-sign, and dedicated CA support.
              </p>

              {/* Quick Action CTA */}
              <div className="flex items-center gap-3.5 mb-5">
                <a
                  href="#company-types"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#263C1B] hover:bg-[#1E3015] text-white text-[14px] font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Register your business</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Showcase Graphic */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl border border-brown-200/60 bg-white p-3 group">
                <img
                  src="/company-registration-hero.png"
                  alt="FoundingLegals Company Registration & Legal Suite"
                  className="w-full h-auto rounded-2xl object-cover block"
                />
              </div>
            </div>
          </div>

          {/* - Choose from the most popular company types (Reference from Razorpay Rize) - */}
          <div
            id="company-types"
            ref={companyTypesRef}
            className="pt-6 pb-12 scroll-mt-24 relative overflow-visible"
          >
            {/* Soft Celebratory Ambient Glow when blasted */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-[#DDF08B]/20 via-[#F5D061]/15 to-[#2C4A21]/10 blur-[130px] rounded-full pointer-events-none transition-opacity duration-1000 ${
                hasBlasted ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="text-center max-w-3xl mx-auto mb-11 relative z-10">
              {/* Category Badge */}
              <div className="flex items-center justify-center mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#48532B] bg-[#48532B]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#48532B]/20 shadow-xs">
                  Company Incorporation
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1A1917] tracking-tight leading-tight">
                Choose from the most popular{" "}
                <span className="text-[#3A501F] font-semibold italic relative inline-block">
                  company types
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2.5 text-[#5A7C42]/40 overflow-visible pointer-events-none"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5.5C45 2 110 2 198 5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-[14.5px] sm:text-[16px] text-brown-600 mt-2.5 font-light max-w-xl mx-auto">
                Flat MCA professional fee of ₹1,999 across all structures.
              </p>
            </div>

            {/* 3 Small Tiles Grid with Staggered Entrance */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 lg:gap-7 max-w-5xl mx-auto text-left pt-5 pb-2 relative z-10 items-stretch"
              initial="hidden"
              animate={plansVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.16 },
                },
              }}
            >
              {/* Tile 1: Private Limited Company (HIGHLIGHTED - MOST POPULAR FOR STARTUPS) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 22 },
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-gradient-to-b from-[#E7F5D3] via-[#DCF0C2] to-[#CEE8AE] rounded-[26px] p-6 sm:p-7 lg:p-7.5 border-[2.5px] border-[#5E8828] shadow-[0_16px_36px_-6px_rgba(35,58,15,0.20),0_0_0_1px_rgba(255,255,255,0.7)_inset] flex flex-col justify-between relative group transition-all duration-300 hover:shadow-[0_24px_48px_-6px_rgba(35,58,15,0.28)] h-full"
              >
                {/* Floating Highlight Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1B2F0B] text-[#E7F8C4] text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg border-2 border-[#D3F285] flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4F57E]" />
                  <span>Most Popular for Startups</span>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif text-[20px] sm:text-[21px] font-bold text-[#15260A] mt-1 mb-1.5 leading-snug min-h-[48px] flex items-center">
                    Private Limited Company (Pvt. Ltd.)
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-[34px] sm:text-[36px] font-black font-serif text-[#15260A] tracking-tight leading-none">
                      ₹1,999
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#3D5B1C] font-extrabold">
                      + Govt. Fee
                    </span>
                  </div>

                  {/* Divider line matching reference */}
                  <div className="border-t-2 border-[#5E8828]/25 my-4" />

                  <p className="text-[11px] font-black uppercase tracking-wider text-[#355716] mb-3">
                    Best Suited For
                  </p>
                  <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#1D300E] font-medium mb-6 flex-1">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#496F20] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Service-based businesses</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#496F20] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Businesses looking to issue shares</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#496F20] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Businesses seeking investment through equity-based funding</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="/services/CAservices/company-incorporation"
                  className="w-full py-3.5 px-4 bg-[#1B2F0B] hover:bg-[#122206] text-[#EDF9D6] font-extrabold text-[13px] sm:text-[14px] rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer group-hover:gap-2.5 mt-auto border-2 border-[#1B2F0B]"
                >
                  <span>Register Pvt. Ltd.</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Tile 2: Limited Liability Partnership (LLP) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 22 },
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-gradient-to-b from-[#F2F8ED] via-[#EAF4E3] to-[#DFEDD3] rounded-[26px] p-6 sm:p-7 lg:p-7.5 border-2 border-[#7DA44B] shadow-[0_12px_28px_-6px_rgba(35,58,15,0.12),0_0_0_1px_rgba(255,255,255,0.7)_inset] hover:shadow-[0_18px_38px_-6px_rgba(35,58,15,0.18)] hover:border-[#678F34] transition-all duration-300 flex flex-col justify-between relative group h-full"
              >
                {/* Floating Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#1B2F0B] text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md border-2 border-[#7DA44B] whitespace-nowrap">
                  Best for Professionals
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif text-[20px] sm:text-[21px] font-bold text-[#15260A] mt-1 mb-1.5 leading-snug min-h-[48px] flex items-center">
                    Limited Liability Partnership (LLP)
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-[34px] sm:text-[36px] font-black font-serif text-[#15260A] tracking-tight leading-none">
                      ₹1,999
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#466621] font-extrabold">
                      + Govt. Fee
                    </span>
                  </div>

                  {/* Divider line matching reference */}
                  <div className="border-t-2 border-[#7DA44B]/25 my-4" />

                  <p className="text-[11px] font-black uppercase tracking-wider text-[#355716] mb-3">
                    Best Suited For
                  </p>
                  <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#1D300E] font-medium mb-6 flex-1">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5E8828] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Professional services</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5E8828] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Firms seeking any capital contribution from Partners</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5E8828] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Firms sharing resources with limited liability</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="/services/CAservices/llp-registration"
                  className="w-full py-3.5 px-4 bg-white hover:bg-[#E8F3DA] text-[#1D320D] border-2 border-[#6B9337] font-extrabold text-[13px] sm:text-[14px] rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md active:scale-[0.99] cursor-pointer group-hover:gap-2.5 mt-auto"
                >
                  <span>Register LLP</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Tile 3: One Person Company (OPC) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 22 },
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-gradient-to-b from-[#F2F8ED] via-[#EAF4E3] to-[#DFEDD3] rounded-[26px] p-6 sm:p-7 lg:p-7.5 border-2 border-[#7DA44B] shadow-[0_12px_28px_-6px_rgba(35,58,15,0.12),0_0_0_1px_rgba(255,255,255,0.7)_inset] hover:shadow-[0_18px_38px_-6px_rgba(35,58,15,0.18)] hover:border-[#678F34] transition-all duration-300 flex flex-col justify-between relative group h-full"
              >
                {/* Floating Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#1B2F0B] text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md border-2 border-[#7DA44B] whitespace-nowrap">
                  Single Founder Setup
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif text-[20px] sm:text-[21px] font-bold text-[#15260A] mt-1 mb-1.5 leading-snug min-h-[48px] flex items-center">
                    One Person Company (OPC)
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-[34px] sm:text-[36px] font-black font-serif text-[#15260A] tracking-tight leading-none">
                      ₹1,999
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#466621] font-extrabold">
                      + Govt. Fee
                    </span>
                  </div>

                  {/* Divider line matching reference */}
                  <div className="border-t-2 border-[#7DA44B]/25 my-4" />

                  <p className="text-[11px] font-black uppercase tracking-wider text-[#355716] mb-3">
                    Best Suited For
                  </p>
                  <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#1D300E] font-medium mb-6 flex-1">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5E8828] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Freelancers, Small-scale businesses</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5E8828] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Businesses looking for minimal compliance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5E8828] mt-1.5 shrink-0 shadow-2xs"></span>
                      <span className="leading-snug">Businesses looking for single-ownership</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="/services/CAservices/opc-registration"
                  className="w-full py-3.5 px-4 bg-white hover:bg-[#E8F3DA] text-[#1D320D] border-2 border-[#6B9337] font-extrabold text-[13px] sm:text-[14px] rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md active:scale-[0.99] cursor-pointer group-hover:gap-2.5 mt-auto"
                >
                  <span>Register OPC</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* - What's Included? Section (Clean Typographic Text - No Background Cards) - */}
            <div className="mt-16 mb-8 max-w-5xl mx-auto px-4 sm:px-6">
              
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1917] tracking-tight">
                  What’s Included?
                </h3>
              </div>

              {/* 9 Core Incorporation Deliverables - Clean Written Text Alignment */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-4xl mx-auto text-left">
                {/* 1. Registration in 7-10 Business Days */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      Registration in 7–10 Business Days
                    </p>
                    <p className="text-[12.5px] text-brown-500 font-normal mt-0.5">
                      Excluding Government Approval time
                    </p>
                  </div>
                </div>

                {/* 2. Company PAN and TAN */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      Company PAN and TAN
                    </p>
                  </div>
                </div>

                {/* 3. Company Name Approval */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      Company Name Approval
                    </p>
                  </div>
                </div>

                {/* 4. MOA & AOA */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      MOA &amp; AOA
                    </p>
                  </div>
                </div>

                {/* 5. Incorporation Certificate */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      Incorporation Certificate
                    </p>
                  </div>
                </div>

                {/* 6. DSC Tokens */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      DSC Tokens
                    </p>
                  </div>
                </div>

                {/* 7. DSC Support & Shipping */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      DSC Support &amp; Shipping
                    </p>
                  </div>
                </div>

                {/* 8. Digital Signature Certificates */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      Digital Signature Certificates
                    </p>
                  </div>
                </div>

                {/* 9. Director's Identification Number (DIN) */}
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C4A21] shrink-0 mt-1 stroke-[2.5]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#1A1917] leading-snug">
                      Director’s Identification Number (DIN)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing toggle */}
          <div id="plans" className="mt-8 inline-flex items-center bg-cream-dark rounded-full p-1.5 border border-brown-200 shadow-inner scroll-mt-28">
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
              const isPreSeed = tier.id === "Basic" || tier.name.toLowerCase().includes("pre seed");

              const price =
                tier.monthly === null || tier.annual === null
                  ? null
                  : isPreSeed
                  ? annual
                    ? 658
                    : 789
                  : annual
                  ? tier.annual
                  : tier.monthly;

              const regularPrice =
                tier.monthlyRegular === null || tier.annualRegular === null
                  ? null
                  : isPreSeed
                  ? annual
                    ? 999
                    : 999
                  : annual
                  ? tier.annualRegular
                  : tier.monthlyRegular;

              const annualSaving =
                tier.monthly !== null && tier.annual !== null
                  ? isPreSeed
                    ? 789 * 12 - 7890
                    : tier.monthly * 12 - tier.annual
                  : 0;

              const unitText = isPreSeed
                ? "/mo + GST"
                : annual
                ? "/year + GST"
                : "/mo + GST";

              const subtextText =
                price === null
                  ? "Custom pricing tailored to your needs."
                  : isPreSeed
                  ? annual
                    ? `Billed annually at ₹7,890 - Save ₹${annualSaving.toLocaleString("en-IN")}/yr`
                    : `Billed monthly - Save ₹${(
                        tier.monthlyRegular! - tier.monthly!
                      ).toLocaleString("en-IN")}/mo vs standard`
                  : annual
                  ? `Billed annually at ₹${tier.annual!.toLocaleString(
                      "en-IN"
                    )} - Save ₹${annualSaving.toLocaleString("en-IN")}/yr`
                  : `Billed monthly - Save ₹${(
                      tier.monthlyRegular! - tier.monthly!
                    ).toLocaleString("en-IN")}/mo vs standard`;

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
                            {unitText}
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

                    {/* Highlighted Annual Total Badge for Pre Seed */}
                    {isPreSeed && annual ? (
                      <div className="mt-3 p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 font-medium flex items-center justify-between shadow-2xs">
                        <span className="text-[11px] font-bold text-amber-900">Annual Total:</span>
                        <span className="text-xs font-black text-amber-950 bg-amber-200/80 px-2.5 py-0.5 rounded-md border border-amber-300 shadow-2xs">
                          ₹7,890 / year + GST
                        </span>
                      </div>
                    ) : null}

                    <p
                      className={`text-xs mt-3 font-medium leading-relaxed ${
                        tier.highlight ? "text-olive-100" : "text-brown-500"
                      }`}
                    >
                      {subtextText}
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
              Verified legal contracts
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
