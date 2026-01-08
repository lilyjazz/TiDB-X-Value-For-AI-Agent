import React from 'react';
import { ArrowRight, Network, RefreshCw, BoxSelect, BrainCircuit } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import FoundationAnimation from './FoundationAnimation';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-dark min-h-[90vh]">
      {/* Dynamic Background */}
      <NeuralBackground />

      {/* Static Background Elements (Gradients/Blobs) */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none z-0">
         {/* Large red glow for brand atmosphere */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-red blur-[150px] rounded-full opacity-20 animate-pulse-slow"></div>
        {/* Secondary subtle glow on the left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900 blur-[150px] rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Copy */}
        <div className="space-y-8">
          <div className="animate-fade-in-up w-auto" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-3 py-1 transition-colors duration-300 hover:bg-brand-red hover:border-brand-red cursor-pointer group">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse group-hover:bg-white transition-colors"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-200 group-hover:text-white transition-colors">
                Insight: The Reality of AI Scale
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              AI Agents Don’t Fail on Models. <br />
              <span className="gradient-text font-extrabold">They Fail on System Foundations.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed shadow-black drop-shadow-md">
                Agents are <span className="text-white font-semibold">long-running, stateful systems</span> where context grows indefinitely. <span className="text-white font-semibold">Rapid schema changes</span> and multi-step workflows turn early MVPs into reliability nightmares.
              </p>
              
              <div className="pl-4 border-l-2 border-brand-red/50">
                <p className="text-base text-gray-400 italic">
                  "At scale, these realities quietly turn into velocity and cost failures. <strong className="text-gray-200">So what breaks first — and why?</strong>"
                </p>
              </div>

              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide pt-2 flex items-center gap-2">
                Learn how <a href="https://www.pingcap.com/case-study/manus-agentic-ai-database-tidb/" target="_blank" rel="noopener noreferrer" className="text-white font-bold border-b border-brand-red hover:text-brand-red transition-colors">Manus</a> scaled from MVP to $100M+
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* Primary Button with Border Beam */}
              <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-black">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0033_0%,#000000_50%,#FF0033_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-black backdrop-blur-3xl transition-all group-hover:bg-gray-100">
                  Deploy Your Agent Database
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="pt-10 grid grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4">
              {/* Keyword 1: Scalability -> Unified Scale */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-brand-red/50 transition-colors mr-3 flex-shrink-0">
                  <Network className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Unified Scale</span>
              </div>

              {/* Keyword 2: Online DDL -> Schema Agility */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-brand-red/50 transition-colors mr-3 flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Schema Agility</span>
              </div>

              {/* Keyword 3: Isolation -> Native Isolation */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-brand-red/50 transition-colors mr-3 flex-shrink-0">
                  <BoxSelect className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Native Isolation</span>
              </div>

              {/* Keyword 4: Context -> SQL + Vector */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-brand-red/50 transition-colors mr-3 flex-shrink-0">
                  <BrainCircuit className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">SQL + Vector</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual/Animation */}
        <div className="relative hidden lg:block">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <FoundationAnimation />
            {/* Abstract decoration behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-brand-red/10 to-transparent blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;