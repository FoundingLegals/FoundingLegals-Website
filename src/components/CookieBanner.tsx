"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Cookie, Settings2, Check } from "lucide-react";

type Consent = {
  necessary: true; // always true; cannot be disabled
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  ts: number; // unix ms
  v: 1;
};

const STORAGE_KEY = "fl_cookie_consent";
const OPEN_PREFS_EVENT = "fl:open-cookie-preferences";

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    if (raw === "accepted" || raw === "declined") {
      // legacy value from previous banner — treat as not yet recorded so user re-consents
      return null;
    }
    const parsed = JSON.parse(raw);
    if (parsed && parsed.v === 1) return parsed as Consent;
    return null;
  } catch {
    return null;
  }
}

function writeConsent(c: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    /* ignore */
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setFunctional(consent.functional);
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
  }, []);

  useEffect(() => {
    const open = () => {
      const c = readConsent();
      if (c) {
        setFunctional(c.functional);
        setAnalytics(c.analytics);
        setMarketing(c.marketing);
      }
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_PREFS_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, open);
  }, []);

  const persist = useCallback(
    (c: Omit<Consent, "ts" | "v" | "necessary">) => {
      writeConsent({ necessary: true, ts: Date.now(), v: 1, ...c });
      setVisible(false);
      setShowPrefs(false);
    },
    []
  );

  const acceptAll = () => persist({ functional: true, analytics: true, marketing: true });
  const rejectNonEssential = () =>
    persist({ functional: false, analytics: false, marketing: false });
  const saveCustom = () => persist({ functional, analytics, marketing });

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-3 pb-3 sm:px-6 sm:pb-5"
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
    >
      <div className="max-w-4xl mx-auto bg-white border border-brown-200 rounded-2xl shadow-[0_8px_32px_rgba(43,39,35,0.15)] overflow-hidden">
        <div className="relative p-4 sm:p-5">
          <button
            onClick={rejectNonEssential}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-brown-400 hover:bg-cream hover:text-brown-700 transition-colors"
            aria-label="Close and reject non-essential cookies"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-3 pr-8">
            <div className="shrink-0 w-9 h-9 rounded-xl bg-olive-600/10 flex items-center justify-center">
              <Cookie className="w-[18px] h-[18px] text-olive-600" />
            </div>
            <p className="font-semibold text-[14px] text-brown-900">
              {showPrefs ? "Cookie preferences" : "We use cookies"}
            </p>
          </div>

          {!showPrefs ? (
            <>
              <p className="text-[13px] text-brown-600 leading-relaxed mb-4">
                We use strictly necessary cookies to operate this site. With
                your consent, we may also use functional, analytics and
                marketing cookies to improve your experience. Read our{" "}
                <a
                  href="/cookie-policy"
                  className="text-olive-600 font-medium hover:underline"
                >
                  Cookie Policy
                </a>
                ,{" "}
                <a
                  href="/privacy-policy"
                  className="text-olive-600 font-medium hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  className="text-olive-600 font-medium hover:underline"
                >
                  Terms
                </a>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={acceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-semibold text-white bg-olive-600 rounded-full hover:bg-olive-700 active:scale-[0.98] transition-all shadow-sm text-center"
                >
                  Accept all
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-medium text-brown-700 border border-brown-200 rounded-full hover:bg-cream active:scale-[0.98] transition-all text-center"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={() => setShowPrefs(true)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-[13px] font-medium text-brown-700 hover:text-olive-700 hover:bg-cream rounded-full transition-all"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  Customise
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-[13px] text-brown-600 leading-relaxed mb-4">
                Choose which categories you allow. Strictly necessary cookies
                cannot be disabled because the site cannot function without
                them.
              </p>

              <div className="space-y-2 mb-4">
                <PrefRow
                  title="Strictly necessary"
                  desc="Required for the site to function (e.g. recording your cookie choice)."
                  checked
                  disabled
                />
                <PrefRow
                  title="Functional"
                  desc="Remember UX preferences such as the splash screen state."
                  checked={functional}
                  onChange={setFunctional}
                />
                <PrefRow
                  title="Analytics"
                  desc="Help us understand how the site is used. Not currently deployed; reserved for future use."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <PrefRow
                  title="Marketing"
                  desc="Used to measure campaigns or show relevant content. Not currently deployed; reserved for future use."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={saveCustom}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-semibold text-white bg-olive-600 rounded-full hover:bg-olive-700 active:scale-[0.98] transition-all shadow-sm text-center"
                >
                  Save preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-medium text-brown-700 border border-brown-200 rounded-full hover:bg-cream active:scale-[0.98] transition-all text-center"
                >
                  Accept all
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-[13px] font-medium text-brown-700 hover:text-olive-700 hover:bg-cream rounded-full transition-all text-center"
                >
                  Reject non-essential
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 p-3 rounded-xl border border-brown-200 bg-cream/50">
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-brown-900">{title}</p>
        <p className="text-[12px] text-brown-500 leading-snug mt-0.5">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={[
          "shrink-0 relative w-10 h-6 rounded-full transition-colors",
          checked ? "bg-olive-600" : "bg-brown-200",
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform flex items-center justify-center",
            checked ? "translate-x-4" : "translate-x-0",
          ].join(" ")}
        >
          {checked && <Check className="w-3 h-3 text-olive-600" />}
        </span>
      </button>
    </div>
  );
}
