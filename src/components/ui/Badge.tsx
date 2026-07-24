import React from 'react';
import { cn } from './Button';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'new' | 'learning' | 'reviewing' | 'mastered' | 'info' | 'success' | 'warning' | 'danger';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'info', children, ...props }, ref) => {
    const variants = {
      new: 'bg-mastery-new/20 text-mastery-new border-mastery-new/30',
      learning: 'bg-mastery-learning/20 text-mastery-learning border-mastery-learning/30',
      reviewing: 'bg-mastery-reviewing/20 text-mastery-reviewing border-mastery-reviewing/30',
      mastered: 'bg-mastery-mastered/20 text-mastery-mastered border-mastery-mastered/30',
      info: 'bg-accent-info/20 text-accent-info border-accent-info/30',
      success: 'bg-accent-success/20 text-accent-success border-accent-success/30',
      warning: 'bg-accent-warning/20 text-accent-warning border-accent-warning/30',
      danger: 'bg-accent-danger/20 text-accent-danger border-accent-danger/30',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
