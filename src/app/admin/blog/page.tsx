"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  PenSquare,
  BookOpen,
  Plus,
  RefreshCw,
  Search,
  ExternalLink,
  Edit3,
  Trash2,
  CheckCircle2,
  XCircle,
  Eye,
  Clock,
  Calendar,
  Tag,
  Upload,
  Image as ImageIcon,
  Sparkles,
  Layers,
  FileText,
  AlertCircle,
  Check,
  Globe,
  Lock,
  ArrowRight,
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Table as TableIcon,
  Minus,
  SlidersHorizontal,
  X,
  ChevronRight,
  User,
  Share2,
  Camera,
} from "lucide-react";
import type { BlogPost } from "@/lib/blogUtils";
import { estimateReadingTime, slugify } from "@/lib/blogUtils";

const CATEGORY_OPTIONS = [
  "Company Incorporation",
  "Legal & Compliance",
  "Tax & CA Services",
  "Intellectual Property",
  "Fundraising & Investment",
  "Founder Guides",
  "Contracts & Agreements",
];

const PRESET_BANNERS = [
  {
    name: "Corporate Headquarters",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Legal Library & Scale",
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "CA Finance & Audit",
    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Startup Team & Growth",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "MCA & Corporate Filing",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Intellectual Property & Tech",
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AdminBlogStudioPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
    totalViews: 0,
  });

  // Mode: "list" | "editor"
  const [viewMode, setViewMode] = useState<"list" | "editor">("list");
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  // Filter & Search states for list
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");

  // Medium-style Editor Fields
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [isCustomSlug, setIsCustomSlug] = useState(false);
  const [category, setCategory] = useState("Company Incorporation");
  const [customCategory, setCustomCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [coverImage, setCoverImage] = useState(PRESET_BANNERS[0].url);
  const [authorName, setAuthorName] = useState("Founding Legals Legal Desk");
  const [authorRole, setAuthorRole] = useState("Senior Corporate Counsel");
  const [published, setPublished] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [readTime, setReadTime] = useState("");

  // Medium Editor UI states
  const [editorTab, setEditorTab] = useState<"write" | "preview">("write");
  const [isPublishDrawerOpen, setIsPublishDrawerOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    type: "success" | "error";
    text: string;
    slug?: string;
  } | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const bodyTextareaRef = useRef<HTMLTextAreaElement>(null);
  const titleTextareaRef = useRef<HTMLTextAreaElement>(null);
  const subtitleTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Quick image change modal states for directory list
  const [quickImageBlog, setQuickImageBlog] = useState<BlogPost | null>(null);
  const [quickImageUrl, setQuickImageUrl] = useState("");
  const [quickUploading, setQuickUploading] = useState(false);
  const quickFileInputRef = useRef<HTMLInputElement>(null);

  // Inline Body Image states & refs
  const bodyImageInputRef = useRef<HTMLInputElement>(null);
  const [bodyImageUrlPromptOpen, setBodyImageUrlPromptOpen] = useState(false);
  const [bodyImageUrl, setBodyImageUrl] = useState("");
  const [bodyImageCaption, setBodyImageCaption] = useState("");

  // Load all blogs
  const loadBlogs = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/admin/blogs");
      if (res.ok) {
        const data = await res.json();
        if (data.blogs) {
          setBlogs(data.blogs);
        }
        if (data.stats) {
          setStats(data.stats);
        }
      }
    } catch (err) {
      console.error("Error loading admin blogs:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // Auto-slug when title changes (unless manual override)
  useEffect(() => {
    if (!isCustomSlug && !editingBlogId) {
      setSlug(slugify(title));
    }
    setIsSaved(false);
  }, [title, isCustomSlug, editingBlogId]);

  // Track edits
  useEffect(() => {
    setIsSaved(false);
  }, [subtitle, content, category, tagsInput, coverImage]);

  // Auto estimated read time
  useEffect(() => {
    if (content) {
      setReadTime(estimateReadingTime(content));
    }
  }, [content]);

  // Reset editor form
  const resetEditor = () => {
    setTitle("");
    setSubtitle("");
    setContent("");
    setSlug("");
    setIsCustomSlug(false);
    setCategory("Company Incorporation");
    setCustomCategory("");
    setTagsInput("");
    setCoverImage(PRESET_BANNERS[0].url);
    setAuthorName("Founding Legals Legal Desk");
    setAuthorRole("Senior Corporate Counsel");
    setPublished(true);
    setFeatured(false);
    setReadTime("");
    setEditingBlogId(null);
    setEditorTab("write");
    setIsPublishDrawerOpen(false);
    setIsSaved(true);
  };

  // Start new blog
  const handleStartNewBlog = () => {
    resetEditor();
    setViewMode("editor");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Start editing existing blog
  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlogId(blog.id);
    setTitle(blog.title);
    setSubtitle(blog.excerpt);
    setContent(blog.content);
    setSlug(blog.slug);
    setIsCustomSlug(true);
    if (CATEGORY_OPTIONS.includes(blog.category)) {
      setCategory(blog.category);
      setCustomCategory("");
    } else {
      setCategory("Other");
      setCustomCategory(blog.category);
    }
    setTagsInput(blog.tags.join(", "));
    setCoverImage(blog.coverImage || PRESET_BANNERS[0].url);
    setAuthorName(blog.authorName || "Founding Legals Legal Desk");
    setAuthorRole(blog.authorRole || "Senior Corporate Counsel");
    setPublished(blog.published);
    setFeatured(Boolean(blog.featured));
    setReadTime(blog.readTime || estimateReadingTime(blog.content));
    setViewMode("editor");
    setIsPublishDrawerOpen(false);
    setIsSaved(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Image Upload
  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/blogs/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setCoverImage(data.url);
        showToast("success", "Cover image uploaded successfully!");
      } else {
        showToast("error", data.error || "Failed to upload image");
      }
    } catch {
      showToast("error", "Error uploading image");
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Quick Cover Image Changer from Directory List
  const handleOpenQuickImageModal = (blog: BlogPost) => {
    setQuickImageBlog(blog);
    setQuickImageUrl(blog.coverImage || "");
  };

  const handleQuickImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !quickImageBlog) return;

    setQuickUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/blogs/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setQuickImageUrl(data.url);
        await saveQuickImage(quickImageBlog.id, data.url);
      } else {
        showToast("error", data.error || "Failed to upload image");
      }
    } catch {
      showToast("error", "Error uploading image");
    } finally {
      setQuickUploading(false);
      if (quickFileInputRef.current) quickFileInputRef.current.value = "";
    }
  };

  const saveQuickImage = async (blogId: string, url: string) => {
    if (!url.trim()) {
      showToast("error", "Please provide a valid image URL");
      return;
    }
    setQuickUploading(true);
    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coverImage: url.trim() }),
      });
      if (res.ok) {
        showToast("success", "Cover image updated in real time! Live on /blogs.");
        setBlogs((prev) =>
          prev.map((b) => (b.id === blogId ? { ...b, coverImage: url.trim() } : b))
        );
        setQuickImageBlog(null);
        setQuickImageUrl("");
        router.refresh();
        await loadBlogs(true);
      } else {
        showToast("error", "Failed to update cover image");
      }
    } catch {
      showToast("error", "Network error updating cover image");
    } finally {
      setQuickUploading(false);
    }
  };

  // Inline Body Image Handlers
  const handleBodyImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/blogs/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        insertMarkdown(`\n\n![${cleanName}](${data.url})\n*Illustration: ${cleanName}*\n\n`);
        showToast("success", "Inline illustration uploaded and inserted!");
      } else {
        showToast("error", data.error || "Failed to upload inline image");
      }
    } catch {
      showToast("error", "Error uploading image");
    } finally {
      setUploadingImage(false);
      if (bodyImageInputRef.current) bodyImageInputRef.current.value = "";
    }
  };

  const insertBodyImageUrl = () => {
    if (!bodyImageUrl.trim()) return;
    const caption = bodyImageCaption.trim() || "Illustration";
    insertMarkdown(`\n\n![${caption}](${bodyImageUrl.trim()})\n*Illustration: ${caption}*\n\n`);
    setBodyImageUrl("");
    setBodyImageCaption("");
    setBodyImageUrlPromptOpen(false);
    showToast("success", "Inline image inserted into story!");
  };

  // Toolbar helper for markdown content
  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const textarea = bodyTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const replacement = `${prefix}${selectedText || "text"}${suffix}`;

    const newContent =
      content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + (selectedText.length || 4)
      );
    }, 10);
  };

  // Show Toast notification
  const showToast = (type: "success" | "error", text: string, slug?: string) => {
    setToastMessage({ type, text, slug });
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  // Save / Post Blog
  const handleSaveBlog = async (willPublish: boolean) => {
    if (!title.trim()) {
      showToast("error", "Please write a title for your story.");
      return;
    }
    if (!content.trim()) {
      showToast("error", "Story content cannot be empty.");
      return;
    }

    const finalCategory =
      category === "Other" && customCategory.trim()
        ? customCategory.trim()
        : category;

    setSaving(true);
    try {
      const payload = {
        title: title.trim(),
        slug: slug.trim() || undefined,
        excerpt: subtitle.trim() || title.trim(),
        content: content.trim(),
        coverImage: coverImage.trim() || PRESET_BANNERS[0].url,
        category: finalCategory,
        tags: tagsInput,
        authorName: authorName.trim() || "Founding Legals Legal Desk",
        authorRole: authorRole.trim() || "Senior Corporate Counsel",
        readTime: readTime.trim() || estimateReadingTime(content),
        published: willPublish,
        featured,
      };

      let res;
      if (editingBlogId) {
        res = await fetch(`/api/admin/blogs/${editingBlogId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/admin/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (res.ok && data.blog) {
        setIsSaved(true);
        setIsPublishDrawerOpen(false);
        showToast(
          "success",
          willPublish
            ? `Your story is now LIVE on /blogs!`
            : `Story draft saved securely in Super Admin.`,
          data.blog.slug
        );

        // Update local blogs state immediately
        setBlogs((prev) => {
          const exists = prev.some((b) => b.id === data.blog.id);
          if (exists) {
            return prev.map((b) => (b.id === data.blog.id ? data.blog : b));
          } else {
            return [data.blog, ...prev];
          }
        });

        // Update stats
        setStats((prev) => ({
          total: prev.total + (editingBlogId ? 0 : 1),
          published: prev.published + (willPublish ? 1 : 0),
          drafts: prev.drafts + (willPublish ? 0 : 1),
          totalViews: prev.totalViews,
        }));

        resetEditor();
        setViewMode("list");
        router.refresh();
        await loadBlogs(true);
      } else {
        showToast("error", data.error || "Failed to save blog post");
      }
    } catch {
      showToast("error", "Network error occurred while saving blog post");
    } finally {
      setSaving(false);
    }
  };

  // Toggle publish status directly from list
  const handleTogglePublish = async (blog: BlogPost) => {
    try {
      // Optimistic update
      setBlogs((prev) =>
        prev.map((b) => (b.id === blog.id ? { ...b, published: !b.published } : b))
      );

      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !blog.published }),
      });
      if (res.ok) {
        showToast(
          "success",
          !blog.published
            ? `"${blog.title}" is now LIVE on /blogs!`
            : `"${blog.title}" moved to drafts.`
        );
        router.refresh();
        loadBlogs(true);
      } else {
        // Rollback
        loadBlogs(true);
      }
    } catch {
      showToast("error", "Failed to update publish status");
      loadBlogs(true);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (id: string) => {
    try {
      // Optimistic delete
      setBlogs((prev) => prev.filter((b) => b.id !== id));

      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        showToast("success", "Blog post deleted successfully.");
        setDeleteConfirmId(null);
        router.refresh();
        loadBlogs(true);
      } else {
        showToast("error", "Failed to delete blog post");
        loadBlogs(true);
      }
    } catch {
      showToast("error", "Error deleting blog post");
      loadBlogs(true);
    }
  };

  // Filtered blogs for table
  const filteredBlogs = blogs.filter((blog) => {
    if (categoryFilter !== "All" && blog.category !== categoryFilter) {
      return false;
    }
    if (statusFilter === "published" && !blog.published) return false;
    if (statusFilter === "draft" && blog.published) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = blog.title.toLowerCase().includes(q);
      const matchExcerpt = blog.excerpt.toLowerCase().includes(q);
      const matchTags = blog.tags.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchExcerpt || matchTags;
    }
    return true;
  });

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2B2723] font-sans pb-16">
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-xl flex items-center gap-3 border text-xs max-w-md animate-in slide-in-from-bottom duration-300 ${
            toastMessage.type === "success"
              ? "bg-white text-emerald-950 border-emerald-200 shadow-emerald-500/10"
              : "bg-white text-red-950 border-red-200 shadow-red-500/10"
          }`}
        >
          {toastMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          )}
          <div className="flex-1">
            <p className="font-semibold">{toastMessage.text}</p>
            {toastMessage.slug && (
              <Link
                href={`/blogs/${toastMessage.slug}`}
                target="_blank"
                className="text-xs text-[#5C6F2D] font-bold hover:underline inline-flex items-center gap-1 mt-1"
              >
                View Live Article →
              </Link>
            )}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-gray-600 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 1: MEDIUM-STYLE BLOG WRITING CANVAS
      ========================================================================= */}
      {viewMode === "editor" ? (
        <div className="space-y-6">
          {/* ── Medium Top Editorial Bar ── */}
          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] px-4 sm:px-8 py-3.5 shadow-2xs">
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
              {/* Left: Back button & story status */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (isSaved || confirm("Return to story list? Unsaved changes will be discarded.")) {
                      setViewMode("list");
                      resetEditor();
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>← Stories</span>
                </button>

                <div className="h-4 w-px bg-gray-200 hidden sm:block" />

                <div className="hidden sm:flex items-center gap-2 text-xs">
                  <span className="font-medium text-gray-600">
                    {editingBlogId ? "Editing Article" : "Draft in Founding Legals"}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    {isSaved ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Saved</span>
                      </>
                    ) : (
                      <span>Unsaved changes</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Center: Word count & Read time */}
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 font-medium">
                <span>{wordCount} words</span>
                <span>·</span>
                <span>{readTime || "1 min read"}</span>
              </div>

              {/* Right: Preview & Publish Actions */}
              <div className="flex items-center gap-2">
                {/* Preview / Write Toggle */}
                <button
                  type="button"
                  onClick={() => setEditorTab(editorTab === "write" ? "preview" : "write")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                    editorTab === "preview"
                      ? "bg-[#48532B] text-white border-[#48532B]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{editorTab === "preview" ? "Edit Mode" : "Preview"}</span>
                </button>

                {/* Save Draft */}
                <button
                  type="button"
                  onClick={() => handleSaveBlog(false)}
                  disabled={saving}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
                >
                  Save Draft
                </button>

                {/* Medium-style Publish Button */}
                <button
                  type="button"
                  onClick={() => setIsPublishDrawerOpen(true)}
                  disabled={saving}
                  className="px-4.5 py-1.5 rounded-full bg-[#5C6F2D] hover:bg-[#4a5a24] text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Publish</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </header>

          {/* ── Medium Writing Canvas Container ── */}
          <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
            {editorTab === "write" ? (
              <div className="space-y-6">
                {/* Medium Title Input */}
                <div className="relative">
                  <textarea
                    ref={titleTextareaRef}
                    rows={1}
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    placeholder="Title"
                    className="w-full text-3xl sm:text-5xl font-serif font-bold text-gray-900 placeholder:text-gray-300 focus:outline-none border-none resize-none bg-transparent leading-[1.18] p-0"
                  />
                </div>

                {/* Medium Subtitle / Excerpt Input */}
                <div className="relative">
                  <textarea
                    ref={subtitleTextareaRef}
                    rows={1}
                    value={subtitle}
                    onChange={(e) => {
                      setSubtitle(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    placeholder="Tell your story or write a clear subtitle..."
                    className="w-full text-lg sm:text-2xl font-serif text-gray-500 placeholder:text-gray-300 focus:outline-none border-none resize-none bg-transparent leading-relaxed p-0"
                  />
                </div>

                {/* Real-time Cover Banner Area in Canvas */}
                {coverImage ? (
                  <div className="relative group rounded-2xl overflow-hidden border border-gray-200 aspect-21/9 bg-gray-100 shadow-xs">
                    <img
                      src={coverImage}
                      alt="Story Cover"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage}
                        className="px-3 py-1.5 bg-white text-gray-900 rounded-xl text-xs font-bold shadow-md hover:bg-gray-100 cursor-pointer flex items-center gap-1.5"
                      >
                        <Upload className="w-3.5 h-3.5 text-[#5C6F2D]" />
                        <span>{uploadingImage ? "Uploading..." : "Upload New Image"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsPublishDrawerOpen(true)}
                        className="px-3 py-1.5 bg-white text-gray-900 rounded-xl text-xs font-bold shadow-md hover:bg-gray-100 cursor-pointer flex items-center gap-1.5"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-[#5C6F2D]" />
                        <span>Presets & URL</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCoverImage("")}
                        className="px-3 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-red-700 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#5C6F2D] p-5 sm:p-7 text-center transition-colors bg-white/60 space-y-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#5C6F2D]/10 text-[#5C6F2D] flex items-center justify-center mx-auto">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Add a Cover Image to Your Story</p>
                      <p className="text-[11px] text-gray-400">High-resolution banner that reflects on /blogs feed</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-1 flex-wrap">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage}
                        className="px-3 py-1.5 bg-[#48532B] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#3B4423] cursor-pointer flex items-center gap-1.5"
                      >
                        <Upload className="w-3 h-3" />
                        <span>{uploadingImage ? "Uploading..." : "Upload File"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsPublishDrawerOpen(true)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        Choose Preset or Paste URL
                      </button>
                    </div>
                  </div>
                )}

                {/* Medium Floating Formatting Toolbar */}
                <div className="sticky top-20 z-20 py-2">
                  <div className="bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-2xl shadow-sm px-3 py-2 flex items-center justify-between gap-1 flex-wrap">
                    <div className="flex items-center gap-0.5 sm:gap-1 flex-wrap">
                      <button
                        type="button"
                        onClick={() => insertMarkdown("## ", "\n")}
                        title="Section Heading (H2)"
                        className="px-2 py-1 text-xs font-serif font-bold text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertMarkdown("### ", "\n")}
                        title="Subheading (H3)"
                        className="px-2 py-1 text-xs font-serif font-bold text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        H3
                      </button>

                      <div className="w-px h-4 bg-gray-200 mx-1" />

                      <button
                        type="button"
                        onClick={() => insertMarkdown("**", "**")}
                        title="Bold"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <Bold className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertMarkdown("*", "*")}
                        title="Italic"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <Italic className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertMarkdown("> ", "\n")}
                        title="Quote"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <Quote className="w-3.5 h-3.5" />
                      </button>

                      <div className="w-px h-4 bg-gray-200 mx-1" />

                      <button
                        type="button"
                        onClick={() => insertMarkdown("* ", "\n")}
                        title="Bullet List"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <List className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertMarkdown("1. ", "\n")}
                        title="Numbered List"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <ListOrdered className="w-3.5 h-3.5" />
                      </button>

                      <div className="w-px h-4 bg-gray-200 mx-1" />

                      <button
                        type="button"
                        onClick={() =>
                          insertMarkdown(
                            "\n| Legal Parameter | Requirement |\n|---|---|\n| Item 1 | Details |\n"
                          )
                        }
                        title="Table"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <TableIcon className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertMarkdown("\n```\n", "\n```\n")}
                        title="Code Block"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <Code className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertMarkdown("\n---\n")}
                        title="Divider"
                        className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          insertMarkdown(
                            "\n> [!NOTE]\n> **Founding Legals Counsel**: Key statutory advice for founders.\n\n"
                          )
                        }
                        title="Add Callout Box"
                        className="px-2 py-1 text-[11px] font-bold text-[#48532B] hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        + Legal Note
                      </button>
                    </div>

                    {/* Image Tools */}
                    <div className="flex items-center gap-1 border-l border-gray-200 pl-1.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage}
                        title="Upload or Change Story Cover Image"
                        className="px-2.5 py-1 text-[11px] font-bold text-[#5C6F2D] hover:bg-[#5C6F2D]/10 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>{coverImage ? "Cover" : "+ Cover"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => bodyImageInputRef.current?.click()}
                        disabled={uploadingImage}
                        title="Upload Inline Illustration into Story Body"
                        className="px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Upload className="w-3 h-3 text-gray-500" />
                        <span>+ Body Img</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setBodyImageUrlPromptOpen(true)}
                        title="Insert Image from URL into Story Body"
                        className="px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                      >
                        URL
                      </button>
                    </div>
                  </div>
                </div>

                {/* Medium Story Body Canvas */}
                <div className="pt-2">
                  <textarea
                    ref={bodyTextareaRef}
                    rows={20}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tell your story... You can use Markdown or the toolbar above to add headings, quotes, tables, and lists."
                    className="w-full text-base sm:text-lg font-serif text-gray-800 placeholder:text-gray-300 focus:outline-none border-none resize-y min-h-[480px] bg-transparent leading-[1.8] p-0"
                  />
                </div>
              </div>
            ) : (
              /* Live Medium Article Reader Simulation Preview */
              <div className="space-y-8 bg-white p-6 sm:p-12 rounded-3xl border border-[#E5E0D8] shadow-sm">
                <div className="space-y-4 border-b border-gray-100 pb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5C6F2D]/10 text-[#48532B]">
                    {category}
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1E1B18] leading-[1.18]">
                    {title || "Untitled Story"}
                  </h1>
                  {subtitle && (
                    <p className="text-lg sm:text-xl font-serif text-gray-600 leading-relaxed font-light">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex items-center gap-3 pt-2 text-xs text-gray-500">
                    <span>By {authorName}</span>
                    <span>·</span>
                    <span>{readTime || "5 min read"}</span>
                  </div>
                </div>

                {coverImage && (
                  <div className="rounded-2xl overflow-hidden aspect-video border border-gray-100">
                    <img
                      src={coverImage}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="prose prose-stone max-w-none text-[#2B2723] space-y-6 leading-relaxed font-serif text-base sm:text-lg">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ ...props }) => (
                        <h2
                          className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mt-8 mb-4 border-b border-gray-100 pb-2"
                          {...props}
                        />
                      ),
                      h3: ({ ...props }) => (
                        <h3
                          className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mt-6 mb-3"
                          {...props}
                        />
                      ),
                      p: ({ ...props }) => (
                        <p className="text-gray-800 leading-[1.8] my-4" {...props} />
                      ),
                      blockquote: ({ ...props }) => (
                        <blockquote
                          className="border-l-4 border-[#5C6F2D] pl-4 italic text-gray-700 my-6 bg-[#5C6F2D]/5 py-2 pr-3 rounded-r-lg"
                          {...props}
                        />
                      ),
                      table: ({ ...props }) => (
                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl">
                          <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm font-sans" {...props} />
                        </div>
                      ),
                      th: ({ ...props }) => (
                        <th className="bg-gray-50 px-3 py-2 text-left font-bold text-gray-900" {...props} />
                      ),
                      td: ({ ...props }) => (
                        <td className="px-3 py-2 border-t border-gray-100 text-gray-700" {...props} />
                      ),
                      img: ({ src, alt, ...props }) => (
                        <figure className="my-6 space-y-2">
                          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                            <img
                              src={src}
                              alt={alt || "Illustration"}
                              className="w-full h-auto max-h-[480px] object-cover"
                              loading="lazy"
                              {...props}
                            />
                          </div>
                          {alt && (
                            <figcaption className="text-center text-xs text-gray-400 italic">
                              {alt}
                            </figcaption>
                          )}
                        </figure>
                      ),
                    }}
                  >
                    {content || "*No story content written yet.*"}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </main>

          {/* ── Hidden File Upload Inputs ── */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageFileChange}
            className="hidden"
          />
          <input
            ref={bodyImageInputRef}
            type="file"
            accept="image/*"
            onChange={handleBodyImageFileChange}
            className="hidden"
          />
          <input
            ref={quickFileInputRef}
            type="file"
            accept="image/*"
            onChange={handleQuickImageFileChange}
            className="hidden"
          />

          {/* ── Medium-Style Story Publishing Drawer / Modal ── */}
          {isPublishDrawerOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">
                      Story Publication Details
                    </h3>
                    <p className="text-xs text-gray-500">
                      Review how your story will appear on the Founding Legals public /blogs feed.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPublishDrawerOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Story Preview Card */}
                <div className="bg-[#FAF9F6] p-4.5 rounded-2xl border border-gray-200 space-y-3">
                  <div className="flex gap-4">
                    <div className="w-28 h-20 rounded-xl overflow-hidden bg-gray-200 shrink-0 border border-gray-200">
                      {coverImage ? (
                        <img
                          src={coverImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">
                          No Cover
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C6F2D] block mb-1">
                        {category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug line-clamp-1 font-serif">
                        {title || "Untitled Story"}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                        {subtitle || "No subtitle provided."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200/80 text-[11px] text-gray-500">
                    <span>By {authorName}</span>
                    <span>{readTime || "5 min read"}</span>
                  </div>
                </div>

                {/* Cover Image Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700">
                    Story Cover Image
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      placeholder="Paste image URL..."
                      className="flex-1 px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadingImage}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold shrink-0 cursor-pointer"
                    >
                      {uploadingImage ? "Uploading..." : "Upload File"}
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    <span className="text-[10.5px] text-gray-400 font-semibold mr-1">Presets:</span>
                    {PRESET_BANNERS.map((b) => (
                      <button
                        key={b.name}
                        type="button"
                        onClick={() => setCoverImage(b.url)}
                        className={`text-[10px] px-2 py-1 rounded-lg border transition-colors cursor-pointer ${
                          coverImage === b.url
                            ? "bg-[#48532B] text-white border-[#48532B]"
                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700">
                    Story Category / Topic
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none"
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                    <option value="Other">+ Custom Category...</option>
                  </select>

                  {category === "Other" && (
                    <input
                      type="text"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      placeholder="Type custom category name..."
                      className="w-full px-3 py-2 mt-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-800"
                    />
                  )}
                </div>

                {/* Topic Tags */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700">
                    Topic Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="e.g. Pvt Ltd, MCA, Vesting, Tax Exemption, Startup India"
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800"
                  />
                </div>

                {/* URL Slug */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-700">
                      SEO URL Slug
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsCustomSlug(!isCustomSlug)}
                      className="text-[11px] font-bold text-[#5C6F2D] hover:underline cursor-pointer"
                    >
                      {isCustomSlug ? "Reset to Auto" : "Customize Slug"}
                    </button>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-200 text-gray-600">
                    <span className="text-gray-400">/blogs/</span>
                    {isCustomSlug ? (
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(slugify(e.target.value))}
                        className="flex-1 bg-white px-2 py-0.5 border border-gray-300 rounded font-bold text-gray-900 focus:outline-none"
                      />
                    ) : (
                      <span className="font-bold text-[#48532B]">{slug || "story-slug"}</span>
                    )}
                  </div>
                </div>

                {/* Featured Story Toggle */}
                <div className="flex items-center justify-between p-3.5 bg-[#FAF9F6] rounded-xl border border-gray-200">
                  <div>
                    <span className="text-xs font-bold text-gray-800 block">
                      Pin as Featured Hero Story
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Displays prominently at the top of the /blogs feed
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFeatured(!featured)}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      featured ? "bg-amber-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        featured ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Final Publish Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleSaveBlog(false)}
                    disabled={saving}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Save as Unlisted Draft
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPublishDrawerOpen(false)}
                      className="px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-800 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSaveBlog(true)}
                      disabled={saving}
                      className="px-6 py-2.5 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white text-xs font-bold rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{saving ? "Publishing..." : "Publish Now to /blogs"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* =========================================================================
            VIEW MODE 2: ALL BLOGS LIST & MANAGEMENT DIRECTORY
        ========================================================================= */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Top Header & Quick Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#5C6F2D]/10 text-[#48532B]">
                  <PenSquare className="w-5 h-5" />
                </span>
                <h1 className="text-2xl font-serif font-bold text-[#1E1B18]">
                  Founding Legals Editorial Studio
                </h1>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Write in Medium-style distraction-free canvas and publish corporate legal guides to{" "}
                <span className="font-mono text-[#5C6F2D] font-bold">/blogs</span>.
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={handleStartNewBlog}
                className="px-5 py-2.5 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-xs transition-all hover:shadow-md cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Write Story (Medium Style)</span>
              </button>

              <Link
                href="/blogs"
                target="_blank"
                className="px-3.5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors"
                title="Open Live /blogs section"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </Link>

              <button
                onClick={() => loadBlogs(true)}
                disabled={refreshing}
                className="p-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-full transition-colors cursor-pointer"
                title="Refresh Stories"
              >
                <RefreshCw
                  className={`w-4 h-4 ${refreshing ? "animate-spin text-[#48532B]" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  Total Stories
                </span>
                <BookOpen className="w-4 h-4 text-[#48532B]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</div>
              <span className="text-[10px] text-gray-400">All authored posts</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  Live on /blogs
                </span>
                <Globe className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-700 mt-1">{stats.published}</div>
              <span className="text-[10px] text-emerald-600 font-medium">Publicly active</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  Drafts
                </span>
                <Lock className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-700 mt-1">{stats.drafts}</div>
              <span className="text-[10px] text-gray-400">Unpublished stories</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  Total Reads
                </span>
                <Eye className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mt-1">{stats.totalViews}</div>
              <span className="text-[10px] text-gray-400">Public article views</span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0D8] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, tag, or content..."
                  className="w-full pl-9 pr-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#48532B]"
                />
              </div>

              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Tabs */}
            <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-xl border border-gray-200 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  statusFilter === "all"
                    ? "bg-white text-gray-900 shadow-2xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                All ({blogs.length})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("published")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  statusFilter === "published"
                    ? "bg-white text-emerald-800 shadow-2xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Published ({stats.published})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("draft")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  statusFilter === "draft"
                    ? "bg-white text-amber-800 shadow-2xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Drafts ({stats.drafts})
              </button>
            </div>
          </div>

          {/* Blogs Table / Cards */}
          {loading ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-[#E5E0D8]">
              <div className="w-8 h-8 border-2 border-[#48532B] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs text-gray-500">Loading stories...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-[#E5E0D8] space-y-3">
              <FileText className="w-10 h-10 text-gray-300 mx-auto" />
              <h3 className="text-sm font-bold text-gray-700">No stories found</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                No articles match your current search or filter criteria.
              </p>
              <button
                onClick={handleStartNewBlog}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5C6F2D] text-white text-xs font-bold rounded-full shadow-xs hover:bg-[#4a5a24] cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write Story</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl border border-[#E5E0D8] p-4.5 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left: Thumbnail & Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      onClick={() => handleOpenQuickImageModal(blog)}
                      title="Click to change story cover image in real time"
                      className="w-20 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-gray-100 relative group/thumb cursor-pointer"
                    >
                      <img
                        src={blog.coverImage || PRESET_BANNERS[0].url}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[9.5px] font-bold gap-0.5">
                        <Camera className="w-3.5 h-3.5" />
                        <span>Change</span>
                      </div>
                      {blog.featured && (
                        <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 shadow-2xs">
                          Hero
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#5C6F2D]/10 text-[#48532B]">
                          {blog.category}
                        </span>

                        {blog.published ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Live on /blogs
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            Draft
                          </span>
                        )}

                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Eye className="w-3 h-3 text-gray-400" />
                          {blog.views || 0} reads
                        </span>

                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          {blog.readTime || "5 min read"}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug line-clamp-1 hover:text-[#48532B] transition-colors font-serif">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-1 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-400">
                        <span>By {blog.authorName}</span>
                        <span>•</span>
                        <span>
                          {blog.publishedAt
                            ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "Draft"}
                        </span>
                        <span>•</span>
                        <span className="font-mono text-[10.5px] text-gray-400 truncate">
                          /blogs/{blog.slug}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0">
                    <Link
                      href={`/blogs/${blog.slug}${!blog.published ? "?preview=true" : ""}`}
                      target="_blank"
                      className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 transition-colors"
                      title={blog.published ? "View live article" : "Preview draft"}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleTogglePublish(blog)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        blog.published
                          ? "bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200"
                          : "bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200"
                      }`}
                      title={blog.published ? "Unpublish and move to Drafts" : "Publish Live"}
                    >
                      {blog.published ? "Unpublish" : "Go Live"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenQuickImageModal(blog)}
                      className="px-2.5 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                      title="Quick change story cover image"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#5C6F2D]" />
                      <span className="hidden sm:inline">Cover</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEditBlog(blog)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#5C6F2D]/10 hover:bg-[#5C6F2D]/20 text-[#48532B] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    {deleteConfirmId === blog.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="px-2.5 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 cursor-pointer"
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteConfirmId(null)}
                          className="px-2 py-1.5 bg-gray-100 text-gray-600 rounded-xl text-xs hover:bg-gray-200 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setDeleteConfirmId(blog.id)}
                        className="p-2 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                        title="Delete story"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Quick Image Changer Modal (Directory List) ── */}
      {quickImageBlog && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-gray-900 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#5C6F2D]" />
                  <span>Update Story Cover Image</span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 truncate max-w-sm sm:max-w-md">
                  {quickImageBlog.title}
                </p>
              </div>
              <button
                onClick={() => setQuickImageBlog(null)}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Current Preview */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                Live Preview
              </span>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                {quickImageUrl ? (
                  <img
                    src={quickImageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                    No image selected
                  </div>
                )}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 text-[#48532B] shadow-2xs">
                  {quickImageBlog.category}
                </div>
              </div>
            </div>

            {/* 1. Upload Option */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-800 block">
                1. Upload from Computer
              </span>
              <button
                type="button"
                onClick={() => quickFileInputRef.current?.click()}
                disabled={quickUploading}
                className="w-full py-3 border-2 border-dashed border-gray-300 hover:border-[#5C6F2D] hover:bg-[#5C6F2D]/5 rounded-2xl text-xs font-bold text-gray-700 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                <Upload className="w-4 h-4 text-[#5C6F2D]" />
                <span>{quickUploading ? "Uploading & Updating..." : "Choose Local File (PNG, JPG, WebP)"}</span>
              </button>
            </div>

            {/* 2. Paste URL Option */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-800 block">
                2. Or Paste Image URL
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={quickImageUrl}
                  onChange={(e) => setQuickImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="flex-1 px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#48532B]"
                />
                <button
                  type="button"
                  onClick={() => saveQuickImage(quickImageBlog.id, quickImageUrl)}
                  disabled={quickUploading || !quickImageUrl.trim()}
                  className="px-4 py-2 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                >
                  Save URL
                </button>
              </div>
            </div>

            {/* 3. Preset Gallery */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-gray-800 block">
                3. Or Pick a Curated Preset
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRESET_BANNERS.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => {
                      setQuickImageUrl(preset.url);
                      saveQuickImage(quickImageBlog.id, preset.url);
                    }}
                    className={`p-2 rounded-xl border text-left space-y-1.5 transition-all hover:border-[#5C6F2D] cursor-pointer ${
                      quickImageUrl === preset.url
                        ? "border-[#5C6F2D] bg-[#5C6F2D]/5 ring-2 ring-[#5C6F2D]/20"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="aspect-16/9 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-700 block truncate">
                      {preset.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span>Changes reflect in real time on public /blogs</span>
              <button
                type="button"
                onClick={() => setQuickImageBlog(null)}
                className="text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Body Image URL Prompt Modal ── */}
      {bodyImageUrlPromptOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-base font-serif font-bold text-gray-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#5C6F2D]" />
                <span>Insert Web Image into Story</span>
              </h3>
              <button
                onClick={() => setBodyImageUrlPromptOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  value={bodyImageUrl}
                  onChange={(e) => setBodyImageUrl(e.target.value)}
                  placeholder="https://example.com/image.png"
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#48532B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Caption / Description
                </label>
                <input
                  type="text"
                  value={bodyImageCaption}
                  onChange={(e) => setBodyImageCaption(e.target.value)}
                  placeholder="e.g. MCA Annual Compliance Process Diagram"
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#48532B]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setBodyImageUrlPromptOpen(false)}
                className="px-3.5 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={insertBodyImageUrl}
                disabled={!bodyImageUrl.trim()}
                className="px-4 py-2 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer disabled:opacity-50"
              >
                Insert into Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
