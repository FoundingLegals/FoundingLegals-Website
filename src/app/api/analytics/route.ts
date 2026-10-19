import { NextRequest, NextResponse } from "next/server";
import { isSuperAdminAuthorized } from "@/lib/adminAuth";
import { getRecentVisitorLogs } from "@/lib/db/visitorLogs";
import { getAllServiceRequests } from "@/lib/db/serviceRequests";
import { getAllBlogs } from "@/lib/db/blogs";
import { handleCorsOptions, withCors } from "@/lib/cors";

export const dynamic = "force-dynamic";

export async function OPTIONS(req: NextRequest) {
  return handleCorsOptions(req);
}

export async function GET(req: NextRequest) {
  try {
    const isAuthorized = await isSuperAdminAuthorized(req);
    if (!isAuthorized) {
      return withCors(
        req,
        NextResponse.json(
          { error: "Unauthorized. Super Admin access required." },
          { status: 401 }
        )
      );
    }

    const [logs, requests, blogs] = await Promise.all([
      getRecentVisitorLogs(250),
      getAllServiceRequests(),
      getAllBlogs(),
    ]);

    // Aggregate page metrics
    const pageCounts: Record<string, { count: number; title: string }> = {};
    const deviceCounts: Record<string, number> = { Desktop: 0, Mobile: 0, Tablet: 0 };
    const browserCounts: Record<string, number> = {};
    const uniqueVisitorIds = new Set<string>();
    const uniqueSessionIds = new Set<string>();

    for (const log of logs) {
      if (log.page) {
        if (!pageCounts[log.page]) {
          pageCounts[log.page] = { count: 0, title: log.page_title || log.page };
        }
        pageCounts[log.page].count++;
      }

      if (log.device && deviceCounts[log.device] !== undefined) {
        deviceCounts[log.device]++;
      }

      if (log.browser) {
        browserCounts[log.browser] = (browserCounts[log.browser] || 0) + 1;
      }

      if (log.visitor_id) {
        uniqueVisitorIds.add(log.visitor_id);
      }
      if (log.session_id) {
        uniqueSessionIds.add(log.session_id);
      }
    }

    const topPages = Object.entries(pageCounts)
      .map(([path, data]) => ({
        path,
        title: data.title,
        views: data.count,
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const totalBlogViews = blogs.reduce((acc, b) => acc + (b.views || 0), 0);

    return withCors(
      req,
      NextResponse.json({
        success: true,
        timestamp: new Date().toISOString(),
        summary: {
          totalRecentVisits: logs.length,
          uniqueVisitors: uniqueVisitorIds.size,
          uniqueSessions: uniqueSessionIds.size,
          totalServiceLeads: requests.length,
          totalBlogs: blogs.length,
          publishedBlogs: blogs.filter((b) => b.published).length,
          totalBlogViews,
        },
        topPages,
        devices: deviceCounts,
        browsers: browserCounts,
        recentVisitors: logs.slice(0, 25).map((l) => ({
          id: l.id,
          page: l.page,
          pageTitle: l.page_title,
          device: l.device,
          browser: l.browser,
          city: l.city,
          region: l.region,
          country: l.country,
          timeIst: l.timestamp_ist,
          referrer: l.referrer,
        })),
        recentLeads: requests.slice(0, 10).map((r) => ({
          id: r.id,
          name: r.name,
          email: r.email,
          mobile: r.mobile,
          serviceName: r.service_name,
          createdAt: r.created_at_ist || r.created_at,
        })),
      })
    );
  } catch (error: any) {
    console.error("Error in GET /api/analytics:", error);
    return withCors(
      req,
      NextResponse.json(
        { error: error?.message || "Failed to load analytics" },
        { status: 500 }
      )
    );
  }
}
