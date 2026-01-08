import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const Trusted = () => {
  const companies = [
    "Manus", "Dify", "Rengage", "TOPRISM", "CrowdSnap", "PLAID", "Catalyst", "OMNICONVERT"
  ];

  return (
    <section className="py-16 border-b border-brand-border bg-black overflow-hidden relative">
      <ScrollReveal delay="0.1s" width="full">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Trusted by AI Pioneers
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay="0.2s" width="full">
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Container */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First Set - Note padding-right to match space-x gap */}
            <div className="flex items-center space-x-16 md:space-x-24 pr-16 md:pr-24 shrink-0">
              {companies.map((company, index) => (
                <span key={`a-${index}`} className={`text-xl md:text-2xl font-bold font-sans transition-colors cursor-default whitespace-nowrap ${company === 'Manus' ? 'text-white' : 'text-gray-600 hover:text-gray-300'}`}>
                  {company}
                </span>
              ))}
            </div>
            {/* Duplicate Set */}
            <div className="flex items-center space-x-16 md:space-x-24 pr-16 md:pr-24 shrink-0">
              {companies.map((company, index) => (
                <span key={`b-${index}`} className={`text-xl md:text-2xl font-bold font-sans transition-colors cursor-default whitespace-nowrap ${company === 'Manus' ? 'text-white' : 'text-gray-600 hover:text-gray-300'}`}>
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Trusted;