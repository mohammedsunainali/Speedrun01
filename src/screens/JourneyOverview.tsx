import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Stepper, Step } from '../components/ui/Stepper';
import { ChevronLeft, Play, Flag, Lock, Trophy } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

interface JourneyOverviewProps {
  onBack: () => void;
  onContinue: () => void;
}

const STEPS: Step[] = [
  { id: '1', title: 'Problem Clarity', description: 'Define the core pain point and user urgency.', status: 'completed' },
  { id: '2', title: 'Customer ICP', description: 'Identify exactly who pays and why.', status: 'in-progress' },
  { id: '3', title: 'Market Validation', description: 'Run rapid experiments to prove demand.', status: 'not-started' },
  { id: '4', title: 'MVP Scope', description: 'Define the smallest buildable solution.', status: 'locked' },
  { id: '5', title: 'Monetization Logic', description: 'Determine pricing and unit economics.', status: 'locked' },
  { id: '6', title: 'GTM Path', description: 'Plan your first 100 user acquisition.', status: 'locked' },
];

export const JourneyOverview = ({ onBack, onContinue }: JourneyOverviewProps) => {
  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-24">
      {/* Header Background */}
      <div className="bg-white border-b-2 border-zinc-200 pt-8 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" onClick={onBack} className="-ml-4 mb-6 text-zinc-500 hover:text-black">
              <ChevronLeft className="h-4 w-4 mr-2" /> Back to Dashboard
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
               <div>
                 <div className="flex items-center gap-3 mb-2">
                    <Badge variant="retro" className="bg-purple-100 text-purple-900 border-purple-900">Session #204</Badge>
                    <span className="text-xs font-mono uppercase text-zinc-400">B2B SaaS Template</span>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black">Your Journey</h1>
                 <p className="text-lg text-zinc-600 font-medium mt-2 max-w-lg">
                    6 steps to clarity. Don't skip the hard parts.
                 </p>
               </div>
               
               <div className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl border-2 border-zinc-200">
                 <div className="text-right">
                   <span className="block text-3xl font-black text-black leading-none">16%</span>
                   <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-500">Completion</span>
                 </div>
                 <div className="h-12 w-12 rounded-full border-4 border-zinc-200 border-t-black flex items-center justify-center bg-white">
                    <Trophy className="h-5 w-5 text-black" />
                 </div>
               </div>
            </div>
          </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-8">
        <Card variant="window" className="bg-white shadow-xl mb-8">
          <div className="p-8">
             <div className="mb-6 flex items-center gap-2 border-b-2 border-zinc-100 pb-4">
                <Flag className="h-5 w-5 text-black" />
                <span className="font-bold text-sm uppercase tracking-wide">Roadmap Status</span>
             </div>
             
             {/* Note: Assuming Stepper component handles its own internal styling, 
                 but ideally we would inject custom styles there too. 
                 Since I can't see Stepper source right now, I'm wrapping it container style. */}
             <div className="pl-2">
                <Stepper 
                  steps={STEPS} 
                  currentStepId="2"
                  onStepClick={(id) => console.log('Clicked step', id)}
                />
             </div>
          </div>
        </Card>

        <div className="sticky bottom-6 left-0 right-0 z-40 px-6 md:px-0">
           <Button size="lg" className="w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all py-6 text-lg" onClick={onContinue}>
             Continue Step 2 <Play className="h-5 w-5 ml-2 fill-current" />
           </Button>
        </div>
      </div>
    </div>
  );
};
