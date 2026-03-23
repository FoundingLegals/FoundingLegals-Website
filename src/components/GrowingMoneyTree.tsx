export default function GrowingMoneyTree() {
  return (
    <div className="absolute top-0 left-0 w-full h-full hero-money-tree pointer-events-none">

      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <g transform="translate(0, 150)">
          <g className="hero-tree-sway">
            {/* Trunk */}
            <rect x="1250" y="250" width="12" height="450" rx="6" fill="#8A8070" />
            
            {/* Leaves */}
            <ellipse cx="1256" cy="210" rx="65" ry="80" fill="#7D9A2F" />
            <ellipse cx="1242" cy="230" rx="55" ry="65" fill="#5C6F2D" />
            <ellipse cx="1270" cy="200" rx="45" ry="55" fill="#4A5A24" />
            
            {/* Orange Fruits / Coins on the tree */}
            <circle cx="1230" cy="180" r="12" fill="#F5A623" />
            <circle cx="1260" cy="250" r="10" fill="#F5A623" />
            <circle cx="1285" cy="190" r="11" fill="#F5A623" />
            <circle cx="1260" cy="150" r="9" fill="#F5A623" />
            <circle cx="1220" cy="225" r="10" fill="#F5A623" />
            <circle cx="1250" cy="180" r="11" fill="#F5A623" />


          </g>
        </g>
      </svg>
    </div>
  );
}
