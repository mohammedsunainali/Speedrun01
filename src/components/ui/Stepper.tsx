import React from 'react';
import { cn } from '../../lib/utils';
import { Check, Lock, Circle, ArrowRight } from 'lucide-react';

export type StepStatus = 'locked' | 'not-started' | 'in-progress' | 'completed';

export interface Step {
  id: string;
  title: string;
  description?: string;
  status: StepStatus;
}

interface StepperProps {
  steps: Step[];
  currentStepId?: string;
  onStepClick?: (stepId: string) => void;
  className?: string;
}

export const Stepper = ({ steps, currentStepId, onStepClick, className }: StepperProps) => {
  return (
    <div className={cn('relative space-y-0', className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const isActive = step.id === currentStepId;
        
        return (
          <div key={step.id} className="relative pl-8 pb-8">
            {/* Connecting Line */}
            {!isLast && (
              <div 
                className={cn(
                  "absolute left-[11px] top-8 bottom-0 w-[2px]",
                  step.status === 'completed' ? "bg-zinc-900" : "bg-zinc-200"
                )} 
              />
            )}
            
            {/* Icon/Indicator */}
            <div 
              className={cn(
                "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-200 z-10",
                step.status === 'completed' 
                  ? "bg-zinc-900 border-zinc-900 text-white" 
                  : step.status === 'in-progress'
                    ? "bg-white border-zinc-900 text-zinc-900"
                    : "bg-white border-zinc-200 text-zinc-300"
              )}
            >
              {step.status === 'completed' && <Check className="h-3 w-3" />}
              {step.status === 'in-progress' && <div className="h-2 w-2 rounded-full bg-zinc-900" />}
              {step.status === 'locked' && <Lock className="h-3 w-3" />}
              {step.status === 'not-started' && <Circle className="h-3 w-3" />}
            </div>

            {/* Content */}
            <div 
              className={cn(
                "flex flex-col gap-1 transition-opacity duration-200 cursor-pointer",
                step.status === 'locked' ? "opacity-50 cursor-not-allowed" : "opacity-100",
                isActive ? "scale-[1.02] origin-left" : ""
              )}
              onClick={() => step.status !== 'locked' && onStepClick?.(step.id)}
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  "text-sm font-semibold leading-none",
                  isActive ? "text-zinc-900" : "text-zinc-600"
                )}>
                  {step.title}
                </span>
                {isActive && <ArrowRight className="h-4 w-4 text-zinc-900" />}
              </div>
              {step.description && (
                <p className="text-sm text-zinc-500 line-clamp-2">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
