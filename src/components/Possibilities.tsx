"use client";

import { useReveal } from "@/lib/useReveal";
import { useEffect, useState } from "react";

const TARGET = "FOUNDING LEGALS";

const scatter = [
  { x: -35, y: -38, r: 15 },
  { x: 28, y: -42, r: -20 },
  { x: -18, y: 30, r: 12 },
  { x: 40, y: 18, r: -8 },
  { x: -40, y: -10, r: 25 },
  { x: 15, y: -35, r: -15 },
  { x: -28, y: 40, r: 10 },
  { x: 38, y: -22, r: -22 },
  { x: 0, y: 0, r: 0 },
  { x: -32, y: 15, r: -18 },
  { x: 22, y: 38, r: 20 },
  { x: -38, y: -30, r: -12 },
  { x: 35, y: -8, r: 16 },
  { x: -12, y: 42, r: -25 },
  { x: 30, y: 30, r: 8 },
];

const acronyms = [
  { t: "GST", x: "15%", y: "12%", d: "0s" },
  { t: "ROC", x: "72%", y: "18%", d: "0.5s" },
  { t: "PVT", x: "25%", y: "78%", d: "1s" },
  { t: "LTD", x: "78%", y: "72%", d: "1.5s" },
  { t: "MCA", x: "10%", y: "45%", d: "2s" },
  { t: "DIN", x: "82%", y: "42%", d: "0.8s" },
  { t: "IEC", x: "55%", y: "85%", d: "1.2s" },
  { t: "TDS", x: "42%", y: "10%", d: "1.8s" },
  { t: "PAN", x: "65%", y: "55%", d: "0.3s" },
  { t: "TAN", x: "20%", y: "30%", d: "2.2s" },
  { t: "DSC", x: "60%", y: "30%", d: "1.6s" },
  { t: "AOC", x: "35%", y: "60%", d: "0.7s" },
];

export default function Possibilities() {
  const ref = useReveal();
  const [formed, setFormed] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      const cycle = () => {
        setFormed(true);
        setTimeout(() => setFormed(false), 3000);
      };
      cycle();
      interval = setInterval(cycle, 6000);
    }, 2000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

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
              Request Demo
            </a>
          </div>

          <div className="reveal-right">
            <div className="bg-olive-600 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-white/3 blur-2xl" />

              {/* Background acronyms — always jiggling */}
              {acronyms.map((a, i) => (
                <span
                  key={i}
                  className="absolute text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] select-none letter-jiggle"
                  style={{
                    left: a.x,
                    top: a.y,
                    animationDelay: a.d,
                    color: formed ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
                    transition: "color 1s ease",
                  }}
                >
                  {a.t}
                </span>
              ))}

              {/* Main animated letters */}
              <div className="relative flex flex-wrap justify-center items-center max-w-[85%] z-10">
                {TARGET.split("").map((char, i) => {
                  if (char === " ") {
                    return <div key={i} className="w-4 sm:w-6 lg:w-8" />;
                  }
                  const s = scatter[i];
                  return (
                    <span
                      key={i}
                      className="inline-block font-serif font-bold select-none text-[26px] sm:text-[34px] lg:text-[42px] leading-none"
                      style={{
                        color: formed ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.12)",
                        transitionProperty: "transform, color",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                        transitionDuration: `${800 + i * 50}ms`,
                        transitionDelay: formed ? `${i * 40}ms` : `${(TARGET.length - 1 - i) * 25}ms`,
                        transform: formed
                          ? "translate(0,0) rotate(0deg) scale(1)"
                          : `translate(${s.x * 3}px, ${s.y * 3}px) rotate(${s.r}deg) scale(0.65)`,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
