"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  BarChart3,
  MessageSquare,
  Download,
  LogOut,
  ExternalLink,
  User,
  Radio,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState("admin@foundinglegals.com");

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setChecking(false);
      return;
    }

    // Check session
    fetch("/api/admin/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setAuthenticated(true);
          if (data.user?.email) setAdminEmail(data.user.email);
        } else {
          router.replace("/admin/login");
        }
      })
      .catch(() => {
        router.replace("/admin/login");
      })
      .finally(() => {
        setChecking(false);
      });
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch {}
    window.location.href = "/admin/login";
  };

  // If on login page, render children directly without admin chrome
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If loading session check
  if (checking) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-3 border-[#48532B] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs text-[#48532B] font-semibold tracking-wide">
          Verifying Super Admin Authorization...
        </p>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F6F4F0] text-[#2C2925] flex flex-col font-sans">
      {/* ── Single Unified Super Admin Brand Header ── */}
      <nav className="bg-white border-b border-[#E5E0D8] sticky top-0 z-40 shadow-[0_2px_12px_rgba(44,41,37,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Left: Official Founding Legals Logo & Admin Badge */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/admin/analytics" className="flex items-center group">
                <img
                  src="/founding-legals-logo.png"
                  alt="Founding Legals"
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
                />
              </Link>
              <div className="h-5 w-px bg-gray-200 hidden sm:block" />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#5A6E3B]/10 text-[#48532B] border border-[#5A6E3B]/25 px-2.5 py-1 rounded-md">
                Super Admin
              </span>
            </div>

            {/* Middle: Clean Brand Navigation Tabs */}
            <div className="hidden md:flex items-center gap-1.5">
              <Link
                href="/admin/analytics"
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  pathname === "/admin/analytics" || pathname === "/admin"
                    ? "bg-[#48532B] text-white shadow-xs"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Live Analytics & Graph</span>
              </Link>

              <Link
                href="/admin/feedback"
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  pathname === "/admin/feedback"
                    ? "bg-[#48532B] text-white shadow-xs"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Client Feedback</span>
              </Link>

              <a
                href="/api/analytics/export"
                download
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 text-[#48532B] hover:bg-[#48532B]/10 transition-colors"
                title="Download Up-to-the-second CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Live CSV</span>
              </a>
            </div>

            {/* Right: Real-time Status, Profile & Logout */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Real-time Status indicator */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Live Tracking</span>
              </div>

              {/* Admin Email Pill */}
              <div className="hidden lg:flex items-center gap-2 text-xs text-gray-700 bg-[#FAF9F6] px-3 py-1.5 rounded-xl border border-gray-200">
                <User className="w-3.5 h-3.5 text-[#48532B]" />
                <span className="font-mono text-[11px] font-medium">{adminEmail}</span>
              </div>

              {/* Live Site Link */}
              <Link
                href="/"
                target="_blank"
                className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                title="Open Public Website"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Log out of Super Admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Sub-Tabs Navigation ── */}
      <div className="md:hidden bg-white border-b border-[#E5E0D8] px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-xs">
        <Link
          href="/admin/analytics"
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold ${
            pathname === "/admin/analytics" || pathname === "/admin"
              ? "bg-[#48532B] text-white"
              : "text-gray-600 bg-gray-100"
          }`}
        >
          Analytics & Graph
        </Link>
        <Link
          href="/admin/feedback"
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold ${
            pathname === "/admin/feedback"
              ? "bg-[#48532B] text-white"
              : "text-gray-600 bg-gray-100"
          }`}
        >
          Client Feedback
        </Link>
        <a
          href="/api/analytics/export"
          download
          className="px-3 py-1.5 rounded-lg text-[#48532B] bg-[#48532B]/10 font-bold whitespace-nowrap"
        >
          Download CSV
        </a>
      </div>

      {/* Main Admin Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
