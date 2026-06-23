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
  return HELP_MODULES.find(
    (m) => m.id === categoryParam || m.name.toLowerCase().trim() === decoded
  );
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
  return HELP_MODULES.map((m) => ({
    category: m.id,
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
