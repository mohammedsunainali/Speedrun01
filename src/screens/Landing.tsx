import React from 'react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Layout, Terminal, Bot, User, Target, BarChart, Rocket, Zap, Users, BookOpen } from 'lucide-react';

const mentors = [
  {
    id: 'm1',
    name: 'Founder Compass',
    role: 'Founder clarity • Idea selection • Founder–market fit',
    desc: 'Helps you pick the right problem and direction.',
    image: 'https://images.unsplash.com/photo-1619107187499-adbfd254e9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjBjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk4NTE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-purple-200 hover:border-purple-500'
  },
  {
    id: 'm2',
    name: 'Market Analyst',
    role: 'ICP definition • Demand validation • Competitors',
    desc: 'Find who pays, why now, and what alternatives exist.',
    image: 'https://images.unsplash.com/photo-1763757321139-e7e4de128cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3Njk4NTE4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-blue-200 hover:border-blue-500'
  },
  {
    id: 'm3',
    name: 'Financial Architect',
    role: 'Pricing • Business model • Unit economics',
    desc: 'Turn the idea into a viable money machine.',
    image: 'https://images.unsplash.com/photo-1744963129109-3f3fdf8d0b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBtYW4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2OTg1MTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-green-200 hover:border-green-500'
  },
  {
    id: 'm4',
    name: 'GTM Coach',
    role: 'Launch plan • First 100 users • Distribution',
    desc: 'Design a realistic path to early traction.',
    image: 'https://images.unsplash.com/photo-1600724818416-5ee76984c8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjB0ZWNoJTIwZm91bmRlcnxlbnwxfHx8fDE3Njk4NTE4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-orange-200 hover:border-orange-500'
  },
  {
    id: 'm5',
    name: 'Brand Builder',
    role: 'Positioning • Messaging • Naming • Landing page copy',
    desc: 'Make the idea clear, sharp, and sellable.',
    image: 'https://images.unsplash.com/photo-1723195689074-724c57b01de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbiUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY5ODUxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-pink-200 hover:border-pink-500'
  }
];

interface LandingProps {
  onStart: () => void;
  onViewTemplates: () => void;
}

export const Landing = ({ onStart, onViewTemplates }: LandingProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5]">
      
      {/* HERO SECTION WITH SKY GRADIENT & GRID FLOOR */}
      <section className="relative w-full overflow-hidden border-b-2 border-zinc-200 bg-white">
        {/* Sky Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-white h-[60%] z-0" />
        
        {/* Grid Floor */}
        <div className="absolute bottom-0 w-full h-[40%] bg-grid-pattern-green opacity-40 z-0 border-t-2 border-green-100/50" />
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 flex flex-col items-center text-center">
          
          {/* Mascot + Headline Group */}
          <div className="flex flex-col items-center gap-6 max-w-4xl">
             <div className="animate-bounce-slow bg-white border-2 border-black p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                <Bot className="h-10 w-10 text-black" />
             </div>
             
             <div className="space-y-4">
               <Badge variant="neutral" className="bg-white border-black text-black font-mono tracking-widest text-xs px-3 py-1 uppercase shadow-sm">
                 v1.0 Public Beta
               </Badge>
               
               <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[1.05]">
                 Speedrun 0 <span className="text-zinc-400 font-normal">→</span> 1
                 <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                   Founder Execution AI
                 </span>
               </h1>
               
               <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
                 Go from idea confusion to a clear startup direction.
                 <br className="hidden md:block" />
                 Structured clarity. Validated in hours, not weeks.
               </p>
             </div>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
            <Button size="lg" onClick={onStart} className="w-full sm:w-auto gap-3 text-lg px-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all">
              Start a Session <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary" onClick={onViewTemplates} className="w-full sm:w-auto gap-3 text-lg px-8">
              View Templates <Layout className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-8 border-t-2 border-zinc-200/60 w-full max-w-3xl">
             <div className="flex flex-col items-center">
               <span className="text-3xl md:text-4xl font-black text-black">150+</span>
               <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider mt-1">Founders</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-3xl md:text-4xl font-black text-black">50+</span>
               <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider mt-1">Templates</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-3xl md:text-4xl font-black text-black">20+</span>
               <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider mt-1">Playbooks</span>
             </div>
          </div>

        </div>

        {/* Decorative Floating Elements (Abstract Pixels) */}
        <div className="absolute top-20 left-10 hidden lg:block opacity-20 animate-pulse">
           <div className="w-12 h-12 border-2 border-black bg-yellow-200" />
        </div>
        <div className="absolute bottom-40 right-10 hidden lg:block opacity-20 animate-pulse delay-700">
           <div className="w-16 h-16 border-2 border-black bg-purple-200 rounded-full" />
        </div>
      </section>

      {/* MENTORS SECTION */}
      <section className="px-6 py-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-3xl font-black text-zinc-900">Your Mentors</h3>
            <p className="text-zinc-500 mt-2 text-lg">AI-powered personas ready to grill your idea.</p>
          </div>
          <Badge variant="retro" className="hidden md:inline-flex">AI SQUAD</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mentors.map((m) => (
            <Card 
              key={m.id} 
              className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:-translate-y-2",
                m.color
              )}
              density="compact"
              variant="outline"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 border-b-2 border-zinc-100 group-hover:border-zinc-900/10 transition-colors">
                 <img 
                   src={m.image} 
                   alt={m.name} 
                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                 />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">{m.id}</span>
                </div>
                <div>
                   <h4 className="font-black text-lg text-zinc-900 leading-tight mb-1">{m.name}</h4>
                   <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide">{m.role.split('•')[0]}</p>
                </div>
                <p className="text-sm text-zinc-600 line-clamp-3 leading-relaxed border-t border-dashed border-zinc-200 pt-3 mt-2">
                  {m.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* OS WINDOW COLLAGE / FRAMEWORK PREVIEW */}
      <section className="px-6 pb-24 max-w-7xl mx-auto w-full">
        <Card variant="window" className="bg-zinc-900 text-white p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center space-y-8 bg-zinc-50 text-zinc-900">
               <div>
                 <Badge variant="success" className="mb-4">THE FRAMEWORK</Badge>
                 <h2 className="text-4xl font-black tracking-tight mb-4">Don't just chat.<br/>Build structured artifacts.</h2>
                 <p className="text-lg text-zinc-600 leading-relaxed">
                   Speedrun guides you through 6 proven steps to validate your startup.
                   Stop guessing and start executing with precision.
                 </p>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  {['Problem Clarity', 'Customer ICP', 'Market Validation', 'MVP Scope', 'Monetization', 'GTM Path'].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg border-2 border-zinc-100 hover:border-black hover:bg-white transition-all bg-white shadow-sm">
                      <div className="h-6 w-6 rounded bg-black text-white flex items-center justify-center text-xs font-bold font-mono">
                        {i + 1}
                      </div>
                      <span className="text-sm font-bold">{step}</span>
                    </div>
                  ))}
               </div>
               
               <div className="pt-4">
                 <Button variant="outline" className="w-full sm:w-auto border-black text-black hover:bg-zinc-100">
                   See how it works
                 </Button>
               </div>
            </div>
            
            {/* Visual Abstract Layout */}
            <div className="bg-zinc-900 p-10 relative overflow-hidden min-h-[400px]">
               {/* Decorative floating cards */}
               <div className="absolute top-12 left-12 right-[-20%] bg-zinc-800 rounded-xl border border-zinc-700 p-6 shadow-2xl opacity-80 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="h-4 w-1/3 bg-zinc-700 rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-zinc-700/50 rounded" />
                    <div className="h-2 w-5/6 bg-zinc-700/50 rounded" />
                    <div className="h-2 w-4/5 bg-zinc-700/50 rounded" />
                  </div>
               </div>
               
               <div className="absolute top-40 left-[-10%] right-12 bg-zinc-800 rounded-xl border border-zinc-700 p-6 shadow-2xl z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 border border-green-500/50" />
                    <div className="space-y-2">
                       <div className="h-3 w-24 bg-zinc-600 rounded" />
                       <div className="h-2 w-16 bg-zinc-700 rounded" />
                    </div>
                  </div>
                  <div className="h-20 bg-zinc-900/50 rounded border border-zinc-700/50 p-4">
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </Card>
      </section>

    </div>
  );
};
