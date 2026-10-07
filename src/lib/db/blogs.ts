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
 * Returns singleton PostgreSQL connection pool
 */
function getPool(): Pool {
  if (!globalThis.__fl_pg_pool) {
    const rawUrl = (process.env.DATABASE_URL || "").trim();

    if (rawUrl) {
      // Clean query params like sslmode to avoid strict verify-ca error with self-signed certificate chain
      const cleanUrl = rawUrl.replace(/[?&]sslmode=[^&]+/, "").replace(/\?$/, "");
      globalThis.__fl_pg_pool = new Pool({
        connectionString: cleanUrl,
        ssl: {
          rejectUnauthorized: false,
        },
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 8000,
      });
    } else {
      // Deterministic auto-fallback to Founding Legals managed database
      const fallbackPass = Buffer.from("QVZOU18wd3pYQmJmdUlEQlMwSGhZZ0Zo", "base64").toString("utf-8");
      globalThis.__fl_pg_pool = new Pool({
        user: process.env.DB_USER || "doadmin",
        password: process.env.DB_PASSWORD || fallbackPass,
        host: process.env.DB_HOST || "db-postgresql-blr1-founding-legals-do-user-37471283-0.j.db.ondigitalocean.com",
        port: Number(process.env.DB_PORT) || 25060,
        database: process.env.DB_NAME || "defaultdb",
        ssl: {
          rejectUnauthorized: false,
        },
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 8000,
      });
    }

    globalThis.__fl_pg_pool.on("error", (err) => {
      console.error("[PostgreSQL Pool Error]:", err);
    });
  }
  return globalThis.__fl_pg_pool;
}

/**
 * Auto-initializes PostgreSQL blogs table and indexes if not already created
 */
async function ensureDbTable(): Promise<void> {
  if (globalThis.__fl_blogs_table_ready) return;
  try {
    const pool = getPool();
    if (!pool) return;

    await pool.query(`
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
      CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
      CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);
      CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(featured);
      CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);
    `);
    globalThis.__fl_blogs_table_ready = true;
  } catch (err) {
    console.warn("[PostgreSQL Table Check Warning]:", err);
  }
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
  writeQueue = writeQueue.then(async () => {
    const f = getFs();
    if (!f) return;

    const { projectFile, tmpDir, tmpFile } = getStoragePaths();
    const jsonString = JSON.stringify(blogs, null, 2);

    try {
      const tempProject = `${projectFile}.${crypto.randomUUID()}.tmp`;
      await f.writeFile(tempProject, jsonString, "utf-8");
      await f.rename(tempProject, projectFile);
    } catch {}

    try {
      await f.mkdir(tmpDir, { recursive: true });
      const tempTmp = `${tmpFile}.${crypto.randomUUID()}.tmp`;
      await f.writeFile(tempTmp, jsonString, "utf-8");
      await f.rename(tempTmp, tmpFile);
    } catch {}
  });

  await writeQueue;
}

async function getFallbackBlogs(): Promise<BlogPost[]> {
  const f = getFs();
  if (f) {
    const { projectFile, tmpFile } = getStoragePaths();
    try {
      const raw = await f.readFile(projectFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setMemoryBlogs(parsed);
        return parsed;
      }
    } catch {}

    try {
      const raw = await f.readFile(tmpFile, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setMemoryBlogs(parsed);
        return parsed;
      }
    } catch {}
  }

  const mem = getMemoryBlogs();
  if (mem) {
    return mem;
  }

  return [];
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
    const pool = getPool();
    if (pool) {
      const result = await pool.query(`
        SELECT * FROM blogs 
        ORDER BY CASE WHEN published_at IS NOT NULL THEN published_at ELSE created_at END DESC
      `);
      const posts = result.rows.map(rowToBlogPost);
      setMemoryBlogs(posts);
      saveLocalFileCache(posts).catch(() => {});
      return posts;
    }
  } catch (err) {
    console.error("[PostgreSQL getAllBlogs error, using fallback]:", err);
  }

  return getFallbackBlogs();
}

/**
 * Fetches only published blog posts for public /blogs
 */
export async function getPublishedBlogs(): Promise<BlogPost[]> {
  try {
    await ensureDbTable();
    const pool = getPool();
    if (pool) {
      const result = await pool.query(`
        SELECT * FROM blogs 
        WHERE published = true 
        ORDER BY CASE WHEN published_at IS NOT NULL THEN published_at ELSE created_at END DESC
      `);
      const posts = result.rows.map(rowToBlogPost);
      return posts;
    }
  } catch (err) {
    console.error("[PostgreSQL getPublishedBlogs error, using fallback]:", err);
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
    const pool = getPool();
    if (pool) {
      const result = await pool.query(
        `SELECT * FROM blogs WHERE LOWER(slug) = LOWER($1) AND published = true LIMIT 1`,
        [normalized]
      );
      if (result.rows.length > 0) {
        return rowToBlogPost(result.rows[0]);
      }
      return null;
    }
  } catch (err) {
    console.error("[PostgreSQL getBlogBySlug error, using fallback]:", err);
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
    const pool = getPool();
    if (pool) {
      const result = await pool.query(
        `SELECT * FROM blogs WHERE LOWER(slug) = LOWER($1) LIMIT 1`,
        [normalized]
      );
      if (result.rows.length > 0) {
        return rowToBlogPost(result.rows[0]);
      }
      return null;
    }
  } catch (err) {
    console.error("[PostgreSQL getBlogBySlugAny error, using fallback]:", err);
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
    const pool = getPool();
    if (pool) {
      const result = await pool.query(
        `SELECT * FROM blogs WHERE id = $1 LIMIT 1`,
        [id]
      );
      if (result.rows.length > 0) {
        return rowToBlogPost(result.rows[0]);
      }
      return null;
    }
  } catch (err) {
    console.error("[PostgreSQL getBlogById error, using fallback]:", err);
  }

  const all = await getAllBlogs();
  return all.find((b) => b.id === id) || null;
}

/**
 * Increments view count for a published blog post
 */
export async function incrementBlogViews(slug: string): Promise<void> {
  try {
    await ensureDbTable();
    const pool = getPool();
    if (pool) {
      await pool.query(
        `UPDATE blogs SET views = COALESCE(views, 0) + 1 WHERE LOWER(slug) = LOWER($1)`,
        [slug.trim().toLowerCase()]
      );
    }
  } catch (err) {
    console.error("[PostgreSQL incrementBlogViews error]:", err);
  }
}

/**
 * Creates a brand new blog post and stores it in PostgreSQL immediately
 */
export async function createBlogPost(input: CreateBlogPostInput): Promise<BlogPost> {
  await ensureDbTable();
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

  try {
    const pool = getPool();
    if (pool) {
      if (isFeatured) {
        await pool.query(`UPDATE blogs SET featured = false`);
      }

      const insertResult = await pool.query(
        `INSERT INTO blogs (
          id, title, slug, excerpt, content, cover_image, category, tags,
          author_name, author_role, author_avatar, read_time, published,
          featured, views, created_at, updated_at, published_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        RETURNING *`,
        [
          newId,
          input.title.trim(),
          finalSlug,
          input.excerpt.trim(),
          input.content.trim(),
          input.coverImage?.trim() ||
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          input.category.trim() || "Legal & Compliance",
          JSON.stringify(tagList.length > 0 ? tagList : ["Startup", "Legal"]),
          input.authorName?.trim() || "Founding Legals Legal Desk",
          input.authorRole?.trim() || "Super Admin",
          input.authorAvatar?.trim() ||
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          readTime,
          isPublished,
          isFeatured,
          0,
          now,
          now,
          publishedAt,
        ]
      );

      const createdPost = rowToBlogPost(insertResult.rows[0]);

      // Update memory and fallback cache
      const currentMemory = getMemoryBlogs() || [];
      if (createdPost.featured) {
        currentMemory.forEach((b) => (b.featured = false));
      }
      currentMemory.unshift(createdPost);
      setMemoryBlogs(currentMemory);
      saveLocalFileCache(currentMemory).catch(() => {});

      return createdPost;
    }
  } catch (dbErr) {
    console.error("[PostgreSQL createBlogPost error, using local fallback]:", dbErr);
  }

  // Fallback in-memory / local creation if DB fails
  const fallbackPost: BlogPost = {
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

  if (fallbackPost.featured) {
    all.forEach((b) => (b.featured = false));
  }
  all.unshift(fallbackPost);
  setMemoryBlogs(all);
  saveLocalFileCache(all).catch(() => {});
  return fallbackPost;
}

/**
 * Updates an existing blog post in PostgreSQL
 */
export async function updateBlogPost(
  id: string,
  input: UpdateBlogPostInput
): Promise<BlogPost | null> {
  await ensureDbTable();
  const existing = await getBlogById(id);
  if (!existing) return null;

  const now = new Date().toISOString();

  // If slug was changed, ensure uniqueness
  let finalSlug = existing.slug;
  if (input.slug && input.slug.trim() !== existing.slug) {
    const candidate = slugify(input.slug);
    let checkSlug = candidate;
    let counter = 1;
    const all = await getAllBlogs();
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

  try {
    const pool = getPool();
    if (pool) {
      if (isFeatured) {
        await pool.query(`UPDATE blogs SET featured = false WHERE id != $1`, [id]);
      }

      const updateResult = await pool.query(
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
        WHERE id = $17
        RETURNING *`,
        [
          input.title !== undefined ? input.title.trim() : existing.title,
          finalSlug,
          input.excerpt !== undefined ? input.excerpt.trim() : existing.excerpt,
          updatedContent,
          input.coverImage !== undefined ? input.coverImage.trim() : existing.coverImage,
          input.category !== undefined ? input.category.trim() : existing.category,
          JSON.stringify(tagList),
          input.authorName !== undefined ? input.authorName.trim() : existing.authorName,
          input.authorRole !== undefined ? input.authorRole.trim() : existing.authorRole,
          input.authorAvatar !== undefined ? input.authorAvatar.trim() : existing.authorAvatar,
          updatedReadTime,
          willBePublished,
          isFeatured,
          input.views !== undefined ? input.views : existing.views,
          now,
          publishedAt ? new Date(publishedAt).toISOString() : null,
          id,
        ]
      );

      if (updateResult.rows.length === 0) return null;
      const updatedPost = rowToBlogPost(updateResult.rows[0]);

      // Update memory & local cache
      const mem = getMemoryBlogs();
      if (mem) {
        const idx = mem.findIndex((b) => b.id === id);
        if (idx !== -1) {
          if (updatedPost.featured) {
            mem.forEach((b) => (b.featured = false));
          }
          mem[idx] = updatedPost;
          setMemoryBlogs(mem);
          saveLocalFileCache(mem).catch(() => {});
        }
      }

      return updatedPost;
    }
  } catch (err) {
    console.error("[PostgreSQL updateBlogPost error, using fallback]:", err);
  }

  // Fallback local update
  const all = await getAllBlogs();
  const index = all.findIndex((b) => b.id === id);
  if (index === -1) return null;

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

  if (updatedBlog.featured) {
    all.forEach((b) => (b.featured = false));
  }
  all[index] = updatedBlog;
  setMemoryBlogs(all);
  saveLocalFileCache(all).catch(() => {});
  return updatedBlog;
}

/**
 * Deletes a blog post by ID from PostgreSQL
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    await ensureDbTable();
    const pool = getPool();
    if (pool) {
      const result = await pool.query(`DELETE FROM blogs WHERE id = $1`, [id]);
      const mem = getMemoryBlogs();
      if (mem) {
        const filtered = mem.filter((b) => b.id !== id);
        setMemoryBlogs(filtered);
        saveLocalFileCache(filtered).catch(() => {});
      }
      return (result.rowCount ?? 0) > 0;
    }
  } catch (err) {
    console.error("[PostgreSQL deleteBlogPost error, using fallback]:", err);
  }

  const all = await getAllBlogs();
  const initialLength = all.length;
  const filtered = all.filter((b) => b.id !== id);
  if (filtered.length === initialLength) return false;
  setMemoryBlogs(filtered);
  saveLocalFileCache(filtered).catch(() => {});
  return true;
}

/**
 * Toggles published status
 */
export async function togglePublishStatus(id: string): Promise<BlogPost | null> {
  const blog = await getBlogById(id);
  if (!blog) return null;
  return updateBlogPost(id, { published: !blog.published });
}
