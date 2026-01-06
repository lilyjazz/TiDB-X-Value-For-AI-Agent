import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Server, ShieldCheck, RefreshCw, GitMerge, AlertTriangle } from 'lucide-react';

const Challenges = () => {
  return (
    <section className="py-24 bg-black relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Part 1: Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <ScrollReveal>
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-brand-red font-mono text-sm tracking-widest uppercase">The Problem</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-[1.1]">
                AI Agent Core Challenges Are <span className="text-brand-red">System Problems</span>,<br/> Not Model Problems
              </h2>
              
              <div className="space-y-6">
                {[
                    "State is persistent, append-only, and unbounded",
                    "Workflow correctness requires strong consistency",
                    "There is no stable sharding boundary",
                    "Schema volatility and multi-modal data are the norm"
                ].map((fact, index) => (
                    <div key={index} className="flex items-start group">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 mr-4 group-hover:bg-brand-red transition-colors duration-300"></div>
                        <p className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300">{fact}</p>
                    </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="0.2s">
            <div className="relative h-full flex items-center pt-8 lg:pt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent blur-3xl opacity-20 pointer-events-none"></div>
                <div className="relative bg-[#080808] border border-brand-border p-10 rounded-2xl shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-2xl rounded-full group-hover:bg-brand-red/10 transition-colors duration-500"></div>
                    <div className="relative z-10">
                        <AlertTriangle className="w-10 h-10 text-brand-red mb-6" />
                        <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                            "These constraints invalidate many assumptions behind traditional databases."
                        </blockquote>
                    </div>
                </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Part 2: Why TiDB X */}
        <div className="border-t border-brand-border pt-20">
            <ScrollReveal>
                <div className="max-w-3xl mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">Why TiDB X</h3>
                    <p className="text-xl text-gray-400">
                        TiDB X is built for systems that cannot afford early architectural compromises.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "No application-level sharding", icon: Server },
                    { title: "Strong consistency at scale", icon: ShieldCheck },
                    { title: "Online schema evolution", icon: RefreshCw },
                    { title: "One system for heterogeneous agent data", icon: GitMerge }
                ].map((item, idx) => (
                    <ScrollReveal key={idx} delay={`${0.1 + idx * 0.1}s`} className="h-full">
                        <div className="h-full bg-[#0A0A0A] border border-brand-border p-6 rounded-xl hover:border-brand-red/50 transition-colors duration-300 group flex flex-col">
                            <div className="w-12 h-12 bg-[#151515] rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-red/10 transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-brand-red transition-colors duration-300" />
                            </div>
                            <h4 className="text-lg font-bold text-white leading-snug">{item.title}</h4>
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