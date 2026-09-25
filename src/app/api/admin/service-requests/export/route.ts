import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/adminAuth";
import {
  getAllServiceRequests,
  generateServiceRequestsCsv,
} from "@/lib/db/serviceRequests";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let requests = await getAllServiceRequests();

    if (category && category !== "All") {
      requests = requests.filter(
        (r) => r.category.toLowerCase() === category.toLowerCase()
      );
    }

    const csvContent = generateServiceRequestsCsv(requests);
    const dateStamp = new Date().toISOString().substring(0, 10);
    const filename = `FoundingLegals-Service-Requests-${category && category !== "All" ? category.replace(/\s+/g, "_") : "All"}-${dateStamp}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error: any) {
    console.error("Error exporting service requests CSV:", error);
    return NextResponse.json({ error: "Failed to export CSV" }, { status: 500 });
  }
}
