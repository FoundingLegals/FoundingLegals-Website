import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Founding Legals",
  description: "Learn how Founding Legals uses cookies and similar technologies on our platform.",
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
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-10 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.8]">
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">1. What are Cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">2. How We Use Cookies</h2>
          <p>Founding Legals (operated by Arvya Tech Pvt. Ltd.) uses cookies for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
            <li><strong>Essential Cookies:</strong> Required for the Platform to function. These cannot be disabled.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Platform (e.g., Google Analytics).</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a better experience.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">3. Third-Party Cookies</h2>
          <p>We may allow third-party service providers (such as Google, Razorpay, and Intercom) to place cookies on your device when you use our Platform. These providers have their own privacy policies governing cookie usage.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">4. Managing Cookies</h2>
          <p>You can control or delete cookies at any time through your browser settings. However, disabling cookies may affect the functionality of our Platform. You may also manage your consent preferences through our cookie banner shown at the bottom of the page.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">5. Your Consent</h2>
          <p>By clicking &ldquo;Accept All&rdquo; on our cookie banner, you consent to the use of all cookies described in this policy. You may withdraw your consent at any time by clearing your browser cookies and revisiting our site.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">6. Contact Us</h2>
          <p>For questions about our Cookie Policy, contact us at <a href="mailto:privacy@foundinglegals.com" className="text-[#5A6E3B] font-medium hover:underline">privacy@foundinglegals.com</a>.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
