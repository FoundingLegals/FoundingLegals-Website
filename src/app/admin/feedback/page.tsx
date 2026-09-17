"use client";

import { useState, useEffect } from "react";
import { Star, MessageSquare, Building2, Mail, CheckCircle2, XCircle, RefreshCw } from "lucide-react";

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

  const loadFeedbacks = async () => {
    setLoading(true);
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
    }
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#1E1B18]">
            Client Feedback Management
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            All submitted founder reviews and satisfaction entries stored in feedback.json
          </p>
        </div>

        <button
          onClick={loadFeedbacks}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs transition-colors cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-olive-600" : ""}`} />
          <span>Refresh Entries</span>
        </button>
      </div>

      {/* Metric summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-xs text-gray-400 font-bold uppercase">Total Reviews</span>
          <div className="text-3xl font-bold text-gray-900 mt-1">{feedbacks.length}</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-xs text-gray-400 font-bold uppercase">Average Rating</span>
          <div className="text-3xl font-bold text-gray-900 mt-1 flex items-center gap-2">
            {feedbacks.length > 0
              ? (
                  feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
                ).toFixed(1)
              : "5.0"}
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-xs text-gray-400 font-bold uppercase">Publish Consent</span>
          <div className="text-3xl font-bold text-emerald-600 mt-1">
            {feedbacks.filter((f) => f.permission_to_publish).length}
          </div>
        </div>
      </div>

      {/* Feedbacks List */}
      <div className="space-y-4">
        {loading ? (
          <div className="p-12 text-center text-xs text-gray-400">Loading client feedback...</div>
        ) : feedbacks.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#E5E0D8]">
            <MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 text-sm">No Client Feedback Yet</h3>
            <p className="text-xs text-gray-400 mt-1">
              Submissions from /client-feedback will be displayed here in real time.
            </p>
          </div>
        ) : (
          feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-[#E5E0D8] shadow-xs hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-base text-gray-900">{item.full_name}</h3>
                    <span className="text-xs text-gray-400 font-normal">
                      · {item.designation}, {item.company_name}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-gray-400" /> {item.email}
                    </span>
                    <span>·</span>
                    <span className="bg-gray-100 px-2.5 py-0.5 rounded text-gray-700 font-medium">
                      {item.service_name}
                    </span>
                    <span>·</span>
                    <span className="text-gray-400">
                      {new Date(item.created_at).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start">
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

                  {/* Publish Consent Badge */}
                  {item.permission_to_publish ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" /> Approved to Publish
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                      <XCircle className="w-3 h-3" /> Private Internal
                    </span>
                  )}
                </div>
              </div>

              {/* Feedback Text */}
              <p className="text-sm text-gray-700 bg-[#FAF9F6] p-4 rounded-xl border border-gray-100 leading-relaxed italic">
                &ldquo;{item.feedback}&rdquo;
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
