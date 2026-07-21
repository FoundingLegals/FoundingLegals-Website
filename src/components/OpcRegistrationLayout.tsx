"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, HelpCircle, Search, Star } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- TABLE OF CONTENT ITEMS ---
const TOC_ITEMS = [
  { id: "documents-required", label: "Documents required for OPC Registration" },
  { id: "registration-process", label: "One Person Company (OPC) Registration Process" },
  { id: "registration-fees", label: "OPC Registration Fees and Overall Cost" },
  { id: "registration-timeline", label: "OPC Registration Timeline" },
  { id: "compliance-opc", label: "Compliance for One Person Company" },
  { id: "avoid-penalties", label: "7 Must-Do Compliance to Avoid Penalties During OPC Registration" },
  { id: "registration-number", label: "One Person Company (OPC) Registration Number" },
  { id: "compliance-due-dates", label: "OPC in India: Compliance Due Dates" },
  { id: "checklist", label: "Checklist for OPC registration online" },
  { id: "benefits", label: "Benefits of One Person Company (OPC)" },
  { id: "differences", label: "Differences: OPC vs Pvt Ltd vs LLP" },
  { id: "register-fl", label: "Register Your OPC with Founding Legals" },
  { id: "faqs", label: "Frequently Asked Questions" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "How can I confirm the registration status of my One Person Company (OPC)?",
    answer: "You can confirm your OPC registration status online by visiting the official MCA (Ministry of Corporate Affairs) portal. Under the 'MCA Services' tab, select 'Find Company/LLP Details', enter your company name or CIN, and search to view the official registration details."
  },
  {
    question: "What is the significance of the nominee in an OPC?",
    answer: "A nominee is mandatory for an OPC. Since there is only one shareholder, the nominee is the individual who will take control of the company and its shares in the event of the sole shareholder's death, disability, or incapacity, ensuring perpetual succession."
  },
  {
    question: "Can the nominee in an OPC withdraw his/her consent?",
    answer: "Yes, the nominee can withdraw their consent at any time. When this happens, the sole member must nominate another individual within 15 days of receiving the notice of withdrawal and file Form INC-4 with the MCA."
  },
  {
    question: "What is the minimum and maximum number of members in an OPC?",
    answer: "An OPC must have a minimum and maximum of one member (shareholder). However, the OPC can have between 1 director and a maximum of 15 directors."
  },
  {
    question: "Who can register a One Person Company in India?",
    answer: "Only a natural person who is an Indian citizen and a resident of India (who has stayed in India for at least 120 days in the preceding financial year) is eligible to incorporate an OPC and act as a nominee."
  },
  {
    question: "Does Founding Legals assist in OPC Registration?",
    answer: "Yes, Founding Legals handles the entire OPC registration process. We procure your DSC, handle name approval applications, draft the MOA and AOA, register your nominee, submit the SPICe+ form, and deliver your Certificate of Incorporation, PAN, and TAN."
  },
  {
    question: "Is there any threshold limit for an OPC to mandatorily convert into a Private or Public Company?",
    answer: "Previously, an OPC had to mandatorily convert if its paid-up capital exceeded ₹50 Lakhs or average annual turnover exceeded ₹2 Crores. However, the government has removed these mandatory conversion thresholds to promote ease of doing business."
  },
  {
    question: "Can an OPC be converted into a Private or Public Limited Company?",
    answer: "Yes, an OPC can voluntarily convert into a Private Limited Company or Public Limited Company at any time after its incorporation by altering its MOA and AOA and filing Form INC-6."
  },
  {
    question: "Can an OPC have a foreign national as a nominee?",
    answer: "No, a foreign national cannot act as a nominee of an OPC. Under MCA rules, the nominee must be a natural person who is an Indian citizen and a resident in India."
  },
  {
    question: "Can a foreign national form an OPC in India?",
    answer: "No, a foreign national cannot incorporate an OPC in India. The sole member must be an Indian citizen and resident."
  },
  {
    question: "What is the difference between OPC and Sole Proprietorship?",
    answer: "A sole proprietorship has no separate legal entity, meaning the owner has unlimited personal liability for business debts. An OPC is a separate legal entity offering limited liability protection, keeping the shareholder's personal assets safe."
  },
  {
    question: "Can an OPC have more than one director?",
    answer: "Yes, while an OPC can only have one shareholder, it can appoint multiple directors (up to 15) to manage its business operations."
  },
  {
    question: "What is the liability of the member in an OPC?",
    answer: "The liability of the sole member is limited to the unpaid amount on the shares subscribed by them. Their personal assets are protected from the liabilities of the company."
  },
  {
    question: "Can an OPC be formed for any type of business activity?",
    answer: "An OPC can be formed for most lawful business activities. However, it cannot be incorporated for non-banking financial investment activities, carry out investment in securities of any body corporate, or operate as a Section 8 (charitable) company."
  },
  {
    question: "Can an existing sole proprietorship be converted into an OPC?",
    answer: "Yes, an existing sole proprietorship can be converted into an OPC by following the standard incorporation process and transferring all business assets and liabilities to the newly formed company."
  },
  {
    question: "Is it mandatory for an OPC to appoint an auditor?",
    answer: "Yes, every OPC is required to appoint a statutory auditor (a chartered accountant in practice) within 30 days of incorporation to audit its accounts annually."
  },
  {
    question: "Can an OPC raise funds through public deposits?",
    answer: "No, an OPC cannot invite or accept deposits from the general public. It can, however, raise funds through debt-based funding from banks and financial institutions, or convert to a Private Limited Company to raise equity."
  },
  {
    question: "Is GST registration mandatory for an OPC?",
    answer: "GST registration is mandatory if the OPC's annual turnover exceeds the statutory threshold (₹40 Lakhs for goods / ₹20 Lakhs for services in most states) or if it engages in inter-state supply of goods and services."
  }
];

// --- OPC PRICING PLANS DATA ---
const ALL_OPC_FEATURES = [
  "Company name help",
  "SPICe+ form in 2-3 working days",
  "Company PAN + TAN",
  "MOA + AOA drafting",
  "PF and ESIC registration",
  "Incorporation certificate in 10-12 days",
  "DSC preparation in 3-4 days",
  "DIN for Director & Nominee",
  "Expert assisted process",
  "INC 20A / Business commencement certificate",
  "MSME Registration",
  "Startup India Registration",
  "Digital signature certificate",
  "Director DSC",
  "Trademark Registration",
  "Pitch Deck"
];

const OPC_PLANS = [
  {
    name: "BASIC",
    price: "₹1,999",
    feeSubtext: "+ Govt Fees",
    description: "Essential OPC registration and nominee setup kit.",
    badge: "Essential Setup",
    badgeStyles: "bg-gray-100 text-gray-700 border border-gray-200/50",
    serviceName: "OPC Registration - BASIC Plan (₹1,999 + Govt Fees)",
    included: [
      "Company name help",
      "SPICe+ form in 2-3 working days",
      "Company PAN + TAN",
      "MOA + AOA drafting",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DIN for Director & Nominee",
      "Expert assisted process",
      "INC 20A / Business commencement certificate"
    ]
  },
  {
    name: "STANDARD",
    price: "₹6,999",
    feeSubtext: "+ Govt Fees",
    description: "Standard OPC package including government registration and acceleration programs.",
    badge: "Most Popular",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    isPopular: true,
    serviceName: "OPC Registration - STANDARD Plan (₹6,999 + Govt Fees)",
    included: [
      "Company name help",
      "SPICe+ form in 2-3 working days",
      "Company PAN + TAN",
      "MOA + AOA drafting",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DIN for Director & Nominee",
      "Expert assisted process",
      "INC 20A / Business commencement certificate",
      "MSME Registration",
      "Startup India Registration"
    ]
  },
  {
    name: "PREMIUM",
    price: "₹8,999",
    feeSubtext: "+ Govt Fees",
    description: "Comprehensive OPC package including trademarks, physical DSCs and investor decks.",
    badge: "Best Value",
    badgeStyles: "bg-brown-100 text-brown-900 border border-brown-200/30",
    serviceName: "OPC Registration - PREMIUM Plan (₹8,999 + Govt Fees)",
    included: [
      "Company name help",
      "SPICe+ form in 2-3 working days",
      "Company PAN + TAN",
      "MOA + AOA drafting",
      "PF and ESIC registration",
      "Incorporation certificate in 10-12 days",
      "DSC preparation in 3-4 days",
      "DIN for Director & Nominee",
      "Expert assisted process",
      "INC 20A / Business commencement certificate",
      "MSME Registration",
      "Startup India Registration",
      "Digital signature certificate",
      "Director DSC",
      "Trademark Registration",
      "Pitch Deck"
    ]
  }
];

export default function OpcRegistrationLayout() {
  const [activeSection, setActiveSection] = useState("documents-required");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [modalState, handleModalSubmit] = useForm("xqeyrnpp");

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

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

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
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-6">
        {/* Pricing details on the top of the hero section */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-4 py-1.5 rounded-full border border-olive-200/40 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-650 animate-pulse" />
            Starting at ₹1,999 + Govt Fees
          </span>
          <span className="text-[11px] font-bold text-brown-600 tracking-widest uppercase bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-brown-200/30 inline-block">
            Fast Track 10-12 Days Process
          </span>
        </div>

        <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[50px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
          One Person Company (OPC) Registration in India
        </h1>
        
        <div className="text-[15px] md:text-[16px] text-brown-600 leading-relaxed space-y-4 max-w-5xl">
          <p>
            A <strong>One Person Company (OPC)</strong> is a unique business structure that allows a single individual to own and manage an entire company with limited liability protection. It combines the simplicity of a sole proprietorship with the legal benefits of a company, making it ideal for solo founders and small business owners who want complete control without taking on partners.
          </p>
          <p>
            Under the Companies Act, 2013, an OPC is a company formed by one person as a member and shareholder, with a mandatory nominee. It enjoys separate legal identity, perpetual succession, and limited liability—just like any other company, but with far fewer compliance requirements. This makes One Person Company (OPC) registration a popular choice for entrepreneurs seeking flexibility and formal business recognition.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={() => openModal("One Person Company (OPC) Registration")}
            className="px-6 py-3.5 bg-olive-600 hover:bg-olive-705 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            Register your OPC
          </button>
          <div className="text-[12.5px] text-gray-500">
            Professional fee starts at <strong className="text-olive-750 font-bold">₹1,999</strong> + actual government state fees.
          </div>
        </div>
      </section>

      {/* ── OPC PRICING CARDS SECTION (full-width, above two-column) ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="border-t border-gray-200 mb-8" />

        <div className="space-y-6 pt-4 mb-10 pb-4">
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1917] mb-2">
              Choose the Best OPC Company Registration Plan
            </h2>
            <p className="text-[13px] text-gray-500 max-w-xl">
              Select the plan that fits your business needs. All plans include standard drafting, filings, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch pt-2">
            {OPC_PLANS.map((plan) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={plan.name}
                  className={`group relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 overflow-hidden transform hover:-translate-y-1.5 ${
                    isPopular
                      ? "bg-[#5B6836] text-white border-2 border-[#5B6836] shadow-xl hover:shadow-[0_20px_40px_rgba(91,104,54,0.25)]"
                      : "bg-[#F8FAF4] text-[#2A3416] border border-[#D5DFBE]/70 shadow-xs hover:shadow-md hover:border-[#B4C599]"
                  }`}
                >
                  {/* Subtle curved light reflection overlay for the popular card */}
                  {isPopular && (
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none blur-xl group-hover:scale-110 transition-transform duration-700" />
                  )}

                  <div>
                    {/* Plan Badge */}
                    {plan.badge && (
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:scale-105 ${
                          isPopular
                            ? "bg-[#E2E9C8] text-[#344015]"
                            : "bg-[#E6ECDB] text-[#4F5D30] border border-[#D5DFBE]"
                        }`}>
                          {isPopular && <Star className="w-3 h-3 fill-[#344015] animate-pulse" />}
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mb-4 flex items-baseline gap-1.5">
                      <span className={`text-[32px] font-bold font-serif tracking-tight transition-all duration-300 ${
                        isPopular ? "text-white" : "text-[#2A3416]"
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-[12px] font-normal ${
                        isPopular ? "text-white/70" : "text-gray-400"
                      }`}>
                        {plan.feeSubtext}
                      </span>
                    </div>

                    <h3 className={`font-serif text-[19px] font-bold mb-1.5 ${
                      isPopular ? "text-white" : "text-[#2A3416]"
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-[11.5px] leading-relaxed mb-6 pb-4 border-b transition-all duration-300 ${
                      isPopular
                        ? "text-white/85 border-white/10"
                        : "text-gray-550 border-[#CBD7B5]/40"
                    }`}>
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {ALL_OPC_FEATURES.map((feature, fIdx) => {
                        const isIncluded = plan.included.includes(feature);
                        return (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-[12px] leading-snug"
                          >
                            {isIncluded ? (
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${
                                isPopular ? "text-[#E2E9C8]" : "text-olive-650"
                              }`} />
                            ) : (
                              <X className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPopular ? "text-white/20" : "text-gray-300"
                              }`} />
                            )}
                            <span className={`transition-all duration-300 ${
                              isIncluded
                                ? isPopular
                                  ? "text-white font-medium"
                                  : "text-[#2A3416] font-medium"
                                : isPopular
                                ? "text-white/30 font-light line-through"
                                : "text-gray-400 font-light line-through"
                            }`}>
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    onClick={() => openModal(plan.serviceName)}
                    className={`w-full py-3 rounded-full font-bold text-[12px] transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm transform group-hover:scale-[1.02] active:scale-[0.98] ${
                      isPopular
                        ? "bg-[#E2E9C8] hover:bg-[#D5DFB7] text-[#344015] font-semibold"
                        : "bg-white hover:bg-[#FDFDFD] text-[#2A3416] border border-[#CBD7B5] hover:border-[#B4C599]"
                    }`}
                  >
                    <span>Opt &amp; Register</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
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
                Table of Content
              </h3>
              <nav className="flex flex-col gap-1 border-l border-gray-100">
                {TOC_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`pl-4 py-2 text-[13px] font-medium text-left border-l-2 transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "border-olive-600 text-olive-600 bg-olive-50/50"
                        : "border-transparent text-brown-500 hover:text-brown-900 hover:border-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Registration CTA in Sidebar */}
            <div className="bg-[#FAF9F6] border border-gray-200/60 p-5 rounded-2xl">
              <h4 className="font-serif text-sm font-bold text-brown-900 mb-1">
                Register your OPC
              </h4>
              <p className="text-[12px] text-brown-500 mb-4">
                Let our legal experts handle your DSC, nominee consent, and SPICe+ forms.
              </p>
              <p className="font-serif text-base font-bold text-olive-700 mb-4">
                Starts at ₹1,999 <span className="text-[10px] font-sans text-gray-400 font-normal block mt-0.5">+ Govt Fee</span>
              </p>
              <button
                onClick={() => openModal("One Person Company (OPC) Registration")}
                className="w-full text-center py-2 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
              >
                Register your Business
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: Content */}
          <div className="space-y-16 lg:pl-4">
            
            {/* 1. Documents Required */}
            <article id="documents-required" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Documents Required for OPC Registration
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">1. Identity & Address Proof of Shareholder and Nominee</h3>
                  <ul className="grid sm:grid-cols-2 gap-2 text-[14.5px] text-[#555] list-disc pl-5">
                    <li>Aadhaar Card</li>
                    <li>Passport</li>
                    <li>Voter ID</li>
                    <li>Driving Licence</li>
                    <li>PAN Card of Shareholder</li>
                    <li>PAN Card of Nominee</li>
                    <li>Recent Utility Bill (electricity/water/gas)</li>
                    <li>Latest Bank Statement</li>
                    <li className="sm:col-span-2">Passport-size Photographs of Sole Shareholder and Nominee</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">2. Registered Office Proof</h3>
                  <ul className="space-y-2.5 text-[14.5px] text-[#555] list-disc pl-5">
                    <li><strong>Electricity Bill:</strong> Must not be older than 30 days.</li>
                    <li><strong>Property Tax Receipt:</strong> If owned by the founder.</li>
                    <li><strong>Rent Agreement:</strong> If the premises are rented for business.</li>
                    <li><strong>No Objection Certificate (NOC):</strong> From the owner, giving permission to use the premises as the registered office.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">3. Director Consent & Declarations</h3>
                  <ul className="space-y-2.5 text-[14.5px] text-[#555] list-disc pl-5">
                    <li>Consent Letter from the Director agreeing to act as the sole director.</li>
                    <li><strong>Nominee Consent (INC-3):</strong> Acceptance by the nominee to take over if the sole member becomes incapable.</li>
                    <li><strong>Declaration by the Director (INC-9):</strong> Confirming legal eligibility.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">4. Memorandum of Association (MOA)</h3>
                  <p className="text-[14.5px] text-[#555]">
                    States the company’s objectives and scope of activities, filed along with incorporation forms.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">5. Articles of Association (AOA)</h3>
                  <p className="text-[14.5px] text-[#555]">
                    Defines internal rules, governance structure, and operational guidelines, submitted together with the MOA.
                  </p>
                </div>
              </div>

              {/* Did you know banner */}
              <div className="bg-olive-50/40 border border-olive-100 rounded-2xl p-5 text-[13.5px] text-brown-800">
                <strong>Did you know?</strong> The SPICe+ form alone integrates more than 8 different services (name reservation, DIN, incorporation, PAN, TAN, ESIC, EPFO and more), significantly reducing both time and paperwork for first‑time founders.
              </div>
            </article>

            {/* 2. Registration Process */}
            <article id="registration-process" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                One Person Company (OPC) Registration Process
              </h2>

              <div className="space-y-6">
                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 1: Obtain a Digital Signature Certificate (DSC)</h4>
                  <ul className="space-y-1.5 text-[13.5px] text-[#555] list-disc pl-4">
                    <li>A DSC is a digital method of verifying or attesting a document and is often issued with a one-year or two-year validity.</li>
                    <li>You can directly approach Government Certifying Agencies for an Aadhar e-KYC-based verification or through the help of supporting documents.</li>
                  </ul>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 2: Apply for Name Approval using SPICe+ Part A</h4>
                  <p className="text-[13.5px] text-[#555] mb-2">
                    Part A of the SPICe+ form provides for 'Name Reservation' with two proposed names and one resubmission (RSUB).
                  </p>
                  <a
                    href="https://www.mca.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-olive-600 hover:text-olive-700 underline"
                  >
                    View SPICe+ Part A: Here
                  </a>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 3: Apply for Company Registration using SPICe+ Part B</h4>
                  <p className="text-[13.5px] text-[#555] mb-3">
                    Once the name is approved, you can file SPICe+ Part B to complete the incorporation process. This form also covers:
                  </p>

                  <div className="space-y-3 pl-4 border-l-2 border-olive-600/30">
                    <div>
                      <strong className="text-[13px] text-brown-900 block">a. DIN Application</strong>
                      <span className="text-[13px] text-[#555]">A Director Identification Number (DIN) for the proposed director is automatically allotted. There is no need to file DIR-3 separately.</span>
                    </div>
                    <div>
                      <strong className="text-[13px] text-brown-900 block">b. Mandatory Nominee Requirement</strong>
                      <span className="text-[13px] text-[#555]">Every OPC must appoint a nominee. The nominee must submit Form INC-3 along with PAN and Aadhaar.</span>
                    </div>
                    <div>
                      <strong className="text-[13px] text-brown-900 block">c. Documents to Be Uploaded</strong>
                      <span className="text-[13px] text-[#555]">DSC, SPICe-MoA/AoA, declarations (INC-9, DIR-2, INC-3), office proofs + NOC.</span>
                    </div>
                    <div>
                      <strong className="text-[13px] text-brown-900 block">d. PAN/TAN Automatic Generation</strong>
                      <span className="text-[13px] text-[#555]">Once SPICe+ is approved, PAN and TAN are automatically generated by MCA.</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-olive-600 hover:text-olive-700 underline"
                    >
                      View SPICe+ Part B: Here
                    </a>
                  </div>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 4: Issue of Certificate of Incorporation (COI)</h4>
                  <p className="text-[13.5px] text-[#555]">
                    After verification, the Registrar of Companies (ROC) issues the Certificate of Incorporation (COI) with the Company Identification Number (CIN), officially establishing your OPC.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 5: Open a Bank Account</h4>
                  <p className="text-[13.5px] text-[#555]">
                    You can apply for GSTIN / EPFO / ESIC / Profession Tax and bank account opening through the integrated AGILE-PRO-S (Form INC-35).
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 6: File for the Commencement of a Business Certificate</h4>
                  <p className="text-[13.5px] text-[#555]">
                    You must file for the “Commencement of a Business Certificate” through Form INC-20A within 180 days of the incorporation of the Company.
                  </p>
                </div>
              </div>

              {/* Banner CTA */}
              <div className="bg-olive-50/50 border border-olive-100 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-base font-bold text-brown-900 mb-1">Register your One Person Company</h4>
                  <p className="text-xs text-brown-600">Secure your Certificate of Incorporation, DSC, and DIN hassle-free.</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <p className="font-serif text-lg font-bold text-olive-700">Starts at ₹1,999 <span className="text-[10px] font-sans text-gray-400 font-normal block mt-0.5">+ Govt Fee</span></p>
                  <button
                    onClick={() => openModal("One Person Company (OPC) Registration")}
                    className="px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
                  >
                    Register your Business
                  </button>
                </div>
              </div>
            </article>

            {/* 3. Fees and Cost */}
            <article id="registration-fees" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                OPC Registration Fees and Overall Cost
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                The cost to register a One Person Company (OPC) in India typically ranges from ₹5,000 to ₹25,000, depending on professional fees, the authorized capital, and government and miscellaneous expenses. Below is an approximate cost breakup for registering an OPC in India with an authorised share capital of ₹5,00,000:
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto border border-gray-200/80 rounded-2xl">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-gray-200 text-brown-900 font-serif font-semibold">
                      <th className="p-4">Cost Component</th>
                      <th className="p-4">Approximate Amount (₹)</th>
                      <th className="p-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[#555]">
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Stamp duty on MoA, AoA, SPICe+</td>
                      <td className="p-4">1,000 – 2,000</td>
                      <td className="p-4">Varies by state and authorised share capital.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">ROC filing fees (SPICe+, SPICe+ MOA/AOA)</td>
                      <td className="p-4">2,000 – 4,000</td>
                      <td className="p-4">Based on authorised capital slab (e.g., up to ₹10 lakh).</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">DIN and name reservation (RUN/SPICe+)</td>
                      <td className="p-4">1,000 – 1,500</td>
                      <td className="p-4">Director Identification and name approval.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">DSC (Digital Signature Certificate)</td>
                      <td className="p-4">800 – 1,500</td>
                      <td className="p-4">Charged per director/nominee, typically valid for 2–3 years.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">PAN/TAN issuance (via SPICe+)</td>
                      <td className="p-4">0 – 200</td>
                      <td className="p-4">Minimal, processed along with incorporation.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Professional fees (Founding Legals)</td>
                      <td className="p-4">Starts at ₹1,999</td>
                      <td className="p-4">Transparent professional fee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Misc. expenses (notary, printing, etc.)</td>
                      <td className="p-4">500 – 1,000</td>
                      <td className="p-4">Optional, depends on document handling.</td>
                    </tr>
                    <tr className="bg-olive-50/20 font-bold text-olive-800">
                      <td className="p-4">Total Indicative Cost</td>
                      <td className="p-4">6,500 – 15,000+</td>
                      <td className="p-4">Actual cost varies by state, capital, and provider.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-olive-50/40 p-5 rounded-2xl border border-olive-100 space-y-3">
                <p className="text-[13.5px] text-brown-800">
                  With <strong>Founding Legals</strong>, the Cost of registration of a One Person Company starts at <strong>₹1,999 + Govt. Fee</strong>.
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-[12.5px] text-brown-600 pl-4 list-disc">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                    <span>DSC for One Director and One nominee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                    <span>DIN for One Director</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                    <span>Certificate of Incorporation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                    <span>Memorandum & Articles (MoA/AoA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                    <span>Company PAN & TAN</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] border border-gray-150 rounded-2xl p-5 text-[13px] text-brown-600">
                <strong>Did you know?</strong> For solo entrepreneurs, OPC is often cheaper and more credible than running as a pure proprietorship, because banks and investors are more comfortable dealing with a registered company.
              </div>

              {/* Banner CTA */}
              <div className="bg-olive-50/50 border border-olive-100 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-base font-bold text-brown-900 mb-1">Register your One Person Company</h4>
                  <p className="text-xs text-brown-600">Secure your Certificate of Incorporation, DSC, and DIN hassle-free.</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <p className="font-serif text-lg font-bold text-olive-700">Starts at ₹1,999 <span className="text-[10px] font-sans text-gray-400 font-normal block mt-0.5">+ Govt Fee</span></p>
                  <button
                    onClick={() => openModal("One Person Company (OPC) Registration")}
                    className="px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
                  >
                    Register your Business
                  </button>
                </div>
              </div>
            </article>

            {/* 4. Timeline */}
            <article id="registration-timeline" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                OPC Registration Timeline
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                Registering a One Person Company (OPC) in India usually takes <strong>7–10 working days</strong>, depending on document readiness and the speed of MCA approvals. The overall timeline includes:
              </p>

              <ul className="space-y-2.5 text-[14px] text-[#555] list-disc pl-5">
                <li>Issuing the Digital Signature Certificate (DSC)</li>
                <li>Reserving the company name through SPICe+ Part A</li>
                <li>Drafting the MoA and AoA</li>
                <li>Filing SPICe+ Part B with nominee consent</li>
                <li>MCA verification and incorporation approval</li>
              </ul>

              <div className="p-5 bg-red-50/40 border border-red-100 rounded-2xl space-y-3">
                <h4 className="font-serif text-[14px] font-bold text-red-800">Things That Can Delay the Registration Process</h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-[12.5px] text-red-700/80 list-disc pl-4">
                  <li><strong>Incomplete Documentation:</strong> Mismatched names/addresses on identity cards.</li>
                  <li><strong>Name Approval Issues:</strong> Proposed names similar to existing companies or trademarks.</li>
                  <li><strong>MCA Server Glitches:</strong> Server heavy load or scheduled downtime.</li>
                  <li><strong>Response Time:</strong> Delays in sharing documents or signing forms.</li>
                  <li><strong>Jurisdiction:</strong> Differing processing speeds across ROC offices.</li>
                </ul>
              </div>

              {/* MCA Name Check Banner */}
              <div className="bg-olive-50/60 border border-olive-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Search className="w-6 h-6 text-olive-600" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">Searching for a company name?</h4>
                    <p className="text-[12.5px] text-brown-600">Check company name availability using our powerful name search tool.</p>
                  </div>
                </div>
                <a
                  href="https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all shrink-0 cursor-pointer text-center"
                >
                  Check Name Availability
                </a>
              </div>
            </article>

            {/* 5. Compliance */}
            <article id="compliance-opc" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Compliance for One Person Company
              </h2>
              
              <div className="space-y-4 text-[14.5px] text-[#555]">
                <p>
                  An OPC is required to have at least one Director (shareholder) and can appoint a maximum of 15 Directors. If you wish to exceed this maximum limit, you must formally file a resolution. Even with multiple directors, there can only be one shareholder. During OPC Registration, it is mandatory to appoint a nominee.
                </p>
                
                <h3 className="font-serif text-[17px] font-bold text-brown-900 pt-2 border-b border-gray-100 pb-2">Mandatory Compliances</h3>
                <ul className="space-y-2 text-[14px] list-disc pl-5">
                  <li><strong>Board Meetings:</strong> Minimum of two board meetings, with at least one in each half of the year and at least 90 days separating each session.</li>
                  <li><strong>Filing of Annual Return:</strong> File Annual Returns through form MGT-7 at the end of the Financial year.</li>
                  <li><strong>Filing of Financial Statements:</strong> File Financial Statements through form AOC-4 at the end of the Financial year.</li>
                  <li><strong>Filing of ADT-1:</strong> File Form ADT-1 within 15 days of the subsequent auditor's appointment.</li>
                  <li><strong>Auditor Appointment:</strong> Appoint the first auditor within 30 days of incorporation.</li>
                  <li><strong>Filing of DIR-3 KYC:</strong> File Form DIR-3 KYC for the Director before 30th September of the immediate financial year.</li>
                </ul>
              </div>

              {/* Capital & Tax Details */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-2">
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Minimum Capital</h4>
                  <p className="text-[13.5px] text-[#555] leading-relaxed">
                    No minimum paid-up capital requirement exists for registering an OPC. However, the minimum authorised capital required is ₹1,00,000. As it has one shareholder, the paid-up capital can start from ₹1.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Tax Rates</h4>
                  <p className="text-[13.5px] text-[#555] leading-relaxed">
                    For OPCs with a turnover up to ₹400 Crores in the previous fiscal year: 25%. Exceeding that: 30%. Surcharge is 12%, and Health and Education cess of 4% is applied.
                  </p>
                </div>
              </div>

              <div className="bg-olive-50/40 border border-olive-100 rounded-2xl p-5 text-[13px] text-brown-600">
                <strong>Did you know?</strong> Over 80,000–90,000 new companies are being incorporated in India each year, showing how quickly formalisation and limited liability structures are spreading.
              </div>
            </article>

            {/* 6. Avoid Penalties */}
            <article id="avoid-penalties" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                7 Must-Do Compliance to Avoid Penalties During OPC Registration
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "1. Submit Accurate Partner & Director Documents", desc: "Ensure PAN, Aadhaar, address proofs, and photos match exactly with MCA records to prevent rejections." },
                  { title: "2. Provide Correct Registered Office Proof with NOC", desc: "Electricity bills and Rent Agreements must be valid, recent, and accompanied by a property owner NOC." },
                  { title: "3. File Nominee Consent (INC-3) Properly", desc: "Ensure nominee details match their submitted identity proofs exactly. Incorrect consent declarations stall filings." },
                  { title: "4. Ensure Director Declaration (INC-9) is Error-Free", desc: "Must be filled correctly and align perfectly with MOA, AOA, and PAN records." },
                  { title: "5. Draft MOA & AOA Carefully", desc: "The company objects, nominee information, and capital details must match the SPICe+ form data precisely." },
                  { title: "6. Validate DSC and Director Details Before Filing", desc: "The Digital Signature Certificate of the director must be active and mapped correctly to their PAN." },
                  { title: "7. Ensure Timely Submission of All Forms", desc: "Submit SPICe+, e-MOA, e-AOA, and AGILE-PRO-S forms promptly to avoid additional fees or warnings." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-olive-50/30 p-5 rounded-2xl border border-olive-100/50 space-y-2">
                    <h4 className="font-serif text-[14px] font-bold text-olive-800">{step.title}</h4>
                    <p className="text-[12.5px] text-brown-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* 7. OPC Registration Number */}
            <article id="registration-number" className="scroll-mt-28 space-y-4">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                One Person Company (OPC) Registration Number
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                An OPC is issued a unique <strong>Corporate Identification Number (CIN)</strong> by the Registrar of Companies (ROC) upon successful incorporation. This 21-digit alphanumeric code indicates the listing status, industry classification, state code, year of incorporation, and ownership type of the OPC. It is printed directly on your Certificate of Incorporation (COI) and serves as the legal registration number of your company.
              </p>
            </article>

            {/* 8. Compliance Due Dates */}
            <article id="compliance-due-dates" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                One Person Company (OPC) in India: Compliance Due Dates
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-gray-200/50 text-center space-y-2">
                  <span className="text-[10px] font-bold text-olive-600 tracking-widest block uppercase">Form MGT-7</span>
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Annual Return</h4>
                  <p className="text-[12.5px] text-[#555]">Within 60 days from the date of the Annual General Meeting (AGM).</p>
                </div>
                <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-gray-200/50 text-center space-y-2">
                  <span className="text-[10px] font-bold text-olive-600 tracking-widest block uppercase">Form AOC-4</span>
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Financial Statements</h4>
                  <p className="text-[12.5px] text-[#555]">Within 180 days from the end of the financial year.</p>
                </div>
                <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-gray-200/50 text-center space-y-2">
                  <span className="text-[10px] font-bold text-olive-600 tracking-widest block uppercase">Form ITR-6</span>
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Income Tax Return</h4>
                  <p className="text-[12.5px] text-[#555]">By 30th September of the assessment year.</p>
                </div>
              </div>

              {/* Banner CTA */}
              <div className="bg-olive-50/50 border border-olive-100 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-base font-bold text-brown-900 mb-1">Register your One Person Company</h4>
                  <p className="text-xs text-brown-600">Secure your Certificate of Incorporation, DSC, and DIN hassle-free.</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <p className="font-serif text-lg font-bold text-olive-700">Starts at ₹1,999 <span className="text-[10px] font-sans text-gray-400 font-normal block mt-0.5">+ Govt Fee</span></p>
                  <button
                    onClick={() => openModal("One Person Company (OPC) Registration")}
                    className="px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
                  >
                    Register your Business
                  </button>
                </div>
              </div>
            </article>

            {/* 9. Checklist */}
            <article id="checklist" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Checklist for OPC Registration Online
              </h2>

              <div className="bg-[#FAF9F6] border border-gray-200/50 rounded-2xl p-6 md:p-8">
                <ul className="grid sm:grid-cols-2 gap-4 text-[14px] text-brown-700">
                  {[
                    "Get a Digital Signature Certificate (DSC) for the Director.",
                    "Get consent from both the Director and the Nominee.",
                    "Draft the e-Memorandum & e-Articles of Association.",
                    "Reserve your Company Name.",
                    "Apply for registration through the SPICe+ form.",
                    "Get a Certificate of Incorporation from the RoC.",
                    "Acquire PAN & TAN of your Company.",
                    "Get a Current bank account for your Company.",
                    "Follow post-incorporation compliances."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-olive-600 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* 10. Benefits */}
            <article id="benefits" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Benefits of One Person Company (OPC)
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "Limited Liability", desc: "The OPC's separate legal entity ensures liability is limited to just shares, protecting personal assets." },
                  { title: "Less Compliance", desc: "Fewer compliance requirements compared to a Private Limited Company or Public Company." },
                  { title: "Smooth Management", desc: "Owned and managed by a single person, making decision-making extremely quick and effortless." },
                  { title: "Perpetual Succession", desc: "Continuous succession. The nominee takes over automatically in the event of shareholder unavailability." },
                  { title: "Availability of Funds", desc: "Secure funds and credit limits from banks and institutions through debt-based funding options." }
                ].map((b, idx) => (
                  <div key={idx} className="p-5 border border-gray-150 rounded-2xl space-y-3 hover:border-olive-200 transition-all duration-200">
                    <div className="w-8 h-8 bg-olive-50 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-olive-600" />
                    </div>
                    <h4 className="font-serif text-[14px] font-bold text-brown-900">{b.title}</h4>
                    <p className="text-[12.5px] text-brown-500 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* 11. Differences */}
            <article id="differences" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Differences between OPC, Private Limited, and LLP
              </h2>

              {/* Difference Table */}
              <div className="overflow-x-auto border border-gray-200/80 rounded-2xl">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-gray-200 text-brown-900 font-serif font-semibold">
                      <th className="p-4">Feature</th>
                      <th className="p-4">OPC</th>
                      <th className="p-4">Private Limited</th>
                      <th className="p-4">LLP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[#555]">
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Ownership</td>
                      <td className="p-4">Single shareholder + 1 nominee</td>
                      <td className="p-4">Minimum 2 shareholders, max 200</td>
                      <td className="p-4">Minimum 2 partners, no upper limit</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Management</td>
                      <td className="p-4">One director (can be the shareholder)</td>
                      <td className="p-4">Minimum 2 directors</td>
                      <td className="p-4">At least 2 designated partners</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Legal Status</td>
                      <td className="p-4">Separate legal entity</td>
                      <td className="p-4">Separate legal entity</td>
                      <td className="p-4">Separate legal entity</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Liability</td>
                      <td className="p-4">Limited to shareholder's investment</td>
                      <td className="p-4">Limited to the amount invested</td>
                      <td className="p-4">Limited to partner's contribution</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Compliance</td>
                      <td className="p-4">Moderate</td>
                      <td className="p-4">High</td>
                      <td className="p-4">Low to moderate</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Audit Requirement</td>
                      <td className="p-4">Mandatory only if thresholds are crossed</td>
                      <td className="p-4">Mandatory every year</td>
                      <td className="p-4">Mandatory only above turnover/capital thresholds</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Conversion</td>
                      <td className="p-4">Must convert to Pvt Ltd after threshold turnover/capital</td>
                      <td className="p-4">Voluntary conversion possible</td>
                      <td className="p-4">Can convert to Pvt Ltd if required</td>
                    </tr>
                    <tr className="bg-olive-50/10 font-bold text-olive-850">
                      <td className="p-4">Best For</td>
                      <td className="p-4">Solo entrepreneurs & consultants</td>
                      <td className="p-4">Startups, funded companies, growing businesses</td>
                      <td className="p-4">Professional firms, service providers, flexible partnerships</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Banner CTA */}
              <div className="bg-olive-50/50 border border-olive-100 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-base font-bold text-brown-900 mb-1">Register your One Person Company</h4>
                  <p className="text-xs text-brown-600">Secure your Certificate of Incorporation, DSC, and DIN hassle-free.</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <p className="font-serif text-lg font-bold text-olive-700">Starts at ₹1,999 <span className="text-[10px] font-sans text-gray-400 font-normal block mt-0.5">+ Govt Fee</span></p>
                  <button
                    onClick={() => openModal("One Person Company (OPC) Registration")}
                    className="px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
                  >
                    Register your Business
                  </button>
                </div>
              </div>
            </article>

            {/* 12. Register with FL */}
            <article id="register-fl" className="scroll-mt-28">
              <div className="bg-white text-brown-900 rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-sm border border-brown-100">
                <div className="relative z-10 max-w-3xl space-y-6">
                  <div>
                    <span className="inline-block text-[10px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-3 py-1 rounded-full mb-4 border border-olive-200/50">
                      GET INCORPORATED
                    </span>
                    <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-4 text-brown-900">
                      Register Your One Person Company (OPC) with Founding Legals
                    </h2>
                    <p className="text-[13.5px] sm:text-[14.5px] text-brown-600 leading-relaxed">
                      One Person Company Registration marks the beginning of your journey as a solo founder, and Founding Legals makes the entire incorporation process effortless. From preparing your documents, securing your DSC, and reserving your company name to drafting your MOA/AOA and filing all SPICe+ forms, we handle every step end-to-end. You don’t have to worry about nominee consent, compliance rules, or MCA resubmissions—everything is streamlined through a guided and error-free process.
                    </p>
                  </div>
                  
                  <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brown-100">
                    <div>
                      <p className="text-[10px] text-brown-400 font-bold uppercase tracking-wider mb-1">REGISTRATION COST</p>
                      <p className="font-serif text-[22px] font-bold text-olive-700">
                        Starts at ₹1,999 <span className="text-xs font-sans text-brown-400 font-normal block mt-0.5">+ Govt Fee</span>
                      </p>
                    </div>
                    <button
                      onClick={() => openModal("One Person Company (OPC) Registration")}
                      className="px-6 py-3 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
                    >
                      Register your Business
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* 13. FAQs */}
            <article id="faqs" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3.5">
                {FAQ_ITEMS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-gray-150 rounded-2xl overflow-hidden bg-white transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-serif text-[15px] sm:text-[16px] font-semibold text-brown-900 hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-olive-600 transition-transform shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-gray-50 text-[14px] text-brown-600 leading-relaxed bg-[#FAF9F6]/20">
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

      {/* ── FORMSPREE OPT-IN MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-[#FAF9F6] p-6 border-b border-gray-150 relative">
              <span className="text-[9px] font-bold text-olive-700 tracking-widest uppercase block mb-1">
                REGISTER YOUR BUSINESS
              </span>
              <h3 className="font-serif text-lg font-bold text-brown-900 pr-8">
                {selectedService}
              </h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  modalState.succeeded = false;
                }}
                className="absolute top-6 right-6 text-brown-400 hover:text-brown-900 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {modalState.succeeded ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-olive-50 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 text-olive-600" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brown-900">Application Submitted!</h4>
                  <p className="text-sm text-brown-500 max-w-sm mx-auto leading-relaxed">
                    Thank you. A legal incorporation specialist from our team will contact you within 24 hours to begin your filing.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      modalState.succeeded = false;
                    }}
                    className="mt-6 px-6 py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  {/* Service type hidden input */}
                  <input type="hidden" name="service" value={selectedService} />

                  <div>
                    <label htmlFor="modal-name" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      required
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={modalState.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-city" className="block text-[11px] font-bold text-brown-500 uppercase tracking-wider mb-1.5">
                      City of Business
                    </label>
                    <input
                      id="modal-city"
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Bangalore"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-olive-600 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={modalState.submitting}
                      className="w-full py-3 bg-olive-600 hover:bg-olive-700 disabled:bg-gray-300 text-white font-bold text-[12px] rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-olive-600/10"
                    >
                      {modalState.submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
