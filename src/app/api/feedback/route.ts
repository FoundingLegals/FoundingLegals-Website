import { NextRequest, NextResponse } from "next/server";
import {
  createFeedback,
  isDuplicateSubmission,
  CreateFeedbackInput,
} from "@/lib/db/feedback";
import { saveUploadedFile } from "@/lib/uploadHelper";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let fullName = "";
    let companyName = "";
    let designation = "";
    let email = "";
    let serviceId = "";
    let serviceName = "";
    let ratingNum = 0;
    let feedbackText = "";
    let permissionToPublish = false;
    let honeypot = "";

    let photoUrl: string | null = null;
    let companyLogoUrl: string | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      honeypot = (formData.get("website_url_check") as string) || "";
      fullName = ((formData.get("full_name") as string) || "").trim();
      companyName = ((formData.get("company_name") as string) || "").trim();
      designation = ((formData.get("designation") as string) || "").trim();
      email = ((formData.get("email") as string) || "").trim();
      serviceId = ((formData.get("service_id") as string) || "").trim();
      serviceName = ((formData.get("service_name") as string) || "").trim();
      const ratingRaw = formData.get("rating");
      ratingNum = ratingRaw ? Number(ratingRaw) : 0;
      feedbackText = ((formData.get("feedback") as string) || "").trim();
      const consentRaw = formData.get("permission_to_publish");
      permissionToPublish = consentRaw === "true" || consentRaw === "1" || consentRaw === "on";

      // File: client photo
      const photoFile = formData.get("photo") as File | null;
      if (photoFile && typeof photoFile === "object" && photoFile.size > 0) {
        if (photoFile.size > 5 * 1024 * 1024) {
          return NextResponse.json(
            { error: "Client photo exceeds 5 MB maximum size limit." },
            { status: 413 }
          );
        }
        const arrayBuffer = await photoFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const uploaded = await saveUploadedFile(
          buffer,
          photoFile.type,
          photoFile.name
        );
        photoUrl = uploaded.url;
      }

      // File: company logo
      const logoFile = formData.get("company_logo") as File | null;
      if (logoFile && typeof logoFile === "object" && logoFile.size > 0) {
        if (logoFile.size > 5 * 1024 * 1024) {
          return NextResponse.json(
            { error: "Company logo exceeds 5 MB maximum size limit." },
            { status: 413 }
          );
        }
        const arrayBuffer = await logoFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const uploaded = await saveUploadedFile(
          buffer,
          logoFile.type,
          logoFile.name
        );
        companyLogoUrl = uploaded.url;
      }
    } else {
      // JSON body
      const body = await req.json();
      honeypot = body.website_url_check || "";
      fullName = (body.full_name || "").trim();
      companyName = (body.company_name || "").trim();
      designation = (body.designation || "").trim();
      email = (body.email || "").trim();
      serviceId = (body.service_id || "").trim();
      serviceName = (body.service_name || "").trim();
      ratingNum = Number(body.rating) || 0;
      feedbackText = (body.feedback || "").trim();
      permissionToPublish = Boolean(body.permission_to_publish);
      photoUrl = body.photo_url || null;
      companyLogoUrl = body.company_logo_url || null;
    }

    // 1. Anti-spam honeypot
    if (honeypot.length > 0) {
      // Silently reject bots without revealing honeypot trap
      return NextResponse.json(
        { message: "Thank you for your feedback." },
        { status: 200 }
      );
    }

    // 2. Validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!companyName) {
      return NextResponse.json(
        { error: "Please enter your company or startup name." },
        { status: 400 }
      );
    }

    if (!designation) {
      return NextResponse.json(
        { error: "Please specify your designation or role." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!serviceName) {
      return NextResponse.json(
        { error: "Please select the Founding Legals service you used." },
        { status: 400 }
      );
    }

    if (!ratingNum || ratingNum < 1 || ratingNum > 5 || !Number.isInteger(ratingNum)) {
      return NextResponse.json(
        { error: "Please provide an experience rating between 1 and 5 stars." },
        { status: 400 }
      );
    }

    if (!feedbackText || feedbackText.length < 10) {
      return NextResponse.json(
        { error: "Please share a few words about your experience (minimum 10 characters)." },
        { status: 400 }
      );
    }

    if (feedbackText.length > 1500) {
      return NextResponse.json(
        { error: "Feedback must not exceed 1500 characters." },
        { status: 400 }
      );
    }

    // 3. Duplicate submission check
    const isDuplicate = await isDuplicateSubmission(
      email,
      serviceId || serviceName
    );
    if (isDuplicate) {
      return NextResponse.json(
        {
          error:
            "We have already received your feedback for this service recently. Thank you for your continued support!",
          duplicate: true,
        },
        { status: 409 }
      );
    }

    // 4. Save feedback (preserving verbatim feedback)
    const feedbackInput: CreateFeedbackInput = {
      full_name: fullName,
      company_name: companyName,
      designation: designation,
      email: email.toLowerCase(),
      service_id: serviceId || "other",
      service_name: serviceName,
      rating: ratingNum,
      feedback: feedbackText, // original verbatim text preserved
      photo_url: photoUrl,
      company_logo_url: companyLogoUrl,
      permission_to_publish: permissionToPublish,
    };

    const saved = await createFeedback(feedbackInput);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for sharing your experience with Founding Legals.",
        data: {
          id: saved.id,
          full_name: saved.full_name,
          company_name: saved.company_name,
          permission_to_publish: saved.permission_to_publish,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in POST /api/feedback:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "An unexpected error occurred while saving your feedback. Please try again.",
      },
      { status: 500 }
    );
  }
}
