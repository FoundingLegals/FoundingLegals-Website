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
import { BlogPost } from "@/lib/db/blogs";

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

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
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
  }, [initialBlogs, selectedCategory, searchQuery]);

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
            All Articles ({initialBlogs.length})
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
        <div className="bg-white rounded-3xl border border-[#E5E0D8] p-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-gray-300 mx-auto" />
          <h3 className="text-base font-bold text-gray-800">
            No articles match your search
          </h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Try adjusting your search query or selecting a different category from above.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 bg-[#48532B] text-white text-xs font-bold rounded-full hover:bg-[#3B4423] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
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
