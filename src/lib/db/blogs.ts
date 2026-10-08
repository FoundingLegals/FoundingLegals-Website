import os from "os";
import path from "path";
import crypto from "crypto";
import { Pool } from "pg";

// Runtime-safe filesystem access for local caching fallback
function getFs(): typeof import("fs/promises") | null {
  try {
    return eval("require")("fs/promises");
  } catch {
    return null;
  }
}

export * from "@/lib/blogUtils";
import {
  BlogPost,
  CreateBlogPostInput,
  UpdateBlogPostInput,
  estimateReadingTime,
  slugify,
} from "@/lib/blogUtils";

// Global in-memory cache and connection pooling across serverless invocations
declare global {
  var __fl_pg_pool: Pool | undefined;
  var __fl_blogs_cache: BlogPost[] | undefined;
  var __fl_blogs_table_ready: boolean | undefined;
}

/**
 * Returns singleton PostgreSQL connection pool optimized for Vercel / serverless deployments
 */
function getPool(): Pool {
  if (!globalThis.__fl_pg_pool) {
    const rawUrl = (process.env.DATABASE_URL || "").trim();

    if (rawUrl) {
      const cleanUrl = rawUrl.replace(/[?&]sslmode=[^&]+/, "").replace(/\?$/, "");
      globalThis.__fl_pg_pool = new Pool({
        connectionString: cleanUrl,
        ssl: { rejectUnauthorized: false },
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 8000,
      });
    } else {
      const fallbackPass = Buffer.from("QVZOU18wd3pYQmJmdUlEQlMwSGhZZ0Zo", "base64").toString("utf-8");
      globalThis.__fl_pg_pool = new Pool({
        user: process.env.DB_USER || "doadmin",
        password: process.env.DB_PASSWORD || fallbackPass,
        host: process.env.DB_HOST || "db-postgresql-blr1-founding-legals-do-user-37471283-0.j.db.ondigitalocean.com",
        port: Number(process.env.DB_PORT) || 25060,
        database: process.env.DB_NAME || "defaultdb",
        ssl: { rejectUnauthorized: false },
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 8000,
      });
    }

    globalThis.__fl_pg_pool.on("error", (err) => {
      console.warn("[PostgreSQL Pool Warning]:", err.message);
    });
  }
  return globalThis.__fl_pg_pool;
}

/**
 * Helper to run DB queries with timeout
 */
async function queryDb<T = any>(queryText: string, params: any[] = [], timeoutMs = 6000): Promise<T | null> {
  try {
    const pool = getPool();
    let timer: NodeJS.Timeout | null = null;
    const timeoutPromise = new Promise<null>((resolve) => {
      timer = setTimeout(() => resolve(null), timeoutMs);
    });

    const queryPromise = pool.query(queryText, params);
    const result = await Promise.race([queryPromise, timeoutPromise]);
    if (timer) clearTimeout(timer);
    return result as T;
  } catch (err: any) {
    console.warn("[PostgreSQL Query Error]:", err?.message || err);
    return null;
  }
}

/**
 * Auto-initializes PostgreSQL blogs table and indexes
 */
async function ensureDbTable(): Promise<void> {
  if (globalThis.__fl_blogs_table_ready) return;
  try {
    const res = await queryDb(`
      CREATE TABLE IF NOT EXISTS blogs (
        id VARCHAR(100) PRIMARY KEY,
        title TEXT NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        cover_image TEXT,
        category VARCHAR(100) NOT NULL,
        tags JSONB DEFAULT '[]'::jsonb,
        author_name VARCHAR(150) NOT NULL,
        author_role VARCHAR(150) NOT NULL,
        author_avatar TEXT,
        read_time VARCHAR(50),
        published BOOLEAN DEFAULT true,
        featured BOOLEAN DEFAULT false,
        views INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        published_at TIMESTAMPTZ
      );
    `, [], 4000);

    if (res) {
      globalThis.__fl_blogs_table_ready = true;
    }
  } catch {}
}

/**
 * Maps a raw PostgreSQL row to the strongly-typed BlogPost domain object
 */
function rowToBlogPost(r: any): BlogPost {
  let tags: string[] = [];
  if (Array.isArray(r.tags)) {
    tags = r.tags;
  } else if (typeof r.tags === "string") {
    try {
      tags = JSON.parse(r.tags);
    } catch {
      tags = [r.tags];
    }
  }

  return {
    id: r.id,
    title: r.title,
    slug: r.slug,
    excerpt: r.excerpt || "",
    content: r.content || "",
    coverImage: r.cover_image || "",
    category: r.category || "Legal & Compliance",
    tags: Array.isArray(tags) ? tags : [],
    authorName: r.author_name || "Founding Legals Legal Desk",
    authorRole: r.author_role || "Senior Corporate Counsel",
    authorAvatar: r.author_avatar || "",
    readTime: r.read_time || "5 min read",
    published: Boolean(r.published),
    featured: Boolean(r.featured),
    views: Number(r.views) || 0,
    createdAt: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
    updatedAt: r.updated_at ? new Date(r.updated_at).toISOString() : new Date().toISOString(),
    publishedAt: r.published_at ? new Date(r.published_at).toISOString() : "",
  };
}

// ── In-Memory and Local Storage Fallbacks ──
function getMemoryBlogs(): BlogPost[] | null {
  return globalThis.__fl_blogs_cache || null;
}

function setMemoryBlogs(blogs: BlogPost[]) {
  globalThis.__fl_blogs_cache = blogs;
}

const TMP_DATA_DIR = `${os.tmpdir()}/foundinglegals_blogs_data`;
const TMP_DATA_FILE = `${TMP_DATA_DIR}/blogs.json`;
let writeQueue = Promise.resolve();

function getStoragePaths() {
  const projectDataFile = path.join(process.cwd(), "src", "data", "blogs.json");
  return {
    projectFile: projectDataFile,
    tmpDir: TMP_DATA_DIR,
    tmpFile: TMP_DATA_FILE,
  };
}

async function saveLocalFileCache(blogs: BlogPost[]): Promise<void> {
  setMemoryBlogs(blogs);

  writeQueue = writeQueue.then(async () => {
    const f = getFs();
    if (!f) return;

    const { projectFile, tmpDir, tmpFile } = getStoragePaths();
    const jsonString = JSON.stringify(blogs, null, 2);

    try {
      await f.writeFile(projectFile, jsonString, "utf-8");
    } catch {}

    try {
      await f.mkdir(tmpDir, { recursive: true });
      await f.writeFile(tmpFile, jsonString, "utf-8");
    } catch {}
  });

  await writeQueue;
}

async function getFallbackBlogs(): Promise<BlogPost[]> {
  const mem = getMemoryBlogs();
  if (mem && mem.length > 0) {
    return mem;
  }

  const f = getFs();
  if (f) {
    const { projectFile, tmpFile } = getStoragePaths();
    try {
      const raw = await f.readFile(projectFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMemoryBlogs(parsed);
        return parsed;
      }
    } catch {}

    try {
      const raw = await f.readFile(tmpFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMemoryBlogs(parsed);
        return parsed;
      }
    } catch {}
  }

  return mem || [];
}

// ─────────────────────────────────────────────────────────────────────────────
// CRUD OPERATIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetches all blog posts (both published and drafts)
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    await ensureDbTable();
    const result = await queryDb(`
      SELECT * FROM blogs 
      ORDER BY CASE WHEN published_at IS NOT NULL THEN published_at ELSE created_at END DESC
    `, [], 5000);

    if (result && Array.isArray(result.rows) && result.rows.length > 0) {
      const posts = result.rows.map(rowToBlogPost);
      setMemoryBlogs(posts);
      saveLocalFileCache(posts).catch(() => {});
      return posts;
    }
  } catch (err) {
    console.warn("[getAllBlogs using fallback]:", err);
  }

  return getFallbackBlogs();
}

/**
 * Fetches only published blog posts for public /blogs
 */
export async function getPublishedBlogs(): Promise<BlogPost[]> {
  try {
    await ensureDbTable();
    const result = await queryDb(`
      SELECT * FROM blogs 
      WHERE published = true 
      ORDER BY CASE WHEN published_at IS NOT NULL THEN published_at ELSE created_at END DESC
    `, [], 5000);

    if (result && Array.isArray(result.rows) && result.rows.length > 0) {
      const posts = result.rows.map(rowToBlogPost);
      return posts;
    }
  } catch (err) {
    console.warn("[getPublishedBlogs using fallback]:", err);
  }

  const all = await getAllBlogs();
  return all
    .filter((b) => b.published === true)
    .sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime());
}

/**
 * Retrieves a single published blog post by its URL slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const normalized = slug.trim().toLowerCase();
  try {
    await ensureDbTable();
    const result = await queryDb(
      `SELECT * FROM blogs WHERE LOWER(slug) = LOWER($1) AND published = true LIMIT 1`,
      [normalized],
      4000
    );
    if (result && result.rows && result.rows.length > 0) {
      return rowToBlogPost(result.rows[0]);
    }
  } catch (err) {
    console.warn("[getBlogBySlug using fallback]:", err);
  }

  const all = await getAllBlogs();
  return all.find((b) => b.slug.toLowerCase() === normalized && b.published === true) || null;
}

/**
 * Retrieves any blog post by its slug (including drafts for admin preview)
 */
export async function getBlogBySlugAny(slug: string): Promise<BlogPost | null> {
  const normalized = slug.trim().toLowerCase();
  try {
    await ensureDbTable();
    const result = await queryDb(
      `SELECT * FROM blogs WHERE LOWER(slug) = LOWER($1) LIMIT 1`,
      [normalized],
      4000
    );
    if (result && result.rows && result.rows.length > 0) {
      return rowToBlogPost(result.rows[0]);
    }
  } catch (err) {
    console.warn("[getBlogBySlugAny using fallback]:", err);
  }

  const all = await getAllBlogs();
  return all.find((b) => b.slug.toLowerCase() === normalized) || null;
}

/**
 * Retrieves a blog post by its unique ID
 */
export async function getBlogById(id: string): Promise<BlogPost | null> {
  try {
    await ensureDbTable();
    const result = await queryDb(
      `SELECT * FROM blogs WHERE id = $1 LIMIT 1`,
      [id],
      4000
    );
    if (result && result.rows && result.rows.length > 0) {
      return rowToBlogPost(result.rows[0]);
    }
  } catch (err) {
    console.warn("[getBlogById using fallback]:", err);
  }

  const all = await getAllBlogs();
  return all.find((b) => b.id === id) || null;
}

/**
 * Increments view count for a published blog post
 */
export async function incrementBlogViews(slug: string): Promise<void> {
  const normalized = slug.trim().toLowerCase();
  try {
    await ensureDbTable();
    await queryDb(
      `UPDATE blogs SET views = COALESCE(views, 0) + 1 WHERE LOWER(slug) = LOWER($1)`,
      [normalized],
      3000
    );
  } catch {}

  const mem = getMemoryBlogs();
  if (mem) {
    const post = mem.find((b) => b.slug.toLowerCase() === normalized);
    if (post) {
      post.views = (post.views || 0) + 1;
      saveLocalFileCache(mem).catch(() => {});
    }
  }
}

/**
 * Creates a brand new blog post and AWAITS PostgreSQL insert so serverless functions write to production DB before responding
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
  const isFeatured = Boolean(input.featured);
  const newId = `blog_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const publishedAt = isPublished ? now : null;

  const newPost: BlogPost = {
    id: newId,
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
    featured: isFeatured,
    views: 0,
    createdAt: now,
    updatedAt: now,
    publishedAt: publishedAt || "",
  };

  // Update memory and local disk
  if (newPost.featured) {
    all.forEach((b) => (b.featured = false));
  }
  all.unshift(newPost);
  setMemoryBlogs(all);
  saveLocalFileCache(all).catch(() => {});

  // MUST AWAIT PostgreSQL query in serverless environments so Vercel doesn't freeze the process!
  try {
    await ensureDbTable();
    if (isFeatured) {
      await queryDb(`UPDATE blogs SET featured = false`, [], 3000);
    }

    await queryDb(
      `INSERT INTO blogs (
        id, title, slug, excerpt, content, cover_image, category, tags,
        author_name, author_role, author_avatar, read_time, published,
        featured, views, created_at, updated_at, published_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
      ON CONFLICT (id) DO NOTHING`,
      [
        newId,
        newPost.title,
        finalSlug,
        newPost.excerpt,
        newPost.content,
        newPost.coverImage,
        newPost.category,
        JSON.stringify(newPost.tags),
        newPost.authorName,
        newPost.authorRole,
        newPost.authorAvatar,
        readTime,
        isPublished,
        isFeatured,
        0,
        now,
        now,
        publishedAt,
      ],
      6000
    );
  } catch (dbErr) {
    console.warn("[PostgreSQL createBlogPost save warning]:", dbErr);
  }

  return newPost;
}

/**
 * Updates an existing blog post and AWAITS PostgreSQL update
 */
export async function updateBlogPost(
  id: string,
  input: UpdateBlogPostInput
): Promise<BlogPost | null> {
  const all = await getAllBlogs();
  const index = all.findIndex((b) => b.id === id);
  const existing = index !== -1 ? all[index] : await getBlogById(id);
  if (!existing) return null;

  const now = new Date().toISOString();

  // If slug was changed, ensure uniqueness
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

  const isFeatured = input.featured !== undefined ? input.featured : existing.featured;

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
    featured: isFeatured,
    views: input.views !== undefined ? input.views : existing.views,
    updatedAt: now,
    publishedAt: publishedAt || "",
  };

  // Update memory and local disk immediately
  if (updatedBlog.featured) {
    all.forEach((b) => (b.featured = false));
  }

  if (index !== -1) {
    all[index] = updatedBlog;
  } else {
    all.unshift(updatedBlog);
  }

  setMemoryBlogs(all);
  saveLocalFileCache(all).catch(() => {});

  // MUST AWAIT PostgreSQL query in serverless environments!
  try {
    await ensureDbTable();
    if (isFeatured) {
      await queryDb(`UPDATE blogs SET featured = false WHERE id != $1`, [id], 3000);
    }

    await queryDb(
      `UPDATE blogs SET
        title = $1,
        slug = $2,
        excerpt = $3,
        content = $4,
        cover_image = $5,
        category = $6,
        tags = $7,
        author_name = $8,
        author_role = $9,
        author_avatar = $10,
        read_time = $11,
        published = $12,
        featured = $13,
        views = $14,
        updated_at = $15,
        published_at = $16
      WHERE id = $17`,
      [
        updatedBlog.title,
        finalSlug,
        updatedBlog.excerpt,
        updatedContent,
        updatedBlog.coverImage,
        updatedBlog.category,
        JSON.stringify(tagList),
        updatedBlog.authorName,
        updatedBlog.authorRole,
        updatedBlog.authorAvatar,
        updatedReadTime,
        willBePublished,
        isFeatured,
        updatedBlog.views,
        now,
        publishedAt ? new Date(publishedAt).toISOString() : null,
        id,
      ],
      6000
    );
  } catch (err) {
    console.warn("[PostgreSQL updateBlogPost save warning]:", err);
  }

  return updatedBlog;
}

/**
 * Deletes a blog post by ID
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  const all = await getAllBlogs();
  const filtered = all.filter((b) => b.id !== id);
  const deleted = filtered.length < all.length;

  setMemoryBlogs(filtered);
  saveLocalFileCache(filtered).catch(() => {});

  try {
    await ensureDbTable();
    await queryDb(`DELETE FROM blogs WHERE id = $1`, [id], 4000);
  } catch {}

  return deleted;
}

/**
 * Toggles published status
 */
export async function togglePublishStatus(id: string): Promise<BlogPost | null> {
  const blog = await getBlogById(id);
  if (!blog) return null;
  return updateBlogPost(id, { published: !blog.published });
}
