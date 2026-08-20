"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- SECTION TABS ---
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types" },
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "compliance-calendar", label: "Compliance Calendar" },
  { id: "why-foundinglegals", label: "Why FoundingLegals" },
  { id: "faqs", label: "FAQ's" }
];

// --- TYPES OF TRADEMARK PROTECTION DATA ---
const TRADEMARK_TYPES = [
  {
    category: "GOODS & PRODUCTS",
    name: "Product Mark",
    description: "Identifies and distinguishes goods rather than services. This includes brand names, logos, or symbols.",
    example: "The best example is ‘Nestle.’",
    icon: "📦"
  },
  {
    category: "SERVICES & OFFERS",
    name: "Service Mark",
    description: "These marks outline services provided by a company. Brand names or logos identifying a service are called service marks.",
    example: "‘United Airlines’, ‘Fly the Friendly Skies’, logo of a world map",
    icon: "✈️"
  },
  {
    category: "QUALITY STANDARDS",
    name: "Certification Mark",
    description: "This indicates that a product or service meets specific standards.",
    example: "The ISI (Indian Standard Institute) mark and FSSAI mark.",
    icon: "🛡️"
  },
  {
    category: "ASSOCIATION & GROUP",
    name: "Collective Mark",
    description: "Used by a group or association to identify goods and services from its members.",
    example: "CII (Confederation of Indian Industry).",
    icon: "👥"
  },
  {
    category: "3D & PACKAGING",
    name: "Shape Mark",
    description: "Protects the distinctive shape of a product or its packaging.",
    example: "Coca-Cola bottle, Fanta bottle",
    icon: "🧴"
  },
  {
    category: "DESIGN & PATTERN",
    name: "Pattern Mark",
    description: "Protects distinctive patterns or designs used on products or packaging.",
    example: "Distinctive pattern on a brand's packaging",
    icon: "🎨"
  },
  {
    category: "AUDIO SIGNATURE",
    name: "Sound Mark",
    description: "Protects a distinctive sound identifying a brand.",
    example: "Yahoo's yodel, theme song of National Stock Exchange.",
    icon: "🎵"
  },
  {
    category: "VISUAL SYMBOL",
    name: "Symbol Mark",
    description: "Protects unique visual symbols identifying a product or service.",
    example: "Unique brand emblems, crests & iconographic symbols.",
    icon: "✨"
  },
  {
    category: "COLOR IDENTITY",
    name: "Color Mark",
    description: "Protect specific colors or color combinations.",
    example: "Tiffany blue.",
    icon: "🟣"
  },
  {
    category: "ANIMATED LOGO",
    name: "Motion Mark",
    description: "Protects animated graphics or short videos.",
    example: "Paramount Pictures logo.",
    icon: "🎬"
  }
];

// --- REQUIREMENTS DATA ---
const REQUIREMENTS = [
  {
    number: "1",
    title: "Unique & Distinctive Trademark",
    description: "Choose a mark that can distinguish your goods or services from those of others."
  },
  {
    number: "2",
    title: "Trademark Availability Search",
    description: "Search for identical and similar marks before filing to identify potential conflicts."
  },
  {
    number: "3",
    title: "Phonetic Similarity Check",
    description: "Check for marks that sound similar even when their spelling is different."
  },
  {
    number: "4",
    title: "Correct Trademark Class",
    description: "Select the appropriate class based on the goods or services you offer."
  },
  {
    number: "5",
    title: "Correct Applicant Category",
    description: "Identify whether the applicant is an individual, startup, small enterprise, company, LLP, partnership, etc., as this affects the applicable filing fee and documentation."
  },
  {
    number: "6",
    title: "Filing Basis",
    description: "Decide whether the application is being filed on a “proposed to be used” basis or based on prior use."
  }
];

// --- STEP-BY-STEP PROCESS DATA ---
const PROCESS_STEPS = [
  {
    stepNum: "01",
    title: "Step 1: Trademark Search",
    description: "The first step in registering a trademark is conducting a comprehensive Trademark Search to ensure your desired mark is unique and not already registered. Our team will assist in choosing the correct trademark class based on the nature of your goods or services."
  },
  {
    stepNum: "02",
    title: "Step 2: Vienna Codification Check",
    description: "Your trademark must undergo a Vienna Classification check if it includes visual elements or logos. This classification system categorises figurative elements to facilitate trademark searches, ensuring a smooth registration process."
  },
  {
    stepNum: "03",
    title: "Step 3: Filing the Trademark Application",
    description: "Our experienced Intellectual Property lawyers will file the Trademark registration application using Form TM-A with the Trademark Registrar's office. We ensure the application meets all legal and procedural requirements to avoid unnecessary delays."
  },
  {
    stepNum: "04",
    title: "Step 4: Formality Check Pass/Fail",
    description: "Once submitted, the Trademark Registrar conducts a formality check. If all the required details are correctly provided, the application passes this stage. In case of any errors, necessary corrections must be made before proceeding."
  },
  {
    stepNum: "05",
    title: "Step 5: Trademark Examination",
    description: "A trademark officer at the Trademark Registrar's Office reviews the application to ensure compliance with legal standards. If there are objections, our experts will analyze the trademark examination report and guide you in preparing a proper response."
  },
  {
    stepNum: "06",
    title: "Step 6: Trademark Hearings (If Required)",
    description: "If objections persist, the applicant may need to attend multiple hearings before the Trademark Registrar to justify the trademark’s eligibility for registration. Our legal team will assist in preparing for these hearings."
  },
  {
    stepNum: "07",
    title: "Step 7: Publication in Trademark Journal",
    description: "Once approved, the Trademark Registrar publishes the trademark details in the Trademark Journal for public review. The trademark moves to the final registration stage if no opposition is filed within four months."
  },
  {
    stepNum: "08",
    title: "Step 8: Trademark Opposition Proceedings (If Any)",
    description: "Legal proceedings will be initiated if a third party opposes the register trademark within the stipulated period. Our team will assist in responding to and resolving trademark opposition matters effectively."
  },
  {
    stepNum: "09",
    title: "Step 9: Issuance of Trademark Registration Certificate",
    description: "Upon completing all stages, the Trademark Registrar issues the Trademark Registration Certificate. The registered trademark is valid for 10 years and can be renewed indefinitely."
  }
];

// --- COMPLIANCE CALENDAR DATA ---
const COMPLIANCE_ITEMS = [
  {
    period: "Immediate (Day 1)",
    title: "Form TM-A Filing & Priority Date",
    description: "Upon filing Form TM-A on the IP India portal, an official Application Number is generated within 24 hours, granting immediate right to use the ™ symbol."
  },
  {
    period: "Month 1 to 3",
    title: "Examination & Objection Period",
    description: "The Trademark Examiner reviews the application under Section 9 & 11. If an examination report is issued, a formal legal response must be filed within 30 days."
  },
  {
    period: "Month 4 to 8",
    title: "Trademarks Journal Publication",
    description: "The mark is published in the official Trademarks Journal for a 4-month statutory opposition period for third-party review."
  },
  {
    period: "Every 10 Years",
    title: "Registration & Renewal (Form TM-R)",
    description: "Upon clean journal publication, the ® Certificate is issued with 10 years validity. Trademarks must be renewed every 10 years by filing Form TM-R."
  }
];

// --- WHY FOUNDINGLEGALS DATA ---
const WHY_FOUNDINGLEGALS = [
  {
    title: "Comprehensive Attorney Search",
    description: "In-depth trademark availability search across all 45 Nice classes to detect phonetic and visual conflicts before filing."
  },
  {
    title: "50% MSME Fee Subsidy Assistance",
    description: "We assist eligible startups and MSMEs in claiming the 50% government fee subsidy (paying ₹4,500 instead of ₹9,000)."
  },
  {
    title: "Senior IP Attorney Oversight",
    description: "Form TM-A drafting and legal classification prepared under expert trademark attorney supervision."
  },
  {
    title: "End-to-End Status Tracking",
    description: "Real-time monitoring of journal publication, examination report updates, and certificate delivery."
  }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is a trademark and why is registration necessary in India?",
    answer: "A trademark is a unique name, logo, tagline, pattern, shape, sound, or symbol that identifies products or services of a business. Registration under the Trade Marks Act, 1999 gives you exclusive nationwide statutory rights, allows the use of the ® symbol, protects against competitor copying, and enables swift legal enforcement against infringement."
  },
  {
    question: "How long does trademark registration take, and when can I use ™ and ®?",
    answer: "You can use the ™ symbol immediately on Day 1 after filing Form TM-A and getting your Application Number. The complete registration process usually takes 6 to 12 months. Once the Trademark Registrar approves and issues the Registration Certificate, you can legally use the ® symbol."
  },
  {
    question: "What are the statutory government fees for trademark filing in India?",
    answer: "The government fee for Individuals, DPIIT-recognized Startups, and Udyam-registered MSMEs is ₹4,500 per class per application. For non-MSME companies, LLPs, and foreign entities, the statutory government fee is ₹9,000 per class per application."
  },
  {
    question: "Who can apply for trademark registration in India?",
    answer: "Any individual, sole proprietor, startup, company, LLP, partnership firm, NGO, trust, or foreign individual/entity claiming ownership or intent to use a mark in India can apply for trademark registration."
  },
  {
    question: "What documents are required to file Form TM-A?",
    answer: "Required documents include applicant identity proof (PAN/Aadhaar/Passport), address details, representation of the trademark (logo/wordmark), Udyam MSME / DPIIT Startup certificate (if claiming 50% fee discount), user affidavit with proof of prior usage (if applicable), and Form TM-48 Power of Attorney."
  },
  {
    question: "What is the difference between a trademark examination objection and opposition?",
    answer: "A trademark objection is raised by the Trademark Examiner under Section 9 (lacks distinctiveness) or Section 11 (conflict with prior marks) during official examination. A trademark opposition is raised by a third party (competitor or public) within 4 months after the trademark is published in the official Trademarks Journal."
  },
  {
    question: "How long is a registered trademark valid, and can it be renewed?",
    answer: "A registered trademark is valid for 10 years from the date of filing Form TM-A. It can be renewed indefinitely every 10 years by filing Form TM-R along with the prescribed statutory renewal fee."
  }
];

export default function TrademarkRegistrationLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [modalState, handleModalSubmit] = useForm("xqeyrnpp");

  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Track active section and sticky state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of TABS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }

      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        // Activate sticky backdrop curtain only when sticky at top
        setIsSticky(rect.top <= 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 175;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2c2925]">
      
      {/* ── HERO SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

          {/* LEFT: Text Content */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-[28px] sm:text-[38px] md:text-[46px] lg:text-[48px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
              Protect Your Brand with Trademark Registration
            </h1>
            
            <div className="text-[15px] md:text-[16px] text-brown-605 leading-relaxed space-y-4 mb-8">
              <p>
                <strong>Trademark Registration</strong> is the process of securing legal protection for your brand name, logo, or slogan across India under the Trade Marks Act, 1999. It helps prevent unauthorised use or similar branding that may cause confusion.
              </p>
              <p>
                The application is filed with the Trademark Office using <strong>Form TM-A</strong>, along with the required applicant and brand details. Once approved and registered, you can use the <strong>® symbol</strong> to identify your registered trademark.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openModal("Trademark Registration Service")}
                className="bg-[#48532B] hover:bg-olive-800 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
              >
                <span>Register Your Trademark</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[13px] text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-olive-600" />
                Senior IP Attorney Oversight
              </span>
            </div>
          </div>

          {/* RIGHT: Visual Card */}
          <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0">
            <div className="w-full rounded-[32px] overflow-hidden shadow-xl border border-[#E5E1D6] bg-gradient-to-br from-[#FAF9F6] via-[#F4F1EA] to-[#EBE7DF] p-8 relative">
              <div className="flex items-center justify-between mb-6 border-b border-brown-200/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#48532B] text-white flex items-center justify-center font-bold font-serif text-2xl shadow-md">
                    ®
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] font-bold text-[#1A1917]">Brand Protection</h3>
                    <p className="text-[12px] text-gray-500">Trade Marks Act, 1999</p>
                  </div>
                </div>
                <span className="bg-olive-100 text-olive-800 text-[11px] font-bold px-3 py-1 rounded-full">
                  Form TM-A
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-xl border border-gray-200/60">
                  <span className="text-gray-600 font-medium">Use ™ Symbol</span>
                  <span className="font-bold text-olive-700">Immediate (Day 1)</span>
                </div>
                <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-xl border border-gray-200/60">
                  <span className="text-gray-600 font-medium">MSME Govt Fee</span>
                  <span className="font-bold text-[#1A1917]">₹4,500 <span className="text-xs text-gray-400 font-normal line-through">₹9,000</span></span>
                </div>
                <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-xl border border-gray-200/60">
                  <span className="text-gray-600 font-medium">Validity Period</span>
                  <span className="font-bold text-[#1A1917]">10 Years (Renewable)</span>
                </div>
                <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-xl border border-gray-200/60">
                  <span className="text-gray-600 font-medium">Statutory Protection</span>
                  <span className="font-bold text-olive-700">Pan-India Section 135</span>
                </div>
              </div>

              <div className="bg-[#48532B]/5 rounded-2xl p-4 border border-[#48532B]/15 text-center">
                <p className="text-[12px] text-[#48532B] font-medium leading-relaxed">
                  🛡️ Prevent copycats &amp; unauthorized branding before launching nationwide.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STICKY TAB NAVIGATION & DETAILED SECTIONS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Sticky Horizontal Navigation Bar Container */}
        <div
          ref={navRef}
          className={`sticky top-[68px] sm:top-[74px] z-40 mb-10 -mx-6 md:-mx-12 px-6 md:px-12 py-2.5 transition-colors duration-200 ${
            isSticky ? "bg-white border-b border-[#E5E1D6]/80 shadow-xs" : "bg-transparent"
          }`}
        >
          {/* Solid white top curtain mask rendered ONLY when sticky */}
          {isSticky && (
            <div className="absolute -top-28 left-0 right-0 h-28 bg-white pointer-events-none" />
          )}

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E5E1D6] p-1.5 shadow-xs">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`px-5 py-2.5 rounded-xl text-[13.5px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#EBF3FF] text-[#1E3A8A] border border-[#BFDBFE] font-bold shadow-xs"
                          : "text-[#5C5954] hover:text-[#1A1917] hover:bg-white border border-transparent"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content Sections */}
        <div className="space-y-12">

          {/* Section 1: Overview */}
          <article id="overview" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Overview
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              Trademark registration involves more than filing an application. The right trademark class, applicant details, brand representation, and supporting documents must be prepared before filing with the Trademark Registry.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              The process includes trademark search, class selection, Form TM-A filing, document submission, and tracking the application through examination and further proceedings, if applicable. Once approved, the owner receives a Registration Certificate and legal rights over the mark.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#4A4642] leading-relaxed font-light">
              At FoundingLegals, we simplify the online trademark registration process by offering expert guidance through trademark searches, addressing objections or oppositions, and managing renewals. Our experienced trademark attorneys help you secure your trademark certificate and safeguard your intellectual property, building a strong legal foundation for your brand’s identity.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(a) Exclusive Legal Rights &amp; ® Symbol</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Nationwide statutory protection under the Trade Marks Act, 1999, preventing unauthorized brand copying.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl">
                <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">(b) 50% MSME Government Fee Subsidy</h4>
                <p className="text-[13px] text-[#6B6965] font-light leading-relaxed">
                  Eligible startups (DPIIT) and Udyam MSMEs save 50% on government filing fees (paying ₹4,500 instead of ₹9,000).
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Types */}
          <article id="types" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
            <div>
              <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917] mb-3">
                Types of Trademark Protection
              </h2>
              <p className="text-[15px] text-[#4A4642] font-light leading-relaxed">
                Depending on the nature of your brand, trademarks can protect different elements that help customers identify your business and distinguish it from competitors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRADEMARK_TYPES.map((type, idx) => (
                <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl hover:border-olive-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-olive-700 bg-olive-50 px-2.5 py-1 rounded-full border border-olive-200/50">
                        {type.category}
                      </span>
                      <span className="text-xl">{type.icon}</span>
                    </div>
                    <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-2">
                      {type.name}
                    </h3>
                    <p className="text-[13px] text-[#5C5954] leading-relaxed mb-4">
                      {type.description}
                    </p>
                  </div>
                  {type.example && (
                    <div className="pt-3 border-t border-[#E5E1D6]/70 text-[12px] text-gray-500 font-medium italic">
                      Example: {type.example}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>

          {/* Section 3: Requirements */}
          <article id="requirements" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Requirements for Trademark Registration
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REQUIREMENTS.map((req) => (
                <div key={req.number} className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl relative flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#48532B] text-white flex items-center justify-center text-[13px] font-bold mb-4 shadow-sm">
                      {req.number}
                    </div>
                    <h3 className="font-serif text-[17px] font-bold text-[#1A1917] mb-2">
                      {req.title}
                    </h3>
                    <p className="text-[13px] text-[#5C5954] leading-relaxed font-light">
                      {req.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 4: Process */}
          <article id="process" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Trademark Registration Step-by-Step Process
            </h2>

            <div className="space-y-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.stepNum}
                  className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 hover:border-olive-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A1917] text-white shrink-0 flex items-center justify-center text-[15px] font-bold font-serif shadow-md">
                    {step.stepNum}
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] font-bold text-[#1A1917] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#5C5954] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 5: Documents */}
          <article id="documents" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Documents Required for Trademark Registration
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Individuals */}
              <div className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-6 space-y-4">
                <div className="border-b border-[#E5E1D6] pb-3">
                  <h3 className="font-serif text-[18px] font-bold text-[#1A1917]">
                    For Individuals &amp; Sole Proprietors
                  </h3>
                </div>
                <ul className="space-y-3 text-[14px] text-[#4A4642]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>PAN Card</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Aadhaar Card / Passport or other identity proof</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Address details/proof, where applicable</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Trademark representation — name, logo, etc.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Udyam Certificate, if claiming the applicable small-enterprise fee</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>User affidavit and supporting evidence, if claiming prior use</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Form TM-48, where an agent/attorney is authorised to act</span>
                  </li>
                </ul>
              </div>

              {/* For Companies & LLPs */}
              <div className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-6 space-y-4">
                <div className="border-b border-[#E5E1D6] pb-3">
                  <h3 className="font-serif text-[18px] font-bold text-[#1A1917]">
                    For Companies, LLPs &amp; Partnerships
                  </h3>
                </div>
                <ul className="space-y-3 text-[14px] text-[#4A4642]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Certificate of Incorporation / Registration document</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>PAN of the entity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Details/identity proof of the authorised signatory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Trademark representation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>DPIIT Startup Recognition Certificate / Udyam Certificate, if applicable</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>User affidavit and supporting evidence, if claiming prior use</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-olive-650 shrink-0 mt-1" />
                    <span>Form TM-48, where an agent/attorney is authorised to act</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 6: Compliance Calendar */}
          <article id="compliance-calendar" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917] mb-2">
                Trademark Registration Compliance Calendar &amp; Statutory Timelines
              </h2>
              <p className="text-[15px] text-[#4A4642] font-light">
                Trademark protection follows a structured statutory timeline prescribed under the Trade Marks Act, 1999:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
              {COMPLIANCE_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-olive-800 uppercase tracking-widest bg-olive-100 px-3 py-1 rounded-full inline-block mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-[16px] font-bold text-[#1A1917] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#5C5954] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 7: Why FoundingLegals */}
          <article id="why-foundinglegals" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917] mb-2">
                Why FoundingLegals for Trademark Registration?
              </h2>
              <p className="text-[15px] text-[#4A4642] font-light">
                FoundingLegals provides complete legal guidance, trademark search, and end-to-end IP protection:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {WHY_FOUNDINGLEGALS.map((why, idx) => (
                <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#E5E1D6] rounded-2xl space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-olive-100 text-olive-800 flex items-center justify-center font-bold text-[14px]">
                    ✓
                  </div>
                  <h3 className="font-serif text-[17px] font-bold text-[#1A1917]">
                    {why.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5C5954] font-light leading-relaxed">
                    {why.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Section 8: FAQ's */}
          <article id="faqs" className="scroll-mt-44 md:scroll-mt-48 bg-white border border-[#E5E1D6] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-[24px] sm:text-[32px] font-medium text-[#1A1917]">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-[#E5E1D6]">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left flex items-center justify-between gap-4 py-2 text-[16px] font-medium text-[#1A1917] hover:text-olive-700 transition-colors cursor-pointer"
                    >
                      <span className="font-serif">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-olive-650" : "text-gray-400"}`} />
                    </button>
                    {isOpen && (
                      <div className="pt-2 pb-3 text-[14px] text-[#5C5954] leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </article>

        </div>
      </section>

      {/* ── MODAL FORM FOR SERVICE ENQUIRY ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#FAF9F6] to-[#F4F1EA] border-b border-gray-200/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-olive-700 uppercase bg-olive-100/60 px-2.5 py-1 rounded-full">
                  Opt &amp; Register Service
                </span>
                <h3 className="font-serif text-[20px] font-bold text-[#1A1917] mt-1">
                  Start Trademark Registration
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            {modalState.succeeded ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-olive-100 text-olive-800 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900">Application Submitted!</h4>
                <p className="text-sm text-gray-600">
                  Thank you for opting for <strong>{selectedService}</strong>. Our senior IP attorney will reach out within 2 business hours.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-[#48532B] text-white font-semibold rounded-xl text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="p-6 space-y-4 bg-white">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Arjun Mehta"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-800 bg-[#FAF9F6] focus:outline-none focus:border-olive-500 placeholder:text-gray-300"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="arjun@startup.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-800 bg-[#FAF9F6] focus:outline-none focus:border-olive-500 placeholder:text-gray-300"
                    />
                    <ValidationError prefix="Email" field="email" errors={modalState.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Mobile Number
                    </label>
                    <div className="flex gap-2">
                      <span className="flex items-center px-3 border border-gray-200 rounded-xl bg-[#FAF9F6] text-[13px] text-gray-500 flex-shrink-0">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="98765 43210"
                        className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-800 bg-[#FAF9F6] focus:outline-none focus:border-olive-500 placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Selected Service
                  </label>
                  <input
                    type="text"
                    name="service"
                    readOnly
                    value={selectedService}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-600 bg-gray-50 font-medium cursor-not-allowed focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Brand Name / Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Enter your proposed brand name or logo details..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-800 bg-[#FAF9F6] focus:outline-none focus:border-olive-500 placeholder:text-gray-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={modalState.submitting}
                  className="w-full py-3.5 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-bold text-[14px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {modalState.submitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Form &amp; Opt Service
                    </>
                  )}
                </button>
                <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                  We guarantee 100% confidentiality. Your data is protected by industry standard encryption.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
