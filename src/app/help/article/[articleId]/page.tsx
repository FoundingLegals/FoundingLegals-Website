import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HELP_ARTICLES, HELP_MODULES } from "@/lib/helpData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpCredit from "@/components/HelpCredit";
import HelpSidebar from "@/components/HelpSidebar";
import { Clock, Calendar } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    articleId: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = HELP_ARTICLES.find((art) => art.id === resolvedParams.articleId);
  if (!article) return { title: "Article | Help Center | Founding Legals" };

  return {
    title: `${article.title} | Help Center & Legal Database`,
    description: article.summary,
    authors: [{ name: "Manoj Kumar Thota" }],
    creator: "Manoj Kumar Thota",
    publisher: "Founding Legals",
  };
}

export async function generateStaticParams() {
  return HELP_ARTICLES.map((art) => ({
    articleId: art.id,
  }));
}

export default async function HelpArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = HELP_ARTICLES.find((art) => art.id === resolvedParams.articleId);
  if (!article) {
    notFound();
  }

  const parentModule = HELP_MODULES.find((m) => m.id === article.moduleId);

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-[70px] sm:pt-[82px] flex flex-col justify-between text-[#2b2723]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": article.title,
            "description": article.summary,
            "dateModified": article.lastUpdated,
            "author": {
              "@type": "Person",
              "name": "Manoj Kumar Thota"
            },
            "creator": {
              "@type": "Person",
              "name": "Manoj Kumar Thota"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Founding Legals",
              "logo": "https://foundinglegals.com/logo.png"
            }
          }),
        }}
      />
      <Header />

      {/* Breadcrumbs: standard navigation */}
      <div className="sticky top-[68px] sm:top-[78px] z-40 bg-[#FAF9F6] border-b border-[#e5ddd4]/55">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-[13px] text-brown-500">
            <Link href="/help" className="text-[#5C6F2D] hover:underline font-semibold">
              Help Centre
            </Link>
            <span className="text-brown-300 font-medium">&gt;</span>
            <Link href={`/help/${parentModule?.id}`} className="text-[#5C6F2D] hover:underline font-semibold">
              {parentModule?.name}
            </Link>
            <span className="text-brown-300 font-medium">&gt;</span>
            <span className="text-brown-800 font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Unified Sidebar Navigation */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-[135px] lg:max-h-[calc(100vh-165px)] lg:overflow-y-auto no-scrollbar">
            <HelpSidebar activeArticleId={article.id} activeModuleId={article.moduleId} />

            {/* Article Meta Card */}
            <div className="bg-white border border-[#e5ddd4] rounded-2xl p-5 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 text-xs text-brown-500">
                <Clock className="w-4 h-4 text-[#9e9890]" />
                <span>{article.readingTime} read</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brown-500 border-t border-[#e5ddd4]/40 pt-3">
                <Calendar className="w-4 h-4 text-[#9e9890]" />
                <span>Updated {article.lastUpdated}</span>
              </div>
            </div>
          </aside>

          {/* Central Article Body */}
          <article className="flex-1 min-w-0 bg-white border border-[#e5ddd4] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            {/* Meta details (mobile view) */}
            <div className="lg:hidden flex flex-wrap gap-4 text-xs font-medium text-brown-500 mb-6 pb-6 border-b border-[#e5ddd4]">
              <span className="px-2.5 py-1 bg-[#5C6F2D]/5 rounded-md border border-[#e5ddd4]/30">
                {article.moduleName}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#9e9890]" />
                {article.readingTime} read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#9e9890]" />
                Updated {article.lastUpdated}
              </span>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <h2 className="text-3xl sm:text-4.5xl font-serif font-bold text-brown-900 leading-tight mb-4">
                {article.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-brown-600 border-b border-[#e5ddd4]/60 pb-4">
                <div>
                  By <span className="font-semibold text-brown-900">Manoj Kumar Thota</span> | Founding Legals
                </div>
                <div className="hidden sm:block text-[#e5ddd4]">•</div>
                <div>
                  Published in <span className="font-semibold text-[#5C6F2D]">Help Center</span>
                </div>
              </div>
            </header>

            {/* Quick Summary Callout */}
            <div className="bg-[#5C6F2D]/5 border-l-4 border-[#5C6F2D] p-5 sm:p-6 rounded-r-2xl mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#5C6F2D] mb-1.5">
                Quick Summary
              </h4>
              <p className="text-sm sm:text-[15px] text-brown-700 leading-relaxed font-medium">
                {article.summary}
              </p>
            </div>

            {/* Rich TSX Content */}
            <div className="text-sm sm:text-base text-brown-800 space-y-6 leading-[1.8] font-sans prose prose-brown max-w-none mb-10">
              {article.content}
            </div>

            {/* Bottom of article & About the author */}
            <div className="border-t border-[#e5ddd4] pt-8 mt-10 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF9F6] border border-[#e5ddd4]/80 rounded-2xl p-5">
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5C6F2D] mb-1">
                    Quality Assurance
                  </p>
                  <h4 className="text-base font-bold text-brown-900">
                    Reviewed by Manoj Kumar Thota
                  </h4>
                  <p className="text-xs sm:text-sm text-brown-500 font-medium mt-0.5">
                    Founder / Developed  Founding Legals
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5C6F2D]/10 rounded-full text-[#5C6F2D] text-xs font-semibold">
                  Verified Creator
                </span>
              </div>

              <div className="bg-[#FAF9F6] border border-[#e5ddd4]/80 rounded-2xl p-5">
                <h5 className="text-sm font-bold text-brown-900 mb-2">About the Author</h5>
                <p className="text-sm text-brown-600 leading-relaxed m-0 font-sans">
                  Manoj Kumar Thota is the creator behind Founding Legals 
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Credit Section */}
        <div className="w-full mt-10">
          <HelpCredit />
        </div>
      </div>

      <Footer />
    </main>
  );
}
