import React from 'react';

const colors = {
  bg: '#121212',
  card: '#1E1E1E',
  border: '#333',
  brand: '#FF0033',
  text: '#888',
  textLight: '#DDD',
  problem: '#EF4444', // Red
  solution: '#10B981', // Emerald
};

// ==========================================
// SCALABILITY
// ==========================================

export const ScalabilityProblem = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-black/20 rounded-lg border border-white/5">
    {/* Shard 1 */}
    <rect x="40" y="30" width="80" height="60" rx="4" fill={colors.card} stroke={colors.border} />
    <text x="80" y="65" fontSize="10" fill={colors.text} textAnchor="middle">SHARD A</text>
    
    {/* Shard 2 */}
    <rect x="200" y="30" width="80" height="60" rx="4" fill={colors.card} stroke={colors.border} />
    <text x="240" y="65" fontSize="10" fill={colors.text} textAnchor="middle">SHARD B</text>

    {/* Transaction Arrow Fails */}
    <path d="M 120 60 L 200 60" stroke={colors.problem} strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
    
    {/* X Mark */}
    <line x1="150" y1="50" x2="170" y2="70" stroke={colors.problem} strokeWidth="3" />
    <line x1="170" y1="50" x2="150" y2="70" stroke={colors.problem} strokeWidth="3" />
    
    <text x="160" y="90" fontSize="10" fill={colors.problem} textAnchor="middle" fontWeight="bold">NO ATOMICITY</text>
  </svg>
);

export const ScalabilitySolution = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-brand-red/5 rounded-lg border border-brand-red/20">
    <defs>
      <linearGradient id="gradScale" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={colors.brand} stopOpacity="0.1" />
        <stop offset="100%" stopColor={colors.brand} stopOpacity="0.3" />
      </linearGradient>
    </defs>
    
    {/* Unified Cluster */}
    <rect x="40" y="25" width="240" height="70" rx="8" fill="url(#gradScale)" stroke={colors.brand} strokeOpacity="0.5" />
    <text x="160" y="65" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">UNIFIED LOGICAL STORE</text>
    
    {/* Flowing Data */}
    <circle r="3" fill={colors.brand}>
      <animateMotion path="M 60 40 L 260 40 L 260 80 L 60 80 Z" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle r="3" fill="white">
      <animateMotion path="M 260 80 L 60 80 L 60 40 L 260 40 Z" dur="4s" repeatCount="indefinite" />
    </circle>
    
    <text x="160" y="110" fontSize="10" fill={colors.brand} textAnchor="middle" letterSpacing="1">ACID COMPLIANT</text>
  </svg>
);

// ==========================================
// DDL
// ==========================================

export const DDLProblem = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-black/20 rounded-lg border border-white/5">
    {/* Database Table */}
    <rect x="80" y="20" width="160" height="80" rx="4" fill={colors.card} stroke={colors.border} />
    <line x1="80" y1="45" x2="240" y2="45" stroke={colors.border} />
    <line x1="160" y1="20" x2="160" y2="100" stroke={colors.border} />
    
    {/* Lock Icon */}
    <rect x="145" y="50" width="30" height="24" rx="2" fill={colors.problem} />
    <path d="M 150 50 V 42 A 10 10 0 0 1 170 42 V 50" fill="none" stroke={colors.problem} strokeWidth="3" />
    
    {/* Blocked Requests */}
    <circle cx="50" cy="60" r="4" fill={colors.problem} opacity="0.8" />
    <circle cx="40" cy="60" r="4" fill={colors.problem} opacity="0.6" />
    <circle cx="30" cy="60" r="4" fill={colors.problem} opacity="0.4" />
    
    <text x="160" y="95" fontSize="10" fill={colors.problem} textAnchor="middle" fontWeight="bold">TABLE LOCKED</text>
  </svg>
);

export const DDLSolution = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-brand-red/5 rounded-lg border border-brand-red/20">
    {/* Database Table Morphing */}
    <rect x="60" y="25" width="200" height="70" rx="4" fill={colors.card} stroke={colors.border}>
       <animate attributeName="width" values="200;220;200" dur="3s" repeatCount="indefinite" />
       <animate attributeName="x" values="60;50;60" dur="3s" repeatCount="indefinite" />
    </rect>
    <line x1="60" y1="50" x2="260" y2="50" stroke={colors.border} />
    
    {/* New Column Appearing */}
    <rect x="220" y="25" width="0" height="70" fill={colors.brand} opacity="0.2">
      <animate attributeName="width" values="0;40;0" dur="3s" repeatCount="indefinite" />
    </rect>

    {/* Continuous Flow */}
    <path d="M 20 60 L 300 60" stroke={colors.brand} strokeWidth="2" strokeDasharray="4 4" />
    <circle r="4" fill="white">
      <animateMotion path="M 20 60 L 300 60" dur="1.5s" repeatCount="indefinite" />
    </circle>
    
    <text x="160" y="110" fontSize="10" fill={colors.brand} textAnchor="middle" letterSpacing="1">ONLINE SCHEMA CHANGE</text>
  </svg>
);

// ==========================================
// ISOLATION
// ==========================================

export const IsolationProblem = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-black/20 rounded-lg border border-white/5">
    {/* Big Shared Container */}
    <rect x="80" y="10" width="160" height="100" rx="50" fill={colors.card} stroke={colors.border} />
    
    {/* Chaos Particles */}
    <circle cx="120" cy="40" r="5" fill="#3B82F6">
       <animate attributeName="cx" values="120;200;120" dur="2s" repeatCount="indefinite" />
       <animate attributeName="cy" values="40;80;40" dur="2.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="80" r="5" fill="#EAB308">
       <animate attributeName="cx" values="200;120;200" dur="2.1s" repeatCount="indefinite" />
       <animate attributeName="cy" values="80;40;80" dur="1.9s" repeatCount="indefinite" />
    </circle>
    <circle cx="160" cy="60" r="6" fill={colors.problem} opacity="0.8">
       <animate attributeName="r" values="6;8;6" dur="0.5s" repeatCount="indefinite" />
    </circle>

    {/* Blast Radius Lines */}
    <path d="M 160 60 L 120 40" stroke={colors.problem} strokeWidth="1" opacity="0.5" />
    <path d="M 160 60 L 200 80" stroke={colors.problem} strokeWidth="1" opacity="0.5" />
    
    <text x="160" y="105" fontSize="10" fill={colors.problem} textAnchor="middle" fontWeight="bold">NOISY NEIGHBORS</text>
  </svg>
);

export const IsolationSolution = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-brand-red/5 rounded-lg border border-brand-red/20">
    {/* Container 1 */}
    <circle cx="80" cy="60" r="35" fill="none" stroke={colors.border} strokeWidth="2" />
    <circle cx="80" cy="60" r="15" fill="#3B82F6" opacity="0.8">
      <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Container 2 */}
    <circle cx="160" cy="60" r="35" fill="none" stroke={colors.brand} strokeWidth="2" strokeOpacity="0.5" />
    <circle cx="160" cy="60" r="15" fill={colors.brand} opacity="0.8">
      <animate attributeName="r" values="15;20;15" dur="3s" begin="0.5s" repeatCount="indefinite" />
    </circle>

    {/* Container 3 */}
    <circle cx="240" cy="60" r="35" fill="none" stroke={colors.border} strokeWidth="2" />
    <circle cx="240" cy="60" r="15" fill="#EAB308" opacity="0.8">
      <animate attributeName="r" values="15;20;15" dur="3s" begin="1s" repeatCount="indefinite" />
    </circle>
    
    <text x="160" y="112" fontSize="10" fill={colors.brand} textAnchor="middle" letterSpacing="1">HARD ISOLATION</text>
  </svg>
);

// ==========================================
// CONTEXT
// ==========================================

export const ContextProblem = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-black/20 rounded-lg border border-white/5">
    {/* Silo 1: S3 */}
    <rect x="40" y="30" width="40" height="40" rx="4" fill={colors.card} stroke={colors.border} />
    <text x="60" y="85" fontSize="9" fill={colors.text} textAnchor="middle">S3</text>

    {/* Silo 2: Vector DB */}
    <rect x="140" y="30" width="40" height="40" rx="4" fill={colors.card} stroke={colors.border} />
    <text x="160" y="85" fontSize="9" fill={colors.text} textAnchor="middle">VECTOR</text>

    {/* Silo 3: SQL */}
    <rect x="240" y="30" width="40" height="40" rx="4" fill={colors.card} stroke={colors.border} />
    <text x="260" y="85" fontSize="9" fill={colors.text} textAnchor="middle">SQL</text>

    {/* Spaghetti Connections */}
    <path d="M 80 50 Q 110 20 140 50" fill="none" stroke={colors.text} strokeWidth="1" strokeDasharray="3 3" />
    <path d="M 180 50 Q 210 80 240 50" fill="none" stroke={colors.text} strokeWidth="1" strokeDasharray="3 3" />
    <path d="M 60 70 Q 160 100 260 70" fill="none" stroke={colors.problem} strokeWidth="1" opacity="0.6" />

    <text x="160" y="15" fontSize="10" fill={colors.problem} textAnchor="middle" fontWeight="bold">FRAGMENTED STATE</text>
  </svg>
);

export const ContextSolution = () => (
  <svg viewBox="0 0 320 120" className="w-full h-full bg-brand-red/5 rounded-lg border border-brand-red/20">
    <defs>
       <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
             <feMergeNode in="coloredBlur"/>
             <feMergeNode in="SourceGraphic"/>
          </feMerge>
       </filter>
    </defs>
    
    {/* Base Layer: SQL */}
    <path d="M 100 80 L 220 80 L 240 60 L 120 60 Z" fill={colors.card} stroke={colors.border} />
    
    {/* Middle Layer: Vector */}
    <path d="M 100 65 L 220 65 L 240 45 L 120 45 Z" fill={colors.card} stroke={colors.brand} strokeOpacity="0.5" />
    
    {/* Top Layer: App */}
    <path d="M 100 50 L 220 50 L 240 30 L 120 30 Z" fill={colors.brand} fillOpacity="0.2" stroke={colors.brand} filter="url(#glow)" />
    
    {/* Vertical Connection */}
    <line x1="170" y1="30" x2="170" y2="80" stroke="white" strokeWidth="2" opacity="0.5" />
    <circle cx="170" cy="30" r="2" fill="white" />
    <circle cx="170" cy="80" r="2" fill="white" />

    <text x="260" y="60" fontSize="10" fill={colors.brand} fontWeight="bold">SQL + VECTOR</text>
    <text x="60" y="60" fontSize="10" fill="white" fontWeight="bold">UNIFIED</text>
  </svg>
);
