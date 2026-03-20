"use client";

import { useState } from "react";
import { Play, X, Star, Quote } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const videos = [
  {
    id: "v1",
    title: "How We Incorporated in 12 Days",
    thumbnail: null, // will use olive gradient placeholder
    quote:
      "Founding Legals showed us the exact government fees before we even signed up. No other service did that.",
    name: "Ananya Sharma",
    role: "Founder, TechBridge Solutions",
    rating: 5,
  },
  {
    id: "v2",
    title: "Why Transparent Pricing Matters",
    thumbnail: null,
    quote:
      "The compliance calendar alone saved us from three missed deadlines in the first year. Their team is proactive.",
    name: "Rajesh Menon",
    role: "Co-Founder, GreenLeaf Exports",
    rating: 5,
  },
  {
    id: "v3",
    title: "From Idea to Pvt Ltd — Our Journey",
    thumbnail: null,
    quote:
      "We compared five providers. Only Founding Legals separated government charges from their own fee. That transparency won us over.",
    name: "Priya Patel",
    role: "Director, DesignScale Studio",
    rating: 5,
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brown-900 leading-[1.15] mb-6">
            Hear from founders who chose transparency.
          </h2>
          <p className="text-lg text-brown-500 leading-relaxed">
            Real stories from Indian founders who incorporated with clear fee
            breakdowns and never looked back.
          </p>
        </div>

        {/* Video cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className={`reveal stagger-${idx + 1}`}
            >
              <div className="bg-cream rounded-2xl border border-brown-200 overflow-hidden smooth-hover group">
                {/* Video thumbnail / play area */}
                <div
                  className="relative aspect-video cursor-pointer overflow-hidden"
                  onClick={() => setActiveVideo(video.id)}
                >
                  {/* Gradient thumbnail placeholder — nature-inspired like ivo */}
                  <div
                    className={`absolute inset-0 ${
                      idx === 0
                        ? "bg-gradient-to-br from-olive-600 via-olive-700 to-olive-900"
                        : idx === 1
                        ? "bg-gradient-to-br from-olive-500 via-olive-600 to-olive-800"
                        : "bg-gradient-to-br from-olive-400 via-olive-600 to-olive-800"
                    }`}
                  >
                    {/* Decorative illustration overlay */}
                    <svg
                      viewBox="0 0 400 225"
                      fill="none"
                      className="absolute inset-0 w-full h-full opacity-20"
                    >
                      {/* Mountains */}
                      <path
                        d="M0 180 Q80 120 160 150 Q240 100 320 140 Q360 120 400 150 L400 225 L0 225Z"
                        fill="white"
                      />
                      {/* Trees */}
                      <ellipse cx="100" cy="130" rx="30" ry="40" fill="white" opacity="0.3" />
                      <ellipse cx="300" cy="120" rx="25" ry="35" fill="white" opacity="0.25" />
                      {/* Stars / dots */}
                      <circle cx="200" cy="40" r="2" fill="white" opacity="0.4" />
                      <circle cx="150" cy="60" r="1.5" fill="white" opacity="0.3" />
                      <circle cx="280" cy="50" r="1.5" fill="white" opacity="0.35" />
                      <circle cx="350" cy="30" r="1" fill="white" opacity="0.25" />
                    </svg>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-olive-600 ml-1" />
                    </div>
                  </div>

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-white text-sm font-medium drop-shadow-md">
                      {video.title}
                    </p>
                  </div>
                </div>

                {/* Quote + attribution */}
                <div className="p-6">
                  <Quote className="w-6 h-6 text-olive-600/20 mb-3" />
                  <p className="text-brown-600 text-sm leading-relaxed mb-4">
                    &ldquo;{video.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-olive-600 text-olive-600"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-brown-900 text-sm">
                    {video.name}
                  </p>
                  <p className="text-xs text-brown-400">{video.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-brown-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-brown-900 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video placeholder — in production replace with real <video> or embed */}
            <div className="aspect-video bg-gradient-to-br from-olive-800 to-olive-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white/60 text-sm">
                  Video player — embed your testimonial videos here
                </p>
                <p className="text-white/40 text-xs mt-2">
                  Replace with YouTube/Vimeo embed or self-hosted video
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
