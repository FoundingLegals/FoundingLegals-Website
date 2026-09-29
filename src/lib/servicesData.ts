import {
  Rocket, Shield, Briefcase, FileText, Banknote, Scroll, CheckCircle,
  Search, ShieldCheck, Scale, LineChart, FileSignature, Coins,
  TrendingUp, Eye, FileSearch, Building2, Award, Presentation, Zap
} from "lucide-react";

export type ServicePattern = {
  title: string;
  slug: string;
  heroCategory: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  featuresTitle: string;
  features: {
    title: string;
    description: string;
    iconName: string;
  }[];
  benefitsTitle: string;
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText?: string;
  featuresSubtitle?: string;
};

export const services: ServicePattern[] = [
  // --- START ---
  {
    title: "Name Registration",
    slug: "name-registration",
    heroCategory: "Start",
    heroTitle: "Secure Your Perfect Company Name",
    heroDescription: "Verify availability and register your desired company name instantly with the MCA. We ensure your brand identity is protected from day one.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Why register with Founding Legals?",
    features: [
      {
        title: "Instant Name Search",
        description: "Check your desired company name against the MCA database and trademark registries in real-time.",
        iconName: "Search"
      },
      {
        title: "Expert Guidance",
        description: "Get advice on naming conventions and alternatives to ensure quick MCA approval without objections.",
        iconName: "ShieldCheck"
      },
      {
        title: "Seamless Reservation",
        description: "We handle the SPICe+ Part A filing to lock in your name for 20 days while you prepare for incorporation.",
        iconName: "CheckCircle"
      }
    ],
    benefitsTitle: "The benefits of early registration",
    benefits: [
      "Brand Protection. Prevent trademark infringement and passing-off issues by securing legal rights early in your journey.",
      "Digital Asset Security. Ensure your domains and social handles match your legal entity for a cohesive brand presence.",
      "Regulatory Credibility. Build immediate brand equity with a government-recognized entity name that investors trust."
    ],
    ctaTitle: "Ready to lock in your name?",
    ctaDescription: "Start the name reservation process today and take the first step toward launching your startup."
  },
  {
    title: "Private Limited Company Registration",
    slug: "company-incorporation",
    heroCategory: "Start",
    heroTitle: "Incorporate Your Private Limited Company Seamlessly",
    heroDescription: "Fast, expert-assisted company registration in 7-15 days. Get your Certificate of Incorporation, DIN, DSC, PAN, and TAN with zero hassle.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "The smartest way to incorporate",
    features: [
      {
        title: "End-to-End SPICe+ Filing",
        description: "Complete preparation and filing of MCA SPICe+ Part A & B forms, including AGILE-PRO-S for bank and tax registrations.",
        iconName: "FileSignature"
      },
      {
        title: "DSC & DIN Issuance",
        description: "Procurement of Class-3 Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for all directors.",
        iconName: "Shield"
      },
      {
        title: "MOA & AOA Drafting",
        description: "Tailored drafting of the Memorandum of Association (MOA) and Articles of Association (AOA) to support future fundraising.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "Why founders choose us",
    benefits: [
      "100% Online & Frictionless. Streamlined digital process with dedicated CA/CS experts managing ROC query resolutions and approvals.",
      "All-Inclusive Transparent Pricing. Clear pricing models covering stamp duties, government fees, and name reservation with no hidden costs.",
      "Investor-Ready Foundation. Structure built to suit VC funding requirements, complete with complimentary founder agreement drafts."
    ],
    ctaTitle: "Launch your company today",
    ctaDescription: "Join hundreds of founders who trust Founding Legals to establish their legal and operational foundation."
  },
  {
    title: "Limited Liability Partnership Registration",
    slug: "llp-registration",
    heroCategory: "Start",
    heroTitle: "Register Your LLP in 7–10 Days — Fully Online",
    heroDescription: "The preferred structure for professional services, consulting, and tech firms. Combines operational flexibility of a partnership with the corporate protection of limited liability — at a fraction of the compliance cost of a Pvt Ltd.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Everything handled — start to finish",
    features: [
      {
        title: "RUN-LLP Name Approval",
        description: "We reserve your chosen LLP name on the MCA portal and manage objection responses to secure quick MCA approval.",
        iconName: "Search"
      },
      {
        title: "FiLLiP & Form 3 Filing",
        description: "Complete preparation and e-filing of FiLLiP (Form for incorporation of LLP) and Form 3 (LLP Agreement) on the V3 MCA portal.",
        iconName: "FileSignature"
      },
      {
        title: "Customised LLP Agreement",
        description: "Lawyer-drafted LLP Agreement covering profit-sharing ratios, capital contributions, decision-making authority, and partner exit provisions.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "Why professionals prefer LLP",
    benefits: [
      "Personal Asset Protection. Partners carry zero personal liability for the LLP's debts, obligations, or actions of co-partners beyond their agreed contribution.",
      "Audit-Free Below ₹40L. Statutory audit is mandated only if annual turnover exceeds ₹40 lakhs or capital contribution exceeds ₹25 lakhs — keeping costs low for early-stage firms.",
      "Flexible Profit Sharing. Unlike a company, profits are distributed as per the LLP Agreement without mandatory dividend tax, giving partners tax-efficient income options."
    ],
    ctaTitle: "Register your LLP today",
    ctaDescription: "Ideal for CA firms, law practices, architects, consultants, and tech agencies. Get incorporated cleanly in under 10 days."
  },
  {
    title: "One Person Company Registration",
    slug: "opc-registration",
    heroCategory: "Start",
    heroTitle: "Incorporate Solo — Full Control, Full Protection",
    heroDescription: "The OPC is India's most powerful structure for solo entrepreneurs. You get the complete corporate shield of a Private Limited company — limited liability, separate legal identity, and institutional credibility — while maintaining 100% ownership and decision-making authority as the sole director and shareholder.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "What's included in your OPC package",
    features: [
      {
        title: "SPICe+ End-to-End Filing",
        description: "Complete preparation and submission of SPICe+ Part A & B, including AGILE-PRO-S for GST and bank account registrations alongside incorporation.",
        iconName: "FileSignature"
      },
      {
        title: "Nominee Consent & DSC",
        description: "We process the mandatory nominee consent via INC-3, and procure Class-3 DSCs for both the director and the appointed nominee.",
        iconName: "Shield"
      },
      {
        title: "MOA, AOA & PAN/TAN",
        description: "Tailored Memorandum & Articles of Association drafted for a one-person structure, with PAN and TAN applied in the same SPICe+ submission.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "The OPC advantage for solo founders",
    benefits: [
      "Zero Personal Liability. Your savings, home, and personal assets are completely ring-fenced from any company debt, lawsuit, or obligation.",
      "Institutional Credibility. Open bank accounts, sign commercial contracts, and receive payments as a legal company — not a freelancer — unlocking government tenders and corporate clients.",
      "Simple Conversion Path. When your business scales and requires co-founders or investors, an OPC converts seamlessly to a Private Limited Company without losing existing registrations."
    ],
    ctaTitle: "Register your OPC today",
    ctaDescription: "The fastest way for a solo entrepreneur to build with a corporate identity. Get incorporated in 7 days."
  },
  {
    title: "Bank Opening",
    slug: "bank-opening",
    heroCategory: "Start",
    heroTitle: "Corporate Current Account — Open Before You Leave the Office",
    heroDescription: "Your company is incorporated. The next immediate need is a business bank account to accept investor wires, receive client payments, and meet GST filing requirements. We integrate bank account opening directly into the incorporation process via AGILE-PRO-S — eliminating weeks of paperwork and branch visits.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Banking set up the right way",
    features: [
      {
        title: "AGILE-PRO-S Integration",
        description: "Bank account application is embedded directly in the SPICe+ incorporation filing — your account is initiated the moment your CIN is issued by MCA.",
        iconName: "Building2"
      },
      {
        title: "Startup-Friendly Banking Partners",
        description: "Access curated accounts from leading banks — including ICICI, HDFC, Yes Bank, and RBL — offering zero minimum balance, high transaction limits, and NEFT/RTGS from day one.",
        iconName: "Banknote"
      },
      {
        title: "Payment Gateway Ready",
        description: "Accounts are pre-cleared for Razorpay, PayU, and Cashfree onboarding — enabling you to start collecting revenue within 48 hours of receiving your CIN.",
        iconName: "Rocket"
      }
    ],
    benefitsTitle: "Why get your account through Founding Legals",
    benefits: [
      "Zero Branch Visits. Complete video KYC and account activation entirely online for all major Indian metros — no courier of documents required.",
      "Startup Perks Bundle. Unlock cloud credits (AWS, Azure, Google Cloud), Razorpay zero-MDR offers, and accounting software discounts through our banking partners.",
      "Investor Wire Ready. Accounts are pre-configured to receive foreign inward remittances (FIRC) required for RBI FEMA reporting when international angels wire funds."
    ],
    ctaTitle: "Open your corporate account today",
    ctaDescription: "Get your business bank account operational alongside incorporation with zero extra paperwork."
  },
  {
    title: "DPIIT Certification",
    slug: "certifications",
    heroCategory: "Start",
    heroTitle: "Get DPIIT Recognised — Unlock ₹10,000 Crore in Benefits",
    heroDescription: "DPIIT Recognition is not just a badge — it is a legal gateway to an 80% reduction in patent fees, a 3-year income tax holiday under Section 80-IAC, exemption from Angel Tax under Section 56(2)(viib), and eligibility to bid in government tenders reserved exclusively for Startup India entities.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Every certification your startup needs",
    features: [
      {
        title: "DPIIT Recognition Application",
        description: "We manage the end-to-end application on the Startup India portal, including business description, innovation narrative, and document uploads to secure government recognition within 2–4 weeks.",
        iconName: "Award"
      },
      {
        title: "Udyam (MSME) Registration",
        description: "Instant online MSME registration unlocking priority sector lending, 1–2% interest subvention under CGTMSE, and preference in government procurement portals.",
        iconName: "FileText"
      },
      {
        title: "Section 80-IAC & Angel Tax Exemption",
        description: "Expert preparation and filing for the 3-year income tax holiday (Section 80-IAC) and the Angel Tax exemption under Section 56(2)(viib) — protecting your fundraise from arbitrary tax treatment.",
        iconName: "Scale"
      }
    ],
    benefitsTitle: "What DPIIT recognition unlocks",
    benefits: [
      "Patent Fast-Track & 80% Fee Rebate. Startups with DPIIT recognition can fast-track patent applications with an 80% reduction in official fees — making IP protection financially accessible from day one.",
      "Fund of Funds Eligibility. Gain access to SEBI-registered AIFs backed by the ₹10,000 Crore government Fund of Funds specifically channelled toward DPIIT-recognised startups.",
      "Labour & Environment Self-Certification. Enjoy a three-year self-certification window under nine labour laws and three environmental laws — dramatically reducing regulatory inspection burden in early operations."
    ],
    ctaTitle: "Apply for DPIIT Recognition today",
    ctaDescription: "Most founders delay this and lose lakhs in avoidable taxes and patent costs. Don't be one of them."
  },
  {
    title: "GST Filing & Taxation",
    slug: "gst-filing-and-taxation",
    heroCategory: "Start",
    heroTitle: "Never Miss a GST Deadline Again",
    heroDescription: "A single missed GSTR filing generates a cascade of late fees, interest accruals, blocked ITC claims, and potential suspension of your GSTIN — paralyzing your ability to invoice clients and claim refunds. Our managed GST compliance service ensures every return is filed accurately, on time, every month.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Complete GST management on autopilot",
    features: [
      {
        title: "GSTIN Registration in 3–7 Days",
        description: "We prepare and submit your GST registration application with optimised documentation, proactively managing any officer queries to get your GSTIN issued without rejection.",
        iconName: "Banknote"
      },
      {
        title: "GSTR-1, 3B, 9 & 9C Filing",
        description: "Timely filing of monthly outward supplies (GSTR-1), tax liability statements (GSTR-3B), and annual returns (GSTR-9/9C) — with zero manual intervention from your team.",
        iconName: "Scroll"
      },
      {
        title: "ITC Reconciliation & Maximisation",
        description: "Rigorous GSTR-2A/2B reconciliation to identify every eligible Input Tax Credit on vendor invoices — ensuring you are not overpaying tax because of supplier non-compliance.",
        iconName: "Coins"
      }
    ],
    benefitsTitle: "What managed GST compliance means for you",
    benefits: [
      "Audit Defense & Notice Handling. Receive expert CA representation during GST departmental audits, demand notices, and ASMT-10 scrutiny replies — protecting your books from arbitrary assessments.",
      "E-Invoice & E-Way Bill Compliance. Seamless setup and management of e-invoicing (mandatory above ₹5 Cr turnover) and e-way bill generation for all goods shipments above ₹50,000.",
      "Cash Flow Optimisation. Proactive tax planning to time ITC claims and output liability offsets — keeping more working capital in your operating account every month."
    ],
    ctaTitle: "Automate your GST compliance today",
    ctaDescription: "Hand your tax headaches to our certified chartered accountants and focus entirely on growing your business."
  },

  // --- START (FOR FOUNDERS) ---
  {
    title: "Essential Startup Approach",
    slug: "essential-startup-approach",
    heroCategory: "Start",
    heroTitle: "Start Your Company on Solid Legal Ground with Founding Legals",
    heroDescription: "Every great startup begins with the right legal fundamentals. Founding Legals brings co-founder vesting, clean cap table tracking, corporate governance, and statutory filings into one clear, connected approach — so you never have to scramble when investors run due diligence.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "How Founding Legals builds your startup foundation",
    features: [
      {
        title: "Founder Vesting & Equity Protection",
        description: "Set up reverse vesting, cliff periods, and IP assignments between co-founders from day zero — safeguarding company ownership and preventing future disputes.",
        iconName: "ShieldCheck"
      },
      {
        title: "Cap Table & Ownership Clarity",
        description: "Track founder shares, ESOP allocations, and investor dilution clearly, keeping your ownership records transparent and ready for upcoming funding rounds.",
        iconName: "TrendingUp"
      },
      {
        title: "Corporate Governance & Board Minutes",
        description: "Maintain structured records of board meetings, shareholder resolutions, and statutory filings without getting lost in legal jargon or paperwork.",
        iconName: "FileText"
      },
      {
        title: "Encrypted Due Diligence Vault",
        description: "Keep your Certificate of Incorporation, MOA, AOA, PAN, and ROC acknowledgments permanently organized in a secure, audit-ready data room.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "Why founders build on Founding Legals",
    benefits: [
      "Zero Due Diligence Surprises. When angel investors or VCs request your corporate records, share an organized data room in minutes instead of spending weeks tracking down missing documents.",
      "Protect Founder Equity & Control. Formalize agreements and IP assignments early so co-founder departures never jeopardize your company's ownership or code ownership.",
      "Stay Ahead of Indian Regulations. Founding Legals tracks statutory ROC filing deadlines, annual compliance requirements, and director KYC so your company stays in good standing effortlessly."
    ],
    ctaTitle: "Build your startup the right way from Day 1",
    ctaDescription: "Join founders across India who manage their legal and operational foundations with Founding Legals. Plans from ₹658/month.",
    ctaButtonText: "Get Started with Founding Legals →"
  },
  {
    title: "Client Management",
    slug: "client-management",
    heroCategory: "Start",
    heroTitle: "Manage Clients, Contracts & Invoices with Founding Legals",
    heroDescription: "Early-stage founders shouldn't have to juggle scattered client emails, unorganized contracts, and manual payment tracking. Founding Legals gives you a clean workspace to onboard clients, link legally binding agreements, generate professional GST invoices, and keep your cash flow predictable.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Everything your client operations need in one place",
    features: [
      {
        title: "Client Profiles & Organized Records",
        description: "Keep client contacts, billing addresses, GSTIN information, and primary stakeholders organized in a central, searchable directory.",
        iconName: "Users"
      },
      {
        title: "Linked Contracts & Service Agreements",
        description: "Connect executed Master Service Agreements (MSAs), Statements of Work (SOWs), and NDAs directly to each client profile with milestone tracking.",
        iconName: "FileText"
      },
      {
        title: "Compliant GST Invoicing & Payments",
        description: "Create clean, professional digital invoices with automatic tax calculations, payment status tracking, and clear due dates.",
        iconName: "Banknote"
      },
      {
        title: "Revenue & Outstanding Tracking",
        description: "Monitor collected revenue, pending receivables, and overdue invoices at a glance, so cash flow never becomes an afterthought.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "Why founders rely on Founding Legals for client operations",
    benefits: [
      "Never Deliver Work Without a Signed Contract. Founding Legals keeps executed agreements attached to active client deliverables, protecting your business from payment disputes.",
      "Get Paid Faster with Clear Invoicing. Send polished, GST-compliant invoices that look professional to enterprise and startup clients alike, with automatic payment status updates.",
      "A Single Source of Truth for Your Team. No more digging through WhatsApp chats or email threads to find client contracts, amendments, or payment histories."
    ],
    ctaTitle: "Bring clarity to your client relationships",
    ctaDescription: "Manage contracts, billing, and client records seamlessly with Founding Legals. Plans from ₹658/month.",
    ctaButtonText: "Get Started with Founding Legals →"
  },
  {
    title: "Team Management",
    slug: "team-management",
    heroCategory: "Start",
    heroTitle: "Hire, Onboard & Protect Your Team with Founding Legals",
    heroDescription: "Growing your founding team is exciting; navigating offer letters, employment contracts, and IP protection shouldn't slow you down. Founding Legals streamlines employee onboarding, contractor agreements, role records, and policy documentation in one clean founder workspace.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "How Founding Legals simplifies your team operations",
    features: [
      {
        title: "Frictionless Digital Onboarding",
        description: "Welcome new hires with a structured onboarding process that collects identity verification, emergency contacts, and signed paperwork digitally.",
        iconName: "Users"
      },
      {
        title: "Pre-Vetted Employment Contracts & NDAs",
        description: "Issue legally sound offer letters, employment agreements, non-disclosure terms, and clear IP assignment clauses tailored for Indian startups.",
        iconName: "FileSignature"
      },
      {
        title: "Headcount, Roles & Compensation Records",
        description: "Keep track of job titles, departments, probation milestones, and compensation structures in one organized directory without spreadsheet errors.",
        iconName: "Briefcase"
      },
      {
        title: "Workplace Policies & Labour Compliance",
        description: "Access standard startup workplace policies, leave frameworks, and code-of-conduct guidelines aligned with Indian labour standards.",
        iconName: "ShieldCheck"
      }
    ],
    benefitsTitle: "Built around the realities of building an early team",
    benefits: [
      "100% IP Ownership Assigned to Your Startup. Ensure that all code, design assets, and intellectual property developed by founders, employees, and contractors belong strictly to your company.",
      "Fast & Professional Onboarding. Give candidates a smooth, credible joining experience from the day they sign their offer letter.",
      "Audit-Ready Employment Records. Maintain clean, accessible employee files, agreements, and tax declarations ready for due diligence and future growth."
    ],
    ctaTitle: "Scale your team on trusted legal foundations",
    ctaDescription: "Organize offer letters, agreements, and team records in one place with Founding Legals. Plans from ₹658/month.",
    ctaButtonText: "Get Started with Founding Legals →"
  },
  {
    title: "Spend Analysis",
    slug: "spend-analysis",
    heroCategory: "Compliance",
    heroTitle: "Track Cash Burn, Recurring Subscriptions & Runway in Real Time",
    heroDescription: "Every rupee matters when building an early-stage startup. Founding Legals gives founders crystal-clear visibility into company disbursements, highlights recurring software licenses, and accurately models your runway horizon before cash crunches occur.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Complete visibility over your startup treasury",
    features: [
      {
        title: "Disbursement & Vendor Breakdown",
        description: "Categorize monthly operational outlays across vendors, contractors, and cloud hosting with automated expense labeling.",
        iconName: "Eye"
      },
      {
        title: "Zombie Subscription Detection",
        description: "Identify redundant software seats, overlapping tools, and forgotten recurring renewals that unnecessarily deplete your cash.",
        iconName: "Clock"
      },
      {
        title: "Dynamic Runway Horizon Projections",
        description: "Simulate cash runway against expected collections and projected hiring plans to forecast your optimal fundraising window.",
        iconName: "TrendingUp"
      },
      {
        title: "Due Diligence MIS Reports",
        description: "Export clean, investor-ready monthly financial summaries and unit economics packages with one click.",
        iconName: "LineChart"
      }
    ],
    benefitsTitle: "Extend your runway with real-time financial visibility",
    benefits: [
      "Eliminate Unnecessary SaaS Waste. Automatically flag unused software seats, duplicate tools, and recurring charges that silently erode early-stage cash.",
      "Predictable Monthly Burn Rate. Model runway horizons under varying revenue and hiring scenarios to anticipate funding rounds months in advance.",
      "Investor-Ready Expense Records. Group operating expenses into standard accounting buckets (R&D, S&M, G&A) ready for financial due diligence."
    ],
    ctaTitle: "Take control of your burn and runway",
    ctaDescription: "Included in the Founding Legals Pre-Seed Plan. Plans from ₹658/month.",
    ctaButtonText: "Analyse Your Spend →"
  },
  {
    title: "IP Protection",
    slug: "ip-protection",
    heroCategory: "Raise",
    heroTitle: "Your IP Is Your Most Valuable Asset. Protect It.",
    heroDescription: "In the eyes of institutional investors, unprotected intellectual property is a valuation killer. VCs and acquirers run IP searches on Day 1 of due diligence. An unregistered trademark, an unprotected codebase, or a disputed patent can kill a deal mid-negotiation. We help you build an IP moat that survives the most rigorous audit.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Comprehensive IP coverage",
    features: [
      {
        title: "Trademark Registration (TM-A)",
        description: "End-to-end trademark filing across relevant Nice Classification classes covering your brand name, logo, tagline, and product names — with proactive management of TM examiner objections and third-party oppositions.",
        iconName: "ShieldCheck"
      },
      {
        title: "Copyright Registration",
        description: "Registration of your software source code, mobile application UI, website design, technical documentation, and creative works under the Copyright Act, 1957 — establishing a timestamp of original authorship.",
        iconName: "FileSignature"
      },
      {
        title: "IP Strategy & Patent Advisory",
        description: "One-on-one advisory sessions with qualified IP attorneys to identify patentable innovations in your product, draft provisional patent applications, and build a multi-year IP enforcement roadmap.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "The compounding returns of early IP registration",
    benefits: [
      "Valuation Multiplier. Registered IP assets are formally recognised on your balance sheet as intangible assets, directly increasing your company valuation during Series A negotiations and M&A exits.",
      "Legal Enforcement Power. Without a registered trademark or patent, your only recourse against copycats is a costly and uncertain passing-off lawsuit. Registration gives you a Section 135 summary injunction right.",
      "Investor Confidence. Clean IP ownership — with all assignments from co-founders and employees signed — removes a critical blocker during institutional due diligence and significantly accelerates deal closure."
    ],
    ctaTitle: "Start securing your IP today",
    ctaDescription: "Don't let competitors build their business on the foundation of your innovation. Protect it now."
  },
  {
    title: "Document Management",
    slug: "document-management",
    heroCategory: "Compliance",
    heroTitle: "Encrypted Founder Vault for Every Legal, MCA & Corporate Record",
    heroDescription: "Your company's founding documents, investor agreements, and tax receipts should never live across scattered WhatsApp chats and personal Google Drives. Founding Legals gives your startup an encrypted, organized vault built specifically for Indian corporate compliance.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "One encrypted vault for your entire corporate lifecycle",
    features: [
      {
        title: "Structured Corporate Folders",
        description: "Pre-configured taxonomy for incorporation filings, board resolutions, shareholder agreements, trademarks, and vendor contracts.",
        iconName: "FileSearch"
      },
      {
        title: "Instant Global Search & Metadata",
        description: "Locate any certificate, MCA filing acknowledgment, or signed NDA in seconds with intelligent OCR and metadata tagging.",
        iconName: "CheckCircle"
      },
      {
        title: "Secure Investor Data Room Access",
        description: "Share granular, read-only permissions with institutional investors and diligence teams without exposing sensitive files.",
        iconName: "Users"
      },
      {
        title: "Version Control & Audit Logs",
        description: "Track document updates, signatory changes, and access timestamps with full 256-bit AES encryption.",
        iconName: "ShieldCheck"
      }
    ],
    benefitsTitle: "Never scramble during due diligence or audits again",
    benefits: [
      "Frictionless Investor Due Diligence. When an investor requests your corporate records, share an instant, organized data room instead of taking two weeks to compile scattered PDFs.",
      "Bank-Grade Security. All files are encrypted at rest with 256-bit AES encryption and backed up continuously across secure redundant storage.",
      "Permanent MCA & Statutory History. Retain lifetime digital custody of Certificate of Incorporation, MOA, AOA, PAN, TAN, and annual filing receipts in one place."
    ],
    ctaTitle: "Organize your company records today",
    ctaDescription: "Included in the Founding Legals Pre-Seed Plan. Plans from ₹658/month.",
    ctaButtonText: "Manage Documents →"
  },
  {
    title: "Legal Agreements",
    slug: "agreements",
    heroCategory: "Compliance",
    heroTitle: "Draft & Execute Professional Startup Agreements",
    heroDescription: "Understand, draft, and manage the essential legal agreements your startup needs to protect intellectual property, onboard employees, secure capital, and scale commercially. Access state-specific stamp duty guidelines and pre-vetted legal templates.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Complete Legal Document Moat",
    featuresSubtitle: "Everything you need to execute, stamp, and manage professional contracts for your startup.",
    features: [
      {
        title: "21 Core Templates",
        description: "Access a repository of pre-vetted contracts covering founders, investors, employment, vendor sales, and IP assignments.",
        iconName: "FileText"
      },
      {
        title: "Stamp Duty Calculator",
        description: "Find specific, up-to-date stamp duty rates across major Indian states like Karnataka, Maharashtra, and Delhi to ensure court admissibility.",
        iconName: "Scale"
      },
      {
        title: "Integrated E-Signatures",
        description: "Send agreements for Aadhaar-OTP based digital signing to close deals in minutes instead of weeks.",
        iconName: "Zap"
      }
    ],
    benefitsTitle: "Why clean contract hygiene is a strategic asset",
    benefits: [
      "100% Legal Enforceability. Stamped and executed according to Indian state laws, protecting your startup from costly legal deadlocks.",
      "Investor-Ready Foundation. Clean IP assignment and founder vesting agreements remove immediate red flags during VC due diligence.",
      "Commercial Speed. Pre-vetted MSAs and vendor agreements compress corporate procurement times, helping you secure clients faster."
    ],
    ctaTitle: "Draft your agreements today",
    ctaDescription: "Access our pre-vetted legal templates to build, sign, and manage your startup contracts with ease."
  },

  // --- RAISE ---
  {
    title: "Pitch to Investors",
    slug: "pitch-to-investors",
    heroCategory: "Raise",
    heroTitle: "Build a Pitch Deck That Gets Meetings, Not Polite Rejections",
    heroDescription: "The average VC spends 3 minutes and 44 seconds on a pitch deck. In that window, your slides must communicate market size, business model, traction, and team credibility with absolute clarity. We give you the battle-tested frameworks, financial models, and narrative structures used by startups that have collectively raised over ₹500 Crore.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "The complete pitch-readiness suite",
    features: [
      {
        title: "Investor-Grade Deck Templates",
        description: "Slide-by-slide pitch deck structures modelled on frameworks from top YC, Sequoia, and Lightspeed-backed companies — covering problem, solution, TAM, business model, traction, team, and ask.",
        iconName: "Presentation"
      },
      {
        title: "Financial Projections & Models",
        description: "3-year P&L, revenue waterfall, and cohort-based LTV/CAC models built in Excel/Sheets that withstand the most rigorous CFO-level scrutiny during partner meetings.",
        iconName: "LineChart"
      },
      {
        title: "Expert Narrative Review",
        description: "One-on-one review sessions with former startup founders and ex-VC analysts who give detailed, actionable feedback on your story arc, slide design, and financial assumptions.",
        iconName: "Eye"
      }
    ],
    benefitsTitle: "What separates a funded deck from a filed one",
    benefits: [
      "Compelling Market Framing. Structure your TAM, SAM, and SOM with the bottom-up methodology that institutional investors require — not the top-down estimates they immediately discount.",
      "Metric Confidence. Present CAC, LTV, payback period, gross margins, and MoM growth in the precise formats that Seed and Series A investment committees use in their scoring models.",
      "Design That Communicates. Investor-preferred slide layouts that eliminate cognitive load — ensuring your most important data points register in the first 10 seconds of each slide."
    ],
    ctaTitle: "Start building your pitch deck",
    ctaDescription: "Get a framework-first deck that gets you into the partner meeting, not the rejection pile."
  },
  {
    title: "Raise Before a Round",
    slug: "raise-before-a-round",
    heroCategory: "Raise",
    heroTitle: "Close Angel Checks in Days, Not Months — With SAFEs & CCPS",
    heroDescription: "When an angel investor says 'I'm in,' you have a 72-hour window before their conviction fades. Traditional equity rounds take 2–3 months to close. SAFEs and CCPS let you receive capital in days by deferring the valuation conversation to your next priced round — keeping momentum without diluting your cap table prematurely.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Pre-round funding instruments, done right",
    features: [
      {
        title: "iSAFE Document Generation",
        description: "Instant generation of India-standard SAFE (Simple Agreement for Future Equity) documents — legally reviewed, MCA-compliant, and structured to convert cleanly at your next priced Seed or Series A round.",
        iconName: "FileSignature"
      },
      {
        title: "CCPS Structuring & Issuance",
        description: "Expert structuring of Compulsorily Convertible Preference Shares for bridge rounds requiring RBI-compliant foreign investment — with complete PAS-3 and Form FC-GPR filings handled post-allotment.",
        iconName: "Scale"
      },
      {
        title: "Cap Table Modelling",
        description: "Automatic reflection of SAFEs and CCPS on your cap table with conversion scenario modelling — showing founders exactly how the pre-round converts into equity at different future valuations.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "Why unpriced rounds are the smart first capital",
    benefits: [
      "Speed to Capital. Close angel checks in 3–5 days rather than the 60–90 days a traditional priced equity round requires — letting you deploy capital on product and GTM while other founders are still negotiating valuation.",
      "Valuation Preservation. Defer the cap-raising valuation conversation until you have more traction data — enabling you to convert at a higher valuation and dilute less.",
      "Founder Control. Maintain your board majority and full operational autonomy during the pre-seed phase, with no investor veto rights triggered until formal conversion at a future priced round."
    ],
    ctaTitle: "Issue your first SAFE today",
    ctaDescription: "Have an interested angel? Close them within the week — before their interest cools."
  },
  {
    title: "Do a Funding Round",
    slug: "do-a-funding-round",
    heroCategory: "Raise",
    heroTitle: "Execute Your Seed or Series A Round With Zero Missteps",
    heroDescription: "A priced equity round involves a minimum of 12 legal documents, 4 board resolutions, 2 EGM filings, 1 ROC allotment form, and coordination between your lawyers, the investor's lawyers, and the company secretarial team. One error in a SHA clause or a missed PAS-3 deadline can freeze your round mid-close. We run the entire process so you can focus on closing.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Complete round management infrastructure",
    features: [
      {
        title: "Valuation, Cap Table & ESOP Pool",
        description: "Pre-money valuation validation, share price calculation, ESOP pool top-up modelling, and full cap table reconstruction post-round — ensuring every shareholder's dilution is calculated and disclosed correctly.",
        iconName: "LineChart"
      },
      {
        title: "Term Sheet, SHA & SSA Drafting",
        description: "Generation and redlining of the complete documentation suite: Term Sheet, Shareholders Agreement (SHA), Share Subscription Agreement (SSA), and Restated Charter documents — with founder-friendly defaults as the baseline.",
        iconName: "Scroll"
      },
      {
        title: "Board Approvals & ROC Filings",
        description: "Handling of all enabling board resolutions, Extraordinary General Meeting (EGM) notices, and post-allotment ROC filing of Form PAS-3 within the mandated 15-day window — avoiding penalties under Section 42.",
        iconName: "CheckCircle"
      }
    ],
    benefitsTitle: "What flawless round execution delivers",
    benefits: [
      "Institutional-Grade Documentation. SHA terms are benchmarked against IVCA model documents — ensuring your investor rights, anti-dilution provisions, and drag-along clauses are market-standard and defensible in court.",
      "Deal Acceleration. Founders using our managed closing process experience 35–40% faster round completion because pre-prepared documents eliminate the back-and-forth revision cycles that kill momentum.",
      "Cost Efficiency. Achieve the legal quality of a top-tier law firm at 40–60% lower cost — preserving capital that would otherwise flow entirely to legal fees in a process that generates no business value."
    ],
    ctaTitle: "Kick off your funding round",
    ctaDescription: "Have a term sheet in hand? Let us manage the entire close from signature to allotment."
  },
  {
    title: "Finance for Fundraising",
    slug: "finance-for-fundraising",
    heroCategory: "Raise",
    heroTitle: "Make Your Financials Investor-Proof Before Due Diligence Begins",
    heroDescription: "Institutional investors run three parallel tracks during due diligence: legal, technical, and financial. The financial track is the most common deal-killer. Restated financials, missing GST returns, incorrect TDS compliance, inflated revenue recognition, or an invalid valuation report can trigger a repricing demand, a delayed closing, or a full deal withdrawal.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Financial due diligence preparation",
    features: [
      {
        title: "IBBI Registered Valuation Report",
        description: "Mandatory valuation report from a SEBI/IBBI-registered valuer — required by the Companies Act for any private placement and by FEMA regulations for any round involving foreign investment from non-resident investors.",
        iconName: "Award"
      },
      {
        title: "Financial Due Diligence Audit",
        description: "Comprehensive pre-DD audit of your books, revenue recognition policies, related-party transactions, vendor contracts, tax filings, and pending statutory dues — identifying and resolving issues before the investor's CA finds them.",
        iconName: "Search"
      },
      {
        title: "Unit Economics & MIS Package",
        description: "Preparation of investor-ready unit economics (CAC, LTV, payback, gross margin by product) and a 3-year Management Information System (MIS) report package that institutional investment committees specifically request.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "The financial preparation that keeps deals alive",
    benefits: [
      "Deal Protection. Proactively identifying a ₹50 lakh undisclosed tax liability before DD costs ₹2 lakh in advisory. Not catching it costs a term sheet repricing of 20–30% of your company valuation.",
      "FEMA & RBI Compliance. All foreign direct investments require an FIRC, Form FC-GPR filing with RBI within 30 days, and an IBBI valuation — failures attract compounding penalties under the FEMA Act.",
      "Faster DD Completion. Investors' CA teams complete financial due diligence 2–3x faster when provided a pre-prepared, well-organised financial package versus a company that hands over a folder of raw bank statements."
    ],
    ctaTitle: "Get your financials investor-ready",
    ctaDescription: "Don't let a preventable financial issue derail a round you have already won."
  },
  {
    title: "Legal Advice for a Round",
    slug: "legal-advice-for-a-round",
    heroCategory: "Raise",
    heroTitle: "A Term Sheet Without Legal Counsel Is a Liability, Not a Win",
    heroDescription: "VCs negotiate term sheets every week. Most first-time founders see their first term sheet on the day it arrives. The power asymmetry is enormous. A single aggressive clause — a 2x participating liquidation preference, a full-ratchet anti-dilution, or a drag-along without a carve-out — can hand institutional investors control of your exit at the exact moment you should be celebrating.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Founder-first legal representation",
    features: [
      {
        title: "Term Sheet Redlining & Analysis",
        description: "Clause-by-clause review of your term sheet with plain-English explanations of every investor right, preference, and protection — and a redlined version that pushes back on the 5–8 clauses that are almost always negotiable.",
        iconName: "FileSearch"
      },
      {
        title: "Vesting & Lock-in Optimisation",
        description: "Structuring of promoter reverse vesting, cliff periods, good-leaver and bad-leaver definitions, and acceleration provisions so that founders are protected in both acquisition and termination scenarios.",
        iconName: "Shield"
      },
      {
        title: "Active Negotiation Support",
        description: "Direct participation by our senior startup lawyers in negotiation calls with investor counsel — providing real-time guidance on which terms to concede, which to hold, and how to keep the deal alive through disagreements.",
        iconName: "Scale"
      }
    ],
    benefitsTitle: "Why founder-side legal counsel pays for itself",
    benefits: [
      "Board Control Protection. Identify and negotiate out clauses that grant investors veto rights over hiring decisions, budget approvals, or new product launches — preserving the operational independence that makes you effective.",
      "Economic Clarity. Fully model the long-term economic impact of liquidation preferences, participating rights, and anti-dilution provisions across your most likely exit scenarios before you sign.",
      "Deal Preservation. Experienced startup lawyers know which investor positions are genuine dealbreakers and which are opening positions — preventing founders from walking away from good deals over misunderstood standard terms."
    ],
    ctaTitle: "Get your term sheet reviewed",
    ctaDescription: "Have a term sheet? Share it with us today. Initial review is completed within 48 hours."
  },
  {
    title: "Instant Investment",
    slug: "instant-investment",
    heroCategory: "Raise",
    heroTitle: "Angel Ready to Wire? Close the Investment Today.",
    heroDescription: "Investor conviction has a half-life. The longer the gap between 'I'm interested' and signed documents, the greater the chance of a change of heart, a competing deal, or a market shift. Instant Investment compresses the entire investment closing process into a single business day — from document generation to e-signature to share allotment notification.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Same-day investment closing",
    features: [
      {
        title: "Instant SSA Generation",
        description: "Input the investment amount, pre-money valuation, and investor name — our system generates a complete, legally reviewed Share Subscription Agreement (SSA) and board resolution package within minutes.",
        iconName: "Zap"
      },
      {
        title: "Aadhaar-Based E-Signature",
        description: "Both founder and investor execute documents digitally via legally valid Aadhaar OTP-based e-signatures — eliminating physical signing ceremonies, couriered documents, and wet-ink delays entirely.",
        iconName: "FileSignature"
      },
      {
        title: "Automated Post-Investment Filing",
        description: "Post-closing, our system automatically generates share certificates and triggers Form PAS-3 preparation for ROC filing within the statutory 15-day allotment window — ensuring zero compliance gaps.",
        iconName: "Rocket"
      }
    ],
    benefitsTitle: "Why speed at closing is a strategic advantage",
    benefits: [
      "Zero Latency Closing. Close your angel round while investor enthusiasm is at its peak — same-day document execution eliminates the '2-week paperwork delay' that causes more deal drops than any valuation disagreement.",
      "Professional Investor Experience. Angel investors who receive a polished, digitally-managed closing workflow are significantly more likely to make follow-on investments and introduce you to their own networks.",
      "Full Legal Compliance. Speed does not come at the cost of compliance — every Instant Investment closing is fully compliant with Section 42 of the Companies Act, including board approvals and statutory allotment filings."
    ],
    ctaTitle: "Close your investment today",
    ctaDescription: "Have a committed investor? Generate the documents now and close before end of business."
  },
  {
    title: "Payroll Management",
    slug: "payroll-management",
    heroCategory: "Start",
    heroTitle: "Simple, Reliable Payroll Built for Startups by Founding Legals",
    heroDescription: "Paying your team on time and staying compliant shouldn't mean wrestling with complex enterprise software or error-prone spreadsheets. Founding Legals simplifies salary structures, statutory tax calculations, digital payslips, and payroll records in one stress-free monthly workflow.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "How Founding Legals makes payroll easy",
    features: [
      {
        title: "Clean Salary Structure Setup",
        description: "Organize basic pay, house rent allowance (HRA), special allowances, and reimbursements with startup-friendly compensation templates.",
        iconName: "Coins"
      },
      {
        title: "Automatic Deductions & Tax Math",
        description: "Handle TDS tax calculations, Provident Fund (PF), and Professional Tax deductions accurately every month without manual formulas.",
        iconName: "Scale"
      },
      {
        title: "One-Click Digital Payslips",
        description: "Generate clean, professional PDF payslips for your team members that can be downloaded or shared instantly at the end of each payroll cycle.",
        iconName: "FileText"
      },
      {
        title: "Organized Monthly Payroll Records",
        description: "Keep structured records of monthly payouts, tax deductions, and historical compensation data readily accessible for your accountant and audits.",
        iconName: "Banknote"
      }
    ],
    benefitsTitle: "Why founders switch from spreadsheets to Founding Legals",
    benefits: [
      "Stress-Free Monthly Payouts. Calculate salaries and deductions accurately in minutes, ensuring your team is paid on time every month without confusion.",
      "Clean Records for Tax & Audit Season. Keep complete, organized payroll histories that make annual filings, tax returns, and statutory reporting effortless.",
      "A Transparent Experience for Employees. Provide your team with clear, detailed payslips that break down earnings, deductions, and tax withholdings with total clarity."
    ],
    ctaTitle: "Take the headache out of startup payroll",
    ctaDescription: "Run simple, accurate, and organized monthly payroll with Founding Legals. Plans from ₹658/month.",
    ctaButtonText: "Get Started with Founding Legals →"
  },
  {
    title: "Schemes & Grants",
    slug: "schemes-and-grants",
    heroCategory: "Compliance",
    heroTitle: "Discover Non-Dilutive Government Grants & Startup Schemes",
    heroDescription: "Billions in state and central government grant capital go unclaimed every year. Founding Legals curates active non-dilutive funding programs, SISFS grants, state startup policies, and incubation subsidies tailored to your entity type and industry sector.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Find non-dilutive capital that fits your stage",
    features: [
      {
        title: "Intelligent Scheme Discovery",
        description: "Explore 150+ active government schemes, DPIIT incentives, and state-backed grant programs curated for Indian tech startups.",
        iconName: "Award"
      },
      {
        title: "Pre-Screened Eligibility Criteria",
        description: "Instantly check eligibility rules — DPIIT recognition status, sector mandate, team composition, and incorporation age — before applying.",
        iconName: "Search"
      },
      {
        title: "Grant Application Document Vault",
        description: "Organize audited accounts, pitch decks, CA certificates, and milestone projections formatted to government guidelines.",
        iconName: "Building2"
      },
      {
        title: "Deadline & Milestone Tracker",
        description: "Track upcoming grant application cycles, evaluation stages, and disbursement tranches from your founder dashboard.",
        iconName: "FileSignature"
      }
    ],
    benefitsTitle: "Non-dilutive capital to extend your startup runway",
    benefits: [
      "Zero Equity Dilution. Access government subsidies, SISFS grants, state startup seed funds, and incubation grants of ₹10L–₹50L without sacrificing founder equity.",
      "Targeted Application Success. Filter grants by DPIIT recognition status, sector, founding team diversity, and incorporation age to focus only on high-conviction opportunities.",
      "Complete Compliance Alignment. Ensure your entity meets all statutory prerequisites (DPIIT recognition, MSME Udyam, clean MCA filings) required to pass grant scrutiny."
    ],
    ctaTitle: "Explore eligible government grants today",
    ctaDescription: "Included in the Founding Legals Pre-Seed Plan. Plans from ₹658/month.",
    ctaButtonText: "Explore Schemes & Grants →"
  },
  {
    title: "Investor Directory",
    slug: "investor-directory",
    heroCategory: "Start",
    heroTitle: "Connect with 3,000+ Active Investors on Founding Legals",
    heroDescription: "Fundraising begins with finding investors who actually back companies at your stage and in your sector. Founding Legals gives you access to a curated directory of over 3,000 verified angel investors, syndicates, family offices, and venture capital funds actively investing in Indian startups.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "How Founding Legals powers your fundraising search",
    features: [
      {
        title: "3,000+ Curated Investor Profiles",
        description: "Discover active angels, micro-VCs, and institutional funds with detailed investment criteria, verified focus areas, and recent portfolio investments.",
        iconName: "Search"
      },
      {
        title: "Smart Sector & Stage Filters",
        description: "Filter investors by stage (Pre-Seed, Seed, Pre-Series A), sector (Fintech, SaaS, AI, Consumer, Deeptech), and geographic preferences.",
        iconName: "Eye"
      },
      {
        title: "Cheque Size & Lead Investor Insights",
        description: "Identify whether an investor leads rounds or writes angel cheques, understand typical ticket sizes, and tailor your pitch accordingly.",
        iconName: "Building2"
      },
      {
        title: "Outreach & Pipeline Organization",
        description: "Keep your fundraising pipeline organized — track who you’ve reached out to, meetings scheduled, commitments received, and next steps.",
        iconName: "Presentation"
      }
    ],
    benefitsTitle: "Spend your time talking to the right investors",
    benefits: [
      "Target High-Relevance Investors. Avoid pitching funds that do not invest in your industry or stage, focusing your time on angels and VCs most likely to say yes.",
      "Accelerate Your Fundraising Timeline. Move quickly from investor discovery to meaningful conversations with organized data and direct contact intelligence.",
      "From Pitch to Term Sheet on One Platform. Once an investor commits, use Founding Legals legal agreements and closing tools to finalize your investment smoothly."
    ],
    ctaTitle: "Find the right investors for your startup",
    ctaDescription: "Discover active angels and venture funds ready to back your vision with Founding Legals. Plans from ₹658/month.",
    ctaButtonText: "Explore Investor Directory →"
  },
  {
    title: "Marketplace",
    slug: "marketplace",
    heroCategory: "Compliance",
    heroTitle: "Over ₹15 Lakhs in Startup Software Perks & Vetted Expert Services",
    heroDescription: "Building a startup shouldn't require paying full retail price for essential software or risking your business on unvetted service providers. Founding Legals Marketplace unlocks curated cloud credits, SaaS discounts, and pre-negotiated partner services.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Everything to accelerate your growth stack",
    features: [
      {
        title: "Curated Cloud & SaaS Deals",
        description: "Claim verified credits on AWS, Google Cloud, Stripe, HubSpot, Notion, and Mixpanel negotiated exclusively for our founders.",
        iconName: "Zap"
      },
      {
        title: "Vetted Professional Services",
        description: "Connect with pre-screened fractional CFOs, growth marketing specialists, and patent attorneys at negotiated member rates.",
        iconName: "Coins"
      },
      {
        title: "Integrated Partner Workflows",
        description: "Activate partner integrations directly from your Founding Legals dashboard without redundant onboarding forms.",
        iconName: "Briefcase"
      },
      {
        title: "Founder Stack Recommendations",
        description: "Discover battle-tested software stacks categorized by company stage, industry vertical, and operational needs.",
        iconName: "Building2"
      }
    ],
    benefitsTitle: "Preserve early capital while deploying best-in-class software",
    benefits: [
      "Massive Capital Savings. Save up to ₹15 Lakhs in essential software expenses during your first 18 months of company building.",
      "Vetted Quality Assurance. Every tool and partner in our marketplace is thoroughly vetted for startup compatibility and enterprise reliability.",
      "Single Founder Hub. Discover, activate, and manage your software perks and specialist engagements from one central workspace."
    ],
    ctaTitle: "Unlock founder perks and partner discounts",
    ctaDescription: "Included in the Founding Legals Pre-Seed Plan. Plans from ₹658/month.",
    ctaButtonText: "Explore Marketplace →"
  }
];
