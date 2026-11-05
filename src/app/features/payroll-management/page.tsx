import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PayrollManagementLayout from "@/components/PayrollManagementLayout";

export const metadata: Metadata = {
  title: "Startup Payroll Management & Digital Payslips | Founding Legals",
  description:
    "Automate startup salary structures, tax deductions, digital payslips and compliance records in one integrated workspace with Founding Legals.",
  alternates: {
    canonical: "https://www.foundinglegals.com/features/payroll-management",
  },
  openGraph: {
    title: "Startup Payroll Management & Digital Payslips | Founding Legals",
    description:
      "Automate startup salary structures, tax deductions, digital payslips and compliance records in one integrated workspace with Founding Legals.",
    url: "https://www.foundinglegals.com/features/payroll-management",
    type: "website",
  },
};

export default function PayrollManagementPage() {
  return (
    <>
      <Header />
      <main>
        <PayrollManagementLayout />
      </main>
      <Footer />
    </>
  );
}

