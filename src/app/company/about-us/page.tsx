"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Building2,
  ShieldCheck,
  FileText,
  Shield,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

// Real Community Moments from Gallery
const COMMUNITY_MOMENTS = [
  {
    title: "Founder Keynotes & Community Sessions",
    image: "/Gallery_images/IMG_1450 (1).png",
  },
  {
    title: "Founder Discussions & Studio Podcasts",
    image: "/Gallery_images/IMG_1331.png",
  },
  {
    title: "University & Campus Startup Summits",
    image: "/Gallery_images/IMG_2884.png",
  },
  {
    title: "Mentoring Next-Generation Builders",
    image: "/Gallery_images/IMG_2888.png",
  },
];

// Clean, high-credibility testimonials
const TESTIMONIALS = [
  {
    quote:
      "Incorporating our private limited company and setting up our founders' agreement took days instead of weeks. The entire process was seamless.",
    author: "Ananya Roy",
    role: "Co-Founder & CEO",
    company: "DevStack Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Filing GST returns and keeping up with quarterly ROC dates used to be painful. Founding Legals keeps everything organized with complete clarity.",
    author: "Rohan Verma",
    role: "Founder",
    company: "Nourish Botanicals",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "The agreement repository and investor term sheet preparation gave our angel investors immediate confidence during our early fundraise.",
    author: "Vikramaditya Iyer",
    role: "Co-Founder",
    company: "PayFlow Technologies",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

// 5 Core Help Areas
const HELP_AREAS = [
  {
    title: "Start your company",
    description: "Incorporation and the essential registrations needed to get your business started.",
    icon: Building2,
    href: "/start",
  },
  {
    title: "Stay compliant",
    description: "GST, ROC and other important compliance requirements, organised in one place.",
    icon: ShieldCheck,
    href: "/services",
  },
  {
    title: "Manage agreements",
    description: "Create, manage and keep track of the legal documents your business depends on.",
    icon: FileText,
    href: "/services",
  },
  {
    title: "Protect what you're building",
    description: "Support for intellectual property and the legal assets behind your business.",
    icon: Shield,
    href: "/services",
  },
  {
    title: "Prepare for growth",
    description: "Legal documentation and support for important business and fundraising milestones.",
    icon: TrendingUp,
    href: "/services",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans text-[#2B2723] pt-[72px] sm:pt-[84px] overflow-x-hidden">
      <Header />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto pt-6 sm:pt-10 pb-16 md:pb-24">
        <div className="rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#5A6E3B] text-white shadow-[0_16px_48px_rgba(90,110,59,0.18)] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Text */}
          <div className="w-full lg:w-[56%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
            <h1 className="text-[34px] sm:text-[48px] lg:text-[56px] font-serif font-medium leading-[1.1] tracking-tight mb-6 text-white">
              About Us
            </h1>

            <h2 className="text-[20px] sm:text-[24px] font-serif font-normal text-[#E8F5A3] leading-[1.3] mb-6">
              Building a better way for founders to handle the legal side of business.
            </h2>

            <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-[1.75] font-light max-w-xl">
              <p>
                Starting a company is exciting. The legal and compliance work that comes with it usually isn&apos;t.
              </p>
              <p>
                At Founding Legals, we&apos;re building a simpler way for Indian founders to take care of the important legal work that comes with starting and running a business. From incorporation and GST to agreements, compliance, intellectual property and fundraising documents, our aim is to make the process easier to understand and easier to manage.
              </p>
              <p className="text-white font-medium pt-1">
                Because founders have better things to spend their time on than chasing documents, deadlines and paperwork.
              </p>
            </div>
          </div>

          {/* Right Visual Box - Real Team Photo */}
          <div className="w-full lg:w-[44%] relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] self-stretch overflow-hidden bg-[#4A5D2A]">
            <img
              src="/Gallery_images/IMG_0726.png"
              alt="Founding Legals team at exhibition booth"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. OUR VISION
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto py-12 md:py-20 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E6EDC6] text-[#425227] text-[12px] font-bold uppercase tracking-wider rounded-md mb-6">
          Our Vision
        </div>

        <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-serif font-medium text-[#2B2723] leading-[1.2] mb-6">
          Give founders more time to build.
        </h2>

        <div className="space-y-4 text-[16px] sm:text-[18px] text-[#524B44] leading-[1.8] max-w-2xl mx-auto">
          <p>
            We started Founding Legals with a simple belief:{" "}
            <span className="text-[#5A6E3B] font-semibold">
              legal and compliance work should support a business, not slow it down.
            </span>
          </p>
          <p>
            Our goal is to make these processes simpler, more transparent and easier to manage, so founders can focus on what matters most — building their product, growing their team and moving their business forward.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. OUR STORY
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-12 md:py-20">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[#EDE6DE] shadow-sm flex flex-col lg:flex-row items-stretch">
          {/* Photo - Real Founder Consultation, Zoomed Out & Balanced */}
          <div className="w-full lg:w-[48%] xl:w-[50%] relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden bg-[#F5F0EB]">
            <img
              src="/Gallery_images/IMG_0740.png"
              alt="Founding Legals founder consulting with client at exhibition booth"
              className="absolute inset-0 w-full h-full object-cover object-[30%_20%] sm:object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Narrative */}
          <div className="w-full lg:w-[52%] xl:w-[50%] p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 bg-[#F5F0EB] text-[#5A6E3B] text-[12px] font-bold uppercase tracking-wider rounded-md mb-6 w-fit">
              Our Story
            </div>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#524B44] leading-[1.8]">
              <p>
                Founding Legals came from seeing the same challenges faced by founders again and again.
              </p>
              <p>
                Important documents were spread across different places. Compliance dates were easy to miss. Simple legal work could involve endless follow-ups. And for a founder trying to move quickly, even small things could take far more time and effort than they should.
              </p>
              <p className="text-[#2B2723] font-medium border-l-2 border-[#5A6E3B] pl-4 py-0.5">
                We felt there had to be a better way.
              </p>
              <p>
                So we started building Founding Legals — a platform that brings the essential legal and compliance needs of a business together in one place.
              </p>
              <p>
                We’re still building, learning and improving every day. And a big part of that comes from speaking directly with founders and understanding what they actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. GROWING WITH THE FOUNDER COMMUNITY & EVENT GALLERY
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-[#E6EDC6] text-[#425227] text-[12px] font-bold uppercase tracking-wider rounded-md mb-4">
            Community
          </div>

          <h2 className="text-[32px] sm:text-[42px] font-serif font-medium text-[#2B2723] leading-[1.18] mb-3">
            Growing With the Founder Community
          </h2>

          <h3 className="text-[19px] sm:text-[21px] font-serif text-[#5A6E3B] mb-5">
            We believe the best products are built by listening.
          </h3>

          <div className="space-y-3 text-[15px] sm:text-[16px] text-[#524B44] leading-[1.75]">
            <p>
              A lot of what we learn happens outside the product — at founder meetups, startup events, college communities, business gatherings and conversations with entrepreneurs.
            </p>
            <p>
              We meet people at different stages of their journey, hear about the challenges they’re dealing with and take those conversations back to our team.
            </p>
            <p className="font-medium text-[#2B2723]">
              These moments are a big part of who we are and how Founding Legals continues to evolve.
            </p>
          </div>
        </div>

        {/* Gallery Intro & 4 Real Gallery Cards */}
        <div className="pt-4">
          <div className="mb-6">
            <h4 className="text-[20px] font-serif font-medium text-[#2B2723] mb-1">
              A few moments from our journey
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#65605B]">
              From founder conversations and startup events to meeting aspiring entrepreneurs, these are some of the moments that have shaped our journey so far.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMMUNITY_MOMENTS.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#EDE6DE] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="h-52 w-full overflow-hidden relative bg-[#F5F0EB]">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-grow flex items-center">
                  <p className="text-[14px] font-medium text-[#2B2723] leading-snug">
                    {m.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHAT FOUNDERS SAY [TESTIMONIALS]
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-16 md:py-20 bg-[#F5F0EB]/50 rounded-[36px] border border-[#EDE6DE] my-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-white text-[#425227] text-[12px] font-bold uppercase tracking-wider rounded-md mb-4 shadow-xs">
            What Founders Say
          </div>

          <h3 className="text-[24px] sm:text-[30px] font-serif font-medium text-[#2B2723] mb-3">
            We’re building this for founders, so their feedback matters.
          </h3>

          <p className="text-[14px] sm:text-[15px] text-[#65605B]">
            The best way to understand whether we’re solving the right problems is to hear from the people using Founding Legals.
          </p>
        </div>

        {/* 3 Clean Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E5DDD4] shadow-xs flex flex-col justify-between"
            >
              <p className="text-[14px] text-[#4B4843] leading-[1.7] italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F0EB]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#D7CEC6]"
                />
                <div>
                  <p className="text-[13px] font-bold text-[#2B2723]">{t.author}</p>
                  <p className="text-[11px] text-[#7A756F]">
                    {t.role}, <span className="text-[#5A6E3B] font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. WHAT WE HELP WITH
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-[#E6EDC6] text-[#425227] text-[12px] font-bold uppercase tracking-wider rounded-md mb-4">
            Services
          </div>

          <h2 className="text-[32px] sm:text-[42px] font-serif font-medium text-[#2B2723] leading-[1.18] mb-4">
            What We Help With
          </h2>

          <div className="space-y-2 text-[15px] sm:text-[16px] text-[#524B44] leading-[1.7]">
            <p>
              Starting a company is only the beginning. As the business grows, the legal and compliance work grows with it.
            </p>
            <p className="font-medium text-[#2B2723]">
              Founding Legals brings key business legal needs together, so founders have one place to manage them.
            </p>
          </div>
        </div>

        {/* 5 Clean Help Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HELP_AREAS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE6DE] shadow-xs hover:border-[#5A6E3B]/50 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F0EB] group-hover:bg-[#5A6E3B] text-[#5A6E3B] group-hover:text-white transition-colors flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-[18px] font-medium text-[#2B2723] mb-2 group-hover:text-[#5A6E3B] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#5A6E3B]" />
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#65605B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. WHY FOUNDING LEGALS
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-12 md:py-16">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#EDE6DE] shadow-xs max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 bg-[#F5F0EB] text-[#5A6E3B] text-[12px] font-bold uppercase tracking-wider rounded-md mb-4">
            Why Founding Legals
          </div>

          <h2 className="text-[28px] sm:text-[38px] font-serif font-medium text-[#2B2723] mb-6">
            Built around the way founders actually work.
          </h2>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-[#524B44] leading-[1.8]">
            <p>
              We know legal work can often feel complicated, time-consuming and difficult to navigate.
            </p>
            <p className="text-[#5A6E3B] font-semibold">
              We’re trying to change that.
            </p>
            <p>
              We keep the experience simple, explain things clearly and build around the way founders actually work.
            </p>
            <p className="text-[#2B2723] font-medium">
              No unnecessary complexity. No endless back-and-forth. Just a more straightforward way to stay on top of the legal side of your business.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. BUILDING SOMETHING? & CAREERS
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto py-12 md:py-20 space-y-8">
        {/* Main CTA */}
        <div className="bg-[#5A6E3B] text-white rounded-[32px] sm:rounded-[40px] p-10 sm:p-14 lg:p-16 text-center shadow-[0_16px_40px_rgba(90,110,59,0.18)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[32px] sm:text-[44px] font-serif font-medium text-white mb-2 leading-tight">
              Building something?
            </h2>

            <h3 className="text-[20px] sm:text-[24px] font-serif text-[#E8F5A3] font-normal mb-5">
              Let’s make the legal side a little easier.
            </h3>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.7] font-light mb-8">
              You focus on building your business. We’ll help you stay on top of the paperwork, agreements and compliance that come with it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/start"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#5A6E3B] text-[15px] font-bold rounded-xl hover:bg-[#E8F5A3] transition-all shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="text-white/85 text-[14px]">
              <span>Have a question or want to know more? </span>
              <Link
                href="/contact"
                className="text-[#E8F5A3] font-semibold underline underline-offset-4 hover:text-white transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>

        {/* Want to build with us? (Careers) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE6DE] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-[18px] sm:text-[20px] font-serif font-medium text-[#2B2723] mb-1">
              Want to build with us?
            </h4>
            <p className="text-[14px] text-[#65605B]">
              We’re always looking for people who want to help make business legal and compliance simpler for the next generation of Indian founders.
            </p>
          </div>

          <Link
            href="/company/careers"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-[#5A6E3B] text-white text-[14px] font-bold rounded-xl hover:bg-[#4A5D2A] transition-all"
          >
            <span>Explore Careers</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
