import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: 'compact' | 'normal' | 'spacious';
  variant?: 'default' | 'outline' | 'window';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, density = 'normal', variant = 'outline', children, ...props }, ref) => {
    const densities = {
      compact: 'p-4',
      normal: 'p-6',
      spacious: 'p-8',
    };

    const variants = {
      default: 'border border-zinc-200 bg-white shadow-sm',
      outline: 'border-2 border-zinc-200 bg-white hover:border-zinc-300 transition-colors',
      window: 'border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]',
    };

    if (variant === 'window') {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl overflow-hidden flex flex-col',
                    variants[variant],
                    className
                )}
                {...props}
            >
                {/* OS Window Header */}
                <div className="h-8 bg-zinc-100 border-b-2 border-black flex items-center px-3 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-black/20" />
                </div>
                <div className={cn(densities[density])}>
                    {children}
                </div>
            </div>
        )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl text-zinc-950',
          variants[variant],
          densities[density],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
