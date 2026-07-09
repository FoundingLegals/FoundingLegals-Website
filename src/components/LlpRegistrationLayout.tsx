"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Send, ArrowRight, ChevronDown, HelpCircle, Search } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- TABLE OF CONTENT ITEMS ---
const TOC_ITEMS = [
  { id: "documents-required", label: "Documents required for LLP Registration" },
  { id: "registration-process", label: "LLP Registration Process: Step-by-Step Guide" },
  { id: "registration-time", label: "LLP Company Registration Time" },
  { id: "registration-fees", label: "Limited Liability Partnership (LLP) Registration Fees" },
  { id: "compliance-incorporation", label: "Compliance for LLP incorporation" },
  { id: "avoid-penalties", label: "7 Essential Steps to Avoid Penalties During LLP Registration" },
  { id: "benefits", label: "Benefits of LLP Registration" },
  { id: "checklist", label: "Checklist for the LLP incorporation procedure" },
  { id: "register-fl", label: "Make Your LLP Official. Start with Founding Legals" },
  { id: "faqs", label: "Frequently Asked Questions" }
];

// --- FAQ ITEMS ---
const FAQ_ITEMS = [
  {
    question: "What is an LLP Agreement?",
    answer: "An LLP Agreement is a legal document executed among the partners of a Limited Liability Partnership. It defines the mutual rights, duties, capital contribution, and profit-sharing ratios of the partners, and must be filed with the MCA within 30 days of incorporation."
  },
  {
    question: "Can Founding Legals assist in the LLP incorporation process?",
    answer: "Yes, Founding Legals provides a guided, end-to-end experience. We manage documentation, name approval reservation (RUN), prepare incorporation filings (FiLLiP), draft the LLP Agreement, and submit all forms to the MCA portal."
  },
  {
    question: "How long does LLP registration take?",
    answer: "Registering an LLP in India generally takes 7 to 15 working days, depending on name reservation approvals, correct document submission, and Ministry of Corporate Affairs (MCA) processing timelines."
  },
  {
    question: "What are the major advantages and disadvantages of LLP registration in India?",
    answer: "Advantages include limited liability, separate legal entity status, lower compliance than a Private Limited company, and perpetual succession. Disadvantages include inability to raise equity funding from VCs via shares and higher tax rate (30% flat) compared to startup company incentives."
  },
  {
    question: "Who is eligible for LLP registration in India?",
    answer: "Any two or more individuals or body corporates who wish to carry on a lawful business with a view to profit can form an LLP. At least one partner must be a resident of India."
  },
  {
    question: "What is the basic difference between a traditional Partnership and an LLP in India?",
    answer: "A traditional partnership has unlimited liability where partners' personal assets are at risk, and it is not a separate legal entity. An LLP offers limited liability to its partners and has separate legal entity status under the LLP Act, 2008."
  },
  {
    question: "What steps can I take to confirm my LLP registration status?",
    answer: "You can check the registration status of any LLP on the Ministry of Corporate Affairs (MCA) official website using the 'Find LLP/Company' search service under MCA Services."
  },
  {
    question: "How is a Limited Liability Partnership (LLP) taxed in India?",
    answer: "LLPs are taxed as separate legal entities. They pay a flat income tax rate of 30%, plus a surcharge of 12% if taxable income exceeds ₹1 Crore, along with a 4% Health and Education cess."
  },
  {
    question: "Can changes in partners impact the LLP registration or existence in India?",
    answer: "No, an LLP has perpetual succession. The death, retirement, or insolvency of a partner does not affect the legal existence of the LLP."
  },
  {
    question: "Is it possible to add or remove partners after LLP incorporation?",
    answer: "Yes, partners can be added or removed after incorporation by executing a supplementary LLP agreement and filing the relevant forms (Form 4 and Form 3) with the MCA."
  },
  {
    question: "Is it necessary to have a written LLP Agreement for LLP incorporation?",
    answer: "Yes, a written LLP Agreement is mandatory. It must be executed on appropriate stamp paper, signed by all partners, and filed with the MCA within 30 days of registration."
  },
  {
    question: "What is a DPIN, and why is it required?",
    answer: "A Designated Partner Identification Number (DPIN) is a unique identification number assigned by the MCA. It is mandatory for anyone wishing to be appointed as a Designated Partner in an LLP."
  },
  {
    question: "Can an NRI or foreign national be a partner in an LLP in India?",
    answer: "Yes, an NRI or foreign national can be a partner or a Designated Partner in an LLP, provided at least one Designated Partner is a resident Indian."
  },
  {
    question: "Can an LLP registered in India be listed on the Stock Exchange?",
    answer: "No, under current SEBI regulations, an LLP cannot list its shares or securities on a stock exchange because it does not have share capital."
  },
  {
    question: "What are the compliance charges and maintenance costs for LLPs in India?",
    answer: "LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) annually. Maintenance costs include government filing fees, stamp duties, professional fee for filings, and audit fees (if turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs)."
  },
  {
    question: "Can I maintain LLP incorporation as the sole partner if my other partner withdraws?",
    answer: "No, an LLP must have at least two partners. If the number of partners falls below two and the LLP carries on business for more than six months, the sole partner becomes personally liable."
  },
  {
    question: "Can an existing business be converted into an LLP in India?",
    answer: "Yes, partnership firms, private limited companies, and unlisted public companies can be converted into LLPs under the provisions of the LLP Act, 2008."
  },
  {
    question: "What is a Limited Liability Partnership Registration Number?",
    answer: "It is the LLPIN (Limited Liability Partnership Identification Number), a unique 7-digit alphanumeric code assigned by the ROC upon successful incorporation."
  },
  {
    question: "How to Get a Registration Number for a Limited Liability Partnership?",
    answer: "You get the registration number (LLPIN) on the Certificate of Incorporation issued by the ROC after submitting Form FiLLiP and completing all registration steps."
  }
];

export default function LlpRegistrationLayout() {
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
        <h1 className="font-serif text-[26px] sm:text-[36px] md:text-[50px] font-medium text-[#1A1917] leading-[1.2] md:leading-[1.1] mb-6">
          Limited Liability Partnership Registration in India
        </h1>
        
        <div className="text-[15px] md:text-[16px] text-brown-600 leading-relaxed space-y-4 max-w-5xl">
          <p>
            A <strong>Limited Liability Partnership (LLP)</strong> is a hybrid business structure that combines the flexibility of a partnership with the limited liability protection of a company. It allows partners to manage the business directly while keeping their personal assets protected from business liabilities, making Limited Liability Partnership (LLP) registration a preferred choice for professionals and growing businesses.
          </p>
          <p>
            They are popular among professionals, service businesses, and small to mid-sized firms due to their low compliance requirements and operational flexibility.
          </p>
          <p>
            LLPs in India are regulated by the <strong>Ministry of Corporate Affairs (MCA)</strong> under the LLP Act, 2008. The Registrar of Companies (ROC) oversees the registration of LLPs, compliance filings, and governance.
          </p>
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
                Register your LLP
              </h4>
              <p className="text-[12px] text-brown-500 mb-4">
                Let our legal experts handle name reservation, drafting and MCA submission.
              </p>
              <p className="font-serif text-base font-bold text-olive-700 mb-4">
                in just ₹1,499 <span className="text-[10px] font-sans text-gray-400 font-normal">+ Govt Fee</span>
              </p>
              <button
                onClick={() => openModal("Limited Liability Partnership (LLP) Registration")}
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
                Documents Required for LLP Registration
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">1. Identity and address proof of partners</h3>
                  <ul className="space-y-2.5 text-[14.5px] text-[#555] list-disc pl-5">
                    <li><strong>PAN Card:</strong> Mandatory for all Indian partners.</li>
                    <li><strong>Aadhaar Card:</strong> Essential for identity matching.</li>
                    <li><strong>Passport / Voter ID / Driving Licence:</strong> For secondary photo identity validation.</li>
                    <li><strong>Latest utility bill or recent bank statement:</strong> Serves as proof of address (must not be older than 30 days).</li>
                    <li><strong>Passport-size photograph:</strong> Of each proposed designated partner.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">2. Proof of registered office</h3>
                  <ul className="space-y-2.5 text-[14.5px] text-[#555] list-disc pl-5">
                    <li><strong>Latest electricity or water bill:</strong> Must not be older than 30 days.</li>
                    <li><strong>Property tax receipt:</strong> If available for the registered address.</li>
                    <li><strong>Rent agreement or lease deed:</strong> If the premises are rented for business.</li>
                    <li><strong>No Objection Certificate (NOC):</strong> Form from the owner, permitting use of the address as the LLP's registered office.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">3. LLP Agreement</h3>
                  <ul className="space-y-2.5 text-[14.5px] text-[#555] list-disc pl-5">
                    <li>Defines partners' mutual rights, duties, capital contribution, and profit-sharing ratio.</li>
                    <li>Must be executed on stamp paper of appropriate value and filed with the MCA within 30 days after incorporation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-[17px] sm:text-[20px] font-semibold text-[#1A1917] mb-3">4. Partners' Consent & Declarations</h3>
                  <ul className="space-y-2.5 text-[14.5px] text-[#555] list-disc pl-5">
                    <li><strong>Form DIR-9:</strong> Declaration from partners that they are not disqualified from forming or managing an LLP.</li>
                    <li><strong>Consent Letters:</strong> Official consent from designated partners agreeing to act in their respective roles.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* 2. Registration Process */}
            <article id="registration-process" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                LLP Registration Process: Step-by-Step Guide
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                The incorporation process of a Limited Liability Partnership (LLP) involves several key steps to establish the entity as a legally recognised business structure.
              </p>

              <div className="space-y-6">
                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 1: Obtain a Digital Signature Certificate (DSC)</h4>
                  <p className="text-[13.5px] text-[#555]">
                    Get a Class 3 DSC for all proposed designated partners from a government-recognised Certifying Authority. Complete Aadhaar e-KYC or submit PAN, identity proof, and address proof.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 2: Apply for Name Approval</h4>
                  <p className="text-[13.5px] text-[#555]">
                    Reserve the LLP's name using the LLP-RUN form (Limited Liability Partnership - Reserve Unique Name) on the MCA Portal. The Central Registration Centre (CRC) serves as the approving authority, and you can submit up to two proposed names.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 3: File FiLLiP for LLP Registration</h4>
                  <p className="text-[13.5px] text-[#555] mb-2">
                    Fill out the FiLLiP (Form for Incorporation of Limited Liability Partnership) and submit it to the Registrar. Attach required documents like subscriber sheet, Form 9 consent, proof of registered office and owner NOC.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-olive-600 hover:text-olive-700 underline"
                    >
                      View FiLLiP Link
                    </a>
                  </div>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAF9F6] space-y-3">
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900">Step 4: Submit LLP Agreement</h4>
                  <p className="text-[13.5px] text-[#555]">
                    File the LLP Agreement using Form 3 on the MCA portal within 30 days of the LLP being registered. The agreement governs the mutual rights and responsibilities of the partners.
                  </p>
                </div>
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

            {/* 3. Registration Time */}
            <article id="registration-time" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                LLP Company Registration Time
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                Registering an LLP in India generally takes <strong>7–15 working days</strong>, depending on how quickly documents are submitted and approvals are received from the MCA:
              </p>
              
              <ul className="space-y-3 text-[14px] text-[#555] list-disc pl-5">
                <li><strong>Obtaining DSC:</strong> 1–3 days</li>
                <li><strong>Name reservation approval (RUN-LLP):</strong> 1–3 days</li>
                <li><strong>Preparation & submission of FiLLiP forms:</strong> 2–4 days</li>
                <li><strong>ROC Approval & Certificate of Incorporation issue:</strong> 2–3 days</li>
                <li><strong>Filing LLP Agreement (Form 3):</strong> Within 30 days after incorporation</li>
              </ul>

              <div className="p-5 bg-red-50/40 border border-red-100 rounded-2xl">
                <h4 className="font-serif text-[14px] font-bold text-red-800 mb-2">Factors That Can Delay Registration</h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-[12.5px] text-red-700/80 list-disc pl-4">
                  <li>Incomplete or incorrect documents</li>
                  <li>Name approval rejections</li>
                  <li>Delayed response to clarifications</li>
                  <li>MCA website/server downtime</li>
                  <li>Jurisdictional processing speeds</li>
                </ul>
              </div>
            </article>

            {/* 4. Registration Fees */}
            <article id="registration-fees" className="scroll-mt-28 space-y-6">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Limited Liability Partnership (LLP) Registration Fees
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                The government cost for LLP registration depends mainly on the size of your capital contribution and applicable state stamp duty. Below is an example LLP registration fee structure for Karnataka with up to ₹1 lakh capital and two partners:
              </p>

              {/* Fee Table */}
              <div className="overflow-x-auto border border-gray-200/80 rounded-2xl">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-gray-200 text-brown-900 font-serif font-semibold">
                      <th className="p-4">Fee Component</th>
                      <th className="p-4">Approximate Amount (₹)</th>
                      <th className="p-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[#555]">
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Government filing fee (FiLLiP)</td>
                      <td className="p-4">500–1,000</td>
                      <td className="p-4">For capital up to ₹1 lakh</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Stamp duty on LLP Agreement</td>
                      <td className="p-4">1,000–2,000</td>
                      <td className="p-4">State-wise, often ₹1,000 in Karnataka</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Digital Signature (DSC, per person)</td>
                      <td className="p-4">800–1,500</td>
                      <td className="p-4">Per partner, varies by provider</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Name reservation (RUN-LLP)</td>
                      <td className="p-4">200</td>
                      <td className="p-4">Flat government fee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">PAN and TAN (via FiLLiP)</td>
                      <td className="p-4">Included</td>
                      <td className="p-4">Allotted automatically with registration</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Professional fees</td>
                      <td className="p-4">4,000–10,000</td>
                      <td className="p-4">If using a consultant</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-brown-900">Miscellaneous expenses</td>
                      <td className="p-4">500–1,000</td>
                      <td className="p-4">Courier, notary, etc.</td>
                    </tr>
                    <tr className="bg-olive-50/20 font-bold text-olive-800">
                      <td className="p-4">Total Indicative Cost</td>
                      <td className="p-4">7,500 – 15,000+</td>
                      <td className="p-4">Actual cost varies by state/provider</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-olive-50/40 p-5 rounded-2xl border border-olive-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-serif text-sm font-bold text-brown-900 mb-1">
                    Founding Legals LLP Package
                  </h4>
                  <p className="text-[13px] text-brown-600">
                    Get end-to-end registration services, DSC, name reservation, agreement drafting, and portal filings.
                  </p>
                </div>
                <div className="shrink-0 text-right sm:text-right">
                  <p className="font-serif text-lg font-bold text-olive-700">₹1,499 + Govt. Fee</p>
                </div>
              </div>
            </article>

            {/* 5. Compliance for LLP Incorporation */}
            <article id="compliance-incorporation" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Compliance for LLP Incorporation
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* For Partners card */}
                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/50 space-y-4">
                  <h3 className="font-serif text-[17px] font-bold text-brown-900 border-b border-gray-200/60 pb-2">For Partners</h3>
                  <ul className="space-y-2 text-[13.5px] text-[#555] list-disc pl-4">
                    <li>Minimum two partners required to form an LLP.</li>
                    <li>No upper limit on the maximum number of partners.</li>
                    <li>Partners must deposit contributions as agreed.</li>
                  </ul>
                </div>

                {/* For LLP card */}
                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/50 space-y-4">
                  <h3 className="font-serif text-[17px] font-bold text-brown-900 border-b border-gray-200/60 pb-2">For a Limited Liability Partnership</h3>
                  <ul className="space-y-2 text-[13.5px] text-[#555] list-disc pl-4">
                    <li>File an LLP agreement within 30 days of incorporation to avoid a Rs 100/day penalty.</li>
                    <li>File DIR3 for DIN allotment if needed.</li>
                    <li>File Form 11 (Annual Return) & Form 8 (Solvency Statement) annually.</li>
                    <li>File ITR-5 Income Tax Return annually.</li>
                    <li>Register for GST since it is a legal requirement.</li>
                    <li>Audit accounts through a CA if turnover &gt; ₹40 Lakhs or contribution &gt; ₹25 Lakhs.</li>
                  </ul>
                </div>
              </div>

              {/* Capital & Tax Details */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Minimum Capital Requirement</h4>
                  <p className="text-[13.5px] text-[#555] leading-relaxed">
                    There is no minimum capital requirement to register an LLP. Partners can mutually determine the capital amount. An initial capital of ₹10,000 serves as a practical starting point.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-[15px] font-bold text-brown-900">Tax Rates</h4>
                  <p className="text-[13.5px] text-[#555] leading-relaxed">
                    LLPs are liable to pay income tax at a standard fixed rate of 30%. A surcharge of 12% is applied if taxable income exceeds ₹1 Crore. A 4% Health and Education cess is also levied.
                  </p>
                </div>
              </div>
            </article>

            {/* 6. Avoid Penalties */}
            <article id="avoid-penalties" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                7 Essential Steps to Avoid Penalties During LLP Registration
              </h2>
              <p className="text-[14.5px] text-[#555] leading-relaxed">
                Registering an LLP is simpler than forming a company, but missing key steps can still lead to delays, resubmissions, or penalties from the MCA.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "1. Submit Accurate Partner Documents", desc: "Ensure PAN, Aadhaar, address proofs, and photos are clean, updated, and fully consistent." },
                  { title: "2. Provide a Valid Registered Office Proof", desc: "Electricity bills, Rent Agreements, and owner NOCs must be recent and correctly formatted." },
                  { title: "3. File Partner Declarations Correctly", desc: "Submit proper DIR-9 declarations. Missing or incorrect details may result in penalties." },
                  { title: "4. Draft a Proper LLP Agreement Within 30 Days", desc: "Must be filed with MCA within 30 days. Delayed filing attracts a daily penalty of ₹100." },
                  { title: "5. Ensure Name Approval Matches Object & Trademark Rules", desc: "Choose a name that aligns with guidelines, objects, and trademark availability." },
                  { title: "6. Verify DSC & Partner Details Before Filing", desc: "Ensure DSCs of designated partners are active and correctly mapped to prevent form resubmissions." },
                  { title: "7. Maintain Accurate Capital Details", desc: "Your LLP agreement and incorporation form must match exactly in capital amount and profit ratio." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-olive-50/30 p-5 rounded-2xl border border-olive-100/50 space-y-2">
                    <h4 className="font-serif text-[14px] font-bold text-olive-800">{step.title}</h4>
                    <p className="text-[12.5px] text-brown-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* 7. Benefits of LLP */}
            <article id="benefits" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Benefits of LLP Registration
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "Limited Liability", desc: "Liability is limited to partners' contributions. Personal assets are protected." },
                  { title: "Separate Legal Entity", desc: "The LLP is a separate legal entity responsible for managing its own assets & liabilities." },
                  { title: "Simpler Process & Less Compliance", desc: "Forming and managing costs less with fewer restrictions than a company." },
                  { title: "No Minimum Capital", desc: "No minimum paid-up capital requirement before incorporation." },
                  { title: "Perpetual Succession", desc: "LLP existence is unaffected by partner death, retirement, or insolvency." },
                  { title: "No Partner Limit", desc: "No maximum limit on the number of partners who can operate under one LLP." }
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

            {/* 8. Checklist */}
            <article id="checklist" className="scroll-mt-28 space-y-8">
              <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#1A1917] leading-snug md:leading-tight">
                Checklist for the LLP Incorporation Procedure
              </h2>

              <div className="bg-[#FAF9F6] border border-gray-200/50 rounded-2xl p-6 md:p-8">
                <ul className="grid sm:grid-cols-2 gap-4 text-[14px] text-brown-700">
                  {[
                    "Get DSC for all the Partners.",
                    "Reserve an LLP's name using the LLP-RUN form.",
                    "Fill out the FiLLiP and apply.",
                    "Get an Incorporation Certificate.",
                    "Obtain PAN & TAN.",
                    "Draft the LLP Agreement.",
                    "Get a Current bank account for your LLP.",
                    "Be compliant with the monthly or annual regulations."
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

            {/* 9. Register with FL */}
            <article id="register-fl" className="scroll-mt-28">
              <div className="bg-white text-brown-900 rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-sm border border-brown-100">
                <div className="relative z-10 max-w-3xl space-y-6">
                  <div>
                    <span className="inline-block text-[10px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50 px-3 py-1 rounded-full mb-4 border border-olive-200/50">
                      GET INCORPORATED
                    </span>
                    <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-4 text-brown-900">
                      Make Your LLP Official. Start with Founding Legals
                    </h2>
                    <p className="text-[13.5px] sm:text-[14.5px] text-brown-600 leading-relaxed">
                      Turning your partnership into a legally recognised LLP shouldn't feel complicated. With Founding Legals, you get a guided, end-to-end experience that streamlines the process of documentation, filings, and compliance.
                    </p>
                  </div>
                  
                  <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brown-100">
                    <div>
                      <p className="text-[10px] text-brown-400 font-bold uppercase tracking-wider mb-1">REGISTRATION COST</p>
                      <p className="font-serif text-[22px] font-bold text-olive-700">
                        ₹1,499 <span className="text-xs font-sans text-brown-400 font-normal">+ Govt Fee</span>
                      </p>
                    </div>
                    <button
                      onClick={() => openModal("Limited Liability Partnership (LLP) Registration")}
                      className="px-6 py-3 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[13px] rounded-full transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
                    >
                      Register your Business
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* 10. FAQs */}
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
