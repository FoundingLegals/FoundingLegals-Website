import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Calendar,
  Clock,
  ChevronRight,
  User,
  ArrowLeft,
  ArrowRight,
  Shield,
  MessageSquare,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { getBlogBySlug, getBlogBySlugAny, getPublishedBlogs, BlogPost } from "@/lib/db/blogs";
import BlogShareBar from "./BlogShareBar";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = (await getBlogBySlug(slug)) || (await getBlogBySlugAny(slug));

  if (!blog) {
    return {
      title: "Article Not Found | Founding Legals",
    };
  }

  return {
    title: `${blog.title} | Founding Legals`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | Founding Legals`,
      description: blog.excerpt,
      images: [blog.coverImage || "/founding-legals-logo.png"],
      type: "article",
      publishedTime: blog.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const search = await searchParams;
  const isPreview = search.preview === "true";

  let blog: BlogPost | null = null;
  if (isPreview) {
    blog = await getBlogBySlugAny(slug);
  } else {
    blog = await getBlogBySlug(slug);
  }

  if (!blog) {
    notFound();
  }

  // Fetch related articles
  const allPublished = await getPublishedBlogs();
  const related = allPublished
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2B2723] flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {/* ── Breadcrumb & Back Link ── */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium border-b border-[#E5E0D8] pb-4">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
              <Link href="/blogs" className="hover:text-gray-900 transition-colors">
                Blogs
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
              <span className="text-[#48532B] font-bold truncate max-w-[200px]">
                {blog.category}
              </span>
            </div>

            <Link
              href="/blogs"
              className="text-[#48532B] hover:text-[#3B4423] font-bold flex items-center gap-1 shrink-0 ml-2"
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">All Articles</span>
            </Link>
          </div>

          {/* ── Article Header ── */}
          <header className="space-y-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5C6F2D]/10 text-[#48532B] border border-[#5C6F2D]/20">
                {blog.category}
              </span>
              {!blog.published && (
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                  Draft Preview Mode
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight leading-[1.2]">
              {blog.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              {blog.excerpt}
            </p>

            {/* Author Meta Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E5E0D8]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#5C6F2D]/10 text-[#48532B] flex items-center justify-center font-bold text-sm overflow-hidden border border-[#5C6F2D]/20">
                  {blog.authorAvatar ? (
                    <img
                      src={blog.authorAvatar}
                      alt={blog.authorName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {blog.authorName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {blog.authorRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#5C6F2D]" />
                  {blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Draft"}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#5C6F2D]" />
                  {blog.readTime || "5 min read"}
                </span>
              </div>
            </div>
          </header>

          {/* ── Featured Cover Image ── */}
          {blog.coverImage && (
            <div className="rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-md aspect-video sm:aspect-21/9 bg-gray-100">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* ── Social Share Bar Top ── */}
          <div className="py-2 border-y border-[#E5E0D8]">
            <BlogShareBar slug={blog.slug} title={blog.title} />
          </div>

          {/* ── Article Content (Markdown) ── */}
          <div className="prose prose-stone max-w-none text-[#2B2723] space-y-6 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ ...props }) => (
                  <h2
                    className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B18] mt-10 mb-4 pt-6 border-t border-gray-200 tracking-tight"
                    {...props}
                  />
                ),
                h3: ({ ...props }) => (
                  <h3
                    className="text-lg sm:text-xl font-serif font-bold text-[#1E1B18] mt-8 mb-3"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p
                    className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal my-4"
                    {...props}
                  />
                ),
                ul: ({ ...props }) => (
                  <ul
                    className="list-disc pl-6 my-4 space-y-2 text-sm sm:text-base text-gray-700"
                    {...props}
                  />
                ),
                ol: ({ ...props }) => (
                  <ol
                    className="list-decimal pl-6 my-4 space-y-2 text-sm sm:text-base text-gray-700"
                    {...props}
                  />
                ),
                li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-[#5C6F2D] bg-[#5C6F2D]/5 p-4 sm:p-5 rounded-r-2xl my-6 text-gray-800 italic text-sm sm:text-base leading-relaxed"
                    {...props}
                  />
                ),
                table: ({ ...props }) => (
                  <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-2xs">
                    <table
                      className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm bg-white"
                      {...props}
                    />
                  </div>
                ),
                th: ({ ...props }) => (
                  <th
                    className="bg-[#FAF9F6] px-4 py-3 text-left font-bold text-gray-900 border-b border-gray-200"
                    {...props}
                  />
                ),
                td: ({ ...props }) => (
                  <td
                    className="px-4 py-3 border-b border-gray-100 text-gray-700"
                    {...props}
                  />
                ),
                code: ({ ...props }) => (
                  <code
                    className="bg-gray-100 text-[#48532B] px-1.5 py-0.5 rounded text-xs font-mono"
                    {...props}
                  />
                ),
                hr: ({ ...props }) => (
                  <hr className="my-8 border-gray-200" {...props} />
                ),
                a: ({ ...props }) => (
                  <a
                    className="text-[#5C6F2D] font-semibold underline hover:text-[#3B4423]"
                    {...props}
                  />
                ),
                img: ({ src, alt, ...props }) => (
                  <figure className="my-8 space-y-2">
                    <div className="rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-sm bg-gray-50">
                      <img
                        src={src}
                        alt={alt || "Illustration"}
                        className="w-full h-auto max-h-[520px] object-cover"
                        loading="lazy"
                        {...props}
                      />
                    </div>
                    {alt && (
                      <figcaption className="text-center text-xs text-gray-500 italic">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* ── Tags List ── */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="pt-6 border-t border-[#E5E0D8] space-y-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Topics & Tags:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-2xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── Share Bar Bottom ── */}
          <div className="py-4 border-y border-[#E5E0D8]">
            <BlogShareBar slug={blog.slug} title={blog.title} />
          </div>

          {/* ── In-Article Consultation Box ── */}
          <div className="rounded-3xl bg-white border border-[#E5E0D8] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6F2D]">
                Have Questions on This Topic?
              </span>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Consult Founding Legals Corporate Legal & CA Team
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Our advocates and Chartered Accountants help founders navigate incorporation,
                shareholder agreements, GST, trademark protection, and fundraising due diligence.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-full bg-[#48532B] hover:bg-[#3B4423] text-white text-xs font-bold text-center transition-all shadow-sm"
              >
                Talk to Legal Expert →
              </Link>
            </div>
          </div>

          {/* ── Author Bio Box ── */}
          <div className="p-6 bg-white rounded-3xl border border-[#E5E0D8] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#5C6F2D]/10 text-[#48532B] flex items-center justify-center font-bold text-sm shrink-0 border border-[#5C6F2D]/20">
              <User className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-gray-900">
                Written by {blog.authorName}
              </h4>
              <p className="text-xs text-gray-500 font-medium">
                {blog.authorRole} • Founding Legals Practice Desk
              </p>
              <p className="text-xs text-gray-600 font-light pt-1 leading-relaxed">
                Dedicated to making Indian legal, taxation, and corporate compliance
                accessible, affordable, and seamless for startup founders and growing enterprises.
              </p>
            </div>
          </div>

          {/* ── Related Articles Section ── */}
          {related.length > 0 && (
            <div className="pt-8 border-t border-[#E5E0D8] space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Related Guides & Articles
                </h3>
                <Link
                  href="/blogs"
                  className="text-xs font-bold text-[#48532B] hover:underline"
                >
                  View All Blogs →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blogs/${item.slug}`}
                    className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    {item.coverImage && (
                      <div className="aspect-video w-full overflow-hidden bg-gray-100">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-4.5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#48532B]">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#48532B] transition-colors leading-snug line-clamp-2 font-serif">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2 font-light">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="text-[11px] font-bold text-[#48532B] flex items-center gap-1 pt-2 border-t border-gray-100">
                        <span>Read Guide</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
