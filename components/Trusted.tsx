import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const Trusted = () => {
  const companies = [
    "Manus", "Dify", "Rengage", "TOPRISM", "CrowdSnap", "PLAID", "Catalyst", "OMNICONVERT"
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-[#050505] overflow-hidden relative group">
      {/* Subtle background atmosphere - Faint violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-violet/5 blur-[120px] pointer-events-none opacity-50"></div>

      <ScrollReveal delay="0.1s" width="full">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse"></span>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                Trusted by AI Pioneers
             </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay="0.2s" width="full">
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks - seamlessly blending with bg-[#050505] */}
          <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Container */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center py-4">
            {/* Loop twice for seamless infinite scroll */}
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center space-x-20 md:space-x-32 pr-20 md:pr-32 shrink-0">
                {companies.map((company, index) => (
                  <span 
                    key={`${i}-${index}`} 
                    className={`text-2xl md:text-4xl font-bold tracking-tight transition-all duration-500 cursor-default select-none
                      ${company === 'Manus' 
                        ? 'text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-105' 
                        : 'text-[#333] hover:text-[#888] hover:scale-105'
                      }
                    `}
                  >
                    {company}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Trusted;