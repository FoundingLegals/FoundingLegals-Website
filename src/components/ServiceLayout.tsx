import { ServicePattern } from "@/lib/servicesData";
import { ArrowRight, Clock, FileText, LayoutTemplate, Layers, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import Image from "next/image";

// --------- INLINE SVG GRAPHICS ---------

function PurpleMatrixGraphic() {
  const letters = "founding legals ".repeat(20).split("");
  const matrixShape = [
    "    v   o   o     i",
    "    o   o   o     i",
    "    o   o   o     i",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "v v o o o o o v v",
    "o v o o o o o v o",
    "v v o o o o o v o",
    "v v o o o o o v o",
    "v v o o o o o v o",
    "v v o o o o o v o",
    "v v o o o o o v o",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "    o o o o o",
    "    o   o   o   i",
    "    o   o       i",
    "    o   o       i",
  ];

  let charIndex = 0;

  return (
    <div className="w-full aspect-square bg-[#b9a3ac] rounded-2xl flex items-center justify-center font-mono text-white/50 text-[10px] sm:text-xs overflow-hidden relative shadow-inner">
      <style>{`
        @keyframes collapseIn {
          0%, 15% { transform: translate(0, 0); opacity: 1; filter: blur(0px); }
          40%, 60% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; filter: blur(4px); }
          85%, 100% { transform: translate(0, 0); opacity: 1; filter: blur(0px); }
        }
        @keyframes revealWord {
          0%, 25% { opacity: 0; transform: scale(0.9); filter: blur(8px); letter-spacing: 6px; }
          40%, 60% { opacity: 1; transform: scale(1); filter: blur(0px); letter-spacing: 0px; }
          75%, 100% { opacity: 0; transform: scale(1.1); filter: blur(8px); letter-spacing: 6px; }
        }
        .matrix-char {
          display: inline-block;
          animation: collapseIn 5s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .formed-text {
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
          animation: revealWord 5s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55);
          text-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay" />

      <pre className="text-center tracking-widest pointer-events-none relative z-10 m-0 leading-loose">
        {matrixShape.map((row, rIdx) => {
          const rowY = rIdx - matrixShape.length / 2;
          return (
            <div key={rIdx} className="h-[1.5em] flex justify-center">
              {row.split('').map((char, cIdx) => {
                const rowX = cIdx - row.length / 2;
                if (char === ' ') return <span key={cIdx} className="w-[8px] sm:w-[9.5px]"> </span>;

                const displayChar = letters[charIndex % letters.length];
                charIndex++;

                // Pull towards center dramatically
                const tx = `${-rowX * 10}px`;
                const ty = `${-rowY * 15}px`;

                return (
                  <span
                    key={cIdx}
                    className="matrix-char w-[8px] sm:w-[9.5px]"
                    style={{ '--tx': tx, '--ty': ty } as React.CSSProperties}
                  >
                    {displayChar}
                  </span>
                );
              })}
            </div>
          );
        })}
      </pre>

      <div className="formed-text pointer-events-none z-20">
        Founding Legals
      </div>
    </div>
  );
}

function getFlowchartData(title: string) {
  const t = title?.toLowerCase() || "";
  if (t.includes('registration') || t.includes('incorporation') || t.includes('license')) {
    return {
      main: `${title.replace(/\s+/g, '-')}`,
      leftPill: 'SUBMITTED',
      leftTitle: 'Application',
      rightPill: 'APPROVED',
      rightTitle: 'Certificate'
    };
  }
  if (t.includes('agreement') || t.includes('contract') || t.includes('policy')) {
    return {
      main: `${title.replace(/\s+/g, '-')}`,
      leftPill: 'DRAFTED',
      leftTitle: 'Initial Draft',
      rightPill: 'EXECUTED',
      rightTitle: 'Final Agreement'
    };
  }
  return {
    main: `${title.replace(/\s+/g, '-')}`,
    leftPill: 'INITIATED',
    leftTitle: 'Requirement',
    rightPill: 'COMPLETED',
    rightTitle: 'Deliverable'
  };
}

function FlowchartGraphic({ title }: { title: string }) {
  const data = getFlowchartData(title);

  return (
    <div className="w-full aspect-square bg-[#fcfbf9] rounded-2xl border border-[#e7e4db] flex flex-col items-center justify-center p-6 relative shadow-sm">
      <div className="absolute top-0 w-px h-12 bg-[#d1cdc3]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#a19d93] absolute top-12" />

      <div className="mt-8 sm:mt-12 bg-[#f4f2ec] rounded-xl px-4 py-3 flex items-center justify-center gap-2 border border-[#e8e5db] shadow-[0_2px_8px_rgba(0,0,0,0.02)] z-10 w-full max-w-[300px]">
        <div className="w-4 h-4 rounded text-[#8b877f]"><FileText size={16} /></div>
        <span className="text-[#3b3834] text-xs sm:text-sm font-medium truncate" title={data.main}>{data.main}</span>
      </div>

      <svg className="w-full h-12 sm:h-20 mt-2 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 0 C50 60, 20 40, 20 100" fill="none" stroke="#d1cdc3" strokeWidth="1.2" />
        <path d="M50 0 C50 60, 80 40, 80 100" fill="none" stroke="#d1cdc3" strokeWidth="1.2" />
        <circle cx="50" cy="0" r="3" fill="#e1ddd3" />
      </svg>

      <div className="w-full flex justify-between px-2 sm:px-6 z-10 -mt-2">
        {/* Left Child */}
        <div className="flex flex-col items-center justify-center gap-2.5 bg-[linear-gradient(180deg,#fff_0%,#fdfcfb_100%)] rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-[#e8e5db] w-[45%] p-4 min-h-[120px]">
          <div className="bg-[#6b6270] text-white text-[8px] sm:text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow-sm truncate w-full flex justify-center">{data.leftPill}</div>
          <span className="text-[#3b3834] text-xs sm:text-sm font-semibold text-center truncate w-full">{data.leftTitle}</span>
          <span className="text-[#a19d93] text-[9px] sm:text-[10px]">View Detail</span>
        </div>
        {/* Right Child */}
        <div className="flex flex-col items-center justify-center gap-2.5 bg-[linear-gradient(180deg,#fff_0%,#fdfcfb_100%)] rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-[#e8e5db] w-[45%] p-4 min-h-[120px]">
          <div className="bg-[#9c6a38] text-white text-[8px] sm:text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow-sm truncate w-full flex justify-center">{data.rightPill}</div>
          <span className="text-[#3b3834] text-xs sm:text-sm font-semibold text-center truncate w-full">{data.rightTitle}</span>
          <span className="text-[#a19d93] text-[9px] sm:text-[10px]">View Document</span>
        </div>
      </div>
    </div>
  );
}

// --------- MAIN LAYOUT TEMPLATE ---------

export default function ServiceLayout({ service }: { service: ServicePattern }) {
  return (
    <div className="min-h-screen bg-[#F6F4F0] selection:bg-[#5C6E33] selection:text-white font-sans text-[#2c2b29]">
      {/* 1. HERO SECTION (Screenshot 1) */}
      <section className="relative w-full overflow-hidden flex flex-col md:flex-row items-center border-b border-[#E5E1D6]">
        {/* Left Text Box */}
        <div className="relative z-10 w-full md:w-1/2 pt-[140px] px-8 sm:px-16 md:px-20 lg:px-28 pb-20 md:pb-32">
          <div className="mb-8" />

          <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-medium text-[#2b2723] leading-[1.05] tracking-[-0.02em] font-serif mb-8">
            {service.heroTitle}
          </h1>

          <p className="text-[19px] sm:text-[22px] text-[#6b6965] leading-relaxed mb-10 max-w-lg font-light">
            {service.heroDescription}
          </p>

          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#5A7338] text-white text-[15px] font-semibold rounded-lg hover:bg-[#4A5D2A] transition-colors shadow-sm"
          >
            Start Your Journey
          </a>
        </div>

        {/* Right Illustration Graphic Area */}
        {/* We use the provided forest-hero with extensive clipping and cinematic gradient overlays to simulate the deep rich illustration aesthetic of founding leals */}
        <div className="relative z-0 w-full md:w-1/2 h-[50vh] md:h-full min-h-[600px] lg:min-h-[85vh]">
          <div className="absolute inset-0 bg-[#e0dfd5]" />
          <Image
            src={service.heroImage}
            alt={service.heroTitle}
            fill
            priority
            className="object-cover object-center mix-blend-multiply opacity-80"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle noise and light gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(280deg,#F6F4F0_0%,transparent_30%)]" />
          <div className="absolute inset-0 md:bg-[linear-gradient(90deg,#F6F4F0_0%,transparent_15%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[linear-gradient(0deg,#F6F4F0_0%,transparent_100%)]" />
        </div>
      </section>

      {/* 2. PURPLE MATRIX SECTION (Screenshot 2) */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-36 bg-[#F6F4F0]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="text-[38px] sm:text-[46px] font-serif font-medium text-[#2b2723] leading-[1.15] mb-6">
              Uncover opportunities<br />hiding in plain sight
            </h2>
            <p className="text-[18px] text-[#4d4b47] leading-[1.6] mb-10 max-w-md font-light">
              {service.ctaDescription} {service.title} ensures you never miss a strategic advantage, putting your founder team at the center of enterprise strategy.
            </p>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3 bg-[#5A7338] text-white text-[15px] font-semibold rounded-lg hover:bg-[#4A5D2A] transition-colors shadow-sm"
            >
              Opt Service
            </a>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full max-w-[500px]">
              <PurpleMatrixGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLOWCHART & BENEFITS SECTION (Redesigned for Width) */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-36 bg-white border-y border-[#E5E1D6]">
        <div className="max-w-[1400px] mx-auto">
          {/* Header and Graphic row */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-20">
            <div className="w-full order-2 md:order-1 flex justify-start">
              <div className="w-full max-w-[550px]">
                <FlowchartGraphic title={service.title} />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-serif font-medium text-[#2b2723] leading-[1.1] mb-6">
                {service.featuresTitle || "Gain complete contract visibility"}
              </h2>
              <p className="text-lg text-brown-600 font-light max-w-xl">
                Modernize your startup operations with our integrated legal framework. Built for speed, compliance, and strategic clarity.
              </p>
            </div>
          </div>

          {/* Professional Card Grid for Benefits (Full Width) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {service.benefits.map((benefit, idx) => {
              const parts = benefit.split('.');
              const title = parts[0].trim();
              const description = parts.slice(1).join('.').trim();

              return (
                <div key={idx} className="bg-white rounded-[32px] p-8 sm:p-10 border border-brown-100/60 shadow-[0_10px_35px_rgba(43,39,35,0.04)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_15px_45px_rgba(43,39,35,0.07)]">
                  <div className="w-12 h-12 bg-olive-50 rounded-2xl flex items-center justify-center text-olive-600 mb-8 shrink-0">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-[#2b2723] text-[22px] mb-4 leading-tight tracking-tight">
                      {title}.
                    </h3>
                    <p className="text-[16px] text-brown-600 leading-[1.6] font-light">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CARDS GRID SECTION (Screenshot 4) */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-36 bg-[#F6F4F0]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] sm:text-[42px] font-serif font-medium text-[#2b2723] mb-16">
            {"Built for trust, flexibility, and speed"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {service.features.map((feature, idx) => {
              const iconKey = feature.iconName as keyof typeof Icons;
              const Icon = (Icons[iconKey] || Icons.CheckCircle) as React.ElementType;

              return (
                <div key={idx} className="group bg-[#f0ebe1]/60 backdrop-blur-sm rounded-[32px] p-10 border border-[#e5e1d6]/80 flex flex-col h-full min-h-[320px] transition-all duration-500 hover:bg-[#f0ebe1] hover:shadow-[0_20px_40px_rgba(43,39,35,0.04)]">
                  <h3 className="text-[19px] font-serif font-semibold text-[#3a3732] mb-4 group-hover:text-[#2b2723] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-[#6b6965] leading-[1.6] mb-auto font-light">
                    {feature.description}
                  </p>

                  <div className="mt-12 text-[#5A7338]">
                    <Icon className="w-9 h-9" strokeWidth={2} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
