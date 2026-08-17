import { ArrowDown, Database, Network } from 'lucide-react';
import { VisualFrame } from './VisualFrame';

interface ArchitectureExplorerProps {
  nodes?: string[];
}

export function ArchitectureExplorer({ nodes = ['CRM', 'ERP', 'Billing', 'ESB Hub'] }: ArchitectureExplorerProps) {
  const hub = nodes.find((node) => /hub|bus|broker/i.test(node)) ?? nodes[nodes.length - 1];
  const systems = nodes.filter((node) => node !== hub);

  return (
    <VisualFrame
      title="Enterprise information hub-and-spoke"
      description="CRM, ERP, and billing systems exchange enterprise-significant information through the ESB hub. The hub translates and routes messages so each system avoids a separate point-to-point connection to every other system."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {systems.map((system) => (
          <div key={system} className="flex min-h-20 items-center justify-center gap-2 rounded-lg border border-violet-500/50 bg-violet-500/10 p-3 text-center font-semibold text-violet-200">
            <Database className="h-5 w-5 shrink-0" aria-hidden="true" /> {system}
          </div>
        ))}
      </div>
      <div className="flex justify-around px-8 py-2 text-accent-info" aria-hidden="true">
        {systems.map((system) => <ArrowDown key={system} className="h-7 w-7" />)}
      </div>
      <div className="mx-auto flex min-h-24 max-w-md items-center justify-center gap-3 rounded-xl border-2 border-accent-primary bg-accent-primaryMuted/70 p-4 text-center text-lg font-bold text-text-primary shadow-lg">
        <Network className="h-7 w-7 text-text-accent" aria-hidden="true" /> {hub}
      </div>
      <p className="mt-3 text-center text-xs font-medium uppercase tracking-wider text-text-tertiary">
        Shared contracts · routing · transformation · governance
      </p>
    </VisualFrame>
  );
}
