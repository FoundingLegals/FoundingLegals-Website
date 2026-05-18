import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Founding Legals",
  description:
    "Read Founding Legals' Privacy Policy — how we collect, use, protect and share your personal data in compliance with India's IT Act 2000 and SPDI Rules 2011.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to <strong>Founding Legals</strong>, a product of{" "}
          <strong>Arvya Tech Pvt. Ltd.</strong> (&ldquo;Company&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company
          incorporated under the Companies Act, 2013 and headquartered in
          Bengaluru, Karnataka, India.
        </p>
        <p className="mt-4">
          This Privacy Policy (&ldquo;Policy&rdquo;) describes how we collect,
          use, store, disclose, and protect information about you when you
          access or use our website at{" "}
          <a
            href="https://www.foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            www.foundinglegals.com
          </a>{" "}
          and our web application at{" "}
          <a
            href="https://app.foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            app.foundinglegals.com
          </a>{" "}
          (collectively, the &ldquo;Platform&rdquo;).
        </p>
        <p className="mt-4">
          This Policy is published in compliance with the{" "}
          <strong>
            Information Technology Act, 2000 (&ldquo;IT Act&rdquo;)
          </strong>{" "}
          and the{" "}
          <strong>
            Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011
            (&ldquo;SPDI Rules&rdquo;)
          </strong>
          . By using the Platform, you consent to the practices described
          herein. If you do not agree, please discontinue use of the Platform.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <p>We collect the following categories of information:</p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          2.1 Information You Provide Directly
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Account Information:</strong> Name, email address, mobile
            number, password.
          </li>
          <li>
            <strong>Business Information:</strong> Company name, PAN, CIN, GST
            number, registered address, directors&apos; details.
          </li>
          <li>
            <strong>Identity Documents:</strong> Aadhaar, PAN card, passport, or
            other government-issued IDs submitted for KYC or compliance
            services.
          </li>
          <li>
            <strong>Financial Information:</strong> Bank account details,
            invoices, payment records required for compliance or fund-raising
            services.
          </li>
          <li>
            <strong>Communications:</strong> Messages, queries, or feedback you
            send us via email, contact forms, or support channels.
          </li>
        </ul>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          2.2 Information Collected Automatically
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Usage Data:</strong> Pages visited, features used, time
            spent, clicks, and navigation patterns.
          </li>
          <li>
            <strong>Device & Technical Data:</strong> IP address, browser type
            and version, operating system, device identifiers.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> Session cookies, analytics
            cookies, and preference cookies as described in our{" "}
            <a
              href="/cookie-policy"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Cookie Policy
            </a>
            .
          </li>
          <li>
            <strong>Log Data:</strong> Server logs including access timestamps,
            error logs, and referral URLs.
          </li>
        </ul>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          2.3 Information from Third Parties
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Authentication data from Google OAuth when you use &ldquo;Continue
            with Google&rdquo;.
          </li>
          <li>
            Payment status and transaction identifiers from payment processors
            (e.g., Razorpay).
          </li>
          <li>
            Business registry information from MCA, GSTN, or other government
            portals used to verify your entity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="bg-[#f0ede4]">
                <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc] rounded-tl-lg">
                  Purpose
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc]">
                  Lawful Basis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0d8cc]">
              {[
                [
                  "Create and manage your account",
                  "Performance of contract",
                ],
                [
                  "Deliver incorporation, compliance, and legal services",
                  "Performance of contract",
                ],
                [
                  "Process payments and issue invoices",
                  "Performance of contract / Legal obligation",
                ],
                [
                  "Send service updates, reminders and deadline alerts",
                  "Legitimate interest / Consent",
                ],
                [
                  "Verify identity for KYC under applicable law",
                  "Legal obligation",
                ],
                [
                  "Improve Platform features and user experience",
                  "Legitimate interest",
                ],
                [
                  "Detect fraud, abuse, or security threats",
                  "Legitimate interest / Legal obligation",
                ],
                [
                  "Respond to customer support queries",
                  "Performance of contract",
                ],
                [
                  "Send marketing communications (only with consent)",
                  "Consent",
                ],
                [
                  "Comply with court orders, regulations, or government requests",
                  "Legal obligation",
                ],
              ].map(([purpose, basis], i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f6]"}
                >
                  <td className="px-4 py-3 border border-[#e0d8cc]">
                    {purpose}
                  </td>
                  <td className="px-4 py-3 border border-[#e0d8cc] text-[#5A6E3B] font-medium">
                    {basis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "sensitive-data",
    title: "4. Sensitive Personal Data or Information (SPDI)",
    content: (
      <>
        <p>
          Under the SPDI Rules, 2011, certain categories of data are treated as
          &ldquo;Sensitive Personal Data or Information&rdquo;. We may collect
          the following SPDI in the course of providing our services:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>Financial information (bank account, payment card details)</li>
          <li>
            Identity documents (Aadhaar, PAN, passport) — collected only where
            legally required for compliance filings
          </li>
          <li>Passwords (stored in hashed form; never in plain text)</li>
        </ul>
        <p className="mt-4">
          We collect SPDI only with your explicit consent, only to the extent
          necessary for the stated purpose, and we retain it only as long as
          legally required or as needed to provide the service.
        </p>
        <p className="mt-4">
          You have the right to{" "}
          <strong>
            withdraw consent, review, correct, or delete your SPDI
          </strong>{" "}
          at any time by contacting us at{" "}
          <a
            href="mailto:privacy@foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            privacy@foundinglegals.com
          </a>
          . Please note that withdrawal of consent may affect our ability to
          deliver certain services.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. How We Share Your Information",
    content: (
      <>
        <p>
          We do <strong>not sell</strong> your personal data. We may share it in
          the following limited circumstances:
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          5.1 Service Providers & Partners
        </h3>
        <p>
          We engage trusted third-party service providers to assist in operating
          our Platform. These include:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>
            <strong>Cloud hosting:</strong> Amazon Web Services (AWS) / Google
            Cloud Platform
          </li>
          <li>
            <strong>Payment processing:</strong> Razorpay Financial Solutions
            Pvt. Ltd.
          </li>
          <li>
            <strong>Authentication:</strong> Google Identity Services
          </li>
          <li>
            <strong>Analytics:</strong> Google Analytics
          </li>
          <li>
            <strong>Customer support:</strong> Intercom, Inc.
          </li>
          <li>
            <strong>Communication:</strong> Twilio / SendGrid for email and SMS
          </li>
        </ul>
        <p className="mt-3">
          All service providers are contractually bound to process data only as
          instructed and to maintain appropriate security measures.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          5.2 Professional Partners
        </h3>
        <p>
          To deliver legal and compliance services, we work with empanelled
          Chartered Accountants (CAs), Company Secretaries (CS), and legal
          professionals. We share only the minimum data necessary for them to
          perform the requested service, under strict confidentiality
          obligations.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          5.3 Government and Regulatory Authorities
        </h3>
        <p>
          We may disclose your information to government bodies such as the MCA,
          GSTN, DPIIT, Income Tax Department, or any court of competent
          jurisdiction when required by law or pursuant to a valid legal order.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          5.4 Business Transfers
        </h3>
        <p>
          In the event of a merger, acquisition, restructuring, or sale of
          assets, your information may be transferred to the successor entity,
          who will be bound by this Policy.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          5.5 With Your Consent
        </h3>
        <p>
          We may share your information with other parties if you explicitly
          consent to such sharing.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <>
        <p>
          We retain your personal data only for as long as necessary to fulfil
          the purposes described in this Policy, and in any case for the minimum
          period required by applicable Indian law:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            <strong>Account data:</strong> For the duration of your account, and
            up to 3 years after closure (for dispute resolution).
          </li>
          <li>
            <strong>Financial records & invoices:</strong> 8 years as required
            by the Income Tax Act, 1961 and GST law.
          </li>
          <li>
            <strong>Company incorporation documents:</strong> 8 years or as
            mandated by the Companies Act, 2013.
          </li>
          <li>
            <strong>KYC documents:</strong> As required by applicable KYC/AML
            regulations.
          </li>
          <li>
            <strong>Log data:</strong> 180 days as per IT (Intermediary
            Guidelines) Rules.
          </li>
          <li>
            <strong>Marketing consent records:</strong> Until consent is
            withdrawn, plus 1 year.
          </li>
        </ul>
        <p className="mt-4">
          After the applicable retention period, data is securely deleted or
          anonymised.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Data Security",
    content: (
      <>
        <p>
          We implement industry-standard security measures in accordance with
          Rule 8 of the SPDI Rules, 2011, including:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            <strong>Encryption in transit:</strong> All data transmitted over
            the internet is protected using TLS 1.2+ (HTTPS).
          </li>
          <li>
            <strong>Encryption at rest:</strong> Sensitive data is encrypted
            using AES-256 at rest on our servers.
          </li>
          <li>
            <strong>Access controls:</strong> Role-based access control (RBAC)
            ensures only authorised personnel can access your data.
          </li>
          <li>
            <strong>Password hashing:</strong> Passwords are stored using
            bcrypt; we never store plain-text passwords.
          </li>
          <li>
            <strong>Regular audits:</strong> We conduct periodic security audits
            and vulnerability assessments.
          </li>
          <li>
            <strong>Incident response:</strong> We maintain a documented
            incident response plan and will notify affected users in the event
            of a data breach as required by law.
          </li>
        </ul>
        <p className="mt-4">
          While we take all reasonable precautions, no system is completely
          secure. You are responsible for keeping your account credentials
          confidential.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: (
      <>
        <p>
          Under the IT Act, SPDI Rules, and general principles of Indian privacy
          law, you have the following rights regarding your personal data:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              right: "Right to Access",
              desc: "Request a copy of the personal data we hold about you.",
            },
            {
              right: "Right to Rectification",
              desc: "Request correction of inaccurate or incomplete data.",
            },
            {
              right: "Right to Erasure",
              desc: "Request deletion of your data, subject to legal retention obligations.",
            },
            {
              right: "Right to Withdraw Consent",
              desc: "Withdraw consent for SPDI or marketing at any time.",
            },
            {
              right: "Right to Grievance Redressal",
              desc: "Lodge a complaint with our Grievance Officer (details below).",
            },
            {
              right: "Right to Data Portability",
              desc: "Request your data in a structured, commonly used format.",
            },
          ].map(({ right, desc }) => (
            <div
              key={right}
              className="bg-[#f5f2ec] rounded-xl p-4 border border-[#e5ddd4]"
            >
              <p className="font-semibold text-[#2b2723] text-[14px] mb-1">
                {right}
              </p>
              <p className="text-[13px] text-[#65605b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-5">
          To exercise any of these rights, please contact our Grievance Officer
          at{" "}
          <a
            href="mailto:privacy@foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            privacy@foundinglegals.com
          </a>
          . We will respond within <strong>30 days</strong> of receiving a
          verifiable request.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: (
      <p>
        We use cookies and similar tracking technologies on our Platform. For
        detailed information on what cookies we use, why we use them, and how
        you can control them, please read our{" "}
        <a
          href="/cookie-policy"
          className="text-[#5A6E3B] font-medium hover:underline"
        >
          Cookie Policy
        </a>
        .
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "10. Third-Party Links",
    content: (
      <p>
        Our Platform may contain links to third-party websites or services (for
        example, MCA portal, GSTN portal, or investor platforms). We are not
        responsible for the privacy practices of those websites. We encourage
        you to read their privacy policies before submitting any personal data to
        them.
      </p>
    ),
  },
  {
    id: "children",
    title: "11. Children's Privacy",
    content: (
      <p>
        Our Platform is not directed at individuals under 18 years of age. We do
        not knowingly collect personal data from minors. If you believe we have
        inadvertently collected data from a minor, please contact us immediately
        at{" "}
        <a
          href="mailto:privacy@foundinglegals.com"
          className="text-[#5A6E3B] font-medium hover:underline"
        >
          privacy@foundinglegals.com
        </a>{" "}
        and we will delete such data promptly.
      </p>
    ),
  },
  {
    id: "cross-border",
    title: "12. Cross-Border Data Transfers",
    content: (
      <p>
        Some of our third-party service providers (such as cloud providers and
        analytics tools) may process data outside India. When data is transferred
        internationally, we ensure adequate safeguards are in place through
        contractual clauses or the provider&apos;s adherence to equivalent data
        protection standards. By using the Platform, you consent to such
        transfers to the extent they are necessary for service delivery.
      </p>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technology, or applicable law. When we make material
        changes, we will notify you by email (using the address associated with
        your account) and/or by displaying a prominent notice on the Platform at
        least <strong>7 days</strong> before the changes take effect. Your
        continued use of the Platform after the effective date of the updated
        Policy constitutes your acceptance of the changes.
      </p>
    ),
  },
  {
    id: "grievance",
    title: "14. Grievance Officer",
    content: (
      <>
        <p>
          In accordance with the IT Act, 2000 and SPDI Rules, 2011, the details
          of our Grievance Officer are provided below. You may raise any privacy
          or data-related complaints with our Grievance Officer:
        </p>
        <div className="mt-5 bg-[#f5f2ec] border border-[#e5ddd4] rounded-2xl p-6 sm:p-8">
          <p className="font-bold text-[#2b2723] text-[16px] mb-3">
            Grievance Officer — Arvya Tech Pvt. Ltd.
          </p>
          <div className="space-y-2 text-[14px] text-[#4b4843]">
            <p>
              <span className="font-semibold text-[#2b2723]">Name:</span>{" "}
              Designated Grievance Officer, Founding Legals
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">Email:</span>{" "}
              <a
                href="mailto:privacy@foundinglegals.com"
                className="text-[#5A6E3B] font-medium hover:underline"
              >
                privacy@foundinglegals.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">Address:</span>{" "}
              Arvya Tech Pvt. Ltd., Bengaluru, Karnataka, India
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">
                Response Time:
              </span>{" "}
              Within 30 days of receipt of complaint
            </p>
          </div>
        </div>
        <p className="mt-4 text-[14px]">
          If you are not satisfied with the resolution provided by our Grievance
          Officer, you may approach the appropriate regulatory authority or court
          of competent jurisdiction in India.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-[70px] sm:pt-[82px]">
      <Header />

      {/* ── Hero Banner ── */}
      <section className="bg-[#5A6E3B] px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full text-white/90 text-[13px] font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            Privacy &amp; Data Protection
          </div>
          <h1 className="text-[40px] sm:text-[60px] font-serif font-medium text-white leading-[1.1] mb-5 tracking-[-0.01em]">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains what personal data
            we collect, how we use it, and the rights you have over it — in plain
            language, without legal jargon.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 text-white/60 text-[13px]">
            <span>
              Effective date:{" "}
              <strong className="text-white/80">18 May 2026</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>
              Governed by:{" "}
              <strong className="text-white/80">IT Act 2000 &amp; SPDI Rules 2011</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── Page Layout: TOC + Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* Sidebar TOC – sticky on desktop */}
        <aside className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-[100px] bg-white border border-[#e5ddd4] rounded-2xl p-6 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#9e9890] mb-4">
              Contents
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-[13px] text-[#65605b] hover:text-[#5A6E3B] hover:bg-[#f0ede4] px-3 py-1.5 rounded-lg transition-colors leading-snug"
                >
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-5 border-t border-[#e5ddd4]">
              <p className="text-[12px] text-[#9e9890] leading-relaxed">
                Questions about your privacy?{" "}
                <a
                  href="mailto:privacy@foundinglegals.com"
                  className="text-[#5A6E3B] font-medium hover:underline"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 min-w-0 space-y-14 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.85]">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-[22px] sm:text-[26px] font-serif font-semibold text-[#2b2723] mb-4 pb-3 border-b border-[#e5ddd4]">
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}

          {/* Final note */}
          <div className="bg-[#f0ede4] border border-[#e5ddd4] rounded-2xl p-6 sm:p-8 text-[14px] text-[#65605b] leading-relaxed">
            <p>
              <strong className="text-[#2b2723]">Disclaimer:</strong> The
              information on the Founding Legals Platform constitutes technology
              assistance for legal and compliance workflows and does not
              constitute legal advice. For complex legal matters, please consult
              a qualified legal professional.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
