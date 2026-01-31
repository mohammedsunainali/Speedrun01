import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className, ...props }: TypographyProps) => (
  <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-950", className)} {...props}>
    {children}
  </h1>
);

export const H2 = ({ children, className, ...props }: TypographyProps) => (
  <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-zinc-900", className)} {...props}>
    {children}
  </h2>
);

export const H3 = ({ children, className, ...props }: TypographyProps) => (
  <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight text-zinc-900", className)} {...props}>
    {children}
  </h3>
);

export const Body = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn("leading-7 text-zinc-700", className)} {...props}>
    {children}
  </p>
);

export const Caption = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn("text-sm text-zinc-500", className)} {...props}>
    {children}
  </p>
);
