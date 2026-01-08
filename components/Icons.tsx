import React from 'react';

export const TiDBLogo = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 4)">
      {/* Icon Group - Scaled to fit roughly 32x32px */}
      <g transform="scale(0.32)">
        {/* Red X Shape with Hexagon Center */}
        {/* The path traces the 4 points of the X connected to a central hexagon */}
        <path d="M50 30 L85 10 L67.3 40 L67.3 60 L85 90 L50 70 L15 90 L32.7 60 L32.7 40 L15 10 L50 30Z" fill="#FF0033" />
        
        {/* TI Letters - White - Centered in the hexagon */}
        <g fill="white">
          {/* T */}
          <path d="M36 38 H54 V46 H49 V62 H41 V46 H36 V38 Z" />
          {/* I */}
          <path d="M58 38 H64 V62 H58 V38 Z" />
        </g>
      </g>
    </g>
    
    {/* Text Label */}
    <text x="42" y="28" fill="white" fontSize="22" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="-0.5">TiDB <tspan fill="#FF0033">X</tspan></text>
  </svg>
);

export const CubeGrid = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400" className="opacity-30">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);
