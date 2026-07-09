"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, HelpCircle, Star, ShieldCheck } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- TABLE OF CONTENT ITEMS ---
const TOC_ITEMS = [
  { id: "documents-required", label: "Documents required for registration" },
  { id: "incorporation-process", label: "Incorporation Process" },
  { id: "compliances-requirements", label: "Compliances & Requirements" },
  { id: "advantages-disadvantages", label: "Advantages & Disadvantages" },
  { id: "registration-time", label: "Registration Time" },
  { id: "registration-fees", label: "Fees" },
  { id: "checklist", label: "Checklist for Registration" },
  { id: "faqs", label: "Frequently Asked Questions" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "Is it mandatory to register my business as a Sole Proprietorship?",
    answer: "No, there is no mandatory registration required to start a Sole Proprietorship. However, to open a current bank account and comply with taxation laws, you will need to get basic registrations like GST, MSME (Udyam), or a Shop and Establishment license."
  },
  {
    question: "How can I register my Proprietorship firm with GST authority?",
    answer: "You can apply for GST registration online on the official GST portal by submitting your PAN card, Aadhaar card, photograph, proof of business address (like a utility bill or rental agreement), and bank details."
  },
  {
    question: "Should I register my Sole Proprietorship under the MSME Act?",
    answer: "Yes, obtaining an MSME (Udyam) registration is highly recommended as it provides access to government schemes, cheaper credit, subsidy on interest rates, and protection against delayed payments."
  },
  {
    question: "How can I select a name for my Sole Proprietorship Firm?",
    answer: "You can choose any name for your proprietorship as long as it does not violate active trademarks or contain restricted words. Since it is not registered with the MCA, the name does not have absolute global uniqueness, but it should be locally unique."
  },
  {
    question: "Are there any restrictions on the types of businesses that can operate as Sole Proprietorships?",
    answer: "Generally, any legal business activity can operate as a proprietorship. However, businesses wishing to raise venture capital, issue shares, or operate in sectors requiring corporate status (like banking or insurance) cannot use this structure."
  },
  {
    question: "What is the difference between a Sole Proprietorship and a One Person Company (OPC)?",
    answer: "A Sole Proprietorship has unlimited personal liability and is not a separate legal entity. An OPC is a separate legal entity registered under the Companies Act 2013, offering limited liability to the single owner, but carries higher compliance."
  },
  {
    question: "How easy is it to close a Sole Proprietorship business?",
    answer: "Closing a Sole Proprietorship is extremely easy and requires no formal government filing for dissolution. You simply need to cancel your GST registration, close your business current bank account, and surrender any local licenses."
  },
  {
    question: "Can I convert my Sole Proprietorship firm to some other business structure?",
    answer: "Yes, you can easily convert your Sole Proprietorship into a Private Limited Company or an LLP by executing a conversion agreement, transferring assets/liabilities, and complying with the incorporation process."
  }
];

export default function SoleProprietorshipRegistrationLayout() {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brown-900">
      
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F0EB] to-white pt-28 md:pt-[130px] pb-16 px-6 md:px-12 border-b border-brown-100/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Title and Intro */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50/80 px-4 py-1.5 rounded-full border border-olive-200/40 inline-block">
              Sole Proprietorships
            </span>
            <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-semibold text-[#1A1917] leading-[1.1] tracking-tight">
              Hassle Free Company Registrations with <span className="text-olive-600 italic">Founding Legals</span>
            </h1>
            <p className="text-[16px] text-brown-600 font-medium">
              With ₹0 hidden charges. Get incorporated cleanly and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openModal("Proprietorship Registration Package")}
                className="bg-olive-600 hover:bg-olive-700 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 text-center"
              >
                Register your business
              </button>
            </div>
          </div>

          {/* Right Column: What's Included Card */}
          <div className="lg:col-span-5 bg-white border border-olive-200/50 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="font-serif text-[18px] font-bold text-brown-900 mb-5 pb-3 border-b border-gray-150 flex items-center gap-2">
              <Star className="w-5 h-5 text-olive-600 fill-olive-600" /> What’s Included?
            </h3>
            
            <ul className="space-y-3 text-[13px] text-brown-700">
              {[
                { title: "Registration in 7-10 Business Days", sub: "Excluding Government Approval time" },
                { title: "Company PAN and TAN" },
                { title: "Company Name Approval" },
                { title: "MOA & AOA" },
                { title: "Incorporation Certificate" },
                { title: "DSC Tokens" },
                { title: "DSC Support & Shipping" },
                { title: "Digital Signature Certificate" },
                { title: "Director’s Identification Number (DIN)" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive-650 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brown-900">{item.title}</span>
                    {item.sub && <span className="block text-[11px] text-brown-400 font-medium">{item.sub}</span>}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-gray-100 text-center">
              <p className="text-[11.5px] text-olive-700 font-semibold bg-olive-50/60 py-2 rounded-xl border border-olive-100/50">
                ★ Up to 60% off on Payroll! Plans start at just ₹1499/mo
              </p>
              <span className="text-[10px] text-brown-400 font-medium block mt-2">*Excluding Government Approval time</span>
            </div>
          </div>

        </div>

        {/* Decorative background shapes */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-olive-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#F5F2EB] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* ── TWO-COLUMN ARTICLE LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          
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
                        ? "bg-olive-50/60 text-olive-700 border-l-4 border-olive-650 font-semibold pl-3"
                        : "text-[#5C5954] hover:text-[#1A1917] border-l-4 border-transparent pl-3"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl border border-gray-250 p-5 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Founding Legals Proprietorship</p>
              <p className="text-[18px] font-serif font-bold text-olive-700 mb-3">Licensing & Setup Support</p>
              <button
                onClick={() => openModal("Proprietorship Consultation Package")}
                className="w-full text-center py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all shadow-sm cursor-pointer"
              >
                Inquire and Get Started
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: Content */}
          <div className="space-y-16 lg:pl-4">
            
            {/* Header Content */}
            <div className="space-y-4">
              <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[38px] font-semibold text-brown-900 leading-tight">
                Sole Proprietorship Firm Registration in India
              </h2>
              <p className="text-[14.5px] text-brown-650 leading-relaxed">
                In a Sole Proprietorship, there is no separate legal entity. As a single owner, you bear full responsibility and liability for managing the business. This form of business structure comes with its list of advantages and disadvantages. Small businesses mainly prefer Sole Proprietorship due to its simple and accessible registration process.
              </p>
            </div>

            {/* Note on MCA */}
            <div className="bg-amber-50/80 border border-amber-250 rounded-2xl p-5 text-[13.5px] text-amber-900 leading-relaxed">
              <strong className="block text-amber-950 font-serif mb-1">⚠️ Important Compliance Note:</strong>
              Please note that Sole Proprietorships do not have an official registration with the Ministry of Corporate Affairs (MCA). As a result, Founding Legals does not provide direct online automated registration services for Sole Proprietorships. Our automated portal offerings are limited to Private Limited Companies, Limited Liability Partnerships (LLPs), and One Person Companies (OPCs). However, our compliance team is happy to manually assist you with local licenses, Shop & Establishments, and GST setup.
            </div>

            {/* Section 1: Documents Required */}
            <article id="documents-required" className="scroll-mt-28 space-y-6">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Documents Required to Register a Sole Proprietorship
              </h3>
              <p className="text-[14.5px] text-brown-750">
                As an individual or a firm, Sole Proprietorship registration requires the below-mentioned documents:
              </p>
              
              <div className="space-y-5 text-[14.5px] text-brown-750">
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">1. Identity Proof</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Passport / Aadhar card / Voter ID / Driver's License of the Owner</li>
                    <li>PAN card (Mandatory)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">2. Address Proof</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Utility bills or Bank Statements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">3. Proof of Registered Office</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Ownership of Property:</strong> Any utility bill like an electricity bill or corporation tax receipt dated no more than 30 days old.</li>
                    <li><strong>Right to use the Property:</strong> Rental Agreement or No Objection Certificate (NOC) from the owner.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 2: Incorporation Process */}
            <article id="incorporation-process" className="scroll-mt-28 space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Sole Proprietorship Registration Process
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                Sole Proprietorships often operate under your legal name, and there may be no formal registration requirement to start and run a business as a sole proprietor. However, these are a few general steps to successfully start this type of business structure:
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-[14.5px] text-brown-750">
                <li><strong>Apply for a PAN & TAN of the business:</strong> Establish separate tax records if operating under a custom brand.</li>
                <li><strong>Choose a business name and nature of the business:</strong> Select a name that fits your branding.</li>
                <li><strong>Open a bank account:</strong> Set up a current account to manage business-related transactions.</li>
              </ol>
              <p className="text-[14.5px] text-brown-750 pt-2 font-semibold">
                Basic registrations or licenses needed for a Sole Proprietorship:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-brown-750">
                <li><strong>Shop and Establishment Act:</strong> Registration certificate from the state where the business is located.</li>
                <li><strong>GST Registration:</strong> Mandatory if the business turnover exceeds Rs. 40 Lakhs (for goods) or Rs. 20 Lakhs (for services).</li>
                <li><strong>MSME Registration (Udyam):</strong> Highly recommended under the MSME Act, although optional.</li>
              </ul>
            </article>

            {/* Section 3: Compliances & Requirements */}
            <article id="compliances-requirements" className="scroll-mt-28 space-y-5">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Compliances for Sole Proprietorship
              </h3>
              
              <div className="space-y-4 text-[14.5px] text-brown-750">
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">For Owner</h4>
                  <p className="leading-relaxed">
                    There is no minimum or maximum number of owners for a Sole Proprietorship because, by definition, it is owned and operated by a single individual.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">For Sole Proprietorship</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>File Income Tax Returns through forms ITR-3 or ITR-4.</li>
                    <li>File monthly and quarterly GST returns if registered.</li>
                    <li>File TDS forms every quarter if applicable.</li>
                    <li>Apply for a Tax Audit if the annual turnover exceeds Rs. 1 Crore (for commerce-related businesses) or Rs. 50 Lakhs (for Professional & Consultancy based services).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Minimum Capital Requirement</h4>
                  <p className="leading-relaxed">
                    There is no minimum capital requirement for a Sole Proprietorship. As a sole owner, you can use your funds and resources to start and operate the business.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1.5">Tax Rates (AY 2024-25)</h4>
                  <p className="leading-relaxed mb-3">
                    Since a Sole Proprietorship is not a separate legal entity, your income as a sole proprietor will be taxed as personal income under the slab system.
                  </p>

                  <div className="overflow-x-auto border border-brown-200/40 rounded-xl">
                    <table className="w-full text-left border-collapse text-[13px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-brown-200/30 font-serif font-bold text-brown-900">
                          <th className="p-3">Net Income Slabs</th>
                          <th className="p-3 text-center">Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brown-100/30 text-brown-700">
                        {[
                          { slab: "Up to Rs. 3,00,000", rate: "N/A" },
                          { slab: "Rs. 3,00,001 to Rs. 6,00,000", rate: "5% above Rs. 3,00,000" },
                          { slab: "Rs. 6,00,001 to Rs. 9,00,000", rate: "Rs. 15,000 + 10% above Rs. 6,00,000" },
                          { slab: "Rs. 9,00,001 to Rs. 12,00,000", rate: "Rs. 45,000 + 15% above Rs. 9,00,000" },
                          { slab: "Rs. 12,00,001 to Rs. 15,00,000", rate: "Rs. 90,000 + 20% above Rs. 12,00,000" },
                          { slab: "Above Rs. 15,00,000", rate: "Rs. 1,50,000 + 30% above Rs. 15,00,000" }
                        ].map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="p-3 font-semibold text-brown-900">{item.slab}</td>
                            <td className="p-3 text-center font-mono text-olive-750">{item.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[11.5px] text-brown-500 mt-2">
                    *Proprietors can opt for the Alternate Tax Regime, which provides different tax rates. Surcharges and Health & Education Cess (4%) apply additionally.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4: Advantages & Disadvantages */}
            <article id="advantages-disadvantages" className="scroll-mt-28 space-y-6">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Advantages and Disadvantages of Sole Proprietorship
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF9F6] border border-olive-200/40 p-5 rounded-2xl space-y-3">
                  <h4 className="font-bold text-olive-850 text-[15px] flex items-center gap-2">
                    <Check className="w-4 h-4 text-olive-650" /> Advantages
                  </h4>
                  <ul className="space-y-2 text-[13px] text-brown-700 list-disc pl-4.5">
                    <li><strong>Pass-through tax advantage:</strong> Profit is taxed directly as personal income, avoiding double corporate/individual taxation.</li>
                    <li><strong>Ease of creation:</strong> No formal incorporation or heavy setup costs, making it very economical.</li>
                    <li><strong>Fewer compliances:</strong> Only registered under tax departments (Income Tax & GST), minimizing administration.</li>
                    <li><strong>Undivided authority:</strong> Full ownership, control, and prompt decision-making without board approvals.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF9F6] border border-red-200/40 p-5 rounded-2xl space-y-3">
                  <h4 className="font-bold text-red-850 text-[15px] flex items-center gap-2">
                    <span className="text-red-650 font-serif">⚠️</span> Disadvantages
                  </h4>
                  <ul className="space-y-2 text-[13px] text-brown-700 list-disc pl-4.5">
                    <li><strong>Unlimited liability:</strong> Personally liable for all business debts; personal assets are at risk.</li>
                    <li><strong>No perpetual succession:</strong> The business ends if the sole owner becomes incapacitated or passes away.</li>
                    <li><strong>Challenges in raising funds:</strong> Relies on personal savings, loans, and credit; cannot raise VC equity funding.</li>
                    <li><strong>Limited growth:</strong> Fundraising and succession issues make it difficult to scale.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 5: Registration Time */}
            <article id="registration-time" className="scroll-mt-28 space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Sole Proprietorship Registration Time
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                Since there is no legal incorporation process, registration time refers to the timeline for local tax and MSME registrations:
              </p>
              
              <ul className="list-disc pl-5 text-[14px] text-brown-750 space-y-2">
                <li><strong>MSME Registration (Udyam):</strong> 2 - 4 Working Days</li>
                <li><strong>GST Registration:</strong> 7 - 10 Working Days</li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-250 rounded-xl p-4 text-[13.5px] space-y-1.5">
                <span className="font-bold text-brown-855">Common Causes of Registration Delays:</span>
                <ul className="list-disc pl-5 text-brown-600 space-y-0.5">
                  <li>Insufficient or inaccurate documentation.</li>
                  <li>Requirement of extra regulatory approvals or zone permits.</li>
                  <li>Slower verification procedures by state officers.</li>
                  <li>Payment processing delays.</li>
                </ul>
              </div>
            </article>

            {/* Section 6: Fees */}
            <article id="registration-fees" className="scroll-mt-28 space-y-3">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Sole Proprietorship Registration Fees
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                The registration charges for a Sole Proprietorship range from <strong>Rs. 500 to Rs. 2,000</strong>. This cost includes basic registrations like GST, MSME, or Shop and Establishments.
              </p>
              <p className="text-[13.5px] text-brown-600">
                *The total cost varies depending on your state jurisdiction, type of business, and professional service fees.
              </p>
            </article>

            {/* Section 7: Checklist */}
            <article id="checklist" className="scroll-mt-28 space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Checklist for Registration
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-[13.5px] text-brown-700">
                {[
                  "Choose a unique name for your firm.",
                  "Select the nature of your business.",
                  "Obtain PAN and TAN for the Firm.",
                  "Apply for GST Registration.",
                  "Apply for MSME Registration, if applicable.",
                  "Apply for Shop and Establishment License.",
                  "Open a Current Account.",
                  "Stay up-to-date with latest regulations."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#FAF9F6] border border-brown-100/50 px-4 py-3 rounded-xl">
                    <Check className="w-4 h-4 text-olive-650 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 8: FAQs */}
            <article id="faqs" className="scroll-mt-28 space-y-6">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border border-brown-200/40 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4.5 text-left bg-white hover:bg-cream-light/20 transition-colors"
                      >
                        <span className="font-serif font-bold text-[14.5px] text-brown-900">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-brown-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="p-4.5 bg-gray-50/50 border-t border-brown-100/30 text-[13.5px] text-brown-650 leading-relaxed">
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

      {/* ── FOOTER CALL-TO-ACTION BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-8">
        <div className="bg-gradient-to-br from-olive-600 to-olive-800 text-white rounded-3xl p-8 md:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block">
              Hassle free company registration through Founding Legals
            </span>
            <h3 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-tight">
              Draft & Register Your Sole Proprietorship
            </h3>
            <p className="text-[14px] sm:text-[15.5px] text-olive-100 leading-relaxed max-w-xl mx-auto">
              Get premium compliance advising, Udyam registration support, and GST licensing advice from experts.
            </p>
            <div className="pt-4">
              <button
                onClick={() => openModal("Proprietorship Registration Inquiry")}
                className="px-8 py-3.5 bg-white hover:bg-cream text-olive-800 font-bold text-[13px] rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                Inquire about Proprietorship setup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPT SERVICE MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-brown-900/60 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full relative z-10 animate-scale-up border border-brown-100">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {modalState.succeeded ? (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
                <div className="w-16 h-16 bg-olive-50 rounded-full flex items-center justify-center mb-6 border border-olive-100">
                  <Check className="w-8 h-8 text-olive-650 stroke-[3]" />
                </div>
                <h3 className="font-serif text-[24px] font-semibold text-brown-900 mb-3">Enquiry Received!</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed max-w-sm mx-auto mb-6">
                  Thank you for inquiring about <strong className="text-olive-700">{selectedService}</strong>. A Founding Legals specialist will reach out shortly to assist you.
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
                  <h3 className="font-serif text-[20px] font-semibold mb-1">Enquiry Form</h3>
                  <p className="text-[12px] text-olive-100">
                    Provide your details to speak with a proprietorship registration specialist.
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
