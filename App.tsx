import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import Challenges from './components/Challenges';
import Scenarios from './components/Scenarios';
import WhenNotToUse from './components/WhenNotToUse';
import Footer from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Challenges />
        <Scenarios />
        <WhenNotToUse />
        
        {/* Optimized CTA Section */}
        <section className="py-32 relative overflow-hidden bg-black border-t border-white/10 group">
            
            {/* Animated Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-1000 pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-50"></div>

            <ScrollReveal delay="0.2s">
              <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
                    Ready to build <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-violet">intelligent agents?</span>
                  </h2>
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                      Start with <span className="text-gray-200 font-medium">$300 of free credits</span>. No credit card required. Scale to petabytes when you are ready.
                  </p>
                  <div className="flex justify-center">
                      <a 
                        href="https://tidbcloud.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-gray-100 hover:scale-105 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.5)]"
                      >
                          Try TiDB X for Free
                          <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                      </a>
                  </div>
              </div>
            </ScrollReveal>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;