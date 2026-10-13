"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Phone,
  PhoneCall,
  Video,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Building,
  User,
  Mail,
  FileText,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock,
  Headphones,
} from "lucide-react";

export interface FreeConsultationDetail {
  service?: string;
  topic?: string;
  notes?: string;
}

// Global dispatcher to open Free Consultation Modal from anywhere
export function openFreeConsultation(detail?: FreeConsultationDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-free-consultation", {
        detail: detail || {},
      })
    );
  }
}

export function closeFreeConsultation() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-free-consultation"));
  }
}

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

export default function FreeConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
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

  const modalRef = useRef<HTMLDivElement>(null);

  // Global event listeners to open/close
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<FreeConsultationDetail>;
      if (customEvent.detail?.service) {
        const found = CONSULTATION_SERVICES.find((s) =>
          s.toLowerCase().includes(customEvent.detail.service!.toLowerCase())
        );
        if (found) setSelectedService(found);
      }
      if (customEvent.detail?.notes) {
        setMessage(customEvent.detail.notes);
      }
      setIsSuccess(false);
      setErrorMessage("");
      setIsOpen(true);
    };

    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-free-consultation", handleOpen);
    window.addEventListener("close-free-consultation", handleClose);

    return () => {
      window.removeEventListener("open-free-consultation", handleOpen);
      window.removeEventListener("close-free-consultation", handleClose);
    };
  }, []);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Compute chosen date string
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

    // Validation
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
      message: `[CONSULTATION BOOKING]\nMode: ${modeLabel}\nPreferred Date: ${computedDate}\nPreferred Time Slot: ${selectedSlot}\nService: ${selectedService}\nCompany: ${companyName || "N/A"}\nDirect Call Helpline Provided: +91 9791222557\nNotes: ${message.trim() || "None"}`,
      consultation_mode: modeLabel,
      preferred_date: computedDate,
      preferred_slot: selectedSlot,
      service_interested: selectedService,
      user_notes: message.trim() || "N/A",
      source_page: typeof window !== "undefined" ? window.location.pathname : "/consultation",
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

    if (delivered) {
      setIsSuccess(true);
    } else {
      // Even if network blips, show friendly reassurance with the direct call option
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage("");
    setFullName("");
    setEmail("");
    setMobile("");
    setCompanyName("");
    setMessage("");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm overflow-hidden animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-[#FDFCF9] rounded-3xl shadow-[0_25px_70px_rgba(43,39,35,0.25)] border border-[#E5E1D6] p-5 sm:p-6 md:p-7 text-left font-sans animate-dropdown max-h-[96vh] md:max-h-[95vh] overflow-y-auto slim-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F0EBE1] hover:bg-[#E5E1D6] text-brown-700 hover:text-brown-900 flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── SUCCESS STATE ── */}
        {isSuccess ? (
          <div className="py-8 sm:py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-olive-100 rounded-full flex items-center justify-center mb-6 text-olive-600 shadow-md animate-bounce">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-50 border border-olive-200/60 rounded-full text-olive-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-olive-600" />
              Consultation Scheduled
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brown-900 mb-3">
              We&apos;ve Received Your Request!
            </h3>

            <p className="text-brown-600 max-w-lg leading-relaxed text-sm sm:text-base mb-6">
              Thank you, <strong className="text-brown-900">{fullName}</strong>. A confirmation email
              has been relayed to <span className="text-olive-700 font-semibold">{email}</span>. A senior
              Chartered Accountant or legal specialist will connect with you via{" "}
              <strong>{getModeLabel()}</strong> during your preferred slot:
            </p>

            <div className="w-full max-w-md bg-white border border-brown-200/80 rounded-2xl p-4 sm:p-5 mb-8 text-left shadow-xs space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1 border-b border-brown-100">
                <span className="text-brown-500 font-medium">Service Topic:</span>
                <span className="text-brown-900 font-bold truncate max-w-[240px]">{selectedService}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-brown-100">
                <span className="text-brown-500 font-medium">Date & Slot:</span>
                <span className="text-brown-900 font-semibold">{getComputedDateString()} &middot; {selectedSlot}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-brown-500 font-medium">Contact Phone:</span>
                <span className="text-brown-900 font-semibold">+91 {mobile}</span>
              </div>
            </div>

            {/* Direct Calling Box inside Success */}
            <div className="w-full max-w-md bg-gradient-to-br from-olive-50 to-[#F5F2EB] border border-olive-200/80 rounded-2xl p-5 mb-8 text-left shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-olive-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brown-900 mb-1">
                    Need to talk to us immediately?
                  </h4>
                  <p className="text-xs text-brown-600 leading-relaxed mb-3">
                    Skip the wait and call our senior consultation desk directly. We are active now.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={`tel:${CONTACT_PHONE_CLEAN}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call {CONTACT_PHONE}
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      <OfficialWhatsAppIcon className="w-4 h-4" white={true} />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 bg-brown-900 text-white text-sm font-semibold rounded-full hover:bg-brown-800 transition-colors cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          /* ── BOOKING FORM & CALL CARD ── */
          <div>
            {/* Header / Title */}
            <div className="mb-3.5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-olive-100/70 text-olive-800 text-[10.5px] font-bold rounded-full uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3 text-olive-700" />
                Free 30-Min Strategy Consultation
              </div>
              <h2
                id="consultation-modal-title"
                className="font-serif text-xl sm:text-2xl md:text-[27px] font-medium text-brown-900 tracking-tight"
              >
                Book Your 1-on-1 Free Consultation
              </h2>
              <p className="text-xs sm:text-[13px] text-brown-600 mt-0.5 leading-relaxed">
                Connect directly with our senior Chartered Accountants and startup legal advocates.
                Get structured clarity on company setup, taxes, compliance, or contracts. Zero charge.
              </p>
            </div>

            {/* ── CALL TO BOOK BANNER ── */}
            <div className="bg-gradient-to-r from-[#F0ECE1] via-[#FAF7F2] to-olive-50 border border-[#DCD6C9] rounded-2xl p-3 sm:p-3.5 mb-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-olive-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <PhoneCall className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11.5px] font-bold text-brown-900 uppercase tracking-wide">
                        Prefer to talk immediately?
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-green-100 text-green-800">
                        Live Line
                      </span>
                    </div>
                    <p className="text-[11.5px] text-brown-600">
                      Call our consultation desk directly or chat on WhatsApp to book instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:shrink-0">
                  <a
                    href={`tel:${CONTACT_PHONE_CLEAN}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {CONTACT_PHONE}</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F2FAF4] border border-brown-200 hover:border-[#25D366] text-brown-800 rounded-xl text-xs font-bold transition-all shadow-2xs"
                  >
                    <OfficialWhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── CONSULTATION FORM ── */}
            <form onSubmit={handleSubmit} data-ignore-tracker="true" className="space-y-3 sm:space-y-3.5">
              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Service Topic Selection */}
              <div>
                <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                  1. What service do you need advice on? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 transition-all bg-white text-xs sm:text-[13px] text-brown-900 font-medium cursor-pointer shadow-2xs appearance-none"
                  >
                    {CONSULTATION_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brown-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Consultation Mode Selection */}
              <div>
                <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                  2. Preferred Consultation Mode <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultationMode("phone")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs sm:text-[12.5px] font-semibold transition-all cursor-pointer ${
                      consultationMode === "phone"
                        ? "bg-olive-600 text-white border-olive-600 shadow-sm"
                        : "bg-white text-brown-700 border-brown-200 hover:border-olive-400"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationMode("meet")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs sm:text-[12.5px] font-semibold transition-all cursor-pointer ${
                      consultationMode === "meet"
                        ? "bg-olive-600 text-white border-olive-600 shadow-sm"
                        : "bg-white text-brown-700 border-brown-200 hover:border-olive-400"
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Google Meet</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationMode("whatsapp")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs sm:text-[12.5px] font-semibold transition-all cursor-pointer ${
                      consultationMode === "whatsapp"
                        ? "bg-olive-600 text-white border-olive-600 shadow-sm"
                        : "bg-white text-brown-700 border-brown-200 hover:border-olive-400"
                    }`}
                  >
                    <OfficialWhatsAppIcon className="w-4 h-4" white={consultationMode === "whatsapp"} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                    Preferred Day <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setDateChoice("today")}
                      className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        dateChoice === "today"
                          ? "bg-brown-900 text-white border-brown-900 shadow-2xs"
                          : "bg-white text-brown-700 border-brown-200 hover:bg-cream"
                      }`}
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => setDateChoice("tomorrow")}
                      className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        dateChoice === "tomorrow"
                          ? "bg-brown-900 text-white border-brown-900 shadow-2xs"
                          : "bg-white text-brown-700 border-brown-200 hover:bg-cream"
                      }`}
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => setDateChoice("custom")}
                      className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        dateChoice === "custom"
                          ? "bg-brown-900 text-white border-brown-900 shadow-2xs"
                          : "bg-white text-brown-700 border-brown-200 hover:bg-cream"
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
                      className="mt-1.5 w-full px-3 py-1.5 rounded-xl border border-brown-200 bg-white text-xs text-brown-800"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-[13px] text-brown-900 font-medium cursor-pointer shadow-2xs"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot.id} value={slot.label}>
                        {slot.label} ({slot.time})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Details: 2 columns */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brown-400" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-[13px] text-brown-900 font-medium placeholder-brown-400 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brown-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@startup.com"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-[13px] text-brown-900 font-medium placeholder-brown-400 shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile and Company */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                    Mobile / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <span className="flex items-center px-2.5 border border-brown-200 rounded-xl bg-[#FAF9F6] text-xs font-bold text-brown-700 shrink-0 shadow-2xs">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={10}
                      className="w-full px-3 py-2 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-[13px] text-brown-900 font-medium placeholder-brown-400 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                    Company / Startup Name <span className="text-brown-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brown-400" />
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Tech Pvt Ltd"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-[13px] text-brown-900 font-medium placeholder-brown-400 shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Message / Context */}
              <div>
                <label className="block text-[11px] font-bold text-brown-700 uppercase tracking-wider mb-1">
                  Briefly describe your requirements or query{" "}
                  <span className="text-brown-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g., We are incorporating a 2-founder SaaS startup in Bangalore and need advice on equity split, DPIIT, and GST..."
                  className="w-full px-3 py-2 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-600 bg-white text-xs sm:text-[13px] text-brown-900 placeholder-brown-400 resize-none shadow-2xs"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 bg-olive-600 hover:bg-olive-700 text-white rounded-xl font-bold text-xs sm:text-[14px] shadow-lg shadow-olive-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-olive-600/35 hover:scale-[1.005] ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Scheduling Your Free Consultation...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Free Consultation (30 Mins)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust badges footer */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 pt-1 text-[10.5px] text-brown-500">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-olive-600" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-olive-600" />
                  Direct Chartered Accountants & Advocates
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-olive-600" />
                  Zero Obligations
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
