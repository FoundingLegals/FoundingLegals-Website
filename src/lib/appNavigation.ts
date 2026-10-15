import { openFreeConsultation } from "@/components/FreeConsultationModal";

export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://app.foundinglegals.com"
).replace(/\/$/, "");

export function hasAppSession(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .some((c) => c.trim().startsWith("sFrontToken="));
}

export function getAppSignUpUrl(serviceSlugOrName?: string): string {
  if (hasAppSession()) {
    return `${APP_URL}/dashboard`;
  }
  const redirectPath = serviceSlugOrName
    ? encodeURIComponent(`/dashboard?service=${encodeURIComponent(serviceSlugOrName)}`)
    : "%2Fdashboard";
  return `${APP_URL}/sign-up?redirectToPath=${redirectPath}`;
}

export function navigateToApp(serviceSlugOrName?: string) {
  if (typeof window === "undefined") return;
  const url = getAppSignUpUrl(serviceSlugOrName);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function talkToExpert(serviceName?: string) {
  openFreeConsultation({
    service: serviceName,
    topic: serviceName ? `Consultation on ${serviceName}` : "General Legal & CA Consultation",
  });
}
