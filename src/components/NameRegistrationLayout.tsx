"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, Search, Star, Headphones, Calculator } from "lucide-react";
import { navigateToApp, talkToExpert } from "@/lib/appNavigation";
import { openCostEstimator } from "@/lib/pricingEngineData";

// --- TABLE OF CONTENT ITEMS ---
const TOC_ITEMS = [
  { id: "formation-types", label: "Company Formation Types" },
  { id: "structure-selection", label: "Company Structure Selection" },
  { id: "incorporation-process", label: "Incorporation Process" },
  { id: "startup-capital", label: "Startup Capital India" },
  { id: "registration-process", label: "Registration Process" },
  { id: "registration-cost", label: "Cost of Company Registration" },
  { id: "compliance-requirements", label: "Compliances & Requirements" },
  { id: "faqs", label: "Frequently Asked Questions" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "Why is company registration important in India?",
    answer: "Company registration gives your business a distinct legal identity separate from its owners, protects personal assets via limited liability, builds trust with customers and partners, makes it easier to raise capital from investors, and ensures complete compliance with Indian laws."
  },
  {
    question: "How much does it cost to register a company?",
    answer: "The professional service fee at Founding Legals starts at ₹1,999. The total cost, including government filing fees, state stamp duties, and Digital Signature Certificates (DSC), typically ranges from ₹8,000 to ₹25,000 depending on the type of entity, authorised capital, and state of incorporation."
  },
  {
    question: "How long does it take to register a company?",
    answer: "The online incorporation process in India generally takes 7 to 10 working days. This timeline depends on the promptness of document submissions and MCA/ROC processing times."
  },
  {
    question: "How can I verify the registration status of my company?",
    answer: "You can verify the status of any registered company on the official Ministry of Corporate Affairs (MCA) website under the 'MCA Services' tab by entering the company name or its Corporate Identification Number (CIN)."
  },
  {
    question: "Is a Current Bank Account necessary after Registration?",
    answer: "Yes, once the Certificate of Incorporation (COI) is issued, it is legally mandatory to open a dedicated current bank account in the company's name for all business transactions."
  },
  {
    question: "Is GST registration mandatory for Company registration?",
    answer: "No, GST registration is not mandatory at the time of incorporation. However, it becomes mandatory if your annual turnover crosses the threshold limit (₹40 lakhs for goods, ₹20 lakhs for services) or if you engage in interstate sales or e-commerce."
  },
  {
    question: "Can NRIs or foreign national or foreign entities register a company in India?",
    answer: "Yes, NRIs, foreign nationals, and foreign entities can register a company in India and hold shares under the Foreign Direct Investment (FDI) guidelines. However, at least one director of the company must be a resident of India."
  },
  {
    question: "Can I change Company details after Registration?",
    answer: "Yes, company details such as the company name, registered office address, directors, and authorised capital can be altered after registration by filing the relevant amendment forms with the ROC."
  },
  {
    question: "Can I convert one business structure into another?",
    answer: "Yes, you can convert one business structure into another (e.g., Sole Proprietorship to Private Limited Company, or LLP to Private Limited Company) by following the prescribed transition procedures and filing the necessary conversion forms with the MCA."
  }
];

// --- INCORPORATION PRICING PLANS DATA ---
const ALL_FEATURES = [
  "Company name help",
  "SPICe+ form in 2-3 working days",
  "Company PAN + TAN",
  "MOA + AOA",
  "PF and ESIC registration",
  "Incorporation certificate in 10-12 days",
  "DSC preparation in 3-4 days",
  "DIN for directors",
  "Expert assisted process",
  "INC 20A / Business commencement certificate",
  "MSME Registration",
  "Startup India Registration",
  "Digital signature certificate",
  "Company DSC",
  "Trademark Registration",
  "Pitch Deck"
];

const INCORPORATION_PLANS = [
  {
    name: "BASIC",
    price: "₹1,999",
    feeSubtext: "+ Govt Fees",
    description: "Essential company registration and incorporation kit with dedicated MCA compliance.",
    badge: "Essential Setup",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    serviceName: "Pvt Ltd Company Incorporation - BASIC Plan (₹1,999 + Govt Fees)",
    included: [
      "Company name help",
      "SPICe+ form in 2-3 working days",
      "Company PAN + TAN",
      "MOA + AOA",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DIN for directors",
      "Expert assisted process",
      "INC 20A / Business commencement certificate"
    ]
  }
];

export default function NameRegistrationLayout() {
  const [activeSection, setActiveSection] = useState("formation-types");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const item of TOC_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2c2925]">
      
      {/* ── TOP HEADER SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* LEFT: Text */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-[28px] sm:text-[38px] md:text-[48px] font-medium text-[#1A1917] leading-[1.15] mb-4">
              Make it official.<br />Get incorporated
            </h1>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-[20px] sm:text-[24px] font-serif font-bold text-olive-700">Starts at ₹1,999</span>
              <span className="text-[13px] sm:text-[14px] text-gray-400 font-sans">+ Govt Fee</span>
            </div>

            <div className="text-[15px] md:text-[16px] text-[#5C5954] leading-relaxed space-y-3 max-w-xl">
              <p>
                Make your business ready to scale. Become an incorporated company through Founding Legals.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToApp("Company Name Approval / Registration")}
                className="bg-olive-700 hover:bg-olive-800 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
              >
                <span>Opt Service &amp; Register</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => talkToExpert("Company Name Approval / Registration")}
                className="bg-white hover:bg-olive-50 text-olive-750 border border-olive-600/40 font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-2xs inline-flex items-center gap-2 active:scale-95"
              >
                <Headphones className="w-4 h-4 text-olive-700" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="hidden lg:block lg:w-[420px] xl:w-[460px] shrink-0">
            <div className="w-full h-[380px] xl:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/company-registration-hero.png"
                alt="Company Registration in India – Founding Legals"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>



      {/* ── COMPANY TYPE CARDS SECTION (full-width, above two-column) ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="border-t border-gray-200 mb-8" />

        {/* ── LANDSCAPE PRICING & DELIVERABLES HERO PANEL ── */}
        <div className="space-y-6 pt-4 mb-14 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
            <div>
              <span className="text-[11px] font-bold text-olive-800 uppercase tracking-widest bg-[#E9EFE2] px-3.5 py-1 rounded-full border border-olive-200/60 inline-flex items-center gap-1.5 mb-2.5">
                <Star className="w-3 h-3 fill-olive-700 text-olive-700" />
                Transparent MCA Incorporation Package
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#1A1917] tracking-tight">
                Complete Pvt Ltd Registration Package
              </h2>
            </div>
            <p className="text-[13px] md:text-[13.5px] text-gray-600 max-w-md font-light leading-relaxed">
              All-inclusive statutory drafting, MCA filing, digital signatures, and dedicated CA support with zero hidden margins.
            </p>
          </div>

          <div className="w-full">
            {INCORPORATION_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="w-full bg-gradient-to-br from-[#FAFBF8] via-white to-[#F2F6EC] rounded-[28px] md:rounded-[32px] border-2 border-[#48592A]/50 p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Luxury Corner Glow Accent */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D4E157]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#D8E4CA]/70 mb-8">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E4ECDC] text-[#2C3E14] border border-[#CCD8B8]">
                      <Star className="w-3 h-3 fill-[#2C3E14]" />
                      {plan.badge}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#48592A] bg-white px-3 py-1 rounded-full border border-brown-200/60">
                      Flat MCA Package · Form SPICe+
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-olive-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Fast Track 7–10 Working Days Process</span>
                  </div>
                </div>

                {/* Main Landscape 2-Column Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  
                  {/* LEFT COLUMN: Pricing, Plan Meta & CTAs */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-r lg:border-[#D8E4CA]/70 lg:pr-8">
                    <div>
                      {/* Price Badge */}
                      <div className="mb-3 flex items-baseline gap-2.5">
                        <span className="text-[44px] sm:text-[52px] font-extrabold font-serif text-[#1A1917] tracking-tight leading-none">
                          {plan.price}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold text-olive-900 leading-tight">
                            {plan.feeSubtext}
                          </span>
                          <span className="text-[11px] text-gray-500 font-medium">
                            Statutory receipts provided
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#1A1917] mb-2">
                        {plan.name} Company Registration Kit
                      </h3>
                      <p className="text-[13.5px] text-gray-600 leading-relaxed font-light mb-6">
                        {plan.description} End-to-end execution from company name approval to Certificate of Incorporation issuance.
                      </p>

                      {/* Trust Highlights */}
                      <div className="space-y-2 bg-white/80 border border-olive-200/70 rounded-2xl p-4 shadow-2xs">
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Includes 2 Class-3 Digital Signature Certificates (DSC)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>Includes 2 Director Identification Numbers (DIN)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#2A3416] font-medium">
                          <Check className="w-3.5 h-3.5 text-olive-700 shrink-0" />
                          <span>PAN, TAN, PF, ESIC &amp; INC-20A Commencement Filing</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="button"
                        onClick={() => navigateToApp(plan.serviceName)}
                        className="w-full py-4 px-6 rounded-xl font-bold text-[14px] bg-[#2E4218] hover:bg-[#1E2E0F] text-white transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <span>Opt Service &amp; Register</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => talkToExpert(plan.serviceName)}
                          className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-olive-50 text-[#2E4218] border border-[#2E4218]/40 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Headphones className="w-3.5 h-3.5 text-[#2E4218]" />
                          <span>Talk to Expert</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                          className="py-3 px-3 rounded-xl font-semibold text-[13px] bg-white hover:bg-[#F2F6EC] text-[#2E4218] border border-[#2E4218]/40 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Calculator className="w-3.5 h-3.5 text-olive-700" />
                          <span>Estimate Cost</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-gray-500 text-center font-light pt-1">
                        Zero hidden charges · Official MCA statutory receipts provided
                      </p>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: What's Included Grid */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[11.5px] font-extrabold uppercase tracking-widest text-[#48592A] flex items-center gap-1.5">
                          <span>What&apos;s Included in This Package</span>
                          <span className="text-[10.5px] font-bold text-olive-800 bg-olive-100/80 px-2 py-0.5 rounded-full border border-olive-200">
                            10 Deliverables
                          </span>
                        </p>
                        <span className="text-[11.5px] text-gray-500 font-medium hidden sm:inline">
                          Complete Initiation Kit
                        </span>
                      </div>

                      {/* Deliverables Grid in 2 Columns */}
                      <ul className="grid sm:grid-cols-2 gap-3 text-[13px]">
                        {plan.included.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/70 hover:bg-white border border-[#D8E4CA]/50 hover:border-[#48592A]/40 transition-all duration-200 shadow-2xs leading-snug"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#E4ECDC] text-[#2C3E14] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                            <span className="font-semibold text-[#1A1917]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Helper Strip */}
                    <div className="mt-6 pt-4 border-t border-[#D8E4CA]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#2A3416]">
                      <div className="flex items-center gap-2 text-olive-900 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive-600" />
                        <span>Need higher authorized capital or multi-state stamping?</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => openCostEstimator({ entityType: "pvt_ltd" })}
                        className="text-olive-800 hover:text-olive-950 font-bold underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Calculate exact state fee</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN ARTICLE LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start pt-6 border-t border-gray-100">
          
          {/* LEFT COLUMN: Table of Contents */}
          <aside className="hidden lg:flex lg:sticky lg:top-28 flex-col gap-6">
            <div>
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                TABLE OF CONTENT
              </h3>
              <nav className="flex flex-col gap-1.5">
                {TOC_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 rounded text-[13.5px] transition-all duration-150 leading-relaxed ${
                      activeSection === item.id
                        ? "bg-olive-50/60 text-olive-700 border-l-4 border-olive-600 font-semibold pl-3"
                        : "text-[#5C5954] hover:text-[#1A1917] border-l-4 border-transparent pl-3"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl border border-gray-200/60 p-5 text-center space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Founding Legals Price</p>
              <p className="text-[18px] font-serif font-bold text-olive-700 mb-2">Starts at ₹1,999 <span className="text-xs text-gray-400 font-sans font-normal block mt-0.5">+ Govt fee</span></p>
              <button
                onClick={() => navigateToApp("Company Registration Package")}
                className="w-full text-center py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all shadow-sm cursor-pointer"
              >
                Opt Service &amp; Register
              </button>
              <button
                type="button"
                onClick={() => talkToExpert("Company Registration Package")}
                className="w-full text-center py-2 bg-white hover:bg-olive-50 text-olive-800 border border-olive-600/40 font-semibold text-[12px] rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: Content */}
          <div className="space-y-16 lg:pl-4">
            
            {/* Section 1: Company Formation Types — other types */}
            <article id="formation-types" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Different Types of Company Formations to Choose From
              </h2>

              {/* Public Limited */}
              <div className="space-y-2">
                <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917]">Public Limited Company</h3>
                <p className="text-[14.5px] text-[#555] leading-relaxed">
                  According to the Company Act of 2013, a Public Limited Company is a regulated business structure with limited liability that offers shares to the general public along with opportunities to raise funds through public investment. This type of business structure is suitable for large-scale multinational business corporations.
                </p>
              </div>

              {/* Sole Proprietorship */}
              <div className="space-y-2">
                <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917]">Sole Proprietorship</h3>
                <p className="text-[14.5px] text-[#555] leading-relaxed">
                  Sole Proprietorship is a type of business structure that involves a single owner who is personally liable for all the business's debts and obligations as there is no separate legal entity. It's ideal for small businesses and freelancers due to its minimal compliance requirements.
                </p>
                <a href="/services/CAservices/sole-proprietorship-registration" className="text-xs font-bold text-olive-600 hover:text-olive-750 hover:underline inline-flex items-center gap-1">Learn more &rarr;</a>
              </div>

              {/* Partnership Firm */}
              <div className="space-y-2">
                <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917]">Partnership Firm</h3>
                <p className="text-[14.5px] text-[#555] leading-relaxed">
                  Governed by the Indian Partnership Act 1932, a Partnership is a collaborative business structure involving two or more individuals who jointly share responsibilities, profits, and liabilities. This structure suits professional services and small businesses and is often guarded by a well-drafted Partnership agreement.
                </p>
                <a href="/services/CAservices/partnership-firm-registration" className="text-xs font-bold text-olive-600 hover:text-olive-750 hover:underline inline-flex items-center gap-1">Learn more &rarr;</a>
              </div>

              {/* Section 8 Company */}
              <div className="space-y-2">
                <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917]">Section 8 Company</h3>
                <p className="text-[14.5px] text-[#555] leading-relaxed">
                  Section 8 Companies are a legal form of “Non-Profit Organisations (NPOs)” registered under the Companies Act, either as Private Limited or Public limited.
                </p>
                <p className="text-[14.5px] text-[#555] leading-relaxed">
                  Non-Government Organisations or NGOs can also be registered under Section 8 Company registration. It is established for the promotion of charitable, cultural, social, educational, or philanthropic causes.
                </p>
              </div>
            </article>

            {/* Section 2: Structure Selection */}
            <article id="structure-selection" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                How to Choose the right type of Company Structure for your Business?
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                Each of the business structures discussed earlier entails distinct prerequisites and adherence to specific regulations during and after the company registration process. Several crucial factors should guide your decision-making while choosing the right structure:
              </p>

              <div className="space-y-4 text-[14.5px] text-[#555] leading-relaxed">
                <p><strong>Nature of Business:</strong> Consider your business's nature, industry, and core activities as they play a pivotal role in selecting a suitable structure. For instance, a consulting firm might opt for a different structure than a manufacturing company due to their distinct operational needs and goals.</p>
                <p><strong>Ownership and Investment:</strong> One of the fundamental decisions revolves around ownership and investment. Are you planning to run a closely held business with a limited number of stakeholders, or do you have ambitions to raise capital from a broader investor base? In the latter case, Private Limited or Public Limited companies could be more appropriate due to their ability to issue shares.</p>
                <p><strong>Liability Protection:</strong> Evaluate the extent of personal liability you're willing to bear. If you're seeking limited liability, structures such as Private Limited companies or Limited Liability Partnerships (LLPs) are well-suited. These structures ensure that your personal assets are protected in case the business faces financial challenges.</p>
                <p><strong>Scalability:</strong> Consider your business's growth prospects. If you anticipate attracting external investors or potentially going public in the future, it's wise to choose a structure that facilitates such expansion. Public Limited companies, for example, are better positioned to raise capital through stock markets.</p>
                <p><strong>Compliance & Legal Requirements:</strong> Different structures come with varying levels of regulatory compliance and legal obligations. Weigh the administrative burden and understand the tax implications associated with each structure. For instance, a Sole Proprietorship might have simpler compliance requirements compared to a Private Limited company.</p>
              </div>

              {/* Selection Guide Table */}
              <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-gray-700 font-serif">Nature of Business</th>
                      <th className="p-4 font-bold text-gray-700 font-serif">Suitable Company Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-[#444]">
                    <tr>
                      <td className="p-4">Service-based</td>
                      <td className="p-4">Sole Proprietorship, Partnership, LLP, Private Limited Company, OPC</td>
                    </tr>
                    <tr>
                      <td className="p-4">Startups, Scaling Businesses</td>
                      <td className="p-4">Private Limited Company</td>
                    </tr>
                    <tr>
                      <td className="p-4">Small-scale, Freelancers</td>
                      <td className="p-4">Sole Proprietorship, OPC</td>
                    </tr>
                    <tr>
                      <td className="p-4">Non-profit, Charitable</td>
                      <td className="p-4">Section 8 Company, NGO</td>
                    </tr>
                    <tr>
                      <td className="p-4">Professional Services</td>
                      <td className="p-4">Partnership, LLP</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 3: Company Registration Process */}
            <article id="incorporation-process" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Company Registration Process
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                Company Registration is a crucial milestone for every business. It legitimizes your business and lays the foundation for its operations under the legal and regulatory framework. There are several steps to ensure a seamless and legally compliant incorporation process:
              </p>
              <p className="text-[14.5px] text-gray-400 font-semibold italic">
                (Private Limited Company or Limited Liability Partnership or One Person Company)-
              </p>
              <h4 className="font-serif text-[16.5px] font-bold text-[#1A1917] mt-3">
                Steps for Company Incorporation in India
              </h4>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "Apply for a Digital Signature Certificate (DSC)",
                    desc: "Get DSCs to authenticate electronic documents and transactions while ensuring the security and integrity of online submissions during the registration process."
                  },
                  {
                    num: "2",
                    title: "Company Name Approval",
                    desc: "Choose an appropriate and distinctive name for the company and submit it to MCA for approval. Ensure the name adheres to the MCA guidelines and is not already in use. You can do a quick company name search on our website to avoid any complications before proceeding further."
                  },
                  {
                    num: "3",
                    title: "Apply for Business Registration",
                    desc: "Once the name is approved, apply for incorporation. This includes comprehensive details about the structure of the business, registered office, directors, shareholders, and other essential particulars. Private Limited and OPC registrations utilize SPICe+, while LLP registration employs FiLLiP for registration."
                  },
                  {
                    num: "4",
                    title: "Get a Certificate of Incorporation",
                    desc: "Following a diligent review of the application and its compliance with legal requirements, you can receive a Certificate of Incorporation (COI) issued by MCA. COI signifies the successful creation of the company, bestowing it with a distinct legal identity."
                  }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 p-5 bg-[#FAF9F6] border border-gray-200/60 rounded-2xl">
                    <div className="w-8 h-8 rounded-full bg-olive-50 border border-olive-200 text-olive-700 font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-serif text-[15px] font-semibold text-[#1A1917] mb-1">{step.title}</h4>
                      <p className="text-[13px] text-[#555] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* MCA Name Check Link card */}
              <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#1A1917]">Searching for a company name?</h4>
                  <p className="text-[13.5px] text-[#555] leading-relaxed">
                    Check company name availability using our powerful name search tool. Redirect to the official MCA registry database to verify name clearance.
                  </p>
                </div>
                <a
                  href="https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-bold text-[13px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  Search Name Now
                </a>
              </div>
            </article>

            {/* Section 4: Recommended Capital */}
            <article id="startup-capital" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Recommended Capital Required to Start a Business in India
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                The company's capital structure depends on- Authorized Capital/Paid-up Capital/Capital Requirements. These are the minimum/recommended contributions required to start a business.
              </p>

              <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-gray-700 font-serif">Type of Business</th>
                      <th className="p-4 font-bold text-gray-700 font-serif">Minimum Paid-up Capital</th>
                      <th className="p-4 font-bold text-gray-700 font-serif">Minimum Authorized Capital</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-[#444]">
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Private Limited</td>
                      <td className="p-4">None*</td>
                      <td className="p-4">₹1,00,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">LLP</td>
                      <td className="p-4">₹10,000</td>
                      <td className="p-4">₹10,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">OPC</td>
                      <td className="p-4">None*</td>
                      <td className="p-4">₹1,00,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Public Limited</td>
                      <td className="p-4">₹5,00,000</td>
                      <td className="p-4">₹5,00,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Sole Proprietorship</td>
                      <td className="p-4">None</td>
                      <td className="p-4">None</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Partnership</td>
                      <td className="p-4">None</td>
                      <td className="p-4">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-gray-500 italic space-y-1">
                <p>* As a Private Limited Company has a minimum of 2 shareholders, each shareholder has to have at least one share. So, the company's minimum authorized and paid-up capital is at least Rs 2. This is subject to the requirements of the bank current account.</p>
                <p>* As a One Person Company has one shareholder, the shareholder has to have at least one share. So the paid-up capital of the company is at least Rs 1. This is subject to the requirements of the bank current account.</p>
              </div>
            </article>

            {/* Section 5: How Founding Legals Can Help */}
            <article id="registration-process" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                How Can Founding Legals help in the whole process?
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                Founding Legals is your trusted partner in simplifying and redefining the company registration journey. You can seamlessly register your company at the lowest rates, anytime and anywhere.
              </p>

              <div className="space-y-3">
                <h4 className="font-serif text-[16px] font-bold text-[#1A1917]">What is included in our package?</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-[13.5px] text-[#444]">
                  {[
                    "Company Name Registration",
                    "2 Digital Signature Certificates",
                    "2 Directors’ Identification Numbers",
                    "Certificate of Incorporation",
                    "MoA & AoA (Applicable for Private Limited Companies and OPCs)",
                    "LLP Agreement (Applicable for LLPs)",
                    "Company PAN & TAN"
                  ].map((inc, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white border border-gray-200 p-3.5 rounded-xl shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-olive-50 text-olive-700 text-xs font-semibold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Section 6: Cost of Company Registration */}
            <article id="registration-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                What is the Cost of Company Registration by Founding Legals?
              </h2>
              <div className="space-y-4 text-[15px] text-[#555] leading-relaxed">
                <p>
                  The cost of company registration can vary based on several factors, including the type of company structure, the jurisdiction in which you're registering, the stamp duties, professional fees, and any additional services you may require.
                </p>
                <p>
                  We have tailored our services to meet the needs of visionary entrepreneurs seeking to establish and legitimize their business ventures. It's with this vision in mind that we offer registration options for One Person Companies (OPC), Private Limited Companies (Pvt), and Limited Liability Partnerships (LLP).
                </p>
                <p>
                  This comprehensive approach considers the growth and evolution of the business, ensuring that the chosen company structure aligns harmoniously with its present and future requisites.
                </p>
              </div>

              <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-gray-700 font-serif">Type of Business</th>
                      <th className="p-4 font-bold text-gray-700 font-serif">Cost of Registration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-[#444]">
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Private Limited</td>
                      <td className="p-4">Starts at ₹1,999 + Govt. fee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">LLP</td>
                      <td className="p-4">Starts at ₹1,999 + Govt. fee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">OPC</td>
                      <td className="p-4">Starts at ₹1,999 + Govt. fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[14.5px] text-[#555] mt-4 font-sans">
                Eager to learn more? Reach out to us at <a href="mailto:info@foundinglegals.com" className="text-olive-600 font-semibold hover:underline">info@foundinglegals.com</a> for more details.
              </p>
            </article>

            {/* Section 7: Compliances & Requirements */}
            <article id="compliance-requirements" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                What are the Compliances that need to be followed by a Company?
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                After successfully incorporating a company, ensuring legal compliance and smooth operations is crucial. Here are some key aspects to consider:
              </p>

              <div className="grid sm:grid-cols-2 gap-5 text-[14px]">
                {[
                  {
                    title: "Annual General Meeting (AGM)",
                    desc: "Hold AGMs to discuss financial matters, operations, and future plans."
                  },
                  {
                    title: "Financial Statements",
                    desc: "Prepare and file financial statements such as Balance Sheets, Profit and Loss Statements, and Cash Flow Statements annually with the Registrar of Companies (RoC)."
                  },
                  {
                    title: "Annual Return",
                    desc: "File annual returns with the RoC containing essential information about the company's operations."
                  },
                  {
                    title: "Statutory Registers",
                    desc: "Maintain various statutory registers, including Register of Members, Register of Directors, and Register of Contracts."
                  },
                  {
                    title: "Board Meetings",
                    desc: "Hold regular board meetings to discuss and make decisions related to the company's operations."
                  },
                  {
                    title: "Audit",
                    desc: "Conduct mandatory audits per the provisions of the Companies Act and file the audited financial statements with the RoC."
                  }
                ].map((comp, ci) => (
                  <div key={ci} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs flex items-start gap-3">
                    <Check className="w-5 h-5 text-olive-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">{comp.title}</h4>
                      <p className="text-[12.5px] text-[#555] leading-relaxed">{comp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[14.5px] text-[#555] leading-relaxed mt-6">
                These are just a few general compliance requirements that companies must follow. Depending on the specific activities and sector of the company, there might be additional industry-specific compliances to consider as well. It is important to stay informed and updated about the evolving legal and regulatory requirements.
              </p>
            </article>

            {/* Section 8: FAQ Accordion */}
            <article id="faqs" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50/50"
                      >
                        <span className="font-serif text-[15px] font-semibold text-[#1A1917] pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180 text-olive-600" : ""
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-5 text-[14px] text-[#555] leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── Direct application routing active: in-page form modal removed ── */}

    </div>
  );
}
