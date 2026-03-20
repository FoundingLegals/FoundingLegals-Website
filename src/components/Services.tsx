"use client";

import {
  Building2,
  Scale,
  FileText,
  Landmark,
  Calendar,
  Briefcase,
  Award,
  Rocket,
} from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const services = [
  {
    icon: Building2,
    title: "Private Limited Registration",
    description:
      "Complete Pvt Ltd incorporation with SPICe+, DIN, DSC, PAN, TAN — all government fees shown separately.",
    features: ["Name approval (RUN)", "SPICe+ filing", "PAN & TAN", "GST included"],
    price: "From ₹4,999",
    priceNote: "+ govt. fees",
  },
  {
    icon: Scale,
    title: "LLP Registration",
    description:
      "Register your Limited Liability Partnership with transparent fee structure and end-to-end filing support.",
    features: ["Name reservation", "LLP Agreement", "PAN & TAN", "Filing support"],
    price: "From ₹3,999",
    priceNote: "+ govt. fees",
  },
  {
    icon: FileText,
    title: "GST Registration & Filing",
    description:
      "Get your GSTIN and manage monthly/quarterly returns with our compliance team tracking every due date.",
    features: ["GSTIN registration", "Monthly returns", "Annual filing", "Input credit"],
    price: "From ₹1,499",
    priceNote: "per quarter",
  },
  {
    icon: Landmark,
    title: "IEC / Import Export Code",
    description:
      "Obtain your Import Export Code for international trade — fast processing with DGFT portal filing.",
    features: ["DGFT filing", "Digital IEC", "Quick turnaround", "Amendment support"],
    price: "From ₹1,999",
    priceNote: "one-time",
  },
  {
    icon: Calendar,
    title: "Annual ROC Compliance",
    description:
      "Never miss a filing deadline with our annual compliance package — AOC-4, MGT-7, ADT-1, and more.",
    features: ["AOC-4 & MGT-7", "Board resolutions", "Statutory registers", "ADT-1 filing"],
    price: "From ₹7,999",
    priceNote: "per year",
  },
  {
    icon: Briefcase,
    title: "Audit Coordination",
    description:
      "We coordinate with your auditor for statutory audit, tax audit, and compliance certifications.",
    features: ["Auditor appointment", "Statutory audit", "Tax audit support", "Certifications"],
    price: "From ₹5,999",
    priceNote: "per year",
  },
  {
    icon: Award,
    title: "Trademark Registration",
    description:
      "Protect your brand identity with trademark registration — search, filing, and objection handling.",
    features: ["TM search", "Application filing", "Objection reply", "Renewal"],
    price: "From ₹2,499",
    priceNote: "+ govt. fees",
  },
  {
    icon: Rocket,
    title: "Startup India / DPIIT",
    description:
      "Get DPIIT recognition for tax benefits, funding access, and government tender eligibility.",
    features: ["DPIIT registration", "Tax exemptions", "Self-certification", "IPR benefits"],
    price: "From ₹2,999",
    priceNote: "one-time",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-bg rounded-full mb-6">
            <span className="text-sm font-medium text-olive-700">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 mb-5">
            Everything your company needs, transparently priced
          </h2>
          <p className="text-lg text-brown-500 leading-relaxed">
            From incorporation to annual compliance — each service shows exact
            government charges separately from our professional fees.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`reveal stagger-${idx + 1}`}
            >
              <div className="h-full bg-cream-light rounded-2xl border border-brown-200 p-6 smooth-hover group flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-olive-600" />
                </div>

                <h3 className="text-lg font-semibold text-brown-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-brown-500 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-brown-500"
                    >
                      <div className="w-1 h-1 rounded-full bg-olive-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-brown-200">
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-xl font-bold text-brown-900">
                      {service.price}
                    </span>
                    <span className="text-xs text-brown-400">
                      {service.priceNote}
                    </span>
                  </div>
                  <a
                    href="#pricing"
                    className="text-sm font-semibold text-olive-600 hover:text-olive-800 transition-colors"
                  >
                    See Full Pricing &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
