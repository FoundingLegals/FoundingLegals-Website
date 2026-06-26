import HelpCenterClient from "../HelpCenterClient";
import { HELP_MODULES } from "@/lib/helpData";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Find the module matching either the ID slug or the decoded/lowercased module name
const findModule = (categoryParam: string) => {
  const decoded = decodeURIComponent(categoryParam).toLowerCase().trim();
  
  // 1. Exact match on ID or name
  const exactMatch = HELP_MODULES.find(
    (m) => m.id === categoryParam || m.name.toLowerCase().trim() === decoded
  );
  if (exactMatch) return exactMatch;

  // 2. Normalize hyphens and check exact match again
  const normalizedDecoded = decoded.replace(/-/g, ' ');
  const normalizedMatch = HELP_MODULES.find(
    (m) => m.id.replace(/-/g, ' ') === normalizedDecoded || m.name.toLowerCase().trim() === normalizedDecoded
  );
  if (normalizedMatch) return normalizedMatch;

  // 3. Fallback to smart mapping for common user redirects/subcategories
  if (normalizedDecoded.includes("pitch") || normalizedDecoded.includes("deck")) {
    return HELP_MODULES.find((m) => m.id === "pitch");
  }
  if (normalizedDecoded.includes("agreement") || normalizedDecoded.includes("contract")) {
    return HELP_MODULES.find((m) => m.id === "agreements");
  }
  if (normalizedDecoded.includes("cap table") || normalizedDecoded.includes("share") || normalizedDecoded.includes("equity")) {
    return HELP_MODULES.find((m) => m.id === "cap-table-share-management");
  }
  if (normalizedDecoded.includes("polic") || normalizedDecoded.includes("handbook")) {
    return HELP_MODULES.find((m) => m.id === "policies");
  }
  if (normalizedDecoded.includes("member") || normalizedDecoded.includes("team") || normalizedDecoded.includes("founder")) {
    return HELP_MODULES.find((m) => m.id === "team-members");
  }
  if (normalizedDecoded.includes("payslip") || normalizedDecoded.includes("payroll") || normalizedDecoded.includes("salary") || normalizedDecoded.includes("wage")) {
    return HELP_MODULES.find((m) => m.id === "payslips-payroll");
  }
  if (normalizedDecoded.includes("setting") || normalizedDecoded.includes("account") || normalizedDecoded.includes("profile") || normalizedDecoded.includes("subscription")) {
    return HELP_MODULES.find((m) => m.id === "account-settings");
  }
  if (normalizedDecoded.includes("client") || normalizedDecoded.includes("invoice") || normalizedDecoded.includes("billing")) {
    return HELP_MODULES.find((m) => m.id === "client-management");
  }

  return undefined;
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const moduleInfo = findModule(resolvedParams.category);
  if (!moduleInfo) return { title: "Help Center | Founding Legals" };

  return {
    title: `${moduleInfo.name} | Help Center & Legal Database`,
    description: `Explore detailed statutory legal articles, MCA forms, and compliance guides on ${moduleInfo.name} for Indian founders and startups.`,
    authors: [{ name: "Manoj Kumar Thota" }],
    creator: "Manoj Kumar Thota",
    publisher: "Founding Legals",
  };
}

export async function generateStaticParams() {
  const paths = [
    // pitch
    "pitch", "pitch deck", "pitch-deck", "deck",
    // agreements
    "agreements", "agreement", "contract", "contracts",
    // cap-table-share-management
    "cap-table-share-management", "cap table", "cap-table", "shares", "equity",
    // policies
    "policies", "policy", "handbook", "handbooks",
    // team-members
    "team-members", "team members", "team", "members",
    // payslips-payroll
    "payslips-payroll", "payslips", "payroll", "salary",
    // account-settings
    "account-settings", "account settings", "settings", "account",
    // client-management
    "client-management", "client management", "clients", "billing"
  ];
  return paths.map((p) => ({
    category: p,
  }));
}

export default async function CategoryHelpPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const moduleInfo = findModule(resolvedParams.category);
  if (!moduleInfo) {
    notFound();
  }

  return <HelpCenterClient initialModuleId={moduleInfo.id} />;
}
