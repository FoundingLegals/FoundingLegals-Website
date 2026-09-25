import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/adminAuth";
import {
  getAllServiceRequests,
  updateServiceRequestStatus,
  deleteServiceRequest,
  RequestStatus,
} from "@/lib/db/serviceRequests";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const requests = await getAllServiceRequests();

    // Compute category and status statistics for executive dashboard tiles
    const stats = {
      total: requests.length,
      caServices: requests.filter((r) => r.category === "CA Services").length,
      incorporation: requests.filter((r) => r.category === "Company Incorporation").length,
      licenses: requests.filter((r) => r.category === "Licenses & Registrations").length,
      legal: requests.filter((r) => r.category === "Legal Services").length,
      pending: requests.filter((r) => r.status === "pending").length,
      contacted: requests.filter((r) => r.status === "contacted").length,
      inProgress: requests.filter((r) => r.status === "in_progress").length,
      completed: requests.filter((r) => r.status === "completed").length,
    };

    return NextResponse.json({
      success: true,
      stats,
      requests,
    });
  } catch (error: any) {
    console.error("Error in GET /api/admin/service-requests:", error);
    return NextResponse.json({ error: "Failed to load service requests" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = await updateServiceRequestStatus(id, status as RequestStatus, notes);
    if (!updated) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, request: updated });
  } catch (error: any) {
    console.error("Error updating service request status:", error);
    return NextResponse.json({ error: "Failed to update request" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing request id" }, { status: 400 });
    }

    const deleted = await deleteServiceRequest(id);
    if (!deleted) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Request deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting service request:", error);
    return NextResponse.json({ error: "Failed to delete request" }, { status: 500 });
  }
}
