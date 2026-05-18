import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Founding Legals",
  description: "Read the terms and conditions governing your use of Founding Legals platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-[70px] sm:pt-[82px]">
      <Header />

      {/* Hero */}
      <section className="bg-[#5A6E3B] px-6 py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white/90 text-[13px] font-medium mb-6">
            <Scale className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-[40px] sm:text-[56px] font-serif font-medium text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/80 text-[16px] leading-relaxed">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-10 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.8]">
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the Founding Legals platform (&ldquo;Platform&rdquo;), operated by <strong>Arvya Tech Pvt. Ltd.</strong>, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our Platform.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">2. Services</h2>
          <p>Founding Legals provides legal and compliance services for Indian startups, including but not limited to company incorporation, GST registration, DPIIT certification, agreement drafting, fund raising support, and cap table management. These services are facilitated through a technology platform and in partnership with qualified Chartered Accountants (CAs) and legal professionals.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">3. User Obligations</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>You must be at least 18 years old to use our Platform.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You must provide accurate and complete information when using our services.</li>
            <li>You agree not to misuse the Platform for any unlawful purposes.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">4. Intellectual Property</h2>
          <p>All content, trademarks, and technology on the Platform are the property of Arvya Tech Pvt. Ltd. or its licensors. You may not reproduce, distribute, or create derivative works without express written permission.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">5. Limitation of Liability</h2>
          <p>Founding Legals provides technology tools to assist with legal processes. We do not provide legal advice. Always consult a qualified lawyer for legal decisions. Arvya Tech Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from use of the Platform.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">6. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">7. Contact Us</h2>
          <p>For any queries regarding these Terms, please contact us at <a href="mailto:legal@foundinglegals.com" className="text-[#5A6E3B] font-medium hover:underline">legal@foundinglegals.com</a> or write to us at Arvya Tech Pvt. Ltd., Bengaluru, Karnataka, India.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
