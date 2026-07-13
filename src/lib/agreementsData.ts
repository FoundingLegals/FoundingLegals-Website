export type AgreementCategory = "Equity & Corporate" | "HR & Employment" | "Commercial & Sales" | "IP & Licensing";
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
}


export const AGREEMENTS_DATABASE: AgreementDetail[] = [
  {
    id: "founders-agreement",
    name: "Founders' Agreement",
    category: "Equity & Corporate",
    tagline: "Secure your startup's future with a professionally drafted Founders' Agreement. Get expert help to align your vision, protect interests, and avoid legal or operational pitfalls from day one.",
    overview: "A founders' agreement is a binding contract between the co-founders of a startup. It outlines the terms and conditions of their partnership, essentially serving as a blueprint for how the business will be run, how decisions will be made, and how equity will be distributed. Think of it as a prenuptial agreement for your business, designed to protect everyone's interests.",
    whyImportant: [
      "Clarity and Expectations: It clearly defines each founder's role, responsibilities, and expected contributions, preventing misunderstandings.",
      "Equity Distribution: It precisely outlines how equity is split and the vesting schedules to ensure long-term alignment.",
      "Decision-Making: It establishes a clear process for making major business decisions and resolving deadlock conflicts.",
      "Dispute Resolution: It provides a mechanism for resolving disagreements, avoiding costly litigation.",
      "IP Assignment: It ensures that all intellectual property created by founders belongs to the company."
    ],
    whenRequired: [
      "Before Formalizing Partnership: As soon as you decide to form a business with co-founders.",
      "Before Seeking Investment: VCs look for this to verify team stability.",
      "Before Developing Products: Ensures early codebase and design IP belongs to the company."
    ],
    components: [
      { term: "Equity Split", description: "Specifies the percentage of ownership shares held by each founder." },
      { term: "Roles and Responsibilities", description: "Defines each founder's daily duties and corporate titles." },
      { term: "Vesting Schedule", description: "Sets the timeline (e.g. 4 years with 1-year cliff) over which shares are earned." },
      { term: "IP Assignment", description: "Clarifies that all work created for the startup belongs to the entity." },
      { term: "Buyback & Exit Terms", description: "Outlines what happens if a founder decides to leave or is terminated." }
    ],
    whoNeedsIt: [
      "Tech and business co-founders starting a business.",
      "Partners launching a new legal entity.",
      "Early-stage teams seeking to define lock-in periods."
    ],
    docsRequired: [
      "Founder Identities: Full legal names, addresses, and PAN cards.",
      "Proposed Equity Split: Agreements on initial ownership ratios.",
      "Roles & Duties Outline: List of key responsibilities."
    ],
    comparison: {
      title: "Founders' Agreement vs Shareholders' Agreement",
      versusName: "Shareholders' Agreement",
      table: [
        { aspect: "Purpose", activeDoc: "Defines roles, equity, and responsibilities of the startup founders.", versusDoc: "Governs the rights and obligations of all shareholders in a company." },
        { aspect: "Parties Involved", activeDoc: "Only the founders of the company.", versusDoc: "All shareholders, including founders, investors, and others." },
        { aspect: "Timing", activeDoc: "Created at the inception or early stages of the startup.", versusDoc: "Usually created after company formation, often during investment rounds." }
      ]
    },
    procedure: [
      "Step 1: Discussion: Co-founders sit down to align on roles and equity split.",
      "Step 2: Legal Drafting: Legal expert drafts clauses covering vesting and IP transfer.",
      "Step 3: Review: All founders meticulously review terms.",
      "Step 4: Execution: Founders formally sign on stamp paper."
    ],
    costTable: [
      { service: "Basic Drafting", desc: "Standard agreement for startups with 2-3 founders.", cost: "₹10,000 – ₹15,000" },
      { service: "Customized Drafting", desc: "Tailored clauses for complex vesting or multi-founder scenarios.", cost: "₹15,000 – ₹25,000" }
    ],
    termination: {
      reasons: [
        "Mutual Consent: All founders agree to end the agreement.",
        "Superseded: Replaced by a Shareholders' Agreement upon external funding."
      ],
      alternatives: [
        "Amendment: Modify specific terms instead of termination.",
        "Buyout: Purchase a departing founder's vested shares."
      ]
    },
    template: `FOUNDERS' AGREEMENT\n\nThis Founders' Agreement ("Agreement") is entered into on [Date], by and among the Founders:\n\nFounder 1: [Full Name], residing at [Address]\nFounder 2: [Full Name], residing at [Address]\n\nARTICLE 1: CAPITAL AND EQUITY\n1.1. Equity Split: Founder 1 shall own [Percentage]% and Founder 2 shall own [Percentage]% of the Company.\n1.2. Vesting: Shares shall vest over a period of 4 years, with a 1-year cliff.\n\nARTICLE 2: ROLES & RESPONSIBILITIES\n2.1. Roles: Founder 1 shall act as CEO and Founder 2 as CTO.\n\nIN WITNESS WHEREOF, the Founders sign below:\n_____________________          _____________________\nFounder 1 Signature            Founder 2 Signature`,
    faqs: [
      { q: "Why do I need a Founders' Agreement?", a: "To clearly define roles, responsibilities, equity distribution, decision-making processes, and dispute resolution mechanisms. It acts as a legally binding roadmap, preventing future conflicts." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Executed as a standard agreement on appropriate state non-judicial stamp paper."
    },
    complexity: "High",
    requiredForFundraising: true
  },
  {
    id: "shareholders-agreement",
    name: "Shareholders' Agreement (SHA)",
    category: "Equity & Corporate",
    tagline: "Secure investor commitments and structure startup governance with a comprehensive Shareholders' Agreement.",
    overview: "A Shareholders' Agreement (SHA) governs the relationship between the company, its founders, and its investors. It details rights like vetoes, right of first refusal, board representation, and drag/tag-along clauses to ensure that corporate actions have appropriate approvals.",
    whyImportant: [
      "Investor Protection: Guarantees minority investors specific vetoes.",
      "Anti-Dilution Rights: Protects investors and founders from dilution in down rounds.",
      "Clear Exit Guidelines: Sets the rules for dragging along minority shareholders during an acquisition."
    ],
    whenRequired: [
      "Onboarding Angel/VC Investors: During a priced equity round.",
      "Adding Strategic Partners: Onboarding partners who take equity stakes."
    ],
    components: [
      { term: "Board Composition", description: "Determines which shareholder groups can appoint directors." },
      { term: "Reserved Matters", description: "List of critical decisions requiring approval from specific investor directors." }
    ],
    whoNeedsIt: [
      "Startups raising capital from angel syndicates or VC funds.",
      "Founders onboarding high-net-worth investors."
    ],
    docsRequired: [
      "Signed Term Sheet: High-level deal parameters.",
      "Cap Table: Current and post-money shareholdings."
    ],
    comparison: {
      title: "Shareholders' Agreement vs Article of Association (AOA)",
      versusName: "Article of Association (AOA)",
      table: [
        { aspect: "Legal Nature", activeDoc: "Private contract binding only the signatory shareholders.", versusDoc: "Public statutory document binding the company and all members under company law." }
      ]
    },
    procedure: [
      "Step 1: Term Sheet Execution: Agree on core valuation and rights.",
      "Step 2: Drafting: Promoter and investor attorneys draft key clauses.",
      "Step 3: Execution: Sign the SHA and pass resolutions to amend AOA to match SHA terms."
    ],
    costTable: [
      { service: "Drafting & Advisory", desc: "Exhaustive SHA drafting matched to term sheet terms.", cost: "₹25,000 – ₹45,000" }
    ],
    termination: {
      reasons: [
        "IPO: The agreement typically terminates automatically upon a successful IPO.",
        "Acquisition: Exit where 100% of the company's shares are purchased."
      ],
      alternatives: [
        "Amending the SHA: Update terms during subsequent funding rounds."
      ]
    },
    template: `SHAREHOLDERS' AGREEMENT (SUMMARY FORM)\n\nThis Shareholders' Agreement is executed on [Date] by and among:\n1. [Company Name];\n2. [Founder Names] ("Promoters");\n3. [Investor Entity Names] ("Investors").\n\nARTICLE 1: BOARD OF DIRECTORS\n1.1. Board Seats: The Board shall consist of [Number] Directors. Promoters shall appoint [Number] Directors. Investors shall appoint [Number] Director(s).\n\nARTICLE 2: RESERVED MATTERS\n2.1. Veto Rights: The Company shall not take any critical actions (e.g. increase share capital) without the affirmative vote of the Investor Director.`,
    faqs: [
      { q: "Is it mandatory to amend the AOA after signing an SHA?", a: "Yes. Under Indian corporate law, in case of a conflict, the AOA prevails over the SHA. Therefore, you must amend the AOA to incorporate the terms of the SHA." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹200 non-judicial stamp paper.",
      general: "₹200 - ₹500 depending on state jurisdiction."
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
    tagline: "Establish clear terms, protect company intellectual property, and define termination boundaries with an Employment Agreement.",
    overview: "An Employment Agreement is a legally binding contract between a company and its employee. It outlines the salary, benefits, working hours, confidentiality obligations, and termination notice periods. Crucially, it acts as a legal shield for the startup by containing explicit clauses ensuring that any work or IP created by the employee belongs entirely to the company.",
    whyImportant: [
      "IP Protection: Ensures all source code and documents created by staff during work hours belong to the startup.",
      "Confidentiality: Restricts employees from sharing proprietary customer data or business secrets with competitors.",
      "Clear Expectations: Outlines clear working hours, CTC breakups, and performance benchmarks.",
      "Termination Guardrails: Prevents unfair termination claims by specifying notice periods, grounds for cause, and severance terms."
    ],
    whenRequired: [
      "Onboarding any full-time or part-time employee in India.",
      "Formally hiring directors or key management personnel (KMPs).",
      "During investor due diligence to verify workforce compliance."
    ],
    components: [
      { term: "Salary Structure (CTC)", description: "Detailed breakdown of basic pay, HRA, bonuses, PF, and tax deductions." },
      { term: "Confidentiality Clause", description: "Restricts sharing of company code, secrets, or client data." },
      { term: "IP Assignment (Work-for-Hire)", description: "Declares that all creative output belongs to the employer." },
      { term: "Notice Period", description: "Duration of notice required for resignation or termination (typically 30-90 days)." },
      { term: "Non-Solicitation", description: "Prevents departing employees from poaching clients or team members." }
    ],
    whoNeedsIt: [
      "Startups onboarding engineers, marketing staff, and operations managers.",
      "Established businesses expanding their workforce.",
      "Founders structuring formal management teams."
    ],
    docsRequired: [
      "Employee Identity: PAN card, Aadhaar card, and permanent address.",
      "Salary Annexure: Gross and net CTC breakup details.",
      "Educational Certificates: Pre-employment academic records."
    ],
    comparison: {
      title: "Employment Agreement vs Offer Letter",
      versusName: "Offer Letter",
      table: [
        { aspect: "Legal Binding", activeDoc: "Exhaustive, fully binding contract containing IP and termination penalties.", versusDoc: "Preliminary document outlining intent; not a complete contract." },
        { aspect: "Detail Level", activeDoc: "High (covers dispute resolution, non-compete, and PF parameters).", versusDoc: "Low (summarizes basic salary, title, and start date)." },
        { aspect: "Enforceability", activeDoc: "Easily enforceable in labor courts.", versusDoc: "Difficult to enforce standalone without the formal contract." }
      ]
    },
    procedure: [
      "Step 1: Draft Offer: Send candidate the offer letter to agree on basic CTC.",
      "Step 2: Draft Agreement: Populate the template with salary annexures and IP clauses.",
      "Step 3: Print / Digitally Sign: Have the employee e-sign or wet-sign on stamp paper.",
      "Step 4: Onboard: File employee records and initiate PF/ESI registrations."
    ],
    costTable: [
      { service: "Standard Employee Drafting", desc: "Compliant with Indian labor laws (State Shops & Ests Acts).", cost: "₹2,500 – ₹4,000" },
      { service: "Executive Director Contract", desc: "Detailed agreement with ESOP schedules and exit terms.", cost: "₹7,500 – ₹12,000" }
    ],
    termination: {
      reasons: [
        "Resignation: Employee provides written notice.",
        "Termination for Cause: Insubordination, fraud, breach of confidentiality, or code of conduct violations.",
        "Redundancy: Company restructures operations due to financial constraints."
      ],
      alternatives: [
        "Performance Improvement Plan (PIP): 30-60 day monitored improvement window prior to termination."
      ]
    },
    template: `EMPLOYMENT AGREEMENT\n\nThis Employment Agreement ("Agreement") is executed on [Date] by and between:\n[Company Name], a Private Limited Company ("Employer"),\nAND:\n[Employee Name], residing at [Address] ("Employee").\n\nARTICLE 1: TITLE & DUTIES\n1.1. Title: The Employee shall serve as [Job Title, e.g., Software Engineer].\n1.2. Duties: Employee agrees to perform all tasks assigned by the reporting manager in a diligent manner.\n\nARTICLE 2: COMPENSATION\n2.1. CTC: The Employee's annual Cost to Company (CTC) shall be ₹[Amount], detailed in Annexure A.\n\nARTICLE 3: INTELLECTUAL PROPERTY & CONFIDENTIALITY\n3.1. Work-for-Hire: Any intellectual property, code, designs, or documentation created by the Employee during the course of employment shall be owned solely by the Employer.\n3.2. Confidentiality: Employee shall not disclose Employer's proprietary data during or after employment.\n\nARTICLE 4: TERMINATION & NOTICE\n4.1. Notice: Either party may terminate this agreement by providing [e.g., 30 days] written notice or salary in lieu of notice.\n4.2. Cause: Employer may terminate employment immediately without notice in case of theft, fraud, or material breach of this contract.\n\nIN WITNESS WHEREOF, the parties sign below:\n_____________________          _____________________\nFor Employer                   Employee Signature`,
    faqs: [
      { q: "Is a non-compete clause post-employment valid in India?", a: "Under Section 27 of the Indian Contract Act, agreements restricting trade are void. Thus, post-employment non-compete clauses are generally unenforceable in India. However, non-compete clauses active *during* the employment tenure are fully valid." },
      { q: "What is the notice period rule in India?", a: "Notice periods typically range from 30 to 90 days. It must be mutual and clearly defined in the contract to prevent sudden exits or terminations without pay." },
      { q: "What is TDS on salary?", a: "Startups must deduct Tax Deducted at Source (TDS) under Section 192 of the Income Tax Act on employee salaries exceeding the tax-free limit, filing quarterly returns." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹100 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "₹100 on non-judicial stamp paper."
    },
    complexity: "Medium",
    requiredForFundraising: false
  },
  {
    id: "consultancy-agreement",
    name: "Consultancy Agreement",
    category: "HR & Employment",
    tagline: "Hire external contractors and freelancers legally while ensuring 100% IP transfer to the company.",
    overview: "A Consultancy Agreement defines terms for hiring independent contractors, advisors, or freelancers. Unlike employment contracts, it clearly states that the contractor is not an employee, and contains strict IP assignment provisions.",
    whyImportant: [
      "IP Assignment: Freelancers own copyright by default; this agreement transfers that ownership to your company.",
      "Employee Disclaimer: Prevents contractors from claiming benefits or permanent status."
    ],
    whenRequired: [
      "Hiring contract developers, copywriters, or growth consultants."
    ],
    components: [
      { term: "Scope of Services", description: "The exact milestones or deliverables expected." },
      { term: "Independent Contractor Status", description: "Specifies no employee benefits apply." }
    ],
    whoNeedsIt: [
      "Tech startups outsourcing software development or marketing."
    ],
    docsRequired: [
      "Freelancer registration / PAN details.",
      "Statement of Work (SOW): Outlining delivery milestones."
    ],
    comparison: {
      title: "Consultancy Agreement vs Employment Contract",
      versusName: "Employment Contract",
      table: [
        { aspect: "Taxation", activeDoc: "10% TDS deducted under Section 194J.", versusDoc: "Standard salary slab TDS under Section 192." }
      ]
    },
    procedure: [
      "Step 1: Define SOW and milestones.",
      "Step 2: Draft agreement ensuring absolute IP assignment.",
      "Step 3: Execute document before sharing database/source code access."
    ],
    costTable: [
      { service: "Drafting", desc: "Contractor agreement with IP transfer clauses.", cost: "₹2,500 – ₹4,500" }
    ],
    termination: {
      reasons: [
        "Convenience: Usually permits either party to exit with 7-14 days notice."
      ],
      alternatives: [
        "Amendment of SOW: Restructure milestones rather than ending relations."
      ]
    },
    template: `CONSULTANCY AGREEMENT\n\nThis Agreement is entered into on [Date] by [Company] and [Consultant].\n\nARTICLE 1: SERVICES & IP\n1.1. Deliverables: Consultant shall perform services detailed in Schedule A. All IP created belongs exclusively to the Company.`,
    faqs: [
      { q: "Do freelancers own the code they write?", a: "Yes, under Indian copyright law, copyright of work created by independent contractors stays with them unless transferred in writing via an IP assignment clause." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "₹100 - ₹200 depending on state of execution."
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
    tagline: "Lock in wholesale pricing and establish delivery quality terms with vendors.",
    overview: "A Vendor Agreement details the pricing, deliverables, quality standards, and terms of service for suppliers providing goods or services.",
    whyImportant: [
      "Saves Costs: Establishes fixed pricing schedules.",
      "Protects Quality: Outlines SLA penalties for poor delivery."
    ],
    whenRequired: [
      "Onboarding critical raw material or cloud infrastructure suppliers."
    ],
    components: [
      { term: "Pricing & Invoicing", description: "Defines cost structures and payment terms (e.g. Net 30)." },
      { term: "Quality SLA", description: "Defines standards the vendor must maintain." }
    ],
    whoNeedsIt: [
      "Manufacturing or e-commerce startups hiring logistics/supplier partners."
    ],
    docsRequired: [
      "Vendor GSTIN.",
      "Service specifications."
    ],
    comparison: {
      title: "Vendor Agreement vs SLA",
      versusName: "Service Level Agreement (SLA)",
      table: [
        { aspect: "Focus", activeDoc: "Covers commercial and payment terms.", versusDoc: "Covers technical performance metrics (e.g. 99.9% uptime)." }
      ]
    },
    procedure: [
      "Step 1: List vendor metrics and costs.",
      "Step 2: Draft agreement including indemnification.",
      "Step 3: Execute on non-judicial stamp paper."
    ],
    costTable: [
      { service: "Drafting", desc: "Custom supplier/vendor contract.", cost: "₹3,500 – ₹6,000" }
    ],
    termination: {
      reasons: [
        "Quality failure: Material breach if SLAs are consistently missed."
      ],
      alternatives: [
        "SLA credits: Deduct penalties from subsequent invoices."
      ]
    },
    template: `VENDOR AGREEMENT\n\nThis Vendor Agreement is between [Company] and [Vendor]. Vendor agrees to supply goods in Annexure A at ₹[Price] per unit, net 30 payment terms.`,
    faqs: [
      { q: "What is an indemnity clause in a vendor agreement?", a: "It holds the vendor liable to pay the company if the vendor's goods cause damages or violate regulations." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹500 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Standard commercial contract rates."
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
    faqs: [
      { q: "Why is a quality control clause required?", a: "Under Indian trademark law, a trademark license without quality controls is considered a 'naked license' and can lead to cancellation of the trademark." }
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
    tagline: "Protect your proprietary ideas, codebases, and client data with an enforceable Non-Disclosure Agreement.",
    overview: "A Non-Disclosure Agreement (NDA) is a legal contract that governs the sharing of confidential information, ensuring recipients keep sensitive data private.",
    whyImportant: [
      "Trade Secret Protection: Prevents vendors from copying your proprietary models.",
      "Clear Remedies: Provides clear legal recourse in case of a data leak."
    ],
    whenRequired: [
      "Sharing proprietary code or designs with contractors/agencies.",
      "Exploring merger or partnership talks."
    ],
    components: [
      { term: "Confidential Information", description: "Explicit list of what is protected." },
      { term: "Exclusions", description: "Information already public or independently discovered is excluded." }
    ],
    whoNeedsIt: [
      "Tech startups sharing source code with contract developers."
    ],
    docsRequired: [
      "Recipient Identity details."
    ],
    comparison: {
      title: "Unilateral NDA vs Mutual NDA",
      versusName: "Mutual NDA",
      table: [
        { aspect: "Information Flow", activeDoc: "Only one party discloses confidential information.", versusDoc: "Both parties disclose confidential information." }
      ]
    },
    procedure: [
      "Step 1: Identify flow direction.",
      "Step 2: Draft scope of protected data.",
      "Step 3: Execute before sharing files."
    ],
    costTable: [
      { service: "Standard Drafting", desc: "Legally vetted unilateral/mutual NDA.", cost: "₹1,499 – ₹2,999" }
    ],
    termination: {
      reasons: [
        "Expiry: Terms expire (typically 3 years)."
      ],
      alternatives: [
        "Addendum: Expand scope of covered data."
      ]
    },
    template: `NON-DISCLOSURE AGREEMENT (MUTUAL)\n\nThis NDA is entered into on [Date] by [Company] and [Recipient]. Both parties agree to hold all shared proprietary files in strict confidence.`,
    faqs: [
      { q: "Is an NDA signed via email valid?", a: "Yes, e-signatures are valid under Section 10A of the IT Act. However, stamping is necessary for court admissibility." }
    ],
    stampDuty: {
      karnataka: "₹200 non-judicial stamp paper.",
      maharashtra: "₹100 non-judicial stamp paper.",
      delhi: "₹100 non-judicial stamp paper.",
      general: "Executed on low-denomination stamp paper."
    },
    complexity: "Low",
    requiredForFundraising: false
  }
];
