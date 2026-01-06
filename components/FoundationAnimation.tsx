import React from 'react';
import { Brain, MessageSquare, Cpu, Database, Shield, Activity, HardDrive } from 'lucide-react';

const FoundationAnimation: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-[#0A0A0A] border border-brand-border rounded-xl shadow-2xl overflow-hidden flex relative group">
      
      {/* Background Grid/Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* SVG Layer for Connections */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
          <defs>
             <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#333" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF0033" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF0033" stopOpacity="1" />
             </linearGradient>
             <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
             </filter>
          </defs>
          {/* Top Path: Model -> TiDB */}
          <path d="M 100 100 C 180 100, 200 200, 280 200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-dash opacity-50" filter="url(#glow)" />
          
          {/* Middle Path: Prompt -> TiDB */}
          <path d="M 100 200 L 280 200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-dash opacity-50" filter="url(#glow)" style={{ animationDelay: '-0.5s' }} />
          
          {/* Bottom Path: Reasoning -> TiDB */}
          <path d="M 100 300 C 180 300, 200 200, 280 200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-dash opacity-50" filter="url(#glow)" style={{ animationDelay: '-1s' }} />
        </svg>
      </div>

      {/* LEFT: Inputs (Faded) */}
      <div className="w-1/3 h-full flex flex-col justify-around py-12 pl-12 relative z-10">
          
          {/* Item 1: Model */}
          <div className="flex items-center space-x-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
             <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center">
                <Brain className="w-6 h-6 text-gray-400" />
             </div>
             <span className="text-sm font-mono font-medium text-gray-400 uppercase tracking-widest">Model</span>
          </div>

          {/* Item 2: Prompt */}
          <div className="flex items-center space-x-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
             <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-gray-400" />
             </div>
             <span className="text-sm font-mono font-medium text-gray-400 uppercase tracking-widest">Prompt</span>
          </div>

          {/* Item 3: Reasoning */}
          <div className="flex items-center space-x-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
             <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-gray-400" />
             </div>
             <span className="text-sm font-mono font-medium text-gray-400 uppercase tracking-widest">Reasoning</span>
          </div>

      </div>

      {/* RIGHT: TiDB Hub (Highlighted) */}
      <div className="flex-1 h-full flex items-center justify-center relative z-10 pr-12">
          
          {/* Central Hub */}
          <div className="relative w-64 h-64 flex items-center justify-center">
              
              {/* Core Glow */}
              <div className="absolute inset-0 bg-brand-red/20 blur-[50px] rounded-full animate-pulse-slow"></div>
              
              {/* Orbit Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Central Icon */}
              <div className="w-24 h-24 bg-[#111] border border-brand-red rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20 relative">
                  <Database className="w-10 h-10 text-brand-red drop-shadow-[0_0_10px_rgba(255,0,51,0.5)]" />
                  <div className="mt-2 text-[10px] font-bold text-white tracking-widest">TiDB X</div>
              </div>

              {/* Status Modules */}
              {/* Top: Healthy */}
              <div className="absolute -top-4 bg-[#0F0F0F] border border-green-500/20 px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-green-500 tracking-wider">HEALTHY</span>
              </div>

              {/* Bottom Right: Secure */}
              <div className="absolute bottom-4 -right-4 bg-[#0F0F0F] border border-blue-500/20 px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <Shield className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-bold text-blue-500 tracking-wider">SECURE</span>
              </div>

              {/* Bottom Left: Data Scale */}
              <div className="absolute bottom-4 -left-4 bg-[#0F0F0F] border border-purple-500/20 px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                  <HardDrive className="w-3 h-3 text-purple-500" />
                  <span className="text-xs font-bold text-purple-500 tracking-wider">100T+ DATA</span>
              </div>

          </div>

      </div>

    </div>
  );
};

export default FoundationAnimation;