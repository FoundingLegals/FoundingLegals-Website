"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, Search, Star } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

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
    description: "Essential company registration and incorporation kit.",
    badge: "Essential Setup",
    badgeStyles: "bg-gray-100 text-gray-700 border border-gray-200/50",
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
  },
  {
    name: "STANDARD",
    price: "₹6,999",
    feeSubtext: "+ Govt Fees",
    description: "Standard package including government registration and acceleration programs.",
    badge: "Most Popular",
    badgeStyles: "bg-olive-100 text-olive-800 border border-olive-200/50",
    isPopular: true,
    serviceName: "Pvt Ltd Company Incorporation - STANDARD Plan (₹6,999 + Govt Fees)",
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
      "INC 20A / Business commencement certificate",
      "MSME Registration",
      "Startup India Registration"
    ]
  },
  {
    name: "PREMIUM",
    price: "₹8,999",
    feeSubtext: "+ Govt Fees",
    description: "Comprehensive package including trademarks, physical DSCs and investor decks.",
    badge: "Best Value",
    badgeStyles: "bg-brown-100 text-brown-900 border border-brown-200/30",
    serviceName: "Pvt Ltd Company Incorporation - PREMIUM Plan (₹8,999 + Govt Fees)",
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
      "INC 20A / Business commencement certificate",
      "MSME Registration",
      "Startup India Registration",
      "Digital signature certificate",
      "Company DSC",
      "Trademark Registration",
      "Pitch Deck"
    ]
  }
];

export default function NameRegistrationLayout() {
  const [activeSection, setActiveSection] = useState("formation-types");
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

            <div className="mt-8">
              <button
                onClick={() => openModal("Company Registration")}
                className="bg-olive-700 hover:bg-olive-800 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
              >
                Register Your Company
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

        <div className="space-y-6 pt-4 mb-10 pb-4">
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1917] mb-2">
              Choose the Best Pvt Ltd Company Registration Plan
            </h2>
            <p className="text-[13px] text-gray-500 max-w-xl">
              Select the plan that fits your business needs. All plans include standard drafting, filings, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch pt-2">
            {INCORPORATION_PLANS.map((plan) => {
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
                      {ALL_FEATURES.map((feature, fIdx) => {
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

            <div className="bg-[#FAF9F6] rounded-2xl border border-gray-200/60 p-5 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Founding Legals Price</p>
              <p className="text-[18px] font-serif font-bold text-olive-700 mb-3">Starts at ₹1,999 <span className="text-xs text-gray-400 font-sans font-normal block mt-0.5">+ Govt fee</span></p>
              <button
                onClick={() => openModal("Company Registration package")}
                className="w-full text-center py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all shadow-sm cursor-pointer"
              >
                Register your Business
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

      {/* ── OPT SERVICE MODAL ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {modalState.succeeded ? (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
                <div className="w-16 h-16 bg-olive-50 rounded-full flex items-center justify-center mb-6 border border-olive-100">
                  <Check className="w-8 h-8 text-olive-600 stroke-[3]" />
                </div>
                <h3 className="font-serif text-[24px] font-semibold text-brown-900 mb-3">Service Selected!</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed max-w-sm mx-auto mb-6">
                  Thank you for opting for <strong className="text-olive-700">{selectedService}</strong>. A Founding Legals expert will contact you shortly to complete your application.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    window.location.reload();
                  }}
                  className="px-6 py-2.5 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-bold text-[13px] transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="bg-olive-600 p-6 text-white">
                  <h3 className="font-serif text-[20px] font-semibold mb-1">Opt Service Form</h3>
                  <p className="text-[12px] text-olive-100">
                    Provide your details to initiate company registration.
                  </p>
                </div>

                {/* Form Body */}
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
                      Special Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your business goals or structure preference..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-800 bg-[#FAF9F6] focus:outline-none focus:border-olive-500 placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={modalState.submitting}
                    className="w-full py-3.5 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-bold text-[14px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {modalState.submitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Form & Opt Service
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                    We guarantee 100% confidentiality. Your data is protected by industry standard encryption.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
