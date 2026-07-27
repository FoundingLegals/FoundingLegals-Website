"use client";

import Link from "next/link";
import {
  Check,
  FileText,
  ArrowRight,
  ChevronDown,
  Shield,
  Users,
  Zap,
  BookOpen,
  BarChart3,
  Clock,
} from "lucide-react";
import { useState } from "react";
import type { NewServicePage } from "@/lib/newServicesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { getServicePrice } from "@/lib/servicePricingData";

interface Props {
  page: NewServicePage;
}

export default function NewServicePageLayout({ page }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isCategory = page.type === "category";
  const priceInfo = getServicePrice(page.slug);

  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6] font-sans">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-[#E5E1D6] pt-24 pb-20 px-6 sm:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[11px] text-[#6b6965] mb-7 font-medium uppercase tracking-widest">
                <Link href="/services" className="hover:text-[#5A7338] transition-colors">Services</Link>
                <ChevronDown className="w-3 h-3 -rotate-90 opacity-50" />
                <span className="text-[#5A7338]">{page.badge}</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-olive-50 border border-olive-200 rounded-lg text-[#5A7338] text-[11px] font-bold uppercase tracking-widest mb-7">
                {isCategory ? <BarChart3 className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                {page.badge}
              </div>

              {/* H1 */}
              <h1 className="font-serif text-[38px] sm:text-[52px] lg:text-[60px] font-medium text-[#2b2723] leading-[1.08] mb-6 whitespace-pre-line">
                {page.name}
              </h1>

              {/* Tagline */}
              <p className="text-[17px] sm:text-[19px] text-[#6b6965] leading-relaxed max-w-2xl font-light mb-10">
                {page.tagline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[14px] font-bold rounded-full transition-all shadow-md"
                >
                  Get Started at Member Rate
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#F6F4F0] text-[#2b2723] text-[14px] font-medium rounded-full border border-[#E5E1D6] transition-all shadow-sm"
                >
                  Talk to a CA
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] text-[#6b6965]">
                <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-[#5A7338]" /> CA-executed, not software</span>
                <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-[#5A7338]" /> 1,000+ clients served</span>
                <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-[#5A7338]" /> 50% below market rate</span>
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#5A7338]" /> On-time, every time</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY: Sub-Services Grid ─────────────────────────── */}
        {isCategory && page.subServices && page.subServices.length > 0 && (
          <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-b border-[#E5E1D6]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-[30px] sm:text-[38px] font-medium text-[#2b2723] mb-3">
                  Services in this category
                </h2>
                <p className="text-[15px] text-[#6b6965] font-light max-w-xl mx-auto">
                  Each service below is managed by a dedicated CA at member rates. Click through for full details, pricing, and documents required.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {page.subServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-6 hover:border-[#5A7338]/40 hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-[15px] font-bold text-[#2b2723] leading-snug group-hover:text-[#5A7338] transition-colors">
                        {s.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[#9b958f] shrink-0 mt-0.5 group-hover:text-[#5A7338] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[13px] text-[#6b6965] leading-relaxed font-light flex-grow mb-4">
                      {s.description}
                    </p>
                    {s.price && (
                      <div className="pt-4 border-t border-[#E5E1D6]">
                        <span className="text-[11px] text-[#9b958f] font-light">{s.price}</span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── DESCRIPTION ──────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-50 border border-olive-100 rounded-lg text-olive-700 text-[11px] font-bold uppercase tracking-widest mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                About this service
              </div>
              <div className="space-y-5">
                {page.description.map((para, i) => (
                  <p key={i} className="text-[16px] sm:text-[17px] text-[#4a4642] leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Ideal For sidebar */}
            <div className="bg-white rounded-2xl border border-[#E5E1D6] p-7 shadow-sm">
              <h3 className="text-[13px] font-extrabold uppercase tracking-widest text-[#5A7338] mb-5">
                Ideal for
              </h3>
              <ul className="space-y-3.5">
                {page.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#5A7338] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-[13.5px] text-[#3a3732] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-[#E5E1D6]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-3">
                What&apos;s included
              </h2>
              <p className="text-[15px] text-[#6b6965] font-light">
                Everything in this service is executed by a qualified CA — not a software form. Here is exactly what we deliver.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.whatsIncluded.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-6 hover:border-[#5A7338]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-olive-50 border border-olive-100 flex items-center justify-center text-[#5A7338] font-bold text-[12px] mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#2b2723] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#6b6965] leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-[#E5E1D6]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-3">
                How it works
              </h2>
              <p className="text-[15px] text-[#6b6965] font-light">
                From first document to final delivery — here is the process, step by step.
              </p>
            </div>

            <div className="space-y-4">
              {page.process.map((step, i) => (
                <div
                  key={step.title}
                  className="flex gap-6 bg-white rounded-2xl border border-[#E5E1D6] p-6 shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2b2723] flex items-center justify-center text-white font-bold text-[13px]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#2b2723] mb-1.5">{step.title}</h3>
                    <p className="text-[13.5px] text-[#6b6965] leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOCUMENTS REQUIRED ───────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-[#E5E1D6]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-3">
                Documents you&apos;ll need
              </h2>
              <p className="text-[15px] text-[#6b6965] font-light">
                Upload once through your secure FoundingLegals vault. We review and flag any gaps before filing.
              </p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E5E1D6] p-8">
              <ul className="grid sm:grid-cols-2 gap-3">
                {page.documentsRequired.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-olive-600 shrink-0 mt-0.5" />
                    <span className="text-[13.5px] text-[#3a3732] leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FIXED SERVICE PRICING ───────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#F6F4F0] border-t border-[#E5E1D6]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#5A7338]/10 border border-[#5A7338]/20 rounded-full text-[#5A7338] text-[11px] font-bold uppercase tracking-widest mb-4">
                <Shield className="w-3.5 h-3.5" />
                Transparent Fixed Pricing
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-medium text-[#2b2723] mb-3">
                Fixed Pricing & Transparent Terms
              </h2>
              <p className="text-[15px] text-[#6b6965] font-light max-w-lg mx-auto">
                No hidden costs or surprising extras. Qualified CA execution backed by FoundingLegals platform guarantee.
              </p>
            </div>

            {/* Premium Fixed Price Card */}
            <div className="bg-white rounded-3xl border border-[#E5E1D6] p-8 sm:p-10 shadow-lg shadow-black/[0.03] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#5A7338]/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#E5E1D6]">
                <div>
                  <span className="inline-block px-3 py-1 bg-olive-50 border border-olive-200 text-[#5A7338] text-[11px] font-bold rounded-md uppercase tracking-wider mb-3">
                    CA-Managed Delivery
                  </span>
                  <h3 className="text-[24px] font-serif font-bold text-[#2b2723]">
                    {page.badge} Package
                  </h3>
                  <p className="text-[14px] text-[#6b6965] font-light mt-1">
                    {priceInfo.note}
                  </p>
                </div>

                <div className="flex flex-col md:items-end">
                  <div className="text-[12px] text-[#9b958f] uppercase font-bold tracking-wider mb-1">Fixed Member Rate</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[38px] font-bold text-[#2b2723] leading-none">{priceInfo.price}</span>
                    <span className="text-[15px] text-[#6b6965] font-medium">{priceInfo.unit}</span>
                  </div>
                  <span className="text-[11px] text-[#5A7338] font-semibold mt-1">✓ Statutory Compliance Guaranteed</span>
                </div>
              </div>

              {/* Included highlights */}
              <div className="py-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5A7338]" />
                  </div>
                  <span className="text-[13.5px] text-[#3a3732]">Dedicated Senior CA / Tax Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5A7338]" />
                  </div>
                  <span className="text-[13.5px] text-[#3a3732]">Verification & Document Validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5A7338]" />
                  </div>
                  <span className="text-[13.5px] text-[#3a3732]">Government Department Filing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5A7338]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5A7338]" />
                  </div>
                  <span className="text-[13.5px] text-[#3a3732]">Lifetime Vault Access & Renewal Tracking</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F0EDE6] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[12px] text-[#6b6965] font-light">
                  Statutory fees (MCA, GST Dept., stamp duty, trademark registry) are charged strictly at actual government receipts.
                </div>
                <Link
                  href="/start"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[14px] font-bold rounded-full transition-all shadow-md shrink-0"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Value banner */}
            <div className="mt-8 bg-white border border-[#E5E1D6] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A7338] mb-2">All-Inclusive Subscription Option</div>
                <div className="text-[20px] font-bold text-[#2b2723] leading-tight">
                  Enjoy all compliance & legal services under one plan<br />
                  <span className="text-[#6b6965] text-[15px] font-light">Only ₹658 / month for full platform access & 50% discount on execution.</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#5A7338] hover:bg-[#4a5f2e] text-white text-[13px] font-bold rounded-full transition-all whitespace-nowrap shadow-sm"
                >
                  Start 14-Day Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="text-[12px] text-[#6b6965] hover:text-[#2b2723] font-medium text-center transition-colors"
                >
                  View all membership plans →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-[#E5E1D6]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[28px] sm:text-[36px] font-medium text-[#2b2723] mb-3">
                Frequently asked questions
              </h2>
              <p className="text-[15px] text-[#6b6965] font-light">
                Questions about this service?{" "}
                <Link href="/contact" className="text-olive-700 font-medium hover:underline">
                  Talk to a CA directly.
                </Link>
              </p>
            </div>

            <div className="space-y-3">
              {page.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="text-[14.5px] font-semibold text-[#2b2723] pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#6b6965] shrink-0 transition-transform duration-300 ${
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
                        <p className="px-6 pb-6 text-[13.5px] text-[#4a4642] leading-relaxed font-light">
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

        {/* ── RELATED SERVICES ─────────────────────────────────────── */}
        {page.relatedLinks.length > 0 && (
          <section className="py-16 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-[#E5E1D6]">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-serif text-[22px] font-medium text-[#2b2723] mb-7 text-center">
                Related services
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E1D6] rounded-full text-[13px] font-medium text-[#3a3732] hover:border-[#5A7338]/40 hover:text-[#5A7338] transition-all"
                  >
                    {link.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
