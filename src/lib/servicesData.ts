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

  // --- COMPLIANCE ---
  {
    title: "Essential Startup Approach",
    slug: "essential-startup-approach",
    heroCategory: "Compliance",
    heroTitle: "Stay Ready for What Comes Next.",
    heroDescription: "Starting a company is only the beginning. Keeping it organised, compliant, and ready for growth is an ongoing responsibility. The Essential Startup Approach brings important legal, compliance, and corporate tasks into one structured workspace.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Keep your company on track",
    features: [
      {
        title: "Compliance management",
        description: "Stay aware of important corporate and regulatory requirements.",
        iconName: "ShieldCheck"
      },
      {
        title: "Corporate documents",
        description: "Organise essential company records and documentation.",
        iconName: "FileText"
      },
      {
        title: "Legal & secretarial support",
        description: "Manage important corporate actions and filings in a more structured way.",
        iconName: "Briefcase"
      },
      {
        title: "Growth readiness",
        description: "Keep your business prepared for investors, audits, and the next stage of growth.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "Build the right foundation early",
    benefits: [
      "Good company practices should not start when you're preparing for a fundraise. They should start from day one."
    ],
    ctaTitle: "Keep your startup ready",
    ctaDescription: "Plans from ₹658",
    ctaButtonText: "Get Started →"
  },
  {
    title: "Client Management",
    slug: "client-management",
    heroCategory: "Start",
    heroTitle: "Manage Clients. Stay on Top of Every Engagement.",
    heroDescription: "Keep your client relationships, agreements, invoices, and payments organised in one place. Founding Legals helps you manage the complete client journey — from onboarding and contracts to invoicing and payment tracking.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Everything your client operations need",
    features: [
      {
        title: "Client onboarding",
        description: "Keep client information organised and easy to access.",
        iconName: "Users"
      },
      {
        title: "Agreements & contracts",
        description: "Connect important client agreements with the work you deliver.",
        iconName: "FileText"
      },
      {
        title: "Invoices & payments",
        description: "Create invoices, track outstanding payments, and stay on top of collections.",
        iconName: "Banknote"
      },
      {
        title: "One connected workspace",
        description: "Keep your client records, documents, and activities together.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "Why founders use it",
    benefits: [
      "Less time searching through emails and spreadsheets. More time focusing on clients, delivery, and growth."
    ],
    ctaTitle: "Start with Founding Legals",
    ctaDescription: "Bring your client operations into one simple workspace. Plans from ₹658",
    ctaButtonText: "Get Started →"
  },
  {
    title: "Team Management",
    slug: "team-management",
    heroCategory: "Start",
    heroTitle: "Build Your Team With the Right Foundations.",
    heroDescription: "Hiring is exciting. Managing everything that comes with it should not be complicated. Founding Legals helps you manage employee onboarding, agreements, team records, and essential workplace documentation from one place.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Keep your team organised",
    features: [
      {
        title: "Employee onboarding",
        description: "Bring new team members into a clear and structured process.",
        iconName: "Users"
      },
      {
        title: "Employment agreements",
        description: "Create and manage the documents your team needs from day one.",
        iconName: "FileSignature"
      },
      {
        title: "Team records",
        description: "Keep important employee information and documents organised.",
        iconName: "Briefcase"
      },
      {
        title: "Policies & compliance",
        description: "Stay prepared as your team grows and your responsibilities increase.",
        iconName: "ShieldCheck"
      }
    ],
    benefitsTitle: "Made for growing teams",
    benefits: [
      "Whether you're hiring your first employee or building a larger team, Founding Legals gives you one place to manage the essentials."
    ],
    ctaTitle: "Start building better team operations",
    ctaDescription: "Plans from ₹658",
    ctaButtonText: "Set Up Your Team →"
  },
  {
    title: "Spend Analysis",
    slug: "spend-analysis",
    heroCategory: "Compliance",
    heroTitle: "Know Where Your Money Is Going.",
    heroDescription: "Every rupee matters when you're building a startup. Founding Legals helps you understand business spending, identify recurring costs, and keep a closer eye on your cash position.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "See your spending clearly",
    features: [
      {
        title: "Expense visibility",
        description: "Understand where your business money is being spent.",
        iconName: "Eye"
      },
      {
        title: "Recurring expenses",
        description: "Identify subscriptions and ongoing costs that may be easy to overlook.",
        iconName: "Clock"
      },
      {
        title: "Cash & runway awareness",
        description: "Get a clearer view of your current spending and future financial position.",
        iconName: "TrendingUp"
      },
      {
        title: "Financial reporting",
        description: "Keep useful financial information organised for better business decisions.",
        iconName: "LineChart"
      }
    ],
    benefitsTitle: "Make every expense count",
    benefits: [
      "The goal is simple: give founders a clearer picture of their finances before small expenses become big problems."
    ],
    ctaTitle: "Take control of your spending",
    ctaDescription: "Plans from ₹658",
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
    heroTitle: "Keep Every Important Document in One Place.",
    heroDescription: "Your company's documents should never be scattered across emails, drives, and WhatsApp chats. Founding Legals gives you a structured space to store, manage, organise, and access your important business and legal documents.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "One secure document workspace",
    features: [
      {
        title: "Organised document storage",
        description: "Keep company, legal, financial, HR, and business documents together.",
        iconName: "FileSearch"
      },
      {
        title: "Easy access",
        description: "Find the document you need without searching through multiple platforms.",
        iconName: "CheckCircle"
      },
      {
        title: "Document sharing",
        description: "Share the right documents with the right people when required.",
        iconName: "Users"
      },
      {
        title: "Business-ready records",
        description: "Keep your documentation organised for audits, investors, clients, and day-to-day operations.",
        iconName: "ShieldCheck"
      }
    ],
    benefitsTitle: "Stay organised as you grow",
    benefits: [
      "A well-maintained document system saves time today and makes important moments—like fundraising or due diligence—much easier tomorrow."
    ],
    ctaTitle: "Bring your documents together",
    ctaDescription: "Plans from ₹658",
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
    heroTitle: "Payroll Without the Spreadsheet Headache.",
    heroDescription: "Running payroll should be simple, accurate, and easy to track. Founding Legals helps you manage salary structures, deductions, payslips, and payroll records in one organised workflow.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Make payroll easier",
    features: [
      {
        title: "Salary management",
        description: "Keep employee salary structures organised and easy to manage.",
        iconName: "Coins"
      },
      {
        title: "Payroll calculations",
        description: "Handle salary components and applicable deductions with less manual work.",
        iconName: "Scale"
      },
      {
        title: "Digital payslips",
        description: "Generate and manage professional payslips for your team.",
        iconName: "FileText"
      },
      {
        title: "Payroll records",
        description: "Keep your payroll information structured and accessible when you need it.",
        iconName: "Scroll"
      }
    ],
    benefitsTitle: "Built for growing businesses",
    benefits: [
      "Spend less time working through complicated sheets and more time running your business."
    ],
    ctaTitle: "Simplify your payroll",
    ctaDescription: "Get the essential payroll tools your growing team needs. Plans from ₹658",
    ctaButtonText: "Manage Payroll →"
  },
  {
    title: "Schemes & Grants",
    slug: "schemes-and-grants",
    heroCategory: "Compliance",
    heroTitle: "Discover Schemes and Grants Built for Startups.",
    heroDescription: "There may be funding and support available for your business—but finding the right opportunity can take time. Founding Legals helps founders discover relevant government schemes, grants, and startup support programs in one place.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Find opportunities that fit",
    features: [
      {
        title: "Scheme discovery",
        description: "Explore relevant schemes, grants, and startup support programs.",
        iconName: "Award"
      },
      {
        title: "Eligibility information",
        description: "Understand the basic requirements before investing time in an application.",
        iconName: "Search"
      },
      {
        title: "Centralised information",
        description: "Keep opportunities from different programs and sources together.",
        iconName: "Building2"
      },
      {
        title: "Application readiness",
        description: "Stay organised with the information and documents needed for applications.",
        iconName: "FileSignature"
      }
    ],
    benefitsTitle: "Don't miss opportunities meant for your business",
    benefits: [
      "The right scheme can provide valuable support without relying only on traditional fundraising."
    ],
    ctaTitle: "Explore what you're eligible for",
    ctaDescription: "Plans from ₹658",
    ctaButtonText: "Explore Schemes & Grants →"
  },
  {
    title: "Investor Directory",
    slug: "investor-directory",
    heroCategory: "Start",
    heroTitle: "Find Investors Who Fit Your Startup.",
    heroDescription: "Fundraising starts with finding the right people to speak to. Founding Legals gives you a structured investor directory where you can discover investors based on factors such as industry, stage, and investment focus.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Find relevant investors faster",
    features: [
      {
        title: "Investor discovery",
        description: "Explore a structured network of investors and funds.",
        iconName: "Search"
      },
      {
        title: "Smart filtering",
        description: "Narrow your search by sector, stage, and other relevant criteria.",
        iconName: "Eye"
      },
      {
        title: "Investor information",
        description: "Understand an investor's focus before starting the conversation.",
        iconName: "Building2"
      },
      {
        title: "Fundraising workspace",
        description: "Keep your investor outreach and follow-ups more organised.",
        iconName: "Presentation"
      }
    ],
    benefitsTitle: "Spend less time searching",
    benefits: [
      "Instead of working through scattered lists and random contacts, build a more focused investor pipeline."
    ],
    ctaTitle: "Start your fundraising journey",
    ctaDescription: "Find relevant investors and manage your outreach from one place. Plans from ₹658",
    ctaButtonText: "Explore Investors →"
  },
  {
    title: "Marketplace",
    slug: "marketplace",
    heroCategory: "Compliance",
    heroTitle: "The Tools and Experts Your Startup Needs.",
    heroDescription: "Building a startup often means finding dozens of tools, services, and specialists. Founding Legals Marketplace brings useful startup software, offers, and professional services together in one place.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Find what your business needs",
    features: [
      {
        title: "Startup tools & offers",
        description: "Discover useful products and services available to growing businesses.",
        iconName: "Zap"
      },
      {
        title: "Software benefits",
        description: "Find relevant tools and startup-friendly offers in one place.",
        iconName: "Coins"
      },
      {
        title: "Professional services",
        description: "Connect with service providers across legal, finance, compliance, and business support.",
        iconName: "Briefcase"
      },
      {
        title: "One founder workspace",
        description: "Discover useful resources without jumping between multiple platforms.",
        iconName: "Building2"
      }
    ],
    benefitsTitle: "Build smarter without adding unnecessary complexity",
    benefits: [
      "From essential software to professional support, Marketplace helps founders find the resources they need as they grow."
    ],
    ctaTitle: "Get more from your startup ecosystem",
    ctaDescription: "Plans from ₹658",
    ctaButtonText: "Explore Marketplace →"
  }
];
