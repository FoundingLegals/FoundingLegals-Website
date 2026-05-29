import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Founding Legals",
  description:
    "How Founding Legals (Arvya Tech Pvt. Ltd.) uses cookies and similar storage technologies on its website, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-[70px] sm:pt-[82px]">
      <Header />

      {/* Hero */}
      <section className="bg-[#5A6E3B] px-6 py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white/90 text-[13px] font-medium mb-6">
            <Cookie className="w-3.5 h-3.5" />
            Privacy
          </div>
          <h1 className="text-[40px] sm:text-[56px] font-serif font-medium text-white leading-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-white/80 text-[16px] leading-relaxed">
            Effective date: <strong className="text-white/90">29 May 2026</strong>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-10 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.8]">
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            1. About this Policy
          </h2>
          <p>
            This Cookie Policy explains how{" "}
            <strong>Arvya Tech Pvt. Ltd.</strong> (CIN:{" "}
            <strong>U62011AP2025PTC121416</strong>), operating the{" "}
            <strong>Founding Legals</strong> website at{" "}
            <a
              href="https://www.foundinglegals.com"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              www.foundinglegals.com
            </a>{" "}
            (&ldquo;Website&rdquo;), uses cookies and similar local-storage
            technologies. It supplements our{" "}
            <a
              href="/privacy-policy"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            2. What are Cookies and Similar Technologies?
          </h2>
          <p>
            &ldquo;Cookies&rdquo; are small text files placed on your device by
            a website. The Website also uses{" "}
            <strong>browser local storage</strong> and{" "}
            <strong>session storage</strong>, which serve a similar purpose but
            store data within your browser rather than as HTTP cookies. In
            this Policy, references to &ldquo;cookies&rdquo; include such
            similar storage technologies.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            3. Categories We Use
          </h2>
          <p>The Website currently uses the following:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#f0ede4]">
                  <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc]">
                    Name / Type
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc]">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc]">
                    Purpose
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc]">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0d8cc]">
                {[
                  [
                    "fl_cookie_consent (local storage)",
                    "Strictly necessary",
                    "Records your cookie-banner choice so we do not re-prompt you on every visit.",
                    "Persistent until cleared",
                  ],
                  [
                    "hasSeenFoundingLegalsSplash (session storage)",
                    "Strictly necessary",
                    "Records that you have seen the introductory splash screen in the current session.",
                    "Session only",
                  ],
                  [
                    "YouTube (youtube-nocookie.com)",
                    "Third-party (functional)",
                    "Embedded demo videos use YouTube's privacy-enhanced mode. No third-party cookies are set unless you actively play a video.",
                    "As determined by YouTube",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f6]"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 border border-[#e0d8cc] align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[14px] text-[#65605b]">
            The Website does <strong>not</strong> currently load Google
            Analytics, Razorpay, Intercom, or other marketing/analytics
            trackers. If we introduce such tools in the future, this Policy
            will be updated and (where required) your consent will be sought
            before any non-essential cookies are set.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            4. Managing Your Cookie Preferences
          </h2>
          <p>
            You can manage your preferences using the cookie-consent banner
            shown on your first visit. You can also re-open the banner at any
            time using the &ldquo;Cookie preferences&rdquo; link in the
            footer.
          </p>
          <p className="mt-3">
            In addition, most browsers allow you to block or delete cookies via
            their settings menu. Note that blocking strictly necessary cookies
            may affect the basic functioning of the Website.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            5. Your Consent
          </h2>
          <p>
            Strictly necessary cookies are set as soon as you access the
            Website because they are essential to its operation; consent is
            not required for these under applicable law. Non-essential cookies
            (such as analytics or marketing cookies) will only be set after
            you have provided consent through the cookie banner, and you may
            withdraw that consent at any time.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            6. Contact
          </h2>
          <p>
            Questions about this Cookie Policy? Write to us at{" "}
            <a
              href="mailto:info@foundinglegals.com"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              info@foundinglegals.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
