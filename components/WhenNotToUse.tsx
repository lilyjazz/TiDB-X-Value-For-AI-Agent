import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const WhenNotToUse = () => {
  const avoidPoints = [
    "Workload is small, stable, single-tenant → MySQL / Aurora is enough",
    "Data size < 20TB, Single table rows < 50M → MySQL / Aurora is enough",
    "Schema is rarely changed → Online DDL is unnecessary",
    "No rapid business growth expectation → Vertical scaling suffices",
    "No dynamic, multi-agent workflows → Isolation & flexibility underused"
  ];

  return (
    <section className="py-24 bg-[#080808] border-t border-brand-border relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal>
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h4 className="text-gray-500 font-mono text-sm mb-4 tracking-widest uppercase">Honest Assessment</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        When <span className="text-brand-red">NOT</span> to Use TiDB X
                    </h2>
                    <p className="text-xl text-gray-400">
                        TiDB X is powerful, but only when systems outgrow traditional assumptions.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Avoid Section */}
                <div className="lg:col-span-7">
                    <ScrollReveal delay="0.1s" className="h-full">
                        <div className="bg-[#121212] border border-brand-border/50 rounded-2xl p-8 md:p-12 h-full">
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
                                  <XCircle className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">Avoid TiDB X if all are met:</h3>
                            </div>
                            <ul className="space-y-6">
                                {avoidPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start text-gray-400 text-base md:text-lg">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 mr-4 shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Rule of Thumb Section */}
                <div className="lg:col-span-5">
                    <ScrollReveal delay="0.2s" className="h-full">
                        <div className="bg-gradient-to-br from-[#1A0505] to-[#0A0000] border border-brand-red/30 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden group shadow-[0_0_40px_rgba(255,0,51,0.05)]">
                            {/* Decorative blur */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-red/10 blur-[60px] rounded-full group-hover:bg-brand-red/20 transition-colors duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center space-x-2 mb-8 text-brand-red">
                                    <CheckCircle2 className="w-6 h-6" />
                                    <span className="font-bold uppercase tracking-widest text-sm">Rule of Thumb</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-10">
                                    When growth demands evolution, <span className="text-brand-red">TiDB X is the answer.</span>
                                </h3>
                                
                                <a href="https://www.pingcap.com/blog/tidbx-origins-architecture/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mt-auto group/link">
                                    <span className="border-b border-transparent group-hover/link:border-brand-red transition-all">Read the Architecture Guide</span>
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                </a>
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