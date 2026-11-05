"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServicePattern } from "@/lib/servicesData";
import {
  Check,
  ArrowRight,
  Zap,
  ShieldCheck,
  Users,
  Building2,
  FileText,
  Receipt,
  BarChart3,
  TrendingUp,
  Lock,
  Star,
  Headphones,
  ChevronDown,
  Layers,
  Sparkles,
  Search,
  Plus,
  Coins,
  Scale,
  Award,
  Presentation,
  Rocket,
  Shield,
  Clock,
  Briefcase,
  FileSignature,
} from "lucide-react";
import { openFreeConsultation } from "@/lib/consultation";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  ShieldCheck,
  Rocket,
  Shield,
  Briefcase,
  FileText,
  Scale,
  FileSignature,
  Coins,
  TrendingUp,
  Building2,
  Award,
  Presentation,
  Zap,
  Users,
  Clock,
  BarChart3,
  Check,
  Receipt,
  Layers,
  Lock,
  Sparkles,
};

/* ── Tool Comprehensive Configuration ── */
interface ToolConfig {
  titlePart1: string;
  titleItalic: string;
  description: string;
  ctaButtonText: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  features: { icon: string; title: string; desc: string }[];
  howItWorksPrefix: string;
  pillars: { icon: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  bottomCtaTitle: string;
  bottomCtaDesc: string;
  sidebarActive: string;
  headerTitle: string;
  headerSubtitle: string;
  addBtnText: string;
  kpis: { label: string; value: string; badge?: string }[];
  searchPlaceholder: string;
  tabs: { id: string; label: string }[];
  tableHeaders: string[];
  tableRows: { [tabId: string]: { col1: string; col2: string; col3: string; col4: string; status: string; statusType: "green" | "amber" | "blue" }[] };
  steps: { num: number; title: string; desc: string }[];
}

const TOOL_CONFIGS: Record<string, ToolConfig> = {
  "client-management": {
    titlePart1: "Client work, contracts and payments.",
    titleItalic: "In one organised workspace.",
    description: "Manage client records, organise agreements, generate GST-compliant invoices and track payments — all in one place for growing businesses.",
    ctaButtonText: "Explore Client Management",
    capabilitiesTitle: "Everything you need to run client operations.",
    capabilitiesSubtitle: "From client records to invoicing, keep your business operations organised, compliant and audit-ready.",
    features: [
      { icon: "Users", title: "Client Profiles & CRM", desc: "Keep client details, GSTINs, billing addresses and stakeholders organised in one place." },
      { icon: "FileText", title: "Contracts & Agreements", desc: "Link MSAs, SOWs, NDAs and other executed agreements to each client profile." },
      { icon: "Receipt", title: "GST Invoicing & Payments", desc: "Create professional, GST-compliant invoices and track payment status effortlessly." },
      { icon: "BarChart3", title: "Revenue & Outstanding", desc: "Monitor collected revenue, pending payments and outstanding invoices at a glance." },
    ],
    howItWorksPrefix: "From client onboarding to payment tracking —",
    pillars: [
      { icon: "Layers", title: "Stay organised", desc: "All client information, contracts and documents in one place." },
      { icon: "Zap", title: "Get paid with clarity", desc: "Create GST invoices, track payments and manage dues easily." },
      { icon: "ShieldCheck", title: "Work with confidence", desc: "Maintain structured business records for audits, fundraising and due diligence." },
    ],
    faqs: [
      {
        q: "What is Client Management in Founding Legals?",
        a: "Client Management is an integrated founder software workspace that centralises client records, GSTIN and billing details, executed agreements, and payment tracking in one clean platform — removing the need for messy spreadsheets or fragmented email threads.",
      },
      {
        q: "Is Client Management included in the Founder Plan?",
        a: "Yes! Client Management, along with Team Management, Payroll, Schemes & Grants, and the 3,000+ Investor Directory, is completely bundled into the Founder Plan starting at ₹658/month with zero hidden charges.",
      },
      {
        q: "Can I manage multiple clients and contracts?",
        a: "Absolutely. You can onboard unlimited client profiles, link multiple Master Service Agreements (MSAs), Statements of Work (SOWs), and NDAs, generate compliant GST invoices, and track outstanding receivables seamlessly.",
      },
      {
        q: "Can my team members access the workspace?",
        a: "Yes. Up to 5 team members are included with role-based access controls, enabling founders, finance leads, and account managers to collaborate within one unified workspace.",
      },
      {
        q: "Are the generated invoices GST-compliant?",
        a: "Yes, every invoice generated includes statutory SAC/HSN codes, state-specific CGST/SGST or IGST tax breakdowns, your company GSTIN, and reverse-charge indicators, making them 100% audit-ready for monthly GSTR-1 and GSTR-3B filings.",
      },
    ],
    bottomCtaTitle: "Ready to run your client operations with clarity?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to stay organized and audit-ready.",
    sidebarActive: "Clients",
    headerTitle: "Clients",
    headerSubtitle: "Manage clients, agreements, invoices and payments.",
    addBtnText: "+ Add Client",
    kpis: [
      { label: "Total Clients", value: "48", badge: "+12%" },
      { label: "Active Contracts", value: "65" },
      { label: "Outstanding", value: "₹12.4L" },
      { label: "Collected", value: "₹56.8L" },
    ],
    searchPlaceholder: "Search clients, GSTINs or contact person...",
    tabs: [
      { id: "directory", label: "Client Directory" },
      { id: "contracts", label: "Contracts & Agreements" },
      { id: "invoices", label: "Invoices & Payments" },
    ],
    tableHeaders: ["Client", "Industry", "Service", "Contract", "Payment Status"],
    tableRows: {
      directory: [
        { col1: "Arya Tech Pvt Ltd", col2: "Technology", col3: "Product Development", col4: "MSA / INV-1042", status: "✓ Paid", statusType: "green" },
        { col1: "Witty Tech LLP", col2: "Consulting", col3: "Advisory & Compliance", col4: "SOW / INV-1043", status: "⏱ Due in 5 days", statusType: "amber" },
        { col1: "NovaAI Solutions Pvt Ltd", col2: "IT Services", col3: "Legal & Compliance", col4: "MSA / INV-1044", status: "✓ Partially Paid", statusType: "blue" },
      ],
      contracts: [
        { col1: "Master Services Agreement (MSA)", col2: "Arya Tech Pvt Ltd", col3: "MSA", col4: "Valid till Dec 2026", status: "Executed", statusType: "green" },
        { col1: "Statement of Work (SOW) #3", col2: "Witty Tech LLP", col3: "SOW", col4: "Q2 Deliverables", status: "Active", statusType: "green" },
        { col1: "Mutual Non-Disclosure Agreement", col2: "NovaAI Solutions Pvt Ltd", col3: "NDA", col4: "3-Year Term", status: "Signed", statusType: "blue" },
      ],
      invoices: [
        { col1: "INV-2026-1042", col2: "Arya Tech Pvt Ltd", col3: "₹1,24,000", col4: "15 Oct 2026", status: "Paid", statusType: "green" },
        { col1: "INV-2026-1043", col2: "Witty Tech LLP", col3: "₹85,000", col4: "Due in 5 days", status: "Pending", statusType: "amber" },
        { col1: "INV-2026-1044", col2: "NovaAI Solutions Pvt Ltd", col3: "₹2,10,000", col4: "28 Oct 2026", status: "Partially Paid", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Set up your workspace", desc: "Get started in minutes with your business details." },
      { num: 2, title: "Add clients & records", desc: "Create client profiles and organise key details." },
      { num: 3, title: "Link contracts & invoices", desc: "Attach agreements and generate GST invoices." },
      { num: 4, title: "Track payments", desc: "Monitor dues, collections and outstanding amounts." },
    ],
  },

  "team-management": {
    titlePart1: "Hire, onboard and protect your team.",
    titleItalic: "In one unified workspace.",
    description: "Streamline employee onboarding, contractor agreements, headcount records, and statutory HR policies without spreadsheets or legal confusion.",
    ctaButtonText: "Explore Team Management",
    capabilitiesTitle: "Everything you need to run team operations.",
    capabilitiesSubtitle: "From offer letters to IP assignments, protect your company and give every hire a smooth onboarding experience.",
    features: [
      { icon: "Users", title: "Digital Team Profiles", desc: "Maintain employee details, designations, compensation packages, and reporting lines in one place." },
      { icon: "FileSignature", title: "Employment & NDAs", desc: "Issue pre-vetted founder-grade employment contracts and non-disclosure agreements with 100% IP assignment." },
      { icon: "ShieldCheck", title: "Onboarding & Identity", desc: "Collect PAN, Aadhaar, bank details, and signed documents digitally with zero paperwork friction." },
      { icon: "Scale", title: "Audit-Ready Records", desc: "Keep employee files, tax declarations, and HR policies organized for compliance and future diligence." },
    ],
    howItWorksPrefix: "From hiring to compliant onboarding —",
    pillars: [
      { icon: "ShieldCheck", title: "100% IP ownership", desc: "Ensure code, designs, and IP belong strictly to your company from day one." },
      { icon: "Zap", title: "Fast onboarding", desc: "Give every candidate a credible, frictionless hiring experience in minutes." },
      { icon: "Layers", title: "Audit-ready records", desc: "Maintain clean employee files and signed contracts ready for institutional diligence." },
    ],
    faqs: [
      {
        q: "What is Team Management in Founding Legals?",
        a: "Team Management lets founders issue bulletproof employment contracts, contractor agreements, assign intellectual property to the startup, and maintain organized personnel records in one central hub.",
      },
      {
        q: "How does Founding Legals protect our company's IP?",
        a: "Every employment and contractor agreement generated on Founding Legals includes strict Proprietary Information and Inventions Assignment (PIIA) clauses, ensuring all software code, product designs, and trade secrets belong strictly to your corporate entity.",
      },
      {
        q: "Can I manage both full-time employees and external contractors?",
        a: "Yes. You can manage full-time team members, part-time staff, interns, and retainers with tailored agreements and distinct compensation structures.",
      },
      {
        q: "Is Team Management included in the Founder Plan?",
        a: "Yes. Team Management is fully included in the Founder Plan starting at ₹658/month, covering up to 5 team members with role-based access controls.",
      },
    ],
    bottomCtaTitle: "Ready to build and protect your team with clarity?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to issue pre-vetted agreements and manage team compliance.",
    sidebarActive: "Team",
    headerTitle: "Team Directory",
    headerSubtitle: "Onboard employees, issue contractor agreements and manage headcount.",
    addBtnText: "+ Add Member",
    kpis: [
      { label: "Total Team", value: "18", badge: "+2 New" },
      { label: "Signed Contracts", value: "18" },
      { label: "Departments", value: "4" },
      { label: "Onboarding", value: "2 In Progress" },
    ],
    searchPlaceholder: "Search team members, roles or departments...",
    tabs: [
      { id: "members", label: "Team Members" },
      { id: "agreements", label: "Employment Contracts" },
      { id: "policies", label: "Workplace Policies" },
    ],
    tableHeaders: ["Member", "Department", "Role", "Agreement", "Status"],
    tableRows: {
      members: [
        { col1: "Rohan Mehta", col2: "Engineering", col3: "Senior Fullstack Dev", col4: "Employment + IP", status: "✓ Active", statusType: "green" },
        { col1: "Priya Sharma", col2: "Product", col3: "Lead Product Designer", col4: "Full-Time + NDA", status: "✓ Active", statusType: "green" },
        { col1: "Siddharth Verma", col2: "Growth", col3: "Growth Marketing Lead", col4: "Retainer Agreement", status: "✓ Verified", statusType: "blue" },
      ],
      agreements: [
        { col1: "Standard Employment Agreement", col2: "Engineering Dept", col3: "Full-Time", col4: "IP Clause Attached", status: "Signed", statusType: "green" },
        { col1: "Contractor Service Agreement", col2: "Design & UX", col3: "Contractor", col4: "Deliverable Milestones", status: "Active", statusType: "green" },
        { col1: "Proprietary Info & Inventions (PIIA)", col2: "All Employees", col3: "Statutory", col4: "100% IP Assignment", status: "Executed", statusType: "blue" },
      ],
      policies: [
        { col1: "POSH Workplace Policy", col2: "Governance", col3: "Statutory", col4: "IC Committee Linked", status: "Compliant", statusType: "green" },
        { col1: "Startup Leave & Holiday Framework", col2: "HR & Admin", col3: "Policy", col4: "Annual 24 Days", status: "Active", statusType: "green" },
        { col1: "Remote Work & Security Code", col2: "IT & InfoSec", col3: "Guidelines", col4: "2FA & Device Vault", status: "Enforced", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Create employee profiles", desc: "Add roles, departments, and compensation details in minutes." },
      { num: 2, title: "Issue pre-vetted contracts", desc: "Send employment agreements with bulletproof IP assignment." },
      { num: 3, title: "Digital identity onboarding", desc: "Collect PAN, Aadhaar, bank details, and signed docs digitally." },
      { num: 4, title: "Maintain audit-ready records", desc: "Keep employee files organized for HR compliance and diligence." },
    ],
  },

  "payroll-management": {
    titlePart1: "Simple, reliable payroll and salary payouts.",
    titleItalic: "Built for startup teams.",
    description: "Automate salary structures, statutory tax deductions, digital payslips, and compliance records in one stress-free monthly pay run.",
    ctaButtonText: "Explore Payroll Management",
    capabilitiesTitle: "Everything you need to run startup payroll.",
    capabilitiesSubtitle: "From salary calculations to digital payslips, keep your monthly pay runs accurate, compliant and on time.",
    features: [
      { icon: "Coins", title: "Salary Structure Setup", desc: "Define basic salary, HRA, special allowances, and tax-efficient structures in minutes." },
      { icon: "BarChart3", title: "Automated Tax Deductions", desc: "Calculate TDS withholding, PF deductions, and Professional Tax with zero calculation errors." },
      { icon: "FileText", title: "Instant Digital Payslips", desc: "Generate and email branded, password-protected PDF payslips to your team in one click." },
      { icon: "ShieldCheck", title: "Monthly Pay Run Records", desc: "Maintain audit-ready payout histories and challan records for effortless annual tax filing." },
    ],
    howItWorksPrefix: "From salary setup to monthly pay runs —",
    pillars: [
      { icon: "Zap", title: "Stress-free payouts", desc: "Calculate salaries, TDS, and statutory deductions accurately without confusion." },
      { icon: "FileText", title: "Punctual payslips", desc: "Provide your team with clear, detailed PDF payslips with complete tax transparency." },
      { icon: "ShieldCheck", title: "Audit-ready tax history", desc: "Keep complete monthly records that make annual filing and CA review effortless." },
    ],
    faqs: [
      {
        q: "What is Payroll Management in Founding Legals?",
        a: "Payroll Management is a founder-first payroll workspace that automates monthly salary calculations, statutory tax withholdings (TDS, PF, PT), and generates compliant digital payslips without requiring heavy enterprise HRMS software.",
      },
      {
        q: "Does Founding Legals calculate TDS and PF automatically?",
        a: "Yes. The platform applies the latest Indian Income Tax slabs (New and Old regimes) and statutory state PF/PT rules to determine exact net payouts and withholding challans.",
      },
      {
        q: "Can team members download their own payslips?",
        a: "Yes. Team members receive encrypted PDF payslips directly via email or can download them securely from their individual employee portals.",
      },
      {
        q: "Is Payroll Management included in the Founder Plan?",
        a: "Yes. Complete payroll capabilities for up to 5 team members are bundled into the Founder Plan at ₹658/month with zero per-employee add-on fees.",
      },
    ],
    bottomCtaTitle: "Ready for stress-free monthly payroll?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to automate salary structures and generate digital payslips in minutes.",
    sidebarActive: "Payroll",
    headerTitle: "Payroll & Payouts",
    headerSubtitle: "Simple, reliable salary structures, tax deductions, and monthly payslips.",
    addBtnText: "+ Run Payroll",
    kpis: [
      { label: "Monthly Pay Run", value: "₹14.8L", badge: "Oct 2026" },
      { label: "Employees Paid", value: "18" },
      { label: "TDS Deductions", value: "₹1.84L" },
      { label: "Compliance", value: "100% Ready" },
    ],
    searchPlaceholder: "Search employee payroll, PAN or payslip...",
    tabs: [
      { id: "payroll", label: "Monthly Pay Run" },
      { id: "payslips", label: "Digital Payslips" },
      { id: "statutory", label: "TDS & Statutory Tax" },
    ],
    tableHeaders: ["Employee", "Base CTC", "Allowances", "Deductions (TDS/PF)", "Payroll Status"],
    tableRows: {
      payroll: [
        { col1: "Rohan Mehta", col2: "₹1,50,000", col3: "₹45,000 HRA/Special", col4: "₹21,600 TDS+PF", status: "✓ Processed", statusType: "green" },
        { col1: "Priya Sharma", col2: "₹1,35,000", col3: "₹40,500 HRA/Special", col4: "₹18,900 TDS+PF", status: "✓ Processed", statusType: "green" },
        { col1: "Ananya Sen", col2: "₹95,000", col3: "₹28,500 HRA/Special", col4: "₹11,800 TDS+PF", status: "✓ Processed", statusType: "green" },
      ],
      payslips: [
        { col1: "Rohan Mehta (OCT-2026)", col2: "Net: ₹1,28,400", col3: "Generated 31 Oct", col4: "Direct Bank Transfer", status: "Sent PDF", statusType: "green" },
        { col1: "Priya Sharma (OCT-2026)", col2: "Net: ₹1,16,100", col3: "Generated 31 Oct", col4: "Direct Bank Transfer", status: "Sent PDF", statusType: "green" },
        { col1: "Ananya Sen (OCT-2026)", col2: "Net: ₹83,200", col3: "Generated 31 Oct", col4: "Direct Bank Transfer", status: "Sent PDF", statusType: "green" },
      ],
      statutory: [
        { col1: "Section 192 TDS Withholding", col2: "Cumulative ₹1.84L", col3: "Challan 281 Ready", col4: "Due 7th Next Month", status: "Calculated", statusType: "green" },
        { col1: "Employees Provident Fund (PF)", col2: "ECR File Ready", col3: "12% + 12% Contribution", col4: "UAN Numbers Mapped", status: "Reconciled", statusType: "green" },
        { col1: "Professional Tax (PT)", col2: "State Slabs Applied", col3: "₹200/employee", col4: "Monthly State Return", status: "Audited", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Structure salary components", desc: "Define basic, HRA, and tax-efficient allowances easily." },
      { num: 2, title: "Automate statutory deductions", desc: "Auto-calculate TDS, PF, and Professional Tax with zero errors." },
      { num: 3, title: "One-click pay runs", desc: "Approve payroll and generate bank transfer payout sheets." },
      { num: 4, title: "Instant digital payslips", desc: "Team members receive branded, password-protected PDF slips." },
    ],
  },

  "schemes-and-grants": {
    titlePart1: "Discover non-dilutive startup grants.",
    titleItalic: "Zero founder equity dilution.",
    description: "Discover active central and state government grant capital, SISFS funding, and incubation subsidies tailored to your startup's sector and stage.",
    ctaButtonText: "Explore Schemes & Grants",
    capabilitiesTitle: "Everything you need to secure grant funding.",
    capabilitiesSubtitle: "From DPIIT-backed seed funds to state innovation grants, unlock non-dilutive capital without giving up equity.",
    features: [
      { icon: "Award", title: "Non-Dilutive Discovery", desc: "Access 150+ central and state government grants, SISFS funds, and subsidies without giving up equity." },
      { icon: "Search", title: "Intelligent Pre-Screening", desc: "Filter schemes by DPIIT status, entity age, sector, and ticket size to focus on high-conviction grants." },
      { icon: "Lock", title: "Application Vault", desc: "Pre-format CA net-worth certificates, pitch decks, and statutory documents required by evaluation boards." },
      { icon: "TrendingUp", title: "Disbursement Tracking", desc: "Monitor application evaluations, sanction letters, and capital tranches from submission to receipt." },
    ],
    howItWorksPrefix: "From scheme discovery to grant disbursement —",
    pillars: [
      { icon: "Coins", title: "Zero equity dilution", desc: "Access ₹10L–₹50L in government grant funding without sacrificing founder shares." },
      { icon: "Search", title: "Targeted success", desc: "Focus only on pre-screened opportunities matched to your sector and DPIIT status." },
      { icon: "ShieldCheck", title: "Compliance alignment", desc: "Ensure your startup meets statutory criteria to pass government board evaluations." },
    ],
    faqs: [
      {
        q: "What is Schemes & Grants in Founding Legals?",
        a: "Schemes & Grants helps Indian startups discover and secure government funding programs — including Startup India Seed Fund Scheme (SISFS), MeitY TIDE 2.0, BIRAC, and state innovation grants — without giving away company equity.",
      },
      {
        q: "Do these government grants require giving up startup equity?",
        a: "No! True government grants and subsidies are non-dilutive, meaning you receive capital to build prototypes, file patents, or conduct trials without selling equity or taking on high-interest debt.",
      },
      {
        q: "How does Founding Legals determine scheme eligibility?",
        a: "The platform filters grants based on your entity type (Pvt Ltd, LLP), DPIIT recognition status, incorporation date, sector, and founder profile to show only schemes where you qualify.",
      },
      {
        q: "Can Founding Legals help with CA certificates and filing?",
        a: "Yes. Our team of qualified Chartered Accountants and startup specialists can prepare audited accounts, net-worth certificates, and verify your grant submission package.",
      },
    ],
    bottomCtaTitle: "Ready to discover non-dilutive capital for your startup?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to match with high-conviction government grant opportunities.",
    sidebarActive: "Grants",
    headerTitle: "Government Schemes & Grants",
    headerSubtitle: "Discover active non-dilutive capital, SISFS grants, and state subsidies.",
    addBtnText: "+ Match Scheme",
    kpis: [
      { label: "Active Schemes", value: "150+", badge: "Non-Dilutive" },
      { label: "Grant Pool", value: "₹500Cr+" },
      { label: "Grant Range", value: "₹10L – ₹50L" },
      { label: "Equity Taken", value: "0%" },
    ],
    searchPlaceholder: "Search DPIIT grants, SISFS or state subsidies...",
    tabs: [
      { id: "all", label: "Active Schemes" },
      { id: "central", label: "Central Ministry Grants" },
      { id: "state", label: "State Startup Policies" },
    ],
    tableHeaders: ["Scheme Name", "Ministry / Authority", "Grant Amount", "Eligible Stage", "Eligibility Status"],
    tableRows: {
      all: [
        { col1: "Startup India Seed Fund (SISFS)", col2: "DPIIT / MeitY", col3: "Up to ₹50 Lakhs", col4: "Prototype / MVP", status: "✓ Pre-Screened", statusType: "green" },
        { col1: "TIDE 2.0 Incubation Grant", col2: "MeitY Incubators", col3: "Up to ₹7 Lakhs", col4: "Idea to Prototype", status: "✓ Eligible", statusType: "green" },
        { col1: "BIRAC BIG Biotechnology Grant", col2: "Dept of Biotech", col3: "Up to ₹50 Lakhs", col4: "Proof of Concept", status: "⏱ Cycle Open", statusType: "blue" },
      ],
      central: [
        { col1: "NIDHI-PRAYAS Grant", col2: "Dept of Science & Tech", col3: "Up to ₹10 Lakhs", col4: "Hardware / Deeptech", status: "Active", statusType: "green" },
        { col1: "EDII Startup Subsidy", col2: "Ministry of MSME", col3: "₹5L – ₹15L", col4: "Manufacturing / Tech", status: "Verified", statusType: "green" },
        { col1: "Gen-Next AI Startup Challenge", col2: "MeitY / NASSCOM", col3: "₹25 Lakhs Prize", col4: "Early Traction", status: "Open Call", statusType: "blue" },
      ],
      state: [
        { col1: "Karnataka Elevate 100", col2: "Startup Karnataka", col3: "Up to ₹50 Lakhs", col4: "Karnataka Entities", status: "Eligible", statusType: "green" },
        { col1: "Tamil Nadu TANSEED 6.0", col2: "StartupTN", col3: "₹15 Lakhs Seed", col4: "Tamil Nadu Base", status: "Active", statusType: "green" },
        { col1: "Maharashtra M-InCubate Fund", col2: "MSInS Board", col3: "Up to ₹25 Lakhs", col4: "Tech Startups", status: "Cycle Open", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Intelligent scheme matching", desc: "Filter grants tailored to your entity type, sector, and stage." },
      { num: 2, title: "Pre-screen statutory criteria", desc: "Verify DPIIT, MSME Udyam, and incorporation requirements." },
      { num: 3, title: "Prepare application vault", desc: "Format CA certificates, audited accounts, and pitch narratives." },
      { num: 4, title: "Track disbursement cycles", desc: "Monitor evaluations, sanction letters, and capital tranches." },
    ],
  },

  "investor-directory": {
    titlePart1: "Connect with 3,000+ active investors.",
    titleItalic: "Direct contact intelligence.",
    description: "Filter curated angels, syndicates, and venture capital funds by stage, sector, and typical ticket size to accelerate your fundraising timeline.",
    ctaButtonText: "Explore Investor Directory",
    capabilitiesTitle: "Everything you need to run your fundraising pipeline.",
    capabilitiesSubtitle: "From angel discovery to partner meetings, target high-relevance investors actively funding Indian tech startups.",
    features: [
      { icon: "Users", title: "3,000+ Curated Profiles", desc: "Search active angel investors, syndicates, family offices, and VCs investing in Indian tech." },
      { icon: "Search", title: "Stage & Sector Filters", desc: "Target investors who specifically fund your stage (pre-seed to Series A) and tech domain." },
      { icon: "Coins", title: "Ticket Intelligence", desc: "View typical cheque sizes (₹10L to ₹10Cr) and lead investor profiles before initiating outreach." },
      { icon: "TrendingUp", title: "Pipeline Tracking", desc: "Manage pitches, follow-ups, term sheets, and investor updates in one structured founder CRM." },
    ],
    howItWorksPrefix: "From investor discovery to closed rounds —",
    pillars: [
      { icon: "Search", title: "Target high relevance", desc: "Stop pitching misaligned funds; connect with investors actively funding your domain." },
      { icon: "Zap", title: "Accelerate rounds", desc: "Move quickly from discovery to warm outreach with direct contact intelligence." },
      { icon: "FileSignature", title: "Pitch to term sheet", desc: "Seamlessly transition from investor discovery to executed SHAs on Founding Legals." },
    ],
    faqs: [
      {
        q: "What is the Investor Directory in Founding Legals?",
        a: "The Investor Directory is a curated, up-to-date database of over 3,000 angel investors, VC funds, family offices, and seed syndicates actively deploying capital into Indian technology startups.",
      },
      {
        q: "How are the investor profiles verified?",
        a: "Our research team verifies investment track records, active portfolio companies, sector preferences, and public LinkedIn / AngelList data to eliminate outdated or inactive contacts.",
      },
      {
        q: "Can I filter investors by ticket size and sector?",
        a: "Yes. You can filter by cheque size (from ₹10 Lakhs angel tickets up to ₹10 Crore VC rounds), industry sectors (SaaS, FinTech, DeepTech, D2C, HealthTech), and funding stage.",
      },
      {
        q: "Is the Investor Directory included in the Founder Plan?",
        a: "Yes. Full access to the 3,000+ Investor Directory is included in the Founder Plan at ₹658/month with zero paywalls or lead limits.",
      },
    ],
    bottomCtaTitle: "Ready to accelerate your startup's fundraise?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to discover active investors and manage their fundraising pipeline.",
    sidebarActive: "Investors",
    headerTitle: "Investor Directory",
    headerSubtitle: "Connect with 3,000+ active angels, syndicates, and VCs in Indian tech.",
    addBtnText: "+ Pitch Investor",
    kpis: [
      { label: "Curated Investors", value: "3,240+", badge: "Verified" },
      { label: "Cheque Sizes", value: "₹10L – ₹10Cr" },
      { label: "Tech Sectors", value: "42" },
      { label: "Direct Leads", value: "100% Direct" },
    ],
    searchPlaceholder: "Filter by sector, stage, or cheque size...",
    tabs: [
      { id: "all", label: "Curated Directory" },
      { id: "angels", label: "Angel Investors" },
      { id: "vcs", label: "Venture Capital Funds" },
    ],
    tableHeaders: ["Investor / Fund", "Stage", "Focus Sectors", "Typical Ticket", "Status"],
    tableRows: {
      all: [
        { col1: "Peak Ventures India", col2: "Seed, Pre-Series A", col3: "SaaS, AI, Fintech", col4: "₹2Cr – ₹8Cr", status: "✓ Open to Pitch", statusType: "green" },
        { col1: "Aniket Singhal (Angel)", col2: "Angel, Pre-Seed", col3: "B2B, Consumer Tech", col4: "₹15L – ₹50L", status: "⏱ Warm Intro", statusType: "blue" },
        { col1: "Nexus Alpha Fund", col2: "Seed", col3: "Deeptech, Healthtech", col4: "₹1Cr – ₹4Cr", status: "✓ Active Fund", statusType: "green" },
      ],
      angels: [
        { col1: "Vikramaditya Rao", col2: "Pre-Seed, Seed", col3: "Fintech, Enterprise SaaS", col4: "₹25L – ₹75L", status: "Active Angel", statusType: "green" },
        { col1: "Meera Krishnan", col2: "Angel", col3: "D2C, Climate Tech", col4: "₹10L – ₹30L", status: "Verified Lead", statusType: "green" },
        { col1: "Deepak Choudhary", col2: "Pre-Seed", col3: "Generative AI, Web3", col4: "₹20L – ₹50L", status: "Active Cheques", statusType: "blue" },
      ],
      vcs: [
        { col1: "Blume Founders Fund", col2: "Seed, Series A", col3: "Full-Stack Indian Tech", col4: "₹4Cr – ₹15Cr", status: "Institutional", statusType: "green" },
        { col1: "Kalaari Capital Seed", col2: "Pre-Seed, Seed", col3: "Fintech, Edtech, Gaming", col4: "₹1.5Cr – ₹6Cr", status: "Portfolio Active", statusType: "green" },
        { col1: "Titan Capital Micro", col2: "Seed", col3: "Early Founder Stage", col4: "₹50L – ₹2Cr", status: "Direct Partner", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Filter relevant investors", desc: "Target investors who actively fund your exact stage and sector." },
      { num: 2, title: "Review ticket intelligence", desc: "Understand typical cheque sizes and lead investor profiles." },
      { num: 3, title: "Organize outreach pipeline", desc: "Track pitches, discussions, term sheets, and investor notes." },
      { num: 4, title: "Execute round seamlessly", desc: "Use Founding Legals SHAs and closing docs to finalize funding." },
    ],
  },

  "spend-analysis": {
    titlePart1: "Track burn rate, SaaS costs and runway.",
    titleItalic: "In real-time clarity.",
    description: "Gain total visibility into startup cash disbursements, eliminate duplicate software subscriptions, and forecast your runway horizon before cash crunches occur.",
    ctaButtonText: "Explore Spend Analysis",
    capabilitiesTitle: "Everything you need to master your startup burn.",
    capabilitiesSubtitle: "From software audits to dynamic runway forecasts, keep your treasury optimized and investor-ready.",
    features: [
      { icon: "Receipt", title: "Real-Time Burn Ledger", desc: "Consolidate operating expenses, card swipes, and vendor disbursements in one live dashboard." },
      { icon: "Zap", title: "Zombie SaaS Detection", desc: "Automatically flag unused seats, duplicate subscriptions, and recurring tools draining capital." },
      { icon: "TrendingUp", title: "Dynamic Runway Forecast", desc: "Model runway horizons under varying burn rates and hiring plans before cash crunches happen." },
      { icon: "BarChart3", title: "Investor-Ready MIS", desc: "Categorize spends into standard accounting buckets (R&D, S&M, G&A) for financial due diligence." },
    ],
    howItWorksPrefix: "From expense tracking to runway mastery —",
    pillars: [
      { icon: "Zap", title: "Eliminate SaaS leaks", desc: "Flag duplicate subscriptions and unused seats that silently burn early capital." },
      { icon: "TrendingUp", title: "Predictable runway", desc: "Model cash horizons accurately under different revenue and hiring scenarios." },
      { icon: "BarChart3", title: "Diligence-ready MIS", desc: "Group expenses into standard accounting buckets ready for CA and VC audit." },
    ],
    faqs: [
      {
        q: "What is Spend Analysis in Founding Legals?",
        a: "Spend Analysis gives startup founders clear, categorized visibility into their monthly cash outflow, software licenses, vendor contracts, and remaining runway in months.",
      },
      {
        q: "How does it detect duplicate or zombie subscriptions?",
        a: "The platform analyzes recurring monthly and annual charges across credit cards and bank statements, flagging inactive seats, overlapping software tools, and unoptimized pricing tiers.",
      },
      {
        q: "Can I simulate different hiring and revenue scenarios?",
        a: "Yes. Dynamic runway modeling allows you to stress-test your cash buffer under conservative, moderate, or aggressive hiring and revenue assumptions.",
      },
      {
        q: "Is Spend Analysis included in the Founder Plan?",
        a: "Yes. Spend Analysis is fully bundled into the Founder Plan at ₹658/month, providing continuous treasury visibility for your founding team.",
      },
    ],
    bottomCtaTitle: "Ready to optimize your startup's runway?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to detect recurring software leaks and project cash horizons.",
    sidebarActive: "Spend",
    headerTitle: "Spend & Runway Analysis",
    headerSubtitle: "Track monthly burn rate, categorize vendor spends, and forecast runway.",
    addBtnText: "+ Log Expense",
    kpis: [
      { label: "Monthly Burn", value: "₹4.2L", badge: "Controlled" },
      { label: "Cash Runway", value: "18.5 Months" },
      { label: "SaaS Subscriptions", value: "14 Tools" },
      { label: "Savings Identified", value: "₹85k/mo" },
    ],
    searchPlaceholder: "Search vendor, invoice or expense category...",
    tabs: [
      { id: "expenses", label: "Monthly Burn Ledger" },
      { id: "vendors", label: "SaaS & Subscriptions" },
      { id: "runway", label: "Runway Projections" },
    ],
    tableHeaders: ["Vendor / Item", "Category", "Monthly Spend", "Billing Cycle", "Audit Status"],
    tableRows: {
      expenses: [
        { col1: "AWS Cloud Infrastructure", col2: "Hosting & Infra", col3: "₹1,24,000", col4: "Monthly Card", status: "✓ Reconciled", statusType: "green" },
        { col1: "Google Workspace & Slack", col2: "Productivity", col3: "₹32,400", col4: "Annual Plan", status: "✓ Reconciled", statusType: "green" },
        { col1: "HubSpot & Segment", col2: "Sales & Marketing", col3: "₹48,000", col4: "Monthly Card", status: "⏱ Under Review", statusType: "blue" },
      ],
      vendors: [
        { col1: "GitHub Enterprise", col2: "Dev Tools", col3: "₹18,500/mo", col4: "Per-seat license", status: "Active", statusType: "green" },
        { col1: "Figma Professional", col2: "Design & UX", col3: "₹9,200/mo", col4: "Annual Renewal", status: "Active", statusType: "green" },
        { col1: "Notion AI Team", col2: "Internal Wiki", col3: "₹12,000/mo", col4: "Monthly Plan", status: "Optimized", statusType: "blue" },
      ],
      runway: [
        { col1: "Base Runway (Current Burn)", col2: "18.5 Months", col3: "₹77.7L Treasury", col4: "Zero New Revenue", status: "Healthy", statusType: "green" },
        { col1: "Growth Scenario (20% MoM)", col2: "24.2 Months", col3: "Re-investment", col4: "Hiring Buffer Added", status: "Projected", statusType: "green" },
        { col1: "Conservative Stress Test", col2: "15.0 Months", col3: "High Burn Buffer", col4: "Downside Cushion", status: "Audited", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Connect bank & card records", desc: "Consolidate expenses, payroll, and SaaS subscriptions in one place." },
      { num: 2, title: "Categorize startup spends", desc: "Organize infra, marketing, legal, and operational cost centers." },
      { num: 3, title: "Detect recurring leaks", desc: "Identify unused software seats and duplicate subscriptions easily." },
      { num: 4, title: "Accurate runway forecasting", desc: "Know your exact zero-cash date and plan fundraises with clarity." },
    ],
  },

  "document-management": {
    titlePart1: "Your encrypted founder document vault.",
    titleItalic: "Always audit & diligence ready.",
    description: "Securely organise corporate certificates, board resolutions, shareholder agreements, and compliance records with bank-grade 256-bit encryption.",
    ctaButtonText: "Explore Document Management",
    capabilitiesTitle: "Everything you need to organise corporate records.",
    capabilitiesSubtitle: "From MCA incorporation files to signed client contracts, maintain lifetime custody of every critical business document.",
    features: [
      { icon: "Lock", title: "Encrypted Corporate Vault", desc: "Store Certificate of Incorporation, MOA, AOA, PAN, and TAN letters with 256-bit encryption." },
      { icon: "Users", title: "Role-Based Permissions", desc: "Control team and external access to sensitive shareholder agreements, cap tables, and board notes." },
      { icon: "ArrowRight", title: "One-Click Data Rooms", desc: "Generate secure, view-only links for investors and legal auditors during fundraising diligence." },
      { icon: "Clock", title: "Lifetime Statutory History", desc: "Never scramble for historical MCA filing receipts, GST certificates, or executed client contracts." },
    ],
    howItWorksPrefix: "From file upload to audit-ready data rooms —",
    pillars: [
      { icon: "Rocket", title: "Instant diligence rooms", desc: "Share organized corporate records in minutes instead of weeks of scattered hunting." },
      { icon: "Lock", title: "Bank-grade encryption", desc: "256-bit AES encryption keeps your cap table, contracts, and IP completely safe." },
      { icon: "ShieldCheck", title: "Permanent custody", desc: "Retain lifetime digital records of MCA filings, GST registrations, and executed contracts." },
    ],
    faqs: [
      {
        q: "What is Document Management in Founding Legals?",
        a: "Document Management is an encrypted, audit-ready founder vault built specifically for Indian corporate records, MCA filings, executed contracts, and investor diligence data rooms.",
      },
      {
        q: "How secure is the document vault?",
        a: "All files are encrypted at rest with AES-256 encryption and in transit with TLS 1.3, backed by continuous backups and strict role-based access controls.",
      },
      {
        q: "Can I create an investor data room during fundraising?",
        a: "Yes. You can generate secure, password-protected, read-only data room links with watermarking and expiry dates to share with angel investors and VC due diligence teams.",
      },
      {
        q: "Can I export all our company records whenever needed?",
        a: "Yes, at any time with one click. You retain 100% data ownership and can download all files in standard PDF and ZIP formats.",
      },
    ],
    bottomCtaTitle: "Ready for an encrypted, organized company vault?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to share instant diligence rooms and protect corporate records.",
    sidebarActive: "Documents",
    headerTitle: "Secure Document Vault",
    headerSubtitle: "Encrypted company records, statutory certificates, and signed legal agreements.",
    addBtnText: "+ Upload Document",
    kpis: [
      { label: "Vault Documents", value: "248 Files", badge: "Encrypted" },
      { label: "Cloud Security", value: "256-Bit" },
      { label: "Statutory Records", value: "100% Current" },
      { label: "Audit Access", value: "Ready" },
    ],
    searchPlaceholder: "Search agreements, resolutions, or MCA filings...",
    tabs: [
      { id: "all", label: "Company Vault" },
      { id: "statutory", label: "Statutory & MCA" },
      { id: "agreements", label: "Executed Contracts" },
    ],
    tableHeaders: ["Document Name", "Category", "File Type", "Last Modified", "Access Level"],
    tableRows: {
      all: [
        { col1: "Certificate of Incorporation (SPICe+)", col2: "Corporate & MCA", col3: "MCA Signed PDF", col4: "12 May 2026", status: "✓ Verified", statusType: "green" },
        { col1: "Exec. Founders' Agreement & SHA", col2: "Governance", col3: "Digital Sign PDF", col4: "18 Jun 2026", status: "✓ Confidential", statusType: "blue" },
        { col1: "GST Registration Certificate (REG-06)", col2: "Tax Compliance", col3: "Govt Certificate", col4: "02 Jul 2026", status: "✓ Verified", statusType: "green" },
      ],
      statutory: [
        { col1: "Memorandum of Association (MOA)", col2: "MCA Filings", col3: "SPICe+ Form", col4: "Incorporation", status: "Public Copy", statusType: "green" },
        { col1: "Articles of Association (AOA)", col2: "MCA Filings", col3: "SPICe+ Form", col4: "Incorporation", status: "Public Copy", statusType: "green" },
        { col1: "PAN & TAN Allocation Letters", col2: "Direct Tax", col3: "Govt Allotment", col4: "Incorporation", status: "Permanent", statusType: "blue" },
      ],
      agreements: [
        { col1: "Master Services Agreement (MSA)", col2: "Enterprise Clients", col3: "Executed PDF", col4: "Active 2026", status: "Enforced", statusType: "green" },
        { col1: "Mutual Non-Disclosure Agreement", col2: "Partners & Vendors", col3: "Executed PDF", col4: "Valid 3 Years", status: "Enforced", statusType: "green" },
        { col1: "ESOP Policy & Grant Letters", col2: "Team & Equity", col3: "Board Approved", col4: "Pool Allocation", status: "Restricted", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Centralized legal repository", desc: "Never lose an incorporation letter, MOA, or client agreement again." },
      { num: 2, title: "Granular access controls", desc: "Control who sees sensitive cap tables, contracts, and filings." },
      { num: 3, title: "Tamper-proof encryption", desc: "Bank-grade 256-bit encryption protects your intellectual property." },
      { num: 4, title: "One-click diligence sharing", desc: "Generate secure, read-only data rooms for investors and auditors." },
    ],
  },

  "marketplace": {
    titlePart1: "Over ₹15 Lakhs in startup perks.",
    titleItalic: "Cloud credits & vetted tools.",
    description: "Unlock curated AWS, Google Cloud, and SaaS discounts alongside pre-vetted legal and accounting partner services to preserve early-stage cash.",
    ctaButtonText: "Explore Marketplace",
    capabilitiesTitle: "Everything you need to save early-stage capital.",
    capabilitiesSubtitle: "From cloud infrastructure credits to banking perks, stretch your runway with exclusive partner deals.",
    features: [
      { icon: "Sparkles", title: "Vetted Partner Deals", desc: "Access curated discounts on AWS, Google Cloud, Razorpay, Notion, HubSpot, and top startup tools." },
      { icon: "Coins", title: "Over ₹15L in Credits", desc: "Claim up to $5,000 in cloud compute and discounted SaaS perks to drastically reduce early burn." },
      { icon: "Check", title: "Zero Approval Hassle", desc: "Startup membership auto-qualifies your business with instant activation coupon codes." },
      { icon: "Briefcase", title: "Specialized CA Services", desc: "Book vetted CA and legal advisory add-ons at exclusive founder rates with one-click access." },
    ],
    howItWorksPrefix: "From deal discovery to claiming startup perks —",
    pillars: [
      { icon: "Coins", title: "Massive capital savings", desc: "Save up to ₹15 Lakhs in software and infrastructure costs in your first 18 months." },
      { icon: "ShieldCheck", title: "Vetted startup partners", desc: "Work only with curated, trusted partners vetted for Indian startup needs." },
      { icon: "Layers", title: "Single founder hub", desc: "Activate cloud credits, banking perks, and tools from one centralized workspace." },
    ],
    faqs: [
      {
        q: "What is the Founding Legals Marketplace?",
        a: "The Marketplace is an exclusive perks portal that provides early-stage founders with over ₹15 Lakhs in software credits, cloud hosting, current account benefits, and discounted legal/CA services.",
      },
      {
        q: "What cloud providers and software tools are included?",
        a: "Founding Legals members gain access to credits and discounts from partners like AWS Activate, Google Cloud for Startups, Razorpay, Notion, Freshworks, and leading Indian SaaS platforms.",
      },
      {
        q: "How do I claim and activate partner perks?",
        a: "As an active Founding Legals member, you receive pre-approved promo codes and fast-track onboarding links directly within your workspace dashboard.",
      },
      {
        q: "Is Marketplace access included in the Founder Plan?",
        a: "Yes. All curated deals, perks, and credits are included in the Founder Plan starting at ₹658/month with zero extra membership fees.",
      },
    ],
    bottomCtaTitle: "Ready to claim over ₹15 Lakhs in founder perks?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to activate cloud credits and reduce operational software costs.",
    sidebarActive: "Marketplace",
    headerTitle: "Founder Marketplace & Perks",
    headerSubtitle: "Curated startup discounts on cloud infrastructure, banking, legal, and tools.",
    addBtnText: "+ Claim Deal",
    kpis: [
      { label: "Vetted Partners", value: "65+", badge: "Curated" },
      { label: "Startup Credits", value: "₹25L+ Value" },
      { label: "Max Discount", value: "Up to 80%" },
      { label: "Access", value: "Included" },
    ],
    searchPlaceholder: "Search cloud credits, banking perks or SaaS deals...",
    tabs: [
      { id: "all", label: "Featured Deals" },
      { id: "cloud", label: "Cloud & Dev Infra" },
      { id: "business", label: "Banking & Tools" },
    ],
    tableHeaders: ["Partner Brand", "Domain / Category", "Startup Credit / Perk", "Value", "Eligibility"],
    tableRows: {
      all: [
        { col1: "AWS Activate Cloud Credits", col2: "Cloud Infrastructure", col3: "$5,000 Cloud Credits", col4: "₹4,15,000 Value", status: "✓ Instant Claim", statusType: "green" },
        { col1: "Razorpay Startup Gateway", col2: "Payments & Banking", col3: "Zero Setup + Credits", col4: "₹75,000 Savings", status: "✓ Pre-Approved", statusType: "green" },
        { col1: "Notion & HubSpot for Startups", col2: "Productivity & CRM", col3: "50% Off First Year", col4: "₹1,80,000 Value", status: "⏱ Exclusive", statusType: "blue" },
      ],
      cloud: [
        { col1: "Google Cloud for Startups", col2: "Cloud & AI Compute", col3: "$2,000 Google Credits", col4: "₹1,65,000 Value", status: "Instant Access", statusType: "green" },
        { col1: "DigitalOcean Hatch", col2: "Droplets & Storage", col3: "$1,000 Cloud Credits", col4: "₹82,000 Value", status: "Instant Access", statusType: "green" },
        { col1: "MongoDB for Startups", col2: "Database Cluster", col3: "$500 Database Credits", col4: "₹41,000 Value", status: "Active Perk", statusType: "blue" },
      ],
      business: [
        { col1: "HDFC SmartHub Vyapar", col2: "Current Account", col3: "Zero Balance + CA Desk", col4: "Priority Desk", status: "Pre-Approved", statusType: "green" },
        { col1: "Zoho One Founders Edition", col2: "Business Suite", col3: "₹1,00,000 Wallet", col4: "₹1,00,000 Value", status: "Verified", statusType: "green" },
        { col1: "Freshworks for Startups", col2: "Support & CRM", col3: "$1,250 Credits", col4: "₹1,05,000 Value", status: "Partner Deal", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Browse vetted partner deals", desc: "Discover essential cloud, banking, and SaaS perks for startups." },
      { num: 2, title: "One-click eligibility check", desc: "Zero paperwork — membership auto-qualifies your startup." },
      { num: 3, title: "Claim instant coupon codes", desc: "Activate cloud credits and discounted subscriptions in minutes." },
      { num: 4, title: "Save lakhs in early burn", desc: "Reinvest preserved capital into hiring and product development." },
    ],
  },

  "essential-startup-approach": {
    titlePart1: "Start your company on solid legal ground.",
    titleItalic: "Clean equity & governance.",
    description: "Formalise founder vesting, cap tables, corporate governance, and statutory filings so you never have to scramble when investors run due diligence.",
    ctaButtonText: "Explore Essential Startup Approach",
    capabilitiesTitle: "Everything you need for clean corporate governance.",
    capabilitiesSubtitle: "From co-founder equity vesting to annual ROC compliance, build an unassailable corporate foundation.",
    features: [
      { icon: "ShieldCheck", title: "Founder Vesting & Equity", desc: "Formalize co-founder equity splits with standard 4-year vesting and 1-year cliffs to avoid disputes." },
      { icon: "Lock", title: "Intellectual Property Shield", desc: "Secure 100% intellectual property assignment from founders and early contributors to your company." },
      { icon: "Scale", title: "Corporate Governance", desc: "Maintain board resolutions, AGM minutes, and director KYC in full compliance with the Companies Act." },
      { icon: "Rocket", title: "Diligence Readiness", desc: "Keep an unassailable corporate structure that passes angel and venture capital audits effortlessly." },
    ],
    howItWorksPrefix: "From incorporation to investment readiness —",
    pillars: [
      { icon: "ShieldCheck", title: "Clean cap table", desc: "Protect founder equity with structured vesting schedules and clear ownership terms." },
      { icon: "Lock", title: "Complete IP assignment", desc: "Lock down proprietary code, algorithms, and brand trademarks to your entity." },
      { icon: "Scale", title: "Regulatory peace of mind", desc: "Stay ahead of ROC filing deadlines and director compliance with zero stress." },
    ],
    faqs: [
      {
        q: "What is the Essential Startup Approach in Founding Legals?",
        a: "The Essential Startup Approach provides a comprehensive legal framework for early-stage companies — ensuring equity vesting, IP assignments, cap table hygiene, and corporate governance are executed properly from day one.",
      },
      {
        q: "Why is founder vesting essential before raising external capital?",
        a: "Vesting protects the company if a co-founder leaves early, preventing an inactive founder from walking away with a significant equity stake and making the company uninvestable for VCs.",
      },
      {
        q: "How does Founding Legals help with ROC compliance?",
        a: "The platform tracks mandatory annual compliance deadlines (AOC-4, MGT-7, DIR-3 KYC, ADT-1), providing alerts and pre-formatted templates so your company never incurs late fees or penalties.",
      },
      {
        q: "Is this included in the Founder Plan?",
        a: "Yes. The Essential Startup Approach methodology, governance tools, and core legal templates are bundled into the Founder Plan at ₹658/month.",
      },
    ],
    bottomCtaTitle: "Ready to build your startup on solid legal ground?",
    bottomCtaDesc: "Join hundreds of founders using Founding Legals to protect founder equity and maintain audit-ready governance.",
    sidebarActive: "Playbook",
    headerTitle: "Essential Startup Approach",
    headerSubtitle: "Structured operational governance and legal roadmap for Indian founders.",
    addBtnText: "+ Add Milestone",
    kpis: [
      { label: "Operating Modules", value: "8 Unified", badge: "Founder OS" },
      { label: "Compliance Score", value: "98/100" },
      { label: "Health Audit", value: "Excellent" },
      { label: "Setup Time", value: "< 15 Mins" },
    ],
    searchPlaceholder: "Search roadmap milestones, governance checklists...",
    tabs: [
      { id: "all", label: "Founder Roadmap" },
      { id: "statutory", label: "Statutory Health" },
      { id: "governance", label: "Governance Pillars" },
    ],
    tableHeaders: ["Roadmap Milestone", "Operational Domain", "Key Deliverables", "Frequency", "Audit Status"],
    tableRows: {
      all: [
        { col1: "Statutory Entity Foundation", col2: "MCA & Corporate", col3: "SPICe+, DIN, MOA/AOA", col4: "One-Time Setup", status: "✓ Complete", statusType: "green" },
        { col1: "Intellectual Property Lockdown", col2: "IP & Brand Protection", col3: "TM-A, IP Assignment", col4: "Statutory Shield", status: "✓ Enforced", statusType: "green" },
        { col1: "Financial & Tax Hygiene", col2: "GST, TDS, Ledger", col3: "Monthly Filings & Books", col4: "Monthly / Annual", status: "⏱ Maintained", statusType: "blue" },
      ],
      statutory: [
        { col1: "Annual ROC Return (AOC-4 & MGT-7)", col2: "MCA Compliance", col3: "Audited Financials", col4: "Annual Mandatory", status: "On Track", statusType: "green" },
        { col1: "Director KYC & Disqualification Check", col2: "Director Governance", col3: "DIR-3 KYC Filings", col4: "Annual Mandatory", status: "Verified", statusType: "green" },
        { col1: "Auditor Appointment (ADT-1)", col2: "Statutory Audit", col3: "5-Year Tenure", col4: "Post-Incorporation", status: "Current", statusType: "blue" },
      ],
      governance: [
        { col1: "Founders' Agreement & Equity Vesting", col2: "Founder Alignment", col3: "4-Year Vesting + Cliff", col4: "Core Charter", status: "Executed", statusType: "green" },
        { col1: "Board Resolutions & Minute Book", col2: "Corporate Secretarial", col3: "Structured Meetings", col4: "Quarterly", status: "Maintained", statusType: "green" },
        { col1: "ESOP Pool Creation & Grant Letters", col2: "Team Incentives", col3: "10% Option Pool", col4: "Board Approved", status: "Enforced", statusType: "blue" },
      ],
    },
    steps: [
      { num: 1, title: "Incorporate with clean equity", desc: "Build on verified SPICe+ MCA structures with fair vesting clauses." },
      { num: 2, title: "Lock down all intellectual property", desc: "Assign 100% of code, brand trademarks, and inventions to your entity." },
      { num: 3, title: "Establish statutory hygiene", desc: "Stay punctual on monthly GST, TDS, PF, and annual ROC filings." },
      { num: 4, title: "Fundraise with total confidence", desc: "Clean due diligence records ensure smooth investment rounds." },
    ],
  },
};

export default function ProductToolLayout({ service }: { service: ServicePattern }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Retrieve tool-specific configuration with robust fallbacks
  const tool = TOOL_CONFIGS[service.slug] || TOOL_CONFIGS["client-management"];
  const [activeTabId, setActiveTabId] = useState<string>(tool.tabs[0]?.id || "all");

  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com/").replace(/\/$/, "");

  const currentRows = tool.tableRows[activeTabId] || tool.tableRows[tool.tabs[0]?.id] || [];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1C1A17] selection:bg-[#DCE7D0] selection:text-[#2A3B18]">
      
      {/* ══════════════════════════════════════════════════════════
          1. HERO SECTION (Warm Cream with Tailored Dashboard Mockup)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF8F5] pt-28 sm:pt-32 lg:pt-36 pb-14 lg:pb-20 overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#E8EFE0]/60 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Top Header Bar: Category Badge (Left) & Savings Badge (Right) */}
          <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
            {/* Left: Category Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#EBF2E3] border border-[#D2E2C0] text-xs font-semibold text-[#486330] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#486330]" />
              <span className="tracking-wider uppercase text-[10px] sm:text-[11px] font-bold">
                {service.title.toUpperCase()}
              </span>
              <span className="text-[#899D77] hidden xs:inline">·</span>
              <span className="text-[#597441] font-normal text-[10.5px] sm:text-[11.5px] hidden sm:inline">
                PART OF THE FOUNDING LEGALS PLATFORM
              </span>
            </div>

            {/* Right: Promotional Savings Badge (Top Right) */}
            <Link
              href="/pricing"
              className="group inline-flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
              title="Founder's OS - Save up to ₹2 Lakhs Annually"
            >
              <img
                src="/Glossy Green Savings Promotional Badge.png"
                alt="Save up to ₹2 Lakhs Annually | Plans start at ₹658"
                className="h-[34px] xs:h-[38px] sm:h-[44px] lg:h-[48px] w-auto object-contain drop-shadow-[0_2px_8px_rgba(46,125,50,0.18)] group-hover:drop-shadow-[0_4px_14px_rgba(46,125,50,0.28)] transition-all duration-300"
              />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Value Prop & CTAs */}
            <div className="lg:col-span-5 text-left">
              <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-medium leading-[1.1] tracking-tight text-[#1C1A17] mb-5">
                {tool.titlePart1}{" "}
                <span className="italic font-normal text-[#1C1A17] block sm:inline">
                  {tool.titleItalic}
                </span>
              </h1>

              <p className="text-[15px] sm:text-[16.5px] text-[#5C5850] font-light leading-relaxed mb-7 max-w-lg">
                {tool.description || service.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <a
                  href={`${appUrl}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[14px] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>{tool.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  type="button"
                  onClick={() => openFreeConsultation({ service: service.title, topic: `${service.title} Founder Consultation` })}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 bg-white hover:bg-[#F5F2EA] text-[#1C1A17] font-semibold text-[13.5px] rounded-full border border-[#D8D3C8] transition-all duration-200 cursor-pointer shadow-2xs hover:border-[#BFB8AA]"
                >
                  <Headphones className="w-4 h-4 text-[#445626]" />
                  <span>Talk to an Expert</span>
                </button>
              </div>

              {/* 3 Trust Indicators Below Buttons */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-[12.5px] text-[#736F66] font-medium pt-2 border-t border-[#EAE5DC]">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#445626]" />
                  <span>Quick setup</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#445626]" />
                  <span>Compliant &amp; secure</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#445626]" />
                  <span>Built for startup teams</span>
                </span>
              </div>
            </div>

            {/* Right Column: High-Fidelity Mac Browser Dashboard Mockup Frame */}
            <div className="lg:col-span-7">
              
              <div className="bg-white rounded-2xl border border-[#DDD6CA] shadow-[0_16px_45px_rgba(0,0,0,0.07)] overflow-hidden">
                {/* Browser Top Window Bar */}
                <div className="px-4 py-2.5 bg-[#F4F1EA] border-b border-[#E5E0D5] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-white border border-[#DDD6CA] text-[10px] text-[#7A756C] font-mono select-none">
                    app.foundinglegals.com/{service.slug}
                  </div>
                  <div className="w-10" />
                </div>

                {/* Dashboard App Interface */}
                <div className="grid grid-cols-12 min-h-[360px]">
                  {/* Left Forest Sidebar */}
                  <div className="col-span-3 bg-[#182A1B] text-white p-3 sm:p-3.5 flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      {/* Logo / Workspace Name */}
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
                        <div className="w-4 h-4 rounded-full bg-[#82B350] flex items-center justify-center text-[9px] font-bold text-[#182A1B]">
                          FL
                        </div>
                        <span className="text-[11px] font-bold text-white tracking-tight">FoundingLegals</span>
                      </div>

                      {/* Navigation Items */}
                      <div className="space-y-1 text-[11px]">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:text-white transition-colors">
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>Dashboard</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-[#293F2B] text-white font-semibold">
                          <Layers className="w-3.5 h-3.5 text-[#A8D377]" />
                          <span>{tool.sidebarActive}</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:text-white transition-colors">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Agreements</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:text-white transition-colors">
                          <Receipt className="w-3.5 h-3.5" />
                          <span>Ledger</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:text-white transition-colors">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Vault</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:text-white transition-colors">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Reports</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[9px] text-white/40">
                      FoundingLegals Workspace
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="col-span-9 p-3.5 sm:p-4 bg-[#FAF9F6] text-left flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-[13.5px] font-bold text-[#1C1A17] leading-tight">{tool.headerTitle}</div>
                          <div className="text-[10px] text-[#7A756C]">{tool.headerSubtitle}</div>
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#445626] text-white text-[10.5px] font-semibold"
                        >
                          <Plus className="w-3 h-3" />
                          <span>{tool.addBtnText}</span>
                        </button>
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        {tool.kpis.map((kpi, idx) => (
                          <div key={idx} className="bg-white p-2 rounded-lg border border-[#EAE5DC]">
                            <div className="text-[9px] text-[#7A756C] truncate">{kpi.label}</div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="text-[13px] font-bold text-[#1C1A17] truncate">{kpi.value}</span>
                              {kpi.badge && (
                                <span className="text-[8.5px] font-bold text-[#445626] bg-[#EBF2E3] px-1 rounded truncate">
                                  {kpi.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Search Bar */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#EAE5DC] rounded-md text-[10px] text-[#7A756C]">
                          <Search className="w-3 h-3 text-[#A09B90]" />
                          <span className="truncate">{tool.searchPlaceholder}</span>
                        </div>
                        <div className="px-2 py-1 bg-white border border-[#EAE5DC] rounded-md text-[10px] text-[#7A756C] flex items-center gap-1">
                          <span>All Records</span>
                          <ChevronDown className="w-2.5 h-2.5" />
                        </div>
                      </div>

                      {/* Data Table */}
                      <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-hidden text-[10px]">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                              {tool.tableHeaders.map((hdr, hIdx) => (
                                <th key={hIdx} className={`py-1.5 px-2 font-medium ${hIdx === tool.tableHeaders.length - 1 ? "text-right" : ""}`}>
                                  {hdr}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F2EDE4]">
                            {currentRows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                <td className="py-1.5 px-2 font-medium text-[#1C1A17]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-[#EBF2E3] text-[#445626] font-bold text-[8px] flex items-center justify-center">
                                      {rIdx + 1}
                                    </span>
                                    <span className="truncate">{row.col1}</span>
                                  </div>
                                </td>
                                <td className="py-1.5 px-2 text-[#5C5850] truncate">{row.col2}</td>
                                <td className="py-1.5 px-2 text-[#5C5850] truncate">{row.col3}</td>
                                <td className="py-1.5 px-2 text-[#5C5850] truncate">{row.col4}</td>
                                <td className="py-1.5 px-2 text-right">
                                  <span
                                    className={`inline-block px-1.5 py-0.5 rounded-full font-semibold text-[8.5px] ${
                                      row.statusType === "green"
                                        ? "bg-[#EBF2E3] text-[#3D5A20]"
                                        : row.statusType === "amber"
                                        ? "bg-[#FEF4E2] text-[#9E6514]"
                                        : "bg-[#E5EEF9] text-[#245899]"
                                    }`}
                                  >
                                    {row.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. STATS RIBBON (Matching Image 1 Reference)
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] border-y border-[#E8E2D8] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-[12.5px] sm:text-[13px] text-[#5C5850]">
            
            <div className="font-semibold text-[#1C1A17]">
              Part of a complete founder platform
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#DDD6CA]" />

            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#445626]" />
              <span><strong className="text-[#1C1A17] font-semibold">8 integrated products</strong> for startups</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-[#DDD6CA]" />

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#445626]" />
              <span><strong className="text-[#1C1A17] font-semibold">Up to 5 team members</strong></span>
            </div>

            <div className="hidden lg:block w-px h-5 bg-[#DDD6CA]" />

            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#445626]" />
              <span><strong className="text-[#1C1A17] font-semibold">10,000+ documents</strong> securely managed</span>
            </div>

            <div className="hidden xl:block w-px h-5 bg-[#DDD6CA]" />

            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#445626]" />
              <span><strong className="text-[#1C1A17] font-semibold">Trusted by</strong> Indian founders</span>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. CORE CAPABILITIES (4 Feature Cards - Matching Image 1)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          
          <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1C1A17] leading-[1.15] mb-3">
              {tool.capabilitiesTitle}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#5C5850] font-light leading-relaxed">
              {tool.capabilitiesSubtitle}
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {tool.features.map((feat, idx) => {
              const IconComponent = ICON_MAP[feat.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E5E0D5] p-6 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F0F5EB] border border-[#D8E6CC] text-[#445626] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1C1A17] mb-2 leading-snug">{feat.title}</h3>
                    <p className="text-[13px] text-[#5C5850] leading-relaxed font-light">{feat.desc}</p>
                  </div>
                  <div className="pt-6">
                    <span className="text-[#445626] text-[15px] font-bold group-hover:translate-x-1 inline-block transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. PRODUCT EXPERIENCE (Interactive Tabs & View - Matching Image 1)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Product Experience Title */}
            <div className="lg:col-span-4 text-left">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#445626] mb-3 block">
                PRODUCT EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1C1A17] leading-[1.12] mb-4">
                See {service.title}{" "}
                <span className="italic font-normal">in action.</span>
              </h2>
              <p className="text-[14.5px] text-[#5C5850] font-light leading-relaxed">
                A closer look at how founders use Founding Legals to run {service.title.toLowerCase()} end to end without spreadsheets or fragmented email threads.
              </p>
            </div>

            {/* Right: Interactive Tabs & Mockup View */}
            <div className="lg:col-span-8">
              {/* Tab Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {tool.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer border ${
                      activeTabId === tab.id
                        ? "bg-[#445626] text-white border-[#445626] shadow-xs"
                        : "bg-white text-[#5C5850] border-[#DDD6CA] hover:bg-[#F5F2EA]"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Preview Window Frame */}
              <div className="bg-white rounded-2xl border border-[#DDD6CA] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="grid grid-cols-12 min-h-[300px]">
                  
                  {/* Dark Left Sidebar */}
                  <div className="col-span-3 bg-[#182A1B] text-white p-3 text-left hidden sm:flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 text-[11px] font-bold">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#82B350] text-[#182A1B] flex items-center justify-center text-[8px]">FL</span>
                        <span>FoundingLegals</span>
                      </div>
                      <div className="space-y-1 text-[10.5px]">
                        <div className="px-2 py-1 text-white/50">Dashboard</div>
                        <div className="px-2 py-1 rounded-md bg-[#293F2B] text-white font-semibold">{tool.sidebarActive}</div>
                        <div className="px-2 py-1 text-white/50">Agreements</div>
                        <div className="px-2 py-1 text-white/50">Ledger</div>
                        <div className="px-2 py-1 text-white/50">Vault</div>
                        <div className="px-2 py-1 text-white/50">Reports</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Table Content */}
                  <div className="col-span-12 sm:col-span-9 p-4 bg-[#FAF9F6] text-left">
                    {/* Top subheader */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[13px] font-bold text-[#1C1A17]">
                          {tool.headerTitle} · Active Records
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-white border border-[#EAE5DC] rounded text-[10px] text-[#7A756C] hidden md:flex items-center gap-1">
                          <span>Filter records...</span>
                        </div>
                        <div className="px-2 py-1 bg-[#445626] text-white rounded text-[10px] font-bold">
                          {tool.addBtnText}
                        </div>
                      </div>
                    </div>

                    {/* Table View */}
                    <div className="bg-white rounded-lg border border-[#EAE5DC] overflow-x-auto text-[10.5px]">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-[#F8F6F0] border-b border-[#EAE5DC] text-[#7A756C] text-[9.5px]">
                            {tool.tableHeaders.map((hdr, hIdx) => (
                              <th key={hIdx} className={`py-2 px-2.5 font-medium ${hIdx === tool.tableHeaders.length - 1 ? "text-right" : ""}`}>
                                {hdr}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F2EDE4]">
                          {currentRows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td className="py-2 px-2.5 font-medium text-[#1C1A17] truncate">{row.col1}</td>
                              <td className="py-2 px-2.5 text-[#5C5850] truncate">{row.col2}</td>
                              <td className="py-2 px-2.5 text-[#5C5850] truncate">{row.col3}</td>
                              <td className="py-2 px-2.5 text-[#5C5850] truncate">{row.col4}</td>
                              <td className="py-2 px-2.5 text-right">
                                <span
                                  className={`inline-block px-2 py-0.5 rounded-full font-semibold text-[9px] ${
                                    row.statusType === "green"
                                      ? "bg-[#EBF2E3] text-[#3D5A20]"
                                      : row.statusType === "amber"
                                      ? "bg-[#FEF4E2] text-[#9E6514]"
                                      : "bg-[#E5EEF9] text-[#245899]"
                                  }`}
                                >
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. HOW IT WORKS (4 Horizontal Steps - Matching Image 1)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Title */}
            <div className="lg:col-span-4 text-left">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#445626] mb-3 block">
                HOW IT WORKS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1A17] leading-[1.12]">
                {tool.howItWorksPrefix}{" "}
                <span className="italic font-normal block sm:inline">in 4 simple steps.</span>
              </h2>
            </div>

            {/* Right 4 Horizontal Steps */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {tool.steps.map((st) => (
                <div key={st.num}>
                  <div className="w-8 h-8 rounded-full bg-[#445626] text-white flex items-center justify-center font-bold text-xs mb-3 shadow-2xs">
                    {st.num}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#1C1A17] mb-1 leading-snug">{st.title}</h3>
                  <p className="text-[12.5px] text-[#5C5850] font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. WHY FOUNDERS CHOOSE FOUNDING LEGALS (Matching Image 1)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Title */}
            <div className="lg:col-span-4 text-left">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#445626] mb-3 block">
                WHY FOUNDERS CHOOSE FOUNDING LEGALS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1C1A17] leading-[1.12]">
                Less administration. <br />
                <span className="italic font-normal">More time to build.</span>
              </h2>
            </div>

            {/* Right 3 Value Pillars */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 text-left">
              {tool.pillars.map((pillar, idx) => {
                const IconComponent = ICON_MAP[pillar.icon] || ShieldCheck;
                return (
                  <div key={idx}>
                    <div className="w-9 h-9 rounded-xl bg-[#F0F5EB] border border-[#D8E6CC] text-[#445626] flex items-center justify-center mb-3.5">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-[15.5px] font-bold text-[#1C1A17] mb-1.5 leading-snug">{pillar.title}</h3>
                    <p className="text-[13px] text-[#5C5850] font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. FOUNDER MEMBERSHIP (Single Card, Not Split - Matching Image 1)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 text-left">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#445626] mb-3 block">
                FOUNDER MEMBERSHIP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1C1A17] leading-[1.12] mb-4">
                One membership. <br />
                A complete operating system for founders.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#5C5850] font-light leading-relaxed">
                Get full access to {service.title} and seven other founder tools to run, grow and stay compliant.
              </p>
            </div>

            {/* Right: The Single Unified Founder Plan Card (Matching Image 1) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#DDD6CA] p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)] text-left">
                
                {/* Card Title Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EAE5DC] mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1A17] tracking-tight">
                    Founding Legals Founder Plan
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2E3] text-[#486330] text-[11px] font-bold border border-[#D2E2C0]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>8 products included</span>
                  </span>
                </div>

                <div className="grid sm:grid-cols-12 gap-7 items-start">
                  
                  {/* Left Column: Price & CTAs */}
                  <div className="sm:col-span-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-semibold text-[#7A756C] uppercase tracking-wider block">
                        Price starts from
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-4xl sm:text-5xl font-bold font-serif text-[#1C1A17] tracking-tight">
                          ₹658
                        </span>
                        <span className="text-[13px] font-medium text-[#7A756C]">/month</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF2E3] border border-[#D2E2C0] text-[11.5px] font-medium text-[#486330]">
                      <Sparkles className="w-3.5 h-3.5 text-[#486330] shrink-0" />
                      <span>Save 34% with annual billing (₹7,890/year)</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <a
                        href={`${appUrl}/sign-up`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#445626] hover:bg-[#35431D] text-white font-bold text-[13.5px] rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
                      >
                        <span>Opt for Founder Plan</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </a>

                      <button
                        type="button"
                        onClick={() => openFreeConsultation({ service: "Founder Plan", topic: `${service.title} Founder Plan Consultation` })}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-[#F5F2EA] text-[#1C1A17] font-semibold text-[13px] rounded-full border border-[#D8D3C8] transition-all duration-200 cursor-pointer shadow-2xs"
                      >
                        <Headphones className="w-4 h-4 text-[#445626]" />
                        <span>Talk to an Expert</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Feature Checklist */}
                  <div className="sm:col-span-6 space-y-3 pt-2 sm:pt-0 sm:border-l sm:border-[#EAE5DC] sm:pl-6 text-[12.5px] text-[#403D37]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EBF2E3] text-[#486330] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">Full access to {service.title}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EBF2E3] text-[#486330] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">Complete 8-tool founder platform suite</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EBF2E3] text-[#486330] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">Collaborative workspace for up to 5 team members</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EBF2E3] text-[#486330] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">Encrypted document storage &amp; data export</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. FAQS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left */}
            <div className="lg:col-span-5 text-left">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#445626] mb-3 block">
                FAQS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1C1A17] leading-[1.15] mb-3">
                Have questions? <br />
                We&apos;ve got you covered.
              </h2>
              <p className="text-[15px] text-[#5C5850] font-light leading-relaxed">
                Need more information about {service.title.toLowerCase()}? Connect directly with our founder advisory team.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => openFreeConsultation({ service: service.title, topic: `${service.title} FAQ Enquiry` })}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#445626] hover:text-[#32411C] transition-colors cursor-pointer"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Talk to our operations team →</span>
                </button>
              </div>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-7 space-y-3 text-left">
              {tool.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-xl border border-[#E5E0D5] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                    >
                      <span className="text-[14.5px] font-semibold text-[#1C1A17] pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7A756C] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#445626]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-0 text-[13px] text-[#5C5850] leading-relaxed border-t border-[#F2EDE4] font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. BOTTOM CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#445626] text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.15] mb-4 text-white">
            {tool.bottomCtaTitle}
          </h2>
          <p className="text-[15.5px] sm:text-[17px] text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            {tool.bottomCtaDesc}
          </p>

          <a
            href={`${appUrl}/sign-up`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white hover:bg-[#FAF8F5] text-[#445626] font-bold text-[14.5px] rounded-full transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </section>

    </div>
  );
}
