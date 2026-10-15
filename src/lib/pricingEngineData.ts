export interface StateStampDuty {
  state: string;
  pvtLtdStampDuty: number;
  llpStampDuty: number;
  partnershipStampDuty: number;
  rocOffice?: string;
  turnaroundDays?: string;
  notes?: string;
}

export const STATE_STAMP_DUTY_LOOKUP: Record<string, StateStampDuty> = {
  "Maharashtra": {
    state: "Maharashtra",
    pvtLtdStampDuty: 1300,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Mumbai / ROC Pune",
    turnaroundDays: "5–8 Working Days",
    notes: "MOA stamp duty is ₹1,000 + ₹300 AOA stamp duty under Bombay Stamp Act."
  },
  "Karnataka": {
    state: "Karnataka",
    pvtLtdStampDuty: 10020,
    llpStampDuty: 5000,
    partnershipStampDuty: 1000,
    rocOffice: "ROC Bengaluru",
    turnaroundDays: "6–9 Working Days",
    notes: "Karnataka mandates ₹10,000 MOA statutory rate + ₹20 electronic stamping fee."
  },
  "Delhi": {
    state: "Delhi",
    pvtLtdStampDuty: 360,
    llpStampDuty: 500,
    partnershipStampDuty: 200,
    rocOffice: "ROC Delhi & Haryana (New Delhi)",
    turnaroundDays: "4–7 Working Days",
    notes: "Lowest stamp duty structure in North India: ₹360 combined MOA & AOA stamping."
  },
  "Telangana": {
    state: "Telangana",
    pvtLtdStampDuty: 1520,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Hyderabad",
    turnaroundDays: "5–7 Working Days",
    notes: "Direct electronic payment via IGRS Telangana portal."
  },
  "Tamil Nadu": {
    state: "Tamil Nadu",
    pvtLtdStampDuty: 720,
    llpStampDuty: 1000,
    partnershipStampDuty: 300,
    rocOffice: "ROC Chennai / ROC Coimbatore",
    turnaroundDays: "5–8 Working Days",
    notes: "State e-stamping integrated via StockHolding portal; ₹720 standard incorporation stamp."
  },
  "Gujarat": {
    state: "Gujarat",
    pvtLtdStampDuty: 820,
    llpStampDuty: 2000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Ahmedabad",
    turnaroundDays: "5–8 Working Days",
    notes: "MOA & AOA stamp duty computed on nominal capital; e-Stamping through approved banks."
  },
  "Uttar Pradesh": {
    state: "Uttar Pradesh",
    pvtLtdStampDuty: 1010,
    llpStampDuty: 750,
    partnershipStampDuty: 500,
    rocOffice: "ROC Kanpur",
    turnaroundDays: "6–9 Working Days",
    notes: "E-stamping via SHCIL; ₹1,010 standard statutory stamp duty."
  },
  "Haryana": {
    state: "Haryana",
    pvtLtdStampDuty: 135,
    llpStampDuty: 500,
    partnershipStampDuty: 200,
    rocOffice: "ROC Delhi & Haryana (Gurugram)",
    turnaroundDays: "4–7 Working Days",
    notes: "Extremely cost-effective statutory stamp duty of ₹135 for Gurugram startups."
  },
  "Kerala": {
    state: "Kerala",
    pvtLtdStampDuty: 3025,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Ernakulam (Kochi)",
    turnaroundDays: "6–9 Working Days",
    notes: "Standard statutory stamp duty under Kerala Stamp Act."
  },
  "Andhra Pradesh": {
    state: "Andhra Pradesh",
    pvtLtdStampDuty: 1520,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Vijayawada",
    turnaroundDays: "5–8 Working Days",
    notes: "Fixed stamp duty with full online verification across IGRS Andhra."
  },
  "Rajasthan": {
    state: "Rajasthan",
    pvtLtdStampDuty: 5510,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Jaipur",
    turnaroundDays: "6–9 Working Days",
    notes: "State stamp duty payable via e-Gras Rajasthan treasury portal."
  },
  "Goa": {
    state: "Goa",
    pvtLtdStampDuty: 1200,
    llpStampDuty: 500,
    partnershipStampDuty: 200,
    rocOffice: "ROC Goa",
    turnaroundDays: "5–8 Working Days",
    notes: "Statutory state rate under Goa Stamp Act."
  },
  "Punjab": {
    state: "Punjab",
    pvtLtdStampDuty: 10025,
    llpStampDuty: 1500,
    partnershipStampDuty: 1000,
    rocOffice: "ROC Chandigarh",
    turnaroundDays: "7–10 Working Days",
    notes: "Higher slab state stamp duty under Punjab Stamp Amendment Act."
  },
  "Madhya Pradesh": {
    state: "Madhya Pradesh",
    pvtLtdStampDuty: 7550,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Gwalior",
    turnaroundDays: "6–9 Working Days",
    notes: "E-stamping via Cyber Treasury MP; revised statutory incorporation slab."
  },
  "Himachal Pradesh": {
    state: "Himachal Pradesh",
    pvtLtdStampDuty: 123,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Chandigarh (HP Jurisdiction)",
    turnaroundDays: "7–10 Working Days",
    notes: "₹123 statutory stamp duty on incorporation."
  },
  "Uttarakhand": {
    state: "Uttarakhand",
    pvtLtdStampDuty: 1010,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Uttarakhand (Dehradun)",
    turnaroundDays: "6–9 Working Days",
    notes: "Standard statutory stamp duty on private company MOA/AOA."
  },
  "Chhattisgarh": {
    state: "Chhattisgarh",
    pvtLtdStampDuty: 1510,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Bilaspur / ROC Raipur",
    turnaroundDays: "6–9 Working Days",
    notes: "Standard stamp duty via Chhattisgarh e-challan system."
  },
  "Jammu and Kashmir": {
    state: "Jammu and Kashmir",
    pvtLtdStampDuty: 310,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Jammu & Kashmir (Jammu)",
    turnaroundDays: "7–11 Working Days",
    notes: "Special startup provisions with ₹310 standard stamp rate."
  },
  "Ladakh": {
    state: "Ladakh",
    pvtLtdStampDuty: 310,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Jammu & Kashmir",
    turnaroundDays: "8–12 Working Days",
    notes: "Processed under UT Ladakh jurisdiction."
  },
  "West Bengal": {
    state: "West Bengal",
    pvtLtdStampDuty: 370,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Kolkata",
    turnaroundDays: "7–10 Working Days",
    notes: "Combined MOA/AOA statutory stamp paper rate."
  },
  "Bihar": {
    state: "Bihar",
    pvtLtdStampDuty: 1600,
    llpStampDuty: 5000,
    partnershipStampDuty: 200,
    rocOffice: "ROC Patna",
    turnaroundDays: "6–9 Working Days",
    notes: "Statutory state stamp duty on SPICe+ MoA/AoA filings."
  },
  "Jharkhand": {
    state: "Jharkhand",
    pvtLtdStampDuty: 173,
    llpStampDuty: 500,
    partnershipStampDuty: 200,
    rocOffice: "ROC Ranchi",
    turnaroundDays: "6–9 Working Days",
    notes: "Low state stamp duty rate of ₹173 for incorporation documents."
  },
  "Odisha": {
    state: "Odisha",
    pvtLtdStampDuty: 610,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Cuttack",
    turnaroundDays: "6–9 Working Days",
    notes: "Standard MOA/AOA stamp rate of ₹610."
  },
  "Assam": {
    state: "Assam",
    pvtLtdStampDuty: 525,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong (NER)",
    turnaroundDays: "7–11 Working Days",
    notes: "Covers northeastern regional ROC jurisdictions."
  },
  "Sikkim": {
    state: "Sikkim",
    pvtLtdStampDuty: 0,
    llpStampDuty: 0,
    partnershipStampDuty: 0,
    rocOffice: "ROC Shillong (Sikkim)",
    turnaroundDays: "7–12 Working Days",
    notes: "Exempted state stamp duty on new company incorporations (₹0 stamp duty)."
  },
  "Meghalaya": {
    state: "Meghalaya",
    pvtLtdStampDuty: 410,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong",
    turnaroundDays: "7–11 Working Days",
    notes: "Seat of ROC North East Region."
  },
  "Arunachal Pradesh": {
    state: "Arunachal Pradesh",
    pvtLtdStampDuty: 710,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong",
    turnaroundDays: "7–11 Working Days",
    notes: "North East Region ROC jurisdiction."
  },
  "Manipur": {
    state: "Manipur",
    pvtLtdStampDuty: 260,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong",
    turnaroundDays: "7–11 Working Days",
    notes: "North East regional administration."
  },
  "Mizoram": {
    state: "Mizoram",
    pvtLtdStampDuty: 260,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong",
    turnaroundDays: "7–11 Working Days",
    notes: "North East Region administration."
  },
  "Nagaland": {
    state: "Nagaland",
    pvtLtdStampDuty: 260,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong",
    turnaroundDays: "7–11 Working Days",
    notes: "North East Region administration."
  },
  "Tripura": {
    state: "Tripura",
    pvtLtdStampDuty: 260,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Shillong",
    turnaroundDays: "7–11 Working Days",
    notes: "North East Region administration."
  },
  "Chandigarh": {
    state: "Chandigarh",
    pvtLtdStampDuty: 1503,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Chandigarh (UT)",
    turnaroundDays: "5–8 Working Days",
    notes: "Union Territory stamp rate under Chandigarh administration."
  },
  "Puducherry": {
    state: "Puducherry",
    pvtLtdStampDuty: 510,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Chennai (Puducherry Jurisdiction)",
    turnaroundDays: "6–9 Working Days",
    notes: "Processed under ROC Chennai with ₹510 stamp duty."
  },
  "Andaman and Nicobar Islands": {
    state: "Andaman and Nicobar Islands",
    pvtLtdStampDuty: 520,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Kolkata (A&N)",
    turnaroundDays: "8–12 Working Days",
    notes: "Processed via ROC Kolkata regional jurisdiction."
  },
  "Daman and Diu": {
    state: "Daman and Diu",
    pvtLtdStampDuty: 1170,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Goa / Ahmedabad",
    turnaroundDays: "6–9 Working Days",
    notes: "Union Territory administration rate."
  },
  "Daman & Diu": {
    state: "Daman & Diu",
    pvtLtdStampDuty: 1170,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Goa / Ahmedabad",
    turnaroundDays: "6–9 Working Days",
    notes: "Union Territory administration rate."
  },
  "Dadra and Nagar Haveli": {
    state: "Dadra and Nagar Haveli",
    pvtLtdStampDuty: 41,
    llpStampDuty: 500,
    partnershipStampDuty: 200,
    rocOffice: "ROC Ahmedabad",
    turnaroundDays: "6–9 Working Days",
    notes: "Union Territory administration rate."
  },
  "Lakshadweep": {
    state: "Lakshadweep",
    pvtLtdStampDuty: 1525,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Ernakulam (Lakshadweep)",
    turnaroundDays: "8–12 Working Days",
    notes: "Administered via ROC Ernakulam."
  },
  "Jammu & Kashmir": {
    state: "Jammu & Kashmir",
    pvtLtdStampDuty: 310,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Jammu & Kashmir (Jammu)",
    turnaroundDays: "7–11 Working Days",
    notes: "Special startup provisions with ₹310 standard stamp rate."
  },
  "Andaman & Nicobar": {
    state: "Andaman & Nicobar",
    pvtLtdStampDuty: 520,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "ROC Kolkata (A&N)",
    turnaroundDays: "8–12 Working Days",
    notes: "Processed via ROC Kolkata regional jurisdiction."
  },
  "Dadra & Nagar Haveli": {
    state: "Dadra & Nagar Haveli",
    pvtLtdStampDuty: 41,
    llpStampDuty: 500,
    partnershipStampDuty: 200,
    rocOffice: "ROC Ahmedabad",
    turnaroundDays: "6–9 Working Days",
    notes: "Union Territory administration rate."
  },
  "Other States / Union Territories": {
    state: "Other States / Union Territories",
    pvtLtdStampDuty: 1500,
    llpStampDuty: 1000,
    partnershipStampDuty: 500,
    rocOffice: "Respective State ROC",
    turnaroundDays: "6–10 Working Days",
    notes: "Statutory average estimation."
  }
};

export const ALL_INDIAN_STATES = [
  "Maharashtra",
  "Karnataka",
  "Delhi",
  "Telangana",
  "Tamil Nadu",
  "Gujarat",
  "Uttar Pradesh",
  "Haryana",
  "Kerala",
  "Andhra Pradesh",
  "Rajasthan",
  "Goa",
  "Punjab",
  "Madhya Pradesh",
  "Himachal Pradesh",
  "Uttarakhand",
  "Chhattisgarh",
  "Jammu & Kashmir",
  "Ladakh",
  "West Bengal",
  "Bihar",
  "Jharkhand",
  "Odisha",
  "Assam",
  "Sikkim",
  "Meghalaya",
  "Arunachal Pradesh",
  "Manipur",
  "Mizoram",
  "Nagaland",
  "Tripura",
  "Chandigarh",
  "Puducherry",
  "Andaman & Nicobar",
  "Daman & Diu",
  "Dadra & Nagar Haveli",
  "Lakshadweep"
];

export const TOP_STARTUP_STATES = [
  "Karnataka",
  "Maharashtra",
  "Delhi",
  "Telangana",
  "Tamil Nadu",
  "Gujarat",
  "Uttar Pradesh",
  "Haryana"
];

export type EntityTypeId =
  | "pvt_ltd"
  | "public_ltd"
  | "llp"
  | "opc"
  | "partnership"
  | "sole_prop"
  | "section8"
  | "dpiit"
  | "gst"
  | "udyam"
  | "iec"
  | "fssai_state"
  | "fssai_central"
  | "trademark"
  | "ptax"
  | "labour";

export interface EntityTypeConfig {
  id: EntityTypeId;
  name: string;
  badge: string;
  defaultDirectors: number;
  minDirectors: number;
  maxDirectors: number;
  defaultDsc: number;
  defaultCapital: number;
  hasShareCapitalOption: boolean;
  baseProfessionalFee: number;
  marketTraditionalRate: number;
  fixedRocFee: number;
  adminVerificationFee: number;
  dscUnitPrice: number;
  description: string;
}

export const ENTITY_CONFIGS: Record<EntityTypeId, EntityTypeConfig> = {
  pvt_ltd: {
    id: "pvt_ltd",
    name: "Private Limited Company (Pvt Ltd)",
    badge: "VC & Investor Preferred",
    defaultDirectors: 2,
    minDirectors: 2,
    maxDirectors: 15,
    defaultDsc: 2,
    defaultCapital: 100000,
    hasShareCapitalOption: true,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 9999,
    fixedRocFee: 1000,
    adminVerificationFee: 400,
    dscUnitPrice: 2500,
    description: "Most popular legal structure for startups, offering equity issuance and limited liability.",
  },
  public_ltd: {
    id: "public_ltd",
    name: "Public Limited Company",
    badge: "Large Scale & Public Funding",
    defaultDirectors: 3,
    minDirectors: 3,
    maxDirectors: 15,
    defaultDsc: 3,
    defaultCapital: 500000,
    hasShareCapitalOption: true,
    baseProfessionalFee: 3999,
    marketTraditionalRate: 18000,
    fixedRocFee: 1000,
    adminVerificationFee: 730,
    dscUnitPrice: 2500,
    description: "For large companies planning institutional initial public offers and public investments.",
  },
  llp: {
    id: "llp",
    name: "Limited Liability Partnership (LLP)",
    badge: "Low Compliance Burden",
    defaultDirectors: 2,
    minDirectors: 2,
    maxDirectors: 50,
    defaultDsc: 2,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 7500,
    fixedRocFee: 700,
    adminVerificationFee: 1000,
    dscUnitPrice: 2500,
    description: "Combines partnership flexibility with corporate limited liability, audit-free up to ₹40L.",
  },
  opc: {
    id: "opc",
    name: "One Person Company (OPC)",
    badge: "Solo Founder Protection",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 1,
    defaultDsc: 2,
    defaultCapital: 100000,
    hasShareCapitalOption: true,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 8500,
    fixedRocFee: 1000,
    adminVerificationFee: 400,
    dscUnitPrice: 2500,
    description: "Solo founder corporate structure with 100% limited liability and single ownership.",
  },
  partnership: {
    id: "partnership",
    name: "Partnership Firm (ROF)",
    badge: "Traditional Agreement Based",
    defaultDirectors: 2,
    minDirectors: 2,
    maxDirectors: 20,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 6000,
    fixedRocFee: 500,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "Traditional partnership firm with Registrar of Firms (ROF) deed drafting and registration.",
  },
  sole_prop: {
    id: "sole_prop",
    name: "Sole Proprietorship",
    badge: "Fastest Bank Account Setup",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 1,
    defaultDsc: 0,
    defaultCapital: 50000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1499,
    marketTraditionalRate: 4000,
    fixedRocFee: 0,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "Flat package including MSME/Udyam & GST or Shop Act to start trading under your business brand.",
  },
  section8: {
    id: "section8",
    name: "Section 8 Company (NGO)",
    badge: "Non-Profit & Charitable",
    defaultDirectors: 2,
    minDirectors: 2,
    maxDirectors: 15,
    defaultDsc: 2,
    defaultCapital: 100000,
    hasShareCapitalOption: true,
    baseProfessionalFee: 4999,
    marketTraditionalRate: 20000,
    fixedRocFee: 3000,
    adminVerificationFee: 400,
    dscUnitPrice: 2500,
    description: "Non-profit corporate structure with MCA license for charitable, educational, and social initiatives.",
  },
  dpiit: {
    id: "dpiit",
    name: "DPIIT Startup India Recognition",
    badge: "80-IAC Tax Exemption",
    defaultDirectors: 2,
    minDirectors: 1,
    maxDirectors: 15,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 6500,
    fixedRocFee: 0,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "Startup India Certificate & 80-IAC / Section 56 angel tax exemption eligibility.",
  },
  gst: {
    id: "gst",
    name: "GST Registration",
    badge: "Mandatory Tax ID",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 15,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 999,
    marketTraditionalRate: 3000,
    fixedRocFee: 0,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "New GSTIN allotment with ARN verification & Official GST Certificate.",
  },
  udyam: {
    id: "udyam",
    name: "UDYAM / MSME Registration",
    badge: "Subsidies & Bank Perks",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 15,
    defaultDsc: 0,
    defaultCapital: 50000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 499,
    marketTraditionalRate: 2000,
    fixedRocFee: 0,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "MSME registration certificate for priority sector banking lending and government subsidies.",
  },
  iec: {
    id: "iec",
    name: "Import Export Code (IEC)",
    badge: "Global Trade Gateway",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 15,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1499,
    marketTraditionalRate: 4500,
    fixedRocFee: 500,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "DGFT registration to import/export commercial goods, SaaS, and software globally.",
  },
  fssai_state: {
    id: "fssai_state",
    name: "FSSAI State Food License",
    badge: "Food Authority Compliance",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 15,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 2999,
    marketTraditionalRate: 8000,
    fixedRocFee: 2000,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "Mandatory state food safety authority license for restaurants, cloud kitchens & FMCG.",
  },
  fssai_central: {
    id: "fssai_central",
    name: "FSSAI Central Food License",
    badge: "Nationwide Operations",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 15,
    defaultDsc: 0,
    defaultCapital: 500000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 4999,
    marketTraditionalRate: 15000,
    fixedRocFee: 7500,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "For large scale, nationwide or multi-state food businesses and importers.",
  },
  trademark: {
    id: "trademark",
    name: "Trademark Registration",
    badge: "Brand IP Protection",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 5,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1499,
    marketTraditionalRate: 6000,
    fixedRocFee: 4500,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "Brand name, logo and IP trademark filing under Form TM-A with government receipt.",
  },
  ptax: {
    id: "ptax",
    name: "Professional Tax Registration",
    badge: "State PTEC / PTRC",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 5,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 5000,
    fixedRocFee: 500,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "State-specific enrollment (PTEC/PTRC) for business owners and employer payroll.",
  },
  labour: {
    id: "labour",
    name: "Labour License / Shop Act",
    badge: "Commercial Establishment",
    defaultDirectors: 1,
    minDirectors: 1,
    maxDirectors: 5,
    defaultDsc: 0,
    defaultCapital: 100000,
    hasShareCapitalOption: false,
    baseProfessionalFee: 1999,
    marketTraditionalRate: 5500,
    fixedRocFee: 500,
    adminVerificationFee: 0,
    dscUnitPrice: 0,
    description: "Municipal labour registration and commercial shop & establishment license.",
  },
};

export interface GovtFeeRegisterItem {
  pvtLtd: { slab1L: number; slab5L: number };
  opc: { slab1L: number; slab5L: number };
  llp: { slab1L: number; slab5L: number };
}

/**
 * Official Government Fee Register (State-wise statutory fees).
 * Slabs: ₹1,00,000 and ₹5,00,000 share capital.
 * Pvt Ltd and OPC figures include 2 DSC and standard incorporation verifications as specified in the register.
 */
export const GOVT_FEE_REGISTER: Record<string, GovtFeeRegisterItem> = {
  "Andaman & Nicobar Islands": {
    pvtLtd: { slab1L: 6920, slab5L: 8920 },
    opc: { slab1L: 6920, slab5L: 8920 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Andhra Pradesh": {
    pvtLtd: { slab1L: 7920, slab5L: 9920 },
    opc: { slab1L: 7920, slab5L: 9920 },
    llp: { slab1L: 7200, slab5L: 8700 },
  },
  "Arunachal Pradesh": {
    pvtLtd: { slab1L: 7110, slab5L: 9110 },
    opc: { slab1L: 7110, slab5L: 9110 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Assam": {
    pvtLtd: { slab1L: 6925, slab5L: 8925 },
    opc: { slab1L: 6925, slab5L: 8925 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Bihar": {
    pvtLtd: { slab1L: 8000, slab5L: 10000 },
    opc: { slab1L: 8000, slab5L: 10000 },
    llp: { slab1L: 11700, slab5L: 13200 },
  },
  "Chandigarh": {
    pvtLtd: { slab1L: 7903, slab5L: 9903 },
    opc: { slab1L: 7903, slab5L: 9903 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Chhattisgarh": {
    pvtLtd: { slab1L: 7910, slab5L: 9910 },
    opc: { slab1L: 7910, slab5L: 9910 },
    llp: { slab1L: 8700, slab5L: 10200 },
  },
  "Goa": {
    pvtLtd: { slab1L: 7600, slab5L: 9600 },
    opc: { slab1L: 7600, slab5L: 9600 },
    llp: { slab1L: 6850, slab5L: 8350 },
  },
  "Haryana": {
    pvtLtd: { slab1L: 6535, slab5L: 8595 },
    opc: { slab1L: 6535, slab5L: 8595 },
    llp: { slab1L: 7700, slab5L: 9200 },
  },
  "Himachal Pradesh": {
    pvtLtd: { slab1L: 6523, slab5L: 8583 },
    opc: { slab1L: 6523, slab5L: 8583 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Jammu & Kashmir": {
    pvtLtd: { slab1L: 6710, slab5L: 8860 },
    opc: { slab1L: 6710, slab5L: 8860 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Jharkhand": {
    pvtLtd: { slab1L: 6573, slab5L: 8573 },
    opc: { slab1L: 6573, slab5L: 8573 },
    llp: { slab1L: 11700, slab5L: 13200 },
  },
  "Karnataka": {
    pvtLtd: { slab1L: 16420, slab5L: 18420 },
    opc: { slab1L: 16420, slab5L: 19919 },
    llp: { slab1L: 11700, slab5L: 13200 },
  },
  "Kerala": {
    pvtLtd: { slab1L: 9425, slab5L: 11425 },
    opc: { slab1L: 9425, slab5L: 11425 },
    llp: { slab1L: 11700, slab5L: 13200 },
  },
  "Lakshadweep": {
    pvtLtd: { slab1L: 7925, slab5L: 9925 },
    opc: { slab1L: 7925, slab5L: 9925 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Madhya Pradesh": {
    pvtLtd: { slab1L: 13950, slab5L: 15950 },
    opc: { slab1L: 13950, slab5L: 15950 },
    llp: { slab1L: 8700, slab5L: 10200 },
  },
  "Maharashtra": {
    pvtLtd: { slab1L: 7700, slab5L: 9700 },
    opc: { slab1L: 7700, slab5L: 9700 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Manipur": {
    pvtLtd: { slab1L: 6660, slab5L: 8660 },
    opc: { slab1L: 6660, slab5L: 8660 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Meghalaya": {
    pvtLtd: { slab1L: 6810, slab5L: 8810 },
    opc: { slab1L: 6810, slab5L: 8810 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Mizoram": {
    pvtLtd: { slab1L: 6660, slab5L: 8660 },
    opc: { slab1L: 6660, slab5L: 8660 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Nagaland": {
    pvtLtd: { slab1L: 6660, slab5L: 8660 },
    opc: { slab1L: 6660, slab5L: 8660 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Odisha": {
    pvtLtd: { slab1L: 7010, slab5L: 9010 },
    opc: { slab1L: 7010, slab5L: 9010 },
    llp: { slab1L: 6900, slab5L: 8400 },
  },
  "Puducherry": {
    pvtLtd: { slab1L: 6910, slab5L: 8910 },
    opc: { slab1L: 6910, slab5L: 8910 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Punjab": {
    pvtLtd: { slab1L: 16425, slab5L: 23425 },
    opc: { slab1L: 16425, slab5L: 23425 },
    llp: { slab1L: 7700, slab5L: 9200 },
  },
  "Rajasthan": {
    pvtLtd: { slab1L: 11910, slab5L: 13910 },
    opc: { slab1L: 11910, slab5L: 13910 },
    llp: { slab1L: 10700, slab5L: 18200 },
  },
  "Sikkim": {
    pvtLtd: { slab1L: 6400, slab5L: 8400 },
    opc: { slab1L: 6400, slab5L: 8400 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Tamil Nadu": {
    pvtLtd: { slab1L: 7120, slab5L: 9120 },
    opc: { slab1L: 7120, slab5L: 9120 },
    llp: { slab1L: 7000, slab5L: 8500 },
  },
  "Telangana": {
    pvtLtd: { slab1L: 7920, slab5L: 9920 },
    opc: { slab1L: 7920, slab5L: 9920 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Tripura": {
    pvtLtd: { slab1L: 6660, slab5L: 8660 },
    opc: { slab1L: 6660, slab5L: 8660 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Uttar Pradesh": {
    pvtLtd: { slab1L: 7410, slab5L: 9410 },
    opc: { slab1L: 7410, slab5L: 9410 },
    llp: { slab1L: 7450, slab5L: 8950 },
  },
  "Uttarakhand": {
    pvtLtd: { slab1L: 7410, slab5L: 9410 },
    opc: { slab1L: 7410, slab5L: 9410 },
    llp: { slab1L: 7450, slab5L: 8950 },
  },
  "West Bengal": {
    pvtLtd: { slab1L: 6770, slab5L: 8770 },
    opc: { slab1L: 6770, slab5L: 8770 },
    llp: { slab1L: 6850, slab5L: 8350 },
  },
  "Gujarat": {
    pvtLtd: { slab1L: 7220, slab5L: 11020 },
    opc: { slab1L: 7220, slab5L: 11020 },
    llp: { slab1L: 8700, slab5L: 10200 },
  },
  "Delhi": {
    pvtLtd: { slab1L: 6760, slab5L: 8760 },
    opc: { slab1L: 6760, slab5L: 8760 },
    llp: { slab1L: 7200, slab5L: 8700 },
  },
  "Ladakh": {
    pvtLtd: { slab1L: 6710, slab5L: 8860 },
    opc: { slab1L: 6710, slab5L: 8860 },
    llp: { slab1L: 6800, slab5L: 8300 },
  },
  "Daman and Diu": {
    pvtLtd: { slab1L: 7570, slab5L: 9570 },
    opc: { slab1L: 7570, slab5L: 9570 },
    llp: { slab1L: 7700, slab5L: 13200 },
  },
  "Dadra and Nagar Haveli": {
    pvtLtd: { slab1L: 6441, slab5L: 8441 },
    opc: { slab1L: 6441, slab5L: 8441 },
    llp: { slab1L: 7200, slab5L: 8700 },
  },
};

/**
 * Normalizes state name to match GOVT_FEE_REGISTER keys
 */
export function getGovtFeeRegisterEntry(stateName: string): GovtFeeRegisterItem {
  if (!stateName) return GOVT_FEE_REGISTER["Maharashtra"];
  if (GOVT_FEE_REGISTER[stateName]) return GOVT_FEE_REGISTER[stateName];

  const trimmed = stateName.trim();
  if (GOVT_FEE_REGISTER[trimmed]) return GOVT_FEE_REGISTER[trimmed];

  const withAnd = trimmed.replace(/&/g, "and");
  if (GOVT_FEE_REGISTER[withAnd]) return GOVT_FEE_REGISTER[withAnd];

  const withAmp = trimmed.replace(/\band\b/gi, "&");
  if (GOVT_FEE_REGISTER[withAmp]) return GOVT_FEE_REGISTER[withAmp];

  if (/Andaman/i.test(trimmed)) return GOVT_FEE_REGISTER["Andaman & Nicobar Islands"];
  if (/Jammu/i.test(trimmed)) return GOVT_FEE_REGISTER["Jammu & Kashmir"];
  if (/Daman/i.test(trimmed)) return GOVT_FEE_REGISTER["Daman and Diu"];
  if (/Dadra/i.test(trimmed)) return GOVT_FEE_REGISTER["Dadra and Nagar Haveli"];

  const lower = trimmed.toLowerCase();
  for (const [key, val] of Object.entries(GOVT_FEE_REGISTER)) {
    if (key.toLowerCase() === lower || key.toLowerCase().includes(lower) || lower.includes(key.toLowerCase())) {
      return val;
    }
  }

  return GOVT_FEE_REGISTER["Maharashtra"];
}

export interface QuoteCalculationParams {
  entityType: EntityTypeId;
  state: string;
  hasShareCapital?: boolean;
  numDirectors?: number;
  authorizedCapital?: number;
  numDsc?: number;
}

export interface ItemizedQuote {
  entityName: string;
  selectedState: string;
  rocOffice: string;
  turnaroundDays: string;
  rocFees: number;
  stampDuty: number;
  stampDutyDescription?: string;
  directorFees: number;
  dscFees: number;
  panTanFee: number;
  govtIncorporationFee: number;
  govtFeesSubtotal: number;
  professionalFees: number;
  marketTraditionalRate: number;
  estimatedSavings: number;
  totalCost: number;
  stateNotes: string;
}

export function calculateQuote(params: QuoteCalculationParams): ItemizedQuote {
  const config = ENTITY_CONFIGS[params.entityType] || ENTITY_CONFIGS.pvt_ltd;
  const stateKey = params.state || "Karnataka";
  const stateData =
    STATE_STAMP_DUTY_LOOKUP[stateKey] ||
    STATE_STAMP_DUTY_LOOKUP[stateKey.replace("&", "and")] ||
    STATE_STAMP_DUTY_LOOKUP[stateKey.replace("and", "&")] ||
    STATE_STAMP_DUTY_LOOKUP["Karnataka"] ||
    STATE_STAMP_DUTY_LOOKUP["Maharashtra"];

  const hasCap = params.hasShareCapital !== false;
  const numDsc = Math.max(0, params.numDsc ?? (params.entityType === "opc" ? 2 : config.defaultDsc));
  const capital = !hasCap || params.authorizedCapital === 0
    ? 0
    : (params.authorizedCapital ?? config.defaultCapital);

  let rocFees = config.fixedRocFee;
  let stampDuty = 0;
  let stampDutyDescription = "";
  let directorFees = config.adminVerificationFee;
  let dscFees = numDsc * config.dscUnitPrice;
  let govtIncorporationFee = 0;
  let panTanFee = 0;

  switch (params.entityType) {
    case "pvt_ltd":
    case "opc": {
      rocFees = 1000;
      panTanFee = 0;

      // Official Government Fee Register entry
      const regEntry = getGovtFeeRegisterEntry(params.state || "Karnataka");
      const slabPair = params.entityType === "opc" ? regEntry.opc : regEntry.pvtLtd;

      // Standard register baseline includes 2 DSC (₹5,000) & 2 director/nominee verifications (₹400)
      const baseDsc = 2 * 2500;
      const baseDirectors = 2 * 200;
      const baseStandardFees = rocFees + baseDirectors + baseDsc; // ₹6,400

      // Compute exact statutory stamp duties for the 1L and 5L slabs
      const stampDuty1L = Math.max(0, slabPair.slab1L - baseStandardFees);
      const stampDuty5L = Math.max(0, slabPair.slab5L - baseStandardFees);

      // MCA Tiered SPICe+ Part B incorporation fee
      // Zero fee up to ₹15,00,000 capital under SPICe+
      if (capital > 1500000) {
        if (capital <= 5000000) {
          govtIncorporationFee = Math.ceil((capital - 1500000) / 100000) * 400;
        } else if (capital <= 10000000) {
          govtIncorporationFee = 35 * 400 + Math.ceil((capital - 5000000) / 100000) * 300;
        } else {
          govtIncorporationFee = 35 * 400 + 50 * 300 + Math.ceil((capital - 10000000) / 100000) * 100;
        }
      }

      // State MOA + AOA Stamp Duty based on authorised share capital
      if (capital === 0) {
        stampDuty = 1000;
        stampDutyDescription = "MOA + AOA · Company not having share capital";
      } else if (capital <= 100000) {
        stampDuty = stampDuty1L;
        stampDutyDescription = `MOA + AOA · ${stateData.state} Stamp Act (Authorised capital up to ₹1 lakh)`;
      } else if (capital === 500000) {
        stampDuty = stampDuty5L;
        stampDutyDescription = `MOA + AOA · ${stateData.state} Stamp Act (Authorised capital ₹5 lakh)`;
      } else if (capital < 500000) {
        const progress = (capital - 100000) / 400000;
        stampDuty = Math.round(stampDuty1L + progress * (stampDuty5L - stampDuty1L));
        const capStr = (capital / 100000).toFixed(capital % 100000 === 0 ? 0 : 1);
        stampDutyDescription = `MOA + AOA · ${stateData.state} Stamp Act (Authorised capital up to ₹${capStr} lakh)`;
      } else {
        const slabDiff = stampDuty5L - stampDuty1L;
        const extraPerLakh = Math.max(200, Math.round(slabDiff / 4));
        const extraLakhs = Math.ceil((capital - 500000) / 100000);
        stampDuty = stampDuty5L + extraLakhs * extraPerLakh;
        const capStr = (capital / 100000).toFixed(capital % 100000 === 0 ? 0 : 1);
        stampDutyDescription = `MOA + AOA · ${stateData.state} Stamp Act (Authorised capital ₹${capStr} lakh)`;
      }

      // Dynamic director verification fees
      const dirCount = params.numDirectors !== undefined
        ? params.numDirectors
        : (params.entityType === "opc" ? 2 : 2);
      directorFees = dirCount * 200;

      // Dynamic DSC fees (defaults to 2 DSC as specified in the source register)
      const dscCount = params.numDsc !== undefined ? params.numDsc : 2;
      dscFees = dscCount * 2500;

      break;
    }

    case "llp": {
      panTanFee = 0;
      const regEntry = getGovtFeeRegisterEntry(params.state || "Karnataka");
      const slabPair = regEntry.llp;

      // Dynamic partners and DSC
      const partnerCount = params.numDirectors !== undefined ? params.numDirectors : 2;
      directorFees = partnerCount * 500; // ₹1,000 for 2 partners

      const dscCount = params.numDsc !== undefined ? params.numDsc : 2;
      dscFees = dscCount * 2500; // ₹5,000 for 2 DSC

      // Standard register baseline components:
      // At 1L: ROC is ₹700, Partner fees is ₹1,000, DSC is ₹5,000 => base is ₹6,700
      const stampDuty1L = Math.max(0, slabPair.slab1L - (700 + 1000 + 5000));
      // At 5L: ROC is ₹1,000, Partner fees is ₹1,000, DSC is ₹5,000 => base is ₹7,000
      const stampDuty5L = Math.max(0, slabPair.slab5L - (1000 + 1000 + 5000));

      // MCA FiLLiP ROC fees based on capital contribution
      if (capital <= 100000) {
        rocFees = 700;
        stampDuty = stampDuty1L;
        stampDutyDescription = `LLP Agreement · ${stateData.state} Stamp Act (Contribution up to ₹1 lakh)`;
      } else if (capital === 500000) {
        rocFees = 1000;
        stampDuty = stampDuty5L;
        stampDutyDescription = `LLP Agreement · ${stateData.state} Stamp Act (Contribution ₹5 lakh)`;
      } else if (capital < 500000) {
        rocFees = 1000;
        const progress = (capital - 100000) / 400000;
        stampDuty = Math.round(stampDuty1L + progress * (stampDuty5L - stampDuty1L));
        const capStr = (capital / 100000).toFixed(capital % 100000 === 0 ? 0 : 1);
        stampDutyDescription = `LLP Agreement · ${stateData.state} Stamp Act (Contribution ₹${capStr} lakh)`;
      } else if (capital <= 1000000) {
        rocFees = 2200;
        const slabDiff = stampDuty5L - stampDuty1L;
        const extraPerLakh = Math.max(250, Math.round(slabDiff / 4));
        const extraLakhs = Math.ceil((capital - 500000) / 100000);
        stampDuty = stampDuty5L + extraLakhs * extraPerLakh;
        const capStr = (capital / 100000).toFixed(capital % 100000 === 0 ? 0 : 1);
        stampDutyDescription = `LLP Agreement · ${stateData.state} Stamp Act (Contribution ₹${capStr} lakh)`;
      } else {
        rocFees = 4200;
        const slabDiff = stampDuty5L - stampDuty1L;
        const extraPerLakh = Math.max(250, Math.round(slabDiff / 4));
        const extraLakhs = Math.ceil((capital - 500000) / 100000);
        stampDuty = stampDuty5L + extraLakhs * extraPerLakh;
        const capStr = (capital / 100000).toFixed(0);
        stampDutyDescription = `LLP Agreement · ${stateData.state} Stamp Act (Contribution ₹${capStr} lakh)`;
      }
      break;
    }

    case "public_ltd": {
      rocFees = 1000;
      directorFees = (params.numDirectors || 3) * 200;
      panTanFee = 0;
      if (capital <= 1000000) {
        stampDuty = Math.max(stateData.pvtLtdStampDuty, Math.round(capital * 0.001));
      } else {
        const extraSlabs = Math.ceil((capital - 1000000) / 500000);
        stampDuty = Math.max(stateData.pvtLtdStampDuty + extraSlabs * 1000, Math.round(capital * 0.001));
      }
      if (capital > 1500000) {
        const extraLakhs = Math.ceil((capital - 1500000) / 100000);
        govtIncorporationFee = extraLakhs * 500;
      }
      stampDutyDescription = "Public Ltd MOA & AOA Statutory Stamping";
      break;
    }

    case "partnership":
      stampDuty = stateData.partnershipStampDuty;
      rocFees = 500;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      stampDutyDescription = "Partnership Deed Stamp Duty";
      break;

    case "sole_prop":
      stampDuty = 0;
      rocFees = 0;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      stampDutyDescription = "No stamp duty applicable for proprietorship";
      break;

    case "section8":
      stampDuty = Math.round(stateData.pvtLtdStampDuty * 0.5);
      rocFees = 3000;
      directorFees = (params.numDirectors || 2) * 200;
      panTanFee = 0;
      stampDutyDescription = "Section 8 Concessional MOA Stamp Duty";
      break;

    case "iec":
      rocFees = 500;
      stampDuty = 0;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      break;

    case "fssai_state":
      rocFees = 2000;
      stampDuty = 0;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      break;

    case "fssai_central":
      rocFees = 7500;
      stampDuty = 0;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      break;

    case "trademark":
      rocFees = 4500;
      stampDuty = 0;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      break;

    default:
      stampDuty = 0;
      directorFees = 0;
      dscFees = 0;
      panTanFee = 0;
      break;
  }

  const govtFeesSubtotal = rocFees + stampDuty + directorFees + dscFees + govtIncorporationFee + panTanFee;
  const professionalFees = config.baseProfessionalFee;
  const totalCost = govtFeesSubtotal + professionalFees;
  const marketTotal = govtFeesSubtotal + config.marketTraditionalRate;
  const estimatedSavings = Math.max(0, marketTotal - totalCost);

  return {
    entityName: config.name,
    selectedState: params.state,
    rocOffice: stateData.rocOffice || "Registrar of Companies",
    turnaroundDays: stateData.turnaroundDays || "5–8 Working Days",
    rocFees,
    stampDuty,
    stampDutyDescription,
    directorFees,
    dscFees,
    panTanFee,
    govtIncorporationFee,
    govtFeesSubtotal,
    professionalFees,
    marketTraditionalRate: marketTotal,
    estimatedSavings,
    totalCost,
    stateNotes: stateData.notes || "Statutory government receipts provided."
  };
}

/**
 * Global Trigger to open the Cost Estimator Popup Modal from any component or page.
 */
export function openCostEstimator(options?: { state?: string; entityType?: EntityTypeId }) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-cost-estimator", {
        detail: options || {},
      })
    );
  }
}
