// ─────────────────────────────────────────────────────────────
// FoundingLegals — New Service Pages Data
// Authored July 2026 · India market rates surveyed from named vendors
// Covers: 8 category pages + 7 individual ITR service pages
// ─────────────────────────────────────────────────────────────

export interface CompetitorPrice {
  vendor: string;
  price: string;
  note?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SubService {
  name: string;
  href: string;
  description: string;
  price?: string;
}

export interface NewServicePage {
  slug: string;
  type: "category" | "individual";
  badge: string;
  name: string;
  tagline: string;
  description: string[];
  idealFor: string[];
  whatsIncluded: { title: string; description: string }[];
  documentsRequired: string[];
  process: ProcessStep[];
  competitorPricing: CompetitorPrice[];
  memberRateNote: string;
  faqs: { q: string; a: string }[];
  relatedLinks: { name: string; href: string }[];
  subServices?: SubService[];
  seoTitle: string;
  seoDescription: string;
}

export const newServicePages: NewServicePage[] = [

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: Business Incorporation
  // ══════════════════════════════════════════════════
  {
    slug: "business-incorporation",
    type: "category",
    badge: "Business Incorporation",
    name: "Choose the right entity.\nRegister it right the first time.",
    tagline: "From a solo founder's proprietorship to a Series A-ready Private Limited Company — the legal structure you choose shapes your tax liability, fundraising ability, and personal risk exposure for the life of your business.",
    seoTitle: "Business Incorporation & Entity Registration | FoundingLegals",
    seoDescription: "Register your startup as a Pvt Ltd, LLP, OPC, Partnership Firm or Proprietorship in India. Member rates — 50% below market. Expert CA-backed execution.",
    description: [
      "The entity type you incorporate under is not just a formality — it determines whether an investor can hold equity in your company, whether your personal assets are shielded from business liability, how your profits are taxed, and how much annual compliance you'll spend on. A sole proprietorship and a private limited company are not interchangeable; each serves a fundamentally different purpose.",
      "Indian law provides six primary business structures, each suited to a different combination of team size, funding intent, liability appetite, and regulatory context. FoundingLegals CA teams have incorporated over 1,000 entities. Below is an honest comparison of each structure — and what you'll pay at market rate vs. what members pay.",
    ],
    idealFor: [
      "Founders filing their first company and unsure which entity fits their fundraising plan",
      "Bootstrapped businesses that need liability protection without full Pvt Ltd compliance overhead",
      "Co-founder teams needing a structure that allows equal or customised profit/loss sharing",
      "Startups expecting external equity investment within 18 months of incorporation",
      "Professional services firms (law, consulting, architecture) seeking LLP structure",
    ],
    whatsIncluded: [
      { title: "Entity selection consultation", description: "A structured call with a CA to identify the best structure for your funding, tax, and team situation." },
      { title: "Name availability check & reservation", description: "MCA name search and RUN (Reserve Unique Name) application to secure your preferred company name." },
      { title: "DSC and DIN procurement", description: "Digital Signature Certificates for all directors and Director Identification Numbers where required." },
      { title: "Drafting of MOA/AOA or LLP Agreement", description: "Professionally drafted constitutional documents aligned to your business model and shareholding structure." },
      { title: "Government filing and tracking", description: "SPICe+, INC-32, or FiLLiP submission on the MCA portal and status tracking until Certificate of Incorporation is issued." },
      { title: "PAN and TAN registration", description: "Automatic PAN and TAN issued as part of SPICe+ — tracked and confirmed by our team." },
      { title: "Bank account opening guidance", description: "Introduction to partner banking relationships for startup accounts with instant activation and zero-balance options." },
    ],
    documentsRequired: [
      "PAN card of all directors/partners/proprietor",
      "Aadhaar card of all directors/partners/proprietor",
      "Passport-size photographs (white background)",
      "Proof of registered office address (utility bill not older than 2 months)",
      "No-objection certificate (NOC) from the premises owner",
      "Bank statement or passport (for address proof, where Aadhaar address differs)",
    ],
    process: [
      { title: "Consultation & structure selection", description: "We review your business model, team composition, fundraising intent, and tax preferences to recommend the optimal entity type." },
      { title: "Document collection & DSC", description: "You upload identity and address proofs through our secure vault. DSC tokens are procured and registered with MCA." },
      { title: "Name reservation", description: "We check name availability, suggest compliant alternatives where needed, and file for name reservation with MCA." },
      { title: "Drafting constitutional documents", description: "MOA, AOA, or LLP Agreement is drafted based on your shareholding, director roles, and operational clauses." },
      { title: "Government filing", description: "The complete incorporation application is filed with MCA. Government processing time is typically 5–10 working days." },
      { title: "Incorporation certificate issued", description: "You receive the Certificate of Incorporation, PAN, TAN, and optional GST registration initiation — all in one package." },
    ],
    competitorPricing: [
     
      { vendor: "IndiaFilings", price: "₹2,899–₹15,000", note: "Per-service, no bundling" },
      { vendor: "LegalWiz", price: "₹2,999–₹3,999", note: "Limited entity types" },
      { vendor: "RegisterEase", price: "₹1,499", note: "Pvt Ltd only" },
      { vendor: "Independent CA (market rate)", price: "₹8,000–₹25,000", note: "All-in, varies by city" },
    ],
    memberRateNote: "FoundingLegals members pay 50% of the prevailing CA market rate on all incorporation services. Government fees (stamp duty, MCA fee, GST Dept. fee) are statutory, non-negotiable, and additional across all platforms.",
    faqs: [
      { q: "How long does a Pvt Ltd incorporation take?", a: "On average, 7–12 working days from the date all documents are received. The MCA portal typically issues the Certificate of Incorporation within this window. Rush processing is not officially available; delays beyond this window are usually caused by name rejection or document deficiencies." },
      { q: "Is a registered office address mandatory before incorporation?", a: "Yes. The MCA requires a valid Indian address at the time of filing. If you don't have an office yet, a virtual address service can be used temporarily — many co-working spaces in India provide compliant registered office addresses." },
      { q: "Can I convert my proprietorship to a Pvt Ltd later?", a: "Yes, but the process involves fresh incorporation and transfer of assets and liabilities. It is cleaner — and cheaper in compliance cost — to incorporate the right entity from the start." },
      { q: "Do I need a minimum paid-up capital?", a: "No. Since 2015, the Companies Act 2013 has removed the minimum paid-up capital requirement for private limited companies. ₹1 is the legal minimum, though most companies start with ₹1 lakh or more for practical reasons." },
    ],
    relatedLinks: [
      { name: "Pvt Ltd Company Incorporation", href: "/services/CAservices/company-incorporation" },
      { name: "LLP Registration", href: "/services/CAservices/llp-registration" },
      { name: "OPC Registration", href: "/services/CAservices/opc-registration" },
      { name: "Partnership Firm Registration", href: "/services/CAservices/partnership-firm-registration" },
      { name: "Sole Proprietorship", href: "/services/CAservices/sole-proprietorship-registration" },
    ],
    subServices: [
      { name: "Pvt Ltd Company Incorporation", href: "/services/CAservices/company-incorporation", description: "The most investor-friendly structure. Enables equity funding, ESOPs, and unlimited shareholder scalability.", price: "Market ₹999–₹23,000 · Member Rate" },
      { name: "LLP Registration", href: "/services/CAservices/llp-registration", description: "Professional firms and co-founder teams who want liability protection without the full weight of corporate compliance.", price: "Market ₹5,000–₹20,000 · Member Rate" },
      { name: "OPC Registration", href: "/services/CAservices/opc-registration", description: "A one-person company with the full liability shield of corporate structure — ideal for solo founders not ready to take on co-founders.", price: "Market ₹5,000–₹15,000 · Member Rate" },
      { name: "Partnership Firm Registration", href: "/services/CAservices/partnership-firm-registration", description: "Simple, flexible structure for professional services, trading, and family businesses. Partners share profits under a registered deed.", price: "Market ₹999–₹5,000 · Member Rate" },
      { name: "Sole Proprietorship Registration", href: "/services/CAservices/sole-proprietorship-registration", description: "The fastest, lowest-cost way to open a business bank account and start trading legally under your own name.", price: "Market ₹499–₹1,999 · Member Rate" },
    ],
  },

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: Licenses & Registrations
  // ══════════════════════════════════════════════════
  {
    slug: "licenses-registrations",
    type: "category",
    badge: "Licenses & Registrations",
    name: "Stay licensed.\nStay operational.",
    tagline: "Business licenses are not optional paperwork. They're the permissions that keep your operations legally uninterrupted — and their absence is one of the most common reasons young businesses face raids, penalties, and bank account holds.",
    seoTitle: "Business Licenses & Registrations in India | FoundingLegals",
    seoDescription: "GST registration, MSME/UDYAM, FSSAI, IEC, Labour License — get every business license you need at 50% of market rate. Expert CA execution.",
    description: [
      "Regulatory compliance begins long before your first invoice. Depending on your business type, sector, and scale, you will need anywhere from one to seven registrations before you can legally operate, hire staff, export goods, or serve food to the public. Missing any one of these isn't a paperwork oversight — it's an actionable violation.",
      "FoundingLegals handles every business registration your company is likely to need in its first three years: GST, MSME/UDYAM, IEC for exporters, FSSAI food licenses for F&B businesses, labour licensing, and professional tax registration. Each one is handled by CAs and compliance specialists who have done this hundreds of times.",
    ],
    idealFor: [
      "Newly incorporated businesses that need GST registration to start invoicing",
      "Manufacturers, traders, and exporters requiring IEC for cross-border commerce",
      "Food & beverage businesses needing FSSAI license before they open",
      "MSMEs seeking UDYAM registration to access government schemes and priority lending",
      "Businesses with staff on payroll requiring Professional Tax registration",
    ],
    whatsIncluded: [
      { title: "Eligibility assessment", description: "We review your business type, turnover, and sector to confirm which registrations are mandatory vs. optional for your specific situation." },
      { title: "Application preparation & filing", description: "All forms, portal registrations, and document submissions are handled by our CA team — including follow-up on queries from the department." },
      { title: "Certificate delivery", description: "Registered certificates and acknowledgments are delivered to your FoundingLegals vault, organised by registration type and renewal date." },
      { title: "Renewal alerts", description: "We track and alert you before FSSAI, labour license, and other time-bound registrations expire — so you never lapse." },
    ],
    documentsRequired: [
      "PAN card of the business entity and authorised signatory",
      "Certificate of Incorporation / Partnership Deed / GST certificate (as applicable)",
      "Aadhaar card of the authorised signatory (for Aadhaar-based authentication)",
      "Proof of business place (electricity bill, rent agreement, or NOC from owner)",
      "Bank account statement / cancelled cheque (for certain registrations)",
      "FSSAI: Food safety management plan, list of food products, equipment list",
      "IEC: AD Code letter from your bank (for export-linked registrations)",
    ],
    process: [
      { title: "Requirement mapping", description: "We identify all registrations your business needs based on entity type, sector, state, and projected turnover." },
      { title: "Document collection", description: "Secure document upload through your FoundingLegals vault. Our team reviews and flags any gaps before filing." },
      { title: "Application filing", description: "We file with the relevant department — GST portal, MSME portal, DGFT, FSSAI, state labour department, or professional tax authority." },
      { title: "Query handling", description: "If the department raises a query or requests additional documents, we handle the response without requiring you to engage the portal directly." },
      { title: "Certificate issuance & storage", description: "All certificates are stored in your document vault with expiry dates tracked. You receive a consolidated registration summary." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹499–₹10,000", note: "Per registration, varies by type" },
      { vendor: "RegisterKaro", price: "₹999–₹1,000", note: "GST and Prof. Tax only" },
      { vendor: "IndiaFilings", price: "₹1,499–₹1,999", note: "GST and FSSAI state only" },
      { vendor: "LegalWiz", price: "₹1,999", note: "GST registration only" },
      { vendor: "Independent CA", price: "₹2,000–₹15,000", note: "Per registration, city-dependent" },
    ],
    memberRateNote: "Members pay 50% of the prevailing market rate across all license and registration services. Government fees (MCA fee, FSSAI government fee, GST Dept.) are statutory and additional across all platforms.",
    faqs: [
      { q: "Is GST registration mandatory for all businesses?", a: "No. GST registration is mandatory only if your aggregate turnover exceeds ₹20 lakh (₹10 lakh for special category states) in a financial year, or if you make inter-state supplies, sell on e-commerce, or fall under specific categories. Voluntary registration is possible and often advisable for B2B businesses." },
      { q: "What is the difference between UDYAM and MSME registration?", a: "UDYAM (on the udyamregistration.gov.in portal) has completely replaced the old MSME/Udyog Aadhaar system. There is only one valid registration now — Udyam. Old Udyog Aadhaar certificates should be migrated. The classification criteria (investment + turnover) were also updated in 2020." },
      { q: "How long does FSSAI registration take?", a: "Basic registration (FSSAI registration for turnover <₹12 lakh) takes 7–10 days. State license (₹12 lakh–₹20 crore) takes 30–60 days. Central license (>₹20 crore or multi-state operations) takes 60–90 days. Food businesses cannot legally operate without the appropriate license at each tier." },
      { q: "Can I get an IEC without a firm registered?", a: "No. The Importer Exporter Code (IEC) is linked to a PAN and requires a legally registered business entity or individual with a valid PAN and bank account in the business name. A proprietorship (with your personal PAN) is the minimum requirement." },
    ],
    relatedLinks: [
      { name: "GST Return Filing", href: "/services/CAservices/gst-indirect-tax" },
      { name: "Business Incorporation", href: "/services/CAservices/business-incorporation" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
    ],
    subServices: [
      { name: "GST Registration", href: "/services/CAservices/gst-registration", description: "Mandatory for most businesses above ₹20L turnover. Required before raising a single GST-compliant invoice.", price: "Market ₹499–₹1,999 · Member Rate" },
      { name: "UDYAM / MSME Registration", href: "/services/CAservices/msme-registration", description: "Unlocks priority lending, lower interest rates, government scheme eligibility, and trademark fee discounts.", price: "Market ₹999–₹3,499 · Member Rate" },
      { name: "IEC (Import Export Code)", href: "/services/CAservices/iec-registration", description: "Mandatory for any business importing or exporting goods from India. Issued by DGFT — lifetime validity.", price: "Market ₹999 · Member Rate" },
      { name: "Labour License", href: "/services/CAservices/labour-license", description: "Required under various state and central labour laws for businesses engaging contract labour.", price: "Market ₹1,500 · Member Rate" },
      { name: "FSSAI Food License (State)", href: "/services/CAservices/fssai-state-license", description: "For food businesses with turnover between ₹12 lakh and ₹20 crore operating within one state.", price: "Market ₹1,999 · Member Rate" },
      { name: "FSSAI Food License (Central)", href: "/services/CAservices/fssai-central-license", description: "For large food businesses, multi-state operations, and importers/exporters of food products.", price: "Market ₹10,000 · Member Rate" },
    ],
  },

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: Intellectual Property
  // ══════════════════════════════════════════════════
  {
    slug: "intellectual-property",
    type: "category",
    badge: "Intellectual Property",
    name: "Your brand is an asset.\nProtect it before someone else does.",
    tagline: "A trademark is the legal mechanism that prevents a competitor from trading under your name, your logo, or your tagline. It's not a luxury reserved for large corporations — it's a founder-stage decision that becomes exponentially harder to correct the longer you delay it.",
    seoTitle: "Trademark & Intellectual Property Services India | FoundingLegals",
    seoDescription: "Trademark registration, copyright, and IP protection for Indian startups. Member rates — 50% below market. Experienced IP attorneys and TM agents.",
    description: [
      "Building a brand costs time, money, and creative energy. A trademark registration is the only mechanism under Indian law that gives you the exclusive right to use that name, logo, or mark in connection with your goods or services — and to stop others from doing so. Without it, you have no legal standing to object when a competitor adopts a confusingly similar identity.",
      "The Trademarks Act 1999 grants registration rights to the first applicant with a valid mark — not necessarily to the business that started using it first. Delay has a concrete cost: the longer you wait, the more likely someone else files first, and the more expensive the dispute resolution becomes.",
    ],
    idealFor: [
      "Startups at any stage looking to protect their brand name and logo before scaling marketing spend",
      "E-commerce sellers on Amazon, Flipkart, or their own store who need brand registry eligibility",
      "App and SaaS founders protecting their product name from clone products",
      "Service businesses (education, health, F&B) protecting their trading names in target geographies",
      "Businesses preparing for fundraising who need IP registered as a company asset",
    ],
    whatsIncluded: [
      { title: "Trademark search & viability report", description: "Full search across the Indian trademark registry to identify conflicts, similar marks, and recommended classes before application." },
      { title: "Class identification", description: "We identify the correct Nice Classification class(es) for your business — filing in the wrong class offers no protection." },
      { title: "Application drafting & filing", description: "TM-A application prepared and filed on the IP India portal by our registered Trade Mark Agents." },
      { title: "Filing acknowledgment & priority date", description: "You receive the application number immediately on filing — this establishes your priority date regardless of examination time." },
      { title: "Examination response", description: "If the examiner raises objections, we draft and file a detailed response at no additional cost under the member rate." },
      { title: "Registration certificate", description: "Delivered to your vault on grant. Full trademark lifecycle managed — opposition monitoring, renewal alerts, and watch service." },
    ],
    documentsRequired: [
      "Logo file (high-resolution, PNG or SVG, white background)",
      "Certificate of Incorporation / partnership deed / MSME certificate",
      "PAN card of the applicant entity",
      "Authorisation letter / Power of Attorney to the agent (we prepare this)",
      "MSME/UDYAM certificate (if claiming startup/MSME fee — ₹4,500 instead of ₹9,000)",
    ],
    process: [
      { title: "Brand audit & class selection", description: "We review your brand assets and business description to select the correct trademark class(es). Multi-class strategy is discussed upfront." },
      { title: "Comprehensive registry search", description: "We search for identical and deceptively similar marks in your chosen classes to assess conflict risk before spending on the application." },
      { title: "Application filing", description: "TM-A is filed on the IP India portal. You receive the application number and certificate of filing on the same day." },
      { title: "Vienna codification", description: "For logo marks, the examiner assigns Vienna codes to classify the device elements. We track this step." },
      { title: "Examination & objection response", description: "The examiner reviews the application within 3–12 months. Any objections under Sections 9 or 11 are responded to by our IP attorneys." },
      { title: "Advertisement & acceptance", description: "Accepted marks are advertised in the Trademarks Journal for a four-month opposition window. If unopposed, the registration certificate is issued." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹1,499", note: "Professional fee · + ₹4,500–₹9,000 govt. fee" },
      { vendor: "RegisterKaro", price: "₹1,499", note: "Professional fee · + govt. fee" },
      { vendor: "IndiaFilings", price: "₹1,999", note: "Per class" },
      { vendor: "LegalWiz", price: "₹1,999", note: "Per application" },
      { vendor: "RegisterEase", price: "₹1,499", note: "Per class" },
      { vendor: "IP attorney (market rate)", price: "₹5,000–₹15,000", note: "Professional fee, varies by city" },
    ],
    memberRateNote: "Government trademark fees are statutory — ₹4,500 for startups/MSMEs and ₹9,000 for companies per class per application. These are non-refundable whether the mark is granted or refused, and are payable regardless of platform. FoundingLegals member rate applies to professional fees only.",
    faqs: [
      { q: "How long does trademark registration take in India?", a: "The overall process takes 18–36 months. However, your rights are established from the filing date — not the registration date. This is why filing early matters even if grant takes time." },
      { q: "What is the difference between TM and ® symbols?", a: "™ can be used immediately after filing your trademark application. The ® symbol can only be used after your trademark has been formally registered and the registration certificate has been issued. Using ® before registration is an offence under the Trademarks Act." },
      { q: "Do I need to register in multiple classes?", a: "You need to file in every class that covers your current and planned business activities. A food brand that plans to launch clothing merchandise needs separate applications for Class 29/30 (food) and Class 25 (clothing). Filing in only one class leaves the other unprotected." },
      { q: "Can I stop someone from using a similar name if I haven't registered?", a: "Possibly, through the common law action of 'passing off' — but this requires expensive litigation and proof of substantial prior use and reputation. A registered trademark is a much simpler, faster, and lower-cost enforcement tool." },
    ],
    relatedLinks: [
      { name: "Business Incorporation", href: "/services/business-incorporation" },
      { name: "Agreements & Contracts", href: "/services/agreements" },
    ],
    subServices: [
      { name: "Trademark Registration", href: "/services/trademark-registration", description: "Full application and filing service — class selection, registry search, TM-A filing, examination response, and registration certificate.", price: "Market ₹1,499–₹5,000 + govt. fee · Member Rate" },
    ],
  },

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: GST & Indirect Tax
  // ══════════════════════════════════════════════════
  {
    slug: "gst-indirect-tax",
    type: "category",
    badge: "GST & Indirect Tax Compliance",
    name: "GST compliance on autopilot.\nNever miss a filing date again.",
    tagline: "GST returns are not a quarterly chore — they're a monthly legal obligation with interest charges from Day 1 and late fees that compound faster than most founders expect. A missed GSTR-3B isn't just a fine: it blocks your suppliers' input tax credit and strains your business relationships.",
    seoTitle: "GST Return Filing & Indirect Tax Compliance India | FoundingLegals",
    seoDescription: "Monthly GST returns, GSTR-9 annual filing, TDS returns, GST audit (GSTR-9C). CA-managed compliance at 50% of market rate for FoundingLegals members.",
    description: [
      "GST compliance involves seven or more return types depending on your registration category — GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, and more. Each has a specific due date, a specific late fee structure, and specific reconciliation requirements against your suppliers' filings. Missing any one of them has downstream consequences for your buyers' ITC claims.",
      "FoundingLegals assigns a dedicated CA to your GST compliance account. We collect your sales data, prepare the returns, reconcile input tax credit, file on time, and alert you to any departmental notices — so your attention stays on your business rather than the GST portal.",
    ],
    idealFor: [
      "Registered GST businesses that need accurate monthly or quarterly filing without managing a full-time accountant",
      "Businesses with complex multi-state operations or e-commerce supplies requiring detailed GSTR-1 reconciliation",
      "Companies closing their financial year and requiring GSTR-9 annual return filing",
      "Businesses with turnover above ₹5 crore who need a CA-certified GSTR-9C reconciliation statement",
      "Any business that has received a GST notice or has a mismatch in their return history",
    ],
    whatsIncluded: [
      { title: "Monthly/quarterly GSTR-1 filing", description: "Outward supply details filed accurately by the 11th of each month (or 13th for quarterly filers) to ensure your buyers' ITC is not blocked." },
      { title: "GSTR-3B filing", description: "Summary return with tax liability and ITC set-off filed on time. Interest reconciliation handled where advance tax has been paid." },
      { title: "ITC reconciliation (GSTR-2B)", description: "We match your purchase register against GSTR-2B to ensure you claim only eligible ITC and flag any mismatches before they become notices." },
      { title: "Annual return (GSTR-9)", description: "Comprehensive annual reconciliation of all returns filed during the year — mandatory for most registered taxpayers." },
      { title: "GSTR-9C (audit reconciliation)", description: "CA-certified reconciliation statement for businesses with turnover above ₹5 crore. Filed along with audited financials." },
      { title: "Notice management", description: "Any GST departmental notice or scrutiny assessment is handled by our CA team with formal written responses." },
    ],
    documentsRequired: [
      "Monthly sales data (invoice-wise breakup with GSTIN of B2B buyers)",
      "Monthly purchase invoices and vendor GSTIN details",
      "Bank statements (for cash receipt reconciliation)",
      "TDS / TCS certificates (if applicable)",
      "Previous period returns and any outstanding demand notices",
    ],
    process: [
      { title: "Data collection", description: "You share monthly sales and purchase data via our secure document vault or connect your accounting software." },
      { title: "Return preparation", description: "Our CA team prepares GSTR-1 and GSTR-3B, reconciles ITC, and validates the figures against your books." },
      { title: "Review & approval", description: "You review the prepared return and approve for filing. We highlight any significant variance from the previous month." },
      { title: "Filing & acknowledgment", description: "Returns are filed on the GST portal before the due date. Filed return summary and ARN are stored in your vault." },
      { title: "ITC monitoring", description: "We track GSTR-2B monthly to ensure supplier compliance and flag any credit mismatches proactively." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹800/mo", note: "Monthly GST return" },
      { vendor: "RegisterKaro", price: "₹999/mo", note: "Monthly GST return" },
      { vendor: "IndiaFilings", price: "₹1,499/mo", note: "Monthly GST return" },
      { vendor: "LegalWiz", price: "₹799/mo", note: "Monthly GST return" },
      { vendor: "IncorpX", price: "₹2,999/mo", note: "Monthly GST return" },
      { vendor: "RegisterEase", price: "₹499/mo", note: "Monthly GST return" },
      { vendor: "Annual GST return (GSTR-9)", price: "₹3,000–₹4,999", note: "Vakilsearch / RegisterEase" },
      { vendor: "GST Audit (GSTR-9C)", price: "₹5,000–₹9,999", note: "Vakilsearch / RegisterEase" },
    ],
    memberRateNote: "FoundingLegals members pay 50% of the prevailing CA market rate. Government-imposed late fees and interest on delayed returns are the filer's statutory liability and are not covered by the member rate.",
    faqs: [
      { q: "What happens if I miss a GST return filing date?", a: "Late filing attracts a late fee of ₹50 per day (CGST ₹25 + SGST ₹25) for returns with tax liability, and ₹20/day for NIL returns. Additionally, interest at 18% per annum applies on the unpaid tax liability from the due date. Persistent non-filers are flagged for scrutiny assessment." },
      { q: "What is GSTR-9C and who needs to file it?", a: "GSTR-9C is a reconciliation statement certified by a Chartered Accountant that reconciles the figures in your GSTR-9 annual return with your audited financial statements. It is mandatory for businesses with aggregate turnover above ₹5 crore in a financial year." },
      { q: "Can I claim ITC on purchases if my supplier hasn't filed their GSTR-1?", a: "No. ITC is available only for invoices that appear in your GSTR-2B — which is populated from your suppliers' GSTR-1 filings. If a supplier doesn't file, your ITC is blocked, and the new ITC matching rules mean you may be required to reverse the credit with interest." },
      { q: "Is TDS return filing under GST different from income tax TDS?", a: "Yes. GST TDS (under Section 51 of the CGST Act) applies when certain government entities and specified persons deduct 2% from payments made to registered suppliers. This is separate from Income Tax TDS under Section 194C/194J etc. Both have separate filing obligations." },
    ],
    relatedLinks: [
      { name: "Business Incorporation", href: "/services/CAservices/business-incorporation" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
    ],
  },

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: Income Tax Advisory
  // ══════════════════════════════════════════════════
  {
    slug: "income-tax-advisory",
    type: "category",
    badge: "Income Tax Filing & Advisory",
    name: "Every rupee of tax you overpay\nis a rupee your business doesn't have.",
    tagline: "Income tax filing is not just a compliance checkbox — it's the annual exercise where smart tax planning, accurate deduction claims, and timely filing determine whether you get a refund or a demand notice. The difference between a ₹0 tax liability and a ₹50,000 demand is often just a CA who reads the right section.",
    seoTitle: "Income Tax Filing & Advisory for Individuals & Businesses India | FoundingLegals",
    seoDescription: "ITR-1 to ITR-7 filing for salaried individuals, businesses, LLPs, companies, and trusts. CA-managed at member rates. Expert tax planning included.",
    description: [
      "India's income tax system has seven different return forms — each applicable to a specific type of taxpayer. Filing the wrong form, claiming ineligible deductions, or missing the deadline has consequences ranging from an invalid return to prosecution under Section 276C. Most founders, salaried employees, and business owners file a suboptimal return simply because they're not aware of the specific provisions that apply to their situation.",
      "FoundingLegals provides CA-managed income tax filing for all categories of taxpayer — from a first-time salaried employee through to a listed company filing ITR-6. We assess your applicable form, identify every legitimate deduction available, file on time, and handle any Section 139(5) revised returns if required.",
    ],
    idealFor: [
      "Salaried employees with Form 16 who also have interest income, capital gains, or rental income",
      "Freelancers and consultants filing under the old regime with actual expenses deduction",
      "Founders of Pvt Ltd companies who draw a salary plus dividends — requiring both personal and corporate returns",
      "LLPs, partnership firms, and professional partnerships filing ITR-5",
      "Charitable organisations, religious trusts, and NGOs with Section 11 exemption claims",
    ],
    whatsIncluded: [
      { title: "Applicable form identification", description: "We assess your income sources, entity type, and residency status to confirm the correct ITR form — preventing invalid filing." },
      { title: "Income computation", description: "Head-by-head income computation: salary, house property, business/profession, capital gains, and other sources." },
      { title: "Deduction optimisation", description: "Full review of Chapter VI-A deductions — 80C, 80D, 80E, 80G, 80TTA, 80U — to minimise tax liability legally." },
      { title: "Advance tax reconciliation", description: "We reconcile any advance tax paid against final liability and identify refund or balance payable." },
      { title: "Filing and acknowledgment", description: "Return filed on the income tax portal. ITR-V or EVC acknowledgment stored in your vault. Refund status tracked." },
      { title: "Revised return support", description: "If an error is discovered post-filing, we file a revised return under Section 139(5) at no additional charge within the assessment year." },
    ],
    documentsRequired: [
      "Form 16 / Form 16A (from employer / payer of TDS)",
      "Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) from IT portal",
      "Bank statements for all accounts (for interest income and source of funds)",
      "Investment proofs: PPF, ELSS, LIC, NSC, housing loan certificate",
      "Rent receipts and landlord PAN (if claiming HRA)",
      "Capital gain statements (from broker / mutual fund portal)",
      "Business books / P&L statement (for business and professional income)",
    ],
    process: [
      { title: "Data collection & AIS review", description: "We request your documents and review your AIS/TIS from the IT portal to identify all income sources reported by third parties." },
      { title: "Income computation & deduction mapping", description: "A CA computes your total income head-by-head and maps all available deductions to minimise your final tax liability." },
      { title: "Regime comparison (old vs. new)", description: "We compute your liability under both the old and new tax regime and recommend the option that results in lower tax. You make the final call." },
      { title: "Review & approval", description: "The computation summary is shared with you for review. We explain any significant variance from the previous year." },
      { title: "Filing & acknowledgment", description: "Return is filed on the Income Tax portal using digital signature or Aadhaar OTP. Acknowledgment stored in your document vault." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹499–₹13,000", note: "Depends on ITR type" },
      { vendor: "RegisterKaro", price: "₹500–₹5,000", note: "Depends on ITR type" },
      { vendor: "IndiaFilings", price: "₹2,500", note: "ITR-6 only published" },
      { vendor: "Tax2win / Clear Tax", price: "₹299–₹2,999", note: "Primarily salaried / ITR-1" },
      { vendor: "Independent CA", price: "₹1,000–₹15,000", note: "Varies by form and complexity" },
    ],
    memberRateNote: "Members pay 50% of the prevailing CA market rate for all ITR types. Government fees (income tax liability, advance tax, self-assessment tax) are statutory obligations of the taxpayer and are not part of professional fees on any platform.",
    faqs: [
      { q: "What is the due date for income tax filing in India?", a: "For individuals not requiring audit: 31st July of the assessment year. For businesses and individuals requiring a tax audit: 31st October. For companies requiring transfer pricing reports: 30th November. Filing after the due date is possible with a late fee of ₹5,000 (₹1,000 for income below ₹5 lakh) until 31st December." },
      { q: "What is the difference between the old and new tax regime?", a: "The new tax regime (default from FY 2023-24) has lower slab rates but removes most deductions (80C, HRA, LTA, home loan interest). The old regime has higher rates but allows all deductions. The better choice depends on your deduction total — typically, if your deductions exceed ₹3.75 lakh, the old regime saves more tax." },
      { q: "Do I need to file a return even if my income is below the taxable limit?", a: "Yes, in several situations: if you have foreign income or assets, if TDS has been deducted and you want a refund, if you have capital gains exceeding the basic exemption limit, or if you intend to carry forward losses. Filing also creates an income record used by banks and visa authorities." },
      { q: "What happens if I don't file income tax returns?", a: "Consequences range from a late fee (₹5,000 maximum) to interest on tax liability (1% per month under Section 234A) to prosecution in cases of wilful evasion under Section 276CC, which can result in imprisonment of 3 months to 7 years." },
    ],
    relatedLinks: [
      { name: "GST & Indirect Tax", href: "/services/CAservices/gst-indirect-tax" },
      { name: "Audit & Attestation", href: "/services/CAservices/audit-attestation" },
    ],
    subServices: [
      { name: "Salary ITR Filing", href: "/services/CAservices/salary-itr-filing", description: "For salaried employees, pensioners, and individuals with interest income, HRA claims, and basic capital gains.", price: "Market ₹499–₹500 · Member Rate" },
      { name: "Business ITR Filing", href: "/services/CAservices/business-itr-filing", description: "For proprietors, freelancers, and professionals with income from business or profession.", price: "Market ₹1,500–₹2,000 · Member Rate" },
      { name: "ITR-3 Filing (Professional/Business)", href: "/services/CAservices/itr-3-filing", description: "For individuals and HUFs with detailed business accounts — P&L, balance sheet, and Schedule BP required.", price: "Market ₹2,000–₹5,000 · Member Rate" },
      { name: "ITR-4 Filing (Presumptive Taxation)", href: "/services/CAservices/itr-4-filing", description: "For small businesses and professionals opting for Section 44AD/44ADA/44AE — simplified presumptive scheme.", price: "Market ₹2,000–₹5,000 · Member Rate" },
      { name: "ITR-5 Filing (LLPs & Partnerships)", href: "/services/CAservices/itr-5-filing", description: "For partnership firms, LLPs, BOI, AOP — audit linkage and partner capital accounts included.", price: "Market ₹5,000–₹6,500 · Member Rate" },
      { name: "ITR-6 Filing (Companies)", href: "/services/CAservices/itr-6-filing", description: "For Pvt Ltd, Public Ltd, and other companies — linked to statutory audit and Form 3CB/3CD.", price: "Market ₹2,500–₹13,000 · Member Rate" },
      { name: "ITR-7 Filing (Trusts & NGOs)", href: "/services/CAservices/itr-7-filing", description: "For charitable trusts, religious institutions, and NGOs claiming exemption under Sections 11 and 12.", price: "Market ₹5,000–₹10,000 · Member Rate" },
    ],
  },

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: Audit & Attestation
  // ══════════════════════════════════════════════════
  {
    slug: "audit-attestation",
    type: "category",
    badge: "Audit & Attestation Services",
    name: "Audits that protect your business,\nnot just satisfy the regulator.",
    tagline: "A statutory audit is not a bureaucratic formality — it's the independent verification that your financial statements reflect economic reality. Done right, it surfaces discrepancies before the tax department does, strengthens investor confidence, and creates the audited financials that banks and funding agencies require before they disburse a rupee.",
    seoTitle: "Tax Audit & GST Audit Services India | FoundingLegals",
    seoDescription: "Tax audit execution (Form 3CD), GST audit (GSTR-9C) for Indian businesses. CA-certified audits at 50% of market rate for FoundingLegals members.",
    description: [
      "Two categories of audit are most relevant to growing Indian businesses: the income tax audit under Section 44AB (mandatory above specified turnover thresholds) and the GST audit under Section 35(5) of the CGST Act (required for businesses with annual aggregate turnover above ₹5 crore). Both require a Chartered Accountant to verify, certify, and co-sign the relevant forms.",
      "The market charges ₹5,000–₹10,000 in professional fees for each of these — and that's before the cost of accountant time to prepare the books in audit-ready form. FoundingLegals members pay 50% of the prevailing market rate, with a CA assigned who coordinates the complete audit process from books preparation through to form submission.",
    ],
    idealFor: [
      "Businesses with turnover above ₹1 crore (goods) or ₹50 lakh (services) requiring a tax audit under Section 44AB",
      "Professionals who have opted out of the presumptive taxation scheme (Section 44ADA) and need a full audit",
      "GST-registered businesses with annual aggregate turnover above ₹5 crore requiring GSTR-9C reconciliation",
      "Companies requiring statutory audit certification for annual filings with MCA (Form AOC-4)",
      "Businesses that have received a tax audit notice from the Income Tax Department",
    ],
    whatsIncluded: [
      { title: "Tax audit execution (Form 3CB/3CD)", description: "Detailed audit of books of accounts, balance sheet, P&L, and tax compliance. CA certification and co-signing of Form 3CB and 3CD." },
      { title: "GSTR-9C audit reconciliation", description: "CA-certified reconciliation of the annual GST return (GSTR-9) against the audited financial statements — mandatory above ₹5 crore turnover." },
      { title: "Books preparation assistance", description: "If your books require cleanup before they can be audited, our team prepares them to audit-ready standard before the CA proceeds." },
      { title: "Statutory audit (Pvt Ltd / LLP)", description: "Annual audit of company financial statements by a Statutory Auditor — required for MCA filing and investor due diligence." },
      { title: "Audit report drafting", description: "Detailed audit report with management letter noting discrepancies and recommendations for internal controls." },
    ],
    documentsRequired: [
      "Trial balance, P&L statement, and balance sheet for the audit period",
      "Bank statements for all accounts for the full financial year",
      "All invoices (sales and purchase) for the audit period",
      "Fixed asset register with addition, disposal, and depreciation schedule",
      "TDS certificates received and deducted (Form 16, 16A, 26AS)",
      "Loan agreements and repayment schedules",
      "GST returns filed for all periods (for GSTR-9C)",
    ],
    process: [
      { title: "Books review & gap assessment", description: "We review the existing books of accounts and identify any missing records or entries that would prevent a clean audit." },
      { title: "Books preparation", description: "Necessary accounting entries are completed. Ledgers are reconciled with bank statements, GST returns, and TDS data." },
      { title: "Audit execution", description: "The assigned CA audits the books in accordance with the Standards on Auditing — verifying income, expenses, assets, and liabilities." },
      { title: "Audit report and management letter", description: "Audit report is prepared with observations. Significant findings are communicated to management before finalisation." },
      { title: "Form filing", description: "Form 3CB/3CD is filed on the Income Tax portal. GSTR-9C is filed on the GST portal. Copies stored in your document vault." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹5,000", note: "Tax audit (Section 44AB)" },
      { vendor: "RegisterKaro", price: "₹5,000", note: "Tax audit professional fee" },
      { vendor: "Vakilsearch (Zolvit) — GST Audit", price: "₹5,000", note: "GSTR-9C execution" },
      { vendor: "RegisterKaro — GST Audit", price: "₹10,000", note: "GSTR-9C execution" },
      { vendor: "RegisterEase — GST Audit", price: "₹9,999", note: "GSTR-9C execution" },
      { vendor: "Chartered Accountant firm (mid-size)", price: "₹15,000–₹50,000", note: "Depends on turnover and book quality" },
    ],
    memberRateNote: "Members pay 50% of market rate for audit execution. Books preparation (if required) is quoted separately based on the state of your accounting records.",
    faqs: [
      { q: "When is a tax audit under Section 44AB mandatory?", a: "For businesses: when gross receipts/turnover exceed ₹1 crore in a financial year (₹10 crore if cash transactions are less than 5% of total). For professionals: when gross receipts exceed ₹50 lakh. Also required when a taxpayer claims income below the presumptive rate under Sections 44AD, 44ADA, or 44AE and has income above the basic exemption limit." },
      { q: "What is the penalty for not getting a tax audit done?", a: "Under Section 271B, the penalty for failure to get accounts audited is 0.5% of turnover/gross receipts, subject to a maximum of ₹1.5 lakh. This is in addition to interest on any resulting tax liability." },
      { q: "Is GSTR-9C the same as the GST audit?", a: "Yes, effectively. GSTR-9C is the CA-certified reconciliation statement that constitutes the GST audit requirement. The auditor certifies that the figures in GSTR-9 match the audited financial statements and reconciles any differences." },
      { q: "Can the same CA who prepares my books also audit them?", a: "Under the Institute of Chartered Accountants of India guidelines, a CA who has been involved in accounting records preparation cannot simultaneously be the statutory auditor — this conflicts with independence requirements. Tax audit and management account preparation by the same CA, however, is permissible." },
    ],
    relatedLinks: [
      { name: "GST & Indirect Tax", href: "/services/CAservices/gst-indirect-tax" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
      { name: "Financial & Investment", href: "/services/LegalServices/financial-investment" },
    ],
    subServices: [
      { name: "Tax Audit Execution", href: "/services/CAservices/tax-audit", description: "Section 44AB audit with Form 3CB/3CD filing — complete CA execution from books review to IT portal submission.", price: "Market ₹5,000 · Member Rate" },
      { name: "GST Audit (GSTR-9C)", href: "/services/CAservices/gst-audit", description: "CA-certified GSTR-9C reconciliation statement for businesses with annual turnover above ₹5 crore.", price: "Market ₹5,000–₹9,999 · Member Rate" },
    ],
  },

  // ══════════════════════════════════════════════════
  // CATEGORY PAGE: Financial & Investment Services
  // ══════════════════════════════════════════════════
  {
    slug: "financial-investment",
    type: "category",
    badge: "Financial & Investment Services",
    name: "From your first loan application\nto your Series A data room.",
    tagline: "Capital access is the constraint that determines whether a promising business grows or stalls. The documents that unlock that capital — a well-structured project report for a bank loan, a clean data room for investors, a DPIIT recognition letter for scheme eligibility — are the deliverables that determine whether lenders and investors say yes or no.",
    seoTitle: "Financial & Investment Services for Indian Startups | FoundingLegals",
    seoDescription: "Loan project reports, investor data rooms, DPIIT recognition, scheme eligibility — at member rates for FoundingLegals subscribers.",
    description: [
      "Indian banks, NBFCs, and government lending schemes require a detailed project report (DPR) before sanctioning any term loan or working capital facility. These documents are not templates — they require your specific financial projections, market analysis, equipment costs, and repayment schedule, formatted to the standards that credit committees expect. Most CAs charge ₹5,000–₹50,000 for this work.",
      "Simultaneously, if you are raising equity — angel, seed, or institutional — your investor materials need to be investor-grade. A data room with access controls, a CA-reviewed financial model, and a DPIIT registration certificate are the minimum baseline that a credible investor due diligence process will require.",
    ],
    idealFor: [
      "Manufacturers and capital-intensive businesses applying for term loans from banks or NBFC lenders",
      "Startups applying to MUDRA, CGTMSE, or other government credit guarantee schemes",
      "Early-stage founders preparing for angel or seed round — needing data room, pitch materials, and DPIIT recognition",
      "Businesses that have identified an applicable government scheme or grant but need help with the application",
      "Companies undergoing due diligence for a strategic acquisition or Series A institutional round",
    ],
    whatsIncluded: [
      { title: "Loan project report (DPR)", description: "Professionally prepared Detailed Project Report — market analysis, financial projections (5 years), funding requirement, repayment schedule, and profitability ratios formatted to bank standards." },
      { title: "Investor data room setup", description: "Secure document vault with access controls, version management, and investor activity tracking. Includes all standard due diligence folder structure." },
      { title: "DPIIT Startup India recognition", description: "Application preparation and filing for DPIIT recognition — unlocking self-certification, tax exemptions, easier winding up, and IPR fee benefits." },
      { title: "Live scheme & grant identification", description: "Real-time database of government schemes filtered by your state, sector, entity type, and turnover — with eligibility assessment." },
      { title: "Pitch deck and financial model review", description: "CA-reviewed financial model and pitch narrative — tested against the questions investors in your stage typically ask." },
    ],
    documentsRequired: [
      "Business plan / executive summary of the business",
      "Entity documents: CoI, MOA, PAN, GST certificate",
      "Last 2 years audited financials (if available)",
      "Bank statements for the last 12 months",
      "Quotations for equipment/machinery (for project reports)",
      "Land ownership or lease documents (for manufacturing projects)",
      "Promoter background documents (educational qualifications, experience)",
    ],
    process: [
      { title: "Requirement scoping", description: "We identify your specific capital need — bank loan, government scheme, or equity raise — and the documents required for each." },
      { title: "Financial modelling", description: "5-year projections built from your cost structure, revenue assumptions, and market context. Stress-tested for downside scenarios." },
      { title: "Document preparation", description: "Project report, data room, or pitch materials prepared with professional design, verified financial data, and CA sign-off where required." },
      { title: "Review & submission guidance", description: "Final documents are reviewed with you before submission. We guide you on the specific lender/investor submission process." },
      { title: "Follow-up support", description: "If a bank, investor, or scheme authority requests additional information, we help you prepare and respond." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹5,000", note: "Loan project report" },
      { vendor: "Subsidy consultant (market rate)", price: "₹50,000", note: "Per project, scheme application" },
      { vendor: "Tracxn (investor data)", price: "₹2,10,144/yr", note: "1 seat, investor database only" },
      { vendor: "Digify (data room)", price: "₹1,47,840/yr", note: "Entry plan, access control only" },
      { vendor: "Indian agency (pitch deck)", price: "₹1,50,000+", note: "Low-end, agency rate" },
    ],
    memberRateNote: "FoundingLegals members have the investor directory, data room, and pitch infrastructure included in the subscription. CA-executed loan project reports and scheme applications are priced at 50% of market rate.",
    faqs: [
      { q: "What is a Detailed Project Report (DPR) and why do banks require it?", a: "A DPR is a comprehensive document that a bank's credit committee reviews before sanctioning a term loan. It includes business overview, promoter background, product/market analysis, technical feasibility, financial projections, cost of project, means of finance, and debt service coverage ratios (DSCR). Without a well-prepared DPR, most bank loan applications are rejected at the first screening stage." },
      { q: "What is DPIIT Startup India recognition and who qualifies?", a: "DPIIT recognition is a certificate granted by the Department for Promotion of Industry and Internal Trade to entities meeting the Startup India definition: less than 10 years old from incorporation, not a split or restructured entity, turnover not exceeding ₹100 crore in any financial year, and working towards innovation, development, or commercialisation. Benefits include self-certification under labour laws, tax exemption under Section 80-IAC, and 50% discount on trademark filing fees." },
      { q: "What government schemes are available for Indian startups?", a: "Schemes available include: MUDRA (Micro Units Development & Refinance Agency) for loans up to ₹10 lakh, CGTMSE (Credit Guarantee Fund for collateral-free loans), Startup India Seed Fund, SIDBI Fund of Funds, PLI (Production Linked Incentive) for specific sectors, and numerous state-level subsidy schemes. Eligibility depends on entity type, sector, state, and turnover." },
      { q: "How is a FoundingLegals data room different from just sharing a Google Drive folder?", a: "A FoundingLegals data room provides access-controlled sharing with investor-specific permissions, document download tracking, watermarking, version management, and access revocation without relying on the investor's Google account. Sophisticated investors expect a proper data room — a Google Drive link signals a lack of fundraising experience." },
    ],
    relatedLinks: [
      { name: "Investment Ready Services", href: "/services/LegalServices/pitch-to-investors" },
      { name: "Audit & Attestation", href: "/services/CAservices/audit-attestation" },
      { name: "Business Incorporation", href: "/services/CAservices/business-incorporation" },
    ],
    subServices: [
      { name: "Loan Project Report", href: "/services/CAservices/loan-project-report", description: "Bank-ready Detailed Project Report with 5-year financials, market analysis, and DSCR ratios.", price: "Market ₹5,000–₹50,000 · Member Rate" },
      { name: "DPIIT / Startup India Recognition", href: "/services/CAservices/dpiit-recognition", description: "End-to-end application preparation and filing for Startup India recognition certificate.", price: "Market ₹3,000–₹15,000 (consultant) · Member Rate" },
      { name: "Investor Data Room", href: "/services/LegalServices/pitch-to-investors", description: "Secure, access-controlled investor data room with tracking and revocation controls.", price: "Included in subscription" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Salary ITR Filing
  // ══════════════════════════════════════════════════
  {
    slug: "salary-itr-filing",
    type: "individual",
    badge: "Income Tax · Salaried Individuals",
    name: "Salary ITR Filing",
    tagline: "Form 16 in hand, refund on its way. CA-managed, not software-managed — because the right deduction claims are worth more than the filing fee.",
    seoTitle: "Salary ITR Filing for Salaried Employees India | FoundingLegals",
    seoDescription: "CA-managed salary ITR filing (ITR-1/ITR-2) for salaried employees, pensioners, and HUF. Deduction optimisation included. Member rates — 50% below market.",
    description: [
      "For most salaried individuals, tax is already deducted at source by the employer. What ITR filing accomplishes is reconciling that deduction against your actual tax liability — claiming deductions your employer couldn't factor in, adding income from other sources like interest and rent, and generating a refund if you've been over-deducted. Skipping the filing means leaving that refund permanently on the table.",
      "The choice between ITR-1 (Sahaj) and ITR-2 determines whether you can report income from capital gains, multiple properties, or directorship in a company. Filing the wrong form technically invalidates the return. Our CAs assess which form applies to your specific income profile and file accordingly.",
    ],
    idealFor: [
      "Salaried employees with income from a single employer (Form 16 available)",
      "Pensioners with pension income and bank interest",
      "Individuals with HRA claims not fully captured by the employer",
      "Those with income from one house property (let-out or self-occupied)",
      "Salaried individuals with ELSS, PPF, or NPS deductions not yet optimised",
      "ITR-2 filers with capital gains, foreign income, or multiple properties",
    ],
    whatsIncluded: [
      { title: "Form 16 analysis", description: "We review your Form 16 to identify any employer-side misclassification of allowances or missed deductions." },
      { title: "AIS/TIS reconciliation", description: "Annual Information Statement is reviewed to identify all income sources reported by banks, employers, and third parties." },
      { title: "Deduction computation (Chapter VI-A)", description: "80C, 80D, 80E, 80G, 80TTA, 80U — every applicable deduction computed and documented." },
      { title: "HRA claim optimisation", description: "Exempt HRA amount computed correctly under Rule 2A — applicable to rent in metropolitan and non-metropolitan cities." },
      { title: "Old vs. new regime analysis", description: "Tax computed under both regimes. We recommend the one that results in lower tax liability." },
      { title: "Filing and ITR-V acknowledgment", description: "Return filed on IT portal. ITR-V stored in your vault. Refund status tracked until credit to your bank account." },
    ],
    documentsRequired: [
      "Form 16 (Part A and Part B) from your employer",
      "Form 26AS and Annual Information Statement (AIS) from IT portal",
      "Bank statements for all accounts — for interest income",
      "HRA: Rent receipts and landlord PAN (if monthly rent exceeds ₹8,333)",
      "Investment proofs: LIC premium, PPF passbook, ELSS statements, home loan certificate",
      "80D: Health insurance premium receipts for self, spouse, parents",
      "Capital gain statements from broker / mutual fund portal (if any)",
    ],
    process: [
      { title: "Document upload", description: "You securely upload Form 16, bank statements, and investment proofs through your FoundingLegals vault." },
      { title: "AIS review and income mapping", description: "We pull your AIS and map all reported income sources — salary, interest, dividends, capital gains — against your documents." },
      { title: "Deduction computation", description: "All Chapter VI-A deductions are computed and documented. HRA exemption is calculated correctly for your city and rent." },
      { title: "Regime comparison and form selection", description: "Tax under old and new regime is computed. The applicable ITR form (ITR-1 or ITR-2) is confirmed." },
      { title: "Review and filing", description: "You review the computation summary. Return is filed and acknowledged. Refund status is monitored." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹499", note: "Salaried ITR filing" },
      { vendor: "RegisterKaro", price: "₹500", note: "Salaried ITR filing" },
      { vendor: "Tax2win", price: "₹299–₹499", note: "Software-assisted filing" },
      { vendor: "Clear Tax", price: "₹799–₹2,999", note: "Software or CA-assisted" },
      { vendor: "Local CA (metro city)", price: "₹1,000–₹3,000", note: "CA-managed filing" },
    ],
    memberRateNote: "FoundingLegals members pay 50% of the prevailing CA market rate. The service includes CA review, deduction optimisation, and AIS reconciliation — not just portal form-filling.",
    faqs: [
      { q: "What is the difference between ITR-1 and ITR-2 for salaried individuals?", a: "ITR-1 (Sahaj) is for residents with income from salary/pension, one house property, and other sources (interest) up to ₹50 lakh total income — with no capital gains and no directorship or investment in unlisted companies. ITR-2 is required if you have capital gains, more than one house property, foreign income, or are a director in a company or hold unlisted equity shares." },
      { q: "Can I claim deductions if my employer already considered them in Form 16?", a: "If the deduction is already reflected in Form 16 (Part B), you cannot double-claim it. However, if you have deductions your employer missed — such as medical insurance premiums paid personally, NPS contributions under Section 80CCD(1B), or donations under 80G — these can be claimed in your ITR even if not in Form 16." },
      { q: "When will I receive my refund after filing?", a: "The Income Tax Department typically processes refunds within 10–45 days of filing for returns filed before the due date. Refunds are directly credited to the bank account validated in your pre-validated bank account on the IT portal. Delay beyond 45 days can be checked on the IT portal and — if unresolved — reported as a grievance." },
      { q: "What if I have not filed returns for the past 2–3 years?", a: "You can file a belated return for the immediately preceding assessment year before 31st December. Returns for the year before that can only be filed if the department issues a notice. If you have missed multiple years and have substantial tax liability, voluntary disclosure under the Vivad se Vishwas scheme (when applicable) may be the cleanest path." },
    ],
    relatedLinks: [
      { name: "Business ITR Filing", href: "/services/CAservices/business-itr-filing" },
      { name: "ITR-3 Filing", href: "/services/CAservices/itr-3-filing" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
      { name: "GST & Indirect Tax", href: "/services/CAservices/gst-indirect-tax" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Business ITR Filing
  // ══════════════════════════════════════════════════
  {
    slug: "business-itr-filing",
    type: "individual",
    badge: "Income Tax · Business & Profession",
    name: "Business ITR Filing",
    tagline: "For founders, freelancers, and consultants whose income doesn't fit in a salary slip — filed by CAs who understand the difference between a legitimate business expense and an unacceptable deduction.",
    seoTitle: "Business ITR Filing for Proprietors & Freelancers India | FoundingLegals",
    seoDescription: "CA-managed business ITR filing for sole proprietors, freelancers, consultants, and professionals in India. Deduction and expense optimisation. Member rates.",
    description: [
      "If you run a proprietorship, work as an independent consultant, or earn professional fees outside of a salary structure, your tax filing is significantly more complex than a salaried individual's. You have legitimate business expenses that reduce your taxable income — professional subscriptions, office rent, equipment, travel, communication — and missing any of them means paying tax on money that was never profit.",
      "The appropriate ITR form depends on whether your income exceeds the presumptive taxation thresholds and whether you maintain detailed books of accounts. We determine the right form (ITR-3 or ITR-4), prepare your income computation, and ensure every legitimate expense is accounted for before a rupee of tax is paid.",
    ],
    idealFor: [
      "Sole proprietors with business income who are not incorporated as a company or LLP",
      "Freelancers (designers, developers, writers, consultants) with professional income",
      "Doctors, lawyers, architects, and chartered accountants filing in their personal capacity",
      "Small traders and service providers with business income below the tax audit threshold",
      "Individuals with both salary income and side business income in the same year",
    ],
    whatsIncluded: [
      { title: "Business income computation", description: "Revenue and allowable expense computation to arrive at net business income — the figure actually subject to tax." },
      { title: "Expense deduction review", description: "Systematic review of deductible expenses: rent, utilities, professional subscriptions, depreciation on business assets, and travel." },
      { title: "Presumptive vs. detailed accounts assessment", description: "We assess whether Section 44AD or 44ADA presumptive taxation is beneficial given your actual profit margins." },
      { title: "Form selection (ITR-3 or ITR-4)", description: "Based on your income profile, we confirm the correct form and prepare accordingly — including balance sheet and P&L if required." },
      { title: "Advance tax reconciliation", description: "Advance tax paid during the year is reconciled against final liability. Shortfall interest (Section 234C) is computed and disclosed." },
      { title: "Tax audit referral", description: "If your turnover exceeds the Section 44AB threshold, we initiate the tax audit process as part of the same engagement." },
    ],
    documentsRequired: [
      "PAN card and Aadhaar card of the proprietor",
      "Bank statements for all business accounts for the full financial year",
      "Sales invoices / income summary (client-wise or aggregate)",
      "Purchase invoices and business expense bills",
      "Advance tax payment challans (if paid)",
      "TDS certificates (Form 16A from clients who deducted TDS)",
      "Fixed asset register (for depreciation claim)",
      "Previous year's ITR acknowledgment (for carry-forward loss details)",
    ],
    process: [
      { title: "Income and expense collection", description: "You share your business income summary and expense documents through the secure vault." },
      { title: "Books review or preparation", description: "We review existing books or prepare a receipts-and-payments summary and basic balance sheet where required by the ITR form." },
      { title: "Deduction maximisation", description: "All allowable business deductions are reviewed and claimed — including home office proportional expenses for those working from home." },
      { title: "Form selection and computation", description: "ITR-3 or ITR-4 is selected based on your profile. Tax computation under old and new regime is prepared." },
      { title: "Filing and acknowledgment", description: "Return is filed before the due date (31st July for non-audit, 31st October for audit cases). Acknowledgment stored in vault." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹1,500", note: "Business ITR filing" },
      { vendor: "RegisterKaro", price: "₹2,000", note: "Business ITR filing" },
      { vendor: "Local CA (metro city)", price: "₹3,000–₹8,000", note: "CA-managed, varies by complexity" },
    ],
    memberRateNote: "Members pay 50% of market rate. Tax audit, if triggered by turnover threshold, is handled under a separate (also member-rated) engagement.",
    faqs: [
      { q: "What is the tax audit threshold for a proprietorship?", a: "A proprietor must get a tax audit done under Section 44AB if total sales/turnover/gross receipts exceed ₹1 crore (or ₹10 crore if cash transactions are below 5% of total). For professionals, the threshold is ₹50 lakh in gross receipts. If you opt out of the presumptive scheme under Sections 44AD/44ADA and have income above the basic exemption limit, a tax audit is mandatory regardless of turnover." },
      { q: "Can a proprietor claim home office expenses?", a: "Yes, proportionate home expenses (electricity, internet, rent) attributable to business use are deductible as business expenses. The proportion claimed should be documented and defensible — typically based on the square footage or hours used for business purposes. This is a commonly overlooked deduction." },
      { q: "What is the TDS rate on freelance income?", a: "For contractors and sub-contractors (Section 194C): 1% (individual) or 2% (company). For professional services — doctors, lawyers, engineers, accountants (Section 194J): 10%. For technical services (Section 194J sub-clause): 2%. These are deducted by the payer and reflected in your Form 26AS and AIS." },
      { q: "Do I need to pay advance tax as a proprietor?", a: "Yes, if your estimated tax liability for the year exceeds ₹10,000 after TDS credit. Advance tax must be paid in four instalments: 15% by 15th June, 45% by 15th September, 75% by 15th December, and 100% by 15th March. Missing instalments attracts interest under Sections 234B and 234C." },
    ],
    relatedLinks: [
      { name: "ITR-3 Filing (Professional/Business)", href: "/services/CAservices/itr-3-filing" },
      { name: "ITR-4 Filing (Presumptive)", href: "/services/CAservices/itr-4-filing" },
      { name: "Salary ITR Filing", href: "/services/CAservices/salary-itr-filing" },
      { name: "Tax Audit Execution", href: "/services/CAservices/audit-attestation" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: ITR-3 Filing
  // ══════════════════════════════════════════════════
  {
    slug: "itr-3-filing",
    type: "individual",
    badge: "Income Tax · ITR-3",
    name: "ITR-3 Filing\n(Professional / Business Income)",
    tagline: "For individuals and HUFs who run a business or profession with detailed accounts — balance sheet, P&L, and Schedule BP filed to the standard the department expects.",
    seoTitle: "ITR-3 Filing for Professionals & Business Owners India | FoundingLegals",
    seoDescription: "CA-managed ITR-3 filing for individuals and HUF with business/professional income — with balance sheet, P&L, and Schedule BP. Member rates.",
    description: [
      "ITR-3 applies to individuals and Hindu Undivided Families (HUFs) who have income from profits and gains of a business or profession — and who either are not eligible for the presumptive taxation scheme (Section 44AD/44ADA) or have opted out of it. It requires a complete Balance Sheet, Profit & Loss Account, and the detailed business income schedule (Schedule BP).",
      "This is the most detailed income tax form for individual filers. The complexity comes from the reconciliation between books of accounts and taxable income — depreciation differences, disallowances under Sections 40A, 43B, and the specific treatment of personal drawings vs. business expenses. Getting this right requires a CA, not a tax software.",
    ],
    idealFor: [
      "Professionals (doctors, lawyers, architects, CAs, engineers) whose gross receipts exceed ₹50 lakh (above the 44ADA threshold)",
      "Business owners who have opted out of Section 44AD presumptive taxation and maintain full books",
      "Individuals with both business income and salary income or capital gains in the same year",
      "HUFs with business income requiring separate karta and coparcener computation",
      "Businesses carrying forward losses that require detailed Schedule BP disclosure",
    ],
    whatsIncluded: [
      { title: "Balance sheet and P&L preparation", description: "If not maintained, we prepare a balance sheet and P&L from your bank statements and invoices — to the standard required for ITR-3." },
      { title: "Schedule BP computation", description: "Detailed business profit computation including all disallowances (Section 40A, 43B, 37), depreciation under the Income Tax Act, and PGBP adjustments." },
      { title: "All income head computation", description: "Salary, PGBP, capital gains, house property, and other sources computed head-by-head with full disclosure." },
      { title: "Audit linkage", description: "If your accounts are subject to tax audit, the audit report (Form 3CB/3CD) is linked to the ITR-3 filing." },
      { title: "Filing and e-verification", description: "Return filed digitally. E-verification via Aadhaar OTP or DSC. Acknowledgment stored in vault." },
    ],
    documentsRequired: [
      "PAN and Aadhaar of the individual/HUF karta",
      "Books of accounts: ledgers, journal, cash book, bank book",
      "Bank statements for all business and personal accounts",
      "Balance sheet and P&L (if already maintained)",
      "All sales invoices and purchase/expense bills",
      "TDS certificates (Form 16, 16A) from all payers",
      "Fixed asset details for depreciation schedule",
      "Form 26AS and AIS from the Income Tax portal",
    ],
    process: [
      { title: "Books review", description: "Existing books are reviewed for completeness, or we prepare basic books from bank statements and documents." },
      { title: "PGBP computation", description: "Business income is computed under Sections 28–44DB of the Income Tax Act, with all allowable deductions and disallowances applied." },
      { title: "Full income computation", description: "All income heads are computed. Capital gains, house property, and other sources are added to PGBP income." },
      { title: "Deduction and loss computation", description: "Chapter VI-A deductions and any set-off of carried-forward losses are applied to arrive at taxable income." },
      { title: "Regime selection and filing", description: "Tax under both regimes is computed. Return is filed with full disclosure including balance sheet and audit reference (if applicable)." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹5,000", note: "ITR-3 filing" },
      { vendor: "RegisterKaro", price: "₹2,000", note: "ITR-3 filing" },
      { vendor: "CA firm (mid-size)", price: "₹5,000–₹15,000", note: "Depends on books complexity" },
    ],
    memberRateNote: "Members pay 50% of the prevailing market rate. Books preparation, if required, is quoted separately based on the volume and state of accounting records.",
    faqs: [
      { q: "What is Schedule BP in ITR-3 and why is it important?", a: "Schedule BP (Business and Profession) is where you disclose the detailed computation of income from your business or profession, including the transition from accounting profit to taxable income. Key adjustments include: depreciation as per the IT Act (differs from Companies Act), Section 40A(3) disallowances on cash payments, and Section 43B deductions on advance tax basis." },
      { q: "Can I opt for the new tax regime when filing ITR-3?", a: "Individuals with business income can opt for the new regime, but the option must be exercised every year before the due date of filing by submitting Form 10-IEA. If you opt out of the new regime, you cannot re-enter unless you permanently give up business income. Salaried individuals (no business income) can change regimes every year freely." },
      { q: "What is the Section 40A(3) disallowance?", a: "Section 40A(3) disallows any business expenditure where payment of ₹10,000 or more is made in cash (other than to a transporter — ₹35,000 limit). Even if the expense is genuinely for business, the tax deduction is denied if paid in cash above this limit. This is a common issue in businesses that haven't fully migrated to digital payments." },
      { q: "Do I need a separate audit if I file ITR-3?", a: "Not necessarily. Audit under Section 44AB is only required if your turnover/gross receipts exceed the specified threshold (₹1 crore for business, ₹50 lakh for professionals) or if you opt out of the presumptive scheme with income above the basic exemption limit. Below these thresholds, ITR-3 can be filed without a tax audit." },
    ],
    relatedLinks: [
      { name: "ITR-4 Filing (Presumptive)", href: "/services/CAservices/itr-4-filing" },
      { name: "Business ITR Filing", href: "/services/CAservices/business-itr-filing" },
      { name: "Tax Audit Execution", href: "/services/CAservices/audit-attestation" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: ITR-4 Filing (Presumptive)
  // ══════════════════════════════════════════════════
  {
    slug: "itr-4-filing",
    type: "individual",
    badge: "Income Tax · ITR-4 (Sugam)",
    name: "ITR-4 Filing\n(Presumptive Taxation — Sugam)",
    tagline: "The simplified return for small businesses and professionals. You declare a percentage of your turnover as income — no P&L, no balance sheet, no books of accounts. We file it correctly before the deadline.",
    seoTitle: "ITR-4 Sugam Filing — Presumptive Taxation India | FoundingLegals",
    seoDescription: "CA-managed ITR-4 (Sugam) filing for small businesses under Section 44AD, professionals under 44ADA, and transporters under 44AE. Member rates.",
    description: [
      "The presumptive taxation scheme under Sections 44AD (for small businesses), 44ADA (for specified professionals), and 44AE (for goods transport operators) allows eligible taxpayers to declare a fixed percentage of their gross receipts as business income — without maintaining detailed books of accounts or getting a tax audit done. This is the government's mechanism to reduce compliance burden for small operators.",
      "ITR-4 (Sugam) is the return form for these taxpayers. Despite its simplicity relative to ITR-3, filing it incorrectly — choosing the wrong section, misclassifying income, or failing to check the opt-in/opt-out status — invalidates the return. Our CAs file ITR-4 correctly and confirm that you actually qualify under the applicable section.",
    ],
    idealFor: [
      "Small businesses with turnover up to ₹3 crore (if cash receipts ≤ 5% of total) opting under Section 44AD",
      "Specified professionals (doctors, lawyers, CAs, engineers, architects, consultants) with gross receipts up to ₹75 lakh under Section 44ADA",
      "Goods transport operators with up to 10 vehicles opting under Section 44AE",
      "Resident individuals and HUFs (not applicable to companies, LLPs, or firms filing ITR-5)",
      "Taxpayers who want to avoid maintaining books and getting a tax audit",
    ],
    whatsIncluded: [
      { title: "Presumptive income computation", description: "6% or 8% of turnover (Section 44AD) or 50% of gross receipts (Section 44ADA) computed correctly — with digital payment benefit applied where eligible." },
      { title: "Opt-in eligibility check", description: "We confirm you meet all eligibility conditions under the applicable section — turnover limits, profession type, and five-year opt-in consistency." },
      { title: "All income head computation", description: "Salary, house property, and other source income added to the presumptive PGBP income — full return computation prepared." },
      { title: "Chapter VI-A deductions", description: "All applicable deductions (80C, 80D, 80G etc.) are computed and applied even under the presumptive scheme." },
      { title: "Regime comparison", description: "Tax under old and new regime is computed. Section 44ADA filers are specifically advised on whether the old or new regime is more beneficial." },
      { title: "Filing and acknowledgment", description: "ITR-4 filed before 31st July. E-verified and acknowledged. Stored in vault." },
    ],
    documentsRequired: [
      "PAN and Aadhaar of the individual/HUF karta",
      "Total gross receipts/turnover figure for the year (bank statement or aggregate invoice total)",
      "Bank statement showing digital vs. cash receipts (to determine 6% vs. 8% rate under 44AD)",
      "TDS certificates (Form 16A) from clients",
      "Investment proofs for Chapter VI-A deductions",
      "Form 26AS and AIS from the Income Tax portal",
    ],
    process: [
      { title: "Eligibility confirmation", description: "We confirm you qualify under the applicable section — and verify that you haven't opted out in a previous year and are barred from re-entry." },
      { title: "Turnover and receipts verification", description: "Gross receipts are verified from bank statements. Digital vs. cash split is determined for the correct presumptive rate." },
      { title: "Income computation", description: "Presumptive income is computed. Other income heads (salary, house property, capital gains if any) are added." },
      { title: "Regime comparison", description: "Liability under both regimes is computed. You are advised on the better option." },
      { title: "Filing", description: "ITR-4 is filed online. E-verified. Acknowledgment stored in your vault." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹5,000", note: "ITR-4 filing" },
      { vendor: "RegisterKaro", price: "₹2,000", note: "ITR-4 filing" },
      { vendor: "Tax2win / Clear Tax", price: "₹499–₹999", note: "Software filing, less CA review" },
      { vendor: "Local CA", price: "₹2,000–₹5,000", note: "CA-managed, varies by city" },
    ],
    memberRateNote: "Members pay 50% of market rate. Includes CA review, eligibility check, and full deduction computation — not just portal form-filling.",
    faqs: [
      { q: "What is the presumptive income rate under Section 44AD?", a: "Under Section 44AD, 8% of gross turnover is deemed as income. If the turnover is received through banking channels (digital payment or account payee cheque), the rate is 6%. So a trader with ₹80 lakh in fully digital receipts pays income tax on ₹4.8 lakh, not ₹80 lakh — regardless of actual profit." },
      { q: "Can a doctor or lawyer use ITR-4 (Section 44ADA)?", a: "Yes. Section 44ADA applies to specified professionals — doctors, lawyers, CAs, engineers, architects, interior decorators, film artists, and technical consultants — with gross receipts up to ₹75 lakh (increased from ₹50 lakh from FY 2023-24). They declare 50% of gross receipts as taxable income, regardless of actual expenses." },
      { q: "What happens if I opt out of Section 44AD after using it?", a: "If you opt out of Section 44AD in any year (by showing actual lower income), you cannot use Section 44AD for the next five financial years. This is a significant restriction — it means you must maintain full books and may need a tax audit for those five years." },
      { q: "Can I claim business expenses separately if I use Section 44AD?", a: "No. Under the presumptive scheme, the declared percentage (6% or 8%) is deemed to cover all business expenses — no additional deduction is allowed for rent, depreciation, salaries, or any other business cost. If your actual profits are below this percentage, the presumptive scheme may work against you." },
    ],
    relatedLinks: [
      { name: "ITR-3 Filing (Professional/Business)", href: "/services/CAservices/itr-3-filing" },
      { name: "Business ITR Filing", href: "/services/CAservices/business-itr-filing" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: ITR-5 Filing
  // ══════════════════════════════════════════════════
  {
    slug: "itr-5-filing",
    type: "individual",
    badge: "Income Tax · ITR-5",
    name: "ITR-5 Filing\n(LLPs, Partnership Firms & AOP)",
    tagline: "Partnerships and LLPs are not companies — and they're not individuals either. ITR-5 sits in its own compliance category, with partner capital account reconciliation, profit-sharing ratio disclosure, and audit certificate linkage when applicable.",
    seoTitle: "ITR-5 Filing for LLPs and Partnership Firms India | FoundingLegals",
    seoDescription: "CA-managed ITR-5 filing for LLPs, partnership firms, BOI, and AOP. Partner capital accounts, profit-sharing ratio disclosure, and audit linkage. Member rates.",
    description: [
      "ITR-5 applies to partnership firms, LLPs, Associations of Persons (AOP), Bodies of Individuals (BOI), Artificial Juridical Persons, and local authorities. It does not apply to companies (they file ITR-6) or individuals and HUFs (who file ITR-1 through ITR-4). The form requires disclosure of partner/member details, capital accounts, and profit-sharing ratios — making it significantly more involved than an individual return.",
      "For LLPs, the annual income tax filing under ITR-5 is separate from the annual return filed with MCA (LLP Form-11) and the statement of accounts and solvency (LLP Form-8). All three are mandatory and have different due dates. Missing the ITR-5 due date attracts fees and may result in demands if self-assessment tax is unpaid.",
    ],
    idealFor: [
      "Registered partnership firms with two or more partners sharing profits under a partnership deed",
      "Limited Liability Partnerships (LLPs) registered under the LLP Act 2008",
      "Association of Persons (AOP) and Body of Individuals (BOI) with business or investment income",
      "Professional partnerships (chartered accountants, lawyers, doctors in partnership)",
      "LLPs with audit liability (turnover above ₹40 lakh or capital above ₹25 lakh)",
    ],
    whatsIncluded: [
      { title: "Firm/LLP income computation", description: "Total business income computed at the firm/LLP level — before partner remuneration and interest." },
      { title: "Partner remuneration and interest allowance", description: "Section 40(b) limits on partner salary and interest computed and applied correctly to arrive at taxable firm income." },
      { title: "Partner capital account reconciliation", description: "Opening and closing capital balances for each partner/designated partner are reconciled and disclosed in Schedule PL and BS." },
      { title: "Profit-sharing ratio disclosure", description: "Profit-sharing ratios as per the partnership deed or LLP agreement are disclosed in Schedule PS." },
      { title: "Audit certificate linkage", description: "If audit under Section 44AB is applicable, the Form 3CB/3CD report is linked to the ITR-5 filing." },
      { title: "Filing and e-verification", description: "Return filed under the firm's/LLP's PAN. E-verified by the managing partner or designated partner." },
    ],
    documentsRequired: [
      "PAN card of the firm/LLP",
      "Partnership deed or LLP Agreement",
      "Financial statements: P&L and Balance Sheet for the financial year",
      "Partner capital account statements",
      "Bank statements for all firm/LLP accounts",
      "TDS certificates received from clients (Form 16A)",
      "Partner PAN details and remuneration/interest paid",
      "Tax audit report (Form 3CB/3CD) if applicable",
    ],
    process: [
      { title: "Financial statement review", description: "Firm/LLP financials are reviewed. Partner capital accounts are reconciled with the balance sheet." },
      { title: "Section 40(b) computation", description: "Allowable remuneration to partners is computed under Section 40(b) limits — avoiding inadmissible deductions." },
      { title: "Taxable income computation", description: "Firm/LLP taxable income is computed after allowable partner remuneration and interest deductions." },
      { title: "Audit linkage (if applicable)", description: "Tax audit report is linked to the ITR-5. Any observations from the audit report are addressed in the return." },
      { title: "Filing and verification", description: "Return is filed under the firm PAN and e-verified by the managing partner. Acknowledgment stored in vault." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹6,500", note: "LLP/partnership ITR-5 filing" },
      { vendor: "RegisterKaro", price: "₹5,000", note: "ITR-5 filing" },
      { vendor: "CA firm (mid-size)", price: "₹8,000–₹20,000", note: "Varies by turnover and complexity" },
    ],
    memberRateNote: "Members pay 50% of market rate. Audit execution, if triggered, is a separate member-rated engagement.",
    faqs: [
      { q: "Is an LLP required to get a tax audit?", a: "An LLP is required to get a tax audit under Section 44AB if its total sales/turnover/gross receipts exceed ₹1 crore in the financial year (₹10 crore if cash transactions are under 5%). Additionally, an LLP must have its accounts audited under the LLP Act if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh." },
      { q: "Is partner's salary taxable in the hands of the partner?", a: "Yes. Salary (remuneration) and interest received by a partner from the firm is taxable as 'business income' in the partner's personal return (typically as part of ITR-3). The firm deducts it as an expense (within Section 40(b) limits) — so it's taxed once in the partner's hands, not in the firm's." },
      { q: "What is the tax rate for a partnership firm?", a: "A registered partnership firm is taxed at a flat 30% on its total income (after allowable deductions including partner remuneration under Section 40(b)). Additionally, Surcharge of 12% applies if income exceeds ₹1 crore, and Health and Education Cess of 4% applies on all amounts." },
      { q: "Can an LLP be converted to a company?", a: "Yes, under Section 374(d) of the Companies Act 2013. The conversion is tax-neutral under Section 47(xiiib) of the Income Tax Act if certain conditions are met — primarily that the partners' shareholding in the company must be in the same proportion as their profit-sharing ratio in the LLP for at least 5 years." },
    ],
    relatedLinks: [
      { name: "LLP Registration", href: "/services/CAservices/llp-registration" },
      { name: "ITR-6 Filing (Companies)", href: "/services/CAservices/itr-6-filing" },
      { name: "Tax Audit Execution", href: "/services/CAservices/audit-attestation" },
      { name: "GST & Indirect Tax", href: "/services/CAservices/gst-indirect-tax" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: ITR-6 Filing (Companies)
  // ══════════════════════════════════════════════════
  {
    slug: "itr-6-filing",
    type: "individual",
    badge: "Income Tax · ITR-6",
    name: "ITR-6 Filing\n(Companies)",
    tagline: "For every Pvt Ltd, Public Ltd, and corporate entity that isn't claiming Section 11 exemption — statutory audit first, then income tax filing. Both done by the same team, in one clean process.",
    seoTitle: "ITR-6 Filing for Companies in India | FoundingLegals",
    seoDescription: "CA-managed ITR-6 filing for Pvt Ltd, Public Ltd, and corporate entities. Statutory audit linkage, MAT computation, and Ind AS adjustments. Member rates.",
    description: [
      "ITR-6 is filed by companies incorporated under the Companies Act 2013 (or the old 1956 Act) — with the exception of companies claiming exemption under Section 11 of the Income Tax Act (charitable institutions, which file ITR-7 instead). This includes all Pvt Ltd companies, Public Limited companies, Section 8 companies, and foreign companies with Indian business income.",
      "Unlike individual returns, a company's ITR-6 must be filed with a digital signature (DSC) by a director. The return must be linked to the statutory audit report and, where applicable, the tax audit report under Section 44AB. Minimum Alternate Tax (MAT) computation under Section 115JB and deferred tax adjustment under Ind AS or IGAAP add layers of complexity that require a qualified CA.",
    ],
    idealFor: [
      "All private limited companies registered with MCA, regardless of turnover or profit",
      "Public limited companies including listed and unlisted public companies",
      "Section 8 companies (not-for-profit companies) that do not claim Section 11 exemption",
      "Foreign companies with permanent establishment or other taxable presence in India",
      "Holding companies and subsidiaries in corporate groups",
    ],
    whatsIncluded: [
      { title: "Company income computation", description: "Taxable income computed under all relevant heads — PGBP, capital gains, house property, and other sources — as applicable to the company." },
      { title: "MAT computation (Section 115JB)", description: "Minimum Alternate Tax computed on book profits where regular tax is lower than 15% of book profit — with MAT credit reconciliation." },
      { title: "Statutory audit linkage", description: "The ITR-6 requires a statutory audit under the Companies Act. We coordinate audit completion and link the auditor's report to the return." },
      { title: "Tax audit linkage (Section 44AB)", description: "If turnover exceeds ₹1 crore, Form 3CB/3CD is prepared and linked. Both audit and return filed by the same team." },
      { title: "DSC filing", description: "Return is filed with director's Digital Signature Certificate. DSC procurement and registration is managed by our team if required." },
      { title: "Advance tax reconciliation", description: "All advance tax installments paid during the year are reconciled. Interest under Sections 234B and 234C is computed." },
    ],
    documentsRequired: [
      "Certificate of Incorporation and PAN card of the company",
      "Audited financial statements (P&L, Balance Sheet, Cash Flow) for the financial year",
      "Statutory auditor's report (Form 3CA or Form 3CB) and Form 3CD",
      "Board resolution authorising the director to file the return",
      "Director's DSC (we assist with procurement if not available)",
      "Advance tax payment challans (Form 26QB / ITNS 280)",
      "TDS certificates received from customers (Form 16A, 26AS)",
      "Form 26AS and AIS from the Income Tax portal",
    ],
    process: [
      { title: "Statutory audit coordination", description: "We coordinate with the statutory auditor to ensure audited financials are available. We can handle the audit directly if it's within our engagement." },
      { title: "Income computation", description: "Tax computation is prepared from audited financials — with Ind AS or IGAAP to income tax adjustments applied correctly." },
      { title: "MAT computation", description: "Book profits are computed per Section 115JB and compared with regular tax. MAT credit from previous years is checked and applied." },
      { title: "Tax audit (if applicable)", description: "Form 3CB/3CD is prepared, reviewed, and submitted on the IT portal. Audit observations are reflected in the return." },
      { title: "Return filing with DSC", description: "ITR-6 is filed with the director's DSC before 31st October (for audit cases) or 31st July. Acknowledgment stored in vault." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹13,000", note: "ITR-6 filing" },
      { vendor: "RegisterKaro", price: "₹5,000", note: "ITR-6 filing" },
      { vendor: "IndiaFilings", price: "₹2,500", note: "ITR-6 filing" },
      { vendor: "CA firm (mid-size)", price: "₹15,000–₹50,000", note: "Includes audit coordination, varies by turnover" },
    ],
    memberRateNote: "Members pay 50% of the prevailing market rate. Statutory audit, if required as part of the same engagement, is also member-rated.",
    faqs: [
      { q: "Can a company file ITR-6 without completing the statutory audit?", a: "No. The ITR-6 form requires the taxpayer to disclose whether accounts are audited and to link the auditor's report. Filing before audit completion is possible but the return will be defective if the audit is not completed — the department can treat it as not filed." },
      { q: "What is Minimum Alternate Tax (MAT) and does every company pay it?", a: "MAT under Section 115JB requires a company to pay tax at 15% of its book profit (as per the Companies Act accounts) if this amount exceeds the regular tax computed under normal provisions. Companies in their early years with no taxable profit (due to losses, depreciation, etc.) but positive book profits are the primary MAT payers. MAT paid can be carried forward as MAT credit for 15 years." },
      { q: "What is the due date for ITR-6 filing?", a: "31st October of the assessment year for companies requiring a tax audit. Companies not requiring a tax audit have a 31st July deadline, though most companies have audited accounts which effectively makes 31st October the practical deadline for most. MCA annual return deadlines and ROC filing dates are separate." },
      { q: "Does a company need a separate income tax PAN from its MCA registration?", a: "A company's PAN is issued automatically as part of the SPICe+ incorporation process. The PAN is the company's income tax identity — separate from the MCA CIN. Both are required for income tax filing. The PAN is also used for GST registration, bank accounts, and TDS deduction purposes." },
    ],
    relatedLinks: [
      { name: "ITR-5 Filing (LLPs)", href: "/services/CAservices/itr-5-filing" },
      { name: "Tax Audit Execution", href: "/services/CAservices/audit-attestation" },
      { name: "Pvt Ltd Company Incorporation", href: "/services/CAservices/company-incorporation" },
      { name: "GST & Indirect Tax", href: "/services/CAservices/gst-indirect-tax" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: ITR-7 Filing
  // ══════════════════════════════════════════════════
  {
    slug: "itr-7-filing",
    type: "individual",
    badge: "Income Tax · ITR-7",
    name: "ITR-7 Filing\n(Trusts, NGOs & Section 8 Companies)",
    tagline: "For charitable institutions, religious trusts, and not-for-profit organisations — where tax exemption depends on filing the right form, maintaining the right records, and making the right claims under Sections 11, 12, and 80G.",
    seoTitle: "ITR-7 Filing for Trusts and NGOs India | FoundingLegals",
    seoDescription: "CA-managed ITR-7 filing for charitable trusts, NGOs, Section 8 companies, and religious institutions in India. Section 11/12 exemption, Form 10B audit. Member rates.",
    description: [
      "ITR-7 applies to persons (including companies and trusts) who are required to file a return under Sections 139(4A), 139(4B), 139(4C), or 139(4D) of the Income Tax Act. This covers charitable and religious trusts registered under Sections 12A/12AB, political parties, scientific research associations, universities, and other institutions with specific filing obligations.",
      "The tax exemption that these entities enjoy under Section 11 is conditional — not automatic. To claim it, the trust must apply its income for charitable purposes, maintain Section 11(2) accumulation within limits, file Form 10B (audit report) where applicable, and file ITR-7 with the correct schedule disclosures. A missed filing or a form error can result in the exemption being denied for the entire year.",
    ],
    idealFor: [
      "Charitable trusts registered under Section 12A or 12AB of the Income Tax Act",
      "NGOs and Section 8 companies (not-for-profit) claiming tax exemption",
      "Religious trusts and denominational institutions with property and donation income",
      "Educational institutions, hospitals, and research foundations with Section 10(23C) approval",
      "Political parties required to file under Section 139(4B)",
    ],
    whatsIncluded: [
      { title: "Section 11/12 exemption computation", description: "Income applied to charitable purposes vs. total income computed. Application of income to objects tested and documented." },
      { title: "Section 11(2) accumulation tracking", description: "Any income accumulated beyond 15% of total receipts requires Form 10 filing and specific investment in prescribed assets. We track and advise." },
      { title: "Form 10B audit linkage", description: "For trusts with income above ₹5 lakh, a CA audit in Form 10B is mandatory. We prepare and link the audit report to the ITR-7 filing." },
      { title: "80G donation receipt compliance", description: "If the trust has 80G approval, we verify that Form 10BD (statement of donations) is filed and Form 10BE (acknowledgment to donors) is issued correctly." },
      { title: "Schedule filing", description: "All relevant schedules — Part A general, Schedule AI (aggregate of income), Schedule ER (exempt receipts), Schedule I (application of income) — completed correctly." },
      { title: "Filing and director/trustee DSC", description: "ITR-7 filed with the authorised trustee or director's digital signature. Acknowledgment stored in vault." },
    ],
    documentsRequired: [
      "Registration certificate under Section 12A/12AB or 12AA",
      "Trust deed or Memorandum & Articles of Association (Section 8 company)",
      "Audited financial statements for the year (income and expenditure account, balance sheet)",
      "Form 10B audit report signed by the CA",
      "Form 10 (notice of accumulation) if income is being accumulated beyond 15%",
      "Form 10BD filing details (if 80G approved trust)",
      "List of activities conducted during the year aligned with charitable objects",
      "Bank statements and investment details (for corpus fund and accumulated income)",
    ],
    process: [
      { title: "Registration and exemption verification", description: "We verify the Section 12A/12AB registration is valid and not lapsed. A lapsed registration invalidates the exemption for the year." },
      { title: "Income and application computation", description: "Total income and income applied to charitable purposes are computed. Minimum 85% application requirement is assessed." },
      { title: "Form 10B audit", description: "CA audit in Form 10B is conducted where applicable. Observations and certifications are completed." },
      { title: "80G and Form 10BD compliance check", description: "If the trust has 80G approval, Form 10BD filing is verified and any pending compliance is completed." },
      { title: "ITR-7 filing", description: "Return is filed with all mandatory schedules. E-verified by the authorised trustee or director. Acknowledgment stored." },
    ],
    competitorPricing: [
      { vendor: "Vakilsearch (Zolvit)", price: "₹10,000", note: "ITR-7 filing" },
      { vendor: "RegisterKaro", price: "₹5,000", note: "ITR-7 filing" },
      { vendor: "NGO-specialist CA firm", price: "₹15,000–₹40,000", note: "Includes 12A/12AB compliance advisory" },
    ],
    memberRateNote: "Members pay 50% of the prevailing market rate. Ongoing 12A/12AB compliance, 80G renewal, and FCRA advisory are available at member rates as separate engagements.",
    faqs: [
      { q: "What happens if a trust does not file ITR-7?", a: "A trust claiming exemption under Section 11 must file ITR-7 before 31st October of the assessment year (if audit is required). Non-filing does not just attract a late fee — it can result in denial of the Section 11 exemption for that year, meaning the entire surplus becomes taxable at the maximum marginal rate (currently 30% + surcharge + cess)." },
      { q: "What is the 85% application requirement for charitable trusts?", a: "Under Section 11(1)(a), a trust claiming exemption must apply at least 85% of its income to charitable or religious purposes in India during the year. The remaining 15% can be accumulated. If actual application falls below 85% due to circumstances beyond control, an intimation under Section 11(2) can be filed to accumulate specific amounts for up to 5 years." },
      { q: "Does an NGO need a tax audit for ITR-7?", a: "Form 10B (the audit report under Section 12A(b)) is mandatory for charitable trusts/institutions if their total income (before applying Section 11 exemptions) exceeds ₹5 lakh. This is a separate requirement from the general Section 44AB tax audit. Most active NGOs will require Form 10B." },
      { q: "What is the difference between Section 12A and 12AB registration?", a: "Section 12A was the original registration regime for charitable trusts. Section 12AB is the updated registration introduced from FY 2021-22. All trusts previously registered under Section 12A or 12AA needed to re-register under Section 12AB by a specified date. New registrations are now only under 12AB. Trusts with expired or non-migrated 12A registrations cannot claim Section 11 exemption." },
    ],
    relatedLinks: [
      { name: "ITR-6 Filing (Companies)", href: "/services/CAservices/itr-6-filing" },
      { name: "Tax Audit Execution", href: "/services/CAservices/audit-attestation" },
      { name: "Income Tax Advisory", href: "/services/CAservices/income-tax-advisory" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Letter of Undertaking (LUT) Registration
  // ══════════════════════════════════════════════════
  {
    slug: "lut-registration",
    type: "individual",
    badge: "GST Compliance · Export LUT",
    name: "Letter of Undertaking (LUT)\nRegistration Online",
    tagline: "Export goods and services outside India without paying upfront IGST. Protect your operating working capital with fast zero-rated GST compliance filed within 1–2 business days.",
    seoTitle: "Letter of Undertaking (LUT) Registration Online for Exporters | Founding Legals",
    seoDescription: "File Form GST RFD-11 Letter of Undertaking (LUT) online in 1-2 days. Zero-rated exports without IGST payment. Fixed CA fee ₹2,999 with Founding Legals.",
    description: [
      "Under the Integrated Goods and Services Tax (IGST) Act, 2017, all exports of goods and services outside India, as well as supplies to Special Economic Zone (SEZ) developers or units, qualify as 'zero-rated supplies'. However, exporters face two choices: pay upfront IGST on the invoice value and wait 90 to 120 days for departmental refunds, or file a Letter of Undertaking (LUT) in Form GST RFD-11 to export completely tax-free upfront.",
      "Filing an LUT unlocks zero-rated exports immediately from Day 1. It completely eliminates working capital lockups, shields against interest levies under Section 50, and streamlines international invoice generation for IT exporters, digital agencies, freelancers, and merchant exporters. Founding Legals GST advocates manage end-to-end verification, witness documentation, and electronic filing with instant ARN generation.",
    ],
    idealFor: [
      "Exporters of services (SaaS, software development, consulting, design) billing foreign clients in convertible foreign exchange",
      "Exporters of physical goods shipping across international borders wanting to eliminate upfront IGST payments",
      "Businesses making zero-rated supplies to Special Economic Zone (SEZ) developer units",
      "GST-registered companies seeking immediate cash-flow relief without waiting months for tax refund claims",
    ],
    whatsIncluded: [
      { title: "Export eligibility & GST compliance audit", description: "Verification of your GSTIN status and past filing track record to ensure zero scrutiny blocks or pending notices." },
      { title: "Form GST RFD-11 electronic preparation", description: "Accurate compilation of export details, financial year selection, and authorized signatory declarations on the GST portal." },
      { title: "Witness verification & documentation", description: "Preparation of mandatory dual-witness credentials complying with Central Board of Indirect Taxes & Customs (CBIC) rules." },
      { title: "Digital signature (DSC / EVC) filing", description: "Submission using Class-3 DSC or authorized signatory Aadhaar OTP with instant generation of the LUT ARN certificate." },
      { title: "FIRC & BRC reconciliation advisory", description: "Guidance on linking Foreign Inward Remittance Certificates (FIRC) with your electronic invoices to withstand audit scrutiny." },
      { title: "Annual compliance & renewal calendar", description: "Automated renewal alerts prior to March 31st each financial year to prevent unintentional export tax liabilities." },
    ],
    documentsRequired: [
      "GSTIN Registration Certificate",
      "PAN Card and Aadhaar Card of authorized director / partner / proprietor",
      "Details of two independent witnesses (Full Name, Address, and PAN/Aadhaar number)",
      "Import Export Code (IEC) Certificate (for physical goods exporters)",
      "Bank Account details receiving foreign remittances (cancelled cheque with account details)",
      "Class-3 Digital Signature Certificate (DSC) or registered Aadhaar mobile number for OTP verification",
    ],
    process: [
      { title: "GST & export document verification", description: "Our indirect tax desk verifies your GST portal credentials, authorized signatory rights, and zero-rated eligibility." },
      { title: "Witness compilation & RFD-11 drafting", description: "Form GST RFD-11 is prepared with formal declarations under Rule 96A of the CGST Rules, 2017." },
      { title: "Electronic filing via DSC or EVC", description: "The application is signed and transmitted securely on the GST Common Portal." },
      { title: "Instant ARN certificate issuance", description: "Your Letter of Undertaking Acknowledgment Reference Number (ARN) is generated and archived permanently in your founder vault." },
      { title: "Zero-rated export invoicing setup", description: "We provide compliant export invoice wording: 'Supply meant for export under bond or letter of undertaking without payment of integrated tax'." },
    ],
    competitorPricing: [
      { vendor: "IndiaFilings", price: "₹3,899", note: "Excludes witness coordination" },
      { vendor: "ClearTax", price: "₹3,499", note: "Standard export filing" },
      { vendor: "Vakilsearch", price: "₹3,999", note: "Per financial year" },
      { vendor: "Independent CA (market rate)", price: "₹4,500–₹8,000", note: "All-inclusive" },
    ],
    memberRateNote: "Fixed fee ₹2,999 all-inclusive. Annual April renewals for Founding Legals members handled automatically without disruption.",
    faqs: [
      { q: "What is a Letter of Undertaking (LUT) under GST?", a: "An LUT (Form GST RFD-11) is a legal declaration submitted by an exporter to the GST department stating that all export obligations under Section 16 of the IGST Act will be fulfilled. Once accepted, it permits the exporter to supply goods or services outside India without paying Integrated GST (IGST)." },
      { q: "What is the validity period of an LUT?", a: "An LUT is valid for one entire financial year (from April 1st to March 31st of the subsequent year). A fresh LUT must be filed prior to April 1st for every subsequent financial year." },
      { q: "What happens if an exporter does not file an LUT?", a: "If an exporter fails to submit an LUT before making export supplies, they are legally required to charge and pay 18% IGST on every foreign invoice out of their own pocket, and subsequently file a lengthy refund application (GST RFD-01) which can tie up funds for 3 to 6 months." },
      { q: "Are two witnesses mandatory for filing an LUT?", a: "Yes. Under CBIC guidelines, Form GST RFD-11 requires the names, addresses, and identity details of two independent witnesses to guarantee the statutory declaration." },
      { q: "How long does it take to get the LUT approval ARN?", a: "With Founding Legals, the preparation, witness verification, and portal submission are completed within 1 to 2 working days. The GST portal issues the ARN immediately upon successful DSC/EVC submission." },
    ],
    relatedLinks: [
      { name: "GST Registration", href: "/services/CAservices/gst-registration" },
      { name: "Monthly GST Return Filing", href: "/services/CAservices/gst-monthly-returns" },
      { name: "IEC (Import Export Code)", href: "/services/CAservices/iec-registration" },
      { name: "AD Code Registration", href: "/services/CAservices/ad-code-registration" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: AD Code Registration
  // ══════════════════════════════════════════════════
  {
    slug: "ad-code-registration",
    type: "individual",
    badge: "Export & Customs · AD Code",
    name: "AD Code Registration\n(Bank Authorized Dealer Port Code)",
    tagline: "Link your bank's 14-digit Authorized Dealer code to ICEGATE port customs. Essential for shipping bill generation, customs clearance, and receiving export duty drawbacks.",
    seoTitle: "AD Code Registration Online with Port Customs & ICEGATE | Founding Legals",
    seoDescription: "Register your Bank AD Code on ICEGATE Customs portal in 1-3 business days. Enable customs shipping bills, duty drawback, and export incentives with Founding Legals.",
    description: [
      "An Authorized Dealer Code (AD Code) is a 14-digit numerical code issued by the Reserve Bank of India (RBI) to scheduled commercial banks authorized to deal in foreign exchange. Once you obtain an Import Export Code (IEC) from DGFT, an AD Code must be formally registered at every port (seaport, airport, or inland container depot) from which you intend to ship consignments.",
      "Without AD Code port registration on ICEGATE, Indian Customs will not generate a Shipping Bill for your cargo, halting your export consignment at the port terminal. Furthermore, registering your AD Code links your business bank account with the Public Financial Management System (PFMS), ensuring government export duty drawbacks (DBK), RoDTEP, and RoSCTL incentives are directly deposited into your account without delays.",
    ],
    idealFor: [
      "Exporters preparing their first physical or digital cargo shipment abroad before shipping bills are filed",
      "Businesses routing goods through a new seaport, airport, or inland container depot (ICD)",
      "Exporters experiencing frozen or delayed government duty drawbacks and export incentive remittances",
      "E-commerce merchants shipping international retail orders through postal or courier customs terminals",
    ],
    whatsIncluded: [
      { title: "Bank AD Code authorization letter review", description: "Verification that the bank letter adheres strictly to DGFT Annexure-A format with official banker seal and signatures." },
      { title: "ICEGATE registration & portal profile linking", description: "Registration of your digital signature and entity profile on the Indian Customs Electronic Gateway." },
      { title: "Port customs e-filing & assignment", description: "Submission of AD Code registration to specific Customs port locations (e.g. JNPT, Chennai Port, Air Cargo Delhi)." },
      { title: "PFMS bank account verification", description: "Validation on the Public Financial Management System to activate automated duty drawback deposits." },
      { title: "Customs query resolution & ICEGATE tracking", description: "Proactive liaison with port customs superintendents to clear system queries or documentation mismatches." },
      { title: "Confirmation receipt & shipping bill clearance", description: "Delivery of official Customs acknowledgment confirming active status for instant shipping bill filing." },
    ],
    documentsRequired: [
      "Bank AD Code authorization letter issued on bank letterhead (in prescribed DGFT Annexure-A format)",
      "DGFT Import Export Code (IEC) certificate",
      "GST Registration Certificate",
      "PAN Card of the company, LLP, or proprietor",
      "Cancelled bank cheque with pre-printed corporate name, account number, and IFSC code",
      "Class-3 Digital Signature Certificate (DSC) for ICEGATE registration",
    ],
    process: [
      { title: "Bank letter & IEC verification", description: "We examine your bank AD Code letter to ensure branch codes, BSR codes, and account numbers match ICEGATE requirements." },
      { title: "ICEGATE profile setup & DSC integration", description: "Your digital signature token is mapped to the Indian Customs portal for electronic authorization." },
      { title: "Port customs submission", description: "The registration request is transmitted to designated port locations for customs officer approval." },
      { title: "PFMS validation & drawback linkage", description: "Bank account is cleared through PFMS for direct credit of export benefits and customs duty refunds." },
      { title: "Port clearance activation", description: "Customs approval is confirmed, enabling your CHA or logistics partner to immediately file shipping bills." },
    ],
    competitorPricing: [
      { vendor: "IndiaFilings", price: "₹3,899", note: "Single port only" },
      { vendor: "Vakilsearch", price: "₹3,499", note: "Excludes ICEGATE registration" },
      { vendor: "Customs Clearing House Agent (CHA)", price: "₹5,000–₹10,000", note: "Varies by port" },
      { vendor: "Independent CA", price: "₹4,000–₹8,000", note: "Standard fee" },
    ],
    memberRateNote: "Fixed fee ₹2,499 per primary port. Multi-port bundles available at bundled member pricing.",
    faqs: [
      { q: "What is an AD Code in export business?", a: "An Authorized Dealer Code (AD Code) is a 14-digit code provided by your bank under RBI foreign exchange regulations. It associates your bank account with port customs so customs authorities can track international trade payments and credit government export incentives." },
      { q: "Is AD Code registration mandatory after obtaining an IEC?", a: "Yes. An IEC grants legal authority to export, but port customs cannot generate a Shipping Bill for export clearance without an active AD Code registered at the physical port of departure." },
      { q: "Do I need to register my AD Code at multiple ports?", a: "Yes. If your company exports goods from Nhava Sheva (JNPT) and also from Delhi Air Cargo, the AD Code must be registered separately at both port codes. However, you only need one letter from your bank." },
      { q: "What is the validity of an AD Code registration?", a: "Once approved by port customs, an AD Code registration carries lifetime validity for that specific port, provided your bank account and IEC remain active and in good standing." },
    ],
    relatedLinks: [
      { name: "IEC (Import Export Code)", href: "/services/CAservices/iec-registration" },
      { name: "Letter of Undertaking (LUT)", href: "/services/CAservices/lut-registration" },
      { name: "GST Registration", href: "/services/CAservices/gst-registration" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Customized Agreement Draft Request
  // ══════════════════════════════════════════════════
  {
    slug: "customized-agreement-draft",
    type: "individual",
    badge: "Legal Services · Bespoke Contracts",
    name: "Customized Agreement\nDrafting Service",
    tagline: "Bespoke legal contracts tailored by senior corporate advocates to your exact commercial terms, cap table structure, and risk mitigation requirements.",
    seoTitle: "Custom Legal Agreement Drafting by Corporate Advocates | Founding Legals",
    seoDescription: "Request bespoke startup and commercial contract drafting in 1-2 business days. Vetted by specialized corporate lawyers. Founder vesting, SLAs, JVs, and complex deals.",
    description: [
      "Generic internet templates and automated form-fillers cannot capture the nuances of high-stakes commercial relationships, strategic equity splits, or enterprise procurement. A single omitted indemnity carve-out, ambiguous termination trigger, or weak intellectual property assignment clause can expose founders to personal liability, legal deadlocks, and severe due diligence write-downs.",
      "Founding Legals Customized Agreement Drafting pairs you directly with specialized startup advocates and commercial attorneys. Whether you require bespoke founder vesting agreements with multi-tier milestones, enterprise-grade Master Service Agreements (MSAs) with custom SLAs, cross-border technology licensing, or structured Joint Venture pacts, our legal team architects legally airtight contracts tailored to your exact business objectives.",
    ],
    idealFor: [
      "Companies with two or more founders seeking custom equity vesting, role responsibilities, and clear exit buyback terms",
      "Startups preparing for an institutional funding round needing clean, audit-ready documentation ahead of investor due diligence",
      "SaaS and enterprise technology providers negotiating high-value vendor contracts with customized SLA penalty matrices",
      "Firms entering into collaborative Joint Ventures, Profit-Sharing partnerships, or Consortia requiring robust dispute resolution clauses",
    ],
    whatsIncluded: [
      { title: "One-on-one attorney consultation", description: "In-depth scoping call with a senior corporate advocate to understand business dynamics, risk tolerance, and commercial objectives." },
      { title: "Bespoke contract drafting from scratch", description: "Comprehensive drafting aligned with the Indian Contract Act, 1872 and industry-specific statutory regulations." },
      { title: "Enterprise risk & liability ring-fencing", description: "Tailored clauses governing limitation of liability, consequential damages, mutual indemnification, and IP ownership." },
      { title: "Two iterative revision cycles included", description: "Complete clause adjustments based on internal founder feedback and counterparty redlines." },
      { title: "State-specific stamp duty guidance", description: "Exact calculation of judicial and non-judicial stamp duty across 28 Indian states to guarantee court enforceability." },
      { title: "Execution-ready PDF & Word formats", description: "Final delivery in editable Word format along with Aadhaar-based OTP electronic signature setup." },
    ],
    documentsRequired: [
      "Commercial terms summary, email agreement, or term sheet",
      "Corporate identity details (CIN/LLPIN/PAN) and registered addresses of all parties",
      "Scope of work, milestone deliverables, and payment fee schedules",
      "Specific risk factors, non-compete durations, or restrictive covenants requested",
    ],
    process: [
      { title: "Requirements intake & legal scoping", description: "You submit your commercial requirements and schedule an intake consultation with our corporate legal desk." },
      { title: "First legal draft formulation", description: "Our advocates craft a comprehensive, bespoke contract within 1 to 2 business days." },
      { title: "Review & iterative refinement", description: "We incorporate your line-by-line feedback and refine clauses based on commercial discussions." },
      { title: "Execution packaging & e-signature", description: "The finalized agreement is prepared with state stamp duty stamping instructions and digital execution links." },
    ],
    competitorPricing: [
      { vendor: "Top-tier Law Firm", price: "₹25,000–₹60,000", note: "Bespoke commercial drafting" },
      { vendor: "Vakilsearch Custom Desk", price: "₹6,999–₹12,000", note: "Limited revisions" },
      { vendor: "IndiaFilings", price: "₹5,000–₹8,000", note: "Standard template customization" },
    ],
    memberRateNote: "Starts at ₹1,999 for standard custom agreements. Complex cross-border and venture capital documents quoted transparently upfront.",
    faqs: [
      { q: "What types of agreements can be customized?", a: "We customize all corporate and commercial contracts including Founders' Agreements, Term Sheets, Shareholders' Agreements (SHA), Master Service Agreements (MSA), White-Label Licensing, Technology Transfer, Joint Ventures, Commercial Leases, and Non-Disclosure Agreements (NDAs)." },
      { q: "How quickly can I receive the first draft?", a: "Standard custom agreements are delivered within 1 to 2 business days. Urgent expedited turnarounds are available upon request." },
      { q: "Are custom agreements court-enforceable in India?", a: "Yes. All contracts are drafted in accordance with the Indian Contract Act, 1872, executed on appropriate non-judicial stamp paper, and electronically signed under the Information Technology Act, 2000." },
    ],
    relatedLinks: [
      { name: "Founders' Agreement", href: "/services/LegalServices/agreements/founders-agreement" },
      { name: "Master Service Agreement", href: "/services/LegalServices/agreements/master-service-agreement" },
      { name: "IP Assignment Agreement", href: "/services/LegalServices/agreements/ip-assignment-agreement" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Subsidy Application Support
  // ══════════════════════════════════════════════════
  {
    slug: "subsidy-application-support",
    type: "individual",
    badge: "Government Support · Subsidies",
    name: "Government Subsidy\nApplication Support",
    tagline: "Unlock non-dilutive government capital, state industrial incentives, interest subsidies, and technology upgradation schemes with complete CA-managed filing.",
    seoTitle: "Government Subsidy Application Support in India | Founding Legals",
    seoDescription: "End-to-end assistance for Central & State government industrial subsidies, interest subvention, and MSME capital grants. Expert CA documentation by Founding Legals.",
    description: [
      "Every year, thousands of crores in central and state government industrial subsidies remain unclaimed due to complex application procedures, stringent documentation requirements, and lack of statutory follow-up. From capital investment subsidies (up to 30% on plant & machinery) to interest subventions (2%–5% on term loans) and stamp duty exemptions, government incentives can dramatically accelerate business profitability.",
      "Founding Legals Government Desk bridges the gap between commercial enterprises and departmental nodal agencies. Our chartered accountants and policy specialists identify high-value central schemes (such as PLI, CLCSS, and PMFME) as well as State Industrial Development Policies, compile CA-certified capital expenditure statements, prepare official project dossiers, and manage submission through to sanction and fund release.",
    ],
    idealFor: [
      "Manufacturing, assembly, processing, and green energy enterprises establishing new industrial facilities",
      "MSMEs undertaking technological modernization, plant expansion, or adopting renewable energy infrastructure",
      "Businesses seeking capital investment subsidies, electricity tariff subsidies, and stamp duty reimbursements",
      "Commercial entities seeking interest subventions on active bank term loans under state industrial packages",
    ],
    whatsIncluded: [
      { title: "Multi-scheme eligibility assessment", description: "Comprehensive audit against 50+ central and state government industrial incentive policies." },
      { title: "CA-certified capital expenditure certification", description: "Independent chartered accountant verification of plant, machinery, civil construction, and equipment expenses." },
      { title: "Departmental dossier preparation", description: "Compilation of detailed statutory application sets aligned with District Industries Centre (DIC) guidelines." },
      { title: "Nodal portal submission & tracking", description: "Digital application filing on state single-window clearance and central departmental portals." },
      { title: "Physical inspection liaison guidance", description: "Preparation for departmental officer visits, technical verifications, and compliance queries." },
      { title: "Disbursement follow-up & sanction monitoring", description: "Continuous tracking until the subsidy amount is sanctioned and credited into your corporate account." },
    ],
    documentsRequired: [
      "Udyam MSME Registration Certificate and Entity Incorporation documents (COI/MOA/AOA/Partnership Deed)",
      "Audited financial statements and tax returns for the last 2 to 3 years",
      "Industrial land title deed, lease agreement, and factory building plan approvals",
      "Invoices, delivery challans, and payment receipts for plant and machinery",
      "Bank loan sanction letter, bank appraisal report, and bank account disbursement statements",
    ],
    process: [
      { title: "Scheme matching & project audit", description: "We evaluate your industry sector, location, capital investment, and team structure against active state policies." },
      { title: "Financial documentation & CA certification", description: "Our chartered accountants audit invoices and certify eligible capital investments." },
      { title: "Government portal filing", description: "The complete dossier is submitted on the designated state/central single-window portal." },
      { title: "Query management & inspection support", description: "We handle departmental clarifications and assist during physical verification audits." },
      { title: "Sanction order & subsidy release", description: "The subsidy is formally approved and financial tranches are disbursed directly to your bank account." },
    ],
    competitorPricing: [
      { vendor: "Industrial Subsidy Consultants", price: "₹25,000–₹50,000", note: "+ 5% to 10% commission on disbursement" },
      { vendor: "Local Chartered Accountant", price: "₹20,000–₹35,000", note: "Varies by state" },
    ],
    memberRateNote: "Fixed CA advisory fee starting at ₹4,999. We charge zero percentage commission on your sanctioned subsidy amount.",
    faqs: [
      { q: "What types of government subsidies are available for businesses in India?", a: "Key subsidies include Capital Investment Subsidies (15%–30% reimbursement on machinery), Interest Subventions (2%–5% reduction on bank loan interest), Electricity Duty exemptions, Stamp Duty refunds on industrial land purchase, and Quality Certification (ISO/ZED) reimbursements." },
      { q: "Does a startup need to be profitable to apply for subsidies?", a: "No. Greenfield subsidies and capital investment incentives are awarded based on physical infrastructure setup, machinery purchases, and employment generation, regardless of immediate business profitability." },
      { q: "How long does government subsidy approval take?", a: "Depending on the specific central or state department, initial application scrutiny takes 4 to 8 weeks, followed by physical inspection and sanction committee review within 3 to 6 months." },
    ],
    relatedLinks: [
      { name: "UDYAM / MSME Registration", href: "/services/CAservices/msme-registration" },
      { name: "Government Loan Assistance", href: "/services/CAservices/government-loan-assistance" },
      { name: "Detailed Project Report (DPR)", href: "/services/CAservices/project-report-preparation" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Grant Application Support
  // ══════════════════════════════════════════════════
  {
    slug: "grant-application-support",
    type: "individual",
    badge: "Subsidies & Loans · Startup Grants",
    name: "Startup Grant\nApplication Support",
    tagline: "Secure non-dilutive, equity-free government funding from ₹10 Lakhs to ₹50 Lakhs under SISFS, BIRAC BIG, MeitY TIDE 2.0, and state innovation seed funds.",
    seoTitle: "Startup India Grant Application Support (SISFS, BIRAC, MeitY) | Founding Legals",
    seoDescription: "Win non-dilutive government startup grants with professional narrative drafting, financial modeling, and DPIIT pitch preparation by Founding Legals.",
    description: [
      "Non-dilutive capital is the highest quality funding a founder can receive: you get early-stage growth capital to build prototypes, run pilot trials, and hire talent without giving up equity or taking on debt. Across India, the Central Government (DPIIT, MeitY, BIRAC, DST) and state startup missions disburse over ₹2,000 Crores annually through institutional startup grant schemes.",
      "However, winning government grants requires precise alignment with evaluation criteria, problem-solution articulation, measurable innovation metrics, and clean milestone budgeting. Founding Legals Grant Application Desk pairs founders with experienced startup analysts and CA specialists to draft government-compliant grant proposals, select optimal incubators, and prepare founders for presentation committee rounds.",
    ],
    idealFor: [
      "Early-stage technology, hardware, AI, biotech, and sustainability startups building innovative IP-driven products",
      "DPIIT-recognized startups applying for up to ₹20 Lakhs (prototype grant) or ₹50 Lakhs (commercialization) under SISFS",
      "Biotechnology, medtech, and life sciences innovators applying for BIRAC BIG or SPARSH funding grants",
      "Deeptech and electronics hardware ventures seeking NIDHI-PRAYAS or MeitY TIDE 2.0 incubator funding",
    ],
    whatsIncluded: [
      { title: "Grant scheme matching & eligibility vetting", description: "Analysis of your MVP stage, technology readiness level (TRL), and IP novelty against active grant mandates." },
      { title: "Narrative drafting & proposal formulation", description: "Writing professional, compelling responses for problem statement, societal impact, addressable market, and innovation moat." },
      { title: "3-year milestone expenditure budget", description: "Formulation of CA-certified utilization schedules detailing manpower, prototyping, testing, and operational allocations." },
      { title: "Incubator selection strategy", description: "Guidance on shortlisting the most aligned partner incubators to maximize application acceptance probability." },
      { title: "Portal filing & compliance verification", description: "Digital submission on Startup India, MeitY, or BIRAC portals with all mandatory statutory attachments." },
      { title: "Mock committee pitch & Q&A preparation", description: "Simulated presentation coaching with feedback on presentation deck delivery and technical questioning." },
    ],
    documentsRequired: [
      "DPIIT Certificate of Recognition (Startup India)",
      "Certificate of Incorporation and Company PAN",
      "Pitch deck and product demonstration video / prototype architecture diagram",
      "3-year projected financial roadmap and milestone-linked fund utilization budget",
      "Founder CVs and details of patents, trademarks, or research publications (if any)",
    ],
    process: [
      { title: "Diagnostic scoping call", description: "We assess your product's TRL level, novelty, and commercial viability against target grant criteria." },
      { title: "Narrative drafting & budget formulation", description: "Our team drafts your proposal narrative and formats the financial milestone tables." },
      { title: "Application filing & incubator selection", description: "We route your proposal to optimal authorized incubators on the government portal." },
      { title: "Pitch coaching & screening", description: "We run mock evaluation sessions to prepare founders for the incubator screening committee." },
      { title: "Grant agreement & fund tranche release", description: "Support with post-selection documentation and milestone compliance reporting." },
    ],
    competitorPricing: [
      { vendor: "Grant Consulting Boutique", price: "₹20,000–₹40,000", note: "+ 5% grant commission" },
      { vendor: "Incubator Application Agents", price: "₹15,000–₹25,000", note: "Limited drafting" },
    ],
    memberRateNote: "Fixed fee starting at ₹4,999. Zero percentage commission on your sanctioned grant capital.",
    faqs: [
      { q: "Do I have to give equity to the government or incubator for a grant?", a: "No. True grants (such as SISFS prototype grants, MeitY TIDE 2.0, and BIRAC BIG) are 100% non-dilutive, equity-free funding. You retain 100% ownership of your company and intellectual property." },
      { q: "Is DPIIT recognition required to apply for startup grants?", a: "Yes, for central schemes like the Startup India Seed Fund Scheme (SISFS), official DPIIT recognition is a mandatory prerequisite. We can bundle DPIIT registration alongside your grant application." },
      { q: "Can a software or mobile app startup get government grants?", a: "Yes. Software, AI, SaaS, and platform startups are eligible under multiple schemes (including SISFS, MeitY TIDE 2.0, and state startup seed funds) provided they demonstrate original technical innovation and scalability." },
    ],
    relatedLinks: [
      { name: "DPIIT Startup India Certification", href: "/services/CAservices/dpiit-recognition" },
      { name: "Government Subsidy Application", href: "/services/CAservices/subsidy-application-support" },
      { name: "Schemes & Grants Dashboard", href: "/services/LegalServices/schemes-and-grants" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Government Loan Assistance
  // ══════════════════════════════════════════════════
  {
    slug: "government-loan-assistance",
    type: "individual",
    badge: "Subsidies & Loans · Priority Lending",
    name: "Government Loan\nAssistance & CGTMSE",
    tagline: "Apply for collateral-free bank financing up to ₹5 Crore under CGTMSE, PMEGP, Stand-Up India, MUDRA, and SIDBI low-interest credit schemes.",
    seoTitle: "Collateral-Free Government Loan Assistance (CGTMSE, MUDRA, PMEGP) | Founding Legals",
    seoDescription: "Get expert assistance applying for collateral-free MSME loans up to ₹5 Crore under CGTMSE, PMEGP, and MUDRA. Complete project report and bank liaison with Founding Legals.",
    description: [
      "Securing debt capital from institutional banks is often the most cost-effective way to fund working capital and capital expenditure without equity dilution. However, traditional banks routinely demand residential property or physical assets as security. To overcome this, the Government of India operates specialized credit guarantee programs that allow startups and MSMEs to secure collateral-free credit up to ₹5 Crores.",
      "Founding Legals Government Loan Assistance guides business owners through the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), Prime Minister's Employment Generation Programme (PMEGP), Stand-Up India, and MUDRA loan schemes. Our CA desk compiles bank-compliant 5-year Detailed Project Reports (DPRs), formats official CMA data, and liaises with authorized lending branches.",
    ],
    idealFor: [
      "MSMEs and early-stage companies needing working capital (CC/OD limits) or machinery loans without pledging personal assets",
      "Entrepreneurs applying for manufacturing loans up to ₹50 Lakhs (with up to 35% government subsidy) under PMEGP",
      "Women or SC/ST entrepreneurs seeking greenfield project financing from ₹10 Lakhs to ₹1 Crore under Stand-Up India",
      "Small traders, artisans, and service units seeking quick credit up to ₹10 Lakhs under the MUDRA scheme",
    ],
    whatsIncluded: [
      { title: "Credit scheme matching & eligibility check", description: "Evaluating turnover, credit history, and asset requirements against CGTMSE, PMEGP, and SIDBI norms." },
      { title: "CA-certified 5-year Detailed Project Report (DPR)", description: "Bank-approved project report with comprehensive financial projections, DSCR calculations, and sensitivity analysis." },
      { title: "CMA data compilation (7 statements)", description: "Preparation of Credit Monitoring Arrangement (CMA) data formatted to nationalized bank appraisal standards." },
      { title: "Application filing on government loan portals", description: "Digital submission through the Udyamimitra, JanSamarth, and bank MSME portals." },
      { title: "CGTMSE coverage & fee structuring advisory", description: "Ensuring your sanction letter includes collateral waivers under official government guarantee coverage." },
      { title: "Branch manager liaison support", description: "Assisting founders during bank interviews, credit appraisal meetings, and query resolution." },
    ],
    documentsRequired: [
      "Udyam MSME Registration Certificate and Incorporation/Registration documents",
      "Audited financial statements and tax returns for the last 2 to 3 years (or projected financials for new units)",
      "Bank statements for the last 12 months for all active business and promoter accounts",
      "Quotations and proforma invoices for machinery, equipment, or software purchases",
      "KYC documents (PAN, Aadhaar) and Net Worth statements of all promoters/partners",
    ],
    process: [
      { title: "Credit assessment & scheme alignment", description: "We evaluate your financial standing and recommend the most suitable government loan program." },
      { title: "DPR & CMA data formulation", description: "Our chartered accountants prepare bank-compliant financial models and project feasibility reports." },
      { title: "Bank application submission", description: "The complete loan dossier is submitted via designated government lending platforms." },
      { title: "Bank scrutiny & appraisal follow-up", description: "We assist with bank queries, inspection visits, and financial ratio clarifications." },
      { title: "Sanction letter & credit disbursement", description: "Your loan is formally sanctioned with CGTMSE guarantee cover and funds are released." },
    ],
    competitorPricing: [
      { vendor: "Loan DSA / Broker Agents", price: "1%–3% of total loan amount", note: "Commission on disbursement" },
      { vendor: "Independent CA Firm", price: "₹15,000–₹30,000", note: "DPR and CMA filing" },
    ],
    memberRateNote: "Fixed advisory fee starting at ₹3,999 with zero percentage broker commissions on sanctioned loan proceeds.",
    faqs: [
      { q: "What is the maximum loan amount under CGTMSE without collateral?", a: "Under the updated CGTMSE guidelines, eligible micro and small enterprises can avail collateral-free credit facilities (term loan and/or working capital) up to ₹5 Crore from participating banks and financial institutions." },
      { q: "Can a new startup get a loan under CGTMSE?", a: "Yes. Both new and existing micro and small enterprises in manufacturing and service sectors (including IT, healthcare, and retail trade) are eligible for CGTMSE coverage." },
      { q: "What is the interest rate on government-assisted MSME loans?", a: "Interest rates are benchmarked to the bank's external repo rate (EBLR) or MCLR, typically ranging between 8.5% and 11.5% per annum, subject to the credit rating and scheme guidelines." },
    ],
    relatedLinks: [
      { name: "Detailed Project Report (DPR)", href: "/services/CAservices/project-report-preparation" },
      { name: "UDYAM / MSME Registration", href: "/services/CAservices/msme-registration" },
      { name: "Subsidy Application Support", href: "/services/CAservices/subsidy-application-support" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Government Tender Support
  // ══════════════════════════════════════════════════
  {
    slug: "government-tender-support",
    type: "individual",
    badge: "Government Services · GeM & Tenders",
    name: "Government Tender\n& GeM Portal Support",
    tagline: "Win government procurement contracts. Complete GeM portal onboarding, tender search, Earnest Money Deposit (EMD) exemption filing, and technical bid preparation.",
    seoTitle: "Government Tender Support & GeM Portal Registration | Founding Legals",
    seoDescription: "Bid for public tenders with confidence. GeM registration, MSME EMD exemption, technical bid drafting, and tender compliance by Founding Legals.",
    description: [
      "The Indian public procurement market exceeds ₹20 Lakh Crores annually across Central Ministries, State Governments, Public Sector Undertakings (PSUs), and Defence establishments. Under the Public Procurement Policy for MSEs, central government departments are mandated to procure a minimum of 25% of their total annual purchases from micro and small enterprises.",
      "Furthermore, registered MSMEs enjoy critical statutory advantages: complete exemption from paying Earnest Money Deposits (EMD), free tender document issuance, and purchase preferences in competitive bidding. Founding Legals Tender Support Desk assists businesses with GeM (Government e-Marketplace) primary and secondary seller onboarding, catalogue approvals, vendor assessment, EMD waiver documentation, and technical bid compliance.",
    ],
    idealFor: [
      "Product manufacturers, suppliers, and service providers wanting to sell directly to government buyers on GeM",
      "MSMEs seeking exemption from tender fees and Earnest Money Deposits (EMD) under public procurement rules",
      "Companies bidding on Central Public Procurement Portal (CPPP) or State e-Procurement portals for the first time",
      "Businesses needing professional assistance to avoid technical bid disqualifications due to document discrepancies",
    ],
    whatsIncluded: [
      { title: "GeM portal seller onboarding & profile verification", description: "Primary seller registration, authorized signatory Aadhaar validation, and bank account linking." },
      { title: "Brand approval & catalogue listing", description: "Listing your products or services under relevant GeM categories with OEM/reseller authorization." },
      { title: "Vendor Assessment (QCI) guidance", description: "Assistance with Quality Council of India desktop assessment and technical verification for OEMs." },
      { title: "EMD exemption & tender waiver filings", description: "Preparation of statutory MSME tender fee exemption certificates and non-conviction affidavits." },
      { title: "Technical bid compliance & compilation", description: "Review of Tender Document (RFP/NIT), compiling experience certificates, solvency certificates, and technical forms." },
      { title: "Reverse Auction (RA) & L1 bidding strategy", description: "Guidance on electronic bid submission, pricing structure, and post-award contract management." },
    ],
    documentsRequired: [
      "Udyam MSME Registration Certificate and Entity Incorporation documents",
      "Class-3 Digital Signature Certificate (DSC) enabled for e-Tendering and GeM",
      "GSTIN Registration Certificate and last 3 months GSTR-3B filings",
      "Audited financial statements and Turnover Certificate certified by a CA",
      "PAN Card and Aadhaar Card of authorized signatory",
      "Past performance work orders, completion certificates, and client feedback (if available)",
    ],
    process: [
      { title: "GeM registration & identity verification", description: "We configure your seller account and register your authorized digital signature on the GeM portal." },
      { title: "Brand approval & catalogue upload", description: "Your products and services are classified under standardized GeM categories with pricing matrices." },
      { title: "Tender search & requirement analysis", description: "We analyze tender eligibility criteria, turnover thresholds, and technical qualification terms." },
      { title: "Technical bid dossier compilation", description: "All mandatory certificates, EMD exemption affidavits, and compliance matrices are compiled." },
      { title: "e-Bid submission & post-tender support", description: "The bid is uploaded securely before the closing deadline, followed by tracking until award announcement." },
    ],
    competitorPricing: [
      { vendor: "Tender Bidding Agency", price: "₹8,000–₹18,000", note: "Per tender filing" },
      { vendor: "GeM Registration Agents", price: "₹3,500–₹6,000", note: "Excludes catalogue approval" },
    ],
    memberRateNote: "Fixed fee starting at ₹2,999. Dedicated assistance across both GeM and state e-tendering portals.",
    faqs: [
      { q: "Are MSMEs completely exempt from paying EMD in government tenders?", a: "Yes. Under Rule 170 of the General Financial Rules (GFR), 2017, and the Public Procurement Policy, micro and small enterprises registered with Udyam are 100% exempt from submitting Earnest Money Deposits (EMD) and tender document fees." },
      { q: "What is GeM (Government e-Marketplace)?", a: "GeM is the mandatory national public procurement portal in India where central and state government ministries, departments, and public sector enterprises purchase goods and services." },
      { q: "Can a newly incorporated company bid for government tenders?", a: "Yes. For DPIIT-recognized startups and MSMEs, central government guidelines allow relaxation of prior turnover and prior experience criteria for many public tenders, provided quality and technical standards are satisfied." },
    ],
    relatedLinks: [
      { name: "UDYAM / MSME Registration", href: "/services/CAservices/msme-registration" },
      { name: "DPIIT Startup India Certification", href: "/services/CAservices/dpiit-recognition" },
      { name: "Government Certification Support", href: "/services/CAservices/government-certification-support" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Registration & Licence Assistance
  // ══════════════════════════════════════════════════
  {
    slug: "registration-licence-assistance",
    type: "individual",
    badge: "Government Services · Statutory Permits",
    name: "Statutory Registration\n& Licence Assistance",
    tagline: "Consolidated statutory licensing for your offices, warehouses, and commercial operations. Shop Act, Municipal Trade License, Pollution NOC, and state registrations.",
    seoTitle: "Commercial Business Licenses & Statutory Registration Support | Founding Legals",
    seoDescription: "Obtain Shop & Establishment licenses, Municipal Trade Permits, and statutory commercial certificates across all Indian states with Founding Legals.",
    description: [
      "Operating a commercial business in India requires compliance with a matrix of local, municipal, and state-level statutory regulations. Opening an office, warehouse, retail store, or cloud kitchen without mandatory local permits exposes businesses to administrative penalties, closure notices from municipal corporations, and inspection roadblocks.",
      "Founding Legals Statutory Licensing Desk offers single-window assistance across all 28 Indian states. We handle Shop and Establishment (Gumasta) registration, Municipal Corporation Trade Licenses, Pollution Control Board (SPCB) CTE/CTO consents, Fire Safety clearances, and local labour permits — ensuring your operational premises are 100% legally compliant from day one.",
    ],
    idealFor: [
      "Commercial offices, retail storefronts, and co-working spaces establishing presence in any Indian municipal ward",
      "Warehouses, logistics hubs, and e-commerce fulfillment centers requiring state commercial licenses",
      "Cloud kitchens, bakeries, and food processing facilities needing municipal health trade licenses",
      "Enterprises expanding multi-city footprints needing consistent, headache-free regulatory licensing",
    ],
    whatsIncluded: [
      { title: "Statutory licensing audit & jurisdiction check", description: "Comprehensive mapping of mandatory state, district, and municipal permissions required for your business activity." },
      { title: "Shop & Establishment (Gumasta) registration", description: "Preparation and submission of state labour department registrations for commercial establishments." },
      { title: "Municipal Corporation Trade License", description: "Filing and tracking of local body commercial trade permits and health licensing." },
      { title: "Pollution Control (SPCB) categorization & NOC", description: "Guidance on White/Green/Orange industrial category classifications and Consent to Establish/Operate filings." },
      { title: "Inspector liaison & query resolution", description: "Direct communication with local municipal ward inspectors to resolve documentation clarifications." },
      { title: "Digital vault storage & annual renewal alerts", description: "All issued licenses archived in your secure vault with automated renewal reminders." },
    ],
    documentsRequired: [
      "Certificate of Incorporation, Partnership Deed, or Proprietorship identity proof",
      "Proof of registered premises (Electricity bill, water bill, or property tax receipt not older than 2 months)",
      "Registered rent agreement with landlord along with a formal No Objection Certificate (NOC)",
      "PAN Card, Aadhaar Card, and passport-size photographs of all directors/partners/proprietor",
      "Premises layout plan and list of employees / operational machinery (if applicable)",
    ],
    process: [
      { title: "Jurisdiction & permit identification", description: "We determine the exact state and municipal ward rules governing your commercial premises." },
      { title: "Document compilation & notarization", description: "Premises documents, landlord NOCs, and identity proofs are compiled into statutory application sets." },
      { title: "Municipal & state portal submission", description: "Applications are submitted through state single-window or municipal corporation systems." },
      { title: "Inspection management & approval", description: "Our team coordinates with local authorities to ensure prompt license clearance." },
      { title: "Certificate issuance", description: "Official commercial certificates are delivered and stored permanently in your digital vault." },
    ],
    competitorPricing: [
      { vendor: "Local Municipal Clearing Agent", price: "₹4,000–₹8,000", note: "+ unofficial inspection costs" },
      { vendor: "Online Legal Portals", price: "₹3,500–₹6,000", note: "Basic filing only" },
    ],
    memberRateNote: "Transparent CA-managed execution starting at ₹1,999. Zero surprise broker markups or hidden fees.",
    faqs: [
      { q: "Is a Shop and Establishment license mandatory for IT or consulting offices?", a: "Yes. In almost all Indian states, every commercial establishment (including software companies, consultants, and agencies) employing staff or operating from physical premises must register under the state's Shop and Establishment Act within 30 days of opening." },
      { q: "Can I register a commercial license for a residential address or home office?", a: "Yes, many municipal bodies permit home-office commercial registrations for service-oriented businesses and consultancies, provided an NOC is obtained from the property owner." },
      { q: "How long is a Municipal Trade License valid?", a: "Most trade licenses are valid for one financial year and must be renewed annually in March/April. Certain states offer 3 to 5-year multi-year validity options upon payment of advance municipal fees." },
    ],
    relatedLinks: [
      { name: "Labour License Registration", href: "/services/CAservices/labour-license" },
      { name: "Professional Tax Registration", href: "/services/CAservices/professional-tax-registration" },
      { name: "GST Registration", href: "/services/CAservices/gst-registration" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Government Certification Support
  // ══════════════════════════════════════════════════
  {
    slug: "government-certification-support",
    type: "individual",
    badge: "Government Services · Quality Accreditations",
    name: "Government Certification\n& Quality Accreditations",
    tagline: "Elevate brand trust and tender eligibility with ISO 9001:2015, ISO 27001, MSME ZED Certification, CE Marking, and Bureau of Indian Standards (BIS/ISI) approvals.",
    seoTitle: "ISO 9001, ISO 27001, ZED & BIS Certification Support | Founding Legals",
    seoDescription: "Obtain ISO 9001, ISO 27001, ZED MSME, and BIS quality certifications with end-to-end audit readiness, documentation, and accreditation support by Founding Legals.",
    description: [
      "In competitive B2B sales, public procurement, and international exports, quality accreditations are no longer optional marketing badges — they are strict pre-qualification criteria. Enterprise buyers and government tenders routinely reject vendors who lack ISO 9001 (Quality Management) or ISO 27001 (Information Security) accreditations. Moreover, the Ministry of MSME offers up to 80% subsidies on MSME Sustainable (ZED) Certification.",
      "Founding Legals Quality & Certification Desk delivers end-to-end audit readiness. We conduct gap analyses, draft Standard Operating Procedures (SOPs) and Quality Manuals, execute internal compliance audits, and coordinate with IAF/NABCB-accredited certification bodies to secure authentic, internationally recognized certifications without disruption to your daily operations.",
    ],
    idealFor: [
      "Technology and SaaS companies seeking ISO 27001 certification to win enterprise, banking, and overseas customers",
      "Manufacturing and service businesses seeking ISO 9001:2015 to satisfy government tender pre-qualification thresholds",
      "MSMEs seeking up to 80% government financial assistance under the Ministry of MSME ZED (Zero Defect Zero Effect) scheme",
      "Exporters and electronic hardware manufacturers requiring CE marking, RoHS, or Bureau of Indian Standards (BIS/ISI) licensing",
    ],
    whatsIncluded: [
      { title: "Diagnostic gap analysis & roadmap", description: "Assessment of existing operational processes against the requirements of your target quality standard." },
      { title: "Quality manual & SOP documentation", description: "Drafting of mandatory compliance policies, risk registers, operational procedures, and corrective action workflows." },
      { title: "Internal audit & readiness simulation", description: "Execution of pre-audit checks to identify and resolve non-conformances prior to the official audit." },
      { title: "IAF/NABCB accredited body coordination", description: "Liaison with authorized independent certification auditors ensuring worldwide acceptance." },
      { title: "External audit defense support", description: "Direct guidance during Stage 1 (Documentation Audit) and Stage 2 (Implementation Audit) verification." },
      { title: "Official certificate delivery & registry listing", description: "Issuance of verifiable certificate and registration on the international accreditation forum database." },
    ],
    documentsRequired: [
      "Certificate of Incorporation, Partnership Deed, or Business Registration",
      "Udyam MSME Registration Certificate (for subsidized ZED certification)",
      "Organizational hierarchy chart and operational process flow diagrams",
      "List of products, services, test equipment, or technical infrastructure",
      "Entity PAN, registered office address proof, and authorized signatory KYC",
    ],
    process: [
      { title: "Scoping & standard selection", description: "We determine the most strategic accreditation (ISO 9001, ISO 27001, ZED, or BIS) based on your commercial goals." },
      { title: "Policy & manual documentation", description: "Our certification specialists draft your customized quality manual, SOPs, and risk assessment registers." },
      { title: "Implementation & internal audit", description: "We conduct internal audit reviews to ensure operational workflows match documented standards." },
      { title: "External body certification audit", description: "Independent accredited auditors execute formal Stage 1 and Stage 2 assessment audits." },
      { title: "Accreditation issuance", description: "Your official certification is published and entered into international accreditation registries." },
    ],
    competitorPricing: [
      { vendor: "ISO Quality Consultants", price: "₹10,000–₹25,000", note: "Documentation only" },
      { vendor: "ZED Assessment Advisors", price: "₹8,000–₹18,000", note: "Standard support" },
    ],
    memberRateNote: "Fixed CA advisory fee starting at ₹3,499. Audit fees from accredited certifying bodies billed transparently at cost.",
    faqs: [
      { q: "What is the difference between IAF and Non-IAF ISO certificates?", a: "IAF (International Accreditation Forum) certified ISO documents are recognized by governments, public tenders, and multinational corporations worldwide. Non-IAF certificates are often cheaper but frequently rejected during government tender evaluations. Founding Legals exclusively facilitates genuine IAF/NABCB accredited certifications." },
      { q: "What is the MSME ZED Certification scheme?", a: "ZED (Zero Defect Zero Effect) is an initiative by the Ministry of MSME that certifies micro, small, and medium enterprises for high quality and minimal environmental impact. The Central Government provides up to 80% financial subsidy on the certification fees." },
      { q: "How long is an ISO 9001 or ISO 27001 certificate valid?", a: "Standard ISO certifications are valid for three years, subject to annual surveillance audits conducted at the end of Year 1 and Year 2 to verify ongoing procedural compliance." },
    ],
    relatedLinks: [
      { name: "DPIIT Startup India Certification", href: "/services/CAservices/dpiit-recognition" },
      { name: "Government Tender Support", href: "/services/CAservices/government-tender-support" },
      { name: "Statutory Licence Assistance", href: "/services/CAservices/registration-licence-assistance" },
    ],
  },

  // ══════════════════════════════════════════════════
  // INDIVIDUAL SERVICE: Project Report Preparation
  // ══════════════════════════════════════════════════
  {
    slug: "project-report-preparation",
    type: "individual",
    badge: "Financial & Subsidies · Bank DPR",
    name: "Detailed Project Report (DPR)\n& CMA Data Preparation",
    tagline: "Bank-grade financial project reports with Credit Monitoring Arrangement (CMA) data, 5-year projections, DSCR, and break-even analysis for loans and subsidies.",
    seoTitle: "Detailed Project Report (DPR) & CMA Data for Bank Loans & Subsidies | Founding Legals",
    seoDescription: "CA-certified Detailed Project Report (DPR) with 5-year CMA data, DSCR calculations, and financial feasibility models for bank loans and government subsidies.",
    description: [
      "A Detailed Project Report (DPR) accompanied by comprehensive Credit Monitoring Arrangement (CMA) data is the single most critical document evaluated by commercial banks, nationalized lending institutions, and government subsidy appraisal committees. Incomplete financial modeling, unrealistic debt-service coverage ratios (DSCR), or inconsistent working capital assumptions are the leading causes of bank loan rejections.",
      "Founding Legals Financial Advisory Desk builds institutional-grade Detailed Project Reports certified by qualified Chartered Accountants. We craft robust 5-year financial models tailored to your industry, compute all 7 mandatory CMA data statements, determine Debt Service Coverage Ratios (DSCR), Break-Even Points (BEP), and Internal Rate of Return (IRR), and provide a persuasive project narrative designed to win bank sanction.",
    ],
    idealFor: [
      "Entrepreneurs applying for bank term loans, working capital limits (Cash Credit/Overdraft), and CGTMSE financing",
      "Enterprises applying for central and state capital investment subsidies requiring bank-appraised Detailed Project Reports",
      "Founders pitching to state financial corporations (SFCs), SIDBI, or industrial development boards for project funding",
      "Growing companies requesting credit limit enhancement or restructuring with existing nationalized or private banks",
    ],
    whatsIncluded: [
      { title: "5-year comprehensive financial forecast", description: "Projected Balance Sheets, Profit & Loss accounts, and Cash Flow statements built on realistic commercial assumptions." },
      { title: "Full 7-statement CMA data compilation", description: "Standardized Credit Monitoring Arrangement format required by public sector and private commercial banks." },
      { title: "Critical banking credit ratios analysis", description: "Computation of DSCR, Current Ratio, Debt-Equity Ratio, Interest Coverage Ratio (ISCR), and Net Working Capital (NWC)." },
      { title: "Sensitivity & break-even analysis", description: "Rigorous break-even point (BEP) determination and revenue threshold calculations under variable margin conditions." },
      { title: "Executive project narrative & promoter profile", description: "Comprehensive business overview, promoter credentials, market opportunity, SWOT, and risk mitigation strategies." },
      { title: "Chartered Accountant attestation", description: "Signed CA verification and delivery in both editable Excel model format and high-resolution printable PDF." },
    ],
    documentsRequired: [
      "Project cost estimates (land, civil work, plant & machinery quotations, working capital requirements)",
      "Past 2–3 years audited financial statements and tax returns (for existing businesses)",
      "Provisional financial balance sheet and P&L for the current financial year",
      "Promoters' net worth statements and banking relationship details",
      "Proposed loan tenure, repayment grace period, and promoter equity contribution ratio",
    ],
    process: [
      { title: "Financial data intake & assumption review", description: "We analyze your project expenditure, revenue drivers, pricing, and operating margin assumptions." },
      { title: "Financial modeling & ratio calculation", description: "Our financial analysts formulate the 5-year projections and compute statutory banking ratios." },
      { title: "CMA data compilation", description: "The standardized 7-statement CMA dossier is prepared in full compliance with RBI credit monitoring standards." },
      { title: "Chartered Accountant review & certification", description: "A senior CA reviews the project feasibility, validates assumptions, and formally attests the report." },
      { title: "Delivery of bank-ready dossier", description: "You receive the complete, print-ready DPR and editable Excel financial model within 3 to 5 business days." },
    ],
    competitorPricing: [
      { vendor: "Commercial Loan Consultant", price: "₹10,000–₹25,000", note: "Standard DPR & CMA" },
      { vendor: "Independent CA Firm", price: "₹8,000–₹16,000", note: "Varies by loan ticket size" },
    ],
    memberRateNote: "Fixed fee ₹2,499 for complete DPR with CMA data. Includes one complimentary post-review revision.",
    faqs: [
      { q: "What is CMA Data and why do banks require it?", a: "Credit Monitoring Arrangement (CMA) data is a standardized set of 7 financial statements established by the Reserve Bank of India that banks use to assess the past performance and projected financial health of a borrower applying for large term loans or working capital limits." },
      { q: "What is a healthy DSCR ratio for bank loan approval?", a: "Banks generally consider an average Debt Service Coverage Ratio (DSCR) between 1.5 and 2.0 as safe and healthy, indicating that the business generates sufficient operational cash flow to comfortably service its loan principal and interest obligations." },
      { q: "Can this project report be used for government subsidies as well?", a: "Yes. Our DPRs adhere to central and state industrial subsidy guidelines (including DIC, PMEGP, PMFME, and state industrial policies) and can be submitted concurrently to banks and government departments." },
    ],
    relatedLinks: [
      { name: "Government Loan Assistance", href: "/services/CAservices/government-loan-assistance" },
      { name: "Subsidy Application Support", href: "/services/CAservices/subsidy-application-support" },
      { name: "UDYAM / MSME Registration", href: "/services/CAservices/msme-registration" },
    ],
  },
];

export function getNewServicePage(slug: string): NewServicePage | undefined {
  return newServicePages.find((p) => p.slug === slug);
}

export const newServiceSlugs = newServicePages.map((p) => p.slug);

