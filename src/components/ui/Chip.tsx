import React from 'react';
import { cn } from '../../lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const Chip = ({ className, isActive, ...props }: ChipProps) => {
  return (
    <div
      className={cn(
        'inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200',
        isActive
          ? 'bg-zinc-900 text-white border-zinc-900'
          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50',
        className
      )}
      {...props}
    />
  );
};
