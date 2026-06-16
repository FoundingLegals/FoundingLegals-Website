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
  { id: "pitch", name: "Pitch", icon: "Presentation" },
  { id: "agreements", name: "Agreements", icon: "FileText" },
  { id: "cap-table-share-management", name: "Cap Table", icon: "PieChart" },
  { id: "policies", name: "Policies", icon: "BookOpen" },
  { id: "team-members", name: "Team Members", icon: "Users" },
  { id: "payslips-payroll", name: "Payslips & Payroll", icon: "Wallet" },
  { id: "account-settings", name: "Account Settings", icon: "Settings" },
  { id: "client-management", name: "Client Management", icon: "Briefcase" },
];

export const HELP_ARTICLES: HelpArticle[] = [
  // ==========================================
  // MODULE 1: PITCH
  // ==========================================
  {
    id: "how-to-add-elevator-pitch-video",
    title: "How to Add Your Elevator Pitch Video",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "3 minutes",
    lastUpdated: "May 2026",
    summary: "Your Elevator Pitch Video is the first thing investors see. Upload a short, compelling video (max 90 seconds) to Vimeo first, then paste the link here to showcase your startup's story. This guide walks you through adding, editing, and replacing your video.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What is an Elevator Pitch Video?</h3>
          <p className="text-brown-700 leading-relaxed">
            An Elevator Pitch Video is a short, powerful video (ideally under 90 seconds) that explains who you are, what problem you solve, and why your startup matters: all before an investor can finish their coffee. It's your first impression in a data room.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Add Your Video: Step by Step</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brown-700">
            <li>
              <strong>Step 1:</strong> Upload your video to <strong>Vimeo</strong> (recommended for quality and privacy controls). Avoid YouTube links: investors may see unrelated recommendations.
            </li>
            <li>
              <strong>Step 2:</strong> On Vimeo, set the video privacy to <strong>"Only people with the link"</strong> so only investors with your data room link can view it.
            </li>
            <li>
              <strong>Step 3:</strong> Go to <strong>Pitch → Elevator Pitch Video</strong> on Founding Legals.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch Vedio - 1.png" alt="Elevator Pitch Video Card Empty State" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 4:</strong> Click <strong>"Add Video"</strong> and paste your Vimeo URL. The platform automatically previews and validates the link.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch Vedio - 2.png" alt="Add Video Link Modal Popup" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 5:</strong> Save. Your video now appears in the Pitch section and is automatically included in your investor-shared data room.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor pitch Vedio - 3.png" alt="Elevator Pitch Video Successfully Added" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">To Edit or Replace Your Video</h3>
          <ol className="list-decimal pl-5 space-y-2 text-brown-700">
            <li>Go to <strong>Pitch → Elevator Pitch Video</strong>.</li>
            <li>Click the <strong>three-dot menu (⋮)</strong> at the top-right of the video card.</li>
            <li>Select <strong>"Edit"</strong> to update the Vimeo URL, or <strong>"Delete"</strong> to remove the video entirely.</li>
            <li>Paste the new Vimeo link and save.</li>
          </ol>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Keep it Under 90 Seconds
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Indian VCs and angel investors skim dozens of decks a week. A crisp 60–90 second video that covers the Problem, Solution, and Team is far more effective than a polished 5-minute pitch. Structure it as: 15 sec on the problem → 30 sec on your solution → 15 sec on traction → 15 sec on the ask.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-upload-pitch-deck",
    title: "How to Upload Your Pitch Deck (PDF)",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "3 minutes",
    lastUpdated: "May 2026",
    summary: "Your Pitch Deck is the cornerstone of investor conversations. Upload it as a PDF (max 10MB) to share securely with investors. This guide explains how to upload, manage, and share your deck through the Founding Legals platform.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What is the Pitch Deck Section?</h3>
          <p className="text-brown-700 leading-relaxed">
            The Pitch Deck section lets you upload your startup's investor presentation as a PDF file (maximum 10MB). Once uploaded, investors can view it directly within your secure data room: no email attachments, no version confusion.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Upload Your Pitch Deck</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brown-700">
            <li>
              <strong>Step 1:</strong> Go to <strong>Pitch → Pitch Deck</strong> on your dashboard.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Pitch Deck - 1.png" alt="Pitch Deck Card Empty State" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 2:</strong> Click <strong>"Upload Deck"</strong>. A file upload dialog will open.
            </li>
            <li>
              <strong>Step 3:</strong> Select your PDF file (max 10MB). You can also <strong>drag and drop</strong> the file directly onto the upload area.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Pitch Deck - 2.png" alt="Upload Pitch Deck Modal Popup" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 4:</strong> Click <strong>"Upload"</strong>. The platform processes and previews your deck instantly.
            </li>
            <li>
              <strong>Step 5:</strong> Your deck is now live in your data room and ready to share with investors.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Pitch Deck - 3.png" alt="Pitch Deck Successfully Uploaded" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">To Replace or Delete Your Deck</h3>
          <ol className="list-decimal pl-5 space-y-2 text-brown-700">
            <li>Go to <strong>Pitch → Pitch Deck</strong>.</li>
            <li>Click the <strong>three-dot menu (⋮)</strong> at the top-right corner of the Pitch Deck card.</li>
            <li>Select <strong>"Replace"</strong> to upload a newer version, or <strong>"Delete"</strong> to remove it.</li>
          </ol>
        </div>
        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Important: Secure Your Deck with an NDA First
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Always have investors sign an NDA <em>before</em> sharing your Pitch Deck. Go to Agreements → NDA Generator to create a stamped, e-signed NDA in under 2 minutes. Sharing your deck without an NDA means your financials, roadmap, and IP have no legal protection.
          </p>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Use a Watermarked Version for Early-Stage Sharing
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Add a "Confidential: [Your Company Name]: [Date]" watermark to your deck PDF before uploading. This discourages unauthorised forwarding and strengthens your NDA's evidentiary value if confidentiality is ever breached.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-write-elevator-pitch-text",
    title: "How to Write Your Elevator Pitch (Text)",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "4 minutes",
    lastUpdated: "May 2026",
    summary: "Your Elevator Pitch is a 2–5 sentence written description of what you're building and why it matters. It appears on your investor profile and data room. This guide explains how to write one that captures attention and drives investor interest.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What is the Elevator Pitch (Text)?</h3>
          <p className="text-brown-700 leading-relaxed">
            The Elevator Pitch is your startup's written "tweet": a concise 2–5 sentence summary of what you're building, the problem you're solving, and why now. It's the first text investors read in your profile and sets the tone for everything else.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Add or Edit Your Elevator Pitch</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brown-700">
            <li>
              <strong>Step 1:</strong> Go to <strong>Pitch</strong> on your dashboard.
            </li>
            <li>
              <strong>Step 2:</strong> Scroll to the <strong>Elevator Pitch</strong> card (the one with the quotation marks icon).
            </li>
            <li>
              <strong>Step 3:</strong> Click <strong>"Add Pitch"</strong> (or <strong>"Edit Pitch"</strong> if you've already added one).
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch - 1.png" alt="Elevator Pitch Card Empty State" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 4:</strong> Write your pitch in the text box. Aim for 3–4 sentences.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch - 2.png" alt="Add Elevator Pitch Modal Popup" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 5:</strong> Click <strong>"Save"</strong>. Your pitch is immediately visible in your investor data room.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch - 3.png" alt="Elevator Pitch Successfully Added" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 4-Part Formula for a Strong Elevator Pitch</h3>
          <div className="overflow-x-auto border border-brown-200 rounded-xl text-sm">
            <table className="min-w-full divide-y divide-brown-200">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Part</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">What to Write</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-brown-900">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-200 bg-white">
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">The Problem</td>
                  <td className="px-4 py-2.5 text-brown-700">What painful problem exists?</td>
                  <td className="px-4 py-2.5 text-brown-700 italic">"85% of Indian SMEs lose 12+ hours a week to manual GST reconciliation."</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">The Solution</td>
                  <td className="px-4 py-2.5 text-brown-700">What do you do?</td>
                  <td className="px-4 py-2.5 text-brown-700 italic">"We automate GST filing with AI that integrates with Tally and Zoho in one click."</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">The Traction</td>
                  <td className="px-4 py-2.5 text-brown-700">Why should investors believe you?</td>
                  <td className="px-4 py-2.5 text-brown-700 italic">"₹2.1 Cr ARR, 340 paying customers, 92% retention."</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-brown-900">The Ask</td>
                  <td className="px-4 py-2.5 text-brown-700">What are you raising?</td>
                  <td className="px-4 py-2.5 text-brown-700 italic">"Raising ₹3 Cr Seed to expand to 5 new states and add payroll automation."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Use Numbers, Not Adjectives
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Avoid phrases like "revolutionary," "world-class," or "disruptive." Indian investors are pragmatic: they respond to specifics: ₹ amounts, customer counts, growth rates, and market sizes. Every sentence should contain at least one concrete number.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-add-vision-and-problem",
    title: "How to Add Your Vision & Problem Statement",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "4 minutes",
    lastUpdated: "May 2026",
    summary: "The Vision & Problem section lets you articulate your company's long-term vision, the specific problem you're solving, and your solution: in a structured format that investors and accelerators expect. This guide explains how to fill it in effectively.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What is the Vision & Problem Section?</h3>
          <p className="text-brown-700 leading-relaxed">
            The Vision & Problem section is a structured form with three sub-sections: <strong>Our Vision</strong> (where your company is going in 10 years), <strong>The Problem</strong> (the specific pain point you solve), and <strong>Our Solution</strong> (how you uniquely solve it). Together, these tell your startup's "why" story.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Fill in Vision & Problem</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brown-700">
            <li><strong>Step 1:</strong> Go to <strong>Pitch</strong> on your dashboard.</li>
            <li><strong>Step 2:</strong> Scroll to the <strong>Vision & Problem</strong> card at the bottom of the Pitch page.</li>
            <li>
              <strong>Step 3:</strong> Click <strong>"Add Now"</strong> (or <strong>"Edit Vision & Problem"</strong> if already filled).
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch - 1.png" alt="Elevator Pitch Card Empty State" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 4:</strong> Fill in all three fields: Our Vision, The Problem, and Our Solution. Each field has a 500-character limit: be precise.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch - 2.png" alt="Add Elevator Pitch Modal Popup" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Step 5:</strong> Click <strong>"Save"</strong>. The section appears in your investor profile immediately.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Elevetor Pitch - 3.png" alt="Elevator Pitch Successfully Added" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Writing Tips for Each Sub-Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">💡 Our Vision</h4>
              <p className="text-xs text-brown-700">Describe the world as it will look if your startup succeeds. Think 10 years out. Example: "A world where every Indian SME has a full-time CFO in their pocket, regardless of their size."</p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">🎯 The Problem</h4>
              <p className="text-xs text-brown-700">Be specific about the pain. Use data if possible. Avoid vague statements. Example: "SMEs waste ₹18,000 Cr annually on manual accounting errors and missed GST deadlines."</p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">✅ Our Solution</h4>
              <p className="text-xs text-brown-700">Explain your unique approach. Focus on what makes your solution different from alternatives. Avoid "we use AI" without context: explain what the AI does.</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Align Vision with Your Pitch Deck
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Investors often cross-reference your Vision & Problem text with your Pitch Deck slides. Make sure the language, numbers, and narrative are consistent across both. Contradictions: even small ones: create doubt and slow down due diligence.
          </p>
        </div>
      </div>
    ),
  },
  // ==========================================
  // MODULE 2: AGREEMENTS
  // ==========================================
  {
    id: "how-to-create-service-certificate",
    title: "How to Issue a Service Certificate (Experience Certificate)",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "A Service Certificate — also called an Experience Certificate — is a formal document issued by a company to acknowledge an employee's job role, total tenure, and successful completion of their duties. Learn how to generate one professionally on Founding Legals in just 3 steps.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Issuing a Service Certificate</h3>
          <p className="text-brown-700 leading-relaxed">
            A Service Certificate — commonly referred to as an Experience Certificate or Relieving Letter — is one of the most important documents an employer provides at the time of an employee&apos;s separation. It formally acknowledges the employee&apos;s association with the company, confirms their designation and dates of employment, and is routinely required by future employers, banks, and government authorities for background verification. The Founding Legals platform generates a professionally formatted, company-letterheaded Service Certificate in a fast, 3-step wizard.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating a Service Certificate</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Navigate to Agreements and Select Service Certificate</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Access the module:</strong> From your Founding Legals dashboard, click <em>Agreements</em> in the left-hand navigation panel. On the Agreements landing page, locate the <em>Hire Someone</em> section. You will find the <em>Service Certificate</em> card, described as a formal certificate acknowledging an employee&apos;s job role, total tenure, and successful completion of duties. Click the green <em>+ Create</em> button on the Service Certificate card to begin.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Service Certificate/Service Certificate  - 1.png" alt="Step 1: Navigate to Agreements and click + Create on Service Certificate card" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Select Recipient</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Link the certificate to the departing employee:</strong> A <em>Select Recipient</em> panel slides in from the right side of the screen. This step associates the Service Certificate with a specific employee record in your Founding Legals account. You have two options:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Select an Existing Team Member:</strong> Browse the list of existing contacts in your account and click on the relevant employee to assign them as the recipient. This is the fastest option if the employee is already recorded in your team directory.</li>
              <li><strong>Add a New Recipient:</strong> Click the <em>+ Add new recipient</em> button at the top of the panel to manually enter the departing employee&apos;s details. You can also use the search bar to find existing contacts quickly by name or email.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Recipient selection is mandatory. The system will not allow you to proceed without selecting or creating a recipient for this certificate.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Service Certificate/Service Certificate - 2 .png" alt="Step 2: Select Recipient — choose existing employee or add new recipient" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select the legal baseline for your certificate:</strong> After selecting the recipient, the <em>Choose Agreement Terms</em> panel appears. Select one of the two options and click <em>Confirm</em> to proceed:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Founding Legals Standard Terms:</strong> Pre-populates the certificate with legally vetted, professionally worded standard clauses. This is the recommended option for most companies — it produces a clean, formally phrased certificate that meets industry expectations for background verification.</li>
              <li><strong>Custom Terms:</strong> Allows you to write, import, or modify your own certificate language from scratch. Choose this option if your company has specific language requirements, industry-mandated phrasing, or a proprietary certificate format.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Service Certificate/Service Certificate - 3.png" alt="Step 3: Choose Agreement Terms — Founding Legals standard or custom terms" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Certificate Details (Step 1 of 3)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the issuing company and signatory information:</strong> The 3-step wizard opens with Certificate Details. This section establishes the official identity of the issuing employer and the individual signing the certificate on behalf of the company. The left-hand sidebar shows all 3 steps — Certificate Details, Employee Details, and Additional Terms — with green checkmarks marking completed steps. Fill in each field precisely:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Date of Issue / Certificate Date:</strong> Select the date on which this Service Certificate is being formally issued (e.g., 16 Jun 2026). This date appears at the top of the generated certificate and serves as the official reference date for all legal and background verification purposes. Use the actual date of issue, not the employee&apos;s last working day.</li>
              <li><strong>Company Name:</strong> Enter the full registered company name including its legal suffix, exactly as it appears in the Ministry of Corporate Affairs (MCA) records (e.g., Founding Legals Private Limited). The certificate header will carry this name and any discrepancy with official MCA records may undermine its legal standing.</li>
              <li><strong>Authorised Signatory:</strong> Enter the full name of the person authorized to sign this certificate on behalf of the company (e.g., Amit Kumar). This should be a Director, CEO, HR Head, or any individual empowered by the Board to issue formal employment documents.</li>
              <li><strong>Signatory Designation:</strong> Enter the official title of the authorized signatory (e.g., Director, CEO, Head of Human Resources). This designation prints below the signatory&apos;s name on the certificate and validates the authority with which the document is issued.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Once all fields are complete, click <em>Next Step</em> to save this information and advance to Employee Details.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Service Certificate/Service Certificate - 4.jpg" alt="Step 4: Certificate Details — issue date, company name, signatory, and designation" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Employee Details (Step 2 of 3)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the departing employee&apos;s service record:</strong> This is the core information section that defines the substance of the certificate. Every field here appears verbatim in the generated document and will be reviewed by future employers and background screening agencies. Accuracy is non-negotiable:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Salutation:</strong> Select the appropriate formal prefix for the employee (Mr., Ms., Mrs., Dr.). This determines the pronoun and greeting phrasing throughout the certificate, ensuring professional consistency in all formal references to the employee.</li>
              <li><strong>Employee Name:</strong> Enter the employee&apos;s full legal name exactly as it appears on their official identity documents (PAN card, Aadhaar, or Passport). Any spelling discrepancy can cause the certificate to be flagged or rejected during background verification by a new employer or financial institution.</li>
              <li><strong>Employee Number:</strong> Enter the unique internal HR identification number assigned to this employee within your organization (e.g., 10056). This number is referenced in the certificate to enable quick verification during background checks and for cross-referencing with payroll and statutory records.</li>
              <li><strong>Last Held Position / Designation:</strong> Enter the employee&apos;s most recent official job title within the company at the time of their relieving (e.g., Team Member, Senior Engineer, Product Manager). This is the designation that will be cited in the certificate as the role held at the time of service completion.</li>
              <li><strong>Date of Joining:</strong> Select the date on which the employee originally commenced their employment with your organization (e.g., 16 Apr 2026). This date marks the beginning of the employee&apos;s tenure and, combined with the Date of Relieving, defines the total duration of service stated in the certificate.</li>
              <li><strong>Date of Relieving:</strong> Select the employee&apos;s official last working day (e.g., 8 Jun 2026). This is the date on which the employment relationship formally concluded and the date up to which the company is certifying the employee&apos;s service.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save the employee record and advance to the Additional Terms step. You can click <em>Previous</em> at any point to revise the Certificate Details without losing your progress.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Service Certificate/Service Certificate  - 5.jpg" alt="Step 5: Employee Details — salutation, name, employee number, designation, joining and relieving dates" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Generate, Format &amp; Deliver the Service Certificate</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Review, finalize, and issue the certificate:</strong> Once all three steps display green checkmarks in the sidebar, click the green <em>Generate</em> button. The platform opens the live document viewer displaying your complete, professionally formatted Service Certificate — addressed "To Whomsoever It May Concern" — on your company letterhead with the company&apos;s stamp and signatory block. Before sharing, complete the following final actions:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Add Signature Field (Required):</strong> From the <em>Add Fields</em> panel on the right, drag and drop the <em>Signature</em> tile onto the signature line above the signatory&apos;s name at the bottom of the certificate. This enables the authorized signatory to apply a formal digital signature to the document before it is dispatched to the employee.</li>
              <li><strong>Add Date Field:</strong> Drag the <em>Date</em> tile to the appropriate date area on the document to allow the signatory to stamp the execution date at the time of signing.</li>
              <li><strong>Upload Custom Stamp:</strong> If your organization uses a company rubber stamp or official seal, use the <em>Upload Custom Stamp</em> option to add it to the document. A company stamp significantly adds to the credibility and acceptance of the certificate in background verification processes.</li>
              <li><strong>Document Settings:</strong> Toggle <em>Use Company Letterhead</em> on to apply your company&apos;s official header and footer to the certificate. Toggle <em>Logo Watermark</em> on or off depending on your company&apos;s branding preference.</li>
              <li><strong>Share the Certificate:</strong> Click the <em>Shared</em> button to formally dispatch the certificate to the employee via email. The counter (e.g., 0/1) tracks delivery and signature status in real time. Note: this action is final and cannot be undone once sent.</li>
              <li><strong>View Signed Status:</strong> Click the <em>Signed</em> button after the employee has received and signed the document to view and download the fully executed, e-signed Service Certificate for your records.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Service Certificate/Service Certificate  - 6.jpg" alt="Final Phase: Generated Service Certificate — Add Signature, Date, Stamp, then Share" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Note: Issue Only After Full and Final Settlement
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under standard HR and legal practice in India, a Service Certificate or Experience Certificate should be issued only after the employee has completed their notice period, handed over all company assets and access credentials, and received their Full and Final Settlement (FnF) payment. Issuing a certificate before the FnF is settled can create complications if the employee later raises disputes regarding unpaid dues, as the certificate may be used as evidence that the employment relationship ended cleanly without any pending obligations.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Use Company Letterhead and Stamp for Maximum Credibility
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            A Service Certificate carries the most weight during background verification when it is issued on official company letterhead, bears a company stamp or seal, and carries the wet or digital signature of an authorized signatory. Always enable <em>Use Company Letterhead</em> in the Document Settings and upload your company stamp before sharing. Many banks, embassies, and large employers specifically require company-stamped experience certificates for processing visa applications, loan approvals, and employee onboarding, so a plain-text certificate without these elements may not be accepted.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-create-internship-agreement",
    title: "How to Draft and Issue an Internship Agreement",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "7 minutes",
    lastUpdated: "June 2026",
    summary: "An Internship Agreement is a formal document that defines the scope, duration, confidentiality, and stipend terms for an intern. Learn how to navigate the 5-step Founding Legals wizard to produce a legally sound internship offer letter in minutes.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Drafting Your Internship Agreement</h3>
          <p className="text-brown-700 leading-relaxed">
            Onboarding interns without a formal agreement is a compliance risk many startups overlook. An internship agreement protects your company&apos;s intellectual property, sets clear performance expectations, defines reporting structures, and prevents future disputes over stipends or non-solicitation obligations. The Founding Legals platform walks you through a structured 5-step wizard to generate a complete, professional internship offer letter that is compliant with Indian employment practices.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating an Internship Agreement</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Navigate to Agreements and Select Internship Agreement</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Access the module:</strong> From your Founding Legals dashboard, click <em>Agreements</em> in the left-hand navigation panel. On the Agreements landing page, locate the <em>Hire Someone</em> section. You will see the <em>Internship Agreement</em> card — described as an internship offer letter covering role details, duration, confidentiality, and stipend terms. Click the green <em>+ Create</em> button on the Internship Agreement card to begin the workflow.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 1.png" alt="Step 1: Navigate to Agreements and click + Create on Internship Agreement card" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Select Recipient</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Assign the intern to this agreement:</strong> A <em>Select Recipient</em> panel slides in from the right. This step links the agreement to a specific individual in your system. You have two options:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Select an Existing Team Member:</strong> Browse the list of existing contacts already added to your Founding Legals account. Click the desired recipient to select them instantly. This is the quickest route if the intern is already in your team directory.</li>
              <li><strong>Add a New Recipient:</strong> Click the <em>+ Add new recipient</em> button at the top of the panel to manually enter a new intern&apos;s details. Use the search bar to quickly locate existing entries by name or email before creating a new record.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Recipient selection is mandatory to proceed. The system will not allow you to advance without confirming the intern linked to this agreement.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 2.png" alt="Step 2: Select Recipient panel — add new or select existing intern" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select your legal baseline:</strong> After selecting the recipient, the <em>Choose Agreement Terms</em> panel appears. This is a critical decision that determines the legal foundation of your agreement. Select one of the two options and click <em>Confirm</em>:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Founding Legals Standard Terms:</strong> Pre-populates the entire agreement with legally vetted, ready-to-use internship clauses covering IP ownership, confidentiality, and conduct. This is the recommended option for most startups as the clauses have been reviewed by legal professionals for Indian compliance.</li>
              <li><strong>Custom Terms:</strong> Allows you to import, write, or customize your own specific clauses from scratch. Select this option only if your organization has proprietary legal templates or if industry-specific provisions are required that differ from standard practice.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 3.png" alt="Step 3: Choose Agreement Terms — standard or custom legal baseline" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Company Details (Step 1 of 5)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter your company&apos;s issuing information:</strong> The 5-step wizard begins with Company Details. This section establishes the legal identity of the employer and must match your official MCA registration records. Complete every field carefully:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Company Name:</strong> Enter the full registered company name including its legal suffix (e.g., Founding Legals Private Limited). This must exactly match the name as registered with the Ministry of Corporate Affairs.</li>
              <li><strong>Registered Office Address:</strong> Provide the precise official address as registered with the MCA. This address will appear on the letterhead and determines the legal jurisdiction governing the agreement.</li>
              <li><strong>Company Phone:</strong> Enter the official company contact number for formal communication references in the agreement.</li>
              <li><strong>Company Website:</strong> Enter the company&apos;s domain in the correct URL format (e.g., www.foundinglegals.com or https://foundinglegals.com). Note: entering the company name instead of a valid URL will trigger an inline validation error — the field will highlight in orange and display a warning message reminding you to use a valid domain format.</li>
              <li><strong>CIN Number:</strong> Enter your 21-character alphanumeric Corporate Identification Number as issued by the MCA (e.g., U72900MH2021PTC365412). This number uniquely identifies your company in all legal documents.</li>
              <li><strong>Authorised Signatory Name:</strong> Enter the full name of the individual authorized by the Board or company charter to execute employment and internship contracts on behalf of the company.</li>
              <li><strong>Signatory Designation:</strong> Enter the official designation of the authorized signatory (e.g., Director, CEO, Head of HR). The platform displays a guidance tip confirming this person must be authorized by the Board to bind the company in employment contracts.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              The left-hand sidebar tracks all 5 steps. Completed steps show a green checkmark. The active step is highlighted. Monitor this panel throughout the process to track your progress.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 4.jpg" alt="Step 4: Company Details — company name, address, CIN, signatory fields" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Intern Details (Step 2 of 5)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the intern&apos;s personal information:</strong> This step captures the intern&apos;s legal identity. The data entered here maps directly into all formal clauses of the internship agreement. Enter the following with care:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Intern Full Name:</strong> Enter the intern&apos;s complete legal name exactly as it appears on their Aadhaar card or Passport. Any discrepancy here will cause mismatches during background checks and compliance audits.</li>
              <li><strong>Salutation:</strong> Select the appropriate formal prefix (Mr., Ms., Mrs., Dr.). This dynamically updates the pronoun and greeting logic used across all generated contract templates, ensuring professional consistency throughout the document.</li>
              <li><strong>Phone Number:</strong> Enter the intern&apos;s active mobile number. This is the communication anchor used for e-sign link dispatch, onboarding alerts, and document status notifications.</li>
              <li><strong>Reference Number:</strong> Assign a structured internal tracking code for HR filing, background checks, and compliance audits (e.g., FL/2026/001 or HR/INT/2026/042). This unique serial number is a vital risk management tool that enables clean audit trails across payroll systems and compliance review periods.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save and cache this data. Clicking <em>Previous</em> takes you back to Company Details without losing any information already entered.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 5.jpg" alt="Step 5: Intern Details — full name, salutation, phone, and reference number" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Internship Terms (Step 3 of 5)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the operational and structural parameters of the internship:</strong> This is the core step that gives the agreement its legal and commercial substance. Every value entered here governs the temporal scope, reporting structure, and monetary arrangement of the internship. Complete each field precisely:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Designation / Role:</strong> Enter the intern&apos;s official job title or functional role within the organization (e.g., AI Engineer, Marketing Intern, Product Intern). This designation defines the performance standard and the technical proficiency level expected from the intern, and it is printed on the internship offer letter.</li>
              <li><strong>Offer Date:</strong> Select the date on which this internship offer is formally being made. This is the legal execution date and commencement anchor for all temporal conditions referenced in the agreement.</li>
              <li><strong>Internship Start Date:</strong> Set the confirmed first working day of the internship. This date triggers all duration calculations and is the reference point for stipend payment timelines if applicable.</li>
              <li><strong>Internship End Date:</strong> Set the last working day of the internship. Together with the Start Date, this defines the total internship duration, which appears in the agreement and governs any performance review windows.</li>
              <li><strong>Base of Operation / Work Location:</strong> Specify the city or office from which the intern will primarily operate (e.g., Bengaluru). This determines which local labor practices and compliance standards are applicable during the internship period.</li>
              <li><strong>Reporting Manager Name:</strong> Enter the full name of the internal team leader or department head to whom the intern will directly report. This establishes a formal reporting structure and is referenced in the communication and evaluation clauses.</li>
              <li><strong>Reporting Manager Designation:</strong> Enter the reporting manager&apos;s official title (e.g., HR Manager, Engineering Lead). This information is used in the agreement for communication hierarchy documentation.</li>
              <li><strong>Stipend Basis:</strong> Select whether the internship is <em>Paid</em> or <em>Unpaid</em>. If Unpaid is selected, the platform confirms no further monetary state progression is required and the stipend fields are hidden. If Paid is selected, additional stipend amount and payment frequency fields appear for configuration.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 6.jpg" alt="Step 6: Internship Terms — designation, dates, location, manager, and stipend basis" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">Legal &amp; Other Terms (Step 4 of 5)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Set the governing legal covenants:</strong> This step defines the protective legal parameters that make the internship agreement enforceable and professionally defensible. Each value entered here is binding and will appear in the formal terms section of the internship offer letter:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Arbitration / Jurisdiction City:</strong> Enter the city whose courts will have exclusive jurisdiction over any legal dispute arising from this agreement (e.g., Bengaluru, Chennai, Mumbai). Best practice is to enter the city of your company&apos;s registered office, which the platform confirms with an <em>Ideal Setup</em> validation badge when the jurisdiction city matches your corporate headquarters.</li>
              <li><strong>Notice Period (days):</strong> Enter the number of calendar days of written notice required for early termination by either party. 30 days is the standard industry-balanced period that allows adequate handover time and prevents operational disruption.</li>
              <li><strong>Non-Solicitation Period (years):</strong> Enter the duration in years during which the intern is prohibited from soliciting the company&apos;s employees, clients, or business connections after the internship concludes. A period of 1 year is the standard minimum that courts in India have generally upheld as reasonable and enforceable.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save these terms and advance to the final configuration step. All data is cached and safe to revise by clicking <em>Previous</em> at any point.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 7.jpg" alt="Step 7: Legal &amp; Other Terms — jurisdiction, notice period, non-solicitation" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Generate, Format &amp; Send the Internship Agreement</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Finalize, sign, and deliver the internship offer letter:</strong> Once all five steps display green checkmarks in the sidebar, click the green <em>Generate</em> button. The platform opens the live document viewer showing the complete, formatted Internship Offer Letter on company letterhead. From this final screen, you must complete the following actions before sharing:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Add Signature &amp; Date Fields (Required):</strong> Before sharing the document, you must drag and drop the <em>Signature</em> and <em>Date</em> fields from the <em>Add Fields</em> panel on the right onto the appropriate signature lines in the document. This makes the agreement ready for formal e-signing by the recipient. You can also add <em>Text</em> blocks or a <em>Stamp</em> field if your organization uses a company seal.</li>
              <li><strong>Upload Custom Stamp:</strong> Use the <em>Upload Custom Stamp</em> option if your company uses a branded rubber stamp or official seal on legal documents.</li>
              <li><strong>Document Settings:</strong> Use the settings panel to toggle <em>Use Company Letterhead</em> on or off (adds your company header and footer to the document) and to enable or disable the <em>Logo Watermark</em> that appears as a background watermark on each page.</li>
              <li><strong>Share the Document:</strong> Click the <em>Shared</em> button to send the finalized agreement to the intern. Note: this action dispatches the document immediately and cannot be undone. The counter (e.g., 0/1) tracks how many recipients have received versus signed the document.</li>
              <li><strong>View Signed Status:</strong> Once the intern signs the document, click the <em>Signed</em> button to view and download the fully executed internship agreement with all e-signatures applied.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Internship Agreement/internship agreement - 8.jpg" alt="Final Phase: Generated Internship Offer Letter — Add fields, share, and track signatures" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Interns Are Not Employees Under Indian Law
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under the Apprentices Act, 1961, and various state-level Shops and Establishments Acts, interns occupy a distinct legal category from regular employees. Do not insert clauses that grant PF (Provident Fund), ESI (Employee State Insurance), gratuity, or statutory leave entitlements in an internship agreement, as doing so can lead to courts reclassifying the relationship as employment. Additionally, unpaid internships are legally valid only if the intern is primarily receiving training or skill development — using unpaid interns as substitutes for regular productive employees is a compliance risk.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Always Add Signature Fields Before Sharing
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The most common error when generating internship agreements is clicking <em>Shared</em> before placing the Signature and Date fields on the document. Once shared, the document is dispatched and the action cannot be undone. Always drag the Signature and Date tiles from the Add Fields panel onto the correct signature lines in the document viewer before clicking Shared. This ensures the intern can formally e-sign the agreement, creating a legally complete and auditable record.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-create-offer-letter",
    title: "How to Draft and Issue an Offer Letter",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "6 minutes",
    lastUpdated: "June 2026",
    summary: "An Offer Letter is the first formal document that establishes a hiring relationship between your company and a new employee. Learn how to configure company details, define compensation structures, set employment terms, and issue a legally sound offer letter on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Drafting Your Offer Letter</h3>
          <p className="text-brown-700 leading-relaxed">
            An offer letter is not just a formality — it is the first legally significant document in an employee&apos;s lifecycle with your company. It defines compensation, job title, joining date, and the governing terms under which employment begins. The Founding Legals platform guides you through a structured 6-step wizard to produce a compliant, professionally formatted offer letter in minutes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating an Offer Letter</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Navigate to Agreements and Select Offer Letter</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Access the module:</strong> From your Founding Legals dashboard, click <em>Agreements</em> in the left navigation panel. The platform will confirm you are creating an Offer Letter by displaying it in the breadcrumb at the top of the screen. The left-hand sidebar shows the six steps of the wizard: Company Details, Candidate Details, Offer &amp; Joining Terms, Compensation Structure, Employment Terms, and Additional Terms. Each step must be completed in sequence before clicking <em>Generate</em>.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/Offer Letter - 1.jpg" alt="Step 1: Navigate to Agreements and Select Offer Letter" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Company Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter your company&apos;s issuing information:</strong> This step captures the legal identity of the employer and the authorized signatory. Fill in the following fields:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Company Name:</strong> Enter the full registered name including the corporate suffix (e.g., Founding Legals Private Limited).</li>
              <li><strong>Registered Office Address:</strong> Provide the complete address as registered with the MCA. This address appears on the letterhead and governs jurisdictional applicability.</li>
              <li><strong>Authorised Signatory Name:</strong> Enter the full name of the individual authorized by the Board or company charter to sign employment contracts (e.g., Director, CEO, or Head of HR).</li>
              <li><strong>Signatory Designation:</strong> Enter their official designation. Ensure this matches their Board resolution to maintain enforceability.</li>
              <li><strong>HR Department Name:</strong> Enter the name of the HR representative managing the onboarding process. This person is named in the joining instructions section of the letter.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click the <strong>❓ Question Mark Icon</strong> next to any field for inline guidance. Once all fields are complete, click <em>Next Step</em> to proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/Offer Letter - 2.jpg" alt="Step 2: Company Details — Company name, signatory, and HR contact" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Candidate Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the candidate&apos;s personal information:</strong> Accurate candidate details are critical as they map directly into all legal terms of the offer letter. Enter the following:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Candidate Full Name:</strong> Enter the full legal name exactly as it appears on the candidate&apos;s government-issued identity documents (PAN card, Aadhaar). Any discrepancy may invalidate background checks or onboarding documents.</li>
              <li><strong>Salutation:</strong> Select the appropriate formal title (Mr., Ms., Dr., etc.) to maintain consistency in all business communications.</li>
              <li><strong>Phone Number:</strong> Enter the candidate&apos;s active mobile number. This is used for offer notification, SMS alerts, and subsequent onboarding communications.</li>
              <li><strong>Reference Number:</strong> Assign a unique internal tracking code for HR filing, audit trails, and background check tracking (e.g., FL/2026/001 or HR/OFF/2026/042). This code helps identify the offer across payroll, compliance, and legal systems.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/Offer Letter - 3.jpg" alt="Step 3: Candidate Details — name, salutation, phone, and reference number" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Offer &amp; Joining Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the candidate&apos;s position and onboarding schedule:</strong> This step governs the core operational parameters of the employment relationship. Complete each field carefully:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Designation / Job Title:</strong> Enter the official job title that will appear on the offer letter, employment contract, and future performance reviews (e.g., Senior Software Engineer, Team Member).</li>
              <li><strong>Date of Joining:</strong> Select the confirmed first working day. This date is legally binding and triggers statutory entitlements such as PF enrollment and leave accruals.</li>
              <li><strong>Offer Acceptance Deadline:</strong> Set the deadline by which the candidate must accept or reject the offer. This date must always fall before the Date of Joining. A joining date earlier than the acceptance deadline is logically and legally flawed and will trigger a generation error on the platform.</li>
              <li><strong>Work Location (City / Office):</strong> Specify the primary office city. This determines which local labor laws, tax slabs, and state-specific compliance rules apply to the candidate.</li>
              <li><strong>Reporting Time on Joining Day:</strong> Set the exact time the candidate is expected to report on their first day. This establishes a professional, structured onboarding experience from day one.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/Offer letter - 4.jpg" alt="Step 4: Offer &amp; Joining Terms — designation, dates, location, and reporting time" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Compensation Structure</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Build a balanced and compliant salary breakup:</strong> This step is the financial heart of the offer letter. The platform provides a real-time salary builder that automatically calculates all components from your Annual CTC input:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Total CTC (Annual):</strong> Enter the comprehensive gross annual value, including all fixed and variable pay components (e.g., ₹5,00,000). This is the primary anchor value for all subsequent calculations.</li>
              <li><strong>Total CTC in Words (Read-Only):</strong> An auto-populated numerical confirmation that prevents clerical errors before contract generation. Verify this matches your intended amount.</li>
              <li><strong>Basic Salary (Monthly &amp; Annual):</strong> Auto-calculated from the Annual CTC. Best practice is to keep Basic between 40% to 50% of CTC for statutory PF compliance. Lowering Basic reduces employer PF liability but can affect employee gratuity and loan eligibility.</li>
              <li><strong>House Rent Allowance — HRA (Monthly &amp; Annual):</strong> Typically set at 50% of Basic Salary for metro cities (Mumbai, Delhi, Bengaluru, Chennai) or 40% for non-metro cities. HRA provides maximum tax benefits to the employee under Section 10(13A) of the Income Tax Act.</li>
              <li><strong>Medical Allowance (Monthly &amp; Annual):</strong> A standard component added for employee health and wellness benefit coverage.</li>
              <li><strong>Special Allowance (Monthly &amp; Annual):</strong> A dynamically calculated plug component that absorbs the remaining unallocated gross salary to ensure the total breakup matches the defined Annual CTC perfectly, with no funds unallocated.</li>
              <li><strong>Add Field Button:</strong> Use this to add additional standard components such as Transport Allowance, LTA, or custom performance bonuses.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Monitor the <strong>Remaining Balance indicator</strong> in the top-right corner of the form. It must show <em>₹0 Balance</em> before proceeding, confirming your salary structure is fully balanced.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/Offer letter - 5.jpg" alt="Step 5: Compensation Structure — CTC, Basic, HRA, and allowances breakdown" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Employment Terms (Legal Terms)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Set the governing legal parameters of the employment relationship:</strong> This step defines the key protective and operational covenants that make the offer letter a legally enforceable document. Each value entered here carries binding legal weight:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Confidentiality Period (Years):</strong> Set how long confidential information must be protected after the employment relationship ends. The standard defensible range under Indian law is 2 to 5 years. Excessively long periods may be ruled unenforceable by courts.</li>
              <li><strong>Liability Cap (Months of Fees):</strong> Define the maximum financial damages either party can seek in case of a dispute. Limiting liability is a critical risk management step for your company. A typical cap is 12 months of salary as a calculated ceiling.</li>
              <li><strong>Termination Notice (Days):</strong> Enter the mandatory written notice period required for either party to end the employment relationship. 30 days is the industry-standard balanced period that allows proper handover transitions without operational disruption.</li>
              <li><strong>Court Jurisdiction City:</strong> Specify the city whose courts will have exclusive jurisdiction over any legal dispute arising from this offer letter. Best practice is to select the city of your company&apos;s registered office (e.g., Bengaluru) to ensure litigation convenience.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              All entries in this section are displayed to the candidate in the offer letter. Review every value for accuracy before proceeding, as these clauses are legally binding upon acceptance.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/Offer letter - 6.jpg" alt="Step 6: Employment Terms — confidentiality, liability, notice period, and jurisdiction" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Generate, Send &amp; Track the Offer Letter</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Execute and monitor the complete offer lifecycle:</strong> Once all six steps are complete and the sidebar displays green checkmarks, click the green <em>&quot;Generate&quot;</em> button. The platform opens the live document viewer with your completed, formatted offer letter. From this final screen you can:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Send the Offer:</strong> Click the green <em>Send</em> button to execute a secure e-sign send-out to the candidate via email and SMS. Tokens are deducted from your balance upon successful dispatch.</li>
              <li><strong>Enable Public Access:</strong> Toggle the <em>Shared</em> switch to ON to generate a unique, non-authenticated link for the document. This allows you to share the offer via WhatsApp or any channel without requiring the candidate to log in.</li>
              <li><strong>Live Tracking:</strong> Monitor real-time contract lifecycle progress — track how many recipients have accessed or signed the shared link directly from this screen.</li>
              <li><strong>Token Balance:</strong> Your credit balance is displayed at the top-right. Ensure sufficient credits are available before initiating the send-out.</li>
              <li><strong>Delete Draft:</strong> Use the <em>Delete</em> button to instantly remove un-sent or draft contracts, freeing up processing resources and allowing you to start a fresh workflow.</li>
              <li><strong>System Alerts:</strong> The notification bell icon provides real-time document status changes, sending confirmations, and system-level updates.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Offer Letter/7Offer letter - 7.jpg" alt="Final Phase: Generated Offer Letter — Send, Track, and Manage" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Date Logic and Acceptance Deadlines
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The Offer Acceptance Deadline must always fall before the Date of Joining. Setting a joining date earlier than the acceptance deadline is legally and logically flawed — it implies the employee starts work before formally accepting the offer — and will trigger a generation error on the platform. Always verify that the acceptance window allows the candidate adequate time to review, seek legal counsel if needed, and formally respond.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Balance Your Compensation Structure Before Generating
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Before clicking Generate, confirm the Remaining Balance indicator on the Compensation Structure step reads <strong>₹0 Balance</strong>. Any unallocated amount means your salary breakup does not total the stated Annual CTC, which will cause mathematical inconsistencies in the offer letter. Use the Special Allowance component as the balancing plug, or add custom allowance fields to absorb any remaining amount.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "drafting-consultancy-agreement",
    title: "How to Draft and Customize Your Consultancy Agreement",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "7 minutes",
    lastUpdated: "June 2026",
    summary: "A Consultancy Agreement governs the relationship between your company and external advisors, freelancers, or independent consultants. Learn how to configure terms, deliverables, IP rights, and payments on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Drafting Your Consultancy Agreement</h3>
          <p className="text-brown-700 leading-relaxed">
            Welcome to the step-by-step administrator guide for drafting, configuring, and executing a legally binding consultancy agreement on the Founding Legals platform. Whether you are hiring a freelance developer, a growth marketing expert, or a strategic business advisor, documenting expectations, deliverables, IP transfer, and payments protects your intellectual property and ensures business continuity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating a Consultancy Agreement</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select your baseline terms:</strong> Choose between standard and custom terms in the right-hand slide-out sidebar. Standard terms pre-populate the draft with legally vetted, industry-accepted independent contractor clauses, while custom terms allow you to import custom provisions.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement - 1.png" alt="Step 1: Choose Agreement Terms" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Company Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter corporate details:</strong> Input your company registered name, registered office address, email address, and registry information (CIN). If you need help with any field, hover or click the Question Mark Icon (❓) next to the input fields.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement - 2.png" alt="Step 2: Company Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Consultant Identity Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Provide Consultant Info:</strong> Enter the legal credentials of the consultant. This includes their full legal name (matching their PAN card), permanent address, age, parentage, PAN, Aadhaar number, and professional contact email for formal notifications.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement - 3.png" alt="Step 3: Consultant Identity Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Scope of Services and Deliverables</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the assignment parameters:</strong> Specify the exact deliverables, task timelines, and performance criteria the consultant is expected to satisfy. Clear drafting here prevents scope creep and future performance disputes.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement - 4.png" alt="Step 4: Scope of Services and Deliverables" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Compensation &amp; Payment Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Set compensation parameters:</strong> Outline the fee structure, whether it is a fixed retainer, milestone payments, or hourly rates. Specify billing periods, invoice payment timelines (for example, net 15 or net 30 days), and how out-of-pocket expenses are reimbursed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement -5.jpg" alt="Step 5: Compensation &amp; Payment Terms" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Intellectual Property (IP) Rights</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Protect proprietary works:</strong> Determine the IP assignment terms. Select standard assignment clauses to ensure all codes, designs, branding, or operational workflows developed by the consultant are fully owned by the company upon payment.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement 6.jpg" alt="Step 6: Intellectual Property Rights" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">Termination &amp; Notice Period</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Establish dissolution parameters:</strong> Define how the agreement can be ended. Set notice periods required for either party to terminate for convenience, and establish parameters for immediate termination for cause (such as breach of confidentiality).
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement - 7.jpg" alt="Step 7: Termination &amp; Notice Period" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">8</span>
              <strong className="text-base text-brown-900">Arbitration &amp; Jurisdiction Settings</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select dispute resolution seats:</strong> Specify the city of arbitration for formal dispute resolutions under the Arbitration and Conciliation Act, 1996, and set the exclusive courts holding local authority over legal disputes.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement 8.jpg" alt="Step 8: Arbitration &amp; Jurisdiction Settings" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 9 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">9</span>
              <strong className="text-base text-brown-900">Additional Terms &amp; Covenants</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define custom rules:</strong> Enter any specialized legal clauses, non-disclosure parameters, or custom business covenants relevant to your consultancy relationship. If standard provisions are sufficient, you can leave these optional fields blank.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement 9.jpg" alt="Step 9: Additional Terms &amp; Covenants" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 10 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">10</span>
              <strong className="text-base text-brown-900">Review Progress &amp; Generation</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Generate the document:</strong> Verify that all steps in the left-hand wizard navigation panel are successfully completed with green checkmarks. Check your wallet balance in the top-right and click the green <em>&quot;Generate&quot;</em> button to construct your contract draft.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement - 10.jpg" alt="Step 10: Review Progress &amp; Generation" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Document Editor &amp; Formatting</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Format and sign:</strong> The editor opens the interactive contract viewer. Drag and drop signature placeholders, date lines, or company stamps from the right panel. Toggle letterheads and watermarks on or off, then send the agreement to the consultant.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Consultancy Agreement/Consultancy Agreement 10.jpg" alt="Final Phase: Document Editor &amp; Formatting" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Avoid Employee Classification Risk
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Indian labor laws, consultants must not be treated as regular employees. Avoid adding clauses that mandate fixed working hours, impose employee benefits (like Provident Fund or Gratuity), or restrict them from serving other clients. Doing so can lead to courts reclassifying the relationship as employer-employee, exposing your startup to retroactive benefit claims and tax liabilities.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Specify TDS and Tax Deductions
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Ensure your compensation terms state whether the consultancy fee is inclusive or exclusive of GST. Additionally, remember that payments to individual consultants are subject to Tax Deducted at Source (TDS) under Section 194J of the Income Tax Act (generally 10% for professional services or 2% for technical services). State these tax allocations clearly to avoid billing disputes.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-create-founders-agreement",
    title: "How to Draft and Customize Your Founders' Agreement",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "8 minutes",
    lastUpdated: "June 2026",
    summary: "A Founders' Agreement is the legal cornerstone of any co-founded startup. Learn how to define capital structures, equity splits, vesting schedules, and governance rules step-by-step on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Creating Your Founders&apos; Agreement</h3>
          <p className="text-brown-700 leading-relaxed">
            Welcome to the step-by-step administrator guide for drafting, configuring, and executing a legally robust co-founder contract on the Founding Legals platform. By documenting share splits, roles, vesting schedules, and corporate governance early, you protect your startup from potential co-founder disputes and align your leadership team.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating a Founders&apos; Agreement</h3>

          {/* Step 0 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">0</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select your baseline terms:</strong> Before entering company metrics, establish your baseline legal framework using the right slide-out panel. Select <em>&quot;Founding Legals standard terms&quot;</em> to pre-populate the contract with legally vetted, standard industry clauses, or choose <em>&quot;Custom terms&quot;</em> if you intend to write or import specialized, custom-tailored legal provisions.
            </p>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Company Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter corporate identity details:</strong> Provide the foundational corporate identity of your startup as registered with the Ministry of Corporate Affairs (MCA). Click the Question Mark Icon (❓) next to any field if you need a quick tip. You will need to enter the Company Name (with PRIVATE LIMITED), the 21-character alphanumeric Corporate Identification Number (CIN), registered address, incorporation date, and a short business object description.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 1.png" alt="Step 1: Company Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Founder 1 Identity Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Input Founder 1 Details:</strong> Fill in the legal identification fields for Founder 1. Enter their full legal name exactly as it appears on their PAN card, parentage, age (must be 18 or older), PAN number, Aadhaar number, permanent address, and active notification email address.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 2.png" alt="Step 2: Founder 1 Identity Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Founder 2 Identity Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Input Founder 2 Details:</strong> Fill in the identical legal identification fields for Founder 2. Enter their name, parentage, age, PAN number, Aadhaar number, permanent address, and active notification email.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 3.png" alt="Step 3: Founder 2 Identity Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Capital Structure</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define equity boundaries:</strong> Define your startup&apos;s authorized and actual paid-up equity limits. Enter the Authorised Share Capital (₹) representing the maximum monetary cap your company can legally issue as stated in your MoA, and the Paid-up Share Capital (₹) representing the total capital contributions paid by founders so far.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 4.png" alt="Step 4: Capital Structure" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Shareholding Pattern</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Allocate equity and vesting:</strong> Allocate your equity split and establish vesting conditions. Enter the ownership percentage for Founder 1 and Founder 2. The combination must equal exactly 100%. You can also select the percentage of shares subject to vesting (standard startup practice is 100% vesting over 3 or 4 years). Changing any percentage automatically updates the respective share counts and subscription prices in real time.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 5.png" alt="Step 5: Shareholding Pattern" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Founder 1 Contributions &amp; Roles</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define Founder 1 Role:</strong> Select the official designation (e.g., CEO, CTO), and detail key daily responsibilities. You can also specify pre-incorporation expenses to be reimbursed and list any intellectual property or non-cash assets contributed to the company by Founder 1.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 6.png" alt="Step 6: Founder 1 Contributions &amp; Roles" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">Founder 2 Contributions &amp; Roles</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define Founder 2 Role:</strong> Complete the matching role profiles, IP assignments, and pre-incorporation expense details for Founder 2 to ensure equal clarity on operational roles.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 7.png" alt="Step 7: Founder 2 Contributions &amp; Roles" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">8</span>
              <strong className="text-base text-brown-900">Limits &amp; Governance</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Set unanimous approval thresholds:</strong> Set financial and operational thresholds to determine when unanimous founder approval is required. Define the maximum limits for indebtedness, asset disposal, litigation settlements, and maximum ESOP pool grants. Select who holds the tie-breaking casting vote on split decisions.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 8.png" alt="Step 8: Limits &amp; Governance" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 9 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">9</span>
              <strong className="text-base text-brown-900">Agreement &amp; Execution</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define legal jurisdiction:</strong> Define your signing date, place of execution, and the arbitration seat (Arbitration and Conciliation Act, 1996) and jurisdiction courts. Select the state for stamp duty calculation and specify attention persons for corporate notices.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 9.png" alt="Step 9: Agreement &amp; Execution" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 10 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">10</span>
              <strong className="text-base text-brown-900">Additional Terms &amp; Generation</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Compile and Generate:</strong> Add any custom legal clauses if needed. Verify that all 10 items in the left-hand progress sidebar display a green checkmark (✓). Check your token balance in the top-right and click the green <em>&quot;Generate&quot;</em> button to compile your details.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 10.png" alt="Step 10: Additional Terms &amp; Generation" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Document Editor &amp; Formatting</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Format and Sign:</strong> Once generated, the system opens your interactive live contract document viewer. Use the <em>&quot;Add Fields&quot;</em> right panel to drag and drop signature placeholders, date lines, or corporate stamp fields. Use the settings panel to toggle your branded company letterhead or logo watermark on or off.
            </p>
            <div className="mt-4 max-w-2xl pl-10 space-y-4">
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 11.png" alt="Final Phase: Document Editor Add Fields Panel" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              <img src="/Help Center Guide/Aggrements drafting help images/Hire Someone/Founders agreement/Founders Agreement - 12.png" alt="Final Phase: Document Editor Settings &amp; Branding" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Clear Equity Vesting Rules under Indian Law
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Co-founder equity should always be subject to a vesting schedule (such as a 4-year vesting schedule with a 1-year cliff). If a co-founder leaves the company early, unvested shares can be repurchased by the company or remaining founders at face value. Executing a founders agreement without vesting rules leaves the company vulnerable to dead equity issues.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Stamp Your Founders&apos; Agreement Properly
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under state-specific stamp acts, a founders agreement must be stamped with appropriate non-judicial stamp duty to be admissible as evidence in court. Choose the correct execution state during the drafting process to ensure Founding Legals calculates the correct stamp duty denomination.
          </p>
        </div>
      </div>
    ),
  },
  // ==========================================
  // MODULE 3: PROTECT YOUR IP
  // ==========================================
  {
    id: "how-to-create-non-compete-agreement",
    title: "How to Draft a Non-Compete Agreement",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "7 minutes",
    lastUpdated: "June 2026",
    summary: "A Non-Compete Agreement is a critical IP protection tool that prevents employees, contractors, and business associates from working with competitors or soliciting your clients and team members. Learn how to configure and generate a legally enforceable Non-Compete Agreement on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F7F0] border border-[#C5D09A] px-5 py-3 rounded-xl mb-2">
          <p className="text-xs font-semibold text-[#5C6F2D] uppercase tracking-wide">Protect Your IP — Agreement Type</p>
          <p className="text-sm text-brown-600 mt-0.5">This agreement falls under the <strong>Protect Your IP</strong> category on the Founding Legals Agreements page, alongside the Mutual NDA, IP Assignment Agreement, Technology Transfer Agreement, Software License Agreement, and Trademark License Agreement.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Drafting Your Non-Compete Agreement</h3>
          <p className="text-brown-700 leading-relaxed">
            A Non-Compete Agreement is one of the most powerful — and most misunderstood — legal instruments available to a founder. It contractually prevents an employee, contractor, or business associate from directly or indirectly working with a competitor, soliciting your clients, or poaching your team members during and after their engagement with your company. Under Indian contract law, non-compete covenants are enforceable when they are reasonable in scope, duration, and geographic territory. The Founding Legals platform structures this agreement across a clear 6-step wizard to ensure every clause is precise, balanced, and legally defensible.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating a Non-Compete Agreement</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Navigate to Agreements and Select Non-Compete Agreement</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Access the module:</strong> From your Founding Legals dashboard, click <em>Agreements</em> in the left-hand navigation panel. On the Agreements landing page, scroll to the <em>Protect Your IP</em> section — positioned below the Hire Someone category. Locate the <em>Non-Compete Agreement</em> card, described as preventing employees and business associates from working with competitors or soliciting your clients and team. Click the green <em>+ Create</em> button to start the workflow.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement - 1.png" alt="Step 1: Locate Non-Compete Agreement under Protect Your IP section and click + Create" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Select Recipient (Covenantor)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Assign the individual bound by this agreement:</strong> A <em>Select Recipient</em> panel slides in from the right. The recipient in a Non-Compete Agreement is the Covenantor — the person who is legally bound by the non-compete restrictions. This is typically the employee, contractor, or business associate you are engaging. Choose one of the two options:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Select an Existing Contact:</strong> Browse the list of team members or contacts already registered in your Founding Legals account and click to select the relevant individual.</li>
              <li><strong>Add a New Recipient:</strong> Click the <em>+ Add new recipient</em> button to manually enter the covenantor&apos;s details. Use the search bar to quickly check if the person already exists in your records before creating a new entry.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Recipient selection is mandatory to proceed. The system will not allow you to advance to the next panel without a confirmed covenantor.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement - 2.png" alt="Step 2: Select Recipient panel — select existing contact or add new covenantor" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select your legal baseline:</strong> After confirming the recipient, the <em>Choose Agreement Terms</em> panel appears. This determines the legal foundation of your Non-Compete Agreement. Select one of the two options and click <em>Confirm</em>:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Founding Legals Standard Terms:</strong> Pre-populates the agreement with legally vetted, ready-to-use non-compete clauses covering competitive restrictions, solicitation prohibitions, confidentiality obligations, and remedies for breach. Recommended for most startups and growing businesses.</li>
              <li><strong>Custom Terms:</strong> Allows you to import, write, or modify your own specialized clauses from scratch. Use this option if your industry has unique competitive restrictions, or if your legal counsel has prescribed specific covenant language.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -3.png" alt="Step 3: Choose Agreement Terms — standard or custom terms baseline" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Agreement Details (Step 1 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Set the execution parameters of the agreement:</strong> The 6-step wizard opens with Agreement Details — the foundational execution metadata of the contract. The breadcrumb at the top confirms you are creating a <em>Non-Compete Agreement</em>. The left-hand sidebar lists all 6 steps: Agreement Details, Company Details, Covenantor Details, Commercial Terms, Restrictions &amp; Remedies, and Additional Terms. Track your progress via the green checkmarks. Complete each field:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Execution Place:</strong> Enter the city where this agreement is being formally executed (e.g., Bengaluru, Mumbai, Chennai). The execution city is cited in the opening clause of the agreement and determines which state&apos;s law and courts have primary jurisdiction over the contract.</li>
              <li><strong>Execution Date:</strong> Click the calendar icon and select the date on which both parties are formally executing the agreement. This date is the legally effective commencement date of all restrictions and obligations in the contract.</li>
              <li><strong>Execution Month &amp; Execution Year:</strong> These fields are automatically populated by the platform the moment you select the Execution Date. You do not need to fill them manually — they auto-fill to ensure formatting consistency throughout the generated document.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save these details and proceed to Company Details.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -4.jpg" alt="Step 4: Agreement Details — execution place, date (auto-fills month and year)" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Company Details (Step 2 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the company&apos;s legal identity:</strong> This step establishes the legal identity of the company that is the beneficiary of the non-compete covenants — the party the covenantor is agreeing not to compete against. Note that the Company Name field in this agreement uses the short-form version without the corporate suffix. Complete all fields carefully:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Company Name (without Private Limited):</strong> Enter the company&apos;s short-form trading name, excluding the &quot;Private Limited&quot; suffix (e.g., Founding Legals Services). The platform appends the full legal suffix automatically in the generated agreement text.</li>
              <li><strong>Company CIN:</strong> Enter your 21-character alphanumeric Corporate Identification Number as registered with the MCA (e.g., U72900MH2021PTC365412). This uniquely identifies your company in the agreement&apos;s parties clause.</li>
              <li><strong>Registered Office Address:</strong> Provide the complete registered address as filed with the MCA. This address appears in the agreement&apos;s parties section and governs the legal domicile of the company for jurisdictional purposes.</li>
              <li><strong>Authorised Signatory Name:</strong> Enter the full name of the company representative who is signing the Non-Compete Agreement on behalf of the company (e.g., Amit Kumar).</li>
              <li><strong>Authorised Signatory Designation:</strong> Enter the official title of the authorized signatory (e.g., Director, Manager, CEO). This person must be authorized by the Board or company charter to execute legal agreements and bind the company.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save and proceed to Covenantor Details.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -5.jpg" alt="Step 5: Company Details — short-form name, CIN, address, signatory name and designation" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Covenantor Details (Step 3 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the individual bound by the non-compete restrictions:</strong> The Covenantor is the person who will be legally restricted from competing with your business. This section captures their complete legal identity as it will appear in the agreement. Every field here maps verbatim into the Parties clause:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Covenantor Name:</strong> Enter the individual&apos;s full legal name exactly as it appears on their PAN card or Aadhaar. Any name discrepancy can create enforcement challenges if the agreement is contested in court.</li>
              <li><strong>Son/Daughter of (Father&apos;s / Mother&apos;s Name):</strong> Enter the name of the covenantor&apos;s parent as it appears on their official identity documents. This field is standard in Indian legal agreements as it provides an additional layer of identity verification beyond the name alone, reducing the risk of identity disputes.</li>
              <li><strong>PAN Number:</strong> Enter the covenantor&apos;s valid 10-character Permanent Account Number (e.g., LXAQW5689D). The PAN uniquely identifies the individual for tax and government record-keeping purposes and strengthens the legal traceability of the covenantor.</li>
              <li><strong>Address:</strong> Enter the covenantor&apos;s complete permanent residential address including flat/house number, street, locality, city, state, and PIN code (e.g., Flat 4B, Skyview Apartments, Indiranagar 100 Feet Road, Bengaluru, Karnataka - 560038).</li>
              <li><strong>Engagement Type:</strong> Select the nature of the covenantor&apos;s relationship with your company from the dropdown — for example, <em>an Employee</em>, <em>a Consultant</em>, or <em>a Business Associate</em>. This selection determines the legal framing of the recitals and governs which specific non-compete clauses are most applicable.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -6.jpg" alt="Step 6: Covenantor Details — full name, parent name, PAN, address, engagement type" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">Commercial Terms (Step 4 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the commercial basis and competitive scope of the agreement:</strong> This step establishes the financial consideration being paid in exchange for the covenantor&apos;s agreement not to compete, and clearly defines the scope of business activities that are subject to restriction:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Consideration Type:</strong> Select the nature of the financial benefit the covenantor is receiving in exchange for agreeing to the non-compete restrictions. Common options include <em>Salary</em> (for employees), <em>Consulting Fee</em> (for contractors), or other agreed monetary forms. Under Indian contract law, a non-compete agreement must be supported by valid consideration — the covenantor must receive something of value in return for accepting the restrictions. A non-compete without consideration is generally unenforceable.</li>
              <li><strong>Consideration Amount (INR):</strong> Enter the total monetary value of the consideration being exchanged (e.g., ₹5,00,000). This amount is stated in the recitals of the agreement and forms the contractual basis for the restrictions.</li>
              <li><strong>Business Description (for Non-Compete scope):</strong> Write a precise, specific description of the company&apos;s business activities that define the competitive landscape the covenantor is restricted from entering (e.g., &quot;Delivering SaaS products for startup legal documentation and compliance automation&quot;). This description is critical — vague business descriptions lead to courts invalidating the non-compete scope as unreasonably broad.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -7.jpg" alt="Step 7: Commercial Terms — consideration type, amount, and business description" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">8</span>
              <strong className="text-base text-brown-900">Restrictions &amp; Remedies (Step 5 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the protective boundaries and financial consequences of breach:</strong> This is the most legally substantive step of the entire agreement. The restrictions and remedies you define here are the core enforceable covenants. Every value must be commercially reasonable and proportionate, as Indian courts have consistently struck down overbroad restrictions:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Post-Engagement Non-Compete Period (Months):</strong> Enter the number of months during which the covenantor is prohibited from competing with your business after their engagement ends (e.g., 24 months). This restriction applies to joining a competitor, starting a competing business, or providing competing services. Indian courts have generally upheld post-engagement non-competes of 12 to 24 months as reasonable — periods exceeding 36 months face increased risk of being declared unenforceable.</li>
              <li><strong>Restricted Territory:</strong> Specify the geographic region within which the non-compete restrictions apply (e.g., Chennai, India, South Asia). The territory must be directly linked to where your company actively conducts business. Overly broad territories — particularly worldwide restrictions for a company operating only in India — are routinely struck down by courts.</li>
              <li><strong>Non-Solicitation Period (Months):</strong> Enter the number of months during which the covenantor is prohibited from soliciting your employees, clients, and business contacts after their engagement (e.g., 24 months). Non-solicitation clauses are generally viewed more favorably by courts than pure non-compete restrictions and have a higher enforcement rate.</li>
              <li><strong>Confidentiality Period (Years):</strong> Set the duration in years during which the covenantor must maintain confidentiality of all proprietary business information, trade secrets, and non-public data they accessed during their engagement (e.g., 5 years). The standard defensible range under Indian IP law is 3 to 5 years.</li>
              <li><strong>Liquidated Damages Amount (INR):</strong> Enter the pre-agreed financial penalty the covenantor will be liable to pay if they breach the non-compete restrictions (e.g., ₹5,00,000). This sum must be a genuine pre-estimate of the loss your business would suffer from a breach — it cannot be punitive or disproportionate, or a court may refuse to enforce it.</li>
              <li><strong>Court Jurisdiction City:</strong> Enter the city whose courts will have exclusive jurisdiction over disputes arising from this agreement (e.g., Bengaluru). Best practice is to align this with your company&apos;s registered office city to ensure litigation convenience.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -8.jpg" alt="Step 8: Restrictions &amp; Remedies — non-compete period, territory, non-solicitation, confidentiality, liquidated damages, jurisdiction" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Generate, Review &amp; Execute the Non-Compete Agreement</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Finalize and deliver the executed agreement:</strong> Once all six steps are complete with green checkmarks in the sidebar, click the green <em>Generate</em> button. The platform opens the live document viewer displaying the full, formatted Non-Compete Agreement on company letterhead. The document begins with a <em>Title</em> section, followed by a <em>Parties</em> clause naming both the company and the covenantor, a <em>Recitals</em> section confirming the nature of engagement and consideration, and then the operative <em>Covenant Not to Compete</em> clauses. Before sharing, complete these final actions:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Verify the Document:</strong> Carefully read through the full generated text. Confirm that the company name, covenantor details, consideration amount, business description, restriction period, and territory are all accurately reflected as entered.</li>
              <li><strong>Add Signature Fields (Required):</strong> From the <em>Add Fields</em> panel on the right, drag and drop the <em>Signature</em> tile onto the signature lines for both the company signatory and the covenantor. This enables formal digital e-signing by both parties.</li>
              <li><strong>Add Date Fields:</strong> Drag the <em>Date</em> tile to the date lines adjacent to each signature block so that the exact date of signing is recorded for both parties.</li>
              <li><strong>Document Settings:</strong> Enable <em>Use Company Letterhead</em> to add your official company header and footer. Toggle the <em>Logo Watermark</em> based on your branding preference.</li>
              <li><strong>Share the Agreement:</strong> Click <em>Shared</em> to send the agreement to the covenantor for review and e-signing. The counter (e.g., 0/1) tracks how many recipients have signed. This action is final and cannot be undone.</li>
              <li><strong>Track Signed Status:</strong> Once the covenantor signs, click <em>Signed</em> to view and download the fully executed Non-Compete Agreement for your legal records.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Non-Compete Agreement/Non-Compete Agreement -9.jpg" alt="Final Phase: Generated Non-Compete Agreement — add signature and date fields, share, and track" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Legal Caution: Indian Courts and Non-Compete Enforceability
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 27 of the Indian Contract Act, 1872, any agreement in restraint of trade is void. However, Indian courts have carved out a narrow exception for post-employment non-competes that are reasonable in scope, duration, and territory, and supported by genuine consideration. Blanket non-competes — those that ban an individual from working in any capacity in an industry, without geographic limits, or for periods exceeding 2 to 3 years — are routinely struck down. Always ensure your restrictions are specifically tailored to your actual business interests, and consult your legal counsel before serving a non-compete in a dispute context.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Be Specific in Your Business Description
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The Business Description field on the Commercial Terms step is not a formality — it is the legal perimeter of your entire non-compete. Vague descriptions like &quot;technology company&quot; or &quot;software services&quot; give courts insufficient grounds to enforce the restriction precisely. Write a specific, focused description of exactly what your company does: the market segment, the type of customers served, the technology or service provided, and the geography. For example: &quot;SaaS-based legal documentation and startup compliance platform serving early-stage Indian founders and DPIIT-registered companies.&quot; The more precisely you define your business, the more enforceable your non-compete restriction becomes.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-create-mutual-nda",
    title: "How to Draft a Mutual Non-Disclosure Agreement (NDA)",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "7 minutes",
    lastUpdated: "June 2026",
    summary: "A Mutual Non-Disclosure Agreement (NDA) protects confidential information shared between two parties during business discussions. Learn how to configure disclosure details, party identities, confidentiality durations, and execute a legally sound Mutual NDA on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F7F0] border border-[#C5D09A] px-5 py-3 rounded-xl mb-2">
          <p className="text-xs font-semibold text-[#5C6F2D] uppercase tracking-wide">Protect Your IP — Agreement Type</p>
          <p className="text-sm text-brown-600 mt-0.5">This agreement falls under the <strong>Protect Your IP</strong> category on the Founding Legals Agreements page, alongside the Non-Compete Agreement, IP Assignment Agreement, Technology Transfer Agreement, Software License Agreement, and Trademark License Agreement.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Drafting Your Mutual NDA</h3>
          <p className="text-brown-700 leading-relaxed">
            A Mutual Non-Disclosure Agreement (NDA), also known as a two-way NDA, is the bedrock of secure business discussions. It ensures that when two entities share proprietary business information, intellectual property, financial data, or trade secrets during evaluation stages (such as partnership discussions, investment pitches, or joint venture assessments), both parties are equally obligated to maintain confidentiality. The Founding Legals platform guides you through a clear, structured wizard to draft, review, and execute a balanced, legally binding Mutual NDA under Indian law.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating a Mutual NDA</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Navigate to Agreements and Select Mutual NDA</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Access the module:</strong> From your dashboard, click <em>Agreements</em> in the left-hand navigation menu. Scroll to the <em>Protect Your IP</em> section and locate the <em>Mutual Non-Disclosure Agreement (NDA)</em> card. This module is designed to protect private business information shared between two parties by preventing unauthorized disclosure. Click the green <em>+ Create</em> button to begin.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 1.png" alt="Step 1: Locate Mutual NDA and click + Create" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Select Recipient (Party B)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the counterparty (Party B):</strong> A slide-out panel titled <em>Select Recipient</em> appears from the right. In a Mutual NDA, you are Party A and the counterparty you are sharing information with is Party B. You must select who will sign the agreement. Select an existing team member/contact from the list, or click <em>+ Add new recipient</em> to enter a new counterparty contact details. Recipient selection is mandatory to proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 2.png" alt="Step 2: Select Recipient panel to assign the counterparty" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms Baseline</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select your legal baseline:</strong> The <em>Choose Agreement Terms</em> panel slides out. Select between two options:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Founding Legals Standard Terms:</strong> Pre-populates the agreement with legally vetted, standard mutual NDA provisions. This balances the rights and obligations of both parties equally, ensuring a smooth path to signature without heavy negotiations.</li>
              <li><strong>Custom Terms:</strong> Choose this if you need to upload or paste custom-drafted confidentiality and non-use provisions tailored by your legal counsel.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Select your preference and click <em>Confirm</em>.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 3.png" alt="Step 3: Choose default or custom agreement terms baseline" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Agreement Details (Step 1 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Establish the agreement&apos;s signing context:</strong> In Step 1 of the configuration wizard, enter the basic parameters for the contract&apos;s execution details:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Execution Place:</strong> Enter the city where the agreement is formally signed (e.g., Bengaluru). This city sets the geographic base for jurisdictional clauses.</li>
              <li><strong>Execution Day:</strong> Click the calendar icon to select the exact execution date.</li>
              <li><strong>Execution Month &amp; Execution Year:</strong> These are auto-filled by the platform based on the date selected in the Execution Day field, ensuring perfect document formatting.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save these details and proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 4.jpg" alt="Step 4: Agreement Details — place and execution date" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Party A Details (Step 2 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Identify your company as the first party:</strong> Step 2 gathers the legal parameters of your organization (Party A):
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Party A Company Name (without Private Limited):</strong> Enter your company&apos;s name without the trailing &quot;Private Limited&quot; suffix (e.g., Testing). The template handles adding the corporate type suffix automatically.</li>
              <li><strong>Party A CIN:</strong> Enter your company&apos;s 21-character Corporate Identification Number registered with the MCA (e.g., U72200MH2026PTC123456).</li>
              <li><strong>Party A Registered Office Address:</strong> Enter your company registered office address. This must match your official MCA filing records exactly.</li>
              <li><strong>Party A Authorised Signatory Name:</strong> Enter the name of the executive authorized to sign the NDA on behalf of Party A (e.g., John Doe).</li>
              <li><strong>Party A Signatory Designation:</strong> Enter the signatory&apos;s official title (e.g., Director, Manager, CEO).</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to proceed to entering Party B&apos;s details.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 5.jpg" alt="Step 5: Party A Details — company name, CIN, registered office, and signatory info" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Party B Details (Step 3 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Identify the counterparty organization:</strong> Step 3 gathers the legal credentials of the second party (Party B) participating in the mutual information exchange:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Party B Company Name (without Private Limited):</strong> Enter the counterparty company name, omitting the &quot;Private Limited&quot; suffix (e.g., XYZ PVT LTD).</li>
              <li><strong>Party B CIN:</strong> Enter the counterparty&apos;s 21-character Corporate Identification Number. If they are a foreign entity or do not possess a CIN, you can enter a placeholder ID, such as a dummy or national registration ID (e.g., U00000AA0000PTC000000).</li>
              <li><strong>Party B Registered Office Address:</strong> Enter the complete physical address of Party B&apos;s registered office, including postal codes.</li>
              <li><strong>Party B Authorised Signatory Name:</strong> Enter the full name of Party B&apos;s signing authority (e.g., Jane Doe).</li>
              <li><strong>Party B Signatory Designation:</strong> Enter their corporate title (e.g., Director).</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save and move to configuration of agreement terms.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 6.jpg" alt="Step 6: Party B Details — counterparty legal identity details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">Agreement Terms (Step 4 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define the scope and durations of confidentiality:</strong> Step 4 contains the core operational parameters of the mutual confidentiality covenants. Pay close attention to these settings:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Purpose of Disclosure:</strong> Write a concise, clear description of the business context for sharing info (e.g., &quot;To discuss potential business collaboration&quot;). This defines the scope of use — using the shared information for any purpose other than what is written here constitutes a breach of contract.</li>
              <li><strong>Term of Agreement (Years):</strong> Specify the length of the sharing window during which the parties expect to exchange confidential information (e.g., 3 years).</li>
              <li><strong>Termination Notice (Days):</strong> Set the notice period required if either party wants to terminate the agreement before the full term ends (e.g., 30 days, which is the standard industry buffer).</li>
              <li><strong>Survival Period of Confidentiality (Years):</strong> Enter the number of years the confidentiality obligation continues *after* the agreement terminates or expires (e.g., 5 years). This ensures that even if discussions end, the shared secrets remain protected for the specified duration.</li>
              <li><strong>Return/Destroy Certification Period (Days):</strong> Enter the number of days within which a party, upon written request, must return or destroy all physical/digital copies of confidential data and certify this in writing (e.g., 14 days).</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save and proceed to remedies configuration.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 7.jpg" alt="Step 7: Agreement Terms — purpose, term, notice, survival, and return period" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">8</span>
              <strong className="text-base text-brown-900">Remedies &amp; Jurisdiction (Step 5 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Configure dispute resolution and financial penalties:</strong> Step 5 outlines the legal recourse in the event of a breach of confidentiality. Complete the fields as follows:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Liquidated Damages Amount (INR):</strong> Specify the pre-agreed financial penalty that the breaching party must pay to the injured party upon a breach of confidentiality (e.g., 5,00,000).</li>
              <li><strong>Liquidated Damages in Words:</strong> This field is auto-calculated and filled by the platform in text form (e.g., Rupees Five Lakh Only) to prevent discrepancies.</li>
              <li><strong>Seat of Arbitration / Jurisdiction City:</strong> Enter the city whose courts will have exclusive jurisdiction, and where arbitration proceedings will take place if disputes arise (e.g., Bengaluru). The system displays a validation note if the seat matches your corporate seat.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Once these details are saved, the <em>Generate</em> button will become active. Click it to advance to final review.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 8.jpg" alt="Step 8: Remedies &amp; Jurisdiction — liquidated damages and arbitration seat" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Final Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Final Review &amp; Field Placement (Step 6 of 6)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Prepare the document for execution:</strong> Once you click <em>Generate</em>, the system produces the full draft. The document viewer displays the Mutual Non-Disclosure Agreement, starting with the <em>Title</em>, followed by the <em>Parties</em> details, <em>Recitals</em> outlining the sharing context, and detailed terms. Follow these final execution steps:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Add Interactive Fields:</strong> Drag and drop the <em>Signature</em> field from the right-hand panel onto the respective signature lines for Party A and Party B.</li>
              <li><strong>Add Date and Stamp Fields:</strong> Drag the <em>Date</em> field onto the signature block. You can also upload a custom stamp if necessary.</li>
              <li><strong>Configure Settings:</strong> Toggle the <em>Use Company Letterhead</em> switch to add your company&apos;s branding. Toggle the <em>Logo Watermark</em> setting as desired.</li>
              <li><strong>Send for Signatures:</strong> Click the <em>Shared (0/1)</em> button at the top to dispatch the agreement to the counterparty for e-signing. Once all parties sign, you can track the status using the <em>Signed</em> badge and download the final PDF.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/Mutual Non-Disclosure Agreement (NDA)/Mutual Non-Disclosure Agreement (NDA) - 9.jpg" alt="Step 9: Final document generation, field dragging, sharing, and signing status" className="rounded-xl border border-[#D5DCB8] w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Scope of Confidentiality vs. Restraint of Trade
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            In India, while non-disclosure and confidentiality obligations are fully enforceable under common law and the Indian Contract Act, 1872, they must not act as a de facto restraint of trade under Section 27. Ensure that the restrictions on utilizing shared information are strictly limited to protecting actual trade secrets, intellectual property, and proprietary data. Using an NDA to block a counterparty from operating in an entire market sector without specific IP infringement may be ruled void as an unreasonable restraint.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Carefully Align Your Purpose of Disclosure
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The Purpose of Disclosure in Step 4 acts as the legal boundary for the permitted use of the information. If you write a purpose that is too broad, such as &quot;general discussions,&quot; it becomes difficult to prove that a counterparty misused the shared data. Conversely, if it is too narrow, you might technically breach the NDA yourselves by discussing related business topics. A strong, balanced Purpose of Disclosure should specify the project or transaction: e.g., &quot;To evaluate a potential strategic commercial partnership and joint marketing collaboration between the parties.&quot;
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-create-ip-assignment-agreement",
    title: "How to Draft an Intellectual Property (IP) Assignment Agreement",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "8 minutes",
    lastUpdated: "June 2026",
    summary: "An Intellectual Property (IP) Assignment Agreement permanently transfers ownership of intellectual property rights (such as software, patents, trademarks, or designs) from an individual creator or entity to a company. Learn how to define assignors, assignees, IP schedules, payment terms, and execute it legally on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F7F0] border border-[#C5D09A] px-5 py-3 rounded-xl mb-2">
          <p className="text-xs font-semibold text-[#5C6F2D] uppercase tracking-wide">Protect Your IP — Agreement Type</p>
          <p className="text-sm text-brown-600 mt-0.5">This agreement falls under the <strong>Protect Your IP</strong> category on the Founding Legals Agreements page, alongside the Non-Compete Agreement, Mutual Non-Disclosure Agreement (NDA), Technology Transfer Agreement, Software License Agreement, and Trademark License Agreement.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Understanding the IP Assignment Agreement</h3>
          <p className="text-brown-700 leading-relaxed">
            For startups and early-stage companies, ownership of intellectual property (IP) is the single most critical asset driving company valuation, investment readiness, and competitive advantage. Often, IP (such as source code, designs, branding, or algorithms) is created by founders, contractors, or external agencies before the company is officially incorporated or outside of formal employment contracts. An IP Assignment Agreement acts as a permanent, legally binding bridge that transfers all right, title, and interest in such IP from the creator (the Assignor) to the company (the Assignee).
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">Step-by-Step Guide to Creating an IP Assignment Agreement</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Navigate to Agreements and Select IP Assignment Agreement</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Access the module:</strong> Click on <em>Agreements</em> in the left-side navigation panel of the dashboard. Scroll to the <em>Protect Your IP</em> category and locate the <em>IP Assignment Agreement</em> card. This agreement permanently transfers complete ownership of intellectual property rights, including patents, copyrights, and trademarks, from creator to company. Click <em>+ Create</em>.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 1.png" alt="Step 1: Locate IP Assignment Agreement and click + Create" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Select Recipient (Assignor)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Assign the counterparty:</strong> The <em>Select Recipient</em> panel slides out from the right side of the page. Choose the creator (the individual or entity transferring the IP rights) from your existing contacts, or click <em>+ Add new recipient</em> to register a new user. Recipient selection is mandatory to configure and execute the document.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 2.png" alt="Step 2: Choose or add the Assignor recipient" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Choose Agreement Terms Baseline</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select default or custom terms:</strong> The <em>Choose Agreement Terms</em> panel will appear. You can pick:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Founding Legals Standard Terms:</strong> Automatically pre-populates standard IP assignment language (including comprehensive transfer of moral rights, waiver of future claims, and indemnification against third-party IP infringement).</li>
              <li><strong>Custom Terms:</strong> Choose this to import your legal team&apos;s specific assignment clauses.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Make your choice and click <em>Confirm</em>.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 3.png" alt="Step 3: Select default standard terms or custom terms" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Agreement Details (Step 1 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Specify the signing parameters:</strong> Under Step 1 of the configuration flow, enter:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Execution Place:</strong> Enter the city where this agreement is legally signed (e.g., Bengaluru).</li>
              <li><strong>Execution Date:</strong> Select the date of signing from the calendar.</li>
              <li><strong>Execution Month &amp; Year:</strong> Auto-filled based on the date selected above.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save and proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 4.jpg" alt="Step 4: Agreement Details — place and execution date" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Assignor Details (Step 2 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the creator&apos;s legal information:</strong> Step 2 gathers the details of the party transferring the IP:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Assignor Name:</strong> Full legal name of the individual creator or company.</li>
              <li><strong>Assignor Type:</strong> Select whether the Assignor is &quot;an individual&quot; or &quot;a company&quot;.</li>
              <li><strong>Assignor CIN (if company):</strong> If the Assignor is a corporate entity, provide their 21-character Corporate Identification Number.</li>
              <li><strong>Assignor PAN Number:</strong> Enter the Assignor&apos;s 10-character alphanumeric Permanent Account Number (PAN). This is required for taxation and stamp duty verification.</li>
              <li><strong>Assignor Address:</strong> Complete residential address (for individuals) or registered office address (for companies).</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 5.jpg" alt="Step 5: Assignor Details — name, type, PAN, and address" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Assignee Details (Step 3 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter the acquiring company&apos;s details:</strong> Step 3 gathers information for the company acquiring the IP:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Assignee Company Name (without Private Limited):</strong> Enter the legal name of your company, excluding the &quot;Private Limited&quot; suffix.</li>
              <li><strong>Assignee CIN:</strong> Enter your company&apos;s Corporate Identification Number.</li>
              <li><strong>Assignee Registered Office Address:</strong> Enter your company&apos;s registered address with the pin code.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Read any important system alerts that pop up, click <em>OK</em> on notifications, and click <em>Next Step</em> to proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 6.jpg" alt="Step 6: Assignee Details — acquiring company information" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">IP Details - Schedules A &amp; B (Step 4 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Delineate assigned IP vs. retained IP:</strong> Step 4 contains the core operational definition of the IP assets. You must fill out two schedules:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Description of Assigned IP (Schedule A):</strong> Fully describe the intellectual property being transferred. Be as specific as possible (e.g., &quot;Source code repository located at github.com/org/repo, UX/UI designs, system architectures, domain names, patents, and associated databases created for the product.&quot;).</li>
              <li><strong>Description of Pre-existing IP (Schedule B):</strong> List any intellectual property owned or developed by the Assignor *prior* to this engagement or outside this project that is NOT being assigned to the company. If none, write &quot;None&quot; or &quot;Not Applicable.&quot;</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save schedules and proceed.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 7.jpg" alt="Step 7: IP Details — Schedule A (Assigned) and Schedule B (Pre-existing) descriptions" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">8</span>
              <strong className="text-base text-brown-900">Commercial &amp; Payment Terms (Step 5 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Configure consideration and tax sections:</strong> An assignment without consideration is void under Indian contract law. Fill in the financial structures in Step 5:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Total Consideration Amount (INR):</strong> Enter the total acquisition price. The total must match the sum of Tranche 1 and Tranche 2 (e.g., 10,00,000).</li>
              <li><strong>Total Consideration in Words:</strong> Auto-calculated and rendered.</li>
              <li><strong>Tranche 1 Payment Amount (INR):</strong> Specify the first milestone payment due (e.g., 5,00,000).</li>
              <li><strong>Tranche 1 Payment Days:</strong> Enter the number of days after agreement execution within which Tranche 1 must be paid.</li>
              <li><strong>Tranche 2 Amount (upon recordal) (INR):</strong> Enter the final payment amount (e.g., 5,00,000) due after formal registration/recordal.</li>
              <li><strong>TDS Section:</strong> Choose the applicable Tax Deducted at Source (TDS) section for the assignor (e.g., Section 194J for technical/professional service fees).</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save and move forward.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 8.jpg" alt="Step 8: Commercial &amp; Payment Terms — milestones and TDS section" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 9 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">9</span>
              <strong className="text-base text-brown-900">Legal Provisions (Step 6 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select the seat of dispute resolution:</strong> In Step 6, enter:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Court Jurisdiction / Arbitration Seat City:</strong> Specify the city where courts have exclusive jurisdiction and where arbitration will take place (e.g., Bengaluru). The platform verifies that this aligns with the company registered corporate seat.</li>
            </ul>
            <p className="text-sm text-brown-600 leading-relaxed pl-10 mt-2">
              Click <em>Next Step</em> to save legal provisions.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 9.jpg" alt="Step 9: Legal Provisions — jurisdiction and arbitration seat" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 10 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <strong className="text-base text-brown-900">Final Review &amp; Field Placement (Step 7 of 7)</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Review and execute the assignment document:</strong> On the final step, preview the full IP Assignment Agreement. Verify the title, the parties, recitals, and intellectual property descriptions. To finalize:
            </p>
            <ul className="text-sm text-brown-600 leading-relaxed pl-16 space-y-1.5 list-disc">
              <li><strong>Drag Interactive Fields:</strong> Drag and drop the <em>Signature</em>, <em>Date</em>, and <em>Stamp</em> blocks onto the respective signatory sections for both the Assignor and the Assignee.</li>
              <li><strong>Configure Layout Settings:</strong> Choose whether to use your company letterhead, background watermarks, or adjust the viewer zoom controls.</li>
              <li><strong>Send for Signing:</strong> Click the <em>Shared</em> button to dispatch the document to the Assignor for digital signature. The progress can be monitored in the main dashboard until the status changes to <em>Signed</em>.</li>
            </ul>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Aggrements drafting help images/Protect Your IP/IP Assignment Agreement/IP Assignment Agreement - 10.jpg" alt="Step 10: Final document review, interactive field dragging, and status tracking" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Strict Requirements Under Section 19 of the Copyright Act, 1957
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Indian copyright law, assignments are strictly regulated. Section 19 of the Copyright Act, 1957 mandates that an assignment of copyright is not legally valid unless it is in writing and signed by the assignor. Furthermore, it must explicitly specify the assigned work, the rights assigned, the duration, and the territorial extent of the assignment. If the agreement fails to specify the duration, it defaults to 5 years by law. If the territory is omitted, it defaults to India only. The Founding Legals template is pre-configured to specify a <strong>perpetual</strong> and <strong>worldwide</strong> transfer to avoid these statutory defaults and protect your company&apos;s global ownership.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Ensure Clear Separation Between Schedule A &amp; Schedule B
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The clarity of your schedules is what prevents costly litigation down the line. Make sure that <strong>Schedule A (Assigned IP)</strong> explicitly names all repositories, design links, databases, and trade secrets, rather than relying on a vague statement like &quot;all work done.&quot; Conversely, if the founder or contractor has previous open-source libraries or patented algorithms they intend to leverage, these must be explicitly excluded under <strong>Schedule B (Pre-existing IP)</strong> to avoid claiming ownership over third-party or prior assets.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "step-by-step-guide-to-drafting-agreements",
    title: "Step-by-Step Guide: How to Draft and Execute Agreements",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "8 minutes",
    lastUpdated: "June 2026",
    summary: "A complete visual walkthrough showing how to choose templates, customize terms, manage signers, pay stamp duty, and execute legally binding agreements on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Overview of the Drafting Workflow</h3>
          <p className="text-brown-700 leading-relaxed">
            Founding Legals automates the entire contract lifecycle: from template selection and customization to e-stamping, signing, and storage. Follow this 16-step visual guide to draft and execute court-enforceable agreements in minutes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">16 Steps to Draft and Execute</h3>
          <ol className="list-decimal pl-5 space-y-8 text-brown-700">
            <li className="space-y-3">
              <div>
                <strong>Step 1: Access the Agreements Dashboard</strong>
                <p className="text-sm text-brown-600 mt-1">Navigate to the "Agreements" section on the left sidebar to view your contract templates and active draft pipelines.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Agreemnts draftt - 1.png" alt="Agreements Dashboard" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 2: Start a New Draft</strong>
                <p className="text-sm text-brown-600 mt-1">Click the "Create New Draft" button to open the interactive contract builder wizard.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrements draft - 2.png" alt="Create New Draft" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 3: Choose Your Agreement Template</strong>
                <p className="text-sm text-brown-600 mt-1">Select from our library of lawyer-curated templates, such as Employment Agreements, NDAs, contractor terms, or founder covenants.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement draft - 3.png" alt="Select Agreement Type" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 4: Configure Disclosing Party (Company) Details</strong>
                <p className="text-sm text-brown-600 mt-1">Enter your company's official name, registered address, CIN, and authorized signatory details.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement draft - 4.png" alt="Company Information" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 5: Define Counterparty Information</strong>
                <p className="text-sm text-brown-600 mt-1">Provide the name, email, PAN, and address of the counterparty (employee, contractor, or partner).</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement draft - 5.png" alt="Counterparty Information" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 6: Set Core Commercial &amp; Contract Terms</strong>
                <p className="text-sm text-brown-600 mt-1">Specify key dates, duration, compensation structures, or specific commercial terms of the arrangement.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrements draft - 6.png" alt="Commercial Terms" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 7: Customize Intellectual Property (IP) Assignment Covenants</strong>
                <p className="text-sm text-brown-600 mt-1">Configure IP ownership clauses to ensure all work product created belongs strictly to the company from day one.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement draft - 7.png" alt="Intellectual Property Covenants" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 8: Set Restrictive Covenants &amp; Non-Compete Clauses</strong>
                <p className="text-sm text-brown-600 mt-1">Define reasonable non-solicit (employees &amp; clients) and confidentiality periods to protect corporate interests.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrements draft - 8.png" alt="Restrictive Covenants" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 9: Choose Governing Law &amp; Court Jurisdiction</strong>
                <p className="text-sm text-brown-600 mt-1">Select the state law governing the contract and specify the local courts that hold exclusive dispute jurisdiction.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement draft - 9.png" alt="Governing Law and Jurisdiction" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 10: Preview the Dynamically Generated Contract</strong>
                <p className="text-sm text-brown-600 mt-1">Review the fully assembled contract text in real-time. Our editor dynamically injects your form data into the template.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrements draft - 10.png" alt="Contract Preview" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 11: Set Up E-Stamping &amp; Pay Stamp Duty</strong>
                <p className="text-sm text-brown-600 mt-1">Select the state for execution to calculate stamp duty, and complete digital payment for the government e-stamp certificate.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrements draft - 11.png" alt="E-Stamping Configuration" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 12: Add Signatories &amp; Signing Roles</strong>
                <p className="text-sm text-brown-600 mt-1">Specify signing order and designate who signs on behalf of the company, the counterparty, and optional witnesses.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement draft - 12.png" alt="Signatory Setup" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 13: Route for Digital Signature (e-Sign)</strong>
                <p className="text-sm text-brown-600 mt-1">Trigger signing invitations. Signers receive links to securely authenticate and sign via Aadhaar e-Sign.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement Draft - 13.png" alt="Route for e-Sign" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 14: Monitor Signature Progress</strong>
                <p className="text-sm text-brown-600 mt-1">Track the signing lifecycle on your dashboard to see who has signed and whose signature is pending.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement Drafft - 14.png" alt="Signature Tracking" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 15: Finalize Execution</strong>
                <p className="text-sm text-brown-600 mt-1">Once all signers complete authentication, the platform seals the document with secure Digital Signature Certificates (DSC).</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement Darfft - 15.png" alt="Final Execution Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>

            <li className="space-y-3">
              <div>
                <strong>Step 16: Access the Executed Document in Your Vault</strong>
                <p className="text-sm text-brown-600 mt-1">Download the fully executed agreement, complete with the e-stamp certificate and digital signature audit log, from the secure Vault.</p>
              </div>
              <div className="max-w-lg">
                <img src="/Help Center Guide/Aggrements drafting help images/Aggrement Draft - 16.png" alt="Vault Storage" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Enable Automatic Reminders
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If a counterparty hasn't signed an agreement within 48 hours, Founding Legals can automatically send SMS and WhatsApp reminders to speed up the onboarding or negotiation cycle. Turn this on in your Settings under "Notifications".
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "drafting-india-enforceable-nda",
    title: "Drafting an India-Enforceable NDA Before You Share Your Pitch Deck",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "Sharing your pitch deck, financial model, or product roadmap without a properly executed Non-Disclosure Agreement is one of the riskiest moves an early-stage founder can make. This article explains how to draft an NDA that holds up in Indian courts under the Indian Contract Act, 1872, what stamp duty applies, and how Founding Legals generates a court-enforceable NDA in under 90 seconds.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            An NDA in India is a contract: and like every contract, it must satisfy the essential elements under Section 10 of the Indian Contract Act, 1872: free consent, lawful consideration, lawful object, and competent parties. Three India-specific elements separate an enforceable NDA from a worthless one:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-brown-700">
            <li>
              <strong>Stamp Duty:</strong> An NDA executed on plain paper without proper stamping under the relevant State Stamp Act is inadmissible as evidence under Section 35 of the Indian Stamp Act, 1899. It&apos;s not invalid: just unusable when you need it most.
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
                  <td className="px-4 py-3 text-brown-700">Specific, identifiable categories: not vague &quot;all business info&quot;</td>
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
                  <td className="px-4 py-3 text-brown-700">CPC, 1908: Section 20</td>
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
            <li><strong>Step 1:</strong> Go to Pitch → NDA Generator → New NDA. Choose between Mutual NDA (both parties share confidential info: e.g., co-founder discussions) or Unilateral NDA (only you disclose: e.g., investor meetings).</li>
            <li><strong>Step 2:</strong> Enter the counterparty&apos;s name, address, and PAN/CIN. The platform validates the CIN against the MCA database in real-time.</li>
            <li><strong>Step 3:</strong> Select your jurisdiction city: Bengaluru, Mumbai, Delhi, Hyderabad, Pune, Gurugram, or Chennai. The system auto-calculates the applicable state stamp duty and shows you the exact denomination needed.</li>
            <li><strong>Step 4:</strong> Pick a Confidentiality Period (default: 3 years post-termination: the platform warns you if you exceed 5 years).</li>
            <li><strong>Step 5:</strong> Click &quot;Generate &amp; E-Sign&quot;. Founding Legals creates the NDA, integrates with NSDL/Protean Aadhaar e-Sign under the IT Act, 2000, and stores the executed version with an audit trail in your dashboard&apos;s Vault.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The Unstamped NDA Problem
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Founders frequently share decks under &quot;email NDAs&quot; or e-signed PDFs without paying stamp duty. While the contract technically exists, if your IP is stolen and you sue, the court will demand the agreement be stamped with penalty: up to 10× the deficit duty under Section 40 of the Indian Stamp Act: before it can even be admitted as evidence. Always stamp before signing.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Tag Your Deck Pages
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            An NDA only protects information explicitly marked or identifiable as confidential. Add a clear &quot;Confidential: Subject to NDA dated [date]&quot; watermark on every page of your pitch deck and financial model. Founding Legals&apos; Deck Watermark Tool does this automatically.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "preparing-for-angel-tax",
    title: "Preparing for Angel Tax: Section 56(2)(viib) & DPIIT Exemption",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "If your startup raises money at a valuation higher than its \"Fair Market Value,\" the excess can be taxed as income under Section 56(2)(viib) of the Income Tax Act, 1961: the infamous \"Angel Tax.\" This article explains how the tax works, who is exempt, and how Founding Legals helps you secure DPIIT recognition before your first cheque arrives.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            Under Section 56(2)(viib) of the Income Tax Act, 1961, when a private limited company issues shares to a resident at a price above the Fair Market Value (FMV) of those shares, the excess premium is treated as &quot;Income from Other Sources&quot; and taxed at the applicable corporate rate: currently up to 30.9% with surcharge and cess.
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
                  <td className="px-4 py-3 text-olive-600 font-medium">❌ No (post Finance Act 2023 reversal: under review)</td>
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
            <li><strong>Step 3:</strong> Upload your Brief Write-up on Innovation: the platform provides a 3-paragraph template aligned with what DPIIT officers approve most frequently.</li>
            <li><strong>Step 4:</strong> Once your DPIIT Recognition Certificate is issued (typically 7–15 working days), upload it to Pitch → Tax Exemptions. The dashboard automatically prepares Form 2 for the Section 56(2)(viib) exemption declaration.</li>
            <li><strong>Step 5:</strong> Before any priced round closes, run the &quot;Angel Tax Risk Check&quot; on your dashboard. It compares your round valuation against your FMV (computed from your last filed financials) and flags any premium that could trigger tax exposure.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: File Form 2 BEFORE Allotment
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The Section 56(2)(viib) exemption only applies if Form 2 is filed with DPIIT before the share allotment. Filing it after the fact does not retroactively cure the tax liability. Many founders raise first and discover the exemption process later: by then, the Assessing Officer can issue a tax demand for the entire premium.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Indian VCs and angel networks conduct due diligence under tighter compliance lenses than most founders expect: covering MCA, GST, ROC, FEMA, and labour law filings. This article lists every document your data room must contain before a term sheet is signed, and shows how Founding Legals auto-organises them into an investor-ready Vault.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            When an Indian investor commits capital, their legal team will conduct a Legal Due Diligence (LDD) covering compliance under the Companies Act, 2013, Income Tax Act, 1961, GST Act, 2017, FEMA, 1999, and applicable Labour Laws. Missing documents don&apos;t just delay closure: they often trigger Conditions Precedent (CPs) in the Share Subscription Agreement that you must satisfy before funds are released.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The 6 Pillars of an Investor-Ready Data Room</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-brown-200 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">1. Corporate &amp; Statutory</h4>
              <ul className="list-disc pl-5 text-xs text-brown-700 space-y-1">
                <li>Certificate of Incorporation (COI) with CIN</li>
                <li>MOA &amp; AOA: latest amended versions</li>
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
          <ol className="list-decimal pl-5 space-y-4 text-brown-700">
            <li>
              <strong>Step 1:</strong> Go to Pitch → Data Room → Setup. The platform auto-imports your incorporation documents, MCA filings, and cap table data already on your dashboard.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Pitch Data Room - 1.png" alt="Data Room Setup Page" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li><strong>Step 2:</strong> Run the &quot;Compliance Gap Scan&quot;. The system cross-references your CIN against the MCA21 portal and flags missing filings (e.g., overdue MGT-7, unfiled PAS-3 from a past round).</li>
            <li>
              <strong>Step 3:</strong> Upload pending documents through guided checklists. Each document is auto-tagged, indexed, and OCR-scanned for quick investor search.
              <div className="mt-3 max-w-lg">
                <img src="/Help Center Guide/Pitch Data Room - 2.png" alt="Data Room Guided Checklist" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li><strong>Step 4:</strong> Click &quot;Generate Investor Share Link&quot;. Choose granular access: View Only, Watermark Per Page, Download Disabled, and Expiry Date (typical: 14 days).</li>
            <li><strong>Step 5:</strong> Track investor engagement in real-time: see which documents were opened, by whom, and for how long. The audit log doubles as evidence under the IT Act, 2000 if confidentiality is ever breached.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Unfiled MGT-7 = Deal Breaker
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Investors run an MCA Master Data check within the first hour of due diligence. If your Form MGT-7 (Annual Return) is overdue, your company is marked as a &quot;Defaulting Company&quot; under Section 164(2): and your directors become disqualified from being on any other board for 5 years. This alone can collapse a round.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Build the Data Room Before You Pitch
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The best Indian founders maintain a &quot;live&quot; data room that&apos;s always 90% investor-ready: not one assembled in panic after a term sheet. Founding Legals continuously updates your Vault with every MCA filing, contract, and resolution you execute on the platform, so when an investor says &quot;send us your data room,&quot; you&apos;re a single click away.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "convertible-notes-safe-isafe",
    title: "Convertible Notes, SAFE & iSAFE: Which Instrument to Use in India",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Early-stage Indian startups raising bridge capital typically choose between Convertible Notes (CN), SAFE (Simple Agreement for Future Equity), and iSAFE (India SAFE). Each has very different legal treatment under the Companies Act, 2013 and FEMA, 1999. Picking the wrong one can disqualify your round or trigger RBI penalties. This article explains the right fit and how Founding Legals generates the correct instrument.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Convertible Note (CN): Defined under Rule 2(1)(c) of the Companies (Acceptance of Deposits) Rules, 2014. A debt instrument that converts into equity on a future trigger event (next priced round, maturity, or exit). Treated as a &quot;non-deposit&quot; only if minimum investment is ₹25 Lakh per investor and the startup is DPIIT-recognised.
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
                  <td className="px-4 py-2.5 text-brown-700">When the note matures: must be within 10 years under Indian law</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Trigger Event</td>
                  <td className="px-4 py-2.5 text-brown-700">Priced round, IPO, M&amp;A, or expiry: whichever first</td>
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
            <li><strong>Step 4:</strong> On the next priced round, the platform runs the CN Conversion Engine: calculates whether the discount or the cap gives the investor more shares, and converts the CN into CCPS or equity automatically.</li>
            <li><strong>Step 5:</strong> File Form PAS-3 for the share allotment within 30 days of conversion.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: ₹25 Lakh Minimum for CN
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under the Companies (Acceptance of Deposits) Rules, 2014, a Convertible Note from a single investor must be at least ₹25 Lakh to qualify as &quot;not a deposit.&quot; Receiving smaller amounts as CN reclassifies them as public deposits: a serious violation attracting refund + interest + penalty under Section 73 of the Companies Act.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Use CN for Bridge Rounds, CCPS for Priced Rounds
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            CNs are excellent for quick bridge capital between priced rounds where valuation is ambiguous. For your first institutional round, skip the CN and go directly to a priced CCPS round: most Indian VCs prefer the certainty of a defined cap table.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "term-sheet-negotiation",
    title: "Term Sheet Negotiation: The 12 Indian Clauses That Matter",
    moduleId: "pitch",
    moduleName: "Pitch",
    readingTime: "9 minutes",
    lastUpdated: "May 2026",
    summary: "A term sheet is \"non-binding\" except for a few clauses: but it sets the legal architecture of your funding round and is 90% replicated verbatim into the Share Subscription Agreement (SSA) and Shareholders' Agreement (SHA). This article breaks down the 12 most consequential clauses an Indian founder must negotiate.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            Term Sheet: A preliminary document outlining the commercial and legal terms of an investment. In India, the binding clauses are typically Exclusivity, Confidentiality, Costs, and Governing Law. The rest become binding only via the SSA and SHA, but in practice are very hard to renegotiate.
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
                  ["1", "Valuation (Pre-money / Post-money)", "\"Post-money valuation\" includes the ESOP pool: confirm whose dilution it sits on"],
                  ["2", "ESOP Pool", "Investors push for 10–15% pool pre-money, fully diluting founders"],
                  ["3", "Liquidation Preference", "Push for 1× non-participating: anything more is investor-friendly"],
                  ["4", "Anti-Dilution", "Demand Broad-Based Weighted Average, never Full Ratchet"],
                  ["5", "Drag-Along Rights", "Allow only above a minimum sale price (e.g., 2× of last valuation)"],
                  ["6", "Tag-Along Rights", "Standard: accept, but cap to founder's transfer above 1%"],
                  ["7", "Right of First Refusal (ROFR)", "Investor's right to buy if founder sells: accept with carve-outs"],
                  ["8", "Board Composition", "Each investor wants 1 seat: cap total Investor Directors at 1–2"],
                  ["9", "Reserved Matters / Veto Rights", "List items needing investor consent: minimise to truly strategic items"],
                  ["10", "Exit / Liquidity", "Investors demand exit within 5–7 years: push for 7"],
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
                  <td className="px-4 py-2.5 text-olive-600 font-semibold">✅ Binding: typically 30–60 days</td>
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
            <li><strong>Step 5:</strong> Track the Exclusivity Clock: the platform alerts you 5 days before exclusivity expires so you can renegotiate or walk away.</li>
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

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Negotiate Veto Items Down to &lt;10
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Investors typically list 25–35 reserved matters. Most are reasonable (M&amp;A, dissolution, dividend), but several creep into operational decisions (budget approval, hiring senior staff, opening bank accounts). Push for a tight list of 8–10 truly strategic items: operational vetoes will paralyse you 18 months in.
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
    summary: "Authorized Capital is the maximum share capital your company is legally allowed to issue, while Paid-Up Capital is the actual money shareholders have paid in exchange for shares. Confusing the two is one of the most expensive early-stage mistakes Indian founders make: it can stall a funding round by 3–4 weeks and trigger penalties under the Companies Act, 2013.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            Under the Companies Act, 2013, every Indian private limited company is required to declare its share capital structure in Clause V of its Memorandum of Association (MOA): known as the Capital Clause. This single clause sets the ceiling for everything your cap table can ever do.
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
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Authorized vs. Paid-Up: The Key Distinctions</h3>
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
                  <td className="px-4 py-3 text-brown-700">Yes: must always be ≥ Paid-Up</td>
                  <td className="px-4 py-3 text-brown-700">No: can never exceed Authorized</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Form to Modify</td>
                  <td className="px-4 py-3 text-brown-700">Form SH-7 (within 30 days)</td>
                  <td className="px-4 py-3 text-brown-700">Form PAS-3 (within 30 days of allotment)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-brown-900">Stamp Duty</td>
                  <td className="px-4 py-3 text-brown-700">Yes: state-specific, paid on increase</td>
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
            <li>Amend the MOA: and possibly the AOA via Form MGT-14, if the AOA caps the authorized limit.</li>
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
            Nearly every Indian private limited company is incorporated with a default Authorized Capital of ₹1,00,000 (10,000 shares of ₹10 face value). Founders discover the limit only when a Series A investor is ready to wire funds: triggering a frantic 3-week scramble. If your committed round is north of ₹50 Lakh, you almost certainly need to increase Authorized Capital before closing.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "CCPS Explained: Why Indian Investors Don't Take Equity Shares",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Almost every institutional investor in India invests through Compulsorily Convertible Preference Shares (CCPS) rather than equity shares: for tax, downside protection, and FEMA reasons. This article explains how CCPS work under the Companies Act, 2013, why your cap table must distinguish Current vs. Fully Diluted ownership, and how Founding Legals automates the conversion math.",
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
            <li><strong>FEMA Compliance:</strong> Under FEMA 20(R), CCPS qualify as &quot;equity instruments&quot; for FDI purposes: unlike Optionally Convertible Preference Shares (OCPS), which are treated as External Commercial Borrowings (ECB).</li>
            <li><strong>No Voting at Equity Threshold:</strong> Until conversion, CCPS typically carry voting rights only on matters affecting their class.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">CCPS Key Terms: A Founder&apos;s Glossary</h3>
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
                  <td className="px-4 py-2.5 text-brown-700">Event that forces conversion: typically IPO, exit, or expiry of tenure</td>
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
            Under Rule 9 of the Companies (Share Capital and Debentures) Rules, 2014, CCPS must convert into equity within 20 years from the date of issue. If your termsheet specifies a longer or open-ended conversion window, the share issue is invalid. For FDI-funded CCPS, FEMA 20(R) further restricts conversion price formulas: your CCPS must convert at a price determined upfront or by an internationally accepted pricing methodology.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    summary: "Under Section 88 of the Companies Act, 2013, every Indian company must maintain a Register of Members in Form MGT-1. This is not optional: failure to maintain it attracts a penalty of ₹3 Lakh on the company plus ₹50,000 per officer in default. This article shows how Founding Legals auto-generates MGT-1 every time you update your cap table.",
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
                  <td className="px-4 py-3 text-brown-700">Equity / Preference / CCPS: and class-wise breakdown</td>
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
            <li><strong>Step 3:</strong> When you issue new shares via the platform, the register updates within seconds: folio, share certificate, and distinctive numbers are auto-allotted in continuous sequence.</li>
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

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Nominees Are Not Optional
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Encourage every shareholder: especially founders: to file a Form SH-13 nomination when they become members. Without a nominee, transmission of shares on death goes through a probate process that can freeze the cap table for 6–18 months. Founding Legals prompts every member to file SH-13 during onboarding.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "creating-esop-pool-vesting-tax",
    title: "Creating an ESOP Pool: Vesting Schedules, Form MGT-14, and Tax Triggers",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "9 minutes",
    lastUpdated: "May 2026",
    summary: "An Employee Stock Option Plan (ESOP) is the most powerful retention tool for early-stage Indian startups: but it's also one of the most over-engineered. This article explains how to set up an ESOP pool under the Companies Act, 2013, structure vesting, file Form MGT-14, and understand the double-taxation event under the Income Tax Act.",
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
            When an employee exercises ESOPs, they pay the Exercise Price (cash) + Perquisite Tax (cash on the gap between FMV and Exercise Price): all before they&apos;ve sold a single share. For unlisted startups, the FMV is determined by a Merchant Banker&apos;s valuation under Rule 3(8). Founders must communicate this cash burden upfront: or offer cashless exercise mechanisms in liquidity events.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: DPIIT Tax Deferral for Eligible Startups
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 192(1C) of the Income Tax Act (inserted via Finance Act 2020), employees of DPIIT-recognised eligible startups can defer ESOP perquisite tax for up to 5 years from exercise, sale of shares, or leaving the company: whichever is earliest. This is one of the biggest under-utilised benefits of DPIIT recognition.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "share-transfer-sh-4-guide",
    title: "Share Transfer via Form SH-4: Selling Founder/Investor Shares",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "Transferring shares in an Indian private limited company isn't as simple as signing a document: it requires Form SH-4, stamp duty under the Indian Stamp Act, 1899, board approval, and updates to your Register of Members. This article walks through the complete process.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Form SH-4: The Share Transfer Deed prescribed under Section 56(1) of the Companies Act, 2013 read with Rule 11 of the Companies (Share Capital and Debentures) Rules, 2014. Without an executed and stamped SH-4, no share transfer is legally valid.
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
            Under Section 56(1), the executed SH-4 must be lodged with the company within 60 days of execution. Miss this, and the transfer is invalid: even if both parties have agreed. The shares legally remain with the transferor, and the consideration may be treated as an &quot;unsecured loan.&quot; Always lodge immediately.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Bundle ROFR Waivers Upfront
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If you&apos;re anticipating multiple founder/early-employee secondary sales over 12 months, get all existing shareholders to sign a blanket ROFR Waiver at the start. It saves you 30-day notice cycles for each transfer: and Indian VCs are usually open to this if structured around their portfolio reviews.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "fdi-compliance-fc-gpr-filing",
    title: "FDI Compliance & FC-GPR Filing: When Foreign Investors Wire Money",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "8 minutes",
    lastUpdated: "May 2026",
    summary: "The moment a foreign investor wires money to your Indian startup, you trigger Foreign Exchange Management Act (FEMA), 1999 compliance: including filing Form FC-GPR with the Reserve Bank of India within 30 days of share allotment. Miss this, and you face compounding fees, penalties up to 3× the contravention amount, and difficulty receiving future FDI. This article walks through the complete FDI flow.",
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
            <li>Receive Funds via banking channel: money lands in INR via Authorised Dealer Bank (AD Bank).</li>
            <li>AD Bank issues KYC + FIRC (Foreign Inward Remittance Certificate) to the company.</li>
            <li>Allot Shares within 60 days of receipt of funds (otherwise refund + penalty).</li>
            <li>Conduct a Rule 11UA Valuation: share price must be ≥ valuation determined by SEBI-registered Merchant Banker.</li>
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
            <li><strong>Step 2:</strong> Platform runs the Sectoral Cap Check: confirms your sector is under Automatic Route and FDI cap is not breached.</li>
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

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "Director Appointments: DIR-3 KYC, DIN, and Form DIR-12",
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
            Disqualification #3 is the most common founder trap: missing 3 years of MGT-7 deactivates the DIN across all companies the director sits on.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">How to Do It on Founding Legals</h3>
          <ol className="list-decimal pl-5 space-y-3 text-brown-700">
            <li><strong>Step 1:</strong> Go to Cap Table → Directors → Add Director. Enter PAN, name, address, nationality. If they don&apos;t have a DIN, the platform initiates the DIR-3 application with auto-attached identity proofs.</li>
            <li><strong>Step 2:</strong> Once DIN is allotted, conduct the Board Meeting approving appointment (Section 152) and obtain consent in Form DIR-2 from the director.</li>
            <li><strong>Step 3:</strong> File Form DIR-12 within 30 days, signed digitally by an existing director using their DSC.</li>
            <li><strong>Step 4:</strong> Set up the Annual DIR-3 KYC Reminder. Platform sends notifications to every DIN holder in Aug/Sept: and auto-files the KYC return if you provide consent.</li>
            <li><strong>Step 5:</strong> Use the Director Disqualification Tracker: the platform monitors filings continuously and flags any 2-year overdue status before the 3-year trigger hits.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: One Missed MGT-7 Cascades Across Boards
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 164(2)(a), if your company misses MGT-7 for 3 consecutive years, every director is disqualified for 5 years from every company they sit on: including other investor portfolio companies and family businesses. This has triggered mass resignations and forced cleanups across the Indian startup ecosystem. Always file MGT-7 on time.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "Annual ROC Filings: AOC-4, MGT-7 & DPT-3 Deadlines",
    moduleId: "cap-table-share-management",
    moduleName: "Cap Table & Share Management",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Every Indian private limited company: even one with zero revenue: must file annual returns with the Registrar of Companies (ROC). The three flagship filings are Form AOC-4 (financial statements), Form MGT-7/7A (annual return), and Form DPT-3 (return of deposits). Missing these is the single most common cause of startup director disqualification under Section 164.",
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
            Under Section 164(2)(a), if your company fails to file AOC-4 OR MGT-7 for any 3 consecutive financial years, every director is automatically disqualified for 5 years from all companies: and their DIN is deactivated. The MCA runs this check annually after 31st March. Once disqualified, recovery requires NCLT proceedings under Section 252.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Under the Indian Copyright Act, 1957, the person who creates code, design, or content owns the copyright: not the company that pays them: unless there is an explicit written assignment. This is the single biggest IP risk for Indian startups, and it's why every founder, employee, and contractor agreement on Founding Legals contains a non-deletable IP Assignment clause.",
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
                  <td className="px-4 py-2.5 text-brown-700">Ambiguous: depends on whether agreement has assignment clause</td>
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
            <li><strong>Step 5:</strong> Use the IP Registry tab to log every codebase, trademark, and patent: linked to the relevant agreements, ready for due diligence.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: The Pre-Incorporation IP Gap
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Founders typically build the MVP before incorporating the company. Without a Founder IP Assignment Agreement executed post-incorporation, that MVP legally belongs to the founders as individuals: not the company. If a co-founder later leaves, they can theoretically demand royalties or fork the product. Every Indian VC checks for this document during diligence. Execute it on day 1.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "Why Post-Employment Non-Competes Don't Work in India: And What to Use Instead",
    moduleId: "agreements",
    moduleName: "Agreements",
    readingTime: "5 minutes",
    lastUpdated: "May 2026",
    summary: "If your employment agreement says \"the employee shall not work for a competitor for 2 years after leaving,\" that clause is void and unenforceable in India under Section 27 of the Indian Contract Act, 1872. This article explains why, and shows the three clauses you can enforce: Confidentiality, Non-Solicitation, and Garden Leave.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed font-semibold">
            Section 27 of the Indian Contract Act, 1872: &quot;Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void.&quot;
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            The only statutory exception is the sale of goodwill. Employment relationships are not an exception. Indian courts: including the Supreme Court in Niranjan Shankar Golikari v. Century Spinning (1967) and Wipro v. Beckman Coulter (2006): have consistently held:
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
            Including an unenforceable non-compete doesn&apos;t just fail: it can damage your overall litigation position. Courts view founders who insert such clauses unfavourably, treating it as evidence of an attempt to suppress employee mobility. If you&apos;re litigating a confidentiality breach with an aggressive non-compete in the same contract, expect the judge to be skeptical.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Make Non-Solicit Specific and Recent
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            A non-solicit clause that says &quot;shall not solicit any client of the company&quot; is too broad. Narrow it to &quot;any client with whom the employee had material contact in the 12 months prior to termination.&quot; Indian courts uphold specific, recent, reasonable non-solicits: and strike down vague, sweeping ones.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "generating-managing-company-policies",
    title: "Getting Started with Company Policies & Employee Handbooks",
    moduleId: "policies",
    moduleName: "Policies",
    readingTime: "6 minutes",
    lastUpdated: "June 2026",
    summary: "A robust set of company policies protects your business, ensures statutory compliance, and sets clear expectations for your team. Learn how to generate, customize, and publish legally compliant policies on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Your Compliance &amp; HR Foundation</h3>
          <p className="text-brown-700 leading-relaxed">
            Company policies are not just bureaucratic paperwork; they are the legal shield of your startup. From POSH guidelines to maternity benefits, leaves, and confidentiality, having clear, written policies prevents employee disputes and keeps you fully compliant with Indian labour laws. The Policies module on Founding Legals allows you to generate customized, state-specific policies in minutes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">How to Generate &amp; Manage Company Policies</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Access the Policies Workspace</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Overview Dashboard:</strong> Navigate to the <em>&quot;Policies&quot;</em> tab in the main sidebar. The dashboard displays all active, drafting, and pending policies for your company. You can monitor overall compliance status and see what policies are missing or require updates at a glance.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Policies - 1.png" alt="Step 1: Policies Dashboard Overview" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Select a Policy Category</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Pre-vetted Legal Templates:</strong> Choose from standard folders containing categorized policies such as Employment Policies, Website Policies, and Staff Handbooks. Click on the specific policy you wish to create (e.g. Leave Policy, Maternity Policy, or Code of Conduct).
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/policies - 2.png" alt="Step 2: Select a Policy Template" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Answer the Customization Questionnaire</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Tailor to Your Business Structure:</strong> Complete the dynamic questionnaire fields. You will be prompted to enter details specific to your startup, including registered states, headcount, probation limits, standard working hours, and custom employee benefits.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/policies - 3.png" alt="Step 3: Customization Questionnaire" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Generate and Preview the Policy Draft</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Real-Time Policy Rendering:</strong> The platform reads your questionnaire answers and automatically compiles a legally vetted draft. Preview the organized sections, definitions, statutory references, and clauses on-screen before finalizing.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/policies - 4.png" alt="Step 4: Preview Generated Policy Document" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Customize Specific Clauses</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Edit directly in the Document Editor:</strong> Fine-tune text, insert company-specific clauses, or modify rules in the integrated editor. The core legal sections are protected to preserve compliance, but you can adjust operational details easily.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/policies - 5.png" alt="Step 5: Edit Document Clauses" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Publish, Share, and Track Consent</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Reconciliation and Compliance:</strong> Once satisfied, publish the policy. You can download the PDF under your company letterhead, distribute it to employees via email, and track electronic acknowledgments or signatures from the dashboard.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/policies - 6.png" alt="Step 6: Publish &amp; Distribute Policy" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: State-Specific Variations under Shops &amp; Establishments Act
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Employment policies (especially regarding leaves, holidays, working hours, and termination notice) are governed by state-specific Shops and Establishments Acts. A leave policy that is perfectly legal in Maharashtra may violate statutory minimums in Karnataka or Delhi. Ensure that the correct state registry details are selected during the questionnaire phase to avoid producing non-compliant or illegal employment policies.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Obtain Written and Tracked Employee Acknowledgment
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Merely publishing a policy is not legally sufficient to enforce it during a dispute. To make policies (such as NDAs, Code of Conduct, or IT Security Rules) binding, you must obtain a signed acknowledgment of receipt and consent from every employee. Founding Legals automates this workflow by sending signature links and storing the signed acknowledgment files directly alongside each employee&apos;s records.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "drafting-customizing-staff-handbook",
    title: "How to Draft and Customize Your Staff Handbook",
    moduleId: "policies",
    moduleName: "Policies",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "A comprehensive Staff Handbook aligns your team and sets clear operational boundaries. Learn how to draft, customize, and publish your company's employee handbook step-by-step on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Aligning Your Team With a Classy Employee Handbook</h3>
          <p className="text-brown-700 leading-relaxed">
            Your Staff Handbook is the cultural and operational guide for your startup. It sets clear boundaries around work ethics, data security, code of conduct, leaves, and core benefits. Rather than using generic templates, Founding Legals helps you build a professional, legally-compliant handbook tailored to your startup&apos;s specific operations and state regulations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">How to Draft and Customize Your Staff Handbook</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Initiate the Staff Handbook Document</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select the Staff Handbook Builder:</strong> Go to the Policies panel and select the <em>&quot;Staff Handbook&quot;</em> builder. This opens the handbook configuration overview page, allowing you to track completion milestones and draft details in one centralized workspace.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/staff hand book/Staff hand book - 1.png" alt="Step 1: Open Staff Handbook Configurator" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Complete the Customization Questionnaire</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Define Your Workplace Rules:</strong> Fill out the customization form. Answer questions regarding probation timelines, standard office timings, leaves, notice periods, and confidentiality rules to tailor the handbook to your operations.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/staff hand book/Staff hand book - 2.png" alt="Step 2: Answer Handbook Questionnaire" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Preview the Generated Chapters</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Interactive Document Outline:</strong> Preview the compiled chapters of your handbook. The platform automatically organizes standard sections such as Code of Conduct, IT Policies, and Statutory Employee Benefits for your review.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/staff hand book/Staff hand book - 3.png" alt="Step 3: Preview Generated Handbook Draft" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Fine-Tune and Edit Specific Chapters</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Tailored Wording &amp; Additions:</strong> Use the interactive document editor to refine individual clauses. You can adjust the text to match your startup&apos;s cultural values or add specific company guidelines.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/staff hand book/Staff hand book - 4.png" alt="Step 4: Edit and Customize Handbook Content" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Finalize, Export, and Distribute</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Lock and Share with Your Team:</strong> Finalize the handbook draft. You can export a beautifully formatted PDF with your company letterhead, distribute it directly to your employees, and collect digital acknowledgments through the portal.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/staff hand book/Staff hand book - 5.png" alt="Step 5: Publish &amp; Distribute Handbook" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Clear Notice Policies and Labor Laws
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Ensure notice periods and probation clauses comply with the Shops and Establishments Act of your company registry state. Notice periods that exceed legal minimums or arbitrary termination rules can be successfully challenged under industrial dispute laws. Always double check that notice periods during probation vs. confirmed employment are set logically.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Make the Handbook Part of New Hire Onboarding
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Integrate the handbook signoff into your automated onboarding checklist. Collecting signatures on the day of joining ensures that employees are bound by policies like non-disclosure, IP assignment, and code of conduct before they begin writing code or interacting with clients.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "drafting-generating-employment-agreements",
    title: "How to Draft and Generate Employment Agreements",
    moduleId: "policies",
    moduleName: "Policies",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "An Employment Agreement outlines the terms of employment, compensation, and legal protections. Learn how to draft, customize, and generate legally compliant employment agreements on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Onboard Safely with Professional Employment Agreements</h3>
          <p className="text-brown-700 leading-relaxed">
            A solid employment agreement protects your intellectual property, prevents disputes, and ensures clarity for your hires. Instead of drafting contracts manually, Founding Legals provides a streamlined wizard that constructs state-specific, legally-compliant employment agreements tailored to your candidate&apos;s role, probation period, and salary components.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">How to Draft and Generate Employment Agreements</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Access the Employment Agreement Configurator</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Initiate a New Agreement:</strong> Navigate to the Policies dashboard and click on the <em>&quot;Employment Agreement&quot;</em> card. This launches the step-by-step drafting flow, letting you manage your draft database and candidate profiles from one page.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Employment Polices/employement - 1.png" alt="Step 1: Open Employment Agreement Builder" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Input Employee and Job Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter Core Information:</strong> Fill out the form fields with the employee&apos;s full legal name, designation, department, and registry location. The platform matches these to your state settings for localized labor law compliance.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Employment Polices/employement - 2.png" alt="Step 2: Input Employee Information" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Set Up Compensation and Working Terms</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Configure Work and Leave Parameters:</strong> Define the salary structure (CTC), probation periods, standard work hours, and notice terms. The configurator automatically aligns the fields with statutory minimums for your region.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Employment Polices/employement - 3.png" alt="Step 3: Define Compensation &amp; Work Hours" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Generate and Review the Agreement Clauses</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Verify Legal Terms:</strong> Preview the compiled contract sections, including non-disclosure clauses, intellectual property assignment, and termination rules. The platform structures them logically so they are ready for signing.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Employment Polices/employement - 4.png" alt="Step 4: Preview Generated Contract" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Export and Distribute for Signatures</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Finalize the Contract:</strong> Lock the generated draft. Download the branded PDF featuring your authorized signature, then email it directly to the employee or collect digital signatures through the dashboard.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Employment Polices/employement - 5.png" alt="Step 5: Publish &amp; Sign Agreement" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Clear Non-Compete Clauses
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 27 of the Indian Contract Act, 1872, post-employment non-compete clauses are generally void and unenforceable. Avoid adding sweeping non-compete restrictions that prevent employees from seeking work elsewhere. Instead, protect your interests using strong non-solicit and IP assignment clauses, which are fully enforceable under Indian law.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Align Employment Terms with Offer Letters
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Ensure the designation, CTC components, and joining date in the employment agreement match the offer letter exactly. Discrepancies between the two documents can lead to disputes and complicate compliance records during payroll integration.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "generating-website-policies",
    title: "How to Generate and Manage Website Policies",
    moduleId: "policies",
    moduleName: "Policies",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "Every online business requires robust website legal agreements like Privacy Policies and Terms of Service. Learn how to draft, configure, and publish your website policies on Founding Legals.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Protect Your Online Platform with Website Policies</h3>
          <p className="text-brown-700 leading-relaxed">
            Running a website or mobile app means interacting with user data and processing transactions. Having clear website policies (such as a Privacy Policy, Terms of Service, and Refund Rules) is essential to stay compliant with global data protection laws (like the DPDP Act in India and GDPR globally). Founding Legals makes this easy with an interactive builder that generates tailored policies for your platform.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">How to Generate and Manage Website Policies</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Access the Website Policies Workspace</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Open the Builder:</strong> Navigate to the Policies dashboard and select the <em>&quot;Website Policies&quot;</em> section. This workspace allows you to manage active policies, see missing agreements, and track draft versions.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Website policies/Website policies - 1.png" alt="Step 1: Open Website Policies Workspace" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Input Platform and Company Information</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Enter Base Details:</strong> Fill in your platform domain name, registered business entity name, support email, and physical office address. The platform will map these details to the generated legal text.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Website policies/Website policies - 2.png" alt="Step 2: Enter Base Information" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Define User Terms &amp; Refund Parameters</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Customize Policy Rules:</strong> Answer the questionnaire sections covering user account management, payment processing, intellectual property rights, governing law, and refund policies.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Website policies/Website policies - 3.png" alt="Step 3: Define Terms and Refund Rules" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Generate and Preview the Policy Text</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Verify Legal Structures:</strong> Preview the compiled draft. The platform renders terms that match global privacy frameworks and local laws, ensuring all standard disclosures are structured clearly.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Website policies/Website policies - 4.png" alt="Step 4: Preview Generated Policy Text" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Publish, Export, and Embed</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Distribute Legal Policies:</strong> Finalize the draft. You can download the documents in text format, export a branded PDF with your company letterhead, or copy the direct embed code to host it on your live website footer.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Policeis/Website policies/Website Policies - 5.png" alt="Step 5: Publish &amp; Export Policy" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Digital Personal Data Protection (DPDP) Act Compliance
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under India&apos;s DPDP Act, 2023, you must obtain explicit, unambiguous, and specific consent before processing user data. Your privacy policy must clearly state what data is collected, why it is processed, how users can withdraw consent, and provide details of your Grievance Officer. Non-compliance can lead to penalties up to ₹250 crores. Ensure your DPDP settings are filled out accurately.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Update Website Policies Annually
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Data privacy regulations and app store compliance standards change constantly. Review your privacy policy and terms of service at least once a year, or whenever you introduce new tracking tools, third-party analytics, or changes to payment flows.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "posh-act-compliance-10-employees",
    title: "POSH Act Compliance: The 10-Employee Trigger Every Founder Must Know",
    moduleId: "policies",
    moduleName: "Policies",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "The moment your startup reaches 10 or more employees (including contractors, interns, and part-timers), you are legally mandated to comply with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013: known as the POSH Act. Non-compliance carries a penalty of ₹50,000, escalating to cancellation of business licence. This article shows exactly what you must do.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Legal Breakdown / Why It Matters</h3>
          <p className="text-brown-700 leading-relaxed">
            <strong>POSH Act, 2013:</strong> A central legislation enacted to prevent and redress sexual harassment of women at the workplace. It applies to every workplace in India: corporate, NGO, household, public, private: regardless of sector.
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
                  <td className="px-4 py-2.5 text-brown-700">Permanent: at office + on intranet</td>
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
          <h3 className="text-xl font-semibold text-brown-900 mb-3">ICC Composition: The 4 Mandatory Members</h3>
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
            <li><strong>Step 4:</strong> Roll out the POSH Training Module to all employees: a recorded course with quiz, auto-issuing completion certificates.</li>
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

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Don&apos;t Wait Till You Hit 10
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Even if you have 5 employees today, draft the POSH Policy now. It establishes a written workplace standard, is auto-included in agreements, and demonstrates good governance during investor diligence: which Indian VCs increasingly evaluate. POSH compliance is now a standard CP in Series A term sheets.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "founders-agreement-vesting-exits",
    title: "The Founder's Agreement: Vesting, Roles, and Co-Founder Exits",
    moduleId: "team-members",
    moduleName: "Team Members",
    readingTime: "8 minutes",
    lastUpdated: "May 2026",
    summary: "The Founder's Agreement (also called Co-Founders Agreement) is the single most important contract between you and your co-founders: yet it's the one Indian founders most often skip. It handles founder vesting, role definitions, decision-making, IP assignment, and what happens if a co-founder leaves. This article shows what it must contain.",
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
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Founder Vesting: The Indian VC Standard</h3>
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
            <li><strong>Step 3:</strong> Define Reserved Matters: strategic decisions requiring all-founder unanimous approval (e.g., M&amp;A, fundraise, key hires, equity dilution).</li>
            <li><strong>Step 4:</strong> Toggle the Reverse Vesting clause: converts already-held founder shares into buyback-eligible structure.</li>
            <li><strong>Step 5:</strong> Generate, stamp (₹500 under Maharashtra Stamp Act), and e-sign via Aadhaar. The agreement is auto-linked to your Cap Table.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Verbal Founder Agreements Always End Badly
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            60% of Indian startup founder disputes: including high-profile ones reaching NCLT and the High Courts: stem from the absence of a written founder&apos;s agreement. A handshake agreement is technically valid under Section 9 of the Contract Act, but evidentially impossible to enforce. Sign a written, stamped, e-signed Founder&apos;s Agreement before the first product line of code.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Sign It Before Equal Splits Get Awkward
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Founders often delay this conversation because &quot;we&apos;re all equals.&quot; But by Year 2, roles, contributions, and motivation diverge: and renegotiating equity then is brutal. Sign the Founder&apos;s Agreement on Day 1 with equal splits and identical vesting, so the system is fair, predictable, and renegotiable later only by mutual amendment.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "maternity-benefit-act-paid-leave",
    title: "Maternity Benefit Act: 26 Weeks Paid Leave & ICC Coordination",
    moduleId: "policies",
    moduleName: "Policies",
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
            <li><strong>Step 2:</strong> When an eligible employee notifies pregnancy, go to Payroll → Leave → Maternity Leave. Enter expected delivery date: the platform calculates the 26-week paid leave window.</li>
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
            Many founders mistakenly think maternity benefits apply only to permanent employees. The law applies to any woman who has worked 80+ days in the preceding 12 months: including contract employees and probationers. Denying benefits citing &quot;probation&quot; or &quot;contract&quot; is a violation under Section 21 with personal liability on the employer.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "Shops & Establishment Act: The State Registration You Cannot Skip",
    moduleId: "policies",
    moduleName: "Policies",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "Every Indian commercial establishment: including SaaS startups operating from a single room with 2 employees: must register under the state-specific Shops and Establishments Act within 30 days of starting operations. This article shows how registration works, what it covers, and why most early-stage founders forget it.",
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
            Every commercial establishment, regardless of size: including: Private limited companies, LLPs, partnerships, SaaS / tech / consulting / service companies, and e-commerce warehouses.
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
            Many startups discover their lack of Shops &amp; Establishment Registration only when applying for a working capital loan, vendor onboarding with a corporate, or government tender: all of which require the certificate as a basic document. Penalties for non-registration vary (₹50–₹10,000 + per-day continuing fines), but the operational impact is bigger than the fine.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "Structuring a Tax-Optimized CTC: The Indian Salary Architecture",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "8 minutes",
    lastUpdated: "May 2026",
    summary: "A legally compliant Indian salary structure is not a single flat number: it's a Cost-to-Company (CTC) broken into Basic Salary, HRA, allowances, and statutory deductions. Get the ratios wrong, and your employees pay more tax, your EPF liability spikes, or you fail an Income Tax audit. This article explains the optimal structure and shows how Founding Legals auto-generates compliant payslips.",
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
                  <td className="px-4 py-2.5 text-brown-700">Section 16(ia): varies by regime</td>
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
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Old vs. New Tax Regime: The Section 192 Decision</h3>
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
            <li><strong>Step 4:</strong> Generate the CTC Breakup Letter automatically: a one-pager attached to every Employment Agreement showing all details.</li>
            <li><strong>Step 5:</strong> Monthly payroll generates payslips compliant with the Payment of Wages Act, 1936 and state Shops &amp; Establishment Acts.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Low Basic = Income Tax Red Flag
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            A common founder mistake: setting Basic Salary at 20–25% of CTC and inflating &quot;Special Allowance&quot; to reduce EPF and Gratuity provisions. The Income Tax Department considers Basic below 40% of CTC a red flag and may reclassify allowances as Basic during scrutiny: back-charging EPF + interest + penalty. The Supreme Court in Vivekananda Vidyamandir v. EPFO (2019) held that allowances paid universally to all employees count as &quot;Basic Wages&quot; for EPF.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "EPF, ESIC & Gratuity: The Three Mandatory Statutory Contributions",
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
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Quick Reference: Trigger Thresholds</h3>
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
            <li><strong>Step 5:</strong> Use the Gratuity Liability Dashboard to view accumulated reserves per employee: vital for M&amp;A due diligence and financial statements.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: EPF Penalty Compounds Fast
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Delay in EPF deposit attracts interest at 12% per annum under Section 7Q + damages of 5–25% per annum under Section 14B of the EPF Act. Repeat default is a criminal offence with imprisonment up to 3 years. Indian VCs flag EPF defaults as a deal-breaker during diligence: fix it before raising.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "TDS on Salary Under Section 192: Old vs. New Regime Decoded",
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
            If your TDS deduction doesn&apos;t match the employee&apos;s Form 26AS / AIS (due to incorrect regime, missed investment proofs, or late deposits), the employee receives a demand notice when they file their ITR. They will come to you for fixes: and Form 24Q correction requests are a 30–60 day ordeal. Our TRACES Reconciliation Tool catches mismatches monthly.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
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
    title: "State-Wise Professional Tax (PT): A Founder's Guide",
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
            <li><strong>Step 1:</strong> Go to Payroll → Employee Onboarding. Enter each employee&apos;s working location (state): this can differ from registered office for remote workers.</li>
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
            Post-COVID, many Indian startups have employees in 8–10 states. Each state where an employee works requires a separate PTRC registration, and PT must be paid to that state&apos;s treasury: not the state of the registered office. Treating PT as a single-state obligation is a common audit finding that triggers penalty + interest.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: PT Saves Tax Twice
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Professional Tax paid by an employee is deductible under Section 16(iii) of the Income Tax Act: reducing their taxable salary. For employees in the Old Regime, this is a small but automatic tax saving. The platform shows this deduction clearly in every payslip and in Form 16.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "gst-registration-filing-startups",
    title: "GST Registration for Startups: When to Register, How to File",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "7 minutes",
    lastUpdated: "May 2026",
    summary: "Goods and Services Tax (GST) registration is mandatory for every Indian business crossing the threshold turnover: ₹20 Lakh for services, ₹40 Lakh for goods. But early-stage startups often need GST even below the threshold for B2B credibility, ITC (Input Tax Credit) claims, and inter-state supply. This article explains when to register and how Founding Legals automates it.",
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
                  <td className="px-4 py-2.5 font-medium text-brown-900">Aggregate turnover: Services</td>
                  <td className="px-4 py-2.5 text-brown-700">₹20 Lakh/year (₹10 Lakh in special category states)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-brown-900">Aggregate turnover: Goods</td>
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
            If you export software/SaaS services, file a Letter of Undertaking (LUT) on the GST portal at the start of each financial year. Without it, you must pay IGST on exports and claim refund later: a 90-day cash flow drag. With LUT, your exports are zero-rated immediately. Renew every April.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Don&apos;t Register Until You Absolutely Must (For B2C Startups)
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            If you&apos;re a B2C startup (D2C, consumer app) and below threshold, delay GST registration until necessary. Once registered, you must charge GST to customers (raising your price by 18%) and comply with monthly filings: a significant operational burden. For B2B startups, register immediately for ITC and credibility.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "full-final-settlement-fnf-process",
    title: "Full & Final Settlement (FnF): The Exit Payroll Process",
    moduleId: "payslips-payroll",
    moduleName: "Payslips & Payroll",
    readingTime: "6 minutes",
    lastUpdated: "May 2026",
    summary: "When an employee leaves your startup, Full and Final Settlement (FnF) is the legal closure of your employment relationship: covering unpaid salary, leave encashment, gratuity, PF settlement, TDS, and clearance certificates. Mishandling FnF leads to labour department complaints, EPFO grievances, and damaged employer brand. This article walks through the complete FnF flow.",
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
            <li><strong>Step 3:</strong> Generate the FnF Statement: a single-page reconciliation. Share with the employee for acknowledgement before disbursal.</li>
            <li><strong>Step 4:</strong> Disburse dues via integrated payroll. The platform automatically issues Relieving, Experience, Form 16, and Form 12B documents.</li>
            <li><strong>Step 5:</strong> Update the Cap Table for any ESOP exercises, file Form PAS-3 if needed, and archive the record in the Compliance Vault.</li>
          </ol>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Delayed FnF Attracts Labour Complaints
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under Section 15 of the Payment of Wages Act, delay beyond the prescribed FnF window allows the employee to file a complaint with the Labour Commissioner: and the employer can be ordered to pay up to 10× the delayed amount as compensation. The Indian startup ecosystem has seen multiple cases where ex-employees have publicised delays on social media, severely damaging employer brand. Always FnF on time.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Pre-Calculate FnF Before Accepting Resignation
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            When an employee submits resignation, run a provisional FnF on the platform same-day and share the indicative numbers. This builds trust, manages employee expectations, and prevents last-day surprises. It also lets you identify whether you&apos;ll recover or pay notice: useful for cash flow planning.
          </p>
        </div>
      </div>
    ),
  },
  // ==========================================
  // MODULE 7: ACCOUNT SETTINGS
  // ==========================================
  {
    id: "overview-to-account-settings",
    title: "Overview: Managing Your Account Settings",
    moduleId: "account-settings",
    moduleName: "Account Settings",
    readingTime: "4 minutes",
    lastUpdated: "June 2026",
    summary: "Account Settings is the central control room of your Founding Legals workspace. Learn how setting up your company identity, team access, and branding flows automatically into every document and transaction.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Central Control Room of Your Workspace</h3>
          <p className="text-brown-700 leading-relaxed">
            Your Account Settings is the control centre of your Founding Legals workspace. Everything you configure here: your company identity, your people, your signature, your seal, and your branded templates: flows automatically into every agreement, invoice, and document you generate. Set it up once, and your paperwork stays consistent, compliant, and unmistakably yours.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Six Areas of Account Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-brown-200 bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">1. Details</h4>
              <p className="text-xs text-brown-700 leading-relaxed">
                The foundation of everything you create. Manage registry info, address, bank details, logos, and social links. Contains the live 100% completion indicator.
              </p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">2. Users &amp; Roles</h4>
              <p className="text-xs text-brown-700 leading-relaxed">
                Invite team members and assign access permissions. Color-coded badges differentiate your Executive Team from the wider team.
              </p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">3. Membership</h4>
              <p className="text-xs text-brown-700 leading-relaxed">
                Select or upgrade subscription plans (Starter, Professional, Enterprise) and toggle between monthly and annual billing.
              </p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">4. Signature</h4>
              <p className="text-xs text-brown-700 leading-relaxed">
                Draw or type your authorized signature. Securely stored and applied to documents executed under your name.
              </p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">5. Stamp</h4>
              <p className="text-xs text-brown-700 leading-relaxed">
                Create a professional company seal by custom-generating wording or uploading an image. Match your brand color seamlessly.
              </p>
            </div>
            <div className="border border-brown-200 bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-brown-900 mb-2">6. Templates</h4>
              <p className="text-xs text-brown-700 leading-relaxed">
                Build letterheads and layouts customized by purpose (Agreements, Invoices, Policies) with a live builder and preview system.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Configure Settings First
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Completing your Account Settings setup before drafting agreements or sending invoices prevents execution errors. Because variables like your official address, director signatures, and stamps are pulled dynamically, the system relies on this central database to output fully compliant documents.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "managing-company-details",
    title: "Managing Company Details & Registry Information",
    moduleId: "account-settings",
    moduleName: "Account Settings",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "Your company's Details tab houses core registry, address, logo, bank details, and social profiles. Ensure your profile is 100% complete so that every document matches legal and corporate standards.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Single Source of Truth</h3>
          <p className="text-brown-700 leading-relaxed">
            The <strong>Details</strong> tab holds your company&apos;s core registry information: the single source of truth that populates the headers, footers, signature blocks, and payment sections of every document you produce. 
          </p>
          <p className="text-brown-700 leading-relaxed mt-2">
            A live completion indicator sits beside the tab, showing how much of your essential profile is filled in. When it reads 100%, your company is fully document-ready; until then, it gently highlights what&apos;s still missing so nothing important is left blank on a legal page.
          </p>
          <div className="mt-4 max-w-2xl">
            <img src="/Help Center Guide/Settings Help Center/Settings - 1.png" alt="Company Details Dashboard" className="rounded-xl border border-brown-200 w-full shadow-sm" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">What You Can Manage Here</h3>
          <div className="space-y-4 text-brown-700">
            <div>
              <h4 className="font-semibold text-brown-800">1. Company Details</h4>
              <p className="text-sm leading-relaxed">
                Your registered company name, authorised signatory, company type (Private Limited, LLP, OPC, Section 8, and more), the matching legal suffix, your CIN/LLPIN, GST number, PAN, official email, and phone. Entering a Company Number? A one-click link lets you verify it directly on the MCA Government Portal to check filings status.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-brown-800">2. Company Address</h4>
              <p className="text-sm leading-relaxed">
                Your registered office address as listed on MCA records, which is automatically printed across all filings, board resolutions, and agreements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-brown-800">3. Logo &amp; Website</h4>
              <p className="text-sm leading-relaxed">
                Upload your company logo (PNG, JPG, SVG, up to 5 MB) and add your website. Your logo updates across all dashboard screens and document letterheads in real time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-brown-800">4. Bank Details</h4>
              <p className="text-sm leading-relaxed">
                Your account holder name, bank, account number, IFSC, branch, and account type. These appear automatically on invoices and the settlement sections of agreements: no re-typing, no errors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-brown-800">5. Social Media</h4>
              <p className="text-sm leading-relaxed">
                Connect your LinkedIn, X, Instagram, and Facebook profiles to enrich your branded footers and public profile pages.
              </p>
            </div>
          </div>
          <div className="mt-6 max-w-2xl">
            <img src="/Help Center Guide/Settings Help Center/Settings - 2.png" alt="Company Address and Social Media Settings" className="rounded-xl border border-brown-200 w-full shadow-sm" />
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Important: Match PAN/CIN Exactly
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Smart validation checks your email and PAN formats as you go, and required fields are clearly marked. Ensure these details match your tax registrations exactly, as mismatching corporate details can invalidate invoices and lead to GST reconciliation queries from clients. Changes are saved automatically as you work, with a clear confirmation on every update.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Fast MCA Verification
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Always click the MCA Verification link after entering your CIN. This lets you inspect the public records and confirm the company status, assuring potential investors or corporate clients of your statutory standing.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "managing-users-and-roles",
    title: "Managing Users, Team Members, and Access Roles",
    moduleId: "account-settings",
    moduleName: "Account Settings",
    readingTime: "4 minutes",
    lastUpdated: "June 2026",
    summary: "Invite your team and assign appropriate administrative or governance roles. Set up proper access permissions for directors, signatories, and shareholders.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Build and Structure Your Team</h3>
          <p className="text-brown-700 leading-relaxed">
            The <strong>Users &amp; Roles</strong> tab is where you build and manage your organisation. Invite colleagues, assign roles, and keep your team structure clear and current. Because signatories defined here feed directly into your agreements, your documents always reflect the right people with the right authority.
          </p>
          <div className="mt-4 max-w-2xl">
            <img src="/Help Center Guide/Settings Help Center/Settings - 3.png" alt="Users and Roles Dashboard" className="rounded-xl border border-brown-200 w-full shadow-sm" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Key Capabilities</h3>
          <ul className="list-disc pl-5 space-y-3 text-brown-700">
            <li>
              <strong>Invite members:</strong> Add a new team member with their name, email, title, role, and joining details. They receive a secure email invitation to join your workspace.
              <div className="mt-3 max-w-2xl">
                <img src="/Help Center Guide/Settings Help Center/Settings - 4.png" alt="Invite Team Member Drawer" className="rounded-xl border border-brown-200 w-full shadow-sm" />
              </div>
            </li>
            <li>
              <strong>Assign roles:</strong> Grant the access each person needs, from Admin, Founder, and Director to Signatory and Shareholder. Roles are shown as clear, colour-coded badges at a glance.
            </li>
            <li>
              <strong>Organised view:</strong> Your Executive Team (admins, founders, directors, and signatories) is presented separately from the wider team, so leadership and authority are always easy to find.
            </li>
            <li>
              <strong>Edit &amp; remove:</strong> Update a member&apos;s details and roles at any time, or remove a member or revoke a pending invitation with a simple, confirmed action.
            </li>
          </ul>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: Signatory Verification
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Only assign the &quot;Signatory&quot; role to individuals authorized by a Board Resolution to bind the company. Executing contracts via e-sign with unauthorized personnel can render agreements voidable under Section 18 of the Indian Contract Act, 1872.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Board Resolutions Synergy
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Keep your Director and Signatory list updated. When you generate board resolutions or shareholder notices, the platform automatically pulls active Director details, saving you from manual entry.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "understanding-membership-plans",
    title: "Choosing the Right Founding Legals Subscription Plan",
    moduleId: "account-settings",
    moduleName: "Account Settings",
    readingTime: "4 minutes",
    lastUpdated: "June 2026",
    summary: "Compare Founding Legals' Starter, Professional, and Enterprise plans to find the right tier for your organization's digital execution and legal document storage needs.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Choose the Plan That Grows With You</h3>
          <p className="text-brown-700 leading-relaxed">
            The <strong>Membership</strong> tab presents your subscription options in a clear, side-by-side comparison, with a simple toggle to switch between monthly and annual billing. This transparent view lets you choose the perfect fit for your operational velocity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">The Three Subscription Tiers</h3>
          <div className="space-y-4 text-brown-700">
            <div className="border border-brown-100 rounded-xl p-4 bg-white shadow-sm">
              <h4 className="font-semibold text-[#5C6F2D]">Starter Plan</h4>
              <p className="text-sm mt-1">
                For small teams beginning their digital signing journey. Includes up to 5 members, 50 signatures a month, essential templates, and document tracking.
              </p>
            </div>
            <div className="border border-brown-200 rounded-xl p-4 bg-[#5C6F2D]/5 shadow-sm">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-[#5C6F2D]">Professional Plan</h4>
                <span className="text-xs px-2.5 py-0.5 bg-[#5C6F2D] text-white rounded-full font-semibold">Most Popular</span>
              </div>
              <p className="text-sm mt-1">
                For growing organisations. Supports up to 25 members, 500 signatures a month, custom templates, bulk signing, advanced analytics, white-label branding, and API access.
              </p>
            </div>
            <div className="border border-brown-100 rounded-xl p-4 bg-white shadow-sm">
              <h4 className="font-semibold text-brown-900">Enterprise Plan</h4>
              <p className="text-sm mt-1">
                For larger organisations needing full compliance control. Unlocks unlimited members and signatures, legally vetted templates, SSO and advanced security, custom integrations, dedicated support, and compliance reporting.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Go Annual for Better Pricing
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Toggling to annual billing grants up to a 20% discount on the total plan price. For startups with fluctuating agreement volumes, annual memberships also offer flexible monthly limits to handle sudden hiring or round closures.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "setting-up-signature-and-stamp",
    title: "Setting Up Your Authorized Signature and Company Stamp",
    moduleId: "account-settings",
    moduleName: "Account Settings",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "Create your secure, legally binding digital signature and generate a professional company seal (stamp) to apply directly to contracts and agreements.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Authorized Signatures &amp; Seals</h3>
          <p className="text-brown-700 leading-relaxed">
            Founding Legals makes document execution seamless by consolidating your official signature and company seal in one secure location. Setting these up ensures they are formatted correctly and applied instantly upon contract completion.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">1. Customizing Your Signature</h3>
          <p className="text-brown-700 leading-relaxed">
            The <strong>Signature</strong> tab lets you create the official signature that appears on documents executed in your name. You can produce it in two ways:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-brown-700">
            <li>
              <strong>Draw:</strong> Sign naturally with your mouse, trackpad, or touchscreen for an authentic, handwritten mark.
            </li>
            <li>
              <strong>Type a styled signature:</strong> Enter your name and choose from elegant signature fonts for a polished, consistent look.
            </li>
          </ul>
          <p className="text-brown-700 leading-relaxed mt-2">
            Pick your preferred ink colour, preview the result instantly, and save. Your signature is stored securely against your company profile and applied wherever your authorised sign-off is required.
          </p>
          <div className="mt-4 max-w-2xl">
            <img src="/Help Center Guide/Settings Help Center/Settings - 5.png" alt="Authorized Signatures Dashboard" className="rounded-xl border border-brown-200 w-full shadow-sm" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">2. Generating Your Company Stamp</h3>
          <p className="text-brown-700 leading-relaxed">
            The <strong>Stamp</strong> tab lets you add your company&apos;s official seal to documents: either by uploading an existing stamp image or by generating a clean, professional one within Founding Legals. When you create a stamp, you control every line:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-brown-700">
            <li>
              <strong>Top and bottom text:</strong> Typically your registered company name and location.
            </li>
            <li>
              <strong>Three centre lines:</strong> Ideal for your corporate address, city, state, pincode, and CIN.
            </li>
            <li>
              <strong>Seal colour:</strong> Matched to your corporate branding.
            </li>
          </ul>
          <p className="text-brown-700 leading-relaxed mt-2">
            To save you time, the stamp is pre-filled from your company details, so a complete, accurate seal is ready almost instantly. Preview it live, fine-tune the wording, and save.
          </p>
          <div className="mt-4 max-w-2xl">
            <img src="/Help Center Guide/Settings Help Center/Settings - 6.png" alt="Company Stamp/Seal Generator" className="rounded-xl border border-brown-200 w-full shadow-sm" />
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Warning: Stamp Legitimacy
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Under the IT Act, 2000, digital signatures coupled with Aadhaar e-signs have full legal enforceability. Ensure company stamp layouts comply with your Articles of Association (AOA) regulations regarding the usage of the common seal.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Ink Color Harmony
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Choose a consistent ink color (traditional blue is recommended in India) for both your digital signature and stamp. This provides a unified, professional appearance on executed PDFs.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "designing-branded-templates",
    title: "Designing Branded Document Templates and Letterheads",
    moduleId: "account-settings",
    moduleName: "Account Settings",
    readingTime: "5 minutes",
    lastUpdated: "June 2026",
    summary: "Design consistent, professional letterhead headers and footers for your Agreements, Invoices, and Policies to make every document carry your brand's unique identity.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Branded Letterheads and Styling</h3>
          <p className="text-brown-700 leading-relaxed">
            The <strong>Templates</strong> tab is where your documents gain their professional, branded finish. Here you design the letterhead headers and footers that frame your agreements, invoices, and policies.
          </p>
          <div className="mt-4 max-w-2xl">
            <img src="/Help Center Guide/Settings Help Center/Settings - 7.png" alt="Branded Document Templates and Letterheads" className="rounded-xl border border-brown-200 w-full shadow-sm" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Key Styling Actions</h3>
          <ul className="list-disc pl-5 space-y-3 text-brown-700">
            <li>
              <strong>Upload or create:</strong> Bring your own designed letterhead graphic, or build one from scratch.
            </li>
            <li>
              <strong>Organise by purpose:</strong> Maintain separate templates for Agreements, Invoices, and Policies, so each document type carries the right look (e.g., invoices need banking info, agreements require clean margins).
            </li>
            <li>
              <strong>Design the header:</strong> Choose its layout (left, centre, or right) and decide what appears: logo, company name, address, contact details, and CIN. Set the accent colour, border style, and font size.
            </li>
            <li>
              <strong>Design the footer:</strong> Display your company name, address, contact, CIN, and website, with full control over layout, alignment, color, and borders.
            </li>
            <li>
              <strong>Live preview &amp; defaults:</strong> See your header and footer exactly as they&apos;ll appear before you save, and mark a template as your default so it&apos;s applied automatically to new documents.
            </li>
          </ul>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Default Layout Consistency
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Set your main Corporate Agreement template as default. This ensures that even if you draft a quick customized NDA or consulting contract, the header, logo, and footer align exactly with your company brand guidelines without manual adjustment.
          </p>
        </div>
      </div>
    ),
  },
  // ==========================================
  // MODULE: CLIENT MANAGEMENT
  // ==========================================
  {
    id: "getting-started-with-client-management",
    title: "Getting Started with Client Management & Invoicing",
    moduleId: "client-management",
    moduleName: "Client Management",
    readingTime: "8 minutes",
    lastUpdated: "June 2026",
    summary: "The Clients workspace is where you get paid. Learn how to onboard customers, generate legally compliant GST invoices, track outstanding payments, and close the loop with automated receipts.",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-3">Your Financial Command Centre</h3>
          <p className="text-brown-700 leading-relaxed">
            Running a business means two things matter above all else: delivering great work and getting paid for it. The Clients tab is Founding Legals&apos; answer to the second part. From the moment you onboard a customer to the moment a payment receipt lands in their inbox, every step of your revenue cycle lives here: GST-compliant invoices, real-time payment tracking, automated reminders, and formal receipts. No spreadsheets, no back-and-forth emails, no lost invoices.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-brown-900 mb-6">The 7-Step Invoicing &amp; Revenue Lifecycle</h3>

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">1</span>
              <strong className="text-base text-brown-900">Onboard &amp; Manage Customers</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Build a Complete Client Profile:</strong> Start by entering your client&apos;s core legal and billing details: Company Name, GSTIN, PAN, registered address, and primary contact. The platform automatically validates the GSTIN format as you type, catching errors at the source before they can appear on an invoice.
            </p>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Your Lightweight CRM, Built In:</strong> Every client you add gets a dedicated profile that serves as a single source of truth. All their contact information, complete transaction history, every invoice ever raised, and current payment status are organized in one clean, accessible view.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/Invoice sending - 1.png" alt="Step 1: Onboarding Customers" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">2</span>
              <strong className="text-base text-brown-900">Create a GST-Compliant Invoice</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Generate a GST-Compliant Invoice in Minutes:</strong> The moment a service is delivered or a project milestone is signed off, click <em>&quot;+ Add Invoice&quot;</em>. The invoice builder opens with your client&apos;s details already populated. Add your line items: service description, quantity, and rate: and the platform assembles a fully formatted, legally compliant invoice in real time.
            </p>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Zero-Error Tax Calculation, Every Time:</strong> The system reads your registered GSTIN and cross-references your client&apos;s state to automatically apply the correct tax structure: CGST + SGST for intra-state transactions, IGST for inter-state supplies.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/invoice sending - 2.png" alt="Step 2: GST-Compliant Invoice Creation" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">3</span>
              <strong className="text-base text-brown-900">Preview &amp; Review Invoice Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Audit-Ready Professional Formatting:</strong> Review your invoice before dispatching it. Apply your company letterhead, insert your authorized digital signature, and attach your company stamp from your settings. You can review all line items, tax allocations, and total outstanding balances in one comprehensive preview screen.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/invoice sending - 3.png" alt="Step 3: Invoice Preview &amp; Details" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">4</span>
              <strong className="text-base text-brown-900">Manage Receivables &amp; Record Payment Action</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Track Invoice Status:</strong> Access details of any invoice and monitor its state (Sent, Overdue, Paid). When a payment is received, click the <em>&quot;Record Payment&quot;</em> button from the invoice options page to initiate the bookkeeping reconciliation process.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/Invoice sending - 4.png" alt="Step 4: Record Payment Action" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">5</span>
              <strong className="text-base text-brown-900">Log Transaction Details</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Select Payment Mode &amp; Date:</strong> Document the payment transaction precisely by entering details in the Record Payment dialog. Enter the amount received, payment date, transaction mode (UPI, Net Banking, Cheque, or Cash), and add optional reference IDs or notes to guarantee neat auditing records.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/invoice sending - 5.png" alt="Step 5: Log Transaction Details Dialog" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">6</span>
              <strong className="text-base text-brown-900">Track Communication &amp; Invoice History</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Complete Audit Log &amp; Timeline:</strong> Review automated history logs containing timestamps of when the invoice was drafted, sent, opened, and paid. Keep a clear record of email dispatch details and tracking history directly within the invoice timeline to eliminate client communication disputes.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/Invoice sendoiing - 6.png" alt="Step 6: Communication Log &amp; History Timeline" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>

          <div className="border-t border-brown-100 my-6" />

          {/* Step 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F2D] text-white text-sm font-bold flex items-center justify-center">7</span>
              <strong className="text-base text-brown-900">Download &amp; Share Payment Receipts</strong>
            </div>
            <p className="text-sm text-brown-600 leading-relaxed pl-10">
              <strong>Auto-Generate Formal Receipts:</strong> The moment an invoice is fully paid and recorded, the platform generates a formal, sequentially numbered payment receipt under your brand letterhead. You can download this PDF in one click and deliver it to your client for their tax filing and compliance documentation.
            </p>
            <div className="mt-4 max-w-2xl pl-10">
              <img src="/Help Center Guide/Invoice Sending/Invoice sending - 7.png" alt="Step 7: Automated Payment Receipt" className="rounded-xl border border-brown-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF9F6] border border-[#F5C2B8] p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#CD412B] font-semibold mb-2">
            <span>⚠️</span> Statutory Caution: GSTIN Accuracy is Non-Negotiable
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            Before generating any invoice, confirm that your client&apos;s GSTIN is correct and that their registered state matches the billing address. A wrong GSTIN or an incorrect tax classification: applying CGST/SGST to an inter-state supply that requires IGST, or vice versa: directly invalidates the invoice for your client&apos;s Input Tax Credit (ITC) claim under the Central GST Act, 2017. The downstream consequences are serious: your client will reject the invoice, request a credit note and revised bill, and may delay payment until the correction is processed. This creates cash flow gaps, strained relationships, and additional administrative burden on both sides. Verify all client tax details at the point of onboarding, and update them the moment a client informs you of a GST registration change.
          </p>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
          <div className="flex gap-2.5 text-[#3d4eac] font-semibold mb-2">
            <span>💡</span> Pro-Tip: Invoice the Day You Deliver: Not at Month-End
          </div>
          <p className="text-sm text-brown-700 leading-relaxed">
            The single most effective habit for healthy cash flow is raising an invoice on the same day a service is delivered, a milestone is completed, or a phase is signed off: not in a batch at the end of the month. Research consistently shows that invoices raised within 24 hours of delivery are paid significantly faster than those raised days or weeks later. Founding Legals makes this effortless: open the client&apos;s profile, click <em>&quot;+ Add Invoice&quot;</em>, populate the line items, and hit Send: in under two minutes. Prompt invoicing compresses your payment cycle, creates a clear paper trail, eliminates scope disputes (&quot;I thought this was included&quot;), and keeps your revenue recognition aligned with your actual delivery timeline: clean, accurate, and audit-ready.
          </p>
        </div>
      </div>
    ),
  },
];
