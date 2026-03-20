import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Founding Legals — Transparent Legal Services for Indian Founders",
  description:
    "Incorporate your Pvt Ltd, manage compliance, and file returns with clear government-fee separation and fixed professional charges. No hidden costs.",
  keywords:
    "private limited registration, LLP registration, GST registration, company incorporation India, ROC compliance, IEC registration, startup India, DPIIT, trademark registration",
  openGraph: {
    title: "Founding Legals — Transparent Legal Services for Indian Founders",
    description:
      "Incorporate your Pvt Ltd with clear fee breakdowns. Government fees shown separately from professional charges.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-cream">{children}</body>
    </html>
  );
}
