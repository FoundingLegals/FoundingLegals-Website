"use client";

import { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";

interface GoogleSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "sign-in" | "sign-up";
}

export default function GoogleSignInModal({ isOpen, onClose, mode = "sign-in" }: GoogleSignInModalProps) {
  const [loading, setLoading] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setIframeUrl(null);
      setLoading(false);
    }
  }, [isOpen]);

  const handleGoogleSignIn = () => {
    setLoading(true);
    const url = mode === "sign-up"
      ? "https://app.foundinglegals.com/sign-up"
      : "https://app.foundinglegals.com/sign-in";
    setIframeUrl(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={mode === "sign-up" ? "Create your account" : "Sign in to your account"}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-[0_32px_80px_rgba(43,39,35,0.2)] border border-brown-100/60 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-brown-100/60">
          <div className="flex items-center gap-3">
            <img
              src="/Founding Legals Logo.png"
              alt="Founding Legals"
              className="h-8 w-auto object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-brown-400 hover:bg-cream hover:text-brown-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {!iframeUrl ? (
          <div className="px-6 py-8 flex flex-col items-center text-center">
            <h2 className="text-[22px] font-serif font-medium text-brown-900 mb-2">
              {mode === "sign-up" ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-[14px] text-brown-500 mb-8 max-w-xs leading-relaxed">
              {mode === "sign-up"
                ? "Start your legal journey with Founding Legals. Free forever on essentials."
                : "Sign in to continue to your Founding Legals dashboard."}
            </p>

            {/* Google Sign-In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-white border border-brown-200 rounded-xl text-[14px] font-semibold text-brown-900 hover:bg-cream hover:border-brown-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {/* Google Logo SVG */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2045C17.64 8.5664 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z" fill="#4285F4"/>
                <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5932 3.68182 9C3.68182 8.4068 3.78409 7.83 3.96409 7.29V4.9582H0.957275C0.347727 6.1732 0 7.5477 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                <path d="M9 3.5795C10.3214 3.5795 11.5077 4.0336 12.4405 4.9254L15.0218 2.344C13.4632 0.8918 11.4259 0 9 0C5.48182 0 2.43818 2.0168 0.957275 4.9582L3.96409 7.29C4.67182 5.1627 6.65591 3.5795 9 3.5795Z" fill="#EA4335"/>
              </svg>
              {loading ? "Opening..." : "Continue with Google"}
            </button>

            <div className="flex items-center gap-3 my-5 w-full">
              <div className="flex-1 h-px bg-brown-100" />
              <span className="text-[12px] text-brown-400">or</span>
              <div className="flex-1 h-px bg-brown-100" />
            </div>

            <a
              href={mode === "sign-up" ? "https://app.foundinglegals.com/sign-up" : "https://app.foundinglegals.com/sign-in"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-5 py-3 bg-olive-600 text-white text-[14px] font-semibold rounded-xl hover:bg-olive-700 transition-all duration-200 shadow-sm"
            >
              {mode === "sign-up" ? "Sign up with Email" : "Sign in with Email"}
            </a>

            {mode === "sign-up" ? (
              <p className="mt-4 text-[12px] text-brown-400">
                Already have an account?{" "}
                <button
                  className="text-olive-600 font-semibold hover:underline"
                  onClick={() => {
                    onClose();
                    // Trigger sign-in mode externally if needed
                  }}
                >
                  Sign in
                </button>
              </p>
            ) : (
              <p className="mt-4 text-[12px] text-brown-400">
                Don&apos;t have an account?{" "}
                <a
                  href="https://app.foundinglegals.com/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive-600 font-semibold hover:underline"
                >
                  Start free
                </a>
              </p>
            )}

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-1.5 text-[11px] text-brown-400">
              <Shield className="w-3 h-3" />
              <span>Secured by Founding Legals · SOC 2 compliant</span>
            </div>
          </div>
        ) : (
          /* Embedded flow */
          <div className="relative">
            <div className="flex items-center justify-between px-6 py-3 bg-cream/50">
              <span className="text-[12px] text-brown-500">
                {mode === "sign-up" ? "Creating your account..." : "Signing you in..."}
              </span>
              <a
                href={iframeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-olive-600 font-medium hover:underline"
              >
                Open in new tab ↗
              </a>
            </div>
            <div className="relative bg-cream/30" style={{ height: "460px" }}>
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-olive-600 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[13px] text-brown-600">Loading...</span>
                  </div>
                </div>
              )}
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0"
                title="Founding Legals Account"
                onLoad={() => setLoading(false)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
