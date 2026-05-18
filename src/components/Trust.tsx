"use client";

import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const badges = [
  {
    icon: Shield,
    title: "Encrypted end to end",
    description: "Your documents live behind AES-256 encryption. Only the people you invite ever get a key.",
  },
  {
    icon: Lock,
    title: "PCI-DSS payments",
    description: "Government fees, service fees, add-ons      every rupee moves through certified, audited rails.",
  },
  {
    icon: Eye,
    title: "Line-itemised billing",
    description: "Government charges and our fee, split on every invoice. No mystery markups, no surprises.",
  },
  {
    icon: CheckCircle2,
    title: "Signed off by CAs & CSs",
    description: "Every MCA, GST and ROC filing is reviewed by a qualified professional before submission.",
  },
];



export default function Trust() {
  const ref = useReveal();

  return (
    <section ref={ref}>
      {/* Security Section    founding leals.ai exact style: centered label, heading, 4-column cards with icon at bottom */}
      <div className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="mb-6" />
            <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-5">
              Safe, transparent, professional.
            </h2>
            <p className="text-base sm:text-lg text-brown-500 leading-relaxed">
              The fundamentals you&apos;d expect from a law firm, with the
              speed and clarity of modern software.
            </p>
          </div>

          {/* Security cards    founding leals.ai style: title top, description mid, icon bottom-left */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="bg-cream-light rounded-2xl border border-brown-200 p-8 flex flex-col justify-between min-h-[220px] shadow-sm"
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



      {/* CTA Banner    olive green like founding leals's visual blocks */}
      <div className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-olive-600 rounded-3xl p-12 sm:p-16 relative overflow-hidden text-center reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-[1.15] mb-4">
                Made by people who&apos;ve been the founder.
              </h3>
              <p className="text-olive-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Founding Legals is the toolkit we wish someone had handed
                us on incorporation day.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-lime-bg text-olive-800 font-semibold rounded-full hover:bg-white transition-all"
              >
                <Eye className="w-5 h-5" />
                See Plans & Credits
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
