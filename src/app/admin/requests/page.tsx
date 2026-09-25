"use client";

import { useState, useEffect, useMemo } from "react";
import {
  ClipboardList,
  Search,
  Download,
  RefreshCw,
  Phone,
  Mail,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageSquare,
  Copy,
  Check,
  Trash2,
  Filter,
  Eye,
  X,
  Send,
  FileText,
  AlertCircle,
  HelpCircle,
  Briefcase,
  Layers,
} from "lucide-react";
import { ServiceRequest, ServiceCategory, RequestStatus } from "@/lib/db/serviceRequests";

const CATEGORIES: { label: string; value: ServiceCategory | "All"; color: string }[] = [
  { label: "All Services", value: "All", color: "bg-gray-100 text-gray-700" },
  { label: "CA Services", value: "CA Services", color: "bg-[#48532B]/10 text-[#48532B] border-[#48532B]/20" },
  { label: "Company Incorporation", value: "Company Incorporation", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  { label: "Licenses & Registrations", value: "Licenses & Registrations", color: "bg-amber-50 text-amber-800 border-amber-200" },
  { label: "Legal Services", value: "Legal Services", color: "bg-blue-50 text-blue-800 border-blue-200" },
];

export default function AdminServiceRequestsPage() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "All">("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);
  const [internalNotes, setInternalNotes] = useState("");
  const [saveNoteSuccess, setSaveNoteSuccess] = useState(false);

  // Load service requests from admin API
  const loadRequests = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/admin/service-requests");
      if (res.ok) {
        const data = await res.json();
        if (data.requests) {
          setRequests(data.requests);
        }
      }
    } catch (err) {
      console.error("Failed to load requests:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  // Update notes state when modal opens
  useEffect(() => {
    if (selectedRequest) {
      setInternalNotes(selectedRequest.notes || "");
      setSaveNoteSuccess(false);
    }
  }, [selectedRequest]);

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Status update
  const handleStatusChange = async (id: string, newStatus: RequestStatus, notesToSave?: string) => {
    setUpdatingStatusId(id);
    try {
      const res = await fetch("/api/admin/service-requests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          status: newStatus,
          notes: notesToSave !== undefined ? notesToSave : undefined,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setRequests((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: newStatus, notes: notesToSave ?? r.notes } : r))
        );
        if (selectedRequest && selectedRequest.id === id) {
          setSelectedRequest((prev) =>
            prev ? { ...prev, status: newStatus, notes: notesToSave ?? prev.notes } : null
          );
        }
        if (notesToSave !== undefined) {
          setSaveNoteSuccess(true);
          setTimeout(() => setSaveNoteSuccess(false), 2500);
        }
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingStatusId(null);
    }
  };

  // Delete request
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service request? This cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/service-requests?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRequests((prev) => prev.filter((r) => r.id !== id));
        if (selectedRequest?.id === id) {
          setSelectedRequest(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete request:", err);
    }
  };

  // Computed metrics
  const stats = useMemo(() => {
    return {
      total: requests.length,
      caServices: requests.filter((r) => r.category === "CA Services").length,
      incorporation: requests.filter((r) => r.category === "Company Incorporation").length,
      licenses: requests.filter((r) => r.category === "Licenses & Registrations").length,
      legal: requests.filter((r) => r.category === "Legal Services").length,
      pending: requests.filter((r) => r.status === "pending").length,
      contacted: requests.filter((r) => r.status === "contacted").length,
      completed: requests.filter((r) => r.status === "completed").length,
    };
  }, [requests]);

  // Filtered requests
  const filteredRequests = useMemo(() => {
    return requests.filter((item) => {
      // Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== "All" && item.status !== selectedStatus) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMobile = item.mobile.toLowerCase().includes(q);
        const matchesEmail = item.email.toLowerCase().includes(q);
        const matchesService = item.service_name.toLowerCase().includes(q);
        const matchesCompany = item.company_name?.toLowerCase().includes(q) || false;
        const matchesCity = item.city?.toLowerCase().includes(q) || false;
        if (!matchesName && !matchesMobile && !matchesEmail && !matchesService && !matchesCompany && !matchesCity) {
          return false;
        }
      }

      return true;
    });
  }, [requests, selectedCategory, selectedStatus, searchQuery]);

  // Clean WhatsApp phone number link
  const getWhatsAppLink = (mobile: string, name: string, serviceName: string) => {
    const digits = mobile.replace(/\D/g, "");
    const phoneWithCode = digits.startsWith("91") ? digits : `91${digits}`;
    const text = encodeURIComponent(
      `Hello ${name}, thank you for opting for ${serviceName} with Founding Legals! How can we assist you today?`
    );
    return `https://wa.me/${phoneWithCode}?text=${text}`;
  };

  const getCategoryBadgeClass = (category: ServiceCategory) => {
    switch (category) {
      case "CA Services":
        return "bg-[#48532B]/10 text-[#48532B] border-[#48532B]/25";
      case "Company Incorporation":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Licenses & Registrations":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Legal Services":
        return "bg-blue-50 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusBadgeClass = (status: RequestStatus) => {
    switch (status) {
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "contacted":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "in_progress":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "completed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "cancelled":
        return "bg-gray-100 text-gray-500 border-gray-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* ── Top Header Section ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E0D8]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B18] tracking-tight">
              Service Requests &amp; Opted Services
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase rounded-md tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Live Feed
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real-time requests received from website forms, categorized by CA Services, Incorporation, and Legal filings.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <a
            href={`/api/admin/service-requests/export?category=${encodeURIComponent(selectedCategory)}`}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#48532B] hover:bg-[#394222] text-white rounded-xl text-xs font-bold shadow-xs hover:shadow transition-all"
            title="Download CSV for current selection"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </a>

          <button
            onClick={() => loadRequests(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[#E5E0D8] hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-[#48532B]" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* ── Key Metrics Cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Total Opted
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mt-1">
            {stats.total}
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">All service submissions</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] font-bold text-[#48532B] uppercase tracking-wider block">
            CA Services
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-[#48532B] mt-1">
            {stats.caServices}
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">GST, Audits &amp; Tax filings</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
            Incorporation
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700 mt-1">
            {stats.incorporation}
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">Pvt Ltd, LLP, OPC</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
            Licenses &amp; Legal
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-700 mt-1">
            {stats.licenses + stats.legal}
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">FSSAI, Trademark, IP</span>
        </div>

        <div className="col-span-2 sm:col-span-1 bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E0D8] shadow-xs">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
            Pending Action
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-red-600 mt-1 flex items-center gap-2">
            {stats.pending}
            {stats.pending > 0 && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            )}
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">Awaiting initial call</span>
        </div>
      </div>

      {/* ── Category Filter Tabs (Pills) ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          const count =
            cat.value === "All"
              ? stats.total
              : cat.value === "CA Services"
              ? stats.caServices
              : cat.value === "Company Incorporation"
              ? stats.incorporation
              : cat.value === "Licenses & Registrations"
              ? stats.licenses
              : cat.value === "Legal Services"
              ? stats.legal
              : 0;

          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer border ${
                isSelected
                  ? "bg-[#48532B] text-white border-[#48532B] shadow-xs"
                  : "bg-white text-gray-600 hover:text-gray-900 border-[#E5E0D8] hover:bg-gray-50"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Search & Secondary Filters Bar ── */}
      <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name, mobile (+91), email, or service..."
            className="w-full pl-10 pr-9 py-2 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#48532B] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status Dropdown Filter */}
        <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-gray-400 font-semibold flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Status:
          </span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 bg-[#FAF9F6] border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#48532B] cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <span className="text-xs font-medium text-gray-400 pl-2 border-l border-gray-200">
            Showing <strong className="text-gray-800">{filteredRequests.length}</strong> of {requests.length}
          </span>
        </div>
      </div>

      {/* ── Main Showcase Table ── */}
      <div className="bg-white rounded-2xl border border-[#E5E0D8] shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-16 text-center text-xs text-gray-400 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-2 border-[#48532B] border-t-transparent rounded-full animate-spin" />
            <span>Loading service requests...</span>
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="p-16 text-center">
            <ClipboardList className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 text-sm">No Service Requests Found</h3>
            <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
              {searchQuery || selectedCategory !== "All" || selectedStatus !== "All"
                ? "Try clearing your search query or adjusting your filters."
                : "When users opt for services on the website, their full form submissions and mobile numbers will display here in real time."}
            </p>
            {(searchQuery || selectedCategory !== "All" || selectedStatus !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-[#E5E0D8] text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3.5 px-4">Client / Startup</th>
                  <th className="py-3.5 px-4 font-extrabold text-[#48532B]">Mobile Number</th>
                  <th className="py-3.5 px-4">Email Address</th>
                  <th className="py-3.5 px-4">Service Opted For</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Date &amp; Time (IST)</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Form Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRequests.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-[#FAF9F6]/80 transition-colors group cursor-pointer"
                      onClick={() => setSelectedRequest(item)}
                    >
                      {/* 1. Client / Startup */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#48532B]/10 text-[#48532B] font-bold text-xs flex items-center justify-center shrink-0">
                            {item.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <span className="font-bold text-gray-900 block group-hover:text-[#48532B] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-gray-400 block truncate max-w-[150px]">
                              {item.company_name || item.city || "Founder"}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* 2. Mobile Number (Key feature requested by user) */}
                      <td className="py-4 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="inline-flex items-center gap-1.5 bg-[#FAF9F6] border border-gray-200 px-2.5 py-1.5 rounded-xl">
                          <Phone className="w-3 h-3 text-[#48532B]" />
                          <span className="font-mono font-bold text-gray-900 text-xs tracking-tight">
                            {item.mobile}
                          </span>

                          {/* Quick Copy */}
                          <button
                            onClick={() => handleCopy(item.mobile, `mob_${item.id}`)}
                            title="Copy Mobile Number"
                            className="p-1 hover:bg-gray-200 rounded-md text-gray-400 hover:text-gray-700 transition-colors cursor-pointer ml-1"
                          >
                            {copiedId === `mob_${item.id}` ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>

                          {/* Direct WhatsApp Link */}
                          <a
                            href={getWhatsAppLink(item.mobile, item.name, item.service_name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat on WhatsApp"
                            className="p-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-md transition-colors cursor-pointer"
                          >
                            <Send className="w-3 h-3" />
                          </a>

                          {/* Direct Call Link */}
                          <a
                            href={`tel:${item.mobile.replace(/\s+/g, "")}`}
                            title="Direct Phone Call"
                            className="p-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md transition-colors cursor-pointer"
                          >
                            <Phone className="w-3 h-3" />
                          </a>
                        </div>
                      </td>

                      {/* 3. Email Address */}
                      <td className="py-4 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={`mailto:${item.email}?subject=${encodeURIComponent(
                            `Founding Legals: ${item.service_name}`
                          )}`}
                          className="text-gray-600 hover:text-gray-900 hover:underline inline-flex items-center gap-1"
                          title="Send Email"
                        >
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span>{item.email}</span>
                        </a>
                      </td>

                      {/* 4. Service Opted For */}
                      <td className="py-4 px-4">
                        <span className="font-bold text-gray-800 block line-clamp-1">
                          {item.service_name}
                        </span>
                        {item.company_name && (
                          <span className="text-[10px] text-gray-400 block truncate max-w-[180px]">
                            {item.company_name}
                          </span>
                        )}
                      </td>

                      {/* 5. Category */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getCategoryBadgeClass(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                      </td>

                      {/* 6. Date & Time (IST) */}
                      <td className="py-4 px-4 whitespace-nowrap text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="font-medium text-[11px]">{item.created_at_ist}</span>
                        </div>
                      </td>

                      {/* 7. Status */}
                      <td className="py-4 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={item.status}
                          disabled={updatingStatusId === item.id}
                          onChange={(e) =>
                            handleStatusChange(item.id, e.target.value as RequestStatus)
                          }
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none cursor-pointer ${getStatusBadgeClass(
                            item.status
                          )}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>

                      {/* 8. Action (View Form) */}
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => setSelectedRequest(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#48532B]/10 hover:bg-[#48532B]/20 text-[#48532B] font-bold text-xs rounded-xl transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Form</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── "Requested Form Details" Modal Dialog ── */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-in fade-in zoom-in-95 duration-200 flex flex-col">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#48532B] to-[#363f20] text-white rounded-t-3xl flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                    {selectedRequest.category}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      selectedRequest.status === "pending"
                        ? "bg-amber-400 text-amber-950"
                        : selectedRequest.status === "completed"
                        ? "bg-emerald-400 text-emerald-950"
                        : "bg-blue-400 text-blue-950"
                    }`}
                  >
                    {selectedRequest.status.replace("_", " ")}
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold">
                  {selectedRequest.service_name}
                </h2>
                <p className="text-xs text-olive-100 mt-1 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Submitted on {selectedRequest.created_at_ist}
                </p>
              </div>

              <button
                onClick={() => setSelectedRequest(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 flex-1 text-xs">
              {/* Client Profile Card */}
              <div className="bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-gray-200 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                  Client Contact Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-gray-400 text-[10px] uppercase font-bold block">
                      Full Name
                    </label>
                    <div className="font-bold text-sm text-gray-900 mt-0.5">
                      {selectedRequest.name}
                    </div>
                  </div>

                  {/* Mobile Number (Key feature requested by user) */}
                  <div>
                    <label className="text-gray-400 text-[10px] uppercase font-bold block">
                      Mobile Number
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono font-bold text-sm text-[#48532B] bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                        {selectedRequest.mobile}
                      </span>
                      <button
                        onClick={() => handleCopy(selectedRequest.mobile, "modal_mobile")}
                        className="p-1 hover:bg-gray-200 rounded-md text-gray-500 cursor-pointer"
                        title="Copy phone"
                      >
                        {copiedId === "modal_mobile" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <a
                        href={getWhatsAppLink(
                          selectedRequest.mobile,
                          selectedRequest.name,
                          selectedRequest.service_name
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-emerald-600 text-white rounded-lg font-bold text-[10px] hover:bg-emerald-700 transition-colors inline-flex items-center gap-1"
                      >
                        <Send className="w-2.5 h-2.5" /> WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-gray-400 text-[10px] uppercase font-bold block">
                      Work Email
                    </label>
                    <a
                      href={`mailto:${selectedRequest.email}`}
                      className="font-medium text-gray-800 hover:text-gray-950 underline mt-0.5 inline-block"
                    >
                      {selectedRequest.email}
                    </a>
                  </div>

                  {/* Company / City */}
                  <div>
                    <label className="text-gray-400 text-[10px] uppercase font-bold block">
                      Company / Startup &amp; City
                    </label>
                    <div className="font-medium text-gray-800 mt-0.5">
                      {selectedRequest.company_name || "N/A"}{" "}
                      {selectedRequest.city && `· ${selectedRequest.city}`}
                    </div>
                  </div>
                </div>
              </div>

              {/* User Special Requirements / Message */}
              {selectedRequest.message && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    User Requirements / Message
                  </label>
                  <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-200 text-gray-800 leading-relaxed italic">
                    "{selectedRequest.message}"
                  </div>
                </div>
              )}

              {/* Additional Form Fields Submitted */}
              {selectedRequest.form_data && Object.keys(selectedRequest.form_data).length > 0 && (
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    All Form Fields Submitted
                  </label>
                  <div className="bg-[#FAF9F6] rounded-2xl border border-gray-200 divide-y divide-gray-200/60 overflow-hidden">
                    {Object.entries(selectedRequest.form_data).map(([key, value]) => {
                      if (typeof value === "object") return null;
                      return (
                        <div key={key} className="px-4 py-2.5 flex items-center justify-between">
                          <span className="font-semibold text-gray-500 capitalize">
                            {key.replace(/_/g, " ")}:
                          </span>
                          <span className="font-bold text-gray-900 text-right">
                            {String(value)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Admin Management Section */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#48532B]/20 bg-[#48532B]/5 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#48532B] block">
                  Admin Action &amp; Notes
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">
                      Change Request Status
                    </label>
                    <select
                      value={selectedRequest.status}
                      onChange={(e) =>
                        handleStatusChange(
                          selectedRequest.id,
                          e.target.value as RequestStatus,
                          internalNotes
                        )
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs font-bold text-gray-800 focus:outline-none focus:border-[#48532B] cursor-pointer"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">
                      Quick Status Actions
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleStatusChange(selectedRequest.id, "contacted", internalNotes)
                        }
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        Mark Contacted
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(selectedRequest.id, "completed", internalNotes)
                        }
                        className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        Mark Completed
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">
                    Internal Admin Notes (Private)
                  </label>
                  <textarea
                    rows={3}
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    placeholder="Enter internal follow-up notes, call summary, or assignment details..."
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#48532B] resize-none"
                  />
                  <div className="flex items-center justify-between mt-2">
                    {saveNoteSuccess ? (
                      <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Note saved successfully!
                      </span>
                    ) : (
                      <span className="text-[10px] text-gray-400">
                        Notes are saved locally and synced with Super Admin.
                      </span>
                    )}

                    <button
                      onClick={() =>
                        handleStatusChange(
                          selectedRequest.id,
                          selectedRequest.status,
                          internalNotes
                        )
                      }
                      className="px-4 py-1.5 bg-[#48532B] hover:bg-[#394222] text-white rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      Save Notes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-3xl flex items-center justify-between">
              <button
                onClick={() => handleDelete(selectedRequest.id)}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Request</span>
              </button>

              <button
                onClick={() => setSelectedRequest(null)}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
