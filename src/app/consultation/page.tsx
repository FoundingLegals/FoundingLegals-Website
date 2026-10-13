import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationClientView from "./ConsultationClientView";

export const metadata: Metadata = {
  title: "Book Free Consultation | Founding Legals - Startup Legal & CA Advisory",
  description:
    "Schedule a complimentary 30-minute legal and CA consultation with senior Indian startup advocates. Get expert advice on company incorporation, GST, DPIIT, trademark, and investor contracts. Call +91 9791222557.",
  keywords:
    "free legal consultation, startup legal advisory, chartered accountant consultation, private limited registration consultation, GST advice India, trademark lawyer consultation",
  openGraph: {
    title: "Book Free Legal & CA Consultation | Founding Legals",
    description:
      "Schedule a complimentary 30-minute consultation with senior startup advocates and Chartered Accountants. Call or book online.",
    url: "https://foundinglegals.com/consultation",
    type: "website",
  },
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F7F5F0] pt-24 sm:pt-28 pb-16">
        <ConsultationClientView />
      </main>
      <Footer />
    </>
  );
}
