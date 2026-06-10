import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HELP_ARTICLES, HELP_MODULES } from "@/lib/helpData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, HelpCircle, Presentation, PieChart, FileText, Wallet, BookOpen, Users } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    articleId: string;
  }>;
}

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
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Users":
      return <Users className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export async function generateMetadata({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = HELP_ARTICLES.find((art) => art.id === resolvedParams.articleId);
  if (!article) return { title: "Article | Help Center | Founding Legals" };

  return {
    title: `${article.title} | Help Center & Legal Database`,
    description: article.summary,
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
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Back to Directory button side rail */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-[100px]">
            <Link
              href={parentModule ? `/help/${parentModule.id}` : "/help"}
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-[#e5ddd4] rounded-2xl text-sm font-semibold text-brown-700 hover:text-[#5C6F2D] hover:bg-[#5C6F2D]/5 transition-all shadow-sm w-full justify-center group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Help Center
            </Link>

            <div className="hidden lg:block mt-8 bg-white border border-[#e5ddd4] rounded-3xl p-6 shadow-sm">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#9e9890] mb-4">
                MODULE
              </h4>
              <div className="flex items-center gap-3 px-3 py-2 bg-[#5C6F2D]/5 rounded-xl border border-[#e5ddd4]/30">
                <span className="p-2 bg-[#5C6F2D]/10 text-[#5C6F2D] rounded-lg">
                  {getModuleIcon(parentModule?.icon || "")}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-brown-800 truncate">
                    {article.moduleName}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 pt-6 border-t border-[#e5ddd4]">
                <div className="flex items-center gap-2 text-xs text-brown-500">
                  <Clock className="w-4 h-4 text-[#9e9890]" />
                  <span>{article.readingTime} read</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brown-500">
                  <Calendar className="w-4 h-4 text-[#9e9890]" />
                  <span>Updated {article.lastUpdated}</span>
                </div>
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
              <h2 className="text-3xl sm:text-4.5xl font-serif font-bold text-brown-900 leading-tight">
                {article.title}
              </h2>
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
            <div className="text-sm sm:text-base text-brown-800 space-y-6 leading-[1.8] font-sans prose prose-brown max-w-none">
              {article.content}
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
