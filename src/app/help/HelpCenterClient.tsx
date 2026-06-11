"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  ChevronRight,
  Presentation,
  PieChart,
  FileText,
  Wallet,
  BookOpen,
  HelpCircle,
  X,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HELP_ARTICLES, HELP_MODULES } from "@/lib/helpData";

// ─── Icon mapper ──────────────────────────────────────────────────────────────
const getModuleIcon = (iconName: string, className = "w-8 h-8") => {
  switch (iconName) {
    case "Presentation":
      return <Presentation className={className} />;
    case "PieChart":
      return <PieChart className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Wallet":
      return <Wallet className={className} />;
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Settings":
      return <Settings className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

// Short descriptions shown under each category card on the home grid
const MODULE_DESC: Record<string, string> = {
  "pitch":
    "Elevator pitch video, pitch deck PDF, elevator pitch text, vision & problem statements, term sheets & angel tax.",
  "agreements":
    "Employment agreements, NDAs, contractor agreements, advisor agreements & founder covenants.",
  "cap-table-share-management":
    "Authorized vs paid-up capital, CCPS, ESOP pools, share transfers & MCA filings.",
  "policies":
    "POSH compliance, maternity benefits, HR policies & Shops & Establishments registrations.",
  "team-members":
    "Co-founders vesting, advisor/mentor onboarding, team roles & permissions.",
  "payslips-payroll":
    "Salary structuring, PF/ESIC compliance, TDS on salaries & payroll registers.",
  "account-settings":
    "Manage company details, team roles, subscription membership, signatures, stamps, and document templates.",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HelpCenterClient({
  initialModuleId = null,
}: {
  initialModuleId?: string | null;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState<string | null>(
    initialModuleId
  );

  useEffect(() => {
    setSelectedModule(initialModuleId);
  }, [initialModuleId]);

  const handleSelectModule = (moduleId: string | null) => {
    setSelectedModule(moduleId);
    setSearchQuery("");
    if (moduleId) {
      router.push(`/help/${moduleId}`);
    } else {
      router.push("/help");
    }
  };

  // Article counts per module
  const moduleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    HELP_ARTICLES.forEach((art) => {
      counts[art.moduleId] = (counts[art.moduleId] || 0) + 1;
    });
    return counts;
  }, []);

  // Articles for the selected category
  const categoryArticles = useMemo(() => {
    if (!selectedModule) return [];
    return HELP_ARTICLES.filter((a) => a.moduleId === selectedModule);
  }, [selectedModule]);

  // Global search results (all articles)
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return HELP_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.moduleName.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [searchQuery]);

  const activeModule = HELP_MODULES.find((m) => m.id === selectedModule);

  // ── Shared Dark Hero with Search ────────────────────────────────────────────
  const heroBanner = (
    <section className="w-full relative min-h-[440px] bg-[#d7dacb] overflow-hidden py-12 px-4 sm:px-6 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#e4e3d9]" />
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400"
        alt="Office background"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-55 transition-transform duration-[10s] hover:scale-105"
      />
      <div className="w-full max-w-[1100px] bg-white/90 backdrop-blur-xl rounded-[40px] p-6 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(43,39,35,0.08)] border border-white/60 relative group z-10">
        
        {/* Left side */}
        <div className="relative z-10 max-w-xl w-full md:w-[54%] text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5C6F2D]/10 rounded-full text-[#5C6F2D] text-xs font-semibold tracking-wider uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base
          </span>
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-serif font-medium leading-[1.15] text-[#2b2723] mb-4 tracking-tight">
            How can we<br /><span className="italic text-[#5C6F2D]">help you today?</span>
          </h1>
          <p className="text-brown-600/80 text-[14px] sm:text-[15px] font-normal leading-relaxed">
            Search our comprehensive, statutory compliance &amp; legal database for Indian founders. Curated by expert CAs, CSs, and startup lawyers.
          </p>
        </div>

        {/* Right side - Search */}
        <div className="relative z-20 w-full md:w-[40%] mt-6 md:mt-0 flex flex-col justify-center">
          <div className="relative w-full">
            <div className="relative flex items-center bg-white rounded-xl shadow-sm border border-[#e5ddd4] overflow-hidden focus-within:ring-2 focus-within:ring-[#5C6F2D] focus-within:border-transparent">
              <Search className="absolute left-4 w-4 h-4 text-[#9e9890] pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, forms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 40px 14px 44px",
                  fontSize: "14px",
                  color: "#2b2723",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 rounded-full text-[#9e9890] hover:bg-[#faf9f6] transition-colors border-none cursor-pointer bg-transparent"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Real-time search dropdown overlay */}
            {searchQuery.trim() && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-[#e5ddd4] rounded-xl shadow-2xl z-50 max-h-[280px] overflow-y-auto divide-y divide-[#e5ddd4]/40">
                {globalSearchResults.length > 0 ? (
                  <div>
                    <div className="px-4 py-2 text-[10px] font-bold text-[#9e9890] uppercase tracking-wider bg-[#faf9f6] border-b border-[#e5ddd4]/40 text-left">
                      Suggested Articles ({globalSearchResults.length})
                    </div>
                    {globalSearchResults.map((article) => (
                      <Link
                        key={article.id}
                        href={`/help/article/${article.id}`}
                        onClick={() => setSearchQuery("")}
                        className="w-full px-4 py-3 hover:bg-[#faf9f6] text-left transition-colors flex items-center justify-between group border-b border-[#e5ddd4]/20 last:border-0"
                        style={{ display: "flex", textDecoration: "none" }}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-brown-900 group-hover:text-[#5C6F2D] transition-colors truncate m-0">
                            {article.title}
                          </p>
                          <p className="text-xs text-brown-400 truncate mt-0.5 m-0">
                            {article.moduleName}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#9e9890] group-hover:text-[#5C6F2D] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm font-medium text-brown-500 m-0">
                      No matches found for &quot;{searchQuery}&quot;
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  // ════════════════════════════════════════════════════════════════════════════
  // VIEW A: HELP CENTER HOME — Category tiles grid (matches images 1–4)
  // ════════════════════════════════════════════════════════════════════════════
  if (!selectedModule) {
    return (
      <main style={{ minHeight: "100vh", background: "#f0f2f5", paddingTop: "70px", display: "flex", flexDirection: "column", color: "#2b2723" }}>
        <Header />
        {heroBanner}

        {/* Category grid section */}
        <div style={{ flex: 1, maxWidth: "1100px", width: "100%", margin: "0 auto", padding: "48px 20px 64px" }}>
          {/* 3-column grid — same layout as SeedLegals reference */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="help-category-grid"
          >
            {HELP_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => handleSelectModule(mod.id)}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e6ea",
                  borderRadius: "8px",
                  padding: "36px 28px 32px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {/* Icon — centered at top, green color matching brand theme */}
                <div style={{ color: "#5C6F2D", marginBottom: "18px" }}>
                  {getModuleIcon(mod.icon, "w-10 h-10")}
                </div>

                {/* Category title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#5C6F2D",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {mod.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#5a5a72",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {MODULE_DESC[mod.id] ?? "Explore articles and guides in this section."}
                </p>
              </button>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .help-category-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .help-category-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>

        <Footer />
      </main>
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  // VIEW B: CATEGORY DETAIL PAGE (matches image 5 exactly)
  // Left sidebar: list of all categories
  // Right: Category heading + description + simple article links
  // ════════════════════════════════════════════════════════════════════════════
  return (
    <main style={{ minHeight: "100vh", background: "#f0f2f5", paddingTop: "70px", display: "flex", flexDirection: "column", color: "#2b2723" }}>
      <Header />
      {heroBanner}

      {/* Breadcrumb — exactly like image 5 */}
      <div style={{ background: "#f0f2f5", borderBottom: "1px solid #e2e6ea" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "12px 20px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#5a5a72" }}>
            <button
              onClick={() => handleSelectModule(null)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#5C6F2D", fontSize: "13px", padding: 0,
                textDecoration: "none",
              }}
            >
              Help Centre
            </button>
            <span style={{ color: "#9e9890" }}>&gt;</span>
            <span style={{ color: "#2b2723", fontWeight: 500 }}>
              {activeModule?.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ flex: 1, maxWidth: "1100px", width: "100%", margin: "0 auto", padding: "32px 20px 64px", display: "flex", gap: "40px" }}>

        {/* ── Left Sidebar ─────────────────────────────────────────────────── */}
        <aside style={{ width: "220px", flexShrink: 0 }}>
          <nav style={{ position: "sticky", top: "100px" }}>
            {HELP_MODULES.map((mod) => {
              const isActive = selectedModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => handleSelectModule(mod.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    background: isActive ? "#F1F3EB" : "none",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? "#5C6F2D" : "#4a4a6a",
                    marginBottom: "2px",
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background = "#F1F3EB";
                      (e.currentTarget as HTMLButtonElement).style.color = "#5C6F2D";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background = "none";
                      (e.currentTarget as HTMLButtonElement).style.color = "#4a4a6a";
                    }
                  }}
                >
                  <span style={{ lineHeight: 1.35 }}>{mod.name}</span>
                  {(moduleCounts[mod.id] || 0) > 0 && (
                    <ChevronRight
                      style={{
                        width: "16px", height: "16px",
                        color: isActive ? "#5C6F2D" : "#b0b0c0",
                        flexShrink: 0, marginLeft: "6px",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── Right Content ─────────────────────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Category heading — like image 5 */}
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#5C6F2D",
              marginBottom: "8px",
              fontFamily: "Georgia, serif",
            }}
          >
            {activeModule?.name}
          </h2>
          <p style={{ fontSize: "14px", color: "#5a5a72", marginBottom: "24px" }}>
            {MODULE_DESC[selectedModule] ?? "Explore articles and guides in this section."}
          </p>

          {/* Article links — simple green links exactly like image 5 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {categoryArticles.map((article) => (
              <Link
                key={article.id}
                href={`/help/article/${article.id}`}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "#5C6F2D",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                }}
              >
                {article.title}
              </Link>
            ))}
            {categoryArticles.length === 0 && (
              <p style={{ color: "#9e9890", fontSize: "14px" }}>
                No articles found in this section yet.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
