import type { MetadataRoute } from "next";
import { AGREEMENTS_DATABASE } from "@/lib/agreementsData";
import { HELP_MODULES, HELP_ARTICLES } from "@/lib/helpData";
import { getPublishedBlogs, BlogPost } from "@/lib/db/blogs";

const BASE_URL = "https://www.foundinglegals.com";

// Revalidate sitemap periodically in production so newly published blogs appear automatically
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapMap = new Map<string, MetadataRoute.Sitemap[number]>();

  const now = new Date();

  // Helper to add unique entry
  const addEntry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
    lastModified?: Date
  ) => {
    const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
    const url = `${BASE_URL}${cleanPath}`;
    if (!sitemapMap.has(url)) {
      sitemapMap.set(url, {
        url,
        lastModified: lastModified || now,
        changeFrequency,
        priority,
      });
    }
  };

  // 1. Core High-Priority Public Pages
  addEntry("", "daily", 1.0); // Homepage
  addEntry("/services", "weekly", 0.9);
  addEntry("/pricing", "weekly", 0.9);
  addEntry("/consultation", "weekly", 0.9);
  addEntry("/blogs", "daily", 0.9);
  addEntry("/contact", "monthly", 0.8);
  addEntry("/company/about-us", "monthly", 0.8);
  addEntry("/company/careers", "monthly", 0.7);
  addEntry("/company/partnership", "monthly", 0.7);
  addEntry("/client-feedback", "monthly", 0.7);
  addEntry("/features/client-management", "monthly", 0.7);
  addEntry("/help", "weekly", 0.8);
  addEntry("/services/certifications", "weekly", 0.8);
  addEntry("/services/agreements", "weekly", 0.8);

  // 2. Legal Policies
  addEntry("/privacy-policy", "monthly", 0.5);
  addEntry("/terms", "monthly", 0.5);
  addEntry("/cookie-policy", "monthly", 0.5);
  addEntry("/refund-policy", "monthly", 0.5);

  // 3. CA Services & Business Incorporation Routes
  const CA_SERVICES: string[] = [
    "company-incorporation",
    "public-limited-company",
    "llp-registration",
    "partnership-firm-registration",
    "sole-proprietorship-registration",
    "opc-registration",
    "dpiit-recognition",
    "gst-registration",
    "udyam-registration",
    "iec-registration",
    "labour-license",
    "professional-tax-registration",
    "fssai-registration",
    "fssai-state-license",
    "fssai-central-license",
    "gst-indirect-tax",
    "gst-monthly-returns",
    "gst-quarterly-returns",
    "gstr9-annual-return",
    "gstr9c-gst-audit",
    "tds-return-filing",
    "professional-tax-return-filing",
    "salary-itr-filing",
    "business-itr-filing",
    "itr-3-filing",
    "itr-4-filing",
    "itr-5-filing",
    "itr-6-filing",
    "itr-7-filing",
    "tax-audit",
    "spend-analysis",
  ];

  for (const slug of CA_SERVICES) {
    addEntry(`/services/CAservices/${slug}`, "weekly", 0.8);
  }

  // 4. Legal Services & Startup Tools Routes
  const LEGAL_SERVICES: string[] = [
    "client-management",
    "team-management",
    "payroll-management",
    "essential-startup-approach",
    "investor-directory",
    "document-management",
    "schemes-and-grants",
    "marketplace",
    "pitch-to-investors",
    "raise-before-a-round",
    "do-a-funding-round",
    "finance-for-fundraising",
    "legal-advice-for-a-round",
    "instant-investment",
    "ip-protection",
    "trademark-registration",
  ];

  for (const slug of LEGAL_SERVICES) {
    addEntry(`/services/LegalServices/${slug}`, "weekly", 0.8);
  }

  // 5. Legal Agreements (All verified canonical agreements)
  for (const agreement of AGREEMENTS_DATABASE) {
    if (agreement?.id) {
      addEntry(`/services/LegalServices/agreements/${agreement.id}`, "monthly", 0.8);
    }
  }

  // 6. Help Center Categories
  for (const moduleItem of HELP_MODULES) {
    if (moduleItem?.id) {
      addEntry(`/help/${moduleItem.id}`, "monthly", 0.6);
    }
  }

  // 7. Help Center Statutory Legal Articles
  for (const article of HELP_ARTICLES) {
    if (article?.id) {
      addEntry(`/help/article/${article.id}`, "monthly", 0.7);
    }
  }

  // 8. Published Blogs (Dynamically fetched from DB with safe error handling)
  try {
    const publishedBlogs: BlogPost[] = await getPublishedBlogs();
    if (Array.isArray(publishedBlogs)) {
      for (const blog of publishedBlogs) {
        if (blog?.slug && (blog.published !== false)) {
          const modDate = blog.updatedAt
            ? new Date(blog.updatedAt)
            : blog.publishedAt
            ? new Date(blog.publishedAt)
            : blog.createdAt
            ? new Date(blog.createdAt)
            : now;

          addEntry(
            `/blogs/${blog.slug}`,
            "weekly",
            blog.featured ? 0.9 : 0.8,
            isNaN(modDate.getTime()) ? now : modDate
          );
        }
      }
    }
  } catch (err) {
    console.warn("[Sitemap] Could not fetch dynamic blogs during sitemap generation:", err);
  }

  return Array.from(sitemapMap.values());
}
