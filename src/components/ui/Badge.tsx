import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'neutral' | 'retro';
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-zinc-900 text-white border border-zinc-900',
    secondary: 'bg-white text-zinc-900 border border-zinc-200',
    outline: 'bg-transparent text-zinc-900 border-2 border-zinc-900 font-bold',
    success: 'bg-[#CEF242] text-black border border-black', // Lime accent
    warning: 'bg-yellow-100 text-yellow-800 border-transparent',
    neutral: 'bg-zinc-100 text-zinc-600 border border-zinc-200 font-mono',
    retro: 'bg-purple-100 text-purple-900 border-2 border-purple-900 font-mono uppercase tracking-widest',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[11px] leading-tight font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
