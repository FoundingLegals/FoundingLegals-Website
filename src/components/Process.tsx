"use client";

import { ClipboardList, Calculator, FileCheck, CalendarCheck } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { SectionDivider } from "./Illustrations";

const steps = [
  {
    icon: ClipboardList,
    title: "Pick what you need",
    description:
      "Choose a service      incorporation, GST, IEC, compliance      and share a few details about your company.",
  },
  {
    icon: Calculator,
    title: "See the full cost up front",
    description:
      "Government fees, our service fee, any bundled CA work      itemised before you pay a rupee.",
  },
  {
    icon: FileCheck,
    title: "We file, you watch",
    description:
      "Documents drafted, MCA portals navigated, replies handled. Your dashboard mirrors every step in real time.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar set, deadlines covered",
    description:
      "Once you're live, every GST, TDS, ROC and ITR date lands on your calendar with reminders.",
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" ref={ref} className="bg-cream-light">
      <SectionDivider />
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section intro    founding leals style: left text + right visual */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 leading-[1.15] mb-6">
                Four steps. No phone tag.
              </h2>
              <p className="text-lg text-brown-600 leading-relaxed max-w-md">
                A predictable path from &ldquo;how do I start?&rdquo; to a
                running, compliant company     priced openly at every
                stage.
              </p>
              <div className="mt-8">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-olive-600 text-lime-bg font-medium rounded-full hover:bg-olive-800 transition-all text-sm"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right: olive panel with process steps */}
            <div className="reveal-right">
              <div className="bg-olive-600 rounded-3xl p-10 relative overflow-hidden smooth-hover">
                {/* Subtle Logo watermark */}
                <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
                  <img src="/Founding Legals Logo.png" alt="" className="w-[320px] h-auto object-contain brightness-0 invert" />
                </div>
                <div className="relative space-y-6">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                        <step.icon className="w-5 h-5 text-lime-bg" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          {step.title}
                        </h3>
                        <p className="text-olive-100 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
