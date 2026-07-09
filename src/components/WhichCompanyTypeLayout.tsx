"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  Send,
  ArrowRight,
  ChevronDown,
  Building2,
  Briefcase,
  User,
  Handshake,
  FileText,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Award
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

// --- COMPANY STRUCTURE DATA ---
const STRUCTURES = [
  {
    id: "pvt-ltd",
    name: "Private Limited Company",
    abbreviation: "Pvt. Ltd.",
    cost: "₹1,499 + Govt. Fee",
    icon: Building2,
    colorClass: "from-[#EAF1E5] to-[#F3F7F0] border-olive-350",
    learnMoreUrl: "/services/company-incorporation",
    bestFor: [
      "Service-based businesses",
      "Businesses looking to issue shares",
      "Businesses seeking investment through equity-based funding"
    ]
  },
  {
    id: "llp",
    name: "Limited Liability Partnership",
    abbreviation: "LLP",
    cost: "₹1,499 + Govt. Fee",
    icon: Briefcase,
    colorClass: "from-[#E2EAE0] to-[#ECF2EC] border-olive-200",
    learnMoreUrl: "/services/llp-registration",
    bestFor: [
      "Professional services",
      "Firms seeking any capital contribution from Partners",
      "Firms sharing resources with limited liability"
    ]
  },
  {
    id: "opc",
    name: "One Person Company",
    abbreviation: "OPC",
    cost: "₹1,499 + Govt. Fee",
    icon: User,
    colorClass: "from-[#EDF1E7] to-[#F6F8F3] border-olive-200",
    learnMoreUrl: "/services/opc-registration",
    bestFor: [
      "Freelancers, Small-scale businesses",
      "Businesses looking for minimal compliance",
      "Businesses looking for single-ownership"
    ]
  },
  {
    id: "partnership",
    name: "Partnership",
    abbreviation: "General Partnership",
    cost: "No Formal Registration Required",
    icon: Handshake,
    colorClass: "from-[#F5F2EB] to-[#FAF8F5] border-brown-200",
    learnMoreUrl: "/services/partnership-firm-registration",
    bestFor: [
      "Professional Services",
      "Home-based Services",
      "Low capital family businesses"
    ]
  },
  {
    id: "proprietorship",
    name: "Sole Proprietorship",
    abbreviation: "Sole Owner",
    cost: "No Formal Registration Required",
    icon: FileText,
    colorClass: "from-[#F2EFEA] to-[#FAF7F3] border-brown-200",
    learnMoreUrl: "/services/sole-proprietorship-registration",
    bestFor: [
      "Freelancers & Solo Consultants",
      "Home-based Services",
      "Local Retail shops & vendors"
    ]
  }
];

// --- COMPARISON COLUMNS & ROWS ---
const COMPARISON_ROWS = [
  {
    label: "Registration Costs",
    pvtLtd: "₹1,499 + Govt. Fee",
    llp: "₹1,499 + Govt. Fee",
    opc: "₹1,499 + Govt. Fee",
    partnership: "No Formal Registration Required",
    proprietorship: "No Formal Registration Required",
    hasLinks: true
  },
  {
    label: "Suitable For",
    pvtLtd: "Financial Services, Tech Startups, Medium Enterprises",
    llp: "Consultancy firms, Professional Services",
    opc: "Franchises, Retail Stores, Small Businesses",
    partnership: "Professional Services, Home-based Services",
    proprietorship: "Freelancers, Home-based Services, Retail shops"
  },
  {
    label: "No. Of Shareholders/Partners",
    pvtLtd: "2 - 200",
    llp: "2 - 20",
    opc: "Only 1",
    partnership: "2 - Unlimited",
    proprietorship: "Only 1"
  },
  {
    label: "Liability",
    pvtLtd: "Limited Liability",
    llp: "Limited Liability",
    opc: "Limited Liability",
    partnership: "Unlimited Liability",
    proprietorship: "Unlimited Liability"
  },
  {
    label: "Fundraising",
    pvtLtd: "Multiple Options",
    llp: "Relatively Few Options",
    opc: "Limited Options",
    partnership: "Limited Options",
    proprietorship: "Limited Options"
  },
  {
    label: "Compliances",
    pvtLtd: "Maximum",
    llp: "Moderate",
    opc: "Moderate",
    partnership: "Minimal",
    proprietorship: "Minimal"
  }
];

export default function WhichCompanyTypeLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [modalState, handleModalSubmit] = useForm("xqeyrnpp");

  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    founders: "",
    funding: "",
    liability: ""
  });
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleQuizAnswer = (key: "founders" | "funding" | "liability", value: string) => {
    const updatedAnswers = { ...quizAnswers, [key]: value };
    setQuizAnswers(updatedAnswers);

    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate recommendation
      let recommendation = "";
      if (updatedAnswers.funding === "equity") {
        recommendation = "pvt-ltd";
      } else if (updatedAnswers.liability === "yes") {
        if (updatedAnswers.founders === "solo") {
          recommendation = "opc";
        } else {
          recommendation = "llp";
        }
      } else {
        if (updatedAnswers.founders === "solo") {
          recommendation = "proprietorship";
        } else {
          recommendation = "partnership";
        }
      }
      setQuizResult(recommendation);
      setQuizStep(4);
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizAnswers({ founders: "", funding: "", liability: "" });
    setQuizResult(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brown-900">
      
      {/* ── HERO HEADER SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-light to-white pt-28 md:pt-[140px] pb-16 px-6 md:px-12 border-b border-brown-100/30">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-[11px] font-bold text-olive-700 tracking-widest uppercase bg-olive-50/80 px-4.5 py-1.5 rounded-full border border-olive-200/40 inline-block">
            Structuring Advisory
          </span>
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[62px] font-medium text-brown-900 leading-[1.1] tracking-tight">
            Know Your <span className="text-olive-600 italic">Company Type</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-brown-600 leading-relaxed max-w-2xl mx-auto">
            The only KYC you need: Tailor your business journey by answering our questions and discovering the perfect match that suits your needs.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setShowQuiz(true);
                resetQuiz();
                document.getElementById("quiz-container")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-olive-600 hover:bg-olive-700 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              Find your company type <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-olive-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cream rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* ── INTERACTIVE QUIZ SECTION ── */}
      {showQuiz && (
        <section id="quiz-container" className="max-w-3xl mx-auto px-6 py-12 scroll-mt-24">
          <div className="bg-[#FAF9F6] border border-olive-200/50 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
            
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-brown-100/50">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-olive-600" />
                <h3 className="font-serif text-[18px] font-bold text-brown-900">Structuring Wizard</h3>
              </div>
              <button 
                onClick={() => setShowQuiz(false)}
                className="text-brown-400 hover:text-brown-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Founders */}
            {quizStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-olive-600 uppercase tracking-widest">Question 1 of 3</span>
                  <h4 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#1A1917]">
                    How many founders or partners will own the business?
                  </h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleQuizAnswer("founders", "solo")}
                    className="p-6 text-left bg-white border border-gray-200 hover:border-olive-500 rounded-2xl transition-all cursor-pointer hover:shadow-md group"
                  >
                    <User className="w-8 h-8 text-olive-600 mb-4 group-hover:scale-110 transition-transform" />
                    <strong className="text-[15px] text-brown-900 block mb-1">Just me (Solo Founder)</strong>
                    <span className="text-[12.5px] text-brown-500">I want 100% control and ownership of my venture.</span>
                  </button>
                  <button
                    onClick={() => handleQuizAnswer("founders", "co-founders")}
                    className="p-6 text-left bg-white border border-gray-200 hover:border-olive-500 rounded-2xl transition-all cursor-pointer hover:shadow-md group"
                  >
                    <Handshake className="w-8 h-8 text-olive-600 mb-4 group-hover:scale-110 transition-transform" />
                    <strong className="text-[15px] text-brown-900 block mb-1">2 or more people (Co-founders/Partners)</strong>
                    <span className="text-[12.5px] text-brown-500">I am co-founding with business partners.</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Funding */}
            {quizStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-olive-600 uppercase tracking-widest">Question 2 of 3</span>
                  <h4 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#1A1917]">
                    What is your primary source of funding / scaling strategy?
                  </h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleQuizAnswer("funding", "equity")}
                    className="p-6 text-left bg-white border border-gray-200 hover:border-olive-500 rounded-2xl transition-all cursor-pointer hover:shadow-md group"
                  >
                    <Building2 className="w-8 h-8 text-olive-600 mb-4 group-hover:scale-110 transition-transform" />
                    <strong className="text-[15px] text-brown-900 block mb-1">Raise equity from Angel Investors / VCs</strong>
                    <span className="text-[12.5px] text-brown-500">Planning to pitch to venture capital, issue equity shares, or offer ESOPs to employees.</span>
                  </button>
                  <button
                    onClick={() => handleQuizAnswer("funding", "bootstrap")}
                    className="p-6 text-left bg-white border border-gray-200 hover:border-olive-500 rounded-2xl transition-all cursor-pointer hover:shadow-md group"
                  >
                    <Briefcase className="w-8 h-8 text-olive-600 mb-4 group-hover:scale-110 transition-transform" />
                    <strong className="text-[15px] text-brown-900 block mb-1">Bootstrap / Bank Loans / Partner Contributions</strong>
                    <span className="text-[12.5px] text-brown-500">Growing through client revenue, personal savings, bank loans, or simple profit sharing.</span>
                  </button>
                </div>
                <button
                  onClick={() => setQuizStep(1)}
                  className="text-xs font-bold text-brown-500 hover:text-brown-800 transition-colors cursor-pointer"
                >
                  &larr; Back to previous step
                </button>
              </div>
            )}

            {/* Step 3: Liability */}
            {quizStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-olive-600 uppercase tracking-widest">Question 3 of 3</span>
                  <h4 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#1A1917]">
                    Do you need Limited Liability to protect your personal assets?
                  </h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleQuizAnswer("liability", "yes")}
                    className="p-6 text-left bg-white border border-gray-200 hover:border-olive-500 rounded-2xl transition-all cursor-pointer hover:shadow-md group"
                  >
                    <ShieldCheck className="w-8 h-8 text-olive-600 mb-4 group-hover:scale-110 transition-transform" />
                    <strong className="text-[15px] text-brown-900 block mb-1">Yes, absolutely</strong>
                    <span className="text-[12.5px] text-brown-500">I want separate legal entity status. Personal assets (home, car) must remain 100% protected.</span>
                  </button>
                  <button
                    onClick={() => handleQuizAnswer("liability", "no")}
                    className="p-6 text-left bg-white border border-gray-200 hover:border-olive-500 rounded-2xl transition-all cursor-pointer hover:shadow-md group"
                  >
                    <FileText className="w-8 h-8 text-olive-600 mb-4 group-hover:scale-110 transition-transform" />
                    <strong className="text-[15px] text-brown-900 block mb-1">No, unlimited liability is fine</strong>
                    <span className="text-[12.5px] text-brown-500">Simple business operations, minimal compliance is preferred over asset protection.</span>
                  </button>
                </div>
                <button
                  onClick={() => setQuizStep(2)}
                  className="text-xs font-bold text-brown-500 hover:text-brown-800 transition-colors cursor-pointer"
                >
                  &larr; Back to previous step
                </button>
              </div>
            )}

            {/* Step 4: Result */}
            {quizStep === 4 && quizResult && (
              <div className="space-y-6 text-center py-4 animate-fade-in">
                <div className="w-16 h-16 bg-olive-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-olive-200">
                  <Award className="w-8 h-8 text-olive-600" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-olive-600 uppercase tracking-widest block">RECOMMENDED STRUCTURE</span>
                  <h4 className="font-serif text-[26px] sm:text-[30px] font-bold text-brown-900">
                    {STRUCTURES.find((s) => s.id === quizResult)?.name}
                  </h4>
                  <p className="text-[14px] text-brown-600 max-w-md mx-auto">
                    Based on your preferences for {quizAnswers.founders === "solo" ? "solo ownership" : "partnership/co-founders"}, {quizAnswers.funding === "equity" ? "venture fundraising" : "bootstrapping"}, and {quizAnswers.liability === "yes" ? "limited liability protection" : "minimal setup compliance"}.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  {STRUCTURES.find((s) => s.id === quizResult)?.learnMoreUrl !== "#comparison-table" ? (
                    <a
                      href={STRUCTURES.find((s) => s.id === quizResult)?.learnMoreUrl}
                      className="w-full sm:w-auto px-6 py-3 border border-olive-600 text-olive-700 font-bold text-[13px] rounded-xl hover:bg-olive-50/50 transition-all text-center"
                    >
                      Learn More & View Process
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        document.getElementById("comparison-table")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto px-6 py-3 border border-olive-600 text-olive-700 font-bold text-[13px] rounded-xl hover:bg-olive-50/50 transition-all text-center"
                    >
                      View Detailed Comparison
                    </button>
                  )}
                  {STRUCTURES.find((s) => s.id === quizResult)?.cost !== "No Formal Registration Required" && (
                    <button
                      onClick={() => openModal(`${STRUCTURES.find((s) => s.id === quizResult)?.name} Registration`)}
                      className="w-full sm:w-auto px-6 py-3 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[13px] rounded-xl transition-all shadow-sm"
                    >
                      Register Now for {STRUCTURES.find((s) => s.id === quizResult)?.cost.split(" ")[0]}
                    </button>
                  )}
                </div>

                <div className="pt-6 border-t border-brown-100/40">
                  <button
                    onClick={resetQuiz}
                    className="text-xs font-bold text-olive-600 hover:text-olive-850 underline transition-colors cursor-pointer"
                  >
                    Take quiz again
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ── CARD STRUCTURES GRID INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-brown-900 leading-tight">
            Which company type should you register?
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-brown-600 leading-relaxed">
            In India, you can choose from diverse business structures designed to meet your needs. Consider a Private Limited Company if you want to raise funds or plan for ESOPs in the future. On the other hand, if you're in professional services and need limited liability, an LLP might be the best choice for you. Remember, the choice is yours, and understanding each structure empowers you to select the one that aligns seamlessly with your vision. Learn more about different company types below.
          </p>
        </div>

        {/* 5-Column Horizontal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STRUCTURES.map((struct) => {
            const IconComponent = struct.icon;
            return (
              <div
                key={struct.id}
                className={`bg-gradient-to-br ${struct.colorClass} border border-olive-200/50 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-350 group hover:-translate-y-1`}
              >
                <div>
                  <div className="w-10 h-10 bg-white/90 border border-olive-200/30 rounded-xl flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 text-olive-600" />
                  </div>
                  <h3 className="font-serif text-[15px] sm:text-[16px] font-bold text-brown-900 leading-snug">
                    {struct.name}
                  </h3>
                  <span className="text-[11px] text-brown-400 font-medium block mb-3">({struct.abbreviation})</span>
                  
                  <p className="text-[14.5px] font-bold text-olive-700 mb-4 font-serif leading-tight">
                    {struct.cost}
                  </p>

                  <div className="border-t border-olive-200/30 pt-3.5 mb-6">
                    <span className="text-[9px] font-bold text-brown-400 tracking-wider block mb-2.5">BEST SUITED FOR</span>
                    <ul className="space-y-2 text-[11.5px] text-brown-600">
                      {struct.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <Check className="w-3.5 h-3.5 text-olive-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-3 border-t border-olive-200/30">
                  <a
                    href={struct.learnMoreUrl}
                    className="w-full text-center py-2 border border-olive-600 hover:bg-olive-50/50 text-olive-600 font-bold text-[10.5px] rounded-lg transition-all"
                  >
                    Learn More
                  </a>
                  {struct.cost !== "No Formal Registration Required" && (
                    <button
                      onClick={() => openModal(`${struct.name} Registration`)}
                      className="w-full text-center py-2 bg-olive-600 hover:bg-olive-700 text-white font-bold text-[10.5px] rounded-lg transition-all shadow-xs cursor-pointer"
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DETAILED COMPARISON TABLE SECTION ── */}
      <section id="comparison-table" className="max-w-7xl mx-auto px-6 md:px-12 py-12 scroll-mt-24">
        <div className="space-y-3 mb-8">
          <span className="text-[10px] font-bold text-olive-600 uppercase tracking-widest">Side-By-Side Comparison</span>
          <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-brown-900">
            Compare Business Structures in India
          </h2>
          <p className="text-sm text-brown-500">
            Evaluate the registration costs, compliance loads, liabilities, and fundraising capabilities to choose your best fit.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-brown-200/40 rounded-2xl shadow-xs">
          <table className="w-full text-left border-collapse min-w-[900px] text-[13.5px]">
            <thead>
              <tr className="bg-[#FAF9F6] border-b border-brown-200/40 text-brown-900 font-serif font-semibold">
                <th className="p-4.5 w-[200px] bg-[#FAF9F6] sticky left-0 z-10 border-r border-brown-200/40">Feature</th>
                <th className="p-4.5 text-center">Private Limited (Pvt. Ltd.)</th>
                <th className="p-4.5 text-center">Limited Liability Partnership (LLP)</th>
                <th className="p-4.5 text-center">One Person Company (OPC)</th>
                <th className="p-4.5 text-center">Partnership</th>
                <th className="p-4.5 text-center">Sole Proprietorship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brown-100/50 text-brown-700">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-cream-light/30 transition-colors">
                  <td className="p-4.5 font-bold text-brown-900 bg-white sticky left-0 z-10 border-r border-brown-200/40">
                    {row.label}
                  </td>
                  
                  {/* Pvt Ltd Column */}
                  <td className="p-4.5 text-center">
                    {row.hasLinks ? (
                      <div className="space-y-1.5">
                        <span className="font-serif font-semibold text-olive-750 block">{row.pvtLtd}</span>
                        <a href="/services/company-incorporation" className="text-xs font-bold text-olive-650 hover:underline">Learn more</a>
                      </div>
                    ) : (
                      row.pvtLtd
                    )}
                  </td>

                  {/* LLP Column */}
                  <td className="p-4.5 text-center">
                    {row.hasLinks ? (
                      <div className="space-y-1.5">
                        <span className="font-serif font-semibold text-olive-750 block">{row.llp}</span>
                        <a href="/services/llp-registration" className="text-xs font-bold text-olive-650 hover:underline">Learn more</a>
                      </div>
                    ) : (
                      row.llp
                    )}
                  </td>

                  {/* OPC Column */}
                  <td className="p-4.5 text-center">
                    {row.hasLinks ? (
                      <div className="space-y-1.5">
                        <span className="font-serif font-semibold text-olive-750 block">{row.opc}</span>
                        <a href="/services/opc-registration" className="text-xs font-bold text-olive-650 hover:underline">Learn more</a>
                      </div>
                    ) : (
                      row.opc
                    )}
                  </td>

                  {/* Partnership Column */}
                  <td className="p-4.5 text-center">
                    {row.hasLinks ? (
                      <div className="space-y-1.5">
                        <span className="text-brown-500 block">{row.partnership}</span>
                        <a href="/services/partnership-firm-registration" className="text-xs font-bold text-olive-650 hover:underline">Learn more</a>
                      </div>
                    ) : (
                      row.partnership
                    )}
                  </td>

                  {/* Proprietorship Column */}
                  <td className="p-4.5 text-center">
                    {row.hasLinks ? (
                      <div className="space-y-1.5">
                        <span className="text-brown-500 block">{row.proprietorship}</span>
                        <a href="/services/sole-proprietorship-registration" className="text-xs font-bold text-olive-650 hover:underline">Learn more</a>
                      </div>
                    ) : (
                      row.proprietorship
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-[#FAF9F6] border border-brown-200/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative">
          <span className="text-[60px] font-serif text-olive-600/10 absolute top-4 left-6 leading-none pointer-events-none">“</span>
          
          <div className="space-y-6 relative z-10">
            <p className="font-serif text-[17px] sm:text-[20px] text-brown-800 leading-relaxed italic">
              We would recommend Founding Legals incorporation services to any founder without a second doubt. The process was beyond efficient and show's Founding Legals founder's commitment and vision to truly help entrepreneur's and early stage startups to get them incorporated with ease. If you wanna get incorporated, pick them. Thanks for the help Founding Legals.
            </p>

            <div className="flex items-center gap-4.5 pt-2">
              <div className="w-12 h-12 bg-olive-600/10 rounded-full flex items-center justify-center font-serif text-[16px] font-bold text-olive-700">
                DT
              </div>
              <div>
                <h4 className="font-bold text-[14px] text-brown-900">Dhaval Trivedi</h4>
                <p className="text-[12px] text-brown-500">TBS Magazine</p>
              </div>
            </div>
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
              in just ₹1,499 <span className="text-[18px] sm:text-[22px] font-sans font-light opacity-80">+ Govt. Fee</span>
            </h3>
            <p className="text-[14px] sm:text-[15.5px] text-olive-100 leading-relaxed max-w-xl mx-auto">
              Make your business ready to scale. Become an incorporated company through Founding Legals.
            </p>
            <div className="pt-4">
              <button
                onClick={() => openModal("Standard Incorporation Package")}
                className="px-8 py-3.5 bg-white hover:bg-cream text-olive-800 font-bold text-[13px] rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                Register your business
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
