import React from 'react';
import { cn } from './Button';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('animate-pulse rounded-md bg-bg-hover', className)}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';
