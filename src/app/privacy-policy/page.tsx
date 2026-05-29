import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Founding Legals",
  description:
    "Privacy Policy of Founding Legals (Arvya Tech Pvt. Ltd.) — how we collect, use, store and protect your personal data under the Digital Personal Data Protection Act, 2023 and other applicable Indian law.",
};

const EFFECTIVE_DATE = "29 May 2026";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to <strong>Founding Legals</strong>, a product of{" "}
          <strong>Arvya Tech Pvt. Ltd.</strong> (CIN:{" "}
          <strong>U62011AP2025PTC121416</strong>) (&ldquo;Company&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company
          incorporated under the Companies Act, 2013, having its registered
          office at{" "}
          <strong>
            5th Floor, The Herbt&apos;s Square Building, Autonagar, APIIC IT
            Park, Mangalagiri, Amaravati, Andhra Pradesh 522503, India
          </strong>
          .
        </p>
        <p className="mt-4">
          This Privacy Policy (&ldquo;Policy&rdquo;) describes how we collect,
          use, store, disclose and protect personal data about you when you
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
          This Policy is issued in compliance with the{" "}
          <strong>Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;)</strong>
          , read with the rules and notifications framed thereunder, the{" "}
          <strong>Information Technology Act, 2000</strong>, the{" "}
          <strong>
            Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011 (to the
            extent in force during the transition)
          </strong>
          , and the{" "}
          <strong>
            Information Technology (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021
          </strong>
          . By accessing or using the Platform you acknowledge that you have
          read and understood this Policy. Where the law requires your consent
          for specific processing, that consent will be sought separately at the
          appropriate point in your user journey and is not implied by mere use
          of the Platform.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "2. Who this Policy Applies To",
    content: (
      <>
        <p>
          This Policy applies to <strong>data principals</strong> located in
          India whose personal data we process in connection with the Platform.
          The Platform is intended for users in India; we do not actively offer
          the Platform to data subjects outside India.
        </p>
        <p className="mt-4">
          For the purposes of the DPDP Act, the Company is a{" "}
          <strong>Data Fiduciary</strong> in respect of personal data we
          determine the purpose and means of processing for, and a{" "}
          <strong>Data Processor</strong> where we process personal data on
          instructions of another fiduciary (for example, where you are a
          founder uploading personal data of co-founders, employees or
          shareholders).
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "3. Personal Data We Collect",
    content: (
      <>
        <p>We collect the following categories of personal data:</p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          3.1 Information you provide directly
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Account information:</strong> name, email address, mobile
            number, password (stored only in salted, hashed form).
          </li>
          <li>
            <strong>Business information:</strong> company name, PAN, CIN, GST
            number, registered address, and directors&apos; / officers&apos;
            details required to operate compliance workflows.
          </li>
          <li>
            <strong>Identity documents (KYC):</strong> PAN card, passport, and
            other government-issued IDs submitted for KYC or statutory filings.
            <span className="block mt-1 text-[14px] text-[#65605b]">
              <strong>Aadhaar:</strong> Where Aadhaar is required for a
              statutory filing (such as SPICe+ incorporation), we collect the
              Aadhaar number only with your explicit consent, use it only for
              the specific filing for which it is collected, and do not use it
              for authentication or any unrelated purpose. We are progressively
              migrating Aadhaar handling to DigiLocker / offline e-KYC XML so
              that the raw Aadhaar number is no longer stored.
            </span>
          </li>
          <li>
            <strong>Financial information:</strong> bank account details
            (where you provide them for fund-raising or compliance services),
            invoices and payment records. We do not collect or store card
            numbers, CVVs or full banking credentials; these are handled by our
            payment processor (Razorpay) directly.
          </li>
          <li>
            <strong>Communications:</strong> messages, queries or feedback you
            send us by email, contact forms or in-app support.
          </li>
          <li>
            <strong>Documents you upload</strong> to the document vault, data
            room or other Platform features.
          </li>
        </ul>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          3.2 Information collected automatically
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Usage data:</strong> pages visited, features used, time
            spent, clicks, and navigation patterns.
          </li>
          <li>
            <strong>Device and technical data:</strong> IP address, browser
            type and version, operating system, device identifiers.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — see our{" "}
            <a
              href="/cookie-policy"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Cookie Policy
            </a>
            .
          </li>
          <li>
            <strong>Log data:</strong> server logs, access timestamps, error
            logs, referral URLs.
          </li>
        </ul>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          3.3 Information from third parties
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
            Public business-registry information from MCA, GSTN or other
            government portals used to verify your entity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "4. Why We Process Your Personal Data &amp; Our Lawful Basis",
    content: (
      <>
        <p>
          Under the DPDP Act, the Company processes personal data either
          (i) on the basis of your <strong>consent</strong>, or (ii) for{" "}
          <strong>certain legitimate uses</strong> recognised under Section 7
          of the DPDP Act (such as compliance with law, fulfilling a function
          under law, or responding to a medical emergency). We do not rely on a
          generalised &ldquo;legitimate interest&rdquo; basis.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="bg-[#f0ede4]">
                <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc] rounded-tl-lg">
                  Purpose
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#2b2723] border border-[#e0d8cc]">
                  Lawful Basis (DPDP Act)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0d8cc]">
              {[
                ["Create and manage your account", "Consent"],
                [
                  "Deliver the incorporation, compliance and document services you specifically request",
                  "Consent",
                ],
                [
                  "Process payments and issue tax invoices",
                  "Consent + compliance with law (GST, Income Tax)",
                ],
                [
                  "Send service-related transactional messages (deadline alerts, reminders, security notices)",
                  "Consent (provided at signup as necessary for service delivery)",
                ],
                [
                  "Verify identity for KYC / statutory filings",
                  "Compliance with law (legitimate use under s.7, DPDP Act)",
                ],
                [
                  "Detect, prevent and investigate fraud, abuse or security incidents",
                  "Legitimate use under s.7, DPDP Act",
                ],
                [
                  "Respond to your support queries",
                  "Consent",
                ],
                [
                  "Improve and secure the Platform (in an aggregated / de-identified form wherever feasible)",
                  "Consent",
                ],
                [
                  "Send marketing communications about our products and services",
                  "Separate, optional consent (which you may withdraw at any time)",
                ],
                [
                  "Comply with court orders, regulatory or government directions",
                  "Compliance with law",
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
        <p className="mt-4">
          You may withdraw any consent at any time, with effect for the future,
          by writing to{" "}
          <a
            href="mailto:info@foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            info@foundinglegals.com
          </a>
          . Withdrawal of consent will not affect the lawfulness of processing
          carried out before the withdrawal and may affect our ability to
          deliver certain services.
        </p>
      </>
    ),
  },
  {
    id: "sensitive-data",
    title: "5. Sensitive &amp; Identity Information",
    content: (
      <>
        <p>
          Where we collect identity documents, financial information,
          Aadhaar-linked information or other data treated as sensitive under
          applicable law:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            We collect such information only with your explicit consent, only
            to the extent necessary for the specific filing or service, and we
            retain it only for as long as legally required.
          </li>
          <li>
            Passwords are stored in salted, hashed form and are never visible to
            our personnel.
          </li>
          <li>
            Aadhaar numbers, where collected, are not used for authentication,
            are access-restricted, and are scheduled to be migrated to
            DigiLocker / offline e-KYC artefacts so that the raw Aadhaar number
            is no longer retained on our systems.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. How We Share Your Personal Data",
    content: (
      <>
        <p>
          We do <strong>not sell</strong> your personal data. We share it only
          in the following limited circumstances:
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          6.1 Service providers (Data Processors)
        </h3>
        <p>
          We engage third-party service providers to operate the Platform.
          These include:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
          <li>
            <strong>Cloud hosting:</strong> DigitalOcean (production
            environment, India region); and, where applicable, Amazon Web
            Services / Google Cloud Platform for ancillary services.
          </li>
          <li>
            <strong>Payment processing:</strong> Razorpay Software Pvt. Ltd.
          </li>
          <li>
            <strong>Authentication:</strong> Google Identity Services.
          </li>
          <li>
            <strong>Analytics:</strong> Google Analytics.
          </li>
          <li>
            <strong>Customer support:</strong> Intercom, Inc.
          </li>
          <li>
            <strong>Transactional email:</strong> SendGrid.
          </li>
          <li>
            <strong>E-signature:</strong> Zoho Sign.
          </li>
        </ul>
        <p className="mt-3">
          Each such provider is bound to process personal data only on our
          instructions and to maintain reasonable security safeguards.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          6.2 Independent professionals
        </h3>
        <p>
          To deliver requested professional services, we facilitate the sharing
          of the minimum necessary personal data with empanelled, independent
          Chartered Accountants, Company Secretaries and advocates. The
          professional-client relationship in such cases is between you and
          that independent professional; the Company does not direct
          professional advice or share in advocates&apos; legal fees.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          6.3 Government, regulatory and judicial authorities
        </h3>
        <p>
          We may disclose personal data to authorities such as the MCA, GSTN,
          DPIIT, Income Tax Department, the Data Protection Board of India, or
          any court or competent authority, where required by law or pursuant
          to a valid legal order.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          6.4 Business transfers
        </h3>
        <p>
          In the event of a merger, acquisition, restructuring or sale of
          assets, personal data may be transferred to the successor entity,
          which will be bound by this Policy or by a successor policy
          providing equivalent protections.
        </p>

        <h3 className="text-[17px] font-semibold text-[#2b2723] mt-5 mb-2">
          6.5 With your consent
        </h3>
        <p>
          We may share your personal data with other parties where you have
          provided explicit consent for such sharing.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: (
      <>
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes for which it was collected, and in any case for the minimum
          period required by applicable Indian law:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            <strong>Account data:</strong> for the duration of your account
            and up to three (3) years after account closure (for dispute
            resolution).
          </li>
          <li>
            <strong>Financial records and tax invoices:</strong> at least eight
            (8) years, as required by the Income Tax Act, 1961 and GST law.
          </li>
          <li>
            <strong>Incorporation and statutory filing records:</strong> at
            least eight (8) years or as required by the Companies Act, 2013.
          </li>
          <li>
            <strong>KYC documents:</strong> for the period required by
            applicable KYC / AML regulations.
          </li>
          <li>
            <strong>Log data:</strong> at least one hundred and eighty (180)
            days, as required by Rule 3(1)(h) of the IT (Intermediary
            Guidelines) Rules, 2021. This is a regulatory minimum; we may
            retain logs for longer where required for security or legal
            reasons.
          </li>
          <li>
            <strong>Marketing consent records:</strong> until consent is
            withdrawn, plus one (1) year for evidentiary purposes.
          </li>
        </ul>
        <p className="mt-4">
          On expiry of the applicable retention period, personal data is
          securely deleted or anonymised.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "8. Data Security",
    content: (
      <>
        <p>
          We take reasonable security safeguards proportionate to the nature
          and sensitivity of the personal data we process, including:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            <strong>Hosting in India:</strong> the Platform is hosted on
            DigitalOcean infrastructure located in Bangalore, India. Customer
            data is stored within India.
          </li>
          <li>
            <strong>Encryption in transit:</strong> data transmitted between
            your device and our Platform is protected using HTTPS / TLS.
          </li>
          <li>
            <strong>Encryption at rest:</strong> application data and uploaded
            documents are encrypted at rest within the hosting environment.
          </li>
          <li>
            <strong>Password protection:</strong> passwords are stored in
            salted, hashed form; we never store plain-text passwords.
          </li>
          <li>
            <strong>Access controls:</strong> access to personal data is
            restricted to authorised personnel on a need-to-know basis.
          </li>
          <li>
            <strong>Incident response:</strong> we maintain procedures to
            detect, investigate and respond to security incidents and to
            notify the Data Protection Board and affected data principals as
            required by law.
          </li>
        </ul>
        <p className="mt-4">
          No system can be guaranteed to be completely secure. You are
          responsible for keeping your account credentials confidential and for
          notifying us promptly if you suspect any unauthorised use of your
          account.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "9. Your Rights as a Data Principal",
    content: (
      <>
        <p>
          Subject to the conditions and exemptions under the DPDP Act, you
          have the following rights in respect of your personal data:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              right: "Right to information",
              desc: "Obtain a summary of the personal data being processed about you and the processing activities undertaken.",
            },
            {
              right: "Right to correction and erasure",
              desc: "Request correction of inaccurate or incomplete personal data, completion of incomplete data, updating of out-of-date data, or erasure of personal data that is no longer necessary, subject to legal retention obligations.",
            },
            {
              right: "Right to withdraw consent",
              desc: "Withdraw any consent previously given, with effect for the future.",
            },
            {
              right: "Right to grievance redressal",
              desc: "Raise a grievance with our Grievance Officer; if unresolved, escalate to the Data Protection Board of India.",
            },
            {
              right: "Right to nominate",
              desc: "Nominate another individual to exercise your rights in the event of your death or incapacity.",
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
          To exercise any of these rights, please write to our Grievance
          Officer at{" "}
          <a
            href="mailto:info@foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            info@foundinglegals.com
          </a>
          . We will respond to verifiable requests within the timelines
          prescribed under applicable law.
        </p>
        <p className="mt-3">
          You also owe certain duties under Section 15 of the DPDP Act,
          including not impersonating another person and not furnishing
          materially false particulars when raising grievances or exercising
          rights.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "10. Cookies",
    content: (
      <p>
        We use cookies and similar tracking technologies on the Platform. For
        the categories of cookies we use and how to manage them, see our{" "}
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
    title: "11. Third-Party Links",
    content: (
      <p>
        The Platform may contain links to third-party websites or services
        (for example, the MCA portal, the GSTN portal or investor platforms).
        We are not responsible for the privacy practices of those websites.
        Please read their privacy policies before submitting any personal data.
      </p>
    ),
  },
  {
    id: "children",
    title: "12. Children's Personal Data",
    content: (
      <p>
        Our Platform is intended for use by adults (18 years or older).
        Consistent with Section 9 of the DPDP Act, we do not knowingly process
        the personal data of children (individuals under 18) without{" "}
        <strong>verifiable consent of a parent or lawful guardian</strong>,
        and we do not undertake tracking, behavioural monitoring or targeted
        advertising directed at children. If you believe we may have
        inadvertently collected the personal data of a child, please contact{" "}
        <a
          href="mailto:info@foundinglegals.com"
          className="text-[#5A6E3B] font-medium hover:underline"
        >
          info@foundinglegals.com
        </a>{" "}
        and we will take steps to delete that data.
      </p>
    ),
  },
  {
    id: "cross-border",
    title: "13. Cross-Border Transfers",
    content: (
      <p>
        Customer data is stored within India. To the extent any incidental
        processing occurs outside India through our service providers, such
        transfers are made only to jurisdictions that are not restricted by
        the Central Government of India under Section 16 of the DPDP Act, and
        subject to contractual safeguards requiring the recipient to maintain
        appropriate protections. We do not target users outside India.
      </p>
    ),
  },
  {
    id: "changes",
    title: "14. Changes to this Policy",
    content: (
      <p>
        We may update this Policy from time to time to reflect changes in our
        practices, technology, or applicable law. Where the changes are
        material, we will notify you by email (using the address associated
        with your account) and/or by a prominent notice on the Platform a
        reasonable period in advance of the changes taking effect. Your
        continued use of the Platform after the effective date constitutes
        acceptance of the revised Policy.
      </p>
    ),
  },
  {
    id: "grievance",
    title: "15. Grievance Officer &amp; Escalation",
    content: (
      <>
        <p>
          In accordance with the DPDP Act and the IT (Intermediary Guidelines
          and Digital Media Ethics Code) Rules, 2021, our Grievance Officer
          may be contacted for any complaint regarding the processing of your
          personal data or content on the Platform:
        </p>
        <div className="mt-5 bg-[#f5f2ec] border border-[#e5ddd4] rounded-2xl p-6 sm:p-8">
          <p className="font-bold text-[#2b2723] text-[16px] mb-3">
            Grievance Officer — Arvya Tech Pvt. Ltd.
          </p>
          <div className="space-y-2 text-[14px] text-[#4b4843]">
            <p>
              <span className="font-semibold text-[#2b2723]">Name:</span>{" "}
              Mr. Manoj Kumar Thota
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">Designation:</span>{" "}
              Grievance Officer
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">Email:</span>{" "}
              <a
                href="mailto:info@foundinglegals.com"
                className="text-[#5A6E3B] font-medium hover:underline"
              >
                info@foundinglegals.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">Address:</span>{" "}
              Arvya Tech Pvt. Ltd., 5th Floor, The Herbt&apos;s Square Building,
              Autonagar, APIIC IT Park, Mangalagiri, Amaravati, Andhra Pradesh
              522503, India.
            </p>
            <p>
              <span className="font-semibold text-[#2b2723]">
                Acknowledgement &amp; resolution:
              </span>{" "}
              We will acknowledge complaints within seventy-two (72) hours and
              endeavour to resolve them within the timelines prescribed under
              applicable law.
            </p>
          </div>
        </div>
        <p className="mt-4 text-[14px]">
          If you are not satisfied with the resolution provided by our
          Grievance Officer, you may approach the{" "}
          <strong>Data Protection Board of India</strong> under the DPDP Act,
          or seek any other remedy available to you under law.
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
            we collect, how we use it, and the rights you have over it under
            India&apos;s Digital Personal Data Protection Act, 2023.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 text-white/60 text-[13px]">
            <span>
              Effective date:{" "}
              <strong className="text-white/80">{EFFECTIVE_DATE}</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>
              Governed by:{" "}
              <strong className="text-white/80">
                DPDP Act, 2023 &amp; IT Act, 2000
              </strong>
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
                  href="mailto:info@foundinglegals.com"
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
              <strong className="text-[#2b2723]">Disclaimer:</strong> Founding
              Legals is a technology platform operated by Arvya Tech Pvt. Ltd.
              It is not a law firm, chartered accountancy firm or company
              secretarial firm. Information and computer-generated drafts
              provided on the Platform do not constitute legal, tax or
              professional advice. For specific legal matters, please consult a
              qualified professional.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
