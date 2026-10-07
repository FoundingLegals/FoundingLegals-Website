"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Download,
  RefreshCw,
  Eye,
  Users,
  MapPin,
  Radio,
  ExternalLink,
  Shield,
  Clock,
  Sparkles,
  Trash2,
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  Copy,
  Check,
  Pause,
  Play,
  Activity,
  Layers,
  ArrowUpDown,
} from "lucide-react";

interface TimelinePoint {
  date: string;
  label: string;
  views: number;
  visitors: number;
  bounce: number;
  isToday?: boolean;
}

interface PageStat {
  page: string;
  views: number;
  visitors: number;
  percentage: number;
}

interface CityStat {
  city: string;
  region: string;
  country: string;
  count: number;
  percentage: number;
}

interface ReferrerStat {
  referrer: string;
  count: number;
  percentage: number;
}

interface VisitorEntry {
  id: string;
  timestamp: string;
  date?: string;
  timestamp_ist: string;
  visitor_id?: string;
  session_id?: string;
  city: string;
  region: string;
  country: string;
  country_code?: string;
  page: string;
  page_title?: string;
  device: string;
  browser: string;
  os: string;
  referrer: string;
  ip: string;
}

interface StatsData {
  stats: {
    totalViews: number;
    uniqueVisitors: number;
    totalSessions: number;
    bounceRate: number;
    topCity: string;
  };
  timeline: TimelinePoint[];
  topPages: PageStat[];
  topCities: CityStat[];
  topReferrers: ReferrerStat[];
  availableDates?: { date: string; count: number }[];
  totalLogs?: number;
  recentLogs: VisitorEntry[];
}

export default function AnalyticsDashboardPage() {
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [activeTab, setActiveTab] = useState<"visitors" | "views" | "bounce">("visitors");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const [clearing, setClearing] = useState(false);

  // ── Search, Date Filter, and Pagination States ──
  const [logSearchQuery, setLogSearchQuery] = useState("");
  const [selectedDateFilter, setSelectedDateFilter] = useState<string>("all"); // "all" | "today" | "yesterday" | "last7" | specific date "YYYY-MM-DD"
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(25);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/analytics/stats", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          setData(json);
        }
      }
    } catch (err) {
      console.error("Failed to load analytics stats:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClearLogs = async () => {
    if (!confirm("Are you sure you want to reset all visitor logs and clear old test records?")) {
      return;
    }
    setClearing(true);
    try {
      const res = await fetch("/api/admin/clear-logs", { method: "POST" });
      if (res.ok) {
        await fetchStats();
      }
    } catch (err) {
      console.error("Failed to clear logs:", err);
    } finally {
      setClearing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Auto-refresh interval (Real-time 6 seconds polling)
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      fetchStats();
    }, 6000);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchStats]);

  // ── Dynamic Graph Scales Strictly Derived from Actual Data ──
  const timeline = data?.timeline || [];

  const { maxVal, yTicks } = useMemo(() => {
    if (activeTab === "bounce") {
      return { maxVal: 100, yTicks: [100, 75, 50, 25, 0] };
    }
    const maxRecorded = Math.max(
      ...timeline.map((p) => (activeTab === "visitors" ? p.visitors : p.views)),
      0
    );
    const safeMax = Math.max(maxRecorded, 3);
    const step = Math.max(Math.ceil(safeMax / 3), 1);
    const topTick = step * 3;
    return {
      maxVal: topTick,
      yTicks: [topTick, step * 2, step, 0],
    };
  }, [activeTab, timeline]);

  const svgWidth = 900;
  const svgHeight = 260;
  const padLeft = 45;
  const padRight = 30;
  const padTop = 25;
  const padBottom = 35;

  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;

  // Compute Coordinates
  const points = useMemo(() => {
    if (!timeline.length) return [];
    return timeline.map((pt, i) => {
      const val =
        activeTab === "visitors"
          ? pt.visitors
          : activeTab === "views"
          ? pt.views
          : pt.bounce;

      const x = padLeft + (i / Math.max(timeline.length - 1, 1)) * chartW;
      const y = padTop + chartH - (val / Math.max(maxVal, 1)) * chartH;
      return { x, y, pt, val, isToday: pt.isToday };
    });
  }, [timeline, activeTab, maxVal, chartW, chartH]);

  // Generate Solid Path for Past Days and Dashed Path for Today
  const { solidPath, dashedPath, areaPath } = useMemo(() => {
    if (points.length < 2) return { solidPath: "", dashedPath: "", areaPath: "" };

    const past = points.slice(0, points.length - 1);
    const lastPast = past[past.length - 1];
    const today = points[points.length - 1];

    let sPath = `M ${past[0].x} ${past[0].y}`;
    for (let i = 1; i < past.length; i++) {
      sPath += ` L ${past[i].x} ${past[i].y}`;
    }

    const dPath = `M ${lastPast.x} ${lastPast.y} L ${today.x} ${today.y}`;

    // Full area fill under both
    const aPath = `${sPath} L ${today.x} ${today.y} L ${today.x} ${padTop + chartH} L ${past[0].x} ${padTop + chartH} Z`;

    return { solidPath: sPath, dashedPath: dPath, areaPath: aPath };
  }, [points, padTop, chartH]);

  // ── Date Filters and Historical Search Logic ──
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);
  const yesterdayStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split("T")[0];
  }, []);

  const totalLogsAll = data?.recentLogs || [];

  // Filter logs by date and search query
  const filteredLogs = useMemo(() => {
    return totalLogsAll.filter((log) => {
      const logDate = log.date || (log.timestamp ? log.timestamp.split("T")[0] : "");

      // 1. Date selection
      if (selectedDateFilter === "today") {
        if (logDate !== todayStr) return false;
      } else if (selectedDateFilter === "yesterday") {
        if (logDate !== yesterdayStr) return false;
      } else if (selectedDateFilter === "last7") {
        const d = new Date(log.timestamp || logDate);
        const diffDays = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
        if (diffDays > 7) return false;
      } else if (selectedDateFilter !== "all") {
        if (logDate !== selectedDateFilter) return false;
      }

      // 2. Search query
      if (logSearchQuery.trim()) {
        const q = logSearchQuery.toLowerCase().trim();
        const matchPage = (log.page || "").toLowerCase().includes(q);
        const matchCity = (log.city || "").toLowerCase().includes(q);
        const matchRegion = (log.region || "").toLowerCase().includes(q);
        const matchCountry = (log.country || "").toLowerCase().includes(q);
        const matchIp = (log.ip || "").toLowerCase().includes(q);
        const matchVisitor = (log.visitor_id || "").toLowerCase().includes(q);
        const matchDevice = (log.device || "").toLowerCase().includes(q);
        const matchBrowser = (log.browser || "").toLowerCase().includes(q);
        const matchReferrer = (log.referrer || "").toLowerCase().includes(q);
        const matchTime = (log.timestamp_ist || "").toLowerCase().includes(q);
        return (
          matchPage ||
          matchCity ||
          matchRegion ||
          matchCountry ||
          matchIp ||
          matchVisitor ||
          matchDevice ||
          matchBrowser ||
          matchReferrer ||
          matchTime
        );
      }

      return true;
    });
  }, [totalLogsAll, selectedDateFilter, logSearchQuery, todayStr, yesterdayStr]);

  // Counts for quick filter badges
  const todayCount = useMemo(() => {
    return totalLogsAll.filter((l) => (l.date || l.timestamp?.split("T")[0]) === todayStr).length;
  }, [totalLogsAll, todayStr]);

  const yesterdayCount = useMemo(() => {
    return totalLogsAll.filter((l) => (l.date || l.timestamp?.split("T")[0]) === yesterdayStr).length;
  }, [totalLogsAll, yesterdayStr]);

  // Pagination calculations
  const totalPages = useMemo(() => {
    if (rowsPerPage >= 10000) return 1;
    return Math.max(Math.ceil(filteredLogs.length / rowsPerPage), 1);
  }, [filteredLogs.length, rowsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedLogs = useMemo(() => {
    if (rowsPerPage >= 10000) return filteredLogs;
    const start = (currentPage - 1) * rowsPerPage;
    return filteredLogs.slice(start, start + rowsPerPage);
  }, [filteredLogs, currentPage, rowsPerPage]);

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, filteredLogs.length);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2B2723] font-sans pb-16">
      {/* ── Header ── */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#48532B] text-white flex items-center justify-center font-bold text-sm shadow-xs">
              FL
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <span>Real-Time Visitor Intelligence</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live 6s Stream
                </span>
              </h1>
              <p className="text-[11px] text-gray-500">
                Founding Legals • Verified Traffic Telemetry & Audit Logs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                autoRefresh
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                  : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
              }`}
              title={autoRefresh ? "Pause real-time auto-refresh" : "Resume 6s auto-refresh"}
            >
              {autoRefresh ? (
                <>
                  <Pause className="w-3 h-3 text-emerald-600" />
                  <span className="hidden sm:inline">Pause Stream</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-gray-600" />
                  <span className="hidden sm:inline">Resume Stream</span>
                </>
              )}
            </button>

            <button
              onClick={() => fetchStats()}
              disabled={loading}
              className="p-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Manual Refresh"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#48532B]" : ""}`} />
              <span className="hidden sm:inline">Sync</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Dashboard Body ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* ── Top Metric Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-white p-4.5 rounded-2xl border border-gray-200/90 shadow-2xs">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Total Views</span>
              <Eye className="w-4 h-4 text-[#48532B]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 font-mono">
              {data?.stats.totalViews ?? "—"}
            </div>
            <span className="text-[10px] text-gray-400 mt-0.5 block">Recorded page views</span>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-gray-200/90 shadow-2xs">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Unique Visitors</span>
              <Users className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mt-2 font-mono">
              {data?.stats.uniqueVisitors ?? "—"}
            </div>
            <span className="text-[10px] text-emerald-600 mt-0.5 block">Unique visitor UUIDs</span>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-gray-200/90 shadow-2xs">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Sessions</span>
              <Radio className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 font-mono">
              {data?.stats.totalSessions ?? "—"}
            </div>
            <span className="text-[10px] text-gray-400 mt-0.5 block">Active session streams</span>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-gray-200/90 shadow-2xs">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Bounce Rate</span>
              <Shield className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 font-mono">
              {data?.stats.bounceRate ?? "0"}%
            </div>
            <span className="text-[10px] text-gray-400 mt-0.5 block">Single page sessions</span>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-gray-200/90 shadow-2xs col-span-2 md:col-span-1">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Top Location</span>
              <MapPin className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-base sm:text-lg font-bold text-gray-900 mt-2 truncate">
              {data?.stats.topCity || "India"}
            </div>
            <span className="text-[10px] text-gray-400 mt-0.5 block">Highest engagement city</span>
          </div>
        </div>

        {/* ── 7-Day Live Traffic Graph ── */}
        <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <span>7-Day Visitor Trend</span>
                <span className="text-[11px] font-normal text-gray-400">
                  (Strictly verified daily counts)
                </span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Dashed marker indicates ongoing live count for today
              </p>
            </div>

            {/* Metric Tab Switcher */}
            <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-xl border border-gray-200 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("visitors")}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === "visitors"
                    ? "bg-white text-gray-900 shadow-2xs font-bold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Visitors
              </button>
              <button
                onClick={() => setActiveTab("views")}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === "views"
                    ? "bg-white text-gray-900 shadow-2xs font-bold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Page Views
              </button>
            </div>
          </div>

          {/* SVG Line Curve Chart */}
          <div className="relative w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto min-w-[600px] select-none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#48532B" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#48532B" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Y Axis Grid Lines */}
              {yTicks.map((tick, i) => {
                const y = padTop + chartH - (tick / Math.max(maxVal, 1)) * chartH;
                return (
                  <g key={i}>
                    <line
                      x1={padLeft}
                      y1={y}
                      x2={svgWidth - padRight}
                      y2={y}
                      stroke="#F0EDE8"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={padLeft - 8}
                      y={y + 3}
                      fill="#9CA3AF"
                      fontSize="10"
                      textAnchor="end"
                      fontFamily="monospace"
                    >
                      {tick}
                    </text>
                  </g>
                );
              })}

              {/* Area Fill */}
              {areaPath && <path d={areaPath} fill="url(#chartGradient)" />}

              {/* Solid Path for Past Days */}
              {solidPath && (
                <path
                  d={solidPath}
                  fill="none"
                  stroke="#48532B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Dashed Path for Today */}
              {dashedPath && (
                <path
                  d={dashedPath}
                  fill="none"
                  stroke="#5C6F2D"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />
              )}

              {/* Data Points */}
              {points.map((pt, i) => (
                <g key={i} className="cursor-pointer" onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={hoverIndex === i ? 6 : pt.isToday ? 5 : 4}
                    fill={pt.isToday ? "#D4E157" : "#48532B"}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="transition-all duration-150"
                  />
                  {/* X Axis Label */}
                  <text
                    x={pt.x}
                    y={svgHeight - 10}
                    fill={pt.isToday ? "#48532B" : "#6B7280"}
                    fontSize="11"
                    fontWeight={pt.isToday ? "700" : "500"}
                    textAnchor="middle"
                  >
                    {pt.pt.label} {pt.isToday ? "(Today)" : ""}
                  </text>
                  {/* Value tag above point */}
                  <text
                    x={pt.x}
                    y={pt.y - 10}
                    fill={pt.isToday ? "#48532B" : "#374151"}
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {pt.val}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* ── 3 Column Breakdown (Pages, Cities, Referrers) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Pages */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Top Visited Pages</span>
              <Layers className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {(data?.topPages || []).map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1">
                  <span className="font-mono text-gray-800 truncate max-w-[190px]" title={item.page}>
                    {item.page}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-bold text-gray-900">{item.views}</span>
                    <span className="text-[10px] text-gray-400 w-8 text-right font-mono">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Cities */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Top Locations</span>
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {(data?.topCities || []).map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1">
                  <span className="text-gray-800 truncate max-w-[190px]">
                    {item.city} {item.region ? `(${item.region})` : ""}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-bold text-gray-900">{item.count}</span>
                    <span className="text-[10px] text-gray-400 w-8 text-right font-mono">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Referrers */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Referrer Channels</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {(data?.topReferrers || []).map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1">
                  <span className="text-gray-800 truncate max-w-[190px]">{item.referrer}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-bold text-gray-900">{item.count}</span>
                    <span className="text-[10px] text-gray-400 w-8 text-right font-mono">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            ── LIVE VISITOR STREAM & COMPLETE HISTORICAL LOGS ──
        ========================================================================= */}
        <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs space-y-0">
          
          {/* 1. Header Toolbar */}
          <div className="p-5 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#48532B]" />
                  <span>Live Visitor Stream & Entire Audit History</span>
                </h3>

                {autoRefresh ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Live 6s Feed Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-600">
                    Stream Paused
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Complete persistent log history with IST dates, client UUIDs, pages, devices, and IP addresses
              </p>
            </div>

            {/* Actions: Export CSV & Reset */}
            <div className="flex items-center gap-3">
              <a
                href="/api/analytics/export"
                download
                className="inline-flex items-center gap-1.5 text-xs text-[#48532B] font-bold hover:underline px-3 py-1.5 bg-[#FAF9F6] border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                title="Download entire history CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export History CSV ({totalLogsAll.length} rows)</span>
              </a>

              <button
                onClick={handleClearLogs}
                disabled={clearing}
                className="inline-flex items-center gap-1 text-xs text-rose-600 font-semibold hover:text-rose-800 border border-rose-200 hover:border-rose-300 bg-rose-50/60 px-2.5 py-1.5 rounded-xl transition-colors cursor-pointer"
                title="Clear test logs to reset counter"
              >
                <Trash2 className="w-3 h-3" />
                <span>{clearing ? "Resetting..." : "Reset"}</span>
              </button>
            </div>
          </div>

          {/* 2. Interactive Filter & Date Navigation Bar */}
          <div className="p-4 bg-[#FAF9F6]/80 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Left: Quick Date Pills & Specific Date Dropdown */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => {
                  setSelectedDateFilter("all");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDateFilter === "all"
                    ? "bg-[#48532B] text-white shadow-2xs"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                All Dates ({totalLogsAll.length})
              </button>

              <button
                onClick={() => {
                  setSelectedDateFilter("today");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDateFilter === "today"
                    ? "bg-[#48532B] text-white shadow-2xs"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Today ({todayCount})
              </button>

              <button
                onClick={() => {
                  setSelectedDateFilter("yesterday");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDateFilter === "yesterday"
                    ? "bg-[#48532B] text-white shadow-2xs"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Yesterday ({yesterdayCount})
              </button>

              <button
                onClick={() => {
                  setSelectedDateFilter("last7");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDateFilter === "last7"
                    ? "bg-[#48532B] text-white shadow-2xs"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Last 7 Days
              </button>

              {/* Specific Date Dropdown from available recorded dates */}
              <div className="flex items-center gap-1 pl-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <select
                  value={
                    selectedDateFilter === "all" ||
                    selectedDateFilter === "today" ||
                    selectedDateFilter === "yesterday" ||
                    selectedDateFilter === "last7"
                      ? ""
                      : selectedDateFilter
                  }
                  onChange={(e) => {
                    if (e.target.value) {
                      setSelectedDateFilter(e.target.value);
                      setCurrentPage(1);
                    }
                  }}
                  className="px-2.5 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#48532B]"
                >
                  <option value="" disabled>
                    Select Past Date...
                  </option>
                  {(data?.availableDates || []).map((ad) => (
                    <option key={ad.date} value={ad.date}>
                      {ad.date} ({ad.count} entries)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right: Search Filter Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={logSearchQuery}
                onChange={(e) => {
                  setLogSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search page, IP, location, UUID..."
                className="w-full pl-9 pr-7 py-1.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#48532B]"
              />
              {logSearchQuery && (
                <button
                  onClick={() => setLogSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* 3. Pagination Controls Top */}
          <div className="px-5 py-3 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 bg-white">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">
                {filteredLogs.length > 0 ? (
                  <>
                    Showing <span className="font-bold text-gray-900">{startIndex}</span> to{" "}
                    <span className="font-bold text-gray-900">{endIndex}</span> of{" "}
                    <span className="font-bold text-gray-900">{filteredLogs.length}</span> entries
                    {filteredLogs.length !== totalLogsAll.length && (
                      <span className="text-gray-400 ml-1">
                        (filtered from {totalLogsAll.length} total)
                      </span>
                    )}
                  </>
                ) : (
                  <span>0 entries found</span>
                )}
              </span>

              {/* Rows per page selector */}
              <div className="flex items-center gap-1.5 ml-3">
                <span className="text-[11px] text-gray-400">Rows:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-2 py-0.5 bg-[#FAF9F6] border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
                >
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={250}>250</option>
                  <option value={10000}>All</option>
                </select>
              </div>
            </div>

            {/* Pagination Previous / Next buttons */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage <= 1}
                className="px-3 py-1 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <span className="px-3 py-1 font-mono text-xs font-bold text-gray-900 bg-[#FAF9F6] border border-gray-200 rounded-lg">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage >= totalPages}
                className="px-3 py-1 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. Logs Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF9F6] text-gray-600 border-b border-gray-200 font-semibold">
                <tr>
                  <th className="px-5 py-3 whitespace-nowrap">Date & Time (IST)</th>
                  <th className="px-5 py-3 whitespace-nowrap">Visitor UUID</th>
                  <th className="px-5 py-3 whitespace-nowrap">Location / Place</th>
                  <th className="px-5 py-3 whitespace-nowrap">Page Visited</th>
                  <th className="px-5 py-3 whitespace-nowrap">Device & Platform</th>
                  <th className="px-5 py-3 whitespace-nowrap">Referrer</th>
                  <th className="px-5 py-3 whitespace-nowrap">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedLogs.length > 0 ? (
                  paginatedLogs.map((log, i) => (
                    <tr key={log.id || i} className="hover:bg-gray-50/80 transition-colors">
                      {/* Date & IST Time */}
                      <td className="px-5 py-3 font-mono text-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#5C6F2D] shrink-0" />
                          <span className="font-semibold text-gray-900">
                            {log.timestamp_ist || log.timestamp}
                          </span>
                        </div>
                      </td>

                      {/* Visitor UUID with 1-click copy */}
                      <td className="px-5 py-3 font-mono whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleCopy(log.visitor_id || "usr_anon", `v-${i}`)}
                          className="group inline-flex items-center gap-1 bg-stone-100 hover:bg-stone-200 text-stone-800 px-2 py-0.5 rounded border border-stone-200 font-medium text-[11px] transition-colors cursor-pointer"
                          title="Click to copy Visitor UUID"
                        >
                          <span className="truncate max-w-[120px]">
                            {log.visitor_id || "usr_anon"}
                          </span>
                          {copiedId === `v-${i}` ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3 text-gray-400 group-hover:text-gray-700" />
                          )}
                        </button>
                      </td>

                      {/* Location */}
                      <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{log.city || "Unknown City"}</span>
                        </div>
                        {log.region && log.region !== log.city && (
                          <div className="text-[10px] text-gray-400 font-normal pl-4">
                            {log.region}, {log.country || "India"}
                          </div>
                        )}
                      </td>

                      {/* Page Visited */}
                      <td className="px-5 py-3 font-mono text-[#48532B] font-semibold max-w-[240px] truncate" title={log.page}>
                        {log.page}
                      </td>

                      {/* Device & Platform */}
                      <td className="px-5 py-3 text-gray-700 whitespace-nowrap">
                        <span className="font-medium">{log.device || "Desktop"}</span>
                        <span className="text-gray-400"> · {log.browser}</span>
                        <span className="text-[10px] text-gray-400 ml-1">({log.os})</span>
                      </td>

                      {/* Referrer */}
                      <td className="px-5 py-3 text-gray-500 truncate max-w-[150px]" title={log.referrer}>
                        {log.referrer || "Direct"}
                      </td>

                      {/* IP Address with 1-click copy */}
                      <td className="px-5 py-3 font-mono whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleCopy(log.ip, `ip-${i}`)}
                          className="group inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200/80 font-medium text-[11px] transition-colors cursor-pointer"
                          title="Click to copy IP Address"
                        >
                          <span>{log.ip}</span>
                          {copiedId === `ip-${i}` ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3 text-emerald-400 group-hover:text-emerald-700" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                      <p className="font-semibold text-gray-700">No logs found matching your criteria.</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Try resetting your search query or selecting &quot;All Dates&quot; above.
                      </p>
                      <button
                        onClick={() => {
                          setLogSearchQuery("");
                          setSelectedDateFilter("all");
                        }}
                        className="mt-3 px-3.5 py-1.5 bg-[#48532B] text-white text-xs font-bold rounded-full hover:bg-[#3B4423] transition-colors cursor-pointer"
                      >
                        Reset Filters
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 5. Pagination Controls Bottom */}
          {filteredLogs.length > 0 && (
            <div className="px-5 py-3.5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 bg-[#FAF9F6]/50">
              <span className="font-medium text-gray-700">
                Page <span className="font-bold text-gray-900">{currentPage}</span> of{" "}
                <span className="font-bold text-gray-900">{totalPages}</span> (Showing{" "}
                <span className="font-bold text-gray-900">{startIndex}</span> -{" "}
                <span className="font-bold text-gray-900">{endIndex}</span> of {filteredLogs.length} entries)
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage((p) => Math.max(p - 1, 1));
                    window.scrollTo({ top: 700, behavior: "smooth" });
                  }}
                  disabled={currentPage <= 1}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 transition-colors shadow-2xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage((p) => Math.min(p + 1, totalPages));
                    window.scrollTo({ top: 700, behavior: "smooth" });
                  }}
                  disabled={currentPage >= totalPages}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 transition-colors shadow-2xs"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
