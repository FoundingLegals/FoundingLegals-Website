"use client";

import { useState } from "react";
import {
  Check,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Coins,
  ArrowRight,
  FileText,
  Mail,
  MessageSquare,
  Database,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   Pricing tiers - Sourced and updated from foundinglegals-website-brief.md
   Enhanced with Early Bird vs Regular structures.
   ────────────────────────────────────────────────────────────── */

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
};

const TIERS: Tier[] = [
  {
    id: "basic", // Kept as "basic" to maintain compatibility with signup page routing
    name: "Starter",
    tagline: "Everything a small founding team needs to get the paperwork right.",
    bestFor: "1–5 person teams, pre-seed or solo founders.",
    monthly: 799,
    monthlyRegular: 999, // +25% increase
    annual: 7990,
    annualRegular: 9990, // +25% increase
    features: [
      "Up to 5 team members",
      "Add & manage members with role permissions",
      "Agreement drafting from 25+ lawyer-reviewed templates",
      "E-signatures on every document",
      "Send invoices to clients & vendors",
      "15 e-signatures / month",
      "50 outbound document emails / month",
      "5 WhatsApp document deliveries / month",
      "2 GB secure document storage",
      "Compliance calendar with reminders",
      "Custom company branding (logo + colors) on docs",
      "Email support (24-hour response)",
    ],
  },
  {
    id: "pro", // Kept as "pro" to maintain compatibility with signup page routing
    name: "Growth",
    tagline: "For startups that have found product-market fit and are scaling the team.",
    bestFor: "6–25 person teams, seed-funded startups.",
    monthly: 1999,
    monthlyRegular: 2499, // +25% increase
    annual: 19990,
    annualRegular: 24990, // +25% increase
    highlight: true,
    features: [
      "Up to 25 team members",
      "Everything in Starter",
      "75 e-signatures / month",
      "200 outbound document emails / month",
      "25 WhatsApp document deliveries / month",
      "25 GB secure document storage",
      "1 lawyer review credit / month (3-mo rollover)",
      "Multi-team / sub-team organisation",
      "Custom document themes & designs",
      "Investor data room",
      "ESOP tracking and management",
      "WhatsApp support (same-day, business hours)",
    ],
  },
  {
    id: "essential", // Kept as "essential" to maintain compatibility with signup page routing
    name: "Scale",
    tagline: "For growing startups preparing for Series A and beyond.",
    bestFor: "25–50 person teams, Series A-ready companies.",
    monthly: 4999,
    monthlyRegular: 6249, // +25% increase
    annual: 49990,
    annualRegular: 62490, // +25% increase
    features: [
      "Unlimited team members",
      "Everything in Growth",
      "250 e-signatures / month",
      "500 outbound document emails / month",
      "100 WhatsApp document deliveries / month",
      "100 GB secure document storage",
      "3 lawyer review credits / month (3-mo rollover)",
      "API access for automated contract workflows",
      "Custom contract drafting (1 / quarter)",
      "Dedicated customer success manager",
      "Priority WhatsApp support (2-hr response, business hours)",
      "Quarterly compliance audit reports",
      "White-glove onboarding & setup session",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Tailored for larger teams with specific compliance, volume or integration needs.",
    bestFor: "50+ person teams, enterprises & funded scale-ups.",
    monthly: null,
    monthlyRegular: null,
    annual: null,
    annualRegular: null,
    custom: true,
    features: [
      "Unlimited team members",
      "Everything in Scale",
      "Custom e-sign, email & WhatsApp volumes",
      "Custom storage & data residency controls",
      "Unlimited lawyer review credits (on retainer)",
      "Bespoke contract drafting & negotiation",
      "SSO, SAML & advanced security role controls",
      "Custom API & workflow integrations",
      "Dedicated legal account manager",
      "24/7 priority support with active SLA",
      "Custom onboarding, training & templates setup",
    ],
  },
];

const FAQS = [
  {
    q: "What is the difference between Monthly and Annual Early Bird pricing?",
    a: "Our Monthly Plans have a promotional 25% Early Bird discount active right now. Our Annual Plans lock in a Permanent Early Bird discount (an extra 17% savings compared to monthly) forever, which means your pricing is locked-in and will never increase as we add new premium features.",
  },
  {
    q: "What happens after the 14-day free trial?",
    a: "You move to the plan you selected at signup. We email you 3 days before the trial ends so you can upgrade, downgrade or cancel - no surprise charges and no credit card needed to try.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, any time. Upgrades take effect immediately and are prorated. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "What if I exceed my plan's monthly usage?",
    a: "Overages are billed at the end of the month at clear per-unit rates (₹50 per extra e-signature, ₹0.50 per extra email, ₹1 per extra WhatsApp delivery, ₹999 per extra lawyer review credit). To save more, you can also pre-purchase bulk credit top-ups in advance at a discount.",
  },
  {
    q: "Are these prices inclusive of GST?",
    a: "Prices are exclusive of 18% GST. GST is added on the final invoice and is fully claimable as input tax credit (ITC) by registered businesses in India.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-cream font-sans text-brown-900">
      <Header />

      {/* ───── Hero ───── */}
      <section className="pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-bg rounded-full mb-6">
            <span className="text-sm font-semibold text-olive-800 tracking-wide uppercase">
              🐦 Early Bird Offer Active
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-brown-900 leading-[1.1] mb-6">
            Simple pricing. Built for Indian founders.
          </h1>
          <p className="text-base sm:text-lg text-brown-500 leading-relaxed max-w-2xl mx-auto">
            All plans include lawyer-reviewed templates, Aadhaar e-sign, team
            management and a 14-day free trial. No credit card required to
            start.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 inline-flex items-center bg-cream-dark rounded-full p-1.5 border border-brown-200 shadow-inner">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2.5 text-xs sm:text-[13px] font-bold rounded-full transition-all duration-200 ${
                !annual
                  ? "bg-olive-600 text-white shadow-sm"
                  : "text-brown-600 hover:text-brown-900"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2.5 text-xs sm:text-[13px] font-bold rounded-full transition-all duration-200 inline-flex items-center gap-2 ${
                annual
                  ? "bg-olive-600 text-white shadow-sm"
                  : "text-brown-600 hover:text-brown-900"
              }`}
            >
              Annual Plan
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  annual
                    ? "bg-lime-bg text-olive-800 shadow-sm"
                    : "bg-olive-600/10 text-olive-700"
                }`}
              >
                Save 17% Extra
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ───── Pricing cards ───── */}
      <section className="pb-20 lg:pb-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
            {TIERS.map((tier) => {
              const price =
                tier.monthly === null || tier.annual === null
                  ? null
                  : annual
                  ? Math.round(tier.annual / 12)
                  : tier.monthly;

              const displayRegularMonthlyPrice =
                tier.monthlyRegular === null || tier.annualRegular === null
                  ? null
                  : annual
                  ? Math.round(tier.annualRegular / 12)
                  : tier.monthlyRegular;

              const annualSavings =
                tier.monthly !== null && tier.annual !== null
                  ? tier.monthly * 12 - tier.annual
                  : 0;

              return (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-8 sm:p-9 flex flex-col transition-all duration-300 ${
                    tier.highlight
                      ? "bg-olive-600 text-white shadow-2xl shadow-olive-900/35 lg:-translate-y-3 ring-4 ring-olive-600/15"
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
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span
                            className={`text-5xl font-bold tracking-tight ${
                              tier.highlight ? "text-white" : "text-brown-900"
                            }`}
                          >
                            ₹{price.toLocaleString("en-IN")}
                          </span>
                          {displayRegularMonthlyPrice && (
                            <span
                              className={`text-lg line-through font-medium opacity-50 ${
                                tier.highlight ? "text-olive-200" : "text-brown-400"
                              }`}
                            >
                              ₹{displayRegularMonthlyPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${
                              tier.highlight ? "text-olive-200" : "text-brown-400"
                            }`}
                          >
                            /mo
                          </span>
                        </div>

                        {/* Early Bird Badges */}
                        <div className="flex items-center gap-1.5">
                          {annual ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-lime-bg text-olive-800 uppercase tracking-wider">
                              🐦 Permanent Early Bird
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wider">
                              ⚡ 25% Early Bird Active
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <p
                      className={`text-xs mt-3 font-medium leading-relaxed ${
                        tier.highlight ? "text-olive-150" : "text-brown-500"
                      }`}
                    >
                      {price === null
                        ? "Custom pricing tailored to your team's needs."
                        : annual
                        ? `Billed annually at ₹${tier.annual!.toLocaleString("en-IN")} · Save ₹${annualSavings.toLocaleString("en-IN")}/yr compared to regular monthly rate`
                        : `Billed monthly · Save ₹${(tier.monthlyRegular! - tier.monthly!).toLocaleString("en-IN")}/mo standard rate`}
                    </p>
                    <p
                      className={`text-xs mt-3.5 italic font-medium ${
                        tier.highlight ? "text-olive-100" : "text-brown-600"
                      }`}
                    >
                      Best for: {tier.bestFor}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={
                      tier.custom
                        ? "/contact"
                        : "https://app.foundinglegals.com/sign-up"
                    }
                    className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full text-[13.5px] font-bold tracking-wide transition-all duration-300 mb-7 ${
                      tier.highlight
                        ? "bg-lime-bg text-olive-900 hover:bg-white shadow-md"
                        : "bg-olive-600 text-white hover:bg-olive-700 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {tier.custom ? "Contact Sales" : "Start 14-Day Free Trial"}
                  </a>

                  {/* Divider */}
                  <div
                    className={`border-t mb-6 ${
                      tier.highlight ? "border-white/15" : "border-brown-200"
                    }`}
                  />

                  {/* Features */}
                  <ul className="space-y-3.5 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`shrink-0 mt-0.5 w-4.5 h-4.5 rounded-full flex items-center justify-center ${
                            tier.highlight
                              ? "bg-lime-bg/25"
                              : "bg-olive-600/10"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 stroke-[3.5] ${
                              tier.highlight ? "text-lime-bg" : "text-olive-700"
                            }`}
                          />
                        </span>
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

                  {/* Trial note */}
                  <p
                    className={`text-[10px] mt-8 text-center font-medium opacity-75 ${
                      tier.highlight ? "text-olive-200" : "text-brown-400"
                    }`}
                  >
                    Cancel anytime. No credit card needed.
                  </p>
                </div>
              );
            })}
          </div>

          {/* Trust line */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-brown-500 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-olive-600" />
              Lawyer-reviewed templates
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-olive-600" />
              AES-256 encrypted vault
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-olive-600" />
              Aadhaar e-Sign approved
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-olive-600" />
              DPDP Act 2023 compliant
            </span>
          </div>
        </div>
      </section>

      {/* ───── Interactive Bulk Credit Top-up Store ───── */}
      <section className="py-20 bg-cream-light border-t border-brown-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-olive-600/10 rounded-full mb-4">
              <Coins className="w-4 h-4 text-olive-600" />
              <span className="text-xs font-bold text-olive-700 uppercase tracking-wider">
                Pre-purchased Add-ons
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 mb-4">
              Official Credit Packs & Interactive Savings
            </h2>
            <p className="text-base text-brown-500 leading-relaxed">
              Standard overages are charged pay-as-you-go at the end of the month. Pre-purchase our official credit packs to unlock massive Early Bird savings!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* E-Sign Pack 1 */}
            <div className="bg-cream border border-brown-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-olive-600/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-olive-600/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-bg text-olive-800 text-[10px] font-extrabold uppercase tracking-wider rounded-md mb-5 shadow-sm">
                  🔥 Best Value E-Sign
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brown-900 mb-2">
                  E-Sign Pack (25)
                </h3>
                <p className="text-xs text-brown-500 mb-6 leading-relaxed">
                  Excellent for seed funding agreements, customer NDAs, and onboarding paperwork.
                </p>

                {/* Savings block */}
                <div className="bg-white rounded-2xl border border-brown-100 p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-xs text-brown-500">
                    <span>Overage Rate (₹50/each):</span>
                    <span className="line-through font-semibold">₹1,250</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-700 font-bold">
                    <span>Pack Rate (₹12/each):</span>
                    <span>₹300</span>
                  </div>
                  <div className="border-t border-brown-100 pt-2 flex justify-between items-center text-xs font-semibold text-brown-900">
                    <span>Total Pack Price:</span>
                    <span className="text-lg font-extrabold text-olive-800">₹300</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 mb-5">
                  <span className="text-xs text-emerald-800 font-bold">Interactive Savings:</span>
                  <span className="text-sm font-black text-emerald-800">Save ₹950 (76%)</span>
                </div>
                <button className="w-full py-3.5 bg-olive-600 hover:bg-olive-700 text-white font-bold rounded-xl text-[13px] transition-all flex items-center justify-center gap-1.5 shadow">
                  Buy Pack
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* E-Sign Pack 2 */}
            <div className="bg-cream border border-brown-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-olive-600/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-olive-600/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-bg text-olive-800 text-[10px] font-extrabold uppercase tracking-wider rounded-md mb-5 shadow-sm">
                  ⚡ Maximum Savings
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brown-900 mb-2">
                  E-Sign Pack (100)
                </h3>
                <p className="text-xs text-brown-500 mb-6 leading-relaxed">
                  Best for high-volume sales, vendor agreements, and rapid hiring cycles.
                </p>

                {/* Savings block */}
                <div className="bg-white rounded-2xl border border-brown-100 p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-xs text-brown-500">
                    <span>Overage Rate (₹50/each):</span>
                    <span className="line-through font-semibold">₹5,000</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-700 font-bold">
                    <span>Pack Rate (₹10/each):</span>
                    <span>₹1,000</span>
                  </div>
                  <div className="border-t border-brown-100 pt-2 flex justify-between items-center text-xs font-semibold text-brown-900">
                    <span>Total Pack Price:</span>
                    <span className="text-lg font-extrabold text-olive-800">₹1,000</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 mb-5">
                  <span className="text-xs text-emerald-800 font-bold">Interactive Savings:</span>
                  <span className="text-sm font-black text-emerald-800">Save ₹4,000 (80%)</span>
                </div>
                <button className="w-full py-3.5 bg-olive-600 hover:bg-olive-700 text-white font-bold rounded-xl text-[13px] transition-all flex items-center justify-center gap-1.5 shadow">
                  Buy Pack
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Lawyer Review Pack */}
            <div className="bg-cream border border-brown-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-olive-600/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-olive-600/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-bg text-olive-800 text-[10px] font-extrabold uppercase tracking-wider rounded-md mb-5 shadow-sm">
                  ⚖️ Professional Legal Guard
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brown-900 mb-2">
                  Lawyer Review (5)
                </h3>
                <p className="text-xs text-brown-500 mb-6 leading-relaxed">
                  Have an expert lawyer review custom clauses, additions, or edits in contracts.
                </p>

                {/* Savings block */}
                <div className="bg-white rounded-2xl border border-brown-100 p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-xs text-brown-500">
                    <span>Overage Rate (₹999/each):</span>
                    <span className="line-through font-semibold">₹4,995</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-700 font-bold">
                    <span>Pack Rate (₹800/each):</span>
                    <span>₹3,999</span>
                  </div>
                  <div className="border-t border-brown-100 pt-2 flex justify-between items-center text-xs font-semibold text-brown-900">
                    <span>Total Pack Price:</span>
                    <span className="text-lg font-extrabold text-olive-800">₹3,999</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 mb-5">
                  <span className="text-xs text-emerald-800 font-bold">Interactive Savings:</span>
                  <span className="text-sm font-black text-emerald-800">Save ₹996 (20%)</span>
                </div>
                <button className="w-full py-3.5 bg-olive-600 hover:bg-olive-700 text-white font-bold rounded-xl text-[13px] transition-all flex items-center justify-center gap-1.5 shadow">
                  Buy Pack
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Credit & Overage Specifications Table ───── */}
      <section className="py-20 bg-cream border-t border-brown-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-4">
              Clear credits, clear overages.
            </h2>
            <p className="text-base text-brown-500 leading-relaxed">
              If you ever go past your monthly subscription allowance, here&apos;s exactly
              what each extra unit costs. No surprises on the invoice.
            </p>
          </div>

          <div className="bg-cream-light rounded-3xl border border-brown-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-cream-dark/60 text-[11px] font-bold uppercase tracking-wider text-brown-700 border-b border-brown-200">
                    <th className="px-6 py-5">Action</th>
                    <th className="px-6 py-5 text-center">Starter</th>
                    <th className="px-6 py-5 text-center">Growth</th>
                    <th className="px-6 py-5 text-center">Scale</th>
                    <th className="px-6 py-5 text-center">Custom</th>
                    <th className="px-6 py-5 text-right">Overage Price</th>
                  </tr>
                </thead>
                <tbody className="text-[13.5px] text-brown-600">
                  {[
                    [
                      "E-signature (Aadhaar approved)", 
                      "15 / mo", 
                      "75 / mo", 
                      "250 / mo", 
                      "Custom", 
                      "₹50 per extra",
                      "esign"
                    ],
                    [
                      "Outbound Document Email", 
                      "50 / mo", 
                      "200 / mo", 
                      "500 / mo", 
                      "Custom", 
                      "₹0.50 per extra",
                      "email"
                    ],
                    [
                      "WhatsApp Document Delivery", 
                      "5 / mo", 
                      "25 / mo", 
                      "100 / mo", 
                      "Custom", 
                      "₹1.00 per extra",
                      "whatsapp"
                    ],
                    [
                      "Lawyer Template Review",
                      "—",
                      "1 / mo",
                      "3 / mo",
                      "Custom",
                      "₹999 per extra",
                      "lawyer"
                    ],
                    [
                      "Secure Cloud Storage",
                      "2 GB",
                      "25 GB",
                      "100 GB",
                      "Custom",
                      "₹99 per 10 GB/mo",
                      "storage"
                    ],
                    [
                      "Custom Contract Drafting",
                      "—",
                      "—",
                      "1 / quarter",
                      "Bespoke",
                      "₹4,999 per contract",
                      "drafting"
                    ],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className={`${
                        i % 2 === 0 ? "bg-cream-light" : "bg-cream/40"
                      } border-t border-brown-100 hover:bg-cream-dark/20 transition-all`}
                    >
                      <td className="px-6 py-4 font-semibold text-brown-900 flex items-center gap-2">
                        {row[6] === "esign" && <FileText className="w-4 h-4 text-olive-600" />}
                        {row[6] === "email" && <Mail className="w-4 h-4 text-olive-600" />}
                        {row[6] === "whatsapp" && <MessageSquare className="w-4 h-4 text-olive-600" />}
                        {row[6] === "lawyer" && <ShieldCheck className="w-4 h-4 text-olive-600" />}
                        {row[6] === "storage" && <Database className="w-4 h-4 text-olive-600" />}
                        {row[6] === "drafting" && <Check className="w-4 h-4 text-olive-600" />}
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-center font-medium">{row[1]}</td>
                      <td className="px-6 py-4 text-center font-medium">{row[2]}</td>
                      <td className="px-6 py-4 text-center font-medium">{row[3]}</td>
                      <td className="px-6 py-4 text-center font-medium">{row[4]}</td>
                      <td className="px-6 py-4 text-right text-brown-800 font-bold">
                        {row[5]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-brown-400 text-center mt-6 font-medium leading-relaxed">
            Lawyer review credits roll over up to 3 months on active subscriptions. E-sign, outbound emails and
            WhatsApp credits reset monthly. Buy credit top-ups above in advance to lock in active bulk discounts.
          </p>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-20 lg:py-24 bg-cream border-t border-brown-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-3">
              Pricing questions, answered.
            </h2>
            <p className="text-base text-brown-500 font-medium">
              Still unsure?{" "}
              <a
                href="/contact"
                className="text-olive-700 font-bold hover:underline"
              >
                Talk to a legal expert
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
                  className="bg-cream-light border border-brown-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left"
                  >
                    <span className="text-[14.5px] font-bold text-brown-900 pr-4">
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
                      <p className="px-5 sm:px-6 pb-5 text-[13.5px] text-brown-600 leading-relaxed">
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

      {/* ───── Final CTA ───── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="bg-olive-600 rounded-3xl p-10 sm:p-14 lg:p-16 relative overflow-hidden text-center shadow-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-lime-bg/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-[1.15] mb-4">
                Try every feature, free for 14 days.
              </h3>
              <p className="text-olive-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-medium">
                No credit card. Cancel any time. Full access to lawyer-reviewed
                templates, e-sign, team management, and compliance tools.
              </p>
              <a
                href="https://app.foundinglegals.com/sign-up"
                className="inline-flex items-center justify-center px-8 py-4 bg-lime-bg text-olive-900 text-[14.5px] font-bold rounded-full hover:bg-white transition-all shadow-md"
              >
                Start Free Trial Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
