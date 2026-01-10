import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { 
  Network, 
  RefreshCw, 
  Database, 
  FileText, 
  XCircle, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { 
  ScalabilityProblem, ScalabilitySolution,
  DDLProblem, DDLSolution,
  IsolationProblem, IsolationSolution,
  ContextProblem, ContextSolution
} from './ScenarioVisuals';

const scenarios = [
  {
    id: 'scalability',
    title: 'Scalability',
    icon: Network,
    headline: 'When There Is No Stable Sharding Boundary',
    visuals: {
        problem: ScalabilityProblem,
        solution: ScalabilitySolution
    },
    reality: {
      title: 'Reality',
      points: [
        'Core tables keyed by Task ID, not User ID',
        'Workflows span users & agents',
        'Multi-step strong consistency'
      ]
    },
    breaks: {
      title: 'What Breaks',
      points: [
        'Sharding assumptions decay',
        'Complexity leaks to app logic',
        'Correctness becomes unverifiable'
      ]
    },
    solution: {
      title: 'With TiDB X',
      points: [
        'One logical system, no manual sharding',
        'Scaling handled below app layer',
        'Transactions stay ACID compliant'
      ]
    },
    takeaway: 'The database should scale with the workflow — not force the workflow to fit the database.'
  },
  {
    id: 'ddl',
    title: 'Online DDL',
    icon: RefreshCw,
    headline: 'When Schema Volatility Is the Norm',
    visuals: {
        problem: DDLProblem,
        solution: DDLSolution
    },
    reality: {
      title: 'Reality',
      points: [
        'Agent capabilities evolve daily',
        'New tools = new data shapes',
        'Schema change is frequent'
      ]
    },
    breaks: {
      title: 'What Breaks',
      points: [
        'DDL requires downtime',
        'Velocity slows due to risk',
        'Brittle JSON workarounds'
      ]
    },
    solution: {
      title: 'With TiDB X',
      points: [
        'Non-blocking online schema changes',
        'DDL is part of normal CI/CD',
        'Ship features without fear'
      ]
    },
    takeaway: 'Iteration speed is a system property — and Online DDL makes it sustainable.'
  },
  {
    id: 'isolation',
    title: 'Isolation',
    icon: Database,
    headline: 'Containing State Explosion Safely',
    visuals: {
        problem: IsolationProblem,
        solution: IsolationSolution
    },
    reality: {
      title: 'Reality',
      points: [
        'Large, heterogeneous data',
        'Schema-fluid per agent',
        'Independent evolution required'
      ]
    },
    breaks: {
      title: 'What Breaks',
      points: [
        'Shared schemas = blast radius',
        'Large payloads stress nodes',
        'Operational coupling'
      ]
    },
    solution: {
      title: 'With TiDB X',
      points: [
        'Isolated database per agent',
        'Independent schema evolution',
        'Instant cluster branching'
      ]
    },
    takeaway: 'Agent autonomy requires data isolation — without operational fragmentation.'
  },
  {
    id: 'content',
    title: 'Context',
    icon: FileText,
    headline: 'From Ephemeral Prompts to Persistent State',
    visuals: {
        problem: ContextProblem,
        solution: ContextSolution
    },
    reality: {
      title: 'Reality',
      points: [
        'Context is tool outputs & history',
        'Must be queried & replayed',
        'Long-running execution'
      ]
    },
    breaks: {
      title: 'What Breaks',
      points: [
        ' fragmented across KV/S3/DB',
        'Glue code complexity explodes',
        'Loss of transactional integrity'
      ]
    },
    solution: {
      title: 'With TiDB X',
      points: [
        'Context treated as first-class data',
        'Append-only, immutable, queryable',
        'Unified SQL + Vector storage'
      ]
    },
    takeaway: 'When context becomes data, databases must adapt — not be avoided.'
  }
];

const ScenarioCard = ({ scenario }: { scenario: typeof scenarios[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = scenario.icon;
  const ProblemVisual = scenario.visuals.problem;
  const SolutionVisual = scenario.visuals.solution;

  return (
    <div 
      className="group relative w-full h-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] grid ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* FRONT FACE: REALITY (PROBLEM) */}
        <div className="col-start-1 row-start-1 h-full w-full [backface-visibility:hidden] rounded-2xl border border-brand-border bg-[#0A0A0A] p-6 md:p-8 flex flex-col shadow-xl overflow-hidden">
           
           <div className="flex items-center space-x-3 mb-4">
             <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-800">
                <Icon className="w-4 h-4 text-gray-400" />
             </div>
             <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
           </div>

            {/* VISUAL PROBLEM */}
           <div className="w-full h-24 mb-6 shrink-0">
                <ProblemVisual />
           </div>

           <h4 className="text-gray-400 text-base mb-6 font-medium leading-snug min-h-[3rem]">
             {scenario.headline}
           </h4>

           <div className="flex-1 space-y-6">
             {/* Reality Section */}
             <div>
                <div className="flex items-center space-x-2 mb-2 text-gray-300">
                   <AlertTriangle className="w-4 h-4 text-gray-500" />
                   <span className="text-xs font-bold uppercase tracking-wider">The Reality</span>
                </div>
                <ul className="space-y-2">
                   {scenario.reality.points.map((p, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-gray-600 mt-2 mr-2 shrink-0"></span>
                        {p}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Breaks Section */}
             <div>
                <div className="flex items-center space-x-2 mb-2 text-red-400">
                   <XCircle className="w-4 h-4" />
                   <span className="text-xs font-bold uppercase tracking-wider">What Breaks</span>
                </div>
                <ul className="space-y-2">
                   {scenario.breaks.points.map((p, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400/80">
                        <span className="w-1 h-1 rounded-full bg-red-900 mt-2 mr-2 shrink-0"></span>
                        {p}
                      </li>
                   ))}
                </ul>
             </div>
           </div>

           <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-gray-500 text-xs uppercase tracking-widest group-hover:text-brand-red transition-colors">
              <span>Click to Solve</span>
              <ArrowRight className="w-4 h-4" />
           </div>
        </div>

        {/* BACK FACE: SOLUTION (WITH TIDB X) */}
        <div className="col-start-1 row-start-1 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 md:p-8 flex flex-col shadow-2xl overflow-hidden relative">
           
           {/* Elegant top accent */}
           <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-70"></div>

           <div className="flex items-center space-x-3 mb-6">
             <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-brand-red" />
             </div>
             <div>
                <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Solved with TiDB X</span>
             </div>
           </div>

            {/* VISUAL SOLUTION */}
           <div className="w-full h-24 mb-8 shrink-0">
                <SolutionVisual />
           </div>

           <div className="flex-1">
             <div className="mb-8">
                <h4 className="text-white font-bold mb-4 flex items-center text-sm uppercase tracking-wide">
                   <Database className="w-4 h-4 text-gray-500 mr-2" />
                   Architecture Shift
                </h4>
                <ul className="space-y-3">
                   {scenario.solution.points.map((p, i) => (
                      <li key={i} className="flex items-start text-sm md:text-base text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                        {p}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Minimalist Takeaway Box */}
             <div className="pl-4 border-l-2 border-brand-red/60 py-1">
                <h5 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Key Takeaway</h5>
                <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed italic">
                   "{scenario.takeaway}"
                </p>
             </div>
           </div>
           
           <div className="mt-6 pt-4 border-t border-white/5 text-center">
             <span className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">Value Unlocked</span>
           </div>
        </div>

      </div>
    </div>
  );
};

const Scenarios = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            
            {/* Optimized Label Style */}
            <div className="flex items-center justify-center space-x-4 mb-8">
               <div className="hidden md:block w-12 h-px bg-gradient-to-r from-transparent to-brand-red/40"></div>
               <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-brand-red/5 border border-brand-red/10 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(255,0,51,0.2)] hover:border-brand-red/20 transition-all duration-300">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                 </span>
                 <span className="text-brand-red font-mono text-xs font-bold tracking-[0.2em] uppercase pl-1">
                    Business Scenarios
                 </span>
               </div>
               <div className="hidden md:block w-12 h-px bg-gradient-to-l from-transparent to-brand-red/40"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              From "Workaround" to "Native"
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how TiDB X transforms the core friction points of AI agent development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {scenarios.map((scenario, index) => (
            <ScrollReveal key={scenario.id} delay={`${index * 0.1}s`} className="h-full">
              <ScenarioCard scenario={scenario} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenarios;