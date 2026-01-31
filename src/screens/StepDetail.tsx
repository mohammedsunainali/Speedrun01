import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { ChevronLeft, Lock, ArrowRight, HelpCircle, Save } from 'lucide-react';

interface StepDetailProps {
  stepId: string; // '1' or '2' for now
  onBack: () => void;
  onComplete: () => void;
}

const STEP_CONFIG = {
  '1': {
    title: 'Problem Clarity',
    whyItMatters: 'Startups die because they build things no one wants. Is the problem acute?',
    questions: [
      { id: 'q1', label: 'What is the specific pain point?', type: 'textarea', placeholder: 'e.g. Small businesses lose 10 hours/week on manual invoicing.' },
      { id: 'q2', label: 'Why is it unsolved?', type: 'textarea', placeholder: 'e.g. Existing tools are too enterprise-focused and expensive.' },
      { id: 'q3', label: 'Urgency Level (1-10)', type: 'input', placeholder: '8' }
    ]
  },
  '2': {
    title: 'Customer Clarity (ICP)',
    whyItMatters: 'You can\'t sell to "everyone". Narrow down to a specific persona.',
    questions: [
      { id: 'q1', label: 'Who is the decision maker?', type: 'input', placeholder: 'e.g. CTO of Series A Fintech' },
      { id: 'q2', label: 'Where do they hang out?', type: 'textarea', placeholder: 'e.g. Hacker News, specific Subreddits, closed Discords' },
      { id: 'q3', label: 'Budget Authority', type: 'dropdown', options: ['None', '< $1k', '$1k - $10k', '> $10k'] }
    ]
  }
};

export const StepDetail = ({ stepId, onBack, onComplete }: StepDetailProps) => {
  const config = STEP_CONFIG[stepId as keyof typeof STEP_CONFIG] || STEP_CONFIG['1'];
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-32">
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-10">
          <Button variant="ghost" size="sm" onClick={onBack} className="-ml-4 mb-4 text-zinc-500 hover:text-black">
            <ChevronLeft className="h-4 w-4 mr-2" /> Back to Journey
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="font-mono text-xs uppercase bg-white">STEP {stepId}</Badge>
            <Badge variant="warning" className="bg-yellow-100 text-yellow-900 border-yellow-900 border font-bold uppercase tracking-wide">In Progress</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">{config.title}</h1>
          <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl flex gap-3 max-w-2xl">
             <div className="shrink-0 mt-0.5">
               <HelpCircle className="h-5 w-5 text-blue-700" />
             </div>
             <p className="text-blue-900 font-medium leading-relaxed text-sm md:text-base">
               {config.whyItMatters}
             </p>
          </div>
        </div>

        {/* Form Area */}
        <Card variant="window" className="bg-white shadow-lg">
           <div className="p-8 space-y-10">
              {config.questions.map((q, i) => (
                <div key={q.id} className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <label className="text-lg font-bold text-black flex gap-3">
                       <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs font-mono">{i + 1}</span>
                       {q.label}
                    </label>
                  </div>
                  
                  {q.type === 'textarea' ? (
                    <Textarea 
                      placeholder={q.placeholder}
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                      className="min-h-[120px] bg-zinc-50 focus:bg-white text-lg font-medium"
                    />
                  ) : q.type === 'dropdown' ? (
                    <select 
                      className="w-full h-12 rounded-lg border-2 border-zinc-200 bg-zinc-50 px-4 text-base font-medium focus:outline-none focus:border-black focus:ring-0 transition-colors"
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                    >
                      <option value="" disabled>Select an option</option>
                      {q.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <Input 
                      placeholder={q.placeholder}
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                      className="bg-zinc-50 focus:bg-white text-lg font-medium"
                    />
                  )}
                </div>
              ))}
           </div>
        </Card>

      </div>

      {/* Footer / Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-zinc-200 z-50 md:static md:bg-transparent md:border-0 md:p-0 md:mt-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
             <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
             Unsaved Changes
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <Button variant="secondary" className="flex-1 md:flex-none gap-2" onClick={onBack}>
               <Save className="h-4 w-4" /> Save Draft
            </Button>
            <Button className="flex-1 md:flex-none gap-2 min-w-[160px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all" onClick={onComplete}>
               Lock Decision <Lock className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
