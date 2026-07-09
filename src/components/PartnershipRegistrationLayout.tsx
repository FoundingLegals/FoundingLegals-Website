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
  { id: "registration-number", label: "Registration Number" },
  { id: "registration-time", label: "Registration Time" },
  { id: "registration-fees", label: "Fees" },
  { id: "checklist", label: "Checklist for Registration" },
  { id: "faqs", label: "Frequently Asked Questions" }
];



// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "Do I have to register my partnership firm?",
    answer: "No, under the Indian Partnership Act 1932, registering a partnership firm is not mandatory. However, registering provides legal advantages, such as the ability to file lawsuits against third parties or other partners in the firm's name."
  },
  {
    question: "How do I choose a unique name for my Partnership Firm?",
    answer: "The name should be unique and not violate trademarks. It should not contain restricted words like 'National', 'Empire', or 'Crown' without permission, and must not imply government approval or patronage."
  },
  {
    question: "What is the validity of the certificate of registration for my partnership firm?",
    answer: "A Partnership Firm registration certificate is valid for the entire lifetime of the partnership, as long as the firm is not dissolved or wound up by the partners."
  },
  {
    question: "How can I check if my firm has been officially registered?",
    answer: "You can verify the registration status by checking with the Registrar of Firms (RoF) in the respective state where the application was submitted."
  },
  {
    question: "When should I register as a Limited Liability Partnership (LLP) instead of a partnership?",
    answer: "You should choose an LLP if you want to protect your personal assets (limited liability) and want the partnership to have a separate legal identity. Traditional partnerships carry unlimited personal liability for all partners."
  },
  {
    question: "Can I convert my partnership firm to a LLP?",
    answer: "Yes, an existing partnership firm can be converted into an LLP by complying with the provisions of Chapter X of the LLP Act 2008 and filing Form 17 with the MCA."
  }
];

export default function PartnershipRegistrationLayout() {
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
              Partnership Firms
            </span>
            <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-semibold text-[#1A1917] leading-[1.1] tracking-tight">
              Hassle Free Company Registrations with <span className="text-olive-600 italic">Founding Legals</span>
            </h1>
            <p className="text-[16px] text-brown-600 font-medium">
              With ₹0 hidden charges. Get incorporated cleanly and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openModal("Partnership Registration Package")}
                className="bg-olive-600 hover:bg-olive-700 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 text-center"
              >
                Register your business
              </button>
            </div>
          </div>

          {/* Right Column: What's Included Card */}
          <div className="lg:col-span-5 bg-white border border-olive-200/50 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="font-serif text-[18px] font-bold text-brown-900 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
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
                  <Check className="w-4 h-4 text-olive-600 shrink-0 mt-0.5" />
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
                        ? "bg-olive-50/60 text-olive-700 border-l-4 border-olive-600 font-semibold pl-3"
                        : "text-[#5C5954] hover:text-[#1A1917] border-l-4 border-transparent pl-3"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl border border-gray-250 p-5 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Founding Legals Partnership</p>
              <p className="text-[18px] font-serif font-bold text-olive-700 mb-3">Manual Drafting & Support</p>
              <button
                onClick={() => openModal("Partnership Consultation Package")}
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
                Partnership Firm Registration in India
              </h2>
              <p className="text-[14.5px] text-brown-650 leading-relaxed">
                A partnership is a type of business structure in which two or more individuals or entities collaborate in terms of resources, skills, and capital to operate a business together. Indian Partnership Act 1932 is the governing law that regulates partnership firms in India. It is a popular choice for small businesses, professional practices (e.g., law firms, medical practices), and service-based businesses due to its flexibility and relatively simple formation process.
              </p>
            </div>

            {/* Note on MCA & Rize */}
            <div className="bg-amber-50/80 border border-amber-250 rounded-2xl p-5 text-[13.5px] text-amber-900 leading-relaxed">
              <strong className="block text-amber-950 font-serif mb-1">⚠️ Important Compliance Note:</strong>
              Please note that Partnerships do not have an official registration with the Ministry of Corporate Affairs (MCA). As a result, Founding Legals does not provide direct online automated registration services for Partnerships. Our automated portal offerings are limited to Private Limited Companies, Limited Liability Partnerships (LLPs), and One Person Companies (OPCs). However, our compliance team is happy to manually assist you with drafting deeds and obtaining local registrations.
            </div>

            {/* Section 1: Documents Required */}
            <article id="documents-required" className="scroll-mt-28 space-y-6">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Documents Required to Register a Partnership Firm
              </h3>
              
              <div className="space-y-5 text-[14.5px] text-brown-750">
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">1. Identity Proof and Address Proof of Partners</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Passport / Aadhar card / Voter ID / Driver's License of Partners</li>
                    <li>PAN card (Mandatory)</li>
                    <li>Utility bills or Bank Statements as address proof</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">2. Proof of Registered Office</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Ownership of Property:</strong> You can provide proof of ownership, such as an electricity bill or corporation tax receipt dated no more than 30 days old.</li>
                    <li><strong>Right to Use the Property:</strong> You can demonstrate your right to use the property by presenting a rental agreement or a No Objection Certificate (NOC) from the property owner.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">3. Partnership Deed</h4>
                  <p className="leading-relaxed">
                    A partnership deed is a crucial agreement that outlines the rights, responsibilities, profit-sharing, and other obligations of the partners. While it can be recorded verbally, it is highly advisable to formalize a written partnership deed with the Registrar of Firms.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">4. Affidavit</h4>
                  <p className="leading-relaxed">
                    An affidavit ensuring all the submitted documents are accurate, true, and legally valid.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 2: Incorporation Process */}
            <article id="incorporation-process" className="scroll-mt-28 space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Partnership Firm Registration Process
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                Since a partnership isn't considered a separate legal entity, it may not require formal registration to begin. However, you can still register your business and get a certificate by taking the following steps:
              </p>
              <ol className="list-decimal pl-5 space-y-3.5 text-[14.5px] text-brown-750">
                <li><strong>Choose the name of the business:</strong> Establish a unique name that doesn't violate active trademarks.</li>
                <li><strong>Apply to the “Registrar of Firms” through Form A:</strong> Fill out the registrar application.</li>
                <li><strong>Attach the required documents:</strong> Include identity and address proofs, specimen of Affidavit, etc.</li>
                <li><strong>Attach the duly signed copy of the Partnership Deed:</strong> Needs to be signed by all partners.</li>
                <li><strong>Pay the Fees and submit the form:</strong> Complete the registrar processing payment.</li>
                <li><strong>Get the Registration Certificate:</strong> Once approved, your firm is registered and a certificate is issued.</li>
                <li><strong>Open a bank account:</strong> Set up a current account in the name of your business.</li>
                <li><strong>Obtain PAN and TAN:</strong> Secure tax identification numbers from the Income Tax Authority.</li>
              </ol>
            </article>

            {/* Section 3: Compliances & Requirements */}
            <article id="compliances-requirements" className="scroll-mt-28 space-y-5">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Compliances for a Partnership Firm Registration
              </h3>
              
              <div className="space-y-4 text-[14.5px] text-brown-750">
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">For Partners</h4>
                  <p className="leading-relaxed">
                    A partnership typically requires a minimum of two partners to be formed. The suggested number of partners cannot be more than 50 for any Partnership firm.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">For Partnership Firm</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>File the Income Tax Return through ITR-5, irrespective of revenue or loss.</li>
                    <li>File quarterly TDS returns, if applicable.</li>
                    <li>In case of a GST registration, file GST returns every month and quarter as per the scheme under which you have registered.</li>
                    <li>Obtain a Tax Audit if the annual turnover exceeds Rs. 1 Crore.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Minimum Capital Requirement</h4>
                  <p className="leading-relaxed">
                    A partnership firm has no minimum capital requirement mandated by law. The capital invested in a partnership is typically determined by mutual agreement among the partners and is specified in the Partnership Deed.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Tax Rates</h4>
                  <p className="leading-relaxed">
                    For the Assessment Year 2023-24, a Partnership Firm is taxable at 30%. A surcharge of 12% is levied on the amount of income tax if the total income exceeds ₹ 1 Crore. Health & Education cess at 4% is applied on the amount of income tax plus surcharge.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4: Advantages & Disadvantages */}
            <article id="advantages-disadvantages" className="scroll-mt-28 space-y-6">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Advantages and Disadvantages of Partnership Registration
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF9F6] border border-olive-200/40 p-5 rounded-2xl space-y-3">
                  <h4 className="font-bold text-olive-800 text-[15px] flex items-center gap-2">
                    <Check className="w-4 h-4 text-olive-650" /> Advantages
                  </h4>
                  <ul className="space-y-2 text-[13.5px] text-brown-700 list-disc pl-4.5">
                    <li><strong>Easy Registration process:</strong> Simple documentation and registration steps with the Registrar of Firms.</li>
                    <li><strong>Less compliance:</strong> Far fewer regulations compared to Private Limited Companies or LLPs.</li>
                    <li><strong>Cost-efficiency:</strong> Setup registration and stamping fees are cheaper than other options.</li>
                    <li><strong>Sharing of ownership:</strong> Joint liabilities help split operational duties and risks.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF9F6] border border-red-200/40 p-5 rounded-2xl space-y-3">
                  <h4 className="font-bold text-red-800 text-[15px] flex items-center gap-2">
                    <span className="text-red-650 font-serif">⚠️</span> Disadvantages
                  </h4>
                  <ul className="space-y-2 text-[13.5px] text-brown-700 list-disc pl-4.5">
                    <li><strong>Unlimited Liabilities:</strong> Partners bear unlimited liability; personal assets can be used to recover debts.</li>
                    <li><strong>Raising funds:</strong> Lack of share capital makes equity fundraising from VCs virtually impossible.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 5: Registration Number */}
            <article id="registration-number" className="scroll-mt-28 space-y-3">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Registration Number for a Partnership Firm
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                Following the approval of Form A and the Partnership Deed by the Registrar of Firms (RoF), you will receive a Certificate of Registration. This registration certificate includes unique details such as the Firm's name, Registration Number, Date of Registration, and the State jurisdiction where the firm has been registered.
              </p>
            </article>

            {/* Section 6: Registration Time */}
            <article id="registration-time" className="scroll-mt-28 space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Partnership Firm Registration Time
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                Excluding Government Approval time, it takes approximately <strong>7-10 days</strong> to register a Partnership Firm with the Registrar of Firms. However, the duration may vary depending on local state office backlogs.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-[13.5px] space-y-1.5">
                <span className="font-bold text-brown-800">Things that Delay a Registration Process:</span>
                <ul className="list-disc pl-5 text-brown-600 space-y-0.5">
                  <li>Documents that are incomplete or contain errors.</li>
                  <li>Discrepancies found within the Partnership Deed.</li>
                  <li>Extra regulatory clearances or local zone permits.</li>
                  <li>Delays during the verification procedure by state authorities.</li>
                </ul>
              </div>
            </article>

            {/* Section 7: Fees */}
            <article id="registration-fees" className="scroll-mt-28 space-y-3">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Partnership Firm Registration Fees
              </h3>
              <p className="text-[14.5px] text-brown-750 leading-relaxed">
                The Partnership registration fees vary significantly from one state to another, primarily due to differences in compliance requirements and stamp duty rates. Generally, registration fees for a Partnership Firm range from <strong>Rs. 500 to Rs. 3,000</strong>.
              </p>
              <p className="text-[13.5px] text-brown-600">
                *The stamp duty is determined based on the capital contributed by the partners and the specific rules of the state.
              </p>
            </article>

            {/* Section 8: Checklist */}
            <article id="checklist" className="scroll-mt-28 space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-brown-900 pb-2 border-b border-gray-150">
                Checklist for Registration
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-[13.5px] text-brown-700">
                {[
                  "Select a unique name for your business.",
                  "Draft a compliant Partnership Deed.",
                  "Apply for Registration with the Registrar of Firms (RoF).",
                  "Acquire the Certificate of Registration.",
                  "Apply and acquire PAN and TAN for the Firm.",
                  "Set up a current account in the firm's name.",
                  "Stay updated with tax and compliances."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#FAF9F6] border border-brown-100/50 px-4 py-3 rounded-xl">
                    <Check className="w-4 h-4 text-olive-650 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 9: FAQs */}
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
              Draft & Register Your Partnership
            </h3>
            <p className="text-[14px] sm:text-[15.5px] text-olive-100 leading-relaxed max-w-xl mx-auto">
              Get premium compliance advising, deed drafting support, and registration advice from experts.
            </p>
            <div className="pt-4">
              <button
                onClick={() => openModal("Partnership Registration Inquiry")}
                className="px-8 py-3.5 bg-white hover:bg-cream text-olive-800 font-bold text-[13px] rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                Inquire about Partnership setup
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
                  <Check className="w-8 h-8 text-olive-600 stroke-[3]" />
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
                    Provide your details to speak with a partnership registration specialist.
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
