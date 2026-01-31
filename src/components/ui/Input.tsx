import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex h-12 w-full rounded-lg border-2 border-zinc-200 bg-white px-4 py-2 text-base shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[120px] w-full rounded-lg border-2 border-zinc-200 bg-white px-4 py-3 text-base shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-y',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options?: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, options, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'flex h-12 w-full appearance-none rounded-lg border-2 border-zinc-200 bg-white px-4 py-2 pr-10 text-base text-zinc-900 shadow-sm focus:outline-none focus:border-black focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
            error && 'border-red-500',
            className
          )}
          {...props}
        >
          {options ? options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )) : children}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-900 pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = 'Select';
