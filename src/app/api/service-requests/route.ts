import { NextRequest, NextResponse } from "next/server";
import {
  createServiceRequest,
  getAllServiceRequests,
  detectServiceCategory,
  CreateServiceRequestInput,
  ServiceCategory,
} from "@/lib/db/serviceRequests";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let mobile = "";
    let serviceName = "";
    let category: ServiceCategory | undefined = undefined;
    let companyName = "";
    let city = "";
    let message = "";
    let honeypot = "";
    let additionalData: Record<string, any> = {};

    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      honeypot = (formData.get("website_url_check") as string) || (formData.get("_gotcha") as string) || "";

      const firstName = (formData.get("firstName") as string) || "";
      const lastName = (formData.get("lastName") as string) || "";
      name = (formData.get("name") as string) || (formData.get("fullName") as string) || `${firstName} ${lastName}`.trim();
      email = (formData.get("email") as string) || "";
      mobile =
        (formData.get("mobile") as string) ||
        (formData.get("phone") as string) ||
        (formData.get("tel") as string) ||
        (formData.get("contactNumber") as string) ||
        "";
      serviceName =
        (formData.get("service") as string) ||
        (formData.get("service_name") as string) ||
        (formData.get("serviceName") as string) ||
        "";
      const catInput = formData.get("category") as string;
      if (catInput) category = catInput as ServiceCategory;
      companyName =
        (formData.get("company") as string) ||
        (formData.get("company_name") as string) ||
        (formData.get("startupName") as string) ||
        "";
      city = (formData.get("city") as string) || "";
      message =
        (formData.get("message") as string) ||
        (formData.get("briefDescription") as string) ||
        (formData.get("requirements") as string) ||
        "";

      // Collect all key-values for full form showcase
      formData.forEach((val, key) => {
        if (!["website_url_check", "_gotcha", "password"].includes(key) && typeof val === "string") {
          additionalData[key] = val;
        }
      });
    } else {
      const body = await req.json();
      honeypot = body.website_url_check || body._gotcha || "";
      name = body.name || body.fullName || `${body.firstName || ""} ${body.lastName || ""}`.trim();
      email = body.email || "";
      mobile = body.mobile || body.phone || body.tel || body.contactNumber || "";
      serviceName = body.service || body.service_name || body.serviceName || "";
      if (body.category) category = body.category as ServiceCategory;
      companyName = body.company || body.company_name || body.startupName || "";
      city = body.city || "";
      message = body.message || body.briefDescription || body.requirements || "";

      Object.keys(body).forEach((key) => {
        if (!["website_url_check", "_gotcha", "password"].includes(key)) {
          additionalData[key] = body[key];
        }
      });
    }

    // Anti-spam honeypot
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Request received" });
    }

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!mobile || mobile.trim().replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid mobile / contact number." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!serviceName) {
      serviceName = "Startup Legal & Compliance Consultation";
    }

    // Client IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    const input: CreateServiceRequestInput = {
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      service_name: serviceName.trim(),
      category: category || detectServiceCategory(serviceName),
      company_name: companyName ? companyName.trim() : undefined,
      city: city ? city.trim() : undefined,
      message: message ? message.trim() : undefined,
      form_data: additionalData,
      ip,
    };

    const saved = await createServiceRequest(input);

    return NextResponse.json(
      {
        success: true,
        message: "Your service request has been received. Our team will contact you shortly.",
        id: saved.id,
        service: saved.service_name,
        category: saved.category,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating service request:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const status = searchParams.get("status");

    let requests = await getAllServiceRequests();

    if (category && category !== "All") {
      requests = requests.filter((r) => r.category.toLowerCase() === category.toLowerCase());
    }

    if (status && status !== "All") {
      requests = requests.filter((r) => r.status.toLowerCase() === status.toLowerCase());
    }

    return NextResponse.json({
      success: true,
      count: requests.length,
      requests,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Failed to fetch requests" }, { status: 500 });
  }
}
