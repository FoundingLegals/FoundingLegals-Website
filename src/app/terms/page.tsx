import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Founding Legals",
  description:
    "Terms & Conditions governing your use of the Founding Legals platform operated by Arvya Tech Pvt. Ltd.",
};

const EFFECTIVE_DATE = "29 May 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of these Terms",
    content: (
      <>
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) form a binding
          legal agreement between you (&ldquo;you&rdquo;, &ldquo;User&rdquo;)
          and{" "}
          <strong>Arvya Tech Pvt. Ltd.</strong> (CIN:{" "}
          <strong>U62011AP2025PTC121416</strong>), a company incorporated under
          the Companies Act, 2013, having its registered office at{" "}
          <strong>
            5th Floor, The Herbt&apos;s Square Building, Autonagar, APIIC IT
            Park, Mangalagiri, Amaravati, Andhra Pradesh 522503, India
          </strong>{" "}
          (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;), in respect of your access to or use of the{" "}
          <strong>Founding Legals</strong> website at{" "}
          <a
            href="https://www.foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            www.foundinglegals.com
          </a>{" "}
          and the web application at{" "}
          <a
            href="https://app.foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            app.foundinglegals.com
          </a>{" "}
          (together, the &ldquo;Platform&rdquo;).
        </p>
        <p className="mt-4">
          By creating an account, ticking the acceptance checkbox at signup,
          purchasing a plan, or otherwise using the Platform, you confirm that
          you have read, understood and agree to be bound by these Terms, the{" "}
          <a
            href="/privacy-policy"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            Privacy Policy
          </a>
          , the{" "}
          <a
            href="/cookie-policy"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            Cookie Policy
          </a>
          , and the{" "}
          <a
            href="/refund-policy"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            Refund &amp; Cancellation Policy
          </a>
          , each of which is incorporated by reference. If you do not agree, do
          not access or use the Platform.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: (
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          You must be at least <strong>18 years of age</strong> and competent to
          contract under the Indian Contract Act, 1872.
        </li>
        <li>
          If you use the Platform on behalf of a company, LLP, partnership or
          other entity, you represent that you are duly authorised to bind that
          entity.
        </li>
        <li>
          You must provide accurate, current and complete information at signup
          and keep it updated.
        </li>
        <li>
          The Platform is intended for users located in India. The Company does
          not actively offer the Platform to data principals or consumers
          outside India.
        </li>
      </ul>
    ),
  },
  {
    id: "nature-of-services",
    title: "3. Nature of Services — Technology Platform, Not a Law Firm",
    content: (
      <>
        <p>
          <strong>
            The Company is a technology platform. The Company is not a law
            firm, a chartered accountancy firm, a company secretarial firm, or
            a substitute for advice from a qualified professional.
          </strong>{" "}
          Nothing on the Platform constitutes legal, tax, accounting,
          investment or other professional advice.
        </p>
        <p className="mt-4">The Platform currently provides:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            <strong>Document automation / self-help tools</strong> — generic,
            computer-generated drafts of agreements and filings based on
            information you input. These are templates, not advice tailored to
            your specific facts.
          </li>
          <li>
            <strong>Compliance workflow tools</strong> — checklists, calendars,
            a document vault, cap-table tooling and a data room.
          </li>
          <li>
            <strong>Facilitated access</strong> to independent third-party
            professionals (Chartered Accountants, Company Secretaries and
            advocates) who may, on request, deliver services such as company
            incorporation (SPICe+, DIN, DSC, PAN/TAN), GST registration and
            returns, ROC filings (AOC-4, MGT-7), DPIIT/Udyam certification, and
            agreement review or drafting (collectively, &ldquo;Marketplace
            Services&rdquo;).
          </li>
        </ul>
        <p className="mt-4">
          <strong>Marketplace Services — important.</strong> Where you engage a
          professional through the Platform, the professional service is
          rendered by that independent professional and{" "}
          <strong>
            the professional-client relationship is solely between you and that
            professional
          </strong>
          . The Company acts only as a facilitator and technology provider.
          The Company does not practice law, share in advocates&apos; legal
          fees, or direct the manner in which any advocate, Chartered
          Accountant or Company Secretary discharges their professional
          obligations. Professional fees, where collected through the Platform,
          are passed through to the professional, and the Company charges only
          a separate platform/technology fee for the use of the Platform.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "4. Accounts &amp; Security",
    content: (
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          You are responsible for safeguarding your account credentials and for
          all activity that occurs under your account.
        </li>
        <li>
          You must notify us promptly at{" "}
          <a
            href="mailto:info@foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            info@foundinglegals.com
          </a>{" "}
          on becoming aware of any unauthorised access or suspected breach.
        </li>
        <li>
          We may suspend or terminate accounts that we reasonably believe have
          been compromised or are being used in violation of these Terms.
        </li>
      </ul>
    ),
  },
  {
    id: "plans-credits-billing",
    title: "5. Plans, Credits, Billing &amp; Auto-Renewal",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            The Platform is offered on a subscription / plan-and-credits basis.
            Pricing displayed on the Platform is in Indian Rupees (INR), and is
            <strong> exclusive of applicable taxes</strong> (including GST),
            which will be levied as required by law.
          </li>
          <li>
            Where a plan is set to renew automatically, it will renew at the
            then-current rate at the end of each billing period unless
            cancelled before the renewal date. We will provide reasonable prior
            notice of any price change applicable to renewals.
          </li>
          <li>
            Invoices are itemised, and where applicable separate{" "}
            <strong>statutory government fees</strong> from the Company&apos;s
            <strong> platform/service fees</strong>.
          </li>
          <li>
            <strong>Credits</strong> issued under any plan are non-transferable,
            have no cash value, and expire as stated at the time of issue. Free
            or promotional credits may be revoked at the Company&apos;s
            reasonable discretion.
          </li>
          <li>
            Payments are processed by third-party payment service providers
            (including Razorpay). The Company does not store card numbers, CVVs
            or full bank credentials.
          </li>
          <li>
            Refunds and cancellations are governed by the{" "}
            <a
              href="/refund-policy"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Refund &amp; Cancellation Policy
            </a>
            . In summary,{" "}
            <strong>
              fees paid for plans are non-refundable on cancellation
            </strong>
            , and government fees once remitted to the relevant authority are
            non-refundable in any circumstance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable Use",
    content: (
      <>
        <p>You agree that you will not, and will not permit any person to:</p>
        <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
          <li>
            use the Platform for any unlawful, fraudulent, defamatory,
            obscene, infringing, or misleading purpose, or in violation of any
            applicable law (including the Information Technology Act, 2000,
            Companies Act, 2013, GST law, Income Tax Act, 1961, the Aadhaar
            Act, 2016, and the Digital Personal Data Protection Act, 2023);
          </li>
          <li>
            upload or submit any content for which you do not have all
            necessary rights, or which infringes third-party intellectual
            property, privacy or confidentiality rights;
          </li>
          <li>
            submit identity documents, KYC information, financial data or
            signatures of any person other than yourself (or persons whose
            authorised representative you are);
          </li>
          <li>
            attempt to gain unauthorised access to the Platform or to any
            other user&apos;s account, data or documents; probe or scan
            vulnerabilities; bypass rate limits; or interfere with service
            availability;
          </li>
          <li>
            reverse engineer, decompile or otherwise attempt to derive the
            source code of the Platform, except to the extent permitted by
            applicable law;
          </li>
          <li>
            use the Platform to harass, impersonate, or solicit professional
            services in a manner prohibited by the Bar Council of India rules,
            the Advocates Act, 1961, or ICAI rules of professional conduct;
          </li>
          <li>
            scrape, crawl, or extract data from the Platform other than for
            your own permitted use; or
          </li>
          <li>
            use the Platform to develop or train any competing product, machine
            learning model or dataset.
          </li>
        </ul>
        <p className="mt-4">
          We may, in our reasonable discretion, remove content and suspend or
          terminate accounts that violate this clause, with or without notice
          where the violation is material or urgent.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "7. Your Content &amp; Licence to Operate",
    content: (
      <>
        <p>
          You retain ownership of the documents, data and other materials you
          submit to the Platform (&ldquo;User Content&rdquo;). You grant the
          Company a worldwide, non-exclusive, royalty-free, sub-licensable
          licence to host, store, reproduce, transmit, display, and process
          User Content{" "}
          <strong>solely to the extent necessary</strong> to operate the
          Platform, deliver the services you have requested, maintain backups,
          provide support, comply with law, and enforce these Terms. The
          licence ends when the relevant User Content is deleted in accordance
          with our retention schedule (see the Privacy Policy), save for
          residual copies retained for legal or audit reasons.
        </p>
        <p className="mt-4">
          You represent that you have all rights necessary to grant this
          licence and that the User Content does not violate any law or
          third-party right.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "8. Our Intellectual Property",
    content: (
      <p>
        The Platform, including its software, design, text, templates, trade
        marks (including &ldquo;Founding Legals&rdquo;), logos, and all related
        intellectual property, is owned by or licensed to the Company. Except
        for the limited right to use the Platform in accordance with these
        Terms, no rights are granted to you, by implication or otherwise.
        Output generated from your inputs through document automation tools may
        be used by you for your own lawful business purposes; you must not
        resell or commercialise the underlying templates as your own.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "9. Third-Party Services &amp; Professionals",
    content: (
      <>
        <p>
          The Platform integrates with third-party services (including AWS /
          Google Cloud, DigitalOcean, Razorpay, Google Identity, Google
          Analytics, Intercom, SendGrid, and Zoho Sign) and provides facilitated
          access to independent CAs, CSs and advocates. Use of those services
          is subject to the third party&apos;s own terms and policies. The
          Company is not responsible for the acts, omissions, advice, work
          product or fees of independent professionals; any disputes regarding
          professional services must be addressed primarily between you and
          that professional, although the Company will provide reasonable
          assistance through its grievance mechanism.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "10. Disclaimers",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, the Platform and all content,
          templates, drafts, calculators and outputs are provided{" "}
          <strong>
            &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          </strong>
          , without warranty of any kind, express or implied, including the
          implied warranties of merchantability, fitness for a particular
          purpose, accuracy, completeness, or non-infringement.
        </p>
        <p className="mt-4">
          Without limiting the foregoing, the Company does not warrant that
          (a) the Platform will be uninterrupted, secure or error-free, (b) any
          computer-generated draft is suitable for your specific facts or
          legally adequate for your situation, or (c) any outcome of any
          government filing facilitated through the Platform is guaranteed.{" "}
          <strong>
            For matters of legal, tax or compliance importance, you must
            consult a qualified professional before acting on Platform output.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, in no event shall the
          Company, its directors, officers, employees or affiliates be liable
          for any indirect, incidental, special, consequential, punitive or
          exemplary damages, loss of profits, loss of revenue, loss of business,
          loss of goodwill, loss of data, or loss of opportunity, arising out
          of or in connection with the Platform, even if advised of the
          possibility of such damages.
        </p>
        <p className="mt-4">
          The Company&apos;s aggregate liability arising out of or in
          connection with these Terms or the Platform, whether in contract,
          tort (including negligence), statute or otherwise, shall not exceed{" "}
          <strong>
            Indian Rupees 10,000 (Rupees Ten Thousand only)
          </strong>
          .
        </p>
        <p className="mt-4">
          Nothing in these Terms excludes or limits liability that cannot
          lawfully be excluded or limited.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "12. Indemnity",
    content: (
      <p>
        You agree to defend, indemnify and hold harmless the Company and its
        directors, officers, employees and affiliates from and against any
        third-party claim, demand, action, loss, liability, damage or expense
        (including reasonable attorneys&apos; fees) arising out of or
        attributable to (i) your User Content, (ii) your breach of these Terms
        or applicable law, (iii) your infringement of any third-party right, or
        (iv) your use of the Platform in violation of clause 6 (Acceptable
        Use).
      </p>
    ),
  },
  {
    id: "termination",
    title: "13. Term, Suspension, Termination &amp; Data Export",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            These Terms apply from the date you first accept them and continue
            until your account is terminated by either party.
          </li>
          <li>
            You may close your account at any time from the in-app settings or
            by writing to{" "}
            <a
              href="mailto:info@foundinglegals.com"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              info@foundinglegals.com
            </a>
            .
          </li>
          <li>
            We may suspend or terminate your account, with or without notice,
            for material breach of these Terms, suspected fraud or unlawful
            use, non-payment of fees, or where required by law or regulator.
          </li>
          <li>
            For thirty (30) days after termination (unless prohibited by law),
            you may request an <strong>export of your User Content</strong> in
            a commonly used format. After that period, we will delete or
            anonymise User Content in accordance with the retention schedule in
            the Privacy Policy, except where longer retention is required by
            law.
          </li>
          <li>
            Clauses that by their nature should survive termination — including
            10 (Disclaimers), 11 (Limitation of Liability), 12 (Indemnity), 15
            (Governing Law &amp; Jurisdiction), and any accrued payment
            obligations — shall so survive.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "14. Force Majeure",
    content: (
      <p>
        The Company shall not be liable for any failure or delay in performing
        its obligations to the extent caused by events beyond its reasonable
        control, including acts of God, natural disasters, epidemics or
        pandemics, war, terrorism, civil unrest, government action, changes in
        law, internet or telecommunications failures, denial-of-service
        attacks, or failures of upstream service providers.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "15. Governing Law &amp; Dispute Resolution",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of India. The parties shall first attempt in good faith to
          resolve any dispute by negotiation, including by raising the matter
          with the Company&apos;s Grievance Officer in accordance with the
          Privacy Policy.
        </p>
        <p className="mt-4">
          Subject to the above, the courts at{" "}
          <strong>Amaravati / Vijayawada, Andhra Pradesh</strong> shall have
          exclusive jurisdiction over any disputes arising out of or in
          connection with these Terms or the Platform.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "16. Changes to these Terms",
    content: (
      <p>
        We may amend these Terms from time to time. Where the changes are
        material, we will give you reasonable prior notice (by email and/or
        in-app notice) before they take effect. Your continued use of the
        Platform after the effective date constitutes acceptance of the
        revised Terms.
      </p>
    ),
  },
  {
    id: "general",
    title: "17. General",
    content: (
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong>Entire Agreement:</strong> These Terms, together with the
          Privacy Policy, Cookie Policy and Refund &amp; Cancellation Policy,
          constitute the entire agreement between you and the Company in
          respect of the Platform.
        </li>
        <li>
          <strong>Severability:</strong> If any provision of these Terms is
          held to be invalid or unenforceable, the remaining provisions shall
          continue in full force and effect.
        </li>
        <li>
          <strong>No Waiver:</strong> A failure or delay by the Company in
          enforcing any right shall not be deemed a waiver of that right.
        </li>
        <li>
          <strong>Assignment:</strong> You may not assign these Terms without
          our prior written consent. We may assign these Terms to an affiliate
          or successor in interest in connection with a merger, acquisition or
          sale of assets.
        </li>
        <li>
          <strong>Notices:</strong> Notices to the Company must be sent to{" "}
          <a
            href="mailto:info@foundinglegals.com"
            className="text-[#5A6E3B] font-medium hover:underline"
          >
            info@foundinglegals.com
          </a>{" "}
          with a copy to the registered office above.
        </li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "18. Contact",
    content: (
      <p>
        Questions about these Terms? Write to us at{" "}
        <a
          href="mailto:info@foundinglegals.com"
          className="text-[#5A6E3B] font-medium hover:underline"
        >
          info@foundinglegals.com
        </a>{" "}
        or by post to Arvya Tech Pvt. Ltd., 5th Floor, The Herbt&apos;s Square
        Building, Autonagar, APIIC IT Park, Mangalagiri, Amaravati, Andhra
        Pradesh 522503, India.
      </p>
    ),
  },
];

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
            Effective date: <strong className="text-white/90">{EFFECTIVE_DATE}</strong>
          </p>
        </div>
      </section>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">
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
          </div>
        </aside>

        <article className="flex-1 min-w-0 space-y-14 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.85]">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-[22px] sm:text-[26px] font-serif font-semibold text-[#2b2723] mb-4 pb-3 border-b border-[#e5ddd4]">
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}

          <div className="bg-[#f0ede4] border border-[#e5ddd4] rounded-2xl p-6 sm:p-8 text-[14px] text-[#65605b] leading-relaxed">
            <p>
              <strong className="text-[#2b2723]">Disclaimer:</strong> Founding
              Legals is a technology platform operated by Arvya Tech Pvt. Ltd.
              It is not a law firm, chartered accountancy firm or company
              secretarial firm. Information and computer-generated drafts
              provided on the Platform do not constitute legal, tax or
              professional advice, and no attorney-client or
              professional-client relationship is created with Arvya Tech Pvt.
              Ltd. by your use of the Platform.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
