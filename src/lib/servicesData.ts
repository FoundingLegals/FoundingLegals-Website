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
    title: "Company Incorporation",
    slug: "company-incorporation",
    heroCategory: "Start",
    heroTitle: "Incorporate Your Startup the Right Way",
    heroDescription: "Fast, error-free company registration. From Private Limited to LLP, get your Certificate of Incorporation, PAN, and TAN in days, not weeks.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "The smartest way to incorporate",
    features: [
      {
        title: "End-to-End Filing",
        description: "We manage SPICe+ forms, AGILE-PRO, and MOA/AOA drafting to ensure complete compliance.",
        iconName: "FileSignature"
      },
      {
        title: "Digital Signatures (DSC)",
        description: "Procurement of Class-3 DSCs for all directors is included in our seamless incorporation package.",
        iconName: "Shield"
      },
      {
        title: "Founder Agreements",
        description: "Complimentary standard founders' agreements to protect equity distribution from day zero.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "Why founders choose us",
    benefits: [
      "Frictionless Experience. Enjoy a 100% online process with bank-grade security and zero physical visits.",
      "Transparent Pricing. Pay exactly what you see with no hidden government fee markups or consultation surprises.",
      "Dedicated Support. Get a startup expert assigned to your incorporation to handle queries and edge cases."
    ],
    ctaTitle: "Launch your company today",
    ctaDescription: "Join hundreds of founders who trust Founding Legals to build their legal foundation."
  },
  {
    title: "Bank Opening",
    slug: "bank-opening",
    heroCategory: "Start",
    heroTitle: "Zero-Friction Corporate Banking",
    heroDescription: "Skip the branch visits. We partner with top-tier banks to open your startup's current account seamlessly alongside incorporation.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Banking made for startups",
    features: [
      {
        title: "Integrated Opening",
        description: "Apply for your bank account directly through the AGILE-PRO form during incorporation.",
        iconName: "Building2"
      },
      {
        title: "Premium Banking Partners",
        description: "Choose from our network of startup-friendly banks offering zero-balance accounts and high limits.",
        iconName: "Banknote"
      },
      {
        title: "API-Ready Accounts",
        description: "Get accounts that easily integrate with your payment gateways and accounting software.",
        iconName: "Rocket"
      }
    ],
    benefitsTitle: "Advantages of our banking partners",
    benefits: [
      "Zero Branch Visits. Complete your KYC and account activation remotely for most major Indian metropolitan cities.",
      "Exclusive Fintech Perks. Access startup-focused credit cards and cloud credits through our banking ecosystem.",
      "Priority Relationship. Benefit from dedicated startup desks at tier-1 banks for faster transaction processing."
    ],
    ctaTitle: "Open your current account",
    ctaDescription: "Streamline your startup finances from day one with our banking integration."
  },
  {
    title: "Certifications",
    slug: "certifications",
    heroCategory: "Start",
    heroTitle: "Unlock Startup India Benefits",
    heroDescription: "Get DPIIT recognition, MSME (Udyam) registration, and ISO certifications to access government grants and tax exemptions.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Essential startup credentials",
    features: [
      {
        title: "DPIIT Recognition",
        description: "We handle the entire application process to get your startup officially recognized by the government of India.",
        iconName: "Award"
      },
      {
        title: "Udyam Registration",
        description: "Quick MSME registration to unlock priority sector lending, lower interest rates, and government tenders.",
        iconName: "FileText"
      },
      {
        title: "Section 80IAC & Angel Tax",
        description: "Expert assistance in applying for 3-year income tax holiday and Section 56(2)(viib) angel tax exemptions.",
        iconName: "Scale"
      }
    ],
    benefitsTitle: "Value of certifications",
    benefits: [
      "IP Support. Fast-track your patent applications with an 80% fee rebate available exclusively to DPIIT-recognized startups.",
      "Capital Access. Gain eligibility for the \u20B910,000 Crore Fund of Funds and other government-backed credit schemes.",
      "Regulatory Relief. Enjoy self-certification benefits under labor and environmental laws for the first three years."
    ],
    ctaTitle: "Claim your startup benefits",
    ctaDescription: "Let us handle the paperwork so you can focus on building your product."
  },
  {
    title: "GST Filing & Taxation",
    slug: "gst-filing-and-taxation",
    heroCategory: "Start",
    heroTitle: "Flawless Tax Compliance",
    heroDescription: "From GST registration to monthly GSTR filings and annual returns. Stay absolutely compliant with India's tax laws.",
    heroImage: "/startup-start-hero.png",
    featuresTitle: "Tax management on autopilot",
    features: [
      {
        title: "Fast-Track Registration",
        description: "Get your GSTIN in days with our optimized application and query-resolution process.",
        iconName: "Banknote"
      },
      {
        title: "Automated Returns",
        description: "Timely filing of GSTR-1, GSTR-3B, and GSTR-9. Never miss a deadline or pay late fees again.",
        iconName: "Scroll"
      },
      {
        title: "Input Tax Credit (ITC)",
        description: "Rigorous reconciliation of GSTR-2A/2B to ensure you claim every rupee of eligible ITC.",
        iconName: "Coins"
      }
    ],
    benefitsTitle: "Peace of mind guaranteed",
    benefits: [
      "Audit Protection. Receive expert representation during GST departmental audits or routine scrutiny notices.",
      "Real-time Visibility. Access a comprehensive dashboard to track tax liabilities and input credits across multiple branches.",
      "Strategic Planning. Optimize your startup's cash flow with proactive tax advice from certified chartered accountants."
    ],
    ctaTitle: "Automate your GST compliance",
    ctaDescription: "Hand over your tax headaches to our chartered accountants today."
  },

  // --- COMPLIANCE ---
  {
    title: "Essential Startup Approach",
    slug: "essential-startup-approach",
    heroCategory: "Compliance",
    heroTitle: "The Complete Startup Compliance Playbook",
    heroDescription: "A comprehensive framework covering everything from board meetings to statutory registers. Never miss an ROC deadline.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Your legal safeguard",
    features: [
      {
        title: "ROC Annual Filings",
        description: "Preparation and filing of AOC-4 and MGT-7/7A to keep the Ministry of Corporate Affairs happy.",
        iconName: "FileSignature"
      },
      {
        title: "Secretarial Compliance",
        description: "Automated reminders and templates for board meetings, AGMs, and maintaining statutory registers.",
        iconName: "CheckCircle"
      },
      {
        title: "Director KYC",
        description: "Seamless processing of DIR-3 KYC for all directors to prevent disqualification.",
        iconName: "Shield"
      }
    ],
    benefitsTitle: "Why regular compliance matters",
    benefits: [
      "Penalty Avoidance. Prevent heavy compounding fees and director disqualifications by staying ahead of ROC filing dates.",
      "Investor Readiness. Maintain your 'Active' status and good standing, a prerequisite for any institutional fundraising.",
      "Smooth Diligence. Simplify the exhaustive due diligence process during Series A rounds with organized secretarial records."
    ],
    ctaTitle: "Audit your startup's compliance",
    ctaDescription: "Ensure your company is 100% compliant with our essential checkup."
  },
  {
    title: "Client Invoice",
    slug: "client-invoice",
    heroCategory: "Compliance",
    heroTitle: "Smart, Compliant Invoicing",
    heroDescription: "Generate professional, GST-compliant e-invoices instantly. Manage receivables, track payments, and sync directly with your filings.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Invoicing built for accuracy",
    features: [
      {
        title: "Custom Branded Invoices",
        description: "Create beautiful, professional invoices that reflect your brand and include all legal requirements.",
        iconName: "FileText"
      },
      {
        title: "E-Invoicing Ready",
        description: "Automatically generate IRN and QR codes compliant with the latest government e-invoicing mandates.",
        iconName: "Rocket"
      },
      {
        title: "Auto-Reconciliation",
        description: "Invoices sync directly with our GST filing system, eliminating manual data entry errors.",
        iconName: "LineChart"
      }
    ],
    benefitsTitle: "Better cash flow management",
    benefits: [
      "Accelerated Receivables. Get paid 2x faster with integrated payment links and automated friendly reminders.",
      "E-Way Bill Sync. Automatically trigger e-way bill generation for physical goods delivery alongside your compliant invoice.",
      "Data Integrity. Eliminate reconciliation errors by syncing your sales data directly with your monthly GST returns."
    ],
    ctaTitle: "Upgrade your invoicing",
    ctaDescription: "Start sending legally compliant invoices in minutes."
  },
  {
    title: "Spend Analysis",
    slug: "spend-analysis",
    heroCategory: "Compliance",
    heroTitle: "Deep Insights Into Your Runway",
    heroDescription: "Track every rupee. AI-powered categorization of expenses to optimize your burn rate and categorize costs for tax deductions.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Financial clarity",
    features: [
      {
        title: "Automated Categorization",
        description: "Connect your bank feed for automatic sorting of expenses into standard accounting buckets.",
        iconName: "Eye"
      },
      {
        title: "TDS Compliance",
        description: "Automatically identify expenses that require Tax Deducted at Source (TDS) and flag them for filing.",
        iconName: "Scale"
      },
      {
        title: "Burn Rate Dashboard",
        description: "Real-time visibility into your cash runway and highest expense categories.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "Make data-driven financial decisions",
    benefits: [
      "Runway Optimization. Identify redundant SaaS subscriptions and hidden banking charges bleeding your monthly runway.",
      "Tax Efficiency. Categorize every expense accurately to ensure maximum eligible deductions during annual IT filings.",
      "Board Transparency. Generate instant, boardroom-ready financial reports that clearly articulate your unit economics."
    ],
    ctaTitle: "Analyze your spend",
    ctaDescription: "Take control of your startup's finances and extend your runway."
  },
  {
    title: "IP Protection",
    slug: "ip-protection",
    heroCategory: "Compliance",
    heroTitle: "Defend Your Intellectual Property",
    heroDescription: "Secure your brand, software, and inventions. End-to-end trademark, copyright, and patent filing by experienced IP attorneys.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Fortify your startup's assets",
    features: [
      {
        title: "Trademark Registration",
        description: "Protect your brand name, logo, and slogans from copycats across all relevant business classes.",
        iconName: "ShieldCheck"
      },
      {
        title: "Copyright Filing",
        description: "Secure the legal rights to your software code, designs, content, and artistic works.",
        iconName: "FileSignature"
      },
      {
        title: "IP Strategy Advisory",
        description: "Consultations with top IP lawyers to build an impenetrable wall around your core technology.",
        iconName: "Briefcase"
      }
    ],
    benefitsTitle: "The ROI of IP protection",
    benefits: [
      "Valuation Growth. Significantly increase your startup's enterprise value by securing proprietary intangible assets.",
      "Enforcement Leverage. Gain the legal firepower to issue takedown notices and defend against infringing competitors.",
      "Market Monopoly. Safeguard your unique selling proposition and prevent market dilution by unauthorized imitators."
    ],
    ctaTitle: "Protect your IP",
    ctaDescription: "Don't let competitors steal your hard work. Secure your rights today."
  },
  {
    title: "Document Management",
    slug: "document-management",
    heroCategory: "Compliance",
    heroTitle: "Your Startup's Data Room",
    heroDescription: "A secure, centralized vault for all your legal, financial, and compliance documents. Always be audit-ready.",
    heroImage: "/startup-compliance-hero.png",
    featuresTitle: "Organized and secure",
    features: [
      {
        title: "Smart Categorization",
        description: "Documents are automatically tagged and routed to HR, Legal, or Finance folders.",
        iconName: "FileSearch"
      },
      {
        title: "Version Control",
        description: "Keep track of signed agreements, amendments, and historical filings in one place.",
        iconName: "Scroll"
      },
      {
        title: "Investor Sharing",
        description: "Generate secure, expiration-gated links to share due-diligence data rooms with VCs.",
        iconName: "Shield"
      }
    ],
    benefitsTitle: "Never lose a critical document again",
    benefits: [
      "Instant Retrieval. Find any incorporation certificate, board resolution, or signed NDA in seconds with smart search.",
      "Military-Grade Security. Rest easy knowing your most sensitive company data is protected by end-to-end encryption.",
      "Efficient Due Diligence. Reduce round-closing times by weeks with a pre-organized data room ready for investor review."
    ],
    ctaTitle: "Organize your documents",
    ctaDescription: "Set up your secure legal data room in just a few clicks."
  },

  // --- RAISE ---
  {
    title: "Pitch to Investors",
    slug: "pitch-to-investors",
    heroCategory: "Raise",
    heroTitle: "Craft a Winning Pitch Deck",
    heroDescription: "Access industry-standard templates, financial models, and pitch reviews from experts who know exactly what VCs want to see.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Perfect your narrative",
    features: [
      {
        title: "Deck Templates",
        description: "High-converting pitch deck structures used by top YC and Sequoia-backed companies.",
        iconName: "Presentation"
      },
      {
        title: "Financial Modeling",
        description: "Robust Excel templates to confidently present your projections, CAC, and LTV metrics.",
        iconName: "LineChart"
      },
      {
        title: "Expert Review",
        description: "Get detailed feedback on narrative flow and slide design from former founders and analysts.",
        iconName: "Eye"
      }
    ],
    benefitsTitle: "Stand out in an investor's inbox",
    benefits: [
      "Compelling Storytelling. Structure a narrative that highlights your unique insights and massive market opportunity.",
      "Data Confidence. Present unit economics and growth projections that withstand the most rigorous analyst scrutiny.",
      "Design Excellence. Save hundreds of design hours with modern, investor-preferred layouts that communicate clearly."
    ],
    ctaTitle: "Prepare your pitch",
    ctaDescription: "Get the insights you need to confidently approach investors."
  },
  {
    title: "Find Investors",
    slug: "find-investors",
    heroCategory: "Raise",
    heroTitle: "Connect With Relevant Capital",
    heroDescription: "Don't cold email blindly. Leverage our curated database to find angels, syndicates, and VCs actively investing in your sector.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Targeted fundraising",
    features: [
      {
        title: "Investor Matching",
        description: "Algorithmically match with investors based on your stage, sector, and ticket size requirements.",
        iconName: "Search"
      },
      {
        title: "Warm Introductions",
        description: "Access our network for potential warm intros to partner-level decision makers.",
        iconName: "Building2"
      },
      {
        title: "CRM for Fundraising",
        description: "Track your outreach, follow-ups, and term sheet status all in one unified pipeline.",
        iconName: "CheckCircle"
      }
    ],
    benefitsTitle: "Maximize your raise velocity",
    benefits: [
      "Strategic Targeting. Avoid 'spray and pray' by pitching only to funds that match your startup's DNA and stage.",
      "Higher Conversion. Increase your meeting-to-term-sheet ratio with warm introductions from our trusted network.",
      "Pipeline Control. Maintain absolute momentum with organized tracking and automated follow-up reminders."
    ],
    ctaTitle: "Discover investors",
    ctaDescription: "Find the strategic partners who will back your vision."
  },
  {
    title: "Raise Before a Round",
    slug: "raise-before-a-round",
    heroCategory: "Raise",
    heroTitle: "Swift Capital via SAFEs & CCPS",
    heroDescription: "Need capital now? Setup agile funding instruments like SAFEs (Simple Agreement for Future Equity) and CCPS without pricing your round.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Agile fundraising tools",
    features: [
      {
        title: "Standardized SAFEs",
        description: "Generate legally bulletproof iSAFE documents instantly to close angel checks fast.",
        iconName: "FileSignature"
      },
      {
        title: "CCPS Structuring",
        description: "Expert guidance on issuing Compulsorily Convertible Preference Shares for bridge rounds.",
        iconName: "Scale"
      },
      {
        title: "Cap Table Update",
        description: "Automatically reflect convertible instruments on your cap table to model future dilution.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "Why raise unpriced rounds?",
    benefits: [
      "Speed to Cash. Close angel checks in days instead of months by deferring complex valuation negotiations.",
      "Low Legal Friction. Dramatically reduce closing costs compared to traditional priced equity rounds.",
      "Founder Control. Secure early capital while preserving your board structure and operational autonomy."
    ],
    ctaTitle: "Issue your first SAFE",
    ctaDescription: "Get the standardized paperwork you need to close rapid capital."
  },
  {
    title: "Do a Funding Round",
    slug: "do-a-funding-round",
    heroCategory: "Raise",
    heroTitle: "Execute Your Equity Round Flawlessly",
    heroDescription: "The complete infrastructure to manage your Seed or Series A. From Term Sheet to SHA to money in the bank.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "End-to-end round management",
    features: [
      {
        title: "Valuation & Cap Table",
        description: "Determine your pre-money valuation, model ESOP pools, and calculate precise share prices.",
        iconName: "LineChart"
      },
      {
        title: "Automated Paperwork",
        description: "Generate Term Sheets, Shareholders Agreements (SHA), and Share Subscription Agreements (SSA).",
        iconName: "Scroll"
      },
      {
        title: "Board Approvals",
        description: "We handle all required board resolutions, EGM notices, and ROC filings (PAS-3) post-allotment.",
        iconName: "CheckCircle"
      }
    ],
    benefitsTitle: "A frictionless closing experience",
    benefits: [
      "Rigorous Standards. Ensure your SHA contains institutionally preferred rights and protection clauses.",
      "Investor Trust. Impress VCs with a completely transparent, digitally-managed closing process.",
      "Cost Efficiency. Save over 60% on traditional law firm fees without compromising on legal quality."
    ],
    ctaTitle: "Start your funding round",
    ctaDescription: "Close your round faster and cleaner with Founding Legals."
  },
  {
    title: "Finance for Fundraising",
    slug: "finance-for-fundraising",
    heroCategory: "Raise",
    heroTitle: "Investor-Ready Financials",
    heroDescription: "Before VCs wire funds, they run financial due diligence. We ensure your books, projections, and valuation reports are bulletproof.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Bulletproof economics",
    features: [
      {
        title: "Registered Valuer Report",
        description: "Obtain mandatory valuation reports from IBBI registered valuers required by the Companies Act & FEMA.",
        iconName: "Award"
      },
      {
        title: "Due Diligence Prep",
        description: "Complete audit of your financials, tax filings, and vendor agreements to clear the DD phase fast.",
        iconName: "Search"
      },
      {
        title: "Unit Economics Review",
        description: "Deep dive into your CAC, LTV, and gross margins to ensure your financial model makes sense.",
        iconName: "TrendingUp"
      }
    ],
    benefitsTitle: "Breeze through due diligence",
    benefits: [
      "Deal Protection. Prevent term sheet withdrawals by proactively resolving hidden financial or tax liabilities.",
      "Expert Representation. Face rigorous institutional audits with the confidence of expert CA support by your side.",
      "FEMA Compliance. Ensure all foreign direct investment (FDI) meets strict RBI reporting and valuation mandates."
    ],
    ctaTitle: "Prepare your financials",
    ctaDescription: "Get your numbers verified and structured for institutional investors."
  },
  {
    title: "Legal Advice for a Round",
    slug: "legal-advice-for-a-round",
    heroCategory: "Raise",
    heroTitle: "Top-Tier Startup Counsel",
    heroDescription: "Don't sign a Term Sheet blindly. Get expert advice from startup lawyers who negotiate against tier-1 VC counsel every day.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Strategic legal defense",
    features: [
      {
        title: "Term Sheet Review",
        description: "We redline investor term sheets to protect founders from aggressive control clauses and drag-along rights.",
        iconName: "FileSearch"
      },
      {
        title: "Founder Vesting Optimization",
        description: "Structure promoter lock-ins and reverse vesting schedules that are fair and industry-standard.",
        iconName: "Shield"
      },
      {
        title: "Negotiation Support",
        description: "Direct assistance during negotiations to help you compromise on the right terms without killing the deal.",
        iconName: "Scale"
      }
    ],
    benefitsTitle: "Why you need specialist counsel",
    benefits: [
      "Control Safeguards. Protect your board seats and operational veto rights from overreaching investor clauses.",
      "Economic Clarity. Fully understand the long-term impact of liquidation preferences and anti-dilution terms.",
      "Fairness Equilibrium. Negotiate founder-friendly terms that keep you motivated without alienating top-tier VCs."
    ],
    ctaTitle: "Talk to a legal expert",
    ctaDescription: "Have an investor term sheet? Let our experts review it today."
  },
  {
    title: "Instant Investment",
    slug: "instant-investment",
    heroCategory: "Raise",
    heroTitle: "Close Checks in 24 Hours",
    heroDescription: "Have an angel investor ready to wire? Use our Instant Investment workflow to generate legally binding documents and close immediately.",
    heroImage: "/startup-raise-hero.png",
    featuresTitle: "Speed is a feature",
    features: [
      {
        title: "Rapid Document Generation",
        description: "Input investment amount and valuation; our system generates a complete SSA instantly.",
        iconName: "Zap"
      },
      {
        title: "E-Sign Integration",
        description: "Execute documents entirely online with Aadhaar-based e-signatures for both founders and investors.",
        iconName: "FileSignature"
      },
      {
        title: "Automated Compliance",
        description: "Post-investment ROC filings and share certificate generation are triggered automatically.",
        iconName: "Rocket"
      }
    ],
    benefitsTitle: "Strike while the iron is hot",
    benefits: [
      "Zero Latency. Close investors exactly when their interest is highest with same-day document execution.",
      "Premium Experience. Provide your angel investors with a seamless, professional digital closing workflow.",
      "Legal Rigor. Maintain absolute compliance with the Companies Act while moving at the speed of light."
    ],
    ctaTitle: "Close your first check",
    ctaDescription: "Experience the fastest way to accept capital in the Indian ecosystem."
  }
];
