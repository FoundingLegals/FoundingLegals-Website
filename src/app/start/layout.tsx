import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Free — Legal Infrastructure Built for Founders | Founding Legals",
  description:
    "Join thousands of Indian startup founders on Founding Legals — the all-in-one platform for company incorporation, GST, DPIIT, agreements, cap table, and fundraising. No credit card. Start free.",
  keywords:
    "start free startup legal India, founder platform free, company incorporation free, GST registration startup, DPIIT registration, cap table India, startup compliance free",
  openGraph: {
    title: "Start Strong. Scale Confidently. | Founding Legals",
    description:
      "India's first founder-centric legal platform. Incorporate, stay compliant, raise capital, and build investor-ready — all in one place. Free to start.",
    type: "website",
    locale: "en_IN",
    siteName: "Founding Legals",
    url: "https://www.foundinglegals.com/start",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Strong. Scale Confidently. | Founding Legals",
    description:
      "Free to start. Built to scale. Founding Legals is India's legal infrastructure for founders who mean business.",
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
