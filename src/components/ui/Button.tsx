import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'retro';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const variants = {
      // Black background, white text, strong visibility
      primary: 'bg-black text-white hover:bg-zinc-800 border-2 border-transparent shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]',
      
      // White background, black 2px border, black text
      secondary: 'bg-white text-black hover:bg-zinc-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]',
      
      // Standard outline for less importance
      outline: 'bg-transparent text-zinc-900 border-2 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50',
      
      ghost: 'bg-transparent text-zinc-900 hover:bg-zinc-100 border-2 border-transparent',
      
      destructive: 'bg-red-500 text-white hover:bg-red-600 border-2 border-transparent shadow-sm',
      
      // Explicit retro accent
      retro: 'bg-[#CEF242] text-black border-2 border-black hover:bg-[#d9f95e] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]'
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs font-bold',
      md: 'h-11 px-5 text-sm font-bold',
      lg: 'h-14 px-8 text-base font-bold',
      icon: 'h-10 w-10 p-2 flex items-center justify-center',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
