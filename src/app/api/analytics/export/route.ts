import { NextRequest, NextResponse } from "next/server";
import { getLiveCsvContent, getRecentVisitorLogs } from "@/lib/db/visitorLogs";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format");
    const view = searchParams.get("view");

    // If json requested
    if (format === "json") {
      const logs = await getRecentVisitorLogs(500);
      return NextResponse.json(
        {
          total: logs.length,
          generated_at: new Date().toISOString(),
          logs,
        },
        {
          headers: {
            "Cache-Control": "no-store, max-age=0",
          },
        }
      );
    }

    const csvData = await getLiveCsvContent();

    // If user wants to preview raw text directly in browser without auto-downloading file
    if (view === "raw" || view === "text") {
      return new NextResponse(csvData, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      });
    }

    // Default: Instant CSV download
    const filename = `foundinglegals_visitor_logs_live.csv`;
    return new NextResponse(csvData, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error exporting live CSV:", error);
    return new NextResponse("Error generating live CSV", { status: 500 });
  }
}
