import { ReactNode, useId } from 'react';

interface VisualFrameProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function VisualFrame({ title, description, children }: VisualFrameProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="my-4 rounded-xl border border-border-subtle bg-bg-elevated p-4 sm:p-5"
    >
      <h3 id={titleId} className="text-lg font-semibold text-text-primary">{title}</h3>
      <div className="mt-5">{children}</div>
      <figcaption id={descriptionId} className="mt-4 text-sm leading-relaxed text-text-secondary">
        {description}
      </figcaption>
    </figure>
  );
}
