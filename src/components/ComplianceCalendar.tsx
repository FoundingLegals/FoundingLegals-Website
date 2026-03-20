"use client";

import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Bell, ExternalLink } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

type Filing = {
  date: number;
  name: string;
  type: "gst" | "tds" | "roc" | "itr" | "other";
  description: string;
};

const filingTypes = {
  gst: { label: "GST", color: "bg-olive-600", light: "bg-olive-50 text-olive-700 border-olive-200" },
  tds: { label: "TDS", color: "bg-brown-700", light: "bg-brown-100 text-brown-800 border-brown-200" },
  roc: { label: "ROC", color: "bg-olive-400", light: "bg-lime-bg text-olive-800 border-olive-200" },
  itr: { label: "ITR", color: "bg-brown-500", light: "bg-cream-dark text-brown-700 border-brown-200" },
  other: { label: "Other", color: "bg-brown-300", light: "bg-cream text-brown-600 border-brown-200" },
};

const monthlyFilings: Record<number, Filing[]> = {
  0: [
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 13, name: "GSTR-6", type: "gst", description: "Input service distributor return" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 30, name: "TDS Return", type: "tds", description: "Q3 TDS/TCS return (Oct-Dec)" },
  ],
  1: [
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 14, name: "TDS Payment", type: "tds", description: "Advance tax 4th instalment" },
    { date: 15, name: "PF/ESI Payment", type: "other", description: "Monthly PF/ESI contribution" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
  ],
  2: [
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 15, name: "Advance Tax", type: "itr", description: "4th instalment of advance tax" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 31, name: "GST Annual Return", type: "gst", description: "GSTR-9 annual return" },
  ],
  3: [
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 30, name: "ADT-1", type: "roc", description: "Auditor appointment with ROC" },
    { date: 30, name: "MCA Filing", type: "roc", description: "Company annual return filing" },
  ],
  4: [
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 15, name: "TDS Return", type: "tds", description: "Q4 TDS/TCS return (Jan-Mar)" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 31, name: "TDS Certificate", type: "tds", description: "Issue Form 16/16A" },
  ],
  5: [
    { date: 7, name: "TDS Payment", type: "tds", description: "Monthly TDS deposit" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 15, name: "Advance Tax", type: "itr", description: "1st instalment of advance tax" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
  ],
  6: [
    { date: 7, name: "TDS Payment", type: "tds", description: "Monthly TDS deposit" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 31, name: "ITR Filing", type: "itr", description: "Income tax return (non-audit)" },
  ],
  7: [
    { date: 7, name: "TDS Return", type: "tds", description: "Q1 TDS/TCS return (Apr-Jun)" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
  ],
  8: [
    { date: 7, name: "TDS Payment", type: "tds", description: "Monthly TDS deposit" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 15, name: "Advance Tax", type: "itr", description: "2nd instalment of advance tax" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 30, name: "ITR Filing", type: "itr", description: "Income tax return (audit cases)" },
  ],
  9: [
    { date: 7, name: "TDS Payment", type: "tds", description: "Monthly TDS deposit" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 29, name: "AGM", type: "roc", description: "Annual General Meeting deadline" },
    { date: 30, name: "AOC-4 / MGT-7", type: "roc", description: "Annual ROC filing" },
  ],
  10: [
    { date: 7, name: "TDS Payment", type: "tds", description: "Monthly TDS deposit" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
    { date: 29, name: "MGT-7 Filing", type: "roc", description: "Annual return with ROC" },
  ],
  11: [
    { date: 7, name: "TDS Payment", type: "tds", description: "Monthly TDS deposit" },
    { date: 11, name: "GSTR-1", type: "gst", description: "Monthly outward supplies return" },
    { date: 15, name: "Advance Tax", type: "itr", description: "3rd instalment of advance tax" },
    { date: 20, name: "GSTR-3B", type: "gst", description: "Monthly summary return" },
  ],
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function ComplianceCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedFiling, setSelectedFiling] = useState<Filing | null>(null);
  const sectionRef = useReveal();

  const filings = monthlyFilings[currentMonth] || [];
  const filteredFilings =
    activeFilter === "all"
      ? filings
      : filings.filter((f) => f.type === activeFilter);

  const prev = () => setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
  const next = () => setCurrentMonth((m) => (m === 11 ? 0 : m + 1));

  return (
    <section
      id="calendar"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — ivo style */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-bg rounded-full mb-6">
            <Calendar className="w-4 h-4 text-olive-600" />
            <span className="text-sm font-medium text-olive-700">
              Compliance Calendar
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 mb-5">
            Never miss a filing deadline
          </h2>
          <p className="text-lg text-brown-500 leading-relaxed">
            Interactive 12-month calendar with all GST, TDS, ROC, and ITR due
            dates. Color-coded by filing type with one-click reminders.
          </p>
        </div>

        <div className="reveal">
          <div className="bg-cream-light rounded-2xl border border-brown-200 overflow-hidden">
            {/* Calendar header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-brown-200 bg-cream">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl bg-cream-light border border-brown-200 flex items-center justify-center hover:bg-cream-dark transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-brown-800" />
              </button>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-brown-900">
                {monthNames[currentMonth]} 2026
              </h3>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-cream-light border border-brown-200 flex items-center justify-center hover:bg-cream-dark transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-brown-800" />
              </button>
            </div>

            {/* Filters */}
            <div className="px-6 sm:px-8 py-4 border-b border-brown-200 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "all"
                    ? "bg-olive-600 text-lime-bg"
                    : "bg-cream text-brown-600 hover:bg-cream-dark"
                }`}
              >
                All Filings
              </button>
              {Object.entries(filingTypes).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeFilter === key
                      ? `${val.light} border`
                      : "bg-cream text-brown-600 hover:bg-cream-dark"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${val.color}`} />
                  {val.label}
                </button>
              ))}
            </div>

            {/* Filing list */}
            <div className="p-6 sm:p-8">
              {filteredFilings.length === 0 ? (
                <div className="text-center py-12 text-brown-400">
                  <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">
                    No {activeFilter === "all" ? "" : filingTypes[activeFilter as keyof typeof filingTypes]?.label} filings this month
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredFilings.map((filing, idx) => {
                    const type = filingTypes[filing.type];
                    return (
                      <button
                        key={`${filing.name}-${idx}`}
                        onClick={() =>
                          setSelectedFiling(
                            selectedFiling?.name === filing.name ? null : filing
                          )
                        }
                        className={`w-full flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-xl border transition-all text-left ${
                          selectedFiling?.name === filing.name
                            ? `${type.light} border shadow-sm`
                            : "border-brown-200 hover:border-brown-300 hover:shadow-sm"
                        }`}
                      >
                        {/* Date */}
                        <div className="text-center shrink-0 w-12">
                          <div className="text-2xl font-bold text-brown-900">
                            {filing.date}
                          </div>
                          <div className="text-[10px] text-brown-400 uppercase tracking-wider">
                            {monthNames[currentMonth].slice(0, 3)}
                          </div>
                        </div>

                        {/* Badge */}
                        <div
                          className={`w-2 h-10 rounded-full ${type.color} shrink-0`}
                        />

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <h4 className="font-semibold text-brown-900 text-sm sm:text-base">
                              {filing.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${type.light} border hidden sm:inline`}
                            >
                              {type.label}
                            </span>
                          </div>
                          <p className="text-sm text-brown-500 truncate">
                            {filing.description}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="shrink-0 hidden sm:block">
                          <Bell className="w-4 h-4 text-brown-400 hover:text-olive-600" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer CTA */}
            <div className="px-6 sm:px-8 py-5 border-t border-brown-200 bg-cream flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-brown-500">
                Get automatic reminders for all upcoming filings
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive-600 text-lime-bg text-sm font-medium rounded-full hover:bg-olive-800 transition-all"
              >
                <Bell className="w-4 h-4" />
                Set Up Reminders
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
