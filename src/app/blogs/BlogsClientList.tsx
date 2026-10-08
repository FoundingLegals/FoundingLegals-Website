"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  User,
  SlidersHorizontal,
  FileText,
} from "lucide-react";
import type { BlogPost } from "@/lib/blogUtils";

interface Props {
  initialBlogs: BlogPost[];
  categories: string[];
  featuredSlug?: string;
}

export default function BlogsClientList({
  initialBlogs,
  categories,
  featuredSlug,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogsList, setBlogsList] = useState<BlogPost[]>(initialBlogs);

  // Sync with server props
  React.useEffect(() => {
    setBlogsList(initialBlogs);
  }, [initialBlogs]);

  // Client background polling sync for instant reflection
  React.useEffect(() => {
    let isMounted = true;
    const syncBlogs = async () => {
      try {
        const res = await fetch("/api/blogs?t=" + Date.now(), { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.blogs && Array.isArray(data.blogs) && isMounted) {
            setBlogsList(data.blogs);
          }
        }
      } catch {}
    };

    syncBlogs();
    const timer = setInterval(syncBlogs, 8000);
    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogsList.filter((blog) => {
      // If filtering by category
      if (
        selectedCategory !== "All" &&
        blog.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // If search query entered
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = blog.title.toLowerCase().includes(q);
        const matchExcerpt = blog.excerpt.toLowerCase().includes(q);
        const matchCategory = blog.category.toLowerCase().includes(q);
        const matchTags = blog.tags?.some((t) => t.toLowerCase().includes(q));
        return matchTitle || matchExcerpt || matchCategory || matchTags;
      }

      return true;
    });
  }, [blogsList, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* ── Search & Filter Controls Bar ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-3.5 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-[#48532B] text-white shadow-xs"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            All Articles ({blogsList.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#48532B] text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles or topics..."
            className="w-full pl-9 pr-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#48532B] focus:ring-2 focus:ring-[#48532B]/10 transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Articles Grid ── */}
      {filteredBlogs.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#E5E0D8] p-12 sm:p-16 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#5C6F2D]/10 text-[#48532B] flex items-center justify-center mx-auto">
            <FileText className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-serif font-bold text-gray-900">
              {blogsList.length === 0
                ? "No Articles Published Yet"
                : "No Articles Match Your Search"}
            </h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
              {blogsList.length === 0
                ? "Founding Legals corporate advocates and Chartered Accountants publish real-time legal intelligence, MCA compliance guides, and founder playbooks. New stories published by the Super Admin will reflect live here automatically."
                : "Try adjusting your search query or selecting a different category from above."}
            </p>
          </div>
          {blogsList.length > 0 ? (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-[#48532B] text-white text-xs font-bold rounded-full hover:bg-[#3B4423] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          ) : (
            <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-[#48532B] text-white text-xs font-bold hover:bg-[#3B4423] transition-colors"
              >
                Schedule Legal Consultation
              </Link>
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl border border-[#E5E0D8] overflow-hidden shadow-[0_4px_20px_rgba(43,39,35,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image */}
              <Link
                href={`/blogs/${blog.slug}`}
                className="relative aspect-video w-full overflow-hidden bg-gray-100 block"
              >
                <img
                  src={
                    blog.coverImage ||
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#48532B] shadow-2xs border border-[#48532B]/15">
                    {blog.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#5C6F2D]" />
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Recent"}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#5C6F2D]" />
                      {blog.readTime || "5 min read"}
                    </span>
                  </div>

                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E1B18] group-hover:text-[#48532B] transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-600 leading-relaxed font-light line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Footer / Author Bar */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#5C6F2D]/10 text-[#48532B] flex items-center justify-center font-bold text-[10px]">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-gray-900 truncate max-w-[120px]">
                        {blog.authorName}
                      </div>
                      <div className="text-[9.5px] text-gray-400 truncate max-w-[120px]">
                        {blog.authorRole}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#48532B] hover:text-[#3B4423] transition-colors"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
