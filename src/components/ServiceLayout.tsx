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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-sm border border-[#E5E1D6] rounded-md text-[#5f6b53] text-[13px] font-semibold tracking-wide mb-8">
            <LayoutTemplate className="w-4 h-4" />
            {service.heroCategory}
          </div>

          <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-medium text-[#2b2723] leading-[1.05] tracking-[-0.02em] font-serif mb-8">
            {service.heroTitle}
          </h1>

          <p className="text-[19px] sm:text-[22px] text-[#6b6965] leading-relaxed mb-10 max-w-lg font-light">
            {service.heroDescription}
          </p>

          <a
            href={process.env.NEXT_PUBLIC_APP_URL || "#"}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#5A7338] text-white text-[15px] font-semibold rounded-lg hover:bg-[#4A5D2A] transition-colors shadow-sm"
          >
            Start Free
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
              href="#demo"
              className="inline-flex items-center justify-center px-7 py-3 bg-[#5A7338] text-white text-[15px] font-semibold rounded-lg hover:bg-[#4A5D2A] transition-colors shadow-sm"
            >
              Start Free
            </a>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full max-w-[500px]">
              <PurpleMatrixGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLOWCHART SECTION (Screenshot 3 reversed to left) */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-36 bg-white border-y border-[#E5E1D6]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="w-full order-2 md:order-1 flex justify-start">
            <div className="w-full max-w-[500px]">
              <FlowchartGraphic title={service.title} />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d7f0b9]/40 border border-[#b8e280]/30 text-[#4c661b] text-[12px] font-bold tracking-wide rounded-md mb-6">
              <Layers className="w-3.5 h-3.5" />
              {service.heroCategory} Clarity
            </div>

            <h2 className="text-[36px] sm:text-[42px] font-serif font-medium text-[#2b2723] leading-[1.15] mb-12">
              {service.featuresTitle || "Gain complete contract visibility"}
            </h2>

            {/* Dynamic Features List mapped to text bullets */}
            <div className="space-y-8">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#5A7338]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2b2723] text-[16px] mb-2 font-sans">Strategic Compliance</h3>
                    <p className="text-[15px] text-[#6b6965] leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARDS GRID SECTION (Screenshot 4) */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-36 bg-[#F6F4F0]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] sm:text-[42px] font-serif font-medium text-[#2b2723] mb-16">
            {"Built for trust, flexibility, and speed"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {service.features.map((feature, idx) => {
              const iconKey = feature.iconName as keyof typeof Icons;
              const Icon = (Icons[iconKey] || Icons.CheckCircle) as React.ElementType;

              return (
                <div key={idx} className="bg-[#f0ebe1] rounded-2xl p-8 sm:p-10 border border-[#e5e1d6] flex flex-col h-full min-h-[300px]">
                  <h3 className="text-[17px] font-medium text-[#4a4742] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[#7a766f] leading-relaxed mb-auto">
                    {feature.description}
                  </p>

                  {/* Icon placed at the bottom-left with characteristic thick styling */}
                  <div className="mt-12 text-[#4d6330]">
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
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
