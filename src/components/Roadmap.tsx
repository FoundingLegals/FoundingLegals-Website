"use client";

import { useEffect, useRef } from "react";

// ─── Easing ───────────────────────────────────────────────
function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ─── Path keyframes ─────────────────────────────────────────
const SEGMENTS = [
  { pts: [{ x: 218, y: 0 }, { x: 218, y: 248 }], dur: 900 },
  { pts: [{ x: 218, y: 248 }, { x: 230, y: 275 }, { x: 255, y: 308 }, { x: 295, y: 330 }, { x: 340, y: 339 }, { x: 387, y: 341 }], dur: 750 },
  { pts: [{ x: 387, y: 341 }, { x: 434, y: 341 }, { x: 482, y: 341 }], dur: 400, showNode: true },
  { pts: [{ x: 482, y: 341 }, { x: 540, y: 352 }, { x: 590, y: 385 }, { x: 640, y: 445 }, { x: 685, y: 490 }, { x: 710, y: 503 }], dur: 950 },
  { pts: [{ x: 710, y: 503 }, { x: 760, y: 503 }], dur: 400 },
  { pause: 950, tagId: 'tag1' },
  { pts: [{ x: 760, y: 503 }, { x: 935, y: 503 }], dur: 650 },
  { pause: 950, tagId: 'tag2' },
  { pts: [{ x: 935, y: 503 }, { x: 1110, y: 503 }], dur: 650 },
  { pause: 950, tagId: 'tag3' },
  { pts: [{ x: 1110, y: 503 }, { x: 1285, y: 503 }], dur: 650 },
  { pause: 950, tagId: 'tag4' },
  { pts: [{ x: 1285, y: 503 }, { x: 1460, y: 503 }], dur: 650 },
  { pause: 950, tagId: 'tag5' },
  { pts: [{ x: 1460, y: 503 }, { x: 1536, y: 503 }], dur: 500 },
];

const LINE_SEGS = [
  { id: 'vline', tStart: 0, tEnd: 900, len: 248 },
  { id: 'arc', tStart: 900, tEnd: 1650, len: 210 },
  { id: 'scurve', tStart: 2050, tEnd: 3000, len: 420 },
  { id: 'hline', tStart: 3000, tEnd: 7150, len: 826 },
];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SVG Refs
  const dotRef = useRef<SVGCircleElement>(null);
  const dotGlowRef = useRef<SVGCircleElement>(null);
  const nodeboxRef = useRef<SVGGElement>(null);

  const tag1Ref = useRef<SVGGElement>(null);
  const tag2Ref = useRef<SVGGElement>(null);
  const tag3Ref = useRef<SVGGElement>(null);
  const tag4Ref = useRef<SVGGElement>(null);
  const tag5Ref = useRef<SVGGElement>(null);

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

    function updateLines(moveDur: number) {
      LINE_SEGS.forEach(s => {
        const el = lines[s.id as keyof typeof lines];
        if (!el) return;
        if (moveDur <= s.tStart) {
          el.setAttribute('stroke-dashoffset', String(s.len));
        } else if (moveDur >= s.tEnd) {
          el.setAttribute('stroke-dashoffset', "0");
        } else {
          const p = (moveDur - s.tStart) / (s.tEnd - s.tStart);
          el.setAttribute('stroke-dashoffset', String(s.len * (1 - easeInOut(p))));
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
          fadeIn(nodeboxRef.current, 400);
        }

        const startMove = moveElapsed;
        const stepDur = step.dur!;
        const startTime = performance.now();

        function frame(now: number) {
          if (!isRunning) return;
          const raw = Math.min((now - startTime) / stepDur, 1);
          const eased = easeInOut(raw);

          const pos = lerpPts(step.pts!, eased);
          setDot(pos.x, pos.y);

          const currentMove = startMove + raw * stepDur;
          updateLines(currentMove);

          if (raw < 1) {
            currentRaf = requestAnimationFrame(frame);
          } else {
            const end = step.pts![step.pts!.length - 1];
            setDot(end.x, end.y);
            moveElapsed = startMove + stepDur;
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

      setDot(218, 0);
      currentTimeout = setTimeout(() => runStep(0), 300);
    }

    observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !isRunning) {
        isRunning = true;
        setDot(218, 0);
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
      className="py-16 lg:py-20 w-full overflow-hidden"
      style={{ background: "#F2F0EA" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-brown-900 leading-[1.15] mb-5">
          From Incorporation to Fundraising
        </h2>
      </div>

      <div style={{ width: "100%", maxWidth: 1024, margin: "0 auto", position: "relative" }}>
        <svg id="svg" width="100%" height="auto" viewBox="0 0 1536 580" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* User's exact background rect */}
          <rect width="1536" height="580" fill="#F2F0EA"/>

          {/* LINES */}
          <line id="vline" ref={vlineRef} x1="218" y1="0" x2="218" y2="248"
                stroke="#C0BAB0" strokeWidth="1.5" strokeDasharray="248" strokeDashoffset="248"/>
          <path id="arc" ref={arcRef} d="M 218 248 Q 218 341 387 341"
                fill="none" stroke="#C0BAB0" strokeWidth="1.5" strokeDasharray="210" strokeDashoffset="210"/>
          <path id="scurve" ref={scurveRef} d="M 482 341 C 615 341 650 503 710 503"
                fill="none" stroke="#C0BAB0" strokeWidth="1.5" strokeDasharray="420" strokeDashoffset="420"/>
          <line id="hline" ref={hlineRef} x1="710" y1="503" x2="1536" y2="503"
                stroke="#C0BAB0" strokeWidth="1" strokeDasharray="826" strokeDashoffset="826"/>

          {/* NODE */}
          <g id="nodebox" ref={nodeboxRef} opacity="0">
            <rect x="387" y="295" width="95" height="92" rx="14" fill="#CEC5B8"/>
            <circle cx="434" cy="341" r="20" stroke="#5C7A28" strokeWidth="2.2" fill="none"/>
            <path d="M 414 341 Q 421 333 434 341 Q 447 349 454 341"
                  stroke="#5C7A28" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
            <line x1="434" y1="321" x2="434" y2="361"
                  stroke="#5C7A28" strokeWidth="2.2" strokeLinecap="round"/>
          </g>

          {/* TAGS */}
          <g id="tag1" ref={tag1Ref} opacity="0">
            <rect x="698" y="450" width="124" height="30" rx="15" fill="#F5A520"/>
            <text x="760" y="465" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="13" fontWeight="500"
                  fontFamily="-apple-system,'Helvetica Neue',Arial,sans-serif">Registration</text>
          </g>
          <g id="tag2" ref={tag2Ref} opacity="0">
            <rect x="873" y="523" width="124" height="30" rx="15" fill="#C4B0C8"/>
            <text x="935" y="538" textAnchor="middle" dominantBaseline="middle"
                  fill="#4a3060" fontSize="13" fontWeight="500"
                  fontFamily="-apple-system,'Helvetica Neue',Arial,sans-serif">Compliance</text>
          </g>
          <g id="tag3" ref={tag3Ref} opacity="0">
            <rect x="1042" y="450" width="136" height="30" rx="15" fill="#C9DBA2"/>
            <text x="1110" y="465" textAnchor="middle" dominantBaseline="middle"
                  fill="#4e6e1e" fontSize="13" fontWeight="500"
                  fontFamily="-apple-system,'Helvetica Neue',Arial,sans-serif">Certifications</text>
          </g>
          <g id="tag4" ref={tag4Ref} opacity="0">
            <rect x="1245" y="523" width="80" height="30" rx="15" fill="#F07868"/>
            <text x="1285" y="538" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="13" fontWeight="500"
                  fontFamily="-apple-system,'Helvetica Neue',Arial,sans-serif">Legal</text>
          </g>
          <g id="tag5" ref={tag5Ref} opacity="0">
            <rect x="1398" y="450" width="124" height="30" rx="15" fill="#7DD5C8"/>
            <text x="1460" y="465" textAnchor="middle" dominantBaseline="middle"
                  fill="#1a5c52" fontSize="13" fontWeight="500"
                  fontFamily="-apple-system,'Helvetica Neue',Arial,sans-serif">Fundraising</text>
          </g>

          {/* CIRCLE — solid filled, no glow */}
          <circle id="dotGlow" ref={dotGlowRef} cx="218" cy="0" r="1" fill="none" opacity="0"/>
          <circle id="dot" ref={dotRef} cx="218" cy="0" r="7" fill="#A8A89E" opacity="1"/>
        </svg>
      </div>
    </section>
  );
}
