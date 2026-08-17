import { Activity, ArrowDown, ArrowUp, CirclePause, Eye, EyeOff, Hand, Trash2 } from 'lucide-react';
import { VisualFrame } from './VisualFrame';

interface MobileTimelineProps {
  nodes?: string[];
}

const lifecycleDetails: Record<string, { description: string; icon: typeof Activity; color: string }> = {
  onCreate: { description: 'Initialize state and inflate the user interface.', icon: Activity, color: 'border-blue-500/50 bg-blue-500/10 text-blue-200' },
  onStart: { description: 'The activity becomes visible.', icon: Eye, color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-200' },
  onResume: { description: 'The activity enters the foreground and accepts input.', icon: Hand, color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200' },
  onPause: { description: 'The activity loses focus; pause short-lived work.', icon: CirclePause, color: 'border-amber-500/50 bg-amber-500/10 text-amber-200' },
  onStop: { description: 'The activity is no longer visible.', icon: EyeOff, color: 'border-orange-500/50 bg-orange-500/10 text-orange-200' },
  onDestroy: { description: 'Final cleanup before this activity instance is removed.', icon: Trash2, color: 'border-rose-500/50 bg-rose-500/10 text-rose-200' },
};

export function MobileTimeline({ nodes = Object.keys(lifecycleDetails) }: MobileTimelineProps) {
  return (
    <VisualFrame
      title="Android activity lifecycle"
      description="The main path moves from creation to foreground use, then through pause and stop before destruction. A paused activity can resume, and a stopped activity can start again instead of being destroyed."
    >
      <ol className="mx-auto max-w-xl" aria-label="Android lifecycle callback order">
        {nodes.map((node, index) => {
          const detail = lifecycleDetails[node] ?? { description: 'Android invokes this lifecycle callback.', icon: Activity, color: 'border-border-default bg-bg-base text-text-primary' };
          const Icon = detail.icon;
          return (
            <li key={node}>
              <div className={`rounded-lg border p-3 ${detail.color}`}>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-mono font-semibold">{node}()</p>
                    <p className="mt-1 text-sm text-text-secondary">{detail.description}</p>
                  </div>
                </div>
              </div>
              {index < nodes.length - 1 && (
                <div className="flex h-8 items-center justify-center text-text-tertiary" aria-hidden="true"><ArrowDown className="h-5 w-5" /></div>
              )}
            </li>
          );
        })}
      </ol>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-text-secondary">
          <ArrowUp className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" /> onPause() can return to onResume().
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-text-secondary">
          <ArrowUp className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" /> onStop() can return through onStart().
        </div>
      </div>
    </VisualFrame>
  );
}
