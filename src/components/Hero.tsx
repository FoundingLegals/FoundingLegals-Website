"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#EDE5DA]">

      {/* ===== LAYER 0: SKY GRADIENT ===== */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #E8DFD5 0%, #F0E8DE 35%, #E8DDD0 60%, #D4C4A8 85%, #C9B896 100%)"
      }} />

      {/* ===== LAYER 1: SUN GLOW — pulsing ===== */}
      <div className="absolute top-[5%] right-[25%] w-[500px] h-[500px] hero-sun">
        <div className="w-full h-full rounded-full" style={{
          background: "radial-gradient(circle, rgba(245,230,200,0.7) 0%, rgba(245,230,200,0.2) 40%, transparent 70%)"
        }} />
      </div>

      {/* ===== LAYER 2: DISTANT HILLS — slow drift ===== */}
      <div className="absolute inset-0 hero-hills-far">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M-40 520 Q200 460 440 490 Q680 440 920 480 Q1160 450 1400 470 Q1480 465 1520 490 L1520 900 L-40 900Z" fill="#B8CC6A" opacity="0.2" />
          <path d="M-40 555 Q250 500 540 530 Q800 490 1060 520 Q1280 500 1520 530 L1520 900 L-40 900Z" fill="#9AB545" opacity="0.25" />
        </svg>
      </div>

      {/* ===== LAYER 3: HEDGE WALL — gentle sway ===== */}
      <div className="absolute inset-0 hero-hedge">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6B8530" />
              <stop offset="100%" stopColor="#4A5A24" />
            </linearGradient>
          </defs>
          <path d="M-40 340 Q120 318 280 340 Q440 358 600 335 Q760 318 920 340 Q1080 358 1240 335 Q1360 322 1520 340 L1520 545 Q1360 558 1240 540 Q1080 525 920 545 Q760 558 600 540 Q440 525 280 545 Q120 558 -40 540Z" fill="url(#hg)" opacity="0.28" />
        </svg>
      </div>

      {/* ===== LAYER 4: TREES — each independently animated ===== */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1.5deg); }
        }
        .tree-1-anim { animation: sway 6s ease-in-out infinite; transform-origin: 853px 700px; }
        .tree-2-anim { animation: sway 7s ease-in-out infinite 2s; transform-origin: 1052px 700px; }
        .tree-3-anim { animation: sway 8s ease-in-out infinite 1s; transform-origin: 1242px 700px; }
        .palm-anim { animation: sway 7s ease-in-out infinite 3s; transform-origin: 380px 700px; }
      `}</style>

      {/* Tree 1 — tall center-right */}
      <div className="absolute top-0 left-0 w-full h-full hero-tree-1">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g className="tree-1-anim">
            <rect x="848" y="200" width="10" height="300" rx="5" fill="#8A8070" />
            <ellipse cx="853" cy="165" rx="58" ry="72" fill="#7D9A2F" />
            <ellipse cx="843" cy="180" rx="48" ry="60" fill="#5C6F2D" />
            <ellipse cx="858" cy="150" rx="42" ry="55" fill="#4A5A24" />
          </g>
        </svg>
      </div>

      {/* Tree 2 — shorter right */}
      <div className="absolute top-0 left-0 w-full h-full hero-tree-2">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g className="tree-2-anim">
            <rect x="1048" y="280" width="8" height="320" rx="4" fill="#8A8070" />
            <ellipse cx="1052" cy="248" rx="50" ry="60" fill="#7D9A2F" />
            <ellipse cx="1042" cy="260" rx="40" ry="50" fill="#5C6F2D" />
            <ellipse cx="1056" cy="238" rx="36" ry="46" fill="#4A5A24" />
          </g>
        </svg>
      </div>

      {/* Orange fruit tree — far right */}
      <div className="absolute top-0 left-0 w-full h-full hero-tree-3">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g className="tree-3-anim">
            <rect x="1238" y="250" width="9" height="450" rx="4.5" fill="#8A8070" />
            <ellipse cx="1242" cy="212" rx="54" ry="64" fill="#7D9A2F" />
            <ellipse cx="1232" cy="226" rx="44" ry="54" fill="#5C6F2D" />
            <ellipse cx="1248" cy="202" rx="40" ry="50" fill="#4A5A24" />
            <circle cx="1218" cy="198" r="6" fill="#E8833A" />
            <circle cx="1260" cy="213" r="6" fill="#E8833A" />
            <circle cx="1238" cy="188" r="5" fill="#D4722E" />
            <circle cx="1268" cy="233" r="5.5" fill="#E8833A" />
            <circle cx="1213" cy="223" r="5" fill="#D4722E" />
            <circle cx="1248" cy="178" r="4.5" fill="#E8833A" />
          </g>
        </svg>
      </div>

      {/* Palm tree — left of center */}
      <div className="absolute top-0 left-0 w-full h-full hero-palm">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g className="palm-anim">
            <path d="M380 700 Q385 500 390 380" stroke="#8A8070" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M390 380 Q340 305 275 318" stroke="#5C6F2D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M390 380 Q348 285 305 288" stroke="#4A5A24" strokeWidth="3.8" fill="none" strokeLinecap="round" />
            <path d="M390 380 Q425 300 465 312" stroke="#5C6F2D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M390 380 Q435 288 475 293" stroke="#4A5A24" strokeWidth="3.8" fill="none" strokeLinecap="round" />
            <path d="M390 380 Q390 295 392 265" stroke="#3E5422" strokeWidth="3.2" fill="none" strokeLinecap="round" />
            <path d="M355 338 L352 368" stroke="#8A8070" strokeWidth="1.5" />
            <rect x="345" y="368" width="14" height="18" rx="3" fill="#C9A96E" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* ===== LAYER 5: MID FOLIAGE HILLS — parallax drift ===== */}
      <div className="absolute inset-0 hero-mid-foliage">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M-40 650 Q150 598 340 628 Q540 588 740 618 Q940 590 1140 610 Q1340 588 1520 618 L1520 900 L-40 900Z" fill="#9AB545" opacity="0.32" />
          <path d="M-40 680 Q200 648 440 668 Q690 638 940 663 Q1140 643 1340 658 Q1440 652 1520 668 L1520 900 L-40 900Z" fill="#5C6F2D" opacity="0.45" />
        </svg>
      </div>

      {/* ===== LAYER 6: DENSE FOREGROUND — slow wave ===== */}
      <div className="absolute inset-0 hero-foreground">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M-40 738 Q180 708 400 728 Q620 698 840 722 Q1060 702 1280 718 Q1400 708 1520 728 L1520 900 L-40 900Z" fill="#3E5422" opacity="0.65" />
          <path d="M-40 778 Q200 758 440 773 Q680 753 920 768 Q1160 753 1380 766 Q1460 758 1520 773 L1520 900 L-40 900Z" fill="#2A3A16" opacity="0.8" />
        </svg>
      </div>

      {/* ===== LAYER 7: EDGE LEAVES — left ===== */}
      <div className="absolute inset-0 hero-leaves-left">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M-30 900 C-30 650 40 450 80 350 C90 328 100 338 95 368 C80 448 50 598 30 900Z" fill="#2A3A16" />
          <path d="M30 900 C30 678 90 498 130 398 C140 373 150 378 145 408 C130 488 90 648 70 900Z" fill="#3E5422" />
          <path d="M-15 900 C-15 698 18 518 48 428 C56 408 63 413 58 438 C43 518 18 678 8 900Z" fill="#1E2E10" />
          <path d="M100 418 Q58 348 38 298" stroke="#5C6F2D" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M100 418 Q132 348 152 308" stroke="#5C6F2D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M100 418 Q100 338 100 288" stroke="#4A5A24" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* ===== LAYER 7b: EDGE LEAVES — right ===== */}
      <div className="absolute inset-0 hero-leaves-right">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M1460 900 C1460 678 1408 498 1378 398 C1370 373 1361 380 1366 408 C1383 488 1418 658 1438 900Z" fill="#2A3A16" />
          <path d="M1490 900 C1490 698 1438 528 1408 428 C1400 406 1393 413 1398 438 C1413 518 1448 688 1468 900Z" fill="#3E5422" />
          <path d="M1398 378 Q1438 298 1460 248" stroke="#5C6F2D" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M1398 378 Q1368 308 1348 268" stroke="#5C6F2D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* ===== LAYER 8: BOTTOM CORNER PLANTS ===== */}
      <div className="absolute inset-0 hero-bottom-plants">
        <svg viewBox="0 -220 1440 1120" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <path d="M-20 900 C-20 818 30 758 60 728 C70 718 75 726 70 743 C55 778 20 838 10 900Z" fill="#1E2E10" />
          <path d="M40 900 C40 828 80 768 110 743 C118 736 123 743 118 756 C105 788 70 848 60 900Z" fill="#2A3A16" />
          <path d="M130 900 C130 848 155 800 172 778 C177 772 182 777 179 788 C172 808 148 858 143 900Z" fill="#1E2E10" opacity="0.8" />
          <path d="M1460 900 C1460 828 1418 778 1393 753 C1386 746 1381 753 1385 766 C1396 793 1428 848 1438 900Z" fill="#1E2E10" />
          <path d="M1398 900 C1398 843 1368 798 1348 778 C1342 772 1338 778 1342 790 C1353 813 1378 858 1383 900Z" fill="#2A3A16" />
          {/* Berries */}
          <circle cx="1368" cy="818" r="4" fill="#CD412B" opacity="0.7" />
          <circle cx="1378" cy="813" r="3" fill="#CD412B" opacity="0.5" />
          <circle cx="100" cy="808" r="3.5" fill="#E8833A" opacity="0.6" />
          <circle cx="1395" cy="828" r="2.5" fill="#CD412B" opacity="0.5" />
          <circle cx="200" cy="843" r="3" fill="#E8833A" opacity="0.4" />
        </svg>
      </div>

      {/* ===== LAYER 9: FLOATING PARTICLES — leaves drifting ===== */}
      <div className="absolute top-[12%] left-[12%] hero-leaf-drift-1">
        <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
          <path d="M14 2 Q24 9 20 22 Q17 31 14 35 Q11 31 8 22 Q4 9 14 2Z" fill="#5C6F2D" opacity="0.18" />
        </svg>
      </div>
      <div className="absolute top-[22%] right-[28%] hero-leaf-drift-2">
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
          <path d="M11 2 Q19 7 16 18 Q14 24 11 27 Q8 24 6 18 Q3 7 11 2Z" fill="#7D9A2F" opacity="0.15" />
        </svg>
      </div>
      <div className="absolute top-[30%] left-[50%] hero-leaf-drift-3">
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
          <path d="M9 1 Q15 5 13 14 Q11 19 9 21 Q7 19 5 14 Q3 5 9 1Z" fill="#5C6F2D" opacity="0.12" />
        </svg>
      </div>

      {/* ===== LAYER 10: BIRDS ===== */}
      <div className="absolute top-[16%] left-[52%] hero-bird-1">
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
          <path d="M0 9 Q6 1 12 5 Q18 1 24 9" stroke="#524B44" strokeWidth="1.2" fill="none" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute top-[12%] left-[58%] hero-bird-2">
        <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
          <path d="M0 7 Q4.5 1 9 4 Q13.5 1 18 7" stroke="#524B44" strokeWidth="1" fill="none" opacity="0.18" />
        </svg>
      </div>

      {/* ===== TEXT READABILITY OVERLAY ===== */}
      <div className="absolute inset-0 bg-linear-to-r from-[#EDE5DA]/75 via-[#EDE5DA]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-[#2A3A16]/15 via-transparent to-transparent pointer-events-none" />

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-svh flex items-center pt-32 pb-20">
        <div className="max-w-[680px]">
          <h1 className="hero-animate font-serif text-[38px] sm:text-[52px] lg:text-[64px] font-medium text-brown-900 leading-[1.05] tracking-[-0.02em] mb-6">
            Transparent Legal Services for Indian Founders.
          </h1>
          <p className="hero-animate hero-animate-delay-2 text-[16px] sm:text-[18px] text-brown-600 leading-relaxed mb-10 max-w-[540px]">
            Incorporate your Pvt Ltd, manage compliance, and file returns &mdash;
            with clear fee separation and no hidden costs.
          </p>
          <div className="hero-animate hero-animate-delay-3">
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "#"}
              className="inline-flex items-center px-8 py-3.5 bg-olive-600 text-white text-[15px] font-semibold rounded-full hover:bg-olive-700 transition-all duration-300 shadow-lg shadow-olive-600/15 hover:shadow-olive-600/25 hover:-translate-y-0.5"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
