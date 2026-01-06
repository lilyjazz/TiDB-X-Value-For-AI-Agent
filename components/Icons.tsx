import React from 'react';

export const TiDBLogo = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.5 12.8L19.8 8.9L13.1 12.8V20.5L19.8 24.4L26.5 20.5V12.8Z" fill="#FF0033"/>
    <path d="M19.8 24.4L13.1 28.3L6.4 24.4V16.7L13.1 12.8V20.5L19.8 24.4Z" fill="#C7002B"/>
    <path d="M13.1 12.8L19.8 8.9L26.5 12.8L33.2 8.9L19.8 1.1L6.4 8.9L13.1 12.8Z" fill="#FF3355"/>
    <text x="42" y="26" fill="white" fontSize="22" fontWeight="bold" fontFamily="Inter, sans-serif">TiDB <tspan fill="#FF0033">X</tspan></text>
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