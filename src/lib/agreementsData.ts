export type AgreementCategory = "Equity & Corporate" | "HR & Employment" | "Commercial & Sales" | "IP & Licensing" | "Property & Rental";
export type AgreementComplexity = "Low" | "Medium" | "High";

export interface ComponentItem {
  term: string;
  description: string;
}

export interface CostTableItem {
  service: string;
  desc: string;
  cost: string;
}

export interface ComparisonRow {
  aspect: string;
  activeDoc: string;
  versusDoc: string;
}

export interface ComparisonDetails {
  title: string;
  versusName: string;
  table: ComparisonRow[];
}

export interface TerminationDetails {
  reasons: string[];
  alternatives: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface StampDutyDetails {
  karnataka: string;
  maharashtra: string;
  delhi: string;
  general: string;
}

export interface AgreementTypeItem {
  name: string;
  definition: string;
  useCase: string;
}

export interface LegalValidityDetails {
  act: string;
  overview: string;
  remedies: string[];
}

export interface RealWorldExample {
  title: string;
  scenario: string;
}

export interface AgreementDetail {
  id: string;
  name: string;
  category: AgreementCategory;
  tagline: string;
  overview: string;
  whyImportant: string[];
  whenRequired: string[];
  components: ComponentItem[];
  whoNeedsIt: string[];
  docsRequired: string[];
  comparison: ComparisonDetails;
  procedure: string[];
  costTable: CostTableItem[];
  termination: TerminationDetails;
  template: string;
  faqs: FAQItem[];
  stampDuty: StampDutyDetails;
  complexity: AgreementComplexity;
  requiredForFundraising: boolean;
  types?: AgreementTypeItem[];
  exclusions?: string[];
  legalValidity?: LegalValidityDetails;
  realWorldExamples?: RealWorldExample[];
}


export const AGREEMENTS_DATABASE: AgreementDetail[] = [
  {
    id: "founders-agreement",
    name: "Founders' Agreement",
    category: "Equity & Corporate",
    tagline: "Secure your startup's future with a legally binding, partner-vetted Founders' Agreement detailing equity vesting, IP assignment, and deadlock resolution.",
    overview: "A Founders' Agreement is a legally binding contract governed by the Indian Contract Act, 1872 and Companies Act, 2013. It establishes the legal framework between startup co-founders by outlining equity ownership percentages, 4-year vesting schedules (with 1-year cliff), executive designations (CEO/CTO/COO), intellectual property assignment, decision-making vetoes, and exit buyback mechanisms.",
    whyImportant: [
      "Secures Equity Vesting: Protects against co-founders quitting early with unvested equity by enforcing standard 4-year reverse vesting with a 1-year cliff.",
      "Complete IP Ownership Assignment: Ensures all codebase, algorithms, patent applications, UI/UX designs, and brand trademarks created by founders belong to the corporate entity.",
      "Clear Decision-Making & Deadlock Resolution: Defines voting thresholds for major decisions (fundraising, pivot, hiring) and sets escalation pathways for deadlocks.",
      "Investor Due Diligence Readiness: Angel investors and Venture Capital funds audit the Founders' Agreement to verify team stability and cap table lock-in prior to issuing term sheets.",
      "Departure & Share Buyback Rules: Establishes clear valuation formulas and buyback rights if a co-founder resigns, gets terminated for cause, or suffers incapacitation."
    ],
    whenRequired: [
      "Startup Inception & Co-Founder Onboarding: Before commencing product development or committing capital.",
      "Prior to Incorporating a Private Limited Company: Aligning equity splits and Director roles ahead of MCA filings.",
      "Before Pitching Angel Investors & VCs: Demonstrating team alignment and IP assignment readiness."
    ],
    types: [
      {
        name: "Standard Equal Equity Split Agreement",
        definition: "Co-founders split equity equally (e.g. 50/50 or 33/33/33) accompanied by uniform 4-year vesting schedules and cliff periods.",
        useCase: "Ideal for early-stage teams contributing equal capital, time commitment, and strategic expertise."
      },
      {
        name: "Role-Weighted & Milestone Vesting Agreement",
        definition: "Equity allocation structured according to individual capital contribution, technical domain expertise, or milestone achievement.",
        useCase: "Suited for teams with distinct full-time vs part-time co-founders or primary technology creators."
      },
      {
        name: "Founders' Pre-Incorporation Deed",
        definition: "Early-stage agreement executed prior to formal Private Limited incorporation defining initial cash pool contributions and entity setup responsibilities.",
        useCase: "Incubation stage startups preparing for MCA registration."
      }
    ],
    components: [
      { term: "Initial Capital & Equity Split", description: "Defines exact shareholding percentages, initial cash contributions, and share class structure." },
      { term: "Vesting Schedule & Cliff", description: "Standard 4-year vesting timeline with 1-year cliff preventing early unvested share retention." },
      { term: "Executive Roles & Decision Vetoes", description: "Assigns CEO/CTO/COO titles, daily operating authority, and reserved matters requiring unanimous founder consent." },
      { term: "Comprehensive IP Assignment", description: "Unconditional legal transfer of all pre-existing and future intellectual property to the startup entity." },
      { term: "Reverse Vesting & Share Buyback", description: "Mechanism enabling the company or remaining co-founders to repurchase unvested equity upon departure." },
      { term: "Non-Compete & Non-Solicitation", description: "Covenants restricting departing co-founders from launching competing businesses or poaching team members for 1-2 years." },
      { term: "Deadlock Resolution Mechanism", description: "Structured escalation protocol (mediation, Russian Roulette buy-sell, or independent board arbitration) for unresolved disputes." }
    ],
    exclusions: [
      "Personal assets, software projects, or patents developed by a founder prior to the startup's formation and explicitly listed as excluded in Annexure A.",
      "Side business activities or passive investments approved in writing by all co-founders.",
      "General industry domain knowledge acquired prior to the startup's inception."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Companies Act, 2013",
      overview: "Founders' Agreements are fully enforceable legal contracts in Indian civil courts under Section 10 of the Indian Contract Act. Upon incorporation, key provisions (such as share transfer restrictions and ROFR) are incorporated into the Articles of Association (AOA) to ensure statutory enforceability under company law.",
      remedies: [
        "Injunction against Share Transfer: Court order blocking departing co-founders from transferring shares to external parties.",
        "Specific Performance of IP Transfer: Mandatory court decree compelling execution of IP assignment deeds.",
        "Equitable Share Buyback Enforcement: Legal enforcement of pre-agreed valuation buybacks for unvested equity."
      ]
    },
    realWorldExamples: [
      {
        title: "SaaS Tech & Business Co-Founders",
        scenario: "Two tech co-founders partnered with a business lead. A 4-year vesting schedule saved the startup when the business lead left after 6 months, allowing the company to repurchase unvested shares for nominal value."
      },
      {
        title: "FinTech VC Due Diligence Audit",
        scenario: "During a ₹5 Crore Seed funding round, VC attorneys audited the Founders' Agreement to confirm 100% codebase ownership was legally assigned to the Private Limited entity."
      }
    ],
    whoNeedsIt: [
      "Co-founders launching a tech startup, D2C brand, or commercial enterprise.",
      "Early-stage partners preparing for Private Limited incorporation.",
      "Teams seeking VC funding requiring structured cap table governance."
    ],
    docsRequired: [
      "Co-Founder Identity Verification: PAN Cards, Aadhaar Cards, Passports.",
      "Proposed Equity Ratio & Vesting Terms Schedule.",
      "List of Pre-existing Intellectual Property & Assets to be Transferred."
    ],
    comparison: {
      title: "Founders' Agreement vs Shareholders' Agreement (SHA)",
      versusName: "Shareholders' Agreement (SHA)",
      table: [
        { aspect: "Parties Bound", activeDoc: "Executed solely among the startup co-founders.", versusDoc: "Executed between founders, external investors (VCs/Angels), and the company." },
        { aspect: "Execution Stage", activeDoc: "Executed at startup inception / pre-incorporation stage.", versusDoc: "Executed during priced investment funding rounds." },
        { aspect: "Primary Focus", activeDoc: "Focuses on co-founder roles, vesting, IP transfer, and operational effort.", versusDoc: "Focuses on investor veto rights, anti-dilution, board seats, and exit preference." }
      ]
    },
    procedure: [
      "Step 1: Equity & Vesting Alignment: Co-founders agree on ownership split, 4-year vesting, and executive titles.",
      "Step 2: Automated Generation: Customize terms on Founding Legals to generate a partner-vetted agreement.",
      "Step 3: Review & Customization: Meticulously verify IP assignment, departure buyback pricing, and deadlock rules.",
      "Step 4: Execution & Stamping: Sign digitally via eSign under IT Act Section 10A or wet-sign on state non-judicial stamp paper."
    ],
    costTable: [
      { service: "Automated Instant Generation", desc: "Standard partner-vetted Founders' Agreement template.", cost: "₹50" },
      { service: "Expert Custom Drafting & Advisory", desc: "Tailored clauses for complex multi-founder vesting or international equity structures.", cost: "₹9,999 – ₹19,999" }
    ],
    termination: {
      reasons: [
        "Mutual Written Consent: All co-founders execute a formal termination deed.",
        "Superseded by SHA: Replaced by comprehensive Shareholders' Agreement upon institutional Series A funding."
      ],
      alternatives: [
        "Amendment Addendum: Modify equity split or vesting schedules upon onboarding a new co-founder."
      ]
    },
    template: `FOUNDERS' AGREEMENT

This Founders' Agreement ("Agreement") is executed on [Date] by and among:
1. [Founder 1 Name], residing at [Address] ("CEO & Founder"); AND
2. [Founder 2 Name], residing at [Address] ("CTO & Founder").

1. CAPITAL & EQUITY ALLOCATION
Founder 1 shall hold [Percentage]% and Founder 2 shall hold [Percentage]% of the initial equity shareholding of [Company Name].

2. EQUITY VESTING & CLIFF
All founder shares shall vest over a 4-year period with a 1-year cliff. If a Founder departs prior to the 1-year cliff, all unvested shares shall be repurchased by the Company at nominal par value.

3. INTELLECTUAL PROPERTY ASSIGNMENT
The Founders hereby unconditionally assign all right, title, and interest in all software source code, patents, algorithms, trademarks, and UI/UX designs created for the startup to the Company.

4. DECISION MAKING & DEADLOCK
Daily operating decisions require simple majority. Reserved Matters (funding, equity dilution, entity sale) require unanimous written consent of all Founders.

IN WITNESS WHEREOF, the Founders sign below:

__________________________                      __________________________
Founder 1 Signature                             Founder 2 Signature`,
    faqs: [
      { q: "What is a Founders' Agreement?", a: "A Founders' Agreement is a legally binding contract between startup co-founders that defines equity ownership splits, vesting schedules, roles and responsibilities, IP assignment, and dispute resolution mechanisms." },
      { q: "Is a Founders' Agreement legally binding in India?", a: "Yes, once signed by all co-founders and executed on non-judicial stamp paper, it is a legally binding contract under the Indian Contract Act, 1872." },
      { q: "What is an equity vesting schedule with a cliff?", a: "Equity vesting means earning shares over time (typically 4 years). A 1-year cliff means no shares vest until 12 months of service are completed, preventing early departures with large equity stakes." },
      { q: "Do investors check for a Founders' Agreement during due diligence?", a: "Yes. Angel investors and VCs thoroughly audit Founders' Agreements to verify team stability, clear IP assignment to the corporate entity, and lock-in covenants." },
      { q: "What happens if a co-founder leaves without a Founders' Agreement?", a: "Without an agreement, the departing co-founder retains their full equity stake without performing work, creating severe cap table deadlocks and discouraging future investor funding." },
      { q: "Can a Founders' Agreement be amended later?", a: "Yes. Founders can execute a formal written amendment addendum to modify equity splits, roles, or onboarding new co-founders upon mutual consent." },
      { q: "Is a Founders' Agreement required before company incorporation?", a: "While not legally mandatory before MCA registration, executing it prior to incorporation ensures complete clarity on share distribution and IP ownership from day one." },
      { q: "Who owns intellectual property created by co-founders?", a: "Under a properly drafted Founders' Agreement, all code, algorithms, brand assets, and designs created by founders belong exclusively to the company." },
      { q: "What is a deadlock resolution clause?", a: "It is a legal mechanism (such as mediation, third-party arbitration, or buy-sell mechanisms) used to resolve 50/50 co-founder disagreements on major business decisions." },
      { q: "What stamp duty is required for a Founders' Agreement in India?", a: "Founders' Agreements are typically executed on non-judicial stamp paper of ₹200 in Karnataka, ₹500 in Maharashtra, and ₹100 in Delhi NCR." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper under Karnataka Stamp Act.",
      maharashtra: "₹500 non-judicial stamp paper under Maharashtra Stamp Act Article 5(h).",
      delhi: "₹100 non-judicial stamp paper under Delhi Stamp Rules.",
      general: "Executed on state non-judicial stamp paper of appropriate denomination."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "shareholders-agreement",
    name: "Shareholders' Agreement (SHA)",
    category: "Equity & Corporate",
    tagline: "Secure investor commitments, protect minority rights, and structure startup corporate governance with an enforceable Shareholders' Agreement.",
    overview: "A Shareholders' Agreement (SHA) is a legally binding contract executed under the Companies Act, 2013 between a private limited company, its promoter founders, and institutional investors (Angel/VC). It defines shareholder rights, board representation, investor veto rights (Reserved Matters), Pre-emptive Rights, Right of First Refusal (ROFR), Tag-Along, Drag-Along, and liquidation preferences.",
    whyImportant: [
      "Protects Investor & Founder Rights: Establishes clear voting rights, board seat allocations, and anti-dilution provisions for angel and venture capital investors.",
      "Investor Veto Rights (Reserved Matters): Lists major corporate actions (debt creation, share issuance, M&A) requiring mandatory investor director approval.",
      "Prevents Unilateral Share Transfers: Enforces Right of First Refusal (ROFR) and Pre-emptive rights preventing unauthorized share sales to third parties.",
      "Tag-Along & Drag-Along Exit Rights: Protects minority investors via Tag-Along rights during majority acquisitions and enables Drag-Along enforcement during company sales.",
      "Ensures Corporate Governance & Transparency: Defines quarterly financial reporting, audited balance sheet delivery, and inspection rights."
    ],
    whenRequired: [
      "Onboarding External Investors: Executing Seed, Pre-Series A, or Series A priced equity rounds.",
      "Adding Strategic Corporate Partners: Onboarding equity partners taking minority or majority stakes.",
      "Resolving Multi-Shareholder Governance: Structuring clear voting rules for growing private companies."
    ],
    types: [
      {
        name: "Angel & Seed Round SHA",
        definition: "Standardized agreement tailored for early-stage angel syndicates featuring basic board observer seats, Information Rights, and ROFR.",
        useCase: "Early-stage startup capital raises from HNIs or angel networks."
      },
      {
        name: "Institutional VC Series A/B SHA",
        definition: "Exhaustive corporate governance contract featuring investor board seats, liquidation preference multipliers, anti-dilution ratchets, and veto rights.",
        useCase: "Priced equity rounds led by Venture Capital funds."
      },
      {
        name: "Majority vs Minority Governance SHA",
        definition: "Agreement designed for closely-held private companies balancing operational control between majority promoters and financial partners.",
        useCase: "Family-owned businesses or joint venture corporate entities."
      }
    ],
    components: [
      { term: "Board Composition & Observer Rights", description: "Specifies number of Board seats allocated to Promoters and Investor Directors." },
      { term: "Reserved Matters & Veto Rights", description: "Explicit list of key corporate decisions requiring affirmative investor director approval." },
      { term: "Right of First Refusal (ROFR) & ROFO", description: "Mandatory requirement to offer shares to existing shareholders before selling to external parties." },
      { term: "Tag-Along & Drag-Along Rights", description: "Tag-Along protects minority shareholders during partial acquisitions; Drag-Along forces minority participation in 100% company buyouts." },
      { term: "Anti-Dilution Covenants", description: "Formulaic protection (Broad-Based Weighted Average) shielding investors during down rounds." },
      { term: "Liquidation Preference", description: "Determines order of payout distribution (e.g. 1x Non-Participating) upon company sale or liquidation." },
      { term: "Information Rights & Reporting", description: "Mandated monthly MIS, quarterly financial statements, and annual audited report deliveries." }
    ],
    exclusions: [
      "Transfers of shares to affiliate entities or family trusts explicitly defined as Permitted Transfers.",
      "Standard employee stock option pool (ESOP) issuances pre-approved in the company cap table.",
      "Internal routine operational expenses below pre-agreed financial thresholds."
    ],
    legalValidity: {
      act: "Companies Act, 2013 & Indian Contract Act, 1872",
      overview: "A Shareholders' Agreement is a legally binding contract under Indian law. Crucially, under Indian corporate jurisprudence (VB Rangaraj v. VB Gopalakrishnan), for SHA share transfer restrictions to bind the company, the Articles of Association (AOA) MUST be formally amended via Special Resolution to incorporate the SHA terms.",
      remedies: [
        "Injunction against Unauthorized Board Action: Emergency court order blocking board decisions passed without Investor Director presence.",
        "Specific Performance of ROFR / Drag-Along: Legal decree compelling transfer of shares as per SHA mechanics.",
        "Damages for Breach of Veto Rights: Recovery of financial loss caused by unauthorized capital structure alterations."
      ]
    },
    realWorldExamples: [
      {
        title: "Series A VC Fund Investment",
        scenario: "A SaaS startup raised ₹15 Crore from a VC fund. The SHA ensured the VC director held veto rights over debt creation, protecting the company from over-leverage."
      },
      {
        title: "M&A Acquisition Exit",
        scenario: "During a $20 Million acquisition, minority angel investors exercised their Tag-Along rights under the SHA, exiting at the same share valuation as the founders."
      }
    ],
    whoNeedsIt: [
      "Startups raising capital from Angel Investors, Micro-VCs, or VC Funds.",
      "Founders structuring equity governance with early investors.",
      "Private Limited Companies issuing new equity or preference shares."
    ],
    docsRequired: [
      "Executed Term Sheet & Approved Cap Table.",
      "Company Memorandum & Articles of Association (MOA/AOA).",
      "Investor Corporate Master Data & Authorized Signatory Resolutions."
    ],
    comparison: {
      title: "Shareholders' Agreement (SHA) vs Articles of Association (AOA)",
      versusName: "Articles of Association (AOA)",
      table: [
        { aspect: "Legal Nature", activeDoc: "Private commercial contract binding only signatory shareholders.", versusDoc: "Public statutory charter binding the company and all members under Companies Act." },
        { aspect: "Confidentiality", activeDoc: "Private document not filed with Registrar of Companies (ROC).", versusDoc: "Publicly accessible document filed with MCA/ROC." },
        { aspect: "Legal Hierarchy", activeDoc: "Subordinate to AOA unless AOA is amended to match SHA clauses.", versusDoc: "Prevails over private shareholder contracts under Indian corporate law." }
      ]
    },
    procedure: [
      "Step 1: Term Sheet Finalization: Agree on valuation, board seats, reserved matters, and exit timelines.",
      "Step 2: Generate Customized SHA: Draft agreement on Founding Legals matching term sheet parameters.",
      "Step 3: Execution & Stamping: Sign digitally under IT Act Section 10A or wet-sign on state non-judicial stamp paper.",
      "Step 4: AOA Amendment: Pass EGM Special Resolution and file Form MGT-14 with ROC to amend company AOA."
    ],
    costTable: [
      { service: "Automated Instant Generation", desc: "Standard partner-vetted Shareholders' Agreement template.", cost: "₹50" },
      { service: "Expert VC-Grade SHA & AOA Amendment", desc: "Custom drafting matching complex VC term sheets + ROC filing.", cost: "₹14,999 – ₹29,999" }
    ],
    termination: {
      reasons: [
        "Initial Public Offering (IPO): Automatically terminates upon filing of DRHP and public listing.",
        "100% Acquisition Exit: Terminates upon completion of full company sale.",
        "Mutual Written Termination: Unanimous consent of all shareholder classes."
      ],
      alternatives: [
        "Restated SHA: Execute an Amended & Restated SHA during subsequent funding rounds."
      ]
    },
    template: `SHAREHOLDERS' AGREEMENT (SHA)

This Shareholders' Agreement is executed on [Date] by and among:
1. [Company Name], a company incorporated under Companies Act, 2013 ("Company");
2. [Founder Names] ("Promoters"); AND
3. [Investor Name/Fund] ("Investors").

1. BOARD OF DIRECTORS
The Board shall consist of [Number] Directors. Promoters shall nominate [Number] Directors. Investors shall nominate [Number] Director ("Investor Director").

2. RESERVED MATTERS
The Company shall not take any of the following decisions without the prior written consent of the Investor Director:
a) Alteration of share capital or issuance of new shares;
b) Amendment of MOA or AOA;
c) Entering into M&A transactions or selling primary assets.

3. TRANSFER OF SHARES & ROFR
No Promoter shall transfer shares without offering a Right of First Refusal (ROFR) to the Investors.

4. TAG-ALONG RIGHT
If Promoters propose to sell shares to a third party, Investors have the right to tag along and sell their shares on identical terms.

IN WITNESS WHEREOF, the parties sign below:

For Company: __________________________        Promoters: __________________________
Investors: ____________________________`,
    faqs: [
      { q: "What is a Shareholders' Agreement (SHA)?", a: "A Shareholders' Agreement is a legally binding document that outlines each shareholder's rights, obligations, board representation, and decision-making powers within a company." },
      { q: "Is a Shareholders' Agreement legally binding in India?", a: "Yes, once executed and properly stamped, an SHA is a legally binding contract under the Indian Contract Act, 1872 and Companies Act, 2013." },
      { q: "Can a Shareholders' Agreement override the company's AOA?", a: "No. Under Indian corporate law (VB Rangaraj ruling), the Articles of Association (AOA) prevail over private SHAs. Therefore, you must amend the AOA to incorporate SHA terms." },
      { q: "What are Reserved Matters in an SHA?", a: "Reserved Matters are critical corporate decisions (such as share issuances, debt creation, or M&A) that require explicit affirmative vote or veto approval from investor directors." },
      { q: "What happens if a shareholder breaches the agreement?", a: "Consequences include financial damages, forced share transfers, forfeiture of voting rights, or emergency court injunctions." },
      { q: "Is stamp duty applicable on a Shareholders' Agreement in India?", a: "Yes. Stamp duty applies to SHAs under state stamp laws, typically ranging from ₹200 to ₹500 depending on jurisdiction." },
      { q: "What is the difference between Tag-Along and Drag-Along rights?", a: "Tag-Along protects minority shareholders by allowing them to join a share sale initiated by majority promoters. Drag-Along allows majority shareholders to force minority shareholders to sell their shares during a 100% company acquisition." },
      { q: "What is the Right of First Refusal (ROFR)?", a: "ROFR requires any shareholder wanting to sell shares to first offer them to existing shareholders at the same price before selling to an external buyer." },
      { q: "Why do investors insist on an SHA before funding?", a: "Investors require an SHA to secure veto rights over key decisions, protect against share dilution, ensure financial reporting, and define exit mechanisms." },
      { q: "How long does a Shareholders' Agreement remain in force?", a: "An SHA typically remains in force until the company executes an IPO, undergoes 100% acquisition, or is replaced by a restated SHA in subsequent funding rounds." },
      { q: "Can an SHA be customized for startups?", a: "Yes. SHAs can be customized based on funding stage, investor ticket size, board composition, and cap table requirements." },
      { q: "What filings are required after signing an SHA?", a: "After signing an SHA, the company must pass an EGM Special Resolution and file Form MGT-14 with the Registrar of Companies (ROC) to amend the AOA." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper under Karnataka Stamp Act.",
      maharashtra: "₹500 non-judicial stamp paper under Maharashtra Stamp Act Article 5(h).",
      delhi: "₹200 non-judicial stamp paper under Delhi Stamp Rules.",
      general: "Executed on state non-judicial stamp paper of ₹200–₹500 denomination."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "share-subscription-agreement",
    name: "Share Subscription Agreement (SSA)",
    category: "Equity & Corporate",
    tagline: "Define investment terms and the subscription process for new shares during a fundraise.",
    overview: "A Share Subscription Agreement (SSA) outlines the terms and conditions under which a subscriber (typically an investor) agrees to buy new shares issued by the company. It defines the pricing, timeline, and conditions precedent for the investment.",
    whyImportant: [
      "Subscription Commitment: Binds the investor to pay the subscription amount upon satisfying conditions.",
      "Representations & Warranties: Standardized declarations about the company's financial and legal standing.",
      "Clear Process: Defines completion mechanics and share certificate issuance timelines."
    ],
    whenRequired: [
      "Raising Capital: When issuing new shares to external investors.",
      "Executing Equity rounds: Following the execution of a Term Sheet."
    ],
    components: [
      { term: "Subscription Amount", description: "The total funds the investor will wire to the company." },
      { term: "Conditions Precedent", description: "Tasks the company must complete (e.g., filings, approvals) before receiving funds." }
    ],
    whoNeedsIt: [
      "Companies raising angel or venture capital rounds."
    ],
    docsRequired: [
      "Valuation Report: To justify the share premium.",
      "Board Resolution: Approving the proposed allotment."
    ],
    comparison: {
      title: "SSA vs Shareholders' Agreement (SHA)",
      versusName: "Shareholders' Agreement (SHA)",
      table: [
        { aspect: "Scope", activeDoc: "Focuses on the transaction of buying shares (one-off event).", versusDoc: "Focuses on the ongoing governance and voting rights after becoming a shareholder." }
      ]
    },
    procedure: [
      "Step 1: Draft the SSA based on term sheet.",
      "Step 2: Sign SSA and execute conditions precedent.",
      "Step 3: Transfer funds and allot shares within 60 days."
    ],
    costTable: [
      { service: "Drafting", desc: "Drafting subscription terms and conditions.", cost: "₹15,000 – ₹25,000" }
    ],
    termination: {
      reasons: [
        "Failure of conditions: If Conditions Precedent are not met by the long-stop date."
      ],
      alternatives: [
        "Extension: Extend the long-stop date."
      ]
    },
    template: `SHARE SUBSCRIPTION AGREEMENT\n\nThis SSA is entered into on [Date] by [Company] and [Investor].\n\nARTICLE 1: SUBSCRIPTION\n1.1. Price: The Investor agrees to subscribe to [Number] shares at ₹[Price] per share.`,
    types: [
      { name: "Common Equity Share Subscription", definition: "Subscription for standard equity shares with equal voting rights.", useCase: "Early-stage angel or co-founder subscription rounds." },
      { name: "Compulsorily Convertible Preference Shares (CCPS)", definition: "Subscription for preference shares that automatically convert into equity shares upon future priced funding rounds.", useCase: "Institutional VC rounds under Indian Companies Act regulations." },
      { name: "Rights Issue Share Subscription", definition: "Issuance of new shares to existing shareholders on a pro-rata basis.", useCase: "Internal funding rounds by existing promoters and investors." }
    ],
    exclusions: [
      "Future share issuances not covered by the immediate subscription tranche.",
      "Pre-existing liabilities or secondary share transfers between existing founders and third parties.",
      "Informal oral promises regarding board seats not documented in the agreement."
    ],
    legalValidity: {
      act: "Companies Act, 2013 & Foreign Exchange Management Act (FEMA), 1999",
      overview: "A Share Subscription Agreement (SSA) is a statutory investment contract governed by Section 42 of the Companies Act, 2013 (Private Placement). For foreign investors, compliance with RBI FEMA pricing guidelines is mandatory.",
      remedies: [
        "Specific Performance: Court order compelling company to allot shares and issue Form PAS-3.",
        "Refunding Subscription Money: Recovery of funds with interest if allotment fails within statutory 60-day limit.",
        "Indemnity Enforcement: Recovery for loss caused by inaccurate financial representations."
      ]
    },
    realWorldExamples: [
      { title: "VC Series A Investment Round", scenario: "A fintech startup issued 50,000 CCPS to a VC fund under an SSA, securing ₹10 Crore in funding upon satisfying conditions precedent." },
      { title: "Angel Syndicate Subscription", scenario: "An angel group subscribed to 10% equity via SSA with PAS-3 return filed within 15 days of allotment." }
    ],
    faqs: [
      { q: "What are Conditions Precedent?", a: "Conditions Precedent are tasks (like getting corporate approvals or clearing audits) that must be done before the investor is obligated to wire the money." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹200 non-judicial stamp paper.",
      general: "Ad-valorem duty on share certificates (usually 0.1%) applies separately after allotment."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "safe-agreement",
    name: "SAFE / iSAFE Agreement",
    category: "Equity & Corporate",
    tagline: "Raise early-stage capital quickly without immediate valuation debates using standard SAFE agreements.",
    overview: "A Simple Agreement for Future Equity (SAFE) is an agreement between an investor and a startup where the investor provides capital in exchange for the right to receive equity in the future upon specific triggers, such as a priced equity round.",
    whyImportant: [
      "No Valuation Debate: Defers the valuation discussion to a future priced round.",
      "Low Legal Overhead: Simpler and faster to execute than structured equity rounds.",
      "Founder Control: Keeps cap table clean until formal Series A conversion."
    ],
    whenRequired: [
      "Pre-Seed/Seed Fundraising: Raising initial cash from angel investors.",
      "Bridge Rounds: Quick capital injections between major rounds."
    ],
    components: [
      { term: "Valuation Cap", description: "The maximum valuation at which the investor converts into shares." },
      { term: "Discount Rate", description: "Discount percentage on the price per share of the future round." }
    ],
    whoNeedsIt: [
      "Early-stage startups seeking fast fundraising with minimal legal bills."
    ],
    docsRequired: [
      "Bank Details: For wire transfer.",
      "Board Approval: Consenting to the issuance of convertible options."
    ],
    comparison: {
      title: "SAFE vs Convertible Note",
      versusName: "Convertible Note",
      table: [
        { aspect: "Debt Status", activeDoc: "Not a debt instrument; carries no interest or maturity date.", versusDoc: "A debt instrument with interest rates and maturity dates." }
      ]
    },
    procedure: [
      "Step 1: Agree on Valuation Cap and Discount.",
      "Step 2: Sign the SAFE agreement.",
      "Step 3: Transfer funds and file required corporate disclosures."
    ],
    costTable: [
      { service: "Drafting", desc: "Drafting SAFE/iSAFE document.", cost: "₹7,500 – ₹12,000" }
    ],
    termination: {
      reasons: [
        "Conversion: Converts to shares during next priced round.",
        "Liquidity: Returns capital upon buyout or acquisition."
      ],
      alternatives: [
        "Amendment: Adjust cap or discount rate if market conditions change."
      ]
    },
    template: `SIMPLE AGREEMENT FOR FUTURE EQUITY\n\nIn exchange for the investment of ₹[Amount], the Company agrees to issue shares at the next Equity Financing round subject to a Valuation Cap of ₹[Cap].`,
    types: [
      { name: "Valuation Cap SAFE", definition: "SAFE contract specifying a maximum valuation ceiling for conversion into equity during the next priced round.", useCase: "Standard early-stage angel investments." },
      { name: "Discount-Only SAFE", definition: "SAFE contract applying a percentage discount (e.g. 20%) to the next round share price without a valuation cap.", useCase: "Fast-growing startups with high expected valuation growth." },
      { name: "iSAFE (Indian Simple Agreement for Future Equity)", definition: "Compliant Indian adaptation structured as Compulsorily Convertible Preference Shares (CCPS) to align with Companies Act Section 42.", useCase: "Indian startups raising seed capital from incubators, accelerators, or angel funds." }
    ],
    exclusions: [
      "Immediate voting or board representation rights prior to equity conversion.",
      "Debt repayment or interest entitlements (unlike convertible debt notes).",
      "Dividend payouts prior to conversion into preference or equity shares."
    ],
    legalValidity: {
      act: "Companies Act, 2013 & Reserve Bank of India (RBI) Regulations",
      overview: "In India, traditional Y-Combinator SAFEs are structured as iSAFEs (CCPS) under Companies Act Section 42 to ensure statutory legal validity. They convert into equity upon the triggering of a qualifying priced round.",
      remedies: [
        "Mandatory Equity Conversion: Decree compelling conversion into shares upon qualified funding round.",
        "Liquidation Preference Enforcement: Priority payout of original investment amount during company dissolution.",
        "Specific Performance: Court order requiring share certificate issuance post-conversion."
      ]
    },
    realWorldExamples: [
      { title: "Y-Combinator Accelerator Cohort", scenario: "An Indian AI startup raised $125,000 via iSAFE with a $5 Million valuation cap, converting automatically during Series A." },
      { title: "Angel Syndicate Seed Note", scenario: "Three angel investors funded ₹1 Crore via iSAFE with a 20% discount rate, converting seamlessly in the subsequent Seed round." }
    ],
    faqs: [
      { q: "What is an iSAFE?", a: "An iSAFE is the Indian-compliant version of the Y-Combinator SAFE, structured as Compulsorily Convertible Preference Shares (CCPS) to fit MCA guidelines." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Standard agreement rate depending on state laws."
    },
    complexity: "Medium",
    requiredForFundraising: true
  },
  {
    id: "convertible-note-agreement",
    name: "Convertible Note Agreement",
    category: "Equity & Corporate",
    tagline: "Raise capital structured as convertible debt, carrying interest and a maturity date.",
    overview: "A Convertible Note is a debt instrument that converts into equity at a future date, usually in connection with a future funding round. It includes interest rates and a maturity date, acting as a loan that resolves into shares.",
    whyImportant: [
      "Bridges Capital: Fast way to fund operational runway before a priced round.",
      "Repayment Protection: Provides investors leverage if the startup fails to raise subsequent rounds."
    ],
    whenRequired: [
      "Bridge Funding: Prior to closing a priced Series A round.",
      "Seed Financing: Under specific RBI/FEMA frameworks for startups."
    ],
    components: [
      { term: "Interest Rate", description: "Compounding interest that converts into additional shares." },
      { term: "Maturity Date", description: "The deadline by which the note must convert or be repaid." }
    ],
    whoNeedsIt: [
      "Startups needing bridge capital with defined repayment backup plans."
    ],
    docsRequired: [
      "Start-up Recognition: DPIIT certificate (necessary under Indian law for issuing convertible notes)."
    ],
    comparison: {
      title: "Convertible Note vs Equity Allotment",
      versusName: "Equity Allotment",
      table: [
        { aspect: "Valuation", activeDoc: "Deferred to a future round.", versusDoc: "Fixed immediately based on current valuation." }
      ]
    },
    procedure: [
      "Step 1: Check MSME/DPIIT status.",
      "Step 2: Draft terms of conversion, interest, and maturity.",
      "Step 3: Execute note and receive funds."
    ],
    costTable: [
      { service: "Drafting", desc: "Vetted Convertible Note drafting.", cost: "₹12,000 – ₹20,000" }
    ],
    termination: {
      reasons: [
        "Maturity: Loan repayment if not converted.",
        "Conversion: Triggers automatic conversion to shares."
      ],
      alternatives: [
        "Extension: Agreement to push out the maturity date."
      ]
    },
    template: `CONVERTIBLE NOTE AGREEMENT\n\nThis Note certifies that the Company owes ₹[Amount] to the Holder, accruing interest at [Rate]% per annum, converting at Maturity on [Date].`,
    types: [
      { name: "DPIIT Recognized Startup Convertible Note", definition: "Specialized note issued under MCA notification permitting DPIIT-recognized startups to issue debt notes convertible into equity within 10 years.", useCase: "Indian DPIIT registered startups raising bridge seed funding." },
      { name: "Pre-Series A Bridge Note", definition: "Short-term debt note with 12–18 month maturity and interest rate (e.g. 8% p.a.) bridging to Series A funding.", useCase: "Startups extending cash runway ahead of an upcoming VC round." },
      { name: "Qualified Institutional Convertible Debt Note", definition: "Enterprise debt instrument issued to corporate venture funds with qualified institutional conversion triggers.", useCase: "Strategic corporate bridge rounds." }
    ],
    exclusions: [
      "Permanent debt status without conversion mechanisms.",
      "Unilateral interest rate hikes not documented in the note purchase agreement.",
      "Secondary share transfer restrictions applying prior to note conversion."
    ],
    legalValidity: {
      act: "Companies Act, 2013 (Section 62) & MCA Startup Rules",
      overview: "Under MCA regulations, DPIIT-recognized Private Limited startups can legally issue Convertible Notes for a minimum single-tranche amount of ₹25 Lakhs, convertible into equity within 10 years.",
      remedies: [
        "Debt Recovery Suit: Enforcement of principal debt repayment + interest if conversion triggers fail.",
        "Specific Performance of Equity Conversion: Court decree compelling share allotment upon maturity.",
        "Injunction against Asset Alienation: Blocking company from selling core assets during default."
      ]
    },
    realWorldExamples: [
      { title: "DPIIT Startup ₹50 Lakhs Bridge Funding", scenario: "A B2B SaaS startup issued a ₹50 Lakhs Convertible Note to an angel investor with a 10-year conversion window under DPIIT regulations." },
      { title: "VC Extension Bridge Note", scenario: "An e-commerce brand raised ₹2 Crore via a 12-month Convertible Note at 8% interest, converting seamlessly at Series A." }
    ],
    faqs: [
      { q: "Can any Indian company issue Convertible Notes?", a: "No, under MCA guidelines, only DPIIT-recognized startups are allowed to issue convertible notes to investors." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper; higher if categorized as bond.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Varies depending on whether it is executed as a simple agreement or a formal debt bond."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "term-sheet",
    name: "Term Sheet",
    category: "Equity & Corporate",
    tagline: "Establish the roadmap for your funding round with a professional Term Sheet.",
    overview: "A Term Sheet is a non-binding agreement setting forth the basic terms and conditions under which an investment will be made. It serves as a template to develop more detailed legally binding documents.",
    whyImportant: [
      "Aligns Intent: Ensures all parties are aligned on valuation and voting rights.",
      "Exclusivity: Prevents promoters from shopping the deal while investors conduct due diligence."
    ],
    whenRequired: [
      "Funding Round Initiation: Immediately after an investor agrees to invest in principal."
    ],
    components: [
      { term: "Pre-money Valuation", description: "The agreed value of the company before the investment." },
      { term: "Exclusivity Clause", description: "Binding term preventing founders from seeking other investors for a period (e.g. 45 days)." }
    ],
    whoNeedsIt: [
      "Founders and investors entering the due diligence phase."
    ],
    docsRequired: [
      "Cap Table: To calculate post-money dilution.",
      "Pitch Deck / Financials: Supporting documents for valuation."
    ],
    comparison: {
      title: "Term Sheet vs SHA",
      versusName: "Shareholders' Agreement (SHA)",
      table: [
        { aspect: "Binding Status", activeDoc: "Primarily non-binding (except exclusivity & confidentiality).", versusDoc: "Fully binding contract." }
      ]
    },
    procedure: [
      "Step 1: Investor issues Term Sheet.",
      "Step 2: Parties negotiate valuation and rights.",
      "Step 3: Signed by both parties to trigger exclusivity."
    ],
    costTable: [
      { service: "Drafting/Review", desc: "Vetting binding clauses and protecting promoters.", cost: "₹7,500 – ₹15,000" }
    ],
    termination: {
      reasons: [
        "Execution of SHA: Superseded by final binding agreements.",
        "Expiry: Exclusivity period ends without deal closure."
      ],
      alternatives: [
        "Extension of Exclusivity: Push deadline for closing."
      ]
    },
    template: `TERM SHEET (SUMMARY)\n\nThis term sheet outlines the principal terms of the proposed investment of ₹[Amount] in the Company by [Investor] at a pre-money valuation of ₹[Valuation].`,
    types: [
      { name: "Non-Binding Equity Term Sheet", definition: "High-level summary of proposed investment terms where only Exclusivity, Confidentiality, and Governing Law are legally binding.", useCase: "Standard angel and VC funding negotiations." },
      { name: "Binding Debt / Convertible Term Sheet", definition: "Term sheet containing binding commitments regarding loan disbursements and interest terms.", useCase: "Venture debt and structured debt investments." },
      { name: "Strategic Acquisition / M&A Term Sheet", definition: "Framework document outlining valuation, asset transfer, and founder lock-in terms during company buyouts.", useCase: "M&A acquisitions and corporate buyouts." }
    ],
    exclusions: [
      "Definitive legal documentation obligations prior to due diligence completion.",
      "Unilateral investment guarantees (term sheets express intent, not an absolute obligation to invest).",
      "Post-closing governance rules not explicitly detailed in the term sheet."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872",
      overview: "Term Sheets are generally non-binding intent documents except for specific binding clauses: Exclusivity (No-Shop), Confidentiality, and Expenses/Governing Law which are fully enforceable contracts.",
      remedies: [
        "Injunction against Parallel Deal Shopping: Legal order blocking startup from negotiating with other investors during Exclusivity period.",
        "Damages for Breach of Confidentiality: Financial recovery for leaked deal terms or proprietary financial data.",
        "Recovery of Due Diligence Expenses: Enforcing reimbursement of legal due diligence costs if specified."
      ]
    },
    realWorldExamples: [
      { title: "VC Series A $3M Term Sheet", scenario: "A VC fund issued a $3M Term Sheet with a 30-day Exclusivity clause, allowing the fund's legal team to complete DD and draft definitive SHA/SSA agreements." },
      { title: "Angel Syndicate Seed Term Sheet", scenario: "An angel network signed a ₹1.5 Crore Term Sheet specifying 1x Non-Participating Liquidation Preference and Board Observer rights." }
    ],
    faqs: [
      { q: "Is a Term Sheet binding?", a: "Most clauses (valuation, board seats) are non-binding. Exclusivity and confidentiality clauses are binding." }
    ],
    stampDuty: {
      karnataka: "Not required for non-binding; ₹200 if binding clauses are enforced.",
      maharashtra: "₹500 if binding exclusivity applies.",
      delhi: "₹100 if signed with binding clauses.",
      general: "Stamping is optional but recommended if binding clauses are actively relied upon."
    },
    complexity: "Medium",
    requiredForFundraising: true
  },
  {
    id: "employment-agreement",
    name: "Employment Agreement",
    category: "HR & Employment",
    tagline: "Establish clear employment terms, safeguard company IP, ensure labor law compliance, and protect against wrongful termination claims.",
    overview: "An Employment Agreement is a legally binding employment contract governed by Indian Labor Laws and the Indian Contract Act, 1872. It details compensation structures (CTC), probation periods, working hours, statutory benefits (PF, ESI, Gratuity), confidentiality covenants, and notice periods. Crucially, it secures complete corporate ownership of all work-product, code, and inventions created by the employee through explicit Work-for-Hire provisions.",
    whyImportant: [
      "IP Assignment (Work-for-Hire): Ensures all software code, technical designs, product features, and marketing copy created by employees belong exclusively to the employer.",
      "Confidentiality & Trade Secret Protection: Restricts staff from disseminating customer lists, pricing strategies, or proprietary algorithms to competitors during or post-employment.",
      "Labor Law & Statutory Compliance: Fulfills mandatory obligations under state Shops and Commercial Establishments Acts, Provident Fund (EPF), ESI, and Payment of Gratuity Act.",
      "Defines Probation & Notice Boundaries: Establishes clear 30–90 day notice periods or salary-in-lieu parameters to avoid unannounced staff exits or wrongful termination disputes.",
      "Non-Solicitation Protection: Prevents former employees from poaching key team members, engineers, or existing clients upon departure."
    ],
    whenRequired: [
      "Onboarding Full-Time or Part-Time Staff: Formalizing employment contracts for engineers, marketers, and operations staff.",
      "Hiring Key Management Personnel (KMPs) & Directors: Executing executive contracts with detailed ESOP vesting and severance terms.",
      "VC & Investor Due Diligence: Presenting audited HR compliance records and signed IP assignment contracts during fundraising rounds.",
      "Converting Interns or Contractors: Transitioning temporary consultants into permanent full-time company employees."
    ],
    types: [
      {
        name: "Permanent Full-Time Employment Agreement",
        definition: "Standard employment contract for regular, full-time staff with indefinite tenure subject to probation and statutory benefits.",
        useCase: "Standard hiring for software engineers, product managers, marketing executives, and core operational staff."
      },
      {
        name: "Fixed-Term Contract Employment Agreement",
        definition: "Time-bound contract where employment automatically terminates on a specified date or completion of a defined project.",
        useCase: "Ideal for seasonal hires, project-specific specialists, or temporary parental leave coverages."
      },
      {
        name: "Executive & Director Employment Agreement",
        definition: "Comprehensive contract for C-suite executives detailing performance bonuses, equity/ESOP vesting, non-solicitation, and governance vetoes.",
        useCase: "Hiring Chief Executive Officers (CEO), Chief Technology Officers (CTO), or Managing Directors."
      }
    ],
    components: [
      { term: "Salary Structure & CTC Breakup", description: "Detailed itemized breakdown of basic pay, House Rent Allowance (HRA), special allowances, Provident Fund (PF), and TDS deductions." },
      { term: "Probation & Confirmation", description: "Defines initial trial period (typically 3 to 6 months) and formal evaluation criteria for confirmation." },
      { term: "Confidentiality & Non-Disclosure", description: "Protects proprietary software codebases, customer data, algorithms, and commercial strategies from unauthorized release." },
      { term: "Work-for-Hire IP Assignment", description: "Explicit legal assignment vesting all copyrights, patents, and technical innovations created during tenure in the company." },
      { term: "Non-Solicitation of Clients & Employees", description: "Restricts departing staff from soliciting company clients or poaching team members for a defined period." },
      { term: "Termination & Notice Period", description: "Details notice period requirements (30–90 days), option for salary in lieu of notice, and immediate termination for cause." },
      { term: "Code of Conduct & Moonlighting Clause", description: "Prohibits secondary employment, side businesses, or unauthorized freelance activities during employment tenure." },
      { term: "Dispute Resolution & Governing Law", description: "Sets governing state labor jurisdiction and mandatory mediation/arbitration mechanisms." }
    ],
    exclusions: [
      "Personal intellectual property created by the employee prior to employment, provided it was formally disclosed in writing prior to joining.",
      "Inventions developed entirely on the employee's personal time without using company computers, software tools, or confidential data.",
      "General technical knowledge, industry skills, and personal expertise acquired by the employee during their professional career.",
      "Whistleblower disclosures protected under statutory Indian laws or disclosures mandated by court orders."
    ],
    legalValidity: {
      act: "Indian Contract Act 1872 & State Shops and Commercial Establishments Acts",
      overview: "Employment contracts are governed by Indian labor laws and Section 27 of the Indian Contract Act. Non-compete restrictions active *during* employment tenure are 100% legally enforceable in Indian courts to prevent moonlighting and conflict of interest. Post-employment non-solicitation and confidentiality clauses are fully recognized by courts to protect legitimate business interests.",
      remedies: [
        "Immediate Injunction: Restraining former staff from utilizing proprietary customer databases or source code.",
        "Monetary Damages & Salary Recovery: Enforcing financial recovery for breach of notice period or unauthorized departure.",
        "Disgorgement of Profits: Claiming revenues earned by defaulting staff through unauthorized moonlighting or IP theft."
      ]
    },
    realWorldExamples: [
      {
        title: "SaaS Tech Startup IP Dispute",
        scenario: "A lead developer resigned and attempted to launch a competing mobile application using code written during work hours. The employer enforced the Work-for-Hire IP clause, securing a court injunction to block the competing launch."
      },
      {
        title: "FinTech Executive Non-Solicitation",
        scenario: "A departing VP of Sales attempted to poach five senior account managers to a direct competitor. The company successfully enforced the non-solicitation clause, recovering damages and enforcing a 12-month recruitment moratorium."
      },
      {
        title: "Enterprise Offshoring Staff Compliance",
        scenario: "An Indian IT services company executed standardized employment agreements across 500 engineers, satisfying stringent compliance audits required by European banking clients."
      }
    ],
    whoNeedsIt: [
      "Startups & Enterprises onboarding full-time or part-time employees in India.",
      "Founders hiring C-suite executives, directors, or senior managers.",
      "Companies converting freelancers or independent contractors into permanent staff.",
      "HR departments ensuring statutory labor compliance under state Shops & Establishments Acts."
    ],
    docsRequired: [
      "Candidate Verified Identity Proof: PAN Card, Aadhaar Card, Passport.",
      "Pre-Employment Records: Relieving Letter, Academic Certificates, Form 16 / Pay Slips.",
      "Salary Breakup Structure & Approved ESOP Grant Letter (if applicable)."
    ],
    comparison: {
      title: "Employment Agreement vs Offer Letter",
      versusName: "Offer Letter",
      table: [
        { aspect: "Legal Binding", activeDoc: "Exhaustive, fully binding contract containing IP transfer and non-solicitation penalties.", versusDoc: "Preliminary document outlining offer intent; not a complete binding employment contract." },
        { aspect: "Detail Level", activeDoc: "High (covers IP ownership, moonlighting rules, PF parameters, & notice rules).", versusDoc: "Low (summarizes basic salary, job title, joining date, and general benefits)." },
        { aspect: "Labor Court Standing", activeDoc: "Easily enforceable in labor courts and civil litigation.", versusDoc: "Difficult to enforce standalone without the underlying formal agreement." }
      ]
    },
    procedure: [
      "Step 1: Offer Acceptance: Candidate signs the offer letter accepting job role and gross salary.",
      "Step 2: Generate Employment Contract: Customize terms on Founding Legals including notice period, CTC annexure, and IP assignment.",
      "Step 3: Execution & Stamping: Sign digitally via eSign under IT Act Section 10A or wet-sign on ₹100 non-judicial stamp paper.",
      "Step 4: HR Onboarding: File employee records and initiate statutory Provident Fund (EPF) and ESI portal registrations."
    ],
    costTable: [
      { service: "Automated Instant Generation", desc: "Standard partner-vetted Employment Agreement for startups & SMBs.", cost: "₹50" },
      { service: "Executive Director Contract", desc: "Tailored C-suite contract with custom ESOP vesting, non-compete, and severance terms.", cost: "₹4,999 – ₹9,999" }
    ],
    termination: {
      reasons: [
        "Resignation: Employee submits formal written notice as per contract terms.",
        "Termination for Cause: Immediate discharge for theft, fraud, gross insubordination, or confidentiality breach.",
        "Redundancy / Layoff: Operational downsizing with severance pay as per labor law."
      ],
      alternatives: [
        "Performance Improvement Plan (PIP): 30–60 day structured improvement plan prior to termination decision."
      ]
    },
    template: `EMPLOYMENT AGREEMENT

This Employment Agreement ("Agreement") is executed on [Date] by and between:
[Company Name], a company incorporated under the Companies Act, 2013, having its registered office at [Address] (hereinafter referred to as "Employer"); AND
[Employee Name], residing at [Address] (hereinafter referred to as "Employee").

1. POSITION & DUTIES
The Employee is appointed as [Job Title]. Employee agrees to perform all assigned duties in good faith and devote full professional time to the Employer.

2. COMPENSATION & BENEFITS
The Employee's Cost to Company (CTC) shall be ₹[Amount] per annum, payable in monthly installments as detailed in Annexure A, subject to statutory TDS, EPF, and Professional Tax deductions.

3. INTELLECTUAL PROPERTY & CONFIDENTIALITY
3.1 Work-for-Hire: All inventions, software code, UI designs, patents, and documentation developed by Employee during employment belong exclusively to the Employer.
3.2 Confidentiality: Employee shall not disclose proprietary source code, customer databases, or business strategies during or after employment.

4. EXCLUSIVITY & NO MOONLIGHTING
During employment, Employee shall not engage in secondary employment, consulting, or personal business activities without prior written consent.

5. TERMINATION & NOTICE PERIOD
Either party may terminate employment by providing [30/60/90] days prior written notice or basic salary in lieu thereof. Employer reserves the right to terminate employment immediately for Cause without notice.

IN WITNESS WHEREOF, the Authorized Signatories have signed below:

For Employer:                                   Employee:
__________________________                      __________________________
Authorized Signatory                            [Employee Signature]`,
    faqs: [
      { q: "Is a post-employment non-compete clause legally valid in India?", a: "Under Section 27 of the Indian Contract Act 1872, any agreement restricting a person from exercising a lawful profession or business post-employment is void. However, non-compete clauses active *during* employment tenure are 100% valid, as are post-employment non-solicitation and confidentiality clauses." },
      { q: "Is moonlighting legal under an Indian Employment Agreement?", a: "Unless explicitly permitted in writing, moonlighting is illegal if the employment agreement contains a strict exclusivity clause. Employers can terminate employees for cause if caught taking secondary jobs or consulting work." },
      { q: "Can an employee leave immediately by paying salary in lieu of notice?", a: "Yes, if the employment agreement explicitly provides an option for 'salary in lieu of notice'. However, if the contract requires actual serving of notice for handover, the employer can withhold relieving letters until handover is complete." },
      { q: "What is the difference between Gross Salary and CTC in an employment contract?", a: "CTC (Cost to Company) includes all employer expenses including Provident Fund contributions, insurance, and bonuses. Gross salary is the amount paid before individual employee tax and PF deductions." },
      { q: "Are digital e-signatures valid on employment contracts in India?", a: "Yes. Digital signatures executed via Aadhaar eSign or verified digital signature certificates are legally binding under Section 10A of the Information Technology Act, 2000." },
      { q: "What stamp duty is required for an employment agreement in India?", a: "Employment contracts are typically executed on non-judicial stamp paper of ₹100 in Karnataka, Maharashtra, and Delhi, or state-specific low denomination rates." },
      { q: "Who owns code or designs created by an employee during work hours?", a: "Under the Copyright Act, 1957 (Work-for-Hire doctrine), any creative work, code, or patentable design created during employment belongs automatically to the employer." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper under Karnataka Stamp Act.",
      maharashtra: "₹100 non-judicial stamp paper under Maharashtra Stamp Act Article 5(h).",
      delhi: "₹100 non-judicial stamp paper under Delhi Stamp Rules.",
      general: "Executed on state non-judicial stamp paper of ₹100 denomination."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "consultancy-agreement",
    name: "Consultancy Agreement",
    category: "HR & Employment",
    tagline: "Engage external advisors, contractors, and freelancers legally while guaranteeing 100% IP transfer to your company.",
    overview: "A Consultancy Agreement (also known as a Freelancer or Independent Contractor Agreement) is a legally binding contract under Section 10 of the Indian Contract Act, 1872. It defines the commercial relationship between a client company and an independent consultant or firm, specifying the scope of work (SOW), milestone payments, TDS Section 194J tax treatment, strict non-disclosure obligations, and absolute assignment of intellectual property rights under Section 19 of the Copyright Act, 1957.",
    whyImportant: [
      "Secures IP Transfer (Section 19 Copyright Act): Under Indian copyright law, independent contractors retain copyright by default unless explicitly assigned in writing.",
      "Prevents Deemed Employee Claims: Clearly establishes independent contractor status, explicitly exempting the company from Provident Fund (PF), Gratuity, and ESI obligations.",
      "Defines SOW & Deliverable Milestones: Outlines exact project milestones, acceptance testing criteria, and revision cycles.",
      "Enforces Strict Confidentiality & Non-Solicitation: Restricts consultants from sharing proprietary code, customer lists, or soliciting internal staff.",
      "Defines TDS & Payment Terms: Establishes payment milestones subject to 10% TDS under Income Tax Act Section 194J."
    ],
    whenRequired: [
      "Hiring External IT Developers & Software Consultants: Contracting UI/UX designers, cloud architects, or security auditors.",
      "Engaging Fractional Advisors & Marketing Experts: Retaining part-time CFOs, legal advisors, or digital growth agencies.",
      "Outsourcing Specialized Deliverables: Short-term or project-based corporate assignments."
    ],
    types: [
      {
        name: "Individual Freelancer Agreement",
        definition: "Contract structured for individual independent contractors providing specialized skill sets.",
        useCase: "Hiring freelance developers, copywriters, or UI designers."
      },
      {
        name: "Corporate Consultancy & Retainership Agreement",
        definition: "Agreement between two corporate entities specifying monthly retainership fees and SLA commitments.",
        useCase: "Engaging fractional CFO firms, public relations agencies, or legal retainer services."
      },
      {
        name: "Milestone-Based Fixed Price Contract",
        definition: "Contract where compensation is tied directly to verified milestone sign-offs outlined in a Statement of Work (SOW).",
        useCase: "Turnkey software build projects or industrial design work."
      }
    ],
    components: [
      { term: "Statement of Work (SOW) & Milestones", description: "Comprehensive annexure detailing exact deliverables, acceptance criteria, and timelines." },
      { term: "Fee Structure & Section 194J TDS", description: "Defines fixed, hourly, or retainership fees subject to statutory 10% TDS deduction." },
      { term: "Unconditional IP Assignment Clause", description: "Explicit transfer of all pre-existing and newly created source code, patents, and designs to the client company." },
      { term: "Independent Contractor Status", description: "Legal affirmation that no employee-employer relationship, benefits, or labor law rights exist." },
      { term: "Confidentiality & Data Protection", description: "Binds consultant to protect proprietary data in compliance with IT Act 2000 Section 43A." },
      { term: "Non-Solicitation Covenants", description: "Restricts consultant from hiring client employees or soliciting client clients during and post-term." },
      { term: "Termination & Notice Period", description: "Allows termination for convenience with 7–14 days notice or immediate termination for cause." }
    ],
    exclusions: [
      "Consultant's pre-existing proprietary tools, libraries, or frameworks explicitly identified as Background IP.",
      "General industry knowledge, methods, and skills possessed by the consultant prior to the engagement.",
      "Third-party open-source software modules integrated under public open-source licenses."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Copyright Act, 1957",
      overview: "Consultancy Agreements are legally enforceable in Indian civil courts under Section 10 of the Indian Contract Act. IP assignment clauses comply with Section 19 of the Copyright Act, 1957, requiring explicit written execution to vest copyright ownership in the client company.",
      remedies: [
        "Specific Performance of IP Assignment: Court decree compelling execution of copyright assignment deeds.",
        "Injunction against IP Misuse: Emergency injunction blocking consultant from using client code for rival projects.",
        "Recovery of Damages: Financial recovery for project delays or data breach caused by gross negligence."
      ]
    },
    realWorldExamples: [
      {
        title: "EdTech Startup Outsourcing App Development",
        scenario: "An EdTech startup engaged a freelance React developer. The Consultancy Agreement's IP assignment clause ensured the startup owned 100% of the mobile app repository."
      },
      {
        title: "D2C Brand Fractional CMO Retainer",
        scenario: "A D2C startup engaged a marketing agency under a monthly retainership with clear SOW milestones, permitting 14-day notice exit."
      }
    ],
    whoNeedsIt: [
      "Startups hiring freelance software engineers, designers, or growth specialists.",
      "Companies outsourcing specialized projects to external agencies.",
      "Businesses engaging part-time advisory consultants or fractional executives."
    ],
    docsRequired: [
      "Consultant Identity & GST / PAN Proof.",
      "Detailed Statement of Work (SOW) & Milestone Table.",
      "List of Consultant Background IP / Excluded Tools."
    ],
    comparison: {
      title: "Consultancy Agreement vs Employment Contract",
      versusName: "Employment Contract",
      table: [
        { aspect: "Taxation (TDS)", activeDoc: "10% TDS deducted under Income Tax Act Section 194J.", versusDoc: "Salary slab TDS deducted under Income Tax Act Section 192." },
        { aspect: "Labor Law & Benefits", activeDoc: "No Provident Fund (PF), Gratuity, ESI, or paid leave obligations.", versusDoc: "Mandatory statutory PF, ESI, Gratuity, and leave benefits apply." },
        { aspect: "IP Ownership", activeDoc: "Requires explicit written IP assignment clause under Copyright Act Section 19.", versusDoc: "Belongs automatically to employer under Work-for-Hire doctrine." }
      ]
    },
    procedure: [
      "Step 1: Scope & Milestone Definition: Draft a detailed Statement of Work (SOW) specifying deliverables.",
      "Step 2: Generate Customized Contract: Select Consultancy Agreement on Founding Legals and input terms.",
      "Step 3: Review IP & Tax Clauses: Verify 10% TDS Section 194J and Copyright Act Section 19 IP transfer clauses.",
      "Step 4: Execution & Stamping: Sign digitally via Aadhaar eSign or wet-sign on ₹100–₹200 non-judicial stamp paper."
    ],
    costTable: [
      { service: "Automated Instant Generation", desc: "Standard partner-vetted Consultancy Agreement template.", cost: "₹50" },
      { service: "Custom Retainership Drafting", desc: "Customized multi-party agreement with complex SLA & SOW terms.", cost: "₹4,999 – ₹8,999" }
    ],
    termination: {
      reasons: [
        "Termination for Convenience: Either party provides 7–14 days prior written notice.",
        "Termination for Cause: Immediate termination for material breach, IP theft, or milestone failure."
      ],
      alternatives: [
        "SOW Amendment: Modify timelines or deliverable specifications via formal addendum."
      ]
    },
    template: `CONSULTANCY AGREEMENT

This Consultancy Agreement is executed on [Date] by and between:
1. [Company Name], having its office at [Address] ("Client"); AND
2. [Consultant / Freelancer Name], residing at [Address] ("Consultant").

1. SCOPE OF SERVICES & SOW
Consultant agrees to provide the deliverables specified in Schedule A (Statement of Work).

2. CONSIDERATION & TAXATION
Client shall pay Consultant ₹[Amount] per milestone/month, subject to 10% TDS under Section 194J of the Income Tax Act.

3. ABSOLUTE IP ASSIGNMENT
Consultant hereby irrevocably assigns all copyright, patent, trademark, and source code rights in work created under this Agreement to the Client under Section 19 of the Copyright Act, 1957.

4. INDEPENDENT CONTRACTOR STATUS
Consultant is an independent contractor and not an employee. No PF, ESI, or employee benefits apply.

IN WITNESS WHEREOF, the parties sign below:

For Client: __________________________          Consultant: __________________________`,
    faqs: [
      { q: "What is a Consultancy Agreement?", a: "A Consultancy Agreement is a legal contract defining the terms under which an independent contractor or consultant provides specialized services to a client company." },
      { q: "Do freelancers own the code they create for a client in India?", a: "Yes, under Section 17 of the Copyright Act 1957, independent contractors own the copyright by default unless explicitly transferred in writing via an IP assignment clause." },
      { q: "What is Section 194J TDS in a Consultancy Agreement?", a: "Section 194J of the Income Tax Act requires clients to deduct 10% TDS on professional and technical fees paid to resident consultants exceeding ₹30,000 annually." },
      { q: "Can a consultant claim employee benefits like PF or Gratuity?", a: "No. A properly drafted Consultancy Agreement explicitly affirms independent contractor status, legally barring claims for employee benefits like Provident Fund, Gratuity, or ESI." },
      { q: "What is a Statement of Work (SOW)?", a: "An SOW is an annexure to the agreement detailing project scope, specific deliverables, technical acceptance criteria, timelines, and milestone payment amounts." },
      { q: "Is a Consultancy Agreement legally binding in India?", a: "Yes, once signed and executed on appropriate non-judicial stamp paper, it is legally binding under the Indian Contract Act, 1872." },
      { q: "What notice period is standard for ending a Consultancy Agreement?", a: "Most consultancy agreements permit termination for convenience with a short 7 to 14 days written notice." },
      { q: "Can a client include non-compete clauses in a Consultancy Agreement?", a: "In-term non-competes restricting consultants from working for direct rivals during the active project are enforceable, but post-term non-competes are void under Section 27 of the Contract Act." },
      { q: "What stamp duty is required for a Consultancy Agreement?", a: "It is typically executed on non-judicial stamp paper of ₹100 to ₹200 depending on state jurisdiction." },
      { q: "What is the difference between an employee and a consultant?", a: "Employees work under company direction, receive fixed monthly salary subject to Section 192 TDS, and receive PF/ESI benefits. Consultants work independently, deliver specified milestones, and receive fees subject to Section 194J TDS." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper under Karnataka Stamp Act.",
      maharashtra: "₹500 non-judicial stamp paper under Maharashtra Stamp Act Article 5(h).",
      delhi: "₹100 non-judicial stamp paper under Delhi Stamp Rules.",
      general: "Executed on state non-judicial stamp paper of ₹100–₹200 denomination."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "offer-letter",
    name: "Offer Letter",
    category: "HR & Employment",
    tagline: "Initiate hiring talks with a clean, introductory Offer Letter summarizing compensation.",
    overview: "An Offer Letter is a preliminary document sent to selected candidates outlining basic salary parameters, target start date, and probation terms.",
    whyImportant: [
      "Signals Intent: Confirms the candidate selection formally.",
      "Initial CTC Agreement: Standardizes basic pay metrics."
    ],
    whenRequired: [
      "Immediate hiring selection: Prior to drafting a full Employment Agreement."
    ],
    components: [
      { term: "Designation", description: "Proposed title (e.g. Associate Developer)." },
      { term: "Probation Period", description: "Initial trial phase details (e.g. 3 or 6 months)." }
    ],
    whoNeedsIt: [
      "HR teams seeking formal candidate confirmations."
    ],
    docsRequired: [
      "Candidate details.",
      "Proposed CTC structure."
    ],
    comparison: {
      title: "Offer Letter vs Employment Agreement",
      versusName: "Employment Agreement",
      table: [
        { aspect: "Detail", activeDoc: "Brief summary of key elements.", versusDoc: "Exhaustive details including dispute resolution, IP ownership, and non-solicitation." }
      ]
    },
    procedure: [
      "Step 1: Send candidate signed offer letter.",
      "Step 2: Candidate signs acceptance.",
      "Step 3: Draft and execute employment agreement on joining date."
    ],
    costTable: [
      { service: "Template Setup", desc: "Drafting a reusable company offer template.", cost: "₹1,500 – ₹2,500" }
    ],
    termination: {
      reasons: [
        "Withdrawal: Offer can be withdrawn if background checks fail."
      ],
      alternatives: [
        "Revised Offer: Issue amended offer if CTC changes."
      ]
    },
    template: `OFFER LETTER\n\nDear [Name],\n\nWe are pleased to offer you the position of [Title] at [Company] with an annual CTC of ₹[Amount] starting on [Date].`,
    types: [
      { name: "Full-Time Employment Offer Letter", definition: "Formal offer specifying annual CTC breakdown, probation duration, and joining date.", useCase: "Standard hiring for permanent corporate positions." },
      { name: "Fixed-Term Contractual Offer Letter", definition: "Offer specifying project-based tenure and contract renewal parameters.", useCase: "Contractual roles or maternity/sabbatical cover staffing." },
      { name: "Executive & Director Offer Letter", definition: "High-level offer detailing joining bonuses, ESOP grants, and severance terms.", useCase: "Hiring CXOs, Vice Presidents, or Department Heads." }
    ],
    exclusions: [
      "Definitive legal employment covenants (which are detailed in the subsequent Employment Agreement).",
      "Guaranteed bonuses dependent on annual company performance evaluations.",
      "Unilateral verbal amendments made by hiring managers prior to written acceptance."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872",
      overview: "An Offer Letter represents a conditional offer to contract. Upon signed candidate acceptance, it forms a legally binding agreement under Indian contract law, subject to background check verification and execution of the final Employment Agreement.",
      remedies: [
        "Withdrawal for Failed Background Check: Right to revoke offer if candidate misrepresents credentials.",
        "Recovery of Joining Bonus: Enforcing refund of sign-on bonus if candidate fails to join."
      ]
    },
    realWorldExamples: [
      { title: "SaaS Senior Developer Hiring", scenario: "A tech startup issued a formal Offer Letter specifying ₹24 LPA CTC and 1,000 ESOPs, subject to 30-day joining acceptance." },
      { title: "Executive CXO Offer", scenario: "An e-commerce firm issued a VP Offer Letter including performance bonuses and non-compete prerequisites." }
    ],
    faqs: [
      { q: "Is an offer letter a binding contract?", a: "Generally, it is an agreement to agree. Most companies include a clause stating the offer is subject to executing a formal employment contract." }
    ],
    stampDuty: {
      karnataka: "Not required; printed on company letterhead.",
      maharashtra: "Not required.",
      delhi: "Not required.",
      general: "Typically printed on corporate letterhead with no stamp duty required."
    },
    complexity: "Low",
    requiredForFundraising: false
  },
  {
    id: "internship-offer-letter",
    name: "Internship Offer Letter",
    category: "HR & Employment",
    tagline: "Define student internship timelines, stipends, and intellectual property boundaries.",
    overview: "An Internship Offer Letter defines the relationship between the startup and a temporary student intern, ensuring they protect proprietary codebase assets during their tenure.",
    whyImportant: [
      "IP Protection: Ensures work created by the intern belongs to the startup.",
      "Clear Stipend Terms: Outlines expectations and limits claims of permanent employment."
    ],
    whenRequired: [
      "Hiring college students or freshers for short-term training."
    ],
    components: [
      { term: "Stipend", description: "Fixed monthly allowance paid (e.g. ₹10,000/month)." },
      { term: "Duration", description: "Typically ranges from 2 to 6 months." }
    ],
    whoNeedsIt: [
      "HR teams recruiting college interns."
    ],
    docsRequired: [
      "College NOC letter (optional).",
      "Intern Identity documents."
    ],
    comparison: {
      title: "Internship Offer vs Employment Offer",
      versusName: "Employment Offer",
      table: [
        { aspect: "PF/ESI Benefits", activeDoc: "Not applicable to student interns.", versusDoc: "Mandatory if thresholds are crossed." }
      ]
    },
    procedure: [
      "Step 1: Send internship offer defining term.",
      "Step 2: Sign NDA alongside letter on joining date."
    ],
    costTable: [
      { service: "Template Setup", desc: "Internship template including IP assignments.", cost: "₹1,000 – ₹2,000" }
    ],
    termination: {
      reasons: [
        "Completion: Naturally ends at term expiration.",
        "Performance: Can terminate with 24-48 hours notice."
      ],
      alternatives: [
        "Conversion: Issue a full-time offer letter."
      ]
    },
    template: `INTERNSHIP OFFER LETTER\n\nDear [Name],\n\nWe offer you an internship as [Role] from [Start] to [End] at a monthly stipend of ₹[Stipend]. All IP created belongs to the Company.`,
    types: [
      { name: "Stipend-Based Student Internship Offer", definition: "Short-term offer providing fixed monthly stipend and mentorship for college students.", useCase: "Summer/Winter internship programs for university undergraduates." },
      { name: "Pre-Placement Offer (PPO) Internship", definition: "Internship program with clear performance evaluation triggers for full-time employment conversion.", useCase: "Final-year engineering or management student hires." },
      { name: "Remote / Virtual Internship Offer", definition: "Offer letter for remote interns detailing digital deliverable expectations and software access protocols.", useCase: "Outsourced content, design, or research internships." }
    ],
    exclusions: [
      "Provident Fund (PF), ESI, or statutory employee benefits.",
      "Permanent employment guarantees or automatic tenure extension.",
      "Ownership of codebase or IP created during the internship."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Copyright Act, 1957",
      overview: "An Internship Offer Letter defines a temporary training relationship under Indian law. It ensures student interns are legally classified as trainees, while transferring 100% of created intellectual property to the startup.",
      remedies: [
        "Injunction against IP Leak: Restraining intern from sharing proprietary source code.",
        "Termination for Cause: Immediate discharge for failing to adhere to corporate data security guidelines."
      ]
    },
    realWorldExamples: [
      { title: "AI Research Internship Program", scenario: "An AI startup hired 5 university interns under Internship Offer Letters, ensuring all machine learning models developed were legally owned by the company." },
      { title: "Marketing Trainee PPO", scenario: "A D2C brand onboarded a digital marketing intern who converted to a full-time employee following a successful 3-month PPO evaluation." }
    ],
    faqs: [
      { q: "Are interns entitled to gratuity or PF?", a: "No, student interns undergoing training are not classified as employees and are not entitled to statutory benefits." }
    ],
    stampDuty: {
      karnataka: "Not required; printed on company letterhead.",
      maharashtra: "Not required.",
      delhi: "Not required.",
      general: "Printed on company letterhead and signed."
    },
    complexity: "Low",
    requiredForFundraising: false
  },
  {
    id: "non-compete-agreement",
    name: "Non-Compete Agreement",
    category: "HR & Employment",
    tagline: "Restrict critical personnel from starting or joining direct competitors.",
    overview: "A Non-Compete Agreement protects corporate trade secrets and market positions by restricting employees or founders from working with competitors.",
    whyImportant: [
      "Protects Secrets: Prevents core developers from leaking architectures to direct competitors.",
      "Protects Client Base: Inhibits sales reps from poaching key customer contacts."
    ],
    whenRequired: [
      "Hiring executive staff.",
      "Co-founder alignments during business formation."
    ],
    components: [
      { term: "Restricted Territory", description: "Geographical boundary of restriction." },
      { term: "Restricted Period", description: "Duration of the non-compete restriction." }
    ],
    whoNeedsIt: [
      "Companies hiring senior managers, sales executives, or research heads."
    ],
    docsRequired: [
      "Main employment or acquisition agreement."
    ],
    comparison: {
      title: "Non-Compete vs NDA",
      versusName: "Non-Disclosure Agreement (NDA)",
      table: [
        { aspect: "Scope", activeDoc: "Prevents competing employment/business activity.", versusDoc: "Only prevents leaking confidential information." }
      ]
    },
    procedure: [
      "Step 1: Define specific competitors and activities.",
      "Step 2: Vetting by legal counsel to verify enforceability.",
      "Step 3: Execute alongside main employment contract."
    ],
    costTable: [
      { service: "Drafting", desc: "Enforceable non-compete clauses tailored to Indian context.", cost: "₹3,000 – ₹5,000" }
    ],
    termination: {
      reasons: [
        "End of term: Restriction expires.",
        "Mutual Release: Company releases staff from covenant."
      ],
      alternatives: [
        "Garden Leave: Paying salary during notice period to keep them out of market."
      ]
    },
    template: `NON-COMPETE AGREEMENT\n\nEmployee agrees not to directly or indirectly engage in any competing business within [Territory] during the term of employment and for [Period] post-termination.`,
    types: [
      { name: "In-Term Employment Non-Compete", definition: "Covenant restricting employees from working for competitors or operating rival businesses during active employment.", useCase: "Standard employment contracts for core staff and executives." },
      { name: "Shareholder & Founder Lock-In Non-Compete", definition: "Covenant restricting co-founders or selling shareholders from launching competing ventures during and after equity exit.", useCase: "M&A acquisitions, founders' agreements, and investor SHAs." },
      { name: "Vendor & Business Partner Non-Compete", definition: "Restricted covenant preventing commercial partners from copying proprietary business models or targeting identical niche clients.", useCase: "Joint ventures, franchise setups, and distribution partnerships." }
    ],
    exclusions: [
      "Post-employment trade restraints that violate Section 27 of the Indian Contract Act, 1872.",
      "General industry skills, personal talent, and technical domain expertise acquired during career.",
      "Passive investments in publicly traded companies below a 2% shareholding threshold."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 (Section 27)",
      overview: "Under Indian law (Niranjan Shankar Golikari v. Century Spinning), non-compete clauses active DURING employment/partnership are 100% valid. Post-employment non-competes are void under Section 27, BUT post-employment Non-Solicitation and Confidentiality covenants ARE fully enforceable.",
      remedies: [
        "Injunction against In-Term Dual Employment: Immediate court order stopping employee from working for competitor during tenure.",
        "Enforcement of Post-Employment Non-Solicitation: Court decree blocking former employee from poaching client database or staff.",
        "Damages for Breach of Trade Secrets: Financial recovery for unauthorized use of proprietary software code or customer lists."
      ]
    },
    realWorldExamples: [
      { title: "EdTech Executive In-Term Non-Compete", scenario: "An EdTech VP was restrained by court injunction from simultaneously consulting for a rival EdTech startup during active tenure." },
      { title: "SaaS Founder M&A Exit Non-Compete", scenario: "Upon selling their company for ₹25 Crore, founders signed a 3-year non-compete supported by Goodwill sale protection under Section 27 exception." }
    ],
    faqs: [
      { q: "Is a post-employment non-compete enforceable in India?", a: "Generally no. Section 27 of the Indian Contract Act voids agreements in restraint of trade. Only non-competes active *during* employment are easily enforceable." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹100 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Executed on appropriate stamp paper if signed standalone."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "service-agreement",
    name: "Service Agreement",
    category: "Commercial & Sales",
    tagline: "Set payment terms, deliverables, and liability limits with customers.",
    overview: "A Service Agreement defines the commercial relationship between a service provider and a client. It sets expectations regarding payment, timeline, and deliverables.",
    whyImportant: [
      "Payment Security: Outlines billing cycles and consequences of default.",
      "Limits Liability: Restricts damage claims to a percentage of fees paid."
    ],
    whenRequired: [
      "Onboarding new corporate clients or starting consulting projects."
    ],
    components: [
      { term: "Deliverables", description: "The specific services and products to be provided." },
      { term: "Limitation of Liability", description: "Capping legal damages to avoid company bankruptcy." }
    ],
    whoNeedsIt: [
      "Agencies, SaaS providers, and consulting firms."
    ],
    docsRequired: [
      "Client commercial registration details.",
      "Pricing metrics."
    ],
    comparison: {
      title: "Service Agreement vs MSA",
      versusName: "Master Service Agreement (MSA)",
      table: [
        { aspect: "Flexibility", activeDoc: "Applies to a single project with fixed terms.", versusDoc: "Applies to multiple recurring projects via Statements of Work." }
      ]
    },
    procedure: [
      "Step 1: Draft specific deliverables.",
      "Step 2: Negotiate liability and indemnity clauses.",
      "Step 3: Execute on stamp paper before work starts."
    ],
    costTable: [
      { service: "Drafting", desc: "Custom client service contract.", cost: "₹4,000 – ₹7,500" }
    ],
    termination: {
      reasons: [
        "Material Breach: Failure to pay or deliver.",
        "Notice: Termination by giving 30 days notice."
      ],
      alternatives: [
        "Suspension: Pause services if payments are delayed."
      ]
    },
    template: `SERVICE AGREEMENT\n\nThis Agreement is between [Provider] and [Client]. Provider shall deliver services in Schedule A. Client shall pay ₹[Amount] within 15 days of invoice.`,
    types: [
      { name: "Fixed-Fee Service Agreement", definition: "Commercial contract defining fixed-cost service deliverables and milestone schedules.", useCase: "Turnkey software development or industrial design projects." },
      { name: "Time & Materials (T&M) Service Agreement", definition: "Agreement where client pays based on actual hourly/daily labor rates and material expenses incurred.", useCase: "Agile software development and consulting." },
      { name: "Managed Service Retainership", definition: "Recurring monthly agreement for ongoing operational support and maintenance.", useCase: "Cloud infrastructure management, SEO retainers, or legal support services." }
    ],
    exclusions: [
      "Scope additions or feature requests not detailed in the original Service Schedule.",
      "Third-party hosting failures or API outages beyond the service provider's control.",
      "Indirect, punitive, or consequential damages."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872",
      overview: "Service Agreements are legally binding civil contracts under Section 10 of the Indian Contract Act, establishing enforceable obligations, billing terms, and damage limits.",
      remedies: [
        "Injunction against Non-Payment: Summary suit to recover unpaid fees.",
        "Specific Performance: Compelling delivery of completed milestone assets.",
        "Damages for Service Breach: Recovery of direct losses resulting from failure to deliver."
      ]
    },
    realWorldExamples: [
      { title: "Cloud Infrastructure Managed Retainer", scenario: "A DevOps agency executed a Service Agreement with a retail app, providing 24/7 cloud server maintenance with 99.9% uptime SLAs." },
      { title: "Software Customization Build", scenario: "An ERP consultancy delivered a 6-month software customization project under a milestone-based Service Agreement." }
    ],
    faqs: [
      { q: "Why is a Limitation of Liability clause important?", a: "It protects your company from paying massive consequential damages if a service failure causes loss of revenue for your client." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Standard agreement rates based on execution state."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "master-service-agreement",
    name: "Master Service Agreement (MSA)",
    category: "Commercial & Sales",
    tagline: "Simplify recurring client engagements using a master contract with Statements of Work (SOWs).",
    overview: "A Master Service Agreement (MSA) establishes the legal framework for all future transactions between a client and a service provider, allowing rapid scheduling of new projects via Statements of Work (SOWs).",
    whyImportant: [
      "Speeds Procurement: Negotiate core terms (IP, liability) once; spin up projects in days.",
      "Consistency: Ensures identical legal protections across all client accounts."
    ],
    whenRequired: [
      "Entering long-term commercial partnerships with corporate clients."
    ],
    components: [
      { term: "MSA Overrides", description: "States that MSA terms govern all SOWs unless explicitly modified." },
      { term: "IP Rights Allocation", description: "Delineates client deliverables from provider background IP." }
    ],
    whoNeedsIt: [
      "IT consultancies, SaaS enterprise sales, and marketing agencies."
    ],
    docsRequired: [
      "Company registration.",
      "Draft SOW template."
    ],
    comparison: {
      title: "MSA vs SOW",
      versusName: "Statement of Work (SOW)",
      table: [
        { aspect: "Content", activeDoc: "Contains general legal terms (liability, indemnity, law).", versusDoc: "Contains project-specific terms (deadlines, pricing, names)." }
      ]
    },
    procedure: [
      "Step 1: Negotiate MSA core terms.",
      "Step 2: Sign and stamp the MSA.",
      "Step 3: Attach SOWs for each new project phase."
    ],
    costTable: [
      { service: "Drafting", desc: "Comprehensive framework MSA.", cost: "₹15,000 – ₹25,005" }
    ],
    termination: {
      reasons: [
        "Convenience: Usually requires 60-90 days notice.",
        "SOW failure: Specific SOWs can terminate without ending the MSA."
      ],
      alternatives: [
        "Waiver: Waive specific obligations for individual projects."
      ]
    },
    template: `MASTER SERVICE AGREEMENT\n\nThis MSA governs all services provided by [Provider] to [Client] under subsequent Statements of Work. All IP in deliverables transfers to Client upon full payment.`,
    types: [
      { name: "Enterprise IT Services MSA", definition: "Master framework agreement governing software development, IT maintenance, and cloud management across multiple SOWs.", useCase: "IT consultancies and enterprise software vendors." },
      { name: "SaaS Enterprise Master Framework", definition: "Agreement establishing subscription pricing, data security (GDPR/DPDP), and SLA parameters for enterprise software deployments.", useCase: "B2B SaaS companies selling to corporate enterprises." },
      { name: "Marketing & Creative Agency MSA", definition: "Overarching contract governing recurring brand campaigns, digital marketing, and media buying via task orders.", useCase: "Digital marketing agencies and media firms." }
    ],
    exclusions: [
      "Project-specific timelines, pricing, and deliverable names (which belong in individual Statements of Work).",
      "Third-party software licenses not directly owned or provided by the service provider.",
      "Consequential loss, indirect damages, or lost business revenue exceeding the liability cap."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Information Technology Act, 2000",
      overview: "A Master Service Agreement (MSA) is a legally binding contract under Indian law. It sets master legal terms (Indemnity, IP, Liability, Governing Law) that automatically apply to all execution SOWs executed under it.",
      remedies: [
        "Recovery of Outstanding Invoices: Summary suit under CPC Order 37 for unpaid SOW invoices.",
        "Specific Performance of IP Transfer: Court order compelling transfer of deliverable copyright upon payment.",
        "Enforcement of Liability Cap: Legal capping of damages to pre-agreed contract limits (e.g. 12 months fees)."
      ]
    },
    realWorldExamples: [
      { title: "Global Tech Enterprise MSA", scenario: "An Indian IT services firm signed an MSA with a US healthcare provider, executing 12 separate SOWs over 3 years under unified legal terms." },
      { title: "Enterprise SaaS Rollout", scenario: "A B2B SaaS startup signed a master framework agreement with an Indian bank, establishing data protection protocols across 5 regional deployments." }
    ],
    faqs: [
      { q: "Does a Statement of Work need separate stamp duty?", a: "Generally no, as long as it references a validly stamped MSA that covers the relationship." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹200 non-judicial stamp paper.",
      general: "Standard corporate agreement rates."
    },
    complexity: "High",
    requiredForFundraising: false
  },
  {
    id: "vendor-agreement",
    name: "Vendor Agreement",
    category: "Commercial & Sales",
    tagline: "Lock in wholesale pricing, establish Service Level Agreements (SLAs), and protect supply chains with a legally binding Vendor Agreement.",
    overview: "A Vendor Agreement (also known as a Supplier or Vendor Contract) is a legally binding commercial agreement under Section 10 of the Indian Contract Act, 1872. It defines the operational and legal terms between a buyer business and a vendor providing goods or services. It specifies payment terms (Net 30/60), GST compliance, quality standards, Delivery SLAs, intellectual property indemnities, and dispute resolution mechanisms.",
    whyImportant: [
      "Secures Commercial Pricing & Net Terms: Locks in agreed unit pricing, bulk discounts, and payment terms (e.g. Net 30/60 days), protecting against unexpected price spikes.",
      "Establishes Quality SLAs & Liquidated Damages: Defines exact delivery timelines and quality benchmarks, prescribing pre-agreed financial penalties for late or defective deliveries.",
      "Ensures GST & Statutory Compliance: Mandates GST tax invoice issuance and timely GST filing (GSTR-1) so the buyer can claim Input Tax Credit (ITC).",
      "Comprehensive Indemnity Protection: Shields the buyer from third-party IP infringement liabilities or product liability claims caused by vendor defects.",
      "Clear Risk of Loss & Property Transfer: Outlines Incoterms (e.g. FOB, CIF) establishing when risk of loss transfers from vendor to buyer."
    ],
    whenRequired: [
      "Onboarding Manufacturing & Raw Material Suppliers: Contracting component manufacturers or packaging suppliers.",
      "Engaging Logistics & Distribution Partners: Hiring third-party logistics (3PL) providers or warehousing vendors.",
      "Retaining IT Infrastructure & SaaS Vendors: Contracting cloud hosting, cybersecurity, or enterprise software vendors."
    ],
    types: [
      {
        name: "Goods Supply Vendor Agreement",
        definition: "Agreement governing procurement of physical goods, raw materials, or manufactured inventory featuring quality inspection clauses.",
        useCase: "Procuring raw materials for manufacturing or inventory for e-commerce stores."
      },
      {
        name: "Service Level Vendor Agreement (SLA)",
        definition: "Contract defining recurring service standards, uptime commitments, and response times.",
        useCase: "Hiring cloud hosting vendors, facilities management, or IT maintenance providers."
      },
      {
        name: "Master Vendor Framework Agreement",
        definition: "Overarching contract setting legal parameters for multiple recurring purchase orders (POs) over time.",
        useCase: "Large enterprise buyers placing monthly purchase orders across multiple categories."
      }
    ],
    components: [
      { term: "Scope of Goods/Services & Specs", description: "Detailed annexure specifying exact technical product specifications or service parameters." },
      { term: "Pricing, Invoicing & Net Terms", description: "Fixed pricing schedule, currency terms, and credit payment terms (e.g., Net 30 days from invoice date)." },
      { term: "GST & Input Tax Credit (ITC) Compliance", description: "Covenant obligating vendor to issue valid GST invoices and upload GSTR-1 to enable buyer ITC claims." },
      { term: "Delivery SLAs & Liquidated Damages", description: "Timelines, inspection protocols, and pre-agreed monetary penalties for delayed or non-conforming shipments." },
      { term: "Warranties & Quality Assurance", description: "Express warranties guaranteeing goods are free from defects and fit for intended purpose." },
      { term: "IP & Third-Party Indemnity", description: "Vendor indemnifies buyer against patent, trademark, or copyright infringement claims arising from vendor products." },
      { term: "Termination for Convenience & Cause", description: "Exit provisions with 30 days notice or immediate termination for persistent quality failure." }
    ],
    exclusions: [
      "Delays caused by verified Force Majeure events (natural disasters, war, government trade bans).",
      "Defects caused by unauthorized buyer modifications or improper product storage post-delivery.",
      "Fluctuations in raw material costs exceeding agreed indexing thresholds unless renegotiated."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Sale of Goods Act, 1930",
      overview: "Vendor Agreements are fully enforceable in Indian courts under the Indian Contract Act and Sale of Goods Act. In case of commercial disputes or unpaid invoices, parties can seek relief under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 for delayed payments.",
      remedies: [
        "Recovery of Advance & Damages: Summary suit under CPC Order 37 to recover advances paid for defective goods.",
        "MSME Samadhaan Filing: Claiming 3x bank rate compound interest for delayed vendor invoice payments under MSMED Act.",
        "Injunction against Counterfeit Delivery: Court order halting vendor supply of non-compliant or counterfeit items."
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Logistics Vendor SLA",
        scenario: "An e-commerce brand signed a Vendor Agreement with a 3PL partner. The SLA penalty clause refunded logistics fees when delivery SLAs missed 95% target."
      },
      {
        title: "D2C Packaging Vendor GST Compliance",
        scenario: "A cosmetics startup enforced a GST covenant in their Vendor Agreement, ensuring ₹12 Lakhs Input Tax Credit was successfully claimed."
      }
    ],
    whoNeedsIt: [
      "Retail, e-commerce, and manufacturing businesses procuring physical inventory.",
      "Tech companies engaging cloud infrastructure or IT support vendors.",
      "Corporate enterprises onboarding facilities management, catering, or logistics partners."
    ],
    docsRequired: [
      "Vendor GSTIN Certificate & PAN Card.",
      "Vendor Bank Account details & Canceled Cheque.",
      "Product / Service Quality Specification Annexure."
    ],
    comparison: {
      title: "Vendor Agreement vs Service Level Agreement (SLA)",
      versusName: "Service Level Agreement (SLA)",
      table: [
        { aspect: "Primary Scope", activeDoc: "Covers entire commercial relationship including pricing, payment terms, and risk allocation.", versusDoc: "Focuses specifically on technical operational metrics, uptime, and performance benchmarks." },
        { aspect: "Applicability", activeDoc: "Applies to procurement of both physical goods and commercial services.", versusDoc: "Primarily applies to IT, cloud hosting, and technical service delivery." }
      ]
    },
    procedure: [
      "Step 1: Commercial Negotiation: Finalize unit pricing, minimum order quantities (MOQs), and Net payment terms.",
      "Step 2: Generate Customized Contract: Input deal parameters on Founding Legals to create a partner-vetted agreement.",
      "Step 3: Quality & Indemnity Review: Ensure robust warranty, IP indemnity, and GST compliance clauses.",
      "Step 4: Execution & Stamping: Sign digitally via Aadhaar eSign or wet-sign on ₹100–₹500 non-judicial stamp paper."
    ],
    costTable: [
      { service: "Automated Instant Generation", desc: "Standard partner-vetted Vendor Agreement template.", cost: "₹50" },
      { service: "Custom Enterprise Vendor SLA", desc: "Customized agreement with complex SLAs, GST terms, and penalty structures.", cost: "₹5,999 – ₹12,999" }
    ],
    termination: {
      reasons: [
        "Termination for Convenience: Either party provides 30 days prior written notice.",
        "Termination for Material Breach: Immediate exit for failure to meet quality SLAs or non-payment."
      ],
      alternatives: [
        "SLA Penalty Offset: Deduct liquidated damage penalties from upcoming vendor invoices."
      ]
    },
    template: `VENDOR AGREEMENT

This Vendor Agreement is executed on [Date] by and between:
1. [Buyer Company Name], having its office at [Address] ("Buyer"); AND
2. [Vendor Company Name], having its office at [Address] ("Vendor").

1. SCOPE OF SUPPLY
Vendor agrees to supply the goods/services specified in Schedule A in accordance with the quality specifications and delivery timelines set forth therein.

2. PRICING & PAYMENT TERMS
Buyer shall pay Vendor ₹[Price] per unit within [30/60] days of receiving a valid GST invoice ("Net Terms").

3. QUALITY WARRANTY & SLA PENALTY
Vendor warrants that all goods delivered shall be free from defects. If goods fail inspection, Buyer may reject the shipment and vendor shall pay liquidated damages of [Percentage]% per week of delay.

4. GST COMPLIANCE & INDEMNITY
Vendor covenants to file GSTR-1 returns on time to enable Buyer to claim Input Tax Credit (ITC). Vendor indemnifies Buyer against any loss of ITC due to vendor default.

IN WITNESS WHEREOF, the parties sign below:

For Buyer: __________________________           For Vendor: __________________________`,
    faqs: [
      { q: "What is a Vendor Agreement?", a: "A Vendor Agreement is a commercial contract between a business and a supplier outlining terms for purchasing goods or services, including pricing, delivery schedules, quality benchmarks, and payment terms." },
      { q: "Why is a Vendor Agreement important for businesses?", a: "It protects businesses from unexpected price increases, secures Input Tax Credit (ITC) via GST compliance clauses, establishes penalties for late delivery, and limits liability." },
      { q: "What is Net 30 or Net 60 in a Vendor Agreement?", a: "Net 30 or Net 60 refers to the payment term allowing the buyer 30 or 60 days from the invoice date to pay the vendor." },
      { q: "How does a Vendor Agreement ensure GST compliance in India?", a: "It includes clauses requiring the vendor to issue valid GST invoices and upload GSTR-1 returns promptly, ensuring the buyer can claim Input Tax Credit without loss." },
      { q: "What is an indemnity clause in a Vendor Agreement?", a: "An indemnity clause obligates the vendor to compensate the buyer if third-party legal claims, patent infringements, or product defects cause financial loss to the buyer." },
      { q: "Can a business terminate a Vendor Agreement for poor quality?", a: "Yes. Vendor Agreements contain termination for cause provisions allowing immediate exit if the vendor fails quality inspections or misses SLA targets." },
      { q: "What stamp duty is required for a Vendor Agreement in India?", a: "Vendor Agreements are executed on non-judicial stamp paper of ₹200 in Karnataka, ₹500 in Maharashtra, and ₹100 in Delhi NCR." },
      { q: "What is the difference between a Vendor Agreement and a Purchase Order (PO)?", a: "A Vendor Agreement sets the long-term legal framework and general terms, while a Purchase Order is a specific transactional request detailing quantities and delivery dates for an individual shipment." },
      { q: "Can MSME vendors claim protection under a Vendor Agreement?", a: "Yes. MSME registered vendors can enforce 45-day payment timelines under MSMED Act Section 15, carrying compound interest penalties for delayed buyer payments." },
      { q: "What are liquidated damages in a Vendor Agreement?", a: "Liquidated damages are pre-agreed monetary penalties (e.g. 1% per week of delay) deducted from payments if the vendor fails to meet agreed delivery deadlines." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper under Karnataka Stamp Act.",
      maharashtra: "₹500 non-judicial stamp paper under Maharashtra Stamp Act Article 5(h).",
      delhi: "₹100 non-judicial stamp paper under Delhi Stamp Rules.",
      general: "Executed on state non-judicial stamp paper of ₹100–₹500 denomination."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "supply-agreement",
    name: "Supply Agreement",
    category: "Commercial & Sales",
    tagline: "Ensure supply security and lock in minimum order quantities with raw material suppliers.",
    overview: "A Supply Agreement is used for long-term procurement of physical goods, establishing delivery frequencies, pricing indexing, and MOQ parameters.",
    whyImportant: [
      "Guarantees Supply: Protects against material shortages.",
      "Price Stability: Insulates the startup from market fluctuations."
    ],
    whenRequired: [
      "Securing raw material batches for production."
    ],
    components: [
      { term: "Minimum Order Quantity", description: "The lowest volume of goods the buyer must purchase monthly." },
      { term: "Defect Return Policy", description: "Procedures for returning substandard material." }
    ],
    whoNeedsIt: [
      "Hardware, D2C, and manufacturing startups."
    ],
    docsRequired: [
      "Production forecasts.",
      "Supplier licensing certificates."
    ],
    comparison: {
      title: "Supply Agreement vs Purchase Order",
      versusName: "Purchase Order (PO)",
      table: [
        { aspect: "Horizon", activeDoc: "Long-term contract governing multiple shipments.", versusDoc: "One-off request for a single shipment." }
      ]
    },
    procedure: [
      "Step 1: Negotiate MOQs and prices.",
      "Step 2: Draft terms including force majeure protection.",
      "Step 3: Execute contract."
    ],
    costTable: [
      { service: "Drafting", desc: "Detailed wholesale supply contract.", cost: "₹5,000 – ₹8,000" }
    ],
    termination: {
      reasons: [
        "Inability to deliver: Constant delays trigger exit clauses."
      ],
      alternatives: [
        "Alternative sourcing: Permission to source from third parties during shortages."
      ]
    },
    template: `SUPPLY AGREEMENT\n\nSupplier agrees to sell and Buyer agrees to purchase [Product] subject to a Minimum Order Quantity of [Volume] per month at ₹[Price] per unit.`,
    types: [
      { name: "Exclusive Manufacturing Supply Agreement", definition: "Long-term contract granting buyer sole distribution rights for goods produced by manufacturer.", useCase: "D2C brands and contract manufacturing." },
      { name: "Minimum Order Quantity (MOQ) Supply Contract", definition: "Supply contract binding buyer to purchase minimum monthly volume in exchange for volume discounts.", useCase: "FMCG and retail inventory procurement." },
      { name: "Just-In-Time (JIT) Industrial Supply Agreement", definition: "High-frequency supply agreement with strict 24-hour delivery SLAs to minimize warehousing costs.", useCase: "Automotive and electronics assembly plants." }
    ],
    exclusions: [
      "Delays caused by verified global supply chain disruptions or Force Majeure.",
      "Custom product design changes requested without written PO modification.",
      "Losses arising from improper customer storage post-delivery."
    ],
    legalValidity: {
      act: "Sale of Goods Act, 1930 & Indian Contract Act, 1872",
      overview: "Governed under the Sale of Goods Act, establishing clear rules for transfer of title, risk of loss, express warranties, and breach remedies.",
      remedies: [
        "Rejection of Non-Conforming Goods: Right to reject shipments failing quality inspection.",
        "Damages for Non-Delivery: Recovering market price difference for alternative procurement."
      ]
    },
    realWorldExamples: [
      { title: "D2C Cosmetics Contract Manufacturing", scenario: "A skincare brand signed an Exclusive Supply Agreement locking in unit pricing for 50,000 units/month." }
    ],
    faqs: [
      { q: "What is Force Majeure in supply agreements?", a: "A clause that releases parties from liability if natural disasters or wars prevent product manufacturing/delivery." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Stamped as a commercial agreement."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "distribution-agreement",
    name: "Distribution Agreement",
    category: "Commercial & Sales",
    tagline: "Scale your sales channels by appointing authorized regional distributors.",
    overview: "A Distribution Agreement defines terms under which a distributor purchases products from a manufacturer and resells them in specific territories.",
    whyImportant: [
      "Territory Control: Prevents channel conflicts between distributors.",
      "Market Scale: Uses distributor logistics network to scale sales."
    ],
    whenRequired: [
      "Appointing regional sales partners for physical products."
    ],
    components: [
      { term: "Territory Exclusivity", description: "Whether the distributor has sole rights in the region." },
      { term: "Sales Quota", description: "Minimum sales targets to retain distributor rights." }
    ],
    whoNeedsIt: [
      "D2C brands and consumer hardware manufacturers."
    ],
    docsRequired: [
      "Distributor commercial references.",
      "Territory descriptions."
    ],
    comparison: {
      title: "Exclusive vs Non-Exclusive Distribution",
      versusName: "Non-Exclusive Distribution",
      table: [
        { aspect: "Competition", activeDoc: "No other distributor can be appointed in the territory.", versusDoc: "Manufacturer can appoint multiple distributors in the same region." }
      ]
    },
    procedure: [
      "Step 1: Delineate geographical territory.",
      "Step 2: Draft agreement with minimum volume targets.",
      "Step 3: Execute contract."
    ],
    costTable: [
      { service: "Drafting", desc: "Detailed regional distribution contract.", cost: "₹7,500 – ₹15,000" }
    ],
    termination: {
      reasons: [
        "Underperformance: Failure to meet target sales quotas."
      ],
      alternatives: [
        "Convert to Non-Exclusive: Revoke exclusivity instead of terminating."
      ]
    },
    template: `DISTRIBUTION AGREEMENT\n\nManufacturer appoints Distributor as the [Exclusive/Non-Exclusive] distributor of [Products] within the territory of [State/Country].`,
    types: [
      { name: "Exclusive Regional Distribution Agreement", definition: "Grants distributor exclusive sales rights within a specific state or geographic territory.", useCase: "Expanding FMCG or consumer electronics reach." },
      { name: "Non-Exclusive Wholesale Distribution Agreement", definition: "Grants distributor non-exclusive rights to sell products alongside other distributor channels.", useCase: "Multi-channel retail distribution." },
      { name: "Selective / Authorized Dealer Agreement", definition: "Restricts distribution to verified authorized retail partners meeting brand criteria.", useCase: "Luxury goods, apparel, and specialized medical equipment." }
    ],
    exclusions: [
      "Direct enterprise sales reserved by manufacturer under Key Account Exclusions.",
      "Online e-commerce sales rights unless explicitly granted in writing.",
      "Unapproved sub-distribution networks."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Competition Act, 2002",
      overview: "Enforceable commercial distribution agreement compliant with Section 3 of the Competition Act prohibiting anti-competitive vertical restraints.",
      remedies: [
        "Injunction against Parallel Imports: Blocking unauthorized grey-market sellers.",
        "Termination of Territory Rights: Revoking exclusivity for missing annual sales targets."
      ]
    },
    realWorldExamples: [
      { title: "Electronics Regional Master Distributor", scenario: "An audio brand appointed a master distributor for South India with quarterly minimum sales targets." }
    ],
    faqs: [
      { q: "Can a manufacturer set resale prices in India?", a: "Under competition laws, setting a minimum resale price is generally restricted unless justified; you can suggest maximum retail prices (MRP)." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹200 non-judicial stamp paper.",
      general: "Standard agreement rates apply."
    },
    complexity: "High",
    requiredForFundraising: false
  },
  {
    id: "franchise-agreement",
    name: "Franchise Agreement",
    category: "Commercial & Sales",
    tagline: "License your trademark and business model to rapidly scale locations.",
    overview: "A Franchise Agreement is a contract where a franchisor licenses their brand, trademarks, and business model to a franchisee in exchange for fees and royalties.",
    whyImportant: [
      "Brand Consistency: Protects standard operating procedures (SOPs).",
      "Revenue Stream: Captures upfront fees and percentage royalties."
    ],
    whenRequired: [
      "Licensing your retail store or restaurant model to independent operators."
    ],
    components: [
      { term: "Royalty Fee", description: "Monthly percentage of gross sales paid to the franchisor." },
      { term: "Quality Audits", description: "Franchisor rights to inspect store quality." }
    ],
    whoNeedsIt: [
      "Retail, F&B, and education brands scaling via franchise models."
    ],
    docsRequired: [
      "SOP manual.",
      "Trademark certificates."
    ],
    comparison: {
      title: "Franchise vs License",
      versusName: "Trademark License",
      table: [
        { aspect: "Control", activeDoc: "High control over operations, uniforms, sourcing, and branding.", versusDoc: "Lower control; only governs brand name usage." }
      ]
    },
    procedure: [
      "Step 1: Prepare franchise handbook/SOP.",
      "Step 2: Draft agreement defining fees, audit rights, and territories.",
      "Step 3: Execute contract on high-value stamp paper."
    ],
    costTable: [
      { service: "Drafting", desc: "Detailed multi-unit franchise agreement.", cost: "₹15,000 – ₹30,000" }
    ],
    termination: {
      reasons: [
        "Brand Damage: Action by franchisee that damages corporate reputation."
      ],
      alternatives: [
        "Management takeover: Franchisor temporarily takes over store operations."
      ]
    },
    template: `FRANCHISE AGREEMENT\n\nFranchisor grants Franchisee the right to operate a [Brand] outlet at [Location] in exchange for a royalty of [Percentage]% of gross sales.`,
    types: [
      { name: "Single-Unit Franchise Agreement", definition: "Grants franchisee right to operate a single retail outlet or service location under franchisor brand guidelines.", useCase: "QSR restaurants, retail stores, or diagnostic labs." },
      { name: "Master Franchise Agreement", definition: "Grants master franchisee exclusive rights to sub-franchise and open multiple outlets within an entire state or country.", useCase: "International brand expansions across India." },
      { name: "FOFO (Franchisee Owned Franchisee Operated) Model", definition: "Franchisee owns capital infrastructure and manages daily operations while paying royalties to brand owner.", useCase: "Cloud kitchens, fitness centers, and educational institutes." }
    ],
    exclusions: [
      "Ownership of master brand trademarks, recipes, or proprietary software systems.",
      "Unilateral modification of brand visual identity or standardized menu pricing.",
      "Territorial expansion outside designated geographic exclusivity zone."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Trade Marks Act, 1999",
      overview: "Franchise Agreements are governed by Indian contract, trademark, and competition laws. They strictly enforce brand trademark usage, royalty structures, and operational SLAs.",
      remedies: [
        "Injunction against Brand Misuse: Emergency court order halting unapproved brand name usage post-termination.",
        "Recovery of Unpaid Royalties: Civil suit under CPC Order 37 to recover outstanding royalty percentages.",
        "Specific Performance of Non-Compete: Restraining terminated franchisee from operating competing brand at same venue."
      ]
    },
    realWorldExamples: [
      { title: "QSR Chain FOFO Outlet", scenario: "A food brand expanded into 20 cities using Franchise Agreements prescribing 6% monthly royalty and strict central supply procurement." },
      { title: "EdTech Learning Center Franchise", scenario: "An EdTech firm granted exclusive city rights under a Master Franchise Agreement for regional test-prep centers." }
    ],
    faqs: [
      { q: "Who pays for local marketing in a franchise?", a: "Usually, the franchisee pays a percentage (e.g. 2%) into a local marketing fund managed by the franchisor." }
    ],
    stampDuty: {
      karnataka: "₹500 non-judicial stamp paper.",
      maharashtra: "₹1,000 non-judicial stamp paper or ad-valorem rates.",
      delhi: "₹500 non-judicial stamp paper.",
      general: "Attracts higher tier stamp duty in most states."
    },
    complexity: "High",
    requiredForFundraising: false
  },
  {
    id: "ip-assignment-agreement",
    name: "IP Assignment Agreement",
    category: "IP & Licensing",
    tagline: "Secure complete ownership of your company's technology assets by transferring IP from developers and founders to the corporate entity.",
    overview: "An Intellectual Property (IP) Assignment Agreement transfers ownership of intellectual property from an individual creator (like a co-founder, developer, or contractor) to the company.",
    whyImportant: [
      "Clean Asset Ownership: Proves to investors the company owns 100% of its codebase.",
      "Founder Lock-in: Vesting IP with the company rather than the individual co-founder."
    ],
    whenRequired: [
      "Hiring external developers or UI/UX designers.",
      "Startups incorporating to transfer pre-incorporation code to the new entity."
    ],
    components: [
      { term: "Assignment Grant", description: "The clause transferring all past, present, and future IP rights." },
      { term: "Waiver of Moral Rights", description: "Authorizes modifications of work without creator vetoes." }
    ],
    whoNeedsIt: [
      "Tech startups contracting software developers.",
      "Founders who built codebases prior to company incorporation."
    ],
    docsRequired: [
      "Creator Identity documents.",
      "Repository links / descriptions of the work."
    ],
    comparison: {
      title: "IP Assignment vs IP License",
      versusName: "IP License",
      table: [
        { aspect: "Ownership", activeDoc: "Complete transfer of ownership to the assignee.", versusDoc: "The creator retains ownership; assignee only gets usage permissions." }
      ]
    },
    procedure: [
      "Step 1: List all repos and work products.",
      "Step 2: Draft agreement ensuring absolute, global transfer.",
      "Step 3: Execute on non-judicial stamp paper."
    ],
    costTable: [
      { service: "Developer IP Transfer", desc: "Contractor IP assignment.", cost: "₹2,500 – ₹5,000" }
    ],
    termination: {
      reasons: [
        "Irrevocable: True IP assignments cannot be terminated by the creator."
      ],
      alternatives: [
        "Not applicable."
      ]
    },
    template: `IP ASSIGNMENT DEED\n\nAssignor hereby irrevocably and perpetually assigns and transfers to Assignee all global right, title, and interest in [Codebase/Repository/Design].`,
    types: [
      { name: "Full & Absolute IP Assignment Deed", definition: "Complete transfer of all worldwide intellectual property rights (patents, copyrights, trademarks, algorithms) to the buyer entity.", useCase: "M&A asset sales, co-founder IP transfers, and software acquisitions." },
      { name: "Founder Pre-Incorporation IP Assignment", definition: "Transfer deed executing assignment of pre-existing codebase or domain names created by founders prior to Private Limited registration.", useCase: "Startup incorporation and early VC due diligence readiness." },
      { name: "Employee & Contractor IP Assignment Addendum", definition: "Specific IP transfer deed attached to freelancer or employment contracts under Copyright Act Section 19.", useCase: "Outsourced software development and design work." }
    ],
    exclusions: [
      "Personal unassigned inventions created prior to the agreement and listed in Annexure A.",
      "Third-party open-source libraries integrated under permissive public licenses.",
      "Moral rights that cannot be legally assigned under Indian Copyright Act Section 21."
    ],
    legalValidity: {
      act: "Copyright Act, 1957 (Section 19), Patents Act, 1970 & Trade Marks Act, 1999",
      overview: "Under Section 19 of the Indian Copyright Act, an assignment of copyright is INVALID unless it is in writing, signed by the assignor, specifies the work, duration, territorial extent, and consideration.",
      remedies: [
        "Mandatory Court Decree of IP Transfer: Specific performance compelling registration of assignment with Patent/Trademark office.",
        "Permanent Injunction against Infringement: Court order restraining assignor from utilizing assigned code or brand.",
        "Damages & Account of Profits: Recovery of all revenues earned by assignor through unauthorized IP commercialization."
      ]
    },
    realWorldExamples: [
      { title: "SaaS Source Code Asset Acquisition", scenario: "A tech conglomerate acquired a proprietary analytics engine from an independent developer via an IP Assignment Agreement, transferring full GitHub repos and patent applications." },
      { title: "Co-Founder App Transfer to Pvt Ltd", scenario: "A mobile app founder assigned 100% trademark and source code ownership to their newly incorporated Private Limited company." }
    ],
    faqs: [
      { q: "Is an IP assignment valid without payment?", a: "No, under Indian contract law, agreements need consideration. A nominal payment (e.g. ₹100) must be recorded." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Standard agreement rates apply."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "technology-transfer-agreement",
    name: "Technology Transfer Agreement",
    category: "IP & Licensing",
    tagline: "License or assign proprietary manufacturing and software technology to other entities.",
    overview: "A Technology Transfer Agreement governs the licensing or assignment of proprietary tech, source code, or manufacturing patents to another business.",
    whyImportant: [
      "Monetization: Generates revenue via royalties.",
      "Enforces Guardrails: Protects background secrets from unauthorized replication."
    ],
    whenRequired: [
      "Licensing proprietary software platforms or hardware designs to strategic partners."
    ],
    components: [
      { term: "License Scope", description: "Defines limits of usage (e.g. geographic or sector)." },
      { term: "Technical Training", description: "Commitment to train the recipient's team." }
    ],
    whoNeedsIt: [
      "Hardware, biotech, and SaaS startups scaling via licensing."
    ],
    docsRequired: [
      "Patent / Code description.",
      "Royalty structure."
    ],
    comparison: {
      title: "Tech Transfer vs SaaS Agreement",
      versusName: "SaaS Agreement",
      table: [
        { aspect: "Delivery", activeDoc: "Code/blueprints are delivered directly to the client's servers/factories.", versusDoc: "Software is hosted on provider servers; client only gets login access." }
      ]
    },
    procedure: [
      "Step 1: Define transfer assets.",
      "Step 2: Draft royalty terms and derivative ownership rules.",
      "Step 3: Execute contract."
    ],
    costTable: [
      { service: "Drafting", desc: "Detailed technology transfer contract.", cost: "₹10,000 – ₹20,000" }
    ],
    termination: {
      reasons: [
        "Royalty Default: Failure to pay licensing royalties.",
        "Confidentiality Breach: Leaking background source files."
      ],
      alternatives: [
        "Audit: Force audit of royalties prior to termination."
      ]
    },
    template: `TECHNOLOGY TRANSFER AGREEMENT\n\nLicensor grants Licensee a [Non-Exclusive] license to manufacture and distribute [Technology] in [Territory] in exchange for [Royalty] royalties.`,
    types: [
      { name: "Exclusive Technology Assignment Deed", definition: "Permanent assignment of patent rights, industrial designs, and technical know-how to buyer.", useCase: "Biotech, defense, and deep-tech acquisitions." },
      { name: "Non-Exclusive Tech Licensing Agreement", definition: "Grants licensee right to utilize patented technology while licensor retains core ownership.", useCase: "Software algorithm licensing and chemical formulas." },
      { name: "Joint R&D Technology Transfer Agreement", definition: "Collaborative agreement defining co-developed technology ownership and royalty shares.", useCase: "University-industry research partnerships." }
    ],
    exclusions: [
      "Unlicensed derivative works developed independently by licensee.",
      "Commercial exploitation in excluded geographic territories.",
      "Background patents not explicitly specified in Schedule A."
    ],
    legalValidity: {
      act: "Patents Act, 1970 & Copyright Act, 1957",
      overview: "Governs statutory technology transfer and patent licensing in India under Section 68 of the Patents Act requiring written registered instruments.",
      remedies: [
        "Patent Infringement Injunction: Halting unauthorized industrial use of transferred tech.",
        "Royalty Audit Decree: Judicial audit of licensee sales books to enforce royalty payments."
      ]
    },
    realWorldExamples: [
      { title: "University Defense Tech Transfer", scenario: "A defense startup licensed drone navigation algorithms from a research university under a technology transfer agreement." }
    ],
    faqs: [
      { q: "Who owns improvements made to the tech by the licensee?", a: "It is decided by contract; usually, the licensor retains rights or gets a free license to licensee improvements." }
    ],
    stampDuty: {
      karnataka: "₹200 - ₹500 standard stamp duty.",
      maharashtra: "₹1,000 or ad-valorem rates.",
      delhi: "₹200 non-judicial stamp paper.",
      general: "Requires mid-to-high tier stamp duty based on commercial valuation."
    },
    complexity: "High",
    requiredForFundraising: false
  },
  {
    id: "trademark-license-agreement",
    name: "Trademark License Agreement",
    category: "IP & Licensing",
    tagline: "License your logo, trademark, or brand style guide to other businesses.",
    overview: "A Trademark License Agreement allows a licensee to use the franchisor's or brand owner's trademark, maintaining specific quality control standards.",
    whyImportant: [
      "Monetize Brand: Authorizes merchandising or sub-branding.",
      "Quality Control: Prevents brand devaluation by setting quality rules."
    ],
    whenRequired: [
      "Licensing brand logo for product manufacturing."
    ],
    components: [
      { term: "Trademark Scope", description: "The specific logos and names permitted for use." },
      { term: "Quality Control", description: "Rights of the licensor to audit goods to protect the trademark." }
    ],
    whoNeedsIt: [
      "Brands authorizing sub-licenses or merchandising partnerships."
    ],
    docsRequired: [
      "Trademark Registration Certificates."
    ],
    comparison: {
      title: "Trademark License vs Franchise",
      versusName: "Franchise Agreement",
      table: [
        { aspect: "Operations", activeDoc: "Only governs brand trademark usage; no control over employee hiring.", versusDoc: "Controls entire operations, store layouts, and staff guidelines." }
      ]
    },
    procedure: [
      "Step 1: Check TM registration status.",
      "Step 2: Draft license outlining quality checks.",
      "Step 3: Sign and file Form TM-P with Trademark registry (recommended)."
    ],
    costTable: [
      { service: "Drafting", desc: "Trademark licensing contract.", cost: "₹3,500 – ₹6,000" }
    ],
    termination: {
      reasons: [
        "Quality default: Franchisee/Licensee produces substandard goods."
      ],
      alternatives: [
        "Cure Notice: Give 30 days to resolve quality issues."
      ]
    },
    template: `TRADEMARK LICENSE AGREEMENT\n\nLicensor grants Licensee the right to use the trademark [Brand Name] (Registration No. [Number]) on products in [Territory] subject to quality rules in Section 3.`,
    types: [
      { name: "Exclusive Brand Licensing Agreement", definition: "Grants licensee sole right to use brand trademark within a designated market segment or country.", useCase: "Global apparel or footwear brand licensing." },
      { name: "Merchandising Trademark License", definition: "Authorizes manufacturer to print registered brand logo on commercial merchandise.", useCase: "Entertainment franchises and sports merchandise." },
      { name: "Co-Branding License Agreement", definition: "Cross-license permitting two brands to create joint co-branded products.", useCase: "FinTech credit card partnerships." }
    ],
    exclusions: [
      "Modification of registered trademark logo, color palette, or typography.",
      "Sub-licensing brand rights to third parties without licensor approval.",
      "Use of trademark on non-approved product categories."
    ],
    legalValidity: {
      act: "Trade Marks Act, 1999 (Section 49)",
      overview: "Governs registered user agreements filed with the Trademark Registry under Section 49 of the Trade Marks Act 1999.",
      remedies: [
        "Trademark Infringement Injunction: Emergency injunction halting counterfeit product sales.",
        "Seizure of Non-Compliant Stock: Court order confiscating unapproved branded goods."
      ]
    },
    realWorldExamples: [
      { title: "Apparel Brand Licensing Deal", scenario: "A global sportswear brand licensed its trademark to an Indian retail operator for exclusive footwear manufacturing." }
    ],
    faqs: [
      { q: "Why is a quality control clause required in a Trademark License Agreement?", a: "Under Indian trademark law, a trademark license without quality controls is considered a 'naked license' and can lead to cancellation or dilution of the trademark." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Standard commercial contract rates apply."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "non-disclosure-agreement",
    name: "Non-Disclosure Agreement (NDA)",
    category: "IP & Licensing",
    tagline: "Protect your proprietary trade secrets, codebases, financial plans, and client data with an enforceable, partner-vetted Non-Disclosure Agreement.",
    overview: "A Non-Disclosure Agreement (NDA) is a legally binding confidentiality contract governed by the Indian Contract Act, 1872. It establishes a confidential relationship between parties by explicitly defining proprietary information, technical trade secrets, financial records, and operational processes while imposing strict confidentiality obligations and legal remedies on receiving parties.",
    whyImportant: [
      "Trade Secret Protection: Secures core algorithms, software codebases, client lists, and manufacturing formulas from unauthorized third-party disclosure.",
      "Preserves Competitive Advantage: Ensures potential partners, contractors, or investors cannot exploit shared insights to launch competing businesses.",
      "Clear Legal Remedies: Enables instant legal recourse including emergency court injunctions, financial penalty enforcement, and damage recovery.",
      "Client & Vendor Assurance: Demonstrates high enterprise data governance, assuring clients and international enterprise partners that sensitive data is safe.",
      "Establishes Legal Ownership: Prevents external freelancers or agencies from claiming intellectual property rights over work created during collaboration."
    ],
    whenRequired: [
      "Hiring Contractors & Freelancers: Secure proprietary code, UI/UX designs, and marketing assets before granting repository access.",
      "Vendor & Supplier Negotiations: Share operational workflows and product specs without risking trade secret leakages.",
      "Investor & Partner Discussions: Present pitch decks, financial models, and growth projections safely to VCs, angel syndicates, and prospective partners.",
      "Product Development & Testing: Share beta builds, API keys, or prototype blueprints with external consultants.",
      "Mergers & Corporate Acquisitions: Conduct confidential financial and legal due diligence with prospective buyers or joint venture partners."
    ],
    types: [
      {
        name: "Unilateral NDA (One-Way)",
        definition: "A legal contract where only one party (Disclosing Party) shares confidential information with another party (Receiving Party).",
        useCase: "Ideal when sharing trade secrets, codebases, or customer lists with external contractors, freelancers, or software vendors."
      },
      {
        name: "Mutual NDA (Two-Way)",
        definition: "A confidentiality agreement signed when both parties share confidential and proprietary information with each other.",
        useCase: "Essential for strategic joint ventures, tech integrations, corporate mergers, or co-development partnerships where both entities contribute trade secrets."
      },
      {
        name: "Multilateral NDA (Three or More Parties)",
        definition: "Involves three or more entities agreeing to hold shared proprietary data under uniform confidentiality covenants.",
        useCase: "Best suited for multi-party consortiums, complex supply chain projects, or syndicated startup investment rounds involving multiple angel funds."
      }
    ],
    components: [
      { term: "Identification of Parties", description: "Clear legal names, corporate identity numbers (CIN/PAN), registered addresses, and capacity (Unilateral vs Mutual)." },
      { term: "Definition of Confidential Information", description: "Comprehensive enumeration covering technical source code, financial records, algorithms, customer databases, and oral disclosures reduced to writing." },
      { term: "Purpose Clause", description: "Strictly restricts the use of shared confidential data solely for the evaluated transaction or defined project scope." },
      { term: "Non-Disclosure & Non-Use Obligations", description: "Imposes mandatory administrative, digital, and procedural safeguards prohibiting unauthorized copying, sub-licensing, or disclosure." },
      { term: "Term & Survival Duration", description: "Specifies agreement duration (typically 2–5 years) and clarifies post-expiry survival obligations for core trade secrets." },
      { term: "Exclusions to Confidentiality", description: "Standard statutory exceptions including public domain information, prior independent knowledge, and court-ordered disclosures." },
      { term: "Remedies & Injunctive Relief", description: "Explicit rights to seek immediate ex-parte injunctions, liquidated damages, and attorney fee recoveries upon breach." },
      { term: "Governing Law & Dispute Jurisdiction", description: "Enforceable under Indian law with designated seat for arbitration or civil court proceedings." }
    ],
    exclusions: [
      "Information that is or becomes part of the public domain through no fault of the receiving party.",
      "Information already lawfully known or in possession of the receiving party prior to disclosure, backed by written records.",
      "Information independently developed by the receiving party without reference to or reliance upon the disclosing party's confidential data.",
      "Information disclosed by the receiving party under mandatory statutory obligation, regulatory order, or court subpoena (with prompt advance written notice to disclosing party).",
      "Information explicitly approved for public release by the disclosing party in prior written authorization."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Information Technology Act, 2000",
      overview: "NDAs are fully enforceable legal contracts under Indian law. Under Section 27 of the Indian Contract Act, NDA confidentiality covenants are legally valid during and post-collaboration provided they do not act as an unconstitutional restraint of lawful trade. Furthermore, digital NDAs signed via email or electronic signatures are recognized under Section 10A of the IT Act, 2000.",
      remedies: [
        "Injunctive Relief: Indian civil courts can grant urgent interim orders stopping the breaching party from further using or disseminating confidential files.",
        "Monetary Damages: Recovery of actual economic loss suffered plus disgorgement of profits earned by the defaulting party.",
        "Return or Destruction of Data: Mandatory court directive enforcing physical return or certified permanent digital purge of all confidential material."
      ]
    },
    realWorldExamples: [
      {
        title: "Enterprise Government Cloud Platform",
        scenario: "When cloud service providers partner with government bodies to process official citizen registries, comprehensive NDAs strictly restrict data center technicians from accessing or replicating classified database records."
      },
      {
        title: "Pharmaceutical Generic Formulation Partnership",
        scenario: "Major Indian pharmaceutical developers entering co-development agreements with global biotech firms sign bilateral NDAs to safeguard proprietary clinical test results, chemical synthesis formulas, and patent documentation."
      },
      {
        title: "EdTech Strategic Tech Integration",
        scenario: "Indian unicorns engaging external global tech conglomerates for AI engine integrations utilize multilateral NDAs to secure student behavioral telemetry and proprietary algorithm source code."
      }
    ],
    whoNeedsIt: [
      "Software Startups & Tech Enterprises sharing source code with contract developers or remote teams.",
      "Product Companies sharing CAD drawings, manufacturing specs, or prototypes with vendors.",
      "Founders pitching sensitive business plans and financial metrics to prospective co-founders or investors.",
      "Agencies and Consultants handling sensitive client data, marketing databases, or corporate strategies.",
      "Companies negotiating mergers, licensing rights, acquisitions, or joint venture collaborations."
    ],
    docsRequired: [
      "Disclosing & Receiving Party Details (Legal Names, CIN/PAN, Registered Address).",
      "Authorized Signatory Designation & Identity Verification (Aadhaar / Passport / Board Resolution).",
      "Detailed List of Proprietary Data Assets & Intended Purpose of Disclosure."
    ],
    comparison: {
      title: "Unilateral NDA vs Mutual NDA",
      versusName: "Mutual NDA",
      table: [
        { aspect: "Information Flow", activeDoc: "One-way flow: Only Disclosing Party shares confidential files.", versusDoc: "Two-way flow: Both parties exchange trade secrets & financial files." },
        { aspect: "Obligations", activeDoc: "Only the Receiving Party is bound by non-disclosure covenants.", versusDoc: "Both entities are equally bound to protect shared information." },
        { aspect: "Best Suited For", activeDoc: "Contractor hiring, vendor quotes, & unilateral code reviews.", versusDoc: "Joint ventures, co-product developments, & merger negotiations." }
      ]
    },
    procedure: [
      "Step 1: Define Flow & Scope: Determine if transaction requires Unilateral, Mutual, or Multilateral coverage and detail confidential assets.",
      "Step 2: Automated Drafting: Select agreement parameters on Founding Legals to generate a legally vetted document in 2 minutes.",
      "Step 3: Review & Customization: Meticulously verify party details, governing state jurisdiction, and survival duration.",
      "Step 4: Digital Signing & Stamping: Execute with digital signatures under Section 10A of IT Act and pay non-judicial stamp duty."
    ],
    costTable: [
      { service: "Automated Instant Draft", desc: "Standard partner-vetted NDA tailored for startups & SMBs.", cost: "₹50" },
      { service: "Expert Vetted Custom NDA", desc: "Tailored clauses for complex cross-border IP, software licensing, or high-value M&A.", cost: "₹1,499 – ₹2,999" }
    ],
    termination: {
      reasons: [
        "Term Expiry: Expiration of defined agreement term (typically 2 to 5 years).",
        "Mutual Written Consent: Both parties formally execute a deed of cancellation.",
        "Superseded by Master Agreement: Replaced by comprehensive Master Service Agreement or SHA containing overriding confidentiality covenants."
      ],
      alternatives: [
        "Amendment Addendum: Extend obligation duration or incorporate newly disclosed proprietary assets.",
        "Carve-Out Waiver: Formally permit specific disclosures to designated regulatory bodies."
      ]
    },
    template: `NON-DISCLOSURE AGREEMENT (MUTUAL)

This Non-Disclosure Agreement ("Agreement") is executed on [Date] ("Effective Date") by and between:

DISCLOSING PARTY: [Company/Party Name], having its registered office at [Address] (hereinafter referred to as "Disclosing Party"); AND
RECEIVING PARTY: [Recipient Name/Company], having its registered office at [Address] (hereinafter referred to as "Receiving Party").

1. PURPOSE
The Disclosing Party agrees to share proprietary technical software code, business strategies, and financial projections solely for evaluating [Insert Purpose/Project Name].

2. CONFIDENTIAL INFORMATION
"Confidential Information" includes all written, electronic, or oral technical data, algorithms, customer databases, trade secrets, and financial metrics marked as confidential or reasonably understood as proprietary.

3. OBLIGATIONS OF RECEIVING PARTY
The Receiving Party agrees to:
a) Hold all Confidential Information in strict confidence using at least reasonable security standards;
b) Restrict internal access strictly to authorized personnel with a clear need-to-know;
c) Refrain from reverse engineering, copying, or exploiting shared data for unauthorized purposes.

4. EXCLUSIONS
Confidential Information does not include data that: (i) is publicly available without breach; (ii) was already lawfully known prior to disclosure; (iii) is independently developed without reference to disclosed data; or (iv) is required by court order (with immediate prior notice).

5. GOVERNING LAW & JURISDICTION
This Agreement is governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts at [City/State].

IN WITNESS WHEREOF, the Authorized Signatories have executed this Agreement as of the Effective Date:

For Disclosing Party:                           For Receiving Party:
__________________________                      __________________________
Authorized Signatory                            Authorized Signatory`,
    faqs: [
      { q: "What is a Non-Disclosure Agreement (NDA)?", a: "An NDA is a legally binding confidentiality contract under the Indian Contract Act, 1872 that protects trade secrets, financial records, and proprietary technical data from unauthorized disclosure or misuse." },
      { q: "What happens if a receiving party breaks an NDA in India?", a: "The disclosing party can take swift legal action in Indian courts to secure interim injunctive relief (stopping data dissemination), sue for actual economic damages, and claim disgorgement of unauthorized profits." },
      { q: "Are digital signatures legally valid for NDAs in India?", a: "Yes. Under Section 10A of the Information Technology Act, 2000, agreements executed via electronic signatures (Aadhaar eSign, digital signatures, or verified email acceptance) are legally valid and admissible in court." },
      { q: "Is notarization or stamp paper mandatory for an NDA?", a: "While notarization is not strictly required by law, executing the NDA on state non-judicial stamp paper (e.g. ₹100–₹500 depending on state stamp rules) ensures immediate court admissibility under Indian stamp laws." },
      { q: "What is the difference between a Unilateral and Mutual NDA?", a: "A Unilateral NDA protects information shared by only one party (e.g., hiring a freelancer), while a Mutual NDA protects confidential data exchanged bilaterally between both entities (e.g., joint ventures or merger talks)." },
      { q: "Can an employee or vendor be sued after leaving the company?", a: "Yes. Confidentiality covenants in a properly drafted NDA survive employment or vendor contract termination, legally prohibiting former staff from sharing trade secrets with competitors." },
      { q: "Why should I use Founding Legals instead of a free online NDA template?", a: "Free online templates often lack jurisdiction-specific clauses under Indian contract law, omit vital trade secret protection definitions, and fail to provide enforceable dispute resolution mechanisms." },
      { q: "How long does NDA confidentiality obligation typically last?", a: "Standard commercial NDAs stipulate a term of 2 to 5 years for business data, while trade secrets, software codebases, and core formulas can be protected in perpetuity." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper under Karnataka Stamp Act.",
      maharashtra: "₹500 non-judicial stamp paper under Maharashtra Stamp Act Article 5(h).",
      delhi: "₹100 non-judicial stamp paper under Delhi Stamp Rules.",
      general: "Executed on state non-judicial stamp paper as per local state Stamp Act requirements."
    },
    complexity: "Low",
    requiredForFundraising: false
  },
  {
    id: "service-certificate",
    name: "Service Certificate",
    category: "HR & Employment",
    tagline: "Formal certificate acknowledging an employee's job role, total tenure, and successful completion of duties.",
    overview: "A Service Certificate is a formal employment document issued by an employer to an employee upon completion of their tenure or resignation. It acknowledges the employee's role, duration of service, and successful performance of assigned responsibilities.",
    whyImportant: [
      "Employment Proof: Serves as official proof of past experience for future employers.",
      "Regulatory Compliance: Fulfills statutory obligations under Indian Shops & Establishments Acts.",
      "Clear Record: Prevents post-employment tenure or designation disputes."
    ],
    whenRequired: [
      "When an employee resigns or completes their contract term.",
      "During exit processing and full & final (F&F) settlement."
    ],
    components: [
      { term: "Designation & Role", description: "Official job title held during tenure." },
      { term: "Tenure Dates", description: "Exact date of joining and date of relief." },
      { term: "Conduct & Character", description: "Standard affirmation of satisfactory performance." }
    ],
    whoNeedsIt: [
      "HR departments issuing exit documentation.",
      "Employees needing experience verification for future background checks."
    ],
    docsRequired: [
      "Employee ID & Joining Records",
      "Relieving & F&F Approval"
    ],
    comparison: {
      title: "Service Certificate vs Relieving Letter",
      versusName: "Relieving Letter",
      table: [
        { aspect: "Primary Focus", activeDoc: "Certifies job role, duration, and performance history.", versusDoc: "Confirms formal acceptance of resignation and release of duties." }
      ]
    },
    procedure: [
      "Step 1: Verify employee service records and F&F clearance.",
      "Step 2: Generate certificate on company letterhead.",
      "Step 3: Authorized HR/Director signature & official seal."
    ],
    costTable: [
      { service: "Standard Template", desc: "Automated exit service certificate.", cost: "Free / Included" }
    ],
    termination: {
      reasons: [
        "Not Applicable: Issued upon exit."
      ],
      alternatives: [
        "Re-issuance upon request."
      ]
    },
    template: `SERVICE CERTIFICATE\n\nTO WHOMSOEVER IT MAY CONCERN\n\nThis is to certify that [Employee Name] was employed with [Company Name] from [Start Date] to [End Date] as [Designation].\n\nDuring their tenure with us, we found them to be industrious, sincere, and dedicated. We wish them all success in future endeavors.\n\nFor [Company Name]\n\nAuthorized Signatory`,
    types: [
      { name: "Standard Relieving & Experience Letter", definition: "Official corporate document certifying employee tenure, designation, and satisfactory conduct.", useCase: "Issuing relieving documents to departing employees." },
      { name: "Service Completion Certificate for Contractors", definition: "Certificate issued to external consultants verifying successful completion of contractual SOW.", useCase: "Vendor proof of performance for government tenders." }
    ],
    exclusions: [
      "Unverified performance claims not supported by HR exit evaluations.",
      "Waiver of active non-disclosure or non-solicitation covenants.",
      "Financial liability guarantees."
    ],
    legalValidity: {
      act: "Industrial Employment (Standing Orders) Act, 1946",
      overview: "Service certificates are statutory requirements under state Shops & Establishments Acts, mandating employers to issue service proof upon employee departure.",
      remedies: [
        "Labor Court Direction: Directing reluctant employer to release service certificate after notice period compliance."
      ]
    },
    realWorldExamples: [
      { title: "IT Engineer Exit Certification", scenario: "A software developer received an official Service Certificate verifying 3 years of service as Senior Engineer upon resignation handover." }
    ],
    faqs: [
      { q: "Is an employer legally required to issue a Service Certificate in India?", a: "Yes, under various state Shops and Commercial Establishments Acts, an employer is bound to provide a certificate of service upon request by a departing employee." }
    ],
    stampDuty: {
      karnataka: "Not required; issued on company letterhead.",
      maharashtra: "Not required.",
      delhi: "Not required.",
      general: "Printed on official corporate letterhead with company stamp."
    },
    complexity: "Low",
    requiredForFundraising: false
  },
  {
    id: "software-license-agreement",
    name: "Software License Agreement",
    category: "IP & Licensing",
    tagline: "Grant license to use proprietary software, defining usage rights, restrictions, SLAs, and liability limits.",
    overview: "A Software License Agreement is a legal contract governing the use or redistribution of proprietary software. It defines user access rights, restrictions against reverse engineering, subscription terms, SLA commitments, and liability caps.",
    whyImportant: [
      "IP Protection: Strictly forbids reverse engineering, copying, or sub-licensing source code.",
      "Liability Shield: Caps damages from software bugs or operational downtime.",
      "Revenue Enforcement: Sets user seat limits and recurring license fee schedules."
    ],
    whenRequired: [
      "Licensing enterprise software or SaaS solutions to corporate clients.",
      "Distributing desktop, mobile, or on-premise software products."
    ],
    components: [
      { term: "License Grant", description: "Non-exclusive, non-transferable right to use software." },
      { term: "Restrictions", description: "Prohibitions on decompilation, unauthorized distribution, or modification." },
      { term: "Service Level Agreement (SLA)", description: "Uptime guarantees, maintenance windows, and support response times." }
    ],
    whoNeedsIt: [
      "SaaS startups, software vendors, and digital product creators."
    ],
    docsRequired: [
      "Software Specifications & User Tier List",
      "Corporate Client Information"
    ],
    comparison: {
      title: "Software License vs SaaS Terms of Service",
      versusName: "SaaS Terms of Service",
      table: [
        { aspect: "Deployment", activeDoc: "Often includes on-premise or dedicated instance software deployments.", versusDoc: "Standard cloud web application access via browser." }
      ]
    },
    procedure: [
      "Step 1: Define licensing model (per seat, tier, or enterprise).",
      "Step 2: Include SLA and liability caps.",
      "Step 3: Execute agreement electronically or in writing."
    ],
    costTable: [
      { service: "Enterprise License Drafting", desc: "Custom software license with SLA annexures.", cost: "₹7,500 – ₹15,000" }
    ],
    termination: {
      reasons: [
        "Non-payment of license fees.",
        "Breach of license restrictions (e.g., piracy or reverse engineering)."
      ],
      alternatives: [
        "Downgrade to lower tier or temporary suspension."
      ]
    },
    template: `SOFTWARE LICENSE AGREEMENT\n\nLicensor grants Licensee a non-exclusive, non-transferable license to use [Software Name] for [Number] authorized users. Licensee shall not reverse-engineer, decompile, or redistribute the Software.\n\nIN WITNESS WHEREOF, the parties execute below.`,
    types: [
      { name: "SaaS (Software-as-a-Service) License Agreement", definition: "Cloud software subscription agreement granting hosted access over internet without local installation.", useCase: "B2B SaaS platforms and cloud software products." },
      { name: "On-Premise Enterprise End User License (EULA)", definition: "Permissive license allowing customer to install binary software on local enterprise servers.", useCase: "On-premise database, security, or ERP software." },
      { name: "OEM & Embedded Software License", definition: "License authorizing hardware manufacturers to bundle software code directly into physical devices.", useCase: "IoT devices, smart electronics, and hardware integrations." }
    ],
    exclusions: [
      "Transfer of underlying software source code, algorithms, or engineering trade secrets.",
      "Reverse engineering, decompiling, or creating derivative software products.",
      "Service uptime guarantees beyond SLA terms outlined in Annexure B."
    ],
    legalValidity: {
      act: "Copyright Act, 1957 & Information Technology Act, 2000",
      overview: "Software License Agreements govern the statutory copyright license granted to software users under Section 14 of the Copyright Act, establishing user seat limits, data protection compliance (DPDP Act), and liability caps.",
      remedies: [
        "Injunction against Piracy & Unauthorized Seats: Court order blocking unlicensed enterprise software execution.",
        "Auditing & Over-Usage Fee Claims: Compelling payment for user seats exceeding contractual limit.",
        "Termination of Remote SaaS Access: Instant termination of API tokens upon payment default."
      ]
    },
    realWorldExamples: [
      { title: "B2B SaaS Multi-Seat License", scenario: "A B2B SaaS startup executed a Software License Agreement with a corporate client for 500 user seats with 99.9% uptime SLA." },
      { title: "FinTech Banking EULA", scenario: "A FinTech company licensed on-premise fraud detection software to a bank under a 3-year enterprise EULA." }
    ],
    faqs: [
      { q: "What happens if a licensee reverse engineers the software?", a: "It constitutes a material breach and copyright infringement, entitling the licensor to immediate license revocation and court injunctions." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Executed on standard agreement stamp paper."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "joint-venture-agreement",
    name: "Joint Venture Agreement",
    category: "Commercial & Sales",
    tagline: "Create a joint venture company or partnership with defined contributions, board control, and share transfer rules.",
    overview: "A Joint Venture (JV) Agreement governs a strategic business alliance between two or more companies pooling resources, technology, or capital for a specific commercial venture or new entity.",
    whyImportant: [
      "Governance & Control: Establishes board composition, voting rules, and management rights.",
      "Profit & Risk Sharing: Details contribution proportions and dividend distribution.",
      "Exit & Deadlock Resolution: Defines buyouts, drag-along rights, and exit mechanisms."
    ],
    whenRequired: [
      "Partnering with an established player to enter new markets or sectors.",
      "Forming a joint operating entity for shared technology or manufacturing."
    ],
    components: [
      { term: "Equity & Contributions", description: "Capital, IP, or infrastructure committed by each partner." },
      { term: "Management Board", description: "Representation and veto powers on the JV board." },
      { term: "Deadlock Resolution", description: "Escalation procedures when partners disagree on key decisions." }
    ],
    whoNeedsIt: [
      "Companies forming strategic partnerships, consortia, or co-owned entities."
    ],
    docsRequired: [
      "Partner Corporate Entities' Incorporation Docs",
      "Valuation & Contribution Schedules"
    ],
    comparison: {
      title: "Joint Venture vs Strategic Partnership (MoU)",
      versusName: "Memorandum of Understanding (MoU)",
      table: [
        { aspect: "Enforceability", activeDoc: "Exhaustive, legally binding contract creating shared liabilities.", versusDoc: "Preliminary non-binding statement of intent." }
      ]
    },
    procedure: [
      "Step 1: Execute MoU and conduct due diligence.",
      "Step 2: Draft comprehensive JV Agreement.",
      "Step 3: Incorporate JV entity and execute agreements."
    ],
    costTable: [
      { service: "JV Agreement Drafting", desc: "Detailed multi-party joint venture contract.", cost: "₹20,000 – ₹45,000" }
    ],
    termination: {
      reasons: [
        "Achievement of JV objectives.",
        "Unresolvable deadlock or material breach."
      ],
      alternatives: [
        "Partner buyout or share transfer."
      ]
    },
    template: `JOINT VENTURE AGREEMENT\n\nThis JV Agreement is executed between Party A [Entity] and Party B [Entity] to establish [JV Entity Name] with equity ratio [Ratio]. Board control and profit sharing shall be as outlined in Article 2.`,
    types: [
      { name: "Equity Joint Venture (Incorporated JV)", definition: "Parties form a new Private Limited entity, subscribing to equity shares based on agreed ownership ratios.", useCase: "Long-term commercial partnerships, infrastructure projects, and foreign market entries." },
      { name: "Contractual Joint Venture (Unincorporated JV)", definition: "Parties collaborate via contract without forming a new legal company, sharing costs, profits, and technical resources.", useCase: "Short-term consortium bids for government tenders or film production." },
      { name: "Cross-Border Technology JV", definition: "Foreign company partners with an Indian entity to transfer technology and leverage local manufacturing.", useCase: "Automotive, defense, and renewable energy manufacturing." }
    ],
    exclusions: [
      "Independent commercial projects conducted by partners outside the JV's explicit business scope.",
      "Pre-existing intellectual property owned by partners prior to JV execution (unless licensed).",
      "Unilateral financial debt incurred by one partner without joint board consent."
    ],
    legalValidity: {
      act: "Indian Contract Act, 1872 & Companies Act, 2013",
      overview: "Joint Venture Agreements are legally enforceable commercial contracts. Incorporated JVs must align their Memorandum and Articles of Association (MOA/AOA) with JV agreement terms under company law.",
      remedies: [
        "Specific Performance of Capital Calls: Court order compelling partner to inject committed JV capital.",
        "Deadlock Exit Buyout Decree: Enforcing pre-agreed Russian Roulette or Put/Call option mechanisms during deadlocks.",
        "Injunction against IP Misuse: Halting unauthorized use of joint venture technology."
      ]
    },
    realWorldExamples: [
      { title: "Indo-Japanese EV Manufacturing JV", scenario: "An Indian auto components firm formed a 50/50 Equity JV with a Japanese battery maker to construct a EV gigafactory in Gujarat." },
      { title: "Infrastructure Consortium JV", scenario: "Two construction firms formed an Unincorporated JV consortium to bid for a ₹500 Crore highway development tender." }
    ],
    faqs: [
      { q: "Is an incorporated JV better than an contractual JV?", a: "Incorporated JVs (e.g., forming a new Pvt Ltd) provide limited liability protection and clearer governance under the Companies Act." }
    ],
    stampDuty: {
      karnataka: "₹500 non-judicial stamp paper.",
      maharashtra: "₹1,000 non-judicial stamp paper.",
      delhi: "₹500 non-judicial stamp paper.",
      general: "Higher denomination stamp duty applies."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "rental-agreement",
    name: "Residential Rental Agreement",
    category: "Property & Rental",
    tagline: "Legally enforceable residential rent & leave and license agreement protecting landlords and tenants with clear deposit & maintenance rules.",
    overview: "A Residential Rental Agreement (or Leave & License Agreement) is a legally binding contract governed by state Rent Control Acts and the Transfer of Property Act, 1882. It regulates the temporary occupancy of residential premises by detailing monthly rent, refundable security deposits, lock-in periods, maintenance responsibilities, and tenant eviction conditions while protecting property ownership.",
    whyImportant: [
      "Secures Landlord Ownership Rights: Prevents illegal adverse possession claims by establishing a Leave & License relationship rather than a permanent tenancy.",
      "Clear Financial Terms: Specifies exact monthly rent due dates, late payment interest, security deposit refund terms, and annual escalation (typically 5–10%).",
      "Valid Address Proof: Serves as mandatory official proof of residence for tenant Aadhaar updates, bank accounts, passport applications, and GST registrations.",
      "Defines Maintenance & Repair Scope: Clarifies who pays for routine repairs, society maintenance charges, electricity bills, and property damage.",
      "Eviction & Notice Protection: Outlines valid grounds for eviction and mandatory 1 to 2 month notice periods for peaceful possession handover."
    ],
    whenRequired: [
      "Renting Flats, Apartments, or Independent Houses: Executing residential tenancy contracts.",
      "Company Employee Relocation Housing: Lease arrangements provided by employers for staff housing.",
      "Co-living & Paying Guest (PG) Accommodations: Formalizing short-term or long-term shared living arrangements."
    ],
    types: [
      {
        name: "11-Month Leave & License Agreement",
        definition: "Most popular residential contract format executed for 11 months to avoid mandatory registration requirements under Section 17 of the Registration Act, 1908.",
        useCase: "Standard residential renting for urban flats, apartments, and houses across Indian cities."
      },
      {
        name: "Registered Long-Term Lease Agreement",
        definition: "Formal residential lease agreement for 12 months or longer that is compulsorily registered with the local Sub-Registrar of Assurances.",
        useCase: "Ideal for long-term family tenancies, executive housing, or luxury villa rentals."
      },
      {
        name: "PG / Co-Living Space Agreement",
        definition: "Agreement governing shared residential living spaces detailing room sharing, meal amenities, and house rules.",
        useCase: "Students, young working professionals, and co-living operator accommodations."
      }
    ],
    components: [
      { term: "Identification of Premises & Parties", description: "Complete physical address of property, survey numbers, landlord identity, and verified tenant details." },
      { term: "Monthly License Fee (Rent)", description: "Agreed monthly rental amount, payment grace periods, and late fee charges." },
      { term: "Refundable Security Deposit", description: "Interest-free deposit details, deduction conditions for damages, and refund timelines." },
      { term: "Lock-in Period & Notice", description: "Minimum mandatory occupancy duration (e.g. 6 months) during which neither party can terminate without penalty." },
      { term: "Maintenance & Utility Charges", description: "Distribution of society maintenance fees, water bills, electricity consumption, and municipal taxes." },
      { term: "Permitted Use & House Rules", description: "Strict restriction to residential use only; prohibition of commercial activities or illegal acts." },
      { term: "Property Inspection & Damage", description: "Landlord inspection rights with prior notice and tenant liability for structural damage." }
    ],
    exclusions: [
      "Commercial or business operations conducted within residential premises without local municipal approvals.",
      "Sub-letting, assigning, or transferring tenancy rights to third parties without prior written consent from the landlord.",
      "Permanent structural alterations or additions made to the property without landlord permission.",
      "Normal wear and tear resulting from routine daily usage."
    ],
    legalValidity: {
      act: "Transfer of Property Act 1882 & Indian Registration Act 1908",
      overview: "Under Indian law, 11-month Leave & License agreements create a temporary license to occupy rather than a statutory lease tenancy, making landlord repossession simpler under state Rent Control Acts. Agreements exceeding 11 months must be compulsorily registered under Section 17 of the Registration Act, 1908.",
      remedies: [
        "Eviction Directive: Summary proceedings under Rent Control Tribunal for unauthorized holding over.",
        "Deposit Forfeiture: Deducting unpaid rent or physical damage restoration costs from security deposit.",
        "Recovery of Dues: Summary suit under Civil Procedure Code for recovery of outstanding rent."
      ]
    },
    realWorldExamples: [
      {
        title: "Urban Apartment Renting",
        scenario: "A software engineer rented a 2BHK flat in Bengaluru under an 11-month agreement. Upon job transfer, the agreement enabled smooth security deposit refund after verifying electricity zero-dues."
      },
      {
        title: "Corporate Relocation Housing",
        scenario: "A multinational firm leased a luxury apartment in Mumbai for an incoming expat director under a 2-year registered lease agreement."
      }
    ],
    whoNeedsIt: [
      "Property Owners & Landlords renting out residential apartments, flats, or houses.",
      "Tenants seeking legally binding residential proof and clear deposit refund terms.",
      "Property Management Firms handling residential rental portfolios."
    ],
    docsRequired: [
      "Landlord & Tenant Aadhaar Cards / Passports.",
      "Proof of Property Ownership (Sale Deed, Khata Certificate, or Electricity Bill).",
      "Two Independent Witness Identity Proofs."
    ],
    comparison: {
      title: "11-Month Leave & License vs Registered Long-Term Lease",
      versusName: "Registered Long-Term Lease",
      table: [
        { aspect: "Registration Obligation", activeDoc: "Exempt from compulsory registration under Section 17 of Registration Act.", versusDoc: "Mandatory registration at Sub-Registrar office with full stamp duty." },
        { aspect: "Legal Nature", activeDoc: "Grants personal license permission to occupy without transferring property interest.", versusDoc: "Transfers formal interest in real property." },
        { aspect: "Repossession Ease", activeDoc: "Easier for landlords to repossess upon 11-month term expiry.", versusDoc: "Subject to stringent tenancy protection procedures under Rent Act." }
      ]
    },
    procedure: [
      "Step 1: Enter rent, deposit amount, property address, and lock-in period on Founding Legals.",
      "Step 2: Generate draft and review terms with both landlord and tenant.",
      "Step 3: Execute on state-appropriate non-judicial stamp paper or e-stamp paper.",
      "Step 4: Get signatures of Landlord, Tenant, and two independent witnesses."
    ],
    costTable: [
      { service: "Automated Instant Draft", desc: "Legally vetted 11-month Leave & License agreement.", cost: "Starting at ₹50" },
      { service: "Doorstep Stamping & Registration Support", desc: "Physical e-stamp paper & Sub-Registrar filing guidance.", cost: "₹999 – ₹1,999" }
    ],
    termination: {
      reasons: [
        "Term Expiry: Completion of the 11-month agreement period.",
        "Non-Payment of Rent: Failure to pay rent for 2 consecutive months.",
        "Breach of Terms: Sub-letting or causing severe structural property damage."
      ],
      alternatives: [
        "Renewal Deed: Execute a fresh 11-month renewal agreement with revised rent."
      ]
    },
    template: `RESIDENTIAL RENTAL AGREEMENT (LEAVE & LICENSE)

This Rent Agreement is made on [Date] by and between:
LICENSOR (LANDLORD): [Landlord Name], residing at [Address]; AND
LICENSEE (TENANT): [Tenant Name], residing at [Permanent Address].

1. PREMISES: The Licensor grants permission to the Licensee to occupy residential premises located at [Complete Flat/House Address].
2. LICENSE FEE (RENT): Licensee shall pay a monthly license fee of ₹[Amount] on or before the [Day] of each month.
3. SECURITY DEPOSIT: Licensee has deposited ₹[Amount] as an interest-free refundable deposit, refundable upon peaceful handover.
4. TERM & LOCK-IN: Valid for 11 months starting [Start Date] to [End Date]. Mandatory lock-in period of [Months] months.
5. MAINTENANCE: Electricity and water bills shall be paid directly by Licensee according to meter readings.

IN WITNESS WHEREOF, parties have executed this agreement in the presence of witnesses:

Licensor: __________________________            Licensee: __________________________
Witness 1: _________________________            Witness 2: _________________________`,
    faqs: [
      { q: "Why are residential rental agreements made for 11 months in India?", a: "Under Section 17 of the Registration Act, 1908, lease agreements for 12 months or longer must be compulsorily registered. Executing for 11 months avoids mandatory registration fees while remaining legally valid." },
      { q: "Can a landlord evict a tenant during the lock-in period?", a: "During the lock-in period, neither party can terminate without paying penalty rent for the remaining lock-in duration, except in cases of material breach or non-payment." },
      { q: "How is stamp duty calculated on a rental agreement?", a: "Stamp duty depends on state laws. For instance, Karnataka requires ₹100–₹200 stamp paper for 11 months, while Maharashtra calculates 0.25% of total rent plus deposit." },
      { q: "Is a rental agreement sufficient as address proof for a Passport or Bank Account?", a: "Yes, a registered or legally stamped rental agreement accompanied by utility bills is recognized as valid proof of residence across Indian authorities." },
      { q: "Who is responsible for repairs in a rented flat?", a: "Minor routine repairs (faucet leaks, bulb replacements) are borne by the tenant, while major structural repairs (seepage, wall cracks, electrical wiring issues) are landlord responsibilities." }
    ],
    stampDuty: {
      karnataka: "₹100 or ₹200 non-judicial stamp paper for 11-month agreements.",
      maharashtra: "0.25% of (Total Rent during tenure + Refundable Deposit) under Leave & License Rules.",
      delhi: "2% of total average annual rent for 11-month agreements.",
      general: "Executed on state non-judicial stamp paper based on local state stamp rules."
    },
    complexity: "Low",
    requiredForFundraising: false
  },
  {
    id: "commercial-rental-agreement",
    name: "Commercial Rental Agreement",
    category: "Property & Rental",
    tagline: "Comprehensive commercial lease agreement for office spaces, retail outlets, tech parks, warehouses, and industrial units.",
    overview: "A Commercial Rental Agreement (or Commercial Lease Agreement) is a legally binding contract executed under the Transfer of Property Act, 1882 between a commercial property owner (Lessor) and a business tenant (Lessee). It governs the lease of office buildings, tech park suites, retail outlets, or warehouses, detailing commercial rent, GST applicability, escalation clauses, fit-out periods, and signage rights.",
    whyImportant: [
      "Protects Business Premises Continuity: Secures multi-year commercial occupancy with lock-in periods, preventing sudden eviction from prime office locations.",
      "GST Input Tax Credit (ITC) Compliance: Provides official tax invoice documentation enabling corporate tenants to claim 18% GST Input Tax Credit on rent.",
      "Defines Fit-Out & Rent-Free Periods: Allows designated rent-free interior setup windows for office furniture and IT infrastructure installation.",
      "Establishes Signage & Alteration Rights: Grants explicit rights for building facade branding, lobby reception signage, and interior partitioning.",
      "Clear Commercial Escalation Rules: Fixes structured rental escalation (typically 5% annually or 15% every 3 years) to prevent arbitrary rent hikes."
    ],
    whenRequired: [
      "Leasing Startup Offices & Tech Hubs: Securing commercial headquarters or co-working space floors.",
      "Opening Retail Outlets & Franchise Showrooms: Renting commercial space in shopping malls or high-street markets.",
      "Industrial Warehouses & Logistics Units: Leasing storage facilities, factories, or dark stores."
    ],
    types: [
      {
        name: "Gross Commercial Lease Agreement",
        definition: "Lease structure where tenant pays a single flat rent amount, and the landlord pays property taxes, insurance, and building maintenance.",
        useCase: "Co-working spaces, small office suites, and serviced commercial units."
      },
      {
        name: "Net Commercial Lease (Triple Net / NNN)",
        definition: "Lease structure where tenant pays base rent PLUS property taxes, building insurance, and common area maintenance (CAM) charges.",
        useCase: "Independent commercial buildings, retail flagship stores, and industrial warehouses."
      },
      {
        name: "Percentage Retail Lease Agreement",
        definition: "Common in retail malls where tenant pays base rent plus a percentage of gross sales revenue.",
        useCase: "Mall retail outlets, food courts, and luxury brand showrooms."
      }
    ],
    components: [
      { term: "Base Commercial Rent & GST", description: "Agreed monthly base rent, 18% GST breakdown, payment timelines, and TDS under Section 194I." },
      { term: "Escalation Clause", description: "Pre-agreed rental increase percentage (e.g. 15% every 3 years) during the lease term." },
      { term: "Commercial Security Deposit", description: "Refundable deposit equivalent to 3 to 6 months of rent." },
      { term: "Rent-Free Fit-Out Period", description: "Specified window (30 to 90 days) granted for interior customization without rent accrual." },
      { term: "Lock-in Period & Early Exit", description: "Mandatory lock-in duration during which neither party can terminate without paying remaining rent." },
      { term: "Signage & Branding Rights", description: "Explicit allocation of building exterior facade, entrance lobby, and elevator signage rights." },
      { term: "Sub-leasing & Assignment", description: "Conditions governing sub-licensing space to group companies or third-party tenants." },
      { term: "Dispute Resolution & Sub-Registrar Registration", description: "Mandatory registration under Registration Act for leases exceeding 11 months." }
    ],
    exclusions: [
      "Unauthorized structural alterations affecting the building's load-bearing columns or foundation.",
      "Hazardous material storage or illegal industrial activities prohibited by municipal zoning laws.",
      "Sub-letting commercial space without prior written consent of the landlord.",
      "Force Majeure events (floods, earthquakes) disrupting building structural integrity."
    ],
    legalValidity: {
      act: "Transfer of Property Act 1882 & Registration Act 1908",
      overview: "Commercial leases exceeding 11 months must be compulsorily registered with the Sub-Registrar of Assurances under Section 17 of the Registration Act, 1908. Registered commercial leases are fully enforceable in Indian civil courts, granting rights of specific performance and protection against illegal eviction.",
      remedies: [
        "Specific Performance: Court enforcement compelling landlord to maintain lease possession.",
        "Recovery of Rent & CAM Dues: Civil court summary suit for unpaid commercial rent, GST, and electricity dues.",
        "Lock-in Period Rent Damages: Enforcing recovery of full rent for unexpired lock-in period."
      ]
    },
    realWorldExamples: [
      {
        title: "SaaS Enterprise Headquarters Lease",
        scenario: "A growing SaaS firm leased a 10,000 sq ft office floor in Gurugram for 5 years with a 3-year lock-in and 60-day fit-out period, enabling smooth IT setup."
      },
      {
        title: "Retail Mall Showroom Lease",
        scenario: "An apparel brand leased a high-street showroom in Bengaluru under a Percentage Retail Lease, optimizing fixed rental overheads."
      }
    ],
    whoNeedsIt: [
      "Companies, Startups & Corporations leasing office premises, warehouses, or retail space.",
      "Commercial Property Developers & Landlords leasing business real estate.",
      "Franchise Operators opening retail outlets."
    ],
    docsRequired: [
      "Company Incorporation Certificate, Master Data & Board Resolution.",
      "Landlord Property Ownership Documents, Approved Building Plan & Municipal Tax Receipts.",
      "GSTIN Registration Certificates of both Landlord and Tenant."
    ],
    comparison: {
      title: "Commercial Lease vs Residential Rental Agreement",
      versusName: "Residential Rental Agreement",
      table: [
        { aspect: "GST & Tax Deduction", activeDoc: "Attracts 18% GST and 10% TDS under Section 194I.", versusDoc: "GST exempt for residential tenancy." },
        { aspect: "Tenure & Registration", activeDoc: "Typically 3 to 9 years with compulsory Sub-Registrar registration.", versusDoc: "Typically 11 months under unregistered Leave & License." },
        { aspect: "Rent-Free Fit-Out", activeDoc: "Standard 30 to 90 day rent-free interior setup period.", versusDoc: "Not applicable for residential tenancies." }
      ]
    },
    procedure: [
      "Step 1: Finalize commercial lease terms, rent-free fit-out duration, and escalation percentage.",
      "Step 2: Generate customized Commercial Lease Agreement on Founding Legals.",
      "Step 3: Print on state commercial non-judicial stamp paper.",
      "Step 4: Register document at local Sub-Registrar Office if lease tenure exceeds 11 months."
    ],
    costTable: [
      { service: "Automated Instant Generation", desc: "Comprehensive Commercial Lease Agreement template.", cost: "Starting at ₹50" },
      { service: "Custom Commercial Lease Drafting", desc: "Tailored clauses for large tech parks, malls, or multi-floor leases.", cost: "₹4,999 – ₹9,999" }
    ],
    termination: {
      reasons: [
        "Lease Expiry: Expiration of the agreed multi-year lease tenure.",
        "Breach of Commercial Terms: Non-payment of rent/CAM dues for 2 consecutive months.",
        "Lock-in Expiry Exit: Notice served after expiry of initial lock-in period."
      ],
      alternatives: [
        "Lease Renewal / Extension Deed: Fresh commercial lease executed with revised escalation."
      ]
    },
    template: `COMMERCIAL LEASE AGREEMENT

This Commercial Lease Agreement is executed on [Date] by and between:
LESSOR (LANDLORD): [Lessor Entity/Name], having office at [Address] (hereinafter referred to as "Lessor"); AND
LESSEE (TENANT): [Company Name], incorporated under Companies Act, 2013, having CIN [CIN Number] (hereinafter referred to as "Lessee").

1. DEMISED PREMISES: Lessor leases to Lessee commercial premises measuring [Area] sq. ft. located at [Commercial Address].
2. LEASE TERM & LOCK-IN: Valid for a period of [Years] years starting from [Start Date]. Mandatory lock-in period of [Months] months.
3. RENT & GST: Monthly base rent of ₹[Amount] plus applicable 18% GST. TDS shall be deducted under Section 194I.
4. RENTAL ESCALATION: Base rent shall escalate by [15]% every 3 years.
5. FIT-OUT PERIOD: Lessee is granted [30/60] days rent-free period for interior fit-out setup.
6. SECURITY DEPOSIT: Refundable deposit of ₹[Amount] equivalent to [3/6] months rent.

IN WITNESS WHEREOF, Authorized Signatories sign below:

For Lessor: __________________________          For Lessee: __________________________
Witness 1: _________________________            Witness 2: _________________________`,
    faqs: [
      { q: "Is registration compulsory for commercial lease agreements in India?", a: "Yes. Under Section 17 of the Registration Act, 1908, any commercial lease agreement exceeding 11 months must be compulsorily registered with the local Sub-Registrar." },
      { q: "What is TDS applicability on commercial rent in India?", a: "Under Section 194I of the Income Tax Act, corporate tenants must deduct 10% TDS on commercial rent paid to landlords if annual rent exceeds ₹2,40,000." },
      { q: "How is GST applied on commercial property lease?", a: "Commercial property lease attracts 18% GST. Corporate tenants with valid GSTIN can claim Input Tax Credit (ITC) against their outward GST liabilities." },
      { q: "What is a lock-in period in a commercial lease?", a: "A lock-in period is a mandatory duration (e.g. 3 years) during which neither party can terminate the lease. If a tenant exits early, they remain liable to pay rent for the unexpired lock-in months." },
      { q: "What is a rent-free fit-out period?", a: "It is an initial agreed duration (typically 30 to 90 days) allowed to the tenant to construct interior office cabins, wiring, and furniture without paying monthly base rent." }
    ],
    stampDuty: {
      karnataka: "0.5% to 1% of total rent & deposit over lease tenure under Karnataka Stamp Act.",
      maharashtra: "0.25% of total rent plus deposit under Maharashtra Stamp rules.",
      delhi: "2% of total rent payable over lease tenure.",
      general: "Commercial stamp duty rates vary by state and lease duration."
    },
    complexity: "High",
    requiredForFundraising: false
  }
];

// ── SHOWCASE SECTIONS (Divided into 5 exact sections) ──
export interface ShowcaseAgreementItem {
  id: string;
  name: string;
  category: "Hire Someone" | "Protect Your IP" | "Get Investment Ready" | "Commercial Agreements" | "Property & Rental";
  coins: number;
  description: string;
  previewImage: string;
}

export interface ShowcaseSection {
  id: string;
  title: string;
  subtitle: string;
  agreements: ShowcaseAgreementItem[];
}

export const SHOWCASE_SECTIONS: ShowcaseSection[] = [
  {
    id: "hire-someone",
    title: "Hire Someone",
    subtitle: "Employment, consultancy, and founder agreements compliant with Indian labour laws",
    agreements: [
      {
        id: "founders-agreement",
        name: "Founders' Agreement",
        category: "Hire Someone",
        coins: 5,
        description: "An agreement between co-founders detailing individual roles, equity vesting schedules, intellectual property ownership, and exit rules.",
        previewImage: "/agreements/founders-agreement-website.png"
      },
      {
        id: "consultancy-agreement",
        name: "Consultancy Agreement",
        category: "Hire Someone",
        coins: 5,
        description: "Engage independent consultants or advisors with a clear scope of work, deliverables, and payment terms.",
        previewImage: "/agreements/consultancy-agreement-website.png"
      },
      {
        id: "offer-letter",
        name: "Offer Letter",
        category: "Hire Someone",
        coins: 5,
        description: "A formal job offer letter covering compensation structure, probation terms, notice periods, and joining checklists.",
        previewImage: "/agreements/offer-letter-website.png"
      },
      {
        id: "internship-offer-letter",
        name: "Internship Agreement",
        category: "Hire Someone",
        coins: 5,
        description: "An internship offer letter covering role details, duration, confidentiality, and stipend terms.",
        previewImage: "/agreements/internship-offer-letter-website.png"
      },
      {
        id: "service-certificate",
        name: "Service Certificate",
        category: "Hire Someone",
        coins: 5,
        description: "A formal certificate acknowledging an employee's job role, total tenure, and successful completion of duties.",
        previewImage: "/agreements/service-certificate-website.png"
      }
    ]
  },
  {
    id: "protect-ip",
    title: "Protect Your IP",
    subtitle: "Safeguard intellectual property with NDAs, IP assignments, and licensing agreements under Indian IP laws",
    agreements: [
      {
        id: "non-compete-agreement",
        name: "Non-Compete Agreement",
        category: "Protect Your IP",
        coins: 5,
        description: "Prevent employees and business associates from working with competitors or soliciting your clients and team.",
        previewImage: "/agreements/non-compete-agreement-website.png"
      },
      {
        id: "non-disclosure-agreement",
        name: "Mutual Non-Disclosure Agreement (NDA)",
        category: "Protect Your IP",
        coins: 5,
        description: "Protect private business information shared between two parties by preventing unauthorized disclosure.",
        previewImage: "/agreements/non-disclosure-agreement-website.png"
      },
      {
        id: "ip-assignment-agreement",
        name: "IP Assignment Agreement",
        category: "Protect Your IP",
        coins: 5,
        description: "Transfer complete ownership of intellectual property rights, including patents, copyrights, and trademarks, from creator to company.",
        previewImage: "/agreements/ip-assignment-agreement-website.png"
      },
      {
        id: "technology-transfer-agreement",
        name: "Technology Transfer Agreement",
        category: "Protect Your IP",
        coins: 5,
        description: "Transfer or license technical know-how, designs, and proprietary information from one business to another.",
        previewImage: "/agreements/technology-transfer-agreement-website.png"
      },
      {
        id: "software-license-agreement",
        name: "Software License Agreement",
        category: "Protect Your IP",
        coins: 5,
        description: "Grant license to use proprietary software, defining usage rights, restrictions, service level agreements, and liability limits.",
        previewImage: "/agreements/software-license-agreement-website.png"
      },
      {
        id: "trademark-license-agreement",
        name: "Trademark License Agreement",
        category: "Protect Your IP",
        coins: 5,
        description: "Authorize another business to use your registered trademarks, brand names, and logos under controlled terms.",
        previewImage: "/agreements/trademark-license-agreement-website.png"
      }
    ]
  },
  {
    id: "investment-ready",
    title: "Get Investment Ready",
    subtitle: "Term sheets, shareholder agreements, and funding instruments for raising capital under Indian securities law",
    agreements: [
      {
        id: "shareholders-agreement",
        name: "Shareholders' Agreement (SHA)",
        category: "Get Investment Ready",
        coins: 5,
        description: "An agreement governing shareholder rights and protections, detailing board control, share transfer restrictions, and exit options.",
        previewImage: "/agreements/shareholders-agreement-website.png"
      },
      {
        id: "share-subscription-agreement",
        name: "Share Subscription Agreement (SSA)",
        category: "Get Investment Ready",
        coins: 5,
        description: "An agreement for issuing new shares to investors, specifying payment terms, representations, warranties, and closing conditions.",
        previewImage: "/agreements/share-subscription-agreement-website.png"
      },
      {
        id: "convertible-note-agreement",
        name: "Convertible Note Agreement",
        category: "Get Investment Ready",
        coins: 5,
        description: "A debt agreement that converts into company shares at a future funding round, including valuation caps, discounts, and interest terms.",
        previewImage: "/agreements/convertible-note-agreement-website.png"
      }
    ]
  },
  {
    id: "commercial-agreements",
    title: "Commercial Agreements",
    subtitle: "Service, vendor, distribution, and partnership agreements for day-to-day business operations under Indian commercial law",
    agreements: [
      {
        id: "service-agreement",
        name: "Service Agreement",
        category: "Commercial Agreements",
        coins: 5,
        description: "Define scope of work, service levels, payment terms, and legal liabilities between a service provider and a client.",
        previewImage: "/agreements/service-agreement-website.png"
      },
      {
        id: "master-service-agreement",
        name: "Master Service Agreement (MSA)",
        category: "Commercial Agreements",
        coins: 5,
        description: "A master agreement for ongoing client projects, setting general terms for service scope, intellectual property, liability, and confidentiality.",
        previewImage: "/agreements/master-service-agreement-website.png"
      },
      {
        id: "vendor-agreement",
        name: "Vendor Agreement",
        category: "Commercial Agreements",
        coins: 5,
        description: "Engage vendors or suppliers to provide goods or services with defined quality standards, delivery schedules, and payment terms.",
        previewImage: "/agreements/vendor-agreement-website.png"
      },
      {
        id: "distribution-agreement",
        name: "Distribution Agreement",
        category: "Commercial Agreements",
        coins: 5,
        description: "Appoint distributors to sell products in defined territories with clear pricing, minimum purchase targets, and trademark rules.",
        previewImage: "/agreements/distribution-agreement-website.png"
      },
      {
        id: "joint-venture-agreement",
        name: "Joint Venture Agreement",
        category: "Commercial Agreements",
        coins: 5,
        description: "Create a joint venture company or partnership with defined contributions, board control, decision-making rules, and share transfer restrictions.",
        previewImage: "/agreements/joint-venture-agreement-website.png"
      },
      {
        id: "franchise-agreement",
        name: "Franchise Agreement",
        category: "Commercial Agreements",
        coins: 5,
        description: "Grant franchise rights to run a business using your brand, specifying operational standards, royalties, and marketing terms.",
        previewImage: "/agreements/franchise-agreement-website.png"
      },
      {
        id: "supply-agreement",
        name: "Supply Agreement",
        category: "Commercial Agreements",
        coins: 5,
        description: "A contract for purchasing and supplying goods, including order forecasts, pricing adjustments, delivery timelines, and quality warranties.",
        previewImage: "/agreements/supply-agreement-website.png"
      }
    ]
  },
  {
    id: "property-rental",
    title: "Property & Rental Agreements",
    subtitle: "Residential and commercial lease agreements, rent contracts, and leave & license agreements under Indian Rent Control laws",
    agreements: [
      {
        id: "rental-agreement",
        name: "Rental Agreement",
        category: "Property & Rental",
        coins: 5,
        description: "Standard residential rent and leave & license agreement for housing, apartments, and residential properties.",
        previewImage: "/agreements/rental-agreement-website.png"
      },
      {
        id: "commercial-rental-agreement",
        name: "Commercial Rental Agreement",
        category: "Property & Rental",
        coins: 5,
        description: "Commercial lease agreement for office spaces, retail shops, industrial warehouses, and co-working spaces.",
        previewImage: "/agreements/commercial-rental-agreement-website.png"
      }
    ]
  }
];

