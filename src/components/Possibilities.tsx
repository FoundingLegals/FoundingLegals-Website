"use client";

import { useReveal } from "@/lib/useReveal";

export default function Possibilities() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-left">
            <h2 className="font-serif text-4xl sm:text-[42px] lg:text-5xl font-medium text-brown-900 leading-[1.15] mb-8">
              One platform. Every milestone.
            </h2>
            <p className="text-base sm:text-lg text-brown-500 leading-relaxed mb-10 max-w-md">
              We architect the complete legal backbone of your startup
              from your first incorporation filing to your Series A close.
              Built by founders who&apos;ve been where you are.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "#"}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-olive-600 text-white font-medium rounded-full hover:bg-olive-700 transition-all text-base"
            >
              Start Free
            </a>
          </div>

          <div className="reveal-right">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-brown-100">
              <div className="bg-white rounded-xl overflow-hidden relative aspect-[16/10] flex items-center justify-center">
                <video
                  src="/videos/founding Legals product vedio.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.12] origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

