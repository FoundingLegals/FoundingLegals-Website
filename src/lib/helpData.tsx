import React from "react";

export interface HelpArticle {
  id: string;
  title: string;
  moduleId: string;
  moduleName: string;
  readingTime: string;
  lastUpdated: string;
  summary: string;
  content: React.ReactNode;
}

export const HELP_MODULES = [
  { id: "pitch-investor-readiness", name: "Pitch & Investor Readiness", icon: "Presentation" },
  { id: "cap-table-share-management", name: "Cap Table & Share Management", icon: "PieChart" },
  { id: "team-agreements-policies", name: "Team, Agreements & Policies", icon: "FileText" },
  { id: "payslips-payroll", name: "Payslips & Payroll", icon: "Wallet" },
];

export const HELP_ARTICLES: HelpArticle[] = [
  // ==========================================
  // MODULE 1: PITCH & INVESTOR READINESS
  // ==========================================
  {
    id: "drafting-india-enforceable-nda",
    title: "Drafting an India-Enforceable NDA Before You Share Your Pitch Deck",
    moduleId: "pitch-investor-readiness",
    moduleName: "Pitch & Investor Readiness",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "Sharing your pitch deck, financial model, or product roadmap without a properly executed Non-Disclosure Agreement is one of the riskiest moves an early-stage founder can make. This article explains how to draft an NDA that holds up in Indian courts under the Indian Contract Act, 1872, what stamp duty applies, and how Founding Legals generates a court-enforceable NDA in under 90 seconds.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            An NDA in India is a contract — and like every contract, it must satisfy the essential elements under Section 10 of the Indian Contract Act, 1872: free consent, lawful consideration, lawful object, and competent parties. Three India-specific elements separate an enforceable NDA from a worthless one:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-brown-700">
            <li>
              <strong>Stamp Duty:</strong> An NDA executed on plain paper without proper stamping under the relevant State Stamp Act is inadmissible as evidence under Section 35 of the Indian Stamp Act, 1899. It&apos;s not invalid — just unusable when you need it most.
            </li>
            <li>
              <strong>Jurisdiction Clause:</strong> Indian courts strictly enforce exclusive jurisdiction clauses. Without one, you may end up litigating IP theft in a city 2,000 km from your office.
            </li>
            <li>
              <strong>Reasonable Restraint:</strong> Section 27 of the Indian Contract Act, 1872 voids agreements &quot;in restraint of trade.&quot; NDAs with overly broad or perpetual confidentiality obligations risk being struck down.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Four Non-Negotiable Clauses in an Indian NDA</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl">
            <table className="min-w-full divide-y divide-brown-200 text-sm">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Clause</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Statutory Basis</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">What It Must Say</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Definition of Confidential Information</td>
                  <td className="px-4 py-3 text-brown-700">Common Law + Contract Act, 1872</td>
                  <td className="px-4 py-3 text-brown-700">Specific, identifiable categories — not vague &quot;all business info&quot;</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Permitted Use Restriction</td>
                  <td className="px-4 py-3 text-brown-700">Section 73, Contract Act (damages)</td>
                  <td className="px-4 py-3 text-brown-700">Restrict use strictly to &quot;evaluation purposes&quot; only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Term &amp; Survival</td>
                  <td className="px-4 py-3 text-brown-700">Section 27, Contract Act</td>
                  <td className="px-4 py-3 text-brown-700">Recommended 2–5 years post-termination</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Jurisdiction &amp; Governing Law</td>
                  <td className="px-4 py-3 text-brown-700">CPC, 1908 — Section 20</td>
                  <td className="px-4 py-3 text-brown-700">Exclusive Indian court (e.g., &quot;Courts of Bengaluru&quot;)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">State-Wise Stamp Duty on NDAs (Indicative)</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl max-w-md">
            <table className="min-w-full divide-y divide-brown-200 text-sm">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">State</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Approx. Stamp Duty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                {["Karnataka (₹200)", "Maharashtra (₹500)", "Delhi (₹100)", "Telangana (₹100)", "Tamil Nadu (₹100)", "Haryana (₹100)"].map((item) => {
                  const [state, val] = item.split(" (");
                  return (
                    <tr key={state}>
                      <td className="px-4 py-2.5 font-medium text-brown-900">{state}</td>
                      <td className="px-4 py-2.5 text-brown-700">{"(" + val}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Pitch → NDA Generator → New NDA. Choose between Mutual NDA (both parties share confidential info — e.g., co-founder discussions) or Unilateral NDA (only you disclose — e.g., investor meetings).</li>
            <li><strong>Step 2:</strong> Enter the counterparty&apos;s name, address, and PAN/CIN. The platform validates the CIN against the MCA database in real-time.</li>
            <li><strong>Step 3:</strong> Select your jurisdiction city — Bengaluru, Mumbai, Delhi, Hyderabad, Pune, Gurugram, or Chennai. The system auto-calculates the applicable state stamp duty and shows you the exact denomination needed.</li>
            <li><strong>Step 4:</strong> Pick a Confidentiality Period (default: 3 years post-termination — the platform warns you if you exceed 5 years).</li>
            <li><strong>Step 5:</strong> Click &quot;Generate &amp; E-Sign&quot;. Founding Legals creates the NDA, integrates with NSDL/Protean Aadhaar e-Sign under the IT Act, 2000, and stores the executed version with an audit trail in your dashboard&apos;s Vault.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The Unstamped NDA Problem
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Founders frequently share decks under &quot;email NDAs&quot; or e-signed PDFs without paying stamp duty. While the contract technically exists, if your IP is stolen and you sue, the court will demand the agreement be stamped with penalty — up to 10× the deficit duty under Section 40 of the Indian Stamp Act — before it can even be admitted as evidence. Always stamp before signing.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Tag Your Deck Pages
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            An NDA only protects information explicitly marked or identifiable as confidential. Add a clear &quot;Confidential — Subject to NDA dated [date]&quot; watermark on every page of your pitch deck and financial model. Founding Legals&apos; Deck Watermark Tool does this automatically.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "preparing-for-angel-tax",
    title: "Preparing for Angel Tax — Section 56(2)(viib) & DPIIT Exemption",
    moduleId: "pitch-investor-readiness",
    moduleName: "Pitch & Investor Readiness",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "If your startup raises money at a valuation higher than its \"Fair Market Value,\" the excess can be taxed as income under Section 56(2)(viib) of the Income Tax Act, 1961 — the infamous \"Angel Tax.\" This article explains how the tax works, who is exempt, and how Founding Legals helps you secure DPIIT recognition before your first cheque arrives.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 56(2)(viib) of the Income Tax Act, 1961, when a private limited company issues shares to a resident at a price above the Fair Market Value (FMV) of those shares, the excess premium is treated as &quot;Income from Other Sources&quot; and taxed at the applicable corporate rate — currently up to 30.9% with surcharge and cess.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Fair Market Value (FMV):</strong> The value of shares determined either by the Net Asset Value (NAV) method or the Discounted Cash Flow (DCF) method, certified by a SEBI-registered Merchant Banker or a Registered Valuer under Rule 11UA of the Income Tax Rules, 1962.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Who Triggers Angel Tax?</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl">
            <table className="min-w-full divide-y divide-brown-200 text-sm">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Trigger</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Taxable Under Section 56(2)(viib)?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Issuing shares at premium to a resident Indian investor</td>
                  <td className="px-4 py-3 text-[#CD412B] font-medium">✅ Yes, unless exempted</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Issuing shares at premium to a non-resident / foreign VC</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">❌ No (post Finance Act 2023 reversal — under review)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Issuing shares to a SEBI-registered Category I/II AIF</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Issuing shares as a DPIIT-recognised startup with declaration filed</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Issuing shares at or below FMV</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The DPIIT Exemption Route</h3>
          <p className="text-brown-700 leading-relaxed">
            A startup recognised by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India scheme can claim full exemption from Section 56(2)(viib), provided:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brown-700">
            <li>The startup is incorporated as a Private Limited Company, LLP, or Registered Partnership.</li>
            <li>It is less than 10 years old from the date of incorporation.</li>
            <li>Its annual turnover has not exceeded ₹100 Crore in any financial year.</li>
            <li>It is working toward innovation, development, or improvement of products/services or a scalable business model.</li>
            <li>Aggregate paid-up share capital and share premium does not exceed ₹25 Crore post-issue (with specific exclusions for listed companies, NRIs, and AIFs).</li>
            <li>Form 2 (declaration of exemption) is filed with DPIIT.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Pitch → DPIIT Recognition → Eligibility Check. Answer 6 questions about your incorporation date, turnover, and innovation criteria. The platform tells you instantly whether you qualify.</li>
            <li><strong>Step 2:</strong> If eligible, click &quot;Generate DPIIT Application&quot;. Founding Legals auto-fills the Startup India portal application using your COI, MOA, PAN, and pitch deck stored in your Vault.</li>
            <li><strong>Step 3:</strong> Upload your Brief Write-up on Innovation — the platform provides a 3-paragraph template aligned with what DPIIT officers approve most frequently.</li>
            <li><strong>Step 4:</strong> Once your DPIIT Recognition Certificate is issued (typically 7–15 working days), upload it to Pitch → Tax Exemptions. The dashboard automatically prepares Form 2 for the Section 56(2)(viib) exemption declaration.</li>
            <li><strong>Step 5:</strong> Before any priced round closes, run the &quot;Angel Tax Risk Check&quot; on your dashboard. It compares your round valuation against your FMV (computed from your last filed financials) and flags any premium that could trigger tax exposure.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: File Form 2 BEFORE Allotment
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The Section 56(2)(viib) exemption only applies if Form 2 is filed with DPIIT before the share allotment. Filing it after the fact does not retroactively cure the tax liability. Many founders raise first and discover the exemption process later — by then, the Assessing Officer can issue a tax demand for the entire premium.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Get a Valuation Report Even If Exempt
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Even if you&apos;re DPIIT-exempt, always obtain a Rule 11UA valuation report from a Registered Valuer before pricing your round. It protects you during MCA scrutiny, FEMA filings (if foreign money enters later), and any future tax assessment. Founding Legals connects you to empanelled Registered Valuers at fixed rates.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "pre-round-data-room-checklist",
    title: "The Pre-Round Data Room Checklist Every Indian Investor Will Demand",
    moduleId: "pitch-investor-readiness",
    moduleName: "Pitch & Investor Readiness",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Indian VCs and angel networks conduct due diligence under tighter compliance lenses than most founders expect — covering MCA, GST, ROC, FEMA, and labour law filings. This article lists every document your data room must contain before a term sheet is signed, and shows how Founding Legals auto-organises them into an investor-ready Vault.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            When an Indian investor commits capital, their legal team will conduct a Legal Due Diligence (LDD) covering compliance under the Companies Act, 2013, Income Tax Act, 1961, GST Act, 2017, FEMA, 1999, and applicable Labour Laws. Missing documents don&apos;t just delay closure — they often trigger Conditions Precedent (CPs) in the Share Subscription Agreement that you must satisfy before funds are released.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 6 Pillars of an Investor-Ready Data Room</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">1. Corporate &amp; Statutory</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>Certificate of Incorporation (COI) with CIN</li>
                <li>MOA &amp; AOA — latest amended versions</li>
                <li>PAN and TAN of the company</li>
                <li>Shop &amp; Establishment Registration certificate</li>
                <li>GST Registration Certificate (GSTIN)</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">2. Cap Table &amp; Share Capital</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>Current cap table with fully diluted ownership</li>
                <li>All Form PAS-3 filings (share allotments)</li>
                <li>All Form SH-7 filings (capital increases)</li>
                <li>Share certificates issued to each shareholder</li>
                <li>Register of Members (Form MGT-1)</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">3. Board &amp; Shareholder Governance</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>Minutes of all Board &amp; General Meetings</li>
                <li>All Form MGT-14 filings (special resolutions)</li>
                <li>All Form DIR-12 filings (director updates)</li>
                <li>DIN and DSC details of all directors</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">4. Financial &amp; Tax Compliance</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>Audited Financial Statements (last 3 years)</li>
                <li>All Form AOC-4 &amp; MGT-7 filings with MCA</li>
                <li>Income Tax Returns (last 3 years)</li>
                <li>GST Returns (GSTR-1 &amp; 3B last 12 months)</li>
                <li>TDS Returns (Form 26Q, 24Q)</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">5. Commercial &amp; IP Contracts</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>All material customer/vendor contracts</li>
                <li>Trademark, copyright, and patent filings</li>
                <li>IP Assignment agreements from founders/staff</li>
                <li>Domain ownership records</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">6. HR &amp; Employment</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>Employment agreements for all key staff</li>
                <li>ESOP Scheme, grants, and Form MGT-14</li>
                <li>POSH Policy and ICC constitution (10+ staff)</li>
                <li>EPF and ESIC registration certificates</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Pitch → Data Room → Setup. The platform auto-imports your incorporation documents, MCA filings, and cap table data already on your dashboard.</li>
            <li><strong>Step 2:</strong> Run the &quot;Compliance Gap Scan&quot;. The system cross-references your CIN against the MCA21 portal and flags missing filings (e.g., overdue MGT-7, unfiled PAS-3 from a past round).</li>
            <li><strong>Step 3:</strong> Upload pending documents through guided checklists. Each document is auto-tagged, indexed, and OCR-scanned for quick investor search.</li>
            <li><strong>Step 4:</strong> Click &quot;Generate Investor Share Link&quot;. Choose granular access: View Only, Watermark Per Page, Download Disabled, and Expiry Date (typical: 14 days).</li>
            <li><strong>Step 5:</strong> Track investor engagement in real-time — see which documents were opened, by whom, and for how long. The audit log doubles as evidence under the IT Act, 2000 if confidentiality is ever breached.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Unfiled MGT-7 = Deal Breaker
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Investors run an MCA Master Data check within the first hour of due diligence. If your Form MGT-7 (Annual Return) is overdue, your company is marked as a &quot;Defaulting Company&quot; under Section 164(2) — and your directors become disqualified from being on any other board for 5 years. This alone can collapse a round.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Build the Data Room Before You Pitch
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The best Indian founders maintain a &quot;live&quot; data room that&apos;s always 90% investor-ready — not one assembled in panic after a term sheet. Founding Legals continuously updates your Vault with every MCA filing, contract, and resolution you execute on the platform, so when an investor says &quot;send us your data room,&quot; you&apos;re a single click away.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "convertible-notes-safe-isafe",
    title: "Convertible Notes, SAFE & iSAFE — Which Instrument to Use in India",
    moduleId: "pitch-investor-readiness",
    moduleName: "Pitch & Investor Readiness",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Early-stage Indian startups raising bridge capital typically choose between Convertible Notes (CN), SAFE (Simple Agreement for Future Equity), and iSAFE (India SAFE). Each has very different legal treatment under the Companies Act, 2013 and FEMA, 1999. Picking the wrong one can disqualify your round or trigger RBI penalties. This article explains the right fit and how Founding Legals generates the correct instrument.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Convertible Note (CN) — Defined under Rule 2(1)(c) of the Companies (Acceptance of Deposits) Rules, 2014. A debt instrument that converts into equity on a future trigger event (next priced round, maturity, or exit). Treated as a &quot;non-deposit&quot; only if minimum investment is ₹25 Lakh per investor and the startup is DPIIT-recognised.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>SAFE / iSAFE:</strong> Not a debt instrument. A contractual right to receive future equity at a discount/cap. SAFE in its Western form is not legally recognised in India because Indian company law doesn&apos;t permit issuing shares without a defined price or face value upfront. iSAFE is the India-adapted version structured as CCPS with conversion deferral, made compliant by 100X.VC.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Which Instrument Works in India?</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl">
            <table className="min-w-full divide-y divide-brown-200 text-sm">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Instrument</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Indian Legality</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Minimum Investment</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Conversion Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Convertible Note</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">✅ Legal (DPIIT startups only)</td>
                  <td className="px-4 py-3 text-brown-700">₹25 Lakh per investor</td>
                  <td className="px-4 py-3 text-brown-700">Converts within 10 years into equity</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">SAFE (US-style)</td>
                  <td className="px-4 py-3 text-[#CD412B] font-medium">❌ Not recognised</td>
                  <td className="px-4 py-3 text-brown-700">N/A</td>
                  <td className="px-4 py-3 text-brown-700">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">iSAFE (CCPS-based)</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">✅ Legal (via CCPS structure)</td>
                  <td className="px-4 py-3 text-brown-700">No statutory minimum</td>
                  <td className="px-4 py-3 text-brown-700">Converts on priced round / liquidity event</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brown-900">Equity Round</td>
                  <td className="px-4 py-3 text-olive-600 font-medium">✅ Legal</td>
                  <td className="px-4 py-3 text-brown-700">No statutory minimum</td>
                  <td className="px-4 py-3 text-brown-700">Direct equity allotment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Key Terms in a Convertible Note</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl">
            <table className="min-w-full divide-y divide-brown-200 text-sm">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Term</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Valuation Cap</td>
                  <td className="px-4 py-2.5 text-brown-700">Maximum company valuation at which the note converts (protects investor in up-rounds)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Discount Rate</td>
                  <td className="px-4 py-2.5 text-brown-700">% discount on the next round&apos;s price (typically 15–25%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Maturity Date</td>
                  <td className="px-4 py-2.5 text-brown-700">When the note matures — must be within 10 years under Indian law</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Trigger Event</td>
                  <td className="px-4 py-2.5 text-brown-700">Priced round, IPO, M&amp;A, or expiry — whichever first</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Interest Rate</td>
                  <td className="px-4 py-2.5 text-brown-700">Optional; if charged, attracts TDS under Section 194A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Pitch → Instrument Selector. Answer 4 questions: (a) Are you DPIIT-recognised? (b) Is the investor Indian or foreign? (c) Investment amount? (d) Expected next round timeline? The platform recommends CN, iSAFE, or direct CCPS.</li>
            <li><strong>Step 2:</strong> If CN is recommended, generate the Convertible Note Agreement with valuation cap, discount, maturity, and trigger events pre-filled.</li>
            <li><strong>Step 3:</strong> File Form MGT-14 (if special resolution required) and issue the CN to the investor. Funds are received in the company bank account against a board-approved investor list.</li>
            <li><strong>Step 4:</strong> On the next priced round, the platform runs the CN Conversion Engine — calculates whether the discount or the cap gives the investor more shares, and converts the CN into CCPS or equity automatically.</li>
            <li><strong>Step 5:</strong> File Form PAS-3 for the share allotment within 30 days of conversion.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: ₹25 Lakh Minimum for CN
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under the Companies (Acceptance of Deposits) Rules, 2014, a Convertible Note from a single investor must be at least ₹25 Lakh to qualify as &quot;not a deposit.&quot; Receiving smaller amounts as CN reclassifies them as public deposits — a serious violation attracting refund + interest + penalty under Section 73 of the Companies Act.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Use CN for Bridge Rounds, CCPS for Priced Rounds
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            CNs are excellent for quick bridge capital between priced rounds where valuation is ambiguous. For your first institutional round, skip the CN and go directly to a priced CCPS round — most Indian VCs prefer the certainty of a defined cap table.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "term-sheet-negotiation",
    title: "Term Sheet Negotiation — The 12 Indian Clauses That Matter",
    moduleId: "pitch-investor-readiness",
    moduleName: "Pitch & Investor Readiness",
    readingTime: "9 minutes",
    lastUpdated: "May 2026",
    summary: "A term sheet is \"non-binding\" except for a few clauses — but it sets the legal architecture of your funding round and is 90% replicated verbatim into the Share Subscription Agreement (SSA) and Shareholders' Agreement (SHA). This article breaks down the 12 most consequential clauses an Indian founder must negotiate.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            Term Sheet — A preliminary document outlining the commercial and legal terms of an investment. In India, the binding clauses are typically Exclusivity, Confidentiality, Costs, and Governing Law. The rest become binding only via the SSA and SHA, but in practice are very hard to renegotiate.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 12 Clauses Every Founder Must Master</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Clause</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">What to Watch For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                {[
                  ["1", "Valuation (Pre-money / Post-money)", "\"Post-money valuation\" includes the ESOP pool — confirm whose dilution it sits on"],
                  ["2", "ESOP Pool", "Investors push for 10–15% pool pre-money, fully diluting founders"],
                  ["3", "Liquidation Preference", "Push for 1× non-participating — anything more is investor-friendly"],
                  ["4", "Anti-Dilution", "Demand Broad-Based Weighted Average, never Full Ratchet"],
                  ["5", "Drag-Along Rights", "Allow only above a minimum sale price (e.g., 2× of last valuation)"],
                  ["6", "Tag-Along Rights", "Standard — accept, but cap to founder's transfer above 1%"],
                  ["7", "Right of First Refusal (ROFR)", "Investor's right to buy if founder sells — accept with carve-outs"],
                  ["8", "Board Composition", "Each investor wants 1 seat — cap total Investor Directors at 1–2"],
                  ["9", "Reserved Matters / Veto Rights", "List items needing investor consent — minimise to truly strategic items"],
                  ["10", "Exit / Liquidity", "Investors demand exit within 5–7 years — push for 7"],
                  ["11", "Vesting (Founders!)", "Investors will require founders to re-vest over 4 years with 1-year cliff"],
                  ["12", "Non-Compete on Founders", "Reasonable during employment; perpetual is unenforceable under Section 27"]
                ].map(([num, cl, desc]) => (
                  <tr key={num}>
                    <td className="px-4 py-2 font-medium text-brown-900">{num}</td>
                    <td className="px-4 py-2 font-semibold text-brown-900">{cl}</td>
                    <td className="px-4 py-2 text-brown-700">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Binding vs. Non-Binding Clauses</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl max-w-lg">
            <table className="min-w-full divide-y divide-brown-200 text-sm">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Clause</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Binding in Term Sheet?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Valuation, ESOP, Liquidation Preference, etc.</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">❌ Non-binding</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Exclusivity (No-Shop)</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Binding — typically 30–60 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Confidentiality</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Binding</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Costs (who pays legal fees)</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Binding</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Governing Law &amp; Jurisdiction</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Binding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Upload the investor&apos;s term sheet to Pitch → Term Sheet Reviewer. The AI engine extracts all 12 clauses, flags founder-unfriendly terms, and shows the Indian VC market median for each clause.</li>
            <li><strong>Step 2:</strong> Use the Dilution Calculator to model founder ownership before/after, impact of pre-money vs post-money ESOP, and impact of liquidation preferences.</li>
            <li><strong>Step 3:</strong> Get redline suggestions with statutory justifications you can quote back to the investor&apos;s lawyer (e.g., &quot;non-compete post-employment is void under Section 27, Indian Contract Act&quot;).</li>
            <li><strong>Step 4:</strong> Sign the negotiated term sheet via integrated Aadhaar e-Sign. The platform auto-generates the SSA + SHA drafts matching the term sheet&apos;s commercial terms.</li>
            <li><strong>Step 5:</strong> Track the Exclusivity Clock — the platform alerts you 5 days before exclusivity expires so you can renegotiate or walk away.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Pre-Money ESOP Pool = Hidden Dilution
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            When an investor says &quot;₹50 Cr post-money valuation including a 15% post-investment ESOP pool,&quot; they&apos;re forcing the ESOP creation to come out of founder equity, not theirs. If your pool was 5% earlier, expanding to 15% means founders absorb ~10% additional dilution. Always model this on the platform&apos;s Dilution Calculator before signing.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Negotiate Veto Items Down to &lt;10
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Investors typically list 25–35 reserved matters. Most are reasonable (M&amp;A, dissolution, dividend), but several creep into operational decisions (budget approval, hiring senior staff, opening bank accounts). Push for a tight list of 8–10 truly strategic items — operational vetoes will paralyse you 18 months in.
          </p>
        </div>
      </div>
    ),
  },

  // ==========================================
  // MODULE 2: CAP TABLE & SHARE MANAGEMENT
  // ==========================================
  {
    id: "understanding-authorized-paid-up-capital",
    title: "Understanding Authorized vs. Paid-Up Capital on Your Cap Table",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Authorized Capital is the maximum share capital your company is legally allowed to issue, while Paid-Up Capital is the actual money shareholders have paid in exchange for shares. Confusing the two is one of the most expensive early-stage mistakes Indian founders make — it can stall a funding round by 3–4 weeks and trigger penalties under the Companies Act, 2013.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            Under the Companies Act, 2013, every Indian private limited company is required to declare its share capital structure in Clause V of its Memorandum of Association (MOA) — known as the Capital Clause. This single clause sets the ceiling for everything your cap table can ever do.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-brown-700">
            <li>
              <strong>Authorized Capital (also called &quot;Nominal Capital&quot;):</strong> Defined under Section 2(8) of the Companies Act, 2013. The maximum value of shares your company is empowered to issue. Think of it as the &quot;credit limit&quot; set in your MOA.
            </li>
            <li>
              <strong>Paid-Up Capital:</strong> Defined under Section 2(64) of the Companies Act, 2013. The amount of money the company has actually received from shareholders in exchange for issued shares. Think of it as the &quot;amount actually spent&quot; against your credit limit.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Authorized vs. Paid-Up — The Key Distinctions</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Parameter</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Authorized Capital</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Paid-Up Capital</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Statutory Definition</td>
                  <td className="px-4 py-3 text-brown-700">Section 2(8), Companies Act, 2013</td>
                  <td className="px-4 py-3 text-brown-700">Section 2(64), Companies Act, 2013</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">What It Represents</td>
                  <td className="px-4 py-3 text-brown-700">Maximum issuable share value</td>
                  <td className="px-4 py-3 text-brown-700">Actual share value received</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Where It Lives</td>
                  <td className="px-4 py-3 text-brown-700">Clause V of the MOA</td>
                  <td className="px-4 py-3 text-brown-700">Statutory Register &amp; PAS-3 filings</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Can Exceed the Other?</td>
                  <td className="px-4 py-3 text-brown-700">Yes — must always be ≥ Paid-Up</td>
                  <td className="px-4 py-3 text-brown-700">No — can never exceed Authorized</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Form to Modify</td>
                  <td className="px-4 py-3 text-brown-700">Form SH-7 (within 30 days)</td>
                  <td className="px-4 py-3 text-brown-700">Form PAS-3 (within 30 days of allotment)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Stamp Duty</td>
                  <td className="px-4 py-3 text-brown-700">Yes — state-specific, paid on increase</td>
                  <td className="px-4 py-3 text-brown-700">No separate duty on allotment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Approval Needed</td>
                  <td className="px-4 py-3 text-brown-700">Ordinary Resolution + AOA check</td>
                  <td className="px-4 py-3 text-brown-700">Board Resolution + Shareholder approval</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Why This Matters When You Raise Capital</h3>
          <p className="text-brown-700 leading-relaxed">
            When an investor commits ₹2 Cr to your company, you cannot issue them shares for ₹2 Cr if your Authorized Capital is only ₹1 Lakh (the default for most freshly incorporated companies). You must first:
          </p>
          <ul className="list-decimal pl-5 mt-2 space-y-1.5 text-brown-700">
            <li>Pass a Board Resolution to increase Authorized Capital.</li>
            <li>Convene an EGM and pass an Ordinary Resolution of shareholders (unless your AOA requires a special resolution).</li>
            <li>Amend the MOA — and possibly the AOA via Form MGT-14, if the AOA caps the authorized limit.</li>
            <li>File Form SH-7 with the MCA within 30 days of the resolution, with prescribed ROC fee + state stamp duty.</li>
            <li>Only then can you allot shares and file Form PAS-3 within 30 days of allotment.</li>
          </ul>
          <p className="text-brown-700 mt-2 leading-relaxed">
            Miss the 30-day SH-7 window: daily penalty of ₹1,000, capped at ₹5 Lakh under Section 64(2). Miss PAS-3: the allotment itself can be deemed invalid.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → Capital Structure → Setup. Enter your existing Authorized Capital (from your MOA) and Paid-Up Capital (from your latest PAS-3). The dashboard displays a capacity bar and a headroom alert if you&apos;re using &gt;80% of Authorized limit.</li>
            <li><strong>Step 2:</strong> Before signing a term sheet, go to Cap Table → Simulate Round. Enter investor commitment and valuation. The platform flags if current capital is sufficient, the exact ₹ amount needed, and estimates stamp duty and MCA fees.</li>
            <li><strong>Step 3:</strong> Click &quot;Increase Authorized Capital&quot;. Founding Legals generates Board &amp; EGM Resolutions, Notices, Amended MOA, pre-filled Form SH-7, and Form MGT-14.</li>
            <li><strong>Step 4:</strong> Once SH-7 is filed, return and click &quot;Issue New Shares&quot;. Enter allottee details, share class, and consideration. The platform auto-generates Form PAS-3 and updates your Register of Members (Form MGT-1).</li>
            <li><strong>Step 5:</strong> Your Compliance Calendar auto-populates 30-day deadlines for both SH-7 and PAS-3, with email and WhatsApp reminders.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The ₹1 Lakh Default Trap
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Nearly every Indian private limited company is incorporated with a default Authorized Capital of ₹1,00,000 (10,000 shares of ₹10 face value). Founders discover the limit only when a Series A investor is ready to wire funds — triggering a frantic 3-week scramble. If your committed round is north of ₹50 Lakh, you almost certainly need to increase Authorized Capital before closing.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Authorize 2× What You Need
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Stamp duty on Authorized Capital increase is a one-time cost. Instead of increasing ₹1 Lakh → ₹5 Lakh today and ₹5 Lakh → ₹50 Lakh in six months, plan two rounds ahead. Keep your Authorized Capital at roughly 2× your projected Paid-Up Capital after the next round.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "ccps-explained-preference-shares",
    title: "CCPS Explained — Why Indian Investors Don't Take Equity Shares",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Almost every institutional investor in India invests through Compulsorily Convertible Preference Shares (CCPS) rather than equity shares — for tax, downside protection, and FEMA reasons. This article explains how CCPS work under the Companies Act, 2013, why your cap table must distinguish Current vs. Fully Diluted ownership, and how Founding Legals automates the conversion math.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>CCPS (Compulsorily Convertible Preference Shares):</strong> A class of preference shares, governed by Section 55 of the Companies Act, 2013, that must convert into equity shares within a specified period (maximum 20 years under Rule 9 of the Companies (Share Capital and Debentures) Rules, 2014).
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            CCPS are the dominant institutional investment instrument in India because they offer:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brown-700">
            <li><strong>Liquidation Preference:</strong> In a downside scenario, CCPS holders are paid out before equity shareholders, under the priority waterfall set in the AOA.</li>
            <li><strong>Anti-Dilution Protection:</strong> If a future round is at a lower valuation (&quot;down round&quot;), the conversion ratio adjusts to protect the investor.</li>
            <li><strong>FEMA Compliance:</strong> Under FEMA 20(R), CCPS qualify as &quot;equity instruments&quot; for FDI purposes — unlike Optionally Convertible Preference Shares (OCPS), which are treated as External Commercial Borrowings (ECB).</li>
            <li><strong>No Voting at Equity Threshold:</strong> Until conversion, CCPS typically carry voting rights only on matters affecting their class.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">CCPS Key Terms — A Founder&apos;s Glossary</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Term</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Face Value</td>
                  <td className="px-4 py-2.5 text-brown-700">Nominal value per CCPS (usually ₹10 or ₹100)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Issue Price</td>
                  <td className="px-4 py-2.5 text-brown-700">Face Value + Premium (the actual price investor pays)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Conversion Ratio</td>
                  <td className="px-4 py-2.5 text-brown-700">How many equity shares each CCPS converts into (1:1 is most common, but adjusts on down rounds)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Conversion Trigger</td>
                  <td className="px-4 py-2.5 text-brown-700">Event that forces conversion — typically IPO, exit, or expiry of tenure</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Liquidation Preference</td>
                  <td className="px-4 py-2.5 text-brown-700">Multiple (1×, 1.5×, 2×) of issue price paid before equity in a liquidation/exit</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Participation Rights</td>
                  <td className="px-4 py-2.5 text-brown-700">&quot;Participating&quot; CCPS get preference plus share in remaining proceeds; &quot;Non-participating&quot; get only one</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Anti-Dilution</td>
                  <td className="px-4 py-2.5 text-brown-700">Broad-Based Weighted Average (founder-friendly) vs. Full Ratchet (investor-friendly)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Current vs. Fully Diluted Ownership</h3>
          <p className="text-brown-700 leading-relaxed mb-3">
            This is where founders get blindsided. Your Current Ownership percentage is calculated only on issued equity shares. Your Fully Diluted Ownership assumes all CCPS, ESOPs, warrants, and convertible notes have converted into equity.
          </p>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-xl">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">View</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What It Shows</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">When It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Current Ownership</td>
                  <td className="px-4 py-2.5 text-brown-700">Only issued equity shares</td>
                  <td className="px-4 py-2.5 text-brown-700">Voting at general meetings</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Fully Diluted Ownership</td>
                  <td className="px-4 py-2.5 text-brown-700">All convertible instruments converted</td>
                  <td className="px-4 py-2.5 text-brown-700">Future exits, valuations, control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → Issue New Shares → Select Class → CCPS. Enter the issue price, face value, conversion ratio, and conversion deadline.</li>
            <li><strong>Step 2:</strong> Configure investor protections via the CCPS Term Builder: Liquidation Preference, Participation, Anti-Dilution, and Conversion Triggers.</li>
            <li><strong>Step 3:</strong> Toggle the &quot;Fully Diluted View&quot; on your cap table. Founding Legals shows two columns side-by-side: Current Ownership % vs. Fully Diluted Ownership %.</li>
            <li><strong>Step 4:</strong> Run the &quot;Down Round Simulator&quot;. Enter a hypothetical lower future valuation. The platform recalculates the new CCPS conversion ratio and dilution impact.</li>
            <li><strong>Step 5:</strong> Auto-generate the SSA and SHA with CCPS-specific clauses, and file Form PAS-3 with the linked valuation report under Rule 11UA.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The 20-Year Conversion Cap
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Rule 9 of the Companies (Share Capital and Debentures) Rules, 2014, CCPS must convert into equity within 20 years from the date of issue. If your termsheet specifies a longer or open-ended conversion window, the share issue is invalid. For FDI-funded CCPS, FEMA 20(R) further restricts conversion price formulas — your CCPS must convert at a price determined upfront or by an internationally accepted pricing methodology.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Negotiate &quot;Broad-Based&quot; Anti-Dilution
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Always push for Broad-Based Weighted Average anti-dilution rather than Full Ratchet. In a down round, Full Ratchet can wipe out 30–40% of founder equity overnight. Broad-Based dilutes proportionally and is the Indian VC market standard.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "maintaining-statutory-register-members",
    title: "Maintaining Your Statutory Register of Members (Form MGT-1)",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "4 minutes",
    lastUpdated: "May 2026",
    summary: "Under Section 88 of the Companies Act, 2013, every Indian company must maintain a Register of Members in Form MGT-1. This is not optional — failure to maintain it attracts a penalty of ₹3 Lakh on the company plus ₹50,000 per officer in default. This article shows how Founding Legals auto-generates MGT-1 every time you update your cap table.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Register of Members (Form MGT-1):</strong> A statutory register, prescribed under Section 88(1)(a) of the Companies Act, 2013 and Rule 3 of the Companies (Management and Administration) Rules, 2014, containing details of every member (shareholder) of the company.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What MGT-1 Must Contain</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Section</th>
                  <th className="px-4 py-3 text-left font-semibold text-brown-900">Required Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Member Identity</td>
                  <td className="px-4 py-3 text-brown-700">Name, Father&apos;s/Mother&apos;s/Spouse&apos;s name, address, email, occupation, PAN, nationality, CIN/LLPIN (if member is body corporate)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Shareholding</td>
                  <td className="px-4 py-3 text-brown-700">Date of becoming member, folio number, share certificate numbers, distinctive numbers</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Share Class</td>
                  <td className="px-4 py-3 text-brown-700">Equity / Preference / CCPS — and class-wise breakdown</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Consideration</td>
                  <td className="px-4 py-3 text-brown-700">Amount paid, calls in arrears, mode of payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Transfers/Transmissions</td>
                  <td className="px-4 py-3 text-brown-700">Date of cessation, mode (transfer/transmission/forfeiture/buy-back)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Nominee</td>
                  <td className="px-4 py-3 text-brown-700">Name and address of nominee, if filed via Form SH-13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Where It Must Be Kept</h3>
          <p className="text-brown-700 leading-relaxed">
            The register must be maintained at the registered office of the company. It may be kept at another place in India only if (a) approved by a special resolution and (b) Form MGT-14 is filed with the ROC.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Inspection Rights</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 94 of the Companies Act, 2013:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-brown-700">
            <li>Members and debenture holders: free inspection during business hours.</li>
            <li>Any other person: inspection on payment of prescribed fee.</li>
            <li>Refusal to allow inspection: penalty of ₹1,000 per day of default.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> The Register of Members is auto-created the moment you set up your cap table. Every shareholder added automatically generates an MGT-1 row.</li>
            <li><strong>Step 2:</strong> Go to Cap Table → Statutory Registers → MGT-1. View the live, MCA-formatted register. Every column required under Rule 3 is pre-populated.</li>
            <li><strong>Step 3:</strong> When you issue new shares via the platform, the register updates within seconds — folio, share certificate, and distinctive numbers are auto-allotted in continuous sequence.</li>
            <li><strong>Step 4:</strong> Click &quot;Export for Inspection&quot; to download the register as a stamped PDF, or share a view-only link with members.</li>
            <li><strong>Step 5:</strong> When a share transfer happens, the register automatically updates the cessation entry for the transferor and creates a new entry for the transferee.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Penalty for Non-Maintenance
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 88(5) of the Companies Act, 2013, failure to maintain the Register of Members attracts a penalty of ₹3,00,000 on the company and ₹50,000 on every officer in default, plus ₹500 per day for continuing default. The MCA actively checks this during inspections and investor due diligence.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Nominees Are Not Optional
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Encourage every shareholder — especially founders — to file a Form SH-13 nomination when they become members. Without a nominee, transmission of shares on death goes through a probate process that can freeze the cap table for 6–18 months. Founding Legals prompts every member to file SH-13 during onboarding.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "creating-esop-pool-vesting-tax",
    title: "Creating an ESOP Pool — Vesting Schedules, Form MGT-14, and Tax Triggers",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "9 minutes",
    lastUpdated: "May 2026",
    summary: "An Employee Stock Option Plan (ESOP) is the most powerful retention tool for early-stage Indian startups — but it's also one of the most over-engineered. This article explains how to set up an ESOP pool under the Companies Act, 2013, structure vesting, file Form MGT-14, and understand the double-taxation event under the Income Tax Act.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>ESOP:</strong> Defined under Section 2(37) of the Companies Act, 2013. The option (not obligation) granted to employees to purchase the company&apos;s shares at a predetermined price (the &quot;Exercise Price&quot;) after a specified vesting period. Governing law: Section 62(1)(b) and Rule 12 of the Companies Rules, 2014.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 5 Lifecycle Stages of ESOPs</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Stage</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What Happens</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Tax Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">1. Grant</td>
                  <td className="px-4 py-2.5 text-brown-700">Company grants options to employee via Grant Letter</td>
                  <td className="px-4 py-2.5 text-brown-700">No tax</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">2. Vesting</td>
                  <td className="px-4 py-2.5 text-brown-700">Options become eligible to exercise (typically 4 years, 1-year cliff)</td>
                  <td className="px-4 py-2.5 text-brown-700">No tax</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">3. Exercise</td>
                  <td className="px-4 py-2.5 text-brown-700">Employee pays Exercise Price; receives shares</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">Tax #1: Perquisite tax on (FMV − Exercise Price) under Sec 17(2)(vi)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">4. Holding</td>
                  <td className="px-4 py-2.5 text-brown-700">Employee holds shares</td>
                  <td className="px-4 py-2.5 text-brown-700">No tax</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">5. Sale</td>
                  <td className="px-4 py-2.5 text-brown-700">Employee sells shares</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">Tax #2: Capital Gains on (Sale Price − FMV at exercise)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Who Can Receive ESOPs (Rule 12)</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-brown-700">
            <li><strong>✅ Eligible:</strong> Permanent employees, Directors (whole-time or non-executive non-independent), employees of subsidiaries/holding companies.</li>
            <li><strong>❌ Not Eligible:</strong> Promoters or persons belonging to the promoter group, Directors holding &gt;10% of equity shares, and Independent Directors.</li>
            <li><strong>Exception:</strong> DPIIT-recognised startups can issue ESOPs to promoters and &gt;10% directors for up to 10 years from incorporation.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Standard Vesting Structures</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Structure</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">How It Works</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">When to Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">4-Year / 1-Year Cliff</td>
                  <td className="px-4 py-2.5 text-brown-700">25% vests after Year 1; remainder vests monthly/quarterly</td>
                  <td className="px-4 py-2.5 text-brown-700">Standard for employees</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Time + Performance</td>
                  <td className="px-4 py-2.5 text-brown-700">Half on time, half on milestones</td>
                  <td className="px-4 py-2.5 text-brown-700">Senior hires</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Accelerated on Exit</td>
                  <td className="px-4 py-2.5 text-brown-700">Single-trigger (sale alone) or double-trigger (sale + termination)</td>
                  <td className="px-4 py-2.5 text-brown-700">C-suite, key talent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Reverse Vesting</td>
                  <td className="px-4 py-2.5 text-brown-700">Founder forfeits unvested shares if they leave</td>
                  <td className="px-4 py-2.5 text-brown-700">Required by most Series A investors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The MCA Filings Sequence</h3>
          <ul className="list-disc pl-5 space-y-1 text-brown-700">
            <li>Board Resolution approving the ESOP Scheme.</li>
            <li>Special Resolution of shareholders approving the pool size and scheme.</li>
            <li>File Form MGT-14 within 30 days of the Special Resolution.</li>
            <li>Grant Letters issued to identified employees.</li>
            <li>On exercise: Form PAS-3 for share allotment within 30 days.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → ESOP → Create New Pool. Enter pool size (% of post-issue capital, typically 8–15%) and the platform calculates dilution impact instantly.</li>
            <li><strong>Step 2:</strong> Generate the ESOP Scheme document pre-drafted under Section 62(1)(b) and Rule 12, with toggles for cliff, vesting, leaver provisions, and acceleration.</li>
            <li><strong>Step 3:</strong> Conduct the Board Meeting and EGM via the Resolutions Module. Generate notices and minutes. Form MGT-14 is pre-filled and ready to file.</li>
            <li><strong>Step 4:</strong> Issue Grant Letters via the platform. Each employee gets a personal ESOP Dashboard showing granted, vesting, and projected exercise values.</li>
            <li><strong>Step 5:</strong> On exercise, the platform calculates perquisite tax, adds it to the employee&apos;s payslip, deducts TDS under Section 192, and files Form PAS-3.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Exercise Tax = Cash Crunch for Employees
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            When an employee exercises ESOPs, they pay the Exercise Price (cash) + Perquisite Tax (cash on the gap between FMV and Exercise Price) — all before they&apos;ve sold a single share. For unlisted startups, the FMV is determined by a Merchant Banker&apos;s valuation under Rule 3(8). Founders must communicate this cash burden upfront — or offer cashless exercise mechanisms in liquidity events.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: DPIIT Tax Deferral for Eligible Startups
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 192(1C) of the Income Tax Act (inserted via Finance Act 2020), employees of DPIIT-recognised eligible startups can defer ESOP perquisite tax for up to 5 years from exercise, sale of shares, or leaving the company — whichever is earliest. This is one of the biggest under-utilised benefits of DPIIT recognition.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "share-transfer-sh-4-guide",
    title: "Share Transfer via Form SH-4 — Selling Founder/Investor Shares",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "Transferring shares in an Indian private limited company isn't as simple as signing a document — it requires Form SH-4, stamp duty under the Indian Stamp Act, 1899, board approval, and updates to your Register of Members. This article walks through the complete process.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Form SH-4 — The Share Transfer Deed prescribed under Section 56(1) of the Companies Act, 2013 read with Rule 11 of the Companies (Share Capital and Debentures) Rules, 2014. Without an executed and stamped SH-4, no share transfer is legally valid.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Mandatory Steps</h3>
          <ol className="list-decimal pl-5 space-y-1.5 text-brown-700">
            <li>Execute Form SH-4 between transferor and transferee, signed by both, with a witness.</li>
            <li>Pay Stamp Duty at 0.25% of consideration or FMV (whichever higher) under Article 62 of Schedule I of the Indian Stamp Act, 1899.</li>
            <li>Lodge SH-4 with the company within 60 days of execution along with the original share certificate.</li>
            <li>Board approves the transfer via resolution under Section 56.</li>
            <li>Endorse the share certificate in the name of the transferee.</li>
            <li>Update Register of Members (MGT-1) with the transferee&apos;s details.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Important Restrictions in Private Companies</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 2(68), private limited companies must include in their AOA a restriction on share transferability. Most AOAs require:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-brown-700">
            <li>Right of First Refusal (ROFR) to existing shareholders.</li>
            <li>Board approval before any transfer to outsiders.</li>
            <li>Promoter lock-in during investor lock-up periods (SHA-driven).</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Stamp Duty Calculation</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Consideration</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Stamp Duty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Equity shares transferred at FMV ₹1,00,000</td>
                  <td className="px-4 py-2.5 text-brown-700">0.25% = ₹250</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Equity shares transferred as gift (no consideration)</td>
                  <td className="px-4 py-2.5 text-brown-700">0.25% of FMV</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Transfer to a relative (limited cases)</td>
                  <td className="px-4 py-2.5 text-brown-700">Concessional rate (state-specific)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → Share Transfer → New Transfer. Select transferor and transferee from existing shareholders or add a new one.</li>
            <li><strong>Step 2:</strong> Enter transfer details: number of shares, consideration, FMV. The platform calculates the 0.25% stamp duty automatically.</li>
            <li><strong>Step 3:</strong> Check ROFR and lock-in compliance. The platform cross-references your AOA and SHA terms, and auto-generates ROFR notices if needed.</li>
            <li><strong>Step 4:</strong> Generate Form SH-4, stamp it via our e-stamping gateway, and route for e-signature.</li>
            <li><strong>Step 5:</strong> Once executed, the platform updates MGT-1 automatically, digitally endorses the share certificate, and stores files in the Vault.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: 60-Day Lodging Deadline
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 56(1), the executed SH-4 must be lodged with the company within 60 days of execution. Miss this, and the transfer is invalid — even if both parties have agreed. The shares legally remain with the transferor, and the consideration may be treated as an &quot;unsecured loan.&quot; Always lodge immediately.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Bundle ROFR Waivers Upfront
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If you&apos;re anticipating multiple founder/early-employee secondary sales over 12 months, get all existing shareholders to sign a blanket ROFR Waiver at the start. It saves you 30-day notice cycles for each transfer — and Indian VCs are usually open to this if structured around their portfolio reviews.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "fdi-compliance-fc-gpr-filing",
    title: "FDI Compliance & FC-GPR Filing — When Foreign Investors Wire Money",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "8 minutes",
    lastUpdated: "May 2026",
    summary: "The moment a foreign investor wires money to your Indian startup, you trigger Foreign Exchange Management Act (FEMA), 1999 compliance — including filing Form FC-GPR with the Reserve Bank of India within 30 days of share allotment. Miss this, and you face compounding fees, penalties up to 3× the contravention amount, and difficulty receiving future FDI. This article walks through the complete FDI flow.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>FDI (Foreign Direct Investment):</strong> Investment by a person resident outside India into an Indian company, governed by FEMA, 1999 read with the Foreign Exchange Management (Non-Debt Instruments) Rules, 2019.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Form FC-GPR (Foreign Currency Gross Provisional Return):</strong> Filed on the RBI&apos;s FIRMS portal (Foreign Investment Reporting and Management System) within 30 days of share allotment to a foreign investor.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The FDI Compliance Sequence</h3>
          <ol className="list-decimal pl-5 space-y-1.5 text-brown-700">
            <li>Receive Funds via banking channel — money lands in INR via Authorised Dealer Bank (AD Bank).</li>
            <li>AD Bank issues KYC + FIRC (Foreign Inward Remittance Certificate) to the company.</li>
            <li>Allot Shares within 60 days of receipt of funds (otherwise refund + penalty).</li>
            <li>Conduct a Rule 11UA Valuation — share price must be ≥ valuation determined by SEBI-registered Merchant Banker.</li>
            <li>Pass Board Resolution and Issue Share Certificates.</li>
            <li>File Form PAS-3 with MCA within 30 days of allotment.</li>
            <li>File Form FC-GPR on FIRMS portal within 30 days of allotment.</li>
            <li>Receive Unique Identification Number (UIN) from RBI confirming compliance.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Sectoral Caps &amp; Approval Route</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Route</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What It Means</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Automatic Route</td>
                  <td className="px-4 py-2.5 text-brown-700">No prior approval needed; just file FC-GPR post-allotment</td>
                  <td className="px-4 py-2.5 text-brown-700">IT, SaaS, e-commerce B2B, manufacturing, fintech (non-deposit)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Government Route</td>
                  <td className="px-4 py-2.5 text-brown-700">Prior approval needed from concerned Ministry via FIFP portal</td>
                  <td className="px-4 py-2.5 text-brown-700">Defence (&gt;74%), Print media, Broadcasting, Multi-brand retail</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Sectoral Caps Apply</td>
                  <td className="px-4 py-2.5 text-brown-700">FDI allowed only up to specified % of paid-up capital</td>
                  <td className="px-4 py-2.5 text-brown-700">Insurance (74%), Banking (private 74%), Pension (49%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Pricing Guidelines (FEMA NDI Rules)</h3>
          <p className="text-brown-700 leading-relaxed">
            For unlisted Indian companies, the issue price to a foreign investor must be:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brown-700">
            <li>Not less than the FMV determined by a SEBI-registered Merchant Banker using the Discounted Cash Flow (DCF) method, or any internationally accepted pricing methodology for arm&apos;s length transactions.</li>
            <li>For transfers of shares: Resident-to-Non-Resident (price not lower than FMV); Non-Resident-to-Resident (price not higher than FMV).</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → Foreign Investor → New Allotment. Enter the investor&apos;s country, share class, investment amount, and the AD Bank.</li>
            <li><strong>Step 2:</strong> Platform runs the Sectoral Cap Check — confirms your sector is under Automatic Route and FDI cap is not breached.</li>
            <li><strong>Step 3:</strong> Upload the FIRC and KYC documents issued by your AD Bank. The platform validates the inward remittance reference and currency conversion rate.</li>
            <li><strong>Step 4:</strong> Generate the Rule 11UA Valuation Report through the platform&apos;s empanelled Merchant Banker network (typical turnaround: 5–7 days).</li>
            <li><strong>Step 5:</strong> On allotment, the platform files Form PAS-3 with MCA and Form FC-GPR on the FIRMS portal (both within 30 days).</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: 60-Day Allotment Rule
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Rule 9 of FEMA NDI Rules, shares must be allotted within 60 days of receipt of foreign funds. If you fail, you must refund the funds within 75 days of receipt. Holding foreign money in your bank account beyond 60 days without allotment is a direct FEMA contravention attracting compounding fees up to 3× the contravention amount.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Use a Single AD Bank for All FDI
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Choose one Authorised Dealer Bank (HDFC, ICICI, Axis, Kotak, etc.) for all FDI inflows from day one. They maintain a continuous FIRMS user ID for your CIN, simplify FC-GPR filing, and handle compounding applications if anything goes wrong. Switching banks mid-round complicates the audit trail.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "director-appointments-dir-12-kyc",
    title: "Director Appointments — DIR-3 KYC, DIN, and Form DIR-12",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Adding or removing a director on your Indian private limited company is a strictly regulated process under the Companies Act, 2013. It involves DIN (Director Identification Number), DSC (Digital Signature Certificate), DIR-3 KYC, Form DIR-12, and Board/Shareholder resolutions. This article covers the full lifecycle.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>DIN (Director Identification Number):</strong> Defined under Section 153 of the Companies Act, 2013. A unique 8-digit number issued by the MCA to every individual intending to become a director. Once issued, it&apos;s lifetime-valid.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>DSC (Digital Signature Certificate):</strong> A Class 3 digital certificate issued under the IT Act, 2000, required for all MCA filings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 4 Essential Forms</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Form</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Purpose</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DIR-3</td>
                  <td className="px-4 py-2.5 text-brown-700">Application for DIN (for new directors who don&apos;t have one)</td>
                  <td className="px-4 py-2.5 text-brown-700">One-time, before appointment</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DIR-3 KYC</td>
                  <td className="px-4 py-2.5 text-brown-700">Annual KYC of all existing DIN holders</td>
                  <td className="px-4 py-2.5 text-brown-700">30th September every year</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DIR-12</td>
                  <td className="px-4 py-2.5 text-brown-700">Notice of appointment/cessation of director</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">30 days from change</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DIR-11</td>
                  <td className="px-4 py-2.5 text-brown-700">Notice by director of their own resignation (independent filing)</td>
                  <td className="px-4 py-2.5 text-brown-700">30 days from resignation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Penalties for Non-Compliance</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Default</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DIR-3 KYC not filed by 30th Sept</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">DIN deactivated + ₹5,000 reactivation fee</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DIR-12 not filed within 30 days</td>
                  <td className="px-4 py-2.5 text-brown-700">₹500/day, up to ₹5 Lakh</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">No DIN holding directorship</td>
                  <td className="px-4 py-2.5 text-brown-700">Up to 6 months imprisonment + ₹5 Lakh fine under Section 159</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Director Disqualification (Section 164)</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">5-year ban from any company directorship</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Director Disqualification Triggers (Section 164)</h3>
          <p className="text-brown-700 leading-relaxed">
            A director becomes automatically disqualified if:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brown-700">
            <li>They are an undischarged insolvent or of unsound mind (declared by court).</li>
            <li>Convicted of an offence involving moral turpitude (7+ years imprisonment).</li>
            <li>Their company has not filed financial statements / annual returns (Form AOC-4 / MGT-7) for any continuous period of 3 financial years.</li>
            <li>They have not paid any call on shares for 6 months.</li>
          </ul>
          <p className="text-brown-700 mt-2 leading-relaxed">
            Disqualification #3 is the most common founder trap — missing 3 years of MGT-7 deactivates the DIN across all companies the director sits on.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → Directors → Add Director. Enter PAN, name, address, nationality. If they don&apos;t have a DIN, the platform initiates the DIR-3 application with auto-attached identity proofs.</li>
            <li><strong>Step 2:</strong> Once DIN is allotted, conduct the Board Meeting approving appointment (Section 152) and obtain consent in Form DIR-2 from the director.</li>
            <li><strong>Step 3:</strong> File Form DIR-12 within 30 days, signed digitally by an existing director using their DSC.</li>
            <li><strong>Step 4:</strong> Set up the Annual DIR-3 KYC Reminder. Platform sends notifications to every DIN holder in Aug/Sept — and auto-files the KYC return if you provide consent.</li>
            <li><strong>Step 5:</strong> Use the Director Disqualification Tracker — the platform monitors filings continuously and flags any 2-year overdue status before the 3-year trigger hits.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: One Missed MGT-7 Cascades Across Boards
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 164(2)(a), if your company misses MGT-7 for 3 consecutive years, every director is disqualified for 5 years from every company they sit on — including other investor portfolio companies and family businesses. This has triggered mass resignations and forced cleanups across the Indian startup ecosystem. Always file MGT-7 on time.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Maintain a &quot;Director Compliance Card&quot;
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Every director should maintain a one-page tracker: DIN active status, DIR-3 KYC last filed date, list of all companies where they are a director, and AOC-4/MGT-7 status of each. Founding Legals&apos; Director Dashboard auto-generates this card for each director and shares it with them monthly.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "annual-roc-filings-aoc-4-mgt-7",
    title: "Annual ROC Filings — AOC-4, MGT-7 & DPT-3 Deadlines",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Every Indian private limited company — even one with zero revenue — must file annual returns with the Registrar of Companies (ROC). The three flagship filings are Form AOC-4 (financial statements), Form MGT-7/7A (annual return), and Form DPT-3 (return of deposits). Missing these is the single most common cause of startup director disqualification under Section 164.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            The 3 Mandatory Annual ROC Filings:
          </p>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm mt-2">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Form</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What It Contains</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Statutory Basis</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">AOC-4</td>
                  <td className="px-4 py-2.5 text-brown-700">Audited Balance Sheet, P&amp;L, Auditor&apos;s Report, Board Report</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 137, Companies Act</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">30 days from AGM (by 29th Oct typically)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">MGT-7 / 7A</td>
                  <td className="px-4 py-2.5 text-brown-700">Annual Return: shareholding, directors, changes</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 92, Companies Act</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">60 days from AGM (by 28th Nov typically)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">DPT-3</td>
                  <td className="px-4 py-2.5 text-brown-700">Return of deposits &amp; exempted loans (incl. from directors)</td>
                  <td className="px-4 py-2.5 text-brown-700">Rule 16, Deposit Rules</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">30th June every year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brown-500 mt-2">Form MGT-7A is the simplified version for One Person Companies (OPC) and Small Companies.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Other Trigger-Based Filings</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Form</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Trigger</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">PAS-3</td>
                  <td className="px-4 py-2 text-brown-700">Share allotment</td>
                  <td className="px-4 py-2 text-brown-700">30 days from allotment</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">SH-7</td>
                  <td className="px-4 py-2 text-brown-700">Increase in Authorized Capital</td>
                  <td className="px-4 py-2 text-brown-700">30 days from resolution</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">MGT-14</td>
                  <td className="px-4 py-2 text-brown-700">Special resolutions, certain board resolutions</td>
                  <td className="px-4 py-2 text-brown-700">30 days from resolution</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">DIR-12</td>
                  <td className="px-4 py-2 text-brown-700">Director appointment/cessation</td>
                  <td className="px-4 py-2 text-brown-700">30 days from change</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">CHG-1 / CHG-4</td>
                  <td className="px-4 py-2 text-brown-700">Creation / Satisfaction of Charge</td>
                  <td className="px-4 py-2 text-brown-700">30 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">ADT-1</td>
                  <td className="px-4 py-2 text-brown-700">Auditor appointment</td>
                  <td className="px-4 py-2 text-brown-700">15 days from AGM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Penalties for Late Filing</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-brown-700 text-sm">
            <li><strong>AOC-4 &amp; MGT-7:</strong> ₹100/day per default, no upper cap.</li>
            <li><strong>DPT-3:</strong> ₹5,000 + ₹500/day continuing.</li>
            <li><strong>Director Disqualification:</strong> If AOC-4 or MGT-7 is missed for 3 consecutive years, Section 164(2)(a) kicks in.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Compliance Calendar</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Month</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Filing Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">June 30</td>
                  <td className="px-4 py-2 text-brown-700">DPT-3 (Return of Deposits)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">September 30</td>
                  <td className="px-4 py-2 text-brown-700">DIR-3 KYC / AGM deadline</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">October 29</td>
                  <td className="px-4 py-2 text-[#CD412B] font-semibold">AOC-4 (30 days from AGM)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">November 28</td>
                  <td className="px-4 py-2 text-[#CD412B] font-semibold">MGT-7 / MGT-7A (60 days from AGM)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> The Compliance Calendar shows all upcoming MCA deadlines, colour-coded by urgency.</li>
            <li><strong>Step 2:</strong> For AOC-4, the platform integrates with your accounting software to pull audited financials. The Board Report and statements are auto-drafted.</li>
            <li><strong>Step 3:</strong> For MGT-7, the platform auto-populates shareholding, directors, and change-events from your Cap Table.</li>
            <li><strong>Step 4:</strong> For DPT-3, the platform identifies all exempted deposits (director loans, customer advances) and prepares the return.</li>
            <li><strong>Step 5:</strong> Each filing is reviewed by a Company Secretary (CS) before submission to the MCA21 portal. You receive the Filed SRN copy within 24 hours.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The 3-Year Disqualification Cliff
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 164(2)(a), if your company fails to file AOC-4 OR MGT-7 for any 3 consecutive financial years, every director is automatically disqualified for 5 years from all companies — and their DIN is deactivated. The MCA runs this check annually after 31st March. Once disqualified, recovery requires NCLT proceedings under Section 252.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Hold Your AGM by 30th September
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Many founders procrastinate the AGM until November/December. But the AGM must be held within 6 months of FY end (i.e., by 30th September) under Section 96. Delaying the AGM by even a day cascades all downstream deadlines (AOC-4, MGT-7) and triggers their late-filing penalties. Block 25th–30th September on your calendar every year.
          </p>
        </div>
      </div>
    ),
  },

  // ==========================================
  // MODULE 3: TEAM, AGREEMENTS & POLICIES
  // ==========================================
  {
    id: "ironclad-ip-assignment-clause",
    title: "The Ironclad IP Assignment Clause Every Indian Startup Needs",
    moduleId: "team-agreements-policies",
    moduleName: "Team, Agreements & Policies",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Under the Indian Copyright Act, 1957, the person who creates code, design, or content owns the copyright — not the company that pays them — unless there is an explicit written assignment. This is the single biggest IP risk for Indian startups, and it's why every founder, employee, and contractor agreement on Founding Legals contains a non-deletable IP Assignment clause.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Section 17 of the Indian Copyright Act, 1957:</strong> The author of a work is the first owner of the copyright. The &quot;employer becomes owner&quot; rule applies only to works created under a &quot;contract of service&quot; (employment), and even then, only for limited works. For software, design, and product work, courts have consistently held that express written assignment is required.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Section 18 of the Indian Copyright Act, 1957:</strong> Copyright can be assigned only in writing, signed by the assignor, identifying the work, the rights assigned, the duration, and the territory.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What This Means in Practice</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Scenario</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Who Owns the IP Without Assignment?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Founder writes the initial product code before incorporation</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">The founder personally, not the company</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Full-time employee writes code</td>
                  <td className="px-4 py-2.5 text-brown-700">Ambiguous — depends on whether agreement has assignment clause</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Contractor / freelancer / agency builds a feature</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">The contractor, period</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Intern designs your logo</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">The intern, period</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Co-founder leaves and forks the codebase</td>
                  <td className="px-4 py-2.5 text-brown-700">They legally can, if no assignment was signed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 5 Elements of a Court-Enforceable IP Assignment Clause</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-brown-700">
            <li><strong>Present Tense Assignment:</strong> Language like &quot;hereby assigns&quot; rather than &quot;agrees to assign&quot;. Courts reject future-tense clauses as mere promises.</li>
            <li><strong>Specific Work Description:</strong> Identify works broadly: copyrights, patents, trademarks, source code, object code, databases.</li>
            <li><strong>Worldwide, Perpetual, Exclusive:</strong> Territory, duration, and exclusivity must be explicit under Section 19 of the Copyright Act.</li>
            <li><strong>Moral Rights Waiver:</strong> Waiver of &quot;moral rights&quot; under Section 57 should be included.</li>
            <li><strong>Pre-Incorporation Carve-Out:</strong> A Founder IP Assignment Agreement must transfer all pre-incorporation IP from founders to the company immediately after incorporation.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Every template on Founding Legals (Founder, Employment, Consultant, Internship, Vendor Agreement) contains a non-editable IP Assignment clause.</li>
            <li><strong>Step 2:</strong> The system prompts you to execute a Founder IP Assignment Agreement that transfers all pre-incorporation MVP work product to the company.</li>
            <li><strong>Step 3:</strong> When onboarding, select the agreement type. The IP Assignment clause is pre-locked; you can review but cannot delete it.</li>
            <li><strong>Step 4:</strong> For consultants and contractors, the platform additionally includes a &quot;Work Made for Hire&quot; acknowledgment and a separate Deed of Assignment.</li>
            <li><strong>Step 5:</strong> Use the IP Registry tab to log every codebase, trademark, and patent — linked to the relevant agreements, ready for due diligence.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The Pre-Incorporation IP Gap
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Founders typically build the MVP before incorporating the company. Without a Founder IP Assignment Agreement executed post-incorporation, that MVP legally belongs to the founders as individuals — not the company. If a co-founder later leaves, they can theoretically demand royalties or fork the product. Every Indian VC checks for this document during diligence. Execute it on day 1.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Assign Before You Pay
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Always have the IP Assignment signed before the first invoice is paid to a contractor or first salary is paid to an employee. The &quot;consideration&quot; (payment) is what makes the assignment enforceable under Section 25 of the Indian Contract Act. Sign after payment, and you weaken your enforceability claim.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "why-post-employment-non-competes-dont-work",
    title: "Why Post-Employment Non-Competes Don't Work in India — And What to Use Instead",
    moduleId: "team-agreements-policies",
    moduleName: "Team, Agreements & Policies",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "If your employment agreement says \"the employee shall not work for a competitor for 2 years after leaving,\" that clause is void and unenforceable in India under Section 27 of the Indian Contract Act, 1872. This article explains why, and shows the three clauses you can enforce — Confidentiality, Non-Solicitation, and Garden Leave.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Section 27 of the Indian Contract Act, 1872 — &quot;Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void.&quot;
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            The only statutory exception is the sale of goodwill. Employment relationships are not an exception. Indian courts — including the Supreme Court in Niranjan Shankar Golikari v. Century Spinning (1967) and Wipro v. Beckman Coulter (2006) — have consistently held:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-brown-700">
            <li><strong>During employment:</strong> reasonable non-compete is valid (employee owes duty of fidelity).</li>
            <li><strong>After employment:</strong> non-compete is void, regardless of duration, geography, or compensation.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What You Can Enforce Post-Employment</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Clause</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Enforceability</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Statutory Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Post-Employment Non-Compete</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">❌ Void under Section 27</td>
                  <td className="px-4 py-2.5 text-brown-700">Indian Contract Act, 1872</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Confidentiality / Trade Secrets</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Fully enforceable</td>
                  <td className="px-4 py-2.5 text-brown-700">Common law + IT Act, 2000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Non-Solicitation of Clients</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Enforceable if reasonable (12–24 months)</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 27 exception via judicial precedent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Non-Solicitation of Employees</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Enforceable if reasonable</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 27 exception via judicial precedent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Garden Leave (during notice period)</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Enforceable (during employment)</td>
                  <td className="px-4 py-2.5 text-brown-700">Contractual</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">IP Assignment</td>
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Fully enforceable</td>
                  <td className="px-4 py-2.5 text-brown-700">Copyright Act, 1957</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> All Employment Agreements generated omit post-employment non-compete clauses by default to keep the rest of the contract enforceable.</li>
            <li><strong>Step 2:</strong> Instead, the platform inserts three enforceable protections: Confidentiality, Non-Solicitation of Clients (12–24 months), and Non-Solicitation of Employees (12 months).</li>
            <li><strong>Step 3:</strong> Go to Team → Agreement Builder → Protections. Toggle and customize. The platform shows an &quot;Enforceability Score&quot; in real-time.</li>
            <li><strong>Step 4:</strong> For senior executives, enable the Garden Leave add-on, which requires the employee to remain on payroll but stop working during notice (up to 6 months).</li>
            <li><strong>Step 5:</strong> Combine with the IP Assignment clause (always-on) and the POSH Compliance module to create a complete protection stack.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: A Void Non-Compete Can Backfire
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Including an unenforceable non-compete doesn&apos;t just fail — it can damage your overall litigation position. Courts view founders who insert such clauses unfavourably, treating it as evidence of an attempt to suppress employee mobility. If you&apos;re litigating a confidentiality breach with an aggressive non-compete in the same contract, expect the judge to be skeptical.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Make Non-Solicit Specific and Recent
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            A non-solicit clause that says &quot;shall not solicit any client of the company&quot; is too broad. Narrow it to &quot;any client with whom the employee had material contact in the 12 months prior to termination.&quot; Indian courts uphold specific, recent, reasonable non-solicits — and strike down vague, sweeping ones.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "posh-act-compliance-10-employees",
    title: "POSH Act Compliance — The 10-Employee Trigger Every Founder Must Know",
    moduleId: "team-agreements-policies",
    moduleName: "Team, Agreements & Policies",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "The moment your startup reaches 10 or more employees (including contractors, interns, and part-timers), you are legally mandated to comply with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 — known as the POSH Act. Non-compliance carries a penalty of ₹50,000, escalating to cancellation of business licence. This article shows exactly what you must do.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>POSH Act, 2013:</strong> A central legislation enacted to prevent and redress sexual harassment of women at the workplace. It applies to every workplace in India — corporate, NGO, household, public, private — regardless of sector.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Section 4 of the POSH Act:</strong> Every employer with 10 or more employees must constitute an Internal Complaints Committee (ICC) at every office or branch.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What Counts as an &quot;Employee&quot; Under POSH</h3>
          <p className="text-brown-700 leading-relaxed mb-3">
            The POSH definition is deliberately broad and includes: Full-time employees, Part-time employees, Contract workers, Daily wage workers, Probationers, Trainees, Interns, and Consultants (if regular).
          </p>
          <p className="text-brown-700 leading-relaxed">
            This means a startup with 5 full-time employees, 3 interns, and 2 consultants already crosses the 10-employee threshold.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Mandatory Compliance Requirements</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Requirement</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Statutory Basis</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Draft a POSH Policy</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 19(b), POSH Act</td>
                  <td className="px-4 py-2.5 text-brown-700">Day 1 of crossing 10 employees</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Constitute an ICC</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 4, POSH Act</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">Within 30 days of crossing 10 employees</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Conduct Annual POSH Training</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 19(c), POSH Act</td>
                  <td className="px-4 py-2.5 text-brown-700">At least once per year</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Display POSH Policy at workplace</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 19(b), POSH Act</td>
                  <td className="px-4 py-2.5 text-brown-700">Permanent — at office + on intranet</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">File Annual Report with District Officer</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 21, POSH Act</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">By 31st January each year</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Include POSH status in Board Report</td>
                  <td className="px-4 py-2.5 text-brown-700">Companies (Accounts) Rules, 2014</td>
                  <td className="px-4 py-2.5 text-brown-700">Annual filing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">ICC Composition — The 4 Mandatory Members</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 4(2) of the POSH Act, the ICC must have:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-brown-700">
            <li><strong>Presiding Officer:</strong> A senior woman employee.</li>
            <li><strong>At least 2 Internal Members:</strong> From among employees, preferably committed to women&apos;s causes or with legal/social work experience.</li>
            <li><strong>One External Member:</strong> From an NGO/association working on women&apos;s rights. This is mandatory and non-negotiable.</li>
            <li>At least 50% of ICC members must be women. Appointed for a 3-year term.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Penalties for Non-Compliance</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-md">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Default</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Penalty (Section 26)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Failure to constitute ICC</td>
                  <td className="px-4 py-2 text-[#CD412B] font-semibold">₹50,000 fine</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Repeat offence</td>
                  <td className="px-4 py-2 text-[#CD412B] font-semibold">Double penalty + cancellation of licence</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Failure to file Annual Report / display policy</td>
                  <td className="px-4 py-2 text-brown-700">₹50,000 fine</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Team → Compliance Center → POSH. The dashboard counts headcount and flashes a red alert when you cross 10.</li>
            <li><strong>Step 2:</strong> Click &quot;Generate POSH Policy&quot;. The platform creates a 14-page POSH Policy customized to your industry.</li>
            <li><strong>Step 3:</strong> Use the ICC Builder to constitute your committee, generate letters, and connect with empanelled NGO professionals at fixed rates (₹15,000–₹30,000/year).</li>
            <li><strong>Step 4:</strong> Roll out the POSH Training Module to all employees — a recorded course with quiz, auto-issuing completion certificates.</li>
            <li><strong>Step 5:</strong> On 1st January, the platform auto-prompts the ICC to file the Annual Report to the District Officer before the 31st January deadline.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: ICC Without External Member = Invalid
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            A common mistake: founders constitute an ICC with 3 internal employees and skip the External Member. An ICC without an external NGO/expert member is deemed invalid, every inquiry it conducts can be set aside on appeal, and the company is treated as having no ICC at all under Section 26. Always include the external member.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Don&apos;t Wait Till You Hit 10
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Even if you have 5 employees today, draft the POSH Policy now. It establishes a written workplace standard, is auto-included in agreements, and demonstrates good governance during investor diligence — which Indian VCs increasingly evaluate. POSH compliance is now a standard CP in Series A term sheets.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "founders-agreement-vesting-exits",
    title: "The Founder's Agreement — Vesting, Roles, and Co-Founder Exits",
    moduleId: "team-agreements-policies",
    moduleName: "Team, Agreements & Policies",
    readingTime: "8 minutes",
    lastUpdated: "May 2026",
    summary: "The Founder's Agreement (also called Co-Founders Agreement) is the single most important contract between you and your co-founders — yet it's the one Indian founders most often skip. It handles founder vesting, role definitions, decision-making, IP assignment, and what happens if a co-founder leaves. This article shows what it must contain.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Founder&apos;s Agreement:</strong> A contract between co-founders, governed by the Indian Contract Act, 1872, defining the rights, obligations, equity allocation, vesting, and exit mechanics among them. Unlike SHA, it focuses on founder-to-founder relations, not company-to-investor relations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 10 Mandatory Clauses</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Clause</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">1. Equity Split</td>
                  <td className="px-4 py-2.5 text-brown-700">Initial percentage held by each founder; locks the cap table foundation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">2. Vesting Schedule</td>
                  <td className="px-4 py-2.5 text-brown-700">4-year vesting with 1-year cliff (Indian VC market norm); reverse vesting protects against co-founder leaving early</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">3. Roles &amp; Responsibilities</td>
                  <td className="px-4 py-2.5 text-brown-700">CEO / CTO / CPO clearly defined; prevents duplication and disputes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">4. Decision-Making</td>
                  <td className="px-4 py-2.5 text-brown-700">Operational (CEO call) vs. Strategic (unanimous/majority); reserved matters list</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">5. IP Assignment</td>
                  <td className="px-4 py-2.5 text-brown-700">All pre-incorporation IP assigned to company; survives departure</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">6. Confidentiality</td>
                  <td className="px-4 py-2.5 text-brown-700">Survives the contract; protects trade secrets indefinitely</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">7. Non-Compete (During Tenure)</td>
                  <td className="px-4 py-2.5 text-brown-700">Enforceable during employment; post-departure is void under Section 27</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">8. Non-Solicitation</td>
                  <td className="px-4 py-2.5 text-brown-700">Of employees and clients, 12–24 months post-departure</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">9. Leaver Provisions</td>
                  <td className="px-4 py-2.5 text-brown-700">Good Leaver / Bad Leaver definitions and equity forfeiture</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">10. Dispute Resolution</td>
                  <td className="px-4 py-2.5 text-brown-700">Arbitration under Arbitration &amp; Conciliation Act, 1996; specified seat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Founder Vesting — The Indian VC Standard</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Element</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Standard</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Total Vesting Period</td>
                  <td className="px-4 py-2 text-brown-700">4 years</td>
                  <td className="px-4 py-2 text-brown-700">Industry norm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Cliff</td>
                  <td className="px-4 py-2 text-brown-700">1 year</td>
                  <td className="px-4 py-2 text-brown-700">Forfeit all shares if exit before 1 year</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Post-Cliff</td>
                  <td className="px-4 py-2 text-brown-700">Monthly / quarterly</td>
                  <td className="px-4 py-2 text-brown-700">Smooth vesting; no second cliff</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Acceleration</td>
                  <td className="px-4 py-2 text-brown-700">Single or Double-trigger</td>
                  <td className="px-4 py-2 text-brown-700">Protects founders on M&amp;A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Reverse Vesting</td>
                  <td className="px-4 py-2 text-brown-700">Company buyback option</td>
                  <td className="px-4 py-2 text-brown-700">Standard Indian Series A requirement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Good Leaver vs. Bad Leaver</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Category</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Definition</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Consequence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 text-olive-600">Good Leaver</td>
                  <td className="px-4 py-2.5 text-brown-700">Departs due to death, disability, retirement, or termination without cause</td>
                  <td className="px-4 py-2.5 text-brown-700">Retains all vested shares; unvested forfeit at FMV or face value</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 text-[#CD412B]">Bad Leaver</td>
                  <td className="px-4 py-2.5 text-brown-700">Resigns voluntarily before tenure, or terminated for cause (fraud, misconduct, breach)</td>
                  <td className="px-4 py-2.5 text-brown-700">Loses some/all vested shares too; often forfeits at face value (₹10)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Team → Founder&apos;s Agreement → Setup. Add each co-founder, their initial equity split, role, and start date.</li>
            <li><strong>Step 2:</strong> Configure Vesting: Total period (default 4 years), Cliff (default 12 months), frequency (monthly/quarterly), and acceleration triggers.</li>
            <li><strong>Step 3:</strong> Define Reserved Matters — strategic decisions requiring all-founder unanimous approval (e.g., M&amp;A, fundraise, key hires, equity dilution).</li>
            <li><strong>Step 4:</strong> Toggle the Reverse Vesting clause — converts already-held founder shares into buyback-eligible structure.</li>
            <li><strong>Step 5:</strong> Generate, stamp (₹500 under Maharashtra Stamp Act), and e-sign via Aadhaar. The agreement is auto-linked to your Cap Table.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Verbal Founder Agreements Always End Badly
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            60% of Indian startup founder disputes — including high-profile ones reaching NCLT and the High Courts — stem from the absence of a written founder&apos;s agreement. A handshake agreement is technically valid under Section 9 of the Contract Act, but evidentially impossible to enforce. Sign a written, stamped, e-signed Founder&apos;s Agreement before the first product line of code.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Sign It Before Equal Splits Get Awkward
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Founders often delay this conversation because &quot;we&apos;re all equals.&quot; But by Year 2, roles, contributions, and motivation diverge — and renegotiating equity then is brutal. Sign the Founder&apos;s Agreement on Day 1 with equal splits and identical vesting, so the system is fair, predictable, and renegotiable later only by mutual amendment.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "maternity-benefit-act-paid-leave",
    title: "Maternity Benefit Act — 26 Weeks Paid Leave & ICC Coordination",
    moduleId: "team-agreements-policies",
    moduleName: "Team, Agreements & Policies",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "Under the Maternity Benefit (Amendment) Act, 2017, every Indian employer with 10 or more employees must provide 26 weeks of paid maternity leave to eligible women employees. This article covers eligibility, payment, crèche obligations, and how Founding Legals automates leave tracking.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Maternity Benefit Act, 1961 (amended in 2017):</strong> Provides for paid maternity leave, medical bonus, work-from-home options, crèche facility, and protection from dismissal during maternity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Eligibility Criteria</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Requirement</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Threshold</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Applicability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employer Size</td>
                  <td className="px-4 py-2.5 text-brown-700">10+ employees</td>
                  <td className="px-4 py-2.5 text-brown-700">Any office or workplace in India</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employee Service</td>
                  <td className="px-4 py-2.5 text-brown-700">Worked 80+ days</td>
                  <td className="px-4 py-2.5 text-brown-700">In the 12 months preceding expected delivery</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Number of Children</td>
                  <td className="px-4 py-2.5 text-brown-700">26 weeks</td>
                  <td className="px-4 py-2.5 text-brown-700">For first 2 children (12 weeks from third child onwards)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Adoptive/Surrogacy Mother</td>
                  <td className="px-4 py-2.5 text-brown-700">12 weeks</td>
                  <td className="px-4 py-2.5 text-brown-700">From date of handing over child (child must be &lt;3 months old)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Payment &amp; Other Benefits</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Benefit</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Maternity Pay</td>
                  <td className="px-4 py-2.5 text-brown-700">Full daily wages × 26 weeks (average of last 3 months)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Medical Bonus</td>
                  <td className="px-4 py-2.5 text-brown-700">₹3,500 (if no employer-paid pre-natal facility)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Pre-natal Leave</td>
                  <td className="px-4 py-2.5 text-brown-700">Up to 8 weeks before delivery</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Nursing Breaks</td>
                  <td className="px-4 py-2.5 text-brown-700">2 × 15-min breaks daily until child is 15 months old</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Crèche Facility</td>
                  <td className="px-4 py-2.5 text-brown-700">Mandatory if 50+ employees; 4 visits/day allowed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Work-from-Home</td>
                  <td className="px-4 py-2.5 text-brown-700">Permitted post-26 weeks, by mutual agreement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Protection from Dismissal</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 12 of the Act, dismissal of a woman during her maternity period or due to her pregnancy is illegal. Any termination notice given during maternity is void. Penalty: imprisonment 3 months to 1 year + fine up to ₹5,000.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Team → Policies → Maternity Policy. Generate a Maternity Benefit Policy customised to headcount, working hours, etc.</li>
            <li><strong>Step 2:</strong> When an eligible employee notifies pregnancy, go to Payroll → Leave → Maternity Leave. Enter expected delivery date — the platform calculates the 26-week paid leave window.</li>
            <li><strong>Step 3:</strong> The platform auto-continues full salary payment through the 26 weeks (showing it as &quot;Maternity Pay&quot; on payslips) including all TDS and EPF deductions.</li>
            <li><strong>Step 4:</strong> Generate return-to-work documentation including nursing breaks, work-from-home eligibility, and a post-leave check-in workflow.</li>
            <li><strong>Step 5:</strong> If headcount crosses 50, the platform prompts you to set up a Crèche Policy (in-house or tied-up) and adds the cost provision to monthly forecasts.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: 80-Day Eligibility Is Not Optional
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Many founders mistakenly think maternity benefits apply only to permanent employees. The law applies to any woman who has worked 80+ days in the preceding 12 months — including contract employees and probationers. Denying benefits citing &quot;probation&quot; or &quot;contract&quot; is a violation under Section 21 with personal liability on the employer.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Frame Maternity as a Retention Investment
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The cost of 26 weeks of paid maternity leave is typically lower than the cost of replacing a senior employee. Indian startups with progressive maternity policies (extended pay, return-to-work coaching, flexible hours post-return) report 70%+ retention rates of women employees vs. the industry average of 40%. Make it a retention asset, not a compliance burden.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "shops-establishment-act-registration",
    title: "Shops & Establishment Act — The State Registration You Cannot Skip",
    moduleId: "team-agreements-policies",
    moduleName: "Team, Agreements & Policies",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Every Indian commercial establishment — including SaaS startups operating from a single room with 2 employees — must register under the state-specific Shops and Establishments Act within 30 days of starting operations. This article shows how registration works, what it covers, and why most early-stage founders forget it.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Shops and Establishments Act:</strong> A state-level legislation (each state has its own version) regulating working hours, leave, wages, holidays, and conditions of service for employees in commercial establishments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Who Must Register</h3>
          <p className="text-brown-700 leading-relaxed">
            Every commercial establishment, regardless of size — including: Private limited companies, LLPs, partnerships, SaaS / tech / consulting / service companies, and e-commerce warehouses.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Registration Timeline &amp; Documents</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 bg-cream-dark w-1/4">Deadline</td>
                  <td className="px-4 py-2.5 text-brown-700">Within 30 days of commencing business</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 bg-cream-dark">Authority</td>
                  <td className="px-4 py-2.5 text-brown-700">Labour Department of the State</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 bg-cream-dark">Documents Needed</td>
                  <td className="px-4 py-2.5 text-brown-700">COI/Partnership Deed, PAN, Address Proof (rent agreement/utility bill), Employee Details, Photographs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 bg-cream-dark">Fee</td>
                  <td className="px-4 py-2.5 text-brown-700">State-specific, typically ₹150–₹15,000 (varies by employee count)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900 bg-cream-dark">Renewal</td>
                  <td className="px-4 py-2.5 text-brown-700">Annual / 5-yearly (state-specific)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What the Act Regulates</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Area</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Typical Rule (Varies by State)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Working Hours</td>
                  <td className="px-4 py-2.5 text-brown-700">8–9 hours/day, 48 hours/week</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Overtime</td>
                  <td className="px-4 py-2.5 text-brown-700">Beyond standard hours; pay at 2× normal rate</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Weekly Off</td>
                  <td className="px-4 py-2.5 text-brown-700">At least 1 full day off per week</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Annual Leave</td>
                  <td className="px-4 py-2.5 text-brown-700">15–21 paid leaves; 7–12 casual/sick leaves</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Wage Payment Cycle</td>
                  <td className="px-4 py-2.5 text-brown-700">Monthly, by 7th of next month (Payment of Wages Act, 1936)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Notice of Termination</td>
                  <td className="px-4 py-2.5 text-brown-700">14 days to 1 month notice (state-specific)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">State Variations to Watch</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-md">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">State</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Renewal Cycle</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Online Filing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Karnataka</td>
                  <td className="px-4 py-2 text-brown-700">5 years</td>
                  <td className="px-4 py-2 text-olive-600 font-medium">Yes (Sevasindhu)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Maharashtra</td>
                  <td className="px-4 py-2 text-brown-700">10 years (1-time option)</td>
                  <td className="px-4 py-2 text-olive-600 font-medium">Yes (Mahabihar)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Delhi</td>
                  <td className="px-4 py-2 text-brown-700">Lifetime (1-time)</td>
                  <td className="px-4 py-2 text-olive-600 font-medium">Yes (Labour Portal)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Telangana</td>
                  <td className="px-4 py-2 text-brown-700">1 year</td>
                  <td className="px-4 py-2 text-olive-600 font-medium">Yes (TSiPASS)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Tamil Nadu</td>
                  <td className="px-4 py-2 text-brown-700">5 years</td>
                  <td className="px-4 py-2 text-olive-600 font-medium">Yes (LMS portal)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Team → Compliance → Shops &amp; Establishment. Enter your state(s) of operation. The platform shows the specific state act.</li>
            <li><strong>Step 2:</strong> Upload incorporation documents, PAN, and office address proof. The platform auto-prepares the application and submits via state portal.</li>
            <li><strong>Step 3:</strong> Receive the Registration Certificate in 7–15 working days. The platform stores it in your Vault and adds a renewal reminder.</li>
            <li><strong>Step 4:</strong> For startups with multi-state operations (Bengaluru HQ + Mumbai sales + Hyderabad dev), the platform manages separate registrations per state.</li>
            <li><strong>Step 5:</strong> Use the Working Hours Compliance Tracker to ensure your employee work logs align with state hour caps.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: No Registration = No Bank Loan, No Vendor Onboarding
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Many startups discover their lack of Shops &amp; Establishment Registration only when applying for a working capital loan, vendor onboarding with a corporate, or government tender — all of which require the certificate as a basic document. Penalties for non-registration vary (₹50–₹10,000 + per-day continuing fines), but the operational impact is bigger than the fine.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Register in Each State Where Employees Sit
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Remote work has made this complicated. Most state Labour Departments now require Shops &amp; Establishment Registration in every state where you have employees physically working, even if your registered office is elsewhere. Maharashtra and Karnataka are actively enforcing this. Map your employees by state on Founding Legals and register accordingly.
          </p>
        </div>
      </div>
    ),
  },

  // ==========================================
  // MODULE 4: PAYSLIPS & PAYROLL
  // ==========================================
  {
    id: "structuring-tax-optimized-ctc",
    title: "Structuring a Tax-Optimized CTC — The Indian Salary Architecture",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "8 minutes",
    lastUpdated: "May 2026",
    summary: "A legally compliant Indian salary structure is not a single flat number — it's a Cost-to-Company (CTC) broken into Basic Salary, HRA, allowances, and statutory deductions. Get the ratios wrong, and your employees pay more tax, your EPF liability spikes, or you fail an Income Tax audit. This article explains the optimal structure and shows how Founding Legals auto-generates compliant payslips.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Cost to Company (CTC):</strong> The total annual amount a company spends on an employee, including gross salary, employer contributions to EPF/ESIC/Gratuity, insurance, and other benefits.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Gross Salary:</strong> Salary before deductions but excluding employer&apos;s statutory contributions.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Net (Take-Home) Salary:</strong> What lands in the employee&apos;s bank account after TDS, EPF (employee share), Professional Tax, and other deductions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Standard Indian Salary Architecture</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Component</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">% of CTC (Typical)</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Tax Treatment</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Statutory Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Basic Salary</td>
                  <td className="px-4 py-2.5 text-brown-700">40–50%</td>
                  <td className="px-4 py-2.5 text-brown-700">Fully taxable</td>
                  <td className="px-4 py-2.5 text-brown-700">Defines EPF, Gratuity, HRA base</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">House Rent Allowance (HRA)</td>
                  <td className="px-4 py-2.5 text-brown-700">40–50% of Basic</td>
                  <td className="px-4 py-2.5 text-brown-700">Partly exempt under Section 10(13A)</td>
                  <td className="px-4 py-2.5 text-brown-700">Income Tax Act, 1961</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Special Allowance</td>
                  <td className="px-4 py-2.5 text-brown-700">Balancing component</td>
                  <td className="px-4 py-2.5 text-brown-700">Fully taxable</td>
                  <td className="px-4 py-2.5 text-brown-700">Used to flex the structure</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Leave Travel Allowance (LTA)</td>
                  <td className="px-4 py-2.5 text-brown-700">8–10% of Basic</td>
                  <td className="px-4 py-2.5 text-brown-700">Exempt under Section 10(5)</td>
                  <td className="px-4 py-2.5 text-brown-700">Twice in 4-year block</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Standard Deduction</td>
                  <td className="px-4 py-2.5 text-brown-700">₹50,000 / ₹75,000 flat</td>
                  <td className="px-4 py-2.5 text-brown-700">Auto-applied</td>
                  <td className="px-4 py-2.5 text-brown-700">Section 16(ia) — varies by regime</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employer EPF Contribution</td>
                  <td className="px-4 py-2.5 text-brown-700">12% of Basic</td>
                  <td className="px-4 py-2.5 text-brown-700">Excluded from taxable salary up to limit</td>
                  <td className="px-4 py-2.5 text-brown-700">EPF Act, 1952</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Gratuity Provision</td>
                  <td className="px-4 py-2.5 text-brown-700">4.81% of Basic</td>
                  <td className="px-4 py-2.5 text-brown-700">Exempt up to ₹20 Lakh on payout</td>
                  <td className="px-4 py-2.5 text-brown-700">Payment of Gratuity Act, 1972</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Critical Rule: Basic Salary at 40–50% of CTC</h3>
          <p className="text-brown-700 leading-relaxed mb-3">
            Under the Code on Wages, 2019 (operative provisions partially notified), &quot;wages&quot; must constitute at least 50% of total remuneration. While full notification is pending, payroll best practice is to set Basic Salary between 40% and 50% of CTC to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-brown-700">
            <li>Stay aligned with the Code on Wages threshold.</li>
            <li>Optimise HRA tax exemption (calculated on Basic).</li>
            <li>Keep EPF contributions reasonable and avoid Income Tax scrutiny (very low Basic with very high allowances is a red flag).</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">HRA Tax Exemption Formula</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 10(13A) of the Income Tax Act, 1961 (Old Regime only), HRA exemption is the minimum of:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-brown-700">
            <li>Actual HRA received.</li>
            <li>50% of Basic Salary (for metros: Mumbai, Delhi, Kolkata, Chennai) OR 40% of Basic Salary (for non-metros).</li>
            <li>Rent paid minus 10% of Basic Salary.</li>
            <li>If the employee lives in their own house or pays no rent: HRA exemption = Zero.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Old vs. New Tax Regime — The Section 192 Decision</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Feature</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Old Tax Regime</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">New Tax Regime (Default from FY 2023-24)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Standard Deduction</td>
                  <td className="px-4 py-2.5 text-brown-700">₹50,000</td>
                  <td className="px-4 py-2.5 text-brown-700">₹75,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">HRA Exemption</td>
                  <td className="px-4 py-2.5 text-olive-600 font-medium">Available</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-medium">❌ Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">80C (PF, ELSS, LIC, etc.)</td>
                  <td className="px-4 py-2.5 text-brown-700">Up to ₹1.5 Lakh</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-medium">❌ Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">80D (Health Insurance)</td>
                  <td className="px-4 py-2.5 text-olive-600 font-medium">Available</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-medium">❌ Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Home Loan Interest (Sec 24)</td>
                  <td className="px-4 py-2.5 text-brown-700">Up to ₹2 Lakh</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-medium">❌ Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Slab Rates</td>
                  <td className="px-4 py-2.5 text-brown-700">Higher rates, more exemptions</td>
                  <td className="px-4 py-2.5 text-brown-700">Lower rates, fewer exemptions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Payroll → Salary Structure → New Template. Enter the CTC amount. The platform suggests an optimized compliant structure.</li>
            <li><strong>Step 2:</strong> Customise per employee using the Salary Architect (HRA metro/non-metro, Sodexo, LTA, books &amp; journals).</li>
            <li><strong>Step 3:</strong> Each employee declares their regime via the Tax Regime Selector in their portal, which locks in for the financial year.</li>
            <li><strong>Step 4:</strong> Generate the CTC Breakup Letter automatically — a one-pager attached to every Employment Agreement showing all details.</li>
            <li><strong>Step 5:</strong> Monthly payroll generates payslips compliant with the Payment of Wages Act, 1936 and state Shops &amp; Establishment Acts.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Low Basic = Income Tax Red Flag
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            A common founder mistake: setting Basic Salary at 20–25% of CTC and inflating &quot;Special Allowance&quot; to reduce EPF and Gratuity provisions. The Income Tax Department considers Basic below 40% of CTC a red flag and may reclassify allowances as Basic during scrutiny — back-charging EPF + interest + penalty. The Supreme Court in Vivekananda Vidyamandir v. EPFO (2019) held that allowances paid universally to all employees count as &quot;Basic Wages&quot; for EPF.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Let Employees Pick Their Regime in April
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Tax regime selection is a one-time choice per financial year under Section 115BAC. Most younger employees benefit from the New Regime; older employees with home loans + LIC + ELSS typically save under Old Regime. The Founding Legals dashboard runs a side-by-side comparison for each employee in April.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "epf-esic-gratuity-mandatory-contributions",
    title: "EPF, ESIC & Gratuity — The Three Mandatory Statutory Contributions",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Indian payroll involves three mandatory employer-side contributions: Employees' Provident Fund (EPF), Employees' State Insurance (ESIC), and Gratuity. Each kicks in at a different employee headcount or salary threshold. This article explains all three, when they apply, and how Founding Legals automates the calculations and filings.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">1. Employees&apos; Provident Fund (EPF)</h3>
          <p className="text-brown-700 leading-relaxed mb-3">
            Governed by the EPF and Miscellaneous Provisions Act, 1952. Administered by the EPFO. Mandatory once the company employs 20 or more persons. Voluntary registration permitted below 20.
          </p>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Contributor</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Rate</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Cap on Wages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employee</td>
                  <td className="px-4 py-2.5 text-brown-700">12% of Basic + DA</td>
                  <td className="px-4 py-2.5 text-brown-700">Optional cap at ₹15,000/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employer (to EPF)</td>
                  <td className="px-4 py-2.5 text-brown-700">3.67% of Basic + DA</td>
                  <td className="px-4 py-2.5 text-brown-700">₹15,000/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employer (to EPS Pension)</td>
                  <td className="px-4 py-2.5 text-brown-700">8.33% of Basic + DA</td>
                  <td className="px-4 py-2.5 text-brown-700">₹15,000/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Employer (Admin charges)</td>
                  <td className="px-4 py-2.5 text-brown-700">0.5% (EDLI)</td>
                  <td className="px-4 py-2.5 text-brown-700">₹15,000/month</td>
                </tr>
                <tr className="bg-cream-light font-bold text-brown-900">
                  <td className="px-4 py-2.5">Total Employer Cost</td>
                  <td className="px-4 py-2.5">12.5% of Basic + DA</td>
                  <td className="px-4 py-2.5">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brown-500 mt-2">Filings: Monthly ECR (Electronic Challan-cum-Return) by the 15th of the following month.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">2. Employees&apos; State Insurance (ESIC)</h3>
          <p className="text-brown-700 leading-relaxed mb-3">
            Governed by the ESIC Act, 1948. Mandatory once the company employs 10+ persons (20 in some states), and the employee&apos;s gross monthly wage is ₹21,000 or less (₹25,000 for persons with disabilities).
          </p>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Contributor</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Rate of Gross Wages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-medium text-brown-900">Employee</td>
                  <td className="px-4 py-2 text-brown-700">0.75%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-brown-900">Employer</td>
                  <td className="px-4 py-2 text-brown-700">3.25%</td>
                </tr>
                <tr className="bg-cream-light font-bold text-brown-900">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2">4.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">3. Gratuity</h3>
          <p className="text-brown-700 leading-relaxed">
            Governed by the Payment of Gratuity Act, 1972. Mandatory once the company employs 10 or more persons. Payable to employees who complete 5 years of continuous service.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2 font-semibold">
            Gratuity = (Last Drawn Basic + DA) × 15/26 × Number of Completed Years of Service
          </p>
          <p className="text-brown-700 mt-2">
            Tax Exemption: Up to ₹20 Lakh is exempt under Section 10(10) of the Income Tax Act. Companies typically provision 4.81% of Basic monthly as a Gratuity reserve.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Quick Reference — Trigger Thresholds</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Statute</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Employee Headcount Trigger</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Salary Cap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">POSH Act, 2013</td>
                  <td className="px-4 py-2.5 text-brown-700">10 or more</td>
                  <td className="px-4 py-2.5 text-brown-700">No cap</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">ESIC Act, 1948</td>
                  <td className="px-4 py-2.5 text-brown-700">10 or more (20 in some states)</td>
                  <td className="px-4 py-2.5 text-brown-700">₹21,000 gross/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Gratuity Act, 1972</td>
                  <td className="px-4 py-2.5 text-brown-700">10 or more</td>
                  <td className="px-4 py-2.5 text-brown-700">No cap</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">EPF Act, 1952</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">20 or more</td>
                  <td className="px-4 py-2.5 text-brown-700">₹15,000 Basic/month (cap optional)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Maternity Benefit Act, 1961</td>
                  <td className="px-4 py-2.5 text-brown-700">10 or more</td>
                  <td className="px-4 py-2.5 text-brown-700">No cap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Payroll → Statutory Compliance → Setup. Enter your headcount and registered office state. The platform flashes applicable laws.</li>
            <li><strong>Step 2:</strong> Register for EPF and ESIC directly through Shram Suvidha portal integration. UAN generation is fully automatic.</li>
            <li><strong>Step 3:</strong> Running payroll auto-calculates EPF (12.5%), ESIC (3.25%, if gross ≤ ₹21,000), and Gratuity provision (4.81% of Basic, accumulated).</li>
            <li><strong>Step 4:</strong> Generate and file the monthly ECR for EPF and ESIC return before the 15th. Payment challans are auto-prepared with banking links.</li>
            <li><strong>Step 5:</strong> Use the Gratuity Liability Dashboard to view accumulated reserves per employee — vital for M&amp;A due diligence and financial statements.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: EPF Penalty Compounds Fast
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Delay in EPF deposit attracts interest at 12% per annum under Section 7Q + damages of 5–25% per annum under Section 14B of the EPF Act. Repeat default is a criminal offence with imprisonment up to 3 years. Indian VCs flag EPF defaults as a deal-breaker during diligence — fix it before raising.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Voluntary EPF Below 20 Employees
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Consider voluntary EPF registration even with 5–10 employees. It signals stability, gives them a tax-saving avenue under Section 80C (Old Regime), and avoids the panic-registration scramble when you hit the 20-employee threshold.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tds-on-salary-section-192-regimes",
    title: "TDS on Salary Under Section 192 — Old vs. New Regime Decoded",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Every employer in India must deduct Tax Deducted at Source (TDS) from employees' salaries under Section 192 of the Income Tax Act, 1961, based on each employee's declared tax regime. Errors in TDS deduction lead to interest, penalties, and Form 16 mismatches that haunt employees during ITR filing. This article explains the mechanics and shows how Founding Legals automates the entire flow.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Section 192 of the Income Tax Act, 1961:</strong> Every person responsible for paying salary must deduct income tax computed on estimated total income of the employee at the rates in force for the financial year.
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            <strong>Section 192(2D):</strong> The employee must furnish a declaration regarding the chosen tax regime. The default (since FY 2023-24) is the New Regime.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">New Tax Regime Slabs (FY 2025–26)</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-md">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Income Slab</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr><td className="px-4 py-2 font-medium text-brown-900">Up to ₹4,00,000</td><td className="px-4 py-2 text-brown-700">Nil</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹4,00,001 – ₹8,00,000</td><td className="px-4 py-2 text-brown-700">5%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹8,00,001 – ₹12,00,000</td><td className="px-4 py-2 text-brown-700">10%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹12,00,001 – ₹16,00,000</td><td className="px-4 py-2 text-brown-700">15%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹16,00,001 – ₹20,00,000</td><td className="px-4 py-2 text-brown-700">20%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹20,00,001 – ₹24,00,000</td><td className="px-4 py-2 text-brown-700">25%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">Above ₹24,00,000</td><td className="px-4 py-2 text-brown-700">30%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brown-500 mt-2">Standard Deduction of ₹75,000 + Section 87A rebate up to ₹60,000 (for income up to ₹12 Lakh).</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Old Tax Regime Slabs (FY 2025–26)</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-md">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Income Slab</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr><td className="px-4 py-2 font-medium text-brown-900">Up to ₹2,50,000</td><td className="px-4 py-2 text-brown-700">Nil</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹2,50,001 – ₹5,00,000</td><td className="px-4 py-2 text-brown-700">5%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">₹5,00,001 – ₹10,00,000</td><td className="px-4 py-2 text-brown-700">20%</td></tr>
                <tr><td className="px-4 py-2 font-medium text-brown-900">Above ₹10,00,000</td><td className="px-4 py-2 text-brown-700">30%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brown-500 mt-2">Standard Deduction of ₹50,000 + Section 87A rebate up to ₹12,500 + all deductions (HRA, LTA, 80C, 80D, etc.) available.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Surcharge &amp; Cess (Both Regimes)</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Income Range</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Surcharge</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Health &amp; Education Cess</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">₹50 Lakh – ₹1 Crore</td>
                  <td className="px-4 py-2.5 text-brown-700">10%</td>
                  <td className="px-4 py-2.5 text-brown-700">4% on (Tax + Surcharge)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">₹1 Crore – ₹2 Crore</td>
                  <td className="px-4 py-2.5 text-brown-700">15%</td>
                  <td className="px-4 py-2.5 text-brown-700">4%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">₹2 Crore – ₹5 Crore</td>
                  <td className="px-4 py-2.5 text-brown-700">25% (capped under new regime)</td>
                  <td className="px-4 py-2.5 text-brown-700">4%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Above ₹5 Crore (Old)</td>
                  <td className="px-4 py-2.5 text-brown-700">37%</td>
                  <td className="px-4 py-2.5 text-brown-700">4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Employer Compliance Calendar Under Section 192</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Task</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Form</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Monthly TDS Deposit</td>
                  <td className="px-4 py-2.5 text-brown-700">Challan ITNS 281</td>
                  <td className="px-4 py-2.5 text-brown-700">7th of next month (30th April for March)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Quarterly TDS Return</td>
                  <td className="px-4 py-2.5 text-brown-700">Form 24Q</td>
                  <td className="px-4 py-2.5 text-brown-700">31st July, 31st Oct, 31st Jan, 31st May</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Annual TDS Certificate</td>
                  <td className="px-4 py-2.5 text-brown-700">Form 16</td>
                  <td className="px-4 py-2.5 text-brown-700">15th June of next FY</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Regime Declaration / Proofs</td>
                  <td className="px-4 py-2.5 text-brown-700">Form 10-IEA / Internal</td>
                  <td className="px-4 py-2.5 text-brown-700">Declaration: April; Proofs: Jan–Feb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> At start of year, each employee compares and declares their regime via the employee portal, locking it for the year.</li>
            <li><strong>Step 2:</strong> Throughout the year, employees upload investment proofs. HRA is auto-verified against the landlord&apos;s PAN if rent &gt; ₹1 Lakh.</li>
            <li><strong>Step 3:</strong> Monthly payroll auto-computes: projected taxable income, tax payable, tax deducted till date, andRemaining TDS pro-rated.</li>
            <li><strong>Step 4:</strong> TDS deposited automatically via Challan ITNS 281, and Form 24Q is filed quarterly directly on the TRACES portal.</li>
            <li><strong>Step 5:</strong> Form 16 is auto-generated on 15th June, digitally signed using company DSC, and emailed.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Wrong TDS = Employee ITR Hell
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If your TDS deduction doesn&apos;t match the employee&apos;s Form 26AS / AIS (due to incorrect regime, missed investment proofs, or late deposits), the employee receives a demand notice when they file their ITR. They will come to you for fixes — and Form 24Q correction requests are a 30–60 day ordeal. Our TRACES Reconciliation Tool catches mismatches monthly.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Lock Regime Selection by 30th April
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Section 192(2D) requires employers to deduct TDS based on the declared regime &quot;at the beginning of the year.&quot; If an employee doesn&apos;t declare by 30th April, the law defaults them to the New Regime. Founding Legals sends three reminders in April and auto-applies the default on May 1st.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "state-wise-professional-tax-slabs",
    title: "State-Wise Professional Tax (PT) — A Founder's Guide",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "Professional Tax is a state-level tax on salaried income, deducted by the employer and paid to the State Government. The rate varies by state and salary slab. Failing to register or deduct PT is one of the most overlooked compliance errors among Indian startups. This article shows the rates state-by-state and how Founding Legals auto-calculates PT based on each employee's working location.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>Professional Tax (PT):</strong> A tax levied by State Governments under Article 276 of the Constitution of India, capped at ₹2,500 per person per annum. PT is NOT applicable in all states. As of 2026, it is levied in 17 states including Karnataka, Maharashtra, Telangana, Tamil Nadu, West Bengal, and Gujarat. Delhi, Haryana, UP, Rajasthan, and Punjab do not levy PT.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Employer Obligations</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-brown-700">
            <li><strong>Registration:</strong> Obtain PTEC (for company) and PTRC (for deducting PT from staff).</li>
            <li><strong>Deduction:</strong> Deduct PT monthly based on state-specific salary slabs.</li>
            <li><strong>Deposit &amp; Returns:</strong> Pay deducted PT to the State Treasury and file returns as prescribed.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">State-Wise Professional Tax Slabs (Indicative)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">Karnataka</h4>
              <ul className="text-xs text-brown-700 space-y-1">
                <li>Up to ₹25,000: Nil</li>
                <li>Above ₹25,000: ₹200 / month</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">Maharashtra</h4>
              <ul className="text-xs text-brown-700 space-y-1">
                <li>Up to ₹7,500 (men) / ₹25,000 (women): Nil</li>
                <li>₹7,501 – ₹10,000 (men): ₹175 / month</li>
                <li>Above ₹10,000: ₹200 / month (₹300 in Feb)</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">Telangana &amp; Andhra Pradesh</h4>
              <ul className="text-xs text-brown-700 space-y-1">
                <li>Up to ₹15,000: Nil</li>
                <li>₹15,001 – ₹20,000: ₹150 / month</li>
                <li>Above ₹20,000: ₹200 / month</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">West Bengal</h4>
              <ul className="text-xs text-brown-700 space-y-1">
                <li>Up to ₹10,000: Nil</li>
                <li>₹10,001 – ₹15,000: ₹110 | ₹15,001 – ₹25,000: ₹130</li>
                <li>₹25,001 – ₹40,000: ₹150 | Above ₹40,000: ₹200</li>
              </ul>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm md:col-span-2">
              <h4 className="font-semibold text-brown-900 mb-2">Tamil Nadu (Half-Yearly)</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-brown-700">
                <li>Up to ₹21,000: Nil</li>
                <li>₹21,001 – ₹30,000: ₹135</li>
                <li>₹30,001 – ₹45,000: ₹315</li>
                <li>₹45,001 – ₹60,000: ₹690</li>
                <li>₹60,001 – ₹75,000: ₹1,025</li>
                <li>Above ₹75,000: ₹1,250</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-brown-500 mt-3">Tax Deduction: PT paid is fully deductible from gross salary under Section 16(iii).</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Payroll → Employee Onboarding. Enter each employee&apos;s working location (state) — this can differ from registered office for remote workers.</li>
            <li><strong>Step 2:</strong> The platform auto-applies state-specific PT slabs monthly. If multiple employees work in different states, PT calculations are independent.</li>
            <li><strong>Step 3:</strong> Register for PTEC and PTRC in each state directly through integrated Commercial Tax Department portals.</li>
            <li><strong>Step 4:</strong> Each month&apos;s payroll auto-generates the state-wise PT challan. Pay via integrated net banking; receipts are saved in the Vault.</li>
            <li><strong>Step 5:</strong> Annual / monthly PT returns are auto-filed. The State Compliance Tracker shows real-time status across all states where you operate.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Remote Workers Mean Multi-State PT
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Post-COVID, many Indian startups have employees in 8–10 states. Each state where an employee works requires a separate PTRC registration, and PT must be paid to that state&apos;s treasury — not the state of the registered office. Treating PT as a single-state obligation is a common audit finding that triggers penalty + interest.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: PT Saves Tax Twice
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Professional Tax paid by an employee is deductible under Section 16(iii) of the Income Tax Act — reducing their taxable salary. For employees in the Old Regime, this is a small but automatic tax saving. The platform shows this deduction clearly in every payslip and in Form 16.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "gst-registration-filing-startups",
    title: "GST Registration for Startups — When to Register, How to File",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Goods and Services Tax (GST) registration is mandatory for every Indian business crossing the threshold turnover — ₹20 Lakh for services, ₹40 Lakh for goods. But early-stage startups often need GST even below the threshold for B2B credibility, ITC (Input Tax Credit) claims, and inter-state supply. This article explains when to register and how Founding Legals automates it.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Central GST Act, 2017 + State GST Act, 2017 + Integrated GST Act, 2017 govern GST in India. Administered by the CBIC and respective State GST Departments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Mandatory GST Registration Triggers</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Trigger</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Threshold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Aggregate turnover — Services</td>
                  <td className="px-4 py-2.5 text-brown-700">₹20 Lakh/year (₹10 Lakh in special category states)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Aggregate turnover — Goods</td>
                  <td className="px-4 py-2.5 text-brown-700">₹40 Lakh/year (₹20 Lakh in special category states)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Inter-state supply</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">Mandatory, regardless of turnover</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">E-commerce operator (selling on Amazon, Flipkart, etc.)</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">Mandatory, regardless of turnover</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Reverse Charge Mechanism (RCM) liability</td>
                  <td className="px-4 py-2.5 text-brown-700">Mandatory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brown-500 mt-2">Special category states include Manipur, Mizoram, Nagaland, Tripura, Arunachal Pradesh, Meghalaya, Sikkim, Uttarakhand, and Puducherry.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Why Voluntary Registration Often Makes Sense</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-xl">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Benefit</th>
                  <th className="px-4 py-2 text-left font-semibold text-brown-900">Why It Helps a Pre-Threshold Startup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Input Tax Credit (ITC)</td>
                  <td className="px-4 py-2 text-brown-700">Claim GST paid on AWS, software subscriptions, office rent, legal fees</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">B2B Credibility</td>
                  <td className="px-4 py-2 text-brown-700">Corporate clients require GST invoices to claim ITC themselves</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Inter-state Supply Readiness</td>
                  <td className="px-4 py-2 text-brown-700">Avoid scrambling when first out-of-state client arrives</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-brown-900">Export Refunds</td>
                  <td className="px-4 py-2 text-brown-700">Claim full IGST refund or zero-rated supply benefit (LUT-driven)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Key GST Returns to File</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Return</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Frequency</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">GSTR-1</td>
                  <td className="px-4 py-2.5 text-brown-700">Monthly (turnover &gt; ₹5 Cr) or Quarterly</td>
                  <td className="px-4 py-2.5 text-brown-700">11th / 13th of next month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">GSTR-3B</td>
                  <td className="px-4 py-2.5 text-brown-700">Monthly</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">20th of next month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">GSTR-9 &amp; 9C</td>
                  <td className="px-4 py-2.5 text-brown-700">Annual (Reconciliation if &gt; ₹5 Cr)</td>
                  <td className="px-4 py-2.5 text-brown-700">31st December following FY</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Compliance → GST → Registration. Enter your business details and turnover. The platform flags whether registration is mandatory.</li>
            <li><strong>Step 2:</strong> Upload PAN, COI, MOA, bank, and signatory details. The platform prepares the GST REG-01 application and submits via the GSTN portal.</li>
            <li><strong>Step 3:</strong> Track the application status. GSTIN is typically issued in 3–7 working days post-Aadhaar authentication.</li>
            <li><strong>Step 4:</strong> Configure HSN/SAC codes and rates. The platform generates GST-compliant invoices directly from the Billing Module.</li>
            <li><strong>Step 5:</strong> Monthly returns (GSTR-1 and GSTR-3B) are auto-prepared. Review, approve, and file with auto-generated payment challans.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Letter of Undertaking (LUT) for Service Exports
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If you export software/SaaS services, file a Letter of Undertaking (LUT) on the GST portal at the start of each financial year. Without it, you must pay IGST on exports and claim refund later — a 90-day cash flow drag. With LUT, your exports are zero-rated immediately. Renew every April.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Don&apos;t Register Until You Absolutely Must (For B2C Startups)
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If you&apos;re a B2C startup (D2C, consumer app) and below threshold, delay GST registration until necessary. Once registered, you must charge GST to customers (raising your price by 18%) and comply with monthly filings — a significant operational burden. For B2B startups, register immediately for ITC and credibility.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "full-final-settlement-fnf-process",
    title: "Full & Final Settlement (FnF) — The Exit Payroll Process",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "When an employee leaves your startup, Full and Final Settlement (FnF) is the legal closure of your employment relationship — covering unpaid salary, leave encashment, gratuity, PF settlement, TDS, and clearance certificates. Mishandling FnF leads to labour department complaints, EPFO grievances, and damaged employer brand. This article walks through the complete FnF flow.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed mb-2">
            <strong>Full and Final Settlement (FnF):</strong> The final reconciliation of all financial dues between employer and departing employee, governed by Payment of Wages Act, 1936, Payment of Gratuity Act, 1972, EPF Act, 1952, and Industrial Disputes Act, 1947.
          </p>
          <p className="text-brown-700 leading-relaxed">
            <strong>Timeline for FnF:</strong> Under Section 5 of the Payment of Wages Act, 1936, FnF must be paid by the 7th of the month following exit (for &lt;1,000 employees). Practically, most companies target 30–45 days from last working day as the FnF release window.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The FnF Calculation Components</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Component</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Treatment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Unpaid Salary</td>
                  <td className="px-4 py-2.5 text-brown-700">Days worked × per-day salary</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Notice Period Adjustment</td>
                  <td className="px-4 py-2.5 text-brown-700">Paid (if served) or Recovered (if notice shortfall)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Leave Encashment</td>
                  <td className="px-4 py-2.5 text-brown-700">Earned/Privilege leave balance × per-day Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Gratuity</td>
                  <td className="px-4 py-2.5 text-brown-700">If 5+ years service: (Last Basic + DA) × 15/26 × completed years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">EPF &amp; ESOPs</td>
                  <td className="px-4 py-2.5 text-brown-700">EPF transferable; vested ESOPs exercisable within window (3–6 months)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Recoveries</td>
                  <td className="px-4 py-2.5 text-[#CD412B] font-semibold">Shortfall, advance salary, asset damage, TDS recalculation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Tax Treatment of FnF Components</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm max-w-lg">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Component</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Tax Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Salary in lieu of notice</td>
                  <td className="px-4 py-2.5 text-brown-700">Fully taxable</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Leave encashment</td>
                  <td className="px-4 py-2.5 text-brown-700">Exempt up to ₹25 Lakh under Section 10(10AA)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Gratuity</td>
                  <td className="px-4 py-2.5 text-brown-700">Exempt up to ₹20 Lakh under Section 10(10)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">Retrenchment compensation</td>
                  <td className="px-4 py-2.5 text-brown-700">Exempt up to ₹5 Lakh under Section 10(10B)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Clearance Certificates to Issue</h3>
          <p className="text-brown-700 leading-relaxed">
            Relieving Letter (confirms exit), Experience Certificate, Form 16 (for the FY up to exit), Form 12B (TDS deducted for new employer), and Gratuity Voucher (Form L, if applicable).
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> When an employee resigns, go to Payroll → Exit Workflow → New Resignation. Enter exit details and notice served.</li>
            <li><strong>Step 2:</strong> The platform auto-calculates unpaid salary, notice adjustment, leave encashment, gratuity, and ESOP cutoffs.</li>
            <li><strong>Step 3:</strong> Generate the FnF Statement — a single-page reconciliation. Share with the employee for acknowledgement before disbursal.</li>
            <li><strong>Step 4:</strong> Disburse dues via integrated payroll. The platform automatically issues Relieving, Experience, Form 16, and Form 12B documents.</li>
            <li><strong>Step 5:</strong> Update the Cap Table for any ESOP exercises, file Form PAS-3 if needed, and archive the record in the Compliance Vault.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Delayed FnF Attracts Labour Complaints
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 15 of the Payment of Wages Act, delay beyond the prescribed FnF window allows the employee to file a complaint with the Labour Commissioner — and the employer can be ordered to pay up to 10× the delayed amount as compensation. The Indian startup ecosystem has seen multiple cases where ex-employees have publicised delays on social media, severely damaging employer brand. Always FnF on time.
          </p>
        </div>

        <div className="bg-olive-50 border border-olive-200 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-olive-700 font-semibold mb-2">
            <span>💡</span> Pro-Tip: Pre-Calculate FnF Before Accepting Resignation
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            When an employee submits resignation, run a provisional FnF on the platform same-day and share the indicative numbers. This builds trust, manages employee expectations, and prevents last-day surprises. It also lets you identify whether you&apos;ll recover or pay notice — useful for cash flow planning.
          </p>
        </div>
      </div>
    ),
  },
];
