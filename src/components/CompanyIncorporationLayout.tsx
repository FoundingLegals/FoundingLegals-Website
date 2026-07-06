"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check, X, Send, ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- TABLE OF CONTENT ITEMS ---
const TOC_ITEMS = [
  { id: "documents-required", label: "Documents required for a Private Limited Company Registration" },
  { id: "incorporation-process", label: "Private Limited Company Incorporation Process" },
  { id: "avoid-penalties", label: "7 Key Steps to Avoid Penalties During Private Limited Company Registration" },
  { id: "benefits", label: "Benefits of a Private Limited Company" },
  { id: "time-cost-fees", label: "Time, Cost, and Fees for registration of Private Limited Company" },
  { id: "registration-number", label: "What is a Private Limited Company Registration Number?" },
  { id: "checklist", label: "Checklist to register a Private Limited Company in India" },
  { id: "register-fl", label: "Register your Private Limited Company with Founding Legals" },
  { id: "faqs", label: "Frequently Asked Questions" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is a Private Limited Company?",
    answer: "A Private Limited Company (Pvt Ltd) is a privately held business entity structure that is one of the most highly recommended for startups and businesses in India. It offers limited liability to its shareholders, maintains a separate legal identity from its owners, and is regulated by the Ministry of Corporate Affairs (MCA)."
  },
  {
    question: "How does Founding Legals assist in Private Limited Company Registration?",
    answer: "Founding Legals handles the entire registration process end-to-end. We acquire your Digital Signature Certificates (DSC), prepare name approval applications, draft your Memorandum of Association (MOA) and Articles of Association (AOA), submit incorporation forms with the MCA, and coordinate with the Registrar of Companies (ROC) until the Certificate of Incorporation is issued."
  },
  {
    question: "How long does it take to register a Private Limited Company in India?",
    answer: "On average, the entire incorporation process takes about 7 to 10 working days, depending on name approval turnaround times and ROC processing speeds in your state."
  },
  {
    question: "What are some major advantages of a Private Limited Company in India?",
    answer: "Key advantages include limited liability (protecting personal assets), perpetual existence (independent of owner changes), ease of raising equity capital from VCs, capability to hold property, and high credibility among banks and global vendors."
  },
  {
    question: "What is the difference between a Private Limited Company and a Limited Liability Partnership (LLP)?",
    answer: "A Pvt Ltd company is ideal for startups seeking VC funding because it can issue shares and stock options (ESOPs), whereas an LLP is managed by partners without share capital. LLPs have lower compliance requirements but are generally not preferred by equity investors."
  },
  {
    question: "What documents are required for the incorporation of a Private Limited Company?",
    answer: "You will need identity proof (PAN card for Indian nationals), address proof (Aadhaar, utility bill, or bank statement), passport-size photos of all directors, and address proof for the registered office along with a No Objection Certificate (NOC) from the landlord."
  },
  {
    question: "What are the cost and fees, including pvt. ltd. company registration govt fees?",
    answer: "The government fee depends on the company's authorized capital and state of registration. Our professional drafting fee starts at ₹1,499. The overall cost including state stamp duty, DSC, and filing fee typically ranges from ₹8,000 to ₹20,000."
  },
  {
    question: "What is a Corporate Identity Number (CIN)?",
    answer: "A Corporate Identification Number (CIN) is a unique 21-digit alphanumeric code assigned by the ROC to companies registered under the MCA. It indicates the listing status, industry classification, state code, year of incorporation, and ownership type."
  },
  {
    question: "What is the significance of share capital in a Private Limited Company in India?",
    answer: "Share capital is the amount contributed by shareholders to fund the company. There is no minimum capital requirement to incorporate, but the shares represent ownership stakes and determine voting rights and dividend distribution."
  },
  {
    question: "Can a Private Limited Company raise funds from the public?",
    answer: "No, a Private Limited Company is restricted from inviting the general public to subscribe to its shares. However, it can raise funds from angel investors, venture capital funds, and private placements."
  },
  {
    question: "How can I verify if my Private Limited Company has been registered?",
    answer: "You can search and verify the registration status of any company on the Ministry of Corporate Affairs (MCA) official portal under the 'MCA Services' tab by searching for your company name or CIN."
  },
  {
    question: "What are the requirements for Annual Compliance for a Private Limited Company?",
    answer: "Annual compliance includes holding an Annual General Meeting (AGM), appointing a statutory auditor, filing AOC-4 (financial statements), MGT-7 (annual return), DIR-3 KYC for directors, and filing corporate income tax returns (ITR-6)."
  }
];

export default function CompanyIncorporationLayout() {
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
    <div className="min-h-screen bg-white font-sans text-[#2c2925] selection:bg-olive-600 selection:text-white">
      
      {/* ── TOP HEADER SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-[120px] pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* LEFT: Text */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-[28px] sm:text-[38px] md:text-[48px] font-medium text-[#1A1917] leading-[1.15] mb-6">
              Launch Your Startup with a Legally Registered Business
            </h1>

            <div className="text-[15px] md:text-[16px] text-[#5C5954] leading-relaxed space-y-3 max-w-xl">
              <p>
                Start your business with confidence. We handle the entire incorporation process—from name approval and documentation to MCA filing and company registration so you can focus on building your startup.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => openModal("Pvt Ltd Company Incorporation")}
                className="bg-olive-700 hover:bg-olive-800 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
              >
                Start Your Journey
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

      {/* ── COMPANY TYPE CARDS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <div>
            <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1917] leading-snug">
              Different Types of Company Formations to Choose From
            </h2>
            <p className="text-[14px] text-[#5C5954] mt-1">
              Choose from the most popular{" "}
              <span className="text-olive-600 font-semibold">company types</span>
            </p>
          </div>
          <a
            href="#"
            className="text-[11px] font-bold text-olive-700 uppercase tracking-widest hover:text-olive-800 transition-colors shrink-0"
          >
            Find your Company Type
          </a>
        </div>

        {/* Three Company Type Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {/* Card 1: Pvt Ltd */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-olive-200 transition-all duration-200">
            <div>
              <h3 className="font-serif text-[16px] font-bold text-[#1A1917] leading-snug">
                Private Limited Company
              </h3>
              <p className="text-[12px] text-gray-400 mt-0.5">(Pvt. Ltd.)</p>
              <p className="font-serif text-[22px] font-bold text-olive-700 mt-3">
                ₹1,499{" "}
                <span className="text-[11px] font-sans font-normal text-gray-400">+ Govt. Fee</span>
              </p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Best Suited For</p>
              <ul className="space-y-1.5">
                {["Service-based businesses", "Businesses looking to issue shares", "Businesses seeking investment through equity-based funding"].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12.5px] text-[#555]">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => openModal("Pvt Ltd Company Incorporation")}
                className="flex-1 py-2 border border-gray-300 rounded-full text-[11px] font-semibold text-[#1A1917] hover:bg-gray-50 transition-all cursor-pointer"
              >
                Learn More
              </button>
              <button
                onClick={() => openModal("Pvt Ltd Company Incorporation")}
                className="flex-1 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                Register Pvt.Ltd <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: LLP */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-olive-200 transition-all duration-200">
            <div>
              <h3 className="font-serif text-[16px] font-bold text-[#1A1917] leading-snug">
                Limited Liability Partnership
              </h3>
              <p className="text-[12px] text-gray-400 mt-0.5">(LLP)</p>
              <p className="font-serif text-[22px] font-bold text-olive-700 mt-3">
                ₹1,499{" "}
                <span className="text-[11px] font-sans font-normal text-gray-400">+ Govt. Fee</span>
              </p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Best Suited For</p>
              <ul className="space-y-1.5">
                {["Professional services", "Firms seeking any capital contribution from Partners", "Firms sharing resources with limited liability"].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12.5px] text-[#555]">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => openModal("LLP Registration")}
                className="flex-1 py-2 border border-gray-300 rounded-full text-[11px] font-semibold text-[#1A1917] hover:bg-gray-50 transition-all cursor-pointer"
              >
                Learn More
              </button>
              <button
                onClick={() => openModal("LLP Registration")}
                className="flex-1 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                Register LLP <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: OPC */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-olive-200 transition-all duration-200">
            <div>
              <h3 className="font-serif text-[16px] font-bold text-[#1A1917] leading-snug">
                One Person Company
              </h3>
              <p className="text-[12px] text-gray-400 mt-0.5">(OPC)</p>
              <p className="font-serif text-[22px] font-bold text-olive-700 mt-3">
                ₹1,499{" "}
                <span className="text-[11px] font-sans font-normal text-gray-400">+ Govt. Fee</span>
              </p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Best Suited For</p>
              <ul className="space-y-1.5">
                {["Freelancers, Small-scale businesses", "Businesses looking for minimal compliance", "Businesses looking for single-ownership"].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12.5px] text-[#555]">
                    <Check className="w-3.5 h-3.5 text-olive-600 shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => openModal("One Person Company (OPC) Registration")}
                className="flex-1 py-2 border border-gray-300 rounded-full text-[11px] font-semibold text-[#1A1917] hover:bg-gray-50 transition-all cursor-pointer"
              >
                Learn More
              </button>
              <button
                onClick={() => openModal("One Person Company (OPC) Registration")}
                className="flex-1 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                Register OPC <ArrowRight className="w-3 h-3" />
              </button>
            </div>
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
              <p className="text-[20px] font-serif font-bold text-olive-700 mb-3">₹1,499 <span className="text-xs text-gray-400 font-sans font-normal">+ Govt fee</span></p>
              <button
                onClick={() => openModal("Pvt Ltd Company Incorporation")}
                className="w-full text-center py-2.5 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[12px] rounded-full transition-all shadow-sm cursor-pointer"
              >
                Register Now
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: Article content sections */}
          <div className="space-y-16 lg:pl-4">
            
            {/* Section 1: Documents Required */}
            <article id="documents-required" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Documents required for a Private Limited Company Registration
              </h2>

              <div className="space-y-6 text-[15px] text-[#444] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">1. Identity Proof and Address Proof of Directors & Shareholders</h4>
                  <p className="text-gray-500 mb-2">Identity proof (any one for each):</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>PAN Card (mandatory for Indian nationals)</li>
                    <li>Passport</li>
                    <li>Voter ID</li>
                    <li>Driving Licence</li>
                  </ul>
                  
                  <p className="text-gray-500 mb-2">Address proof (any one for each – recent):</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Aadhaar Card</li>
                    <li>Latest Utility Bill (electricity, water, gas)</li>
                    <li>Recent Bank Statement</li>
                  </ul>

                  <p className="text-gray-500 mb-2">Other:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Passport-size photographs of all directors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">2. Proof of Registered Office</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Electricity Bill</strong> (not older than 30 days): For ownership proof</li>
                    <li><strong>Property Tax Receipt</strong>: For ownership proof</li>
                    <li><strong>Rent Agreement</strong> (If the office is rented)</li>
                    <li><strong>No Objection Certificate (NOC)</strong> from the Property Owner – Authorising use of premises as the registered office</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">3. Memorandum of Association (MOA)</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Defines the primary objectives, business activities, and scope of the company.</li>
                    <li>Mandatory for incorporation and submitted in <strong>e-MOA format</strong> during registration.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">4. Articles of Association (AOA)</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Specifies internal rules, governance structure, shareholder rights, and operational framework.</li>
                    <li>Submitted along with the MOA in <strong>e-AOA format</strong>.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">5. Declaration & Consent of Proposed Directors</h4>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li><strong>Form INC-9:</strong> A self-declaration by directors and subscribers confirming they are not convicted, and the information provided is correct.</li>
                    <li><strong>Form DIR-2:</strong> A written consent from each director agreeing to act as a director in the company is required for pvt. ltd. company registration in India.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">6. Digital Signatures (DSC) and DIN</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Class‑3 Digital Signature Certificate required for all proposed directors to sign e‑forms.</li>
                    <li>Director Identification Number (DIN) for each director, generated/validated during the SPICe+ process.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[15px] sm:text-lg text-[#1A1917] mb-2">7. Company name & share details</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Proposed company name and brief objects (for SPICe+ Part A name approval).</li>
                    <li>Shareholding pattern and subscription details (number of shares and amount to be subscribed by each shareholder).</li>
                  </ul>
                </div>
              </div>

              {/* Callout Info Strip */}
              <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100/50">
                <h4 className="font-serif text-[16px] font-bold text-olive-800 mb-1">At a Glance: New firms registration up by 29% in May 2025</h4>
                <p className="text-[13.5px] text-[#555] leading-relaxed">
                  India experienced a 29% year-on-year increase in new company registrations in May 2025, totaling 20,718, with active firms reaching a record 1.89 million. The surge is attributed to business-friendly reforms and reduced regulatory hurdles, with Maharashtra leading in state-wise registrations.
                </p>
              </div>
            </article>

            {/* Section 2: Incorporation Process */}
            <article id="incorporation-process" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Private Limited Company Incorporation Process
              </h2>

              <div className="space-y-6 text-[15px] text-[#444] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1917] mb-2">For Directors</h4>
                  <p>
                    A minimum of two directors and two shareholders are required to incorporate a private limited company (Pvt. Ltd.). These directors and shareholders can either be the same or different individuals, with at least one director being an Indian Resident. The maximum number of shareholders is limited to 200 under the Companies Act 2013.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#1A1917] mb-2">For a Private Limited Company Compliance Steps</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Board Meetings:</strong> Hold the First Meeting of the Board of Directors within 30 days of the Incorporation of the Company. It is compulsory to host four meetings in a year with a gap not more than 120 days.</li>
                    <li><strong>Annual General Meeting (AGM):</strong> Hold an Annual General Meeting every year, on or before September 30th, during business hours and in the registered office.</li>
                    <li><strong>Auditor appointment:</strong> Appoint the company's first auditor within 30 days of incorporation, who will serve until the end of the first AGM.</li>
                    <li><strong>Filing of ADT-1 Form:</strong> File Form ADT-1 within 15 days of the appointment of the subsequent auditor.</li>
                    <li><strong>Filing of Annual Return:</strong> File Annual Returns (AOC 4 and MGT 7) within 30 and 60 days of holding the AGM, respectively.</li>
                    <li><strong>Filing of Income Tax Return:</strong> File Form ITR-6 for Income Tax Return annually.</li>
                    <li><strong>Filing of DIR-3 KYC:</strong> File Form DIR-3 KYC to disclose details of the Directors.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#1A1917] mb-2">Minimum Capital Requirement for Pvt. Ltd. Company</h4>
                  <p className="mb-3">
                    There is no minimum capital requirement to register a Private Limited Company. However, a Private Limited Company has a minimum of 2 shareholders, and each shareholder has to have at least one share. So the company's minimum authorised and paid-up capital is at least Rs 2. This is subject to the requirements of the current account.
                  </p>
                  <p className="mb-3">
                    It's commonly advised to set the authorised capital at ₹1,00,000 (One Lakh), which serves as an initial estimate of the maximum investment that the company could potentially receive from its shareholders.
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Earlier, the Companies Act 2013 mandated a minimum capital of ₹1,00,000 (Rs. One Lakh) in order to incorporate a private limited company. However, the Amendment Act in 2015 repealed the provision.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#1A1917] mb-2">Tax Rates for Pvt. Ltd. Company</h4>
                  <p className="mb-2">The basic tax rate for all domestic companies, excluding Surcharge and Cess:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Total Turnover or Gross Receipts during the previous year 2020-21 does not exceed ₹ 400 crores: <strong>25%</strong></li>
                    <li>If opted for Section 115BA: <strong>25%</strong></li>
                    <li>If opted for Section 115BAA: <strong>22%</strong></li>
                    <li>If opted for Section 115BAB: <strong>15%</strong></li>
                  </ul>
                  <p className="mb-2">A surcharge is an additional charge levied for income tax calculated as per applicable rates:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Taxable income above ₹1 Crore - Up to ₹10 Crore: <strong>7%</strong></li>
                    <li>Taxable income above ₹10 Crore: <strong>12%</strong></li>
                  </ul>
                  <p>A health and Education cess of 4% shall also be levied on the amount of income tax plus surcharge (if any).</p>
                  <p className="text-xs text-gray-500 mt-2 font-medium">Note: The above tax rate is for AY 2025-26.</p>
                </div>
              </div>
            </article>

            {/* Section 3: Avoid Penalties */}
            <article id="avoid-penalties" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                7 Key Steps to Avoid Penalties During Private Limited Company Registration
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                Once your Private Limited Company is incorporated, staying compliant is critical. Missing even small filings can result in hefty penalties, director disqualification, and notices from the ROC. Here are the essential steps to stay penalty-free:
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "File Your AGM & Annual Returns on Time (AOC-4 & MGT-7A/MGT-7)",
                    desc: "Every company must hold an Annual General Meeting (AGM) and file AOC-4 (financial statements) and MGT-7/MGT-7A (annual return). Late filing can incur a penalty of ₹100 per day per form, with no upper limit."
                  },
                  {
                    num: "2",
                    title: "Maintain Statutory Registers & Minutes",
                    desc: "Keep updated registers like: Register of Members, Register of Directors & KMP, and Share transfer register."
                  },
                  {
                    num: "3",
                    title: "Appoint an Auditor Within 30 Days (Form ADT-1)",
                    desc: "Every Pvt Ltd company must appoint a statutory auditor within 30 days of incorporation. Non-appointment results in ROC intervention and penalties."
                  },
                  {
                    num: "4",
                    title: "Deposit Share Capital and Issue Share Certificates",
                    desc: "Directors must deposit the subscribed capital into the company bank account and issue share certificates within 60 days. Delay attracts penalties under the Companies Act and can trigger compliance red flags."
                  },
                  {
                    num: "5",
                    title: "Maintain Proper Accounting & GST Compliance",
                    desc: "Keep accurate books of accounts and comply with GST requirements, such as: GST registration (if applicable), Monthly/quarterly GST filings, and Reconciling GSTR-2B/3B."
                  },
                  {
                    num: "6",
                    title: "File Director KYC Every Year (Form DIR-3 KYC)",
                    desc: "All directors must update their KYC details annually. Missing KYC leads to a ₹5,000 penalty per director and their DIN becoming inactive."
                  },
                  {
                    num: "7",
                    title: "Keep Registered Office Proof Updated",
                    desc: "Any change must be reported in Form INC-22. Failing to update your address means you'll miss ROC communications, which may escalate into penalties for non-response."
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
            </article>

            {/* Section 4: Benefits */}
            <article id="benefits" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Benefits of a Private Limited Company
              </h2>

              <div className="grid sm:grid-cols-2 gap-5 text-[15px]">
                {[
                  {
                    title: "1. Limited Liability",
                    desc: "As a shareholder, you do not have any personal liability and need not pay for the company’s liability out of your assets."
                  },
                  {
                    title: "2. Separate Legal Entity",
                    desc: "A private limited company becomes a separate legal entity after being incorporated. The company is then responsible for managing its assets, liabilities, debtors, and creditors."
                  },
                  {
                    title: "3. Perpetual Succession",
                    desc: "A company, being a separate legal entity, is unaffected by the death or cessation of any member but continues to exist irrespective of the changes in membership or ownership."
                  },
                  {
                    title: "4. Funding & Foreign Investment",
                    desc: "Attracting funds is relatively easy for Private limited companies as one can raise funds through equity and debt, thus setting up an optimal capital structure. For companies looking for investment abroad, you can also receive direct foreign investment."
                  },
                  {
                    title: "5. Tax Benefits",
                    desc: "Private limited companies might be eligible for certain tax benefits or incentives provided by the government. These incentives could sometimes include deductions, exemptions, or lower tax rates."
                  }
                ].map((ben, bi) => (
                  <div key={bi} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs flex items-start gap-3">
                    <Check className="w-5 h-5 text-olive-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-[15px] font-bold text-[#1A1917] mb-1">{ben.title}</h4>
                      <p className="text-[12.5px] text-[#555] leading-relaxed">{ben.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 5: Time, Cost, Fees */}
            <article id="time-cost-fees" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Time, Cost, and Fees for registration of Private Limited Company
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                Registering a Private Limited Company in India usually takes about <strong>7–10 working days</strong>, depending on how quickly documents are prepared and approved by the MCA.
              </p>

              <div className="border border-gray-200 rounded-2xl p-5 bg-[#FAF9F6] space-y-3">
                <h4 className="font-serif text-base font-bold text-[#1A1917]">Things that Delay a Registration Process</h4>
                <ul className="grid sm:grid-cols-2 gap-4 text-[13.5px] text-[#555]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-500 mt-1.5 shrink-0" />
                    <span><strong>Incomplete Documentation or Errors:</strong> Unclear scans or spelling mismatches.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-500 mt-1.5 shrink-0" />
                    <span><strong>Name Approval Issues:</strong> Similarity to existing trademarks or active companies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-500 mt-1.5 shrink-0" />
                    <span><strong>MCA Server Glitches:</strong> Occasional downtime or high application queues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-500 mt-1.5 shrink-0" />
                    <span><strong>Jurisdiction Workload:</strong> Processing speeds of the state ROC office.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200 text-[14px] text-[#555] leading-relaxed">
                <p className="mb-3">
                  The cost of Pvt. Ltd. company registration online can vary based on several factors, including the jurisdiction in which you're registering, professional fees, and any additional services you might opt for.
                </p>
                <p className="mb-4">
                  For a company with 2 Directors, Authorised capital up to ₹1 lakh, and standard incorporation, the total estimated cost usually falls between <strong>₹8,000 to ₹20,000</strong> (including pvt ltd company registration govt fees, DSC, and professional fees).
                </p>
              </div>
            </article>

            {/* Section 6: CIN */}
            <article id="registration-number" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                What is a Private Limited Company Registration Number?
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed">
                The Private Limited Company Registration Number, also known as the <strong>Corporate Identification Number (CIN)</strong>, is a unique 21-digit alphanumeric code assigned to a private limited company upon its registration with the Registrar of Companies (ROC). This number serves as a distinct identifier for the company and contains information about its registration details, including the state where it's registered and the type of company structure.
              </p>

              <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-6">
                <div className="text-center pb-4 border-b border-gray-200/60 mb-4">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Example CIN</span>
                  <span className="font-serif text-2xl font-bold text-olive-700 tracking-wider">U72200KA2013PTC097389</span>
                </div>

                <div className="text-[13.5px] text-[#555] space-y-3 leading-relaxed">
                  <p>The CIN can be broken down into:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The first letter indicates the listing status of the company. Unlisted companies have a CIN that starts with the letter <strong>"U"</strong>, while listed companies commence with the letter <strong>"L"</strong>.</li>
                    <li>The next series of five numbers serves to classify the economic activity of a company, indicating the specific industry to which the company pertains.</li>
                    <li>The following two letters signify the Indian state in which the company is registered. Here, it implies Karnataka.</li>
                    <li>The succeeding four numbers denote the year of incorporation of the company, i.e., <strong>2013</strong>.</li>
                    <li>The subsequent three letters designate the classification of the company. <strong>PTC</strong> stands for Private Limited Company.</li>
                    <li>The last six-digit numbers signify the unique registration number issued by the relevant Registrar of Companies (ROC).</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 7: Checklist */}
            <article id="checklist" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Checklist to register a Private Limited Company in India
              </h2>
              <p className="text-[15px] text-[#555]">
                A concise checklist to help you navigate the Private Limited Registration Process:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Get DSC for all designated Directors.",
                  "Draft the e-Memorandum of Association & e-Articles of Association.",
                  "Approval of Company Name, a unique and compliant name.",
                  "Apply through SPICe+.",
                  "Submit documents & pay fees.",
                  "Get Certificate of Incorporation.",
                  "Obtain PAN & TAN.",
                  "A Company bank account, Proof of the company's registered office.",
                  "Stay up-to-date with Compliance."
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-olive-50 text-olive-700 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-[13.5px] text-[#444] leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 8: Register with Founding Legals */}
            <article id="register-fl" className="scroll-mt-28">
              <div className="bg-white text-brown-900 rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-sm border border-brown-100">
                <div className="relative z-10 max-w-3xl space-y-6">
                  <div>
                    <span className="inline-block text-[10px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-3 py-1 rounded-full mb-4 border border-olive-200/50">
                      GET INCORPORATED
                    </span>
                    <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-4 text-brown-900">
                      Register your Private Limited Company with Founding Legals
                    </h2>
                    <p className="text-[13.5px] sm:text-[14.5px] text-brown-600 leading-relaxed mb-4">
                      Founding Legals simplifies the entire journey of registering a Private Limited Company online by handling all the paperwork, filings, and registration steps end-to-end.
                    </p>
                    <p className="text-[13px] text-brown-500 leading-relaxed">
                      From Day 1, Founding Legals guides you through every step: collecting your documents, securing your DSC, reserving your company name, drafting your MOA and AOA, and filing everything correctly with the MCA. You don’t need to chase CAs, coordinate documents, or worry about missing any step—everything is streamlined on one platform with expert support.
                    </p>
                  </div>
                  
                  <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brown-100">
                    <div>
                      <p className="text-[10px] text-brown-400 font-bold uppercase tracking-wider mb-1">REGISTRATION COST</p>
                      <p className="font-serif text-[22px] font-bold text-olive-700">
                        ₹1,499 <span className="text-xs font-sans text-brown-400 font-normal">+ actual government state fees</span>
                      </p>
                    </div>
                    <button
                      onClick={() => openModal("Pvt Ltd Company Incorporation Full Registration Package")}
                      className="px-6 py-3 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
                    >
                      Register your Business
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 9: FAQ Accordion */}
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
                    Provide your details to initiate company incorporation.
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
                      placeholder="Tell us about your business goals or name preference..."
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
