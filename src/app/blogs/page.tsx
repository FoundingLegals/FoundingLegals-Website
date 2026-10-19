import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  User,
  Scale,
} from "lucide-react";
import { getPublishedBlogs, BlogPost } from "@/lib/db/blogs";
import BlogsClientList from "./BlogsClientList";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Blogs & Legal Guides | Founding Legals",
  description:
    "Authoritative legal guides, MCA compliance, tax strategies, and fundraising intelligence written by corporate advocates and Chartered Accountants for Indian startups.",
  openGraph: {
    title: "Blogs & Legal Guides | Founding Legals",
    description:
      "Expert corporate legal insights, incorporation guides, and CA advice for Indian startup founders.",
    type: "website",
  },
};

export default async function BlogsPage() {
  const blogs: BlogPost[] = await getPublishedBlogs();

  // Find featured blog or default to the most recent
  const featuredBlog = blogs.find((b) => b.featured) || blogs[0] || null;
  const remainingBlogs = featuredBlog
    ? blogs.filter((b) => b.id !== featuredBlog.id)
    : blogs;

  // Extract unique categories
  const categories = Array.from(
    new Set(blogs.map((b) => b.category).filter(Boolean))
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2B2723] flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* ── Hero Banner Section ── */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5C6F2D]/10 text-[#48532B] border border-[#5C6F2D]/20 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#5C6F2D]" />
              <span>Founding Legals Knowledge & Legal Playbooks</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E1B18] tracking-tight leading-[1.15]">
              Insights, Legal Guides & Founder Playbooks
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              Clear, actionable corporate law, MCA compliance walkthroughs, CA tax
              optimizations, and investment blueprints written by experienced corporate
              advocates for ambitious Indian founders.
            </p>
          </div>

          {/* ── Featured Hero Blog (If available) ── */}
          {featuredBlog && (
            <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E0D8] shadow-[0_8px_30px_rgba(43,39,35,0.06)] group hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-gray-100">
                  <img
                    src={
                      featuredBlog.coverImage ||
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#48532B] text-white shadow-sm">
                      {featuredBlog.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 shadow-sm">
                      Featured Guide
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#5C6F2D]" />
                        {featuredBlog.publishedAt
                          ? new Date(featuredBlog.publishedAt).toLocaleDateString(
                              "en-IN",
                              { day: "numeric", month: "short", year: "numeric" }
                            )
                          : "Latest"}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#5C6F2D]" />
                        {featuredBlog.readTime}
                      </span>
                    </div>

                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1E1B18] group-hover:text-[#48532B] transition-colors leading-tight">
                        {featuredBlog.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>

                    {/* Tags */}
                    {featuredBlog.tags && featuredBlog.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {featuredBlog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#FAF9F6] border border-gray-200 text-gray-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Author Bar & Read CTA */}
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5C6F2D]/10 text-[#48532B] flex items-center justify-center font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">
                          {featuredBlog.authorName}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {featuredBlog.authorRole}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${featuredBlog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#48532B] hover:text-[#3B4423] group/btn transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Interactive Client Filtered Grid Component ── */}
          <BlogsClientList
            initialBlogs={blogs}
            categories={categories}
            featuredSlug={featuredBlog?.slug}
          />

          {/* ── Bottom Founder Consultation Banner ── */}
          <div className="rounded-3xl bg-gradient-to-r from-[#2F371B] to-[#48532B] text-white p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4E157]">
                Corporate Advisory Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Have specific legal or compliance questions for your company?
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                Connect with Founding Legals' experienced corporate advocates and Chartered
                Accountants. From company incorporation and shareholder agreements to tax
                filing and funding readiness, we protect your venture from day one.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-white text-[#2F371B] hover:bg-gray-100 text-xs font-bold transition-all shadow-sm"
                >
                  Schedule Legal Consultation →
                </Link>
                <Link
                  href="/services/CAservices/company-incorporation"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold transition-all"
                >
                  Explore Incorporation Services
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
