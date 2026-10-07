export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  readTime: string;
  published: boolean;
  featured: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CreateBlogPostInput {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags?: string[] | string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  readTime?: string;
  published?: boolean;
  featured?: boolean;
}

export interface UpdateBlogPostInput {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  category?: string;
  tags?: string[] | string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  readTime?: string;
  published?: boolean;
  featured?: boolean;
  views?: number;
}

/**
 * Calculates estimated reading time in minutes based on average 200 words per minute
 */
export function estimateReadingTime(content: string = ""): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Generates an SEO-friendly URL slug from a title string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
