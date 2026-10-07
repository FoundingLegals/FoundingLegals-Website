"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Star,
  MessageSquare,
  Building2,
  Mail,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Search,
  Trash2,
  Filter,
  Eye,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface FeedbackItem {
  id: string;
  full_name: string;
  company_name: string;
  designation: string;
  email: string;
  service_name: string;
  rating: number;
  feedback: string;
  photo_url: string | null;
  company_logo_url: string | null;
  permission_to_publish: boolean;
  created_at: string;
}

export default function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "approved" | "private">("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (text: string) => {
    setToastMessage(text);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const loadFeedbacks = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/admin/feedback");
      if (res.ok) {
        const data = await res.json();
        if (data.feedbacks) {
          setFeedbacks(data.feedbacks);
        }
      }
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const handleTogglePublish = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/feedback/${id}`, {
        method: "PATCH",
      });
      if (res.ok) {
        const data = await res.json();
        showToast(data.message || "Feedback status updated.");
        // Update state locally
        setFeedbacks((prev) =>
          prev.map((f) =>
            f.id === id ? { ...f, permission_to_publish: !f.permission_to_publish } : f
          )
        );
      }
    } catch {
      showToast("Failed to toggle feedback publication status.");
    }
  };

  const handleDeleteFeedback = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/feedback/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        showToast("Feedback record deleted successfully.");
        setDeleteConfirmId(null);
        setFeedbacks((prev) => prev.filter((f) => f.id !== id));
      }
    } catch {
      showToast("Failed to delete feedback record.");
    }
  };

  const filteredFeedbacks = useMemo(() => {
    return feedbacks.filter((item) => {
      if (statusFilter === "approved" && !item.permission_to_publish) return false;
      if (statusFilter === "private" && item.permission_to_publish) return false;
      if (ratingFilter !== "all" && item.rating.toString() !== ratingFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.full_name.toLowerCase().includes(q);
        const matchCompany = item.company_name.toLowerCase().includes(q);
        const matchEmail = item.email.toLowerCase().includes(q);
        const matchService = item.service_name.toLowerCase().includes(q);
        const matchText = item.feedback.toLowerCase().includes(q);
        return matchName || matchCompany || matchEmail || matchService || matchText;
      }

      return true;
    });
  }, [feedbacks, statusFilter, ratingFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-white border border-gray-200 shadow-xl text-xs font-semibold text-gray-800 animate-in slide-in-from-bottom">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#5C6F2D]/10 text-[#48532B]">
              <MessageSquare className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-serif font-bold text-[#1E1B18]">
              Client Feedback Management
            </h1>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Real-time founder reviews and NPS entries submitted via{" "}
            <span className="font-mono text-[#5C6F2D] font-bold">/client-feedback</span>.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/client-feedback"
            target="_blank"
            className="px-3.5 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <span>Public Form</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </Link>

          <button
            onClick={() => loadFeedbacks(true)}
            disabled={refreshing || loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-[#48532B]" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Metric summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Total Reviews</span>
          <div className="text-3xl font-bold text-gray-900 mt-1">{feedbacks.length}</div>
          <span className="text-[10px] text-gray-400">All founder submissions</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Average Rating</span>
          <div className="text-3xl font-bold text-gray-900 mt-1 flex items-center gap-2">
            {feedbacks.length > 0
              ? (
                  feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
                ).toFixed(1)
              : "5.0"}
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
          <span className="text-[10px] text-gray-400">Overall client satisfaction</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Publish Consent</span>
          <div className="text-3xl font-bold text-emerald-600 mt-1">
            {feedbacks.filter((f) => f.permission_to_publish).length}
          </div>
          <span className="text-[10px] text-emerald-600 font-medium">Approved for public testimonials</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E5E0D8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, company, email, service..."
            className="w-full pl-9 pr-3.5 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#48532B]"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Rating filter */}
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-3 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 focus:outline-none"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          {/* Status filter */}
          <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-xl border border-gray-200">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                statusFilter === "all" ? "bg-white text-gray-900 shadow-2xs" : "text-gray-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter("approved")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                statusFilter === "approved" ? "bg-white text-emerald-800 shadow-2xs" : "text-gray-500"
              }`}
            >
              Approved
            </button>
            <button
              onClick={() => setStatusFilter("private")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                statusFilter === "private" ? "bg-white text-amber-800 shadow-2xs" : "text-gray-500"
              }`}
            >
              Private
            </button>
          </div>
        </div>
      </div>

      {/* Feedbacks List */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#E5E0D8]">
            <div className="w-8 h-8 border-2 border-[#48532B] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs text-gray-500">Loading client feedback...</p>
          </div>
        ) : filteredFeedbacks.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#E5E0D8] space-y-2">
            <MessageSquare className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-semibold text-gray-800 text-sm">No feedback matches filters</h3>
            <p className="text-xs text-gray-400">
              Clear filters or submit feedback from /client-feedback to test.
            </p>
          </div>
        ) : (
          filteredFeedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E5E0D8] shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base text-gray-900">{item.full_name}</h3>
                    <span className="text-xs text-gray-400 font-normal">
                      · {item.designation}, <span className="font-medium text-gray-600">{item.company_name}</span>
                    </span>

                    {/* Publish Consent Badge */}
                    {item.permission_to_publish ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Approved to Publish
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200">
                        <XCircle className="w-3 h-3 text-gray-400" /> Internal Only
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 text-gray-600 font-mono text-[11px]">
                      <Mail className="w-3.5 h-3.5 text-gray-400" /> {item.email}
                    </span>
                    <span>·</span>
                    <span className="bg-[#FAF9F6] border border-gray-200 px-2.5 py-0.5 rounded-lg text-gray-700 font-semibold text-[11px]">
                      {item.service_name}
                    </span>
                    <span>·</span>
                    <span className="text-gray-400 flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {new Date(item.created_at).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < item.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Toggle publish button */}
                  <button
                    onClick={() => handleTogglePublish(item.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      item.permission_to_publish
                        ? "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                        : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                    }`}
                    title="Toggle publication consent"
                  >
                    {item.permission_to_publish ? "Make Private" : "Approve Public"}
                  </button>

                  {/* Delete button */}
                  {deleteConfirmId === item.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDeleteFeedback(item.id)}
                        className="px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 cursor-pointer"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg hover:bg-gray-200 cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirmId(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete review"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Verbatim Feedback Text */}
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-gray-100 text-gray-800 text-xs sm:text-sm leading-relaxed">
                &ldquo;{item.feedback}&rdquo;
              </div>

              {/* Photo / Logo Thumbnails if any */}
              {(item.photo_url || item.company_logo_url) && (
                <div className="flex items-center gap-3 pt-1">
                  {item.photo_url && (
                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                      <span className="font-bold">Client Photo:</span>
                      <img
                        src={item.photo_url}
                        alt="Photo"
                        className="w-6 h-6 rounded-full object-cover border"
                      />
                    </div>
                  )}
                  {item.company_logo_url && (
                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                      <span className="font-bold">Company Logo:</span>
                      <img
                        src={item.company_logo_url}
                        alt="Logo"
                        className="h-6 w-auto object-contain border rounded px-1"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
