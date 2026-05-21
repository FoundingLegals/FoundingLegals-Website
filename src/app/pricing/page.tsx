"use client";

import { useState } from "react";
import {
  Check,
  Sparkles,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   Pricing tiers — sourced from foundinglegals-website-brief.md §7
   Original prices restored. Early Bird toggle preserved.
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

// Original prices preserved exactly. Regular = Early Bird × 1.25 (rounded).
const TIERS: Tier[] = [
  {
    id: "basic",
    name: "Basic",
    tagline:
      "Everything a small founding team needs to get the paperwork right.",
    bestFor: "1–5 person teams, pre-seed or solo founders.",
    monthly: 789,
    monthlyRegular: 999,   // +25% rounded
    annual: 7890,
    annualRegular: 9990,   // +25% rounded
    features: [
      "Up to 5 team members",
      "Add & manage members with role permissions",
      "Agreement drafting from 25+ lawyer-reviewed templates",
      "E-signatures on every document",
      "Send invoices to clients & vendors",
      "15 e-signatures / month",
      "50 outbound document emails / month",
      "Compliance calendar with reminders",
      "Email support (24-hour response)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline:
      "For startups that have found product-market fit and are scaling the team.",
    bestFor: "6–25 person teams, seed-funded startups.",
    monthly: 1139,
    monthlyRegular: 1425,  // +25% rounded
    annual: 11390,
    annualRegular: 14250,  // +25% rounded
    highlight: true,
    features: [
      "Up to 25 team members",
      "Everything in Basic",
      "75 e-signatures / month",
      "200 outbound document emails / month",
      "Multi-team / sub-team organisation",
      "Custom document themes & branding",
      "Investor data room",
      "ESOP tracking and management",
      "WhatsApp support (same-day, business hours)",
    ],
  },
  {
    id: "essential",
    name: "Essential",
    tagline: "For growing startups preparing for Series A and beyond.",
    bestFor: "25–50 person teams, Series A-ready companies.",
    monthly: 1499,
    monthlyRegular: 1875,  // +25% rounded
    annual: 14990,
    annualRegular: 18750,  // +25% rounded
    features: [
      "Up to 50 team members",
      "Everything in Pro",
      "250 e-signatures / month",
      "500 outbound document emails / month",
      "API access",
      "Custom contract drafting (1 / quarter)",
      "Dedicated customer success contact",
      "Priority WhatsApp support (2-hr response)",
      "Quarterly compliance audit reports",
      "White-glove onboarding session",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    tagline:
      "Tailored for larger teams with specific compliance, volume or integration needs.",
    bestFor: "50+ person teams, enterprises & funded scale-ups.",
    monthly: null,
    monthlyRegular: null,
    annual: null,
    annualRegular: null,
    custom: true,
    features: [
      "Unlimited team members",
      "Everything in Essential",
      "Custom e-sign & email volumes",
      "Custom data residency & security controls",
      "Bespoke contract drafting & negotiation",
      "SSO, SAML & advanced role controls",
      "Custom API & workflow integrations",
      "Dedicated legal account manager",
      "24/7 priority support with SLA",
      "Custom onboarding & training",
    ],
  },
];

const FAQS = [
  {
    q: "What is the difference between Monthly and Annual Early Bird pricing?",
    a: "Our Monthly Plans carry a promotional 25% Early Bird discount that is active now. Our Annual Plans lock in a Permanent Early Bird rate forever — your price will never increase as we ship new features, making annual billing the smartest long-term choice.",
  },
  {
    q: "What happens after the 14-day free trial?",
    a: "You move to the plan you selected at signup. We email you 3 days before the trial ends so you can upgrade, downgrade or cancel — no surprise charges.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, any time. Upgrades take effect immediately. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "What if I exceed my plan's monthly usage?",
    a: "Overages are billed at the end of the month at clear per-unit rates (₹15 per extra e-signature, ₹5 per extra email). No surprises.",
  },
  {
    q: "Are these prices inclusive of GST?",
    a: "Prices are exclusive of 18% GST. GST is added on the final invoice and is fully claimable as input tax credit (ITC) by registered businesses.",
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
                  annual
                    ? "bg-lime-bg text-olive-800"
                    : "bg-olive-600/10 text-olive-700"
                }`}
              >
                Save more
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

              const regularPrice =
                tier.monthlyRegular === null || tier.annualRegular === null
                  ? null
                  : annual
                  ? Math.round(tier.annualRegular / 12)
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
                                tier.highlight
                                  ? "text-olive-200"
                                  : "text-brown-400"
                              }`}
                            >
                              ₹{regularPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${
                              tier.highlight
                                ? "text-olive-200"
                                : "text-brown-400"
                            }`}
                          >
                            /mo
                          </span>
                        </div>

                        {/* Early Bird badge */}
                        <div>
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
                        tier.highlight ? "text-olive-100" : "text-brown-500"
                      }`}
                    >
                      {price === null
                        ? "Custom pricing tailored to your needs."
                        : annual
                        ? `Billed annually at ₹${tier.annual!.toLocaleString(
                            "en-IN"
                          )} · Save ₹${annualSaving.toLocaleString(
                            "en-IN"
                          )}/yr`
                        : `Billed monthly · Save ₹${(
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

                  {/* CTA */}
                  <a
                    href={
                      tier.custom
                        ? "/contact"
                        : "https://app.foundinglegals.com/sign-up"
                    }
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-[13.5px] font-bold tracking-wide transition-all duration-300 mb-7 ${
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

                  <p
                    className={`text-[11px] mt-3 font-medium ${
                      tier.highlight
                        ? "text-olive-200"
                        : "text-brown-400"
                    }`}
                  >
                    14-day free trial · No credit card needed
                  </p>
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

      {/* ───── Credit & overage table ───── */}
      <section className="py-20 bg-cream-light border-t border-brown-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brown-900 leading-[1.15] mb-4">
              Clear credits, clear overages.
            </h2>
            <p className="text-base text-brown-500 leading-relaxed">
              If you ever go past your monthly allowance, here&apos;s exactly
              what each extra unit costs. No surprises on the invoice.
            </p>
          </div>

          <div className="bg-cream rounded-2xl border border-brown-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-cream-dark/60 text-[12px] font-semibold uppercase tracking-wider text-brown-700">
                    <th className="px-5 py-4">Action</th>
                    <th className="px-5 py-4 text-center">Basic</th>
                    <th className="px-5 py-4 text-center">Pro</th>
                    <th className="px-5 py-4 text-center">Essential</th>
                    <th className="px-5 py-4 text-center">Custom</th>
                    <th className="px-5 py-4 text-right">Overage</th>
                  </tr>
                </thead>
                <tbody className="text-[13.5px] text-brown-600">
                  {[
                    ["E-signature", "15 / mo", "75 / mo", "250 / mo", "Custom", "₹15 per extra"],
                    ["Document email", "50 / mo", "200 / mo", "500 / mo", "Custom", "₹5 per extra"],
                    ["Custom contract drafting", "—", "—", "1 / quarter", "Bespoke", "₹4,999 per contract"],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className={`${
                        i % 2 === 0 ? "bg-cream" : "bg-cream-light/60"
                      } border-t border-brown-100`}
                    >
                      <td className="px-5 py-3.5 font-medium text-brown-900">
                        {row[0]}
                      </td>
                      <td className="px-5 py-3.5 text-center">{row[1]}</td>
                      <td className="px-5 py-3.5 text-center">{row[2]}</td>
                      <td className="px-5 py-3.5 text-center">{row[3]}</td>
                      <td className="px-5 py-3.5 text-center">{row[4]}</td>
                      <td className="px-5 py-3.5 text-right text-brown-700 font-medium">
                        {row[5]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-brown-400 text-center mt-4">
            E-signature and Document email credits reset monthly.
          </p>
        </div>
      </section>

      {/* ───── FAQ ───── */}
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

      {/* ───── Final CTA ───── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="bg-olive-600 rounded-3xl p-10 sm:p-14 lg:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-lime-bg/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-[1.15] mb-4">
                Try every feature, free for 14 days.
              </h3>
              <p className="text-olive-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
                No credit card. Cancel any time. Full access to lawyer-reviewed
                templates, e-sign, team and compliance tools.
              </p>
              <a
                href="https://app.foundinglegals.com/sign-up"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-lime-bg text-olive-800 text-[15px] font-semibold rounded-full hover:bg-white transition-all shadow-md"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
