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
  timestamp_ist: string;
  visitor_id?: string;
  session_id?: string;
  city: string;
  region: string;
  country: string;
  page: string;
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
  recentLogs: VisitorEntry[];
}

export default function AnalyticsDashboardPage() {
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [activeTab, setActiveTab] = useState<"visitors" | "views" | "bounce">("visitors");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const [clearing, setClearing] = useState(false);

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

  // Auto-refresh interval
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

  const activePoint = hoverIndex !== null && points[hoverIndex] ? points[hoverIndex] : null;

  return (
    <div className="bg-[#FAF9F6] text-[#1E1B18] font-sans antialiased min-h-screen pb-24">
      {/* ── Sub-header: Metadata & Controls ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-900">founding-legals-website</span>
            <span className="text-gray-300">·</span>
            <a
              href="https://www.foundinglegals.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors"
            >
              <span>www.foundinglegals.com</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Range Indicator */}
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 shadow-2xs">
              Last 7 Days (IST)
            </div>

            {/* Auto Refresh Toggle */}
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                autoRefresh
                  ? "bg-[#48532B]/10 border-[#48532B]/20 text-[#48532B]"
                  : "bg-white border-gray-200 text-gray-500"
              }`}
            >
              <Radio className={`w-3.5 h-3.5 ${autoRefresh ? "animate-pulse" : ""}`} />
              <span>{autoRefresh ? "Live 6s Active" : "Paused"}</span>
            </button>

            {/* Manual Refresh */}
            <button
              onClick={() => {
                setLoading(true);
                fetchStats();
              }}
              disabled={loading}
              className="p-2 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 shadow-2xs transition-colors cursor-pointer"
              title="Refresh Stats"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#48532B]" : ""}`} />
            </button>

            {/* CSV Download Link */}
            <a
              href="/api/analytics/export"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#48532B] hover:bg-[#343D23] text-white text-xs font-bold rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Container: Matching Image 2 (Vercel Analytics Layout) ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Unified Graph Card with Integrated Metric Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Top Row: 3 Connected Metric Tabs (Exact Image 2 Blueprint) */}
          <div className="grid grid-cols-3 border-b border-gray-200 divide-x divide-gray-200 bg-white">
            {/* Tab 1: Visitors */}
            <button
              onClick={() => setActiveTab("visitors")}
              className={`p-5 text-left transition-all relative cursor-pointer ${
                activeTab === "visitors"
                  ? "bg-white"
                  : "bg-[#FCFBF9] hover:bg-gray-50/80"
              }`}
            >
              <div className="text-xs font-medium text-gray-500 mb-1">Unique Visitors</div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  {data?.stats.uniqueVisitors ?? 0}
                </span>
                <span className="text-xs text-gray-400 font-medium">Founders</span>
              </div>
              {/* Active Tab Underline Indicator */}
              {activeTab === "visitors" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E1B18]" />
              )}
            </button>

            {/* Tab 2: Page Views */}
            <button
              onClick={() => setActiveTab("views")}
              className={`p-5 text-left transition-all relative cursor-pointer ${
                activeTab === "views"
                  ? "bg-white"
                  : "bg-[#FCFBF9] hover:bg-gray-50/80"
              }`}
            >
              <div className="text-xs font-medium text-gray-500 mb-1">Total Page Views</div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  {data?.stats.totalViews ?? 0}
                </span>
                <span className="text-xs text-gray-400 font-medium">Views</span>
              </div>
              {/* Active Tab Underline Indicator */}
              {activeTab === "views" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E1B18]" />
              )}
            </button>

            {/* Tab 3: Bounce Rate */}
            <button
              onClick={() => setActiveTab("bounce")}
              className={`p-5 text-left transition-all relative cursor-pointer ${
                activeTab === "bounce"
                  ? "bg-white"
                  : "bg-[#FCFBF9] hover:bg-gray-50/80"
              }`}
            >
              <div className="text-xs font-medium text-gray-500 mb-1">Bounce Rate</div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  {data?.stats.bounceRate ?? 0}%
                </span>
                <span className="text-xs text-gray-400 font-medium">Single page</span>
              </div>
              {/* Active Tab Underline Indicator */}
              {activeTab === "bounce" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E1B18]" />
              )}
            </button>
          </div>

          {/* Graph Body (Exact Image 2 Blueprint) */}
          <div className="p-6 relative">
            <div className="relative w-full h-[280px]">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Subtle Brand Gradient Fill */}
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#48532B" stopOpacity="0.16" />
                    <stop offset="90%" stopColor="#48532B" stopOpacity="0.01" />
                    <stop offset="100%" stopColor="#48532B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Y-Axis Grid Lines & Numerical Labels */}
                {yTicks.map((val) => {
                  const y = padTop + chartH - (val / Math.max(maxVal, 1)) * chartH;
                  return (
                    <g key={val}>
                      {/* Left Number Label */}
                      <text
                        x={padLeft - 10}
                        y={y + 4}
                        textAnchor="end"
                        className="text-[12px] fill-gray-400 font-sans select-none"
                      >
                        {val}
                      </text>
                      {/* Horizontal Grid Line */}
                      <line
                        x1={padLeft}
                        y1={y}
                        x2={svgWidth - padRight}
                        y2={y}
                        stroke="#F0EDE8"
                        strokeWidth="1"
                      />
                    </g>
                  );
                })}

                {/* Area Gradient Fill */}
                {areaPath && <path d={areaPath} fill="url(#chartGradient)" />}

                {/* Solid Curve for Past Days */}
                {solidPath && (
                  <path
                    d={solidPath}
                    fill="none"
                    stroke="#48532B"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {/* Dashed Line for Today (In-Progress) */}
                {dashedPath && (
                  <path
                    d={dashedPath}
                    fill="none"
                    stroke="#48532B"
                    strokeWidth="2.4"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                )}

                {/* Vertical Hover Tracking Cursor */}
                {activePoint && (
                  <g>
                    <line
                      x1={activePoint.x}
                      y1={padTop}
                      x2={activePoint.x}
                      y2={padTop + chartH}
                      stroke="#48532B"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={activePoint.x}
                      cy={activePoint.y}
                      r="5"
                      fill="#48532B"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                  </g>
                )}

                {/* Invisible Hover Hitboxes & X-Axis Date Labels */}
                {points.map((p, i) => (
                  <g key={i}>
                    {/* Date Label on X-Axis */}
                    <text
                      x={p.x}
                      y={svgHeight - 8}
                      textAnchor="middle"
                      className={`text-[12px] font-sans select-none ${
                        hoverIndex === i ? "fill-gray-900 font-bold" : "fill-gray-500"
                      }`}
                    >
                      {p.pt.label}
                    </text>

                    {/* Wide hit area for hover */}
                    <rect
                      x={p.x - chartW / (points.length * 2)}
                      y={padTop}
                      width={chartW / points.length}
                      height={chartH + padBottom}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoverIndex(i)}
                      onMouseLeave={() => setHoverIndex(null)}
                    />
                  </g>
                ))}
              </svg>

              {/* Floating Tooltip */}
              {activePoint && (
                <div
                  className="absolute z-20 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none flex items-center gap-2 transform -translate-x-1/2 -translate-y-full"
                  style={{
                    left: `${(activePoint.x / svgWidth) * 100}%`,
                    top: `${activePoint.y - 12}px`,
                  }}
                >
                  <span className="font-semibold text-gray-300">{activePoint.pt.label}:</span>
                  <span className="font-bold text-white">
                    {activePoint.val}{" "}
                    {activeTab === "visitors"
                      ? "visitors"
                      : activeTab === "views"
                      ? "page views"
                      : "%"}
                  </span>
                  {activePoint.isToday && (
                    <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.2 rounded font-bold">
                      Live
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Two-Column Breakdown (100% Real Log Calculations) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column 1: Pages Visited */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Pages Visited
              </h3>
              <span className="text-xs font-semibold text-gray-400">Views</span>
            </div>

            <div className="space-y-2.5">
              {(data?.topPages || []).length > 0 ? (
                data?.topPages.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="flex items-center justify-between text-xs py-2 px-3 relative z-10">
                      <span className="font-mono text-gray-800 truncate max-w-[280px] sm:max-w-[360px]">
                        {item.page}
                      </span>
                      <span className="font-bold text-gray-900 shrink-0">{item.views}</span>
                    </div>
                    {/* Visual Percentage Bar */}
                    <div
                      className="absolute inset-y-0 left-0 bg-[#48532B]/10 rounded-lg -z-0 transition-all"
                      style={{ width: `${Math.max(item.percentage, 8)}%` }}
                    />
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-400 py-6 text-center">
                  No public page visits recorded yet today.
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Places & Cities */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Places / Cities
              </h3>
              <span className="text-xs font-semibold text-gray-400">Visitors</span>
            </div>

            <div className="space-y-2.5">
              {(data?.topCities || []).length > 0 ? (
                data?.topCities.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="flex items-center justify-between text-xs py-2 px-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#48532B] shrink-0" />
                        <span className="font-medium text-gray-800">
                          {item.city}
                          {item.region ? `, ${item.region}` : ""}
                        </span>
                      </div>
                      <span className="font-bold text-gray-900 shrink-0">{item.count}</span>
                    </div>
                    {/* Visual Percentage Bar */}
                    <div
                      className="absolute inset-y-0 left-0 bg-[#48532B]/15 rounded-lg -z-0 transition-all"
                      style={{ width: `${Math.max(item.percentage, 8)}%` }}
                    />
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-400 py-6 text-center">
                  No location entries recorded yet today.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ── Live Real-Time Feed Table ── */}
        <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs">
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Live Visitor Stream (Real-Time Feed)
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Every genuine public visitor logged in real time with unique Visitor UUID, IP, and location
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/api/analytics/export"
                download
                className="inline-flex items-center gap-1.5 text-xs text-[#48532B] font-bold hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Real-Time CSV ({data?.stats.totalViews || 0} rows)</span>
              </a>

              <button
                onClick={handleClearLogs}
                disabled={clearing}
                className="inline-flex items-center gap-1.5 text-xs text-rose-600 font-semibold hover:text-rose-800 transition-colors cursor-pointer border border-rose-200 hover:border-rose-300 bg-rose-50/60 px-2.5 py-1 rounded-lg"
                title="Wipe historical/test logs to start fresh with 100% genuine live traffic"
              >
                <Trash2 className="w-3 h-3" />
                <span>{clearing ? "Resetting..." : "Reset Logs"}</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF9F6] text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Timestamp (IST)</th>
                  <th className="px-5 py-3 font-semibold">Visitor UUID (User ID)</th>
                  <th className="px-5 py-3 font-semibold">Place / Location</th>
                  <th className="px-5 py-3 font-semibold">Page Visited</th>
                  <th className="px-5 py-3 font-semibold">Device & OS</th>
                  <th className="px-5 py-3 font-semibold">Referrer</th>
                  <th className="px-5 py-3 font-semibold">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(data?.recentLogs || []).length > 0 ? (
                  data?.recentLogs.map((log, i) => (
                    <tr key={i} className="hover:bg-gray-50/70 transition-colors">
                      <td className="px-5 py-3 font-mono text-gray-600 whitespace-nowrap">
                        {log.timestamp_ist}
                      </td>
                      <td className="px-5 py-3 font-mono whitespace-nowrap">
                        <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded border border-stone-200 font-medium text-[11px]" title={log.visitor_id}>
                          {log.visitor_id || "usr_anon"}
                        </span>
                      </td>
                      <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">
                        <div>{log.city}</div>
                        {log.region && log.region !== log.city && (
                          <div className="text-[10px] text-gray-400 font-normal">{log.region}, {log.country}</div>
                        )}
                      </td>
                      <td className="px-5 py-3 font-mono text-[#48532B] max-w-[240px] truncate font-medium">
                        {log.page}
                      </td>
                      <td className="px-5 py-3 text-gray-600 whitespace-nowrap">
                        {log.device} · {log.browser} <span className="text-gray-400 text-[10px]">({log.os})</span>
                      </td>
                      <td className="px-5 py-3 text-gray-500 truncate max-w-[160px]">
                        {log.referrer}
                      </td>
                      <td className="px-5 py-3 font-mono whitespace-nowrap">
                        <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200/80 font-medium text-[11px]">
                          {log.ip}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                      <p className="font-semibold text-gray-600">No public visits recorded yet.</p>
                      <p className="text-xs text-gray-400 mt-1">Open <a href="/" target="_blank" className="text-[#48532B] font-bold underline">Founding Legals</a> in an incognito tab or on your phone to watch genuine visits log here in real time!</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
