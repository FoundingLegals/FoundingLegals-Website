// ─────────────────────────────────────────────────────────────
// Founding Legals — Service Registry Helper for Client Feedback
// Dynamically extracts official service names to avoid duplication
// ─────────────────────────────────────────────────────────────

export interface ServiceOption {
  id: string;
  name: string;
}

export const FEEDBACK_SERVICES: ServiceOption[] = [
  { id: "company-incorporation", name: "Company Incorporation (Pvt Ltd / Public Ltd)" },
  { id: "llp-registration", name: "LLP Registration" },
  { id: "opc-registration", name: "One Person Company (OPC) Registration" },
  { id: "partnership-sole-prop", name: "Partnership / Sole Proprietorship Registration" },
  { id: "name-registration", name: "Company Name Search & Registration" },
  { id: "agreements", name: "Legal Agreements & Contracts" },
  { id: "trademark-registration", name: "Trademark & IP Registration" },
  { id: "gst-registration-filing", name: "GST Registration & Tax Filing" },
  { id: "startup-compliance", name: "Startup Compliance & ROC Filings" },
  { id: "dpiit-recognition", name: "DPIIT Startup India Certification" },
  { id: "licenses-registrations", name: "MSME / FSSAI / IEC Licenses" },
  { id: "tax-audit-advisory", name: "Tax Audit & CA Advisory" },
  { id: "pitch-fundraising", name: "Pitch & Investor Readiness" },
  { id: "team-payroll", name: "Team Management & Payslips" },
  { id: "client-management", name: "Client Management & Invoicing" },
  { id: "other", name: "Other Legal / CA Service" },
];

export function getFeedbackServices(): ServiceOption[] {
  return FEEDBACK_SERVICES;
}
