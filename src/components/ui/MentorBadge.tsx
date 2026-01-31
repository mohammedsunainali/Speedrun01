import React from 'react';
import { cn } from '../../lib/utils';

export type MentorLevel = 'M1' | 'M2' | 'M3' | 'M4' | 'M5';

interface MentorBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  level: MentorLevel;
  label?: string; 
}

export const MentorBadge = ({ level, label, className, ...props }: MentorBadgeProps) => {
  // Retro/Retro-Premium High Contrast Styles
  const levelStyles = {
    M1: "bg-purple-100 border-2 border-purple-900 text-purple-900",
    M2: "bg-blue-100 border-2 border-blue-900 text-blue-900",
    M3: "bg-[#CEF242] border-2 border-black text-black", // Lime
    M4: "bg-orange-100 border-2 border-orange-900 text-orange-900",
    M5: "bg-pink-100 border-2 border-pink-900 text-pink-900",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold transition-all shadow-sm",
        levelStyles[level],
        className
      )}
      {...props}
    >
      <span className="font-mono font-black tracking-tight">{level}</span>
      {label && (
        <>
          <span className="h-3 w-[2px] bg-current opacity-20" />
          <span className="tracking-widest uppercase text-[10px] font-bold">{label}</span>
        </>
      )}
    </div>
  );
};
