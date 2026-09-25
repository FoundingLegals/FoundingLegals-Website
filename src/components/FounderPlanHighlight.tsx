"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Users, Gift, Lock } from "lucide-react";
import Link from "next/link";

interface FounderPlanHighlightProps {
  currentFeatureTitle?: string;
}

export default function FounderPlanHighlight({ currentFeatureTitle }: FounderPlanHighlightProps) {
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com/").replace(/\/$/, "");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF7F2] to-white border-y border-[#E5E0DA] relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#48532B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Tag */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48532B]/10 border border-[#48532B]/20 text-[#48532B] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>All-In-One Founder OS Platform</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A1917] mt-3 tracking-tight">
            Included in Founding Legals Platform Membership
          </h2>
          <p className="text-sm sm:text-base text-[#6B665F] max-w-2xl mx-auto mt-2 leading-relaxed">
            {currentFeatureTitle ? (
              <>
                <strong className="text-[#1A1917] font-semibold">{currentFeatureTitle}</strong> and every other essential startup tool are bundled into one unified plan for founders.
              </>
            ) : (
              "Get client management, payroll, hiring contracts, investor directory, and government grants in one seamless subscription."
            )}
          </p>
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-3xl border-2 border-[#48532B]/25 p-6 sm:p-10 shadow-[0_20px_50px_rgba(72,83,43,0.08)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(72,83,43,0.13)]">
          {/* Shimmer Border Top Banner */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#48532B] via-amber-500 to-[#48532B]" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Pricing & Offer Details */}
            <div className="lg:col-span-5 text-left space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#E5E0DA] pb-8 lg:pb-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#48532B] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <Zap className="w-3 h-3 text-amber-300" />
                <span>Pre-Seed Plan</span>
              </div>

              <div>
                <div className="text-xs font-semibold text-[#8C867A] uppercase tracking-wider">Founder Subscription</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-5xl sm:text-6xl font-serif font-bold text-[#1A1917] tracking-tight">₹658</span>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-[#6B665F] block">/month</span>
                    <span className="text-[11px] text-[#48532B] font-bold bg-[#EAECE4] px-1.5 py-0.5 rounded">Save 34%</span>
                  </div>
                </div>
                <div className="text-xs text-[#8C867A] mt-1">
                  Billed annually at <span className="line-through">₹9,468</span> <strong className="text-[#1A1917] font-semibold">₹7,890/year</strong>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#EAE5DE] space-y-1.5 text-xs text-[#55524D]">
                <div className="flex items-center gap-2 font-semibold text-[#1A1917]">
                  <Users className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Best for 1 to 5 person founding teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#48532B] shrink-0" />
                  <span>Includes 25 monthly workflow credits pool</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${appUrl}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#48532B] hover:bg-[#394222] text-white text-sm font-bold rounded-2xl transition-all shadow-md hover:shadow-lg hover:scale-[1.01] group cursor-pointer"
                >
                  <span>Get Started with Pre-Seed</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-[11.5px] text-center text-[#8C867A] mt-2.5 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#48532B]" />
                  <span>Instant access · No credit card required</span>
                </p>
              </div>
            </div>

            {/* Right Column: Platform Features Included */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1A1917]">
                  Everything You Get in the Pre-Seed Suite:
                </h3>
                <span className="text-[11px] font-bold text-[#48532B] bg-[#48532B]/10 px-2 py-0.5 rounded-full">
                  All 8 Products Included
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Client Management & CRM</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">GST-compliant invoicing & payment tracking</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Team Management & ESOPs</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">Role structures, headcount & equity vesting</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Automated Monthly Payroll</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">1-click payslips, TDS, PF & bank files</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Schemes & Govt Grants</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">DPIIT SISFS (₹50L), subsidies & eligibility</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">3,000+ Investor Directory</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">Verified Indian angel & VC funds filterable by sector</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Founder-to-Founder Marketplace</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">Exclusive startup partner deals, founder perks & expert services</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Real-Time Spend Analysis</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">Bank expense categorisation & burn rate dashboard</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#EAE5DE] hover:border-[#48532B]/30 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#48532B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#48532B] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A1917]">Document Vault & E-Signs</div>
                    <div className="text-[11px] text-[#6B665F] leading-snug mt-0.5">Encrypted legal repository & Aadhaar e-signatures</div>
                  </div>
                </div>

              </div>

              {/* Bottom Micro Banner */}
              <div className="pt-3 border-t border-[#EAE5DE] flex flex-wrap items-center justify-between text-xs text-[#6B665F] gap-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <Gift className="w-3.5 h-3.5 text-amber-600" />
                  Instant access on <span className="text-[#1A1917] font-semibold">app.foundinglegals.com</span>
                </span>
                <Link href="/pricing" className="text-[#48532B] font-bold hover:underline">
                  Compare all plans (Seed & Series A) →
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
