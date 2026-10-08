import { Pool } from "pg";
import path from "path";
import fs from "fs";

// Load .env.local if present
try {
  const envLocalPath = path.join(process.cwd(), ".env.local");
  if (fs.existsSync(envLocalPath)) {
    const envContent = fs.readFileSync(envLocalPath, "utf-8");
    envContent.split("\n").forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || "";
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
        if (!process.env[key]) {
          process.env[key] = value.trim();
        }
      }
    });
  }
} catch {}

const rawUrl = (process.env.DATABASE_URL || "").trim();
const cleanUrl = rawUrl.replace(/[?&]sslmode=[^&]+/, "").replace(/\?$/, "");

if (!cleanUrl) {
  console.error("DATABASE_URL is not set. Exiting seed script.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: cleanUrl,
  ssl: { rejectUnauthorized: false },
});

const SEED_BLOGS = [
  {
    id: "blog_seed_101",
    title: "Complete Guide to Private Limited Company Incorporation in India (2026 Edition)",
    slug: "complete-guide-private-limited-incorporation-india",
    excerpt: "A step-by-step masterclass covering SPICe+ Part A & B filings, Director Identification Numbers (DIN), Digital Signature Certificates (DSC), Memorandum of Association (MOA), and Articles of Association (AOA) for tech startups.",
    content: "## Introduction to Private Limited Company Incorporation\n\nIncorporating a Private Limited (Pvt Ltd) company is the single most critical foundation for founders in India seeking institutional funding, limited liability protection, and corporate credibility. Under the Companies Act, 2013, the Ministry of Corporate Affairs (MCA) has streamlined incorporation through the unified **SPICe+ (INC-32)** web form.\n\nIn this comprehensive playbook, Founding Legals corporate advocates break down the exact procedural steps, compliance requirements, document checklists, and common pitfalls to ensure your company is incorporated smoothly without MCA resubmissions.\n\n---\n\n## Step 1: Digital Signature Certificate (DSC) & Name Reservation (SPICe+ Part A)\n\n### Class 3 Digital Signature Certificate (DSC)\nBefore initiating filings on the MCA V3 Portal, all proposed directors and subscribers must obtain a valid **Class 3 DSC**. The DSC is used to electronically sign all incorporation documents, MOA, AOA, and statutory declarations.\n\n### Name Reservation via SPICe+ Part A\nName selection requires careful adherence to the MCA Name Availability Guidelines:\n- **Uniqueness**: The name must not be identical or deceptively similar to existing registered companies or trademarks.\n- **Activity Alignment**: The suffix must clearly reflect the main objects (e.g., *Technology Private Limited*, *Fintech Services Private Limited*).\n- **Reservation Period**: Once approved in SPICe+ Part A, the proposed name is reserved for **20 days** (extendable to 60 days upon fee payment).\n\n> [!NOTE]\n> **Founding Legals Advice**: Always perform a preliminary trademark search on the Controller General of Patents, Designs & Trade Marks (CGPDTM) database to prevent future IP litigation or MCA name rejection.\n\n---\n\n## Step 2: SPICe+ Part B & Integrated Statutory Registrations\n\nSPICe+ Part B is an integrated application that simultaneously grants **10 statutory registrations** in a single submission:\n\n1. **Company Incorporation Certificate (COI)** containing the Corporate Identification Number (CIN).\n2. **Director Identification Number (DIN)** allocation for up to 3 proposed directors.\n3. **Permanent Account Number (PAN)** issued by the Income Tax Department.\n4. **Tax Deduction and Collection Account Number (TAN)**.\n5. **EPFO (Employees' Provident Fund Organisation)** registration.\n6. **ESIC (Employees' State Insurance Corporation)** registration.\n7. **Professional Tax (PT)** registration (mandatory in states like Maharashtra, Karnataka, Tamil Nadu, and West Bengal).\n8. **Shops and Establishment Registration**.\n9. **Opening of First Corporate Bank Account** (integrated with leading banks).\n10. **GSTIN Allotment** (optional during incorporation stage).\n\n---\n\n## Step 3: Drafting MOA & AOA (eMOA INC-33 & eAOA INC-34)\n\nThe **Memorandum of Association (MOA)** defines the company's core purpose and scope of operations, while the **Articles of Association (AOA)** prescribes internal rules, voting rights, share transfer restrictions, and board composition.\n\n| Statutory Document | Form | Description |\n|---|---|---|\n| Electronic MOA | eMOA (INC-33) | Specifies Main Objects and Objects in furtherance of Main Objects |\n| Electronic AOA | eAOA (INC-34) | Governs internal management, board proceedings, and shareholder rights |\n| Agile Pro-S | INC-35 | Covers GSTIN, EPFO, ESIC, Professional Tax, and Bank Account opening |\n| Statutory Declaration | INC-9 | Electronic declaration by subscribers and directors regarding non-conviction |\n\n---\n\n## Step 4: Post-Incorporation Mandatory Compliance\n\nOnce the Certificate of Incorporation (COI) is issued by the Registrar of Companies (ROC), the company must execute four compulsory post-incorporation steps within the prescribed statutory timelines:\n\n1. **Filing Form INC-20A (Commencement of Business)**: Must be filed within **180 days** of incorporation after subscribers deposit their share capital into the corporate bank account.\n2. **Issuance of Share Certificates**: Formally issue stamped share certificates to initial subscribers within **60 days** of incorporation.\n3. **Appointment of First Statutory Auditor (Form ADT-1)**: The Board of Directors must appoint the first Chartered Accountant/Statutory Auditor within **30 days** of incorporation.\n4. **Maintenance of Statutory Registers**: Set up registers for Members (MGT-1), Directors & KMP (MBP-1), Charges (CHG-7), and Board Meetings.\n\n---\n\n## Conclusion & Next Steps for Founders\n\nIncorporating your Private Limited company correctly from day one protects founder equity and positions your venture for seamless venture capital investments. Connect with Founding Legals corporate desk for end-to-end guidance, customized SHA drafting, and MCA V3 filings.",
    cover_image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: "Company Incorporation",
    tags: JSON.stringify(["Pvt Ltd", "Incorporation", "MCA V3", "SPICe+", "Startup India"]),
    author_name: "Adv. Vikramaditya Sharma",
    author_role: "Senior Partner & Corporate Lead",
    author_avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    read_time: "8 min read",
    published: true,
    featured: true,
    views: 420,
    created_at: "2026-03-01T10:00:00.000Z",
    updated_at: "2026-03-01T10:00:00.000Z",
    published_at: "2026-03-01T10:00:00.000Z"
  },
  {
    id: "blog_seed_102",
    title: "Founders' Vesting & Shareholders' Agreement (SHA): Safeguarding Equity & Control",
    slug: "founders-vesting-shareholders-agreement-sha-guide",
    excerpt: "Essential clauses for early-stage co-founders including 4-year reverse vesting, 1-year cliff periods, drag-along & tag-along rights, and anti-dilution mechanisms.",
    content: "## Why Every Startup Needs a Robust Shareholders' Agreement (SHA)\n\nEquity disputes among co-founders remain one of the top reasons early-stage startups fail before reaching Series A financing. A well-structured **Shareholders' Agreement (SHA)** and **Co-Founder Agreement** align expectations, define decision-making authority, and structure equity vesting.\n\n---\n\n## Core Components of Founders' Equity Vesting\n\n### 1. The Standard 4-Year Vesting Schedule with a 1-Year Cliff\nUnder a standard startup vesting structure:\n- **1-Year Cliff**: No equity vests during the first 12 months. If a founder leaves before completing 1 year, 0% of their equity is retained.\n- **Monthly / Quarterly Tranches**: Upon hitting the 1-year cliff, 25% of the total equity vests immediately. The remaining 75% vests incrementally over the next 36 months (1/48th per month).\n\n### 2. Reverse Vesting Mechanism\nIn reverse vesting, founders own their shares upfront from day one, but the company retains an option to repurchase unvested shares at nominal value (e.g., ₹1 per share) if a founder resigns or is terminated for cause.\n\n> [!NOTE]\n> **Founding Legals Insight**: Reverse vesting ensures that if a co-founder departs early, the equity pool is recaptured for future key hires or investor equity grants, preventing dead equity on the cap table.\n\n---\n\n## Essential Investor Protection & Control Clauses\n\n| Clause | Description | Strategic Benefit |\n|---|---|---|\n| Drag-Along Right | Allows majority shareholders to compel minority holders to join a company sale | Prevents minority holdups during exit or M&A |\n| Tag-Along Right | Grants co-founders/minority shareholders right to join share sales by founders | Protects founders against being left behind in buyouts |\n| Pre-Emptive Right | Right of existing shareholders to purchase new share issuances | Prevents involuntary equity dilution during future rounds |\n| Anti-Dilution Protection | Adjusts conversion ratio if subsequent round is priced lower (Down Round) | Broad-based Weighted Average vs Full Ratchet protection |\n\n---\n\n## Summary & Legal Consultation\n\nDo not rely on online generic templates for your company's SHA. Every founder dynamic and capital structure requires bespoke legal drafting. Consult Founding Legals advocates for custom SHA and ESOP scheme implementations.",
    cover_image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    category: "Founder Guides",
    tags: JSON.stringify(["Vesting", "SHA", "Equity", "Cap Table", "Founders Agreement"]),
    author_name: "Adv. Ananya Roy",
    author_role: "Venture Capital & M&A Specialist",
    author_avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    read_time: "6 min read",
    published: true,
    featured: false,
    views: 310,
    created_at: "2026-03-05T14:30:00.000Z",
    updated_at: "2026-03-05T14:30:00.000Z",
    published_at: "2026-03-05T14:30:00.000Z"
  },
  {
    id: "blog_seed_103",
    title: "MCA Statutory Annual Compliance Checklist for Indian Startups",
    slug: "mca-statutory-annual-compliance-checklist-startups",
    excerpt: "Stay penalty-free with our statutory ROC compliance calendar: AOC-4 financial statements, MGT-7 annual returns, DIR-3 KYC, MBP-1 disclosure, and ADT-1 filings.",
    content: "## Annual ROC Compliance Calendar for Private Limited Companies\n\nFailing to meet Ministry of Corporate Affairs (MCA) compliance deadlines results in heavy penalties (up to ₹100 per day per form), disqualification of directors, and loss of active company status on the MCA portal.\n\nHere is the official statutory compliance calendar prepared by Founding Legals Chartered Accountants for Indian companies.\n\n---\n\n## Mandatory Annual ROC Filings\n\n### 1. Form AOC-4 (Filing Financial Statements)\n- **Due Date**: Within 30 days of holding the Annual General Meeting (AGM) — typically by **October 30th**.\n- **Attachments**: Audited Balance Sheet, Profit & Loss Statement, Directors' Report, Auditor's Report, and Notes to Accounts.\n\n### 2. Form MGT-7 / MGT-7A (Annual Return)\n- **Due Date**: Within 60 days of AGM — typically by **November 29th**.\n- **Details**: Disclosure of shareholding pattern, transfer of shares, board meetings count, and list of members.\n\n### 3. Form DIR-3 KYC (Director Identification Number Renewal)\n- **Due Date**: **September 30th** every financial year.\n- **Applicability**: Mandatory for every individual holding a valid DIN, regardless of active directorship status.\n\n### 4. Form MSME-1 (Half-Yearly Return for Outstanding Payments)\n- **Due Dates**: April 30th (for Oct-Mar period) and October 31st (for Apr-Sep period).\n- **Applicability**: Mandatory if payments to MSME vendors exceed **45 days**.\n\n---\n\n## Statutory Board Meetings & Corporate Governance\n\n- **First Board Meeting**: Must be held within **30 days** of incorporation.\n- **Minimum Annual Board Meetings**: At least 4 board meetings per calendar year (with maximum gap of 120 days between consecutive meetings). For Small Companies, a minimum of 2 meetings per year is required.\n- **Form MBP-1**: Every director must disclose interest in other firms at the first board meeting of every financial year.\n\n> [!NOTE]\n> **Founding Legals CA Desk**: Maintain physical and digital minutes books signed by the Chairman to withstand statutory MCA inspections.",
    cover_image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    category: "Tax & CA Services",
    tags: JSON.stringify(["MCA", "ROC Compliance", "AOC-4", "MGT-7", "CA Desk"]),
    author_name: "CA Rajesh Kulkarni",
    author_role: "Head of CA & Tax Practice",
    author_avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    read_time: "5 min read",
    published: true,
    featured: false,
    views: 285,
    created_at: "2026-03-10T11:15:00.000Z",
    updated_at: "2026-03-10T11:15:00.000Z",
    published_at: "2026-03-10T11:15:00.000Z"
  },
  {
    id: "blog_seed_104",
    title: "Trademark Registration Strategy: Protecting Brand Name & Logo in Class 9, 35 & 42",
    slug: "trademark-registration-strategy-brand-protection-india",
    excerpt: "Protect your brand identity from day one. Step-by-step guidance on NICE classification search, TM application filing, object examination response, and opposition defence.",
    content: "## Why Brand & Intellectual Property Protection is Non-Negotiable\n\nYour brand name, product logo, and tagline represent your company's core goodwill. Without trademark registration under the Trade Marks Act, 1999, competitors can copy your brand identity, intercept customer traffic, or issue cease-and-desist notices against your domain.\n\n---\n\n## Trademark Application Process in 4 Stages\n\n1. **Comprehensive Trademark Search**: Search phonetically and visually identical marks across 45 NICE classification classes.\n2. **Filing Application (Form TM-A)**: Submit application claiming 'User Date' or 'Proposed to be Used' status.\n3. **Examination Report Response**: Respond within 30 days to Section 9 (Absolute Grounds) or Section 11 (Relative Grounds) objections.\n4. **Journal Publication & Registration**: 4-month opposition window in Trade Marks Journal followed by Certificate issuance.\n\nContact Founding Legals IP attorneys to secure your trademark application with fast-track processing.",
    cover_image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    category: "Intellectual Property",
    tags: JSON.stringify(["Trademark", "IP Protection", "TM-A", "Brand Identity"]),
    author_name: "Adv. Meera Sen",
    author_role: "IP & Patent Attorney",
    author_avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    read_time: "4 min read",
    published: true,
    featured: false,
    views: 195,
    created_at: "2026-03-15T09:00:00.000Z",
    updated_at: "2026-03-15T09:00:00.000Z",
    published_at: "2026-03-15T09:00:00.000Z"
  }
];

async function runSeed() {
  console.log("Connecting to PostgreSQL...");
  await pool.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id VARCHAR(100) PRIMARY KEY,
      title TEXT NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL,
      cover_image TEXT,
      category VARCHAR(100) NOT NULL,
      tags JSONB DEFAULT '[]'::jsonb,
      author_name VARCHAR(150) NOT NULL,
      author_role VARCHAR(150) NOT NULL,
      author_avatar TEXT,
      read_time VARCHAR(50),
      published BOOLEAN DEFAULT true,
      featured BOOLEAN DEFAULT false,
      views INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      published_at TIMESTAMPTZ
    );
  `);
  console.log("Table created / verified.");

  for (const b of SEED_BLOGS) {
    await pool.query(
      `INSERT INTO blogs (
        id, title, slug, excerpt, content, cover_image, category, tags,
        author_name, author_role, author_avatar, read_time, published,
        featured, views, created_at, updated_at, published_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content = EXCLUDED.content,
        cover_image = EXCLUDED.cover_image,
        category = EXCLUDED.category,
        tags = EXCLUDED.tags;`,
      [
        b.id,
        b.title,
        b.slug,
        b.excerpt,
        b.content,
        b.cover_image,
        b.category,
        b.tags,
        b.author_name,
        b.author_role,
        b.author_avatar,
        b.read_time,
        b.published,
        b.featured,
        b.views,
        b.created_at,
        b.updated_at,
        b.published_at,
      ]
    );
  }

  const countRes = await pool.query("SELECT count(*) FROM blogs;");
  console.log("PostgreSQL database successfully seeded! Total blogs in DB:", countRes.rows[0].count);
  await pool.end();
}

runSeed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
