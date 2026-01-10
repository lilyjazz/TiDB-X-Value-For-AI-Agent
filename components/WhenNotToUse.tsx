import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, ArrowRight, Ban } from 'lucide-react';

const WhenNotToUse = () => {
  const avoidPoints = [
    "Workload is small, stable, single-tenant → MySQL / Aurora is enough",
    "Data size < 20TB, Single table rows < 50M → MySQL / Aurora is enough",
    "Schema is rarely changed → Online DDL is unnecessary",
    "No rapid business growth expectation → Vertical scaling suffices",
    "No dynamic, multi-agent workflows → Isolation & flexibility underused"
  ];

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal width="full">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-block mb-4">
                        <span className="py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 uppercase tracking-widest">
                            Honest Assessment
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        When <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-600">NOT</span> to Use TiDB X
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        TiDB X is powerful, but only when systems outgrow traditional assumptions.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
                {/* Avoid Section - Styled as "Standard/Traditional" zone */}
                <div className="lg:col-span-7">
                    <ScrollReveal delay="0.1s" className="h-full">
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 md:p-12 h-full hover:border-white/20 transition-colors duration-500 group flex flex-col justify-center">
                            <div className="flex items-center space-x-4 mb-10">
                                <div className="w-12 h-12 rounded-full bg-gray-900/50 flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors">
                                  <Ban className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-200">Avoid TiDB X if...</h3>
                            </div>
                            <ul className="space-y-6">
                                {avoidPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start group/item">
                                        {/* Custom bullet point */}
                                        <div className="mt-2.5 mr-5 shrink-0 relative">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover/item:bg-gray-500 transition-colors"></div>
                                        </div>
                                        <span className="text-gray-400 text-lg leading-relaxed group-hover/item:text-gray-300 transition-colors duration-300">
                                            {point.split('→').map((part, i) => (
                                                <span key={i} className={i === 1 ? "text-gray-500 text-sm block mt-1 font-mono tracking-wide" : ""}>
                                                    {i === 1 ? "→ " + part : part}
                                                </span>
                                            ))}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Rule of Thumb Section - Styled as "Future/Evolution" zone */}
                <div className="lg:col-span-5">
                    <ScrollReveal delay="0.2s" className="h-full">
                        <div className="h-full relative overflow-hidden rounded-2xl border border-brand-red/20 group">
                            {/* Dynamic Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#150505] to-[#050000] z-0"></div>
                            <div className="absolute top-0 right-0 w-full h-full bg-brand-red/5 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-10 md:p-12 flex flex-col h-full justify-between">
                                <div>
                                    <div className="inline-flex items-center space-x-2 mb-8 bg-brand-red/10 border border-brand-red/20 rounded-full px-3 py-1">
                                        <CheckCircle2 className="w-4 h-4 text-brand-red" />
                                        <span className="font-bold uppercase tracking-widest text-xs text-brand-red">Rule of Thumb</span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-white leading-[1.2] mb-6">
                                        When growth demands evolution, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-amber">TiDB X is the answer.</span>
                                    </h3>
                                    
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Don't optimize prematurely. But when the ceiling hits, migrate to the architecture built for scale.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <a href="https://www.pingcap.com/blog/tidbx-origins-architecture/" target="_blank" rel="noopener noreferrer" className="group/link flex items-center text-white font-medium hover:text-brand-red transition-colors">
                                        <span className="border-b border-white/20 pb-0.5 group-hover/link:border-brand-red transition-colors">Read the Architecture Guide</span>
                                        <ArrowRight className="w-5 h-5 ml-3 transform group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhenNotToUse;