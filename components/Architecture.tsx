import React from 'react';
import { Layers, RefreshCw, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const Architecture = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-20">
            <h4 className="text-brand-red font-mono text-sm mb-4">ARCHITECTURE</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Cloud-Native, Unified <br /> Architecture for <span className="text-gray-500">Real-Time Scale</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Stop stitching together Pinecone for vectors and Postgres for metadata. TiDB X gives you a single distributed SQL engine that scales storage and compute independently.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <ScrollReveal delay="0.1s">
            <div className="group p-8 border border-brand-border rounded-lg bg-brand-card hover:border-brand-red/50 transition-colors h-full">
              <div className="w-12 h-12 bg-brand-red/10 rounded flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unified Storage</h3>
              <p className="text-gray-400 leading-relaxed">
                Store high-dimensional vector embeddings alongside relational user data. Perform JOINs between "memory" and "transactional" tables in a single query.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay="0.2s">
            <div className="group p-8 border border-brand-border rounded-lg bg-brand-card hover:border-brand-red/50 transition-colors h-full">
              <div className="w-12 h-12 bg-brand-red/10 rounded flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Updates</h3>
              <p className="text-gray-400 leading-relaxed">
                Unlike traditional vector DBs that require re-indexing, TiDB X supports real-time INSERT/UPDATE/DELETE operations on vectors with immediate consistency.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay="0.3s">
            <div className="group p-8 border border-brand-border rounded-lg bg-brand-card hover:border-brand-red/50 transition-colors h-full">
              <div className="w-12 h-12 bg-brand-red/10 rounded flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Built on the battle-tested TiKV engine. Get role-based access control (RBAC), encryption at rest/transit, and full compliance for your enterprise agents.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Decorative Grid Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent opacity-50"></div>
    </section>
  );
};

export default Architecture;