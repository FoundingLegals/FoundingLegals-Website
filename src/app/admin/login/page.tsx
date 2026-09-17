"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Invalid Super Admin credentials.");
        setLoading(false);
        return;
      }

      // Successful login -> Redirect to Super Admin Analytics
      window.location.href = "/admin/analytics";
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred during sign in.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2925] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-olive-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#48532B]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#E5E0D8] shadow-[0_20px_50px_rgba(44,41,37,0.06)] p-8 sm:p-10 relative z-10">
        {/* Header Icon & Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" className="inline-block mb-3 hover:opacity-90 transition-opacity">
            <img
              src="/founding-legals-logo.png"
              alt="Founding Legals"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#48532B] bg-[#5A6E3B]/10 border border-[#5A6E3B]/20 px-3 py-1 rounded-md mb-2">
            Super Admin Portal
          </span>
          <h1 className="text-2xl font-serif font-bold text-[#1E1B18]">
            Sign in to Admin Dashboard
          </h1>
          <p className="text-xs text-gray-500 mt-2 max-w-xs">
            Enter your authorized credentials to access real-time analytics and client logs.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="leading-relaxed">{error}</div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              Super Admin Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@foundinglegals.com"
                className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#48532B] focus:bg-white transition-colors"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              Admin Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#48532B] focus:bg-white transition-colors"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#48532B] hover:bg-[#343D23] disabled:bg-gray-300 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#48532B]/15 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In as Super Admin</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Credentials reminder for dev/admin convenience */}
        <div className="mt-6 pt-5 border-t border-gray-100 text-center">
          <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200/60">
            <Lock className="w-3 h-3 text-olive-600" />
            <span>Encrypted Session · Authorized Personnel Only</span>
          </div>
        </div>
      </div>

      {/* Footer link back to main site */}
      <div className="mt-8 text-center text-xs text-gray-500">
        <Link href="/" className="hover:text-[#48532B] transition-colors underline underline-offset-4">
          ← Return to Founding Legals Homepage
        </Link>
      </div>
    </div>
  );
}
