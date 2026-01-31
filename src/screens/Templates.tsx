import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Layout, Users, ShoppingCart, Globe, Wallet, ChevronRight } from 'lucide-react';

interface TemplatesProps {
  onUseTemplate: (templateId: string) => void;
}

const TEMPLATES = [
  { 
    id: 'b2b', 
    title: 'B2B SaaS', 
    icon: Layout, 
    desc: 'Recurring revenue, sales-led or PLG growth.',
    bestFor: 'Enterprise tools, Developer tools',
    time: '4-8 weeks',
    color: 'bg-purple-100 text-purple-900 border-purple-200'
  },
  { 
    id: 'consumer', 
    title: 'Consumer App', 
    icon: Users, 
    desc: 'High virality, ad-supported or subscription.',
    bestFor: 'Social, Health, Productivity',
    time: '2-4 weeks',
    color: 'bg-blue-100 text-blue-900 border-blue-200'
  },
  { 
    id: 'marketplace', 
    title: 'Marketplace', 
    icon: ShoppingCart, 
    desc: 'Connects supply and demand. Chicken & egg.',
    bestFor: 'Service booking, Rental, Gig economy',
    time: '6-12 weeks',
    color: 'bg-orange-100 text-orange-900 border-orange-200'
  },
  { 
    id: 'community', 
    title: 'Community', 
    icon: Globe, 
    desc: 'Content and connection first.',
    bestFor: 'Niche interests, Professional networks',
    time: '1-3 weeks',
    color: 'bg-green-100 text-green-900 border-green-200'
  },
  { 
    id: 'fintech', 
    title: 'Fintech', 
    icon: Wallet, 
    desc: 'Moving money, lending, or insuring.',
    bestFor: 'Payments, Banking, Crypto',
    time: '12+ weeks',
    color: 'bg-pink-100 text-pink-900 border-pink-200'
  },
];

export const Templates = ({ onUseTemplate }: TemplatesProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen bg-[#F7F7F5]">
      <div className="mb-10 max-w-2xl">
        <Badge variant="retro" className="bg-black text-white border-black mb-4">LIBRARY</Badge>
        <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Startup Templates</h1>
        <p className="text-xl text-zinc-600 font-medium leading-relaxed">
          Don't start from zero. These templates come pre-loaded with the right questions, personas, and validation strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        {TEMPLATES.map((t) => (
          <Card 
             key={t.id} 
             variant="window"
             className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group bg-white"
          >
            <div className={`p-6 border-b-2 border-zinc-100 ${t.color} bg-opacity-30`}>
                <div className="flex justify-between items-start">
                    <div className={`h-14 w-14 rounded-xl border-2 border-black flex items-center justify-center ${t.color} bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4`}>
                      <t.icon className="h-7 w-7" />
                    </div>
                    <Badge variant="outline" className="bg-white text-xs font-bold uppercase tracking-wide">{t.time}</Badge>
                </div>
                <h3 className="text-2xl font-black text-black mt-2">{t.title}</h3>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
                <p className="text-base text-zinc-600 font-medium mb-6 flex-1 leading-relaxed border-l-2 border-zinc-200 pl-4">
                    "{t.desc}"
                </p>
                
                <div className="space-y-4">
                  <div>
                     <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block mb-1">Best For</span>
                     <span className="text-sm font-bold text-black bg-zinc-100 px-2 py-1 rounded inline-block">{t.bestFor}</span>
                  </div>

                  <Button onClick={() => onUseTemplate(t.id)} className="w-full gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all">
                    Use Template <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
