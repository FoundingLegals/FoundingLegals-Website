"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Star,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  Building2,
  User,
  Mail,
  Briefcase,
  Sparkles,
  ArrowLeft,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import { FEEDBACK_SERVICES } from "@/lib/feedbackServices";

const DESIGNATION_OPTIONS = [
  "Founder",
  "Co-Founder",
  "CEO",
  "Director",
  "Other",
];

const RATING_LABELS: Record<number, string> = {
  1: "Needs Improvement",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Exceptional Experience",
};

export default function ClientFeedbackPage() {
  // Form field states
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designationOption, setDesignationOption] = useState("");
  const [customDesignation, setCustomDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [feedback, setFeedback] = useState("");
  const [permissionToPublish, setPermissionToPublish] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  // Files & Previews
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const photoInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Photo selection
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("Photo file size exceeds 5 MB. Please upload a smaller image.");
      return;
    }

    // Check type
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type.toLowerCase())) {
      setErrorMessage("Photo must be a JPG, PNG, or WEBP image.");
      return;
    }

    setErrorMessage(null);
    setPhotoFile(file);
    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
  };

  const removePhoto = () => {
    setPhotoFile(null);
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoPreview(null);
    if (photoInputRef.current) photoInputRef.current.value = "";
  };

  // Handle Logo selection
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("Logo file size exceeds 5 MB. Please upload a smaller image.");
      return;
    }

    // Check type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];
    if (!validTypes.includes(file.type.toLowerCase())) {
      setErrorMessage("Logo must be a JPG, PNG, WEBP, or SVG file.");
      return;
    }

    setErrorMessage(null);
    setLogoFile(file);
    const previewUrl = URL.createObjectURL(file);
    setLogoPreview(previewUrl);
  };

  const removeLogo = () => {
    setLogoFile(null);
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validations
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!companyName.trim()) {
      setErrorMessage("Please enter your company or startup name.");
      return;
    }
    const finalDesignation =
      designationOption === "Other" ? customDesignation.trim() : designationOption;
    if (!finalDesignation) {
      setErrorMessage("Please select or enter your designation.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!serviceId) {
      setErrorMessage("Please select the Founding Legals service you used.");
      return;
    }
    if (!rating || rating < 1 || rating > 5) {
      setErrorMessage("Please select a rating between 1 and 5 stars.");
      return;
    }
    if (!feedback.trim() || feedback.trim().length < 10) {
      setErrorMessage("Please tell us about your experience (minimum 10 characters).");
      return;
    }

    const selectedService = FEEDBACK_SERVICES.find((s) => s.id === serviceId);
    const serviceName = selectedService ? selectedService.name : serviceId;

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("full_name", fullName.trim());
      formData.append("company_name", companyName.trim());
      formData.append("designation", finalDesignation);
      formData.append("email", email.trim());
      formData.append("service_id", serviceId);
      formData.append("service_name", serviceName);
      formData.append("rating", rating.toString());
      formData.append("feedback", feedback.trim());
      formData.append("permission_to_publish", permissionToPublish ? "true" : "false");
      formData.append("website_url_check", honeypot);

      if (photoFile) {
        formData.append("photo", photoFile);
      }
      if (logoFile) {
        formData.append("company_logo", logoFile);
      }

      const response = await fetch("/api/feedback", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit feedback. Please try again.");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0EB] text-[#2B2723]">
      <Header />

      <main className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Top navigation breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#65605B] hover:text-[#5C6F2D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Founding Legals</span>
            </Link>
          </div>

          {/* Success Screen */}
          {isSuccess ? (
            <div className="bg-[#FAF7F4] border border-[#EDE6DE] rounded-3xl p-8 sm:p-14 shadow-sm text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E6EDC6] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#5C6F2D]" />
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#5C6F2D] bg-[#E6EDC6]/60 px-3 py-1 rounded-full mb-3">
                Submission Received
              </span>

              <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#2B2723] mb-4">
                Thank You for Sharing Your Experience
              </h1>

              <p className="text-[15px] sm:text-[16px] text-[#65605B] leading-relaxed max-w-lg mx-auto mb-8">
                We truly appreciate you taking the time to share your experience with Founding Legals. Your insights help us continue supporting founders across India with precision and speed.
              </p>

              {permissionToPublish && (
                <div className="bg-white/80 border border-[#D7CEC6]/60 rounded-2xl p-4 max-w-md mx-auto mb-8 text-left flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#5C6F2D] shrink-0 mt-0.5" />
                  <p className="text-[13px] text-[#524B44] leading-relaxed">
                    Thank you for granting publication consent! Your feedback will help other founders discover how Founding Legals can support their company.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white font-semibold text-[14px] rounded-xl shadow-sm transition-all"
                >
                  Return to Homepage
                </Link>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFullName("");
                    setCompanyName("");
                    setDesignationOption("");
                    setCustomDesignation("");
                    setEmail("");
                    setServiceId("");
                    setRating(5);
                    setFeedback("");
                    setPermissionToPublish(false);
                    removePhoto();
                    removeLogo();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#D7CEC6] text-[#524B44] hover:text-[#2B2723] hover:bg-[#FAF7F4] font-medium text-[14px] rounded-xl transition-all"
                >
                  Submit Another Feedback
                </button>
              </div>
            </div>
          ) : (
            /* Main Form Card */
            <div className="bg-[#FAF7F4] border border-[#EDE6DE] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
              {/* Header */}
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E6EDC6] text-[#3C481D] text-[12px] font-bold uppercase tracking-wider rounded-md mb-4">
                  <span>Client Experience</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#2B2723] leading-tight mb-3">
                  We’d Love to Hear From You
                </h1>
                <p className="text-[15px] sm:text-[16px] text-[#65605B] leading-relaxed">
                  Your experience matters to us. Share your experience with Founding Legals and tell us how we helped you.
                </p>
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-[13.5px] leading-relaxed">
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot field (hidden from view) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_url_check">Leave empty</label>
                  <input
                    type="text"
                    id="website_url_check"
                    name="website_url_check"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* 1. PERSONAL & COMPANY DETAILS */}
                <div className="space-y-4">
                  <h3 className="text-[15px] font-semibold text-[#2B2723] uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4 text-[#5C6F2D]" />
                    <span>Your Details</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#3D3733] mb-1.5">
                        Full Name <span className="text-[#CD412B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] placeholder-[#9E9890] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#3D3733] mb-1.5">
                        Company / Startup Name <span className="text-[#CD412B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Enter your company or startup name"
                        className="w-full px-4 py-3 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] placeholder-[#9E9890] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Designation */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#3D3733] mb-1.5">
                        Designation / Role <span className="text-[#CD412B]">*</span>
                      </label>
                      <select
                        required
                        value={designationOption}
                        onChange={(e) => setDesignationOption(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all"
                      >
                        <option value="" disabled>
                          Select your designation
                        </option>
                        {DESIGNATION_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>

                      {designationOption === "Other" && (
                        <input
                          type="text"
                          required
                          value={customDesignation}
                          onChange={(e) => setCustomDesignation(e.target.value)}
                          placeholder="Please enter your specific role"
                          className="mt-2.5 w-full px-4 py-2.5 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] placeholder-[#9E9890] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all"
                        />
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#3D3733] mb-1.5">
                        Email Address <span className="text-[#CD412B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] placeholder-[#9E9890] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all"
                      />
                      <p className="mt-1 text-[11px] text-[#7A756F]">
                        We will keep your email confidential; it is never published.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-[#EDE6DE]" />

                {/* 2. SERVICE USED */}
                <div>
                  <h3 className="text-[15px] font-semibold text-[#2B2723] uppercase tracking-wider flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-[#5C6F2D]" />
                    <span>Service Used</span>
                  </h3>
                  <label className="block text-[13px] font-semibold text-[#3D3733] mb-1.5">
                    Which Founding Legals service did you use? <span className="text-[#CD412B]">*</span>
                  </label>
                  <select
                    required
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all"
                  >
                    <option value="" disabled>
                      Select the service you used
                    </option>
                    {FEEDBACK_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <hr className="border-[#EDE6DE]" />

                {/* 3. STAR RATING */}
                <div>
                  <label className="block text-[13.5px] font-semibold text-[#3D3733] mb-2">
                    How would you rate your experience with Founding Legals? <span className="text-[#CD412B]">*</span>
                  </label>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-1">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isActive = (hoverRating || rating) >= starVal;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRating(starVal)}
                          onMouseEnter={() => setHoverRating(starVal)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1.5 -m-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 transition-transform active:scale-90"
                          aria-label={`Rate ${starVal} out of 5 stars`}
                        >
                          <Star
                            className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-200 ${
                              isActive
                                ? "text-[#E6B800] fill-[#FFD700]"
                                : "text-[#D7CEC6] hover:text-[#BEB8B0]"
                            }`}
                          />
                        </button>
                      );
                    })}

                    <span className="ml-2 text-[13px] font-medium text-[#524B44]">
                      {RATING_LABELS[hoverRating || rating] || ""}
                    </span>
                  </div>
                </div>

                {/* 4. FEEDBACK TEXT */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[13.5px] font-semibold text-[#3D3733]">
                      Tell us about your experience with Founding Legals <span className="text-[#CD412B]">*</span>
                    </label>
                    <span className="text-[11px] text-[#7A756F]">
                      {feedback.length} / 1500
                    </span>
                  </div>
                  <textarea
                    required
                    rows={5}
                    value={feedback}
                    maxLength={1500}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what you used Founding Legals for, how your experience was, and what you found most helpful."
                    className="w-full px-4 py-3 bg-white border border-[#D7CEC6] rounded-xl text-[14px] text-[#2B2723] placeholder-[#9E9890] focus:outline-none focus:ring-2 focus:ring-[#5C6F2D]/40 focus:border-[#5C6F2D] transition-all leading-relaxed"
                  />
                  <p className="mt-1 text-[11px] text-[#7A756F]">
                    Minimum 10 characters. Your original words will be preserved.
                  </p>
                </div>

                <hr className="border-[#EDE6DE]" />

                {/* 5. CLIENT PHOTO & COMPANY LOGO */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#2B2723] uppercase tracking-wider flex items-center gap-2 mb-1">
                      <ImageIcon className="w-4 h-4 text-[#5C6F2D]" />
                      <span>Optional Visuals</span>
                    </h3>
                    <p className="text-[12.5px] text-[#65605B]">
                      Upload your photo and company logo to be featured alongside your testimonial.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Client Photo */}
                    <div className="bg-white p-5 rounded-2xl border border-[#D7CEC6]/70">
                      <label className="block text-[13px] font-semibold text-[#3D3733] mb-1">
                        Your Photo
                      </label>
                      <p className="text-[11.5px] text-[#7A756F] leading-snug mb-3">
                        Clear professional photo (JPG, PNG, WEBP · Max 5 MB).
                      </p>

                      {photoPreview ? (
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#D7CEC6] shrink-0 bg-[#F5F0EB]">
                            <img
                              src={photoPreview}
                              alt="Photo preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() => photoInputRef.current?.click()}
                              className="text-[12px] font-semibold text-[#5C6F2D] hover:underline block"
                            >
                              Replace Photo
                            </button>
                            <button
                              type="button"
                              onClick={removePhoto}
                              className="text-[12px] font-medium text-red-600 hover:underline flex items-center gap-1"
                            >
                              <X className="w-3 h-3" /> Remove
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <input
                            ref={photoInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handlePhotoChange}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => photoInputRef.current?.click()}
                            className="w-full py-3 px-4 border border-dashed border-[#BEB8B0] hover:border-[#5C6F2D] bg-[#FAF7F4] hover:bg-[#F5F0EB] text-[#524B44] text-[13px] font-medium rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <Upload className="w-4 h-4 text-[#5C6F2D]" />
                            <span>Select Photo</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Company Logo */}
                    <div className="bg-white p-5 rounded-2xl border border-[#D7CEC6]/70">
                      <label className="block text-[13px] font-semibold text-[#3D3733] mb-1">
                        Company Logo
                      </label>
                      <p className="text-[11.5px] text-[#7A756F] leading-snug mb-3">
                        Startup or brand logo (JPG, PNG, WEBP, SVG · Max 5 MB).
                      </p>

                      {logoPreview ? (
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#D7CEC6] shrink-0 bg-[#F5F0EB] p-2 flex items-center justify-center">
                            <img
                              src={logoPreview}
                              alt="Logo preview"
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() => logoInputRef.current?.click()}
                              className="text-[12px] font-semibold text-[#5C6F2D] hover:underline block"
                            >
                              Replace Logo
                            </button>
                            <button
                              type="button"
                              onClick={removeLogo}
                              className="text-[12px] font-medium text-red-600 hover:underline flex items-center gap-1"
                            >
                              <X className="w-3 h-3" /> Remove
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <input
                            ref={logoInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/svg+xml"
                            onChange={handleLogoChange}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => logoInputRef.current?.click()}
                            className="w-full py-3 px-4 border border-dashed border-[#BEB8B0] hover:border-[#5C6F2D] bg-[#FAF7F4] hover:bg-[#F5F0EB] text-[#524B44] text-[13px] font-medium rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <Upload className="w-4 h-4 text-[#5C6F2D]" />
                            <span>Select Logo</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <hr className="border-[#EDE6DE]" />

                {/* 6. PUBLICATION CONSENT */}
                <div className="bg-[#E6EDC6]/40 border border-[#D4E157]/60 rounded-2xl p-4 sm:p-5">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={permissionToPublish}
                      onChange={(e) => setPermissionToPublish(e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#5C6F2D] rounded border-[#D7CEC6] focus:ring-[#5C6F2D] accent-[#5C6F2D] cursor-pointer"
                    />
                    <span className="text-[13px] sm:text-[13.5px] text-[#2B2723] leading-relaxed">
                      I give Founding Legals permission to display my name, designation, company name, photo, company logo, rating, and feedback on the Founding Legals website.
                    </span>
                  </label>
                  <p className="text-[11.5px] text-[#65605B] mt-2 ml-7">
                    If unchecked, your feedback will be kept internal for quality improvements and will never be published publicly.
                  </p>
                </div>

                {/* 7. SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#5C6F2D] hover:bg-[#4a5a24] text-white font-semibold text-[15px] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Your Feedback...</span>
                      </>
                    ) : (
                      <span>Submit My Feedback</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
