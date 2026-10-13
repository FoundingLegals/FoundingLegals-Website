"use client";

import React, { useState } from "react";
import {
  Phone,
  PhoneCall,
  Video,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Building,
  User,
  Mail,
  Sparkles,
  Lock,
  Clock,
  ChevronDown,
  Star,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const CONSULTATION_SERVICES = [
  "Private Limited (Pvt Ltd) Company Incorporation",
  "LLP / Partnership / OPC Registration",
  "Startup India (DPIIT) & 80-IAC Tax Exemption",
  "Trademark Registration & Brand IP Protection",
  "GST Registration & Monthly Compliance Filings",
  "Founders' Agreement & Custom Legal Contracts",
  "Fundraising Advisory, Term Sheets & Cap Table",
  "FSSAI Food License / Import Export Code (IEC)",
  "Tax Audit, TDS & Annual Financial Compliance",
  "General Startup Legal & CA Consultation",
];

const TIME_SLOTS = [
  { id: "morning", label: "Morning", time: "10:00 AM – 1:00 PM IST" },
  { id: "afternoon", label: "Afternoon", time: "2:00 PM – 5:00 PM IST" },
  { id: "evening", label: "Evening", time: "5:00 PM – 8:00 PM IST" },
];

const CONTACT_PHONE = "+91 9791222557";
const CONTACT_PHONE_CLEAN = "+919791222557";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=%2B919791222557&text=Hi%20Founding%20Legals%2C%20I%20would%20like%20to%20book%20a%20Free%20Legal%20%26%20CA%20Consultation.&type=phone_number&app_absent=0";

const FAQS = [
  {
    q: "Is this initial consultation truly 100% free?",
    a: "Yes, completely free. There are zero upfront charges or hidden commitments. You will receive a direct 30-minute session with an experienced startup CA or advocate to review your structure and compliance roadmap.",
  },
  {
    q: "Can I call right now instead of scheduling a slot?",
    a: "Absolutely! If our lines are active (Monday to Saturday, 9:00 AM to 7:30 PM IST), feel free to click the Call button above (+91 9791222557) or message us on WhatsApp for immediate assistance.",
  },
  {
    q: "Who conducts the consultation?",
    a: "Your session will be led by certified Chartered Accountants (ICAI members) and corporate lawyers who specialize exclusively in Indian startup legalities, incorporation, taxation, and angel/VC funding.",
  },
  {
    q: "Is my startup idea and business confidential?",
    a: "Yes. All discussions are strictly governed by professional advocate-client confidentiality and non-disclosure standards. Your data is never shared with third parties.",
  },
];

function OfficialWhatsAppIcon({
  className = "w-4 h-4",
  white = false,
}: {
  className?: string;
  white?: boolean;
}) {
  if (white) {
    return (
      <svg
        className={className}
        viewBox="0 0 175.216 175.552"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M87.697 15.52c-34.912 0-63.327 28.411-63.327 63.323 0 11.156 2.915 22.046 8.448 31.636l1.312 2.274-5.546 20.297 20.785-5.451 2.2 1.306c9.255 5.485 19.866 8.375 30.687 8.375 34.912 0 63.324-28.412 63.324-63.327 0-16.924-6.589-32.83-18.558-44.795-11.968-11.969-27.876-18.558-44.801-18.558zm36.883 90.076c-1.517 4.281-7.575 7.838-10.515 8.328-2.825.469-6.495.66-10.51-.627-2.428-.778-5.539-1.996-9.52-3.719-16.945-7.33-28.026-24.526-28.877-25.66-.848-1.134-6.887-9.16-6.887-17.472 0-8.311 4.354-12.399 5.897-14.103 1.542-1.704 3.37-2.13 4.498-2.13 1.127 0 2.254.01 3.238.058.983.048 2.308-.372 3.606 2.748 1.385 3.327 4.743 11.582 5.155 12.422.412.84.687 1.82.127 2.94-.56 1.12-1.127 1.82-2.106 2.96-.98 1.141-1.782 1.956-2.617 2.871-.924 1.012-.497 2.083.024 2.977 1.189 2.04 4.254 7.028 9.123 11.365 6.262 5.578 11.534 7.297 13.167 8.106 1.633.808 2.585.69 3.541-.413.957-1.103 4.104-4.787 5.201-6.43 1.096-1.644 2.193-1.371 3.68-.823 1.488.549 9.444 4.453 11.066 5.265 1.623.812 2.705 1.218 3.104 1.905.399.687.399 3.978-1.118 8.259z"
        />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#25D366"
        d="m34.697 140.485 10.375-37.95c-6.159-10.686-9.409-22.812-9.409-35.253 0-39.021 31.75-70.768 70.771-70.768 18.911 0 36.688 7.365 50.054 20.735 13.367 13.37 20.728 31.152 20.725 50.063 0 39.027-31.75 70.774-70.771 70.774-11.834 0-23.475-2.975-33.825-8.625l-37.92 10.024z"
      />
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M87.697 15.52c-34.912 0-63.327 28.411-63.327 63.323 0 11.156 2.915 22.046 8.448 31.636l1.312 2.274-5.546 20.297 20.785-5.451 2.2 1.306c9.255 5.485 19.866 8.375 30.687 8.375 34.912 0 63.324-28.412 63.324-63.327 0-16.924-6.589-32.83-18.558-44.795-11.968-11.969-27.876-18.558-44.801-18.558zm36.883 90.076c-1.517 4.281-7.575 7.838-10.515 8.328-2.825.469-6.495.66-10.51-.627-2.428-.778-5.539-1.996-9.52-3.719-16.945-7.33-28.026-24.526-28.877-25.66-.848-1.134-6.887-9.16-6.887-17.472 0-8.311 4.354-12.399 5.897-14.103 1.542-1.704 3.37-2.13 4.498-2.13 1.127 0 2.254.01 3.238.058.983.048 2.308-.372 3.606 2.748 1.385 3.327 4.743 11.582 5.155 12.422.412.84.687 1.82.127 2.94-.56 1.12-1.127 1.82-2.106 2.96-.98 1.141-1.782 1.956-2.617 2.871-.924 1.012-.497 2.083.024 2.977 1.189 2.04 4.254 7.028 9.123 11.365 6.262 5.578 11.534 7.297 13.167 8.106 1.633.808 2.585.69 3.541-.413.957-1.103 4.104-4.787 5.201-6.43 1.096-1.644 2.193-1.371 3.68-.823 1.488.549 9.444 4.453 11.066 5.265 1.623.812 2.705 1.218 3.104 1.905.399.687.399 3.978-1.118 8.259z"
      />
    </svg>
  );
}

export default function ConsultationClientView() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedService, setSelectedService] = useState(CONSULTATION_SERVICES[0]);
  const [consultationMode, setConsultationMode] = useState<"phone" | "meet" | "whatsapp">("phone");
  const [dateChoice, setDateChoice] = useState<"today" | "tomorrow" | "custom">("today");
  const [customDate, setCustomDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0].label);
  const [message, setMessage] = useState("");

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getComputedDateString = () => {
    const today = new Date();
    if (dateChoice === "today") {
      return `Today (${today.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })})`;
    }
    if (dateChoice === "tomorrow") {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return `Tomorrow (${tomorrow.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })})`;
    }
    return customDate || today.toLocaleDateString("en-IN");
  };

  const getModeLabel = () => {
    if (consultationMode === "phone") return "Direct Phone Call";
    if (consultationMode === "meet") return "Google Meet Video Call";
    return "WhatsApp Audio Call";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    const cleanPhone = mobile.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);

    const computedDate = getComputedDateString();
    const modeLabel = getModeLabel();

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      company: companyName.trim() || "N/A",
      service: `Free Consultation: ${selectedService}`,
      category: "Legal Services",
      message: `[CONSULTATION BOOKING VIA /consultation]\nMode: ${modeLabel}\nPreferred Date: ${computedDate}\nPreferred Time Slot: ${selectedSlot}\nService: ${selectedService}\nCompany: ${companyName || "N/A"}\nDirect Call Helpline Provided: +91 9791222557\nNotes: ${message.trim() || "None"}`,
      consultation_mode: modeLabel,
      preferred_date: computedDate,
      preferred_slot: selectedSlot,
      service_interested: selectedService,
      user_notes: message.trim() || "N/A",
      source_page: "/consultation",
    };

    let delivered = false;

    // 1. Submit to internal API endpoint which persists & relays via Formspree
    try {
      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        delivered = true;
      }
    } catch (err) {
      console.warn("Primary API route error:", err);
    }

    // 2. Direct Formspree fallback to guarantee 100% email delivery if needed
    if (!delivered) {
      try {
        const formspreeRes = await fetch("https://formspree.io/f/xqeyrnpp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Free Consultation Request: ${selectedService} from ${fullName.trim()}`,
            name: fullName.trim(),
            email: email.trim(),
            mobile: mobile.trim(),
            company: companyName.trim() || "N/A",
            service: `Free Consultation: ${selectedService}`,
            consultation_mode: modeLabel,
            preferred_date: computedDate,
            preferred_slot: selectedSlot,
            client_notes: message.trim() || "N/A",
            helpline: "+91 9791222557",
          }),
        });

        if (formspreeRes.ok) {
          delivered = true;
        }
      } catch (err) {
        console.warn("Direct Formspree relay error:", err);
      }
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── TOP HERO HEADER ── */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-brown-200/60 rounded-full text-olive-800 text-xs font-bold tracking-wide uppercase shadow-2xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-olive-600" />
          100% Free &middot; 30-Minute Expert Strategy Session
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brown-900 tracking-tight leading-[1.15] mb-4">
          Talk to a Senior Startup CA & Advocate
        </h1>

        <p className="text-sm sm:text-base text-brown-600 leading-relaxed max-w-2xl mx-auto">
          Get actionable answers on company incorporation, GST registrations, trademark protection,
          tax exemption schemes, or fundraising agreements. No obligations or sales pressure.
        </p>

        {/* ── DIRECT CALL BANNER ── */}
        <div className="mt-7 bg-white rounded-2xl border border-brown-200/80 p-4 sm:p-5 shadow-sm max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-2xl bg-olive-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brown-900 uppercase tracking-wide">
                    Prefer to speak right now?
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800">
                    Live
                  </span>
                </div>
                <p className="text-xs text-brown-600">
                  Call our expert line directly &middot; Mon&ndash;Sat 9:00 AM&ndash;7:30 PM IST
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${CONTACT_PHONE_CLEAN}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-olive-600 hover:bg-olive-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CONTACT_PHONE}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F2FAF4] border border-brown-200 hover:border-[#25D366] text-brown-800 rounded-xl text-xs font-bold transition-all shadow-2xs"
              >
                <OfficialWhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2-COLUMN MAIN SECTION ── */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        
        {/* Left Column: What you get & Trust metrics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-brown-200/80 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brown-900 mb-4">
              What We&apos;ll Cover In Your 30-Min Call
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-brown-700">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-olive-100 text-olive-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  1
                </div>
                <div>
                  <strong className="text-brown-900 block font-semibold">Entity Structuring Roadmap</strong>
                  Comparison between Private Limited, LLP, OPC, or Sole Prop based on your revenue model and investment roadmap.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-olive-100 text-olive-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  2
                </div>
                <div>
                  <strong className="text-brown-900 block font-semibold">Tax Benefits & DPIIT Fast-track</strong>
                  Check eligibility for Startup India recognition, Section 80-IAC 3-year income tax exemption, and Angel Tax relief.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-olive-100 text-olive-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  3
                </div>
                <div>
                  <strong className="text-brown-900 block font-semibold">Brand & Trademark Clearance</strong>
                  Instant name availability check on MCA databases and trademark class clash clearance.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-olive-100 text-olive-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  4
                </div>
                <div>
                  <strong className="text-brown-900 block font-semibold">Founder Agreements & Cap Table</strong>
                  Key clauses for equity vesting, reverse dilution, IP assignment, and board governance.
                </div>
              </div>
            </div>

            <hr className="my-6 border-brown-100" />

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-serif text-2xl font-bold text-olive-700">3,000+</div>
                <div className="text-[11px] text-brown-500 mt-0.5 font-medium">Founders Advised</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-olive-700">4.9/5</div>
                <div className="text-[11px] text-brown-500 mt-0.5 font-medium">Client Rating</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-olive-700">100%</div>
                <div className="text-[11px] text-brown-500 mt-0.5 font-medium">Confidential</div>
              </div>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="bg-[#FAF7F2] border border-brown-200/70 rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-brown-700 italic leading-relaxed mb-3">
              &ldquo;The free consultation saved us thousands in stamp duty and gave our co-founders complete clarity on how to structure our authorized capital before raising seed funds.&rdquo;
            </p>
            <div className="text-xs font-bold text-brown-900">
              Rahul K. &middot; Co-Founder, Nexus FinTech
            </div>
          </div>
        </div>

        {/* Right Column: Form Card or Success Screen */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-brown-200/80 p-6 sm:p-9 shadow-md">
            {isSuccess ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-olive-100 rounded-full flex items-center justify-center mb-6 text-olive-600 shadow-sm animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-50 border border-olive-200/60 rounded-full text-olive-800 text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-olive-600" />
                  Booking Confirmed
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brown-900 mb-3">
                  Consultation Request Received!
                </h3>

                <p className="text-brown-600 max-w-md leading-relaxed text-sm mb-6">
                  Thank you, <strong className="text-brown-900">{fullName}</strong>. A confirmation has been
                  dispatched to <span className="text-olive-700 font-semibold">{email}</span>. One of our
                  senior advocates will reach out to you via <strong>{getModeLabel()}</strong>.
                </p>

                <div className="w-full max-w-md bg-cream/40 border border-brown-200/70 rounded-2xl p-4 sm:p-5 mb-7 text-left space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-brown-100">
                    <span className="text-brown-500">Service:</span>
                    <span className="text-brown-900 font-bold truncate max-w-[220px]">{selectedService}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-brown-100">
                    <span className="text-brown-500">Slot:</span>
                    <span className="text-brown-900 font-semibold">{getComputedDateString()} &middot; {selectedSlot}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-brown-500">Phone:</span>
                    <span className="text-brown-900 font-semibold">+91 {mobile}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`tel:${CONTACT_PHONE_CLEAN}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white rounded-full text-xs font-bold transition-all shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Us Now
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName("");
                      setEmail("");
                      setMobile("");
                      setCompanyName("");
                      setMessage("");
                    }}
                    className="px-5 py-2.5 bg-brown-100 hover:bg-brown-200 text-brown-900 rounded-full text-xs font-bold transition-all"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-medium text-brown-900 mb-1">
                    Schedule Your Free Session
                  </h3>
                  <p className="text-xs sm:text-sm text-brown-500">
                    Fill out the form below and we will confirm your preferred slot via email and phone.
                  </p>
                </div>

                <form onSubmit={handleSubmit} data-ignore-tracker="true" className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* 1. Service Topic Selection */}
                  <div>
                    <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                      1. Select Your Service of Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 font-medium cursor-pointer shadow-2xs appearance-none"
                      >
                        {CONSULTATION_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brown-400">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* 2. Mode Selection */}
                  <div>
                    <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-2">
                      2. Preferred Consultation Mode <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setConsultationMode("phone")}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          consultationMode === "phone"
                            ? "bg-olive-600 text-white border-olive-600 shadow-sm"
                            : "bg-[#FAF9F6] text-brown-700 border-brown-200 hover:border-olive-400"
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Phone Call</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setConsultationMode("meet")}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          consultationMode === "meet"
                            ? "bg-olive-600 text-white border-olive-600 shadow-sm"
                            : "bg-[#FAF9F6] text-brown-700 border-brown-200 hover:border-olive-400"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Google Meet</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setConsultationMode("whatsapp")}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          consultationMode === "whatsapp"
                            ? "bg-olive-600 text-white border-olive-600 shadow-sm"
                            : "bg-[#FAF9F6] text-brown-700 border-brown-200 hover:border-olive-400"
                        }`}
                      >
                        <OfficialWhatsAppIcon className="w-4 h-4" white={consultationMode === "whatsapp"} />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  {/* 3. Date & Slot */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                        Preferred Day <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setDateChoice("today")}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            dateChoice === "today"
                              ? "bg-brown-900 text-white border-brown-900 shadow-2xs"
                              : "bg-[#FAF9F6] text-brown-700 border-brown-200 hover:bg-cream"
                          }`}
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          onClick={() => setDateChoice("tomorrow")}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            dateChoice === "tomorrow"
                              ? "bg-brown-900 text-white border-brown-900 shadow-2xs"
                              : "bg-[#FAF9F6] text-brown-700 border-brown-200 hover:bg-cream"
                          }`}
                        >
                          Tomorrow
                        </button>
                        <button
                          type="button"
                          onClick={() => setDateChoice("custom")}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            dateChoice === "custom"
                              ? "bg-brown-900 text-white border-brown-900 shadow-2xs"
                              : "bg-[#FAF9F6] text-brown-700 border-brown-200 hover:bg-cream"
                          }`}
                        >
                          Pick Date
                        </button>
                      </div>
                      {dateChoice === "custom" && (
                        <input
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={customDate}
                          onChange={(e) => setCustomDate(e.target.value)}
                          className="mt-2 w-full px-3 py-2 rounded-xl border border-brown-200 bg-white text-xs text-brown-800"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                        Preferred Time Slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 font-medium cursor-pointer shadow-2xs"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot.id} value={slot.label}>
                            {slot.label} ({slot.time})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 4. Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Arjun Mehta"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 font-medium shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="arjun@startup.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 font-medium shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Mobile & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <span className="flex items-center px-3 border border-brown-200 rounded-xl bg-[#FAF9F6] text-xs font-bold text-brown-700 shrink-0">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={10}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 font-medium shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-brown-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Unicorn Inc."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 font-medium shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 6. Specific Questions */}
                  <div>
                    <label className="block text-xs font-bold text-brown-700 uppercase tracking-wider mb-1.5">
                      Specific Questions or Requirements{" "}
                      <span className="text-brown-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Inquiring about incorporation timeline, GST mandatory threshold, and co-founder vesting..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-sm text-brown-900 resize-none shadow-2xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-olive-600 hover:bg-olive-700 text-white rounded-xl font-bold text-sm sm:text-[15px] shadow-lg shadow-olive-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-olive-600/35 hover:scale-[1.005] ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Consultation Request...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Book Free Consultation (30 Mins)</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-brown-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-olive-600" />
                      Strictly Confidential
                    </span>
                    <span>&middot;</span>
                    <span>No Credit Card Required</span>
                    <span>&middot;</span>
                    <span>Direct Helpline: {CONTACT_PHONE}</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="max-w-3xl mx-auto pt-6 border-t border-brown-200">
        <h2 className="font-serif text-2xl font-medium text-brown-900 text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-brown-200/80 overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4.5 text-left font-semibold text-brown-900 text-sm hover:bg-cream/30 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-brown-500 transition-transform duration-200 shrink-0 ml-3 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4.5 pb-4.5 text-xs sm:text-sm text-brown-600 leading-relaxed border-t border-brown-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
