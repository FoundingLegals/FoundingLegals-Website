"use client";

import { useEffect, useRef } from "react";

// ─── Easing ───────────────────────────────────────────────
function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ─── Path keyframes (Aligned for 1280px ViewBox) ──────────────
const SEGMENTS = [
  { pts: [{ x: 32, y: 0 }, { x: 32, y: 248 }], dur: 900 }, // vline
  { pts: [{ x: 32, y: 248 }, { x: 44, y: 275 }, { x: 69, y: 308 }, { x: 109, y: 330 }, { x: 154, y: 339 }, { x: 201, y: 341 }], dur: 750 }, // arc
  { pts: [{ x: 201, y: 341 }, { x: 248, y: 341 }, { x: 296, y: 341 }], dur: 450, showNode: true }, // Reach logo
  { pts: [{ x: 296, y: 341 }, { x: 334, y: 352 }, { x: 374, y: 385 }, { x: 414, y: 445 }, { x: 449, y: 490 }, { x: 464, y: 503 }], dur: 950 }, // scurve
  { pts: [{ x: 464, y: 503 }, { x: 480, y: 503 }], dur: 300 }, // hline start
  { pause: 950, tagId: 'tag1' },
  { pts: [{ x: 480, y: 503 }, { x: 590, y: 503 }], dur: 600 },
  { pause: 950, tagId: 'tag2' },
  { pts: [{ x: 590, y: 503 }, { x: 700, y: 503 }], dur: 600 },
  { pause: 950, tagId: 'tag3' },
  { pts: [{ x: 700, y: 503 }, { x: 810, y: 503 }], dur: 600 },
  { pause: 950, tagId: 'tag4' },
  { pts: [{ x: 810, y: 503 }, { x: 920, y: 503 }], dur: 600 },
  { pause: 950, tagId: 'tag5' },
  { pts: [{ x: 920, y: 503 }, { x: 1030, y: 503 }], dur: 600 },
  { pause: 950, tagId: 'tag6' },
  { pts: [{ x: 1030, y: 503 }, { x: 1140, y: 503 }], dur: 600 },
  { pause: 950, tagId: 'tag7' },
  { pts: [{ x: 1140, y: 503 }, { x: 1280, y: 503 }], dur: 400 },
];

const LINE_SEGS = [
  { id: 'vline', tStart: 0, tEnd: 900, len: 248 },
  { id: 'arc', tStart: 900, tEnd: 1650, len: 210 },
  { id: 'scurve', tStart: 2100, tEnd: 3050, len: 420 }, // 1650 + 450 = 2100
  { id: 'hline', tStart: 3050, tEnd: 11100, len: 816 },
];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const dotRef = useRef<SVGCircleElement>(null);
  const dotGlowRef = useRef<SVGCircleElement>(null);
  const nodeboxRef = useRef<SVGGElement>(null);

  const tag1Ref = useRef<SVGGElement>(null);
  const tag2Ref = useRef<SVGGElement>(null);
  const tag3Ref = useRef<SVGGElement>(null);
  const tag4Ref = useRef<SVGGElement>(null);
  const tag5Ref = useRef<SVGGElement>(null);
  const tag6Ref = useRef<SVGGElement>(null);
  const tag7Ref = useRef<SVGGElement>(null);

  const vlineRef = useRef<SVGLineElement>(null);
  const arcRef = useRef<SVGPathElement>(null);
  const scurveRef = useRef<SVGPathElement>(null);
  const hlineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;

    let isRunning = false;
    let observer: IntersectionObserver;

    const elements = {
      tag1: tag1Ref.current,
      tag2: tag2Ref.current,
      tag3: tag3Ref.current,
      tag4: tag4Ref.current,
      tag5: tag5Ref.current,
      tag6: tag6Ref.current,
      tag7: tag7Ref.current,
    };

    const lines = {
      vline: vlineRef.current,
      arc: arcRef.current,
      scurve: scurveRef.current,
      hline: hlineRef.current,
    };

    let nodeShown = false;
    let moveElapsed = 0;
    let currentTimeout: NodeJS.Timeout;
    let currentRaf: number;

    function setDot(x: number, y: number) {
      if (dotRef.current) {
        dotRef.current.setAttribute('cx', String(x));
        dotRef.current.setAttribute('cy', String(y));
      }
      if (dotGlowRef.current) {
        dotGlowRef.current.setAttribute('cx', String(x));
        dotGlowRef.current.setAttribute('cy', String(y));
      }
    }

    function lerpPts(pts: { x: number, y: number }[], t: number) {
      const n = pts.length - 1;
      const s = t * n;
      const i = Math.min(Math.floor(s), n - 1);
      const f = s - i;
      return {
        x: pts[i].x + (pts[i + 1].x - pts[i].x) * f,
        y: pts[i].y + (pts[i + 1].y - pts[i].y) * f,
      };
    }

    function updateLines(totalElapsed: number) {
      LINE_SEGS.forEach(s => {
        const el = lines[s.id as keyof typeof lines];
        if (!el) return;
        if (totalElapsed <= s.tStart) {
          el.setAttribute('stroke-dashoffset', String(s.len));
        } else if (totalElapsed >= s.tEnd) {
          el.setAttribute('stroke-dashoffset', "0");
        } else {
          const progress = (totalElapsed - s.tStart) / (s.tEnd - s.tStart);
          el.setAttribute('stroke-dashoffset', String(s.len * (1 - easeInOut(progress))));
        }
      });
    }

    function fadeIn(el: SVGElement | null, duration: number) {
      if (!el) return;
      const start = performance.now();
      function f(now: number) {
        if (!isRunning) return;
        const p = Math.min((now - start) / duration, 1);
        el!.setAttribute('opacity', String(easeInOut(p)));
        if (p < 1) {
          currentRaf = requestAnimationFrame(f);
        } else {
          el!.setAttribute('opacity', '1');
        }
      }
      currentRaf = requestAnimationFrame(f);
    }

    function runStep(index: number) {
      if (!isRunning) return;

      if (index >= SEGMENTS.length) {
        currentTimeout = setTimeout(restartAll, 2200);
        return;
      }

      const step = SEGMENTS[index];

      if (step.pause !== undefined) {
        if (step.tagId && elements[step.tagId as keyof typeof elements]) {
          fadeIn(elements[step.tagId as keyof typeof elements] as SVGElement, 500);
        }
        currentTimeout = setTimeout(() => runStep(index + 1), step.pause);
      } else {
        if (step.showNode && !nodeShown) {
          nodeShown = true;
          fadeIn(nodeboxRef.current, 500);
        }

        const startMoveTime = moveElapsed;
        const stepDur = step.dur!;
        const startTime = performance.now();

        function frame(now: number) {
          if (!isRunning) return;
          const raw = (now - startTime) / stepDur;
          const clamped = Math.min(raw, 1);
          const eased = easeInOut(clamped);

          const pos = lerpPts(step.pts!, eased);
          setDot(pos.x, pos.y);

          // Update lines with combined linear time
          updateLines(startMoveTime + clamped * stepDur);

          if (raw < 1) {
            currentRaf = requestAnimationFrame(frame);
          } else {
            const end = step.pts![step.pts!.length - 1];
            setDot(end.x, end.y);
            moveElapsed = startMoveTime + stepDur;
            runStep(index + 1);
          }
        }
        currentRaf = requestAnimationFrame(frame);
      }
    }

    function restartAll() {
      if (!isRunning) return;
      nodeShown = false;
      moveElapsed = 0;

      if (nodeboxRef.current) nodeboxRef.current.setAttribute('opacity', '0');
      Object.values(elements).forEach(el => {
        if (el) el.setAttribute('opacity', '0');
      });

      LINE_SEGS.forEach(s => {
        const el = lines[s.id as keyof typeof lines];
        if (el) el.setAttribute('stroke-dashoffset', String(s.len));
      });

      setDot(32, 0);
      currentTimeout = setTimeout(() => runStep(0), 400);
    }

    observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !isRunning) {
        isRunning = true;
        setDot(32, 0);
        currentTimeout = setTimeout(() => runStep(0), 600);
      } else if (!e.isIntersecting && isRunning) {
        isRunning = false;
        clearTimeout(currentTimeout);
        cancelAnimationFrame(currentRaf);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      isRunning = false;
      clearTimeout(currentTimeout);
      cancelAnimationFrame(currentRaf);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="roadmap"
      className="py-20 lg:py-28 w-full overflow-hidden bg-[#F2F0EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium text-brown-900 leading-[1.1] mb-6 max-w-4xl mx-auto">
          Complete Startup Life-Cycle:<br /> From Incorporation to Global Scale
        </h2>
        <p className="text-xl text-brown-600 max-w-3xl mx-auto italic leading-relaxed">
          Track the journey of your venture as we manage everything from legal foundations to post-funding governance and beyond.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full relative bg-[#F2F0EA]">
          <svg
            id="roadmap-svg"
            viewBox="0 0 1280 580"
            className="w-full h-auto"
            preserveAspectRatio="xMinYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1280" height="580" fill="#F2F0EA" />

            {/* Path Lines */}
            <line id="vline" ref={vlineRef} x1="32" y1="0" x2="32" y2="248"
              stroke="#D2C9BD" strokeWidth="2.5" strokeDasharray="248" strokeDashoffset="248" />
            <path id="arc" ref={arcRef} d="M 32 248 Q 32 341 201 341"
              fill="none" stroke="#D2C9BD" strokeWidth="2.5" strokeDasharray="210" strokeDashoffset="210" />
            <path id="scurve" ref={scurveRef} d="M 296 341 C 406 341 414 503 464 503"
              fill="none" stroke="#D2C9BD" strokeWidth="2.5" strokeDasharray="420" strokeDashoffset="420" />
            <line id="hline" ref={hlineRef} x1="464" y1="503" x2="1280" y2="503"
              stroke="#D2C9BD" strokeWidth="2" strokeDasharray="816" strokeDashoffset="816" />



            {/* NODE - Plain Logo */}
            <g id="nodebox" ref={nodeboxRef} opacity="0">
              <image
                x="155"
                y="318"
                width="170"
                height="50"
                href="/Founding Legals Logo.png"
                className="drop-shadow-sm"
              />
            </g>

            {/* TAGS - Original Vibrant Palette */}
            <g id="tag1" ref={tag1Ref} opacity="0">
              <rect x="420" y="450" width="120" height="30" rx="15" fill="#F5A520" />
              <text x="480" y="465" textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="12" fontWeight="600">Registration</text>
            </g>
            <g id="tag2" ref={tag2Ref} opacity="0">
              <rect x="530" y="523" width="120" height="30" rx="15" fill="#C4B0C8" />
              <text x="590" y="538" textAnchor="middle" dominantBaseline="middle"
                fill="#4a3060" fontSize="12" fontWeight="600">Compliance</text>
            </g>
            <g id="tag3" ref={tag3Ref} opacity="0">
              <rect x="640" y="450" width="128" height="30" rx="15" fill="#C9DBA2" />
              <text x="704" y="465" textAnchor="middle" dominantBaseline="middle"
                fill="#4e6e1e" fontSize="12" fontWeight="600">Certifications</text>
            </g>
            <g id="tag4" ref={tag4Ref} opacity="0">
              <rect x="770" y="523" width="80" height="30" rx="15" fill="#F07868" />
              <text x="810" y="538" textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="12" fontWeight="600">Legal</text>
            </g>
            <g id="tag5" ref={tag5Ref} opacity="0">
              <rect x="860" y="450" width="120" height="30" rx="15" fill="#7DD5C8" />
              <text x="920" y="465" textAnchor="middle" dominantBaseline="middle"
                fill="#1a5c52" fontSize="12" fontWeight="600">Fundraising</text>
            </g>
            <g id="tag6" ref={tag6Ref} opacity="0">
              <rect x="970" y="523" width="120" height="30" rx="15" fill="#A4C2F4" />
              <text x="1030" y="538" textAnchor="middle" dominantBaseline="middle"
                fill="#2c4a8a" fontSize="12" fontWeight="600">Governance</text>
            </g>
            <g id="tag7" ref={tag7Ref} opacity="0">
              <rect x="1080" y="450" width="120" height="30" rx="15" fill="#B6D7A8" />
              <text x="1140" y="465" textAnchor="middle" dominantBaseline="middle"
                fill="#3a632b" fontSize="12" fontWeight="600">IPO Ready</text>
            </g>

            <circle id="dot" ref={dotRef} cx="32" cy="0" r="8" fill="#A8A89E" opacity="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
