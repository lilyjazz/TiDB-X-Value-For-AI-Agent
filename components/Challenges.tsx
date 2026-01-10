import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Server, ShieldCheck, RefreshCw, GitMerge, AlertTriangle, XCircle } from 'lucide-react';

const Challenges = () => {
  return (
    <section className="py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden">
      {/* Background Decor - Subtle Red/Amber glow for "Problem" vibe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full opacity-30"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Part 1: Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-brand-red font-mono text-xs font-bold tracking-widest uppercase">The Bottleneck</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1]">
                AI Agent Core Challenges Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-amber">System Problems</span>,<br/> Not Model Problems.
              </h2>
              
              <div className="space-y-5">
                {[
                    "State is persistent, append-only, and unbounded",
                    "Workflow correctness requires strong consistency",
                    "There is no stable sharding boundary",
                    "Schema volatility and multi-modal data are the norm"
                ].map((fact, index) => (
                    <div key={index} className="flex items-start group p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-default">
                        <XCircle className="w-5 h-5 text-gray-600 mt-0.5 mr-4 shrink-0 group-hover:text-brand-red transition-colors duration-300" />
                        <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-light">{fact}</p>
                    </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="0.2s">
            <div className="relative h-full flex items-center justify-center lg:justify-end pt-8 lg:pt-0">
                {/* Glassmorphic Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl overflow-hidden group max-w-lg">
                    {/* Inner Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-red/20 blur-[50px] rounded-full group-hover:bg-brand-red/30 transition-colors duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-6 border border-brand-red/20">
                            <AlertTriangle className="w-6 h-6 text-brand-red" />
                        </div>
                        <blockquote className="text-2xl font-light text-white leading-relaxed italic">
                            "These constraints invalidate many assumptions behind traditional databases."
                        </blockquote>
                        <div className="mt-6 flex items-center space-x-3">
                             <div className="h-px w-8 bg-gray-600"></div>
                             <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">System Reality</span>
                        </div>
                    </div>
                </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Part 2: Why TiDB X */}
        <div className="border-t border-white/5 pt-20 relative">
             <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-violet/50 to-transparent blur-sm"></div>

            <ScrollReveal width="full">
                <div className="max-w-3xl mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">Why TiDB X?</h3>
                    <p className="text-xl text-gray-400 font-light">
                        Built for systems that cannot afford early architectural compromises.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "No application-level sharding", icon: Server, color: "text-brand-blue", border: "group-hover:border-brand-blue/50", bg: "group-hover:bg-brand-blue/5" },
                    { title: "Strong consistency at scale", icon: ShieldCheck, color: "text-brand-amber", border: "group-hover:border-brand-amber/50", bg: "group-hover:bg-brand-amber/5" },
                    { title: "Online schema evolution", icon: RefreshCw, color: "text-brand-violet", border: "group-hover:border-brand-violet/50", bg: "group-hover:bg-brand-violet/5" },
                    { title: "One system for heterogeneous agent data", icon: GitMerge, color: "text-brand-red", border: "group-hover:border-brand-red/50", bg: "group-hover:bg-brand-red/5" }
                ].map((item, idx) => (
                    <ScrollReveal key={idx} delay={`${0.1 + idx * 0.1}s`} className="h-full">
                        <div className={`h-full bg-[#0A0A0A] border border-white/10 p-8 rounded-xl transition-all duration-300 group flex flex-col ${item.border} hover:shadow-lg hover:-translate-y-1`}>
                            <div className={`w-14 h-14 rounded-full bg-[#151515] border border-white/5 flex items-center justify-center mb-6 transition-colors duration-300 ${item.bg}`}>
                                <item.icon className={`w-7 h-7 text-gray-400 transition-colors duration-300 ${item.color}`} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-200 group-hover:text-white leading-snug">{item.title}</h4>
                            
                            {/* Decorative line */}
                            <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className={`h-0.5 w-8 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Challenges;