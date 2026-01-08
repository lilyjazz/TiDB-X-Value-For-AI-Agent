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
        <section className="py-24 bg-brand-red relative overflow-hidden">
            <ScrollReveal delay="0.2s">
              <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to build intelligent agents?</h2>
                  <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
                      Start with $300 of free credits. No credit card required. Scale to petabytes when you are ready.
                  </p>
                  <div className="flex justify-center">
                      <a 
                        href="https://tidbcloud.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black text-white px-8 py-4 rounded font-bold hover:bg-gray-900 transition-all cursor-pointer"
                      >
                          Try TiDB X for Free
                      </a>
                  </div>
              </div>
            </ScrollReveal>
            {/* Background pattern for CTA */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;