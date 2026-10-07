import os from "os";
import path from "path";
import crypto from "crypto";

// Runtime-safe filesystem access
function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

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

// In-memory cache for fast zero-latency access across serverless functions
declare global {
  var __fl_blogs_cache: BlogPost[] | undefined;
}

function getMemoryBlogs(): BlogPost[] | null {
  return globalThis.__fl_blogs_cache || null;
}

function setMemoryBlogs(blogs: BlogPost[]) {
  globalThis.__fl_blogs_cache = blogs;
}

// Storage paths
const TMP_DATA_DIR = `${os.tmpdir()}/foundinglegals_blogs_data`;
const TMP_DATA_FILE = `${TMP_DATA_DIR}/blogs.json`;

let writeQueue = Promise.resolve();

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
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars except -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
}

/**
 * Resolves the candidate paths for reading/writing blogs JSON.
 * We prioritize project's src/data/blogs.json, falling back to os.tmpdir()
 */
function getStoragePaths() {
  const projectDataFile = path.join(process.cwd(), "src", "data", "blogs.json");
  return {
    projectFile: projectDataFile,
    tmpDir: TMP_DATA_DIR,
    tmpFile: TMP_DATA_FILE,
  };
}

/**
 * Ensures data file exists with initial seeds
 */
async function ensureDataFile(): Promise<void> {
  const f = getFs();
  if (!f) return;

  const { projectFile, tmpDir, tmpFile } = getStoragePaths();

  // 1. Check if projectFile exists
  let seedData: BlogPost[] = [];
  try {
    const raw = await f.readFile(projectFile, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      seedData = parsed;
    }
  } catch {
    // If not readable yet from projectFile
  }

  // 2. Ensure tmp directory exists
  try {
    await f.mkdir(tmpDir, { recursive: true });
    try {
      await f.access(tmpFile);
    } catch {
      // File doesn't exist in tmp, write seed data
      await f.writeFile(tmpFile, JSON.stringify(seedData, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to initialize tmp blogs storage:", err);
  }
}

/**
 * Fetches all blog posts (both published and drafts)
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
  const f = getFs();
  await ensureDataFile();

  if (f) {
    const { projectFile, tmpFile } = getStoragePaths();

    // Check project data file first for real-time changes
    try {
      const raw = await f.readFile(projectFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMemoryBlogs(parsed);
        return parsed;
      }
    } catch {}

    // Fall back to tmpFile
    try {
      const raw = await f.readFile(tmpFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMemoryBlogs(parsed);
        return parsed;
      }
    } catch {}
  }

  const mem = getMemoryBlogs();
  if (mem && mem.length > 0) {
    return mem;
  }

  return [];
}

/**
 * Persists all blogs to storage atomically
 */
export async function saveAllBlogs(blogs: BlogPost[]): Promise<void> {
  setMemoryBlogs(blogs);

  writeQueue = writeQueue.then(async () => {
    const f = getFs();
    if (!f) return;

    const { projectFile, tmpDir, tmpFile } = getStoragePaths();
    const jsonString = JSON.stringify(blogs, null, 2);

    // Try writing to projectFile (works in local dev and Node runtime)
    try {
      const tempProject = `${projectFile}.${crypto.randomUUID()}.tmp`;
      await f.writeFile(tempProject, jsonString, "utf-8");
      await f.rename(tempProject, projectFile);
    } catch {
      // Read-only environment like Vercel serverless lambda
    }

    // Always also write to tmpFile
    try {
      await f.mkdir(tmpDir, { recursive: true });
      const tempTmp = `${tmpFile}.${crypto.randomUUID()}.tmp`;
      await f.writeFile(tempTmp, jsonString, "utf-8");
      await f.rename(tempTmp, tmpFile);
    } catch (err) {
      console.error("Error writing blogs tmp file:", err);
    }
  });

  await writeQueue;
}

/**
 * Fetches only published blog posts for public /blogs
 */
export async function getPublishedBlogs(): Promise<BlogPost[]> {
  const all = await getAllBlogs();
  return all
    .filter((b) => b.published === true)
    .sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime());
}

/**
 * Retrieves a single published blog post by its URL slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const all = await getAllBlogs();
  const normalized = slug.trim().toLowerCase();
  return all.find((b) => b.slug.toLowerCase() === normalized && b.published === true) || null;
}

/**
 * Retrieves any blog post by its slug (including drafts for admin preview)
 */
export async function getBlogBySlugAny(slug: string): Promise<BlogPost | null> {
  const all = await getAllBlogs();
  const normalized = slug.trim().toLowerCase();
  return all.find((b) => b.slug.toLowerCase() === normalized) || null;
}

/**
 * Retrieves a blog post by its unique ID
 */
export async function getBlogById(id: string): Promise<BlogPost | null> {
  const all = await getAllBlogs();
  return all.find((b) => b.id === id) || null;
}

/**
 * Increments view count for a published blog post
 */
export async function incrementBlogViews(slug: string): Promise<void> {
  const all = await getAllBlogs();
  const blog = all.find((b) => b.slug === slug);
  if (blog) {
    blog.views = (blog.views || 0) + 1;
    await saveAllBlogs(all);
  }
}

/**
 * Creates a brand new blog post and stores it immediately
 */
export async function createBlogPost(input: CreateBlogPostInput): Promise<BlogPost> {
  const all = await getAllBlogs();

  const now = new Date().toISOString();
  let baseSlug = input.slug?.trim() ? slugify(input.slug) : slugify(input.title);
  if (!baseSlug) {
    baseSlug = `blog-${Date.now()}`;
  }

  // Ensure unique slug
  let finalSlug = baseSlug;
  let counter = 1;
  while (all.some((b) => b.slug === finalSlug)) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  // Parse tags
  let tagList: string[] = [];
  if (Array.isArray(input.tags)) {
    tagList = input.tags.map((t) => t.trim()).filter(Boolean);
  } else if (typeof input.tags === "string") {
    tagList = input.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }

  const readTime = input.readTime?.trim() || estimateReadingTime(input.content);
  const isPublished = input.published ?? true;

  const newPost: BlogPost = {
    id: `blog_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`,
    title: input.title.trim(),
    slug: finalSlug,
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    coverImage:
      input.coverImage?.trim() ||
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: input.category.trim() || "Legal & Compliance",
    tags: tagList.length > 0 ? tagList : ["Startup", "Legal"],
    authorName: input.authorName?.trim() || "Founding Legals Legal Desk",
    authorRole: input.authorRole?.trim() || "Super Admin",
    authorAvatar:
      input.authorAvatar?.trim() ||
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    readTime,
    published: isPublished,
    featured: input.featured ?? false,
    views: 0,
    createdAt: now,
    updatedAt: now,
    publishedAt: isPublished ? now : "",
  };

  // If newly created post is marked featured, un-feature others if desired or keep
  if (newPost.featured) {
    all.forEach((b) => {
      b.featured = false;
    });
  }

  all.unshift(newPost); // Add to beginning so newest post is first
  await saveAllBlogs(all);

  return newPost;
}

/**
 * Updates an existing blog post
 */
export async function updateBlogPost(
  id: string,
  input: UpdateBlogPostInput
): Promise<BlogPost | null> {
  const all = await getAllBlogs();
  const index = all.findIndex((b) => b.id === id);

  if (index === -1) {
    return null;
  }

  const existing = all[index];
  const now = new Date().toISOString();

  // If slug was updated, ensure uniqueness
  let finalSlug = existing.slug;
  if (input.slug && input.slug.trim() !== existing.slug) {
    const candidate = slugify(input.slug);
    let checkSlug = candidate;
    let counter = 1;
    while (all.some((b) => b.id !== id && b.slug === checkSlug)) {
      checkSlug = `${candidate}-${counter}`;
      counter++;
    }
    finalSlug = checkSlug;
  }

  // Parse tags
  let tagList = existing.tags;
  if (input.tags !== undefined) {
    if (Array.isArray(input.tags)) {
      tagList = input.tags.map((t) => t.trim()).filter(Boolean);
    } else if (typeof input.tags === "string") {
      tagList = input.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
  }

  const updatedContent = input.content !== undefined ? input.content.trim() : existing.content;
  const updatedReadTime =
    input.readTime?.trim() ||
    (input.content !== undefined ? estimateReadingTime(updatedContent) : existing.readTime);

  const willBePublished = input.published !== undefined ? input.published : existing.published;
  let publishedAt = existing.publishedAt;
  if (willBePublished && !existing.published) {
    publishedAt = now;
  }

  if (input.featured) {
    all.forEach((b) => {
      b.featured = false;
    });
  }

  const updatedBlog: BlogPost = {
    ...existing,
    title: input.title !== undefined ? input.title.trim() : existing.title,
    slug: finalSlug,
    excerpt: input.excerpt !== undefined ? input.excerpt.trim() : existing.excerpt,
    content: updatedContent,
    coverImage: input.coverImage !== undefined ? input.coverImage.trim() : existing.coverImage,
    category: input.category !== undefined ? input.category.trim() : existing.category,
    tags: tagList,
    authorName: input.authorName !== undefined ? input.authorName.trim() : existing.authorName,
    authorRole: input.authorRole !== undefined ? input.authorRole.trim() : existing.authorRole,
    authorAvatar: input.authorAvatar !== undefined ? input.authorAvatar.trim() : existing.authorAvatar,
    readTime: updatedReadTime,
    published: willBePublished,
    featured: input.featured !== undefined ? input.featured : existing.featured,
    views: input.views !== undefined ? input.views : existing.views,
    updatedAt: now,
    publishedAt,
  };

  all[index] = updatedBlog;
  await saveAllBlogs(all);

  return updatedBlog;
}

/**
 * Deletes a blog post by ID
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  const all = await getAllBlogs();
  const initialLength = all.length;
  const filtered = all.filter((b) => b.id !== id);

  if (filtered.length === initialLength) {
    return false;
  }

  await saveAllBlogs(filtered);
  return true;
}

/**
 * Toggles published status
 */
export async function togglePublishStatus(id: string): Promise<BlogPost | null> {
  const all = await getAllBlogs();
  const blog = all.find((b) => b.id === id);
  if (!blog) return null;

  return updateBlogPost(id, { published: !blog.published });
}
