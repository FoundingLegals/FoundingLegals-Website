"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("fl_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("fl_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("fl_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-3 pb-3 sm:px-6 sm:pb-5"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-4xl mx-auto bg-white border border-brown-200 rounded-2xl shadow-[0_8px_32px_rgba(43,39,35,0.15)] overflow-hidden">

        {/* Close button — top-right on all screens */}
        <div className="relative p-4 sm:p-5">
          <button
            onClick={decline}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-brown-400 hover:bg-cream hover:text-brown-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top row: icon + heading */}
          <div className="flex items-center gap-3 mb-3 pr-8">
            <div className="shrink-0 w-9 h-9 rounded-xl bg-olive-600/10 flex items-center justify-center">
              <Cookie className="w-[18px] h-[18px] text-olive-600" />
            </div>
            <p className="font-semibold text-[14px] text-brown-900">
              We use cookies
            </p>
          </div>

          {/* Description */}
          <p className="text-[13px] text-brown-600 leading-relaxed mb-4">
            To improve your experience, analyse site traffic and personalise
            content. Read our{" "}
            <a
              href="/cookie-policy"
              className="text-olive-600 font-medium hover:underline"
            >
              Cookie Policy
            </a>
            ,{" "}
            <a
              href="/terms"
              className="text-olive-600 font-medium hover:underline"
            >
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-olive-600 font-medium hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>

          {/* Action buttons — full-width stacked on mobile, inline on sm+ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-semibold text-white bg-olive-600 rounded-full hover:bg-olive-700 active:scale-[0.98] transition-all shadow-sm text-center"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-medium text-brown-700 border border-brown-200 rounded-full hover:bg-cream active:scale-[0.98] transition-all text-center"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
