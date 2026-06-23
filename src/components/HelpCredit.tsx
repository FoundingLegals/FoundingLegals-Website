"use client";

import React from "react";
import { Users, Sparkles } from "lucide-react";

export default function HelpCredit() {
  return (
    <div className="w-full bg-white/80 backdrop-blur-md border border-[#e5ddd4]/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[#5C6F2D]/40 transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Section: Icon & Text Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-[#5C6F2D]/10 flex items-center justify-center text-[#5C6F2D] group-hover:scale-105 transition-transform duration-300 shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h4 className="text-base font-bold text-brown-900 tracking-tight">
                Developed by Manoj Kumar Thota
              </h4>
              <Sparkles className="w-4 h-4 text-[#5C6F2D] animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-brown-500 font-medium mt-0.5">
              Founding Legals Help Center &amp; Legal Database Developer
            </p>
          </div>
        </div>

        {/* Right Section: Badge Accent */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5C6F2D]/10 rounded-full text-[#5C6F2D] text-xs font-semibold uppercase tracking-wider">
            @Manoj Kumar Thota
          </span>
        </div>
      </div>
    </div>
  );
}
