"use client";

import { useEffect } from "react";

/**
 * ServiceRequestTracker
 * Automatically observes form submissions on public website pages in the capture phase.
 * Guarantees that any opted service, contact form, or consultation request is immediately
 * recorded into the Super Admin backend database and verified with email notification.
 */
export default function ServiceRequestTracker() {
  useEffect(() => {
    const handleFormSubmit = (e: Event) => {
      try {
        const form = e.target as HTMLFormElement;
        if (!form || !(form instanceof HTMLFormElement)) return;

        // Skip internal admin forms (e.g. login, feedback review, status updates)
        if (typeof window !== "undefined") {
          if (window.location.pathname.startsWith("/admin")) return;
        }
        if (form.querySelector('input[type="password"]')) return;
        if (form.getAttribute("data-ignore-tracker") === "true") return;

        const formData = new FormData(form);

        const email = ((formData.get("email") as string) || "").trim();
        const phone = (
          (formData.get("mobile") as string) ||
          (formData.get("phone") as string) ||
          (formData.get("tel") as string) ||
          (formData.get("contactNumber") as string) ||
          ""
        ).trim();

        const firstName = ((formData.get("firstName") as string) || "").trim();
        const lastName = ((formData.get("lastName") as string) || "").trim();
        const name = (
          (formData.get("name") as string) ||
          (formData.get("fullName") as string) ||
          `${firstName} ${lastName}`
        ).trim();

        // Must have at least an email or mobile and name to be considered a lead/service request
        if (!email && !phone) return;
        if (!name && !email) return;

        // Service name fallback to page title if not explicitly embedded in form
        let serviceName = (
          (formData.get("service") as string) ||
          (formData.get("service_name") as string) ||
          (formData.get("serviceName") as string) ||
          ""
        ).trim();

        if (!serviceName && typeof document !== "undefined") {
          serviceName = document.title
            .replace(/\s*\|\s*Founding\s*Legals.*/gi, "")
            .replace(/Founding\s*Legals\s*[-–]\s*/gi, "")
            .trim();
        }

        if (!formData.has("service") && serviceName) {
          formData.append("service", serviceName);
        }

        // Fire request to /api/service-requests asynchronously
        fetch("/api/service-requests", {
          method: "POST",
          body: formData,
        }).catch((err) => {
          console.warn("Service tracker logging:", err);
        });
      } catch (err) {
        // Non-blocking safeguard
      }
    };

    // Attach in capture phase so it runs reliably before any preventDefault
    document.addEventListener("submit", handleFormSubmit, true);

    return () => {
      document.removeEventListener("submit", handleFormSubmit, true);
    };
  }, []);

  return null;
}
