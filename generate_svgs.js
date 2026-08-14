const fs = require('fs');
const path = require('path');

const agreements = [
  { 
    id: "founders-agreement", 
    name: "Founders' Agreement", 
    ref: "FL/2026/FA-001",
    clauses: [
      "Equity Split & Vesting: The Founders agree to a 4-year linear vesting schedule with a 1-year cliff.",
      "Roles & Responsibilities: Founder A shall serve as CEO; Founder B shall serve as CTO overseeing tech infrastructure.",
      "IP Assignment: All pre-existing and future intellectual property is 100% assigned to Founding Legals Pvt Ltd.",
      "Deadlock Resolution: Any voting deadlock shall be resolved via a 30-day mediation prior to arbitration.",
      "Reverse Vesting: Unvested shares shall be subject to company repurchase at par value upon early departure.",
      "Non-Compete & Non-Solicit: Founders agree to 24-month post-exit non-compete and non-solicitation restrictions.",
      "Confidentiality & Trade Secrets: Proprietary source code and algorithms remain strictly confidential in perpetuity.",
      "Governing Law: Governed by the Indian Contract Act 1872 and Companies Act 2013 with jurisdiction in Bengaluru."
    ]
  },
  { 
    id: "shareholders-agreement", 
    name: "Shareholders' Agreement (SHA)", 
    ref: "FL/2026/SHA-002",
    clauses: [
      "Share Capital Structure: Issuance of Compulsorily Convertible Preference Shares (CCPS) under Section 42 of Companies Act.",
      "Investor Veto Rights: Reserved matters requiring 75% affirmative investor vote including AOA/MOA amendments.",
      "Right of First Refusal (ROFR): Existing shareholders hold first right to purchase selling founder equity.",
      "Tag-Along & Drag-Along: Drag-along triggers at 60%+ shareholder approval during strategic M&A acquisitions.",
      "Board Representation: Lead Investors retain right to nominate 1 non-executive Board Director with veto rights.",
      "Anti-Dilution Protection: Broad-based weighted average anti-dilution protection during down-rounds.",
      "Information & Audit Rights: Quarterly audited financial statement delivery within 30 days of quarter end.",
      "AOA Integration: Company agrees to amend Articles of Association (AOA) via ROC Form MGT-14 within 30 days."
    ]
  },
  { 
    id: "non-disclosure-agreement", 
    name: "Non-Disclosure Agreement (NDA)", 
    ref: "FL/2026/NDA-003",
    clauses: [
      "Definition of Confidential Information: Encompasses source code, trade secrets, financials, and customer lists.",
      "Non-Disclosure Obligations: Receiving party agrees to hold all proprietary data in strict confidence.",
      "Standard Exclusions: Excludes information publicly available prior to disclosure or independently developed.",
      "Term & Duration: Confidentiality obligations survive for 3 years following agreement termination.",
      "Return of Material: Immediate return or certified destruction of confidential files within 7 days of demand.",
      "Injunctive Relief: Disclosing party is entitled to emergency court injunctions upon suspected data breach.",
      "No IP License Granted: Disclosure creates no implied patent, copyright, or trademark license to receiver.",
      "Jurisdiction & Arbitration: Governed by Arbitration and Conciliation Act 1996 with seat in Bengaluru, Karnataka."
    ]
  },
  { 
    id: "offer-letter", 
    name: "Formal Employment Offer Letter", 
    ref: "FL/2026/OL-004",
    clauses: [
      "Compensation & Benefits: Annual CTC breakdown as specified in Annexure-A with monthly salary disbursement.",
      "Probation Period: Initial 3-month probation subject to performance review prior to full confirmation.",
      "Acceptance Deadline: Written confirmation required on or before 12th Jun 2026 to validate appointment.",
      "Validity & Effective Date: Appointment becomes legally binding upon candidate signing duplicate copy.",
      "Date of Joining: Candidate is required to report at Bengaluru corporate office on 12th Jun 2026 at 10:30 AM.",
      "Work Location: Base location in Bengaluru, Karnataka with remote work guidelines as per business policy.",
      "IP Assignment: All software code, designs, and materials created during employment belong to the Company.",
      "Termination & Notice: 30-day notice period or equivalent salary in lieu thereof required upon resignation."
    ]
  },
  { 
    id: "consultancy-agreement", 
    name: "Consultancy / Freelancer Agreement", 
    ref: "FL/2026/CA-005",
    clauses: [
      "Scope of Services: Consultant agrees to deliver milestones as detailed in attached Statement of Work (SOW).",
      "Independent Contractor Status: Relationship is strictly principal-to-principal under Indian Tax laws (TDS 194J).",
      "Copyright Assignment (Section 19): Full transfer of all developed code/deliverables under Copyright Act 1957.",
      "Payment Terms & Milestones: Net-15 payment terms following invoice submission and QA acceptance.",
      "Confidentiality & Non-Disclosure: Consultant shall not disclose proprietary business logic to third parties.",
      "Non-Solicitation: Consultant agrees not to solicit company clients or employees during tenure + 12 months.",
      "Term & Early Termination: Either party may terminate with 14-day written notice without penalty.",
      "Limitation of Liability: Liability capped at total fees paid to Consultant in preceding 3 months."
    ]
  },
  { 
    id: "vendor-agreement", 
    name: "Commercial Vendor Agreement", 
    ref: "FL/2026/VA-006",
    clauses: [
      "Supply of Goods/Services: Vendor agrees to supply goods per agreed Purchase Orders (POs) and SLAs.",
      "Commercial Pricing & Credit: Wholesale pricing locked for 12 months with Net 30/60 commercial credit.",
      "Quality Inspection & Returns: Right to reject non-conforming inventory within 7 business days.",
      "GST & Statutory Tax Compliance: Vendor guarantees timely GSTR-1 filing for Input Tax Credit (ITC) claim.",
      "Delivery SLAs & Liquidated Damages: 1% penalty per day of delay capped at 10% of PO value.",
      "Product Liability & Indemnity: Vendor indemnifies buyer against third-party defect claims and IP infringement.",
      "Force Majeure: Relief for verified global supply chain delays beyond reasonable vendor control.",
      "Dispute Resolution: Governed by Sale of Goods Act 1930 and Indian Contract Act with Bengaluru seat."
    ]
  }
];

// Fallback for remaining agreements
const defaultAgreementsList = [
  "share-subscription-agreement", "safe-agreement", "convertible-note-agreement", "term-sheet",
  "employment-agreement", "internship-offer-letter", "non-compete-agreement", "service-agreement",
  "master-service-agreement", "supply-agreement", "distribution-agreement", "franchise-agreement",
  "ip-assignment-agreement", "technology-transfer-agreement", "trademark-license-agreement",
  "service-certificate", "software-license-agreement", "joint-venture-agreement",
  "rental-agreement", "commercial-rental-agreement"
];

defaultAgreementsList.forEach((id) => {
  if (!agreements.find(a => a.id === id)) {
    const formattedName = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    agreements.push({
      id: id,
      name: formattedName,
      ref: `FL/2026/${id.substring(0,3).toUpperCase()}-007`,
      clauses: [
        "Terms & Scope: Complete contractual scope and party obligations per Indian law.",
        "Consideration & Commercial Terms: Agreed financial terms, payment schedules, and tax treatments.",
        "Statutory Compliance: Fully compliant with Indian Contract Act 1872 and applicable regulations.",
        "Intellectual Property: Ownership of proprietary materials remains exclusively with Founding Legals.",
        "Confidentiality: Non-disclosure covenants protecting technical know-how and business secrets.",
        "Term & Termination: Detailed provisions for default, notice period, and exit protocols.",
        "Indemnification: Mutual liability protection and breach remedies under Indian civil courts.",
        "Dispute Resolution: Binding arbitration under Indian Arbitration and Conciliation Act 1996."
      ]
    });
  }
});

const targetDir = path.join(__dirname, 'public', 'agreements');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

agreements.forEach((item) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 920" width="100%" height="100%" style="background:#ffffff;">
  <defs>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#1A1917" flood-opacity="0.06"/>
    </filter>

    <!-- Abstract cyan-blue wave gradient for footer -->
    <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0EA5E9" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0.7"/>
    </linearGradient>
  </defs>

  <!-- Main Background Page Sheet -->
  <rect x="15" y="15" width="620" height="890" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="url(#cardShadow)"/>

  <!-- Top Header Section -->
  <!-- Top Left Title & Ref -->
  <text x="45" y="55" font-family="'Inter', sans-serif" font-size="14" font-weight="800" fill="#0F172A">Founding Legals</text>
  <text x="45" y="73" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#334155">Ref: ${item.ref}</text>

  <!-- Top Right Arvya Tech / Testing Logo -->
  <g transform="translate(480, 42)">
    <text x="0" y="24" font-family="'Inter', sans-serif" font-size="18" font-weight="800" fill="#2563EB">Testing</text>
    <!-- Leaf Icon graphic -->
    <g transform="translate(75, 4)">
      <path d="M 12 0 C 18 8, 22 16, 18 24 C 10 24, 4 16, 12 0 Z" fill="#84CC16"/>
      <path d="M 4 12 C 10 16, 14 22, 10 28 C 4 28, 0 22, 4 12 Z" fill="#A3E635" opacity="0.8"/>
    </g>
  </g>

  <!-- Top Divider Line -->
  <line x1="45" y1="95" x2="605" y2="95" stroke="#CBD5E1" stroke-width="1"/>

  <!-- Date & Recipient Info -->
  <text x="45" y="125" font-family="'Inter', sans-serif" font-size="11" fill="#475569">12th Jun 2026</text>
  <text x="45" y="145" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#1E293B">Mr. Testing</text>
  <text x="45" y="161" font-family="'Inter', sans-serif" font-size="11" fill="#475569">Ph: 9876543210</text>

  <!-- Center Subject Header -->
  <text x="325" y="195" font-family="'Georgia', serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle" text-decoration="underline">Sub: ${item.name}</text>

  <!-- Salutation & Introductory Paragraph -->
  <text x="45" y="230" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#0F172A">Dear Mr. Testing,</text>
  <text x="45" y="248" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#0F172A">Congratulations!</text>
  
  <text x="45" y="268" font-family="'Inter', sans-serif" font-size="10.5" fill="#334155" width="560">We refer to your candidature and further to our mutual discussions, we are glad to offer you the position of Team Member at</text>
  <text x="45" y="284" font-family="'Inter', sans-serif" font-size="10.5" fill="#334155">Founding Legals Private Limited, Bengaluru, ("the Company") on the following terms &amp; conditions:</text>

  <!-- Numbered Clauses (1 to 8) -->
  <g font-family="'Inter', sans-serif" font-size="10" fill="#1E293B">
    <!-- Clause 1 -->
    <text x="45" y="318" font-weight="bold">1.</text>
    <text x="65" y="318">${item.clauses[0]}</text>

    <!-- Clause 2 -->
    <text x="45" y="348" font-weight="bold">2.</text>
    <text x="65" y="348">${item.clauses[1]}</text>

    <!-- Clause 3 -->
    <text x="45" y="378" font-weight="bold">3.</text>
    <text x="65" y="378">${item.clauses[2]}</text>

    <!-- Clause 4 -->
    <text x="45" y="408" font-weight="bold">4.</text>
    <text x="65" y="408">${item.clauses[3]}</text>

    <!-- Clause 5 -->
    <text x="45" y="438" font-weight="bold">5.</text>
    <text x="65" y="438">${item.clauses[4]}</text>

    <!-- Clause 6 -->
    <text x="45" y="468" font-weight="bold">6.</text>
    <text x="65" y="468">${item.clauses[5]}</text>

    <!-- Clause 7 -->
    <text x="45" y="498" font-weight="bold">7.</text>
    <text x="65" y="498">${item.clauses[6]}</text>

    <!-- Clause 8 -->
    <text x="45" y="528" font-weight="bold">8.</text>
    <text x="65" y="528">${item.clauses[7]}</text>
  </g>

  <!-- Closing Paragraph -->
  <text x="45" y="565" font-family="'Inter', sans-serif" font-size="10" fill="#334155">We look forward to working together and building a successful partnership with high performance standards.</text>
  <text x="45" y="582" font-family="'Inter', sans-serif" font-size="10" fill="#334155">In case you need further clarifications, please contact John Doe at the Company.</text>
  <text x="45" y="602" font-family="'Inter', sans-serif" font-size="10" fill="#334155">Thanking you,</text>

  <!-- Signatures Section -->
  <!-- Left Side: Company Signature -->
  <g transform="translate(45, 640)">
    <text x="0" y="15" font-family="'Inter', sans-serif" font-size="10.5" font-weight="700" fill="#0F172A">For Founding Legals Private Limited</text>
    <!-- Blue Ink Signature Graphic -->
    <path d="M 10 45 Q 25 25, 45 40 T 75 35 T 105 45 T 130 30 T 150 40" stroke="#1D4ED8" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <text x="0" y="65" font-family="'Inter', sans-serif" font-size="11" font-weight="800" fill="#0F172A">Amit Kumar</text>
    <text x="0" y="78" font-family="'Inter', sans-serif" font-size="9.5" fill="#64748B">Director</text>
  </g>

  <!-- Right Side: Candidate / Client Acceptance -->
  <g transform="translate(370, 640)">
    <text x="0" y="15" font-family="'Inter', sans-serif" font-size="10.5" font-weight="700" fill="#0F172A">Accepted &amp; Agreed</text>
    
    <text x="0" y="50" font-family="'Inter', sans-serif" font-size="10" fill="#64748B">Signature:</text>
    <line x1="60" y1="50" x2="230" y2="50" stroke="#CBD5E1" stroke-width="1.5"/>

    <text x="0" y="75" font-family="'Inter', sans-serif" font-size="10" fill="#64748B">Date:</text>
    <line x1="60" y1="75" x2="230" y2="75" stroke="#CBD5E1" stroke-width="1.5"/>
  </g>

  <!-- Bottom Divider Line -->
  <line x1="45" y1="755" x2="605" y2="755" stroke="#E2E8F0" stroke-width="1"/>

  <!-- Footer Section: Wave Graphic & Address -->
  <!-- Left Side: Cyan Blue Abstract Wave Pattern -->
  <g transform="translate(45, 770)">
    <!-- Wave Curves -->
    <path d="M 0 45 Q 60 15, 120 40 T 240 30 T 360 45 L 360 70 L 0 70 Z" fill="url(#waveGrad1)"/>
    <path d="M 0 30 Q 70 50, 140 25 T 280 40 T 360 20 L 360 70 L 0 70 Z" fill="url(#waveGrad2)"/>
  </g>

  <!-- Right Side: Testing / Arvya Tech Footer Address & CIN -->
  <g transform="translate(420, 770)" font-family="'Inter', sans-serif" text-anchor="end">
    <text x="185" y="15" font-size="12" font-weight="800" fill="#2563EB" letter-spacing="1">TESTING</text>
    <text x="185" y="30" font-size="9" fill="#334155">House No. 48, 10th Cross, Nagavarapalya</text>
    <text x="185" y="42" font-size="9" fill="#334155">Road, CV Raman Nagar, Bangalore, Karnataka,</text>
    <text x="185" y="54" font-size="9" fill="#334155">Bengaluru, Karnataka - 560102</text>
    <text x="185" y="68" font-size="9" font-weight="700" fill="#0F172A">9704574035 | koppanapavansai@gmail.com</text>
    <text x="185" y="80" font-size="9" font-weight="800" fill="#1E293B">CIN No: U72200MH2026PTC123456</text>
  </g>

</svg>`;

  const targetPath = path.join(targetDir, `${item.id}-sample.svg`);
  fs.writeFileSync(targetPath, svg, 'utf-8');
  console.log(`Generated SVG template for [${item.id}] -> ${targetPath}`);
});

console.log('All sample document SVGs successfully generated!');
