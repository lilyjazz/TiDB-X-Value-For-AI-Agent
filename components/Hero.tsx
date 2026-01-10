import React from 'react';
import { ArrowRight, Network, RefreshCw, BoxSelect, BrainCircuit } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import FoundationAnimation from './FoundationAnimation';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-dark min-h-[90vh]">
      {/* Dynamic Background */}
      <NeuralBackground />

      {/* Static Background Elements (Gradients/Blobs) - Optimized for comfort */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
         {/* Violet/Blue Glow (Intelligence/Space) - Softens the harshness */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-violet/20 blur-[120px] rounded-full opacity-40 animate-pulse-slow"></div>
        
        {/* Deep Red Glow (Power) - Lower opacity for comfort */}
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-brand-red/10 blur-[150px] rounded-full opacity-30"></div>
        
        {/* Blue Base - Stability */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Copy */}
        <div className="space-y-8">
          <div className="animate-fade-in-up w-auto" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 hover:bg-white/10 hover:border-brand-violet/30 cursor-pointer group shadow-lg shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse group-hover:bg-brand-violet transition-colors"></span>
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
              
              <div className="pl-4 border-l-2 border-brand-violet/50">
                <p className="text-base text-gray-400 italic">
                  "At scale, these realities quietly turn into velocity and cost failures. <strong className="text-gray-200">So what breaks first — and why?</strong>"
                </p>
              </div>

              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide pt-2 flex items-center gap-2">
                Learn how <a href="https://www.pingcap.com/case-study/manus-agentic-ai-database-tidb/" target="_blank" rel="noopener noreferrer" className="text-white font-bold border-b border-brand-violet hover:text-brand-violet transition-colors">Manus</a> scaled from MVP to $100M+
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* Primary Button - White glow */}
              <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Deploy Your Agent Database
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="pt-10 grid grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4">
              {/* Keyword 1: Scalability -> Unified Scale (Blue for Stability) */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-brand-blue/10 border border-brand-blue/20 group-hover:border-brand-blue/50 transition-colors mr-3 flex-shrink-0">
                  <Network className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Unified Scale</span>
              </div>

              {/* Keyword 2: Online DDL -> Schema Agility (Violet for Magic/Change) */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-brand-violet/10 border border-brand-violet/20 group-hover:border-brand-violet/50 transition-colors mr-3 flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-brand-violet" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Schema Agility</span>
              </div>

              {/* Keyword 3: Isolation -> Native Isolation (Amber for Warning/Separation) */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-brand-amber/10 border border-brand-amber/20 group-hover:border-brand-amber/50 transition-colors mr-3 flex-shrink-0">
                  <BoxSelect className="w-5 h-5 text-brand-amber" />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Native Isolation</span>
              </div>

              {/* Keyword 4: Context -> SQL + Vector (Red for Core Power) */}
              <div className="flex items-center group cursor-default">
                <div className="p-2 rounded-md bg-brand-red/10 border border-brand-red/20 group-hover:border-brand-red/50 transition-colors mr-3 flex-shrink-0">
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
            {/* Elegant backlight for the visual */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-radial from-brand-violet/10 to-transparent blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;