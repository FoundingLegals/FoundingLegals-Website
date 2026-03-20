/* Professional abstract illustrations for the hero and section dividers.
   Uses organic shapes, gradients, and subtle patterns — not literal tree/nature art. */

export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Soft radial gradients for organic blobs */}
        <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5C6F2D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5C6F2D" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7d9a2f" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#7d9a2f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6EDC6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E6EDC6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="warmGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5E6C8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F5E6C8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5C6F2D" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#5C6F2D" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Warm ambient glow */}
      <circle cx="500" cy="250" r="300" fill="url(#warmGlow)" />

      {/* Large organic blob shapes */}
      <ellipse cx="520" cy="320" rx="240" ry="220" fill="url(#blob1)" />
      <ellipse cx="380" cy="500" rx="200" ry="180" fill="url(#blob2)" />
      <ellipse cx="600" cy="180" rx="160" ry="140" fill="url(#blob3)" />

      {/* Subtle concentric arcs — like topographic lines */}
      <circle cx="480" cy="360" r="100" stroke="#5C6F2D" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
      <circle cx="480" cy="360" r="160" stroke="#5C6F2D" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />
      <circle cx="480" cy="360" r="220" stroke="#5C6F2D" strokeWidth="0.5" strokeOpacity="0.04" fill="none" />
      <circle cx="480" cy="360" r="280" stroke="#5C6F2D" strokeWidth="0.5" strokeOpacity="0.03" fill="none" />

      {/* Abstract leaf/petal shapes — refined, not literal */}
      <path
        d="M440 200 Q500 140 540 200 Q500 260 440 200Z"
        fill="#5C6F2D"
        fillOpacity="0.06"
      />
      <path
        d="M560 350 Q620 290 660 350 Q620 410 560 350Z"
        fill="#7d9a2f"
        fillOpacity="0.05"
      />
      <path
        d="M350 420 Q410 360 450 420 Q410 480 350 420Z"
        fill="#5C6F2D"
        fillOpacity="0.04"
      />

      {/* Small dot accents */}
      <circle cx="520" cy="200" r="3" fill="#5C6F2D" fillOpacity="0.12" />
      <circle cx="620" cy="300" r="2" fill="#5C6F2D" fillOpacity="0.1" />
      <circle cx="400" cy="350" r="2.5" fill="#7d9a2f" fillOpacity="0.08" />
      <circle cx="550" cy="450" r="2" fill="#5C6F2D" fillOpacity="0.1" />
      <circle cx="480" cy="260" r="1.5" fill="#5C6F2D" fillOpacity="0.12" />
    </svg>
  );
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 L0 80Z"
        fill="#5C6F2D"
        opacity="0.04"
      />
    </svg>
  );
}

export function FloatingLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4 Q34 14 30 30 Q26 42 20 46 Q14 42 10 30 Q6 14 20 4Z"
        fill="#5C6F2D"
        opacity="0.07"
      />
      <path
        d="M20 10 L20 40"
        stroke="#5C6F2D"
        strokeWidth="0.6"
        opacity="0.1"
      />
    </svg>
  );
}
