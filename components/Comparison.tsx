import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const Comparison = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Visualization */}
        <ScrollReveal delay="0.2s">
          <div className="relative">
              {/* Box Container */}
              <div className="bg-[#121212] p-8 rounded-lg border border-brand-border shadow-2xl relative z-10">
                  <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-white">Built for High-Throughput Agent Workloads</h3>
                      <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">10M Vectors • 2k QPS • Mixed Read/Write</p>
                  </div>

                  <div className="space-y-6">
                      {/* TiDB Bar */}
                      <div className="space-y-2">
                          <div className="flex justify-between text-sm font-medium">
                              <span className="text-white">TiDB X Serverless</span>
                              <span className="text-brand-red font-bold">$320 / mo</span>
                          </div>
                          <div className="h-8 w-full bg-[#1A1A1A] rounded overflow-hidden">
                              <div className="h-full bg-brand-red w-[25%] rounded relative group">
                                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </div>
                          </div>
                      </div>

                      {/* Others Bar */}
                      <div className="space-y-2">
                          <div className="flex justify-between text-sm font-medium">
                              <span className="text-gray-400">Specialized Vector DB + RDS</span>
                              <span className="text-gray-400">$1,280 / mo</span>
                          </div>
                          <div className="h-8 w-full bg-[#1A1A1A] rounded overflow-hidden">
                              <div className="h-full bg-gray-600 w-full rounded"></div>
                          </div>
                      </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-border text-center">
                     <p className="text-3xl font-bold text-white">You save: <span className="text-brand-red">75%</span></p>
                     <p className="text-sm text-gray-500 mt-1">by eliminating data duplication and complex ETL.</p>
                  </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-border/30 rounded-tr-xl -z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-border/30 rounded-bl-xl -z-0"></div>
          </div>
        </ScrollReveal>

        {/* Right: Text */}
        <ScrollReveal delay="0.4s">
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Lower Complexity,<br/> Not Your Velocity.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Managing a separate vector database for memory and a relational database for application logic creates synchronization nightmares and doubles your infrastructure costs.
              </p>
              <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-green-900/30 border border-green-800 flex items-center justify-center text-green-500 mr-4 text-xs">✓</span>
                      <span className="text-gray-300">Single source of truth for all agent data</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-green-900/30 border border-green-800 flex items-center justify-center text-green-500 mr-4 text-xs">✓</span>
                      <span className="text-gray-300">Zero-ETL pipeline for embeddings</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-green-900/30 border border-green-800 flex items-center justify-center text-green-500 mr-4 text-xs">✓</span>
                      <span className="text-gray-300">Pay only for stored data and request units</span>
                  </li>
              </ul>
              <a href="#" className="text-brand-red font-bold hover:text-white transition-colors inline-flex items-center">
                  Estimate Your Cost <span className="ml-2">→</span>
              </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Comparison;