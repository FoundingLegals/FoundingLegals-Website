"use client";

import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Presentation, 
  PieChart, 
  FileText, 
  Wallet, 
  BookOpen,
  HelpCircle,
  AlertTriangle,
  X
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HELP_ARTICLES, HELP_MODULES } from "@/lib/helpData";

// Icon mapper for modules
const getModuleIcon = (iconName: string, className = "w-5 h-5") => {
  switch (iconName) {
    case "Presentation":
      return <Presentation className={className} />;
    case "PieChart":
      return <PieChart className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Wallet":
      return <Wallet className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default function HelpCenterClient({ initialModuleId = null }: { initialModuleId?: string | null }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState<string | null>(initialModuleId);

  // Sync selectedModule when the route's initialModuleId changes (e.g. forward/back buttons)
  useEffect(() => {
    setSelectedModule(initialModuleId);
  }, [initialModuleId]);

  // Handle module selection with clean routing
  const handleSelectModule = (moduleId: string | null) => {
    setSelectedModule(moduleId);
    if (moduleId) {
      router.push(`/help/${moduleId}`);
    } else {
      router.push("/help");
    }
  };

  // Group and count articles for the sidebar
  const moduleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    HELP_ARTICLES.forEach((art) => {
      counts[art.moduleId] = (counts[art.moduleId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter articles based on selected category and search query
  const filteredArticles = useMemo(() => {
    return HELP_ARTICLES.filter((article) => {
      const matchesModule = !selectedModule || article.moduleId === selectedModule;
      
      if (!searchQuery.trim()) return matchesModule;

      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.moduleName.toLowerCase().includes(query) ||
        article.id.replace(/-/g, " ").toLowerCase().includes(query);
        
      return matchesModule && matchesSearch;
    });
  }, [selectedModule, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
    handleSelectModule(null);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-[70px] sm:pt-[82px] flex flex-col justify-between text-[#2b2723]">
      <Header />

      {/* Hero Section matching Image 2 style */}
      <section className="w-full relative min-h-[560px] bg-[#d7dacb] overflow-hidden py-16 px-4 sm:px-6 flex items-center justify-center">
         <div className="absolute inset-0 bg-[#e4e3d9]" />
         <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400"
            alt="Office background"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-[10s] hover:scale-110"
         />
          <div className="w-full max-w-[1100px] bg-white/80 backdrop-blur-xl rounded-[48px] p-8 sm:p-14 lg:p-18 flex flex-col md:flex-row items-center justify-between shadow-[0_40px_100px_rgba(43,39,35,0.12)] border border-white/50 relative group">
             <div className="absolute top-0 left-0 w-64 h-64 bg-olive-100/30 -ml-32 -mt-32 rounded-full transition-transform duration-700 group-hover:scale-150 pointer-events-none" />
             
             {/* Left side */}
             <div className="relative z-10 max-w-xl w-full md:w-[54%]">
               <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5C6F2D]/10 rounded-full text-[#5C6F2D] text-xs font-semibold tracking-wider uppercase mb-5">
                 <BookOpen className="w-3.5 h-3.5" />
                 Knowledge Base
               </span>
               <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-serif font-medium leading-[1.1] text-[#2b2723] mb-6 tracking-tight">
                 How can we<br/><span className="italic text-[#5A6E3B]">help you today?</span>
               </h1>
               <p className="text-brown-600 text-[16px] sm:text-[18px] font-light leading-relaxed">
                 Search our comprehensive, statutory compliance &amp; legal database for Indian founders. Curated by expert CAs, CSs, and startup lawyers.
               </p>
             </div>
 
             {/* Right side - Search aligned perfectly with live autocomplete dropdown */}
             <div className="relative z-20 w-full md:w-[42%] mt-8 md:mt-0 flex flex-col justify-center">
               <div className="relative w-full">
                 <div className="relative flex items-center bg-white rounded-2xl shadow-md border border-[#e5ddd4] overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-[#5C6F2D] focus-within:border-transparent">
                   <Search className="absolute left-4 w-5 h-5 text-[#9e9890] pointer-events-none" />
                   <input
                     type="text"
                     placeholder="Search articles, forms..."
                     value={searchQuery}
                     onChange={(e) => {
                       setSearchQuery(e.target.value);
                     }}
                     className="w-full pl-12 pr-10 py-4.5 text-sm text-brown-900 bg-transparent placeholder-brown-400 focus:outline-none"
                   />
                   {searchQuery && (
                     <button
                       onClick={() => setSearchQuery("")}
                       className="absolute right-3.5 p-1 rounded-full text-[#9e9890] hover:bg-cream-dark hover:text-brown-900 transition-colors"
                     >
                       <X className="w-4 h-4" />
                     </button>
                   )}
                 </div>

                 {/* Real-time search dropdown overlay */}
                 {searchQuery.trim() && (
                   <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-[#e5ddd4] rounded-2xl shadow-2xl z-50 max-h-[320px] overflow-y-auto divide-y divide-[#e5ddd4]/40 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                     {filteredArticles.length > 0 ? (
                       <div>
                         <div className="px-4 py-2.5 text-[10px] font-bold text-[#9e9890] uppercase tracking-wider bg-cream-light border-b border-[#e5ddd4]/40">
                           Suggested Articles ({filteredArticles.length})
                         </div>
                         {filteredArticles.map((article) => (
                           <Link
                             key={article.id}
                             href={`/help/article/${article.id}`}
                             onClick={() => setSearchQuery("")}
                             className="w-full px-4 py-3 hover:bg-cream-light text-left transition-colors flex items-center justify-between group border-b border-[#e5ddd4]/20 last:border-0 block"
                           >
                             <div className="min-w-0 flex-1">
                               <p className="text-sm font-semibold text-brown-900 group-hover:text-[#5C6F2D] transition-colors truncate">
                                 {article.title}
                               </p>
                               <p className="text-xs text-brown-400 truncate mt-0.5">
                                 {article.moduleName} • {article.readingTime} read
                               </p>
                             </div>
                             <ChevronRight className="w-4 h-4 text-[#9e9890] group-hover:text-[#5C6F2D] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                           </Link>
                         ))}
                       </div>
                     ) : (
                       <div className="p-6 text-center">
                         <p className="text-sm font-medium text-brown-500">
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

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Category Filter Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white border border-[#e5ddd4] rounded-3xl p-6 shadow-sm lg:sticky lg:top-[100px]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#9e9890] mb-4">
                Categories
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => handleSelectModule(null)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 text-left ${
                    selectedModule === null
                      ? "bg-[#5C6F2D] text-white shadow-md shadow-[#5C6F2D]/10"
                      : "text-brown-700 hover:bg-cream-light hover:text-[#5C6F2D]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4" />
                    All Modules
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full ${
                    selectedModule === null
                      ? "bg-white/20 text-white"
                      : "bg-cream text-brown-500"
                  }`}>
                    {HELP_ARTICLES.length}
                  </span>
                </button>

                {HELP_MODULES.map((mod) => {
                  const isActive = selectedModule === mod.id;
                  const count = moduleCounts[mod.id] || 0;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => handleSelectModule(mod.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 text-left ${
                        isActive
                          ? "bg-[#5C6F2D] text-white shadow-md shadow-[#5C6F2D]/10"
                          : "text-brown-700 hover:bg-cream-light hover:text-[#5C6F2D]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        {getModuleIcon(mod.icon, "w-4 h-4 shrink-0")}
                        <span className="truncate">{mod.name}</span>
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full shrink-0 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-cream text-brown-500"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Articles Directory list */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-900">
                  {selectedModule 
                    ? HELP_MODULES.find((m) => m.id === selectedModule)?.name 
                    : "All Help Resources"}
                </h2>
                <p className="text-sm text-brown-500 mt-1">
                  Showing {filteredArticles.length} of {HELP_ARTICLES.length} articles
                </p>
              </div>

              {/* Reset filters button if active */}
              {(selectedModule || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5C6F2D] hover:text-[#4a5a24] border-b border-transparent hover:border-[#4a5a24] pb-0.5 transition-colors self-start sm:self-center"
                >
                  Reset filters
                </button>
              )}
            </div>

            {filteredArticles.length > 0 ? (
              /* Grid of Article Cards */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/help/article/${article.id}`}
                    className="group flex flex-col justify-between bg-white border border-[#e5ddd4] rounded-3xl p-6 sm:p-8 hover:border-[#5C6F2D] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    {/* subtle highlight bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5C6F2D] opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div>
                      {/* Module tag & read time */}
                      <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold text-[#9e9890]">
                        <span className="text-[#5C6F2D] flex items-center gap-1.5 font-bold">
                          {getModuleIcon(HELP_MODULES.find(m => m.id === article.moduleId)?.icon || "", "w-3.5 h-3.5")}
                          {article.moduleName}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readingTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-serif font-bold text-brown-900 group-hover:text-[#5C6F2D] transition-colors leading-snug mb-3">
                        {article.title}
                      </h3>
                      <p className="text-sm text-brown-500 leading-relaxed line-clamp-3 mb-6">
                        {article.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#e5ddd4]/50">
                      <span className="text-xs text-[#9e9890]">
                        Updated {article.lastUpdated}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#5C6F2D] group-hover:translate-x-1.5 transition-transform duration-300">
                        Read Article
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* Zero results state */
              <div className="bg-white border border-[#e5ddd4] rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm mt-8">
                <div className="w-16 h-16 bg-[#CD412B]/10 text-[#CD412B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">
                  No results found
                </h3>
                <p className="text-sm text-brown-500 leading-relaxed mb-8 max-w-md mx-auto">
                  We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try adjusting your keywords or browse by category in the sidebar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleResetFilters}
                    className="px-5 py-3 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
                  >
                    Reset Search
                  </button>
                  <a
                    href="/contact"
                    className="px-5 py-3 bg-white border border-[#e5ddd4] hover:bg-cream-light text-brown-700 text-sm font-semibold rounded-xl transition-all shadow-sm inline-flex items-center justify-center"
                  >
                    Talk to an Expert
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
