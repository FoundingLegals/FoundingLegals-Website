"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { HELP_ARTICLES, HELP_MODULES } from "@/lib/helpData";

interface HelpSidebarProps {
  activeArticleId?: string;
  activeModuleId?: string | null;
}

export default function HelpSidebar({
  activeArticleId,
  activeModuleId,
}: HelpSidebarProps) {
  // Initialize state directly on first render to prevent layout shifts or hydration issues
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    let initialModuleId = null;
    if (activeArticleId) {
      const art = HELP_ARTICLES.find((a) => a.id === activeArticleId);
      if (art) {
        initialModuleId = art.moduleId;
      }
    }
    return initialModuleId ? { [initialModuleId]: true } : {};
  });

  // Sync state if activeArticleId changes dynamically (soft navigation)
  useEffect(() => {
    if (activeArticleId) {
      const art = HELP_ARTICLES.find((a) => a.id === activeArticleId);
      if (art) {
        setExpandedModules((prev) => ({
          ...prev,
          [art.moduleId]: true,
        }));
      }
    }
  }, [activeArticleId]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <nav className="space-y-1 mb-6">
      {HELP_MODULES.map((mod) => {
        const isExpanded = !!expandedModules[mod.id];
        const isCurrentlyActiveModule = activeModuleId === mod.id || 
          (activeArticleId && HELP_ARTICLES.find((a) => a.id === activeArticleId)?.moduleId === mod.id);
        const siblings = HELP_ARTICLES.filter((art) => art.moduleId === mod.id);

        return (
          <div key={mod.id} className="flex flex-col">
            {/* Category Button - toggles accordion in-place */}
            <button
              onClick={() => toggleModule(mod.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors border-none cursor-pointer text-left ${
                isCurrentlyActiveModule
                  ? "bg-[#F1F3EB] text-[#5C6F2D]"
                  : "hover:bg-[#F1F3EB]/55 text-brown-600 hover:text-[#5C6F2D] bg-transparent"
              }`}
              style={{ outline: "none" }}
            >
              <span className="select-none">{mod.name}</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 shrink-0" />
              )}
            </button>

            {/* Sibling Articles (if category is expanded) */}
            {isExpanded && (
              <div className="pl-4 mt-1.5 space-y-1 ml-3.5 flex flex-col gap-0.5">
                {siblings.map((art) => {
                  const isCurrentArticle = art.id === activeArticleId;
                  return (
                    <Link
                      key={art.id}
                      href={`/help/article/${art.id}`}
                      className={`block text-xs py-2 px-3 rounded-md transition-all leading-normal no-underline ${
                        isCurrentArticle
                          ? "bg-[#5C6F2D]/10 text-[#5C6F2D] font-bold"
                          : "text-brown-500 hover:bg-[#F1F3EB]/50 hover:text-[#5C6F2D]"
                      }`}
                    >
                      {art.title}
                    </Link>
                  );
                })}
                {siblings.length === 0 && (
                  <span className="block text-xs py-2 px-3 text-brown-400 italic">
                    No articles found
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
