import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Textarea } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { MentorBadge } from '../components/ui/MentorBadge';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, Sparkles, ChevronRight, Terminal, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../lib/utils';

interface IdeaIntakeProps {
  onBack: () => void;
  onSubmit: (data: { idea: string; background: string; blocker: string }) => void;
}

export const IdeaIntake = ({ onBack, onSubmit }: IdeaIntakeProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isRouting, setIsRouting] = useState(false);
  const [data, setData] = useState({
    idea: '',
    background: '',
    blocker: ''
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsRouting(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const isStepValid = () => {
    if (currentStep === 1) return data.idea.length > 5;
    if (currentStep === 2) return data.background.length > 5;
    if (currentStep === 3) return data.blocker.length > 5;
    return false;
  };

  if (isRouting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full bg-[#F7F7F5] px-6">
        <div className="max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center space-y-4 mb-8">
             <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl mb-4 shadow-[4px_4px_0px_0px_rgba(206,242,66,1)]">
                <Terminal className="w-6 h-6" />
             </div>
             <h2 className="text-3xl font-black text-black">Routing...</h2>
             <p className="text-zinc-500 font-medium">Analyzing inputs. Selecting mentor.</p>
          </div>
          
          <Card variant="window" className="w-full transform transition-all hover:scale-[1.02] duration-300">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3 border-b-2 border-zinc-100 pb-4">
                <Badge variant="neutral" className="uppercase tracking-widest text-[10px]">Match Found</Badge>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-purple-100 rounded-lg border-2 border-black flex items-center justify-center">
                   <span className="font-black text-xl">M1</span>
                </div>
                <div>
                  <h3 className="font-black text-xl text-black">Founder Compass</h3>
                  <p className="text-sm text-zinc-500 font-medium">Strategy & Direction</p>
                </div>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg border-2 border-zinc-200">
                <p className="text-sm font-medium text-zinc-900">
                  <span className="font-bold bg-yellow-200 px-1 mr-1">REASON:</span> 
                  "Because you're still shaping the problem/idea."
                </p>
              </div>

              <div className="pt-2">
                  <Button 
                    size="lg" 
                    className="w-full gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    onClick={() => onSubmit(data)}
                  >
                     Enter Workspace <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-center text-[10px] text-zinc-400 mt-3 font-mono">PRESS ENTER TO START</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-20">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        
        {/* Nav / Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
          <span className="hover:text-black cursor-pointer hover:underline" onClick={onBack}>Home</span>
          <span>{'>'}</span>
          <span className="text-black font-bold">New Session</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: MAIN FORM */}
            <div className="lg:col-span-8 space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-black">
                    Let's get started.
                  </h1>
                  <p className="text-lg text-zinc-600 font-medium max-w-xl">
                    Answer 3 questions to initialize your session.
                  </p>
                </div>

                {/* Progress Stepper (Horizontal) */}
                <div className="flex items-center gap-3">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all",
                            currentStep === step ? "bg-black border-black text-white" : 
                            currentStep > step ? "bg-green-100 border-black text-black" : "bg-white border-zinc-200 text-zinc-400"
                        )}>
                            <span className="font-bold font-mono text-sm">{step}</span>
                            {currentStep === step && <span className="text-xs font-bold uppercase tracking-wide ml-1">Current</span>}
                            {currentStep > step && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <Card variant="window" className="bg-white min-h-[400px] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                    <div className="p-8 space-y-8">
                        {currentStep === 1 && (
                          <div className="space-y-4 animate-in slide-in-from-right-8 fade-in duration-500">
                            <div className="space-y-1">
                              <label className="text-lg font-black text-black">Your current idea (or ideas)</label>
                              <p className="text-sm text-zinc-500 font-medium">1–3 lines is enough. Don't overthink.</p>
                            </div>
                            <Textarea 
                              placeholder="e.g. I want to build a marketplace for vintage watches because..." 
                              className="text-lg min-h-[200px] font-medium border-2 border-zinc-200 focus:border-black focus:ring-0 bg-zinc-50/50"
                              value={data.idea}
                              onChange={(e) => setData({ ...data, idea: e.target.value })}
                              autoFocus
                            />
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div className="space-y-4 animate-in slide-in-from-right-8 fade-in duration-500">
                            <div className="space-y-1">
                              <label className="text-lg font-black text-black">Your background</label>
                              <p className="text-sm text-zinc-500 font-medium">What skills / domain / unfair advantage do you have?</p>
                            </div>
                            <Textarea 
                              placeholder="e.g. 5 years in logistics, good with sales, non-technical..." 
                              className="text-lg min-h-[200px] font-medium border-2 border-zinc-200 focus:border-black focus:ring-0 bg-zinc-50/50"
                              value={data.background}
                              onChange={(e) => setData({ ...data, background: e.target.value })}
                              autoFocus
                            />
                          </div>
                        )}

                        {currentStep === 3 && (
                          <div className="space-y-4 animate-in slide-in-from-right-8 fade-in duration-500">
                            <div className="space-y-1">
                              <label className="text-lg font-black text-black">What are you stuck on right now?</label>
                              <p className="text-sm text-zinc-500 font-medium">Examples: choosing idea, pricing, first users, positioning.</p>
                            </div>
                            <Textarea 
                              placeholder="e.g. I don't know who my exact customer is..." 
                              className="text-lg min-h-[200px] font-medium border-2 border-zinc-200 focus:border-black focus:ring-0 bg-zinc-50/50"
                              value={data.blocker}
                              onChange={(e) => setData({ ...data, blocker: e.target.value })}
                              autoFocus
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-4 border-t-2 border-zinc-100">
                            {currentStep > 1 ? (
                                <Button variant="outline" onClick={handleBack} className="border-2 border-zinc-300">
                                    Back
                                </Button>
                            ) : (
                                <div /> /* Spacer */
                            )}
                            
                            <Button 
                                size="lg" 
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className="px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
                            >
                                {currentStep === 3 ? 'Start Speedrun' : 'Continue'}
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* RIGHT COLUMN: CONSOLE HELPER (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-4 pt-24">
                <div className="sticky top-24">
                    <div className="bg-black text-white rounded-xl overflow-hidden shadow-xl border-2 border-black">
                        <div className="bg-zinc-800 p-3 border-b border-zinc-700 flex items-center justify-between">
                            <span className="font-mono text-xs uppercase text-zinc-400">Framework_Guide.md</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm space-y-6">
                            <p className="text-zinc-400 leading-relaxed">
                                &gt; We will guide you through 6 steps:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-green-400">
                                    <CheckCircle2 className="w-4 h-4" /> Problem Clarity
                                </li>
                                <li className="flex items-center gap-3 text-zinc-500">
                                    <Circle className="w-4 h-4" /> Customer ICP
                                </li>
                                <li className="flex items-center gap-3 text-zinc-500">
                                    <Circle className="w-4 h-4" /> Market Validation
                                </li>
                                <li className="flex items-center gap-3 text-zinc-500">
                                    <Circle className="w-4 h-4" /> MVP Scope
                                </li>
                                <li className="flex items-center gap-3 text-zinc-500">
                                    <Circle className="w-4 h-4" /> Monetization
                                </li>
                                <li className="flex items-center gap-3 text-zinc-500">
                                    <Circle className="w-4 h-4" /> GTM Path
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-zinc-800">
                                <p className="text-zinc-500 text-xs">
                                    &gt; System ready.<br/>
                                    &gt; Waiting for input...<span className="animate-pulse">_</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
