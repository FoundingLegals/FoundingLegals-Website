"use client";

import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const badges = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Your documents are encrypted and stored securely.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "PCI-DSS compliant payment processing.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "We never hide government fees. Ever.",
  },
  {
    icon: CheckCircle2,
    title: "MCA Authorized",
    description: "Certified professionals for all filings.",
  },
];

const testimonials = [
  {
    quote:
      "Finally, a legal service provider that shows the actual government fees separately. I knew exactly where every rupee went during my Pvt Ltd incorporation.",
    name: "Ananya Sharma",
    role: "Founder, TechBridge Solutions",
    rating: 5,
  },
  {
    quote:
      "The compliance calendar alone is worth it. We never miss a GST or ROC deadline now. Their team proactively reminds us before every filing date.",
    name: "Rajesh Menon",
    role: "Co-Founder, GreenLeaf Exports",
    rating: 5,
  },
  {
    quote:
      "Incorporated our LLP in 12 days. The transparent pricing was refreshing — no surprise invoices at the end. Highly recommend for any first-time founder.",
    name: "Priya Patel",
    role: "Director, DesignScale Studio",
    rating: 5,
  },
];

export default function Trust() {
  const ref = useReveal();

  return (
    <section ref={ref}>
      {/* Security Section — ivo.ai exact style: centered label, heading, 4-column cards with icon at bottom */}
      <div className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-bg rounded-full mb-6">
              <span className="text-sm font-medium text-olive-700">
                Security
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 mb-5">
              Secure and compliant
            </h2>
            <p className="text-lg text-brown-500 leading-relaxed">
              We&apos;ve invested in the most rigorous security standards to
              protect your data.
            </p>
          </div>

          {/* Security cards — ivo.ai style: title top, description mid, icon bottom-left */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="bg-cream-light rounded-2xl border border-brown-200 p-8 flex flex-col justify-between min-h-[220px] hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-brown-900 text-base mb-2">
                    {badge.title}
                  </h4>
                  <p className="text-sm text-brown-500 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
                <div className="mt-8">
                  <badge.icon className="w-10 h-10 text-olive-600 stroke-[1.5]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials — clean, cream bg */}
      <div className="py-24 lg:py-32 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 mb-5">
              Trusted by founders across India
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-cream rounded-2xl border border-brown-200 p-8 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-olive-600/20 mb-4" />
                <p className="text-brown-600 leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-olive-600 text-olive-600"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-brown-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-brown-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner — olive green like ivo's visual blocks */}
      <div className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-olive-600 rounded-3xl p-12 sm:p-16 relative overflow-hidden text-center reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">
                Our Transparency Pledge
              </h3>
              <p className="text-olive-100 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Every invoice from Founding Legals will clearly show:
                <br />
                <strong className="text-white">
                  Govt. Fee + Our Fee + CA Fee (if bundled)
                </strong>
                <br />
                No packages designed to confuse. No hidden charges at checkout.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-lime-bg text-olive-800 font-semibold rounded-full hover:bg-white transition-all"
              >
                <Eye className="w-5 h-5" />
                See Our Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
